import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';
import { FormCheckboxControl, ValidationError } from '@angular/forms/signals';

/**
 * Caixa de seleção integrada ao Signal Forms: use [formField] com um campo boolean
 * ou [(checked)] fora de formulários.
 */
@Component({
  selector: 'ui-checkbox',
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // O `id` é repassado para dentro; sem isto o atributo estático também ficaria no host.
  host: { '[attr.id]': 'null' },
})
export class UiCheckbox implements FormCheckboxControl {
  readonly checked = model<boolean>(false);
  readonly touched = input<boolean>(false);
  readonly touch = output<void>();
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly invalid = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly errors = input<readonly ValidationError[]>([]);
  readonly name = input<string>('');

  readonly label = input.required<string>();
  readonly id = input.required<string>();
  readonly hint = input<string>('');
  /** Estado "parcial" (traço), ex.: "selecionar todos" com só parte dos itens marcados. */
  readonly indeterminate = input<boolean>(false);

  protected readonly showErrors = computed(() => this.invalid() && this.touched());

  protected readonly describedBy = computed(() => {
    if (this.showErrors()) return `${this.id()}-error`;
    if (this.hint()) return `${this.id()}-hint`;
    return null;
  });

  handleChange(event: Event): void {
    this.checked.set((event.target as HTMLInputElement).checked);
  }

  /** Checkbox nativo ignora `readonly`; bloqueia a troca manualmente. */
  handleClick(event: MouseEvent): void {
    if (this.readonly()) event.preventDefault();
  }
}
