import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { UiDashboardLayout, UiDashboardUser } from './dashboard';

@Component({
  imports: [UiDashboardLayout],
  template: `
    <ui-layout-dashboard
      brandName="Minha empresa"
      [menu]="menu"
      [user]="user()"
      [userLoading]="loading()"
      [(collapsed)]="collapsed"
      (logout)="saiu = true"
    >
      <p class="conteudo">Página</p>
    </ui-layout-dashboard>
  `,
})
class Host {
  readonly menu = [
    { id: 1, text: 'Início', link: '/inicio' },
    { id: 2, text: 'Relatórios', link: '/relatorios' },
  ];
  readonly user = signal<UiDashboardUser | null>(null);
  readonly loading = signal(true);
  readonly collapsed = signal(false);
  saiu = false;
}

describe('UiDashboardLayout', () => {
  beforeEach(() => {
    vi.stubGlobal('matchMedia', () => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  afterEach(() => vi.unstubAllGlobals());

  async function criar() {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }

  it('gera os links do menu e projeta o conteúdo no <main>', async () => {
    const { el } = await criar();

    const links = Array.from(el.querySelectorAll<HTMLAnchorElement>('.nav-link'));
    expect(links.map((a) => a.getAttribute('href'))).toEqual(['/inicio', '/relatorios']);
    expect(el.querySelector('nav a button, nav button a')).toBeNull();
    expect(el.querySelector('main .conteudo')).not.toBeNull();
  });

  it('mostra skeleton carregando e depois nome e iniciais do usuário', async () => {
    const { fixture, el } = await criar();
    expect(el.querySelector('.user ui-skeleton')).not.toBeNull();

    fixture.componentInstance.user.set({ name: 'Ana Maria Souza', email: 'ana@exemplo.com' });
    fixture.componentInstance.loading.set(false);
    await fixture.whenStable();

    expect(el.querySelector('.user-name')!.textContent).toContain('Ana Maria Souza');
    expect(el.querySelector('.avatar')!.textContent!.trim()).toBe('AS');
  });

  it('recolhe o menu mantendo o texto dos links acessível e sincroniza [(collapsed)]', async () => {
    const { fixture, el } = await criar();
    const toggle = el.querySelector<HTMLButtonElement>('.collapse-button')!;

    toggle.click();
    await fixture.whenStable();

    expect(fixture.componentInstance.collapsed()).toBe(true);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(el.querySelector('.nav-link')!.textContent).toContain('Início');
    expect(el.querySelector('.nav-link')!.getAttribute('title')).toBe('Início');
  });

  it('emite logout', async () => {
    const { fixture, el } = await criar();
    fixture.componentInstance.loading.set(false);
    fixture.componentInstance.user.set({ name: 'Ana', email: 'a@b.com' });
    await fixture.whenStable();

    el.querySelector<HTMLButtonElement>('.logout-button')!.click();
    expect(fixture.componentInstance.saiu).toBe(true);
  });

  it('abre a gaveta no celular e fecha com Esc', async () => {
    const { fixture, el } = await criar();

    el.querySelector<HTMLButtonElement>('.mobile-menu-button')!.click();
    await fixture.whenStable();
    expect(el.querySelector('.dashboard')!.classList).toContain('mobile-open');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(el.querySelector('.dashboard')!.classList).not.toContain('mobile-open');
  });
});
