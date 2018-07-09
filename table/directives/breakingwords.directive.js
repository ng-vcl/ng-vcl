/*
Wrapping behavior

To allow breaking words of textual cell content apart, use the modifier vclBreakWords. This works best in combination with the fixed layout mode.
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
var BreakingWordsDirective = /** @class */ (function () {
    function BreakingWordsDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    BreakingWordsDirective.prototype.ngOnChanges = function (changes) {
        if (changes.breakWords) {
            this.breakWords = this.tableService.ClassToggle('vclBreakWords', this.breakWords, '');
        }
    };
    __decorate([
        Input('break-words'),
        __metadata("design:type", Object)
    ], BreakingWordsDirective.prototype, "breakWords", void 0);
    BreakingWordsDirective = __decorate([
        Directive({
            selector: '[break-words]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], BreakingWordsDirective);
    return BreakingWordsDirective;
}());
export { BreakingWordsDirective };
