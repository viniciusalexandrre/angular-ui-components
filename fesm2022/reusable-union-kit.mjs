import * as i0 from "@angular/core";
import { ChangeDetectionStrategy, Component, DestroyRef, Directive, ElementRef, Injector, PLATFORM_ID, TemplateRef, afterNextRender, computed, contentChild, contentChildren, effect, inject, input, linkedSignal, model, output, signal, untracked, viewChild, viewChildren } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { filter } from "rxjs";
import { DOCUMENT, NgOptimizedImage, NgTemplateOutlet, isPlatformBrowser } from "@angular/common";
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
		host: { properties: { "attr.id": "null" } },
		ngImport: i0,
		template: "<div class=\"field\" [class.field-invalid]=\"showErrors()\">\n  <label [for]=\"id()\">\n    {{ label() }}\n    @if (required()) {\n      <span class=\"field-required\" aria-hidden=\"true\">*</span>\n    }\n  </label>\n\n  <ng-content />\n\n  @if (hint() && !showErrors()) {\n    <small class=\"field-hint\" [id]=\"id() + '-hint'\">{{ hint() }}</small>\n  }\n\n  @if (showErrors()) {\n    <div [id]=\"id() + '-error'\" role=\"alert\">\n      @for (error of errors(); track error.kind + error.message) {\n        <small>{{ error.message }}</small>\n      }\n    </div>\n  }\n</div>\n",
		styles: [":host{display:block}.field{position:relative;display:grid;gap:var(--ui-field-gap, 4px)}.field>label{color:var(--ui-field-label-color, var(--c8, #333));font-family:var(--ui-field-label-font-family, inherit);font-size:var(--ui-field-label-font-size, 14px);font-weight:var(--ui-field-label-font-weight, 400)}.field>[role=alert]{display:grid;gap:var(--ui-field-error-gap, 2px);color:var(--ui-field-error-color, var(--erro, #b3261e));font-size:var(--ui-field-error-font-size, 13px);margin-top:var(--ui-field-error-margin-top, 2px)}.field-required{margin-left:2px;color:var(--ui-field-error-color, var(--erro, #b3261e))}.field-hint{color:var(--ui-field-hint-color, var(--c7, #595959));font-size:var(--ui-field-hint-font-size, 13px)}\n"],
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
			host: { "[attr.id]": "null" },
			template: "<div class=\"field\" [class.field-invalid]=\"showErrors()\">\n  <label [for]=\"id()\">\n    {{ label() }}\n    @if (required()) {\n      <span class=\"field-required\" aria-hidden=\"true\">*</span>\n    }\n  </label>\n\n  <ng-content />\n\n  @if (hint() && !showErrors()) {\n    <small class=\"field-hint\" [id]=\"id() + '-hint'\">{{ hint() }}</small>\n  }\n\n  @if (showErrors()) {\n    <div [id]=\"id() + '-error'\" role=\"alert\">\n      @for (error of errors(); track error.kind + error.message) {\n        <small>{{ error.message }}</small>\n      }\n    </div>\n  }\n</div>\n",
			styles: [":host{display:block}.field{position:relative;display:grid;gap:var(--ui-field-gap, 4px)}.field>label{color:var(--ui-field-label-color, var(--c8, #333));font-family:var(--ui-field-label-font-family, inherit);font-size:var(--ui-field-label-font-size, 14px);font-weight:var(--ui-field-label-font-weight, 400)}.field>[role=alert]{display:grid;gap:var(--ui-field-error-gap, 2px);color:var(--ui-field-error-color, var(--erro, #b3261e));font-size:var(--ui-field-error-font-size, 13px);margin-top:var(--ui-field-error-margin-top, 2px)}.field-required{margin-left:2px;color:var(--ui-field-error-color, var(--erro, #b3261e))}.field-hint{color:var(--ui-field-hint-color, var(--c7, #595959));font-size:var(--ui-field-hint-font-size, 13px)}\n"]
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
	options = input.required(...ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []);
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
	showPanel = computed(() => {
		const term = this.searchTerm().trim();
		return this.isOpen() && (term.length === 0 || term.length >= this.minSearchLength());
	}, ...ngDevMode ? [{ debugName: "showPanel" }] : /* istanbul ignore next */ []);
	panelState = computed(() => {
		if (this.isLoading()) return "loading";
		if (this.loadError()) return "error";
		if (this.options().length === 0) return "empty";
		return "options";
	}, ...ngDevMode ? [{ debugName: "panelState" }] : /* istanbul ignore next */ []);
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
				isRequired: true,
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
		host: { properties: { "attr.id": "null" } },
		ngImport: i0,
		template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"displayedErrors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <div class=\"control\">\n    <input\n      class=\"input\"\n      type=\"text\"\n      role=\"combobox\"\n      autocomplete=\"off\"\n      aria-autocomplete=\"list\"\n      [id]=\"id()\"\n      [name]=\"name()\"\n      [value]=\"searchTerm()\"\n      [placeholder]=\"placeholder()\"\n      [disabled]=\"disabled()\"\n      [readOnly]=\"readonly()\"\n      [required]=\"required()\"\n      [attr.aria-expanded]=\"showPanel()\"\n      [attr.aria-controls]=\"listboxId()\"\n      [attr.aria-activedescendant]=\"activeDescendant()\"\n      [attr.aria-invalid]=\"showErrors()\"\n      [attr.aria-describedby]=\"describedBy()\"\n      (focus)=\"handleFocus()\"\n      (input)=\"onInput($any($event.target).value)\"\n      (keydown)=\"handleKeydown($event)\"\n      (blur)=\"handleBlur()\"\n    />\n\n    @if (showPanel()) {\n      <div class=\"panel\">\n        @switch (panelState()) {\n          @case ('loading') {\n            <span class=\"panel-message\" role=\"status\">{{ loadingText() }}</span>\n          }\n          @case ('error') {\n            <span class=\"panel-message\" role=\"alert\">{{ loadError() }}</span>\n          }\n          @case ('empty') {\n            <span class=\"panel-message\" role=\"status\">{{ emptyText() }}</span>\n          }\n          @default {\n            <ul class=\"options\" role=\"listbox\" [id]=\"listboxId()\" [attr.aria-label]=\"label()\">\n              @for (option of options(); track option.value; let i = $index) {\n                <li\n                  role=\"option\"\n                  [id]=\"optionId(i)\"\n                  [class.active]=\"i === activeIndex()\"\n                  [attr.aria-selected]=\"option.value === value()\"\n                  (mousedown)=\"$event.preventDefault()\"\n                  (click)=\"select(option)\"\n                >\n                  {{ option.label }}\n                </li>\n              }\n            </ul>\n          }\n        }\n      </div>\n    }\n  </div>\n</ui-field>\n",
		styles: [":host{display:block;width:100%}.control{position:relative}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b4, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent));outline:var(--ui-input-error-color, var(--erro, #b3261e))}.input[aria-invalid=true]:focus-visible{outline:2px solid var(--ui-input-error-color, var(--erro, #b3261e));outline-offset:2px}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.panel{margin-top:var(--ui-autocomplete-panel-margin-top, .25rem);position:absolute;z-index:var(--ui-autocomplete-z-index, 1000);top:100%;right:0;left:0;max-height:var(--ui-autocomplete-max-height, 240px);overflow-y:auto;padding:var(--ui-autocomplete-panel-padding, .25rem 0);border:var(--ui-autocomplete-panel-border, 1px solid var(--b3, #c6d4fe));border-radius:var(--ui-autocomplete-panel-border-radius, .375rem);background-color:var(--ui-autocomplete-panel-background, var(--b-white, #fff));box-shadow:var(--ui-autocomplete-panel-shadow, var(--shadow-1, none))}.panel-message{display:block;padding:.75rem;color:var(--ui-autocomplete-message-color, var(--c7, #707070));font-size:var(--ui-autocomplete-font-size, 14px)}.options{margin:0;padding:0;list-style:none}[role=option]{padding:var(--ui-autocomplete-option-padding, .625rem .75rem);color:var(--ui-autocomplete-option-color, var(--c9, #404040));font-size:var(--ui-autocomplete-font-size, 14px);cursor:pointer;transition:background-color .12s ease}[role=option]:hover,[role=option].active{background-color:var(--ui-autocomplete-option-active-background, var(--b3, #c6d4fe))}[role=option][aria-selected=true]{font-weight:var(--ui-autocomplete-option-selected-font-weight, 600)}@media(prefers-reduced-motion:reduce){[role=option]{transition:none}}\n"],
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
			host: { "[attr.id]": "null" },
			template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"displayedErrors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <div class=\"control\">\n    <input\n      class=\"input\"\n      type=\"text\"\n      role=\"combobox\"\n      autocomplete=\"off\"\n      aria-autocomplete=\"list\"\n      [id]=\"id()\"\n      [name]=\"name()\"\n      [value]=\"searchTerm()\"\n      [placeholder]=\"placeholder()\"\n      [disabled]=\"disabled()\"\n      [readOnly]=\"readonly()\"\n      [required]=\"required()\"\n      [attr.aria-expanded]=\"showPanel()\"\n      [attr.aria-controls]=\"listboxId()\"\n      [attr.aria-activedescendant]=\"activeDescendant()\"\n      [attr.aria-invalid]=\"showErrors()\"\n      [attr.aria-describedby]=\"describedBy()\"\n      (focus)=\"handleFocus()\"\n      (input)=\"onInput($any($event.target).value)\"\n      (keydown)=\"handleKeydown($event)\"\n      (blur)=\"handleBlur()\"\n    />\n\n    @if (showPanel()) {\n      <div class=\"panel\">\n        @switch (panelState()) {\n          @case ('loading') {\n            <span class=\"panel-message\" role=\"status\">{{ loadingText() }}</span>\n          }\n          @case ('error') {\n            <span class=\"panel-message\" role=\"alert\">{{ loadError() }}</span>\n          }\n          @case ('empty') {\n            <span class=\"panel-message\" role=\"status\">{{ emptyText() }}</span>\n          }\n          @default {\n            <ul class=\"options\" role=\"listbox\" [id]=\"listboxId()\" [attr.aria-label]=\"label()\">\n              @for (option of options(); track option.value; let i = $index) {\n                <li\n                  role=\"option\"\n                  [id]=\"optionId(i)\"\n                  [class.active]=\"i === activeIndex()\"\n                  [attr.aria-selected]=\"option.value === value()\"\n                  (mousedown)=\"$event.preventDefault()\"\n                  (click)=\"select(option)\"\n                >\n                  {{ option.label }}\n                </li>\n              }\n            </ul>\n          }\n        }\n      </div>\n    }\n  </div>\n</ui-field>\n",
			styles: [":host{display:block;width:100%}.control{position:relative}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b4, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent));outline:var(--ui-input-error-color, var(--erro, #b3261e))}.input[aria-invalid=true]:focus-visible{outline:2px solid var(--ui-input-error-color, var(--erro, #b3261e));outline-offset:2px}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.panel{margin-top:var(--ui-autocomplete-panel-margin-top, .25rem);position:absolute;z-index:var(--ui-autocomplete-z-index, 1000);top:100%;right:0;left:0;max-height:var(--ui-autocomplete-max-height, 240px);overflow-y:auto;padding:var(--ui-autocomplete-panel-padding, .25rem 0);border:var(--ui-autocomplete-panel-border, 1px solid var(--b3, #c6d4fe));border-radius:var(--ui-autocomplete-panel-border-radius, .375rem);background-color:var(--ui-autocomplete-panel-background, var(--b-white, #fff));box-shadow:var(--ui-autocomplete-panel-shadow, var(--shadow-1, none))}.panel-message{display:block;padding:.75rem;color:var(--ui-autocomplete-message-color, var(--c7, #707070));font-size:var(--ui-autocomplete-font-size, 14px)}.options{margin:0;padding:0;list-style:none}[role=option]{padding:var(--ui-autocomplete-option-padding, .625rem .75rem);color:var(--ui-autocomplete-option-color, var(--c9, #404040));font-size:var(--ui-autocomplete-font-size, 14px);cursor:pointer;transition:background-color .12s ease}[role=option]:hover,[role=option].active{background-color:var(--ui-autocomplete-option-active-background, var(--b3, #c6d4fe))}[role=option][aria-selected=true]{font-weight:var(--ui-autocomplete-option-selected-font-weight, 600)}@media(prefers-reduced-motion:reduce){[role=option]{transition:none}}\n"]
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
				required: true
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
var UiCheckbox = class UiCheckbox {
	checked = model(false, ...ngDevMode ? [{ debugName: "checked" }] : /* istanbul ignore next */ []);
	touched = input(false, ...ngDevMode ? [{ debugName: "touched" }] : /* istanbul ignore next */ []);
	touch = output();
	disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []);
	readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : /* istanbul ignore next */ []);
	invalid = input(false, ...ngDevMode ? [{ debugName: "invalid" }] : /* istanbul ignore next */ []);
	required = input(false, ...ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []);
	errors = input([], ...ngDevMode ? [{ debugName: "errors" }] : /* istanbul ignore next */ []);
	name = input("", ...ngDevMode ? [{ debugName: "name" }] : /* istanbul ignore next */ []);
	label = input.required(...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	id = input.required(...ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []);
	hint = input("", ...ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []);
	indeterminate = input(false, ...ngDevMode ? [{ debugName: "indeterminate" }] : /* istanbul ignore next */ []);
	showErrors = computed(() => this.invalid() && this.touched(), ...ngDevMode ? [{ debugName: "showErrors" }] : /* istanbul ignore next */ []);
	describedBy = computed(() => {
		if (this.showErrors()) return `${this.id()}-error`;
		if (this.hint()) return `${this.id()}-hint`;
		return null;
	}, ...ngDevMode ? [{ debugName: "describedBy" }] : /* istanbul ignore next */ []);
	handleChange(event) {
		this.checked.set(event.target.checked);
	}
	handleClick(event) {
		if (this.readonly()) event.preventDefault();
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiCheckbox,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiCheckbox,
		isStandalone: true,
		selector: "ui-checkbox",
		inputs: {
			checked: {
				classPropertyName: "checked",
				publicName: "checked",
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
			indeterminate: {
				classPropertyName: "indeterminate",
				publicName: "indeterminate",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: {
			checked: "checkedChange",
			touch: "touch"
		},
		host: { properties: { "attr.id": "null" } },
		ngImport: i0,
		template: "<div class=\"checkbox\" [class.checkbox-invalid]=\"showErrors()\">\n  <label class=\"checkbox-label\" [class.checkbox-disabled]=\"disabled()\" [for]=\"id()\">\n    <input\n      class=\"checkbox-input\"\n      type=\"checkbox\"\n      [id]=\"id()\"\n      [name]=\"name()\"\n      [checked]=\"checked()\"\n      [indeterminate]=\"indeterminate()\"\n      [disabled]=\"disabled()\"\n      [required]=\"required()\"\n      [attr.aria-readonly]=\"readonly() || null\"\n      [attr.aria-invalid]=\"showErrors()\"\n      [attr.aria-describedby]=\"describedBy()\"\n      (change)=\"handleChange($event)\"\n      (click)=\"handleClick($event)\"\n      (blur)=\"touch.emit()\"\n    />\n    <span class=\"checkbox-box\" aria-hidden=\"true\">\n      <svg class=\"icon-check\" width=\"12\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\">\n        <path d=\"M3 8.5l3.5 3.5L13 4.5\" />\n      </svg>\n      <svg class=\"icon-dash\" width=\"12\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" focusable=\"false\">\n        <path d=\"M3.5 8h9\" />\n      </svg>\n    </span>\n    <span class=\"checkbox-text\">\n      {{ label() }}\n      @if (required()) {\n        <span class=\"checkbox-required\" aria-hidden=\"true\">*</span>\n      }\n    </span>\n  </label>\n\n  @if (hint() && !showErrors()) {\n    <small class=\"checkbox-hint\" [id]=\"id() + '-hint'\">{{ hint() }}</small>\n  }\n\n  @if (showErrors()) {\n    <div class=\"checkbox-errors\" [id]=\"id() + '-error'\" role=\"alert\">\n      @for (error of errors(); track error.kind + error.message) {\n        <small>{{ error.message }}</small>\n      }\n    </div>\n  }\n</div>\n",
		styles: [":host{display:block}.checkbox{display:grid;gap:var(--ui-field-gap, 4px)}.checkbox-label{position:relative;display:inline-flex;align-items:flex-start;gap:var(--ui-checkbox-gap, 8px);width:fit-content;color:var(--ui-checkbox-label-color, var(--c9, #404040));font-size:var(--ui-checkbox-font-size, 14px);line-height:var(--ui-checkbox-size, 18px);cursor:pointer}.checkbox-label.checkbox-disabled{cursor:not-allowed;opacity:var(--ui-checkbox-disabled-opacity, .55)}.checkbox-input{position:absolute;top:0;left:0;width:var(--ui-checkbox-size, 18px);height:var(--ui-checkbox-size, 18px);margin:0;opacity:0;cursor:inherit}.checkbox-box{box-sizing:border-box;display:grid;flex-shrink:0;place-items:center;width:var(--ui-checkbox-size, 18px);height:var(--ui-checkbox-size, 18px);border:var(--ui-checkbox-border, 1.5px solid var(--b4, #b5c6f9));border-radius:var(--ui-checkbox-border-radius, 5px);background:var(--ui-checkbox-background, var(--b-white, #fff));color:var(--ui-checkbox-check-color, #fff);transition:background-color .12s ease,border-color .12s ease}.checkbox-box svg{grid-area:1/1;visibility:hidden}.checkbox-input:hover:not(:disabled)+.checkbox-box{border-color:var(--ui-checkbox-hover-border-color, var(--b6, #8ba7f9))}.checkbox-input:checked+.checkbox-box,.checkbox-input:indeterminate+.checkbox-box{border-color:var(--ui-checkbox-checked-background, var(--b10, #335cd6));background:var(--ui-checkbox-checked-background, var(--b10, #335cd6))}.checkbox-input:checked:not(:indeterminate)+.checkbox-box .icon-check,.checkbox-input:indeterminate+.checkbox-box .icon-dash{visibility:visible}.checkbox-input:focus-visible+.checkbox-box{outline:2px solid var(--ui-checkbox-focus-color, var(--b10, #1769aa));outline-offset:2px}.checkbox-invalid .checkbox-input:not(:checked)+.checkbox-box{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background:var(--ui-input-error-background, var(--bg-erro, transparent))}.checkbox-required{margin-left:2px;color:var(--ui-field-error-color, var(--erro, #b3261e))}.checkbox-hint,.checkbox-errors{padding-left:calc(var(--ui-checkbox-size, 18px) + var(--ui-checkbox-gap, 8px))}.checkbox-hint{color:var(--ui-field-hint-color, var(--c7, #595959));font-size:var(--ui-field-hint-font-size, 13px)}.checkbox-errors{display:grid;gap:var(--ui-field-error-gap, 2px);color:var(--ui-field-error-color, var(--erro, #b3261e));font-size:var(--ui-field-error-font-size, 13px)}@media(prefers-reduced-motion:reduce){.checkbox-box{transition:none}}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiCheckbox,
	decorators: [{
		type: Component,
		args: [{
			selector: "ui-checkbox",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: { "[attr.id]": "null" },
			template: "<div class=\"checkbox\" [class.checkbox-invalid]=\"showErrors()\">\n  <label class=\"checkbox-label\" [class.checkbox-disabled]=\"disabled()\" [for]=\"id()\">\n    <input\n      class=\"checkbox-input\"\n      type=\"checkbox\"\n      [id]=\"id()\"\n      [name]=\"name()\"\n      [checked]=\"checked()\"\n      [indeterminate]=\"indeterminate()\"\n      [disabled]=\"disabled()\"\n      [required]=\"required()\"\n      [attr.aria-readonly]=\"readonly() || null\"\n      [attr.aria-invalid]=\"showErrors()\"\n      [attr.aria-describedby]=\"describedBy()\"\n      (change)=\"handleChange($event)\"\n      (click)=\"handleClick($event)\"\n      (blur)=\"touch.emit()\"\n    />\n    <span class=\"checkbox-box\" aria-hidden=\"true\">\n      <svg class=\"icon-check\" width=\"12\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\">\n        <path d=\"M3 8.5l3.5 3.5L13 4.5\" />\n      </svg>\n      <svg class=\"icon-dash\" width=\"12\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" focusable=\"false\">\n        <path d=\"M3.5 8h9\" />\n      </svg>\n    </span>\n    <span class=\"checkbox-text\">\n      {{ label() }}\n      @if (required()) {\n        <span class=\"checkbox-required\" aria-hidden=\"true\">*</span>\n      }\n    </span>\n  </label>\n\n  @if (hint() && !showErrors()) {\n    <small class=\"checkbox-hint\" [id]=\"id() + '-hint'\">{{ hint() }}</small>\n  }\n\n  @if (showErrors()) {\n    <div class=\"checkbox-errors\" [id]=\"id() + '-error'\" role=\"alert\">\n      @for (error of errors(); track error.kind + error.message) {\n        <small>{{ error.message }}</small>\n      }\n    </div>\n  }\n</div>\n",
			styles: [":host{display:block}.checkbox{display:grid;gap:var(--ui-field-gap, 4px)}.checkbox-label{position:relative;display:inline-flex;align-items:flex-start;gap:var(--ui-checkbox-gap, 8px);width:fit-content;color:var(--ui-checkbox-label-color, var(--c9, #404040));font-size:var(--ui-checkbox-font-size, 14px);line-height:var(--ui-checkbox-size, 18px);cursor:pointer}.checkbox-label.checkbox-disabled{cursor:not-allowed;opacity:var(--ui-checkbox-disabled-opacity, .55)}.checkbox-input{position:absolute;top:0;left:0;width:var(--ui-checkbox-size, 18px);height:var(--ui-checkbox-size, 18px);margin:0;opacity:0;cursor:inherit}.checkbox-box{box-sizing:border-box;display:grid;flex-shrink:0;place-items:center;width:var(--ui-checkbox-size, 18px);height:var(--ui-checkbox-size, 18px);border:var(--ui-checkbox-border, 1.5px solid var(--b4, #b5c6f9));border-radius:var(--ui-checkbox-border-radius, 5px);background:var(--ui-checkbox-background, var(--b-white, #fff));color:var(--ui-checkbox-check-color, #fff);transition:background-color .12s ease,border-color .12s ease}.checkbox-box svg{grid-area:1/1;visibility:hidden}.checkbox-input:hover:not(:disabled)+.checkbox-box{border-color:var(--ui-checkbox-hover-border-color, var(--b6, #8ba7f9))}.checkbox-input:checked+.checkbox-box,.checkbox-input:indeterminate+.checkbox-box{border-color:var(--ui-checkbox-checked-background, var(--b10, #335cd6));background:var(--ui-checkbox-checked-background, var(--b10, #335cd6))}.checkbox-input:checked:not(:indeterminate)+.checkbox-box .icon-check,.checkbox-input:indeterminate+.checkbox-box .icon-dash{visibility:visible}.checkbox-input:focus-visible+.checkbox-box{outline:2px solid var(--ui-checkbox-focus-color, var(--b10, #1769aa));outline-offset:2px}.checkbox-invalid .checkbox-input:not(:checked)+.checkbox-box{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background:var(--ui-input-error-background, var(--bg-erro, transparent))}.checkbox-required{margin-left:2px;color:var(--ui-field-error-color, var(--erro, #b3261e))}.checkbox-hint,.checkbox-errors{padding-left:calc(var(--ui-checkbox-size, 18px) + var(--ui-checkbox-gap, 8px))}.checkbox-hint{color:var(--ui-field-hint-color, var(--c7, #595959));font-size:var(--ui-field-hint-font-size, 13px)}.checkbox-errors{display:grid;gap:var(--ui-field-error-gap, 2px);color:var(--ui-field-error-color, var(--erro, #b3261e));font-size:var(--ui-field-error-font-size, 13px)}@media(prefers-reduced-motion:reduce){.checkbox-box{transition:none}}\n"]
		}]
	}],
	propDecorators: {
		checked: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "checked",
				required: false
			}]
		}, {
			type: i0.Output,
			args: ["checkedChange"]
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
		indeterminate: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "indeterminate",
				required: false
			}]
		}]
	}
});
var UiFieldset = class UiFieldset {
	title = input.required(...ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []);
	description = input("", ...ngDevMode ? [{ debugName: "description" }] : /* istanbul ignore next */ []);
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiFieldset,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiFieldset,
		isStandalone: true,
		selector: "ui-fieldset",
		inputs: {
			title: {
				classPropertyName: "title",
				publicName: "title",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			description: {
				classPropertyName: "description",
				publicName: "description",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		ngImport: i0,
		template: "<fieldset class=\"fieldset\">\n  <legend class=\"fieldset-legend\">{{ title() }}</legend>\n  @if (description()) {\n    <p class=\"fieldset-description\">{{ description() }}</p>\n  }\n  <div class=\"fieldset-content\">\n    <ng-content />\n  </div>\n</fieldset>\n",
		styles: [":host{display:block}.fieldset{display:grid;gap:var(--ui-fieldset-gap, 10px);min-width:0;margin:0;padding:var(--ui-fieldset-padding, 0);border:var(--ui-fieldset-border, 0);border-radius:var(--ui-fieldset-border-radius, 0)}.fieldset-legend{padding:0;color:var(--ui-fieldset-title-color, var(--c8, #595959));font-size:var(--ui-fieldset-title-font-size, 16px);font-weight:var(--ui-fieldset-title-font-weight, 500)}.fieldset-description{margin:0;color:var(--ui-fieldset-description-color, var(--c7, #707070));font-size:var(--ui-fieldset-description-font-size, 14px);font-weight:400;white-space:pre-line}.fieldset-content{display:grid;gap:var(--ui-fieldset-content-gap, 16px);margin-top:var(--ui-fieldset-content-margin-top, 10px)}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiFieldset,
	decorators: [{
		type: Component,
		args: [{
			selector: "ui-fieldset",
			imports: [],
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<fieldset class=\"fieldset\">\n  <legend class=\"fieldset-legend\">{{ title() }}</legend>\n  @if (description()) {\n    <p class=\"fieldset-description\">{{ description() }}</p>\n  }\n  <div class=\"fieldset-content\">\n    <ng-content />\n  </div>\n</fieldset>\n",
			styles: [":host{display:block}.fieldset{display:grid;gap:var(--ui-fieldset-gap, 10px);min-width:0;margin:0;padding:var(--ui-fieldset-padding, 0);border:var(--ui-fieldset-border, 0);border-radius:var(--ui-fieldset-border-radius, 0)}.fieldset-legend{padding:0;color:var(--ui-fieldset-title-color, var(--c8, #595959));font-size:var(--ui-fieldset-title-font-size, 16px);font-weight:var(--ui-fieldset-title-font-weight, 500)}.fieldset-description{margin:0;color:var(--ui-fieldset-description-color, var(--c7, #707070));font-size:var(--ui-fieldset-description-font-size, 14px);font-weight:400;white-space:pre-line}.fieldset-content{display:grid;gap:var(--ui-fieldset-content-gap, 16px);margin-top:var(--ui-fieldset-content-margin-top, 10px)}\n"]
		}]
	}],
	propDecorators: {
		title: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "title",
				required: true
			}]
		}],
		description: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "description",
				required: false
			}]
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
		host: { properties: { "attr.id": "null" } },
		ngImport: i0,
		template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"errors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <input\n    [id]=\"id()\"\n    [name]=\"name()\"\n    [type]=\"type()\"\n    [value]=\"value()\"\n    [disabled]=\"disabled()\"\n    [readOnly]=\"readonly()\"\n    [required]=\"required()\"\n    [placeholder]=\"placeholder()\"\n    [attr.minlength]=\"minLength()\"\n    [attr.maxlength]=\"maxLength()\"\n    [attr.autocomplete]=\"autocomplete()\"\n    [attr.aria-invalid]=\"showErrors()\"\n    [attr.aria-describedby]=\"describedBy()\"\n    (input)=\"handleInput($event)\"\n    (blur)=\"touch.emit()\"\n    class=\"input\"\n  />\n</ui-field>\n",
		styles: [":host{display:block}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b4, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent));outline:var(--ui-input-error-color, var(--erro, #b3261e))}.input[aria-invalid=true]:focus-visible{outline:2px solid var(--ui-input-error-color, var(--erro, #b3261e));outline-offset:2px}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}\n"],
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
			host: { "[attr.id]": "null" },
			template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"errors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <input\n    [id]=\"id()\"\n    [name]=\"name()\"\n    [type]=\"type()\"\n    [value]=\"value()\"\n    [disabled]=\"disabled()\"\n    [readOnly]=\"readonly()\"\n    [required]=\"required()\"\n    [placeholder]=\"placeholder()\"\n    [attr.minlength]=\"minLength()\"\n    [attr.maxlength]=\"maxLength()\"\n    [attr.autocomplete]=\"autocomplete()\"\n    [attr.aria-invalid]=\"showErrors()\"\n    [attr.aria-describedby]=\"describedBy()\"\n    (input)=\"handleInput($event)\"\n    (blur)=\"touch.emit()\"\n    class=\"input\"\n  />\n</ui-field>\n",
			styles: [":host{display:block}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b4, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent));outline:var(--ui-input-error-color, var(--erro, #b3261e))}.input[aria-invalid=true]:focus-visible{outline:2px solid var(--ui-input-error-color, var(--erro, #b3261e));outline-offset:2px}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}\n"]
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
var UiInputNumber = class UiInputNumber {
	value = model(null, ...ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []);
	touched = input(false, ...ngDevMode ? [{ debugName: "touched" }] : /* istanbul ignore next */ []);
	touch = output();
	disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []);
	readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : /* istanbul ignore next */ []);
	invalid = input(false, ...ngDevMode ? [{ debugName: "invalid" }] : /* istanbul ignore next */ []);
	required = input(false, ...ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []);
	min = input(void 0, ...ngDevMode ? [{ debugName: "min" }] : /* istanbul ignore next */ []);
	max = input(void 0, ...ngDevMode ? [{ debugName: "max" }] : /* istanbul ignore next */ []);
	step = input(1, ...ngDevMode ? [{ debugName: "step" }] : /* istanbul ignore next */ []);
	errors = input([], ...ngDevMode ? [{ debugName: "errors" }] : /* istanbul ignore next */ []);
	name = input("", ...ngDevMode ? [{ debugName: "name" }] : /* istanbul ignore next */ []);
	label = input.required(...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	id = input.required(...ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []);
	hint = input("", ...ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []);
	placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []);
	autocomplete = input("off", ...ngDevMode ? [{ debugName: "autocomplete" }] : /* istanbul ignore next */ []);
	spinButtons = input(true, ...ngDevMode ? [{ debugName: "spinButtons" }] : /* istanbul ignore next */ []);
	showErrors = computed(() => this.invalid() && this.touched(), ...ngDevMode ? [{ debugName: "showErrors" }] : /* istanbul ignore next */ []);
	describedBy = computed(() => {
		if (this.showErrors()) return `${this.id()}-error`;
		if (this.hint()) return `${this.id()}-hint`;
		return null;
	}, ...ngDevMode ? [{ debugName: "describedBy" }] : /* istanbul ignore next */ []);
	inputMode = computed(() => {
		const step = this.step();
		return step === "any" || !Number.isInteger(step) ? "decimal" : "numeric";
	}, ...ngDevMode ? [{ debugName: "inputMode" }] : /* istanbul ignore next */ []);
	handleInput(event) {
		const input = event.target;
		this.value.set(input.value === "" || Number.isNaN(input.valueAsNumber) ? null : input.valueAsNumber);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiInputNumber,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.1.0",
		version: "22.2.1",
		type: UiInputNumber,
		isStandalone: true,
		selector: "ui-input-number",
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
			min: {
				classPropertyName: "min",
				publicName: "min",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			max: {
				classPropertyName: "max",
				publicName: "max",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			step: {
				classPropertyName: "step",
				publicName: "step",
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
			spinButtons: {
				classPropertyName: "spinButtons",
				publicName: "spinButtons",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: {
			value: "valueChange",
			touch: "touch"
		},
		host: { properties: { "attr.id": "null" } },
		ngImport: i0,
		template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"errors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <input\n    class=\"input\"\n    type=\"number\"\n    [class.no-spin]=\"!spinButtons()\"\n    [id]=\"id()\"\n    [name]=\"name()\"\n    [value]=\"value() ?? ''\"\n    [disabled]=\"disabled()\"\n    [readOnly]=\"readonly()\"\n    [required]=\"required()\"\n    [placeholder]=\"placeholder()\"\n    [attr.min]=\"min()\"\n    [attr.max]=\"max()\"\n    [attr.step]=\"step()\"\n    [attr.inputmode]=\"inputMode()\"\n    [attr.autocomplete]=\"autocomplete()\"\n    [attr.aria-invalid]=\"showErrors()\"\n    [attr.aria-describedby]=\"describedBy()\"\n    (input)=\"handleInput($event)\"\n    (blur)=\"touch.emit()\"\n  />\n</ui-field>\n",
		styles: [":host{display:block}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b4, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent));outline:var(--ui-input-error-color, var(--erro, #b3261e))}.input[aria-invalid=true]:focus-visible{outline:2px solid var(--ui-input-error-color, var(--erro, #b3261e));outline-offset:2px}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.input{text-align:var(--ui-input-number-text-align, start)}.no-spin{-moz-appearance:textfield;appearance:textfield}.no-spin::-webkit-inner-spin-button,.no-spin::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}\n"],
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
	type: UiInputNumber,
	decorators: [{
		type: Component,
		args: [{
			selector: "ui-input-number",
			imports: [UiField],
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: { "[attr.id]": "null" },
			template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"errors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <input\n    class=\"input\"\n    type=\"number\"\n    [class.no-spin]=\"!spinButtons()\"\n    [id]=\"id()\"\n    [name]=\"name()\"\n    [value]=\"value() ?? ''\"\n    [disabled]=\"disabled()\"\n    [readOnly]=\"readonly()\"\n    [required]=\"required()\"\n    [placeholder]=\"placeholder()\"\n    [attr.min]=\"min()\"\n    [attr.max]=\"max()\"\n    [attr.step]=\"step()\"\n    [attr.inputmode]=\"inputMode()\"\n    [attr.autocomplete]=\"autocomplete()\"\n    [attr.aria-invalid]=\"showErrors()\"\n    [attr.aria-describedby]=\"describedBy()\"\n    (input)=\"handleInput($event)\"\n    (blur)=\"touch.emit()\"\n  />\n</ui-field>\n",
			styles: [":host{display:block}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b4, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent));outline:var(--ui-input-error-color, var(--erro, #b3261e))}.input[aria-invalid=true]:focus-visible{outline:2px solid var(--ui-input-error-color, var(--erro, #b3261e));outline-offset:2px}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.input{text-align:var(--ui-input-number-text-align, start)}.no-spin{-moz-appearance:textfield;appearance:textfield}.no-spin::-webkit-inner-spin-button,.no-spin::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}\n"]
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
		min: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "min",
				required: false
			}]
		}],
		max: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "max",
				required: false
			}]
		}],
		step: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "step",
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
		spinButtons: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "spinButtons",
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
		host: { properties: { "attr.id": "null" } },
		ngImport: i0,
		template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"errors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <div class=\"control\">\n    <input\n      class=\"input\"\n      [id]=\"id()\"\n      [name]=\"name()\"\n      [type]=\"showPassword() ? 'text' : 'password'\"\n      [value]=\"value()\"\n      [disabled]=\"disabled()\"\n      [readOnly]=\"readonly()\"\n      [required]=\"required()\"\n      [placeholder]=\"placeholder()\"\n      [attr.minlength]=\"minLength()\"\n      [attr.maxlength]=\"maxLength()\"\n      [attr.autocomplete]=\"autocomplete()\"\n      [attr.aria-invalid]=\"showErrors()\"\n      [attr.aria-describedby]=\"describedBy()\"\n      (input)=\"handleInput($event)\"\n      (blur)=\"touch.emit()\"\n    />\n    <button\n      class=\"toggle\"\n      type=\"button\"\n      [disabled]=\"disabled()\"\n      [attr.aria-controls]=\"id()\"\n      [attr.aria-pressed]=\"showPassword()\"\n      [attr.aria-label]=\"showPassword() ? hidePasswordLabel() : showPasswordLabel()\"\n      (click)=\"togglePassword()\"\n    >\n      @if (showPassword()) {\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n          <path\n            d=\"M15.514 6.27935C14.9122 5.29384 14.153 4.41352 13.2667 3.67335L15.1334 1.80669C15.2548 1.68095 15.322 1.51255 15.3205 1.33775C15.319 1.16296 15.2489 0.995748 15.1252 0.872142C15.0016 0.748537 14.8344 0.678424 14.6596 0.676905C14.4848 0.675386 14.3164 0.742582 14.1907 0.864021L12.1607 2.89669C10.9023 2.14924 9.46365 1.75966 8.00003 1.77002C3.8727 1.77002 1.5207 4.59535 0.486034 6.27935C0.166386 6.79636 -0.00292969 7.39218 -0.00292969 8.00002C-0.00292969 8.60786 0.166386 9.20368 0.486034 9.72069C1.08787 10.7062 1.84703 11.5865 2.73337 12.3267L0.866701 14.1934C0.803027 14.2549 0.752239 14.3284 0.7173 14.4098C0.682361 14.4911 0.66397 14.5786 0.663201 14.6671C0.662431 14.7556 0.679299 14.8434 0.71282 14.9253C0.74634 15.0073 0.795842 15.0817 0.858438 15.1443C0.921033 15.2069 0.995467 15.2564 1.0774 15.2899C1.15933 15.3234 1.24712 15.3403 1.33564 15.3395C1.42415 15.3388 1.51163 15.3204 1.59297 15.2854C1.67431 15.2505 1.74787 15.1997 1.80937 15.136L3.84403 13.1014C5.10088 13.8487 6.53782 14.2389 8.00003 14.23C12.1274 14.23 14.4794 11.4047 15.514 9.72069C15.8337 9.20368 16.003 8.60786 16.003 8.00002C16.003 7.39218 15.8337 6.79636 15.514 6.27935ZM1.62203 9.02269C1.43212 8.71538 1.33153 8.36127 1.33153 8.00002C1.33153 7.63877 1.43212 7.28466 1.62203 6.97735C2.51137 5.53335 4.52137 3.10335 8.00003 3.10335C9.10688 3.09715 10.1982 3.36391 11.1774 3.88002L9.83537 5.22202C9.19532 4.79709 8.42797 4.60669 7.66352 4.68312C6.89907 4.75955 6.18461 5.09811 5.64137 5.64136C5.09813 6.1846 4.75956 6.89906 4.68313 7.66351C4.6067 8.42796 4.7971 9.19531 5.22203 9.83535L3.68203 11.3754C2.86544 10.7152 2.16859 9.91932 1.62203 9.02269ZM10 8.00002C10 8.53045 9.78932 9.03916 9.41425 9.41424C9.03918 9.78931 8.53047 10 8.00003 10C7.70304 9.99887 7.41017 9.9305 7.14337 9.80002L9.80003 7.14335C9.93051 7.41015 9.99889 7.70303 10 8.00002ZM6.00003 8.00002C6.00003 7.46959 6.21075 6.96088 6.58582 6.58581C6.96089 6.21073 7.4696 6.00002 8.00003 6.00002C8.29703 6.00117 8.5899 6.06955 8.8567 6.20002L6.20003 8.85669C6.06956 8.58989 6.00118 8.29701 6.00003 8.00002ZM14.378 9.02269C13.4887 10.4667 11.4787 12.8967 8.00003 12.8967C6.89319 12.9029 5.80188 12.6361 4.8227 12.12L6.1647 10.778C6.80475 11.203 7.5721 11.3934 8.33655 11.3169C9.101 11.2405 9.81546 10.9019 10.3587 10.3587C10.9019 9.81544 11.2405 9.10098 11.3169 8.33653C11.3934 7.57208 11.203 6.80473 10.778 6.16469L12.318 4.62469C13.1346 5.28487 13.8315 6.08072 14.378 6.97735C14.5679 7.28466 14.6685 7.63877 14.6685 8.00002C14.6685 8.36127 14.5679 8.71538 14.378 9.02269Z\"\n          />\n        </svg>\n      } @else {\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 14 14\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n          <path\n            d=\"M13.5754 5.49437C12.6706 4.02087 10.6126 1.54871 7.00064 1.54871C3.38864 1.54871 1.33064 4.02087 0.42589 5.49437C0.146198 5.94675 -0.00195312 6.4681 -0.00195312 6.99996C-0.00195313 7.53182 0.146198 8.05316 0.42589 8.50554C1.33064 9.97904 3.38864 12.4512 7.00064 12.4512C10.6126 12.4512 12.6706 9.97904 13.5754 8.50554C13.8551 8.05316 14.0032 7.53182 14.0032 6.99996C14.0032 6.4681 13.8551 5.94675 13.5754 5.49437ZM12.5808 7.89479C11.8038 9.15829 10.0451 11.2845 7.00064 11.2845C3.95622 11.2845 2.19747 9.15829 1.42047 7.89479C1.2543 7.6259 1.16629 7.31605 1.16629 6.99996C1.16629 6.68386 1.2543 6.37401 1.42047 6.10512C2.19747 4.84162 3.95622 2.71537 7.00064 2.71537C10.0451 2.71537 11.8038 4.83929 12.5808 6.10512C12.747 6.37401 12.835 6.68386 12.835 6.99996C12.835 7.31605 12.747 7.6259 12.5808 7.89479Z\"\n          />\n          <path\n            d=\"M7.00065 4.08337C6.42379 4.08337 5.85988 4.25443 5.38024 4.57492C4.9006 4.89541 4.52676 5.35093 4.306 5.88388C4.08525 6.41683 4.02749 7.00328 4.14003 7.56905C4.25257 8.13483 4.53035 8.65453 4.93826 9.06244C5.34616 9.47034 5.86586 9.74813 6.43164 9.86066C6.99742 9.97321 7.58386 9.91545 8.11681 9.69469C8.64976 9.47393 9.10528 9.1001 9.42577 8.62045C9.74626 8.14081 9.91732 7.5769 9.91732 7.00004C9.91639 6.22678 9.6088 5.48545 9.06202 4.93867C8.51524 4.39189 7.77392 4.0843 7.00065 4.08337ZM7.00065 8.75004C6.65454 8.75004 6.31619 8.64741 6.0284 8.45511C5.74062 8.26282 5.51632 7.98951 5.38386 7.66974C5.25141 7.34997 5.21675 6.9981 5.28428 6.65863C5.3518 6.31917 5.51847 6.00735 5.76322 5.7626C6.00796 5.51786 6.31978 5.35119 6.65924 5.28367C6.99871 5.21614 7.35058 5.2508 7.67035 5.38325C7.99012 5.5157 8.26343 5.74001 8.45572 6.02779C8.64802 6.31558 8.75065 6.65392 8.75065 7.00004C8.75065 7.46417 8.56628 7.90929 8.23809 8.23748C7.9099 8.56567 7.46478 8.75004 7.00065 8.75004Z\"\n          />\n        </svg>\n      }\n    </button>\n  </div>\n</ui-field>\n",
		styles: [":host{display:block}.control{position:relative}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b4, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent));outline:var(--ui-input-error-color, var(--erro, #b3261e))}.input[aria-invalid=true]:focus-visible{outline:2px solid var(--ui-input-error-color, var(--erro, #b3261e));outline-offset:2px}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.input{padding-right:40px}.toggle{position:absolute;top:50%;right:6px;display:flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:var(--ui-icon-button-background, transparent);color:var(--ui-icon-button-color, var(--c8, #595959));transition:background-color .12s ease}.toggle:hover:not(:disabled){background:var(--ui-icon-button-hover-background, var(--b1, #e7ecff))}.toggle{cursor:pointer;transform:translateY(-50%)}.toggle:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:1px}.toggle:disabled{cursor:not-allowed;opacity:.5}\n"],
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
			host: { "[attr.id]": "null" },
			template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"errors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <div class=\"control\">\n    <input\n      class=\"input\"\n      [id]=\"id()\"\n      [name]=\"name()\"\n      [type]=\"showPassword() ? 'text' : 'password'\"\n      [value]=\"value()\"\n      [disabled]=\"disabled()\"\n      [readOnly]=\"readonly()\"\n      [required]=\"required()\"\n      [placeholder]=\"placeholder()\"\n      [attr.minlength]=\"minLength()\"\n      [attr.maxlength]=\"maxLength()\"\n      [attr.autocomplete]=\"autocomplete()\"\n      [attr.aria-invalid]=\"showErrors()\"\n      [attr.aria-describedby]=\"describedBy()\"\n      (input)=\"handleInput($event)\"\n      (blur)=\"touch.emit()\"\n    />\n    <button\n      class=\"toggle\"\n      type=\"button\"\n      [disabled]=\"disabled()\"\n      [attr.aria-controls]=\"id()\"\n      [attr.aria-pressed]=\"showPassword()\"\n      [attr.aria-label]=\"showPassword() ? hidePasswordLabel() : showPasswordLabel()\"\n      (click)=\"togglePassword()\"\n    >\n      @if (showPassword()) {\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n          <path\n            d=\"M15.514 6.27935C14.9122 5.29384 14.153 4.41352 13.2667 3.67335L15.1334 1.80669C15.2548 1.68095 15.322 1.51255 15.3205 1.33775C15.319 1.16296 15.2489 0.995748 15.1252 0.872142C15.0016 0.748537 14.8344 0.678424 14.6596 0.676905C14.4848 0.675386 14.3164 0.742582 14.1907 0.864021L12.1607 2.89669C10.9023 2.14924 9.46365 1.75966 8.00003 1.77002C3.8727 1.77002 1.5207 4.59535 0.486034 6.27935C0.166386 6.79636 -0.00292969 7.39218 -0.00292969 8.00002C-0.00292969 8.60786 0.166386 9.20368 0.486034 9.72069C1.08787 10.7062 1.84703 11.5865 2.73337 12.3267L0.866701 14.1934C0.803027 14.2549 0.752239 14.3284 0.7173 14.4098C0.682361 14.4911 0.66397 14.5786 0.663201 14.6671C0.662431 14.7556 0.679299 14.8434 0.71282 14.9253C0.74634 15.0073 0.795842 15.0817 0.858438 15.1443C0.921033 15.2069 0.995467 15.2564 1.0774 15.2899C1.15933 15.3234 1.24712 15.3403 1.33564 15.3395C1.42415 15.3388 1.51163 15.3204 1.59297 15.2854C1.67431 15.2505 1.74787 15.1997 1.80937 15.136L3.84403 13.1014C5.10088 13.8487 6.53782 14.2389 8.00003 14.23C12.1274 14.23 14.4794 11.4047 15.514 9.72069C15.8337 9.20368 16.003 8.60786 16.003 8.00002C16.003 7.39218 15.8337 6.79636 15.514 6.27935ZM1.62203 9.02269C1.43212 8.71538 1.33153 8.36127 1.33153 8.00002C1.33153 7.63877 1.43212 7.28466 1.62203 6.97735C2.51137 5.53335 4.52137 3.10335 8.00003 3.10335C9.10688 3.09715 10.1982 3.36391 11.1774 3.88002L9.83537 5.22202C9.19532 4.79709 8.42797 4.60669 7.66352 4.68312C6.89907 4.75955 6.18461 5.09811 5.64137 5.64136C5.09813 6.1846 4.75956 6.89906 4.68313 7.66351C4.6067 8.42796 4.7971 9.19531 5.22203 9.83535L3.68203 11.3754C2.86544 10.7152 2.16859 9.91932 1.62203 9.02269ZM10 8.00002C10 8.53045 9.78932 9.03916 9.41425 9.41424C9.03918 9.78931 8.53047 10 8.00003 10C7.70304 9.99887 7.41017 9.9305 7.14337 9.80002L9.80003 7.14335C9.93051 7.41015 9.99889 7.70303 10 8.00002ZM6.00003 8.00002C6.00003 7.46959 6.21075 6.96088 6.58582 6.58581C6.96089 6.21073 7.4696 6.00002 8.00003 6.00002C8.29703 6.00117 8.5899 6.06955 8.8567 6.20002L6.20003 8.85669C6.06956 8.58989 6.00118 8.29701 6.00003 8.00002ZM14.378 9.02269C13.4887 10.4667 11.4787 12.8967 8.00003 12.8967C6.89319 12.9029 5.80188 12.6361 4.8227 12.12L6.1647 10.778C6.80475 11.203 7.5721 11.3934 8.33655 11.3169C9.101 11.2405 9.81546 10.9019 10.3587 10.3587C10.9019 9.81544 11.2405 9.10098 11.3169 8.33653C11.3934 7.57208 11.203 6.80473 10.778 6.16469L12.318 4.62469C13.1346 5.28487 13.8315 6.08072 14.378 6.97735C14.5679 7.28466 14.6685 7.63877 14.6685 8.00002C14.6685 8.36127 14.5679 8.71538 14.378 9.02269Z\"\n          />\n        </svg>\n      } @else {\n        <svg width=\"16\" height=\"16\" viewBox=\"0 0 14 14\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n          <path\n            d=\"M13.5754 5.49437C12.6706 4.02087 10.6126 1.54871 7.00064 1.54871C3.38864 1.54871 1.33064 4.02087 0.42589 5.49437C0.146198 5.94675 -0.00195312 6.4681 -0.00195312 6.99996C-0.00195313 7.53182 0.146198 8.05316 0.42589 8.50554C1.33064 9.97904 3.38864 12.4512 7.00064 12.4512C10.6126 12.4512 12.6706 9.97904 13.5754 8.50554C13.8551 8.05316 14.0032 7.53182 14.0032 6.99996C14.0032 6.4681 13.8551 5.94675 13.5754 5.49437ZM12.5808 7.89479C11.8038 9.15829 10.0451 11.2845 7.00064 11.2845C3.95622 11.2845 2.19747 9.15829 1.42047 7.89479C1.2543 7.6259 1.16629 7.31605 1.16629 6.99996C1.16629 6.68386 1.2543 6.37401 1.42047 6.10512C2.19747 4.84162 3.95622 2.71537 7.00064 2.71537C10.0451 2.71537 11.8038 4.83929 12.5808 6.10512C12.747 6.37401 12.835 6.68386 12.835 6.99996C12.835 7.31605 12.747 7.6259 12.5808 7.89479Z\"\n          />\n          <path\n            d=\"M7.00065 4.08337C6.42379 4.08337 5.85988 4.25443 5.38024 4.57492C4.9006 4.89541 4.52676 5.35093 4.306 5.88388C4.08525 6.41683 4.02749 7.00328 4.14003 7.56905C4.25257 8.13483 4.53035 8.65453 4.93826 9.06244C5.34616 9.47034 5.86586 9.74813 6.43164 9.86066C6.99742 9.97321 7.58386 9.91545 8.11681 9.69469C8.64976 9.47393 9.10528 9.1001 9.42577 8.62045C9.74626 8.14081 9.91732 7.5769 9.91732 7.00004C9.91639 6.22678 9.6088 5.48545 9.06202 4.93867C8.51524 4.39189 7.77392 4.0843 7.00065 4.08337ZM7.00065 8.75004C6.65454 8.75004 6.31619 8.64741 6.0284 8.45511C5.74062 8.26282 5.51632 7.98951 5.38386 7.66974C5.25141 7.34997 5.21675 6.9981 5.28428 6.65863C5.3518 6.31917 5.51847 6.00735 5.76322 5.7626C6.00796 5.51786 6.31978 5.35119 6.65924 5.28367C6.99871 5.21614 7.35058 5.2508 7.67035 5.38325C7.99012 5.5157 8.26343 5.74001 8.45572 6.02779C8.64802 6.31558 8.75065 6.65392 8.75065 7.00004C8.75065 7.46417 8.56628 7.90929 8.23809 8.23748C7.9099 8.56567 7.46478 8.75004 7.00065 8.75004Z\"\n          />\n        </svg>\n      }\n    </button>\n  </div>\n</ui-field>\n",
			styles: [":host{display:block}.control{position:relative}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b4, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent));outline:var(--ui-input-error-color, var(--erro, #b3261e))}.input[aria-invalid=true]:focus-visible{outline:2px solid var(--ui-input-error-color, var(--erro, #b3261e));outline-offset:2px}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.input{padding-right:40px}.toggle{position:absolute;top:50%;right:6px;display:flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:var(--ui-icon-button-background, transparent);color:var(--ui-icon-button-color, var(--c8, #595959));transition:background-color .12s ease}.toggle:hover:not(:disabled){background:var(--ui-icon-button-hover-background, var(--b1, #e7ecff))}.toggle{cursor:pointer;transform:translateY(-50%)}.toggle:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:1px}.toggle:disabled{cursor:not-allowed;opacity:.5}\n"]
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
		host: { properties: { "attr.id": "null" } },
		ngImport: i0,
		template: "<label [for]=\"id()\" [class.visually-hidden]=\"hideLabel()\">{{ label() }}</label>\n<div class=\"control\">\n  <input\n    class=\"input\"\n    type=\"search\"\n    [id]=\"id()\"\n    [name]=\"name()\"\n    [value]=\"value()\"\n    [disabled]=\"disabled()\"\n    [placeholder]=\"placeholder()\"\n    (input)=\"handleInput($event)\"\n    (keydown.enter)=\"$event.preventDefault(); submit()\"\n    (blur)=\"touch.emit()\"\n  />\n  <button\n    class=\"search-button\"\n    type=\"button\"\n    [disabled]=\"disabled()\"\n    [attr.aria-label]=\"buttonLabel()\"\n    (click)=\"submit()\"\n  >\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n      <path\n        d=\"M11.8539 11.1464L8.86938 8.16189C9.68269 7.16719 10.0826 5.89794 9.9863 4.61667C9.89003 3.33541 9.30499 2.14016 8.35217 1.27815C7.39936 0.416146 6.15168 -0.0466629 4.8672 -0.014547C3.58273 0.0175689 2.35973 0.542153 1.45119 1.4507C0.542641 2.35924 0.0180572 3.58224 -0.0140587 4.86671C-0.0461746 6.15119 0.416635 7.39887 1.27864 8.35168C2.14064 9.3045 3.3359 9.88955 4.61716 9.98581C5.89843 10.0821 7.16768 9.6822 8.16238 8.86889L11.1469 11.8534C11.2412 11.9445 11.3675 11.9949 11.4986 11.9937C11.6297 11.9926 11.7551 11.94 11.8478 11.8473C11.9405 11.7546 11.9931 11.6292 11.9942 11.4981C11.9954 11.367 11.945 11.2407 11.8539 11.1464ZM5.00038 8.99989C4.20925 8.99989 3.4359 8.7653 2.7781 8.32577C2.1203 7.88624 1.60761 7.26153 1.30486 6.53063C1.00211 5.79972 0.922897 4.99545 1.07724 4.21953C1.23158 3.44361 1.61254 2.73087 2.17195 2.17146C2.73136 1.61205 3.44409 1.23109 4.22002 1.07675C4.99594 0.922409 5.80021 1.00162 6.53111 1.30437C7.26202 1.60712 7.88673 2.11981 8.32626 2.77761C8.76578 3.43541 9.00038 4.20877 9.00038 4.99989C8.99919 6.06039 8.57738 7.07712 7.82749 7.827C7.0776 8.57689 6.06088 8.9987 5.00038 8.99989Z\"\n      />\n    </svg>\n  </button>\n</div>\n",
		styles: [":host{display:block;width:100%}label{display:block;margin-bottom:4px;color:var(--ui-field-label-color, var(--c8, #333));font-size:var(--ui-field-label-font-size, 14px)}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.control{position:relative}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b4, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent));outline:var(--ui-input-error-color, var(--erro, #b3261e))}.input[aria-invalid=true]:focus-visible{outline:2px solid var(--ui-input-error-color, var(--erro, #b3261e));outline-offset:2px}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.input{padding:var(--ui-input-search-padding, 8px 44px 8px 16px);border:var(--ui-input-search-border, 1px solid var(--b1, #d0d0d0));border-radius:var(--ui-input-search-border-radius, 25px)}.input::-webkit-search-cancel-button{display:none}.search-button{position:absolute;top:50%;right:6px;display:flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:var(--ui-icon-button-background, transparent);color:var(--ui-icon-button-color, var(--c8, #595959));transition:background-color .12s ease}.search-button:hover:not(:disabled){background:var(--ui-icon-button-hover-background, var(--b1, #e7ecff))}.search-button{cursor:pointer;transform:translateY(-50%)}.search-button:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:1px}.search-button:disabled{cursor:not-allowed;opacity:.5}.search-button{background:var(--ui-input-search-button-background, var(--b1, #e7ecff))}\n"],
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
			host: { "[attr.id]": "null" },
			template: "<label [for]=\"id()\" [class.visually-hidden]=\"hideLabel()\">{{ label() }}</label>\n<div class=\"control\">\n  <input\n    class=\"input\"\n    type=\"search\"\n    [id]=\"id()\"\n    [name]=\"name()\"\n    [value]=\"value()\"\n    [disabled]=\"disabled()\"\n    [placeholder]=\"placeholder()\"\n    (input)=\"handleInput($event)\"\n    (keydown.enter)=\"$event.preventDefault(); submit()\"\n    (blur)=\"touch.emit()\"\n  />\n  <button\n    class=\"search-button\"\n    type=\"button\"\n    [disabled]=\"disabled()\"\n    [attr.aria-label]=\"buttonLabel()\"\n    (click)=\"submit()\"\n  >\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n      <path\n        d=\"M11.8539 11.1464L8.86938 8.16189C9.68269 7.16719 10.0826 5.89794 9.9863 4.61667C9.89003 3.33541 9.30499 2.14016 8.35217 1.27815C7.39936 0.416146 6.15168 -0.0466629 4.8672 -0.014547C3.58273 0.0175689 2.35973 0.542153 1.45119 1.4507C0.542641 2.35924 0.0180572 3.58224 -0.0140587 4.86671C-0.0461746 6.15119 0.416635 7.39887 1.27864 8.35168C2.14064 9.3045 3.3359 9.88955 4.61716 9.98581C5.89843 10.0821 7.16768 9.6822 8.16238 8.86889L11.1469 11.8534C11.2412 11.9445 11.3675 11.9949 11.4986 11.9937C11.6297 11.9926 11.7551 11.94 11.8478 11.8473C11.9405 11.7546 11.9931 11.6292 11.9942 11.4981C11.9954 11.367 11.945 11.2407 11.8539 11.1464ZM5.00038 8.99989C4.20925 8.99989 3.4359 8.7653 2.7781 8.32577C2.1203 7.88624 1.60761 7.26153 1.30486 6.53063C1.00211 5.79972 0.922897 4.99545 1.07724 4.21953C1.23158 3.44361 1.61254 2.73087 2.17195 2.17146C2.73136 1.61205 3.44409 1.23109 4.22002 1.07675C4.99594 0.922409 5.80021 1.00162 6.53111 1.30437C7.26202 1.60712 7.88673 2.11981 8.32626 2.77761C8.76578 3.43541 9.00038 4.20877 9.00038 4.99989C8.99919 6.06039 8.57738 7.07712 7.82749 7.827C7.0776 8.57689 6.06088 8.9987 5.00038 8.99989Z\"\n      />\n    </svg>\n  </button>\n</div>\n",
			styles: [":host{display:block;width:100%}label{display:block;margin-bottom:4px;color:var(--ui-field-label-color, var(--c8, #333));font-size:var(--ui-field-label-font-size, 14px)}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.control{position:relative}.input{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.input::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.input:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.input:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b4, #1769aa));outline-offset:2px}.input[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent));outline:var(--ui-input-error-color, var(--erro, #b3261e))}.input[aria-invalid=true]:focus-visible{outline:2px solid var(--ui-input-error-color, var(--erro, #b3261e));outline-offset:2px}.input:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.input[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.input{padding:var(--ui-input-search-padding, 8px 44px 8px 16px);border:var(--ui-input-search-border, 1px solid var(--b1, #d0d0d0));border-radius:var(--ui-input-search-border-radius, 25px)}.input::-webkit-search-cancel-button{display:none}.search-button{position:absolute;top:50%;right:6px;display:flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:var(--ui-icon-button-background, transparent);color:var(--ui-icon-button-color, var(--c8, #595959));transition:background-color .12s ease}.search-button:hover:not(:disabled){background:var(--ui-icon-button-hover-background, var(--b1, #e7ecff))}.search-button{cursor:pointer;transform:translateY(-50%)}.search-button:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b10, #1769aa));outline-offset:1px}.search-button:disabled{cursor:not-allowed;opacity:.5}.search-button{background:var(--ui-input-search-button-background, var(--b1, #e7ecff))}\n"]
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
var UiOtpInput = class UiOtpInput {
	length = input(6, ...ngDevMode ? [{ debugName: "length" }] : /* istanbul ignore next */ []);
	error = input(false, ...ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []);
	disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []);
	label = input("Código de verificação", ...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	digitLabel = input("Dígito", ...ngDevMode ? [{ debugName: "digitLabel" }] : /* istanbul ignore next */ []);
	completed = output();
	otp = linkedSignal(() => Array.from({ length: this.length() }, () => ""), ...ngDevMode ? [{ debugName: "otp" }] : /* istanbul ignore next */ []);
	inputRefs = viewChildren("otpRef", ...ngDevMode ? [{ debugName: "inputRefs" }] : /* istanbul ignore next */ []);
	reset() {
		this.otp.set(Array.from({ length: this.length() }, () => ""));
		this.getInputs().forEach((input) => input.value = "");
		this.getInputs()[0]?.focus();
	}
	handleInput(index, event) {
		const input = event.target;
		const value = input.value;
		if (!/^\d*$/.test(value)) {
			input.value = this.otp()[index];
			return;
		}
		const digit = value.slice(-1);
		input.value = digit;
		this.setDigits((next) => next[index] = digit);
		if (digit && index < this.length() - 1) this.getInputs()[index + 1]?.focus();
	}
	handleKeyDown(index, event) {
		const inputs = this.getInputs();
		if (event.key === "Backspace") {
			event.preventDefault();
			this.setDigits((next) => {
				if (next[index]) {
					next[index] = "";
					inputs[index].value = "";
				} else if (index > 0) {
					next[index - 1] = "";
					inputs[index - 1].value = "";
					inputs[index - 1].focus();
				}
			});
		}
		if (event.key === "ArrowLeft" && index > 0) inputs[index - 1].focus();
		if (event.key === "ArrowRight" && index < this.length() - 1) inputs[index + 1].focus();
	}
	handlePaste(event) {
		event.preventDefault();
		const pasteData = event.clipboardData?.getData("text").replace(/\D/g, "").slice(0, this.length());
		if (!pasteData) return;
		const inputs = this.getInputs();
		this.setDigits((next) => {
			pasteData.split("").forEach((char, i) => {
				next[i] = char;
				inputs[i].value = char;
			});
		});
		inputs[Math.min(pasteData.length, this.length() - 1)]?.focus();
	}
	handleFocus(event) {
		event.target.select();
	}
	setDigits(mutate) {
		const next = [...this.otp()];
		mutate(next);
		this.otp.set(next);
		if (next.every((digit) => digit !== "")) this.completed.emit(next.join(""));
	}
	getInputs() {
		return this.inputRefs().map((ref) => ref.nativeElement);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiOtpInput,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiOtpInput,
		isStandalone: true,
		selector: "ui-otp-input",
		inputs: {
			length: {
				classPropertyName: "length",
				publicName: "length",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			error: {
				classPropertyName: "error",
				publicName: "error",
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
			label: {
				classPropertyName: "label",
				publicName: "label",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			digitLabel: {
				classPropertyName: "digitLabel",
				publicName: "digitLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { completed: "completed" },
		viewQueries: [{
			propertyName: "inputRefs",
			predicate: ["otpRef"],
			descendants: true,
			isSignal: true
		}],
		ngImport: i0,
		template: "<div class=\"otp-input\" role=\"group\" [attr.aria-label]=\"label()\" [class.otp-input-error]=\"error()\">\n  @for (digit of otp(); track $index) {\n    <input\n      #otpRef\n      type=\"text\"\n      maxlength=\"1\"\n      inputmode=\"numeric\"\n      [attr.autocomplete]=\"$first ? 'one-time-code' : 'off'\"\n      [value]=\"digit\"\n      [disabled]=\"disabled()\"\n      [attr.aria-invalid]=\"error()\"\n      [attr.aria-label]=\"digitLabel() + ' ' + ($index + 1)\"\n      (input)=\"handleInput($index, $event)\"\n      (keydown)=\"handleKeyDown($index, $event)\"\n      (paste)=\"handlePaste($event)\"\n      (focus)=\"handleFocus($event)\"\n    />\n  }\n</div>\n",
		styles: [":host{display:block}.otp-input{display:flex;flex-wrap:wrap;gap:var(--ui-otp-gap, 10px)}.otp-input>input{box-sizing:border-box;width:var(--ui-otp-input-size, 40px);height:var(--ui-otp-input-size, 40px);padding:0;border:var(--ui-otp-input-border, 1px solid var(--b2, #d9e2ff));border-radius:var(--ui-otp-input-border-radius, 10px);background-color:var(--ui-otp-input-background, var(--white, #fff));color:var(--ui-otp-input-color, var(--c8, #595959));font-family:inherit;font-size:var(--ui-otp-input-font-size, 14px);font-weight:var(--ui-otp-input-font-weight, 500);text-align:center;outline:none;transition:border-color .12s ease,box-shadow .12s ease}.otp-input>input:focus{border-color:var(--ui-otp-input-focus-border-color, var(--b5, #9bb3fa));box-shadow:var(--ui-otp-input-focus-shadow, var(--shadow-hover, none))}.otp-input>input:disabled{background-color:var(--ui-otp-input-disabled-background, var(--c2, #ededed));cursor:not-allowed}.otp-input-error>input{border-color:var(--ui-otp-input-error-color, var(--erro, #b3261e));background-color:var(--ui-otp-input-error-background, var(--bg-erro, transparent))}.otp-input-error>input:focus{border-color:var(--ui-otp-input-error-color, var(--erro, #b3261e));box-shadow:var(--ui-otp-input-error-focus-shadow, var(--shadow-erro, none))}@media(prefers-reduced-motion:reduce){.otp-input>input{transition:none}}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiOtpInput,
	decorators: [{
		type: Component,
		args: [{
			imports: [],
			selector: "ui-otp-input",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<div class=\"otp-input\" role=\"group\" [attr.aria-label]=\"label()\" [class.otp-input-error]=\"error()\">\n  @for (digit of otp(); track $index) {\n    <input\n      #otpRef\n      type=\"text\"\n      maxlength=\"1\"\n      inputmode=\"numeric\"\n      [attr.autocomplete]=\"$first ? 'one-time-code' : 'off'\"\n      [value]=\"digit\"\n      [disabled]=\"disabled()\"\n      [attr.aria-invalid]=\"error()\"\n      [attr.aria-label]=\"digitLabel() + ' ' + ($index + 1)\"\n      (input)=\"handleInput($index, $event)\"\n      (keydown)=\"handleKeyDown($index, $event)\"\n      (paste)=\"handlePaste($event)\"\n      (focus)=\"handleFocus($event)\"\n    />\n  }\n</div>\n",
			styles: [":host{display:block}.otp-input{display:flex;flex-wrap:wrap;gap:var(--ui-otp-gap, 10px)}.otp-input>input{box-sizing:border-box;width:var(--ui-otp-input-size, 40px);height:var(--ui-otp-input-size, 40px);padding:0;border:var(--ui-otp-input-border, 1px solid var(--b2, #d9e2ff));border-radius:var(--ui-otp-input-border-radius, 10px);background-color:var(--ui-otp-input-background, var(--white, #fff));color:var(--ui-otp-input-color, var(--c8, #595959));font-family:inherit;font-size:var(--ui-otp-input-font-size, 14px);font-weight:var(--ui-otp-input-font-weight, 500);text-align:center;outline:none;transition:border-color .12s ease,box-shadow .12s ease}.otp-input>input:focus{border-color:var(--ui-otp-input-focus-border-color, var(--b5, #9bb3fa));box-shadow:var(--ui-otp-input-focus-shadow, var(--shadow-hover, none))}.otp-input>input:disabled{background-color:var(--ui-otp-input-disabled-background, var(--c2, #ededed));cursor:not-allowed}.otp-input-error>input{border-color:var(--ui-otp-input-error-color, var(--erro, #b3261e));background-color:var(--ui-otp-input-error-background, var(--bg-erro, transparent))}.otp-input-error>input:focus{border-color:var(--ui-otp-input-error-color, var(--erro, #b3261e));box-shadow:var(--ui-otp-input-error-focus-shadow, var(--shadow-erro, none))}@media(prefers-reduced-motion:reduce){.otp-input>input{transition:none}}\n"]
		}]
	}],
	propDecorators: {
		length: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "length",
				required: false
			}]
		}],
		error: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "error",
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
		label: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "label",
				required: false
			}]
		}],
		digitLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "digitLabel",
				required: false
			}]
		}],
		completed: [{
			type: i0.Output,
			args: ["completed"]
		}],
		inputRefs: [{
			type: i0.ViewChildren,
			args: ["otpRef", { isSignal: true }]
		}]
	}
});
var UiSelect = class UiSelect {
	id = input.required(...ngDevMode ? [{ debugName: "id" }] : /* istanbul ignore next */ []);
	label = input.required(...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	hint = input("", ...ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []);
	placeholder = input("Selecione uma opção", ...ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []);
	emptyText = input("Nenhuma opção disponível.", ...ngDevMode ? [{ debugName: "emptyText" }] : /* istanbul ignore next */ []);
	options = input([], ...ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []);
	disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []);
	readonly = input(false, ...ngDevMode ? [{ debugName: "readonly" }] : /* istanbul ignore next */ []);
	required = input(false, ...ngDevMode ? [{ debugName: "required" }] : /* istanbul ignore next */ []);
	invalid = input(false, ...ngDevMode ? [{ debugName: "invalid" }] : /* istanbul ignore next */ []);
	touched = input(false, ...ngDevMode ? [{ debugName: "touched" }] : /* istanbul ignore next */ []);
	errors = input([], ...ngDevMode ? [{ debugName: "errors" }] : /* istanbul ignore next */ []);
	value = model(null, ...ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []);
	touch = output();
	selectionChange = output();
	isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : /* istanbul ignore next */ []);
	activeIndex = signal(-1, ...ngDevMode ? [{ debugName: "activeIndex" }] : /* istanbul ignore next */ []);
	listboxId = computed(() => `${this.id()}-options`, ...ngDevMode ? [{ debugName: "listboxId" }] : /* istanbul ignore next */ []);
	selectedOption = computed(() => this.options().find((option) => option.value === this.value()) ?? null, ...ngDevMode ? [{ debugName: "selectedOption" }] : /* istanbul ignore next */ []);
	displayText = computed(() => this.selectedOption()?.label ?? this.placeholder(), ...ngDevMode ? [{ debugName: "displayText" }] : /* istanbul ignore next */ []);
	showErrors = computed(() => this.invalid() && this.touched(), ...ngDevMode ? [{ debugName: "showErrors" }] : /* istanbul ignore next */ []);
	describedBy = computed(() => {
		if (this.showErrors()) return `${this.id()}-error`;
		if (this.hint()) return `${this.id()}-hint`;
		return null;
	}, ...ngDevMode ? [{ debugName: "describedBy" }] : /* istanbul ignore next */ []);
	activeDescendant = computed(() => {
		const index = this.activeIndex();
		return this.isOpen() && index >= 0 ? this.optionId(index) : null;
	}, ...ngDevMode ? [{ debugName: "activeDescendant" }] : /* istanbul ignore next */ []);
	optionId(index) {
		return `${this.id()}-option-${index}`;
	}
	toggle() {
		if (this.isOpen()) this.close();
		else this.open();
	}
	select(option) {
		if (!this.isInteractive() || option.disabled) return;
		this.value.set(option.value);
		this.selectionChange.emit(option.value);
		this.close();
	}
	handleKeydown(event) {
		if (!this.isInteractive()) return;
		switch (event.key) {
			case "ArrowDown":
				event.preventDefault();
				if (!this.isOpen()) this.open();
				else this.moveActive(1);
				break;
			case "ArrowUp":
				event.preventDefault();
				if (!this.isOpen()) this.open();
				else this.moveActive(-1);
				break;
			case "Home":
				if (this.isOpen()) {
					event.preventDefault();
					this.activeIndex.set(-1);
					this.moveActive(1);
				}
				break;
			case "End":
				if (this.isOpen()) {
					event.preventDefault();
					this.activeIndex.set(this.options().length);
					this.moveActive(-1);
				}
				break;
			case "Enter":
			case " ": {
				event.preventDefault();
				const option = this.options()[this.activeIndex()];
				if (this.isOpen() && option) this.select(option);
				else this.toggle();
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
	}
	open() {
		if (!this.isInteractive()) return;
		const selected = this.options().findIndex((option) => option.value === this.value());
		this.activeIndex.set(selected);
		this.isOpen.set(true);
	}
	close() {
		this.isOpen.set(false);
		this.activeIndex.set(-1);
	}
	moveActive(step) {
		const options = this.options();
		let index = this.activeIndex();
		for (let i = 0; i < options.length; i++) {
			index = (index + step + options.length) % options.length;
			if (!options[index].disabled) {
				this.activeIndex.set(index);
				return;
			}
		}
	}
	isInteractive() {
		return !this.disabled() && !this.readonly();
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiSelect,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiSelect,
		isStandalone: true,
		selector: "ui-select",
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
			emptyText: {
				classPropertyName: "emptyText",
				publicName: "emptyText",
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
			selectionChange: "selectionChange"
		},
		host: { properties: { "attr.id": "null" } },
		ngImport: i0,
		template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"errors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <div class=\"control\">\n    <button\n      class=\"trigger\"\n      type=\"button\"\n      role=\"combobox\"\n      aria-haspopup=\"listbox\"\n      [id]=\"id()\"\n      [disabled]=\"disabled()\"\n      [attr.aria-expanded]=\"isOpen()\"\n      [attr.aria-controls]=\"listboxId()\"\n      [attr.aria-activedescendant]=\"activeDescendant()\"\n      [attr.aria-invalid]=\"showErrors()\"\n      [attr.aria-required]=\"required()\"\n      [attr.aria-readonly]=\"readonly() || null\"\n      [attr.aria-describedby]=\"describedBy()\"\n      (click)=\"toggle()\"\n      (keydown)=\"handleKeydown($event)\"\n      (blur)=\"handleBlur()\"\n    >\n      <span class=\"trigger-text\" [class.placeholder]=\"!selectedOption()\">{{ displayText() }}</span>\n      <svg class=\"arrow\" [class.rotate]=\"isOpen()\" width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n        <path d=\"M3 6l5 5 5-5\" />\n      </svg>\n    </button>\n\n    @if (isOpen()) {\n      <div class=\"panel\">\n        @if (options().length === 0) {\n          <span class=\"panel-message\" role=\"status\">{{ emptyText() }}</span>\n        } @else {\n          <ul class=\"options\" role=\"listbox\" [id]=\"listboxId()\" [attr.aria-label]=\"label()\">\n            @for (option of options(); track option.value; let i = $index) {\n              <li\n                role=\"option\"\n                [id]=\"optionId(i)\"\n                [class.active]=\"i === activeIndex()\"\n                [attr.aria-selected]=\"option.value === value()\"\n                [attr.aria-disabled]=\"option.disabled || null\"\n                (mousedown)=\"$event.preventDefault()\"\n                (click)=\"select(option)\"\n              >\n                {{ option.label }}\n              </li>\n            }\n          </ul>\n        }\n      </div>\n    }\n  </div>\n</ui-field>\n",
		styles: [":host{display:block;width:100%}.control{position:relative}.trigger{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.trigger::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.trigger:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.trigger:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b4, #1769aa));outline-offset:2px}.trigger[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent));outline:var(--ui-input-error-color, var(--erro, #b3261e))}.trigger[aria-invalid=true]:focus-visible{outline:2px solid var(--ui-input-error-color, var(--erro, #b3261e));outline-offset:2px}.trigger:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.trigger[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.trigger{display:flex;align-items:center;justify-content:space-between;gap:8px;width:var(--ui-select-width, var(--ui-input-width, 100%));background-color:var(--ui-select-background, var(--ui-input-background, var(--b0, #f0f3ff)));text-align:left;cursor:pointer}.trigger:hover:not(:disabled){background-color:var(--ui-select-hover-background, var(--b1, #e7ecff))}.trigger-text{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.trigger-text.placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666))}.arrow{flex-shrink:0;color:var(--ui-select-arrow-color, var(--c8, #595959));transition:transform .3s ease}.arrow.rotate{transform:rotate(180deg)}.panel{position:absolute;top:100%;right:0;left:0;z-index:var(--ui-select-z-index, 1000);margin-top:var(--ui-select-panel-margin-top, 4px);max-height:var(--ui-select-max-height, 280px);overflow-y:auto;padding:var(--ui-select-panel-padding, 0);border:var(--ui-select-panel-border, 1px solid var(--b1, #e7ecff));border-radius:var(--ui-select-panel-border-radius, 8px);background-color:var(--ui-select-panel-background, var(--b0, #f0f3ff));box-shadow:var(--ui-select-panel-shadow, 0 4px 6px rgba(0, 0, 0, .1))}.panel::-webkit-scrollbar{width:8px}.panel::-webkit-scrollbar-thumb{border-radius:10px;background-color:var(--ui-select-scrollbar-color, var(--b2, #d9e2ff))}.panel::-webkit-scrollbar-thumb:hover{background-color:var(--ui-select-scrollbar-hover-color, var(--b4, #b5c6f9))}.panel::-webkit-scrollbar-track{border-left:1px solid var(--b1, #e7ecff);background-color:var(--ui-select-panel-background, var(--b0, #f0f3ff))}.panel-message{display:block;padding:.75rem;color:var(--ui-select-message-color, var(--c7, #707070));font-size:var(--ui-select-font-size, 14px)}.options{margin:0;padding:0;list-style:none}[role=option]{padding:var(--ui-select-option-padding, 10px 14px);color:var(--ui-select-option-color, var(--c9, #404040));font-size:var(--ui-select-font-size, 14px);cursor:pointer;transition:background-color .2s}[role=option]:hover,[role=option].active{background-color:var(--ui-select-option-active-background, var(--b1, #e7ecff))}[role=option][aria-selected=true]{font-weight:var(--ui-select-option-selected-font-weight, 600)}[role=option][aria-disabled=true]{cursor:not-allowed;opacity:.5}@media(prefers-reduced-motion:reduce){.arrow,[role=option]{transition:none}}\n"],
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
	type: UiSelect,
	decorators: [{
		type: Component,
		args: [{
			imports: [UiField],
			selector: "ui-select",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: { "[attr.id]": "null" },
			template: "<ui-field\n  [id]=\"id()\"\n  [label]=\"label()\"\n  [hint]=\"hint()\"\n  [required]=\"required()\"\n  [errors]=\"errors()\"\n  [showErrors]=\"showErrors()\"\n>\n  <div class=\"control\">\n    <button\n      class=\"trigger\"\n      type=\"button\"\n      role=\"combobox\"\n      aria-haspopup=\"listbox\"\n      [id]=\"id()\"\n      [disabled]=\"disabled()\"\n      [attr.aria-expanded]=\"isOpen()\"\n      [attr.aria-controls]=\"listboxId()\"\n      [attr.aria-activedescendant]=\"activeDescendant()\"\n      [attr.aria-invalid]=\"showErrors()\"\n      [attr.aria-required]=\"required()\"\n      [attr.aria-readonly]=\"readonly() || null\"\n      [attr.aria-describedby]=\"describedBy()\"\n      (click)=\"toggle()\"\n      (keydown)=\"handleKeydown($event)\"\n      (blur)=\"handleBlur()\"\n    >\n      <span class=\"trigger-text\" [class.placeholder]=\"!selectedOption()\">{{ displayText() }}</span>\n      <svg class=\"arrow\" [class.rotate]=\"isOpen()\" width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n        <path d=\"M3 6l5 5 5-5\" />\n      </svg>\n    </button>\n\n    @if (isOpen()) {\n      <div class=\"panel\">\n        @if (options().length === 0) {\n          <span class=\"panel-message\" role=\"status\">{{ emptyText() }}</span>\n        } @else {\n          <ul class=\"options\" role=\"listbox\" [id]=\"listboxId()\" [attr.aria-label]=\"label()\">\n            @for (option of options(); track option.value; let i = $index) {\n              <li\n                role=\"option\"\n                [id]=\"optionId(i)\"\n                [class.active]=\"i === activeIndex()\"\n                [attr.aria-selected]=\"option.value === value()\"\n                [attr.aria-disabled]=\"option.disabled || null\"\n                (mousedown)=\"$event.preventDefault()\"\n                (click)=\"select(option)\"\n              >\n                {{ option.label }}\n              </li>\n            }\n          </ul>\n        }\n      </div>\n    }\n  </div>\n</ui-field>\n",
			styles: [":host{display:block;width:100%}.control{position:relative}.trigger{box-sizing:border-box;width:var(--ui-input-width, 100%);min-width:0;height:var(--ui-input-height, 40px);padding:var(--ui-input-padding, 8px 12px);color:var(--ui-input-color, var(--c9, #202124));background-color:var(--ui-input-background, var(--b-white, #fff));border:var(--ui-input-border, 1px solid var(--b3, #767676));border-radius:var(--ui-input-border-radius, 10px);font-family:var(--ui-input-font-family, inherit);font-size:var(--ui-input-font-size, 14px)}.trigger::placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666));opacity:1}.trigger:hover:not(:disabled){border-color:var(--ui-input-hover-border-color, var(--b6, #4d4d4d))}.trigger:focus-visible{outline:2px solid var(--ui-input-focus-color, var(--b4, #1769aa));outline-offset:2px}.trigger[aria-invalid=true]{border-color:var(--ui-input-error-color, var(--erro, #b3261e));background-color:var(--ui-input-error-background, var(--bg-erro, transparent));outline:var(--ui-input-error-color, var(--erro, #b3261e))}.trigger[aria-invalid=true]:focus-visible{outline:2px solid var(--ui-input-error-color, var(--erro, #b3261e));outline-offset:2px}.trigger:disabled{color:var(--ui-input-disabled-color, var(--c7, #595959));background-color:var(--ui-input-disabled-background, var(--c2, #f2f2f2));cursor:not-allowed}.trigger[readonly]{background-color:var(--ui-input-readonly-background, var(--c1, #f7f7f7))}.trigger{display:flex;align-items:center;justify-content:space-between;gap:8px;width:var(--ui-select-width, var(--ui-input-width, 100%));background-color:var(--ui-select-background, var(--ui-input-background, var(--b0, #f0f3ff)));text-align:left;cursor:pointer}.trigger:hover:not(:disabled){background-color:var(--ui-select-hover-background, var(--b1, #e7ecff))}.trigger-text{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.trigger-text.placeholder{color:var(--ui-input-placeholder-color, var(--c7, #666))}.arrow{flex-shrink:0;color:var(--ui-select-arrow-color, var(--c8, #595959));transition:transform .3s ease}.arrow.rotate{transform:rotate(180deg)}.panel{position:absolute;top:100%;right:0;left:0;z-index:var(--ui-select-z-index, 1000);margin-top:var(--ui-select-panel-margin-top, 4px);max-height:var(--ui-select-max-height, 280px);overflow-y:auto;padding:var(--ui-select-panel-padding, 0);border:var(--ui-select-panel-border, 1px solid var(--b1, #e7ecff));border-radius:var(--ui-select-panel-border-radius, 8px);background-color:var(--ui-select-panel-background, var(--b0, #f0f3ff));box-shadow:var(--ui-select-panel-shadow, 0 4px 6px rgba(0, 0, 0, .1))}.panel::-webkit-scrollbar{width:8px}.panel::-webkit-scrollbar-thumb{border-radius:10px;background-color:var(--ui-select-scrollbar-color, var(--b2, #d9e2ff))}.panel::-webkit-scrollbar-thumb:hover{background-color:var(--ui-select-scrollbar-hover-color, var(--b4, #b5c6f9))}.panel::-webkit-scrollbar-track{border-left:1px solid var(--b1, #e7ecff);background-color:var(--ui-select-panel-background, var(--b0, #f0f3ff))}.panel-message{display:block;padding:.75rem;color:var(--ui-select-message-color, var(--c7, #707070));font-size:var(--ui-select-font-size, 14px)}.options{margin:0;padding:0;list-style:none}[role=option]{padding:var(--ui-select-option-padding, 10px 14px);color:var(--ui-select-option-color, var(--c9, #404040));font-size:var(--ui-select-font-size, 14px);cursor:pointer;transition:background-color .2s}[role=option]:hover,[role=option].active{background-color:var(--ui-select-option-active-background, var(--b1, #e7ecff))}[role=option][aria-selected=true]{font-weight:var(--ui-select-option-selected-font-weight, 600)}[role=option][aria-disabled=true]{cursor:not-allowed;opacity:.5}@media(prefers-reduced-motion:reduce){.arrow,[role=option]{transition:none}}\n"]
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
		emptyText: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "emptyText",
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
		selectionChange: [{
			type: i0.Output,
			args: ["selectionChange"]
		}]
	}
});
var UiBreadcrumb = class UiBreadcrumb {
	router = inject(Router);
	label = input("Navegação estrutural", ...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	separator = input("/", ...ngDevMode ? [{ debugName: "separator" }] : /* istanbul ignore next */ []);
	navigationEnd = toSignal(this.router.events.pipe(filter((event) => event instanceof NavigationEnd)));
	breadcrumbs = computed(() => {
		this.navigationEnd();
		return this.buildBreadcrumbs(this.router.routerState.root);
	}, ...ngDevMode ? [{ debugName: "breadcrumbs" }] : /* istanbul ignore next */ []);
	buildBreadcrumbs(route, url = "", breadcrumbs = []) {
		const child = route.firstChild;
		if (!child) return breadcrumbs;
		const routeURL = child.snapshot.url.map((s) => s.path).join("/");
		let fullURL = url;
		if (routeURL) fullURL = url ? `${url}/${routeURL}` : routeURL;
		const label = child.snapshot.data["breadcrumb"];
		if (label && !breadcrumbs.some((b) => b.url === `/${fullURL}`)) breadcrumbs.push({
			label,
			url: `/${fullURL}`
		});
		return this.buildBreadcrumbs(child, fullURL, breadcrumbs);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiBreadcrumb,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiBreadcrumb,
		isStandalone: true,
		selector: "ui-breadcrumb",
		inputs: {
			label: {
				classPropertyName: "label",
				publicName: "label",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			separator: {
				classPropertyName: "separator",
				publicName: "separator",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		ngImport: i0,
		template: "<nav class=\"breadcrumb\" [attr.aria-label]=\"label()\">\n  <ol class=\"breadcrumb-list\">\n    @for (item of breadcrumbs(); track item.url; let last = $last) {\n      <li class=\"breadcrumb-item\">\n        @if (last) {\n          <span class=\"breadcrumb-current\" aria-current=\"page\">{{ item.label }}</span>\n        } @else {\n          <a class=\"breadcrumb-link\" [routerLink]=\"item.url\">{{ item.label }}</a>\n          <span class=\"breadcrumb-separator\" aria-hidden=\"true\">{{ separator() }}</span>\n        }\n      </li>\n    }\n  </ol>\n</nav>\n",
		styles: [":host{display:block}.breadcrumb-list{display:flex;flex-wrap:wrap;align-items:center;gap:var(--ui-breadcrumb-gap, 8px);margin:0;padding:0;list-style:none;font-size:var(--ui-breadcrumb-font-size, 14px)}.breadcrumb-item{display:flex;align-items:center;gap:var(--ui-breadcrumb-gap, 8px)}.breadcrumb-link{color:var(--ui-breadcrumb-link-color, var(--c7, #707070));text-decoration:none}.breadcrumb-link:hover{color:var(--ui-breadcrumb-link-hover-color, var(--b10, #335cd6));text-decoration:underline}.breadcrumb-link:focus-visible{border-radius:2px;outline:2px solid var(--ui-breadcrumb-focus-color, var(--b10, #1769aa));outline-offset:2px}.breadcrumb-current{color:var(--ui-breadcrumb-current-color, var(--c9, #404040));font-weight:var(--ui-breadcrumb-current-font-weight, 600)}.breadcrumb-separator{color:var(--ui-breadcrumb-separator-color, var(--c5, #b2b2b2))}\n"],
		dependencies: [{
			kind: "directive",
			type: RouterLink,
			selector: "[routerLink]",
			inputs: [
				"target",
				"queryParams",
				"fragment",
				"queryParamsHandling",
				"state",
				"info",
				"relativeTo",
				"preserveFragment",
				"skipLocationChange",
				"replaceUrl",
				"browserUrl",
				"routerLink"
			]
		}],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiBreadcrumb,
	decorators: [{
		type: Component,
		args: [{
			imports: [RouterLink],
			selector: "ui-breadcrumb",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<nav class=\"breadcrumb\" [attr.aria-label]=\"label()\">\n  <ol class=\"breadcrumb-list\">\n    @for (item of breadcrumbs(); track item.url; let last = $last) {\n      <li class=\"breadcrumb-item\">\n        @if (last) {\n          <span class=\"breadcrumb-current\" aria-current=\"page\">{{ item.label }}</span>\n        } @else {\n          <a class=\"breadcrumb-link\" [routerLink]=\"item.url\">{{ item.label }}</a>\n          <span class=\"breadcrumb-separator\" aria-hidden=\"true\">{{ separator() }}</span>\n        }\n      </li>\n    }\n  </ol>\n</nav>\n",
			styles: [":host{display:block}.breadcrumb-list{display:flex;flex-wrap:wrap;align-items:center;gap:var(--ui-breadcrumb-gap, 8px);margin:0;padding:0;list-style:none;font-size:var(--ui-breadcrumb-font-size, 14px)}.breadcrumb-item{display:flex;align-items:center;gap:var(--ui-breadcrumb-gap, 8px)}.breadcrumb-link{color:var(--ui-breadcrumb-link-color, var(--c7, #707070));text-decoration:none}.breadcrumb-link:hover{color:var(--ui-breadcrumb-link-hover-color, var(--b10, #335cd6));text-decoration:underline}.breadcrumb-link:focus-visible{border-radius:2px;outline:2px solid var(--ui-breadcrumb-focus-color, var(--b10, #1769aa));outline-offset:2px}.breadcrumb-current{color:var(--ui-breadcrumb-current-color, var(--c9, #404040));font-weight:var(--ui-breadcrumb-current-font-weight, 600)}.breadcrumb-separator{color:var(--ui-breadcrumb-separator-color, var(--c5, #b2b2b2))}\n"]
		}]
	}],
	propDecorators: {
		label: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "label",
				required: false
			}]
		}],
		separator: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "separator",
				required: false
			}]
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
		styles: [":host{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;height:var(--ui-button-height, 40px);padding:var(--ui-button-padding, 0 20px);border:var(--ui-button-border-width, 1px) solid transparent;border-radius:var(--ui-button-border-radius, 10px);font-family:var(--ui-button-font-family, inherit);font-size:var(--ui-button-font-size, 14px);font-weight:var(--ui-button-font-weight, 600);line-height:1;text-decoration:none;cursor:pointer;transition:background-color .12s ease,border-color .12s ease,color .12s ease}:host(.ui-button-primary){background:var(--ui-button-primary-background, var(--b10, #335cd6));color:var(--ui-button-primary-color, #fff)}:host(.ui-button-primary):hover:not(:disabled){background:var(--ui-button-primary-hover-background, var(--b11, #213b89))}:host(.ui-button-secondary){border-color:var(--ui-button-secondary-border-color, var(--b4, #b5c6f9));background:var(--ui-button-secondary-background, var(--b-white, #fff));color:var(--ui-button-secondary-color, var(--b10, #335cd6))}:host(.ui-button-secondary):hover:not(:disabled){background:var(--ui-button-secondary-hover-background, var(--b1, #e7ecff))}:host(.ui-button-ghost){background:transparent;color:var(--ui-button-ghost-color, var(--b10, #335cd6))}:host(.ui-button-ghost):hover:not(:disabled){background:var(--ui-button-ghost-hover-background, var(--b1, #e7ecff))}:host(.ui-button-sm){height:var(--ui-button-height-sm, 32px);padding:var(--ui-button-padding-sm, 0 12px);font-size:var(--ui-button-font-size-sm, 13px)}:host(.ui-button-lg){height:var(--ui-button-height-lg, 48px);padding:var(--ui-button-padding-lg, 0 28px);font-size:var(--ui-button-font-size-lg, 16px)}:host(:focus-visible){outline:2px solid var(--ui-button-focus-color, var(--b10, #1769aa));outline-offset:2px}:host(:disabled),:host([aria-disabled=true]){cursor:not-allowed;opacity:var(--ui-button-disabled-opacity, .55)}:host([aria-disabled=true]){pointer-events:none}@media(prefers-reduced-motion:reduce){:host{transition:none}}\n"],
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
			styles: [":host{display:inline-flex;align-items:center;justify-content:center;gap:8px;box-sizing:border-box;height:var(--ui-button-height, 40px);padding:var(--ui-button-padding, 0 20px);border:var(--ui-button-border-width, 1px) solid transparent;border-radius:var(--ui-button-border-radius, 10px);font-family:var(--ui-button-font-family, inherit);font-size:var(--ui-button-font-size, 14px);font-weight:var(--ui-button-font-weight, 600);line-height:1;text-decoration:none;cursor:pointer;transition:background-color .12s ease,border-color .12s ease,color .12s ease}:host(.ui-button-primary){background:var(--ui-button-primary-background, var(--b10, #335cd6));color:var(--ui-button-primary-color, #fff)}:host(.ui-button-primary):hover:not(:disabled){background:var(--ui-button-primary-hover-background, var(--b11, #213b89))}:host(.ui-button-secondary){border-color:var(--ui-button-secondary-border-color, var(--b4, #b5c6f9));background:var(--ui-button-secondary-background, var(--b-white, #fff));color:var(--ui-button-secondary-color, var(--b10, #335cd6))}:host(.ui-button-secondary):hover:not(:disabled){background:var(--ui-button-secondary-hover-background, var(--b1, #e7ecff))}:host(.ui-button-ghost){background:transparent;color:var(--ui-button-ghost-color, var(--b10, #335cd6))}:host(.ui-button-ghost):hover:not(:disabled){background:var(--ui-button-ghost-hover-background, var(--b1, #e7ecff))}:host(.ui-button-sm){height:var(--ui-button-height-sm, 32px);padding:var(--ui-button-padding-sm, 0 12px);font-size:var(--ui-button-font-size-sm, 13px)}:host(.ui-button-lg){height:var(--ui-button-height-lg, 48px);padding:var(--ui-button-padding-lg, 0 28px);font-size:var(--ui-button-font-size-lg, 16px)}:host(:focus-visible){outline:2px solid var(--ui-button-focus-color, var(--b10, #1769aa));outline-offset:2px}:host(:disabled),:host([aria-disabled=true]){cursor:not-allowed;opacity:var(--ui-button-disabled-opacity, .55)}:host([aria-disabled=true]){pointer-events:none}@media(prefers-reduced-motion:reduce){:host{transition:none}}\n"]
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
		styles: [":host{display:inline-block}.btn-copy{display:inline-flex;align-items:center;justify-content:center;width:var(--ui-copy-button-size, 28px);height:var(--ui-copy-button-size, 28px);padding:0;border:var(--ui-copy-button-border, 1px solid var(--b3, #c6d4fe));border-radius:var(--ui-copy-button-border-radius, 6px);background:var(--ui-copy-button-background, var(--b-white, #fff));color:var(--ui-copy-button-color, var(--c8, #595959));cursor:pointer}.btn-copy:hover{background:var(--ui-copy-button-hover-background, var(--b1, #e7ecff))}.btn-copy:focus-visible{outline:2px solid var(--ui-copy-button-focus-color, var(--ui-input-focus-color, var(--b10, #1769aa)));outline-offset:2px}.btn-copy.copied{color:var(--ui-copy-button-success-color, #12a454)}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n"],
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
			styles: [":host{display:inline-block}.btn-copy{display:inline-flex;align-items:center;justify-content:center;width:var(--ui-copy-button-size, 28px);height:var(--ui-copy-button-size, 28px);padding:0;border:var(--ui-copy-button-border, 1px solid var(--b3, #c6d4fe));border-radius:var(--ui-copy-button-border-radius, 6px);background:var(--ui-copy-button-background, var(--b-white, #fff));color:var(--ui-copy-button-color, var(--c8, #595959));cursor:pointer}.btn-copy:hover{background:var(--ui-copy-button-hover-background, var(--b1, #e7ecff))}.btn-copy:focus-visible{outline:2px solid var(--ui-copy-button-focus-color, var(--ui-input-focus-color, var(--b10, #1769aa)));outline-offset:2px}.btn-copy.copied{color:var(--ui-copy-button-success-color, #12a454)}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}\n"]
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
let nextId$2 = 0;
var UiMenu = class UiMenu {
	items = input.required(...ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []);
	label = input("Ações", ...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	itemSelect = output();
	isOpen = signal(false, ...ngDevMode ? [{ debugName: "isOpen" }] : /* istanbul ignore next */ []);
	position = signal({
		top: 0,
		right: 0
	}, ...ngDevMode ? [{ debugName: "position" }] : /* istanbul ignore next */ []);
	menuId = `ui-menu-${nextId$2++}`;
	host = inject(ElementRef);
	injector = inject(Injector);
	trigger = viewChild.required("trigger", ...ngDevMode ? [{ debugName: "trigger" }] : /* istanbul ignore next */ []);
	panel = viewChild("panel", ...ngDevMode ? [{ debugName: "panel" }] : /* istanbul ignore next */ []);
	itemRefs = viewChildren("menuItem", ...ngDevMode ? [{ debugName: "itemRefs" }] : /* istanbul ignore next */ []);
	closeOnScroll = () => this.close();
	constructor() {
		inject(DestroyRef).onDestroy(() => this.removeScrollListener());
	}
	toggle() {
		if (this.isOpen()) this.close(true);
		else this.open("first");
	}
	open(focus = "first") {
		if (this.items().length === 0) return;
		const rect = this.trigger().nativeElement.getBoundingClientRect();
		this.position.set({
			top: rect.bottom + 4,
			right: window.innerWidth - rect.right
		});
		this.isOpen.set(true);
		document.addEventListener("scroll", this.closeOnScroll, true);
		afterNextRender(() => {
			this.flipIfNeeded(rect);
			this.focusItem(focus === "first" ? 0 : this.itemRefs().length - 1);
		}, { injector: this.injector });
	}
	close(returnFocus = false) {
		if (!this.isOpen()) return;
		this.isOpen.set(false);
		this.removeScrollListener();
		if (returnFocus) this.trigger().nativeElement.focus();
	}
	choose(item) {
		if (item.disabled) return;
		this.close(true);
		this.itemSelect.emit(item);
	}
	handleTriggerKeydown(event) {
		if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			event.preventDefault();
			this.open(event.key === "ArrowDown" ? "first" : "last");
		}
	}
	handleMenuKeydown(event) {
		const items = this.itemRefs().map((ref) => ref.nativeElement);
		const current = items.indexOf(document.activeElement);
		switch (event.key) {
			case "ArrowDown":
				event.preventDefault();
				this.focusItem((current + 1) % items.length);
				break;
			case "ArrowUp":
				event.preventDefault();
				this.focusItem((current - 1 + items.length) % items.length);
				break;
			case "Home":
				event.preventDefault();
				this.focusItem(0);
				break;
			case "End":
				event.preventDefault();
				this.focusItem(items.length - 1);
				break;
			case "Escape":
				event.preventDefault();
				this.close(true);
				break;
			case "Tab": this.close();
		}
	}
	handleDocumentClick(event) {
		if (this.isOpen() && !this.host.nativeElement.contains(event.target)) this.close();
	}
	focusItem(index) {
		this.itemRefs()[index]?.nativeElement.focus();
	}
	flipIfNeeded(trigger) {
		const panel = this.panel()?.nativeElement;
		if (!panel) return;
		const height = panel.getBoundingClientRect().height;
		if (trigger.bottom + 4 + height > window.innerHeight && trigger.top - 4 - height > 0) this.position.update((pos) => ({
			...pos,
			top: trigger.top - 4 - height
		}));
	}
	removeScrollListener() {
		document.removeEventListener("scroll", this.closeOnScroll, true);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiMenu,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiMenu,
		isStandalone: true,
		selector: "ui-menu",
		inputs: {
			items: {
				classPropertyName: "items",
				publicName: "items",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			label: {
				classPropertyName: "label",
				publicName: "label",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { itemSelect: "itemSelect" },
		host: { listeners: {
			"document:click": "handleDocumentClick($event)",
			"window:resize": "close()"
		} },
		viewQueries: [
			{
				propertyName: "trigger",
				first: true,
				predicate: ["trigger"],
				descendants: true,
				isSignal: true
			},
			{
				propertyName: "panel",
				first: true,
				predicate: ["panel"],
				descendants: true,
				isSignal: true
			},
			{
				propertyName: "itemRefs",
				predicate: ["menuItem"],
				descendants: true,
				isSignal: true
			}
		],
		ngImport: i0,
		template: "<button\n  #trigger\n  class=\"menu-trigger\"\n  type=\"button\"\n  aria-haspopup=\"menu\"\n  [attr.aria-expanded]=\"isOpen()\"\n  [attr.aria-controls]=\"isOpen() ? menuId : null\"\n  [attr.aria-label]=\"label()\"\n  (click)=\"toggle()\"\n  (keydown)=\"handleTriggerKeydown($event)\"\n>\n  <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n    <circle cx=\"8\" cy=\"3\" r=\"1.5\" />\n    <circle cx=\"8\" cy=\"8\" r=\"1.5\" />\n    <circle cx=\"8\" cy=\"13\" r=\"1.5\" />\n  </svg>\n</button>\n\n@if (isOpen()) {\n  <ul\n    #panel\n    class=\"menu-panel\"\n    role=\"menu\"\n    [id]=\"menuId\"\n    [attr.aria-label]=\"label()\"\n    [style.top.px]=\"position().top\"\n    [style.right.px]=\"position().right\"\n    (keydown)=\"handleMenuKeydown($event)\"\n  >\n    @for (item of items(); track item.id) {\n      <li role=\"none\">\n        <button\n          #menuItem\n          class=\"menu-item\"\n          type=\"button\"\n          role=\"menuitem\"\n          tabindex=\"-1\"\n          [class.danger]=\"item.danger\"\n          [attr.aria-disabled]=\"item.disabled || null\"\n          (click)=\"choose(item)\"\n        >\n          {{ item.label }}\n        </button>\n      </li>\n    }\n  </ul>\n}\n",
		styles: [":host{display:inline-block}.menu-trigger{display:grid;place-items:center;width:var(--ui-menu-trigger-size, 32px);height:var(--ui-menu-trigger-size, 32px);padding:0;border:var(--ui-menu-trigger-border, 0);border-radius:var(--ui-menu-trigger-border-radius, 8px);background:var(--ui-menu-trigger-background, transparent);color:var(--ui-menu-trigger-color, var(--c8, #595959));cursor:pointer}.menu-trigger:hover,.menu-trigger[aria-expanded=true]{background:var(--ui-menu-trigger-hover-background, var(--b1, #e7ecff))}.menu-trigger:focus-visible{outline:2px solid var(--ui-menu-focus-color, var(--b10, #1769aa));outline-offset:2px}.menu-panel{position:fixed;z-index:var(--ui-menu-z-index, 1000);box-sizing:border-box;min-width:var(--ui-menu-min-width, 160px);margin:0;padding:var(--ui-menu-padding, 4px);list-style:none;border:var(--ui-menu-border, 1px solid var(--b2, #d9e2ff));border-radius:var(--ui-menu-border-radius, 10px);background:var(--ui-menu-background, var(--b-white, #fff));box-shadow:var(--ui-menu-shadow, 0 4px 12px rgba(0, 0, 0, .12))}.menu-item{display:block;width:100%;padding:var(--ui-menu-item-padding, 8px 12px);border:0;border-radius:var(--ui-menu-item-border-radius, 6px);background:transparent;color:var(--ui-menu-item-color, var(--c9, #404040));font-family:inherit;font-size:var(--ui-menu-font-size, 14px);text-align:left;white-space:nowrap;cursor:pointer}.menu-item:hover,.menu-item:focus-visible{background:var(--ui-menu-item-hover-background, var(--b1, #e7ecff));outline:none}.menu-item.danger{color:var(--ui-menu-item-danger-color, #c0392b)}.menu-item[aria-disabled=true]{cursor:not-allowed;opacity:var(--ui-menu-item-disabled-opacity, .45)}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiMenu,
	decorators: [{
		type: Component,
		args: [{
			selector: "ui-menu",
			imports: [],
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				"(document:click)": "handleDocumentClick($event)",
				"(window:resize)": "close()"
			},
			template: "<button\n  #trigger\n  class=\"menu-trigger\"\n  type=\"button\"\n  aria-haspopup=\"menu\"\n  [attr.aria-expanded]=\"isOpen()\"\n  [attr.aria-controls]=\"isOpen() ? menuId : null\"\n  [attr.aria-label]=\"label()\"\n  (click)=\"toggle()\"\n  (keydown)=\"handleTriggerKeydown($event)\"\n>\n  <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n    <circle cx=\"8\" cy=\"3\" r=\"1.5\" />\n    <circle cx=\"8\" cy=\"8\" r=\"1.5\" />\n    <circle cx=\"8\" cy=\"13\" r=\"1.5\" />\n  </svg>\n</button>\n\n@if (isOpen()) {\n  <ul\n    #panel\n    class=\"menu-panel\"\n    role=\"menu\"\n    [id]=\"menuId\"\n    [attr.aria-label]=\"label()\"\n    [style.top.px]=\"position().top\"\n    [style.right.px]=\"position().right\"\n    (keydown)=\"handleMenuKeydown($event)\"\n  >\n    @for (item of items(); track item.id) {\n      <li role=\"none\">\n        <button\n          #menuItem\n          class=\"menu-item\"\n          type=\"button\"\n          role=\"menuitem\"\n          tabindex=\"-1\"\n          [class.danger]=\"item.danger\"\n          [attr.aria-disabled]=\"item.disabled || null\"\n          (click)=\"choose(item)\"\n        >\n          {{ item.label }}\n        </button>\n      </li>\n    }\n  </ul>\n}\n",
			styles: [":host{display:inline-block}.menu-trigger{display:grid;place-items:center;width:var(--ui-menu-trigger-size, 32px);height:var(--ui-menu-trigger-size, 32px);padding:0;border:var(--ui-menu-trigger-border, 0);border-radius:var(--ui-menu-trigger-border-radius, 8px);background:var(--ui-menu-trigger-background, transparent);color:var(--ui-menu-trigger-color, var(--c8, #595959));cursor:pointer}.menu-trigger:hover,.menu-trigger[aria-expanded=true]{background:var(--ui-menu-trigger-hover-background, var(--b1, #e7ecff))}.menu-trigger:focus-visible{outline:2px solid var(--ui-menu-focus-color, var(--b10, #1769aa));outline-offset:2px}.menu-panel{position:fixed;z-index:var(--ui-menu-z-index, 1000);box-sizing:border-box;min-width:var(--ui-menu-min-width, 160px);margin:0;padding:var(--ui-menu-padding, 4px);list-style:none;border:var(--ui-menu-border, 1px solid var(--b2, #d9e2ff));border-radius:var(--ui-menu-border-radius, 10px);background:var(--ui-menu-background, var(--b-white, #fff));box-shadow:var(--ui-menu-shadow, 0 4px 12px rgba(0, 0, 0, .12))}.menu-item{display:block;width:100%;padding:var(--ui-menu-item-padding, 8px 12px);border:0;border-radius:var(--ui-menu-item-border-radius, 6px);background:transparent;color:var(--ui-menu-item-color, var(--c9, #404040));font-family:inherit;font-size:var(--ui-menu-font-size, 14px);text-align:left;white-space:nowrap;cursor:pointer}.menu-item:hover,.menu-item:focus-visible{background:var(--ui-menu-item-hover-background, var(--b1, #e7ecff));outline:none}.menu-item.danger{color:var(--ui-menu-item-danger-color, #c0392b)}.menu-item[aria-disabled=true]{cursor:not-allowed;opacity:var(--ui-menu-item-disabled-opacity, .45)}\n"]
		}]
	}],
	ctorParameters: () => [],
	propDecorators: {
		items: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "items",
				required: true
			}]
		}],
		label: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "label",
				required: false
			}]
		}],
		itemSelect: [{
			type: i0.Output,
			args: ["itemSelect"]
		}],
		trigger: [{
			type: i0.ViewChild,
			args: ["trigger", { isSignal: true }]
		}],
		panel: [{
			type: i0.ViewChild,
			args: ["panel", { isSignal: true }]
		}],
		itemRefs: [{
			type: i0.ViewChildren,
			args: ["menuItem", { isSignal: true }]
		}]
	}
});
var UiPagination = class UiPagination {
	total = input.required({
		...ngDevMode ? { debugName: "total" } : /* istanbul ignore next */ {},
		transform: (value) => typeof value === "string" ? parseInt(value, 10) || 0 : value
	});
	currentPage = input.required(...ngDevMode ? [{ debugName: "currentPage" }] : /* istanbul ignore next */ []);
	pageSize = input.required(...ngDevMode ? [{ debugName: "pageSize" }] : /* istanbul ignore next */ []);
	maxVisible = input(4, ...ngDevMode ? [{ debugName: "maxVisible" }] : /* istanbul ignore next */ []);
	label = input("Paginação", ...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	previousLabel = input("Página anterior", ...ngDevMode ? [{ debugName: "previousLabel" }] : /* istanbul ignore next */ []);
	nextLabel = input("Próxima página", ...ngDevMode ? [{ debugName: "nextLabel" }] : /* istanbul ignore next */ []);
	pageLabel = input("Página", ...ngDevMode ? [{ debugName: "pageLabel" }] : /* istanbul ignore next */ []);
	pageChange = output();
	displayPage = computed(() => this.currentPage() + 1, ...ngDevMode ? [{ debugName: "displayPage" }] : /* istanbul ignore next */ []);
	totalPages = computed(() => {
		const size = this.pageSize();
		if (size <= 0) return 1;
		return Math.max(Math.ceil(this.total() / size), 1);
	}, ...ngDevMode ? [{ debugName: "totalPages" }] : /* istanbul ignore next */ []);
	pages = computed(() => {
		const total = this.totalPages();
		const current = this.displayPage();
		const maxVisible = Math.max(this.maxVisible(), 1);
		if (total <= maxVisible) return Array.from({ length: total }, (_, i) => i + 1);
		let start = Math.max(current - Math.floor(maxVisible / 2), 1);
		let end = start + maxVisible - 1;
		if (end > total) {
			end = total;
			start = Math.max(end - maxVisible + 1, 1);
		}
		return Array.from({ length: end - start + 1 }, (_, i) => start + i);
	}, ...ngDevMode ? [{ debugName: "pages" }] : /* istanbul ignore next */ []);
	goTo(page) {
		if (page < 1 || page > this.totalPages() || page === this.displayPage()) return;
		this.pageChange.emit(page - 1);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiPagination,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiPagination,
		isStandalone: true,
		selector: "ui-pagination",
		inputs: {
			total: {
				classPropertyName: "total",
				publicName: "total",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			currentPage: {
				classPropertyName: "currentPage",
				publicName: "currentPage",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			pageSize: {
				classPropertyName: "pageSize",
				publicName: "pageSize",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			maxVisible: {
				classPropertyName: "maxVisible",
				publicName: "maxVisible",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			label: {
				classPropertyName: "label",
				publicName: "label",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			previousLabel: {
				classPropertyName: "previousLabel",
				publicName: "previousLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			nextLabel: {
				classPropertyName: "nextLabel",
				publicName: "nextLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			pageLabel: {
				classPropertyName: "pageLabel",
				publicName: "pageLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { pageChange: "pageChange" },
		ngImport: i0,
		template: "<nav class=\"pagination\" [attr.aria-label]=\"label()\">\n  <ul class=\"pagination-list\">\n    @if (totalPages() > 1) {\n      <li>\n        <button\n          type=\"button\"\n          class=\"pagination-button\"\n          [attr.aria-label]=\"previousLabel()\"\n          [disabled]=\"displayPage() === 1\"\n          (click)=\"goTo(displayPage() - 1)\"\n        >\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n            <path d=\"M10 3L5 8l5 5\" />\n          </svg>\n        </button>\n      </li>\n    }\n    @for (page of pages(); track page) {\n      <li>\n        <button\n          type=\"button\"\n          class=\"pagination-button\"\n          [class.active]=\"page === displayPage()\"\n          [attr.aria-current]=\"page === displayPage() ? 'page' : null\"\n          [attr.aria-label]=\"pageLabel() + ' ' + page\"\n          (click)=\"goTo(page)\"\n        >\n          {{ page }}\n        </button>\n      </li>\n    }\n    @if (totalPages() > 1) {\n      <li>\n        <button\n          type=\"button\"\n          class=\"pagination-button\"\n          [attr.aria-label]=\"nextLabel()\"\n          [disabled]=\"displayPage() === totalPages()\"\n          (click)=\"goTo(displayPage() + 1)\"\n        >\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n            <path d=\"M6 3l5 5-5 5\" />\n          </svg>\n        </button>\n      </li>\n    }\n  </ul>\n</nav>\n",
		styles: [":host{display:block}.pagination-list{display:flex;flex-wrap:wrap;align-items:center;justify-content:var(--ui-pagination-justify, center);gap:var(--ui-pagination-gap, 6px);margin:0;padding:0;list-style:none}.pagination-button{display:grid;place-items:center;box-sizing:border-box;min-width:var(--ui-pagination-button-size, 32px);height:var(--ui-pagination-button-size, 32px);padding:0 8px;border:var(--ui-pagination-button-border, 1px solid var(--b1, #e7ecff));border-radius:var(--ui-pagination-button-border-radius, 8px);background-color:var(--ui-pagination-button-background, var(--b0, #f0f3ff));color:var(--ui-pagination-button-color, var(--c8, #595959));font-family:inherit;font-size:var(--ui-pagination-font-size, 14px);cursor:pointer;transition:background-color .12s ease,color .12s ease}.pagination-button:hover:not(:disabled):not(.active){background-color:var(--ui-pagination-button-hover-background, var(--b1, #e7ecff))}.pagination-button.active{border-color:var(--ui-pagination-active-background, var(--b10, #335cd6));background-color:var(--ui-pagination-active-background, var(--b10, #335cd6));color:var(--ui-pagination-active-color, #fff);font-weight:600}.pagination-button:focus-visible{outline:2px solid var(--ui-pagination-focus-color, var(--b10, #1769aa));outline-offset:2px}.pagination-button:disabled{cursor:not-allowed;opacity:var(--ui-pagination-disabled-opacity, .5)}@media(prefers-reduced-motion:reduce){.pagination-button{transition:none}}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiPagination,
	decorators: [{
		type: Component,
		args: [{
			imports: [],
			selector: "ui-pagination",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<nav class=\"pagination\" [attr.aria-label]=\"label()\">\n  <ul class=\"pagination-list\">\n    @if (totalPages() > 1) {\n      <li>\n        <button\n          type=\"button\"\n          class=\"pagination-button\"\n          [attr.aria-label]=\"previousLabel()\"\n          [disabled]=\"displayPage() === 1\"\n          (click)=\"goTo(displayPage() - 1)\"\n        >\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n            <path d=\"M10 3L5 8l5 5\" />\n          </svg>\n        </button>\n      </li>\n    }\n    @for (page of pages(); track page) {\n      <li>\n        <button\n          type=\"button\"\n          class=\"pagination-button\"\n          [class.active]=\"page === displayPage()\"\n          [attr.aria-current]=\"page === displayPage() ? 'page' : null\"\n          [attr.aria-label]=\"pageLabel() + ' ' + page\"\n          (click)=\"goTo(page)\"\n        >\n          {{ page }}\n        </button>\n      </li>\n    }\n    @if (totalPages() > 1) {\n      <li>\n        <button\n          type=\"button\"\n          class=\"pagination-button\"\n          [attr.aria-label]=\"nextLabel()\"\n          [disabled]=\"displayPage() === totalPages()\"\n          (click)=\"goTo(displayPage() + 1)\"\n        >\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n            <path d=\"M6 3l5 5-5 5\" />\n          </svg>\n        </button>\n      </li>\n    }\n  </ul>\n</nav>\n",
			styles: [":host{display:block}.pagination-list{display:flex;flex-wrap:wrap;align-items:center;justify-content:var(--ui-pagination-justify, center);gap:var(--ui-pagination-gap, 6px);margin:0;padding:0;list-style:none}.pagination-button{display:grid;place-items:center;box-sizing:border-box;min-width:var(--ui-pagination-button-size, 32px);height:var(--ui-pagination-button-size, 32px);padding:0 8px;border:var(--ui-pagination-button-border, 1px solid var(--b1, #e7ecff));border-radius:var(--ui-pagination-button-border-radius, 8px);background-color:var(--ui-pagination-button-background, var(--b0, #f0f3ff));color:var(--ui-pagination-button-color, var(--c8, #595959));font-family:inherit;font-size:var(--ui-pagination-font-size, 14px);cursor:pointer;transition:background-color .12s ease,color .12s ease}.pagination-button:hover:not(:disabled):not(.active){background-color:var(--ui-pagination-button-hover-background, var(--b1, #e7ecff))}.pagination-button.active{border-color:var(--ui-pagination-active-background, var(--b10, #335cd6));background-color:var(--ui-pagination-active-background, var(--b10, #335cd6));color:var(--ui-pagination-active-color, #fff);font-weight:600}.pagination-button:focus-visible{outline:2px solid var(--ui-pagination-focus-color, var(--b10, #1769aa));outline-offset:2px}.pagination-button:disabled{cursor:not-allowed;opacity:var(--ui-pagination-disabled-opacity, .5)}@media(prefers-reduced-motion:reduce){.pagination-button{transition:none}}\n"]
		}]
	}],
	propDecorators: {
		total: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "total",
				required: true
			}]
		}],
		currentPage: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "currentPage",
				required: true
			}]
		}],
		pageSize: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "pageSize",
				required: true
			}]
		}],
		maxVisible: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "maxVisible",
				required: false
			}]
		}],
		label: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "label",
				required: false
			}]
		}],
		previousLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "previousLabel",
				required: false
			}]
		}],
		nextLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "nextLabel",
				required: false
			}]
		}],
		pageLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "pageLabel",
				required: false
			}]
		}],
		pageChange: [{
			type: i0.Output,
			args: ["pageChange"]
		}]
	}
});
const THEME_KEY = "theme";
var UiThemeToggle = class UiThemeToggle {
	isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	label = input("Tema escuro", ...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	theme = signal(this.getInitialTheme(), ...ngDevMode ? [{ debugName: "theme" }] : /* istanbul ignore next */ []);
	isDark = computed(() => this.theme() === "dark", ...ngDevMode ? [{ debugName: "isDark" }] : /* istanbul ignore next */ []);
	constructor() {
		effect(() => {
			if (!this.isBrowser) return;
			const currentTheme = this.theme();
			document.documentElement.setAttribute("data-theme", currentTheme);
		});
		this.listenToSystemThemeChanges();
	}
	toggle() {
		this.theme.update((current) => current === "light" ? "dark" : "light");
		this.writeStorage(this.theme());
	}
	getInitialTheme() {
		if (!this.isBrowser) return "light";
		return this.readStorage() ?? this.getSystemPreference();
	}
	getSystemPreference() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	listenToSystemThemeChanges() {
		if (!this.isBrowser) return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const listener = (event) => {
			if (!this.readStorage()) this.theme.set(event.matches ? "dark" : "light");
		};
		media.addEventListener("change", listener);
		inject(DestroyRef).onDestroy(() => media.removeEventListener("change", listener));
	}
	readStorage() {
		try {
			const value = localStorage.getItem(THEME_KEY);
			return value === "light" || value === "dark" ? value : null;
		} catch {
			return null;
		}
	}
	writeStorage(theme) {
		try {
			localStorage.setItem(THEME_KEY, theme);
		} catch {}
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiThemeToggle,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiThemeToggle,
		isStandalone: true,
		selector: "ui-theme-toggle",
		inputs: { label: {
			classPropertyName: "label",
			publicName: "label",
			isSignal: true,
			isRequired: false,
			transformFunction: null
		} },
		ngImport: i0,
		template: "<button\n  type=\"button\"\n  class=\"toggle\"\n  role=\"switch\"\n  [class.dark]=\"isDark()\"\n  [attr.aria-checked]=\"isDark()\"\n  [attr.aria-label]=\"label()\"\n  (click)=\"toggle()\"\n>\n  <span class=\"thumb\">\n    @if (isDark()) {\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n        <path d=\"M6.2 1.1a.6.6 0 0 1 .1.7A5.6 5.6 0 0 0 13.6 9.7a.6.6 0 0 1 .8.7A7 7 0 1 1 5.6 1a.6.6 0 0 1 .6.1Z\" />\n      </svg>\n    } @else {\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" aria-hidden=\"true\" focusable=\"false\">\n        <circle cx=\"8\" cy=\"8\" r=\"3\" />\n        <path d=\"M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06\" />\n      </svg>\n    }\n  </span>\n</button>\n",
		styles: [":host{display:inline-block}.toggle{--_thumb-size: var(--ui-theme-toggle-thumb-size, 26px);--_padding: var(--ui-theme-toggle-padding, 4px);position:relative;display:block;box-sizing:border-box;width:var(--ui-theme-toggle-width, 60px);height:calc(var(--_thumb-size) + var(--_padding) * 2);padding:var(--_padding);border:0;border-radius:999px;background-color:var(--ui-theme-toggle-background, var(--b2, #d9e2ff));cursor:pointer}.toggle:focus-visible{outline:2px solid var(--ui-theme-toggle-focus-color, var(--b10, #1769aa));outline-offset:2px}.thumb{display:grid;place-items:center;width:var(--_thumb-size);height:var(--_thumb-size);border-radius:50%;background-color:var(--ui-theme-toggle-thumb-background, var(--b-white, #f6f9ff));color:var(--ui-theme-toggle-icon-color, var(--c8, #595959));transition:transform var(--ui-theme-toggle-transition-duration, .4s)}.dark .thumb{transform:translate(calc(var(--ui-theme-toggle-width, 60px) - var(--_thumb-size) - var(--_padding) * 2))}@media(prefers-reduced-motion:reduce){.thumb{transition:none}}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiThemeToggle,
	decorators: [{
		type: Component,
		args: [{
			imports: [],
			selector: "ui-theme-toggle",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<button\n  type=\"button\"\n  class=\"toggle\"\n  role=\"switch\"\n  [class.dark]=\"isDark()\"\n  [attr.aria-checked]=\"isDark()\"\n  [attr.aria-label]=\"label()\"\n  (click)=\"toggle()\"\n>\n  <span class=\"thumb\">\n    @if (isDark()) {\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\">\n        <path d=\"M6.2 1.1a.6.6 0 0 1 .1.7A5.6 5.6 0 0 0 13.6 9.7a.6.6 0 0 1 .8.7A7 7 0 1 1 5.6 1a.6.6 0 0 1 .6.1Z\" />\n      </svg>\n    } @else {\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" aria-hidden=\"true\" focusable=\"false\">\n        <circle cx=\"8\" cy=\"8\" r=\"3\" />\n        <path d=\"M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06\" />\n      </svg>\n    }\n  </span>\n</button>\n",
			styles: [":host{display:inline-block}.toggle{--_thumb-size: var(--ui-theme-toggle-thumb-size, 26px);--_padding: var(--ui-theme-toggle-padding, 4px);position:relative;display:block;box-sizing:border-box;width:var(--ui-theme-toggle-width, 60px);height:calc(var(--_thumb-size) + var(--_padding) * 2);padding:var(--_padding);border:0;border-radius:999px;background-color:var(--ui-theme-toggle-background, var(--b2, #d9e2ff));cursor:pointer}.toggle:focus-visible{outline:2px solid var(--ui-theme-toggle-focus-color, var(--b10, #1769aa));outline-offset:2px}.thumb{display:grid;place-items:center;width:var(--_thumb-size);height:var(--_thumb-size);border-radius:50%;background-color:var(--ui-theme-toggle-thumb-background, var(--b-white, #f6f9ff));color:var(--ui-theme-toggle-icon-color, var(--c8, #595959));transition:transform var(--ui-theme-toggle-transition-duration, .4s)}.dark .thumb{transform:translate(calc(var(--ui-theme-toggle-width, 60px) - var(--_thumb-size) - var(--_padding) * 2))}@media(prefers-reduced-motion:reduce){.thumb{transition:none}}\n"]
		}]
	}],
	ctorParameters: () => [],
	propDecorators: { label: [{
		type: i0.Input,
		args: [{
			isSignal: true,
			alias: "label",
			required: false
		}]
	}] }
});
var UiModal = class UiModal {
	label = input("", ...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	labelledBy = input(null, ...ngDevMode ? [{ debugName: "labelledBy" }] : /* istanbul ignore next */ []);
	closeLabel = input("Fechar", ...ngDevMode ? [{ debugName: "closeLabel" }] : /* istanbul ignore next */ []);
	closeOnBackdrop = input(true, ...ngDevMode ? [{ debugName: "closeOnBackdrop" }] : /* istanbul ignore next */ []);
	close = output();
	dialog = viewChild.required("dialog", ...ngDevMode ? [{ debugName: "dialog" }] : /* istanbul ignore next */ []);
	constructor() {
		const document = inject(DOCUMENT);
		let previousFocus = null;
		afterNextRender(() => {
			previousFocus = document.activeElement;
			this.dialog().nativeElement.focus();
		});
		inject(DestroyRef).onDestroy(() => previousFocus?.focus?.());
	}
	handleBackdropClick() {
		if (this.closeOnBackdrop()) this.close.emit();
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiModal,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.2.0",
		version: "22.2.1",
		type: UiModal,
		isStandalone: true,
		selector: "ui-modal",
		inputs: {
			label: {
				classPropertyName: "label",
				publicName: "label",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			labelledBy: {
				classPropertyName: "labelledBy",
				publicName: "labelledBy",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			closeLabel: {
				classPropertyName: "closeLabel",
				publicName: "closeLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			closeOnBackdrop: {
				classPropertyName: "closeOnBackdrop",
				publicName: "closeOnBackdrop",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { close: "close" },
		host: { listeners: { "document:keydown.escape": "close.emit()" } },
		viewQueries: [{
			propertyName: "dialog",
			first: true,
			predicate: ["dialog"],
			descendants: true,
			isSignal: true
		}],
		ngImport: i0,
		template: "<div class=\"backdrop\" (click)=\"handleBackdropClick()\">\n  <div\n    #dialog\n    class=\"modal\"\n    role=\"dialog\"\n    aria-modal=\"true\"\n    tabindex=\"-1\"\n    [attr.aria-label]=\"label() || null\"\n    [attr.aria-labelledby]=\"labelledBy()\"\n    (click)=\"$event.stopPropagation()\"\n  >\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"modal-close\" [attr.aria-label]=\"closeLabel()\" (click)=\"close.emit()\">\n        <svg width=\"12\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\" focusable=\"false\">\n          <path d=\"M3 3l10 10M13 3L3 13\" />\n        </svg>\n      </button>\n    </div>\n    <ng-content />\n  </div>\n</div>\n",
		styles: [".backdrop{position:fixed;inset:0;z-index:var(--ui-modal-z-index, 999);display:grid;place-items:center;padding:16px;background-color:var(--ui-modal-backdrop, rgba(11, 11, 11, .56))}.modal{box-sizing:border-box;display:grid;width:var(--ui-modal-width, auto);max-width:min(var(--ui-modal-max-width, 650px),100%);max-height:min(var(--ui-modal-max-height, 680px),100%);overflow:auto;padding:var(--ui-modal-padding, 30px);border:var(--ui-modal-border, 0);border-radius:var(--ui-modal-border-radius, 20px);background-color:var(--ui-modal-background, var(--b2, #d9e2ff));color:var(--ui-modal-color, var(--c9, #404040));box-shadow:var(--ui-modal-shadow, none)}.modal:focus{outline:none}.modal-header{display:flex;justify-content:flex-end}.modal-close{display:grid;place-items:center;width:var(--ui-modal-close-size, 30px);height:var(--ui-modal-close-size, 30px);padding:0;border:var(--ui-modal-close-border, 1px solid var(--b1, #e7ecff));border-radius:50%;background-color:var(--ui-modal-close-background, var(--b0, #f0f3ff));color:var(--ui-modal-close-color, var(--c8, #595959));cursor:pointer}.modal-close:hover{background-color:var(--ui-modal-close-hover-background, var(--b1, #e7ecff))}.modal-close:focus-visible{outline:2px solid var(--ui-modal-focus-color, var(--b10, #1769aa));outline-offset:2px}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiModal,
	decorators: [{
		type: Component,
		args: [{
			imports: [],
			selector: "ui-modal",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: { "(document:keydown.escape)": "close.emit()" },
			template: "<div class=\"backdrop\" (click)=\"handleBackdropClick()\">\n  <div\n    #dialog\n    class=\"modal\"\n    role=\"dialog\"\n    aria-modal=\"true\"\n    tabindex=\"-1\"\n    [attr.aria-label]=\"label() || null\"\n    [attr.aria-labelledby]=\"labelledBy()\"\n    (click)=\"$event.stopPropagation()\"\n  >\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"modal-close\" [attr.aria-label]=\"closeLabel()\" (click)=\"close.emit()\">\n        <svg width=\"12\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\" focusable=\"false\">\n          <path d=\"M3 3l10 10M13 3L3 13\" />\n        </svg>\n      </button>\n    </div>\n    <ng-content />\n  </div>\n</div>\n",
			styles: [".backdrop{position:fixed;inset:0;z-index:var(--ui-modal-z-index, 999);display:grid;place-items:center;padding:16px;background-color:var(--ui-modal-backdrop, rgba(11, 11, 11, .56))}.modal{box-sizing:border-box;display:grid;width:var(--ui-modal-width, auto);max-width:min(var(--ui-modal-max-width, 650px),100%);max-height:min(var(--ui-modal-max-height, 680px),100%);overflow:auto;padding:var(--ui-modal-padding, 30px);border:var(--ui-modal-border, 0);border-radius:var(--ui-modal-border-radius, 20px);background-color:var(--ui-modal-background, var(--b2, #d9e2ff));color:var(--ui-modal-color, var(--c9, #404040));box-shadow:var(--ui-modal-shadow, none)}.modal:focus{outline:none}.modal-header{display:flex;justify-content:flex-end}.modal-close{display:grid;place-items:center;width:var(--ui-modal-close-size, 30px);height:var(--ui-modal-close-size, 30px);padding:0;border:var(--ui-modal-close-border, 1px solid var(--b1, #e7ecff));border-radius:50%;background-color:var(--ui-modal-close-background, var(--b0, #f0f3ff));color:var(--ui-modal-close-color, var(--c8, #595959));cursor:pointer}.modal-close:hover{background-color:var(--ui-modal-close-hover-background, var(--b1, #e7ecff))}.modal-close:focus-visible{outline:2px solid var(--ui-modal-focus-color, var(--b10, #1769aa));outline-offset:2px}\n"]
		}]
	}],
	ctorParameters: () => [],
	propDecorators: {
		label: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "label",
				required: false
			}]
		}],
		labelledBy: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "labelledBy",
				required: false
			}]
		}],
		closeLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "closeLabel",
				required: false
			}]
		}],
		closeOnBackdrop: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "closeOnBackdrop",
				required: false
			}]
		}],
		close: [{
			type: i0.Output,
			args: ["close"]
		}],
		dialog: [{
			type: i0.ViewChild,
			args: ["dialog", { isSignal: true }]
		}]
	}
});
const ICONS = {
	success: "✓",
	error: "✕",
	warning: "⚠",
	info: "ℹ"
};
var UiPopup = class UiPopup {
	message = input.required(...ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []);
	type = input("info", ...ngDevMode ? [{ debugName: "type" }] : /* istanbul ignore next */ []);
	closeLabel = input("Fechar", ...ngDevMode ? [{ debugName: "closeLabel" }] : /* istanbul ignore next */ []);
	icon = computed(() => ICONS[this.type()], ...ngDevMode ? [{ debugName: "icon" }] : /* istanbul ignore next */ []);
	closed = output();
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiPopup,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.1.0",
		version: "22.2.1",
		type: UiPopup,
		isStandalone: true,
		selector: "ui-popup",
		inputs: {
			message: {
				classPropertyName: "message",
				publicName: "message",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			type: {
				classPropertyName: "type",
				publicName: "type",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			closeLabel: {
				classPropertyName: "closeLabel",
				publicName: "closeLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: { closed: "closed" },
		host: {
			properties: {
				"class.ui-popup-success": "type() === 'success'",
				"class.ui-popup-error": "type() === 'error'",
				"class.ui-popup-warning": "type() === 'warning'",
				"class.ui-popup-info": "type() === 'info'",
				"attr.role": "type() === 'error' ? 'alert' : 'status'"
			},
			classAttribute: "ui-popup"
		},
		ngImport: i0,
		template: "<div class=\"popup-content\">\n  <span class=\"popup-icon\" aria-hidden=\"true\">{{ icon() }}</span>\n  <span class=\"popup-message\">{{ message() }}</span>\n  <button type=\"button\" class=\"popup-close\" [attr.aria-label]=\"closeLabel()\" (click)=\"closed.emit()\">\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\" focusable=\"false\">\n      <path d=\"M3 3l10 10M13 3L3 13\" />\n    </svg>\n  </button>\n</div>\n",
		styles: [":host{position:fixed;top:var(--ui-popup-top, 20px);right:var(--ui-popup-right, 20px);z-index:var(--ui-popup-z-index, 9999);display:block;box-sizing:border-box;min-width:min(var(--ui-popup-min-width, 300px),100vw - 40px);max-width:min(var(--ui-popup-max-width, 500px),100vw - 40px);padding:var(--ui-popup-padding, 15px 20px);border-left:var(--ui-popup-border-width, 4px) solid var(--_popup-border);border-radius:var(--ui-popup-border-radius, 8px);background:var(--_popup-background);color:var(--_popup-color);box-shadow:var(--ui-popup-shadow, 0 4px 12px rgba(0, 0, 0, .15));font-size:var(--ui-popup-font-size, 14px);animation:ui-popup-enter var(--ui-popup-animation-duration, .3s) ease-out}:host(.ui-popup-success){--_popup-background: var(--ui-popup-success-background, #d4edda);--_popup-color: var(--ui-popup-success-color, #155724);--_popup-border: var(--ui-popup-success-border-color, #28a745)}:host(.ui-popup-error){--_popup-background: var(--ui-popup-error-background, #f8d7da);--_popup-color: var(--ui-popup-error-color, #721c24);--_popup-border: var(--ui-popup-error-border-color, #dc3545)}:host(.ui-popup-warning){--_popup-background: var(--ui-popup-warning-background, #fff3cd);--_popup-color: var(--ui-popup-warning-color, #856404);--_popup-border: var(--ui-popup-warning-border-color, #ffc107)}:host(.ui-popup-info){--_popup-background: var(--ui-popup-info-background, #d1ecf1);--_popup-color: var(--ui-popup-info-color, #0c5460);--_popup-border: var(--ui-popup-info-border-color, #17a2b8)}:host(.ui-popup-leave){animation:ui-popup-leave var(--ui-popup-animation-duration, .3s) ease-in forwards}.popup-content{display:flex;align-items:center;gap:12px}.popup-icon{flex-shrink:0;font-size:var(--ui-popup-icon-size, 20px)}.popup-message{flex:1;font-weight:var(--ui-popup-font-weight, 500);line-height:1.4}.popup-close{display:grid;flex-shrink:0;place-items:center;padding:4px;border:none;border-radius:4px;background:transparent;color:inherit;cursor:pointer;opacity:.7;transition:opacity .2s}.popup-close:hover{opacity:1}.popup-close:focus-visible{outline:2px solid currentColor;outline-offset:1px;opacity:1}@keyframes ui-popup-enter{0%{opacity:0;transform:translate(16px)}}@keyframes ui-popup-leave{to{opacity:0;transform:translate(16px)}}@media(prefers-reduced-motion:reduce){:host,:host(.ui-popup-leave){animation-duration:1ms}}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiPopup,
	decorators: [{
		type: Component,
		args: [{
			imports: [],
			selector: "ui-popup",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				class: "ui-popup",
				"[class.ui-popup-success]": "type() === 'success'",
				"[class.ui-popup-error]": "type() === 'error'",
				"[class.ui-popup-warning]": "type() === 'warning'",
				"[class.ui-popup-info]": "type() === 'info'",
				"[attr.role]": "type() === 'error' ? 'alert' : 'status'"
			},
			template: "<div class=\"popup-content\">\n  <span class=\"popup-icon\" aria-hidden=\"true\">{{ icon() }}</span>\n  <span class=\"popup-message\">{{ message() }}</span>\n  <button type=\"button\" class=\"popup-close\" [attr.aria-label]=\"closeLabel()\" (click)=\"closed.emit()\">\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\" focusable=\"false\">\n      <path d=\"M3 3l10 10M13 3L3 13\" />\n    </svg>\n  </button>\n</div>\n",
			styles: [":host{position:fixed;top:var(--ui-popup-top, 20px);right:var(--ui-popup-right, 20px);z-index:var(--ui-popup-z-index, 9999);display:block;box-sizing:border-box;min-width:min(var(--ui-popup-min-width, 300px),100vw - 40px);max-width:min(var(--ui-popup-max-width, 500px),100vw - 40px);padding:var(--ui-popup-padding, 15px 20px);border-left:var(--ui-popup-border-width, 4px) solid var(--_popup-border);border-radius:var(--ui-popup-border-radius, 8px);background:var(--_popup-background);color:var(--_popup-color);box-shadow:var(--ui-popup-shadow, 0 4px 12px rgba(0, 0, 0, .15));font-size:var(--ui-popup-font-size, 14px);animation:ui-popup-enter var(--ui-popup-animation-duration, .3s) ease-out}:host(.ui-popup-success){--_popup-background: var(--ui-popup-success-background, #d4edda);--_popup-color: var(--ui-popup-success-color, #155724);--_popup-border: var(--ui-popup-success-border-color, #28a745)}:host(.ui-popup-error){--_popup-background: var(--ui-popup-error-background, #f8d7da);--_popup-color: var(--ui-popup-error-color, #721c24);--_popup-border: var(--ui-popup-error-border-color, #dc3545)}:host(.ui-popup-warning){--_popup-background: var(--ui-popup-warning-background, #fff3cd);--_popup-color: var(--ui-popup-warning-color, #856404);--_popup-border: var(--ui-popup-warning-border-color, #ffc107)}:host(.ui-popup-info){--_popup-background: var(--ui-popup-info-background, #d1ecf1);--_popup-color: var(--ui-popup-info-color, #0c5460);--_popup-border: var(--ui-popup-info-border-color, #17a2b8)}:host(.ui-popup-leave){animation:ui-popup-leave var(--ui-popup-animation-duration, .3s) ease-in forwards}.popup-content{display:flex;align-items:center;gap:12px}.popup-icon{flex-shrink:0;font-size:var(--ui-popup-icon-size, 20px)}.popup-message{flex:1;font-weight:var(--ui-popup-font-weight, 500);line-height:1.4}.popup-close{display:grid;flex-shrink:0;place-items:center;padding:4px;border:none;border-radius:4px;background:transparent;color:inherit;cursor:pointer;opacity:.7;transition:opacity .2s}.popup-close:hover{opacity:1}.popup-close:focus-visible{outline:2px solid currentColor;outline-offset:1px;opacity:1}@keyframes ui-popup-enter{0%{opacity:0;transform:translate(16px)}}@keyframes ui-popup-leave{to{opacity:0;transform:translate(16px)}}@media(prefers-reduced-motion:reduce){:host,:host(.ui-popup-leave){animation-duration:1ms}}\n"]
		}]
	}],
	propDecorators: {
		message: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "message",
				required: true
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
		closeLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "closeLabel",
				required: false
			}]
		}],
		closed: [{
			type: i0.Output,
			args: ["closed"]
		}]
	}
});
var UiSkeleton = class UiSkeleton {
	variant = input("input", ...ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []);
	quantity = input(1, ...ngDevMode ? [{ debugName: "quantity" }] : /* istanbul ignore next */ []);
	label = input("Carregando...", ...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	blocks = computed(() => Array.from({ length: Math.max(this.quantity(), 0) }, (_, index) => index), ...ngDevMode ? [{ debugName: "blocks" }] : /* istanbul ignore next */ []);
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiSkeleton,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiSkeleton,
		isStandalone: true,
		selector: "ui-skeleton",
		inputs: {
			variant: {
				classPropertyName: "variant",
				publicName: "variant",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			quantity: {
				classPropertyName: "quantity",
				publicName: "quantity",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			label: {
				classPropertyName: "label",
				publicName: "label",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		host: {
			attributes: {
				"role": "status",
				"aria-live": "polite"
			},
			properties: { "class": "'ui-skeleton-' + variant()" },
			classAttribute: "ui-skeleton"
		},
		ngImport: i0,
		template: "<span class=\"visually-hidden\">{{ label() }}</span>\n@for (block of blocks(); track block) {\n  <span class=\"skeleton\" aria-hidden=\"true\"></span>\n}\n",
		styles: [":host{display:grid;grid-template-columns:var(--ui-skeleton-columns, var(--_skeleton-columns, 1fr));gap:var(--ui-skeleton-gap, var(--_skeleton-gap, 12px));width:100%}:host(.ui-skeleton-menu){--_skeleton-height: 36px;--_skeleton-radius: 8px;--_skeleton-gap: 8px}:host(.ui-skeleton-table){--_skeleton-height: 48px;--_skeleton-radius: 4px;--_skeleton-gap: 2px}:host(.ui-skeleton-form){--_skeleton-height: 40px;--_skeleton-radius: 10px;--_skeleton-gap: 20px}:host(.ui-skeleton-input){--_skeleton-height: 40px;--_skeleton-radius: 10px}:host(.ui-skeleton-banner){--_skeleton-height: 240px;--_skeleton-radius: 20px}:host(.ui-skeleton-card){--_skeleton-height: 160px;--_skeleton-radius: 15px;--_skeleton-gap: 16px;--_skeleton-columns: repeat(auto-fill, minmax(220px, 1fr))}.skeleton{display:block;width:var(--ui-skeleton-width, 100%);height:var(--ui-skeleton-height, var(--_skeleton-height, 40px));border-radius:var(--ui-skeleton-border-radius, var(--_skeleton-radius, 10px));background:linear-gradient(90deg,var(--ui-skeleton-color, var(--b1, #e7ecff)) 25%,var(--ui-skeleton-highlight-color, var(--b0, #f0f3ff)) 50%,var(--ui-skeleton-color, var(--b1, #e7ecff)) 75%);background-size:200% 100%;animation:ui-skeleton-shimmer var(--ui-skeleton-animation-duration, 1.4s) ease-in-out infinite}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}@keyframes ui-skeleton-shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}@media(prefers-reduced-motion:reduce){.skeleton{animation:none}}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiSkeleton,
	decorators: [{
		type: Component,
		args: [{
			imports: [],
			selector: "ui-skeleton",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: {
				class: "ui-skeleton",
				role: "status",
				"aria-live": "polite",
				"[class]": "'ui-skeleton-' + variant()"
			},
			template: "<span class=\"visually-hidden\">{{ label() }}</span>\n@for (block of blocks(); track block) {\n  <span class=\"skeleton\" aria-hidden=\"true\"></span>\n}\n",
			styles: [":host{display:grid;grid-template-columns:var(--ui-skeleton-columns, var(--_skeleton-columns, 1fr));gap:var(--ui-skeleton-gap, var(--_skeleton-gap, 12px));width:100%}:host(.ui-skeleton-menu){--_skeleton-height: 36px;--_skeleton-radius: 8px;--_skeleton-gap: 8px}:host(.ui-skeleton-table){--_skeleton-height: 48px;--_skeleton-radius: 4px;--_skeleton-gap: 2px}:host(.ui-skeleton-form){--_skeleton-height: 40px;--_skeleton-radius: 10px;--_skeleton-gap: 20px}:host(.ui-skeleton-input){--_skeleton-height: 40px;--_skeleton-radius: 10px}:host(.ui-skeleton-banner){--_skeleton-height: 240px;--_skeleton-radius: 20px}:host(.ui-skeleton-card){--_skeleton-height: 160px;--_skeleton-radius: 15px;--_skeleton-gap: 16px;--_skeleton-columns: repeat(auto-fill, minmax(220px, 1fr))}.skeleton{display:block;width:var(--ui-skeleton-width, 100%);height:var(--ui-skeleton-height, var(--_skeleton-height, 40px));border-radius:var(--ui-skeleton-border-radius, var(--_skeleton-radius, 10px));background:linear-gradient(90deg,var(--ui-skeleton-color, var(--b1, #e7ecff)) 25%,var(--ui-skeleton-highlight-color, var(--b0, #f0f3ff)) 50%,var(--ui-skeleton-color, var(--b1, #e7ecff)) 75%);background-size:200% 100%;animation:ui-skeleton-shimmer var(--ui-skeleton-animation-duration, 1.4s) ease-in-out infinite}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}@keyframes ui-skeleton-shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}@media(prefers-reduced-motion:reduce){.skeleton{animation:none}}\n"]
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
		quantity: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "quantity",
				required: false
			}]
		}],
		label: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "label",
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
		styles: [":host{display:block}.banner{box-sizing:border-box;display:grid;grid-template-columns:1fr;gap:var(--ui-banner-gap, 10px);justify-items:center;width:100%;padding:var(--ui-banner-padding, 2rem);border:var(--ui-banner-border, 1px solid var(--b0, #f0f3ff));border-radius:var(--ui-banner-border-radius, 20px);background-color:var(--ui-banner-background, var(--b-white, #f6f9ff))}.banner-with-image{grid-template-columns:.3fr 1fr}@media(max-width:980px){.banner-with-image{grid-template-columns:1fr}.banner-with-image .banner-media{display:none}}.banner-content{display:grid;justify-items:center}.banner-heading{display:grid;justify-items:center;margin:20px 0 32px;text-align:center}.banner-heading h2,.banner-heading .banner-subtitle{margin:0;font-size:var(--ui-banner-heading-font-size, clamp(24px, 3vw + 8px, 36px));font-weight:var(--ui-banner-heading-font-weight, 700);line-height:1.35}.banner-heading h2{color:var(--ui-banner-heading-color, var(--c8, #595959))}.banner-subtitle{background:var(--ui-banner-subtitle-gradient, linear-gradient(90deg, #335cd6, #61a9eb));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.banner-description{margin:0 0 20px;color:var(--ui-banner-description-color, var(--c7, #707070));font-size:var(--ui-banner-description-font-size, 14px);font-weight:var(--ui-banner-description-font-weight, 500);line-height:1.5rem;text-align:center}\n"],
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
			styles: [":host{display:block}.banner{box-sizing:border-box;display:grid;grid-template-columns:1fr;gap:var(--ui-banner-gap, 10px);justify-items:center;width:100%;padding:var(--ui-banner-padding, 2rem);border:var(--ui-banner-border, 1px solid var(--b0, #f0f3ff));border-radius:var(--ui-banner-border-radius, 20px);background-color:var(--ui-banner-background, var(--b-white, #f6f9ff))}.banner-with-image{grid-template-columns:.3fr 1fr}@media(max-width:980px){.banner-with-image{grid-template-columns:1fr}.banner-with-image .banner-media{display:none}}.banner-content{display:grid;justify-items:center}.banner-heading{display:grid;justify-items:center;margin:20px 0 32px;text-align:center}.banner-heading h2,.banner-heading .banner-subtitle{margin:0;font-size:var(--ui-banner-heading-font-size, clamp(24px, 3vw + 8px, 36px));font-weight:var(--ui-banner-heading-font-weight, 700);line-height:1.35}.banner-heading h2{color:var(--ui-banner-heading-color, var(--c8, #595959))}.banner-subtitle{background:var(--ui-banner-subtitle-gradient, linear-gradient(90deg, #335cd6, #61a9eb));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.banner-description{margin:0 0 20px;color:var(--ui-banner-description-color, var(--c7, #707070));font-size:var(--ui-banner-description-font-size, 14px);font-weight:var(--ui-banner-description-font-weight, 500);line-height:1.5rem;text-align:center}\n"]
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
var UiColumnGraph = class UiColumnGraph {
	data = input.required(...ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []);
	title = input.required(...ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []);
	maxValue = input(null, ...ngDevMode ? [{ debugName: "maxValue" }] : /* istanbul ignore next */ []);
	highlight = input(null, ...ngDevMode ? [{ debugName: "highlight" }] : /* istanbul ignore next */ []);
	effectiveMax = computed(() => this.maxValue() ?? Math.max(0, ...this.data().y_axios.map((bar) => bar.value)), ...ngDevMode ? [{ debugName: "effectiveMax" }] : /* istanbul ignore next */ []);
	getBarHeight(value) {
		const max = this.effectiveMax();
		if (max <= 0) return 0;
		return Math.min(Math.max(value / max * 100, 0), 100);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiColumnGraph,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiColumnGraph,
		isStandalone: true,
		selector: "ui-column-graph",
		inputs: {
			data: {
				classPropertyName: "data",
				publicName: "data",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			title: {
				classPropertyName: "title",
				publicName: "title",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			maxValue: {
				classPropertyName: "maxValue",
				publicName: "maxValue",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			highlight: {
				classPropertyName: "highlight",
				publicName: "highlight",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		host: { properties: { "attr.title": "null" } },
		ngImport: i0,
		template: "<div class=\"chart-card\">\n  <h3 class=\"chart-title\">{{ title() }}</h3>\n  <div class=\"chart-container\">\n    <div class=\"axis-y\" aria-hidden=\"true\">\n      @for (item of data().x_axios; track $index) {\n        <span class=\"axis-y-label\">\n          {{ item.label }}\n        </span>\n      }\n    </div>\n    <div class=\"chart-content\">\n      <div class=\"bars-container\" role=\"list\" [attr.aria-label]=\"title()\">\n        @for (bar of data().y_axios; track bar.label) {\n          <div class=\"bar-wrapper\" role=\"listitem\" [attr.aria-label]=\"bar.label + ': ' + bar.value\">\n            <div\n              class=\"bar-column\"\n              [style.height.%]=\"getBarHeight(bar.value)\"\n              [class.highlighted]=\"bar.label === highlight()\"\n              [title]=\"bar.label + ': ' + bar.value\"\n            >\n              <span class=\"bar-value\">{{ bar.value }}</span>\n            </div>\n          </div>\n        }\n      </div>\n      <div class=\"axis-x\" aria-hidden=\"true\">\n        @for (bar of data().y_axios; track bar.label) {\n          <div class=\"axis-x-label\" [class.highlighted-text]=\"bar.label === highlight()\">\n            {{ bar.label }}\n          </div>\n        }\n      </div>\n    </div>\n  </div>\n</div>\n",
		styles: [":host{display:block}.chart-card{padding:var(--ui-column-graph-padding, 20px);border:var(--ui-column-graph-border, 1px solid var(--b1, #e7ecff));border-radius:var(--ui-column-graph-border-radius, 15px);background:var(--ui-column-graph-background, var(--white, #fff))}.chart-title{margin:0 0 38px;color:var(--ui-column-graph-title-color, var(--c7, #707070));font-size:var(--ui-column-graph-title-font-size, 24px);text-align:center}.chart-container{display:flex;height:var(--ui-column-graph-height, 347px)}.axis-y{display:flex;flex-direction:column;justify-content:space-between;margin-right:20px;padding-bottom:35px;color:var(--ui-column-graph-axis-color, var(--c6, #9c9c9c));font-size:var(--ui-column-graph-axis-font-size, 12px);text-align:right}.chart-content{display:flex;flex-direction:column;flex-grow:1}.bars-container{display:flex;flex-grow:1;align-items:flex-end;justify-content:space-around;width:100%;padding-bottom:8px;border-bottom:1px solid var(--ui-column-graph-baseline-color, var(--c2, #ededed))}.bar-wrapper{position:relative;display:flex;flex:1;flex-direction:column;align-items:center;justify-content:flex-end;gap:6px;height:100%}.bar-column{position:relative;width:var(--ui-column-graph-bar-width, 25px);border-radius:var(--ui-column-graph-bar-radius, 5px);background-color:var(--ui-column-graph-bar-color, var(--b3, #c6d4fe));transition:height .4s cubic-bezier(.25,.8,.25,1)}.bar-column:hover{background-color:var(--ui-column-graph-bar-hover-color, var(--b4, #b5c6f9));cursor:pointer}.bar-column.highlighted{background-color:var(--ui-column-graph-highlight-color, var(--b6, #8ba7f9))}.bar-value{position:absolute;bottom:calc(100% + 6px);left:50%;color:var(--ui-column-graph-value-color, var(--c7, #707070));font-size:11px;white-space:nowrap;opacity:0;transform:translate(-50%) translateY(4px);transition:opacity .2s,transform .2s}.bar-wrapper:hover .bar-value{opacity:1;transform:translate(-50%) translateY(0)}.axis-x{display:flex;justify-content:space-around;width:100%;margin-top:10px}.axis-x-label{width:var(--ui-column-graph-bar-width, 25px);color:var(--ui-column-graph-axis-color, var(--c6, #9c9c9c));font-size:var(--ui-column-graph-axis-font-size, 12px);text-align:center}.highlighted-text{color:var(--ui-column-graph-highlight-color, var(--b6, #8ba7f9));font-weight:700}@media(prefers-reduced-motion:reduce){.bar-column,.bar-value{transition:none}}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiColumnGraph,
	decorators: [{
		type: Component,
		args: [{
			imports: [],
			selector: "ui-column-graph",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: { "[attr.title]": "null" },
			template: "<div class=\"chart-card\">\n  <h3 class=\"chart-title\">{{ title() }}</h3>\n  <div class=\"chart-container\">\n    <div class=\"axis-y\" aria-hidden=\"true\">\n      @for (item of data().x_axios; track $index) {\n        <span class=\"axis-y-label\">\n          {{ item.label }}\n        </span>\n      }\n    </div>\n    <div class=\"chart-content\">\n      <div class=\"bars-container\" role=\"list\" [attr.aria-label]=\"title()\">\n        @for (bar of data().y_axios; track bar.label) {\n          <div class=\"bar-wrapper\" role=\"listitem\" [attr.aria-label]=\"bar.label + ': ' + bar.value\">\n            <div\n              class=\"bar-column\"\n              [style.height.%]=\"getBarHeight(bar.value)\"\n              [class.highlighted]=\"bar.label === highlight()\"\n              [title]=\"bar.label + ': ' + bar.value\"\n            >\n              <span class=\"bar-value\">{{ bar.value }}</span>\n            </div>\n          </div>\n        }\n      </div>\n      <div class=\"axis-x\" aria-hidden=\"true\">\n        @for (bar of data().y_axios; track bar.label) {\n          <div class=\"axis-x-label\" [class.highlighted-text]=\"bar.label === highlight()\">\n            {{ bar.label }}\n          </div>\n        }\n      </div>\n    </div>\n  </div>\n</div>\n",
			styles: [":host{display:block}.chart-card{padding:var(--ui-column-graph-padding, 20px);border:var(--ui-column-graph-border, 1px solid var(--b1, #e7ecff));border-radius:var(--ui-column-graph-border-radius, 15px);background:var(--ui-column-graph-background, var(--white, #fff))}.chart-title{margin:0 0 38px;color:var(--ui-column-graph-title-color, var(--c7, #707070));font-size:var(--ui-column-graph-title-font-size, 24px);text-align:center}.chart-container{display:flex;height:var(--ui-column-graph-height, 347px)}.axis-y{display:flex;flex-direction:column;justify-content:space-between;margin-right:20px;padding-bottom:35px;color:var(--ui-column-graph-axis-color, var(--c6, #9c9c9c));font-size:var(--ui-column-graph-axis-font-size, 12px);text-align:right}.chart-content{display:flex;flex-direction:column;flex-grow:1}.bars-container{display:flex;flex-grow:1;align-items:flex-end;justify-content:space-around;width:100%;padding-bottom:8px;border-bottom:1px solid var(--ui-column-graph-baseline-color, var(--c2, #ededed))}.bar-wrapper{position:relative;display:flex;flex:1;flex-direction:column;align-items:center;justify-content:flex-end;gap:6px;height:100%}.bar-column{position:relative;width:var(--ui-column-graph-bar-width, 25px);border-radius:var(--ui-column-graph-bar-radius, 5px);background-color:var(--ui-column-graph-bar-color, var(--b3, #c6d4fe));transition:height .4s cubic-bezier(.25,.8,.25,1)}.bar-column:hover{background-color:var(--ui-column-graph-bar-hover-color, var(--b4, #b5c6f9));cursor:pointer}.bar-column.highlighted{background-color:var(--ui-column-graph-highlight-color, var(--b6, #8ba7f9))}.bar-value{position:absolute;bottom:calc(100% + 6px);left:50%;color:var(--ui-column-graph-value-color, var(--c7, #707070));font-size:11px;white-space:nowrap;opacity:0;transform:translate(-50%) translateY(4px);transition:opacity .2s,transform .2s}.bar-wrapper:hover .bar-value{opacity:1;transform:translate(-50%) translateY(0)}.axis-x{display:flex;justify-content:space-around;width:100%;margin-top:10px}.axis-x-label{width:var(--ui-column-graph-bar-width, 25px);color:var(--ui-column-graph-axis-color, var(--c6, #9c9c9c));font-size:var(--ui-column-graph-axis-font-size, 12px);text-align:center}.highlighted-text{color:var(--ui-column-graph-highlight-color, var(--b6, #8ba7f9));font-weight:700}@media(prefers-reduced-motion:reduce){.bar-column,.bar-value{transition:none}}\n"]
		}]
	}],
	propDecorators: {
		data: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "data",
				required: true
			}]
		}],
		title: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "title",
				required: true
			}]
		}],
		maxValue: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "maxValue",
				required: false
			}]
		}],
		highlight: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "highlight",
				required: false
			}]
		}]
	}
});
var UiPieChart = class UiPieChart {
	title = input.required(...ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []);
	data = input.required(...ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []);
	percentage = computed(() => {
		const [part, total] = this.data();
		if (!part || !total || total.graphValue <= 0) return 0;
		const value = part.graphValue / total.graphValue * 100;
		return Math.round(Math.min(Math.max(value, 0), 100) * 10) / 10;
	}, ...ngDevMode ? [{ debugName: "percentage" }] : /* istanbul ignore next */ []);
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiPieChart,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiPieChart,
		isStandalone: true,
		selector: "ui-pie-chart",
		inputs: {
			title: {
				classPropertyName: "title",
				publicName: "title",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			data: {
				classPropertyName: "data",
				publicName: "data",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			}
		},
		host: { properties: { "attr.title": "null" } },
		ngImport: i0,
		template: "<div class=\"pie-chart-card\">\n  <h3 class=\"chart-title\">{{ title() }}</h3>\n  <div class=\"chart-content\">\n    <div class=\"chart-container\">\n      <div\n        class=\"donut\"\n        role=\"img\"\n        [attr.aria-label]=\"title() + ': ' + percentage() + '%'\"\n        [style.--_percentage.%]=\"percentage()\"\n        [style.--_fill]=\"data()[0]?.color\"\n        [style.--_track]=\"data()[1]?.color\"\n      ></div>\n    </div>\n    <div class=\"legend-container\">\n      @for (item of data(); track item.label; let i = $index) {\n        <div class=\"legend-card\">\n          <span\n            class=\"card-indicator\"\n            [class.card-indicator-track]=\"i > 0\"\n            [style.background-color]=\"item.color\"\n          ></span>\n          <div class=\"card-content\">\n            <strong class=\"card-value\">{{ item.value }}</strong>\n            <span class=\"card-label\">{{ item.label }}</span>\n          </div>\n        </div>\n      }\n    </div>\n  </div>\n</div>\n",
		styles: [":host{display:block}.pie-chart-card{display:flex;flex-direction:column;align-items:center;padding:var(--ui-pie-chart-padding, 10px);border:var(--ui-pie-chart-border, 1px solid var(--b1, #e7ecff));border-radius:var(--ui-pie-chart-border-radius, 15px);background:var(--ui-pie-chart-background, var(--white, #fff))}.chart-title{margin:0 0 12px;color:var(--ui-pie-chart-title-color, var(--c7, #707070));font-size:var(--ui-pie-chart-title-font-size, 18px);text-align:center}.chart-content{display:grid;grid-template-columns:auto 1fr;width:100%}.chart-container{display:flex;align-items:center;justify-content:center;width:var(--ui-pie-chart-size, 80px);height:var(--ui-pie-chart-size, 80px);margin-bottom:10px}.donut{--_fill-color: var(--_fill, var(--ui-pie-chart-fill-color, var(--b6, #8ba7f9)));--_track-color: var(--_track, var(--ui-pie-chart-track-color, var(--b3, #c6d4fe)));width:100%;height:100%;border-radius:50%;background:conic-gradient(var(--_fill-color) 0% var(--_percentage),var(--_track-color) var(--_percentage) 100%);-webkit-mask:radial-gradient(circle,transparent 62%,black 63%);mask:radial-gradient(circle,transparent 62%,black 63%)}.legend-container{display:grid;gap:12px;width:100%}.legend-card{position:relative;display:flex;align-items:center;height:28px;margin-left:20px;overflow:hidden;border:var(--ui-pie-chart-legend-border, 1px solid var(--b1, #e7ecff));border-radius:12px;background:var(--ui-pie-chart-legend-background, var(--white, #fff));box-shadow:0 2px 6px #00000005}.card-indicator{display:block;width:12px;height:100%;background-color:var(--ui-pie-chart-fill-color, var(--b6, #8ba7f9))}.card-indicator.card-indicator-track{background-color:var(--ui-pie-chart-track-color, var(--b3, #c6d4fe))}.card-content{display:flex;align-items:center;gap:16px;padding-left:16px}.card-value{color:var(--ui-pie-chart-value-color, var(--c7, #707070));font-size:18px;font-weight:600}.card-label{color:var(--ui-pie-chart-label-color, var(--c7, #707070));font-size:12px;font-weight:500}\n"],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiPieChart,
	decorators: [{
		type: Component,
		args: [{
			imports: [],
			selector: "ui-pie-chart",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: { "[attr.title]": "null" },
			template: "<div class=\"pie-chart-card\">\n  <h3 class=\"chart-title\">{{ title() }}</h3>\n  <div class=\"chart-content\">\n    <div class=\"chart-container\">\n      <div\n        class=\"donut\"\n        role=\"img\"\n        [attr.aria-label]=\"title() + ': ' + percentage() + '%'\"\n        [style.--_percentage.%]=\"percentage()\"\n        [style.--_fill]=\"data()[0]?.color\"\n        [style.--_track]=\"data()[1]?.color\"\n      ></div>\n    </div>\n    <div class=\"legend-container\">\n      @for (item of data(); track item.label; let i = $index) {\n        <div class=\"legend-card\">\n          <span\n            class=\"card-indicator\"\n            [class.card-indicator-track]=\"i > 0\"\n            [style.background-color]=\"item.color\"\n          ></span>\n          <div class=\"card-content\">\n            <strong class=\"card-value\">{{ item.value }}</strong>\n            <span class=\"card-label\">{{ item.label }}</span>\n          </div>\n        </div>\n      }\n    </div>\n  </div>\n</div>\n",
			styles: [":host{display:block}.pie-chart-card{display:flex;flex-direction:column;align-items:center;padding:var(--ui-pie-chart-padding, 10px);border:var(--ui-pie-chart-border, 1px solid var(--b1, #e7ecff));border-radius:var(--ui-pie-chart-border-radius, 15px);background:var(--ui-pie-chart-background, var(--white, #fff))}.chart-title{margin:0 0 12px;color:var(--ui-pie-chart-title-color, var(--c7, #707070));font-size:var(--ui-pie-chart-title-font-size, 18px);text-align:center}.chart-content{display:grid;grid-template-columns:auto 1fr;width:100%}.chart-container{display:flex;align-items:center;justify-content:center;width:var(--ui-pie-chart-size, 80px);height:var(--ui-pie-chart-size, 80px);margin-bottom:10px}.donut{--_fill-color: var(--_fill, var(--ui-pie-chart-fill-color, var(--b6, #8ba7f9)));--_track-color: var(--_track, var(--ui-pie-chart-track-color, var(--b3, #c6d4fe)));width:100%;height:100%;border-radius:50%;background:conic-gradient(var(--_fill-color) 0% var(--_percentage),var(--_track-color) var(--_percentage) 100%);-webkit-mask:radial-gradient(circle,transparent 62%,black 63%);mask:radial-gradient(circle,transparent 62%,black 63%)}.legend-container{display:grid;gap:12px;width:100%}.legend-card{position:relative;display:flex;align-items:center;height:28px;margin-left:20px;overflow:hidden;border:var(--ui-pie-chart-legend-border, 1px solid var(--b1, #e7ecff));border-radius:12px;background:var(--ui-pie-chart-legend-background, var(--white, #fff));box-shadow:0 2px 6px #00000005}.card-indicator{display:block;width:12px;height:100%;background-color:var(--ui-pie-chart-fill-color, var(--b6, #8ba7f9))}.card-indicator.card-indicator-track{background-color:var(--ui-pie-chart-track-color, var(--b3, #c6d4fe))}.card-content{display:flex;align-items:center;gap:16px;padding-left:16px}.card-value{color:var(--ui-pie-chart-value-color, var(--c7, #707070));font-size:18px;font-weight:600}.card-label{color:var(--ui-pie-chart-label-color, var(--c7, #707070));font-size:12px;font-weight:500}\n"]
		}]
	}],
	propDecorators: {
		title: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "title",
				required: true
			}]
		}],
		data: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "data",
				required: true
			}]
		}]
	}
});
var UiTableCell = class UiTableCell {
	column = input.required({
		...ngDevMode ? { debugName: "column" } : /* istanbul ignore next */ {},
		alias: "uiTableCell"
	});
	template = inject(TemplateRef);
	static ngTemplateContextGuard(_dir, ctx) {
		return true;
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiTableCell,
		deps: [],
		target: i0.ɵɵFactoryTarget.Directive
	});
	static ɵdir = i0.ɵɵngDeclareDirective({
		minVersion: "17.1.0",
		version: "22.2.1",
		type: UiTableCell,
		isStandalone: true,
		selector: "ng-template[uiTableCell]",
		inputs: { column: {
			classPropertyName: "column",
			publicName: "uiTableCell",
			isSignal: true,
			isRequired: true,
			transformFunction: null
		} },
		ngImport: i0
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiTableCell,
	decorators: [{
		type: Directive,
		args: [{ selector: "ng-template[uiTableCell]" }]
	}],
	propDecorators: { column: [{
		type: i0.Input,
		args: [{
			isSignal: true,
			alias: "uiTableCell",
			required: true
		}]
	}] }
});
var UiTableDetail = class UiTableDetail {
	template = inject(TemplateRef);
	static ngTemplateContextGuard(_dir, ctx) {
		return true;
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiTableDetail,
		deps: [],
		target: i0.ɵɵFactoryTarget.Directive
	});
	static ɵdir = i0.ɵɵngDeclareDirective({
		minVersion: "14.0.0",
		version: "22.2.1",
		type: UiTableDetail,
		isStandalone: true,
		selector: "ng-template[uiTableDetail]",
		ngImport: i0
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiTableDetail,
	decorators: [{
		type: Directive,
		args: [{ selector: "ng-template[uiTableDetail]" }]
	}]
});
let nextId$1 = 0;
var UiTable = class UiTable {
	columns = input.required(...ngDevMode ? [{ debugName: "columns" }] : /* istanbul ignore next */ []);
	rows = input.required(...ngDevMode ? [{ debugName: "rows" }] : /* istanbul ignore next */ []);
	rowKey = input((row) => row, ...ngDevMode ? [{ debugName: "rowKey" }] : /* istanbul ignore next */ []);
	actions = input([], ...ngDevMode ? [{ debugName: "actions" }] : /* istanbul ignore next */ []);
	label = input("", ...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	loading = input(false, ...ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []);
	loadingRows = input(5, ...ngDevMode ? [{ debugName: "loadingRows" }] : /* istanbul ignore next */ []);
	loadingText = input("Carregando...", ...ngDevMode ? [{ debugName: "loadingText" }] : /* istanbul ignore next */ []);
	emptyText = input("Nenhum registro encontrado.", ...ngDevMode ? [{ debugName: "emptyText" }] : /* istanbul ignore next */ []);
	actionsLabel = input("Ações", ...ngDevMode ? [{ debugName: "actionsLabel" }] : /* istanbul ignore next */ []);
	detailsLabel = input("Detalhes", ...ngDevMode ? [{ debugName: "detailsLabel" }] : /* istanbul ignore next */ []);
	showDetailsLabel = input("Mostrar detalhes", ...ngDevMode ? [{ debugName: "showDetailsLabel" }] : /* istanbul ignore next */ []);
	hideDetailsLabel = input("Ocultar detalhes", ...ngDevMode ? [{ debugName: "hideDetailsLabel" }] : /* istanbul ignore next */ []);
	action = output();
	rowToggle = output();
	detail = contentChild(UiTableDetail, ...ngDevMode ? [{ debugName: "detail" }] : /* istanbul ignore next */ []);
	cellTemplates = contentChildren(UiTableCell, ...ngDevMode ? [{ debugName: "cellTemplates" }] : /* istanbul ignore next */ []);
	expandedKeys = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedKeys" }] : /* istanbul ignore next */ []);
	tableId = `ui-table-${nextId$1++}`;
	cellTemplateMap = computed(() => new Map(this.cellTemplates().map((cell) => [cell.column(), cell.template])), ...ngDevMode ? [{ debugName: "cellTemplateMap" }] : /* istanbul ignore next */ []);
	colspan = computed(() => this.columns().length + (this.detail() ? 1 : 0) + (this.actions().length ? 1 : 0), ...ngDevMode ? [{ debugName: "colspan" }] : /* istanbul ignore next */ []);
	menuItems = computed(() => {
		const actions = this.actions();
		return new Map(this.rows().map((row) => [row, actions.filter((a) => !a.hidden?.(row)).map((a) => ({
			id: a.id,
			label: a.label,
			danger: a.danger,
			disabled: a.disabled?.(row) ?? false
		}))]));
	}, ...ngDevMode ? [{ debugName: "menuItems" }] : /* istanbul ignore next */ []);
	cellValue(row, column) {
		return column.value ? column.value(row) : row[column.key];
	}
	rowName(row) {
		const first = this.columns()[0];
		return first ? String(this.cellValue(row, first) ?? "") : "";
	}
	isExpanded(row) {
		return this.expandedKeys().has(this.rowKey()(row));
	}
	toggleRow(row) {
		const key = this.rowKey()(row);
		const next = new Set(this.expandedKeys());
		const expanded = !next.has(key);
		if (expanded) next.add(key);
		else next.delete(key);
		this.expandedKeys.set(next);
		this.rowToggle.emit({
			row,
			expanded
		});
	}
	detailId(index) {
		return `${this.tableId}-detail-${index}`;
	}
	emitAction(item, row) {
		this.action.emit({
			action: item.id,
			row
		});
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiTable,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiTable,
		isStandalone: true,
		selector: "ui-table",
		inputs: {
			columns: {
				classPropertyName: "columns",
				publicName: "columns",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			rows: {
				classPropertyName: "rows",
				publicName: "rows",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			rowKey: {
				classPropertyName: "rowKey",
				publicName: "rowKey",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			actions: {
				classPropertyName: "actions",
				publicName: "actions",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			label: {
				classPropertyName: "label",
				publicName: "label",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			loading: {
				classPropertyName: "loading",
				publicName: "loading",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			loadingRows: {
				classPropertyName: "loadingRows",
				publicName: "loadingRows",
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
			actionsLabel: {
				classPropertyName: "actionsLabel",
				publicName: "actionsLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			detailsLabel: {
				classPropertyName: "detailsLabel",
				publicName: "detailsLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			showDetailsLabel: {
				classPropertyName: "showDetailsLabel",
				publicName: "showDetailsLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			hideDetailsLabel: {
				classPropertyName: "hideDetailsLabel",
				publicName: "hideDetailsLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: {
			action: "action",
			rowToggle: "rowToggle"
		},
		queries: [{
			propertyName: "detail",
			first: true,
			predicate: UiTableDetail,
			descendants: true,
			isSignal: true
		}, {
			propertyName: "cellTemplates",
			predicate: UiTableCell,
			isSignal: true
		}],
		ngImport: i0,
		template: "@if (loading()) {\n  <ui-skeleton variant=\"table\" [quantity]=\"loadingRows()\" [label]=\"loadingText()\" />\n} @else if (rows().length === 0) {\n  <p class=\"table-empty\" role=\"status\">{{ emptyText() }}</p>\n} @else {\n  <div class=\"table-wrapper\">\n    <table class=\"table\" [attr.aria-label]=\"label() || null\">\n      <thead>\n        <tr>\n          @if (detail()) {\n            <th scope=\"col\" class=\"col-toggle\"><span class=\"visually-hidden\">{{ detailsLabel() }}</span></th>\n          }\n          @for (column of columns(); track column.key) {\n            <th scope=\"col\" [style.text-align]=\"column.align\" [style.width]=\"column.width\">\n              {{ column.header }}\n            </th>\n          }\n          @if (actions().length) {\n            <th scope=\"col\" class=\"col-actions\">\n              <span class=\"visually-hidden\">{{ actionsLabel() }}</span>\n            </th>\n          }\n        </tr>\n      </thead>\n\n      <tbody>\n        @for (row of rows(); track rowKey()(row); let i = $index) {\n          <tr [class.expanded]=\"isExpanded(row)\">\n            @if (detail()) {\n              <td class=\"col-toggle\">\n                <button\n                  class=\"toggle\"\n                  type=\"button\"\n                  [attr.aria-expanded]=\"isExpanded(row)\"\n                  [attr.aria-controls]=\"isExpanded(row) ? detailId(i) : null\"\n                  [attr.aria-label]=\"(isExpanded(row) ? hideDetailsLabel() : showDetailsLabel()) + ': ' + rowName(row)\"\n                  (click)=\"toggleRow(row)\"\n                >\n                  <svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n                    <path d=\"M6 3l5 5-5 5\" />\n                  </svg>\n                </button>\n              </td>\n            }\n\n            @for (column of columns(); track column.key) {\n              <td [style.text-align]=\"column.align\">\n                @if (cellTemplateMap().get(column.key); as template) {\n                  <ng-container\n                    [ngTemplateOutlet]=\"template\"\n                    [ngTemplateOutletContext]=\"{ $implicit: row, value: cellValue(row, column) }\"\n                  />\n                } @else {\n                  {{ cellValue(row, column) }}\n                }\n              </td>\n            }\n\n            @if (actions().length) {\n              <td class=\"col-actions\">\n                <ui-menu\n                  [items]=\"menuItems().get(row) ?? []\"\n                  [label]=\"actionsLabel() + ': ' + rowName(row)\"\n                  (itemSelect)=\"emitAction($event, row)\"\n                />\n              </td>\n            }\n          </tr>\n\n          @if (detail(); as detail) {\n            @if (isExpanded(row)) {\n              <tr class=\"detail-row\" [id]=\"detailId(i)\">\n                <td [attr.colspan]=\"colspan()\">\n                  <ng-container [ngTemplateOutlet]=\"detail.template\" [ngTemplateOutletContext]=\"{ $implicit: row }\" />\n                </td>\n              </tr>\n            }\n          }\n        }\n      </tbody>\n    </table>\n  </div>\n}\n",
		styles: [":host{display:block}.table-wrapper{overflow-x:auto;border:var(--ui-table-border, 0);border-radius:var(--ui-table-border-radius, 0)}.table{width:100%;border-collapse:collapse;color:var(--ui-table-color, var(--c9, #404040));font-size:var(--ui-table-font-size, 14px)}.table th{padding:var(--ui-table-cell-padding, 10px 12px);border-bottom:1px solid var(--ui-table-header-border-color, var(--b2, #d9e2ff));background:var(--ui-table-header-background, transparent);color:var(--ui-table-header-color, var(--c7, #707070));font-weight:var(--ui-table-header-font-weight, 600);text-align:start;white-space:nowrap}.table td{padding:var(--ui-table-cell-padding, 10px 12px);border-bottom:1px solid var(--ui-table-row-border-color, var(--b1, #e7ecff));white-space:var(--ui-table-cell-white-space, normal);vertical-align:middle}.table tbody tr:not(.detail-row):hover{background:var(--ui-table-row-hover-background, var(--b0, #f0f3ff))}.table tr.expanded>td{border-bottom-color:transparent}.col-toggle,.col-actions{width:1%}.col-actions{text-align:end}.toggle{display:grid;place-items:center;width:var(--ui-table-toggle-size, 28px);height:var(--ui-table-toggle-size, 28px);padding:0;border:0;border-radius:6px;background:transparent;color:var(--ui-table-toggle-color, var(--c8, #595959));cursor:pointer}.toggle svg{transition:transform .2s ease}.toggle[aria-expanded=true] svg{transform:rotate(90deg)}.toggle:hover{background:var(--ui-table-toggle-hover-background, var(--b1, #e7ecff))}.toggle:focus-visible{outline:2px solid var(--ui-table-focus-color, var(--b10, #1769aa));outline-offset:2px}.detail-row>td{padding:var(--ui-table-detail-padding, 16px 12px 16px 52px);background:var(--ui-table-detail-background, var(--b0, #f0f3ff));white-space:normal}.table-empty{margin:0;padding:var(--ui-table-empty-padding, 32px);color:var(--ui-table-empty-color, var(--c7, #707070));font-size:var(--ui-table-font-size, 14px);text-align:center}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}@media(prefers-reduced-motion:reduce){.toggle svg{transition:none}}\n"],
		dependencies: [
			{
				kind: "directive",
				type: NgTemplateOutlet,
				selector: "[ngTemplateOutlet]",
				inputs: [
					"ngTemplateOutletContext",
					"ngTemplateOutlet",
					"ngTemplateOutletInjector"
				]
			},
			{
				kind: "component",
				type: UiMenu,
				selector: "ui-menu",
				inputs: ["items", "label"],
				outputs: ["itemSelect"]
			},
			{
				kind: "component",
				type: UiSkeleton,
				selector: "ui-skeleton",
				inputs: [
					"variant",
					"quantity",
					"label"
				]
			}
		],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiTable,
	decorators: [{
		type: Component,
		args: [{
			imports: [
				NgTemplateOutlet,
				UiMenu,
				UiSkeleton
			],
			selector: "ui-table",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "@if (loading()) {\n  <ui-skeleton variant=\"table\" [quantity]=\"loadingRows()\" [label]=\"loadingText()\" />\n} @else if (rows().length === 0) {\n  <p class=\"table-empty\" role=\"status\">{{ emptyText() }}</p>\n} @else {\n  <div class=\"table-wrapper\">\n    <table class=\"table\" [attr.aria-label]=\"label() || null\">\n      <thead>\n        <tr>\n          @if (detail()) {\n            <th scope=\"col\" class=\"col-toggle\"><span class=\"visually-hidden\">{{ detailsLabel() }}</span></th>\n          }\n          @for (column of columns(); track column.key) {\n            <th scope=\"col\" [style.text-align]=\"column.align\" [style.width]=\"column.width\">\n              {{ column.header }}\n            </th>\n          }\n          @if (actions().length) {\n            <th scope=\"col\" class=\"col-actions\">\n              <span class=\"visually-hidden\">{{ actionsLabel() }}</span>\n            </th>\n          }\n        </tr>\n      </thead>\n\n      <tbody>\n        @for (row of rows(); track rowKey()(row); let i = $index) {\n          <tr [class.expanded]=\"isExpanded(row)\">\n            @if (detail()) {\n              <td class=\"col-toggle\">\n                <button\n                  class=\"toggle\"\n                  type=\"button\"\n                  [attr.aria-expanded]=\"isExpanded(row)\"\n                  [attr.aria-controls]=\"isExpanded(row) ? detailId(i) : null\"\n                  [attr.aria-label]=\"(isExpanded(row) ? hideDetailsLabel() : showDetailsLabel()) + ': ' + rowName(row)\"\n                  (click)=\"toggleRow(row)\"\n                >\n                  <svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n                    <path d=\"M6 3l5 5-5 5\" />\n                  </svg>\n                </button>\n              </td>\n            }\n\n            @for (column of columns(); track column.key) {\n              <td [style.text-align]=\"column.align\">\n                @if (cellTemplateMap().get(column.key); as template) {\n                  <ng-container\n                    [ngTemplateOutlet]=\"template\"\n                    [ngTemplateOutletContext]=\"{ $implicit: row, value: cellValue(row, column) }\"\n                  />\n                } @else {\n                  {{ cellValue(row, column) }}\n                }\n              </td>\n            }\n\n            @if (actions().length) {\n              <td class=\"col-actions\">\n                <ui-menu\n                  [items]=\"menuItems().get(row) ?? []\"\n                  [label]=\"actionsLabel() + ': ' + rowName(row)\"\n                  (itemSelect)=\"emitAction($event, row)\"\n                />\n              </td>\n            }\n          </tr>\n\n          @if (detail(); as detail) {\n            @if (isExpanded(row)) {\n              <tr class=\"detail-row\" [id]=\"detailId(i)\">\n                <td [attr.colspan]=\"colspan()\">\n                  <ng-container [ngTemplateOutlet]=\"detail.template\" [ngTemplateOutletContext]=\"{ $implicit: row }\" />\n                </td>\n              </tr>\n            }\n          }\n        }\n      </tbody>\n    </table>\n  </div>\n}\n",
			styles: [":host{display:block}.table-wrapper{overflow-x:auto;border:var(--ui-table-border, 0);border-radius:var(--ui-table-border-radius, 0)}.table{width:100%;border-collapse:collapse;color:var(--ui-table-color, var(--c9, #404040));font-size:var(--ui-table-font-size, 14px)}.table th{padding:var(--ui-table-cell-padding, 10px 12px);border-bottom:1px solid var(--ui-table-header-border-color, var(--b2, #d9e2ff));background:var(--ui-table-header-background, transparent);color:var(--ui-table-header-color, var(--c7, #707070));font-weight:var(--ui-table-header-font-weight, 600);text-align:start;white-space:nowrap}.table td{padding:var(--ui-table-cell-padding, 10px 12px);border-bottom:1px solid var(--ui-table-row-border-color, var(--b1, #e7ecff));white-space:var(--ui-table-cell-white-space, normal);vertical-align:middle}.table tbody tr:not(.detail-row):hover{background:var(--ui-table-row-hover-background, var(--b0, #f0f3ff))}.table tr.expanded>td{border-bottom-color:transparent}.col-toggle,.col-actions{width:1%}.col-actions{text-align:end}.toggle{display:grid;place-items:center;width:var(--ui-table-toggle-size, 28px);height:var(--ui-table-toggle-size, 28px);padding:0;border:0;border-radius:6px;background:transparent;color:var(--ui-table-toggle-color, var(--c8, #595959));cursor:pointer}.toggle svg{transition:transform .2s ease}.toggle[aria-expanded=true] svg{transform:rotate(90deg)}.toggle:hover{background:var(--ui-table-toggle-hover-background, var(--b1, #e7ecff))}.toggle:focus-visible{outline:2px solid var(--ui-table-focus-color, var(--b10, #1769aa));outline-offset:2px}.detail-row>td{padding:var(--ui-table-detail-padding, 16px 12px 16px 52px);background:var(--ui-table-detail-background, var(--b0, #f0f3ff));white-space:normal}.table-empty{margin:0;padding:var(--ui-table-empty-padding, 32px);color:var(--ui-table-empty-color, var(--c7, #707070));font-size:var(--ui-table-font-size, 14px);text-align:center}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}@media(prefers-reduced-motion:reduce){.toggle svg{transition:none}}\n"]
		}]
	}],
	propDecorators: {
		columns: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "columns",
				required: true
			}]
		}],
		rows: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "rows",
				required: true
			}]
		}],
		rowKey: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "rowKey",
				required: false
			}]
		}],
		actions: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "actions",
				required: false
			}]
		}],
		label: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "label",
				required: false
			}]
		}],
		loading: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "loading",
				required: false
			}]
		}],
		loadingRows: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "loadingRows",
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
		actionsLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "actionsLabel",
				required: false
			}]
		}],
		detailsLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "detailsLabel",
				required: false
			}]
		}],
		showDetailsLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "showDetailsLabel",
				required: false
			}]
		}],
		hideDetailsLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "hideDetailsLabel",
				required: false
			}]
		}],
		action: [{
			type: i0.Output,
			args: ["action"]
		}],
		rowToggle: [{
			type: i0.Output,
			args: ["rowToggle"]
		}],
		detail: [{
			type: i0.ContentChild,
			args: [i0.forwardRef(() => UiTableDetail), { isSignal: true }]
		}],
		cellTemplates: [{
			type: i0.ContentChildren,
			args: [i0.forwardRef(() => UiTableCell), { isSignal: true }]
		}]
	}
});
var UiAuthLayout = class UiAuthLayout {
	panel = input.required(...ngDevMode ? [{ debugName: "panel" }] : /* istanbul ignore next */ []);
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiAuthLayout,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiAuthLayout,
		isStandalone: true,
		selector: "ui-layout-auth",
		inputs: { panel: {
			classPropertyName: "panel",
			publicName: "panel",
			isSignal: true,
			isRequired: true,
			transformFunction: null
		} },
		ngImport: i0,
		template: "<div class=\"auth\">\n  <div class=\"auth-panel\">\n    @if (panel().logo; as logo) {\n      <img class=\"auth-logo\" [ngSrc]=\"logo.src\" [alt]=\"logo.alt\" [width]=\"logo.width\" [height]=\"logo.height\" />\n    }\n    @if (panel().image; as image) {\n      <img\n        class=\"auth-image\"\n        [ngSrc]=\"image.src\"\n        [alt]=\"image.alt\"\n        [width]=\"image.width\"\n        [height]=\"image.height\"\n        priority\n      />\n    }\n    <p class=\"auth-title\">{{ panel().title }}</p>\n    @if (panel().description) {\n      <p class=\"auth-description\">{{ panel().description }}</p>\n    }\n  </div>\n\n  <main class=\"auth-content\">\n    <div class=\"auth-content-inner\">\n      <ng-content />\n    </div>\n  </main>\n</div>\n",
		styles: [":host{display:block}.auth{box-sizing:border-box;display:grid;grid-template-columns:minmax(0,var(--ui-auth-panel-width, 1fr)) minmax(0,1fr);gap:var(--ui-auth-gap, 14px);min-height:100dvh;padding:var(--ui-auth-padding, 14px);background:var(--ui-auth-background, var(--white, #fff))}.auth-panel{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:var(--ui-auth-panel-padding, 48px);border-radius:var(--ui-auth-panel-border-radius, 20px);background:var(--ui-auth-panel-background, var(--g1, #e7ecff));text-align:center}.auth-logo{align-self:flex-start;width:auto;height:var(--ui-auth-logo-height, 32px)}.auth-image{width:100%;max-width:var(--ui-auth-image-max-width, 420px);height:auto}.auth-title{margin:0;color:var(--ui-auth-title-color, var(--b12, #152557));font-size:var(--ui-auth-title-font-size, clamp(22px, 2vw + 10px, 32px));font-weight:700;line-height:1.25}.auth-description{max-width:44ch;margin:0;color:var(--ui-auth-description-color, var(--c8, #595959));font-size:var(--ui-auth-description-font-size, 15px);line-height:1.5}.auth-content{display:grid;place-items:center;padding:var(--ui-auth-content-padding, 32px 16px)}.auth-content-inner{width:100%;max-width:var(--ui-auth-content-max-width, 420px)}@media(max-width:900px){.auth{grid-template-columns:minmax(0,1fr);grid-template-rows:auto 1fr}.auth-panel{flex-direction:row;justify-content:flex-start;padding:16px 20px;text-align:left}.auth-logo{align-self:center}.auth-image,.auth-description{display:none}.auth-title{font-size:18px}}\n"],
		dependencies: [{
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
	type: UiAuthLayout,
	decorators: [{
		type: Component,
		args: [{
			imports: [NgOptimizedImage],
			selector: "ui-layout-auth",
			changeDetection: ChangeDetectionStrategy.OnPush,
			template: "<div class=\"auth\">\n  <div class=\"auth-panel\">\n    @if (panel().logo; as logo) {\n      <img class=\"auth-logo\" [ngSrc]=\"logo.src\" [alt]=\"logo.alt\" [width]=\"logo.width\" [height]=\"logo.height\" />\n    }\n    @if (panel().image; as image) {\n      <img\n        class=\"auth-image\"\n        [ngSrc]=\"image.src\"\n        [alt]=\"image.alt\"\n        [width]=\"image.width\"\n        [height]=\"image.height\"\n        priority\n      />\n    }\n    <p class=\"auth-title\">{{ panel().title }}</p>\n    @if (panel().description) {\n      <p class=\"auth-description\">{{ panel().description }}</p>\n    }\n  </div>\n\n  <main class=\"auth-content\">\n    <div class=\"auth-content-inner\">\n      <ng-content />\n    </div>\n  </main>\n</div>\n",
			styles: [":host{display:block}.auth{box-sizing:border-box;display:grid;grid-template-columns:minmax(0,var(--ui-auth-panel-width, 1fr)) minmax(0,1fr);gap:var(--ui-auth-gap, 14px);min-height:100dvh;padding:var(--ui-auth-padding, 14px);background:var(--ui-auth-background, var(--white, #fff))}.auth-panel{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:var(--ui-auth-panel-padding, 48px);border-radius:var(--ui-auth-panel-border-radius, 20px);background:var(--ui-auth-panel-background, var(--g1, #e7ecff));text-align:center}.auth-logo{align-self:flex-start;width:auto;height:var(--ui-auth-logo-height, 32px)}.auth-image{width:100%;max-width:var(--ui-auth-image-max-width, 420px);height:auto}.auth-title{margin:0;color:var(--ui-auth-title-color, var(--b12, #152557));font-size:var(--ui-auth-title-font-size, clamp(22px, 2vw + 10px, 32px));font-weight:700;line-height:1.25}.auth-description{max-width:44ch;margin:0;color:var(--ui-auth-description-color, var(--c8, #595959));font-size:var(--ui-auth-description-font-size, 15px);line-height:1.5}.auth-content{display:grid;place-items:center;padding:var(--ui-auth-content-padding, 32px 16px)}.auth-content-inner{width:100%;max-width:var(--ui-auth-content-max-width, 420px)}@media(max-width:900px){.auth{grid-template-columns:minmax(0,1fr);grid-template-rows:auto 1fr}.auth-panel{flex-direction:row;justify-content:flex-start;padding:16px 20px;text-align:left}.auth-logo{align-self:center}.auth-image,.auth-description{display:none}.auth-title{font-size:18px}}\n"]
		}]
	}],
	propDecorators: { panel: [{
		type: i0.Input,
		args: [{
			isSignal: true,
			alias: "panel",
			required: true
		}]
	}] }
});
let nextId = 0;
var UiDashboardLayout = class UiDashboardLayout {
	menu = input.required(...ngDevMode ? [{ debugName: "menu" }] : /* istanbul ignore next */ []);
	brandName = input("", ...ngDevMode ? [{ debugName: "brandName" }] : /* istanbul ignore next */ []);
	brandLogo = input(null, ...ngDevMode ? [{ debugName: "brandLogo" }] : /* istanbul ignore next */ []);
	user = input(null, ...ngDevMode ? [{ debugName: "user" }] : /* istanbul ignore next */ []);
	userLoading = input(false, ...ngDevMode ? [{ debugName: "userLoading" }] : /* istanbul ignore next */ []);
	userError = input(null, ...ngDevMode ? [{ debugName: "userError" }] : /* istanbul ignore next */ []);
	showThemeToggle = input(true, ...ngDevMode ? [{ debugName: "showThemeToggle" }] : /* istanbul ignore next */ []);
	collapsed = model(false, ...ngDevMode ? [{ debugName: "collapsed" }] : /* istanbul ignore next */ []);
	menuLabel = input("Menu principal", ...ngDevMode ? [{ debugName: "menuLabel" }] : /* istanbul ignore next */ []);
	collapseLabel = input("Recolher menu", ...ngDevMode ? [{ debugName: "collapseLabel" }] : /* istanbul ignore next */ []);
	expandLabel = input("Expandir menu", ...ngDevMode ? [{ debugName: "expandLabel" }] : /* istanbul ignore next */ []);
	openMenuLabel = input("Abrir menu", ...ngDevMode ? [{ debugName: "openMenuLabel" }] : /* istanbul ignore next */ []);
	closeMenuLabel = input("Fechar menu", ...ngDevMode ? [{ debugName: "closeMenuLabel" }] : /* istanbul ignore next */ []);
	logoutLabel = input("Sair", ...ngDevMode ? [{ debugName: "logoutLabel" }] : /* istanbul ignore next */ []);
	userLoadingLabel = input("Carregando usuário...", ...ngDevMode ? [{ debugName: "userLoadingLabel" }] : /* istanbul ignore next */ []);
	logout = output();
	mobileOpen = signal(false, ...ngDevMode ? [{ debugName: "mobileOpen" }] : /* istanbul ignore next */ []);
	sidebarId = `ui-dashboard-sidebar-${nextId++}`;
	userState = computed(() => {
		if (this.userLoading()) return "loading";
		if (this.userError()) return "error";
		return this.user() ? "content" : "none";
	}, ...ngDevMode ? [{ debugName: "userState" }] : /* istanbul ignore next */ []);
	initials = computed(() => {
		const parts = (this.user()?.name ?? "").trim().split(/\s+/).filter(Boolean);
		if (parts.length === 0) return "";
		return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
	}, ...ngDevMode ? [{ debugName: "initials" }] : /* istanbul ignore next */ []);
	toggle() {
		this.collapsed.update((value) => !value);
	}
	static ɵfac = i0.ɵɵngDeclareFactory({
		minVersion: "12.0.0",
		version: "22.2.1",
		ngImport: i0,
		type: UiDashboardLayout,
		deps: [],
		target: i0.ɵɵFactoryTarget.Component
	});
	static ɵcmp = i0.ɵɵngDeclareComponent({
		minVersion: "17.0.0",
		version: "22.2.1",
		type: UiDashboardLayout,
		isStandalone: true,
		selector: "ui-layout-dashboard",
		inputs: {
			menu: {
				classPropertyName: "menu",
				publicName: "menu",
				isSignal: true,
				isRequired: true,
				transformFunction: null
			},
			brandName: {
				classPropertyName: "brandName",
				publicName: "brandName",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			brandLogo: {
				classPropertyName: "brandLogo",
				publicName: "brandLogo",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			user: {
				classPropertyName: "user",
				publicName: "user",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			userLoading: {
				classPropertyName: "userLoading",
				publicName: "userLoading",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			userError: {
				classPropertyName: "userError",
				publicName: "userError",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			showThemeToggle: {
				classPropertyName: "showThemeToggle",
				publicName: "showThemeToggle",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			collapsed: {
				classPropertyName: "collapsed",
				publicName: "collapsed",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			menuLabel: {
				classPropertyName: "menuLabel",
				publicName: "menuLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			collapseLabel: {
				classPropertyName: "collapseLabel",
				publicName: "collapseLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			expandLabel: {
				classPropertyName: "expandLabel",
				publicName: "expandLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			openMenuLabel: {
				classPropertyName: "openMenuLabel",
				publicName: "openMenuLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			closeMenuLabel: {
				classPropertyName: "closeMenuLabel",
				publicName: "closeMenuLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			logoutLabel: {
				classPropertyName: "logoutLabel",
				publicName: "logoutLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			},
			userLoadingLabel: {
				classPropertyName: "userLoadingLabel",
				publicName: "userLoadingLabel",
				isSignal: true,
				isRequired: false,
				transformFunction: null
			}
		},
		outputs: {
			collapsed: "collapsedChange",
			logout: "logout"
		},
		host: { listeners: { "document:keydown.escape": "mobileOpen.set(false)" } },
		ngImport: i0,
		template: "<div class=\"dashboard\" [class.collapsed]=\"collapsed()\" [class.mobile-open]=\"mobileOpen()\">\n  <aside class=\"sidebar\" [id]=\"sidebarId\">\n    <div class=\"sidebar-header\">\n      <div class=\"brand\">\n        @if (brandLogo(); as logo) {\n          <img class=\"brand-logo\" [src]=\"logo\" alt=\"\" width=\"24\" height=\"24\" />\n        }\n        @if (brandName()) {\n          <strong class=\"brand-name\">{{ brandName() }}</strong>\n        }\n      </div>\n\n      <button\n        class=\"icon-button collapse-button\"\n        type=\"button\"\n        [attr.aria-label]=\"collapsed() ? expandLabel() : collapseLabel()\"\n        [attr.aria-expanded]=\"!collapsed()\"\n        [attr.aria-controls]=\"sidebarId\"\n        (click)=\"toggle()\"\n      >\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n          <rect x=\"2\" y=\"3\" width=\"14\" height=\"12\" rx=\"2\" />\n          <path d=\"M7 3v12\" />\n          @if (collapsed()) {\n            <path d=\"M10.5 7.5L12 9l-1.5 1.5\" />\n          } @else {\n            <path d=\"M12 7.5L10.5 9 12 10.5\" />\n          }\n        </svg>\n      </button>\n\n      <button\n        class=\"icon-button close-button\"\n        type=\"button\"\n        [attr.aria-label]=\"closeMenuLabel()\"\n        (click)=\"mobileOpen.set(false)\"\n      >\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\" focusable=\"false\">\n          <path d=\"M3 3l10 10M13 3L3 13\" />\n        </svg>\n      </button>\n    </div>\n\n    <nav class=\"sidebar-nav\" [attr.aria-label]=\"menuLabel()\">\n      <ul>\n        @for (item of menu(); track item.id) {\n          <li>\n            <a\n              class=\"nav-link\"\n              [routerLink]=\"item.link\"\n              routerLinkActive=\"active\"\n              ariaCurrentWhenActive=\"page\"\n              [attr.title]=\"collapsed() ? item.text : null\"\n              (click)=\"mobileOpen.set(false)\"\n            >\n              @if (item.icon) {\n                <img class=\"nav-icon\" [src]=\"item.icon\" alt=\"\" width=\"16\" height=\"16\" />\n              } @else {\n                <span class=\"nav-icon nav-initial\" aria-hidden=\"true\">{{ item.text.charAt(0) }}</span>\n              }\n              <span class=\"nav-text\">{{ item.text }}</span>\n            </a>\n          </li>\n        }\n      </ul>\n    </nav>\n\n    @if (userState() !== 'none') {\n      <div class=\"user\">\n        <span class=\"avatar\" aria-hidden=\"true\">\n          @if (user()?.avatar; as avatar) {\n            <img [src]=\"avatar\" alt=\"\" width=\"34\" height=\"34\" />\n          } @else {\n            {{ initials() }}\n          }\n        </span>\n\n        <div class=\"user-info\">\n          @switch (userState()) {\n            @case ('loading') {\n              <ui-skeleton variant=\"menu\" [label]=\"userLoadingLabel()\" />\n            }\n            @case ('error') {\n              <span class=\"user-error\" role=\"alert\">{{ userError() }}</span>\n            }\n            @case ('content') {\n              <span class=\"user-name\">{{ user()?.name }}</span>\n              <span class=\"user-email\">{{ user()?.email }}</span>\n            }\n          }\n        </div>\n\n        <button\n          class=\"icon-button logout-button\"\n          type=\"button\"\n          [attr.aria-label]=\"logoutLabel()\"\n          [attr.title]=\"logoutLabel()\"\n          (click)=\"logout.emit()\"\n        >\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n            <path d=\"M6 14H3.5A1.5 1.5 0 0 1 2 12.5v-9A1.5 1.5 0 0 1 3.5 2H6M10.5 11.5L14 8l-3.5-3.5M14 8H6\" />\n          </svg>\n        </button>\n      </div>\n    }\n  </aside>\n\n  <div class=\"backdrop\" (click)=\"mobileOpen.set(false)\"></div>\n\n  <header class=\"header\">\n    <button\n      class=\"icon-button mobile-menu-button\"\n      type=\"button\"\n      [attr.aria-label]=\"openMenuLabel()\"\n      [attr.aria-expanded]=\"mobileOpen()\"\n      [attr.aria-controls]=\"sidebarId\"\n      (click)=\"mobileOpen.set(true)\"\n    >\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" aria-hidden=\"true\" focusable=\"false\">\n        <path d=\"M3 5h12M3 9h12M3 13h12\" />\n      </svg>\n    </button>\n    <ui-breadcrumb class=\"header-breadcrumb\" />\n    <div class=\"header-actions\">\n      <ng-content select=\"[uiDashboardHeader]\" />\n      @if (showThemeToggle()) {\n        <ui-theme-toggle />\n      }\n    </div>\n  </header>\n\n  <main class=\"main\">\n    <ng-content />\n  </main>\n</div>\n",
		styles: [":host{display:block}.dashboard{box-sizing:border-box;display:grid;grid-template-columns:var(--ui-dashboard-sidebar-width, 232px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);grid-template-areas:\"sidebar header\" \"sidebar main\";column-gap:var(--ui-dashboard-gap, 30px);row-gap:var(--ui-dashboard-header-gap, 20px);height:100dvh;padding:var(--ui-dashboard-padding, 14px);transition:grid-template-columns .3s ease}.sidebar{grid-area:sidebar;box-sizing:border-box;display:flex;flex-direction:column;gap:24px;min-height:0;overflow-x:hidden;overflow-y:auto;padding:var(--ui-dashboard-sidebar-padding, 18px);border:var(--ui-dashboard-sidebar-border, 1px solid var(--b4, #b5c6f9));border-radius:var(--ui-dashboard-sidebar-border-radius, 20px);background-color:var(--ui-dashboard-sidebar-background, var(--b0, #f0f3ff))}.sidebar-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:30px}.brand{display:flex;align-items:center;gap:12px;min-width:0}.brand-logo{flex-shrink:0}.brand-name{overflow:hidden;color:var(--ui-dashboard-brand-color, var(--c8, #595959));font-size:var(--ui-dashboard-brand-font-size, 13px);font-weight:600;white-space:nowrap;text-overflow:ellipsis}.icon-button{display:grid;flex-shrink:0;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--ui-dashboard-icon-color, var(--c8, #595959));cursor:pointer;transition:background-color .2s ease}.icon-button:hover{background-color:var(--ui-dashboard-icon-hover-background, var(--b1, #e7ecff))}.icon-button:focus-visible{outline:2px solid var(--ui-dashboard-focus-color, var(--b10, #1769aa));outline-offset:2px}.close-button,.mobile-menu-button{display:none}.sidebar-nav{flex:1;min-width:0}.sidebar-nav ul{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--ui-dashboard-nav-gap, 8px);margin:0;padding:0;list-style:none}.sidebar-nav li{min-width:0}.nav-link{box-sizing:border-box;display:flex;align-items:center;gap:8px;width:100%;min-width:0;min-height:var(--ui-dashboard-nav-height, 40px);padding:var(--ui-dashboard-nav-padding, 10px 14px);border-radius:var(--ui-dashboard-nav-border-radius, 40px);background-color:var(--ui-dashboard-nav-background, var(--b-white, #f6f9ff));color:var(--ui-dashboard-nav-color, var(--c7, #707070));font-size:var(--ui-dashboard-nav-font-size, 14px);font-weight:500;text-decoration:none;transition:background-color .2s ease}.nav-link:hover{background-color:var(--ui-dashboard-nav-hover-background, var(--b1, #e7ecff))}.nav-link.active{background-color:var(--ui-dashboard-nav-active-background, var(--b2, #d9e2ff));color:var(--ui-dashboard-nav-active-color, var(--b10, #335cd6));font-weight:600}.nav-link:focus-visible{outline:2px solid var(--ui-dashboard-focus-color, var(--b10, #1769aa));outline-offset:2px}.nav-icon{flex-shrink:0;width:16px;height:16px}.nav-initial{display:grid;place-items:center;font-size:12px;font-weight:700}.nav-text{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.user{display:flex;align-items:center;gap:8px;padding:2px;border:var(--ui-dashboard-user-border, 1px solid var(--b1, #e7ecff));border-radius:40px;background-color:var(--ui-dashboard-user-background, var(--b-white, #f6f9ff))}.avatar{display:grid;flex-shrink:0;place-items:center;width:34px;height:34px;overflow:hidden;border-radius:50%;background-color:var(--ui-dashboard-avatar-background, var(--b9, #4c72e2));color:var(--ui-dashboard-avatar-color, #fff);font-size:12px;font-weight:700}.avatar img{width:100%;height:100%;object-fit:cover}.user-info{display:grid;flex:1;gap:4px;min-width:0;--ui-skeleton-height: 26px;--ui-skeleton-border-radius: 13px}.user-info span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.user-name{color:var(--ui-dashboard-user-name-color, var(--c9, #404040));font-size:12px;font-weight:600}.user-email,.user-error{color:var(--ui-dashboard-user-email-color, var(--c7, #707070));font-size:11px}.user-error{color:var(--ui-dashboard-user-error-color, var(--erro, #b3261e))}.header{grid-area:header;display:flex;align-items:center;gap:12px;min-height:var(--ui-dashboard-header-height, 36px)}.header-breadcrumb{flex:1;min-width:0}.header-actions{display:flex;align-items:center;gap:12px}.main{grid-area:main;min-height:0;overflow-x:hidden;overflow-y:auto}.backdrop{display:none}@media(min-width:769px){.dashboard.collapsed{grid-template-columns:var(--ui-dashboard-sidebar-collapsed-width, 72px) minmax(0,1fr)}.dashboard.collapsed .sidebar{padding-inline:12px}.dashboard.collapsed .sidebar-header{flex-direction:column}.dashboard.collapsed .brand-name,.dashboard.collapsed .nav-text{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.dashboard.collapsed .nav-link{justify-content:center;padding:10px}.dashboard.collapsed .user{flex-direction:column;padding:4px 2px}.dashboard.collapsed .user-info{display:none}}@media(max-width:768px){.dashboard{grid-template-columns:minmax(0,1fr);grid-template-areas:\"header\" \"main\"}.sidebar{position:fixed;inset:0 auto 0 0;z-index:var(--ui-dashboard-z-index, 900);width:min(280px,85vw);border-radius:0 20px 20px 0;visibility:hidden;transform:translate(-100%);transition:transform .3s ease,visibility .3s}.collapse-button{display:none}.close-button,.mobile-menu-button{display:grid}.mobile-open .sidebar{visibility:visible;transform:none}.mobile-open .backdrop{position:fixed;inset:0;z-index:calc(var(--ui-dashboard-z-index, 900) - 1);display:block;background:var(--ui-dashboard-backdrop, rgba(11, 11, 11, .4))}}@media(prefers-reduced-motion:reduce){.dashboard,.sidebar,.nav-link,.icon-button{transition:none}}\n"],
		dependencies: [
			{
				kind: "directive",
				type: RouterLink,
				selector: "[routerLink]",
				inputs: [
					"target",
					"queryParams",
					"fragment",
					"queryParamsHandling",
					"state",
					"info",
					"relativeTo",
					"preserveFragment",
					"skipLocationChange",
					"replaceUrl",
					"browserUrl",
					"routerLink"
				]
			},
			{
				kind: "directive",
				type: RouterLinkActive,
				selector: "[routerLinkActive]",
				inputs: [
					"routerLinkActiveOptions",
					"ariaCurrentWhenActive",
					"routerLinkActive"
				],
				outputs: ["isActiveChange"],
				exportAs: ["routerLinkActive"]
			},
			{
				kind: "component",
				type: UiBreadcrumb,
				selector: "ui-breadcrumb",
				inputs: ["label", "separator"]
			},
			{
				kind: "component",
				type: UiSkeleton,
				selector: "ui-skeleton",
				inputs: [
					"variant",
					"quantity",
					"label"
				]
			},
			{
				kind: "component",
				type: UiThemeToggle,
				selector: "ui-theme-toggle",
				inputs: ["label"]
			}
		],
		changeDetection: i0.ChangeDetectionStrategy.OnPush
	});
};
i0.ɵɵngDeclareClassMetadata({
	minVersion: "12.0.0",
	version: "22.2.1",
	ngImport: i0,
	type: UiDashboardLayout,
	decorators: [{
		type: Component,
		args: [{
			imports: [
				RouterLink,
				RouterLinkActive,
				UiBreadcrumb,
				UiSkeleton,
				UiThemeToggle
			],
			selector: "ui-layout-dashboard",
			changeDetection: ChangeDetectionStrategy.OnPush,
			host: { "(document:keydown.escape)": "mobileOpen.set(false)" },
			template: "<div class=\"dashboard\" [class.collapsed]=\"collapsed()\" [class.mobile-open]=\"mobileOpen()\">\n  <aside class=\"sidebar\" [id]=\"sidebarId\">\n    <div class=\"sidebar-header\">\n      <div class=\"brand\">\n        @if (brandLogo(); as logo) {\n          <img class=\"brand-logo\" [src]=\"logo\" alt=\"\" width=\"24\" height=\"24\" />\n        }\n        @if (brandName()) {\n          <strong class=\"brand-name\">{{ brandName() }}</strong>\n        }\n      </div>\n\n      <button\n        class=\"icon-button collapse-button\"\n        type=\"button\"\n        [attr.aria-label]=\"collapsed() ? expandLabel() : collapseLabel()\"\n        [attr.aria-expanded]=\"!collapsed()\"\n        [attr.aria-controls]=\"sidebarId\"\n        (click)=\"toggle()\"\n      >\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n          <rect x=\"2\" y=\"3\" width=\"14\" height=\"12\" rx=\"2\" />\n          <path d=\"M7 3v12\" />\n          @if (collapsed()) {\n            <path d=\"M10.5 7.5L12 9l-1.5 1.5\" />\n          } @else {\n            <path d=\"M12 7.5L10.5 9 12 10.5\" />\n          }\n        </svg>\n      </button>\n\n      <button\n        class=\"icon-button close-button\"\n        type=\"button\"\n        [attr.aria-label]=\"closeMenuLabel()\"\n        (click)=\"mobileOpen.set(false)\"\n      >\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\" focusable=\"false\">\n          <path d=\"M3 3l10 10M13 3L3 13\" />\n        </svg>\n      </button>\n    </div>\n\n    <nav class=\"sidebar-nav\" [attr.aria-label]=\"menuLabel()\">\n      <ul>\n        @for (item of menu(); track item.id) {\n          <li>\n            <a\n              class=\"nav-link\"\n              [routerLink]=\"item.link\"\n              routerLinkActive=\"active\"\n              ariaCurrentWhenActive=\"page\"\n              [attr.title]=\"collapsed() ? item.text : null\"\n              (click)=\"mobileOpen.set(false)\"\n            >\n              @if (item.icon) {\n                <img class=\"nav-icon\" [src]=\"item.icon\" alt=\"\" width=\"16\" height=\"16\" />\n              } @else {\n                <span class=\"nav-icon nav-initial\" aria-hidden=\"true\">{{ item.text.charAt(0) }}</span>\n              }\n              <span class=\"nav-text\">{{ item.text }}</span>\n            </a>\n          </li>\n        }\n      </ul>\n    </nav>\n\n    @if (userState() !== 'none') {\n      <div class=\"user\">\n        <span class=\"avatar\" aria-hidden=\"true\">\n          @if (user()?.avatar; as avatar) {\n            <img [src]=\"avatar\" alt=\"\" width=\"34\" height=\"34\" />\n          } @else {\n            {{ initials() }}\n          }\n        </span>\n\n        <div class=\"user-info\">\n          @switch (userState()) {\n            @case ('loading') {\n              <ui-skeleton variant=\"menu\" [label]=\"userLoadingLabel()\" />\n            }\n            @case ('error') {\n              <span class=\"user-error\" role=\"alert\">{{ userError() }}</span>\n            }\n            @case ('content') {\n              <span class=\"user-name\">{{ user()?.name }}</span>\n              <span class=\"user-email\">{{ user()?.email }}</span>\n            }\n          }\n        </div>\n\n        <button\n          class=\"icon-button logout-button\"\n          type=\"button\"\n          [attr.aria-label]=\"logoutLabel()\"\n          [attr.title]=\"logoutLabel()\"\n          (click)=\"logout.emit()\"\n        >\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\">\n            <path d=\"M6 14H3.5A1.5 1.5 0 0 1 2 12.5v-9A1.5 1.5 0 0 1 3.5 2H6M10.5 11.5L14 8l-3.5-3.5M14 8H6\" />\n          </svg>\n        </button>\n      </div>\n    }\n  </aside>\n\n  <div class=\"backdrop\" (click)=\"mobileOpen.set(false)\"></div>\n\n  <header class=\"header\">\n    <button\n      class=\"icon-button mobile-menu-button\"\n      type=\"button\"\n      [attr.aria-label]=\"openMenuLabel()\"\n      [attr.aria-expanded]=\"mobileOpen()\"\n      [attr.aria-controls]=\"sidebarId\"\n      (click)=\"mobileOpen.set(true)\"\n    >\n      <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" aria-hidden=\"true\" focusable=\"false\">\n        <path d=\"M3 5h12M3 9h12M3 13h12\" />\n      </svg>\n    </button>\n    <ui-breadcrumb class=\"header-breadcrumb\" />\n    <div class=\"header-actions\">\n      <ng-content select=\"[uiDashboardHeader]\" />\n      @if (showThemeToggle()) {\n        <ui-theme-toggle />\n      }\n    </div>\n  </header>\n\n  <main class=\"main\">\n    <ng-content />\n  </main>\n</div>\n",
			styles: [":host{display:block}.dashboard{box-sizing:border-box;display:grid;grid-template-columns:var(--ui-dashboard-sidebar-width, 232px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);grid-template-areas:\"sidebar header\" \"sidebar main\";column-gap:var(--ui-dashboard-gap, 30px);row-gap:var(--ui-dashboard-header-gap, 20px);height:100dvh;padding:var(--ui-dashboard-padding, 14px);transition:grid-template-columns .3s ease}.sidebar{grid-area:sidebar;box-sizing:border-box;display:flex;flex-direction:column;gap:24px;min-height:0;overflow-x:hidden;overflow-y:auto;padding:var(--ui-dashboard-sidebar-padding, 18px);border:var(--ui-dashboard-sidebar-border, 1px solid var(--b4, #b5c6f9));border-radius:var(--ui-dashboard-sidebar-border-radius, 20px);background-color:var(--ui-dashboard-sidebar-background, var(--b0, #f0f3ff))}.sidebar-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:30px}.brand{display:flex;align-items:center;gap:12px;min-width:0}.brand-logo{flex-shrink:0}.brand-name{overflow:hidden;color:var(--ui-dashboard-brand-color, var(--c8, #595959));font-size:var(--ui-dashboard-brand-font-size, 13px);font-weight:600;white-space:nowrap;text-overflow:ellipsis}.icon-button{display:grid;flex-shrink:0;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--ui-dashboard-icon-color, var(--c8, #595959));cursor:pointer;transition:background-color .2s ease}.icon-button:hover{background-color:var(--ui-dashboard-icon-hover-background, var(--b1, #e7ecff))}.icon-button:focus-visible{outline:2px solid var(--ui-dashboard-focus-color, var(--b10, #1769aa));outline-offset:2px}.close-button,.mobile-menu-button{display:none}.sidebar-nav{flex:1;min-width:0}.sidebar-nav ul{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--ui-dashboard-nav-gap, 8px);margin:0;padding:0;list-style:none}.sidebar-nav li{min-width:0}.nav-link{box-sizing:border-box;display:flex;align-items:center;gap:8px;width:100%;min-width:0;min-height:var(--ui-dashboard-nav-height, 40px);padding:var(--ui-dashboard-nav-padding, 10px 14px);border-radius:var(--ui-dashboard-nav-border-radius, 40px);background-color:var(--ui-dashboard-nav-background, var(--b-white, #f6f9ff));color:var(--ui-dashboard-nav-color, var(--c7, #707070));font-size:var(--ui-dashboard-nav-font-size, 14px);font-weight:500;text-decoration:none;transition:background-color .2s ease}.nav-link:hover{background-color:var(--ui-dashboard-nav-hover-background, var(--b1, #e7ecff))}.nav-link.active{background-color:var(--ui-dashboard-nav-active-background, var(--b2, #d9e2ff));color:var(--ui-dashboard-nav-active-color, var(--b10, #335cd6));font-weight:600}.nav-link:focus-visible{outline:2px solid var(--ui-dashboard-focus-color, var(--b10, #1769aa));outline-offset:2px}.nav-icon{flex-shrink:0;width:16px;height:16px}.nav-initial{display:grid;place-items:center;font-size:12px;font-weight:700}.nav-text{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.user{display:flex;align-items:center;gap:8px;padding:2px;border:var(--ui-dashboard-user-border, 1px solid var(--b1, #e7ecff));border-radius:40px;background-color:var(--ui-dashboard-user-background, var(--b-white, #f6f9ff))}.avatar{display:grid;flex-shrink:0;place-items:center;width:34px;height:34px;overflow:hidden;border-radius:50%;background-color:var(--ui-dashboard-avatar-background, var(--b9, #4c72e2));color:var(--ui-dashboard-avatar-color, #fff);font-size:12px;font-weight:700}.avatar img{width:100%;height:100%;object-fit:cover}.user-info{display:grid;flex:1;gap:4px;min-width:0;--ui-skeleton-height: 26px;--ui-skeleton-border-radius: 13px}.user-info span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.user-name{color:var(--ui-dashboard-user-name-color, var(--c9, #404040));font-size:12px;font-weight:600}.user-email,.user-error{color:var(--ui-dashboard-user-email-color, var(--c7, #707070));font-size:11px}.user-error{color:var(--ui-dashboard-user-error-color, var(--erro, #b3261e))}.header{grid-area:header;display:flex;align-items:center;gap:12px;min-height:var(--ui-dashboard-header-height, 36px)}.header-breadcrumb{flex:1;min-width:0}.header-actions{display:flex;align-items:center;gap:12px}.main{grid-area:main;min-height:0;overflow-x:hidden;overflow-y:auto}.backdrop{display:none}@media(min-width:769px){.dashboard.collapsed{grid-template-columns:var(--ui-dashboard-sidebar-collapsed-width, 72px) minmax(0,1fr)}.dashboard.collapsed .sidebar{padding-inline:12px}.dashboard.collapsed .sidebar-header{flex-direction:column}.dashboard.collapsed .brand-name,.dashboard.collapsed .nav-text{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.dashboard.collapsed .nav-link{justify-content:center;padding:10px}.dashboard.collapsed .user{flex-direction:column;padding:4px 2px}.dashboard.collapsed .user-info{display:none}}@media(max-width:768px){.dashboard{grid-template-columns:minmax(0,1fr);grid-template-areas:\"header\" \"main\"}.sidebar{position:fixed;inset:0 auto 0 0;z-index:var(--ui-dashboard-z-index, 900);width:min(280px,85vw);border-radius:0 20px 20px 0;visibility:hidden;transform:translate(-100%);transition:transform .3s ease,visibility .3s}.collapse-button{display:none}.close-button,.mobile-menu-button{display:grid}.mobile-open .sidebar{visibility:visible;transform:none}.mobile-open .backdrop{position:fixed;inset:0;z-index:calc(var(--ui-dashboard-z-index, 900) - 1);display:block;background:var(--ui-dashboard-backdrop, rgba(11, 11, 11, .4))}}@media(prefers-reduced-motion:reduce){.dashboard,.sidebar,.nav-link,.icon-button{transition:none}}\n"]
		}]
	}],
	propDecorators: {
		menu: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "menu",
				required: true
			}]
		}],
		brandName: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "brandName",
				required: false
			}]
		}],
		brandLogo: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "brandLogo",
				required: false
			}]
		}],
		user: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "user",
				required: false
			}]
		}],
		userLoading: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "userLoading",
				required: false
			}]
		}],
		userError: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "userError",
				required: false
			}]
		}],
		showThemeToggle: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "showThemeToggle",
				required: false
			}]
		}],
		collapsed: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "collapsed",
				required: false
			}]
		}, {
			type: i0.Output,
			args: ["collapsedChange"]
		}],
		menuLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "menuLabel",
				required: false
			}]
		}],
		collapseLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "collapseLabel",
				required: false
			}]
		}],
		expandLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "expandLabel",
				required: false
			}]
		}],
		openMenuLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "openMenuLabel",
				required: false
			}]
		}],
		closeMenuLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "closeMenuLabel",
				required: false
			}]
		}],
		logoutLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "logoutLabel",
				required: false
			}]
		}],
		userLoadingLabel: [{
			type: i0.Input,
			args: [{
				isSignal: true,
				alias: "userLoadingLabel",
				required: false
			}]
		}],
		logout: [{
			type: i0.Output,
			args: ["logout"]
		}]
	}
});
function formatBytes(bytes) {
	if (!Number.isFinite(bytes) || bytes < 0) throw new Error("O valor de bytes não pode ser um número negativo.");
	const units = [
		"B",
		"KB",
		"MB",
		"GB",
		"TB"
	];
	let value = bytes;
	let unitIndex = 0;
	while (value >= 1024 && unitIndex < units.length - 1) {
		value /= 1024;
		unitIndex++;
	}
	return `${value.toFixed(unitIndex === 0 ? 0 : 2)} ${units[unitIndex]}`;
}
export { UiAuthLayout, UiAutocomplete, UiBanner, UiBreadcrumb, UiButton, UiCheckbox, UiColumnGraph, UiCopyTextButton, UiDashboardLayout, UiField, UiFieldset, UiInput, UiInputNumber, UiInputPassword, UiInputSearch, UiMenu, UiModal, UiOtpInput, UiPagination, UiPieChart, UiPopup, UiSelect, UiSkeleton, UiTable, UiTableCell, UiTableDetail, UiThemeToggle, formatBytes };

//# sourceMappingURL=reusable-union-kit.mjs.map