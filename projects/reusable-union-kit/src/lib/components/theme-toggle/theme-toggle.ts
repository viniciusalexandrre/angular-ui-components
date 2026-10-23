import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  PLATFORM_ID,
  signal,
} from '@angular/core';

export type Theme = 'light' | 'dark';
const THEME_KEY = 'theme';

@Component({
  imports: [],
  selector: 'ui-theme-toggle',
  styleUrl: './theme-toggle.scss',
  templateUrl: './theme-toggle.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiThemeToggle {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly label = input<string>('Tema escuro');

  readonly theme = signal<Theme>(this.getInitialTheme());
  protected readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    effect(() => {
      if (!this.isBrowser) return;

      const currentTheme = this.theme();
      document.documentElement.setAttribute('data-theme', currentTheme);
    });

    this.listenToSystemThemeChanges();
  }

  toggle(): void {
    this.theme.update((current) => (current === 'light' ? 'dark' : 'light'));
    // Só grava a escolha manual; sem ela o tema continua seguindo o sistema.
    this.writeStorage(this.theme());
  }

  private getInitialTheme(): Theme {
    if (!this.isBrowser) return 'light';

    const savedTheme = this.readStorage();
    return savedTheme ?? this.getSystemPreference();
  }

  private getSystemPreference(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private listenToSystemThemeChanges(): void {
    if (!this.isBrowser) return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event: MediaQueryListEvent) => {
      if (!this.readStorage()) this.theme.set(event.matches ? 'dark' : 'light');
    };

    media.addEventListener('change', listener);
    inject(DestroyRef).onDestroy(() => media.removeEventListener('change', listener));
  }

  // localStorage pode lançar erro (modo privado, cookies bloqueados).
  private readStorage(): Theme | null {
    try {
      const value = localStorage.getItem(THEME_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }

  private writeStorage(theme: Theme): void {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Sem persistência: o tema vale só para esta sessão.
    }
  }
}
