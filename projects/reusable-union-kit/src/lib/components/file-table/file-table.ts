import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { formatBytes } from '../../utils/conversion';
import { UiMenu, UiMenuItem } from '../menu/menu';
import { UiSkeleton } from '../skeleton/skeleton';

export interface FolderEntry {
  name: string;
  /** Caminho/prefixo da pasta, usado como identidade da linha. Sem ele, usa `name`. */
  prefix?: string;
}

export interface ObjectEntry {
  /** Chave única do arquivo (ex.: caminho completo no storage). */
  key: string;
  name: string;
  /** Tamanho em bytes. */
  size: number;
  /** Data ISO ou Date. */
  last_modified: string | Date;
}

export interface FileTableContent {
  folders: FolderEntry[];
  objects: ObjectEntry[];
}

export type FileTableEntry = FolderEntry | ObjectEntry;

export interface FileTableActionEvent {
  action: string;
  entry: FileTableEntry;
}

export const isFileEntry = (entry: FileTableEntry): entry is ObjectEntry => 'key' in entry;

/**
 * Lista de pastas e arquivos (ex.: um bucket de storage).
 * Pastas aparecem primeiro; cada linha é clicável e tem um menu de ações.
 */
@Component({
  imports: [DatePipe, UiMenu, UiSkeleton],
  selector: 'ui-file-table',
  styleUrl: './file-table.scss',
  templateUrl: './file-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFileTable {
  readonly content = input<FileTableContent | null>(null);
  readonly isLoading = input<boolean>(false);
  readonly errorMessage = input<string | null>(null);

  /** Cabeçalhos das 4 colunas: nome, tamanho, data e ações. */
  readonly columns = input<readonly [string, string, string, string]>([
    'Nome',
    'Tamanho',
    'Modificado em',
    'Ações',
  ]);
  readonly optionsMenu = input<readonly UiMenuItem[]>([]);
  readonly optionsMenuFolder = input<readonly UiMenuItem[]>([]);

  readonly label = input<string>('Arquivos');
  readonly loadingRows = input<number>(12);
  readonly emptyText = input<string>('Nenhuma pasta ou arquivo encontrado');
  readonly invalidDataText = input<string>('Erro no retorno dos dados');
  readonly atText = input<string>('às');
  /** Fuso usado na data (ex.: '-0300'). Sem ele, usa o fuso do navegador. */
  readonly timezone = input<string | undefined>(undefined);
  readonly actionsLabel = input<string>('Ações');

  readonly rowClick = output<FileTableEntry>();
  readonly menuAction = output<FileTableActionEvent>();

  protected readonly formatSize = formatBytes;

  protected readonly tableState = computed<'loading' | 'error' | 'invalid' | 'empty' | 'content'>(() => {
    const data = this.content();
    const hasData = !!data && (data.folders.length > 0 || data.objects.length > 0);

    if (this.errorMessage()) return 'error';
    if (this.isLoading() && !hasData) return 'loading';
    if (!data) return 'invalid';
    if (!hasData) return 'empty';
    return 'content';
  });

  protected folderKey(folder: FolderEntry): string {
    return folder.prefix ?? folder.name;
  }

  onRowClick(entry: FileTableEntry): void {
    this.rowClick.emit(entry);
  }

  onMenuAction(item: UiMenuItem, entry: FileTableEntry): void {
    this.menuAction.emit({ action: item.id, entry });
  }
}
