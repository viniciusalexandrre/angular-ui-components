import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  linkedSignal,
  model,
  output,
  signal,
  untracked,
} from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';
import { UiField } from '../field/field';

export interface AutocompleteOption {
  label: string;
  value: string;
}

@Component({
  selector: 'ui-autocomplete',
  imports: [UiField],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAutocomplete implements FormValueControl<string | null> {
  readonly id = input.required<string>();
  readonly label = input.required<string>();
  readonly hint = input<string>('');
  readonly placeholder = input<string>('Pesquisar');
  /** Quantidade mínima de caracteres para abrir a lista e emitir `searchChange`. */
  readonly minSearchLength = input<number>(2);

  readonly name = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly invalid = input<boolean>(false);
  readonly touched = input<boolean>(false);
  readonly errors = input<readonly ValidationError[]>([]);

  readonly options = input<readonly AutocompleteOption[]>([]);
  readonly isLoading = input<boolean>(false);
  /** Mensagem exibida na lista quando a busca falha. */
  readonly loadError = input<string | null>(null);

  readonly loadingText = input<string>('Pesquisando...');
  readonly emptyText = input<string>('Nenhum valor encontrado.');
  readonly invalidOptionText = input<string>('Selecione uma opção válida.');

  readonly value = model<string | null>(null);
  readonly touch = output<void>();
  readonly searchChange = output<string>();

  /** Texto do campo. Volta a refletir o label da opção sempre que `value` muda (seleção, reset ou patch). */
  readonly searchTerm = linkedSignal<string | null, string>({
    source: this.value,
    computation: (value) => (value === null ? '' : this.labelFor(value)),
  });

  readonly isOpen = signal(false);
  readonly activeIndex = signal(-1);
  readonly hasInvalidValue = signal(false);

  protected readonly listboxId = computed(() => `${this.id()}-options`);

  protected readonly showPanel = computed(
    () => this.isOpen() && this.searchTerm().trim().length >= this.minSearchLength(),
  );

  protected readonly showErrors = computed(
    () => this.hasInvalidValue() || (this.invalid() && this.touched()),
  );

  protected readonly displayedErrors = computed<readonly ValidationError[]>(() =>
    this.hasInvalidValue()
      ? [{ kind: 'invalidOption', message: this.invalidOptionText() }]
      : this.errors(),
  );

  protected readonly describedBy = computed(() => {
    if (this.showErrors()) return `${this.id()}-error`;
    if (this.hint()) return `${this.id()}-hint`;
    return null;
  });

  protected readonly activeDescendant = computed(() => {
    const index = this.activeIndex();
    return this.showPanel() && index >= 0 ? this.optionId(index) : null;
  });

  optionId(index: number): string {
    return `${this.id()}-option-${index}`;
  }

  onInput(text: string): void {
    this.value.set(null);
    this.searchTerm.set(text);
    this.hasInvalidValue.set(false);
    this.activeIndex.set(-1);
    this.isOpen.set(this.isInteractive());

    if (text.length === 0 || text.trim().length >= this.minSearchLength()) {
      this.searchChange.emit(text);
    }
  }

  select(option: AutocompleteOption): void {
    if (!this.isInteractive()) return;

    this.value.set(option.value);
    this.searchTerm.set(option.label);
    this.hasInvalidValue.set(false);
    this.close();
  }

  handleFocus(): void {
    if (this.isInteractive()) this.isOpen.set(true);
  }

  handleKeydown(event: KeyboardEvent): void {
    if (!this.isInteractive()) return;

    const total = this.options().length;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.isOpen.set(true);
        if (total > 0) this.activeIndex.update((i) => (i + 1) % total);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.isOpen.set(true);
        if (total > 0) this.activeIndex.update((i) => (i <= 0 ? total - 1 : i - 1));
        break;
      case 'Enter': {
        const option = this.options()[this.activeIndex()];
        if (this.showPanel() && option) {
          event.preventDefault();
          this.select(option);
        }
        break;
      }
      case 'Escape':
        if (this.isOpen()) {
          event.preventDefault();
          this.close();
        }
        break;
    }
  }

  handleBlur(): void {
    this.touch.emit();
    this.close();

    const term = this.searchTerm().trim();

    if (term.length === 0) {
      this.value.set(null);
      this.hasInvalidValue.set(false);
      return;
    }

    if (this.value() !== null) return;

    const match = this.options().find((option) => option.label.toLowerCase() === term.toLowerCase());

    if (match) {
      this.select(match);
    } else {
      this.hasInvalidValue.set(true);
    }
  }

  clear(): void {
    if (!this.isInteractive()) return;

    this.value.set(null);
    this.searchTerm.set('');
    this.hasInvalidValue.set(false);
    this.close();
    this.searchChange.emit('');
  }

  private close(): void {
    this.isOpen.set(false);
    this.activeIndex.set(-1);
  }

  private isInteractive(): boolean {
    return !this.disabled() && !this.readonly();
  }

  private labelFor(value: string): string {
    const option = untracked(this.options).find((o) => o.value === value);
    return option?.label ?? value;
  }
}
