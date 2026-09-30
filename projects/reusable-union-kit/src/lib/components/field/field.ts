import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ValidationError } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'ui-field',
  styleUrl: './field.scss',
  templateUrl: './field.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiField {
  readonly id = input.required<string>();
  readonly label = input.required<string>();
  readonly hint = input<string>('');
  readonly required = input<boolean>(false);
  readonly errors = input<readonly ValidationError[]>([]);
  readonly showErrors = input<boolean>(false);
}
