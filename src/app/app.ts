import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Input } from "./components/input/input";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Input],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-ui-components');
}
