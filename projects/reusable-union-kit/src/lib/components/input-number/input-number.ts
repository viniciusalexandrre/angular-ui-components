import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';
import { UiField } from '../field/field';

/**
 * Campo numérico: o valor é `number | null` (vazio vira `null`), não texto.
 * `min`/`max` são preenchidos sozinhos pelos validadores min()/max() do Signal Forms.
 */
@Component({
  selector: 'ui-input-number',
  templateUrl: './input-number.html',
  imports: [UiField],
  styleUrl: './input-number.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // O `id` é repassado para dentro; sem isto o atributo estático também ficaria no host.
  host: { '[attr.id]': 'null' },
})
export class UiInputNumber implements FormValueControl<number | null> {
  readonly value = model<number | null>(null);
  readonly touched = input<boolean>(false);
  readonly touch = output<void>();
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly invalid = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly min = input<number | undefined>(undefined);
  readonly max = input<number | undefined>(undefined);
  /** Incremento das setas/teclado. Use 0.01 para valores com centavos, ou 'any'. */
  readonly step = input<number | 'any'>(1);
  readonly errors = input<readonly ValidationError[]>([]);
  readonly name = input<string>('');

  readonly label = input.required<string>();
  readonly id = input.required<string>();
  readonly hint = input<string>('');
  readonly placeholder = input<string>('');
  readonly autocomplete = input<string>('off');
  /** Mostra as setinhas de aumentar/diminuir do navegador. */
  readonly spinButtons = input<boolean>(true);

  protected readonly showErrors = computed(() => this.invalid() && this.touched());

  protected readonly describedBy = computed(() => {
    if (this.showErrors()) return `${this.id()}-error`;
    if (this.hint()) return `${this.id()}-hint`;
    return null;
  });

  /** Teclado do celular: só números ou números com vírgula. */
  protected readonly inputMode = computed(() => {
    const step = this.step();
    return step === 'any' || !Number.isInteger(step) ? 'decimal' : 'numeric';
  });

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    // Campo vazio ou incompleto (ex.: só "-") vira null em vez de NaN.
    this.value.set(input.value === '' || Number.isNaN(input.valueAsNumber) ? null : input.valueAsNumber);
  }
}
