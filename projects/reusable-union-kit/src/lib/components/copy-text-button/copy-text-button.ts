import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  output,
  signal,
} from '@angular/core';

@Component({
  imports: [],
  selector: 'ui-copy-text-button',
  styleUrl: './copy-text-button.scss',
  templateUrl: './copy-text-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCopyTextButton {
  readonly text = input.required<string>();
  /** Tempo (ms) que o estado "copiado" fica visível. */
  readonly resetDelay = input<number>(2000);
  readonly copyLabel = input<string>('Copiar');
  readonly copiedLabel = input<string>('Copiado!');

  readonly copied = output<string>();
  readonly copyFailed = output<unknown>();

  readonly isCopied = signal<boolean>(false);

  private resetTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.resetTimer));
  }

  async copy(): Promise<void> {
    const text = this.text();
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      this.copyFailed.emit(error);
      return;
    }

    this.isCopied.set(true);
    this.copied.emit(text);
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.isCopied.set(false), this.resetDelay());
  }
}
