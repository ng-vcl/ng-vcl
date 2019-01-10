var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, ElementRef, Input, Optional, ViewChild, HostListener } from '@angular/core';
import { GalleryComponent } from './gallery.component';
var GalleryBodyComponent = /** @class */ (function () {
    function GalleryBodyComponent(parent, elementRef) {
        this.elementRef = elementRef;
        this.initialized = false;
        this.containerHeight = 0;
        this.loadedCount = 0;
        if (this.target == null) {
            this.target = parent;
        }
    }
    GalleryBodyComponent.prototype.onSwipeLeft = function () {
        this.selectNext();
    };
    GalleryBodyComponent.prototype.onSwipeRight = function () {
        this.selectPrevious();
    };
    GalleryBodyComponent.prototype.ngAfterContentChecked = function () {
        if (!this.initialized) {
            var images = this.imageContainer.nativeElement.querySelectorAll('img');
            if (images.length == 0) {
                return;
            }
            this.initialized = true;
            this.imgS = Array.from(images);
        }
    };
    GalleryBodyComponent.prototype.imageLoaded = function () {
        this.loadedCount++;
        this.reload();
    };
    GalleryBodyComponent.prototype.reload = function () {
        var maxHeight = 0;
        var leftPos = 0;
        for (var i in this.imgS) {
            var image = this.imgS[i];
            if (image.clientHeight > maxHeight) {
                maxHeight = image.clientHeight;
            }
            image['style'].left = Math.round(leftPos) + 'px';
            leftPos += image.clientWidth;
        }
        this.containerHeight = maxHeight;
    };
    Object.defineProperty(GalleryBodyComponent.prototype, "translatePosition", {
        get: function () {
            if (!this.imgS) {
                return 0;
            }
            var result = this.imageContainer.nativeElement.clientWidth / 2;
            for (var i = 0; i < this.target.selectedImage; i++) {
                result -= this.imgS['' + i].clientWidth;
            }
            result -= this.imgS['' + this.target.selectedImage].clientWidth / 2;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryBodyComponent.prototype, "imageContainerStyle", {
        get: function () {
            return {
                height: this.containerHeight + 'px',
                transform: 'translateX(' + this.translatePosition + 'px)',
                transition: this.loadedCount == (this.target.images && this.target.images.length) ? 'transform 0.5s' : ''
            };
        },
        enumerable: true,
        configurable: true
    });
    GalleryBodyComponent.prototype.selectNext = function () {
        this.target.selectNext();
    };
    GalleryBodyComponent.prototype.selectPrevious = function () {
        this.target.selectPrevious();
    };
    __decorate([
        Input(),
        __metadata("design:type", GalleryComponent)
    ], GalleryBodyComponent.prototype, "target", void 0);
    __decorate([
        ViewChild('imageContainer'),
        __metadata("design:type", ElementRef)
    ], GalleryBodyComponent.prototype, "imageContainer", void 0);
    __decorate([
        HostListener('swipeleft'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GalleryBodyComponent.prototype, "onSwipeLeft", null);
    __decorate([
        HostListener('swiperight'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GalleryBodyComponent.prototype, "onSwipeRight", null);
    GalleryBodyComponent = __decorate([
        Component({
            selector: 'vcl-gallery-body',
            template: "<div class=\"vclGalleryContent\" style=\"overflow: hidden;\">\n  <button *ngIf=\"target.selectedImage > 0 || target.wrap\" vcl-button class=\"vclButton vclGalleryPrevButton\" (click)=\"selectPrevious()\">\n    <div class=\"vclIcon fas fa-caret-left\" aria-hidden=\"true\" aria-label=\"Previous\" role=\"img\"></div>\n  </button>\n\n  <div #imageContainer style=\"position: relative; width: 100%; height: 100%; transition: transform 0.5s\" [ngStyle]=\"imageContainerStyle\">\n    <img *ngFor=\"let img of target.imageArray; let i = index\" [attr.data-index]=\"i\" (click)=\"target.selectImage(i)\" (load)=\"imageLoaded()\" [src]=\"img.image\" [alt]=\"img.alt\" style=\"touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: absolute; left: 0; top: 0\">\n  </div>\n\n  <button *ngIf=\"target.selectedImage < (target.images ? target.images.length - 1 : 0) || target.wrap\" vcl-button class=\"vclButton vclGalleryNextButton\" (click)=\"selectNext()\">\n    <div class=\"vclIcon fas fa-caret-right\" aria-hidden=\"true\" aria-label=\"Previous\" role=\"img\"></div>\n  </button>\n</div>\n"
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [GalleryComponent, ElementRef])
    ], GalleryBodyComponent);
    return GalleryBodyComponent;
}());
export { GalleryBodyComponent };
