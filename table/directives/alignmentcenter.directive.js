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
var AlignmentCenterDirective = /** @class */ (function () {
    function AlignmentCenterDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AlignmentCenterDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclAlignCentered', this.align, 'td');
        }
    };
    __decorate([
        Input('align-center'),
        __metadata("design:type", Object)
    ], AlignmentCenterDirective.prototype, "align", void 0);
    AlignmentCenterDirective = __decorate([
        Directive({
            selector: '[align-center]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], AlignmentCenterDirective);
    return AlignmentCenterDirective;
}());
export { AlignmentCenterDirective };
