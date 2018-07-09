var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, HostListener, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CheckboxComponent; }),
    multi: true
};
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.checkedIcon = 'fa:check-square-o';
        this.uncheckedIcon = 'fa:square-o';
        this.disabled = false;
        this.iconPosition = 'left';
        this.checked = false;
        /**
        Action fired when the `checked` state changes due to user interaction.
        */
        this.checkedChange = new EventEmitter();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
        // Store cva disabled state in an extra property to remember the old state after the radio group has been disabled
        this.cvaDisabled = false;
    }
    CheckboxComponent.prototype.onKeyup = function (e) {
        switch (e.code) {
            case 'Space':
                e.preventDefault();
                this.updateValue();
                break;
        }
    };
    CheckboxComponent.prototype.onTap = function (e) {
        e.preventDefault();
        return this.updateValue();
    };
    CheckboxComponent.prototype.updateValue = function () {
        if (this.isDisabled) {
            return;
        }
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
        this.onTouched();
        this.onChange(this.checked);
    };
    Object.defineProperty(CheckboxComponent.prototype, "icon", {
        get: function () {
            return this.checked ? this.checkedIcon : this.uncheckedIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "isDisabled", {
        get: function () {
            return this.cvaDisabled || this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.onBlur = function () {
        this.onTouched();
    };
    CheckboxComponent.prototype.writeValue = function (value) {
        this.checked = !!value;
        this.cdRef.markForCheck();
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.cvaDisabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "checkedIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "uncheckedIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "iconPosition", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "checked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "checkedChange", void 0);
    __decorate([
        HostListener('tap', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CheckboxComponent.prototype, "onTap", null);
    CheckboxComponent = __decorate([
        Component({
            selector: 'vcl-checkbox',
            template: "<ng-template #cb>\n  <div class=\"vclCheckbox\" \n      [class.vclDisabled]=\"isDisabled\" \n      role=\"checkbox\" \n      [attr.tabindex]=\"tabindex\" \n      [attr.aria-checked]=\"checked\"\n      [attr.aria-disabled]=\"isDisabled\"\n      (keyup)=\"onKeyup($event)\"\n      (blur)=\"onBlur()\"\n      >\n  <div vcl-icon [icon]=\"icon\"></div>\n</div>  \n</ng-template>\n\n<label vcl-form-control-label [wrapping]=\"true\" [label]=\"label\">\n  <ng-container *ngIf=\"iconPosition==='left'\" [ngTemplateOutlet]=\"cb\"></ng-container>\n  {{label }}\n  <ng-content></ng-content>\n  <ng-container *ngIf=\"iconPosition==='right'\" [ngTemplateOutlet]=\"cb\"></ng-container>\n</label>\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclInputControlGroup]': 'true',
            }
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], CheckboxComponent);
    return CheckboxComponent;
}());
export { CheckboxComponent };
