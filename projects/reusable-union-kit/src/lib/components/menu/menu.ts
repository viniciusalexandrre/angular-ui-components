import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  Injector,
  input,
  output,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';

export interface UiMenuItem {
  id: string;
  label: string;
  /** Ação destrutiva (ex.: excluir): exibida com a cor de perigo. */
  danger?: boolean;
  disabled?: boolean;
}

let nextId = 0;

/**
 * Botão "⋮" que abre uma lista de ações.
 * O painel usa position: fixed para não ser cortado por contêineres com overflow (ex.: tabelas).
 */
@Component({
  selector: 'ui-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'handleDocumentClick($event)',
    '(window:resize)': 'close()',
  },
})
export class UiMenu {
  readonly items = input.required<readonly UiMenuItem[]>();
  /** Nome acessível do botão e da lista (ex.: "Ações para relatorio.pdf"). */
  readonly label = input<string>('Ações');

  readonly itemSelect = output<UiMenuItem>();

  readonly isOpen = signal(false);
  protected readonly position = signal({ top: 0, right: 0 });
  protected readonly menuId = `ui-menu-${nextId++}`;

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly injector = inject(Injector);
  private readonly trigger = viewChild.required<ElementRef<HTMLButtonElement>>('trigger');
  private readonly panel = viewChild<ElementRef<HTMLElement>>('panel');
  private readonly itemRefs = viewChildren<ElementRef<HTMLButtonElement>>('menuItem');

  private readonly closeOnScroll = () => this.close();

  constructor() {
    inject(DestroyRef).onDestroy(() => this.removeScrollListener());
  }

  toggle(): void {
    if (this.isOpen()) this.close(true);
    else this.open('first');
  }

  open(focus: 'first' | 'last' = 'first'): void {
    if (this.items().length === 0) return;

    const rect = this.trigger().nativeElement.getBoundingClientRect();
    this.position.set({ top: rect.bottom + 4, right: window.innerWidth - rect.right });
    this.isOpen.set(true);
    document.addEventListener('scroll', this.closeOnScroll, true);

    afterNextRender(
      () => {
        this.flipIfNeeded(rect);
        this.focusItem(focus === 'first' ? 0 : this.itemRefs().length - 1);
      },
      { injector: this.injector },
    );
  }

  close(returnFocus = false): void {
    if (!this.isOpen()) return;

    this.isOpen.set(false);
    this.removeScrollListener();
    if (returnFocus) this.trigger().nativeElement.focus();
  }

  choose(item: UiMenuItem): void {
    if (item.disabled) return;

    this.close(true);
    this.itemSelect.emit(item);
  }

  handleTriggerKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.open(event.key === 'ArrowDown' ? 'first' : 'last');
    }
  }

  handleMenuKeydown(event: KeyboardEvent): void {
    const items = this.itemRefs().map((ref) => ref.nativeElement);
    const current = items.indexOf(document.activeElement as HTMLButtonElement);

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.focusItem((current + 1) % items.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.focusItem((current - 1 + items.length) % items.length);
        break;
      case 'Home':
        event.preventDefault();
        this.focusItem(0);
        break;
      case 'End':
        event.preventDefault();
        this.focusItem(items.length - 1);
        break;
      case 'Escape':
        event.preventDefault();
        this.close(true);
        break;
      case 'Tab':
        this.close();
        break;
    }
  }

  handleDocumentClick(event: MouseEvent): void {
    if (this.isOpen() && !this.host.nativeElement.contains(event.target as Node)) {
      this.close();
    }
  }

  private focusItem(index: number): void {
    this.itemRefs()[index]?.nativeElement.focus();
  }

  /** Abre para cima quando não há espaço abaixo do botão. */
  private flipIfNeeded(trigger: DOMRect): void {
    const panel = this.panel()?.nativeElement;
    if (!panel) return;

    const height = panel.getBoundingClientRect().height;
    if (trigger.bottom + 4 + height > window.innerHeight && trigger.top - 4 - height > 0) {
      this.position.update((pos) => ({ ...pos, top: trigger.top - 4 - height }));
    }
  }

  private removeScrollListener(): void {
    document.removeEventListener('scroll', this.closeOnScroll, true);
  }
}
