import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'ui-input-search',
  styleUrl: './input-search.scss',
  templateUrl: './input-search.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputSearch implements FormValueControl<string> {
  readonly value = model<string>('');
  readonly touch = output<void>();
  readonly disabled = input<boolean>(false);
  readonly name = input<string>('');

  readonly label = input.required<string>();
  readonly id = input.required<string>();
  /** Mantém o label acessível para leitores de tela, mas sem exibi-lo. */
  readonly hideLabel = input<boolean>(true);
  readonly placeholder = input<string>('');
  readonly buttonLabel = input<string>('Pesquisar');

  /** Emitido ao pressionar Enter ou clicar no botão de pesquisa. */
  readonly search = output<string>();

  handleInput(event: Event): void {
    this.value.set((event.target as HTMLInputElement).value);
  }

  submit(): void {
    if (this.disabled()) return;
    this.search.emit(this.value());
  }
}
