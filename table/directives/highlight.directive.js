/*
Cell and column highlighting

Single cells and columns can be highlighted by using the
vclCellHighlight class on each tdin the respective column or on single cells only.
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
var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    HighlightDirective.prototype.ngOnChanges = function (changes) {
        if (changes.hightlight) {
            this.hightlight = this.tableService.ClassToggle('vclCellHighlight', this.hightlight, 'td');
        }
    };
    __decorate([
        Input('hightlight'),
        __metadata("design:type", Object)
    ], HighlightDirective.prototype, "hightlight", void 0);
    HighlightDirective = __decorate([
        Directive({
            selector: '[hightlight]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], HighlightDirective);
    return HighlightDirective;
}());
export { HighlightDirective };
