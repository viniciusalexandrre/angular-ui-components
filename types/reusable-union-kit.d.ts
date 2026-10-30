import { FormCheckboxControl, FormValueControl, ValidationError } from "@angular/forms/signals";
import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
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
  protected readonly panelState: import("@angular/core").Signal<"error" | "loading" | "empty" | "options">;
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
      "required": true;
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
/**
 * Caixa de seleção integrada ao Signal Forms: use [formField] com um campo boolean
 * ou [(checked)] fora de formulários.
 */
export declare class UiCheckbox implements FormCheckboxControl {
  readonly checked: import("@angular/core").ModelSignal<boolean>;
  readonly touched: import("@angular/core").InputSignal<boolean>;
  readonly touch: import("@angular/core").OutputEmitterRef<void>;
  readonly disabled: import("@angular/core").InputSignal<boolean>;
  readonly readonly: import("@angular/core").InputSignal<boolean>;
  readonly invalid: import("@angular/core").InputSignal<boolean>;
  readonly required: import("@angular/core").InputSignal<boolean>;
  readonly errors: import("@angular/core").InputSignal<readonly ValidationError[]>;
  readonly name: import("@angular/core").InputSignal<string>;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly id: import("@angular/core").InputSignal<string>;
  readonly hint: import("@angular/core").InputSignal<string>;
  /** Estado "parcial" (traço), ex.: "selecionar todos" com só parte dos itens marcados. */
  readonly indeterminate: import("@angular/core").InputSignal<boolean>;
  protected readonly showErrors: import("@angular/core").Signal<boolean>;
  protected readonly describedBy: import("@angular/core").Signal<string | null>;
  handleChange(event: Event): void;
  /** Checkbox nativo ignora `readonly`; bloqueia a troca manualmente. */
  handleClick(event: MouseEvent): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiCheckbox, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiCheckbox, "ui-checkbox", never, {
    "checked": {
      "alias": "checked";
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
    "indeterminate": {
      "alias": "indeterminate";
      "required": false;
      "isSignal": true;
    };
  }, {
    "checked": "checkedChange";
    "touch": "touch";
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
export declare class UiFieldset {
  readonly title: import("@angular/core").InputSignal<string>;
  readonly description: import("@angular/core").InputSignal<string>;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiFieldset, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiFieldset, "ui-fieldset", never, {
    "title": {
      "alias": "title";
      "required": true;
      "isSignal": true;
    };
    "description": {
      "alias": "description";
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
export declare function formatBytes(bytes: number): string;
export type UiInputFileValue = File | File[] | null;
/** Motivo de um arquivo ter sido ignorado. */
export interface UiInputFileRejection {
  file: File;
  reason: 'accept' | 'maxSize';
}
/**
 * Área para arrastar ou escolher arquivos.
 * O valor é `File | null` (padrão) ou `File[]` com [multiple]="true".
 */
export declare class UiInputFile implements FormValueControl<UiInputFileValue> {
  readonly value: import("@angular/core").ModelSignal<UiInputFileValue>;
  readonly touched: import("@angular/core").InputSignal<boolean>;
  readonly touch: import("@angular/core").OutputEmitterRef<void>;
  readonly disabled: import("@angular/core").InputSignal<boolean>;
  readonly readonly: import("@angular/core").InputSignal<boolean>;
  readonly invalid: import("@angular/core").InputSignal<boolean>;
  readonly required: import("@angular/core").InputSignal<boolean>;
  readonly errors: import("@angular/core").InputSignal<readonly ValidationError[]>;
  readonly name: import("@angular/core").InputSignal<string>;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly id: import("@angular/core").InputSignal<string>;
  readonly hint: import("@angular/core").InputSignal<string>;
  /** Tipos aceitos, no formato do atributo HTML (ex.: '.pdf,image/*'). Vazio aceita tudo. */
  readonly accept: import("@angular/core").InputSignal<string>;
  readonly multiple: import("@angular/core").InputSignal<boolean>;
  /** Tamanho máximo por arquivo, em bytes. */
  readonly maxSize: import("@angular/core").InputSignal<number | null>;
  readonly titleText: import("@angular/core").InputSignal<string>;
  readonly actionText: import("@angular/core").InputSignal<string>;
  readonly orText: import("@angular/core").InputSignal<string>;
  readonly addMoreText: import("@angular/core").InputSignal<string>;
  readonly removeLabel: import("@angular/core").InputSignal<string>;
  readonly selectedText: import("@angular/core").InputSignal<(count: number) => string>;
  /** Arquivos ignorados por tipo ou tamanho (ex.: para mostrar um aviso). */
  readonly rejected: import("@angular/core").OutputEmitterRef<UiInputFileRejection[]>;
  readonly isDragging: import("@angular/core").WritableSignal<boolean>;
  readonly selectedFiles: import("@angular/core").Signal<File[]>;
  readonly hasFiles: import("@angular/core").Signal<boolean>;
  protected readonly formatSize: typeof formatBytes;
  protected readonly showErrors: import("@angular/core").Signal<boolean>;
  protected readonly describedBy: import("@angular/core").Signal<string | null>;
  protected readonly isInteractive: import("@angular/core").Signal<boolean>;
  onDragOver(event: DragEvent): void;
  onDragLeave(event: DragEvent): void;
  onDrop(event: DragEvent): void;
  handleChange(event: Event): void;
  handleClick(event: MouseEvent): void;
  removeFile(file: File): void;
  private addFiles;
  /** O atributo `accept` só filtra a janela de seleção; arquivos arrastados precisam ser conferidos. */
  private rejectionReason;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiInputFile, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiInputFile, "ui-input-file", never, {
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
    "accept": {
      "alias": "accept";
      "required": false;
      "isSignal": true;
    };
    "multiple": {
      "alias": "multiple";
      "required": false;
      "isSignal": true;
    };
    "maxSize": {
      "alias": "maxSize";
      "required": false;
      "isSignal": true;
    };
    "titleText": {
      "alias": "titleText";
      "required": false;
      "isSignal": true;
    };
    "actionText": {
      "alias": "actionText";
      "required": false;
      "isSignal": true;
    };
    "orText": {
      "alias": "orText";
      "required": false;
      "isSignal": true;
    };
    "addMoreText": {
      "alias": "addMoreText";
      "required": false;
      "isSignal": true;
    };
    "removeLabel": {
      "alias": "removeLabel";
      "required": false;
      "isSignal": true;
    };
    "selectedText": {
      "alias": "selectedText";
      "required": false;
      "isSignal": true;
    };
  }, {
    "value": "valueChange";
    "touch": "touch";
    "rejected": "rejected";
  }, never, never, true, never>;
}
/**
 * Campo numérico: o valor é `number | null` (vazio vira `null`), não texto.
 * `min`/`max` são preenchidos sozinhos pelos validadores min()/max() do Signal Forms.
 */
export declare class UiInputNumber implements FormValueControl<number | null> {
  readonly value: import("@angular/core").ModelSignal<number | null>;
  readonly touched: import("@angular/core").InputSignal<boolean>;
  readonly touch: import("@angular/core").OutputEmitterRef<void>;
  readonly disabled: import("@angular/core").InputSignal<boolean>;
  readonly readonly: import("@angular/core").InputSignal<boolean>;
  readonly invalid: import("@angular/core").InputSignal<boolean>;
  readonly required: import("@angular/core").InputSignal<boolean>;
  readonly min: import("@angular/core").InputSignal<number | undefined>;
  readonly max: import("@angular/core").InputSignal<number | undefined>;
  /** Incremento das setas/teclado. Use 0.01 para valores com centavos, ou 'any'. */
  readonly step: import("@angular/core").InputSignal<number | "any">;
  readonly errors: import("@angular/core").InputSignal<readonly ValidationError[]>;
  readonly name: import("@angular/core").InputSignal<string>;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly id: import("@angular/core").InputSignal<string>;
  readonly hint: import("@angular/core").InputSignal<string>;
  readonly placeholder: import("@angular/core").InputSignal<string>;
  readonly autocomplete: import("@angular/core").InputSignal<string>;
  /** Mostra as setinhas de aumentar/diminuir do navegador. */
  readonly spinButtons: import("@angular/core").InputSignal<boolean>;
  protected readonly showErrors: import("@angular/core").Signal<boolean>;
  protected readonly describedBy: import("@angular/core").Signal<string | null>;
  /** Teclado do celular: só números ou números com vírgula. */
  protected readonly inputMode: import("@angular/core").Signal<"decimal" | "numeric">;
  handleInput(event: Event): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiInputNumber, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiInputNumber, "ui-input-number", never, {
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
    "min": {
      "alias": "min";
      "required": false;
      "isSignal": true;
    };
    "max": {
      "alias": "max";
      "required": false;
      "isSignal": true;
    };
    "step": {
      "alias": "step";
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
    "spinButtons": {
      "alias": "spinButtons";
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
export declare class UiOtpInput {
  readonly length: import("@angular/core").InputSignal<number>;
  readonly error: import("@angular/core").InputSignal<boolean>;
  readonly disabled: import("@angular/core").InputSignal<boolean>;
  readonly label: import("@angular/core").InputSignal<string>;
  /** Prefixo do `aria-label` de cada campo, seguido da posição (ex.: "Dígito 1"). */
  readonly digitLabel: import("@angular/core").InputSignal<string>;
  /** Emitido quando todos os dígitos estão preenchidos. */
  readonly completed: import("@angular/core").OutputEmitterRef<string>;
  /** Recriado sempre que `length` muda. */
  protected readonly otp: import("@angular/core").WritableSignal<string[]>;
  private readonly inputRefs;
  /** Limpa todos os dígitos e foca o primeiro campo. */
  reset(): void;
  handleInput(index: number, event: Event): void;
  handleKeyDown(index: number, event: KeyboardEvent): void;
  handlePaste(event: ClipboardEvent): void;
  handleFocus(event: FocusEvent): void;
  private setDigits;
  private getInputs;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiOtpInput, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiOtpInput, "ui-otp-input", never, {
    "length": {
      "alias": "length";
      "required": false;
      "isSignal": true;
    };
    "error": {
      "alias": "error";
      "required": false;
      "isSignal": true;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": false;
      "isSignal": true;
    };
    "digitLabel": {
      "alias": "digitLabel";
      "required": false;
      "isSignal": true;
    };
  }, {
    "completed": "completed";
  }, never, never, true, never>;
}
export type UiSelectValue = string | number | null;
export interface UiSelectOption {
  label: string;
  value: UiSelectValue;
  disabled?: boolean;
}
export declare class UiSelect implements FormValueControl<UiSelectValue> {
  readonly id: import("@angular/core").InputSignal<string>;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly hint: import("@angular/core").InputSignal<string>;
  readonly placeholder: import("@angular/core").InputSignal<string>;
  readonly emptyText: import("@angular/core").InputSignal<string>;
  readonly options: import("@angular/core").InputSignal<readonly UiSelectOption[]>;
  readonly disabled: import("@angular/core").InputSignal<boolean>;
  readonly readonly: import("@angular/core").InputSignal<boolean>;
  readonly required: import("@angular/core").InputSignal<boolean>;
  readonly invalid: import("@angular/core").InputSignal<boolean>;
  readonly touched: import("@angular/core").InputSignal<boolean>;
  readonly errors: import("@angular/core").InputSignal<readonly ValidationError[]>;
  readonly value: import("@angular/core").ModelSignal<UiSelectValue>;
  readonly touch: import("@angular/core").OutputEmitterRef<void>;
  /** Emitido apenas quando o usuário escolhe uma opção (não em patch/reset do formulário). */
  readonly selectionChange: import("@angular/core").OutputEmitterRef<UiSelectValue>;
  readonly isOpen: import("@angular/core").WritableSignal<boolean>;
  readonly activeIndex: import("@angular/core").WritableSignal<number>;
  protected readonly listboxId: import("@angular/core").Signal<string>;
  readonly selectedOption: import("@angular/core").Signal<UiSelectOption | null>;
  protected readonly displayText: import("@angular/core").Signal<string>;
  protected readonly showErrors: import("@angular/core").Signal<boolean>;
  protected readonly describedBy: import("@angular/core").Signal<string | null>;
  protected readonly activeDescendant: import("@angular/core").Signal<string | null>;
  optionId(index: number): string;
  toggle(): void;
  select(option: UiSelectOption): void;
  handleKeydown(event: KeyboardEvent): void;
  handleBlur(): void;
  private open;
  private close;
  /** Move a opção ativa pulando as desabilitadas. */
  private moveActive;
  private isInteractive;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiSelect, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiSelect, "ui-select", never, {
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
    "emptyText": {
      "alias": "emptyText";
      "required": false;
      "isSignal": true;
    };
    "options": {
      "alias": "options";
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
    "value": {
      "alias": "value";
      "required": false;
      "isSignal": true;
    };
  }, {
    "value": "valueChange";
    "touch": "touch";
    "selectionChange": "selectionChange";
  }, never, never, true, never>;
}
export interface UiBreadcrumbItem {
  label: string;
  url: string;
}
/** Monta os itens a partir de `data: { breadcrumb: 'Rótulo' }` nas rotas ativas. */
export declare class UiBreadcrumb {
  private readonly router;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly separator: import("@angular/core").InputSignal<string>;
  private readonly navigationEnd;
  readonly breadcrumbs: import("@angular/core").Signal<UiBreadcrumbItem[]>;
  private buildBreadcrumbs;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiBreadcrumb, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiBreadcrumb, "ui-breadcrumb", never, {
    "label": {
      "alias": "label";
      "required": false;
      "isSignal": true;
    };
    "separator": {
      "alias": "separator";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
export interface UiBreadcrumbTableItem {
  /** Posição do item no caminho; é o valor emitido em `itemSelected`. */
  index: number;
  name: string;
}
/**
 * Caminho de pastas clicável (ex.: acima de um ui-file-table).
 * Com muitos níveis, os do meio ficam recolhidos num menu "...".
 */
export declare class UiBreadcrumbTable {
  readonly rootLabel: import("@angular/core").InputSignal<string>;
  readonly items: import("@angular/core").InputSignal<readonly UiBreadcrumbTableItem[]>;
  /** Quantos itens finais ficam sempre visíveis quando o caminho é recolhido. */
  readonly maxVisible: import("@angular/core").InputSignal<number>;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly moreLabel: import("@angular/core").InputSignal<string>;
  readonly rootSelected: import("@angular/core").OutputEmitterRef<void>;
  readonly itemSelected: import("@angular/core").OutputEmitterRef<number>;
  protected readonly menuOpen: import("@angular/core").WritableSignal<boolean>;
  private readonly host;
  /** Só recolhe quando sobraria mais de um item escondido. */
  private readonly collapsed;
  protected readonly hiddenItems: import("@angular/core").Signal<UiBreadcrumbTableItem[]>;
  protected readonly visibleItems: import("@angular/core").Signal<readonly UiBreadcrumbTableItem[]>;
  protected readonly isRootCurrent: import("@angular/core").Signal<boolean>;
  protected selectRoot(): void;
  protected selectItem(index: number): void;
  /** O signal controla o <details>; o comportamento nativo de abrir/fechar é cancelado. */
  protected toggleMenu(event: Event): void;
  handleDocumentClick(event: MouseEvent): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiBreadcrumbTable, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiBreadcrumbTable, "ui-breadcrumb-table", never, {
    "rootLabel": {
      "alias": "rootLabel";
      "required": true;
      "isSignal": true;
    };
    "items": {
      "alias": "items";
      "required": false;
      "isSignal": true;
    };
    "maxVisible": {
      "alias": "maxVisible";
      "required": false;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": false;
      "isSignal": true;
    };
    "moreLabel": {
      "alias": "moreLabel";
      "required": false;
      "isSignal": true;
    };
  }, {
    "rootSelected": "rootSelected";
    "itemSelected": "itemSelected";
  }, never, never, true, never>;
}
export type UiButtonVariant = 'primary' | 'secondary' | 'ghost';
export type UiButtonSize = 'sm' | 'md' | 'lg';
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
export interface UiMenuItem {
  id: string;
  label: string;
  /** Ação destrutiva (ex.: excluir): exibida com a cor de perigo. */
  danger?: boolean;
  disabled?: boolean;
}
/**
 * Botão "⋮" que abre uma lista de ações.
 * O painel usa position: fixed para não ser cortado por contêineres com overflow (ex.: tabelas).
 */
export declare class UiMenu {
  readonly items: import("@angular/core").InputSignal<readonly UiMenuItem[]>;
  /** Nome acessível do botão e da lista (ex.: "Ações para relatorio.pdf"). */
  readonly label: import("@angular/core").InputSignal<string>;
  readonly itemSelect: import("@angular/core").OutputEmitterRef<UiMenuItem>;
  readonly isOpen: import("@angular/core").WritableSignal<boolean>;
  protected readonly position: import("@angular/core").WritableSignal<{
    top: number;
    right: number;
  }>;
  protected readonly menuId: string;
  private readonly host;
  private readonly injector;
  private readonly trigger;
  private readonly panel;
  private readonly itemRefs;
  private readonly closeOnScroll;
  constructor();
  toggle(): void;
  open(focus?: 'first' | 'last'): void;
  close(returnFocus?: boolean): void;
  choose(item: UiMenuItem): void;
  handleTriggerKeydown(event: KeyboardEvent): void;
  handleMenuKeydown(event: KeyboardEvent): void;
  handleDocumentClick(event: MouseEvent): void;
  private focusItem;
  /** Abre para cima quando não há espaço abaixo do botão. */
  private flipIfNeeded;
  private removeScrollListener;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiMenu, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiMenu, "ui-menu", never, {
    "items": {
      "alias": "items";
      "required": true;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": false;
      "isSignal": true;
    };
  }, {
    "itemSelect": "itemSelect";
  }, never, never, true, never>;
}
export declare class UiPagination {
  readonly total: import("@angular/core").InputSignalWithTransform<number, string | number>;
  /** Página atual, começando em 0. */
  readonly currentPage: import("@angular/core").InputSignal<number>;
  readonly pageSize: import("@angular/core").InputSignal<number>;
  /** Quantidade máxima de números de página exibidos ao mesmo tempo. */
  readonly maxVisible: import("@angular/core").InputSignal<number>;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly previousLabel: import("@angular/core").InputSignal<string>;
  readonly nextLabel: import("@angular/core").InputSignal<string>;
  readonly pageLabel: import("@angular/core").InputSignal<string>;
  /** Emite a nova página, começando em 0. */
  readonly pageChange: import("@angular/core").OutputEmitterRef<number>;
  protected readonly displayPage: import("@angular/core").Signal<number>;
  readonly totalPages: import("@angular/core").Signal<number>;
  readonly pages: import("@angular/core").Signal<number[]>;
  goTo(page: number): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiPagination, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiPagination, "ui-pagination", never, {
    "total": {
      "alias": "total";
      "required": true;
      "isSignal": true;
    };
    "currentPage": {
      "alias": "currentPage";
      "required": true;
      "isSignal": true;
    };
    "pageSize": {
      "alias": "pageSize";
      "required": true;
      "isSignal": true;
    };
    "maxVisible": {
      "alias": "maxVisible";
      "required": false;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": false;
      "isSignal": true;
    };
    "previousLabel": {
      "alias": "previousLabel";
      "required": false;
      "isSignal": true;
    };
    "nextLabel": {
      "alias": "nextLabel";
      "required": false;
      "isSignal": true;
    };
    "pageLabel": {
      "alias": "pageLabel";
      "required": false;
      "isSignal": true;
    };
  }, {
    "pageChange": "pageChange";
  }, never, never, true, never>;
}
export type Theme = 'light' | 'dark';
export declare class UiThemeToggle {
  private readonly isBrowser;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly theme: import("@angular/core").WritableSignal<Theme>;
  protected readonly isDark: import("@angular/core").Signal<boolean>;
  constructor();
  toggle(): void;
  private getInitialTheme;
  private getSystemPreference;
  private listenToSystemThemeChanges;
  private readStorage;
  private writeStorage;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiThemeToggle, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiThemeToggle, "ui-theme-toggle", never, {
    "label": {
      "alias": "label";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
export declare class UiModal {
  /** Nome acessível do diálogo. Use `labelledBy` quando o título estiver no conteúdo projetado. */
  readonly label: import("@angular/core").InputSignal<string>;
  readonly labelledBy: import("@angular/core").InputSignal<string | null>;
  readonly closeLabel: import("@angular/core").InputSignal<string>;
  readonly closeOnBackdrop: import("@angular/core").InputSignal<boolean>;
  readonly close: import("@angular/core").OutputEmitterRef<void>;
  private readonly dialog;
  constructor();
  handleBackdropClick(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiModal, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiModal, "ui-modal", never, {
    "label": {
      "alias": "label";
      "required": false;
      "isSignal": true;
    };
    "labelledBy": {
      "alias": "labelledBy";
      "required": false;
      "isSignal": true;
    };
    "closeLabel": {
      "alias": "closeLabel";
      "required": false;
      "isSignal": true;
    };
    "closeOnBackdrop": {
      "alias": "closeOnBackdrop";
      "required": false;
      "isSignal": true;
    };
  }, {
    "close": "close";
  }, never, ["*"], true, never>;
}
export type PopupType = 'success' | 'error' | 'warning' | 'info';
export declare class UiPopup {
  readonly message: import("@angular/core").InputSignal<string>;
  readonly type: import("@angular/core").InputSignal<PopupType>;
  readonly closeLabel: import("@angular/core").InputSignal<string>;
  readonly icon: import("@angular/core").Signal<string>;
  readonly closed: import("@angular/core").OutputEmitterRef<void>;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiPopup, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiPopup, "ui-popup", never, {
    "message": {
      "alias": "message";
      "required": true;
      "isSignal": true;
    };
    "type": {
      "alias": "type";
      "required": false;
      "isSignal": true;
    };
    "closeLabel": {
      "alias": "closeLabel";
      "required": false;
      "isSignal": true;
    };
  }, {
    "closed": "closed";
  }, never, never, true, never>;
}
export type UiSkeletonVariant = 'menu' | 'table' | 'form' | 'input' | 'banner' | 'card';
export declare class UiSkeleton {
  readonly variant: import("@angular/core").InputSignal<UiSkeletonVariant>;
  readonly quantity: import("@angular/core").InputSignal<number>;
  /** Texto lido por leitores de tela enquanto o conteúdo carrega. */
  readonly label: import("@angular/core").InputSignal<string>;
  protected readonly blocks: import("@angular/core").Signal<number[]>;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiSkeleton, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiSkeleton, "ui-skeleton", never, {
    "variant": {
      "alias": "variant";
      "required": false;
      "isSignal": true;
    };
    "quantity": {
      "alias": "quantity";
      "required": false;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
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
export interface FolderEntry {
  name: string;
  /** Caminho/prefixo da pasta, usado como identidade da linha. Sem ele, usa `name`. */
  prefix?: string;
}
export interface ObjectEntry {
  /** Chave única do arquivo (ex.: caminho completo no storage). */
  key: string;
  name: string;
  /** Tamanho em bytes. */
  size: number;
  /** Data ISO ou Date. */
  last_modified: string | Date;
}
export interface FileTableContent {
  folders: FolderEntry[];
  objects: ObjectEntry[];
}
export type FileTableEntry = FolderEntry | ObjectEntry;
export interface FileTableActionEvent {
  action: string;
  entry: FileTableEntry;
}
export declare const isFileEntry: (entry: FileTableEntry) => entry is ObjectEntry;
/**
 * Lista de pastas e arquivos (ex.: um bucket de storage).
 * Pastas aparecem primeiro; cada linha é clicável e tem um menu de ações.
 */
export declare class UiFileTable {
  readonly content: import("@angular/core").InputSignal<FileTableContent | null>;
  readonly isLoading: import("@angular/core").InputSignal<boolean>;
  readonly errorMessage: import("@angular/core").InputSignal<string | null>;
  /** Cabeçalhos das 4 colunas: nome, tamanho, data e ações. */
  readonly columns: import("@angular/core").InputSignal<readonly [string, string, string, string]>;
  readonly optionsMenu: import("@angular/core").InputSignal<readonly UiMenuItem[]>;
  readonly optionsMenuFolder: import("@angular/core").InputSignal<readonly UiMenuItem[]>;
  readonly label: import("@angular/core").InputSignal<string>;
  readonly loadingRows: import("@angular/core").InputSignal<number>;
  readonly emptyText: import("@angular/core").InputSignal<string>;
  readonly invalidDataText: import("@angular/core").InputSignal<string>;
  readonly atText: import("@angular/core").InputSignal<string>;
  /** Fuso usado na data (ex.: '-0300'). Sem ele, usa o fuso do navegador. */
  readonly timezone: import("@angular/core").InputSignal<string | undefined>;
  readonly actionsLabel: import("@angular/core").InputSignal<string>;
  readonly rowClick: import("@angular/core").OutputEmitterRef<FileTableEntry>;
  readonly menuAction: import("@angular/core").OutputEmitterRef<FileTableActionEvent>;
  protected readonly formatSize: typeof formatBytes;
  protected readonly tableState: import("@angular/core").Signal<"error" | "loading" | "empty" | "content" | "invalid">;
  protected folderKey(folder: FolderEntry): string;
  onRowClick(entry: FileTableEntry): void;
  onMenuAction(item: UiMenuItem, entry: FileTableEntry): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiFileTable, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiFileTable, "ui-file-table", never, {
    "content": {
      "alias": "content";
      "required": false;
      "isSignal": true;
    };
    "isLoading": {
      "alias": "isLoading";
      "required": false;
      "isSignal": true;
    };
    "errorMessage": {
      "alias": "errorMessage";
      "required": false;
      "isSignal": true;
    };
    "columns": {
      "alias": "columns";
      "required": false;
      "isSignal": true;
    };
    "optionsMenu": {
      "alias": "optionsMenu";
      "required": false;
      "isSignal": true;
    };
    "optionsMenuFolder": {
      "alias": "optionsMenuFolder";
      "required": false;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": false;
      "isSignal": true;
    };
    "loadingRows": {
      "alias": "loadingRows";
      "required": false;
      "isSignal": true;
    };
    "emptyText": {
      "alias": "emptyText";
      "required": false;
      "isSignal": true;
    };
    "invalidDataText": {
      "alias": "invalidDataText";
      "required": false;
      "isSignal": true;
    };
    "atText": {
      "alias": "atText";
      "required": false;
      "isSignal": true;
    };
    "timezone": {
      "alias": "timezone";
      "required": false;
      "isSignal": true;
    };
    "actionsLabel": {
      "alias": "actionsLabel";
      "required": false;
      "isSignal": true;
    };
  }, {
    "rowClick": "rowClick";
    "menuAction": "menuAction";
  }, never, never, true, never>;
}
export interface ColumnGraphProps {
  y_axios: {
    label: string;
    value: number;
  }[];
  x_axios: {
    label: string;
  }[];
}
export declare class UiColumnGraph {
  readonly data: import("@angular/core").InputSignal<ColumnGraphProps>;
  readonly title: import("@angular/core").InputSignal<string>;
  /** Valor que corresponde a 100% da altura. Sem ele, usa o maior valor de `data`. */
  readonly maxValue: import("@angular/core").InputSignal<number | null>;
  /** Label da coluna destacada (ex.: o mês atual). */
  readonly highlight: import("@angular/core").InputSignal<string | null>;
  private readonly effectiveMax;
  getBarHeight(value: number): number;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiColumnGraph, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiColumnGraph, "ui-column-graph", never, {
    "data": {
      "alias": "data";
      "required": true;
      "isSignal": true;
    };
    "title": {
      "alias": "title";
      "required": true;
      "isSignal": true;
    };
    "maxValue": {
      "alias": "maxValue";
      "required": false;
      "isSignal": true;
    };
    "highlight": {
      "alias": "highlight";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
export interface PieChartProps {
  label: string;
  value: string;
  graphValue: number;
  /** Sem cor, usa --ui-pie-chart-fill-color (1º item) ou --ui-pie-chart-track-color (demais). */
  color?: string;
}
/** Donut de progresso: o 1º item é a parte preenchida e o 2º é o total. */
export declare class UiPieChart {
  readonly title: import("@angular/core").InputSignal<string>;
  readonly data: import("@angular/core").InputSignal<PieChartProps[]>;
  readonly percentage: import("@angular/core").Signal<number>;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiPieChart, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiPieChart, "ui-pie-chart", never, {
    "title": {
      "alias": "title";
      "required": true;
      "isSignal": true;
    };
    "data": {
      "alias": "data";
      "required": true;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
export interface UiTableColumn<T> {
  /** Identificador da coluna. Sem `value`, também é a propriedade lida de cada linha. */
  key: string;
  header: string;
  /** Formata o conteúdo da célula (ex.: data, moeda, tamanho de arquivo). */
  value?: (row: T) => unknown;
  align?: 'start' | 'center' | 'end';
  /** Largura CSS da coluna (ex.: '120px', '20%'). */
  width?: string;
}
export interface UiTableAction<T> {
  id: string;
  label: string;
  danger?: boolean;
  /** Regras por linha: esconder ou desabilitar a ação para algumas linhas. */
  hidden?: (row: T) => boolean;
  disabled?: (row: T) => boolean;
}
export interface UiTableActionEvent<T> {
  action: string;
  row: T;
}
export interface UiTableCellContext<T> {
  $implicit: T;
  /** Valor da célula, já passado por `column.value` quando existir. */
  value: unknown;
}
/** Substitui o conteúdo de uma coluna: `<ng-template uiTableCell="link" let-row>`. */
export declare class UiTableCell<T = any> {
  readonly column: import("@angular/core").InputSignal<string>;
  readonly template: TemplateRef<UiTableCellContext<T>>;
  static ngTemplateContextGuard<T>(_dir: UiTableCell<T>, ctx: unknown): ctx is UiTableCellContext<T>;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiTableCell<any>, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<UiTableCell<any>, "ng-template[uiTableCell]", never, {
    "column": {
      "alias": "uiTableCell";
      "required": true;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
/** Conteúdo exibido ao expandir uma linha: `<ng-template uiTableDetail let-row>`. */
export declare class UiTableDetail<T = any> {
  readonly template: TemplateRef<{
    $implicit: T;
  }>;
  static ngTemplateContextGuard<T>(_dir: UiTableDetail<T>, ctx: unknown): ctx is {
    $implicit: T;
  };
  static ɵfac: i0.ɵɵFactoryDeclaration<UiTableDetail<any>, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<UiTableDetail<any>, "ng-template[uiTableDetail]", never, {}, {}, never, never, true, never>;
}
export declare class UiTable<T> {
  readonly columns: import("@angular/core").InputSignal<readonly UiTableColumn<T>[]>;
  readonly rows: import("@angular/core").InputSignal<readonly T[]>;
  /** Identidade estável de cada linha (usada no `track` e para lembrar as linhas abertas). */
  readonly rowKey: import("@angular/core").InputSignal<(row: T) => unknown>;
  readonly actions: import("@angular/core").InputSignal<readonly UiTableAction<T>[]>;
  /** Nome acessível da tabela. */
  readonly label: import("@angular/core").InputSignal<string>;
  readonly loading: import("@angular/core").InputSignal<boolean>;
  readonly loadingRows: import("@angular/core").InputSignal<number>;
  readonly loadingText: import("@angular/core").InputSignal<string>;
  readonly emptyText: import("@angular/core").InputSignal<string>;
  /** Quando preenchido, mostra a mensagem no corpo da tabela no lugar das linhas. */
  readonly errorMessage: import("@angular/core").InputSignal<string | null>;
  readonly actionsLabel: import("@angular/core").InputSignal<string>;
  readonly detailsLabel: import("@angular/core").InputSignal<string>;
  readonly showDetailsLabel: import("@angular/core").InputSignal<string>;
  readonly hideDetailsLabel: import("@angular/core").InputSignal<string>;
  readonly action: import("@angular/core").OutputEmitterRef<UiTableActionEvent<T>>;
  readonly rowToggle: import("@angular/core").OutputEmitterRef<{
    row: T;
    expanded: boolean;
  }>;
  protected readonly detail: import("@angular/core").Signal<UiTableDetail<any> | undefined>;
  private readonly cellTemplates;
  private readonly expandedKeys;
  private readonly tableId;
  protected readonly cellTemplateMap: import("@angular/core").Signal<Map<string, TemplateRef<UiTableCellContext<any>>>>;
  /** O cabeçalho é sempre exibido; só o corpo muda conforme o estado. */
  protected readonly bodyState: import("@angular/core").Signal<"error" | "loading" | "empty" | "content">;
  protected readonly colspan: import("@angular/core").Signal<number>;
  /** Itens do menu por linha, calculados uma vez por mudança de `rows`/`actions`. */
  protected readonly menuItems: import("@angular/core").Signal<Map<T, UiMenuItem[]>>;
  cellValue(row: T, column: UiTableColumn<T>): unknown;
  /** Texto da primeira coluna, usado para dar contexto aos botões ("Ações: relatorio.pdf"). */
  protected rowName(row: T): string;
  isExpanded(row: T): boolean;
  toggleRow(row: T): void;
  protected detailId(index: number): string;
  protected emitAction(item: UiMenuItem, row: T): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiTable<any>, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiTable<any>, "ui-table", never, {
    "columns": {
      "alias": "columns";
      "required": true;
      "isSignal": true;
    };
    "rows": {
      "alias": "rows";
      "required": true;
      "isSignal": true;
    };
    "rowKey": {
      "alias": "rowKey";
      "required": false;
      "isSignal": true;
    };
    "actions": {
      "alias": "actions";
      "required": false;
      "isSignal": true;
    };
    "label": {
      "alias": "label";
      "required": false;
      "isSignal": true;
    };
    "loading": {
      "alias": "loading";
      "required": false;
      "isSignal": true;
    };
    "loadingRows": {
      "alias": "loadingRows";
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
    "errorMessage": {
      "alias": "errorMessage";
      "required": false;
      "isSignal": true;
    };
    "actionsLabel": {
      "alias": "actionsLabel";
      "required": false;
      "isSignal": true;
    };
    "detailsLabel": {
      "alias": "detailsLabel";
      "required": false;
      "isSignal": true;
    };
    "showDetailsLabel": {
      "alias": "showDetailsLabel";
      "required": false;
      "isSignal": true;
    };
    "hideDetailsLabel": {
      "alias": "hideDetailsLabel";
      "required": false;
      "isSignal": true;
    };
  }, {
    "action": "action";
    "rowToggle": "rowToggle";
  }, ["detail", "cellTemplates"], never, true, never>;
}
export interface UiAuthLayoutImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export interface UiAuthLayoutPanel {
  logo?: UiAuthLayoutImage;
  /** Ilustração principal. É carregada com prioridade (costuma ser o LCP da página). */
  image?: UiAuthLayoutImage;
  title: string;
  description?: string;
}
/**
 * Tela dividida para login, cadastro e recuperação de senha:
 * painel da marca à esquerda e o conteúdo projetado à direita.
 *
 * <ui-layout-auth [panel]="painel"><router-outlet /></ui-layout-auth>
 */
export declare class UiAuthLayout {
  readonly panel: import("@angular/core").InputSignal<UiAuthLayoutPanel>;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiAuthLayout, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiAuthLayout, "ui-layout-auth", never, {
    "panel": {
      "alias": "panel";
      "required": true;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
export interface UiDashboardMenuItem {
  id: string | number;
  text: string;
  link: string;
  icon?: string;
}
export interface UiDashboardUser {
  name: string;
  email: string;
  avatar?: string;
}
export declare class UiDashboardLayout {
  readonly menu: import("@angular/core").InputSignal<readonly UiDashboardMenuItem[]>;
  readonly brandName: import("@angular/core").InputSignal<string>;
  readonly brandLogo: import("@angular/core").InputSignal<string | null>;
  readonly user: import("@angular/core").InputSignal<UiDashboardUser | null>;
  readonly userLoading: import("@angular/core").InputSignal<boolean>;
  readonly userError: import("@angular/core").InputSignal<string | null>;
  readonly showThemeToggle: import("@angular/core").InputSignal<boolean>;
  /** Menu recolhido (só ícones). Use [(collapsed)] para lembrar a escolha. */
  readonly collapsed: import("@angular/core").ModelSignal<boolean>;
  readonly menuLabel: import("@angular/core").InputSignal<string>;
  readonly collapseLabel: import("@angular/core").InputSignal<string>;
  readonly expandLabel: import("@angular/core").InputSignal<string>;
  readonly openMenuLabel: import("@angular/core").InputSignal<string>;
  readonly closeMenuLabel: import("@angular/core").InputSignal<string>;
  readonly logoutLabel: import("@angular/core").InputSignal<string>;
  readonly userLoadingLabel: import("@angular/core").InputSignal<string>;
  readonly logout: import("@angular/core").OutputEmitterRef<void>;
  /** Gaveta do menu no celular. */
  readonly mobileOpen: import("@angular/core").WritableSignal<boolean>;
  protected readonly sidebarId: string;
  protected readonly userState: import("@angular/core").Signal<"error" | "loading" | "content" | "none">;
  protected readonly initials: import("@angular/core").Signal<string>;
  toggle(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<UiDashboardLayout, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<UiDashboardLayout, "ui-layout-dashboard", never, {
    "menu": {
      "alias": "menu";
      "required": true;
      "isSignal": true;
    };
    "brandName": {
      "alias": "brandName";
      "required": false;
      "isSignal": true;
    };
    "brandLogo": {
      "alias": "brandLogo";
      "required": false;
      "isSignal": true;
    };
    "user": {
      "alias": "user";
      "required": false;
      "isSignal": true;
    };
    "userLoading": {
      "alias": "userLoading";
      "required": false;
      "isSignal": true;
    };
    "userError": {
      "alias": "userError";
      "required": false;
      "isSignal": true;
    };
    "showThemeToggle": {
      "alias": "showThemeToggle";
      "required": false;
      "isSignal": true;
    };
    "collapsed": {
      "alias": "collapsed";
      "required": false;
      "isSignal": true;
    };
    "menuLabel": {
      "alias": "menuLabel";
      "required": false;
      "isSignal": true;
    };
    "collapseLabel": {
      "alias": "collapseLabel";
      "required": false;
      "isSignal": true;
    };
    "expandLabel": {
      "alias": "expandLabel";
      "required": false;
      "isSignal": true;
    };
    "openMenuLabel": {
      "alias": "openMenuLabel";
      "required": false;
      "isSignal": true;
    };
    "closeMenuLabel": {
      "alias": "closeMenuLabel";
      "required": false;
      "isSignal": true;
    };
    "logoutLabel": {
      "alias": "logoutLabel";
      "required": false;
      "isSignal": true;
    };
    "userLoadingLabel": {
      "alias": "userLoadingLabel";
      "required": false;
      "isSignal": true;
    };
  }, {
    "collapsed": "collapsedChange";
    "logout": "logout";
  }, never, ["[uiDashboardHeader]", "*"], true, never>;
}