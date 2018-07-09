var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, ContentChild, Renderer2 } from '@angular/core';
import { ZoomBoxMagnifierComponent } from './zoom-box-magnifier.component';
var ZoomBoxContainerComponent = /** @class */ (function () {
    function ZoomBoxContainerComponent(element, renderer) {
        this.element = element;
        this.x = 0;
        this.y = 0;
        this.resetOnOut = false;
        this.hidden = false;
        this.hiding = false;
        this.invisible = false;
        this.startX = -1;
        this.startY = -1;
        renderer.setStyle(element.nativeElement, 'position', 'relative');
    }
    ZoomBoxContainerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.magnifier.parent = this;
        this.magnifier.update();
        this.imgContent = this.element.nativeElement.querySelector('img');
        this.imgContent.onmousemove = function (event) { return _this.onMove(event); };
        this.imgContent.onmouseover = function () { return _this.onOver(); };
        this.imgContent.onmouseout = function () { return _this.onOut(); };
    };
    ZoomBoxContainerComponent.prototype.onMove = function (event) {
        if (this.startX == -1) {
            this.startX = this.x;
            this.startY = this.y;
        }
        var minX = this.width / 2;
        var maxX = this.imgContent.width - (this.width / 2);
        var minY = this.height / 2;
        var maxY = this.imgContent.height - (this.height / 2);
        this.x = Math.max(minX, Math.min(maxX, event.layerX)) - (this.width / 2);
        this.y = Math.max(minY, Math.min(maxY, event.layerY)) - (this.height / 2);
        this.magnifier.update();
    };
    ZoomBoxContainerComponent.prototype.onOver = function () {
        if (this.hidden || this.hiding) {
            this.hiding = false;
        }
        this.magnifier.update();
    };
    ZoomBoxContainerComponent.prototype.onOut = function () {
        if (this.resetOnOut) {
            this.x = this.startX;
            this.y = this.startY;
        }
        if (this.hidden) {
            this.hiding = true;
        }
        this.magnifier.update();
    };
    Object.defineProperty(ZoomBoxContainerComponent.prototype, "image", {
        get: function () {
            return this.imgContent.getAttribute('src');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ZoomBoxContainerComponent.prototype, "x", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ZoomBoxContainerComponent.prototype, "y", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ZoomBoxContainerComponent.prototype, "width", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ZoomBoxContainerComponent.prototype, "height", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ZoomBoxContainerComponent.prototype, "resetOnOut", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ZoomBoxContainerComponent.prototype, "hidden", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ZoomBoxContainerComponent.prototype, "hiding", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ZoomBoxContainerComponent.prototype, "invisible", void 0);
    __decorate([
        ContentChild(ZoomBoxMagnifierComponent),
        __metadata("design:type", ZoomBoxMagnifierComponent)
    ], ZoomBoxContainerComponent.prototype, "magnifier", void 0);
    ZoomBoxContainerComponent = __decorate([
        Component({
            selector: 'vcl-zoom-box-container',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], ZoomBoxContainerComponent);
    return ZoomBoxContainerComponent;
}());
export { ZoomBoxContainerComponent };
