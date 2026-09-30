import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';
import { UiField } from '../field/field';

@Component({
  selector: 'ui-input-password',
  imports: [UiField],
  templateUrl: './input-password.html',
  styleUrl: './input-password.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputPassword implements FormValueControl<string> {
  readonly value = model<string>('');
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
  readonly placeholder = input<string>('');
  /** Use 'new-password' em telas de cadastro/troca de senha. */
  readonly autocomplete = input<'current-password' | 'new-password' | 'off'>('current-password');
  readonly showPasswordLabel = input<string>('Mostrar senha');
  readonly hidePasswordLabel = input<string>('Ocultar senha');

  readonly showPassword = signal<boolean>(false);

  protected readonly showErrors = computed(() => this.invalid() && this.touched());

  protected readonly describedBy = computed(() => {
    if (this.showErrors()) return `${this.id()}-error`;
    if (this.hint()) return `${this.id()}-hint`;
    return null;
  });

  handleInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  togglePassword(): void {
    this.showPassword.update((prev) => !prev);
  }
}
