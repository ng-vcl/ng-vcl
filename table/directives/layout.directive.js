/*
Layout

The auto layout mode is used by default. For tables with toolbars however, the vclFixed class must be used to enable the fixed table layout mode.
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
var LayoutDirective = /** @class */ (function () {
    function LayoutDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    LayoutDirective.prototype.ngOnChanges = function (changes) {
        if (changes.fixed) {
            this.fixed = this.tableService.ClassToggle('vclFixed', this.fixed, 'table');
        }
    };
    __decorate([
        Input('fixed'),
        __metadata("design:type", Object)
    ], LayoutDirective.prototype, "fixed", void 0);
    LayoutDirective = __decorate([
        Directive({
            selector: '[fixed]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], LayoutDirective);
    return LayoutDirective;
}());
export { LayoutDirective };
