import { Component, ElementRef, input, model, ViewChild } from "@angular/core";

@Component({
  selector: 'app-input',
  template: `
    <div class="input-wrapper">
      <label>{{ label() }}</label>
      <input
        #nativeInput
        [value]="value()"
        (input)="onInput($event)"
      />
    </div>
  `,
  exportAs: 'appInput' // ✅ Permite acesso via template reference
})
export class Input {
  @ViewChild('nativeInput') nativeInput!: ElementRef<HTMLInputElement>;

  label = input.required<string>();
  value = model<string>('');

  // API pública para acessar o elemento nativo
  get element(): HTMLInputElement {
    return this.nativeInput.nativeElement;
  }

   protected onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
  }
}
