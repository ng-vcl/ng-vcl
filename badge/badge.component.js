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
var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    Object.defineProperty(BadgeComponent.prototype, "vclPrimary", {
        get: function () {
            return this.type === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BadgeComponent.prototype, "vclSuccess", {
        get: function () {
            return this.type === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BadgeComponent.prototype, "vclInfo", {
        get: function () {
            return this.type === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BadgeComponent.prototype, "vclWarning", {
        get: function () {
            return this.type === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BadgeComponent.prototype, "vclError", {
        get: function () {
            return this.type === 'error';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input('vcl-badge'),
        __metadata("design:type", Object)
    ], BadgeComponent.prototype, "type", void 0);
    __decorate([
        HostBinding('class.vclPrimary'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BadgeComponent.prototype, "vclPrimary", null);
    __decorate([
        HostBinding('class.vclSuccess'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BadgeComponent.prototype, "vclSuccess", null);
    __decorate([
        HostBinding('class.vclInfo'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BadgeComponent.prototype, "vclInfo", null);
    __decorate([
        HostBinding('class.vclWarning'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BadgeComponent.prototype, "vclWarning", null);
    __decorate([
        HostBinding('class.vclError'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], BadgeComponent.prototype, "vclError", null);
    BadgeComponent = __decorate([
        Directive({
            selector: '[vcl-badge]',
            host: {
                '[class.vclBadge]': 'true'
            }
        })
    ], BadgeComponent);
    return BadgeComponent;
}());
export { BadgeComponent };
