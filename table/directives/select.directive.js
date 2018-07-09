/*
Row and cell selection

Individual cells and thus rows can be visually selected using the vclSelected class.
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
var SelectDirective = /** @class */ (function () {
    function SelectDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    SelectDirective.prototype.ngOnChanges = function (changes) {
        if (changes.selected) {
            this.selected = this.tableService.ClassToggle('vclSelected', this.selected, 'tr');
        }
    };
    __decorate([
        Input('selected'),
        __metadata("design:type", Object)
    ], SelectDirective.prototype, "selected", void 0);
    SelectDirective = __decorate([
        Directive({
            selector: '[selected]'
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], SelectDirective);
    return SelectDirective;
}());
export { SelectDirective };
