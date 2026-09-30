import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputSearch } from './input-search';

describe('UiInputSearch', () => {
  let fixture: ComponentFixture<UiInputSearch>;
  let input: HTMLInputElement;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiInputSearch);
    fixture.componentRef.setInput('id', 'busca');
    fixture.componentRef.setInput('label', 'Buscar produtos');
    await fixture.whenStable();
    input = fixture.nativeElement.querySelector('input');
    button = fixture.nativeElement.querySelector('button');
  });

  it('tem label associado ao input', () => {
    const label: HTMLLabelElement = fixture.nativeElement.querySelector('label');
    expect(label.htmlFor).toBe('busca');
    expect(label.textContent).toContain('Buscar produtos');
  });

  it('não envia formulários (botão type="button")', () => {
    expect(button.type).toBe('button');
    expect(button.getAttribute('aria-label')).toBe('Pesquisar');
  });

  it('atualiza value e emite search no Enter e no clique', () => {
    const search = vi.fn();
    fixture.componentInstance.search.subscribe(search);

    input.value = 'teclado';
    input.dispatchEvent(new Event('input'));
    expect(fixture.componentInstance.value()).toBe('teclado');

    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    button.click();

    expect(search).toHaveBeenCalledTimes(2);
    expect(search).toHaveBeenCalledWith('teclado');
  });
});
