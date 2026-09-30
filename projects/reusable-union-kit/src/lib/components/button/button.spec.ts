import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { UiButton } from './button';

@Component({
  imports: [UiButton],
  template: `
    <button ui-button type="submit" disabled aria-describedby="x">Salvar</button>
    <a ui-button variant="secondary" size="sm" href="/home">Início</a>
  `,
})
class Host {}

describe('UiButton', () => {
  it('mantém os atributos nativos e aplica as classes de variante', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.type).toBe('submit');
    expect(button.disabled).toBe(true);
    expect(button.getAttribute('aria-describedby')).toBe('x');
    expect(button.classList).toContain('ui-button-primary');

    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(link.getAttribute('href')).toBe('/home');
    expect(link.classList).toContain('ui-button-secondary');
    expect(link.classList).toContain('ui-button-sm');
  });
});
