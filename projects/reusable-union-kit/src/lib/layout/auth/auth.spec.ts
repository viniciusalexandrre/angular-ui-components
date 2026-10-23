import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { UiAuthLayout } from './auth';

@Component({
  imports: [UiAuthLayout],
  template: `
    <ui-layout-auth [panel]="{ title: 'Bem-vindo', description: 'Acesse sua conta.' }">
      <h1>Entrar</h1>
    </ui-layout-auth>
  `,
})
class Host {}

describe('UiAuthLayout', () => {
  it('mostra o painel e projeta o conteúdo dentro do <main>', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector('.auth-title')!.textContent).toContain('Bem-vindo');
    expect(el.querySelector('.auth-description')!.textContent).toContain('Acesse sua conta.');
    expect(el.querySelector('main h1')!.textContent).toBe('Entrar');
    expect(el.querySelector('img')).toBeNull();
  });
});
