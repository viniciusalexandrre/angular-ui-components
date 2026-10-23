import { TestBed } from '@angular/core/testing';

import { UiThemeToggle } from './theme-toggle';

describe('UiThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal('matchMedia', () => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
  });

  afterEach(() => vi.unstubAllGlobals());

  it('alterna o tema, aplica data-theme e persiste a escolha', async () => {
    const fixture = TestBed.createComponent(UiThemeToggle);
    await fixture.whenStable();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(button.getAttribute('aria-checked')).toBe('false');
    expect(localStorage.getItem('theme')).toBeNull();

    button.click();
    await fixture.whenStable();

    expect(button.getAttribute('aria-checked')).toBe('true');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
