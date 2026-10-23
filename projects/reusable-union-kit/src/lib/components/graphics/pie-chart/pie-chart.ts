import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export interface PieChartProps {
  label: string;
  value: string;
  graphValue: number;
  /** Sem cor, usa --ui-pie-chart-fill-color (1º item) ou --ui-pie-chart-track-color (demais). */
  color?: string;
}

/** Donut de progresso: o 1º item é a parte preenchida e o 2º é o total. */
@Component({
  imports: [],
  selector: 'ui-pie-chart',
  styleUrl: './pie-chart.scss',
  templateUrl: './pie-chart.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // O `title` é repassado para dentro; sem isto o atributo estático também ficaria no host.
  host: { '[attr.title]': 'null' },
})
export class UiPieChart {
  readonly title = input.required<string>();
  readonly data = input.required<PieChartProps[]>();

  readonly percentage = computed(() => {
    const [part, total] = this.data();
    if (!part || !total || total.graphValue <= 0) return 0;
    const value = (part.graphValue / total.graphValue) * 100;
    return Math.round(Math.min(Math.max(value, 0), 100) * 10) / 10;
  });
}
