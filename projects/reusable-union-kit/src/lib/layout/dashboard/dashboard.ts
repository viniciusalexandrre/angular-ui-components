import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UiBreadcrumb } from '../../components/breadcrumb/breadcrumb';
import { UiSkeleton } from '../../components/skeleton/skeleton';
import { UiThemeToggle } from '../../components/theme-toggle/theme-toggle';

export interface UiDashboardMenuItem {
  id: string | number;
  text: string;
  link: string;
  icon?: string;
}

export interface UiDashboardUser {
  name: string;
  email: string;
  avatar?: string;
}

let nextId = 0;

@Component({
  imports: [RouterLink, RouterLinkActive, UiBreadcrumb, UiSkeleton, UiThemeToggle],
  selector: 'ui-layout-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'mobileOpen.set(false)',
  },
})
export class UiDashboardLayout {
  readonly menu = input.required<readonly UiDashboardMenuItem[]>();
  readonly brandName = input<string>('');
  readonly brandLogo = input<string | null>(null);

  readonly user = input<UiDashboardUser | null>(null);
  readonly userLoading = input<boolean>(false);
  readonly userError = input<string | null>(null);

  readonly showThemeToggle = input<boolean>(true);
  /** Menu recolhido (só ícones). Use [(collapsed)] para lembrar a escolha. */
  readonly collapsed = model<boolean>(false);

  readonly menuLabel = input<string>('Menu principal');
  readonly collapseLabel = input<string>('Recolher menu');
  readonly expandLabel = input<string>('Expandir menu');
  readonly openMenuLabel = input<string>('Abrir menu');
  readonly closeMenuLabel = input<string>('Fechar menu');
  readonly logoutLabel = input<string>('Sair');
  readonly userLoadingLabel = input<string>('Carregando usuário...');

  readonly logout = output<void>();

  /** Gaveta do menu no celular. */
  readonly mobileOpen = signal(false);
  protected readonly sidebarId = `ui-dashboard-sidebar-${nextId++}`;

  protected readonly userState = computed<'loading' | 'error' | 'content' | 'none'>(() => {
    if (this.userLoading()) return 'loading';
    if (this.userError()) return 'error';
    return this.user() ? 'content' : 'none';
  });

  protected readonly initials = computed(() => {
    const parts = (this.user()?.name ?? '').trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return '';
    const first = parts[0][0];
    const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
  });

  toggle(): void {
    this.collapsed.update((value) => !value);
  }
}
