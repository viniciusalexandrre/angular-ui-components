import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  contentChildren,
  Directive,
  inject,
  input,
  output,
  signal,
  TemplateRef,
} from '@angular/core';
import { UiMenu, UiMenuItem } from '../menu/menu';
import { UiSkeleton } from '../skeleton/skeleton';

export interface UiTableColumn<T> {
  /** Identificador da coluna. Sem `value`, também é a propriedade lida de cada linha. */
  key: string;
  header: string;
  /** Formata o conteúdo da célula (ex.: data, moeda, tamanho de arquivo). */
  value?: (row: T) => unknown;
  align?: 'start' | 'center' | 'end';
  /** Largura CSS da coluna (ex.: '120px', '20%'). */
  width?: string;
}

export interface UiTableAction<T> {
  id: string;
  label: string;
  danger?: boolean;
  /** Regras por linha: esconder ou desabilitar a ação para algumas linhas. */
  hidden?: (row: T) => boolean;
  disabled?: (row: T) => boolean;
}

export interface UiTableActionEvent<T> {
  action: string;
  row: T;
}

export interface UiTableCellContext<T> {
  $implicit: T;
  /** Valor da célula, já passado por `column.value` quando existir. */
  value: unknown;
}

/** Substitui o conteúdo de uma coluna: `<ng-template uiTableCell="link" let-row>`. */
@Directive({ selector: 'ng-template[uiTableCell]' })
export class UiTableCell<T = any> {
  readonly column = input.required<string>({ alias: 'uiTableCell' });
  readonly template = inject<TemplateRef<UiTableCellContext<T>>>(TemplateRef);

  static ngTemplateContextGuard<T>(_dir: UiTableCell<T>, ctx: unknown): ctx is UiTableCellContext<T> {
    return true;
  }
}

/** Conteúdo exibido ao expandir uma linha: `<ng-template uiTableDetail let-row>`. */
@Directive({ selector: 'ng-template[uiTableDetail]' })
export class UiTableDetail<T = any> {
  readonly template = inject<TemplateRef<{ $implicit: T }>>(TemplateRef);

  static ngTemplateContextGuard<T>(_dir: UiTableDetail<T>, ctx: unknown): ctx is { $implicit: T } {
    return true;
  }
}

let nextId = 0;

@Component({
  imports: [NgTemplateOutlet, UiMenu, UiSkeleton],
  selector: 'ui-table',
  styleUrl: './table.scss',
  templateUrl: './table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTable<T> {
  readonly columns = input.required<readonly UiTableColumn<T>[]>();
  readonly rows = input.required<readonly T[]>();
  /** Identidade estável de cada linha (usada no `track` e para lembrar as linhas abertas). */
  readonly rowKey = input<(row: T) => unknown>((row) => row);
  readonly actions = input<readonly UiTableAction<T>[]>([]);

  /** Nome acessível da tabela. */
  readonly label = input<string>('');
  readonly loading = input<boolean>(false);
  readonly loadingRows = input<number>(5);
  readonly loadingText = input<string>('Carregando...');
  readonly emptyText = input<string>('Nenhum registro encontrado.');
  readonly actionsLabel = input<string>('Ações');
  readonly detailsLabel = input<string>('Detalhes');
  readonly showDetailsLabel = input<string>('Mostrar detalhes');
  readonly hideDetailsLabel = input<string>('Ocultar detalhes');

  readonly action = output<UiTableActionEvent<T>>();
  readonly rowToggle = output<{ row: T; expanded: boolean }>();

  protected readonly detail = contentChild(UiTableDetail);
  private readonly cellTemplates = contentChildren(UiTableCell);

  private readonly expandedKeys = signal<ReadonlySet<unknown>>(new Set());
  private readonly tableId = `ui-table-${nextId++}`;

  protected readonly cellTemplateMap = computed(
    () => new Map(this.cellTemplates().map((cell) => [cell.column(), cell.template])),
  );

  protected readonly colspan = computed(
    () => this.columns().length + (this.detail() ? 1 : 0) + (this.actions().length ? 1 : 0),
  );

  /** Itens do menu por linha, calculados uma vez por mudança de `rows`/`actions`. */
  protected readonly menuItems = computed(() => {
    const actions = this.actions();
    return new Map(
      this.rows().map((row) => [
        row,
        actions
          .filter((a) => !a.hidden?.(row))
          .map<UiMenuItem>((a) => ({
            id: a.id,
            label: a.label,
            danger: a.danger,
            disabled: a.disabled?.(row) ?? false,
          })),
      ]),
    );
  });

  cellValue(row: T, column: UiTableColumn<T>): unknown {
    return column.value ? column.value(row) : (row as Record<string, unknown>)[column.key];
  }

  /** Texto da primeira coluna, usado para dar contexto aos botões ("Ações: relatorio.pdf"). */
  protected rowName(row: T): string {
    const first = this.columns()[0];
    return first ? String(this.cellValue(row, first) ?? '') : '';
  }

  isExpanded(row: T): boolean {
    return this.expandedKeys().has(this.rowKey()(row));
  }

  toggleRow(row: T): void {
    const key = this.rowKey()(row);
    const next = new Set(this.expandedKeys());
    const expanded = !next.has(key);

    if (expanded) next.add(key);
    else next.delete(key);

    this.expandedKeys.set(next);
    this.rowToggle.emit({ row, expanded });
  }

  protected detailId(index: number): string {
    return `${this.tableId}-detail-${index}`;
  }

  protected emitAction(item: UiMenuItem, row: T): void {
    this.action.emit({ action: item.id, row });
  }
}
