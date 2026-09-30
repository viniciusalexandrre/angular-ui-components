import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';
import { Field } from '../field/field';

@Component({
  selector: 'component-input',
  templateUrl: './input.html',
  imports: [Field],
  styleUrl: './input.scss',
  // host: { ['hidden']: 'hidden()' },
})
export class Input implements FormValueControl<string | null> {
  readonly value = model<string | null>('');
  readonly touched = model<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  // readonly hidden = input<boolean>(false);
  readonly invalid = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly errors = input<readonly ValidationError[]>([]);
  readonly name = input<string>('');

  readonly label = input.required<string>();
  readonly id = input.required<string>();
  readonly type = input<'text' | 'email'>('text');
  readonly placeholder = input<string>('');
  readonly autocomplete = input<string>('off');

  protected readonly showErrors = computed(() => this.invalid() && this.touched());

  handleInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
}
