import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  linkedSignal,
  output,
  viewChildren,
} from '@angular/core';

@Component({
  imports: [],
  selector: 'ui-otp-input',
  styleUrl: './otp-input.scss',
  templateUrl: './otp-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiOtpInput {
  readonly length = input<number>(6);
  readonly error = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly label = input<string>('Código de verificação');
  /** Prefixo do `aria-label` de cada campo, seguido da posição (ex.: "Dígito 1"). */
  readonly digitLabel = input<string>('Dígito');

  /** Emitido quando todos os dígitos estão preenchidos. */
  readonly completed = output<string>();

  /** Recriado sempre que `length` muda. */
  protected readonly otp = linkedSignal(() => Array.from({ length: this.length() }, () => ''));

  private readonly inputRefs = viewChildren<ElementRef<HTMLInputElement>>('otpRef');

  /** Limpa todos os dígitos e foca o primeiro campo. */
  reset(): void {
    this.otp.set(Array.from({ length: this.length() }, () => ''));
    this.getInputs().forEach((input) => (input.value = ''));
    this.getInputs()[0]?.focus();
  }

  handleInput(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (!/^\d*$/.test(value)) {
      input.value = this.otp()[index];
      return;
    }

    const digit = value.slice(-1);
    input.value = digit;
    this.setDigits((next) => (next[index] = digit));

    if (digit && index < this.length() - 1) {
      this.getInputs()[index + 1]?.focus();
    }
  }

  handleKeyDown(index: number, event: KeyboardEvent): void {
    const inputs = this.getInputs();

    if (event.key === 'Backspace') {
      event.preventDefault();

      this.setDigits((next) => {
        if (next[index]) {
          next[index] = '';
          inputs[index].value = '';
        } else if (index > 0) {
          next[index - 1] = '';
          inputs[index - 1].value = '';
          inputs[index - 1].focus();
        }
      });
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      inputs[index - 1].focus();
    }

    if (event.key === 'ArrowRight' && index < this.length() - 1) {
      inputs[index + 1].focus();
    }
  }

  handlePaste(event: ClipboardEvent): void {
    event.preventDefault();

    const pasteData = event.clipboardData
      ?.getData('text')
      .replace(/\D/g, '')
      .slice(0, this.length());

    if (!pasteData) return;

    const inputs = this.getInputs();

    this.setDigits((next) => {
      pasteData.split('').forEach((char, i) => {
        next[i] = char;
        inputs[i].value = char;
      });
    });

    const lastIndex = Math.min(pasteData.length, this.length() - 1);
    inputs[lastIndex]?.focus();
  }

  handleFocus(event: FocusEvent): void {
    (event.target as HTMLInputElement).select();
  }

  private setDigits(mutate: (next: string[]) => void): void {
    const next = [...this.otp()];
    mutate(next);
    this.otp.set(next);

    if (next.every((digit) => digit !== '')) {
      this.completed.emit(next.join(''));
    }
  }

  private getInputs(): HTMLInputElement[] {
    return this.inputRefs().map((ref) => ref.nativeElement);
  }
}
