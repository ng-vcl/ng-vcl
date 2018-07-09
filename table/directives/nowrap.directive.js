/*
Truncation

In conjunction with the fixed layout mode, the modifier vclNoWrap can be used to truncate all cell content which would
span more than one line and show an ellipsis to indicate truncated content instead.
Individual cells can also be truncated using the general vclNoWrap and vclOverflowEllipsis modifiers from the utils module.
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
var NoWrapDirective = /** @class */ (function () {
    function NoWrapDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    NoWrapDirective.prototype.ngOnChanges = function (changes) {
        if (changes.nowrap) {
            this.nowrap = this.tableService.ClassToggle('vclNoWrap', this.nowrap, 'td');
        }
    };
    __decorate([
        Input('nowrap'),
        __metadata("design:type", Object)
    ], NoWrapDirective.prototype, "nowrap", void 0);
    NoWrapDirective = __decorate([
        Directive({
            selector: '[nowrap]'
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], NoWrapDirective);
    return NoWrapDirective;
}());
export { NoWrapDirective };
