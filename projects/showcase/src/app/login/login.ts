import { Component, DestroyRef, inject, signal, viewChild } from '@angular/core';
import { email, form, FormField, FormRoot, required } from '@angular/forms/signals';
import { UiBanner, UiButton, UiInput, UiInputPassword, UiOtpInput, UiPopup } from '../kit';
import { Avisos, esperar } from '../shared/avisos';

type Etapa = 'credenciais' | 'codigo' | 'concluido';

/** Código aceito nesta simulação. */
const CODIGO_VALIDO = '123456';
const ESPERA_REENVIO = 30;

@Component({
  selector: 'app-login',
  imports: [FormField, FormRoot, UiBanner, UiButton, UiInput, UiInputPassword, UiOtpInput, UiPopup],
  template: `
    <header class="page-header">
      <h1>Login com verificação em duas etapas</h1>
      <p>E-mail e senha, depois um código de 6 dígitos. Para testar, use o código <strong>123456</strong>.</p>
    </header>

    @switch (etapa()) {
      @case ('credenciais') {
        <form class="card stack narrow" [formRoot]="login" novalidate>
          <h2>Entrar</h2>
          <ui-input id="login-email" label="E-mail" type="email" autocomplete="email" [formField]="login.email" />
          <ui-input-password id="login-senha" label="Senha" [formField]="login.senha" />
          <button ui-button size="lg" type="submit" [disabled]="login().submitting()">
            {{ login().submitting() ? 'Entrando...' : 'Entrar' }}
          </button>
        </form>
      }

      @case ('codigo') {
        <section class="card stack narrow" aria-labelledby="titulo-codigo">
          <h2 id="titulo-codigo">Digite o código</h2>
          <p class="muted">Enviamos um código para <strong>{{ credenciais().email }}</strong>.</p>

          <ui-otp-input
            label="Código de verificação"
            [error]="codigoInvalido()"
            [disabled]="verificando()"
            (completed)="verificar($event)"
          />
          @if (codigoInvalido()) {
            <small class="error" role="alert">Código incorreto. Tente novamente.</small>
          }
          @if (verificando()) {
            <small class="muted" role="status">Verificando...</small>
          }

          <div class="actions start">
            <button ui-button variant="ghost" size="sm" type="button" (click)="voltar()">Voltar</button>
            <button
              ui-button
              variant="secondary"
              size="sm"
              type="button"
              [disabled]="segundosReenvio() > 0"
              (click)="reenviar()"
            >
              {{ segundosReenvio() > 0 ? 'Reenviar em ' + segundosReenvio() + 's' : 'Reenviar código' }}
            </button>
          </div>
        </section>
      }

      @case ('concluido') {
        <ui-banner
          heading="Tudo certo!"
          subtitle="Você está conectado"
          description="Sua identidade foi confirmada. Este banner é o ui-banner com botão de ação."
          buttonText="Sair"
          (buttonClick)="sair()"
        />
      }
    }

    @if (avisos.atual(); as aviso) {
      <ui-popup
        [type]="aviso.type"
        [message]="aviso.message"
        animate.leave="ui-popup-leave"
        (closed)="avisos.fechar()"
      />
    }
  `,
  styles: `
    .narrow {
      max-width: 420px;
    }

    .error {
      color: var(--erro);
    }
  `,
})
export class LoginComponent {
  protected readonly avisos = new Avisos();

  protected readonly etapa = signal<Etapa>('credenciais');
  protected readonly codigoInvalido = signal(false);
  protected readonly verificando = signal(false);
  protected readonly segundosReenvio = signal(0);

  private readonly otp = viewChild(UiOtpInput);
  private contador?: ReturnType<typeof setInterval>;

  readonly credenciais = signal({ email: '', senha: '' });

  readonly login = form(
    this.credenciais,
    (p) => {
      required(p.email, { message: 'Informe seu e-mail.' });
      email(p.email, { message: 'Digite um e-mail válido.' });
      required(p.senha, { message: 'Informe sua senha.' });
    },
    {
      submission: {
        action: async () => {
          await esperar(700);
          this.etapa.set('codigo');
          this.iniciarContagem();
          return undefined;
        },
      },
    },
  );

  constructor() {
    inject(DestroyRef).onDestroy(() => clearInterval(this.contador));
  }

  async verificar(codigo: string): Promise<void> {
    this.verificando.set(true);
    this.codigoInvalido.set(false);
    await esperar(600);
    this.verificando.set(false);

    if (codigo === CODIGO_VALIDO) {
      clearInterval(this.contador);
      this.etapa.set('concluido');
      this.avisos.mostrar('success', 'Login realizado.');
    } else {
      this.codigoInvalido.set(true);
      this.otp()?.reset();
    }
  }

  reenviar(): void {
    this.codigoInvalido.set(false);
    this.otp()?.reset();
    this.iniciarContagem();
    this.avisos.mostrar('info', `Novo código enviado para ${this.credenciais().email}.`);
  }

  voltar(): void {
    clearInterval(this.contador);
    this.codigoInvalido.set(false);
    this.etapa.set('credenciais');
  }

  sair(): void {
    this.credenciais.set({ email: '', senha: '' });
    this.login().reset();
    this.etapa.set('credenciais');
    this.avisos.mostrar('warning', 'Você saiu da conta.');
  }

  private iniciarContagem(): void {
    clearInterval(this.contador);
    this.segundosReenvio.set(ESPERA_REENVIO);
    this.contador = setInterval(() => {
      this.segundosReenvio.update((s) => s - 1);
      if (this.segundosReenvio() <= 0) clearInterval(this.contador);
    }, 1000);
  }
}
