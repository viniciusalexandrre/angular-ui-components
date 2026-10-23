import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CENARIOS, routes } from './app.routes';
import { ShellComponent } from './shell/shell';

describe('ShellComponent', () => {
  beforeEach(async () => {
    vi.stubGlobal('matchMedia', () => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  afterEach(() => vi.unstubAllGlobals());

  it('lista um link para cada cenário e para o layout de autenticação', async () => {
    const fixture = TestBed.createComponent(ShellComponent);
    await fixture.whenStable();

    const links: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('.nav-link'));
    expect(links.map((a) => a.getAttribute('href'))).toEqual([
      ...CENARIOS.map((c) => `/cenarios/${c.path}`),
      '/entrar',
    ]);
  });
});
