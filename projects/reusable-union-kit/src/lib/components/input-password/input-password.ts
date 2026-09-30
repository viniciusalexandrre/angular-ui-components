import { Component, model, input, computed, signal } from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';
import { Field } from '../field/field';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-input-password',
  imports: [Field, NgOptimizedImage],
  templateUrl: './input-password.html',
  styleUrl: './input-password.scss',
})
export class InputPassword implements FormValueControl<string> {
  readonly value = model<string>('');
  readonly touched = model<boolean>(false);
  readonly hidden = input<boolean>(false);
  readonly invalid = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly errors = input<readonly ValidationError[]>([]);
  readonly name = input<string>('');

  readonly label = input.required<string>();
  readonly id = input.required<string>();
  readonly type = input<'password'>('password');
  readonly placeholder = input<string>('');
  readonly autocomplete = input<string>('off');

  readonly showPassword = signal<boolean>(false);

  protected readonly showErrors = computed(() => this.invalid() && this.touched());

  handleInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  togglePassword(): void {
    this.showPassword.update((prev) => !prev);
  }
}
