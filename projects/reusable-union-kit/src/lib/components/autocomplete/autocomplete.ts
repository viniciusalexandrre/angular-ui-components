import { Component, computed, input, model, output, signal } from '@angular/core';

import { FormValueControl, ValidationError } from '@angular/forms/signals';

export interface AutocompleteOption {
  label: string;
  value: string;
}

@Component({
  selector: 'component-autocomplete',
  imports: [],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.css',
})
export class Autocomplete implements FormValueControl<string | null> {
  readonly id = input.required<string>();
  readonly label = input.required<string>();
  readonly placeholder = input('Pesquisar');
  readonly minSearchLength = input(2);

  readonly disabled = input(false);
  readonly invalid = input(false);
  readonly errors = input<readonly ValidationError[]>([]);

  readonly options = input<string[]>([]);
  readonly isLoading = input(false);
  readonly error = input<Error | null>(null);

  readonly searchChange = output<string>();

  readonly value = model<string | null>(null);
  readonly touched = model(false);

  readonly searchTerm = signal('');
  readonly isOpen = signal(false);
  readonly hasInvalidValue = signal(false);

  readonly displayText = computed(() => {
    return this.value() ?? '';
  });

  onInput(value: string): void {
    this.searchTerm.set(value);
    this.isOpen.set(!this.disabled());
    this.value.set(null);
    this.hasInvalidValue.set(false);
    this.searchChange.emit(value);
  }

  handleSelect(option: string): void {
    if (this.disabled()) {
      return;
    }
    this.value.set(option);
    this.searchTerm.set(option);
    this.hasInvalidValue.set(false);
    this.touched.set(true);
    this.isOpen.set(false);
  }

  handleFocus(): void {
    if (this.disabled()) {
      return;
    }
    this.isOpen.set(true);
  }

  handleBlur(): void {
    this.touched.set(true);

    const searchValue = this.searchTerm().trim();

    if (searchValue.length === 0) {
      this.value.set(null);
      this.hasInvalidValue.set(false);
      this.isOpen.set(false);
      return;
    }

    const selectedOption = this.options().find((option) => option === searchValue);

    if (selectedOption) {
      this.value.set(selectedOption);
      this.hasInvalidValue.set(false);
    } else {
      this.value.set(null);
      this.hasInvalidValue.set(true);
    }

    this.isOpen.set(false);
  }

  clear(): void {
    if (this.disabled()) {
      return;
    }

    this.value.set(null);
    this.searchTerm.set('');
    this.isOpen.set(false);
    this.touched.set(true);
    this.searchChange.emit('');
  }
}
