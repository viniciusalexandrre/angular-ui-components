import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'component-button',
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  readonly type = input<'submit' | 'reset' | 'button'>('button');
  readonly disabled = input<boolean>(false);
  readonly name = input<string>();
  protected clickButton = output<MouseEvent>();

  handleClick(event: MouseEvent): void {
    if (this.disabled()) return;
    this.clickButton.emit(event);
  }
}
