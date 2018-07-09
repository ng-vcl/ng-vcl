/*
Borders style

By default, only horizontal borders are shown. For vertical borders, use the vclVerticalBorder modifier.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { TableService } from '../services/table.service';
var VerticalBorderDirective = /** @class */ (function () {
    function VerticalBorderDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    VerticalBorderDirective.prototype.ngOnChanges = function (changes) {
        if (changes.border) {
            this.border = this.tableService.ClassToggle('vclVerticalBorder', this.border, 'table');
        }
    };
    __decorate([
        Input('vertical-border'),
        __metadata("design:type", Object)
    ], VerticalBorderDirective.prototype, "border", void 0);
    VerticalBorderDirective = __decorate([
        Directive({
            selector: '[vertical-border]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], VerticalBorderDirective);
    return VerticalBorderDirective;
}());
export { VerticalBorderDirective };
