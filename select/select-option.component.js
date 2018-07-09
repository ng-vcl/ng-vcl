var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ViewChild, Input, TemplateRef } from '@angular/core';
var SelectOption = /** @class */ (function () {
    function SelectOption() {
        this.disabled = false;
    }
    __decorate([
        ViewChild(TemplateRef),
        __metadata("design:type", TemplateRef)
    ], SelectOption.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectOption.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SelectOption.prototype, "sublabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SelectOption.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SelectOption.prototype, "prepIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SelectOption.prototype, "appIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SelectOption.prototype, "appIconSrc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SelectOption.prototype, "prepIconSrc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SelectOption.prototype, "disabled", void 0);
    SelectOption = __decorate([
        Directive({
            selector: 'vcl-select-option'
        })
    ], SelectOption);
    return SelectOption;
}());
export { SelectOption };
