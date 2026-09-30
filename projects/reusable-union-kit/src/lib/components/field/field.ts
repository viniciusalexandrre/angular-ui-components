import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ValidationError } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'component-field',
  styleUrl: './field.scss',
  templateUrl: './field.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Field {
  readonly id = input.required<string>();
  readonly label = input.required<string>();
  readonly errors = input<readonly ValidationError[]>([]);
  readonly showErrors = input<boolean>(false);
}
