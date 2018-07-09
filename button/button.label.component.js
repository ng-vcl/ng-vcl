var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';
var ButtonLabelComponent = /** @class */ (function () {
    function ButtonLabelComponent() {
    }
    Object.defineProperty(ButtonLabelComponent.prototype, "ariaLabel", {
        get: function () {
            return this.title || this.label;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonLabelComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonLabelComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonLabelComponent.prototype, "prepIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonLabelComponent.prototype, "appIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonLabelComponent.prototype, "appIconSrc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonLabelComponent.prototype, "prepIconSrc", void 0);
    __decorate([
        HostBinding('attr.aria-label'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ButtonLabelComponent.prototype, "ariaLabel", null);
    ButtonLabelComponent = __decorate([
        Component({
            selector: 'button[vcl-button][label]',
            template: "<span vcl-icogram\n  [label]=\"label\"\n  [prepIcon]=\"prepIcon\"\n  [appIcon]=\"appIcon\"\n  [appIconSrc]=\"appIconSrc\"\n  [prepIconSrc]=\"prepIconSrc\">\n  <ng-content></ng-content>\n</span>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ButtonLabelComponent);
    return ButtonLabelComponent;
}());
export { ButtonLabelComponent };
