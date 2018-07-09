var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostBinding, Input, EventEmitter, HostListener, Output } from '@angular/core';
var ButtonSelectDirective = /** @class */ (function () {
    function ButtonSelectDirective() {
        this.selected = false;
        this.select = new EventEmitter();
    }
    Object.defineProperty(ButtonSelectDirective.prototype, "selectable", {
        set: function (value) {
            this.selected = !!value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonSelectDirective.prototype.onClick = function () {
        this.selected = !this.selected;
        this.select.emit(this.selected);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ButtonSelectDirective.prototype, "selectable", null);
    __decorate([
        Input(),
        HostBinding('class.vclSelected'),
        __metadata("design:type", Boolean)
    ], ButtonSelectDirective.prototype, "selected", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ButtonSelectDirective.prototype, "select", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ButtonSelectDirective.prototype, "onClick", null);
    ButtonSelectDirective = __decorate([
        Directive({
            selector: 'button[vcl-button][selectable]',
        })
    ], ButtonSelectDirective);
    return ButtonSelectDirective;
}());
export { ButtonSelectDirective };
