# reusable-union-kit

Biblioteca de componentes Angular reutilizáveis (standalone, baseados em signals e integrados ao Signal Forms).

## Instalação

Gere o pacote no workspace da biblioteca:

```bash
npm run pack   # cria dist/reusable-union-kit/reusable-union-kit-<versão>.tgz
```

E instale no projeto consumidor:

```bash
npm install caminho/para/reusable-union-kit-<versão>.tgz
```

Ou publique na branch `dist` do repositório (`npm run publish:dist`) e instale direto do GitHub:

```bash
npm install github:viniciusalexandrre/angular-ui-components#dist
npm update reusable-union-kit   # para pegar uma publicação mais nova
```

Peer dependencies: `@angular/core`, `@angular/common`, `@angular/forms` e `@angular/router`.

## Tema (opcional)

Os componentes funcionam sem configuração extra: todas as cores têm um valor padrão. Para usar os
design tokens (tema claro/escuro), importe-os no `styles.scss` global:

```scss
@use 'reusable-union-kit/styles';
```

O tema escuro é ativado com `data-theme="dark"` no elemento `<html>`.

### Personalização

Todo componente já vem estilizado. Para mudar a aparência, cada componente expõe variáveis CSS
`--ui-<componente>-*`, que têm prioridade sobre os tokens globais:

```scss
ui-input {
  --ui-input-border-radius: 4px;
  --ui-input-focus-color: rebeccapurple;
}
```

O guia completo, com todas as variáveis de cada componente e as formas de personalizar (global,
por componente, por instância, por tema), está em [docs/ESTILOS.md](docs/ESTILOS.md).

## Uso

```ts
import { UiButton, UiInput } from 'reusable-union-kit';

@Component({
  imports: [UiInput, UiButton, FormField],
  template: `
    <ui-input id="email" label="E-mail" type="email" [formField]="form.email" />
    <button ui-button type="submit">Enviar</button>
  `,
})
export class MyComponent {}
```

Textos exibidos pelos componentes (mensagens, `aria-label`) têm padrão em português e podem ser
trocados por inputs, por exemplo `emptyText`, `loadingText`, `showPasswordLabel`, `copyLabel`.

## Componentes

Tudo é importado de `'reusable-union-kit'`. Estilos de cada um: [docs/ESTILOS.md](docs/ESTILOS.md).

| Categoria              | Componente            | Seletor                                |
| ---------------------- | --------------------- | -------------------------------------- |
| Formulário             | `UiAutocomplete`      | `<ui-autocomplete>`                    |
|                        | `UiField`             | `<ui-field>`                           |
|                        | `UiFieldset`          | `<ui-fieldset>`                        |
|                        | `UiInput`             | `<ui-input>`                           |
|                        | `UiInputPassword`     | `<ui-input-password>`                  |
|                        | `UiInputSearch`       | `<ui-input-search>`                    |
|                        | `UiOtpInput`          | `<ui-otp-input>`                       |
|                        | `UiSelect`            | `<ui-select>`                          |
| Ações e navegação      | `UiBreadcrumb`        | `<ui-breadcrumb>`                      |
|                        | `UiButton`            | `<button ui-button>` / `<a ui-button>` |
|                        | `UiCopyTextButton`    | `<ui-copy-text-button>`                |
|                        | `UiMenu`              | `<ui-menu>`                            |
|                        | `UiPagination`        | `<ui-pagination>`                      |
|                        | `UiThemeToggle`       | `<ui-theme-toggle>`                    |
| Feedback               | `UiModal`             | `<ui-modal>`                           |
|                        | `UiPopup`             | `<ui-popup>`                           |
|                        | `UiSkeleton`          | `<ui-skeleton>`                        |
| Exibição de dados      | `UiBanner`            | `<ui-banner>`                          |
|                        | `UiColumnGraph`       | `<ui-column-graph>`                    |
|                        | `UiPieChart`          | `<ui-pie-chart>`                       |
|                        | `UiTable`             | `<ui-table>` (+ `uiTableCell`, `uiTableDetail`) |
| Layouts                | `UiAuthLayout`        | `<ui-layout-auth>`                     |
|                        | `UiDashboardLayout`   | `<ui-layout-dashboard>`                |
| Utilitários            | `formatBytes`         | função                                 |
