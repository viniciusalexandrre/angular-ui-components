# Guia de estilos do reusable-union-kit

Todo componente da biblioteca já vem estilizado. Você não precisa escrever CSS para usá-lo.
Se quiser mudar a aparência, troque **variáveis CSS**. Não é preciso sobrescrever classes
internas nem usar `::ng-deep`.

Este guia explica como o sistema funciona e lista, para cada componente, o que pode ser trocado.

- [1. Como funciona](#1-como-funciona)
- [2. Instalando o tema](#2-instalando-o-tema)
- [3. Formas de personalizar](#3-formas-de-personalizar)
- [4. Tokens globais](#4-tokens-globais)
- [5. Referência por componente](#5-referência-por-componente)
- [6. Boas práticas e armadilhas](#6-boas-práticas-e-armadilhas)

---

## 1. Como funciona

Cada propriedade visual dos componentes é escrita com **três níveis de valor**:

```scss
border-radius: var(--ui-input-border-radius, 10px);
color: var(--ui-input-color, var(--c9, #202124));
//             ①                 ②       ③
```

| Nível | O que é                                         | Quem define                     | Alcance                        |
| ----- | ----------------------------------------------- | ------------------------------- | ------------------------------ |
| ①     | Variável do componente: `--ui-<componente>-*`   | Você, se quiser                 | Só aquele componente           |
| ②     | Token global do tema: `--b10`, `--c9`, `--erro` | `reusable-union-kit/styles`     | Todos os componentes           |
| ③     | Valor fixo de segurança                         | A própria biblioteca            | Usado se ① e ② não existirem   |

O navegador usa o primeiro valor que encontrar:

1. Se você definiu `--ui-input-color`, ele é usado.
2. Se não, usa o token `--c9` do tema (claro ou escuro).
3. Se você não importou o tema, usa `#202124`.

Por isso **os componentes funcionam sem configuração nenhuma** e, ao mesmo tempo, qualquer
detalhe pode ser trocado.

### Por que variáveis CSS e não classes?

Os componentes Angular usam encapsulamento de estilo: uma regra como `ui-input .input { … }`
na sua aplicação **não alcança** o `<input>` interno. Variáveis CSS são herdadas pelo DOM e
atravessam esse encapsulamento. Por isso elas são a API pública de estilo.

> As classes internas (`.input`, `.panel`, `.trigger`, …) **não fazem parte da API** e podem
> mudar entre versões. Variáveis com prefixo `--_` (ex.: `--_popup-background`) também são
> internas. Use sempre as `--ui-*`.

---

## 2. Instalando o tema

Os tokens do tema são opcionais, mas recomendados. Importe-os uma vez no `styles.scss` global:

```scss
// src/styles.scss
@use 'reusable-union-kit/styles';
```

### Tema escuro

O tema escuro é ativado pelo atributo `data-theme="dark"` no `<html>`:

```html
<html data-theme="dark">
```

Os tokens (`--b*`, `--c*`, `--white`, sombras) mudam de valor e todos os componentes
acompanham automaticamente. O componente `<ui-theme-toggle>` faz essa troca para você, guarda a
escolha no `localStorage` e, enquanto o usuário não escolher, segue o tema do sistema.

---

## 3. Formas de personalizar

Do mais amplo para o mais específico:

### 3.1 Mudar a cor em toda a biblioteca (token global)

Redefina o token **depois** do `@use`. Todo componente que usa esse token muda junto.

```scss
@use 'reusable-union-kit/styles';

:root {
  --b10: #7c3aed; // cor principal (botão primário, página ativa, foco…)
  --b11: #5b21b6; // hover do botão primário
  --erro: #dc2626; // cor de erro de todos os campos
}

:root[data-theme='dark'] {
  --b10: #a78bfa;
}
```

### 3.2 Mudar um componente em toda a aplicação

Defina a variável no seletor do componente, no `styles.scss` global:

```scss
ui-input,
ui-input-password,
ui-autocomplete {
  --ui-input-border-radius: 4px;
  --ui-input-height: 44px;
}

button[ui-button] {
  --ui-button-border-radius: 999px; // botões em formato de pílula
}
```

### 3.3 Mudar só uma instância

Com uma classe:

```html
<ui-input class="campo-destaque" id="cupom" label="Cupom" [formField]="form.cupom" />
```

```scss
.campo-destaque {
  --ui-input-border: 2px solid #12a454;
  --ui-input-background: #f0fff6;
}
```

Ou direto no template, com binding de estilo:

```html
<button ui-button [style.--ui-button-primary-background]="corDaMarca()">Comprar</button>
```

### 3.4 Mudar por tema

```scss
:root[data-theme='dark'] ui-modal {
  --ui-modal-backdrop: rgba(0, 0, 0, 0.8);
}
```

### 3.5 Mudar uma área inteira da tela

Variáveis são herdadas, então você pode defini-las num contêiner:

```scss
.painel-admin {
  --ui-button-height: 32px;
  --ui-input-height: 32px;
  --ui-input-font-size: 13px;
}
```

Tudo dentro de `.painel-admin` fica compacto. O resto da aplicação não muda.

### 3.6 Variáveis compartilhadas

Alguns grupos de variáveis valem para vários componentes de propósito, para manter tudo
consistente:

| Grupo             | Afeta                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------------- |
| `--ui-input-*`    | `ui-input`, `ui-input-password`, `ui-input-search`, `ui-autocomplete` e o botão do `ui-select` |
| `--ui-field-*`    | Label, dica e mensagens de erro de todos os campos que usam `ui-field`                   |
| `--ui-icon-button-*` | Botões de ícone dentro dos campos (mostrar senha, pesquisar)                          |

Se quiser mudar só um deles, defina a variável no seletor daquele componente (ex.: `ui-select { --ui-input-border-radius: 4px; }`).

---

## 4. Tokens globais

Definidos em `reusable-union-kit/styles`. Os valores abaixo são os do tema claro.

### Azuis (cor de marca): `--b0` a `--b12`, `--b-white`

| Token       | Claro     | Uso típico nos componentes                                |
| ----------- | --------- | --------------------------------------------------------- |
| `--b-white` | `#f6f9ff` | Fundo de campos, banner, thumb do theme-toggle            |
| `--b0`      | `#f0f3ff` | Fundo do select, da paginação, do botão fechar do modal   |
| `--b1`      | `#e7ecff` | Hover suave, bordas claras, skeleton                      |
| `--b2`      | `#d9e2ff` | Fundo do modal, borda do OTP, trilho do theme-toggle      |
| `--b3`      | `#c6d4fe` | Borda dos inputs, opção ativa do autocomplete, barras     |
| `--b4`      | `#b5c6f9` | Contorno de foco dos inputs, borda do botão secundário    |
| `--b5`–`--b8` | …       | Hover e destaques intermediários                          |
| `--b10`     | `#335cd6` | **Cor principal**: botão primário, página ativa, foco     |
| `--b11`     | `#213b89` | Hover do botão primário                                   |
| `--b12`     | `#152557` | Mais escuro da escala                                     |

### Cinzas (texto e neutros): `--c1` a `--c12`, `--white`

| Token     | Claro     | Uso típico                                   |
| --------- | --------- | -------------------------------------------- |
| `--white` | `#ffffff` | Fundo de cartões (gráficos, OTP)             |
| `--c1`    | `#f7f7f7` | Fundo de campo somente leitura               |
| `--c2`    | `#ededed` | Fundo de campo desabilitado                  |
| `--c5`    | `#b2b2b2` | Separador do breadcrumb                      |
| `--c6`    | `#9c9c9c` | Eixos dos gráficos                           |
| `--c7`    | `#707070` | Texto secundário, placeholder, dicas         |
| `--c8`    | `#595959` | Labels, ícones                               |
| `--c9`    | `#404040` | Texto principal dos campos e opções          |

### Estado, gradientes e sombras

| Token            | Uso                                                       |
| ---------------- | --------------------------------------------------------- |
| `--erro`         | Borda, texto e asterisco de campos inválidos              |
| `--bg-erro`      | Fundo de campos inválidos                                 |
| `--shadow-1`     | Sombra do painel do autocomplete                          |
| `--shadow-2`     | Sombra alternativa (livre para uso na aplicação)          |
| `--shadow-hover` | Anel de foco do OTP                                       |
| `--shadow-erro`  | Anel de foco do OTP com erro                              |
| `--green`, `--g0`–`--g6` | Gradientes (livres para uso na aplicação)         |

No tema escuro, a escala de azuis vira uma escala de cinzas e `--white` vira preto. Por isso use
os tokens em vez de cores fixas quando quiser que algo acompanhe o tema.

---

## 5. Referência por componente

Nas tabelas, **Padrão** mostra o valor usado quando você não define a variável. Quando o padrão é
um token (ex.: `var(--b10)`), o valor acompanha o tema claro/escuro.

> **Status:** os componentes marcados com 🚧 ainda **não são exportados** em `public-api.ts`.
> Os estilos já seguem este padrão, mas a API pode mudar até eles serem publicados.

### Campos de formulário (base comum)

`ui-input`, `ui-input-password`, `ui-input-search`, `ui-autocomplete` e `ui-select` usam a mesma
base visual. Estas variáveis valem para todos eles:

| Variável                           | Padrão                     | Controla                           |
| ---------------------------------- | -------------------------- | ---------------------------------- |
| `--ui-input-width`                 | `100%`                     | Largura do campo                   |
| `--ui-input-height`                | `40px`                     | Altura                             |
| `--ui-input-padding`               | `8px 12px`                 | Espaçamento interno                |
| `--ui-input-color`                 | `var(--c9)`                | Cor do texto                       |
| `--ui-input-background`            | `var(--b-white)`           | Fundo                              |
| `--ui-input-border`                | `1px solid var(--b3)`      | Borda (shorthand completo)         |
| `--ui-input-border-radius`         | `10px`                     | Arredondamento                     |
| `--ui-input-font-family`           | `inherit`                  | Fonte                              |
| `--ui-input-font-size`             | `14px`                     | Tamanho da fonte                   |
| `--ui-input-placeholder-color`     | `var(--c7)`                | Cor do placeholder                 |
| `--ui-input-hover-border-color`    | `var(--b6)`                | Borda no hover                     |
| `--ui-input-focus-color`           | `var(--b4)`                | Contorno de foco                   |
| `--ui-input-error-color`           | `var(--erro)`              | Borda e contorno quando inválido   |
| `--ui-input-error-background`      | `var(--bg-erro)`           | Fundo quando inválido              |
| `--ui-input-disabled-color`        | `var(--c7)`                | Texto quando desabilitado          |
| `--ui-input-disabled-background`   | `var(--c2)`                | Fundo quando desabilitado          |
| `--ui-input-readonly-background`   | `var(--c1)`                | Fundo quando somente leitura       |
| `--ui-icon-button-background`      | `transparent`              | Fundo do botão de ícone interno    |
| `--ui-icon-button-hover-background`| `var(--b1)`                | Hover do botão de ícone            |
| `--ui-icon-button-color`           | `var(--c8)`                | Cor do ícone                       |

### `ui-field` (label, dica e erro)

Usado internamente pelos campos. Também pode ser usado sozinho para envolver um controle próprio.

```html
<ui-field id="cpf" label="CPF" hint="Somente números" [required]="true">
  <input id="cpf" class="meu-input" />
</ui-field>
```

| Variável                      | Padrão        | Controla                           |
| ----------------------------- | ------------- | ---------------------------------- |
| `--ui-field-gap`              | `4px`         | Espaço entre label, campo e dica   |
| `--ui-field-label-color`      | `var(--c8)`   | Cor do label                       |
| `--ui-field-label-font-family`| `inherit`     | Fonte do label                     |
| `--ui-field-label-font-size`  | `14px`        | Tamanho do label                   |
| `--ui-field-label-font-weight`| `400`         | Peso do label                      |
| `--ui-field-hint-color`       | `var(--c7)`   | Cor da dica                        |
| `--ui-field-hint-font-size`   | `13px`        | Tamanho da dica                    |
| `--ui-field-error-color`      | `var(--erro)` | Cor das mensagens de erro e do `*` |
| `--ui-field-error-font-size`  | `13px`        | Tamanho das mensagens de erro      |
| `--ui-field-error-gap`        | `2px`         | Espaço entre mensagens de erro     |
| `--ui-field-error-margin-top` | `2px`         | Espaço acima das mensagens         |

### `ui-input`

```html
<ui-input id="email" label="E-mail" type="email" placeholder="voce@empresa.com" [formField]="form.email" />
```

Usa só as variáveis da [base comum](#campos-de-formulário-base-comum) e de [`ui-field`](#ui-field-label-dica-e-erro).

### `ui-input-password`

```html
<ui-input-password id="senha" label="Senha" autocomplete="new-password" [formField]="form.senha" />
```

Base comum + `ui-field` + `--ui-icon-button-*` (botão de mostrar/ocultar). O campo reserva `40px`
à direita para o botão.

### `ui-input-search`

```html
<ui-input-search id="busca" label="Pesquisar produtos" placeholder="Buscar…" (search)="buscar($event)" />
```

Base comum, mais estas, que têm prioridade sobre as da base:

| Variável                              | Padrão                 | Controla                    |
| ------------------------------------- | ---------------------- | --------------------------- |
| `--ui-input-search-padding`           | `8px 44px 8px 16px`    | Espaçamento (reserva o botão) |
| `--ui-input-search-border`            | `1px solid var(--b1)`  | Borda                       |
| `--ui-input-search-border-radius`     | `25px`                 | Arredondamento (pílula)     |
| `--ui-input-search-button-background` | `var(--b1)`            | Fundo do botão de pesquisa  |

O label fica oculto visualmente por padrão (`[hideLabel]="false"` para exibi-lo) e usa
`--ui-field-label-color` e `--ui-field-label-font-size`.

### `ui-autocomplete`

```html
<ui-autocomplete id="cidade" label="Cidade" [options]="cidades()" [isLoading]="carregando()"
  (searchChange)="buscarCidades($event)" [formField]="form.cidade" />
```

Base comum + `ui-field` + painel de opções:

| Variável                                      | Padrão                | Controla                       |
| --------------------------------------------- | --------------------- | ------------------------------ |
| `--ui-autocomplete-panel-margin-top`          | `0.25rem`             | Distância entre campo e painel |
| `--ui-autocomplete-z-index`                   | `1000`                | Camada do painel               |
| `--ui-autocomplete-max-height`                | `240px`               | Altura máxima (rola depois)    |
| `--ui-autocomplete-panel-padding`             | `0.25rem 0`           | Espaçamento interno do painel  |
| `--ui-autocomplete-panel-border`              | `1px solid var(--b3)` | Borda do painel                |
| `--ui-autocomplete-panel-border-radius`       | `0.375rem`            | Arredondamento do painel       |
| `--ui-autocomplete-panel-background`          | `var(--b-white)`      | Fundo do painel                |
| `--ui-autocomplete-panel-shadow`              | `var(--shadow-1)`     | Sombra do painel               |
| `--ui-autocomplete-font-size`                 | `14px`                | Fonte das opções e mensagens   |
| `--ui-autocomplete-option-padding`            | `0.625rem 0.75rem`    | Espaçamento de cada opção      |
| `--ui-autocomplete-option-color`              | `var(--c9)`           | Cor do texto da opção          |
| `--ui-autocomplete-option-active-background`  | `var(--b3)`           | Fundo da opção em hover/teclado |
| `--ui-autocomplete-option-selected-font-weight` | `600`               | Peso da opção selecionada      |
| `--ui-autocomplete-message-color`             | `var(--c7)`           | "Pesquisando…", "Nenhum valor…" |

### `ui-select` 🚧

```html
<ui-select id="estado" label="Estado" placeholder="Escolha" [options]="estados" [formField]="form.estado" />
```

```ts
estados: UiSelectOption[] = [
  { label: 'São Paulo', value: 'SP' },
  { label: 'Rio de Janeiro', value: 'RJ', disabled: true },
];
```

O botão usa a base comum (`--ui-input-*`), com estas variáveis próprias:

| Variável                                 | Padrão                          | Controla                       |
| ---------------------------------------- | ------------------------------- | ------------------------------ |
| `--ui-select-width`                      | `var(--ui-input-width, 100%)`   | Largura                        |
| `--ui-select-background`                 | `var(--ui-input-background, var(--b0))` | Fundo do botão         |
| `--ui-select-hover-background`           | `var(--b1)`                     | Fundo no hover                 |
| `--ui-select-arrow-color`                | `var(--c8)`                     | Cor da seta                    |
| `--ui-select-z-index`                    | `1000`                          | Camada do painel               |
| `--ui-select-panel-margin-top`           | `4px`                           | Distância entre botão e painel |
| `--ui-select-max-height`                 | `280px`                         | Altura máxima do painel        |
| `--ui-select-panel-padding`              | `0`                             | Espaçamento interno do painel  |
| `--ui-select-panel-border`               | `1px solid var(--b1)`           | Borda do painel                |
| `--ui-select-panel-border-radius`        | `8px`                           | Arredondamento do painel       |
| `--ui-select-panel-background`           | `var(--b0)`                     | Fundo do painel                |
| `--ui-select-panel-shadow`               | `0 4px 6px rgba(0,0,0,.1)`      | Sombra do painel               |
| `--ui-select-scrollbar-color`            | `var(--b2)`                     | Barra de rolagem               |
| `--ui-select-scrollbar-hover-color`      | `var(--b4)`                     | Barra de rolagem no hover      |
| `--ui-select-font-size`                  | `14px`                          | Fonte das opções               |
| `--ui-select-option-padding`             | `10px 14px`                     | Espaçamento de cada opção      |
| `--ui-select-option-color`               | `var(--c9)`                     | Cor do texto da opção          |
| `--ui-select-option-active-background`   | `var(--b1)`                     | Fundo da opção em hover/teclado |
| `--ui-select-option-selected-font-weight`| `600`                           | Peso da opção selecionada      |
| `--ui-select-message-color`              | `var(--c7)`                     | Texto "Nenhuma opção disponível" |

Teclado: `↓`/`↑` abrem e navegam (pulando opções desabilitadas), `Home`/`End`, `Enter`/`Espaço`
selecionam, `Esc` fecha.

### `button[ui-button]` / `a[ui-button]`

```html
<button ui-button>Salvar</button>
<button ui-button variant="secondary" size="sm">Cancelar</button>
<a ui-button variant="ghost" routerLink="/ajuda">Ajuda</a>
```

Além das variáveis, o botão tem dois inputs de estilo:

| Input     | Valores                                 | Padrão      |
| --------- | --------------------------------------- | ----------- |
| `variant` | `'primary'` \| `'secondary'` \| `'ghost'` | `'primary'` |
| `size`    | `'sm'` \| `'md'` \| `'lg'`              | `'md'`      |

| Variável                                 | Padrão            | Controla                        |
| ---------------------------------------- | ----------------- | ------------------------------- |
| `--ui-button-height`                     | `40px`            | Altura (tamanho `md`)           |
| `--ui-button-padding`                    | `0 20px`          | Espaçamento (tamanho `md`)      |
| `--ui-button-font-size`                  | `14px`            | Fonte (tamanho `md`)            |
| `--ui-button-height-sm` / `-lg`          | `32px` / `48px`   | Altura dos tamanhos `sm`/`lg`   |
| `--ui-button-padding-sm` / `-lg`         | `0 12px` / `0 28px` | Espaçamento de `sm`/`lg`      |
| `--ui-button-font-size-sm` / `-lg`       | `13px` / `16px`   | Fonte de `sm`/`lg`              |
| `--ui-button-border-width`               | `1px`             | Espessura da borda              |
| `--ui-button-border-radius`              | `10px`            | Arredondamento                  |
| `--ui-button-font-family`                | `inherit`         | Fonte                           |
| `--ui-button-font-weight`                | `600`             | Peso da fonte                   |
| `--ui-button-primary-background`         | `var(--b10)`      | Fundo do primário               |
| `--ui-button-primary-color`              | `#fff`            | Texto do primário               |
| `--ui-button-primary-hover-background`   | `var(--b11)`      | Hover do primário               |
| `--ui-button-secondary-background`       | `var(--b-white)`  | Fundo do secundário             |
| `--ui-button-secondary-color`            | `var(--b10)`      | Texto do secundário             |
| `--ui-button-secondary-border-color`     | `var(--b4)`       | Borda do secundário             |
| `--ui-button-secondary-hover-background` | `var(--b1)`       | Hover do secundário             |
| `--ui-button-ghost-color`                | `var(--b10)`      | Texto do ghost                  |
| `--ui-button-ghost-hover-background`     | `var(--b1)`       | Hover do ghost                  |
| `--ui-button-focus-color`                | `var(--b10)`      | Contorno de foco                |
| `--ui-button-disabled-opacity`           | `0.55`            | Opacidade desabilitado          |

Para desabilitar um `<a ui-button>`, use `aria-disabled="true"`: ele fica com a aparência de
desabilitado e ignora cliques do mouse. Links ainda podem ser ativados pelo teclado, então remova
também o `href`/`routerLink` enquanto estiver desabilitado.

### `ui-copy-text-button`

```html
<ui-copy-text-button [text]="codigoPix()" copyLabel="Copiar código" />
```

| Variável                            | Padrão                                       | Controla                 |
| ----------------------------------- | -------------------------------------------- | ------------------------ |
| `--ui-copy-button-size`             | `28px`                                       | Largura e altura         |
| `--ui-copy-button-border`           | `1px solid var(--b3)`                        | Borda                    |
| `--ui-copy-button-border-radius`    | `6px`                                        | Arredondamento           |
| `--ui-copy-button-background`       | `var(--b-white)`                             | Fundo                    |
| `--ui-copy-button-hover-background` | `var(--b1)`                                  | Fundo no hover           |
| `--ui-copy-button-color`            | `var(--c8)`                                  | Cor do ícone             |
| `--ui-copy-button-success-color`    | `#12a454`                                    | Cor do ícone "copiado"   |
| `--ui-copy-button-focus-color`      | `var(--ui-input-focus-color, var(--b10))`    | Contorno de foco         |

### `ui-banner`

```html
<ui-banner heading="Bem-vindo" subtitle="ao seu painel" description="Comece criando um projeto."
  buttonText="Criar projeto" img="/assets/hero.png" imgAlt="" (buttonClick)="criar()" />
```

| Variável                            | Padrão                                   | Controla                       |
| ----------------------------------- | ---------------------------------------- | ------------------------------ |
| `--ui-banner-padding`               | `2rem`                                   | Espaçamento interno            |
| `--ui-banner-gap`                   | `10px`                                   | Espaço entre imagem e conteúdo |
| `--ui-banner-border`                | `1px solid var(--b0)`                    | Borda                          |
| `--ui-banner-border-radius`         | `20px`                                   | Arredondamento                 |
| `--ui-banner-background`            | `var(--b-white)`                         | Fundo                          |
| `--ui-banner-heading-color`         | `var(--c8)`                              | Cor do título                  |
| `--ui-banner-heading-font-size`     | `clamp(24px, 3vw + 8px, 36px)`           | Tamanho do título e subtítulo  |
| `--ui-banner-heading-font-weight`   | `700`                                    | Peso do título e subtítulo     |
| `--ui-banner-subtitle-gradient`     | `linear-gradient(90deg, #335cd6, #61a9eb)` | Gradiente do texto do subtítulo |
| `--ui-banner-description-color`     | `var(--c7)`                              | Cor da descrição               |
| `--ui-banner-description-font-size` | `14px`                                   | Tamanho da descrição           |
| `--ui-banner-description-font-weight` | `500`                                  | Peso da descrição              |

O botão interno é um `ui-button`: personalize-o com `--ui-button-*` no `ui-banner`.

### `ui-fieldset` 🚧

```html
<ui-fieldset title="Endereço" description="Usado para entrega.">
  <ui-input id="cep" label="CEP" [formField]="form.cep" />
  <ui-input id="rua" label="Rua" [formField]="form.rua" />
</ui-fieldset>
```

| Variável                              | Padrão      | Controla                               |
| ------------------------------------- | ----------- | -------------------------------------- |
| `--ui-fieldset-padding`               | `0`         | Espaçamento interno                    |
| `--ui-fieldset-border`                | `0`         | Borda (ex.: `1px solid var(--b2)`)     |
| `--ui-fieldset-border-radius`         | `0`         | Arredondamento                         |
| `--ui-fieldset-gap`                   | `10px`      | Espaço entre título e descrição        |
| `--ui-fieldset-title-color`           | `var(--c8)` | Cor do título                          |
| `--ui-fieldset-title-font-size`       | `16px`      | Tamanho do título                      |
| `--ui-fieldset-title-font-weight`     | `500`       | Peso do título                         |
| `--ui-fieldset-description-color`     | `var(--c7)` | Cor da descrição                       |
| `--ui-fieldset-description-font-size` | `14px`      | Tamanho da descrição                   |
| `--ui-fieldset-content-gap`           | `16px`      | Espaço entre os campos projetados      |
| `--ui-fieldset-content-margin-top`    | `10px`      | Espaço acima dos campos                |

### `ui-modal` 🚧

```html
@if (aberto()) {
  <ui-modal labelledBy="titulo-excluir" (close)="aberto.set(false)">
    <h2 id="titulo-excluir">Excluir arquivo?</h2>
    <p>Essa ação não pode ser desfeita.</p>
  </ui-modal>
}
```

Fecha com `Esc`, com o botão de fechar e com clique no fundo (`[closeOnBackdrop]="false"` desliga
o clique no fundo). Ao abrir, o foco vai para o diálogo; ao fechar, volta para onde estava.

| Variável                           | Padrão                  | Controla                       |
| ---------------------------------- | ----------------------- | ------------------------------ |
| `--ui-modal-backdrop`              | `rgba(11,11,11,.56)`    | Cor do fundo escurecido        |
| `--ui-modal-z-index`               | `999`                   | Camada                         |
| `--ui-modal-width`                 | `auto`                  | Largura (ex.: `100%` para ocupar o máximo) |
| `--ui-modal-max-width`             | `650px`                 | Largura máxima                 |
| `--ui-modal-max-height`            | `680px`                 | Altura máxima (rola depois)    |
| `--ui-modal-padding`               | `30px`                  | Espaçamento interno            |
| `--ui-modal-border`                | `0`                     | Borda                          |
| `--ui-modal-border-radius`         | `20px`                  | Arredondamento                 |
| `--ui-modal-background`            | `var(--b2)`             | Fundo                          |
| `--ui-modal-color`                 | `var(--c9)`             | Cor do texto                   |
| `--ui-modal-shadow`                | `none`                  | Sombra                         |
| `--ui-modal-close-size`            | `30px`                  | Tamanho do botão fechar        |
| `--ui-modal-close-border`          | `1px solid var(--b1)`   | Borda do botão fechar          |
| `--ui-modal-close-background`      | `var(--b0)`             | Fundo do botão fechar          |
| `--ui-modal-close-hover-background`| `var(--b1)`             | Hover do botão fechar          |
| `--ui-modal-close-color`           | `var(--c8)`             | Cor do ícone fechar            |
| `--ui-modal-focus-color`           | `var(--b10)`            | Contorno de foco               |

### `ui-popup` 🚧

```html
@if (aviso(); as a) {
  <ui-popup [type]="a.tipo" [message]="a.texto" animate.leave="ui-popup-leave" (closed)="aviso.set(null)" />
}
```

O input `type` (`'success'` \| `'error'` \| `'warning'` \| `'info'`, padrão `'info'`) escolhe o
conjunto de cores. Para animar a saída, use `animate.leave="ui-popup-leave"`: a classe já vem
definida no componente.

| Variável                         | Padrão                       | Controla                        |
| -------------------------------- | ---------------------------- | ------------------------------- |
| `--ui-popup-top` / `--ui-popup-right` | `20px` / `20px`         | Posição na tela                 |
| `--ui-popup-z-index`             | `9999`                       | Camada                          |
| `--ui-popup-min-width`           | `300px`                      | Largura mínima                  |
| `--ui-popup-max-width`           | `500px`                      | Largura máxima                  |
| `--ui-popup-padding`             | `15px 20px`                  | Espaçamento interno             |
| `--ui-popup-border-width`        | `4px`                        | Espessura da faixa lateral      |
| `--ui-popup-border-radius`       | `8px`                        | Arredondamento                  |
| `--ui-popup-shadow`              | `0 4px 12px rgba(0,0,0,.15)` | Sombra                          |
| `--ui-popup-font-size`           | `14px`                       | Tamanho do texto                |
| `--ui-popup-font-weight`         | `500`                        | Peso do texto                   |
| `--ui-popup-icon-size`           | `20px`                       | Tamanho do ícone                |
| `--ui-popup-animation-duration`  | `0.3s`                       | Duração da entrada e da saída   |
| `--ui-popup-<tipo>-background`   | ver abaixo                   | Fundo do tipo                   |
| `--ui-popup-<tipo>-color`        | ver abaixo                   | Texto do tipo                   |
| `--ui-popup-<tipo>-border-color` | ver abaixo                   | Faixa lateral do tipo           |

| Tipo      | background | color     | border-color |
| --------- | ---------- | --------- | ------------ |
| `success` | `#d4edda`  | `#155724` | `#28a745`    |
| `error`   | `#f8d7da`  | `#721c24` | `#dc3545`    |
| `warning` | `#fff3cd`  | `#856404` | `#ffc107`    |
| `info`    | `#d1ecf1`  | `#0c5460` | `#17a2b8`    |

Exemplo: popups de sucesso com a cor da marca:

```scss
ui-popup {
  --ui-popup-success-background: var(--b1);
  --ui-popup-success-color: var(--b12);
  --ui-popup-success-border-color: var(--b10);
}
```

### `ui-otp-input` 🚧

```html
<ui-otp-input [length]="6" [error]="codigoInvalido()" (completed)="verificar($event)" />
```

| Variável                              | Padrão                | Controla                       |
| ------------------------------------- | --------------------- | ------------------------------ |
| `--ui-otp-gap`                        | `10px`                | Espaço entre os campos         |
| `--ui-otp-input-size`                 | `40px`                | Largura e altura de cada campo |
| `--ui-otp-input-border`               | `1px solid var(--b2)` | Borda                          |
| `--ui-otp-input-border-radius`        | `10px`                | Arredondamento                 |
| `--ui-otp-input-background`           | `var(--white)`        | Fundo                          |
| `--ui-otp-input-color`                | `var(--c8)`           | Cor do dígito                  |
| `--ui-otp-input-font-size`            | `14px`                | Tamanho do dígito              |
| `--ui-otp-input-font-weight`          | `500`                 | Peso do dígito                 |
| `--ui-otp-input-focus-border-color`   | `var(--b5)`           | Borda com foco                 |
| `--ui-otp-input-focus-shadow`         | `var(--shadow-hover)` | Anel de foco                   |
| `--ui-otp-input-disabled-background`  | `var(--c2)`           | Fundo desabilitado             |
| `--ui-otp-input-error-color`          | `var(--erro)`         | Borda com `[error]="true"`     |
| `--ui-otp-input-error-background`     | `var(--bg-erro)`      | Fundo com erro                 |
| `--ui-otp-input-error-focus-shadow`   | `var(--shadow-erro)`  | Anel de foco com erro          |

### `ui-pagination` 🚧

```html
<ui-pagination [total]="totalItens()" [pageSize]="20" [currentPage]="pagina()" (pageChange)="pagina.set($event)" />
```

`currentPage` e `pageChange` começam em **0**. `maxVisible` (padrão `4`) define quantos números
aparecem ao mesmo tempo.

| Variável                                | Padrão                | Controla                          |
| --------------------------------------- | --------------------- | --------------------------------- |
| `--ui-pagination-justify`               | `center`              | Alinhamento (`flex-start`, `flex-end`…) |
| `--ui-pagination-gap`                   | `6px`                 | Espaço entre botões               |
| `--ui-pagination-button-size`           | `32px`                | Altura e largura mínima           |
| `--ui-pagination-button-border`         | `1px solid var(--b1)` | Borda                             |
| `--ui-pagination-button-border-radius`  | `8px`                 | Arredondamento                    |
| `--ui-pagination-button-background`     | `var(--b0)`           | Fundo                             |
| `--ui-pagination-button-hover-background` | `var(--b1)`         | Fundo no hover                    |
| `--ui-pagination-button-color`          | `var(--c8)`           | Cor do texto/ícone                |
| `--ui-pagination-font-size`             | `14px`                | Tamanho do número                 |
| `--ui-pagination-active-background`     | `var(--b10)`          | Fundo (e borda) da página atual   |
| `--ui-pagination-active-color`          | `#fff`                | Texto da página atual             |
| `--ui-pagination-focus-color`           | `var(--b10)`          | Contorno de foco                  |
| `--ui-pagination-disabled-opacity`      | `0.5`                 | Opacidade de anterior/próxima desabilitados |

### `ui-skeleton` 🚧

```html
@if (carregando()) {
  <ui-skeleton variant="table" [quantity]="8" />
}
```

O input `variant` define o formato padrão dos blocos:

| `variant` | Altura | Arredondamento | Espaço | Layout                     |
| --------- | ------ | -------------- | ------ | -------------------------- |
| `input` (padrão) | `40px` | `10px`  | `12px` | Uma coluna                 |
| `form`    | `40px` | `10px`         | `20px` | Uma coluna                 |
| `menu`    | `36px` | `8px`          | `8px`  | Uma coluna                 |
| `table`   | `48px` | `4px`          | `2px`  | Uma coluna                 |
| `banner`  | `240px`| `20px`         | `12px` | Uma coluna                 |
| `card`    | `160px`| `15px`         | `16px` | Grade `minmax(220px, 1fr)` |

As variáveis abaixo têm prioridade sobre a variante:

| Variável                           | Padrão          | Controla                       |
| ---------------------------------- | --------------- | ------------------------------ |
| `--ui-skeleton-height`             | da variante     | Altura de cada bloco           |
| `--ui-skeleton-width`              | `100%`          | Largura de cada bloco          |
| `--ui-skeleton-border-radius`      | da variante     | Arredondamento                 |
| `--ui-skeleton-gap`                | da variante     | Espaço entre blocos            |
| `--ui-skeleton-columns`            | da variante     | `grid-template-columns`        |
| `--ui-skeleton-color`              | `var(--b1)`     | Cor base                       |
| `--ui-skeleton-highlight-color`    | `var(--b0)`     | Cor do brilho animado          |
| `--ui-skeleton-animation-duration` | `1.4s`          | Velocidade do brilho           |

### `ui-theme-toggle` 🚧

```html
<ui-theme-toggle label="Tema escuro" />
```

| Variável                                | Padrão           | Controla                    |
| --------------------------------------- | ---------------- | --------------------------- |
| `--ui-theme-toggle-width`               | `60px`           | Largura do trilho           |
| `--ui-theme-toggle-thumb-size`          | `26px`           | Tamanho do círculo          |
| `--ui-theme-toggle-padding`             | `4px`            | Folga entre círculo e trilho (a altura é calculada) |
| `--ui-theme-toggle-background`          | `var(--b2)`      | Cor do trilho               |
| `--ui-theme-toggle-thumb-background`    | `var(--b-white)` | Cor do círculo              |
| `--ui-theme-toggle-icon-color`          | `var(--c8)`      | Cor do ícone sol/lua        |
| `--ui-theme-toggle-focus-color`         | `var(--b10)`     | Contorno de foco            |
| `--ui-theme-toggle-transition-duration` | `0.4s`           | Velocidade do deslize       |

### `ui-breadcrumb` 🚧

Os itens vêm de `data: { breadcrumb: 'Rótulo' }` nas rotas:

```ts
{ path: 'projetos', data: { breadcrumb: 'Projetos' }, children: [
  { path: ':id', component: Projeto, data: { breadcrumb: 'Detalhes' } },
] }
```

```html
<ui-breadcrumb separator="›" />
```

| Variável                              | Padrão       | Controla                      |
| ------------------------------------- | ------------ | ----------------------------- |
| `--ui-breadcrumb-gap`                 | `8px`        | Espaço entre itens            |
| `--ui-breadcrumb-font-size`           | `14px`       | Tamanho do texto              |
| `--ui-breadcrumb-link-color`          | `var(--c7)`  | Cor dos links                 |
| `--ui-breadcrumb-link-hover-color`    | `var(--b10)` | Cor do link no hover          |
| `--ui-breadcrumb-current-color`       | `var(--c9)`  | Cor da página atual           |
| `--ui-breadcrumb-current-font-weight` | `600`        | Peso da página atual          |
| `--ui-breadcrumb-separator-color`     | `var(--c5)`  | Cor do separador              |
| `--ui-breadcrumb-focus-color`         | `var(--b10)` | Contorno de foco              |

### `ui-column-graph` 🚧

```html
<ui-column-graph title="Vendas por mês" [data]="vendas()" highlight="Ago" />
```

`maxValue` é opcional: sem ele, o maior valor dos dados vira 100% da altura. `highlight` recebe o
`label` da coluna destacada.

| Variável                              | Padrão                | Controla                     |
| ------------------------------------- | --------------------- | ---------------------------- |
| `--ui-column-graph-padding`           | `20px`                | Espaçamento interno          |
| `--ui-column-graph-border`            | `1px solid var(--b1)` | Borda do cartão              |
| `--ui-column-graph-border-radius`     | `15px`                | Arredondamento do cartão     |
| `--ui-column-graph-background`        | `var(--white)`        | Fundo do cartão              |
| `--ui-column-graph-title-color`       | `var(--c7)`           | Cor do título                |
| `--ui-column-graph-title-font-size`   | `24px`                | Tamanho do título            |
| `--ui-column-graph-height`            | `347px`               | Altura da área do gráfico    |
| `--ui-column-graph-axis-color`        | `var(--c6)`           | Texto dos eixos              |
| `--ui-column-graph-axis-font-size`    | `12px`                | Tamanho do texto dos eixos   |
| `--ui-column-graph-baseline-color`    | `var(--c2)`           | Linha da base                |
| `--ui-column-graph-bar-width`         | `25px`                | Largura das barras           |
| `--ui-column-graph-bar-radius`        | `5px`                 | Arredondamento das barras    |
| `--ui-column-graph-bar-color`         | `var(--b3)`           | Cor das barras               |
| `--ui-column-graph-bar-hover-color`   | `var(--b4)`           | Cor da barra no hover        |
| `--ui-column-graph-highlight-color`   | `var(--b6)`           | Barra e label destacados     |
| `--ui-column-graph-value-color`       | `var(--c7)`           | Valor exibido no hover       |

### `ui-pie-chart` 🚧

Donut de progresso: o 1º item de `data` é a parte preenchida e o 2º é o total.

```html
<ui-pie-chart title="Armazenamento" [data]="[
  { label: 'Usado', value: '30 GB', graphValue: 30 },
  { label: 'Total', value: '120 GB', graphValue: 120 }
]" />
```

As cores podem vir de dois lugares:

- **CSS** (recomendado): deixe `color` de fora e use `--ui-pie-chart-fill-color` e
  `--ui-pie-chart-track-color`. O donut e a legenda usam as mesmas cores.
- **Dados**: informe `color` em cada item. Esse valor tem prioridade sobre as variáveis CSS.

| Variável                            | Padrão                | Controla                         |
| ----------------------------------- | --------------------- | -------------------------------- |
| `--ui-pie-chart-padding`            | `10px`                | Espaçamento interno              |
| `--ui-pie-chart-border`             | `1px solid var(--b1)` | Borda do cartão                  |
| `--ui-pie-chart-border-radius`      | `15px`                | Arredondamento do cartão         |
| `--ui-pie-chart-background`         | `var(--white)`        | Fundo do cartão                  |
| `--ui-pie-chart-title-color`        | `var(--c7)`           | Cor do título                    |
| `--ui-pie-chart-title-font-size`    | `18px`                | Tamanho do título                |
| `--ui-pie-chart-size`               | `80px`                | Diâmetro do donut                |
| `--ui-pie-chart-fill-color`         | `var(--b6)`           | Parte preenchida (1º item)       |
| `--ui-pie-chart-track-color`        | `var(--b3)`           | Restante (2º item)               |
| `--ui-pie-chart-legend-border`      | `1px solid var(--b1)` | Borda dos cartões da legenda     |
| `--ui-pie-chart-legend-background`  | `var(--white)`        | Fundo dos cartões da legenda     |
| `--ui-pie-chart-value-color`        | `var(--c7)`           | Cor do valor na legenda          |
| `--ui-pie-chart-label-color`        | `var(--c7)`           | Cor do label na legenda          |

### `ui-table` 🚧

A tabela é montada a partir de arrays. Você descreve colunas e ações; o componente gera
`<th>`, `<td>`, o botão de detalhes e o menu de cada linha.

```ts
colunas: UiTableColumn<Arquivo>[] = [
  { key: 'nome', header: 'Nome' },                                      // lê arquivo.nome
  { key: 'tamanho', header: 'Tamanho', value: (a) => formatBytes(a.tamanho), align: 'end' },
  { key: 'link', header: 'Compartilhar' },                              // célula com template
];

acoes: UiTableAction<Arquivo>[] = [
  { id: 'editar', label: 'Editar' },
  { id: 'excluir', label: 'Excluir', danger: true, disabled: (a) => a.protegido },
];
```

```html
<ui-table label="Arquivos" [columns]="colunas" [rows]="arquivos()" [rowKey]="porId"
  [actions]="acoes" [loading]="carregando()" (action)="executar($event)">

  <!-- Opcional: troca o conteúdo de uma coluna -->
  <ng-template uiTableCell="link" let-arquivo>
    <ui-copy-text-button [text]="arquivo.link" />
  </ng-template>

  <!-- Opcional: quando existe, cada linha ganha um botão para mostrar mais informações -->
  <ng-template uiTableDetail let-arquivo>
    <p>Modificado em {{ arquivo.modificado }}</p>
  </ng-template>
</ui-table>
```

- `(action)` emite `{ action: 'editar', row }`: trate todas as ações num único método.
- `hidden`/`disabled` nas ações recebem a linha: esconda ou bloqueie uma ação só em algumas linhas.
- `rowKey` identifica cada linha. Sem ele, a identidade é o próprio objeto e as linhas abertas
  fecham quando `rows` é recriado (ex.: depois de um `map`).
- `(rowToggle)` emite `{ row, expanded }`, útil para carregar os detalhes só quando a linha abre.
- Sem `uiTableDetail`, a coluna de detalhes não aparece. Sem `actions`, a coluna do menu não aparece.

| Variável                                | Padrão                      | Controla                          |
| --------------------------------------- | --------------------------- | --------------------------------- |
| `--ui-table-font-size`                  | `14px`                      | Tamanho do texto                  |
| `--ui-table-color`                      | `var(--c9)`                 | Cor do texto das células          |
| `--ui-table-cell-padding`               | `10px 12px`                 | Espaçamento das células           |
| `--ui-table-cell-white-space`           | `normal`                    | `nowrap` impede a quebra de linha |
| `--ui-table-header-color`               | `var(--c7)`                 | Cor do cabeçalho                  |
| `--ui-table-header-background`          | `transparent`               | Fundo do cabeçalho                |
| `--ui-table-header-font-weight`         | `600`                       | Peso do cabeçalho                 |
| `--ui-table-header-border-color`        | `var(--b2)`                 | Linha abaixo do cabeçalho         |
| `--ui-table-row-border-color`           | `var(--b1)`                 | Linha entre registros             |
| `--ui-table-row-hover-background`       | `var(--b0)`                 | Fundo da linha no hover           |
| `--ui-table-border`                     | `0`                         | Borda em volta da tabela          |
| `--ui-table-border-radius`              | `0`                         | Arredondamento da tabela          |
| `--ui-table-detail-background`          | `var(--b0)`                 | Fundo da linha de detalhes        |
| `--ui-table-detail-padding`             | `16px 12px 16px 52px`       | Espaçamento dos detalhes          |
| `--ui-table-toggle-size`                | `28px`                      | Botão de abrir detalhes           |
| `--ui-table-toggle-color`               | `var(--c8)`                 | Cor da seta                       |
| `--ui-table-toggle-hover-background`    | `var(--b1)`                 | Hover do botão de detalhes        |
| `--ui-table-focus-color`                | `var(--b10)`                | Contorno de foco                  |
| `--ui-table-empty-color`                | `var(--c7)`                 | Texto de "nenhum registro"        |
| `--ui-table-empty-padding`              | `32px`                      | Espaço do estado vazio            |

O carregamento usa `ui-skeleton` (`--ui-skeleton-*`) e o menu de ações usa `ui-menu` (`--ui-menu-*`).

### `ui-menu` 🚧

Botão "⋮" com uma lista de ações. É o menu usado pela tabela, mas funciona sozinho:

```html
<ui-menu label="Ações do projeto" [items]="[
  { id: 'duplicar', label: 'Duplicar' },
  { id: 'arquivar', label: 'Arquivar', disabled: true },
  { id: 'excluir', label: 'Excluir', danger: true }
]" (itemSelect)="executar($event.id)" />
```

Teclado: `↓`/`↑` no botão abrem o menu; dentro dele, `↓`/`↑`/`Home`/`End` navegam, `Esc` fecha e
devolve o foco ao botão. Fecha também com clique fora, rolagem e redimensionamento. O painel usa
`position: fixed`, então não é cortado por contêineres com `overflow`.

| Variável                             | Padrão                         | Controla                     |
| ------------------------------------ | ------------------------------ | ---------------------------- |
| `--ui-menu-trigger-size`             | `32px`                         | Tamanho do botão "⋮"         |
| `--ui-menu-trigger-border`           | `0`                            | Borda do botão               |
| `--ui-menu-trigger-border-radius`    | `8px`                          | Arredondamento do botão      |
| `--ui-menu-trigger-background`       | `transparent`                  | Fundo do botão               |
| `--ui-menu-trigger-hover-background` | `var(--b1)`                    | Fundo no hover e aberto      |
| `--ui-menu-trigger-color`            | `var(--c8)`                    | Cor do ícone                 |
| `--ui-menu-focus-color`              | `var(--b10)`                   | Contorno de foco             |
| `--ui-menu-z-index`                  | `1000`                         | Camada do painel             |
| `--ui-menu-min-width`                | `160px`                        | Largura mínima do painel     |
| `--ui-menu-padding`                  | `4px`                          | Espaçamento interno          |
| `--ui-menu-border`                   | `1px solid var(--b2)`          | Borda do painel              |
| `--ui-menu-border-radius`            | `10px`                         | Arredondamento do painel     |
| `--ui-menu-background`               | `var(--b-white)`               | Fundo do painel              |
| `--ui-menu-shadow`                   | `0 4px 12px rgba(0,0,0,.12)`   | Sombra do painel             |
| `--ui-menu-font-size`                | `14px`                         | Tamanho do texto dos itens   |
| `--ui-menu-item-padding`             | `8px 12px`                     | Espaçamento de cada item     |
| `--ui-menu-item-border-radius`       | `6px`                          | Arredondamento do item       |
| `--ui-menu-item-color`               | `var(--c9)`                    | Cor do texto                 |
| `--ui-menu-item-hover-background`    | `var(--b1)`                    | Fundo em hover/foco          |
| `--ui-menu-item-danger-color`        | `#c0392b`                      | Cor de itens `danger`        |
| `--ui-menu-item-disabled-opacity`    | `0.45`                         | Opacidade de itens desabilitados |

### Em construção

`ui-file-table` ainda não tem template nem estilos. Ele pode ser montado sobre o `ui-table`
(pastas e arquivos como linhas, `uiTableCell` para os ícones).

---

## 6. Boas práticas e armadilhas

**Use tokens nos seus valores.** `--ui-button-primary-background: var(--b8)` acompanha o tema
escuro; `#6184eb` fica igual nos dois temas.

**Shorthands substituem tudo.** Variáveis como `--ui-input-border` recebem o valor completo
(`1px solid #ccc`), não só a cor. Para mudar só a cor da borda no hover, use
`--ui-input-hover-border-color`.

**Onde declarar faz diferença.** Uma variável definida em `:root` vale para a página toda; no
seletor do componente, para todas as instâncias; numa classe, só onde a classe estiver. Se duas
regras definem a mesma variável no mesmo elemento, vale a especificidade CSS normal.

**Não estilize classes internas.** `ui-select .trigger { … }` não funciona por causa do
encapsulamento, e `::ng-deep` quebra quando a estrutura interna mudar. Se faltar uma variável
para o que você precisa, adicione uma nova no componente seguindo o padrão:

```scss
// dentro do .scss do componente
.algo {
  letter-spacing: var(--ui-<componente>-letter-spacing, normal);
}
```

E registre-a neste guia.

**Movimento reduzido.** Todas as animações (skeleton, popup, transições) são desligadas ou
reduzidas quando o sistema do usuário pede `prefers-reduced-motion: reduce`.

**Contraste.** Ao trocar cores, mantenha contraste de pelo menos 4.5:1 entre texto e fundo
(3:1 para bordas de campos e contornos de foco).
