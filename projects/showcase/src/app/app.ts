import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CENARIOS } from './app.routes';
import { UiBreadcrumb, UiThemeToggle } from './kit';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, UiBreadcrumb, UiThemeToggle],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly cenarios = CENARIOS;
}
