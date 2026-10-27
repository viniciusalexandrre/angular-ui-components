#!/usr/bin/env bash
# Builda a library Angular e publica o conteúdo de dist/<lib> numa branch
# separada ("dist" por padrão) do mesmo repositório, sem mexer na branch main.
#
# Uso:
#   bash scripts/publish-dist.sh
#
# Depois disso, em outro projeto:
#   echo "allow-git=root" >> .npmrc   (npm 12+ bloqueia dependências git por padrão)
#   npm install github:viniciusalexandrre/angular-ui-components#dist
#   npm update reusable-union-kit   (pra pegar uma publicação mais nova depois)

set -euo pipefail

LIB_NAME="reusable-union-kit"
BRANCH="dist"
DIST_DIR="dist/${LIB_NAME}"
WORKTREE_DIR=".worktree-dist"

echo "==> Buildando ${LIB_NAME}"
ng build "${LIB_NAME}"

if [ ! -d "${DIST_DIR}" ]; then
  echo "Build não encontrado em ${DIST_DIR}. Confira o nome da lib no script." >&2
  exit 1
fi

echo "==> Preparando worktree para a branch '${BRANCH}'"
git fetch origin "${BRANCH}" 2>/dev/null || true

# Limpa um worktree de execução anterior que tenha ficado pra trás
if [ -d "${WORKTREE_DIR}" ]; then
  git worktree remove "${WORKTREE_DIR}" --force 2>/dev/null || rm -rf "${WORKTREE_DIR}"
fi

if git show-ref --verify --quiet "refs/remotes/origin/${BRANCH}"; then
  git worktree add "${WORKTREE_DIR}" "${BRANCH}"
elif git show-ref --verify --quiet "refs/heads/${BRANCH}"; then
  git worktree add "${WORKTREE_DIR}" "${BRANCH}"
else
  echo "==> Branch '${BRANCH}' ainda não existe, criando órfã (compatível com qualquer versão do Git)"
  EMPTY_TREE=$(git hash-object -t tree /dev/null)
  EMPTY_COMMIT=$(git commit-tree "${EMPTY_TREE}" -m "chore: init ${BRANCH} branch")
  git branch "${BRANCH}" "${EMPTY_COMMIT}"
  git worktree add "${WORKTREE_DIR}" "${BRANCH}"
fi

echo "==> Sincronizando build output pro worktree"
find "${WORKTREE_DIR}" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -r "${DIST_DIR}"/. "${WORKTREE_DIR}"/

cd "${WORKTREE_DIR}"
git add -A

if git diff --cached --quiet; then
  echo "==> Nada mudou desde a última publicação."
else
  VERSION=$(node -p "require('./package.json').version")
  git commit -m "chore: publish ${LIB_NAME}@${VERSION}"
  git push origin "${BRANCH}"
  echo "==> Publicado ${LIB_NAME}@${VERSION} na branch '${BRANCH}'"
fi

cd ..
git worktree remove "${WORKTREE_DIR}" --force

echo "==> Concluído."
