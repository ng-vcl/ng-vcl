var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, TemplateRef, ViewChild, Input } from '@angular/core';
var DropdownOption = /** @class */ (function () {
    function DropdownOption() {
        this.disabled = false;
    }
    __decorate([
        ViewChild(TemplateRef),
        __metadata("design:type", TemplateRef)
    ], DropdownOption.prototype, "_content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DropdownOption.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DropdownOption.prototype, "metadata", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DropdownOption.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DropdownOption.prototype, "sublabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DropdownOption.prototype, "prepIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DropdownOption.prototype, "appIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DropdownOption.prototype, "appIconSrc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DropdownOption.prototype, "prepIconSrc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DropdownOption.prototype, "disabled", void 0);
    DropdownOption = __decorate([
        Component({
            selector: 'vcl-dropdown-option',
            template: '<ng-template><ng-content></ng-content></ng-template>'
        })
    ], DropdownOption);
    return DropdownOption;
}());
export { DropdownOption };
