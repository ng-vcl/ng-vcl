var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, forwardRef, HostBinding, HostListener, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return FlipSwitchComponent; }),
    multi: true
};
var FlipSwitchComponent = /** @class */ (function () {
    function FlipSwitchComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.onLabel = 'On';
        this.offLabel = 'Off';
        this.value = false;
        this.disabled = false;
        this.valueChange = new EventEmitter();
    }
    FlipSwitchComponent.prototype.onTap = function () {
        this.toggle();
    };
    FlipSwitchComponent.prototype.keydown = function (ev) {
        switch (ev.code) {
            case 'Space':
                ev.preventDefault();
                this.toggle();
                break;
            case 'ArrowLeft':
                ev.preventDefault();
                if (!this.value) {
                    this.toggle();
                }
                break;
            case 'ArrowRight':
                ev.preventDefault();
                if (this.value) {
                    this.toggle();
                }
                break;
        }
    };
    FlipSwitchComponent.prototype.toggle = function () {
        if (this.disabled) {
            return;
        }
        this.value = !this.value;
        this.valueChange.emit(this.value);
        this.onChangeCallback && this.onChangeCallback(this.value);
    };
    FlipSwitchComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.cdRef.markForCheck();
    };
    FlipSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    FlipSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    FlipSwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate([
        HostBinding(),
        __metadata("design:type", Object)
    ], FlipSwitchComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FlipSwitchComponent.prototype, "onLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FlipSwitchComponent.prototype, "offLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], FlipSwitchComponent.prototype, "value", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata("design:type", Boolean)
    ], FlipSwitchComponent.prototype, "disabled", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FlipSwitchComponent.prototype, "valueChange", void 0);
    __decorate([
        HostListener('tap'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FlipSwitchComponent.prototype, "onTap", null);
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FlipSwitchComponent.prototype, "keydown", null);
    FlipSwitchComponent = __decorate([
        Component({
            selector: 'vcl-flip-switch',
            template: "<label class=\"vclFlipSwitchLabel\">\n  <div class=\"vclFlipSwitchTrack\">\n    <div class=\"vclFlipSwitchActive\" [attr.aria-hidden]=\"!value\">{{onLabel}}</div>\n    <div class=\"vclFlipSwitchInactive\" [attr.aria-hidden]=\"value\">{{offLabel}}</div>\n  </div>\n  <div class=\"vclFlipSwitchKnob\"></div>\n</label>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '[class.vclFlipSwitch]': 'true',
                '[class.vclFlipSwitchPressed]': 'value',
                '[attr.role]': '"button"',
                '[attr.aria-pressed]': 'value',
                '[attr.touch-action]': '"pan-y"'
            }
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], FlipSwitchComponent);
    return FlipSwitchComponent;
}());
export { FlipSwitchComponent };
