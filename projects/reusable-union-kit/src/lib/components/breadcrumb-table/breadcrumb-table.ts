import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  output,
  signal,
} from '@angular/core';

export interface UiBreadcrumbTableItem {
  /** Posição do item no caminho; é o valor emitido em `itemSelected`. */
  index: number;
  name: string;
}

/**
 * Caminho de pastas clicável (ex.: acima de um ui-file-table).
 * Com muitos níveis, os do meio ficam recolhidos num menu "...".
 */
@Component({
  selector: 'ui-breadcrumb-table',
  imports: [],
  templateUrl: './breadcrumb-table.html',
  styleUrl: './breadcrumb-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'handleDocumentClick($event)',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class UiBreadcrumbTable {
  readonly rootLabel = input.required<string>();
  readonly items = input<readonly UiBreadcrumbTableItem[]>([]);
  /** Quantos itens finais ficam sempre visíveis quando o caminho é recolhido. */
  readonly maxVisible = input<number>(2);

  readonly label = input<string>('Navegação estrutural');
  readonly moreLabel = input<string>('Exibir pastas anteriores');

  readonly rootSelected = output<void>();
  readonly itemSelected = output<number>();

  protected readonly menuOpen = signal(false);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Só recolhe quando sobraria mais de um item escondido. */
  private readonly collapsed = computed(() => this.items().length > this.maxVisible() + 1);

  protected readonly hiddenItems = computed(() =>
    this.collapsed() ? this.items().slice(0, -this.maxVisible()) : [],
  );

  protected readonly visibleItems = computed(() =>
    this.collapsed() ? this.items().slice(-this.maxVisible()) : this.items(),
  );

  protected readonly isRootCurrent = computed(() => this.items().length === 0);

  protected selectRoot(): void {
    this.menuOpen.set(false);
    this.rootSelected.emit();
  }

  protected selectItem(index: number): void {
    this.menuOpen.set(false);
    this.itemSelected.emit(index);
  }

  /** O signal controla o <details>; o comportamento nativo de abrir/fechar é cancelado. */
  protected toggleMenu(event: Event): void {
    event.preventDefault();
    this.menuOpen.update((open) => !open);
  }

  handleDocumentClick(event: MouseEvent): void {
    if (this.menuOpen() && !this.host.nativeElement.contains(event.target as Node)) {
      this.menuOpen.set(false);
    }
  }
}
