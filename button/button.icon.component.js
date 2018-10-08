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
var ButtonIconComponent = /** @class */ (function () {
    function ButtonIconComponent() {
    }
    __decorate([
        HostBinding('attr.aria-label'),
        Input(),
        __metadata("design:type", String)
    ], ButtonIconComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonIconComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonIconComponent.prototype, "iconSrc", void 0);
    ButtonIconComponent = __decorate([
        Component({
            selector: 'button[vcl-button][icon], button[vcl-button][iconSrc]',
            template: "<span vcl-icogram [appIcon]=\"icon\" [appIconSrc]=\"iconSrc\"></span>\r\n\r\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclSquare]': 'true'
            }
        })
    ], ButtonIconComponent);
    return ButtonIconComponent;
}());
export { ButtonIconComponent };
