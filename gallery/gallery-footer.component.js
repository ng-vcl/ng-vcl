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
import { Component, Input, Optional } from '@angular/core';
import { GalleryComponent } from './gallery.component';
var GalleryFooterComponent = /** @class */ (function () {
    function GalleryFooterComponent(parent) {
        if (this.target == null) {
            this.target = parent;
        }
    }
    __decorate([
        Input(),
        __metadata("design:type", GalleryComponent)
    ], GalleryFooterComponent.prototype, "target", void 0);
    GalleryFooterComponent = __decorate([
        Component({
            selector: 'vcl-gallery-footer',
            template: "<div class=\"vclGalleryFooter vclAlignCentered\">\r\n  {{ target.selectedImage + 1 }}&nbsp;/&nbsp;{{ target.images ? target.images.length : 0 }}\r\n</div>\r\n"
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [GalleryComponent])
    ], GalleryFooterComponent);
    return GalleryFooterComponent;
}());
export { GalleryFooterComponent };
