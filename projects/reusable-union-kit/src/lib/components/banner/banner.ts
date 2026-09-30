import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { UiButton } from '../button/button';

@Component({
  imports: [UiButton, NgOptimizedImage],
  selector: 'ui-banner',
  styleUrl: './banner.scss',
  templateUrl: './banner.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBanner {
  readonly heading = input.required<string>();
  readonly subtitle = input<string>('');
  readonly description = input<string>('');
  readonly buttonText = input<string>('');

  readonly img = input<string>('');
  readonly imgAlt = input<string>('');
  readonly imgWidth = input<number>(160);
  readonly imgHeight = input<number>(209);
  /** Ative apenas quando o banner estiver acima da dobra (LCP). */
  readonly imgPriority = input<boolean>(false);

  readonly buttonClick = output<void>();
}
