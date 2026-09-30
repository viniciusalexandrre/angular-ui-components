import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiField } from './field';

describe('UiField', () => {
  let fixture: ComponentFixture<UiField>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiField);
    fixture.componentRef.setInput('id', 'nome');
    fixture.componentRef.setInput('label', 'Nome');
    fixture.componentRef.setInput('hint', 'Como no documento');
    await fixture.whenStable();
  });

  it('mostra a dica enquanto não há erros', () => {
    expect(fixture.nativeElement.querySelector('#nome-hint').textContent).toContain(
      'Como no documento',
    );
  });

  it('troca a dica pelos erros quando showErrors é true', async () => {
    fixture.componentRef.setInput('showErrors', true);
    fixture.componentRef.setInput('errors', [{ kind: 'required', message: 'Obrigatório' }]);
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('#nome-hint')).toBeNull();
    expect(fixture.nativeElement.querySelector('#nome-error').textContent).toContain('Obrigatório');
  });
});
