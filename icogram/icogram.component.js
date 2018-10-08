var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var IcogramComponent = /** @class */ (function () {
    function IcogramComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IcogramComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IcogramComponent.prototype, "prepIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IcogramComponent.prototype, "appIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IcogramComponent.prototype, "prepIconSrc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IcogramComponent.prototype, "appIconSrc", void 0);
    IcogramComponent = __decorate([
        Component({
            selector: 'vcl-icogram, div[vcl-icogram]',
            host: {
                '[class.vclIcogram]': 'true',
                '[attr.role]': '"img"',
            },
            template: "<div vclLayoutTarget=\"prepIcon\" vcl-icon *ngIf=\"prepIcon || prepIconSrc\" [icon]=\"prepIcon\">\r\n  <ng-content select=\"[prepIcon]\"></ng-content>\r\n</div>\r\n<div vclLayoutTarget=\"label\" *ngIf=\"!!label\" class=\"vclText\">{{label}}</div>\r\n<ng-content></ng-content>\r\n<div vclLayoutTarget=\"appIcon\" vcl-icon *ngIf=\"appIcon || appIconSrc\" [icon]=\"appIcon\">\r\n  <ng-content select=\"[appIcon]\"></ng-content>\r\n</div>\r\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], IcogramComponent);
    return IcogramComponent;
}());
export { IcogramComponent };
var IcogramSpanComponent = /** @class */ (function () {
    function IcogramSpanComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IcogramSpanComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IcogramSpanComponent.prototype, "prepIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IcogramSpanComponent.prototype, "appIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IcogramSpanComponent.prototype, "prepIconSrc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IcogramSpanComponent.prototype, "appIconSrc", void 0);
    IcogramSpanComponent = __decorate([
        Component({
            selector: 'span[vcl-icogram]',
            host: {
                '[class.vclIcogram]': 'true',
                '[attr.role]': '"img"',
            },
            template: "<span vclLayoutTarget=\"prepIcon\" vcl-icon *ngIf=\"prepIcon || prepIconSrc\" [icon]=\"prepIcon\">\r\n  <ng-content select=\"[prepIcon]\"></ng-content>\r\n</span>\r\n<span vclLayoutTarget=\"label\" *ngIf=\"!!label\" class=\"vclText\">{{label}}</span>\r\n<ng-content></ng-content>\r\n<span vclLayoutTarget=\"appIcon\" vcl-icon *ngIf=\"appIcon || appIconSrc\" [icon]=\"appIcon\">\r\n  <ng-content select=\"[appIcon]\"></ng-content>\r\n</span>\r\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], IcogramSpanComponent);
    return IcogramSpanComponent;
}());
export { IcogramSpanComponent };
