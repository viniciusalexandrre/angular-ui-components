import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ValidationError } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'ui-field',
  styleUrl: './field.scss',
  templateUrl: './field.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // O `id` é repassado para dentro; sem isto o atributo estático também ficaria no host.
  host: { '[attr.id]': 'null' },
})
export class UiField {
  readonly id = input.required<string>();
  readonly label = input.required<string>();
  readonly hint = input<string>('');
  readonly required = input<boolean>(false);
  readonly errors = input<readonly ValidationError[]>([]);
  readonly showErrors = input<boolean>(false);
}
