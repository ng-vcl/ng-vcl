var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var GalleryImageComponent = /** @class */ (function () {
    function GalleryImageComponent() {
        this.thumbnail = '';
        this.alt = '';
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GalleryImageComponent.prototype, "image", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GalleryImageComponent.prototype, "thumbnail", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GalleryImageComponent.prototype, "alt", void 0);
    GalleryImageComponent = __decorate([
        Component({
            selector: 'vcl-gallery-image',
            template: '<ng-content></ng-content>',
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], GalleryImageComponent);
    return GalleryImageComponent;
}());
export { GalleryImageComponent };
