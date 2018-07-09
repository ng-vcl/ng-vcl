var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GalleryComponent, GALLERY_ANIMATIONS } from './gallery.component';
import { GalleryImageComponent } from './gallery-image.component';
import { GalleryBodyComponent } from './gallery-body.component';
import { GalleryFooterComponent } from './gallery-footer.component';
import { GalleryThumbnailsComponent } from './gallery-thumbnails.component';
export { GALLERY_ANIMATIONS };
var VCLGalleryModule = /** @class */ (function () {
    function VCLGalleryModule() {
    }
    VCLGalleryModule = __decorate([
        NgModule({
            imports: [CommonModule],
            exports: [GalleryComponent, GalleryImageComponent, GalleryBodyComponent, GalleryFooterComponent, GalleryThumbnailsComponent],
            declarations: [GalleryComponent, GalleryImageComponent, GalleryBodyComponent, GalleryFooterComponent, GalleryThumbnailsComponent]
        })
    ], VCLGalleryModule);
    return VCLGalleryModule;
}());
export { VCLGalleryModule };
