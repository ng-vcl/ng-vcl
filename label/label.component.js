var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, HostBinding } from '@angular/core';
var LabelComponent = /** @class */ (function () {
    function LabelComponent() {
    }
    Object.defineProperty(LabelComponent.prototype, "vclPrimary", {
        get: function () {
            return this.type === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "vclSuccess", {
        get: function () {
            return this.type === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "vclInfo", {
        get: function () {
            return this.type === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "vclWarning", {
        get: function () {
            return this.type === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "vclError", {
        get: function () {
            return this.type === 'error';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input('vcl-label'),
        __metadata("design:type", Object)
    ], LabelComponent.prototype, "type", void 0);
    __decorate([
        HostBinding('class.vclPrimary'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], LabelComponent.prototype, "vclPrimary", null);
    __decorate([
        HostBinding('class.vclSuccess'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], LabelComponent.prototype, "vclSuccess", null);
    __decorate([
        HostBinding('class.vclInfo'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], LabelComponent.prototype, "vclInfo", null);
    __decorate([
        HostBinding('class.vclWarning'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], LabelComponent.prototype, "vclWarning", null);
    __decorate([
        HostBinding('class.vclError'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], LabelComponent.prototype, "vclError", null);
    LabelComponent = __decorate([
        Directive({
            selector: '[vcl-label]',
            host: {
                '[class.vclLabel]': 'true'
            }
        })
    ], LabelComponent);
    return LabelComponent;
}());
export { LabelComponent };
