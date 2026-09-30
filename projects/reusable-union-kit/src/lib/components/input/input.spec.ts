import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { form, FormField, required } from '@angular/forms/signals';

import { UiInput } from './input';

@Component({
  imports: [UiInput, FormField],
  template: `<ui-input id="nome" label="Nome" [formField]="userForm.name" />`,
})
class FormHost {
  readonly model = signal({ name: '' });
  readonly userForm = form(this.model, (p) => required(p.name, { message: 'Obrigatório' }));
}

describe('UiInput com Signal Forms', () => {
  it('marca o campo como tocado no blur e mostra o erro', async () => {
    const fixture = TestBed.createComponent(FormHost);
    await fixture.whenStable();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    expect(fixture.componentInstance.userForm.name().touched()).toBe(false);

    input.dispatchEvent(new Event('blur'));
    await fixture.whenStable();

    expect(fixture.componentInstance.userForm.name().touched()).toBe(true);
    expect(fixture.nativeElement.querySelector('#nome-error').textContent).toContain('Obrigatório');
    expect(input.required).toBe(true);
  });

  it('sincroniza o valor digitado com o model do formulário', async () => {
    const fixture = TestBed.createComponent(FormHost);
    await fixture.whenStable();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    input.value = 'Ana';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();

    expect(fixture.componentInstance.model().name).toBe('Ana');
  });
});

describe('UiInput', () => {
  let fixture: ComponentFixture<UiInput>;
  let input: HTMLInputElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiInput);
    fixture.componentRef.setInput('id', 'email');
    fixture.componentRef.setInput('label', 'E-mail');
    await fixture.whenStable();
    input = fixture.nativeElement.querySelector('input');
  });

  it('atualiza value ao digitar', () => {
    input.value = 'a@b.com';
    input.dispatchEvent(new Event('input'));
    expect(fixture.componentInstance.value()).toBe('a@b.com');
  });

  it('emite touch no blur', () => {
    const touch = vi.fn();
    fixture.componentInstance.touch.subscribe(touch);
    input.dispatchEvent(new Event('blur'));
    expect(touch).toHaveBeenCalledOnce();
  });

  it('aponta aria-describedby para o erro quando inválido e tocado', async () => {
    fixture.componentRef.setInput('invalid', true);
    fixture.componentRef.setInput('touched', true);
    fixture.componentRef.setInput('errors', [{ kind: 'required', message: 'Obrigatório' }]);
    await fixture.whenStable();

    const errorId = input.getAttribute('aria-describedby');
    expect(errorId).toBe('email-error');
    expect(fixture.nativeElement.querySelector(`#${errorId}`).textContent).toContain('Obrigatório');
  });
});
