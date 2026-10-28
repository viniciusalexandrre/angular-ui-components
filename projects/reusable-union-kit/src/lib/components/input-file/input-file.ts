import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { FormValueControl, ValidationError } from '@angular/forms/signals';
import { formatBytes } from '../../utils/conversion';
import { UiField } from '../field/field';

export type UiInputFileValue = File | File[] | null;

/** Motivo de um arquivo ter sido ignorado. */
export interface UiInputFileRejection {
  file: File;
  reason: 'accept' | 'maxSize';
}

/**
 * Área para arrastar ou escolher arquivos.
 * O valor é `File | null` (padrão) ou `File[]` com [multiple]="true".
 */
@Component({
  selector: 'ui-input-file',
  imports: [UiField],
  templateUrl: './input-file.html',
  styleUrl: './input-file.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // O `id` é repassado para dentro; sem isto o atributo estático também ficaria no host.
  host: { '[attr.id]': 'null' },
})
export class UiInputFile implements FormValueControl<UiInputFileValue> {
  readonly value = model<UiInputFileValue>(null);
  readonly touched = input<boolean>(false);
  readonly touch = output<void>();
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly invalid = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly errors = input<readonly ValidationError[]>([]);
  readonly name = input<string>('');

  readonly label = input.required<string>();
  readonly id = input.required<string>();
  readonly hint = input<string>('');
  /** Tipos aceitos, no formato do atributo HTML (ex.: '.pdf,image/*'). Vazio aceita tudo. */
  readonly accept = input<string>('');
  readonly multiple = input<boolean>(false);
  /** Tamanho máximo por arquivo, em bytes. */
  readonly maxSize = input<number | null>(null);

  readonly titleText = input<string>('Arraste seu arquivo para cá');
  readonly actionText = input<string>('clique para escolher um arquivo');
  readonly orText = input<string>('ou');
  readonly addMoreText = input<string>('clique ou arraste para adicionar mais');
  readonly removeLabel = input<string>('Remover');
  readonly selectedText = input<(count: number) => string>(
    (count) => `${count} ${count === 1 ? 'arquivo selecionado' : 'arquivos selecionados'}`,
  );

  /** Arquivos ignorados por tipo ou tamanho (ex.: para mostrar um aviso). */
  readonly rejected = output<UiInputFileRejection[]>();

  readonly isDragging = signal(false);

  readonly selectedFiles = computed<File[]>(() => {
    const value = this.value();
    if (value instanceof File) return [value];
    if (Array.isArray(value)) return value.filter((item): item is File => item instanceof File);
    return [];
  });

  readonly hasFiles = computed(() => this.selectedFiles().length > 0);
  protected readonly formatSize = formatBytes;

  protected readonly showErrors = computed(() => this.invalid() && this.touched());

  protected readonly describedBy = computed(() => {
    if (this.showErrors()) return `${this.id()}-error`;
    if (this.hint()) return `${this.id()}-hint`;
    return null;
  });

  protected readonly isInteractive = computed(() => !this.disabled() && !this.readonly());

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    if (this.isInteractive()) this.isDragging.set(true);
  }

  onDragLeave(event: DragEvent): void {
    const current = event.currentTarget as HTMLElement;
    const related = event.relatedTarget as Node | null;
    if (!related || !current.contains(related)) this.isDragging.set(false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging.set(false);
    if (!this.isInteractive()) return;

    this.addFiles(Array.from(event.dataTransfer?.files ?? []));
  }

  handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.addFiles(Array.from(input.files ?? []));
    // Limpa o input para que escolher o mesmo arquivo de novo dispare `change`.
    input.value = '';
  }

  handleClick(event: MouseEvent): void {
    if (this.readonly()) event.preventDefault();
  }

  removeFile(file: File): void {
    if (!this.isInteractive()) return;

    this.value.set(this.multiple() ? this.selectedFiles().filter((f) => f !== file) : null);
    this.touch.emit();
  }

  private addFiles(files: File[]): void {
    const rejections: UiInputFileRejection[] = [];
    const valid = files.filter((file) => {
      const reason = this.rejectionReason(file);
      if (reason) rejections.push({ file, reason });
      return !reason;
    });

    if (rejections.length) this.rejected.emit(rejections);

    if (valid.length > 0) {
      if (this.multiple()) {
        const merged = [...this.selectedFiles()];
        for (const file of valid) {
          if (!merged.some((f) => f.name === file.name && f.size === file.size)) merged.push(file);
        }
        this.value.set(merged);
      } else {
        this.value.set(valid[0]);
      }
    }

    this.touch.emit();
  }

  /** O atributo `accept` só filtra a janela de seleção; arquivos arrastados precisam ser conferidos. */
  private rejectionReason(file: File): UiInputFileRejection['reason'] | null {
    const max = this.maxSize();
    if (max !== null && file.size > max) return 'maxSize';
    return matchesAccept(file, this.accept()) ? null : 'accept';
  }
}

function matchesAccept(file: File, accept: string): boolean {
  const rules = accept
    .split(',')
    .map((rule) => rule.trim().toLowerCase())
    .filter(Boolean);
  if (rules.length === 0) return true;

  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();

  return rules.some((rule) => {
    if (rule.startsWith('.')) return name.endsWith(rule);
    if (rule.endsWith('/*')) return type.startsWith(rule.slice(0, -1));
    return type === rule;
  });
}
