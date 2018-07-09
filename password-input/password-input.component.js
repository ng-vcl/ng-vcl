var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { InputDirective } from './../input/index';
var PasswordInputComponent = /** @class */ (function () {
    function PasswordInputComponent() {
        this.visibleIcon = 'fa:eye';
        this.invisibleIcon = 'fa:eye-slash';
        this.visible = false;
        this.disabled = false;
    }
    Object.defineProperty(PasswordInputComponent.prototype, "buttonIcon", {
        get: function () {
            return this.visible ? this.visibleIcon : this.invisibleIcon;
        },
        enumerable: true,
        configurable: true
    });
    PasswordInputComponent.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    __decorate([
        ContentChild(InputDirective, { read: InputDirective }),
        __metadata("design:type", InputDirective)
    ], PasswordInputComponent.prototype, "input", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PasswordInputComponent.prototype, "visibleIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PasswordInputComponent.prototype, "invisibleIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PasswordInputComponent.prototype, "visible", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PasswordInputComponent.prototype, "disabled", void 0);
    PasswordInputComponent = __decorate([
        Component({
            template: "<ng-content></ng-content>\n<button vcl-button\n        [icon]=\"buttonIcon\" \n        [disabled]=\"disabled\"\n        class=\"vclSquare\" \n        (click)=\"toggle()\">\n</button>\n",
            selector: 'vcl-password-input',
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclInputGroup]': 'true',
                '[attr.tabindex]': '-1'
            }
        })
    ], PasswordInputComponent);
    return PasswordInputComponent;
}());
export { PasswordInputComponent };
