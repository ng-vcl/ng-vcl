/*
Border configuration

The cell borders are removed with vclNoBorder. The border style can be changed from solid to dotted by using the vclDottedBorder modifier.
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
var DottedBorderDirective = /** @class */ (function () {
    function DottedBorderDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    DottedBorderDirective.prototype.ngOnChanges = function (changes) {
        if (changes.dottedborder) {
            this.dottedborder = this.tableService.ClassToggle('vclDottedBorder', this.dottedborder, 'table');
        }
    };
    __decorate([
        Input('dottedborder'),
        __metadata("design:type", Object)
    ], DottedBorderDirective.prototype, "dottedborder", void 0);
    DottedBorderDirective = __decorate([
        Directive({
            selector: '[dottedborder]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], DottedBorderDirective);
    return DottedBorderDirective;
}());
export { DottedBorderDirective };
