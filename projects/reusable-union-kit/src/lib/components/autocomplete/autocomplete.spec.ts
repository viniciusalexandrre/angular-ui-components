import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteOption, UiAutocomplete } from './autocomplete';

const OPTIONS: AutocompleteOption[] = [
  { label: 'São Paulo', value: 'SP' },
  { label: 'Rio de Janeiro', value: 'RJ' },
];

describe('UiAutocomplete', () => {
  let fixture: ComponentFixture<UiAutocomplete>;
  let component: UiAutocomplete;
  let input: HTMLInputElement;

  const type = async (text: string) => {
    input.value = text;
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
  };

  const key = async (k: string) => {
    input.dispatchEvent(new KeyboardEvent('keydown', { key: k }));
    await fixture.whenStable();
  };

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiAutocomplete);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'estado');
    fixture.componentRef.setInput('label', 'Estado');
    fixture.componentRef.setInput('options', OPTIONS);
    await fixture.whenStable();
    input = fixture.nativeElement.querySelector('input');
  });

  it('só emite searchChange a partir de minSearchLength', async () => {
    const search = vi.fn();
    component.searchChange.subscribe(search);

    await type('S');
    expect(search).not.toHaveBeenCalled();

    await type('Sã');
    expect(search).toHaveBeenCalledWith('Sã');
  });

  it('seleciona pelo teclado e guarda o value, exibindo o label', async () => {
    await type('Ri');
    await key('ArrowDown');
    await key('ArrowDown');
    expect(input.getAttribute('aria-activedescendant')).toBe('estado-option-1');

    await key('Enter');

    expect(component.value()).toBe('RJ');
    expect(input.value).toBe('Rio de Janeiro');
    expect(input.getAttribute('aria-expanded')).toBe('false');
  });

  it('acompanha mudanças externas de value (reset/patch do formulário)', async () => {
    component.value.set('SP');
    await fixture.whenStable();
    expect(input.value).toBe('São Paulo');

    component.value.set(null);
    await fixture.whenStable();
    expect(input.value).toBe('');
  });

  it('marca opção inválida no blur quando o texto não corresponde a nenhuma opção', async () => {
    const touch = vi.fn();
    component.touch.subscribe(touch);

    await type('Bahia');
    input.dispatchEvent(new Event('blur'));
    await fixture.whenStable();

    expect(touch).toHaveBeenCalledOnce();
    expect(component.value()).toBeNull();
    expect(fixture.nativeElement.querySelector('#estado-error').textContent).toContain(
      'Selecione uma opção válida.',
    );
  });

  it('aceita o texto digitado no blur quando ele é igual a um label', async () => {
    await type('são paulo');
    input.dispatchEvent(new Event('blur'));
    await fixture.whenStable();

    expect(component.value()).toBe('SP');
  });

  it('exibe a mensagem de loadError como texto', async () => {
    fixture.componentRef.setInput('loadError', 'Falha na busca');
    await type('Sa');
    expect(fixture.nativeElement.querySelector('[role="alert"]').textContent).toContain(
      'Falha na busca',
    );
  });
});
