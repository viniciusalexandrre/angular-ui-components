# Angular UI Components

Workspace Angular com uma biblioteca de componentes reutilizáveis (`reusable-union-kit`) e uma aplicação de demonstração (`showcase`).

## Estrutura

```
projects/
├── reusable-union-kit/      # Biblioteca publicável
│   ├── styles/              # Design tokens (tema claro/escuro) → @use 'reusable-union-kit/styles'
│   └── src/
│       ├── lib/components/  # Um diretório por componente (ícones ficam inline no template)
│       ├── lib/styles/      # Mixins SCSS compartilhados entre componentes
│       └── public-api.ts    # Tudo que a biblioteca expõe
└── showcase/                # App de demonstração que consome 'reusable-union-kit'
```

Convenções da biblioteca:

- Seletores usam o prefixo `ui-` (ex.: `<ui-input>`).
- Classes usam o prefixo `Ui` (ex.: `UiInput`), evitando colisões com APIs do Angular.
- Todo novo componente precisa ser exportado em `projects/reusable-union-kit/src/public-api.ts`.

## Scripts

| Comando                  | Descrição                                               |
| ------------------------ | ------------------------------------------------------- |
| `npm start`              | Sobe a showcase em `http://localhost:4200`              |
| `npm run build`          | Gera o pacote da biblioteca em `dist/reusable-union-kit` |
| `npm run watch`          | Build da biblioteca em modo watch                       |
| `npm test`               | Testes unitários da biblioteca                          |
| `npm run build:showcase` | Build da showcase                                       |
| `npm run test:showcase`  | Testes unitários da showcase                            |
| `npm run pack`           | Build + gera o `.tgz` instalável em outros projetos     |

Na showcase, o import `reusable-union-kit` aponta para o código-fonte da biblioteca (via `paths` no `tsconfig.json`), então alterações nos componentes recarregam sem precisar buildar a lib.

## Gerando um novo componente

```bash
ng generate component components/nome-do-componente --project reusable-union-kit
```

Depois, exporte-o em `projects/reusable-union-kit/src/public-api.ts`.

## Usando em outro projeto

Veja [projects/reusable-union-kit/README.md](projects/reusable-union-kit/README.md).
