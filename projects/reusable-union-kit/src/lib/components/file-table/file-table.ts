import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { formatBytes } from '../../utils/conversion';

export interface FolderEntry {
  name: string;
  path: string;
}

export interface ObjectEntry {
  name: string;
  path: string;
  size: number;
  lastModified?: string;
}

export interface FileTableContent {
  folders: FolderEntry[];
  objects: ObjectEntry[];
}

export interface MenuTableProps {
  label: string;
  action: string;
}

// Em desenvolvimento: o template ainda é um placeholder.
@Component({
  imports: [],
  selector: 'ui-file-table',
  styleUrl: './file-table.scss',
  templateUrl: './file-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileTable {
  readonly content = input.required<FileTableContent | null>();
  readonly selectedPaths = input<Set<string>>(new Set());
  readonly allSelected = input<boolean>(false);
  readonly isLoading = input<boolean>(false);
  readonly errorMessage = input<string | null>(null);
  readonly columns = input.required<string[]>();
  protected activeMenu = signal<number | null>(null);
  protected activeFolderMenu = signal<number | null>(null);
  readonly conversion = formatBytes;
  readonly optionsMenu = input.required<MenuTableProps[]>();
  readonly optionsMenuFolder = input.required<MenuTableProps[]>();
  readonly openModal = output<unknown>();
  readonly rowClick = output<ObjectEntry | FolderEntry>();

  readonly menuAction = output<{ action: string; entry: ObjectEntry | FolderEntry }>();

  protected readonly hasData = computed(() => {
    const data = this.content();

    return Boolean(data && (data.folders.length > 0 || data.objects.length > 0));
  });

  protected readonly tableState = computed(() => {
    if (this.errorMessage()) {
      return 'error';
    }

    if (this.isLoading() && !this.hasData()) {
      return 'loading';
    }

    if (!this.isLoading() && !this.hasData()) {
      return 'empty';
    }

    return 'content';
  });

  onOpenModal(index: unknown): void {
    this.openModal.emit(index);
  }

  toggleMenu(index: number): void {
    this.activeMenu.update((current) => (current === index ? null : index));
  }

  toggleFolderMenu(index: number): void {
    this.activeFolderMenu.update((current) => (current === index ? null : index));
  }

  onMenuAction(action: string, entry: ObjectEntry | FolderEntry): void {
    this.menuAction.emit({ action, entry });
    this.activeMenu.set(null);
  }

  onRowClick(entry: ObjectEntry | FolderEntry): void {
    this.rowClick.emit(entry);
  }
}
