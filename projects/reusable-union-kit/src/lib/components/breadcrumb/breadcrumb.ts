import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

export interface UiBreadcrumbItem {
  label: string;
  url: string;
}

/** Monta os itens a partir de `data: { breadcrumb: 'Rótulo' }` nas rotas ativas. */
@Component({
  imports: [RouterLink],
  selector: 'ui-breadcrumb',
  styleUrl: './breadcrumb.scss',
  templateUrl: './breadcrumb.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBreadcrumb {
  private readonly router = inject(Router);

  readonly label = input<string>('Navegação estrutural');
  readonly separator = input<string>('/');

  private readonly navigationEnd = toSignal(
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)),
  );

  readonly breadcrumbs = computed(() => {
    this.navigationEnd();
    return this.buildBreadcrumbs(this.router.routerState.root);
  });

  private buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: UiBreadcrumbItem[] = [],
  ): UiBreadcrumbItem[] {
    const child = route.firstChild;

    if (!child) return breadcrumbs;

    const routeURL = child.snapshot.url.map((s) => s.path).join('/');
    let fullURL = url;
    if (routeURL) {
      fullURL = url ? `${url}/${routeURL}` : routeURL;
    }
    const label = child.snapshot.data['breadcrumb'];
    if (label && !breadcrumbs.some((b) => b.url === `/${fullURL}`)) {
      breadcrumbs.push({ label, url: `/${fullURL}` });
    }
    return this.buildBreadcrumbs(child, fullURL, breadcrumbs);
  }
}
