import { FormValueControl, ValidationError } from "@angular/forms/signals";
import * as i0 from "@angular/core";
export interface AutocompleteOption {
  label: string;
  value: string;
}
export declare class UiAutocomplete implements FormValueControl<string | null> {
  readonly id: import("@angular/core").InputSignal<string>;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly hint: import("@angular/core").InputSignal<string>;
  readonly placeholder: import("@angular/core").InputSignal<string>;
  /** Quantidade mínima de caracteres para abrir a lista e emitir `searchChange`. */
  readonly minSearchLength: import("@angular/core").InputSignal<number>;
  readonly name: import("@angular/core").InputSignal<string>;
  readonly disabled: import("@angular/core").InputSignal<boolean>;
  readonly readonly: import("@angular/core").InputSignal<boolean>;
  readonly required: import("@angular/core").InputSignal<boolean>;
  readonly invalid: import("@angular/core").InputSignal<boolean>;
  readonly touched: import("@angular/core").InputSignal<boolean>;
  readonly errors: import("@angular/core").InputSignal<readonly ValidationError[]>;
  readonly options: import("@angular/core").InputSignal<readonly AutocompleteOption[]>;
  readonly isLoading: import("@angular/core").InputSignal<boolean>;
  /** Mensagem exibida na lista quando a busca falha. */
  readonly loadError: import("@angular/core").InputSignal<string | null>;
  readonly loadingText: import("@angular/core").InputSignal<string>;
  readonly emptyText: import("@angular/core").InputSignal<string>;
  readonly invalidOptionText: import("@angular/core").InputSignal<string>;
  readonly value: import("@angular/core").ModelSignal<string | null>;
  readonly touch: import("@angular/core").OutputEmitterRef<void>;
  readonly searchChange: import("@angular/core").OutputEmitterRef<string>;
  /** Texto do campo. Volta a refletir o label da opção sempre que `value` muda (seleção, reset ou patch). */
  readonly searchTerm: import("@angular/core").WritableSignal<string>;
  readonly isOpen: import("@angular/core").WritableSignal<boolean>;
  readonly activeIndex: import("@angular/core").WritableSignal<number>;
  readonly hasInvalidValue: import("@angular/core").WritableSignal<boolean>;
  protected readonly listboxId: import("@angular/core").Signal<string>;
  protected readonly showPanel: import("@angular/core").Signal<boolean>;
  protected readonly showErrors: import("@angular/core").Signal<boolean>;
  protected readonly displayedErrors: import("@angular/core").Signal<readonly ValidationError[]>;
  protected readonly describedBy: import("@angular/core").Signal<string | null>;
  protected readonly activeDescendant: import("@angular/core").Signal<string | null>;
  optionId(index: number): string;
  onInput(text: string): void;
  select(option: AutocompleteOption): void;
  handleFocus(): void;
  handleKeydown(event: KeyboardEvent): void;
  handleBlur(): void;
  clear(): void;
  private close;
  private isInteractive;
  private labelFor;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiAutocomplete, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiAutocomplete, "ui-autocomplete", never, {
    "id": {
      "alias": "id";
      "required": true;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": true;
      "isSignal": true;
    };
    "hint": {
      "alias": "hint";
      "required": false;
      "isSignal": true;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
      "isSignal": true;
    };
    "minSearchLength": {
      "alias": "minSearchLength";
      "required": false;
      "isSignal": true;
    };
    "name": {
      "alias": "name";
      "required": false;
      "isSignal": true;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
      "isSignal": true;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
      "isSignal": true;
    };
    "required": {
      "alias": "required";
      "required": false;
      "isSignal": true;
    };
    "invalid": {
      "alias": "invalid";
      "required": false;
      "isSignal": true;
    };
    "touched": {
      "alias": "touched";
      "required": false;
      "isSignal": true;
    };
    "errors": {
      "alias": "errors";
      "required": false;
      "isSignal": true;
    };
    "options": {
      "alias": "options";
      "required": false;
      "isSignal": true;
    };
    "isLoading": {
      "alias": "isLoading";
      "required": false;
      "isSignal": true;
    };
    "loadError": {
      "alias": "loadError";
      "required": false;
      "isSignal": true;
    };
    "loadingText": {
      "alias": "loadingText";
      "required": false;
      "isSignal": true;
    };
    "emptyText": {
      "alias": "emptyText";
      "required": false;
      "isSignal": true;
    };
    "invalidOptionText": {
      "alias": "invalidOptionText";
      "required": false;
      "isSignal": true;
    };
    "value": {
      "alias": "value";
      "required": false;
      "isSignal": true;
    };
  }, {
    "value": "valueChange";
    "touch": "touch";
    "searchChange": "searchChange";
  }, never, never, true, never>;
}
export declare class UiBanner {
  readonly heading: import("@angular/core").InputSignal<string>;
  readonly subtitle: import("@angular/core").InputSignal<string>;
  readonly description: import("@angular/core").InputSignal<string>;
  readonly buttonText: import("@angular/core").InputSignal<string>;
  readonly img: import("@angular/core").InputSignal<string>;
  readonly imgAlt: import("@angular/core").InputSignal<string>;
  readonly imgWidth: import("@angular/core").InputSignal<number>;
  readonly imgHeight: import("@angular/core").InputSignal<number>;
  /** Ative apenas quando o banner estiver acima da dobra (LCP). */
  readonly imgPriority: import("@angular/core").InputSignal<boolean>;
  readonly buttonClick: import("@angular/core").OutputEmitterRef<void>;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiBanner, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiBanner, "ui-banner", never, {
    "heading": {
      "alias": "heading";
      "required": true;
      "isSignal": true;
    };
    "subtitle": {
      "alias": "subtitle";
      "required": false;
      "isSignal": true;
    };
    "description": {
      "alias": "description";
      "required": false;
      "isSignal": true;
    };
    "buttonText": {
      "alias": "buttonText";
      "required": false;
      "isSignal": true;
    };
    "img": {
      "alias": "img";
      "required": false;
      "isSignal": true;
    };
    "imgAlt": {
      "alias": "imgAlt";
      "required": false;
      "isSignal": true;
    };
    "imgWidth": {
      "alias": "imgWidth";
      "required": false;
      "isSignal": true;
    };
    "imgHeight": {
      "alias": "imgHeight";
      "required": false;
      "isSignal": true;
    };
    "imgPriority": {
      "alias": "imgPriority";
      "required": false;
      "isSignal": true;
    };
  }, {
    "buttonClick": "buttonClick";
  }, never, ["*"], true, never>;
}
export type UiButtonVariant = 'primary' | 'secondary' | 'ghost';
export type UiButtonSize = 'sm' | 'md' | 'lg';
/**
 * Aplicado direto no elemento nativo, preservando todos os atributos dele
 * (type, disabled, form, aria-*, routerLink...):
 *
 * <button ui-button type="submit">Salvar</button>
 * <a ui-button variant="secondary" routerLink="/home">Início</a>
 */
export declare class UiButton {
  readonly variant: import("@angular/core").InputSignal<UiButtonVariant>;
  readonly size: import("@angular/core").InputSignal<UiButtonSize>;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiButton, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiButton, "button[ui-button], a[ui-button]", never, {
    "variant": {
      "alias": "variant";
      "required": false;
      "isSignal": true;
    };
    "size": {
      "alias": "size";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
export declare class UiCopyTextButton {
  readonly text: import("@angular/core").InputSignal<string>;
  /** Tempo (ms) que o estado "copiado" fica visível. */
  readonly resetDelay: import("@angular/core").InputSignal<number>;
  readonly copyLabel: import("@angular/core").InputSignal<string>;
  readonly copiedLabel: import("@angular/core").InputSignal<string>;
  readonly copied: import("@angular/core").OutputEmitterRef<string>;
  readonly copyFailed: import("@angular/core").OutputEmitterRef<unknown>;
  readonly isCopied: import("@angular/core").WritableSignal<boolean>;
  private resetTimer?;
  constructor();
  copy(): Promise<void>;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiCopyTextButton, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiCopyTextButton, "ui-copy-text-button", never, {
    "text": {
      "alias": "text";
      "required": true;
      "isSignal": true;
    };
    "resetDelay": {
      "alias": "resetDelay";
      "required": false;
      "isSignal": true;
    };
    "copyLabel": {
      "alias": "copyLabel";
      "required": false;
      "isSignal": true;
    };
    "copiedLabel": {
      "alias": "copiedLabel";
      "required": false;
      "isSignal": true;
    };
  }, {
    "copied": "copied";
    "copyFailed": "copyFailed";
  }, never, never, true, never>;
}
export declare class UiField {
  readonly id: import("@angular/core").InputSignal<string>;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly hint: import("@angular/core").InputSignal<string>;
  readonly required: import("@angular/core").InputSignal<boolean>;
  readonly errors: import("@angular/core").InputSignal<readonly ValidationError[]>;
  readonly showErrors: import("@angular/core").InputSignal<boolean>;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiField, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiField, "ui-field", never, {
    "id": {
      "alias": "id";
      "required": true;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": true;
      "isSignal": true;
    };
    "hint": {
      "alias": "hint";
      "required": false;
      "isSignal": true;
    };
    "required": {
      "alias": "required";
      "required": false;
      "isSignal": true;
    };
    "errors": {
      "alias": "errors";
      "required": false;
      "isSignal": true;
    };
    "showErrors": {
      "alias": "showErrors";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
export declare class UiInput implements FormValueControl<string | null> {
  readonly value: import("@angular/core").ModelSignal<string | null>;
  readonly touched: import("@angular/core").InputSignal<boolean>;
  readonly touch: import("@angular/core").OutputEmitterRef<void>;
  readonly disabled: import("@angular/core").InputSignal<boolean>;
  readonly readonly: import("@angular/core").InputSignal<boolean>;
  readonly invalid: import("@angular/core").InputSignal<boolean>;
  readonly required: import("@angular/core").InputSignal<boolean>;
  readonly minLength: import("@angular/core").InputSignal<number | undefined>;
  readonly maxLength: import("@angular/core").InputSignal<number | undefined>;
  readonly errors: import("@angular/core").InputSignal<readonly ValidationError[]>;
  readonly name: import("@angular/core").InputSignal<string>;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly id: import("@angular/core").InputSignal<string>;
  readonly hint: import("@angular/core").InputSignal<string>;
  readonly type: import("@angular/core").InputSignal<"text" | "email" | "tel" | "url" | "search">;
  readonly placeholder: import("@angular/core").InputSignal<string>;
  readonly autocomplete: import("@angular/core").InputSignal<string>;
  protected readonly showErrors: import("@angular/core").Signal<boolean>;
  protected readonly describedBy: import("@angular/core").Signal<string | null>;
  handleInput(event: Event): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiInput, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiInput, "ui-input", never, {
    "value": {
      "alias": "value";
      "required": false;
      "isSignal": true;
    };
    "touched": {
      "alias": "touched";
      "required": false;
      "isSignal": true;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
      "isSignal": true;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
      "isSignal": true;
    };
    "invalid": {
      "alias": "invalid";
      "required": false;
      "isSignal": true;
    };
    "required": {
      "alias": "required";
      "required": false;
      "isSignal": true;
    };
    "minLength": {
      "alias": "minLength";
      "required": false;
      "isSignal": true;
    };
    "maxLength": {
      "alias": "maxLength";
      "required": false;
      "isSignal": true;
    };
    "errors": {
      "alias": "errors";
      "required": false;
      "isSignal": true;
    };
    "name": {
      "alias": "name";
      "required": false;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": true;
      "isSignal": true;
    };
    "id": {
      "alias": "id";
      "required": true;
      "isSignal": true;
    };
    "hint": {
      "alias": "hint";
      "required": false;
      "isSignal": true;
    };
    "type": {
      "alias": "type";
      "required": false;
      "isSignal": true;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
      "isSignal": true;
    };
    "autocomplete": {
      "alias": "autocomplete";
      "required": false;
      "isSignal": true;
    };
  }, {
    "value": "valueChange";
    "touch": "touch";
  }, never, never, true, never>;
}
export declare class UiInputPassword implements FormValueControl<string> {
  readonly value: import("@angular/core").ModelSignal<string>;
  readonly touched: import("@angular/core").InputSignal<boolean>;
  readonly touch: import("@angular/core").OutputEmitterRef<void>;
  readonly disabled: import("@angular/core").InputSignal<boolean>;
  readonly readonly: import("@angular/core").InputSignal<boolean>;
  readonly invalid: import("@angular/core").InputSignal<boolean>;
  readonly required: import("@angular/core").InputSignal<boolean>;
  readonly minLength: import("@angular/core").InputSignal<number | undefined>;
  readonly maxLength: import("@angular/core").InputSignal<number | undefined>;
  readonly errors: import("@angular/core").InputSignal<readonly ValidationError[]>;
  readonly name: import("@angular/core").InputSignal<string>;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly id: import("@angular/core").InputSignal<string>;
  readonly hint: import("@angular/core").InputSignal<string>;
  readonly placeholder: import("@angular/core").InputSignal<string>;
  /** Use 'new-password' em telas de cadastro/troca de senha. */
  readonly autocomplete: import("@angular/core").InputSignal<"off" | "current-password" | "new-password">;
  readonly showPasswordLabel: import("@angular/core").InputSignal<string>;
  readonly hidePasswordLabel: import("@angular/core").InputSignal<string>;
  readonly showPassword: import("@angular/core").WritableSignal<boolean>;
  protected readonly showErrors: import("@angular/core").Signal<boolean>;
  protected readonly describedBy: import("@angular/core").Signal<string | null>;
  handleInput(event: Event): void;
  togglePassword(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiInputPassword, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiInputPassword, "ui-input-password", never, {
    "value": {
      "alias": "value";
      "required": false;
      "isSignal": true;
    };
    "touched": {
      "alias": "touched";
      "required": false;
      "isSignal": true;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
      "isSignal": true;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
      "isSignal": true;
    };
    "invalid": {
      "alias": "invalid";
      "required": false;
      "isSignal": true;
    };
    "required": {
      "alias": "required";
      "required": false;
      "isSignal": true;
    };
    "minLength": {
      "alias": "minLength";
      "required": false;
      "isSignal": true;
    };
    "maxLength": {
      "alias": "maxLength";
      "required": false;
      "isSignal": true;
    };
    "errors": {
      "alias": "errors";
      "required": false;
      "isSignal": true;
    };
    "name": {
      "alias": "name";
      "required": false;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": true;
      "isSignal": true;
    };
    "id": {
      "alias": "id";
      "required": true;
      "isSignal": true;
    };
    "hint": {
      "alias": "hint";
      "required": false;
      "isSignal": true;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
      "isSignal": true;
    };
    "autocomplete": {
      "alias": "autocomplete";
      "required": false;
      "isSignal": true;
    };
    "showPasswordLabel": {
      "alias": "showPasswordLabel";
      "required": false;
      "isSignal": true;
    };
    "hidePasswordLabel": {
      "alias": "hidePasswordLabel";
      "required": false;
      "isSignal": true;
    };
  }, {
    "value": "valueChange";
    "touch": "touch";
  }, never, never, true, never>;
}
export declare class UiInputSearch implements FormValueControl<string> {
  readonly value: import("@angular/core").ModelSignal<string>;
  readonly touch: import("@angular/core").OutputEmitterRef<void>;
  readonly disabled: import("@angular/core").InputSignal<boolean>;
  readonly name: import("@angular/core").InputSignal<string>;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly id: import("@angular/core").InputSignal<string>;
  /** Mantém o label acessível para leitores de tela, mas sem exibi-lo. */
  readonly hideLabel: import("@angular/core").InputSignal<boolean>;
  readonly placeholder: import("@angular/core").InputSignal<string>;
  readonly buttonLabel: import("@angular/core").InputSignal<string>;
  /** Emitido ao pressionar Enter ou clicar no botão de pesquisa. */
  readonly search: import("@angular/core").OutputEmitterRef<string>;
  handleInput(event: Event): void;
  submit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiInputSearch, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiInputSearch, "ui-input-search", never, {
    "value": {
      "alias": "value";
      "required": false;
      "isSignal": true;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
      "isSignal": true;
    };
    "name": {
      "alias": "name";
      "required": false;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": true;
      "isSignal": true;
    };
    "id": {
      "alias": "id";
      "required": true;
      "isSignal": true;
    };
    "hideLabel": {
      "alias": "hideLabel";
      "required": false;
      "isSignal": true;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
      "isSignal": true;
    };
    "buttonLabel": {
      "alias": "buttonLabel";
      "required": false;
      "isSignal": true;
    };
  }, {
    "value": "valueChange";
    "touch": "touch";
    "search": "search";
  }, never, never, true, never>;
}