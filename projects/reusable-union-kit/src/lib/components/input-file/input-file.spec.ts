import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { form, FormField, required } from '@angular/forms/signals';

import { UiInputFile, UiInputFileRejection } from './input-file';

const arquivo = (nome: string, tamanho = 10, tipo = '') =>
  new File(['x'.repeat(tamanho)], nome, { type: tipo });

function soltar(el: HTMLElement, files: File[]) {
  const event = new Event('drop', { bubbles: true }) as DragEvent;
  Object.defineProperty(event, 'dataTransfer', { value: { files } });
  el.dispatchEvent(event);
}

@Component({
  imports: [UiInputFile, FormField],
  template: `<ui-input-file id="doc" label="Comprovante" accept=".pdf" [formField]="f.doc" />`,
})
class FormHost {
  readonly model = signal<{ doc: File | null }>({ doc: null });
  readonly f = form(this.model, (p) => required(p.doc, { message: 'Envie o comprovante.' }));
}

describe('UiInputFile com Signal Forms', () => {
  async function criar() {
    const fixture = TestBed.createComponent(FormHost);
    await fixture.whenStable();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }

  it('arrastar um arquivo aceito grava o File no model e mostra o nome', async () => {
    const { fixture, el } = await criar();
    const pdf = arquivo('recibo.pdf');

    soltar(el.querySelector('.file')!, [pdf]);
    await fixture.whenStable();

    expect(fixture.componentInstance.model().doc).toBe(pdf);
    expect(el.querySelector('.file-title')!.textContent).toContain('recibo.pdf');
  });

  it('ignora arquivo arrastado fora do accept e mostra o erro de obrigatório', async () => {
    const { fixture, el } = await criar();

    soltar(el.querySelector('.file')!, [arquivo('foto.png', 10, 'image/png')]);
    await fixture.whenStable();

    expect(fixture.componentInstance.model().doc).toBeNull();
    expect(el.querySelector('#doc-error')!.textContent).toContain('Envie o comprovante.');
  });

  it('remove o arquivo pelo botão', async () => {
    const { fixture, el } = await criar();
    soltar(el.querySelector('.file')!, [arquivo('recibo.pdf')]);
    await fixture.whenStable();

    el.querySelector<HTMLButtonElement>('.file-remove')!.click();
    await fixture.whenStable();

    expect(fixture.componentInstance.model().doc).toBeNull();
  });
});

describe('UiInputFile múltiplo', () => {
  it('acumula sem duplicar, respeita maxSize e emite rejected', async () => {
    const fixture = TestBed.createComponent(UiInputFile);
    fixture.componentRef.setInput('id', 'anexos');
    fixture.componentRef.setInput('label', 'Anexos');
    fixture.componentRef.setInput('multiple', true);
    fixture.componentRef.setInput('maxSize', 100);
    await fixture.whenStable();

    const rejeitados: UiInputFileRejection[][] = [];
    fixture.componentInstance.rejected.subscribe((r) => rejeitados.push(r));
    const zona: HTMLElement = fixture.nativeElement.querySelector('.file');
    const a = arquivo('a.txt');

    soltar(zona, [a, arquivo('b.txt')]);
    soltar(zona, [arquivo('a.txt'), arquivo('grande.txt', 500)]);
    await fixture.whenStable();

    const nomes = (fixture.componentInstance.value() as File[]).map((f) => f.name);
    expect(nomes).toEqual(['a.txt', 'b.txt']);
    expect(rejeitados[0]).toEqual([expect.objectContaining({ reason: 'maxSize' })]);
    expect(fixture.nativeElement.querySelector('.file-title').textContent).toContain('2 arquivos');
  });
});
