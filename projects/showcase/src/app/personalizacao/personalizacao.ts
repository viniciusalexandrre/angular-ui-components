import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { PopupType, UiButton, UiInput, UiPopup, UiSelect } from '../kit';
import { Avisos } from '../shared/avisos';

@Component({
  selector: 'app-personalizacao',
  imports: [FormField, UiButton, UiInput, UiPopup, UiSelect],
  template: `
    <header class="page-header">
      <h1>Personalização de estilos</h1>
      <p>
        Cada exemplo usa uma das formas descritas em
        <code>projects/reusable-union-kit/docs/ESTILOS.md</code>. Troque o tema no topo para ver
        tudo acompanhar.
      </p>
    </header>

    <section class="card stack">
      <h2>1. Inputs de estilo do botão</h2>
      <p class="muted">Sem CSS nenhum: só <code>variant</code> e <code>size</code>.</p>
      @for (variant of variantes; track variant) {
        <div class="actions start">
          @for (size of tamanhos; track size) {
            <button ui-button type="button" [variant]="variant" [size]="size">{{ variant }} {{ size }}</button>
          }
          <button ui-button type="button" [variant]="variant" disabled>desabilitado</button>
        </div>
      }
    </section>

    <section class="card stack">
      <h2>2. Por instância, com uma classe</h2>
      <p class="muted">A classe <code>.destaque</code> redefine variáveis <code>--ui-input-*</code> só neste campo.</p>
      <div class="grid-2">
        <ui-input id="padrao" label="Padrão" [formField]="exemplo.padrao" />
        <ui-input id="destaque" class="destaque" label="Com .destaque" [formField]="exemplo.destaque" />
      </div>
    </section>

    <section class="card stack">
      <h2>3. Uma área inteira</h2>
      <p class="muted">Variáveis são herdadas: tudo dentro de <code>.compacto</code> fica menor.</p>
      <div class="compacto grid-2">
        <ui-input id="compacto-nome" label="Nome" [formField]="exemplo.compacto" />
        <ui-select id="compacto-perfil" label="Perfil" [options]="perfis" [formField]="exemplo.perfil" />
        <div class="actions start">
          <button ui-button type="button">Salvar</button>
          <button ui-button variant="secondary" type="button">Cancelar</button>
        </div>
      </div>
    </section>

    <section class="card stack">
      <h2>4. Binding dinâmico</h2>
      <p class="muted">
        Valores vindos do componente, com <code>[style.--ui-*]</code>. Útil para cor de marca
        configurável pelo usuário.
      </p>
      <div class="controls">
        <label>Cor principal <input type="color" [value]="cor()" (input)="cor.set($any($event.target).value)" /></label>
        <label>
          Arredondamento: {{ raio() }}px
          <input type="range" min="0" max="24" [value]="raio()" (input)="raio.set(+$any($event.target).value)" />
        </label>
      </div>
      <div
        class="grid-2"
        [style.--ui-button-primary-background]="cor()"
        [style.--ui-button-primary-hover-background]="cor()"
        [style.--ui-button-secondary-color]="cor()"
        [style.--ui-input-focus-color]="cor()"
        [style.--ui-button-border-radius.px]="raio()"
        [style.--ui-input-border-radius.px]="raio()"
      >
        <ui-input id="dinamico" label="Clique para ver o foco" [formField]="exemplo.dinamico" />
        <div class="actions start">
          <button ui-button type="button">Primário</button>
          <button ui-button variant="secondary" type="button">Secundário</button>
        </div>
      </div>
    </section>

    <section class="card stack">
      <h2>5. Tokens do tema</h2>
      <p class="muted">
        Estas amostras usam <code>var(--b*)</code> e <code>var(--c*)</code>. No tema escuro, os
        mesmos tokens mudam de valor.
      </p>
      <div class="swatches">
        @for (token of tokens; track token) {
          <div class="swatch">
            <span [style.background]="'var(' + token + ')'"></span>
            <code>{{ token }}</code>
          </div>
        }
      </div>
    </section>

    <section class="card stack">
      <h2>6. Popups por tipo</h2>
      <p class="muted">O último botão usa <code>--ui-popup-success-*</code> com as cores da marca.</p>
      <div class="actions start">
        @for (tipo of tipos; track tipo) {
          <button ui-button variant="secondary" type="button" (click)="mostrar(tipo)">{{ tipo }}</button>
        }
        <button ui-button type="button" (click)="mostrar('success', true)">success (marca)</button>
      </div>
    </section>

    @if (avisos.atual(); as aviso) {
      <ui-popup
        [class.popup-marca]="popupMarca()"
        [type]="aviso.type"
        [message]="aviso.message"
        animate.leave="ui-popup-leave"
        (closed)="avisos.fechar()"
      />
    }
  `,
  styles: `
    .destaque {
      --ui-input-border: 2px solid #12a454;
      --ui-input-background: rgba(18, 164, 84, 0.06);
      --ui-input-focus-color: #12a454;
      --ui-field-label-color: #0d803a;
      --ui-field-label-font-weight: 600;
    }

    .compacto {
      --ui-input-height: 32px;
      --ui-input-font-size: 13px;
      --ui-input-border-radius: 6px;
      --ui-field-label-font-size: 12px;
      --ui-button-height: 32px;
      --ui-button-font-size: 13px;
      --ui-button-border-radius: 6px;
      align-items: end;
    }

    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      font-size: 14px;
      color: var(--c8);

      label {
        display: grid;
        gap: 4px;
      }
    }

    .swatches {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
      gap: 12px;
    }

    .swatch {
      display: grid;
      gap: 4px;
      font-size: 12px;
      color: var(--c7);

      span {
        height: 40px;
        border: 1px solid var(--c3);
        border-radius: 8px;
      }
    }

    .popup-marca {
      --ui-popup-success-background: var(--b1);
      --ui-popup-success-color: var(--b12);
      --ui-popup-success-border-color: var(--b10);
      --ui-popup-border-radius: 14px;
    }
  `,
})
export class PersonalizacaoComponent {
  protected readonly variantes = ['primary', 'secondary', 'ghost'] as const;
  protected readonly tamanhos = ['sm', 'md', 'lg'] as const;
  protected readonly tipos: PopupType[] = ['success', 'error', 'warning', 'info'];
  protected readonly perfis = [
    { label: 'Administrador', value: 'admin' },
    { label: 'Editor', value: 'editor' },
    { label: 'Leitor', value: 'leitor' },
  ];
  protected readonly tokens = [
    '--b-white', '--b0', '--b1', '--b2', '--b3', '--b4', '--b6', '--b8', '--b10', '--b12',
    '--white', '--c2', '--c4', '--c6', '--c8', '--c10', '--erro',
  ];

  protected readonly avisos = new Avisos();
  protected readonly popupMarca = signal(false);
  protected readonly cor = signal('#7c3aed');
  protected readonly raio = signal(10);

  private readonly valores = signal({
    padrao: '',
    destaque: '',
    compacto: '',
    dinamico: '',
    perfil: null as string | null,
  });
  protected readonly exemplo = form(this.valores);

  mostrar(tipo: PopupType, marca = false): void {
    this.popupMarca.set(marca);
    this.avisos.mostrar(tipo, `Exemplo de popup do tipo "${tipo}".`);
  }
}
