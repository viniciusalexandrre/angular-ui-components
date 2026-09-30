import { Component, inject, linkedSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  imports: [],
  selector: 'ui-breadcrumb',
  styleUrl: './breadcrumb.scss',
  templateUrl: './breadcrumb.html',
})
export class UiBreadcrumb {
  private router = inject(Router);

  private navigationEnd = toSignal(
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)),
  );

  breadcrumbs = linkedSignal(() => {
    this.navigationEnd();
    const result = this.buildBreadcrumbs(this.router.routerState.root);
    return result;
  });

  private buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: { label: string; url: string }[] = [],
  ): { label: string; url: string }[] {
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
