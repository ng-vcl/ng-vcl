var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
var SortIconComponent = /** @class */ (function () {
    function SortIconComponent(e, renderer) {
        this.e = e;
        this.renderer = renderer;
        this.sort = 0;
        this.rootElement = e;
        this.renderer.addClass(e.nativeElement, 'vclFloatRight');
        this.renderer.addClass(e.nativeElement, 'vclIcon');
        this.renderer.addClass(e.nativeElement, 'fa');
        this.ChangeSortOrder(this.sort);
    }
    SortIconComponent.prototype.ChangeSortOrder = function (order) {
        this.renderer.removeClass(this.rootElement.nativeElement, 'fa-sort');
        this.renderer.removeClass(this.rootElement.nativeElement, 'fa-sort-up');
        this.renderer.removeClass(this.rootElement.nativeElement, 'fa-sort-down');
        switch (order) {
            case 1: {
                this.renderer.addClass(this.rootElement.nativeElement, 'fa-sort-up');
                break;
            }
            case -1: {
                this.renderer.addClass(this.rootElement.nativeElement, 'fa-sort-down');
                break;
            }
            default: {
                this.renderer.addClass(this.rootElement.nativeElement, 'fa-sort');
                break;
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SortIconComponent.prototype, "sort", void 0);
    SortIconComponent = __decorate([
        Component({
            selector: 'sort-icon',
            template: "<ng-content></ng-content>"
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], SortIconComponent);
    return SortIconComponent;
}());
export { SortIconComponent };
