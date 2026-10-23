import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type UiSkeletonVariant = 'menu' | 'table' | 'form' | 'input' | 'banner' | 'card';

@Component({
  imports: [],
  selector: 'ui-skeleton',
  styleUrl: './skeleton.scss',
  templateUrl: './skeleton.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ui-skeleton',
    role: 'status',
    'aria-live': 'polite',
    '[class]': "'ui-skeleton-' + variant()",
  },
})
export class UiSkeleton {
  readonly variant = input<UiSkeletonVariant>('input');
  readonly quantity = input<number>(1);
  /** Texto lido por leitores de tela enquanto o conteúdo carrega. */
  readonly label = input<string>('Carregando...');

  protected readonly blocks = computed(() =>
    Array.from({ length: Math.max(this.quantity(), 0) }, (_, index) => index),
  );
}
