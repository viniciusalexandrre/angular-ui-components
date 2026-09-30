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

Peer dependencies: `@angular/core`, `@angular/common` e `@angular/forms`.

## Tema (opcional)

Os componentes funcionam sem configuração extra: todas as cores têm um valor padrão. Para usar os
design tokens (tema claro/escuro), importe-os no `styles.scss` global:

```scss
@use 'reusable-union-kit/styles';
```

O tema escuro é ativado com `data-theme="dark"` no elemento `<html>`.

### Personalização

Cada componente expõe variáveis CSS `--ui-<componente>-*`, que têm prioridade sobre os tokens globais:

```scss
ui-input {
  --ui-input-border-radius: 4px;
  --ui-input-focus-color: rebeccapurple;
}
```

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

| Componente         | Seletor                                  |
| ------------------ | ---------------------------------------- |
| `UiAutocomplete`   | `<ui-autocomplete>`                      |
| `UiBanner`         | `<ui-banner>`                            |
| `UiButton`         | `<button ui-button>` / `<a ui-button>`   |
| `UiCopyTextButton` | `<ui-copy-text-button>`                  |
| `UiField`          | `<ui-field>`                             |
| `UiInput`          | `<ui-input>`                             |
| `UiInputPassword`  | `<ui-input-password>`                    |
| `UiInputSearch`    | `<ui-input-search>`                      |
