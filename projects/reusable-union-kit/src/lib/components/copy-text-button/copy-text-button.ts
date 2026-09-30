import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { Component, input, signal } from '@angular/core';

@Component({
  imports: [CdkCopyToClipboard],
  selector: 'component-copy-text-button',
  styleUrl: './copy-text-button.scss',
  templateUrl: './copy-text-button.html',
})
export class CopyTextButton {
  readonly code = input.required<string>();
  readonly isCopied = signal<boolean>(false);

  onCopy(): void {
    this.isCopied.set(true);
    setTimeout(() => this.isCopied.set(false), 4000);
  }
}
