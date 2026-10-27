import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { form, FormField, max, min, required } from '@angular/forms/signals';

import { UiInputNumber } from './input-number';

@Component({
  imports: [UiInputNumber, FormField],
  template: `<ui-input-number id="idade" label="Idade" [formField]="f.idade" />`,
})
class FormHost {
  readonly model = signal<{ idade: number | null }>({ idade: null });
  readonly f = form(this.model, (p) => {
    required(p.idade, { message: 'Obrigatório' });
    min(p.idade, 18, { message: 'Mínimo 18' });
    max(p.idade, 120);
  });
}

describe('UiInputNumber com Signal Forms', () => {
  async function criar() {
    const fixture = TestBed.createComponent(FormHost);
    await fixture.whenStable();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    return { fixture, input };
  }

  const digitar = (input: HTMLInputElement, valor: string) => {
    input.value = valor;
    input.dispatchEvent(new Event('input'));
  };

  it('grava number no model (não string) e null quando vazio', async () => {
    const { fixture, input } = await criar();

    digitar(input, '42');
    expect(fixture.componentInstance.model().idade).toBe(42);

    digitar(input, '');
    expect(fixture.componentInstance.model().idade).toBeNull();
  });

  it('recebe min/max dos validadores e mostra o erro após o blur', async () => {
    const { fixture, input } = await criar();
    expect(input.getAttribute('min')).toBe('18');
    expect(input.getAttribute('max')).toBe('120');

    digitar(input, '10');
    input.dispatchEvent(new Event('blur'));
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('#idade-error').textContent).toContain('Mínimo 18');
  });

  it('mostra o valor vindo do model', async () => {
    const { fixture, input } = await criar();
    fixture.componentInstance.model.set({ idade: 30 });
    await fixture.whenStable();

    expect(input.value).toBe('30');
  });
});

describe('UiInputNumber', () => {
  it('usa teclado decimal quando step não é inteiro', async () => {
    const fixture = TestBed.createComponent(UiInputNumber);
    fixture.componentRef.setInput('id', 'preco');
    fixture.componentRef.setInput('label', 'Preço');
    fixture.componentRef.setInput('step', 0.01);
    await fixture.whenStable();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(input.getAttribute('inputmode')).toBe('decimal');
    expect(input.getAttribute('step')).toBe('0.01');
  });
});
