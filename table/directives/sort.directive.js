/*
Column sortability

Sortable columns are defined with the vclSortableCol class on the respective ths.
This class gives the whole header a pointer cursor on hover to indicate an action.
The application must register an appropriate event handler to change the sort order
for the whole th accordingly. Also an icon which indicates sortability should be
used as shown in the second column. The currently active sort order is indicated
by a respective icon and the classes vclSortAsc or vclSortDesc on the th element.
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
import { Directive, ElementRef, Renderer2, EventEmitter, Output, HostListener, ContentChild } from '@angular/core';
import { SortIconComponent } from '../components/sorticon.component';
import { TableService } from '../services/table.service';
var SortDirective = /** @class */ (function () {
    function SortDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.change = new EventEmitter();
        this.isHeader = false;
        this.tableService = new TableService(renderer, el);
        this.isHeader =
            this.tableService.ClassToggle('vclSortableCol', true, 'th') &&
                this.tableService.ClassToggle('vclClearFix', true, 'th');
    }
    SortDirective.prototype.OnChangeOrder = function () {
        if (this.isHeader) {
            this.order = this.order == 1 ? -1 : 1;
            this.change.emit(this.order);
            switch (this.order) {
                case 1: {
                    this.renderer.removeClass(this.el.nativeElement, 'vclClearFix');
                    this.renderer.removeClass(this.el.nativeElement, 'vclSortDesc');
                    this.renderer.addClass(this.el.nativeElement, 'vclSortAsc');
                    if (this.sortIconComponent) {
                        this.sortIconComponent.ChangeSortOrder(1);
                    }
                    break;
                }
                case -1: {
                    this.renderer.removeClass(this.el.nativeElement, 'vclSortAsc');
                    this.renderer.addClass(this.el.nativeElement, 'vclSortDesc');
                    if (this.sortIconComponent) {
                        this.sortIconComponent.ChangeSortOrder(-1);
                    }
                    break;
                }
            }
        }
    };
    __decorate([
        ContentChild(SortIconComponent),
        __metadata("design:type", SortIconComponent)
    ], SortDirective.prototype, "sortIconComponent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SortDirective.prototype, "change", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SortDirective.prototype, "OnChangeOrder", null);
    SortDirective = __decorate([
        Directive({
            selector: '[sort]',
            exportAs: 'sort-directive'
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef])
    ], SortDirective);
    return SortDirective;
}());
export { SortDirective };
