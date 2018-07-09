/*
Text alignment

Left alignment is default, for centered text use class vclAlignCentered and for right aligned text vclAlignRight on tds.
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
var AlignmentRightDirective = /** @class */ (function () {
    function AlignmentRightDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AlignmentRightDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclAlignRight', this.align, 'td');
        }
    };
    __decorate([
        Input('align-right'),
        __metadata("design:type", Object)
    ], AlignmentRightDirective.prototype, "align", void 0);
    AlignmentRightDirective = __decorate([
        Directive({
            selector: '[align-right]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], AlignmentRightDirective);
    return AlignmentRightDirective;
}());
export { AlignmentRightDirective };
