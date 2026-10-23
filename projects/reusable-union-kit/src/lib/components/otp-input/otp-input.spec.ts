import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOtpInput } from './otp-input';

describe('UiOtpInput', () => {
  let fixture: ComponentFixture<UiOtpInput>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UiOtpInput);
    fixture.componentRef.setInput('length', 4);
    await fixture.whenStable();
  });

  const inputs = (): HTMLInputElement[] =>
    Array.from(fixture.nativeElement.querySelectorAll('input'));

  it('renderiza um campo por dígito conforme length, sem <form> aninhado', () => {
    expect(inputs().length).toBe(4);
    expect(fixture.nativeElement.querySelector('form')).toBeNull();
  });

  it('emite completed quando todos os dígitos são preenchidos', () => {
    const completed = vi.fn();
    fixture.componentInstance.completed.subscribe(completed);

    inputs().forEach((input, i) => {
      input.value = String(i + 1);
      input.dispatchEvent(new Event('input'));
    });

    expect(completed).toHaveBeenCalledWith('1234');
  });

  it('ignora caracteres que não são dígitos', () => {
    const [first] = inputs();
    first.value = 'a';
    first.dispatchEvent(new Event('input'));
    expect(first.value).toBe('');
  });
});
