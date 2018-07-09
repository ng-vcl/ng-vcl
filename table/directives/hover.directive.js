/*
Row hover highlighting

If a table row should be highlighted on hover, the vclRowHoverHighlight
modifier class can be used. This hovering's intention is just for the
sake of readability and should not indicate an action.
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
import { Directive, ElementRef, Renderer2 } from '@angular/core';
var HoverDirective = /** @class */ (function () {
    function HoverDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        if (this.el.nativeElement.localName == 'table') {
            renderer.addClass(el.nativeElement, 'vclRowHoverHighlight');
        }
        else {
            console.error('[hover] should be used for table tag only!');
        }
    }
    HoverDirective = __decorate([
        Directive({
            selector: '[hover]',
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], HoverDirective);
    return HoverDirective;
}());
export { HoverDirective };
