import { TestBed } from '@angular/core/testing';

import { UiPopup } from './popup';

describe('UiPopup', () => {
  it('aplica a classe do tipo e usa role alert para erro', async () => {
    const fixture = TestBed.createComponent(UiPopup);
    fixture.componentRef.setInput('message', 'Falhou');
    fixture.componentRef.setInput('type', 'error');
    await fixture.whenStable();

    const host: HTMLElement = fixture.nativeElement;
    expect(host.classList).toContain('ui-popup-error');
    expect(host.getAttribute('role')).toBe('alert');
  });

  it('emite closed ao clicar em fechar', async () => {
    const fixture = TestBed.createComponent(UiPopup);
    fixture.componentRef.setInput('message', 'Salvo');
    await fixture.whenStable();

    const closed = vi.fn();
    fixture.componentInstance.closed.subscribe(closed);
    fixture.nativeElement.querySelector('button').click();

    expect(closed).toHaveBeenCalledOnce();
    expect(fixture.nativeElement.getAttribute('role')).toBe('status');
  });
});
