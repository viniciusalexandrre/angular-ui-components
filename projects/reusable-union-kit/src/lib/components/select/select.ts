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

export type UiSelectValue = string | number | null;

export interface UiSelectOption {
  label: string;
  value: UiSelectValue;
  disabled?: boolean;
}

@Component({
  imports: [UiField],
  selector: 'ui-select',
  styleUrl: './select.scss',
  templateUrl: './select.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // O `id` é repassado para dentro; sem isto o atributo estático também ficaria no host.
  host: { '[attr.id]': 'null' },
})
export class UiSelect implements FormValueControl<UiSelectValue> {
  readonly id = input.required<string>();
  readonly label = input.required<string>();
  readonly hint = input<string>('');
  readonly placeholder = input<string>('Selecione uma opção');
  readonly emptyText = input<string>('Nenhuma opção disponível.');
  readonly options = input<readonly UiSelectOption[]>([]);

  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly invalid = input<boolean>(false);
  readonly touched = input<boolean>(false);
  readonly errors = input<readonly ValidationError[]>([]);

  readonly value = model<UiSelectValue>(null);
  readonly touch = output<void>();
  /** Emitido apenas quando o usuário escolhe uma opção (não em patch/reset do formulário). */
  readonly selectionChange = output<UiSelectValue>();

  readonly isOpen = signal(false);
  readonly activeIndex = signal(-1);

  protected readonly listboxId = computed(() => `${this.id()}-options`);

  readonly selectedOption = computed(
    () => this.options().find((option) => option.value === this.value()) ?? null,
  );

  protected readonly displayText = computed(
    () => this.selectedOption()?.label ?? this.placeholder(),
  );

  protected readonly showErrors = computed(() => this.invalid() && this.touched());

  protected readonly describedBy = computed(() => {
    if (this.showErrors()) return `${this.id()}-error`;
    if (this.hint()) return `${this.id()}-hint`;
    return null;
  });

  protected readonly activeDescendant = computed(() => {
    const index = this.activeIndex();
    return this.isOpen() && index >= 0 ? this.optionId(index) : null;
  });

  optionId(index: number): string {
    return `${this.id()}-option-${index}`;
  }

  toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  select(option: UiSelectOption): void {
    if (!this.isInteractive() || option.disabled) return;

    this.value.set(option.value);
    this.selectionChange.emit(option.value);
    this.close();
  }

  handleKeydown(event: KeyboardEvent): void {
    if (!this.isInteractive()) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!this.isOpen()) this.open();
        else this.moveActive(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!this.isOpen()) this.open();
        else this.moveActive(-1);
        break;
      case 'Home':
        if (this.isOpen()) {
          event.preventDefault();
          this.activeIndex.set(-1);
          this.moveActive(1);
        }
        break;
      case 'End':
        if (this.isOpen()) {
          event.preventDefault();
          this.activeIndex.set(this.options().length);
          this.moveActive(-1);
        }
        break;
      case 'Enter':
      case ' ': {
        event.preventDefault();
        const option = this.options()[this.activeIndex()];
        if (this.isOpen() && option) this.select(option);
        else this.toggle();
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
  }

  private open(): void {
    if (!this.isInteractive()) return;

    const selected = this.options().findIndex((option) => option.value === this.value());
    this.activeIndex.set(selected);
    this.isOpen.set(true);
  }

  private close(): void {
    this.isOpen.set(false);
    this.activeIndex.set(-1);
  }

  /** Move a opção ativa pulando as desabilitadas. */
  private moveActive(step: 1 | -1): void {
    const options = this.options();
    let index = this.activeIndex();

    for (let i = 0; i < options.length; i++) {
      index = (index + step + options.length) % options.length;
      if (!options[index].disabled) {
        this.activeIndex.set(index);
        return;
      }
    }
  }

  private isInteractive(): boolean {
    return !this.disabled() && !this.readonly();
  }
}
