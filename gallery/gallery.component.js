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
import { Component, ContentChildren, Inject, InjectionToken, Input, Optional, QueryList } from '@angular/core';
import { GalleryImageComponent } from './gallery-image.component';
import { AnimationBuilder } from '@angular/animations';
export var GALLERY_ANIMATIONS = new InjectionToken('@ng-vcl/ng-vcl#gallery_animations');
export var ImageChange;
(function (ImageChange) {
    ImageChange[ImageChange["PREVIOUS"] = 0] = "PREVIOUS";
    ImageChange[ImageChange["NEXT"] = 1] = "NEXT";
})(ImageChange || (ImageChange = {}));
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(builder, animations) {
        this.builder = builder;
        this.animations = animations;
        this.selectedImage = 0;
        this.wrap = false;
    }
    GalleryComponent.prototype.ngAfterViewInit = function () {
        if (this.animations) {
            if (this.animations.middleRefade) {
                this.middleRefadeAnimationFactory = this.builder.build(this.animations.middleRefade);
            }
            if (this.animations.nextToMiddle) {
                this.nextToMiddleAnimationFactory = this.builder.build(this.animations.nextToMiddle);
            }
            if (this.animations.previousToMiddle) {
                this.previousToMiddleAnimationFactory = this.builder.build(this.animations.previousToMiddle);
            }
        }
    };
    GalleryComponent.prototype.ngAfterContentInit = function () {
        this.imageArray = this.images ? this.images.toArray() : [];
    };
    GalleryComponent.prototype.selectImage = function (index) {
        if (index !== undefined) {
            this.selectedImage = Math.max(0, Math.min(this.imageArray.length, index));
        }
    };
    GalleryComponent.prototype.nextImage = function () {
        var next = this.selectedImage + 1;
        if (!this.wrap) {
            next = Math.min(next, this.imageArray.length - 1);
        }
        if (next >= this.imageArray.length) {
            next = 0;
        }
        return next;
    };
    GalleryComponent.prototype.previousImage = function () {
        var previous = this.selectedImage - 1;
        if (!this.wrap) {
            previous = Math.max(previous, 0);
        }
        if (previous < 0) {
            previous = this.imageArray.length - 1;
        }
        return previous;
    };
    GalleryComponent.prototype.selectNext = function () {
        this.selectedImage = this.nextImage();
    };
    GalleryComponent.prototype.selectPrevious = function () {
        this.selectedImage = this.previousImage();
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], GalleryComponent.prototype, "selectedImage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], GalleryComponent.prototype, "wrap", void 0);
    __decorate([
        ContentChildren(GalleryImageComponent),
        __metadata("design:type", QueryList)
    ], GalleryComponent.prototype, "images", void 0);
    GalleryComponent = __decorate([
        Component({
            selector: 'vcl-gallery',
            template: "<div class=\"vclGallery\" touch-action=\"pan-y\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
            host: {
                '[attr.role]': '"gallery"',
            }
        }),
        __param(1, Optional()), __param(1, Inject(GALLERY_ANIMATIONS)),
        __metadata("design:paramtypes", [AnimationBuilder, Object])
    ], GalleryComponent);
    return GalleryComponent;
}());
export { GalleryComponent };
