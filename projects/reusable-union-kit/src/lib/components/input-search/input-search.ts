import { Component, input, model, output } from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'component-input-search',
  styleUrl: './input-search.scss',
  templateUrl: './input-search.html',
})
export class InputSearch implements FormValueControl<string> {
  readonly value = model<string>('');
  readonly touched = model<boolean>(false);
  readonly errors = input<readonly ValidationError[]>([]);
  readonly name = input<string>('');

  readonly label = input.required<string>();
  readonly id = input.required<string>();
  readonly type = input<'search'>('search');
  readonly placeholder = input<string>('');
  readonly query = input<string>('');
  readonly searchQuery = output<string>();
}
