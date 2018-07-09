var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostBinding, Input, HostListener } from '@angular/core';
var InputDirective = /** @class */ (function () {
    function InputDirective() {
        this.disabled = false;
    }
    Object.defineProperty(InputDirective.prototype, "isDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDirective.prototype, "attrDisabled", {
        get: function () {
            return this.disabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], InputDirective.prototype, "disabled", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], InputDirective.prototype, "isDisabled", null);
    __decorate([
        HostBinding('attr.disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], InputDirective.prototype, "attrDisabled", null);
    InputDirective = __decorate([
        Directive({
            selector: 'input[vcl-input]',
            host: {
                '[class.vclInput]': 'true'
            }
        })
    ], InputDirective);
    return InputDirective;
}());
export { InputDirective };
var InputAutoSelectDirective = /** @class */ (function () {
    function InputAutoSelectDirective(elRef) {
        this.elRef = elRef;
    }
    // Autoselect
    InputAutoSelectDirective.prototype.onFocus = function () {
        this.elRef.nativeElement.select();
    };
    __decorate([
        HostListener('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputAutoSelectDirective.prototype, "onFocus", null);
    InputAutoSelectDirective = __decorate([
        Directive({
            selector: 'input[vcl-input][autoselect]',
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], InputAutoSelectDirective);
    return InputAutoSelectDirective;
}());
export { InputAutoSelectDirective };
