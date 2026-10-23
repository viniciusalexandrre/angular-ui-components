import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  imports: [],
  selector: 'ui-modal',
  styleUrl: './modal.scss',
  templateUrl: './modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'close.emit()',
  },
})
export class UiModal {
  /** Nome acessível do diálogo. Use `labelledBy` quando o título estiver no conteúdo projetado. */
  readonly label = input<string>('');
  readonly labelledBy = input<string | null>(null);
  readonly closeLabel = input<string>('Fechar');
  readonly closeOnBackdrop = input<boolean>(true);

  readonly close = output<void>();

  private readonly dialog = viewChild.required<ElementRef<HTMLElement>>('dialog');

  constructor() {
    const document = inject(DOCUMENT);
    let previousFocus: HTMLElement | null = null;

    // Leva o foco para o diálogo ao abrir e o devolve ao elemento anterior ao fechar.
    afterNextRender(() => {
      previousFocus = document.activeElement as HTMLElement | null;
      this.dialog().nativeElement.focus();
    });
    inject(DestroyRef).onDestroy(() => previousFocus?.focus?.());
  }

  handleBackdropClick(): void {
    if (this.closeOnBackdrop()) this.close.emit();
  }
}
