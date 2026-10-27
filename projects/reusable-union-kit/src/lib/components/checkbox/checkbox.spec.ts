import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { form, FormField, required } from '@angular/forms/signals';

import { UiCheckbox } from './checkbox';

@Component({
  imports: [UiCheckbox, FormField],
  template: `<ui-checkbox id="termos" label="Aceito os termos" [formField]="f.termos" />`,
})
class FormHost {
  readonly model = signal({ termos: false });
  readonly f = form(this.model, (p) => required(p.termos, { message: 'Aceite os termos.' }));
}

describe('UiCheckbox com Signal Forms', () => {
  async function criar() {
    const fixture = TestBed.createComponent(FormHost);
    await fixture.whenStable();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    return { fixture, input };
  }

  it('marca e desmarca atualizando o model', async () => {
    const { fixture, input } = await criar();

    input.click();
    expect(fixture.componentInstance.model().termos).toBe(true);

    input.click();
    expect(fixture.componentInstance.model().termos).toBe(false);
  });

  it('required trata false como não preenchido e mostra o erro após o blur', async () => {
    const { fixture, input } = await criar();

    input.dispatchEvent(new Event('blur'));
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('#termos-error').textContent).toContain('Aceite os termos.');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  it('o label aponta para o input (clicar no texto marca)', async () => {
    const { fixture } = await criar();

    fixture.nativeElement.querySelector('.checkbox-text').click();
    expect(fixture.componentInstance.model().termos).toBe(true);
  });

  it('reflete o valor vindo do model', async () => {
    const { fixture, input } = await criar();
    fixture.componentInstance.model.set({ termos: true });
    await fixture.whenStable();

    expect(input.checked).toBe(true);
  });
});

describe('UiCheckbox', () => {
  async function criar(inputs: Record<string, unknown>) {
    const fixture = TestBed.createComponent(UiCheckbox);
    fixture.componentRef.setInput('id', 'todos');
    fixture.componentRef.setInput('label', 'Selecionar todos');
    for (const [k, v] of Object.entries(inputs)) fixture.componentRef.setInput(k, v);
    await fixture.whenStable();
    return { fixture, input: fixture.nativeElement.querySelector('input') as HTMLInputElement };
  }

  it('aplica o estado indeterminado', async () => {
    const { input } = await criar({ indeterminate: true });
    expect(input.indeterminate).toBe(true);
  });

  it('não troca quando readonly', async () => {
    const { fixture, input } = await criar({ readonly: true });
    input.click();
    expect(fixture.componentInstance.checked()).toBe(false);
    expect(input.getAttribute('aria-readonly')).toBe('true');
  });
});
