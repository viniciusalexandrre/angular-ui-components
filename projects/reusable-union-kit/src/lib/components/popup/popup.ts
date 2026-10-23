import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

export type PopupType = 'success' | 'error' | 'warning' | 'info';

const ICONS: Record<PopupType, string> = {
  success: '✓',
  error: '✕',
  warning: '⚠',
  info: 'ℹ',
};

@Component({
  imports: [],
  selector: 'ui-popup',
  styleUrl: './popup.scss',
  templateUrl: './popup.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'ui-popup',
    '[class.ui-popup-success]': "type() === 'success'",
    '[class.ui-popup-error]': "type() === 'error'",
    '[class.ui-popup-warning]': "type() === 'warning'",
    '[class.ui-popup-info]': "type() === 'info'",
    '[attr.role]': "type() === 'error' ? 'alert' : 'status'",
  },
})
export class UiPopup {
  readonly message = input.required<string>();
  readonly type = input<PopupType>('info');
  readonly closeLabel = input<string>('Fechar');

  readonly icon = computed(() => ICONS[this.type()]);

  readonly closed = output<void>();
}
