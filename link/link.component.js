var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding } from '@angular/core';
var LinkComponent = /** @class */ (function () {
    function LinkComponent() {
        this.disabled = false;
    }
    Object.defineProperty(LinkComponent.prototype, "styleCursor", {
        get: function () {
            return this.disabled ? 'not-allowed' : 'pointer';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkComponent.prototype, "attrHref", {
        get: function () {
            return this.disabled ? undefined : this.href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkComponent.prototype, "useIcogram", {
        get: function () {
            return (this.appIcon || this.prepIcon);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('attr.title'),
        HostBinding('attr.aria-label'),
        Input(),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "title", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata("design:type", Boolean)
    ], LinkComponent.prototype, "disabled", void 0);
    __decorate([
        HostBinding('style.cursor'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], LinkComponent.prototype, "styleCursor", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "href", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "prepIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LinkComponent.prototype, "appIcon", void 0);
    __decorate([
        HostBinding('attr.href'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], LinkComponent.prototype, "attrHref", null);
    __decorate([
        HostBinding('class.vclContentLink'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], LinkComponent.prototype, "useIcogram", null);
    LinkComponent = __decorate([
        Component({
            selector: 'a[vcl-link]',
            template: "<span vcl-icogram\n  [label]=\"label || href\"\n  [prepIcon]=\"prepIcon\"\n  [appIcon]=\"appIcon\">\n  <ng-content></ng-content>\n</span>\n"
        })
    ], LinkComponent);
    return LinkComponent;
}());
export { LinkComponent };
