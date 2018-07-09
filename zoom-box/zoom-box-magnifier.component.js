var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer2 } from '@angular/core';
var ZoomBoxMagnifierComponent = /** @class */ (function () {
    function ZoomBoxMagnifierComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        renderer.addClass(element.nativeElement, 'vclZoomBoxMagnifier');
    }
    ZoomBoxMagnifierComponent.prototype.update = function () {
        var styles = {
            top: this.parent.y + 'px',
            left: this.parent.x + 'px',
            width: this.parent.width + 'px',
            height: this.parent.height + 'px',
            display: (!this.parent.hiding && !this.parent.invisible) ? 'block' : 'none',
            'pointer-events': 'none'
        };
        for (var style in styles) {
            this.renderer.setStyle(this.element.nativeElement, style, styles[style]);
        }
    };
    ZoomBoxMagnifierComponent = __decorate([
        Component({
            selector: 'vcl-zoom-box-magnifier',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], ZoomBoxMagnifierComponent);
    return ZoomBoxMagnifierComponent;
}());
export { ZoomBoxMagnifierComponent };
