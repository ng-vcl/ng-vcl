/*
Column width

The column width can be defined in the table header using one of
the layout spans vclSpan-5p - vclSpan-100p from the corresponding module.
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
var SpanDirective = /** @class */ (function () {
    function SpanDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    SpanDirective.prototype.ngOnChanges = function (changes) {
        if (changes.width) {
            this.ngAfterContentInit();
        }
    };
    SpanDirective.prototype.ngAfterContentInit = function () {
        // Apply class only on header
        if (this.el.nativeElement.localName == 'th') {
            var vclSpan = "vclSpan-" + this.width + "p";
            this.renderer.addClass(this.el.nativeElement, vclSpan);
        }
        else {
            console.error('Column width can be set only for header tag!');
        }
    };
    __decorate([
        Input('span'),
        __metadata("design:type", Number)
    ], SpanDirective.prototype, "width", void 0);
    SpanDirective = __decorate([
        Directive({
            selector: '[span]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], SpanDirective);
    return SpanDirective;
}());
export { SpanDirective };
