import { Component, input, output } from '@angular/core';
import { Button } from '../button/button';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [Button, NgOptimizedImage],
  selector: 'component-banner',
  styleUrl: './banner.scss',
  templateUrl: './banner.html',
})
export class Banner {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly informative = input.required<string>();
  readonly buttonText = input.required<string>();
  readonly img = input.required<string>();
  onClick = output<void>();
}
