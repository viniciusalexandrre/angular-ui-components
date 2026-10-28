import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTableActionEvent, FileTableEntry, UiFileTable } from './file-table';

const CONTEUDO = {
  folders: [{ name: 'documentos', prefix: 'documentos/' }],
  objects: [{ key: 'relatorio.pdf', name: 'relatorio.pdf', size: 2048, last_modified: '2026-10-20T14:30:00Z' }],
};

describe('UiFileTable', () => {
  let fixture: ComponentFixture<UiFileTable>;
  let el: HTMLElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiFileTable);
    fixture.componentRef.setInput('content', CONTEUDO);
    fixture.componentRef.setInput('optionsMenu', [{ id: 'baixar', label: 'Baixar' }]);
    fixture.componentRef.setInput('optionsMenuFolder', [{ id: 'abrir', label: 'Abrir' }]);
    fixture.componentRef.setInput('timezone', 'UTC');
    await fixture.whenStable();
    el = fixture.nativeElement;
  });

  const set = async (name: string, value: unknown) => {
    fixture.componentRef.setInput(name, value);
    await fixture.whenStable();
  };

  it('lista pastas antes dos arquivos, com tamanho e data formatados', () => {
    const linhas = Array.from(el.querySelectorAll('.storage-row'));
    expect(linhas.map((tr) => tr.querySelector('.name-label')!.textContent!.trim())).toEqual([
      'documentos',
      'relatorio.pdf',
    ]);
    expect(linhas[1].textContent).toContain('2.00 KB');
    expect(linhas[1].textContent).toContain('20/10/2026');
    expect(linhas[1].textContent).toContain('às 14:30');
  });

  it('emite rowClick pelo clique na linha e pelo botão do nome (teclado)', () => {
    const clicadas: FileTableEntry[] = [];
    fixture.componentInstance.rowClick.subscribe((e) => clicadas.push(e));

    el.querySelector<HTMLElement>('.storage-row')!.click();
    el.querySelectorAll<HTMLButtonElement>('.name-cell')[1].click();

    expect(clicadas.map((e) => e.name)).toEqual(['documentos', 'relatorio.pdf']);
  });

  it('emite a ação do menu sem disparar o clique da linha', async () => {
    const acoes: FileTableActionEvent[] = [];
    const linhas = vi.fn();
    fixture.componentInstance.menuAction.subscribe((a) => acoes.push(a));
    fixture.componentInstance.rowClick.subscribe(linhas);

    el.querySelectorAll<HTMLButtonElement>('.menu-trigger')[1].click();
    await fixture.whenStable();
    el.querySelector<HTMLButtonElement>('[role="menuitem"]')!.click();

    expect(acoes).toEqual([{ action: 'baixar', entry: CONTEUDO.objects[0] }]);
    expect(linhas).not.toHaveBeenCalled();
  });

  it('mostra os estados de carregando, vazio, erro e dados inválidos', async () => {
    await set('content', null);
    await set('isLoading', true);
    expect(el.querySelector('ui-skeleton')).not.toBeNull();

    await set('isLoading', false);
    expect(el.querySelector('.state-title')!.textContent).toContain('Erro no retorno dos dados');

    await set('content', { folders: [], objects: [] });
    expect(el.querySelector('.empty-state')!.textContent).toContain('Nenhuma pasta ou arquivo');

    await set('errorMessage', 'Sem permissão');
    expect(el.querySelector('[role="alert"]')!.textContent).toContain('Sem permissão');
  });
});
