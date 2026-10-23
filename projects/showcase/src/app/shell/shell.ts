import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CENARIOS } from '../app.routes';
import { UiDashboardLayout, UiDashboardMenuItem, UiDashboardUser } from '../kit';

/** Área "logada" do showcase: todos os cenários rodam dentro do ui-layout-dashboard. */
@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, UiDashboardLayout],
  template: `
    <ui-layout-dashboard
      brandName="reusable-union-kit"
      brandLogo="/logo.svg"
      [menu]="menu"
      [user]="usuario()"
      [userLoading]="carregandoUsuario()"
      [(collapsed)]="recolhido"
      (logout)="sair()"
    >
      <router-outlet />
    </ui-layout-dashboard>
  `,
})
export class ShellComponent {
  private readonly router = inject(Router);

  protected readonly menu: UiDashboardMenuItem[] = [
    ...CENARIOS.map((c) => ({ id: c.path, text: c.titulo, link: `/cenarios/${c.path}` })),
    { id: 'entrar', text: 'Layout de autenticação', link: '/entrar' },
  ];

  protected readonly recolhido = signal(false);
  protected readonly carregandoUsuario = signal(true);
  protected readonly usuario = signal<UiDashboardUser | null>(null);

  constructor() {
    // Simula a busca do usuário logado.
    const timer = setTimeout(() => {
      this.usuario.set({ name: 'Usuária Demonstração', email: 'demo@exemplo.com' });
      this.carregandoUsuario.set(false);
    }, 800);
    inject(DestroyRef).onDestroy(() => clearTimeout(timer));
  }

  sair(): void {
    this.router.navigateByUrl('/entrar');
  }
}
