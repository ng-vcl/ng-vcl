var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostBinding, Input, HostListener, ElementRef } from '@angular/core';
var ButtonDirective = /** @class */ (function () {
    function ButtonDirective(elementRef) {
        this.elementRef = elementRef;
        this.disabled = false;
        this.hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)
    }
    Object.defineProperty(ButtonDirective.prototype, "isDisabled", {
        get: function () {
            return this.disabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    ButtonDirective.prototype.onMouseEnter = function (e) { this.hovered = true; };
    ButtonDirective.prototype.onMouseLeave = function (e) { this.hovered = false; };
    ButtonDirective.prototype.focus = function () {
        this.elementRef.nativeElement.focus();
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonDirective.prototype, "disabled", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        HostBinding('attr.disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ButtonDirective.prototype, "isDisabled", null);
    __decorate([
        HostListener('mouseenter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ButtonDirective.prototype, "onMouseEnter", null);
    __decorate([
        HostListener('mouseleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ButtonDirective.prototype, "onMouseLeave", null);
    __decorate([
        HostBinding('class.vclHovered'),
        __metadata("design:type", Boolean)
    ], ButtonDirective.prototype, "hovered", void 0);
    ButtonDirective = __decorate([
        Directive({
            selector: 'button[vcl-button]',
            host: {
                '[class.vclButton]': 'true',
            },
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], ButtonDirective);
    return ButtonDirective;
}());
export { ButtonDirective };
