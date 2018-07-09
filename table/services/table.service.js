var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Renderer2, ElementRef } from '@angular/core';
var TableService = /** @class */ (function () {
    function TableService(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    TableService.prototype.ClassToggle = function (className, add, targetEl) {
        if (this.el.nativeElement.localName == targetEl || !targetEl) {
            if (add === '' || add) {
                // For table tag vclTable class is required to enable vcl table behavior
                if (targetEl == 'table' && className != 'vclTable') {
                    this.addClass('vclTable');
                }
                return this.addClass(className);
            }
            else {
                return this.removeClass(className);
            }
        }
        else {
            console.error(className + " can only be used on " + targetEl + " tag!");
            return false;
        }
    };
    TableService.prototype.addClass = function (className) {
        this.renderer.addClass(this.el.nativeElement, className);
        return true;
    };
    TableService.prototype.removeClass = function (className) {
        this.renderer.removeClass(this.el.nativeElement, className);
        return false;
    };
    TableService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], TableService);
    return TableService;
}());
export { TableService };
