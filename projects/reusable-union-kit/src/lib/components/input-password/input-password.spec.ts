import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputPassword } from './input-password';

describe('UiInputPassword', () => {
  let fixture: ComponentFixture<UiInputPassword>;
  let input: HTMLInputElement;
  let toggle: HTMLButtonElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiInputPassword);
    fixture.componentRef.setInput('id', 'senha');
    fixture.componentRef.setInput('label', 'Senha');
    await fixture.whenStable();
    input = fixture.nativeElement.querySelector('input');
    toggle = fixture.nativeElement.querySelector('button');
  });

  it('usa current-password como autocomplete padrão', () => {
    expect(input.getAttribute('autocomplete')).toBe('current-password');
  });

  it('alterna a visibilidade da senha', async () => {
    expect(input.type).toBe('password');
    expect(toggle.getAttribute('aria-pressed')).toBe('false');

    toggle.click();
    await fixture.whenStable();

    expect(input.type).toBe('text');
    expect(toggle.getAttribute('aria-pressed')).toBe('true');
    expect(toggle.getAttribute('aria-label')).toBe('Ocultar senha');
  });

  it('aponta aria-describedby para um id de erro existente', async () => {
    fixture.componentRef.setInput('invalid', true);
    fixture.componentRef.setInput('touched', true);
    await fixture.whenStable();

    const errorId = input.getAttribute('aria-describedby');
    expect(errorId).toBe('senha-error');
    expect(fixture.nativeElement.querySelector(`#${errorId}`)).not.toBeNull();
  });
});
