import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { UiTable, UiTableAction, UiTableActionEvent, UiTableCell, UiTableColumn, UiTableDetail } from './table';

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
}

@Component({
  imports: [UiTable, UiTableCell, UiTableDetail],
  template: `
    <ui-table
      label="Pessoas"
      [columns]="columns"
      [rows]="rows()"
      [rowKey]="porId"
      [actions]="actions"
      (action)="ultimaAcao = $event"
    >
      <ng-template uiTableCell="idade" let-value="value">
        <strong class="idade">{{ value }}</strong>
      </ng-template>
      <ng-template uiTableDetail let-pessoa>
        <p class="detalhe">Detalhes de {{ pessoa.nome }}</p>
      </ng-template>
    </ui-table>
  `,
})
class Host {
  readonly rows = signal<Pessoa[]>([
    { id: 1, nome: 'Ana', idade: 30 },
    { id: 2, nome: 'Bruno', idade: 17 },
  ]);
  readonly columns: UiTableColumn<Pessoa>[] = [
    { key: 'nome', header: 'Nome' },
    { key: 'idade', header: 'Idade', value: (p) => `${p.idade} anos`, align: 'end' },
  ];
  readonly actions: UiTableAction<Pessoa>[] = [
    { id: 'editar', label: 'Editar' },
    { id: 'excluir', label: 'Excluir', danger: true, disabled: (p) => p.idade < 18 },
  ];
  readonly porId = (p: Pessoa) => p.id;
  ultimaAcao: UiTableActionEvent<Pessoa> | null = null;
}

describe('UiTable', () => {
  async function criar() {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }

  it('gera cabeçalhos e células a partir de columns, com formatação e template', async () => {
    const { el } = await criar();

    const headers = Array.from(el.querySelectorAll('th')).map((th) => th.textContent!.trim());
    expect(headers).toEqual(['Detalhes', 'Nome', 'Idade', 'Ações']);

    const primeira = el.querySelector('tbody tr')!;
    expect(primeira.textContent).toContain('Ana');
    expect(primeira.querySelector('.idade')!.textContent).toBe('30 anos');
  });

  it('abre e fecha a linha de detalhes', async () => {
    const { fixture, el } = await criar();
    const toggle = el.querySelector<HTMLButtonElement>('.toggle')!;

    toggle.click();
    await fixture.whenStable();

    const detalhe = el.querySelector('.detail-row')!;
    expect(detalhe.textContent).toContain('Detalhes de Ana');
    expect(toggle.getAttribute('aria-controls')).toBe(detalhe.id);

    toggle.click();
    await fixture.whenStable();
    expect(el.querySelector('.detail-row')).toBeNull();
  });

  it('mantém a linha aberta quando rows é recriado (usa rowKey)', async () => {
    const { fixture, el } = await criar();
    el.querySelector<HTMLButtonElement>('.toggle')!.click();
    await fixture.whenStable();

    fixture.componentInstance.rows.update((rows) => rows.map((r) => ({ ...r })));
    await fixture.whenStable();

    expect(el.querySelector('.detail-row')).not.toBeNull();
  });

  it('emite a ação escolhida no menu com a linha e respeita disabled por linha', async () => {
    const { fixture, el } = await criar();
    const menus = el.querySelectorAll<HTMLButtonElement>('.menu-trigger');

    menus[1].click();
    await fixture.whenStable();
    const [editar, excluir] = Array.from(el.querySelectorAll<HTMLButtonElement>('[role="menuitem"]'));

    expect(excluir.getAttribute('aria-disabled')).toBe('true');
    excluir.click();
    expect(fixture.componentInstance.ultimaAcao).toBeNull();

    editar.click();
    expect(fixture.componentInstance.ultimaAcao).toEqual({
      action: 'editar',
      row: { id: 2, nome: 'Bruno', idade: 17 },
    });
  });

  it('mostra emptyText quando não há linhas', async () => {
    const { fixture, el } = await criar();

    fixture.componentInstance.rows.set([]);
    await fixture.whenStable();
    expect(el.querySelector('.table-empty')!.textContent).toContain('Nenhum registro');
  });
});
