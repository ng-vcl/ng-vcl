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
import { ZoomBoxContainerComponent } from './zoom-box-container.component';
var ZoomBoxComponent = /** @class */ (function () {
    function ZoomBoxComponent() {
    }
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedSource", {
        get: function () {
            if (this.image) {
                return this.image;
            }
            return this.target.image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedX", {
        get: function () {
            if (this.image) {
                return this.target.x * this.scale;
            }
            return this.target.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedY", {
        get: function () {
            if (this.image) {
                return this.target.y * this.scale;
            }
            return this.target.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedWidth", {
        get: function () {
            if (this.image) {
                return this.target.width * this.scale;
            }
            return this.target.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedHeight", {
        get: function () {
            if (this.image) {
                return this.target.height * this.scale;
            }
            return this.target.height;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", ZoomBoxContainerComponent)
    ], ZoomBoxComponent.prototype, "target", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ZoomBoxComponent.prototype, "image", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ZoomBoxComponent.prototype, "scale", void 0);
    ZoomBoxComponent = __decorate([
        Component({
            selector: 'vcl-zoom-box',
            template: "<div class=\"vclZoomBox\" [ngStyle]=\"{\r\n'position': 'static',\r\n'background-image': 'url(' + zoomedSource + ')',\r\n'width': zoomedWidth + 'px',\r\n'height': zoomedHeight + 'px',\r\n'background-position-x': '-' + zoomedX + 'px',\r\n'background-position-y': '-' + zoomedY + 'px'}\"></div>\r\n\r\n",
            host: {
                '[attr.role]': '"zoombox"',
            },
            changeDetection: ChangeDetectionStrategy.Default
        })
    ], ZoomBoxComponent);
    return ZoomBoxComponent;
}());
export { ZoomBoxComponent };
