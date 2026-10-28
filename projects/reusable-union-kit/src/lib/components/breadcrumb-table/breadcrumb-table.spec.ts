import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBreadcrumbTable } from './breadcrumb-table';

const itens = (...nomes: string[]) => nomes.map((name, index) => ({ index, name }));

describe('UiBreadcrumbTable', () => {
  let fixture: ComponentFixture<UiBreadcrumbTable>;
  let el: HTMLElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiBreadcrumbTable);
    fixture.componentRef.setInput('rootLabel', 'Raiz');
    await fixture.whenStable();
    el = fixture.nativeElement;
  });

  const set = async (nomes: string[]) => {
    fixture.componentRef.setInput('items', itens(...nomes));
    await fixture.whenStable();
  };

  it('na raiz, o rótulo raiz é o item atual (não clicável)', () => {
    expect(el.querySelector('[aria-current="location"]')!.textContent).toContain('Raiz');
    expect(el.querySelector('button')).toBeNull();
  });

  it('mostra todos os itens quando cabem e marca o último como atual', async () => {
    await set(['contratos', '2026', 'clientes']);

    expect(el.querySelector('details')).toBeNull();
    expect(el.querySelector('[aria-current="location"]')!.textContent).toContain('clientes');
  });

  it('recolhe os itens do meio no menu e emite o índice escolhido', async () => {
    await set(['a', 'b', 'c', 'd', 'e']);
    const escolhidos: number[] = [];
    fixture.componentInstance.itemSelected.subscribe((i) => escolhidos.push(i));

    const menu = Array.from(el.querySelectorAll('.breadcrumb-menu-item')).map((b) => b.textContent!.trim());
    expect(menu).toEqual(['a', 'b', 'c']);

    el.querySelector<HTMLElement>('summary')!.click();
    await fixture.whenStable();
    expect(el.querySelector('details')!.open).toBe(true);

    el.querySelector<HTMLButtonElement>('.breadcrumb-menu-item')!.click();
    await fixture.whenStable();

    expect(escolhidos).toEqual([0]);
    expect(el.querySelector('details')!.open).toBe(false);
  });

  it('emite rootSelected ao clicar na raiz', async () => {
    await set(['contratos']);
    const raiz = vi.fn();
    fixture.componentInstance.rootSelected.subscribe(raiz);

    el.querySelector<HTMLButtonElement>('.breadcrumb-root button')!.click();
    expect(raiz).toHaveBeenCalledOnce();
  });
});
