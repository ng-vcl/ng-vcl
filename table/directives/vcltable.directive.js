/*
Enables VCL table behavior
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
var VclTableDirective = /** @class */ (function () {
    function VclTableDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    VclTableDirective.prototype.ngOnChanges = function (changes) {
        if (changes.alt) {
            this.selectable = this.tableService.ClassToggle('vclTable', this.selectable, 'table');
        }
    };
    __decorate([
        Input('selectable'),
        __metadata("design:type", Object)
    ], VclTableDirective.prototype, "selectable", void 0);
    VclTableDirective = __decorate([
        Directive({
            selector: '[vcl-table]',
            host: {
                '[class.vclTable]': 'true',
            }
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], VclTableDirective);
    return VclTableDirective;
}());
export { VclTableDirective };
