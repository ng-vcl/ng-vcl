var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Input, HostBinding, Self, Directive, Inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { VCL_ICON_RESOLVER } from './icon-resolver.service';
var IconDirective = /** @class */ (function () {
    function IconDirective() {
    }
    Object.defineProperty(IconDirective.prototype, "attrRole", {
        get: function () {
            return this.role || 'img';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconDirective.prototype, "attrAriaLabel", {
        get: function () {
            return this.ariaLabel || this.alt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconDirective.prototype, "isAriaHidden", {
        // Do not hide from aria when a label is provided
        get: function () {
            return !this.attrAriaLabel;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input('aria-label'),
        __metadata("design:type", Object)
    ], IconDirective.prototype, "ariaLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IconDirective.prototype, "alt", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IconDirective.prototype, "role", void 0);
    __decorate([
        HostBinding('attr.role'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], IconDirective.prototype, "attrRole", null);
    __decorate([
        HostBinding('attr.aria-label'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], IconDirective.prototype, "attrAriaLabel", null);
    __decorate([
        HostBinding('attr.aria-hidden'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], IconDirective.prototype, "isAriaHidden", null);
    IconDirective = __decorate([
        Directive({
            selector: 'vcl-icon, [vcl-icon]',
            host: {
                '[class.vclIcon]': 'true',
            },
            providers: [NgClass]
        })
    ], IconDirective);
    return IconDirective;
}());
export { IconDirective };
var IconFontDirective = /** @class */ (function () {
    function IconFontDirective(ngClass, _iconResolvers) {
        this.ngClass = ngClass;
        this._iconResolvers = _iconResolvers;
    }
    IconFontDirective.prototype.ngOnChanges = function (changes) {
        if (changes.icon) {
            var icon_1 = changes.icon.currentValue;
            var fontIconClass = void 0;
            if (!icon_1) {
                fontIconClass = [];
            }
            else {
                var resolver = this._iconResolvers.find(function (ir) { return ir.match(icon_1); });
                if (!resolver) {
                    fontIconClass = icon_1;
                }
                else {
                    fontIconClass = resolver.lookup(icon_1);
                }
            }
            this.ngClass.ngClass = fontIconClass;
            this.ngClass.ngDoCheck();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], IconFontDirective.prototype, "icon", void 0);
    IconFontDirective = __decorate([
        Directive({
            selector: 'vcl-icon[icon], [vcl-icon][icon]',
            providers: [NgClass]
        }),
        __param(0, Self()),
        __param(1, Inject(VCL_ICON_RESOLVER)),
        __metadata("design:paramtypes", [NgClass, Array])
    ], IconFontDirective);
    return IconFontDirective;
}());
export { IconFontDirective };
