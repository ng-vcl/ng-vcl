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
var NoBorderDirective = /** @class */ (function () {
    function NoBorderDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    NoBorderDirective.prototype.ngOnChanges = function (changes) {
        if (changes.noborder) {
            this.noborder = this.tableService.ClassToggle('vclNoBorder', this.noborder, 'table');
        }
    };
    __decorate([
        Input('noborder'),
        __metadata("design:type", Object)
    ], NoBorderDirective.prototype, "noborder", void 0);
    NoBorderDirective = __decorate([
        Directive({
            selector: '[noborder]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], NoBorderDirective);
    return NoBorderDirective;
}());
export { NoBorderDirective };
