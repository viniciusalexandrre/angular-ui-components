import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, input, linkedSignal, model, output, signal, untracked } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
var UiField = class UiField {
	id = input.required(...ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []);
	label = input.required(...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	hint = input("", ...ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []);
	required = input(false, ...ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []);
	errors = input([], ...ngDevMode ? [{ debugName: "errors" }] : /* istanbul ignore next */ []);
	showErrors = input(false, ...ngDevMode ? [{ debugName: "showErrors" }] : /* istanbul ignore next */ []);
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiField,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiField,
		isStandalone: true,
		selector: "ui-field",
		inputs: {
			id: {
				classPropertyName: "id",
				publicName: "id",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			label: {
				classPropertyName: "label",
				publicName: "label",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			hint: {
				classPropertyName: "hint",
				publicName: "hint",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			required: {
				classPropertyName: "required",
				publicName: "required",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			errors: {
				classPropertyName: "errors",
				publicName: "errors",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			showErrors: {
				classPropertyName: "showErrors",
				publicName: "showErrors",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		ngImport: i0,
		template: "<div class=\"field\" [class.field-invalid]=\"showErrors()\">\n  <label [for]=\"id()\">\n    {{ label() }}\n    @if (required()) {\n      <span class=\"field-required\" aria-hidden=\"true\">*</span>\n    }\n  </label>\n\n  <ng-content />\n\n  @if (hint() && !showErrors()) {\n    <small class=\"field-hint\" [id]=\"id() + '-hint'\">{{ hint() }}</small>\n  }\n\n  @if (showErrors()) {\n    <div [id]=\"id() + '-error'\" role=\"alert\">\n      @for (error of errors(); track error.kind + error.message) {\n        <small>{{ error.message }}</small>\n      }\n    </div>\n  }\n</div>\n",
		styles: [":host{display:block}.field{position:relative;display:grid;gap:var(--ui-field-gap, 4px)}.field>label{color:var(--ui-field-label-color, var(--c8, #333));font-family:var(--ui-field-label-font-family, inherit);font-size:var(--ui-field-label-font-size, 14px);font-weight:var(--ui-field-label-font-weight, 500)}.field>[role=alert]{display:grid;gap:var(--ui-field-error-gap, 2px);color:var(--ui-field-error-color, var(--erro, #b3261e));font-size:var(--ui-field-error-font-size, 13px)}.field-required{margin-left:2px;color:var(--ui-field-error-color, var(--erro, #b3261e))}.field-hint{color:var(--ui-field-hint-color, var(--c7, #595959));font-size:var(--ui-field-hint-font-size, 13px)}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiField,
	decorators: [{
		type: Component,
		args: [{
			imports: [],
			selector: "ui-field",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<div class=\"field\" [class.field-invalid]=\"showErrors()\">\n  <label [for]=\"id()\">\n    {{ label() }}\n    @if (required()) {\n      <span class=\"field-required\" aria-hidden=\"true\">*</span>\n    }\n  </label>\n\n  <ng-content />\n\n  @if (hint() && !showErrors()) {\n    <small class=\"field-hint\" [id]=\"id() + '-hint'\">{{ hint() }}</small>\n  }\n\n  @if (showErrors()) {\n    <div [id]=\"id() + '-error'\" role=\"alert\">\n      @for (error of errors(); track error.kind + error.message) {\n        <small>{{ error.message }}</small>\n      }\n    </div>\n  }\n</div>\n",
			styles: [":host{display:block}.field{position:relative;display:grid;gap:var(--ui-field-gap, 4px)}.field>label{color:var(--ui-field-label-color, var(--c8, #333));font-family:var(--ui-field-label-font-family, inherit);font-size:var(--ui-field-label-font-size, 14px);font-weight:var(--ui-field-label-font-weight, 500)}.field>[role=alert]{display:grid;gap:var(--ui-field-error-gap, 2px);color:var(--ui-field-error-color, var(--erro, #b3261e));font-size:var(--ui-field-error-font-size, 13px)}.field-required{margin-left:2px;color:var(--ui-field-error-color, var(--erro, #b3261e))}.field-hint{color:var(--ui-field-hint-color, var(--c7, #595959));font-size:var(--ui-field-hint-font-size, 13px)}\n"]
		}]
	}],
	propDecorators: {
		id: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "id",
				required: true
			}]
		}],
		label: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "label",
				required: true
			}]
		}],
		hint: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "hint",
				required: false
			}]
		}],
		required: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "required",
				required: false
			}]
		}],
		errors: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "errors",
				required: false
			}]
		}],
		showErrors: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "showErrors",
				required: false
			}]
		}]
	}
});
var UiAutocomplete = class UiAutocomplete {
	id = input.required(...ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []);
	label = input.required(...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	hint = input("", ...ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []);
	placeholder = input("Pesquisar", ...ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []);
	minSearchLength = input(2, ...ngDevMode ? [{ debugName: "minSearchLength" }] : /* istanbul ignore next */ []);
	name = input("", ...ngDevMode ? [{ debugName: "name" }] : /* istanbul ignore next */ []);
	disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []);
	readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : /* istanbul ignore next */ []);
	required = input(false, ...ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []);
	invalid = input(false, ...ngDevMode ? [{ debugName: "invalid" }] : /* istanbul ignore next */ []);
	touched = input(false, ...ngDevMode ? [{ debugName: "touched" }] : /* istanbul ignore next */ []);
	errors = input([], ...ngDevMode ? [{ debugName: "errors" }] : /* istanbul ignore next */ []);
	options = input([], ...ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []);
	isLoading = input(false, ...ngDevMode ? [{ debugName: "isLoading" }] : /* istanbul ignore next */ []);
	loadError = input(null, ...ngDevMode ? [{ debugName: "loadError" }] : /* istanbul ignore next */ []);
	loadingText = input("Pesquisando...", ...ngDevMode ? [{ debugName: "loadingText" }] : /* istanbul ignore next */ []);
	emptyText = input("Nenhum valor encontrado.", ...ngDevMode ? [{ debugName: "emptyText" }] : /* istanbul ignore next */ []);
	invalidOptionText = input("Selecione uma opção válida.", ...ngDevMode ? [{ debugName: "invalidOptionText" }] : /* istanbul ignore next */ []);
	value = model(null, ...ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []);
	touch = output();
	searchChange = output();
	searchTerm = linkedSignal({
		...ngDevMode ? { debugName: "searchTerm" } : /* istanbul ignore next */ {},
		source: this.value,
		computation: (value) => value === null ? "" : this.labelFor(value)
	});
	isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : /* istanbul ignore next */ []);
	activeIndex = signal(-1, ...ngDevMode ? [{ debugName: "activeIndex" }] : /* istanbul ignore next */ []);
	hasInvalidValue = signal(false, ...ngDevMode ? [{ debugName: "hasInvalidValue" }] : /* istanbul ignore next */ []);
	listboxId = computed(() => `${this.id()}-options`, ...ngDevMode ? [{ debugName: "listboxId" }] : /* istanbul ignore next */ []);
	showPanel = computed(() => this.isOpen() && this.searchTerm().trim().length >= this.minSearchLength(), ...ngDevMode ? [{ debugName: "showPanel" }] : /* istanbul ignore next */ []);
	showErrors = computed(() => this.hasInvalidValue() || this.invalid() && this.touched(), ...ngDevMode ? [{ debugName: "showErrors" }] : /* istanbul ignore next */ []);
	displayedErrors = computed(() => this.hasInvalidValue() ? [{
		kind: "invalidOption",
		message: this.invalidOptionText()
	}] : this.errors(), ...ngDevMode ? [{ debugName: "displayedErrors" }] : /* istanbul ignore next */ []);
	describedBy = computed(() => {
		if (this.showErrors()) return `${this.id()}-error`;
		if (this.hint()) return `${this.id()}-hint`;
		return null;
	}, ...ngDevMode ? [{ debugName: "describedBy" }] : /* istanbul ignore next */ []);
	activeDescendant = computed(() => {
		const index = this.activeIndex();
		return this.showPanel() && index >= 0 ? this.optionId(index) : null;
	}, ...ngDevMode ? [{ debugName: "activeDescendant" }] : /* istanbul ignore next */ []);
	optionId(index) {
		return `${this.id()}-option-${index}`;
	}
	onInput(text) {
		this.value.set(null);
		this.searchTerm.set(text);
		this.hasInvalidValue.set(false);
		this.activeIndex.set(-1);
		this.isOpen.set(this.isInteractive());
		if (text.length === 0 || text.trim().length >= this.minSearchLength()) this.searchChange.emit(text);
	}
	select(option) {
		if (!this.isInteractive()) return;
		this.value.set(option.value);
		this.searchTerm.set(option.label);
		this.hasInvalidValue.set(false);
		this.close();
	}
	handleFocus() {
		if (this.isInteractive()) this.isOpen.set(true);
	}
	handleKeydown(event) {
		if (!this.isInteractive()) return;
		const total = this.options().length;
		switch (event.key) {
			case "ArrowDown":
				event.preventDefault();
				this.isOpen.set(true);
				if (total > 0) this.activeIndex.update((i) => (i + 1) % total);
				break;
			case "ArrowUp":
				event.preventDefault();
				this.isOpen.set(true);
				if (total > 0) this.activeIndex.update((i) => i <= 0 ? total - 1 : i - 1);
				break;
			case "Enter": {
				const option = this.options()[this.activeIndex()];
				if (this.showPanel() && option) {
					event.preventDefault();
					this.select(option);
				}
				break;
			}
			case "Escape": if (this.isOpen()) {
				event.preventDefault();
				this.close();
			}
		}
	}
	handleBlur() {
		this.touch.emit();
		this.close();
		const term = this.searchTerm().trim();
		if (term.length === 0) {
			this.value.set(null);
			this.hasInvalidValue.set(false);
			return;
		}
		if (this.value() !== null) return;
		const match = this.options().find((option) => option.label.toLowerCase() === term.toLowerCase());
		if (match) this.select(match);
		else this.hasInvalidValue.set(true);
	}
	clear() {
		if (!this.isInteractive()) return;
		this.value.set(null);
		this.searchTerm.set("");
		this.hasInvalidValue.set(false);
		this.close();
		this.searchChange.emit("");
	}
	close() {
		this.isOpen.set(false);
		this.activeIndex.set(-1);
	}
	isInteractive() {
		return !this.disabled() && !this.readonly();
	}
	labelFor(value) {
		return untracked(this.options).find((o) => o.value === value)?.label ?? value;
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiAutocomplete,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiAutocomplete,
		isStandalone: true,
		selector: "ui-autocomplete",
		inputs: {
			id: {
				classPropertyName: "id",
				publicName: "id",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			label: {
				classPropertyName: "label",
				publicName: "label",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			hint: {
				classPropertyName: "hint",
				publicName: "hint",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			placeholder: {
				classPropertyName: "placeholder",
				publicName: "placeholder",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			minSearchLength: {
				classPropertyName: "minSearchLength",
				publicName: "minSearchLength",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			name: {
				classPropertyName: "name",
				publicName: "name",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			disabled: {
				classPropertyName: "disabled",
				publicName: "disabled",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			readonly: {
				classPropertyName: "readonly",
				publicName: "readonly",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			required: {
				classPropertyName: "required",
				publicName: "required",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			invalid: {
				classPropertyName: "invalid",
				publicName: "invalid",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			touched: {
				classPropertyName: "touched",
				publicName: "touched",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			errors: {
				classPropertyName: "errors",
				publicName: "errors",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			options: {
				classPropertyName: "options",
				publicName: "options",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			isLoading: {
				classPropertyName: "isLoading",
				publicName: "isLoading",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			loadError: {
				classPropertyName: "loadError",
				publicName: "loadError",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			loadingText: {
				classPropertyName: "loadingText",
				publicName: "loadingText",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			emptyText: {
				classPropertyName: "emptyText",
				publicName: "emptyText",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			invalidOptionText: {
				classPropertyName: "invalidOptionText",
				publicName: "invalidOptionText",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			value: {
				classPropertyName: "value",
				publicName: "value",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: {
			value: "valueChange",
			touch: "touch",
			searchChange: "searchChange"
		},
		ngImport: i0,
		template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"displayedErrors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <div class=\"control\">\n    <input\n      class=\"input\"\n      type=\"text\"\n      role=\"combobox\"\n      autocomplete=\"off\"\n      aria-autocomplete=\"list\"\n      [id]=\"id()\"\n      [name]=\"name()\"\n      [value]=\"searchTerm()\"\n      [placeholder]=\"placeholder()\"\n      [disabled]=\"disabled()\"\n      [readOnly]=\"readonly()\"\n      [required]=\"required()\"\n      [attr.aria-expanded]=\"showPanel()\"\n      [attr.aria-controls]=\"listboxId()\"\n      [attr.aria-activedescendant]=\"activeDescendant()\"\n      [attr.aria-invalid]=\"showErrors()\"\n      [attr.aria-describedby]=\"describedBy()\"\n      (focus)=\"handleFocus()\"\n      (input)=\"onInput($any($event.target).value)\"\n      (keydown)=\"handleKeydown($event)\"\n      (blur)=\"handleBlur()\"\n    />\n\n    @if (showPanel()) {\n      <div class=\"panel\">\n        @if (isLoading()) {\n          <span class=\"panel-message\" role=\"status\">{{ loadingText() }}</span>\n        } @else if (loadError(); as message) {\n          <span class=\"panel-message\" role=\"alert\">{{ message }}</span>\n        } @else if (options().length === 0) {\n          <span class=\"panel-message\" role=\"status\">{{ emptyText() }}</span>\n        } @else {\n          <ul class=\"options\" role=\"listbox\" [id]=\"listboxId()\" [attr.aria-label]=\"label()\">\n            @for (option of options(); track option.value; let i = $index) {\n              <li\n                role=\"option\"\n                [id]=\"optionId(i)\"\n                [class.active]=\"i === activeIndex()\"\n                [attr.aria-selected]=\"option.value === value()\"\n                (mousedown)=\"$event.preventDefault()\"\n                (click)=\"select(option)\"\n              >\n                {{ option.label }}\n              </li>\n            }\n          </ul>\n        }\n      </div>\n    }\n  </div>\n</ui-field>\n",
		styles: [":host{display:block;width:100%}.control{position:relative}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent))}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.panel{position:absolute;z-index:var(--ui-autocomplete-z-index, 1000);top:calc(100% + .25rem);right:0;left:0;max-height:var(--ui-autocomplete-max-height, 240px);overflow-y:auto;padding:.25rem 0;border:var(--ui-autocomplete-panel-border, 1px solid var(--b3, #c6d4fe));border-radius:var(--ui-autocomplete-panel-border-radius, .375rem);background-color:var(--ui-autocomplete-panel-background, var(--b-white, #fff));box-shadow:var(--ui-autocomplete-panel-shadow, var(--shadow-1, none))}.panel-message{display:block;padding:.75rem;color:var(--ui-autocomplete-option-color, var(--c9, #404040));font-size:14px}.options{margin:0;padding:0;list-style:none}[role=option]{padding:.625rem .75rem;color:var(--ui-autocomplete-option-color, var(--c9, #404040));font-size:14px;cursor:pointer;transition:background-color .12s ease}[role=option]:hover,[role=option].active{background-color:var(--ui-autocomplete-option-active-background, var(--b3, #c6d4fe))}[role=option][aria-selected=true]{font-weight:600}@media(prefers-reduced-motion:reduce){[role=option]{transition:none}}\n"],
		dependencies: [{
			kind: "component",
			type: UiField,
			selector: "ui-field",
			inputs: [
				"id",
				"label",
				"hint",
				"required",
				"errors",
				"showErrors"
			]
		}],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiAutocomplete,
	decorators: [{
		type: Component,
		args: [{
			selector: "ui-autocomplete",
			imports: [UiField],
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"displayedErrors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <div class=\"control\">\n    <input\n      class=\"input\"\n      type=\"text\"\n      role=\"combobox\"\n      autocomplete=\"off\"\n      aria-autocomplete=\"list\"\n      [id]=\"id()\"\n      [name]=\"name()\"\n      [value]=\"searchTerm()\"\n      [placeholder]=\"placeholder()\"\n      [disabled]=\"disabled()\"\n      [readOnly]=\"readonly()\"\n      [required]=\"required()\"\n      [attr.aria-expanded]=\"showPanel()\"\n      [attr.aria-controls]=\"listboxId()\"\n      [attr.aria-activedescendant]=\"activeDescendant()\"\n      [attr.aria-invalid]=\"showErrors()\"\n      [attr.aria-describedby]=\"describedBy()\"\n      (focus)=\"handleFocus()\"\n      (input)=\"onInput($any($event.target).value)\"\n      (keydown)=\"handleKeydown($event)\"\n      (blur)=\"handleBlur()\"\n    />\n\n    @if (showPanel()) {\n      <div class=\"panel\">\n        @if (isLoading()) {\n          <span class=\"panel-message\" role=\"status\">{{ loadingText() }}</span>\n        } @else if (loadError(); as message) {\n          <span class=\"panel-message\" role=\"alert\">{{ message }}</span>\n        } @else if (options().length === 0) {\n          <span class=\"panel-message\" role=\"status\">{{ emptyText() }}</span>\n        } @else {\n          <ul class=\"options\" role=\"listbox\" [id]=\"listboxId()\" [attr.aria-label]=\"label()\">\n            @for (option of options(); track option.value; let i = $index) {\n              <li\n                role=\"option\"\n                [id]=\"optionId(i)\"\n                [class.active]=\"i === activeIndex()\"\n                [attr.aria-selected]=\"option.value === value()\"\n                (mousedown)=\"$event.preventDefault()\"\n                (click)=\"select(option)\"\n              >\n                {{ option.label }}\n              </li>\n            }\n          </ul>\n        }\n      </div>\n    }\n  </div>\n</ui-field>\n",
			styles: [":host{display:block;width:100%}.control{position:relative}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent))}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.panel{position:absolute;z-index:var(--ui-autocomplete-z-index, 1000);top:calc(100% + .25rem);right:0;left:0;max-height:var(--ui-autocomplete-max-height, 240px);overflow-y:auto;padding:.25rem 0;border:var(--ui-autocomplete-panel-border, 1px solid var(--b3, #c6d4fe));border-radius:var(--ui-autocomplete-panel-border-radius, .375rem);background-color:var(--ui-autocomplete-panel-background, var(--b-white, #fff));box-shadow:var(--ui-autocomplete-panel-shadow, var(--shadow-1, none))}.panel-message{display:block;padding:.75rem;color:var(--ui-autocomplete-option-color, var(--c9, #404040));font-size:14px}.options{margin:0;padding:0;list-style:none}[role=option]{padding:.625rem .75rem;color:var(--ui-autocomplete-option-color, var(--c9, #404040));font-size:14px;cursor:pointer;transition:background-color .12s ease}[role=option]:hover,[role=option].active{background-color:var(--ui-autocomplete-option-active-background, var(--b3, #c6d4fe))}[role=option][aria-selected=true]{font-weight:600}@media(prefers-reduced-motion:reduce){[role=option]{transition:none}}\n"]
		}]
	}],
	propDecorators: {
		id: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "id",
				required: true
			}]
		}],
		label: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "label",
				required: true
			}]
		}],
		hint: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "hint",
				required: false
			}]
		}],
		placeholder: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "placeholder",
				required: false
			}]
		}],
		minSearchLength: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "minSearchLength",
				required: false
			}]
		}],
		name: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "name",
				required: false
			}]
		}],
		disabled: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "disabled",
				required: false
			}]
		}],
		readonly: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "readonly",
				required: false
			}]
		}],
		required: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "required",
				required: false
			}]
		}],
		invalid: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "invalid",
				required: false
			}]
		}],
		touched: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "touched",
				required: false
			}]
		}],
		errors: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "errors",
				required: false
			}]
		}],
		options: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "options",
				required: false
			}]
		}],
		isLoading: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "isLoading",
				required: false
			}]
		}],
		loadError: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "loadError",
				required: false
			}]
		}],
		loadingText: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "loadingText",
				required: false
			}]
		}],
		emptyText: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "emptyText",
				required: false
			}]
		}],
		invalidOptionText: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "invalidOptionText",
				required: false
			}]
		}],
		value: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "value",
				required: false
			}]
		}, {
			type: i0.Output,
			args: ["valueChange"]
		}],
		touch: [{
			type: i0.Output,
			args: ["touch"]
		}],
		searchChange: [{
			type: i0.Output,
			args: ["searchChange"]
		}]
	}
});
var UiButton = class UiButton {
	variant = input("primary", ...ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []);
	size = input("md", ...ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []);
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiButton,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.1.0",
		version: "22.2.1",
		type: UiButton,
		isStandalone: true,
		selector: "button[ui-button], a[ui-button]",
		inputs: {
			variant: {
				classPropertyName: "variant",
				publicName: "variant",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			size: {
				classPropertyName: "size",
				publicName: "size",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		host: {
			properties: {
				"class.ui-button-primary": "variant() === 'primary'",
				"class.ui-button-secondary": "variant() === 'secondary'",
				"class.ui-button-ghost": "variant() === 'ghost'",
				"class.ui-button-sm": "size() === 'sm'",
				"class.ui-button-lg": "size() === 'lg'"
			},
			classAttribute: "ui-button"
		},
		ngImport: i0,
		template: "<ng-content />\n",
		styles: [":host{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;height:var(--ui-button-height, 40px);padding:var(--ui-button-padding, 0 20px);border:1px solid transparent;border-radius:var(--ui-button-border-radius, 10px);font-family:var(--ui-button-font-family, inherit);font-size:var(--ui-button-font-size, 14px);font-weight:var(--ui-button-font-weight, 600);line-height:1;text-decoration:none;cursor:pointer;transition:background-color .12s ease,border-color .12s ease,color .12s ease}:host(.ui-button-primary){background:var(--ui-button-primary-background, var(--b10, #335cd6));color:var(--ui-button-primary-color, #fff)}:host(.ui-button-primary):hover:not(:disabled){background:var(--ui-button-primary-hover-background, var(--b11, #213b89))}:host(.ui-button-secondary){border-color:var(--ui-button-secondary-border-color, var(--b4, #b5c6f9));background:var(--ui-button-secondary-background, var(--b-white, #fff));color:var(--ui-button-secondary-color, var(--b10, #335cd6))}:host(.ui-button-secondary):hover:not(:disabled){background:var(--ui-button-secondary-hover-background, var(--b1, #e7ecff))}:host(.ui-button-ghost){background:transparent;color:var(--ui-button-ghost-color, var(--b10, #335cd6))}:host(.ui-button-ghost):hover:not(:disabled){background:var(--ui-button-ghost-hover-background, var(--b1, #e7ecff))}:host(.ui-button-sm){height:var(--ui-button-height-sm, 32px);padding:var(--ui-button-padding-sm, 0 12px);font-size:var(--ui-button-font-size-sm, 13px)}:host(.ui-button-lg){height:var(--ui-button-height-lg, 48px);padding:var(--ui-button-padding-lg, 0 28px);font-size:var(--ui-button-font-size-lg, 16px)}:host(:focus-visible){outline:2px solid var(--ui-button-focus-color, var(--b10, #1769aa));outline-offset:2px}:host(:disabled){cursor:not-allowed;opacity:.55}@media(prefers-reduced-motion:reduce){:host{transition:none}}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiButton,
	decorators: [{
		type: Component,
		args: [{
			imports: [],
			selector: "button[ui-button], a[ui-button]",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				class: "ui-button",
				"[class.ui-button-primary]": "variant() === 'primary'",
				"[class.ui-button-secondary]": "variant() === 'secondary'",
				"[class.ui-button-ghost]": "variant() === 'ghost'",
				"[class.ui-button-sm]": "size() === 'sm'",
				"[class.ui-button-lg]": "size() === 'lg'"
			},
			template: "<ng-content />\n",
			styles: [":host{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;height:var(--ui-button-height, 40px);padding:var(--ui-button-padding, 0 20px);border:1px solid transparent;border-radius:var(--ui-button-border-radius, 10px);font-family:var(--ui-button-font-family, inherit);font-size:var(--ui-button-font-size, 14px);font-weight:var(--ui-button-font-weight, 600);line-height:1;text-decoration:none;cursor:pointer;transition:background-color .12s ease,border-color .12s ease,color .12s ease}:host(.ui-button-primary){background:var(--ui-button-primary-background, var(--b10, #335cd6));color:var(--ui-button-primary-color, #fff)}:host(.ui-button-primary):hover:not(:disabled){background:var(--ui-button-primary-hover-background, var(--b11, #213b89))}:host(.ui-button-secondary){border-color:var(--ui-button-secondary-border-color, var(--b4, #b5c6f9));background:var(--ui-button-secondary-background, var(--b-white, #fff));color:var(--ui-button-secondary-color, var(--b10, #335cd6))}:host(.ui-button-secondary):hover:not(:disabled){background:var(--ui-button-secondary-hover-background, var(--b1, #e7ecff))}:host(.ui-button-ghost){background:transparent;color:var(--ui-button-ghost-color, var(--b10, #335cd6))}:host(.ui-button-ghost):hover:not(:disabled){background:var(--ui-button-ghost-hover-background, var(--b1, #e7ecff))}:host(.ui-button-sm){height:var(--ui-button-height-sm, 32px);padding:var(--ui-button-padding-sm, 0 12px);font-size:var(--ui-button-font-size-sm, 13px)}:host(.ui-button-lg){height:var(--ui-button-height-lg, 48px);padding:var(--ui-button-padding-lg, 0 28px);font-size:var(--ui-button-font-size-lg, 16px)}:host(:focus-visible){outline:2px solid var(--ui-button-focus-color, var(--b10, #1769aa));outline-offset:2px}:host(:disabled){cursor:not-allowed;opacity:.55}@media(prefers-reduced-motion:reduce){:host{transition:none}}\n"]
		}]
	}],
	propDecorators: {
		variant: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "variant",
				required: false
			}]
		}],
		size: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "size",
				required: false
			}]
		}]
	}
});
var UiBanner = class UiBanner {
	heading = input.required(...ngDevMode ? [{ debugName: "heading" }] : /* istanbul ignore next */ []);
	subtitle = input("", ...ngDevMode ? [{ debugName: "subtitle" }] : /* istanbul ignore next */ []);
	description = input("", ...ngDevMode ? [{ debugName: "description" }] : /* istanbul ignore next */ []);
	buttonText = input("", ...ngDevMode ? [{ debugName: "buttonText" }] : /* istanbul ignore next */ []);
	img = input("", ...ngDevMode ? [{ debugName: "img" }] : /* istanbul ignore next */ []);
	imgAlt = input("", ...ngDevMode ? [{ debugName: "imgAlt" }] : /* istanbul ignore next */ []);
	imgWidth = input(160, ...ngDevMode ? [{ debugName: "imgWidth" }] : /* istanbul ignore next */ []);
	imgHeight = input(209, ...ngDevMode ? [{ debugName: "imgHeight" }] : /* istanbul ignore next */ []);
	imgPriority = input(false, ...ngDevMode ? [{ debugName: "imgPriority" }] : /* istanbul ignore next */ []);
	buttonClick = output();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiBanner,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiBanner,
		isStandalone: true,
		selector: "ui-banner",
		inputs: {
			heading: {
				classPropertyName: "heading",
				publicName: "heading",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			subtitle: {
				classPropertyName: "subtitle",
				publicName: "subtitle",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			description: {
				classPropertyName: "description",
				publicName: "description",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			buttonText: {
				classPropertyName: "buttonText",
				publicName: "buttonText",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			img: {
				classPropertyName: "img",
				publicName: "img",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			imgAlt: {
				classPropertyName: "imgAlt",
				publicName: "imgAlt",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			imgWidth: {
				classPropertyName: "imgWidth",
				publicName: "imgWidth",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			imgHeight: {
				classPropertyName: "imgHeight",
				publicName: "imgHeight",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			imgPriority: {
				classPropertyName: "imgPriority",
				publicName: "imgPriority",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { buttonClick: "buttonClick" },
		ngImport: i0,
		template: "<section class=\"banner\" [class.banner-with-image]=\"img()\">\n  @if (img()) {\n    <div class=\"banner-media\">\n      <img\n        [ngSrc]=\"img()\"\n        [alt]=\"imgAlt()\"\n        [width]=\"imgWidth()\"\n        [height]=\"imgHeight()\"\n        [priority]=\"imgPriority()\"\n      />\n    </div>\n  }\n  <div class=\"banner-content\">\n    <div class=\"banner-heading\">\n      <h2>{{ heading() }}</h2>\n      @if (subtitle()) {\n        <span class=\"banner-subtitle\">{{ subtitle() }}</span>\n      }\n    </div>\n    @if (description()) {\n      <p class=\"banner-description\">{{ description() }}</p>\n    }\n    <ng-content />\n    @if (buttonText()) {\n      <button ui-button type=\"button\" (click)=\"buttonClick.emit()\">\n        {{ buttonText() }}\n      </button>\n    }\n  </div>\n</section>\n",
		styles: [":host{display:block}.banner{box-sizing:border-box;display:grid;grid-template-columns:1fr;gap:10px;justify-items:center;width:100%;padding:var(--ui-banner-padding, 2rem);border:var(--ui-banner-border, 1px solid var(--b0, #f0f3ff));border-radius:var(--ui-banner-border-radius, 20px);background-color:var(--ui-banner-background, var(--b-white, #f6f9ff))}.banner-with-image{grid-template-columns:.3fr 1fr}@media(max-width:980px){.banner-with-image{grid-template-columns:1fr}.banner-with-image .banner-media{display:none}}.banner-content{display:grid;justify-items:center}.banner-heading{display:grid;justify-items:center;margin:20px 0 32px;text-align:center}.banner-heading h2,.banner-heading .banner-subtitle{margin:0;font-size:var(--ui-banner-heading-font-size, clamp(24px, 3vw + 8px, 36px));font-weight:700;line-height:1.35}.banner-heading h2{color:var(--ui-banner-heading-color, var(--c8, #595959))}.banner-subtitle{background:var(--ui-banner-subtitle-gradient, linear-gradient(90deg, #335cd6, #61a9eb));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.banner-description{margin:0 0 20px;color:var(--ui-banner-description-color, var(--c7, #707070));font-size:14px;font-weight:500;line-height:1.5rem;text-align:center}\n"],
		dependencies: [{
			kind: "component",
			type: UiButton,
			selector: "button[ui-button], a[ui-button]",
			inputs: ["variant", "size"]
		}, {
			kind: "directive",
			type: NgOptimizedImage,
			selector: "img[ngSrc]",
			inputs: [
				"ngSrc",
				"ngSrcset",
				"sizes",
				"width",
				"height",
				"decoding",
				"loading",
				"priority",
				"loaderParams",
				"disableOptimizedSrcset",
				"fill",
				"placeholder",
				"placeholderConfig",
				"src",
				"srcset"
			]
		}],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiBanner,
	decorators: [{
		type: Component,
		args: [{
			imports: [UiButton, NgOptimizedImage],
			selector: "ui-banner",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<section class=\"banner\" [class.banner-with-image]=\"img()\">\n  @if (img()) {\n    <div class=\"banner-media\">\n      <img\n        [ngSrc]=\"img()\"\n        [alt]=\"imgAlt()\"\n        [width]=\"imgWidth()\"\n        [height]=\"imgHeight()\"\n        [priority]=\"imgPriority()\"\n      />\n    </div>\n  }\n  <div class=\"banner-content\">\n    <div class=\"banner-heading\">\n      <h2>{{ heading() }}</h2>\n      @if (subtitle()) {\n        <span class=\"banner-subtitle\">{{ subtitle() }}</span>\n      }\n    </div>\n    @if (description()) {\n      <p class=\"banner-description\">{{ description() }}</p>\n    }\n    <ng-content />\n    @if (buttonText()) {\n      <button ui-button type=\"button\" (click)=\"buttonClick.emit()\">\n        {{ buttonText() }}\n      </button>\n    }\n  </div>\n</section>\n",
			styles: [":host{display:block}.banner{box-sizing:border-box;display:grid;grid-template-columns:1fr;gap:10px;justify-items:center;width:100%;padding:var(--ui-banner-padding, 2rem);border:var(--ui-banner-border, 1px solid var(--b0, #f0f3ff));border-radius:var(--ui-banner-border-radius, 20px);background-color:var(--ui-banner-background, var(--b-white, #f6f9ff))}.banner-with-image{grid-template-columns:.3fr 1fr}@media(max-width:980px){.banner-with-image{grid-template-columns:1fr}.banner-with-image .banner-media{display:none}}.banner-content{display:grid;justify-items:center}.banner-heading{display:grid;justify-items:center;margin:20px 0 32px;text-align:center}.banner-heading h2,.banner-heading .banner-subtitle{margin:0;font-size:var(--ui-banner-heading-font-size, clamp(24px, 3vw + 8px, 36px));font-weight:700;line-height:1.35}.banner-heading h2{color:var(--ui-banner-heading-color, var(--c8, #595959))}.banner-subtitle{background:var(--ui-banner-subtitle-gradient, linear-gradient(90deg, #335cd6, #61a9eb));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.banner-description{margin:0 0 20px;color:var(--ui-banner-description-color, var(--c7, #707070));font-size:14px;font-weight:500;line-height:1.5rem;text-align:center}\n"]
		}]
	}],
	propDecorators: {
		heading: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "heading",
				required: true
			}]
		}],
		subtitle: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "subtitle",
				required: false
			}]
		}],
		description: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "description",
				required: false
			}]
		}],
		buttonText: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "buttonText",
				required: false
			}]
		}],
		img: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "img",
				required: false
			}]
		}],
		imgAlt: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "imgAlt",
				required: false
			}]
		}],
		imgWidth: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "imgWidth",
				required: false
			}]
		}],
		imgHeight: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "imgHeight",
				required: false
			}]
		}],
		imgPriority: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "imgPriority",
				required: false
			}]
		}],
		buttonClick: [{
			type: i0.Output,
			args: ["buttonClick"]
		}]
	}
});
var UiCopyTextButton = class UiCopyTextButton {
	text = input.required(...ngDevMode ? [{ debugName: "text" }] : /* istanbul ignore next */ []);
	resetDelay = input(2e3, ...ngDevMode ? [{ debugName: "resetDelay" }] : /* istanbul ignore next */ []);
	copyLabel = input("Copiar", ...ngDevMode ? [{ debugName: "copyLabel" }] : /* istanbul ignore next */ []);
	copiedLabel = input("Copiado!", ...ngDevMode ? [{ debugName: "copiedLabel" }] : /* istanbul ignore next */ []);
	copied = output();
	copyFailed = output();
	isCopied = signal(false, ...ngDevMode ? [{ debugName: "isCopied" }] : /* istanbul ignore next */ []);
	resetTimer;
	constructor() {
		inject(DestroyRef).onDestroy(() => clearTimeout(this.resetTimer));
	}
	async copy() {
		const text = this.text();
		try {
			await navigator.clipboard.writeText(text);
		} catch (error) {
			this.copyFailed.emit(error);
			return;
		}
		this.isCopied.set(true);
		this.copied.emit(text);
		clearTimeout(this.resetTimer);
		this.resetTimer = setTimeout(() => this.isCopied.set(false), this.resetDelay());
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiCopyTextButton,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiCopyTextButton,
		isStandalone: true,
		selector: "ui-copy-text-button",
		inputs: {
			text: {
				classPropertyName: "text",
				publicName: "text",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			resetDelay: {
				classPropertyName: "resetDelay",
				publicName: "resetDelay",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			copyLabel: {
				classPropertyName: "copyLabel",
				publicName: "copyLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			copiedLabel: {
				classPropertyName: "copiedLabel",
				publicName: "copiedLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: {
			copied: "copied",
			copyFailed: "copyFailed"
		},
		ngImport: i0,
		template: "<button\n  class=\"btn-copy\"\n  type=\"button\"\n  [class.copied]=\"isCopied()\"\n  [attr.aria-label]=\"isCopied() ? copiedLabel() : copyLabel()\"\n  (click)=\"copy()\"\n>\n  @if (isCopied()) {\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n      <path d=\"M2.5 8.5l3.5 3.5 7.5-8\" />\n    </svg>\n  } @else {\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n      <rect x=\"5\" y=\"5\" width=\"9.25\" height=\"9.25\" rx=\"1.5\" />\n      <path d=\"M11 5V3.25C11 2.42 10.33 1.75 9.5 1.75H3.25c-.83 0-1.5.67-1.5 1.5V9.5c0 .83.67 1.5 1.5 1.5H5\" />\n    </svg>\n  }\n</button>\n<span class=\"visually-hidden\" aria-live=\"polite\">{{ isCopied() ? copiedLabel() : '' }}</span>\n",
		styles: [":host{display:inline-block}.btn-copy{display:inline-flex;align-items:center;justify-content:center;width:var(--ui-copy-button-size, 28px);height:var(--ui-copy-button-size, 28px);padding:0;border:var(--ui-copy-button-border, 1px solid var(--b3, #c6d4fe));border-radius:var(--ui-copy-button-border-radius, 6px);background:var(--ui-copy-button-background, var(--b-white, #fff));color:var(--ui-copy-button-color, var(--c8, #595959));cursor:pointer}.btn-copy:hover{background:var(--ui-copy-button-hover-background, var(--b1, #e7ecff))}.btn-copy:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:2px}.btn-copy.copied{color:var(--ui-copy-button-success-color, #12a454)}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiCopyTextButton,
	decorators: [{
		type: Component,
		args: [{
			imports: [],
			selector: "ui-copy-text-button",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<button\n  class=\"btn-copy\"\n  type=\"button\"\n  [class.copied]=\"isCopied()\"\n  [attr.aria-label]=\"isCopied() ? copiedLabel() : copyLabel()\"\n  (click)=\"copy()\"\n>\n  @if (isCopied()) {\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n      <path d=\"M2.5 8.5l3.5 3.5 7.5-8\" />\n    </svg>\n  } @else {\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n      <rect x=\"5\" y=\"5\" width=\"9.25\" height=\"9.25\" rx=\"1.5\" />\n      <path d=\"M11 5V3.25C11 2.42 10.33 1.75 9.5 1.75H3.25c-.83 0-1.5.67-1.5 1.5V9.5c0 .83.67 1.5 1.5 1.5H5\" />\n    </svg>\n  }\n</button>\n<span class=\"visually-hidden\" aria-live=\"polite\">{{ isCopied() ? copiedLabel() : '' }}</span>\n",
			styles: [":host{display:inline-block}.btn-copy{display:inline-flex;align-items:center;justify-content:center;width:var(--ui-copy-button-size, 28px);height:var(--ui-copy-button-size, 28px);padding:0;border:var(--ui-copy-button-border, 1px solid var(--b3, #c6d4fe));border-radius:var(--ui-copy-button-border-radius, 6px);background:var(--ui-copy-button-background, var(--b-white, #fff));color:var(--ui-copy-button-color, var(--c8, #595959));cursor:pointer}.btn-copy:hover{background:var(--ui-copy-button-hover-background, var(--b1, #e7ecff))}.btn-copy:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:2px}.btn-copy.copied{color:var(--ui-copy-button-success-color, #12a454)}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n"]
		}]
	}],
	ctorParameters: () => [],
	propDecorators: {
		text: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "text",
				required: true
			}]
		}],
		resetDelay: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "resetDelay",
				required: false
			}]
		}],
		copyLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "copyLabel",
				required: false
			}]
		}],
		copiedLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "copiedLabel",
				required: false
			}]
		}],
		copied: [{
			type: i0.Output,
			args: ["copied"]
		}],
		copyFailed: [{
			type: i0.Output,
			args: ["copyFailed"]
		}]
	}
});
var UiInput = class UiInput {
	value = model("", ...ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []);
	touched = input(false, ...ngDevMode ? [{ debugName: "touched" }] : /* istanbul ignore next */ []);
	touch = output();
	disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []);
	readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : /* istanbul ignore next */ []);
	invalid = input(false, ...ngDevMode ? [{ debugName: "invalid" }] : /* istanbul ignore next */ []);
	required = input(false, ...ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []);
	minLength = input(void 0, ...ngDevMode ? [{ debugName: "minLength" }] : /* istanbul ignore next */ []);
	maxLength = input(void 0, ...ngDevMode ? [{ debugName: "maxLength" }] : /* istanbul ignore next */ []);
	errors = input([], ...ngDevMode ? [{ debugName: "errors" }] : /* istanbul ignore next */ []);
	name = input("", ...ngDevMode ? [{ debugName: "name" }] : /* istanbul ignore next */ []);
	label = input.required(...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	id = input.required(...ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []);
	hint = input("", ...ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []);
	type = input("text", ...ngDevMode ? [{ debugName: "type" }] : /* istanbul ignore next */ []);
	placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []);
	autocomplete = input("off", ...ngDevMode ? [{ debugName: "autocomplete" }] : /* istanbul ignore next */ []);
	showErrors = computed(() => this.invalid() && this.touched(), ...ngDevMode ? [{ debugName: "showErrors" }] : /* istanbul ignore next */ []);
	describedBy = computed(() => {
		if (this.showErrors()) return `${this.id()}-error`;
		if (this.hint()) return `${this.id()}-hint`;
		return null;
	}, ...ngDevMode ? [{ debugName: "describedBy" }] : /* istanbul ignore next */ []);
	handleInput(event) {
		this.value.set(event.target.value);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiInput,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.1.0",
		version: "22.2.1",
		type: UiInput,
		isStandalone: true,
		selector: "ui-input",
		inputs: {
			value: {
				classPropertyName: "value",
				publicName: "value",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			touched: {
				classPropertyName: "touched",
				publicName: "touched",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			disabled: {
				classPropertyName: "disabled",
				publicName: "disabled",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			readonly: {
				classPropertyName: "readonly",
				publicName: "readonly",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			invalid: {
				classPropertyName: "invalid",
				publicName: "invalid",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			required: {
				classPropertyName: "required",
				publicName: "required",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			minLength: {
				classPropertyName: "minLength",
				publicName: "minLength",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			maxLength: {
				classPropertyName: "maxLength",
				publicName: "maxLength",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			errors: {
				classPropertyName: "errors",
				publicName: "errors",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			name: {
				classPropertyName: "name",
				publicName: "name",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			label: {
				classPropertyName: "label",
				publicName: "label",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			id: {
				classPropertyName: "id",
				publicName: "id",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			hint: {
				classPropertyName: "hint",
				publicName: "hint",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			type: {
				classPropertyName: "type",
				publicName: "type",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			placeholder: {
				classPropertyName: "placeholder",
				publicName: "placeholder",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			autocomplete: {
				classPropertyName: "autocomplete",
				publicName: "autocomplete",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: {
			value: "valueChange",
			touch: "touch"
		},
		ngImport: i0,
		template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"errors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <input\n    [id]=\"id()\"\n    [name]=\"name()\"\n    [type]=\"type()\"\n    [value]=\"value()\"\n    [disabled]=\"disabled()\"\n    [readOnly]=\"readonly()\"\n    [required]=\"required()\"\n    [placeholder]=\"placeholder()\"\n    [attr.minlength]=\"minLength()\"\n    [attr.maxlength]=\"maxLength()\"\n    [attr.autocomplete]=\"autocomplete()\"\n    [attr.aria-invalid]=\"showErrors()\"\n    [attr.aria-describedby]=\"describedBy()\"\n    (input)=\"handleInput($event)\"\n    (blur)=\"touch.emit()\"\n    class=\"input\"\n  />\n</ui-field>\n",
		styles: [":host{display:block}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent))}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}\n"],
		dependencies: [{
			kind: "component",
			type: UiField,
			selector: "ui-field",
			inputs: [
				"id",
				"label",
				"hint",
				"required",
				"errors",
				"showErrors"
			]
		}],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiInput,
	decorators: [{
		type: Component,
		args: [{
			selector: "ui-input",
			imports: [UiField],
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"errors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <input\n    [id]=\"id()\"\n    [name]=\"name()\"\n    [type]=\"type()\"\n    [value]=\"value()\"\n    [disabled]=\"disabled()\"\n    [readOnly]=\"readonly()\"\n    [required]=\"required()\"\n    [placeholder]=\"placeholder()\"\n    [attr.minlength]=\"minLength()\"\n    [attr.maxlength]=\"maxLength()\"\n    [attr.autocomplete]=\"autocomplete()\"\n    [attr.aria-invalid]=\"showErrors()\"\n    [attr.aria-describedby]=\"describedBy()\"\n    (input)=\"handleInput($event)\"\n    (blur)=\"touch.emit()\"\n    class=\"input\"\n  />\n</ui-field>\n",
			styles: [":host{display:block}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent))}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}\n"]
		}]
	}],
	propDecorators: {
		value: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "value",
				required: false
			}]
		}, {
			type: i0.Output,
			args: ["valueChange"]
		}],
		touched: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "touched",
				required: false
			}]
		}],
		touch: [{
			type: i0.Output,
			args: ["touch"]
		}],
		disabled: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "disabled",
				required: false
			}]
		}],
		readonly: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "readonly",
				required: false
			}]
		}],
		invalid: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "invalid",
				required: false
			}]
		}],
		required: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "required",
				required: false
			}]
		}],
		minLength: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "minLength",
				required: false
			}]
		}],
		maxLength: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "maxLength",
				required: false
			}]
		}],
		errors: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "errors",
				required: false
			}]
		}],
		name: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "name",
				required: false
			}]
		}],
		label: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "label",
				required: true
			}]
		}],
		id: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "id",
				required: true
			}]
		}],
		hint: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "hint",
				required: false
			}]
		}],
		type: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "type",
				required: false
			}]
		}],
		placeholder: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "placeholder",
				required: false
			}]
		}],
		autocomplete: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "autocomplete",
				required: false
			}]
		}]
	}
});
var UiInputPassword = class UiInputPassword {
	value = model("", ...ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []);
	touched = input(false, ...ngDevMode ? [{ debugName: "touched" }] : /* istanbul ignore next */ []);
	touch = output();
	disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []);
	readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : /* istanbul ignore next */ []);
	invalid = input(false, ...ngDevMode ? [{ debugName: "invalid" }] : /* istanbul ignore next */ []);
	required = input(false, ...ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []);
	minLength = input(void 0, ...ngDevMode ? [{ debugName: "minLength" }] : /* istanbul ignore next */ []);
	maxLength = input(void 0, ...ngDevMode ? [{ debugName: "maxLength" }] : /* istanbul ignore next */ []);
	errors = input([], ...ngDevMode ? [{ debugName: "errors" }] : /* istanbul ignore next */ []);
	name = input("", ...ngDevMode ? [{ debugName: "name" }] : /* istanbul ignore next */ []);
	label = input.required(...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	id = input.required(...ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []);
	hint = input("", ...ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []);
	placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []);
	autocomplete = input("current-password", ...ngDevMode ? [{ debugName: "autocomplete" }] : /* istanbul ignore next */ []);
	showPasswordLabel = input("Mostrar senha", ...ngDevMode ? [{ debugName: "showPasswordLabel" }] : /* istanbul ignore next */ []);
	hidePasswordLabel = input("Ocultar senha", ...ngDevMode ? [{ debugName: "hidePasswordLabel" }] : /* istanbul ignore next */ []);
	showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : /* istanbul ignore next */ []);
	showErrors = computed(() => this.invalid() && this.touched(), ...ngDevMode ? [{ debugName: "showErrors" }] : /* istanbul ignore next */ []);
	describedBy = computed(() => {
		if (this.showErrors()) return `${this.id()}-error`;
		if (this.hint()) return `${this.id()}-hint`;
		return null;
	}, ...ngDevMode ? [{ debugName: "describedBy" }] : /* istanbul ignore next */ []);
	handleInput(event) {
		this.value.set(event.target.value);
	}
	togglePassword() {
		this.showPassword.update((prev) => !prev);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiInputPassword,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiInputPassword,
		isStandalone: true,
		selector: "ui-input-password",
		inputs: {
			value: {
				classPropertyName: "value",
				publicName: "value",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			touched: {
				classPropertyName: "touched",
				publicName: "touched",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			disabled: {
				classPropertyName: "disabled",
				publicName: "disabled",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			readonly: {
				classPropertyName: "readonly",
				publicName: "readonly",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			invalid: {
				classPropertyName: "invalid",
				publicName: "invalid",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			required: {
				classPropertyName: "required",
				publicName: "required",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			minLength: {
				classPropertyName: "minLength",
				publicName: "minLength",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			maxLength: {
				classPropertyName: "maxLength",
				publicName: "maxLength",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			errors: {
				classPropertyName: "errors",
				publicName: "errors",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			name: {
				classPropertyName: "name",
				publicName: "name",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			label: {
				classPropertyName: "label",
				publicName: "label",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			id: {
				classPropertyName: "id",
				publicName: "id",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			hint: {
				classPropertyName: "hint",
				publicName: "hint",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			placeholder: {
				classPropertyName: "placeholder",
				publicName: "placeholder",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			autocomplete: {
				classPropertyName: "autocomplete",
				publicName: "autocomplete",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			showPasswordLabel: {
				classPropertyName: "showPasswordLabel",
				publicName: "showPasswordLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			hidePasswordLabel: {
				classPropertyName: "hidePasswordLabel",
				publicName: "hidePasswordLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: {
			value: "valueChange",
			touch: "touch"
		},
		ngImport: i0,
		template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"errors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <div class=\"control\">\n    <input\n      class=\"input\"\n      [id]=\"id()\"\n      [name]=\"name()\"\n      [type]=\"showPassword() ? 'text' : 'password'\"\n      [value]=\"value()\"\n      [disabled]=\"disabled()\"\n      [readOnly]=\"readonly()\"\n      [required]=\"required()\"\n      [placeholder]=\"placeholder()\"\n      [attr.minlength]=\"minLength()\"\n      [attr.maxlength]=\"maxLength()\"\n      [attr.autocomplete]=\"autocomplete()\"\n      [attr.aria-invalid]=\"showErrors()\"\n      [attr.aria-describedby]=\"describedBy()\"\n      (input)=\"handleInput($event)\"\n      (blur)=\"touch.emit()\"\n    />\n    <button\n      class=\"toggle\"\n      type=\"button\"\n      [disabled]=\"disabled()\"\n      [attr.aria-controls]=\"id()\"\n      [attr.aria-pressed]=\"showPassword()\"\n      [attr.aria-label]=\"showPassword() ? hidePasswordLabel() : showPasswordLabel()\"\n      (click)=\"togglePassword()\"\n    >\n      @if (showPassword()) {\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n          <path\n            d=\"M15.514 6.27935C14.9122 5.29384 14.153 4.41352 13.2667 3.67335L15.1334 1.80669C15.2548 1.68095 15.322 1.51255 15.3205 1.33775C15.319 1.16296 15.2489 0.995748 15.1252 0.872142C15.0016 0.748537 14.8344 0.678424 14.6596 0.676905C14.4848 0.675386 14.3164 0.742582 14.1907 0.864021L12.1607 2.89669C10.9023 2.14924 9.46365 1.75966 8.00003 1.77002C3.8727 1.77002 1.5207 4.59535 0.486034 6.27935C0.166386 6.79636 -0.00292969 7.39218 -0.00292969 8.00002C-0.00292969 8.60786 0.166386 9.20368 0.486034 9.72069C1.08787 10.7062 1.84703 11.5865 2.73337 12.3267L0.866701 14.1934C0.803027 14.2549 0.752239 14.3284 0.7173 14.4098C0.682361 14.4911 0.66397 14.5786 0.663201 14.6671C0.662431 14.7556 0.679299 14.8434 0.71282 14.9253C0.74634 15.0073 0.795842 15.0817 0.858438 15.1443C0.921033 15.2069 0.995467 15.2564 1.0774 15.2899C1.15933 15.3234 1.24712 15.3403 1.33564 15.3395C1.42415 15.3388 1.51163 15.3204 1.59297 15.2854C1.67431 15.2505 1.74787 15.1997 1.80937 15.136L3.84403 13.1014C5.10088 13.8487 6.53782 14.2389 8.00003 14.23C12.1274 14.23 14.4794 11.4047 15.514 9.72069C15.8337 9.20368 16.003 8.60786 16.003 8.00002C16.003 7.39218 15.8337 6.79636 15.514 6.27935ZM1.62203 9.02269C1.43212 8.71538 1.33153 8.36127 1.33153 8.00002C1.33153 7.63877 1.43212 7.28466 1.62203 6.97735C2.51137 5.53335 4.52137 3.10335 8.00003 3.10335C9.10688 3.09715 10.1982 3.36391 11.1774 3.88002L9.83537 5.22202C9.19532 4.79709 8.42797 4.60669 7.66352 4.68312C6.89907 4.75955 6.18461 5.09811 5.64137 5.64136C5.09813 6.1846 4.75956 6.89906 4.68313 7.66351C4.6067 8.42796 4.7971 9.19531 5.22203 9.83535L3.68203 11.3754C2.86544 10.7152 2.16859 9.91932 1.62203 9.02269ZM10 8.00002C10 8.53045 9.78932 9.03916 9.41425 9.41424C9.03918 9.78931 8.53047 10 8.00003 10C7.70304 9.99887 7.41017 9.9305 7.14337 9.80002L9.80003 7.14335C9.93051 7.41015 9.99889 7.70303 10 8.00002ZM6.00003 8.00002C6.00003 7.46959 6.21075 6.96088 6.58582 6.58581C6.96089 6.21073 7.4696 6.00002 8.00003 6.00002C8.29703 6.00117 8.5899 6.06955 8.8567 6.20002L6.20003 8.85669C6.06956 8.58989 6.00118 8.29701 6.00003 8.00002ZM14.378 9.02269C13.4887 10.4667 11.4787 12.8967 8.00003 12.8967C6.89319 12.9029 5.80188 12.6361 4.8227 12.12L6.1647 10.778C6.80475 11.203 7.5721 11.3934 8.33655 11.3169C9.101 11.2405 9.81546 10.9019 10.3587 10.3587C10.9019 9.81544 11.2405 9.10098 11.3169 8.33653C11.3934 7.57208 11.203 6.80473 10.778 6.16469L12.318 4.62469C13.1346 5.28487 13.8315 6.08072 14.378 6.97735C14.5679 7.28466 14.6685 7.63877 14.6685 8.00002C14.6685 8.36127 14.5679 8.71538 14.378 9.02269Z\"\n          />\n        </svg>\n      } @else {\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 14 14\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n          <path\n            d=\"M13.5754 5.49437C12.6706 4.02087 10.6126 1.54871 7.00064 1.54871C3.38864 1.54871 1.33064 4.02087 0.42589 5.49437C0.146198 5.94675 -0.00195312 6.4681 -0.00195312 6.99996C-0.00195313 7.53182 0.146198 8.05316 0.42589 8.50554C1.33064 9.97904 3.38864 12.4512 7.00064 12.4512C10.6126 12.4512 12.6706 9.97904 13.5754 8.50554C13.8551 8.05316 14.0032 7.53182 14.0032 6.99996C14.0032 6.4681 13.8551 5.94675 13.5754 5.49437ZM12.5808 7.89479C11.8038 9.15829 10.0451 11.2845 7.00064 11.2845C3.95622 11.2845 2.19747 9.15829 1.42047 7.89479C1.2543 7.6259 1.16629 7.31605 1.16629 6.99996C1.16629 6.68386 1.2543 6.37401 1.42047 6.10512C2.19747 4.84162 3.95622 2.71537 7.00064 2.71537C10.0451 2.71537 11.8038 4.83929 12.5808 6.10512C12.747 6.37401 12.835 6.68386 12.835 6.99996C12.835 7.31605 12.747 7.6259 12.5808 7.89479Z\"\n          />\n          <path\n            d=\"M7.00065 4.08337C6.42379 4.08337 5.85988 4.25443 5.38024 4.57492C4.9006 4.89541 4.52676 5.35093 4.306 5.88388C4.08525 6.41683 4.02749 7.00328 4.14003 7.56905C4.25257 8.13483 4.53035 8.65453 4.93826 9.06244C5.34616 9.47034 5.86586 9.74813 6.43164 9.86066C6.99742 9.97321 7.58386 9.91545 8.11681 9.69469C8.64976 9.47393 9.10528 9.1001 9.42577 8.62045C9.74626 8.14081 9.91732 7.5769 9.91732 7.00004C9.91639 6.22678 9.6088 5.48545 9.06202 4.93867C8.51524 4.39189 7.77392 4.0843 7.00065 4.08337ZM7.00065 8.75004C6.65454 8.75004 6.31619 8.64741 6.0284 8.45511C5.74062 8.26282 5.51632 7.98951 5.38386 7.66974C5.25141 7.34997 5.21675 6.9981 5.28428 6.65863C5.3518 6.31917 5.51847 6.00735 5.76322 5.7626C6.00796 5.51786 6.31978 5.35119 6.65924 5.28367C6.99871 5.21614 7.35058 5.2508 7.67035 5.38325C7.99012 5.5157 8.26343 5.74001 8.45572 6.02779C8.64802 6.31558 8.75065 6.65392 8.75065 7.00004C8.75065 7.46417 8.56628 7.90929 8.23809 8.23748C7.9099 8.56567 7.46478 8.75004 7.00065 8.75004Z\"\n          />\n        </svg>\n      }\n    </button>\n  </div>\n</ui-field>\n",
		styles: [":host{display:block}.control{position:relative}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent))}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.input{padding-right:40px}.toggle{position:absolute;top:50%;right:6px;display:flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:var(--ui-icon-button-background, transparent);color:var(--ui-icon-button-color, var(--c8, #595959));cursor:pointer;transform:translateY(-50%)}.toggle:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:1px}.toggle:disabled{cursor:not-allowed;opacity:.5}\n"],
		dependencies: [{
			kind: "component",
			type: UiField,
			selector: "ui-field",
			inputs: [
				"id",
				"label",
				"hint",
				"required",
				"errors",
				"showErrors"
			]
		}],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiInputPassword,
	decorators: [{
		type: Component,
		args: [{
			selector: "ui-input-password",
			imports: [UiField],
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"errors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <div class=\"control\">\n    <input\n      class=\"input\"\n      [id]=\"id()\"\n      [name]=\"name()\"\n      [type]=\"showPassword() ? 'text' : 'password'\"\n      [value]=\"value()\"\n      [disabled]=\"disabled()\"\n      [readOnly]=\"readonly()\"\n      [required]=\"required()\"\n      [placeholder]=\"placeholder()\"\n      [attr.minlength]=\"minLength()\"\n      [attr.maxlength]=\"maxLength()\"\n      [attr.autocomplete]=\"autocomplete()\"\n      [attr.aria-invalid]=\"showErrors()\"\n      [attr.aria-describedby]=\"describedBy()\"\n      (input)=\"handleInput($event)\"\n      (blur)=\"touch.emit()\"\n    />\n    <button\n      class=\"toggle\"\n      type=\"button\"\n      [disabled]=\"disabled()\"\n      [attr.aria-controls]=\"id()\"\n      [attr.aria-pressed]=\"showPassword()\"\n      [attr.aria-label]=\"showPassword() ? hidePasswordLabel() : showPasswordLabel()\"\n      (click)=\"togglePassword()\"\n    >\n      @if (showPassword()) {\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n          <path\n            d=\"M15.514 6.27935C14.9122 5.29384 14.153 4.41352 13.2667 3.67335L15.1334 1.80669C15.2548 1.68095 15.322 1.51255 15.3205 1.33775C15.319 1.16296 15.2489 0.995748 15.1252 0.872142C15.0016 0.748537 14.8344 0.678424 14.6596 0.676905C14.4848 0.675386 14.3164 0.742582 14.1907 0.864021L12.1607 2.89669C10.9023 2.14924 9.46365 1.75966 8.00003 1.77002C3.8727 1.77002 1.5207 4.59535 0.486034 6.27935C0.166386 6.79636 -0.00292969 7.39218 -0.00292969 8.00002C-0.00292969 8.60786 0.166386 9.20368 0.486034 9.72069C1.08787 10.7062 1.84703 11.5865 2.73337 12.3267L0.866701 14.1934C0.803027 14.2549 0.752239 14.3284 0.7173 14.4098C0.682361 14.4911 0.66397 14.5786 0.663201 14.6671C0.662431 14.7556 0.679299 14.8434 0.71282 14.9253C0.74634 15.0073 0.795842 15.0817 0.858438 15.1443C0.921033 15.2069 0.995467 15.2564 1.0774 15.2899C1.15933 15.3234 1.24712 15.3403 1.33564 15.3395C1.42415 15.3388 1.51163 15.3204 1.59297 15.2854C1.67431 15.2505 1.74787 15.1997 1.80937 15.136L3.84403 13.1014C5.10088 13.8487 6.53782 14.2389 8.00003 14.23C12.1274 14.23 14.4794 11.4047 15.514 9.72069C15.8337 9.20368 16.003 8.60786 16.003 8.00002C16.003 7.39218 15.8337 6.79636 15.514 6.27935ZM1.62203 9.02269C1.43212 8.71538 1.33153 8.36127 1.33153 8.00002C1.33153 7.63877 1.43212 7.28466 1.62203 6.97735C2.51137 5.53335 4.52137 3.10335 8.00003 3.10335C9.10688 3.09715 10.1982 3.36391 11.1774 3.88002L9.83537 5.22202C9.19532 4.79709 8.42797 4.60669 7.66352 4.68312C6.89907 4.75955 6.18461 5.09811 5.64137 5.64136C5.09813 6.1846 4.75956 6.89906 4.68313 7.66351C4.6067 8.42796 4.7971 9.19531 5.22203 9.83535L3.68203 11.3754C2.86544 10.7152 2.16859 9.91932 1.62203 9.02269ZM10 8.00002C10 8.53045 9.78932 9.03916 9.41425 9.41424C9.03918 9.78931 8.53047 10 8.00003 10C7.70304 9.99887 7.41017 9.9305 7.14337 9.80002L9.80003 7.14335C9.93051 7.41015 9.99889 7.70303 10 8.00002ZM6.00003 8.00002C6.00003 7.46959 6.21075 6.96088 6.58582 6.58581C6.96089 6.21073 7.4696 6.00002 8.00003 6.00002C8.29703 6.00117 8.5899 6.06955 8.8567 6.20002L6.20003 8.85669C6.06956 8.58989 6.00118 8.29701 6.00003 8.00002ZM14.378 9.02269C13.4887 10.4667 11.4787 12.8967 8.00003 12.8967C6.89319 12.9029 5.80188 12.6361 4.8227 12.12L6.1647 10.778C6.80475 11.203 7.5721 11.3934 8.33655 11.3169C9.101 11.2405 9.81546 10.9019 10.3587 10.3587C10.9019 9.81544 11.2405 9.10098 11.3169 8.33653C11.3934 7.57208 11.203 6.80473 10.778 6.16469L12.318 4.62469C13.1346 5.28487 13.8315 6.08072 14.378 6.97735C14.5679 7.28466 14.6685 7.63877 14.6685 8.00002C14.6685 8.36127 14.5679 8.71538 14.378 9.02269Z\"\n          />\n        </svg>\n      } @else {\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 14 14\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n          <path\n            d=\"M13.5754 5.49437C12.6706 4.02087 10.6126 1.54871 7.00064 1.54871C3.38864 1.54871 1.33064 4.02087 0.42589 5.49437C0.146198 5.94675 -0.00195312 6.4681 -0.00195312 6.99996C-0.00195313 7.53182 0.146198 8.05316 0.42589 8.50554C1.33064 9.97904 3.38864 12.4512 7.00064 12.4512C10.6126 12.4512 12.6706 9.97904 13.5754 8.50554C13.8551 8.05316 14.0032 7.53182 14.0032 6.99996C14.0032 6.4681 13.8551 5.94675 13.5754 5.49437ZM12.5808 7.89479C11.8038 9.15829 10.0451 11.2845 7.00064 11.2845C3.95622 11.2845 2.19747 9.15829 1.42047 7.89479C1.2543 7.6259 1.16629 7.31605 1.16629 6.99996C1.16629 6.68386 1.2543 6.37401 1.42047 6.10512C2.19747 4.84162 3.95622 2.71537 7.00064 2.71537C10.0451 2.71537 11.8038 4.83929 12.5808 6.10512C12.747 6.37401 12.835 6.68386 12.835 6.99996C12.835 7.31605 12.747 7.6259 12.5808 7.89479Z\"\n          />\n          <path\n            d=\"M7.00065 4.08337C6.42379 4.08337 5.85988 4.25443 5.38024 4.57492C4.9006 4.89541 4.52676 5.35093 4.306 5.88388C4.08525 6.41683 4.02749 7.00328 4.14003 7.56905C4.25257 8.13483 4.53035 8.65453 4.93826 9.06244C5.34616 9.47034 5.86586 9.74813 6.43164 9.86066C6.99742 9.97321 7.58386 9.91545 8.11681 9.69469C8.64976 9.47393 9.10528 9.1001 9.42577 8.62045C9.74626 8.14081 9.91732 7.5769 9.91732 7.00004C9.91639 6.22678 9.6088 5.48545 9.06202 4.93867C8.51524 4.39189 7.77392 4.0843 7.00065 4.08337ZM7.00065 8.75004C6.65454 8.75004 6.31619 8.64741 6.0284 8.45511C5.74062 8.26282 5.51632 7.98951 5.38386 7.66974C5.25141 7.34997 5.21675 6.9981 5.28428 6.65863C5.3518 6.31917 5.51847 6.00735 5.76322 5.7626C6.00796 5.51786 6.31978 5.35119 6.65924 5.28367C6.99871 5.21614 7.35058 5.2508 7.67035 5.38325C7.99012 5.5157 8.26343 5.74001 8.45572 6.02779C8.64802 6.31558 8.75065 6.65392 8.75065 7.00004C8.75065 7.46417 8.56628 7.90929 8.23809 8.23748C7.9099 8.56567 7.46478 8.75004 7.00065 8.75004Z\"\n          />\n        </svg>\n      }\n    </button>\n  </div>\n</ui-field>\n",
			styles: [":host{display:block}.control{position:relative}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent))}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.input{padding-right:40px}.toggle{position:absolute;top:50%;right:6px;display:flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:var(--ui-icon-button-background, transparent);color:var(--ui-icon-button-color, var(--c8, #595959));cursor:pointer;transform:translateY(-50%)}.toggle:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:1px}.toggle:disabled{cursor:not-allowed;opacity:.5}\n"]
		}]
	}],
	propDecorators: {
		value: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "value",
				required: false
			}]
		}, {
			type: i0.Output,
			args: ["valueChange"]
		}],
		touched: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "touched",
				required: false
			}]
		}],
		touch: [{
			type: i0.Output,
			args: ["touch"]
		}],
		disabled: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "disabled",
				required: false
			}]
		}],
		readonly: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "readonly",
				required: false
			}]
		}],
		invalid: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "invalid",
				required: false
			}]
		}],
		required: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "required",
				required: false
			}]
		}],
		minLength: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "minLength",
				required: false
			}]
		}],
		maxLength: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "maxLength",
				required: false
			}]
		}],
		errors: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "errors",
				required: false
			}]
		}],
		name: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "name",
				required: false
			}]
		}],
		label: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "label",
				required: true
			}]
		}],
		id: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "id",
				required: true
			}]
		}],
		hint: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "hint",
				required: false
			}]
		}],
		placeholder: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "placeholder",
				required: false
			}]
		}],
		autocomplete: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "autocomplete",
				required: false
			}]
		}],
		showPasswordLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "showPasswordLabel",
				required: false
			}]
		}],
		hidePasswordLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "hidePasswordLabel",
				required: false
			}]
		}]
	}
});
var UiInputSearch = class UiInputSearch {
	value = model("", ...ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []);
	touch = output();
	disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []);
	name = input("", ...ngDevMode ? [{ debugName: "name" }] : /* istanbul ignore next */ []);
	label = input.required(...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	id = input.required(...ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []);
	hideLabel = input(true, ...ngDevMode ? [{ debugName: "hideLabel" }] : /* istanbul ignore next */ []);
	placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []);
	buttonLabel = input("Pesquisar", ...ngDevMode ? [{ debugName: "buttonLabel" }] : /* istanbul ignore next */ []);
	search = output();
	handleInput(event) {
		this.value.set(event.target.value);
	}
	submit() {
		if (this.disabled()) return;
		this.search.emit(this.value());
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiInputSearch,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.1.0",
		version: "22.2.1",
		type: UiInputSearch,
		isStandalone: true,
		selector: "ui-input-search",
		inputs: {
			value: {
				classPropertyName: "value",
				publicName: "value",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			disabled: {
				classPropertyName: "disabled",
				publicName: "disabled",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			name: {
				classPropertyName: "name",
				publicName: "name",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			label: {
				classPropertyName: "label",
				publicName: "label",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			id: {
				classPropertyName: "id",
				publicName: "id",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			hideLabel: {
				classPropertyName: "hideLabel",
				publicName: "hideLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			placeholder: {
				classPropertyName: "placeholder",
				publicName: "placeholder",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			buttonLabel: {
				classPropertyName: "buttonLabel",
				publicName: "buttonLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: {
			value: "valueChange",
			touch: "touch",
			search: "search"
		},
		ngImport: i0,
		template: "<label [for]=\"id()\" [class.visually-hidden]=\"hideLabel()\">{{ label() }}</label>\n<div class=\"control\">\n  <input\n    class=\"input\"\n    type=\"search\"\n    [id]=\"id()\"\n    [name]=\"name()\"\n    [value]=\"value()\"\n    [disabled]=\"disabled()\"\n    [placeholder]=\"placeholder()\"\n    (input)=\"handleInput($event)\"\n    (keydown.enter)=\"$event.preventDefault(); submit()\"\n    (blur)=\"touch.emit()\"\n  />\n  <button\n    class=\"search-button\"\n    type=\"button\"\n    [disabled]=\"disabled()\"\n    [attr.aria-label]=\"buttonLabel()\"\n    (click)=\"submit()\"\n  >\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n      <path\n        d=\"M11.8539 11.1464L8.86938 8.16189C9.68269 7.16719 10.0826 5.89794 9.9863 4.61667C9.89003 3.33541 9.30499 2.14016 8.35217 1.27815C7.39936 0.416146 6.15168 -0.0466629 4.8672 -0.014547C3.58273 0.0175689 2.35973 0.542153 1.45119 1.4507C0.542641 2.35924 0.0180572 3.58224 -0.0140587 4.86671C-0.0461746 6.15119 0.416635 7.39887 1.27864 8.35168C2.14064 9.3045 3.3359 9.88955 4.61716 9.98581C5.89843 10.0821 7.16768 9.6822 8.16238 8.86889L11.1469 11.8534C11.2412 11.9445 11.3675 11.9949 11.4986 11.9937C11.6297 11.9926 11.7551 11.94 11.8478 11.8473C11.9405 11.7546 11.9931 11.6292 11.9942 11.4981C11.9954 11.367 11.945 11.2407 11.8539 11.1464ZM5.00038 8.99989C4.20925 8.99989 3.4359 8.7653 2.7781 8.32577C2.1203 7.88624 1.60761 7.26153 1.30486 6.53063C1.00211 5.79972 0.922897 4.99545 1.07724 4.21953C1.23158 3.44361 1.61254 2.73087 2.17195 2.17146C2.73136 1.61205 3.44409 1.23109 4.22002 1.07675C4.99594 0.922409 5.80021 1.00162 6.53111 1.30437C7.26202 1.60712 7.88673 2.11981 8.32626 2.77761C8.76578 3.43541 9.00038 4.20877 9.00038 4.99989C8.99919 6.06039 8.57738 7.07712 7.82749 7.827C7.0776 8.57689 6.06088 8.9987 5.00038 8.99989Z\"\n      />\n    </svg>\n  </button>\n</div>\n",
		styles: [":host{display:block;width:100%}label{display:block;margin-bottom:4px;color:var(--ui-field-label-color, var(--c8, #333));font-size:var(--ui-field-label-font-size, 14px)}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.control{position:relative}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent))}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.input{padding:var(--ui-input-search-padding, 8px 44px 8px 16px);border:var(--ui-input-search-border, 1px solid var(--b1, #d0d0d0));border-radius:var(--ui-input-search-border-radius, 25px)}.input::-webkit-search-cancel-button{display:none}.search-button{position:absolute;top:50%;right:6px;display:flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:var(--ui-icon-button-background, transparent);color:var(--ui-icon-button-color, var(--c8, #595959));cursor:pointer;transform:translateY(-50%)}.search-button:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:1px}.search-button:disabled{cursor:not-allowed;opacity:.5}.search-button{background:var(--ui-input-search-button-background, var(--b1, #e7ecff))}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiInputSearch,
	decorators: [{
		type: Component,
		args: [{
			imports: [],
			selector: "ui-input-search",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<label [for]=\"id()\" [class.visually-hidden]=\"hideLabel()\">{{ label() }}</label>\n<div class=\"control\">\n  <input\n    class=\"input\"\n    type=\"search\"\n    [id]=\"id()\"\n    [name]=\"name()\"\n    [value]=\"value()\"\n    [disabled]=\"disabled()\"\n    [placeholder]=\"placeholder()\"\n    (input)=\"handleInput($event)\"\n    (keydown.enter)=\"$event.preventDefault(); submit()\"\n    (blur)=\"touch.emit()\"\n  />\n  <button\n    class=\"search-button\"\n    type=\"button\"\n    [disabled]=\"disabled()\"\n    [attr.aria-label]=\"buttonLabel()\"\n    (click)=\"submit()\"\n  >\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n      <path\n        d=\"M11.8539 11.1464L8.86938 8.16189C9.68269 7.16719 10.0826 5.89794 9.9863 4.61667C9.89003 3.33541 9.30499 2.14016 8.35217 1.27815C7.39936 0.416146 6.15168 -0.0466629 4.8672 -0.014547C3.58273 0.0175689 2.35973 0.542153 1.45119 1.4507C0.542641 2.35924 0.0180572 3.58224 -0.0140587 4.86671C-0.0461746 6.15119 0.416635 7.39887 1.27864 8.35168C2.14064 9.3045 3.3359 9.88955 4.61716 9.98581C5.89843 10.0821 7.16768 9.6822 8.16238 8.86889L11.1469 11.8534C11.2412 11.9445 11.3675 11.9949 11.4986 11.9937C11.6297 11.9926 11.7551 11.94 11.8478 11.8473C11.9405 11.7546 11.9931 11.6292 11.9942 11.4981C11.9954 11.367 11.945 11.2407 11.8539 11.1464ZM5.00038 8.99989C4.20925 8.99989 3.4359 8.7653 2.7781 8.32577C2.1203 7.88624 1.60761 7.26153 1.30486 6.53063C1.00211 5.79972 0.922897 4.99545 1.07724 4.21953C1.23158 3.44361 1.61254 2.73087 2.17195 2.17146C2.73136 1.61205 3.44409 1.23109 4.22002 1.07675C4.99594 0.922409 5.80021 1.00162 6.53111 1.30437C7.26202 1.60712 7.88673 2.11981 8.32626 2.77761C8.76578 3.43541 9.00038 4.20877 9.00038 4.99989C8.99919 6.06039 8.57738 7.07712 7.82749 7.827C7.0776 8.57689 6.06088 8.9987 5.00038 8.99989Z\"\n      />\n    </svg>\n  </button>\n</div>\n",
			styles: [":host{display:block;width:100%}label{display:block;margin-bottom:4px;color:var(--ui-field-label-color, var(--c8, #333));font-size:var(--ui-field-label-font-size, 14px)}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.control{position:relative}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent))}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.input{padding:var(--ui-input-search-padding, 8px 44px 8px 16px);border:var(--ui-input-search-border, 1px solid var(--b1, #d0d0d0));border-radius:var(--ui-input-search-border-radius, 25px)}.input::-webkit-search-cancel-button{display:none}.search-button{position:absolute;top:50%;right:6px;display:flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:var(--ui-icon-button-background, transparent);color:var(--ui-icon-button-color, var(--c8, #595959));cursor:pointer;transform:translateY(-50%)}.search-button:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:1px}.search-button:disabled{cursor:not-allowed;opacity:.5}.search-button{background:var(--ui-input-search-button-background, var(--b1, #e7ecff))}\n"]
		}]
	}],
	propDecorators: {
		value: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "value",
				required: false
			}]
		}, {
			type: i0.Output,
			args: ["valueChange"]
		}],
		touch: [{
			type: i0.Output,
			args: ["touch"]
		}],
		disabled: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "disabled",
				required: false
			}]
		}],
		name: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "name",
				required: false
			}]
		}],
		label: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "label",
				required: true
			}]
		}],
		id: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "id",
				required: true
			}]
		}],
		hideLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "hideLabel",
				required: false
			}]
		}],
		placeholder: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "placeholder",
				required: false
			}]
		}],
		buttonLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "buttonLabel",
				required: false
			}]
		}],
		search: [{
			type: i0.Output,
			args: ["search"]
		}]
	}
});
export { UiAutocomplete, UiBanner, UiButton, UiCopyTextButton, UiField, UiInput, UiInputPassword, UiInputSearch };

//# sourceMappingURL=reusable-union-kit.mjs.map