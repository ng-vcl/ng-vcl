/*
Vertical alignment

Top alignment is default, for vertically centered content use class
vclVAlignMiddle and for bottom aligned content vclVAlignBottom on a table or tds.
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
var AlignmentbottomDirective = /** @class */ (function () {
    function AlignmentbottomDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AlignmentbottomDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclVAlignBottom', this.align, '');
        }
    };
    __decorate([
        Input('align-bottom'),
        __metadata("design:type", Object)
    ], AlignmentbottomDirective.prototype, "align", void 0);
    AlignmentbottomDirective = __decorate([
        Directive({
            selector: '[align-bottom]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], AlignmentbottomDirective);
    return AlignmentbottomDirective;
}());
export { AlignmentbottomDirective };
