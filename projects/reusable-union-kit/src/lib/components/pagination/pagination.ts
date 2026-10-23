import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'ui-pagination',
  styleUrl: './pagination.scss',
  templateUrl: './pagination.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPagination {
  readonly total = input.required<number, string | number>({
    transform: (value) => (typeof value === 'string' ? parseInt(value, 10) || 0 : value),
  });
  /** Página atual, começando em 0. */
  readonly currentPage = input.required<number>();
  readonly pageSize = input.required<number>();
  /** Quantidade máxima de números de página exibidos ao mesmo tempo. */
  readonly maxVisible = input<number>(4);

  readonly label = input<string>('Paginação');
  readonly previousLabel = input<string>('Página anterior');
  readonly nextLabel = input<string>('Próxima página');
  readonly pageLabel = input<string>('Página');

  /** Emite a nova página, começando em 0. */
  readonly pageChange = output<number>();

  protected readonly displayPage = computed(() => this.currentPage() + 1);

  readonly totalPages = computed(() => {
    const size = this.pageSize();
    if (size <= 0) return 1;
    return Math.max(Math.ceil(this.total() / size), 1);
  });

  readonly pages = computed<number[]>(() => {
    const total = this.totalPages();
    const current = this.displayPage();
    const maxVisible = Math.max(this.maxVisible(), 1);

    if (total <= maxVisible) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    let start = Math.max(current - Math.floor(maxVisible / 2), 1);
    let end = start + maxVisible - 1;
    if (end > total) {
      end = total;
      start = Math.max(end - maxVisible + 1, 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });

  goTo(page: number): void {
    if (page < 1 || page > this.totalPages() || page === this.displayPage()) return;
    this.pageChange.emit(page - 1);
  }
}
