import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { CENARIOS, routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    vi.stubGlobal('matchMedia', () => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  afterEach(() => vi.unstubAllGlobals());

  it('lista um link para cada cenário', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const links: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('.sidebar a'));
    expect(links.map((a) => a.getAttribute('href'))).toEqual(
      CENARIOS.map((c) => `/cenarios/${c.path}`),
    );
  });
});
