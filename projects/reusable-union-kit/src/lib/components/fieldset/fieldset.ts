import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ui-fieldset',
  imports: [],
  templateUrl: './fieldset.html',
  styleUrl: './fieldset.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFieldset {
  readonly title = input.required<string>();
  readonly description = input<string>('');
}
