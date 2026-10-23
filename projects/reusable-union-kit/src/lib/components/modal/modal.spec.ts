import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModal } from './modal';

describe('UiModal', () => {
  let fixture: ComponentFixture<UiModal>;
  let closed: ReturnType<typeof vi.fn<() => void>>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiModal);
    fixture.componentRef.setInput('label', 'Confirmar exclusão');
    await fixture.whenStable();
    closed = vi.fn<() => void>();
    fixture.componentInstance.close.subscribe(closed);
  });

  it('expõe role dialog com nome acessível e recebe o foco', () => {
    const dialog: HTMLElement = fixture.nativeElement.querySelector('[role="dialog"]');
    expect(dialog.getAttribute('aria-modal')).toBe('true');
    expect(dialog.getAttribute('aria-label')).toBe('Confirmar exclusão');
    expect(document.activeElement).toBe(dialog);
  });

  it('fecha com Esc e com clique no fundo', () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.nativeElement.querySelector('.backdrop').click();
    expect(closed).toHaveBeenCalledTimes(2);
  });

  it('não fecha ao clicar dentro do diálogo nem no fundo com closeOnBackdrop=false', async () => {
    fixture.nativeElement.querySelector('[role="dialog"]').click();
    fixture.componentRef.setInput('closeOnBackdrop', false);
    await fixture.whenStable();
    fixture.nativeElement.querySelector('.backdrop').click();

    expect(closed).not.toHaveBeenCalled();
  });
});
