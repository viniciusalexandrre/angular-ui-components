import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import {
  ColumnGraphProps,
  PieChartProps,
  UiBanner,
  UiButton,
  UiColumnGraph,
  UiPieChart,
  UiPopup,
  UiSkeleton,
} from '../kit';
import { Avisos } from '../shared/avisos';

const MESES = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const ESCALA = 100;

const aleatorio = (min: number, max: number) => Math.round(min + Math.random() * (max - min));

@Component({
  selector: 'app-painel',
  imports: [UiBanner, UiButton, UiColumnGraph, UiPieChart, UiPopup, UiSkeleton],
  template: `
    <header class="page-header">
      <h1>Painel</h1>
      <p>Banner de boas-vindas, gráficos e skeleton enquanto os dados carregam.</p>
    </header>

    @if (carregando()) {
      <div class="stack">
        <ui-skeleton variant="banner" label="Carregando painel..." />
        <ui-skeleton variant="card" [quantity]="3" />
      </div>
    } @else {
      <div class="stack">
        <ui-banner
          heading="Bem-vindo de volta"
          subtitle="ao seu painel de vendas"
          description="Acompanhe o desempenho do mês e o uso da sua conta."
          buttonText="Atualizar dados"
          (buttonClick)="carregar()"
        />

        <div class="dashboard">
          <ui-column-graph
            class="vendas"
            title="Vendas por mês (mil R$)"
            [data]="vendas()"
            [maxValue]="ESCALA"
            [highlight]="mesAtual"
          />

          <div class="stack">
            <ui-pie-chart title="Meta de vendas" [data]="meta()" />
            <ui-pie-chart class="armazenamento" title="Armazenamento" [data]="armazenamento()" />
            <button ui-button variant="secondary" type="button" (click)="avisos.mostrar('info', 'Relatório gerado (simulação).')">
              Exportar relatório
            </button>
          </div>
        </div>
      </div>
    }

    @if (avisos.atual(); as aviso) {
      <ui-popup
        [type]="aviso.type"
        [message]="aviso.message"
        animate.leave="ui-popup-leave"
        (closed)="avisos.fechar()"
      />
    }
  `,
  styles: `
    .dashboard {
      display: grid;
      grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);
      gap: 16px;
      align-items: start;

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
      }
    }

    /* Personalização por instância: só este gráfico usa tons de verde. */
    .armazenamento {
      --ui-pie-chart-fill-color: #12a454;
      --ui-pie-chart-track-color: #c8efd9;
    }
  `,
})
export class PainelComponent {
  protected readonly ESCALA = ESCALA;
  protected readonly mesAtual = MESES[new Date().getMonth()];
  protected readonly avisos = new Avisos();

  protected readonly carregando = signal(true);
  private readonly valores = signal<number[]>([]);
  private readonly metaAtingida = signal(0);
  private readonly usadoGb = signal(0);

  protected readonly vendas = computed<ColumnGraphProps>(() => ({
    y_axios: this.valores().map((value, i) => ({ label: MESES[i], value })),
    x_axios: [ESCALA, 75, 50, 25, 0].map((v) => ({ label: String(v) })),
  }));

  protected readonly meta = computed<PieChartProps[]>(() => [
    { label: 'Atingido', value: `R$ ${this.metaAtingida()} mil`, graphValue: this.metaAtingida() },
    { label: 'Meta', value: 'R$ 100 mil', graphValue: 100 },
  ]);

  protected readonly armazenamento = computed<PieChartProps[]>(() => [
    { label: 'Usado', value: `${this.usadoGb()} GB`, graphValue: this.usadoGb() },
    { label: 'Total', value: '120 GB', graphValue: 120 },
  ]);

  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
    this.carregar();
  }

  carregar(): void {
    this.carregando.set(true);
    clearTimeout(this.timer);

    // Simula a API: depois de 1s, novos números.
    this.timer = setTimeout(() => {
      this.valores.set(MESES.map(() => aleatorio(20, ESCALA)));
      this.metaAtingida.set(aleatorio(30, 95));
      this.usadoGb.set(aleatorio(10, 110));
      this.carregando.set(false);
    }, 1000);
  }
}
