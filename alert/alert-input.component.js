var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, ViewChild, Output, Input, EventEmitter, ElementRef } from '@angular/core';
import { AlertInput } from './types';
// TODO: support text, password, textarea, select, radio, checkbox file.
var AlertInputComponent = /** @class */ (function () {
    function AlertInputComponent() {
        this.alert = {};
        this.valueChange = new EventEmitter();
        this.inputValue = '';
    }
    AlertInputComponent.prototype.ngOnInit = function () {
        if (this.control === 'input' && typeof this.alert.inputValue === 'string') {
            this.inputValue = this.alert.inputValue;
        }
    };
    AlertInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.input && this.input.nativeElement && this.input.nativeElement.focus) {
            setTimeout(function () { return _this.input.nativeElement.focus(); }, 1);
        }
    };
    Object.defineProperty(AlertInputComponent.prototype, "control", {
        get: function () {
            switch (this.alert.input) {
                case AlertInput.Text: return 'input';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertInputComponent.prototype, "placeholder", {
        get: function () {
            return this.alert.inputPlaceholder || '';
        },
        enumerable: true,
        configurable: true
    });
    AlertInputComponent.prototype.inputValueChange = function (value) {
        this.valueChange.emit(value);
    };
    __decorate([
        ViewChild('input'),
        __metadata("design:type", ElementRef)
    ], AlertInputComponent.prototype, "input", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AlertInputComponent.prototype, "alert", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], AlertInputComponent.prototype, "valueChange", void 0);
    AlertInputComponent = __decorate([
        Component({
            template: "<input #input *ngIf=\"control==='input'\" class=\"vclInput\" [placeholder]=\"placeholder\" [ngModel]=\"inputValue\" (ngModelChange)=\"inputValueChange($event)\" autofocus>\r\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'alert-input'
        })
    ], AlertInputComponent);
    return AlertInputComponent;
}());
export { AlertInputComponent };
