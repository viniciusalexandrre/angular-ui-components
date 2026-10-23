import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { form, FormField, required } from '@angular/forms/signals';

import { UiSelect } from './select';

const OPTIONS = [
  { label: 'Um', value: 1 },
  { label: 'Dois', value: 2, disabled: true },
  { label: 'Três', value: 3 },
];

@Component({
  imports: [UiSelect, FormField],
  template: `<ui-select id="n" label="Número" [options]="options" [formField]="f.n" />`,
})
class FormHost {
  readonly options = OPTIONS;
  readonly model = signal<{ n: number | null }>({ n: null });
  readonly f = form(this.model, (p) => required(p.n, { message: 'Obrigatório' }));
}

describe('UiSelect com Signal Forms', () => {
  it('seleciona por clique e atualiza o model', async () => {
    const fixture = TestBed.createComponent(FormHost);
    await fixture.whenStable();
    const trigger: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    trigger.click();
    await fixture.whenStable();
    fixture.nativeElement.querySelectorAll('[role="option"]')[2].click();
    await fixture.whenStable();

    expect(fixture.componentInstance.model().n).toBe(3);
    expect(trigger.textContent).toContain('Três');
  });

  it('mostra o erro depois do blur', async () => {
    const fixture = TestBed.createComponent(FormHost);
    await fixture.whenStable();

    fixture.nativeElement.querySelector('button').dispatchEvent(new Event('blur'));
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('#n-error').textContent).toContain('Obrigatório');
  });
});

describe('UiSelect', () => {
  let fixture: ComponentFixture<UiSelect>;
  let trigger: HTMLButtonElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiSelect);
    fixture.componentRef.setInput('id', 'n');
    fixture.componentRef.setInput('label', 'Número');
    fixture.componentRef.setInput('options', OPTIONS);
    await fixture.whenStable();
    trigger = fixture.nativeElement.querySelector('button');
  });

  const press = (key: string) => trigger.dispatchEvent(new KeyboardEvent('keydown', { key }));

  it('liga aria-controls ao id da lista', async () => {
    press('ArrowDown');
    await fixture.whenStable();

    const listbox = fixture.nativeElement.querySelector('[role="listbox"]');
    expect(trigger.getAttribute('aria-controls')).toBe(listbox.id);
  });

  it('navega pelo teclado pulando opções desabilitadas', () => {
    press('ArrowDown');
    press('ArrowDown');
    press('ArrowDown');
    press('Enter');

    expect(fixture.componentInstance.value()).toBe(3);
  });

  it('não abre quando desabilitado', async () => {
    fixture.componentRef.setInput('disabled', true);
    await fixture.whenStable();
    press('ArrowDown');

    expect(fixture.componentInstance.isOpen()).toBe(false);
  });
});
