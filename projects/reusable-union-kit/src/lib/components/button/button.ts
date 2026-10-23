import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type UiButtonVariant = 'primary' | 'secondary' | 'ghost';
export type UiButtonSize = 'sm' | 'md' | 'lg';

@Component({
  imports: [],
  selector: 'button[ui-button], a[ui-button]',
  styleUrl: './button.scss',
  templateUrl: './button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ui-button',
    '[class.ui-button-primary]': "variant() === 'primary'",
    '[class.ui-button-secondary]': "variant() === 'secondary'",
    '[class.ui-button-ghost]': "variant() === 'ghost'",
    '[class.ui-button-sm]': "size() === 'sm'",
    '[class.ui-button-lg]': "size() === 'lg'",
  },
})
export class UiButton {
  readonly variant = input<UiButtonVariant>('primary');
  readonly size = input<UiButtonSize>('md');
}
