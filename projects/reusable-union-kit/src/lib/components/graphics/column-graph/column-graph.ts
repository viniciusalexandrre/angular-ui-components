import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export interface ColumnGraphProps {
  y_axios: {
    label: string;
    value: number;
  }[];
  x_axios: {
    label: string;
  }[];
}

@Component({
  imports: [],
  selector: 'ui-column-graph',
  styleUrl: './column-graph.scss',
  templateUrl: './column-graph.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // O `title` é repassado para dentro; sem isto o atributo estático também ficaria no host.
  host: { '[attr.title]': 'null' },
})
export class UiColumnGraph {
  readonly data = input.required<ColumnGraphProps>();
  readonly title = input.required<string>();
  /** Valor que corresponde a 100% da altura. Sem ele, usa o maior valor de `data`. */
  readonly maxValue = input<number | null>(null);
  /** Label da coluna destacada (ex.: o mês atual). */
  readonly highlight = input<string | null>(null);

  private readonly effectiveMax = computed(
    () => this.maxValue() ?? Math.max(0, ...this.data().y_axios.map((bar) => bar.value)),
  );

  getBarHeight(value: number): number {
    const max = this.effectiveMax();
    if (max <= 0) return 0;
    return Math.min(Math.max((value / max) * 100, 0), 100);
  }
}
