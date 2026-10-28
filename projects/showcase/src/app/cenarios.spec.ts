import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { esperar } from './shared/avisos';
import { ArmazenamentoComponent } from './armazenamento/armazenamento';
import { ArquivosComponent } from './arquivos/arquivos';
import { FormComponent } from './form/form';
import { LoginComponent } from './login/login';
import { PainelComponent } from './painel/painel';
import { PersonalizacaoComponent } from './personalizacao/personalizacao';

const CASOS: [string, Type<unknown>][] = [
  ['Formulário de cadastro', FormComponent],
  ['Login com verificação em duas etapas', LoginComponent],
  ['Lista de arquivos', ArquivosComponent],
  ['Armazenamento', ArmazenamentoComponent],
  ['Painel', PainelComponent],
  ['Personalização de estilos', PersonalizacaoComponent],
];

describe('Cenários', () => {
  it.each(CASOS)('renderiza "%s" sem erros', async (titulo, componente) => {
    const fixture = TestBed.createComponent(componente);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain(titulo);
  });

  it('formulário: envio vazio mostra erros e a cidade fica bloqueada sem estado', async () => {
    const fixture = TestBed.createComponent(FormComponent);
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement;

    expect(el.querySelector<HTMLInputElement>('#cidade')!.disabled).toBe(true);
    expect(el.querySelector<HTMLInputElement>('#convite')!.readOnly).toBe(true);

    el.querySelector('form')!.dispatchEvent(new Event('submit'));
    await fixture.whenStable();

    expect(el.querySelector('#nome-error')?.textContent).toContain('Informe seu nome.');
    expect(fixture.componentInstance.model().nome).toBe('');
  });

  it('arquivos: mostra skeleton e depois a primeira página', async () => {
    const fixture = TestBed.createComponent(ArquivosComponent);
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('ui-skeleton')).not.toBeNull();

    await esperar(1000);
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelectorAll('tbody tr').length).toBe(8);
    expect(fixture.nativeElement.querySelector('ui-pagination')).not.toBeNull();
  });

  it('arquivos: expande detalhes e bloqueia excluir em arquivo protegido', async () => {
    const fixture = TestBed.createComponent(ArquivosComponent);
    await esperar(1000);
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement;

    el.querySelector<HTMLButtonElement>('.toggle')!.click();
    await fixture.whenStable();
    expect(el.querySelector('.detail-row')!.textContent).toContain('PDF');

    // 6º arquivo é "backup-06.zip", protegido.
    el.querySelectorAll<HTMLButtonElement>('.menu-trigger')[5].click();
    await fixture.whenStable();
    const excluir = Array.from(el.querySelectorAll('[role="menuitem"]')).find((b) =>
      b.textContent!.includes('Excluir'),
    )!;
    expect(excluir.getAttribute('aria-disabled')).toBe('true');
  });

  it('armazenamento: entra numa pasta pelo clique na linha', async () => {
    const fixture = TestBed.createComponent(ArmazenamentoComponent);
    await esperar(800);
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement;
    const nomes = () =>
      Array.from(el.querySelectorAll('.name-label')).map((n) => n.textContent!.trim());

    expect(nomes()).toEqual(['contratos', 'imagens', 'backup.zip', 'relatorio-outubro.xlsx']);

    el.querySelector<HTMLElement>('.storage-row')!.click();
    await esperar(800);
    await fixture.whenStable();

    expect(nomes()).toEqual(['2025', '2026']);
    expect(el.querySelector('[aria-current="location"]')!.textContent).toContain('contratos');
  });

  it('painel: troca o skeleton pelos gráficos', async () => {
    const fixture = TestBed.createComponent(PainelComponent);
    await fixture.whenStable();

    await esperar(1100);
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelectorAll('.bar-column').length).toBe(12);
    expect(fixture.nativeElement.querySelectorAll('ui-pie-chart').length).toBe(2);
  });
});
