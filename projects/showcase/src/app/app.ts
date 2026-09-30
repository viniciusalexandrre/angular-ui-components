import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiInput } from 'reusable-union-kit';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiInput],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('showcase');
}
