import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, FormRoot, required } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { UiAuthLayout, UiAuthLayoutPanel, UiButton, UiInput, UiInputPassword } from '../kit';
import { esperar } from '../shared/avisos';

/** Cenário do ui-layout-auth: página de login fora da área logada. */
@Component({
  selector: 'app-entrar',
  imports: [FormField, FormRoot, RouterLink, UiAuthLayout, UiButton, UiInput, UiInputPassword],
  template: `
    <ui-layout-auth [panel]="painel">
      <form class="stack" [formRoot]="login" novalidate>
        <header class="page-header">
          <h1>Entrar</h1>
          <p>Use qualquer e-mail válido e senha para voltar aos cenários.</p>
        </header>

        <ui-input id="entrar-email" label="E-mail" type="email" autocomplete="email" [formField]="login.email" />
        <ui-input-password id="entrar-senha" label="Senha" [formField]="login.senha" />

        <button ui-button size="lg" type="submit" [disabled]="login().submitting()">
          {{ login().submitting() ? 'Entrando...' : 'Entrar' }}
        </button>
        <a ui-button variant="ghost" routerLink="/cenarios">Voltar aos cenários</a>
      </form>
    </ui-layout-auth>
  `,
})
export class EntrarComponent {
  private readonly router = inject(Router);

  protected readonly painel: UiAuthLayoutPanel = {
    logo: { src: '/logo.svg', alt: 'reusable-union-kit', width: 24, height: 24 },
    image: { src: '/auth-illustration.svg', alt: '', width: 420, height: 320 },
    title: 'Componentes prontos para o seu produto',
    description: 'Formulários, tabelas, gráficos e layouts com estilo padrão e totalmente personalizáveis.',
  };

  private readonly credenciais = signal({ email: '', senha: '' });

  protected readonly login = form(
    this.credenciais,
    (p) => {
      required(p.email, { message: 'Informe seu e-mail.' });
      email(p.email, { message: 'Digite um e-mail válido.' });
      required(p.senha, { message: 'Informe sua senha.' });
    },
    {
      submission: {
        action: async () => {
          await esperar(600);
          await this.router.navigateByUrl('/cenarios');
          return undefined;
        },
      },
    },
  );
}
