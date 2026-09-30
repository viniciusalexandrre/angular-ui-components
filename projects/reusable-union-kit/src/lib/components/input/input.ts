import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';
import { UiField } from '../field/field';

@Component({
  selector: 'ui-input',
  templateUrl: './input.html',
  imports: [UiField],
  styleUrl: './input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInput implements FormValueControl<string | null> {
  readonly value = model<string | null>('');
  readonly touched = input<boolean>(false);
  readonly touch = output<void>();
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly invalid = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly minLength = input<number | undefined>(undefined);
  readonly maxLength = input<number | undefined>(undefined);
  readonly errors = input<readonly ValidationError[]>([]);
  readonly name = input<string>('');

  readonly label = input.required<string>();
  readonly id = input.required<string>();
  readonly hint = input<string>('');
  readonly type = input<'text' | 'email' | 'tel' | 'url' | 'search'>('text');
  readonly placeholder = input<string>('');
  readonly autocomplete = input<string>('off');

  protected readonly showErrors = computed(() => this.invalid() && this.touched());

  protected readonly describedBy = computed(() => {
    if (this.showErrors()) return `${this.id()}-error`;
    if (this.hint()) return `${this.id()}-hint`;
    return null;
  });

  handleInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
}
