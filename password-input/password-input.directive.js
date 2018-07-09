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
import { Directive, SkipSelf, HostBinding, Self } from '@angular/core';
import { PasswordInputComponent } from './password-input.component';
import { InputDirective } from '../input/index';
var PasswordInputDirective = /** @class */ (function () {
    function PasswordInputDirective(input, passwordInput) {
        this.input = input;
        this.passwordInput = passwordInput;
    }
    Object.defineProperty(PasswordInputDirective.prototype, "isDisabled", {
        get: function () {
            return (this.input.disabled || this.passwordInput.disabled) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PasswordInputDirective.prototype, "type", {
        get: function () {
            return this.passwordInput.visible ? 'text' : 'password';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('class.vclDisabled'),
        HostBinding('attr.disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], PasswordInputDirective.prototype, "isDisabled", null);
    __decorate([
        HostBinding('attr.type'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], PasswordInputDirective.prototype, "type", null);
    PasswordInputDirective = __decorate([
        Directive({
            selector: 'input[vcl-password-input]'
        }),
        __param(0, Self()),
        __param(1, SkipSelf()),
        __metadata("design:paramtypes", [InputDirective,
            PasswordInputComponent])
    ], PasswordInputDirective);
    return PasswordInputDirective;
}());
export { PasswordInputDirective };
