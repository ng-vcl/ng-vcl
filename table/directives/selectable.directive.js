/*
Row and cell selectability

Rows can be styled to suggest their selectability (single or multiple) using the vclRowSelectability modifier which makes rows show a pointer cursor on hover.
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
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { TableService } from '../services/table.service';
var SelectableDirective = /** @class */ (function () {
    function SelectableDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    SelectableDirective.prototype.ngOnChanges = function (changes) {
        if (changes.alt) {
            this.selectable = this.tableService.ClassToggle('vclRowSelectability', this.selectable, 'tr');
        }
    };
    __decorate([
        Input('selectable'),
        __metadata("design:type", Object)
    ], SelectableDirective.prototype, "selectable", void 0);
    SelectableDirective = __decorate([
        Directive({
            selector: '[selectable]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], SelectableDirective);
    return SelectableDirective;
}());
export { SelectableDirective };
