import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCopyTextButton } from './copy-text-button';

describe('UiCopyTextButton', () => {
  let fixture: ComponentFixture<UiCopyTextButton>;
  let writeText: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });

    fixture = TestBed.createComponent(UiCopyTextButton);
    fixture.componentRef.setInput('text', 'npm i reusable-union-kit');
    await fixture.whenStable();
  });

  afterEach(() => vi.useRealTimers());

  it('copia o texto e volta ao estado inicial após resetDelay', async () => {
    vi.useFakeTimers();
    const copied = vi.fn();
    fixture.componentInstance.copied.subscribe(copied);

    await fixture.componentInstance.copy();

    expect(writeText).toHaveBeenCalledWith('npm i reusable-union-kit');
    expect(copied).toHaveBeenCalledWith('npm i reusable-union-kit');
    expect(fixture.componentInstance.isCopied()).toBe(true);

    vi.advanceTimersByTime(2000);
    expect(fixture.componentInstance.isCopied()).toBe(false);
  });

  it('emite copyFailed quando a cópia falha', async () => {
    writeText.mockRejectedValue(new Error('negado'));
    const failed = vi.fn();
    fixture.componentInstance.copyFailed.subscribe(failed);

    await fixture.componentInstance.copy();

    expect(failed).toHaveBeenCalledOnce();
    expect(fixture.componentInstance.isCopied()).toBe(false);
  });

  it('tem aria-label no botão', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.getAttribute('aria-label')).toBe('Copiar');
  });
});
