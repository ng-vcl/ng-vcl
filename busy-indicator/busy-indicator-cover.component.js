var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
var BusyIndicatorCoverComponent = /** @class */ (function () {
    function BusyIndicatorCoverComponent() {
        this.busy = false;
        this.busyIndicatorType = 'circular';
        this.busyIndicatorDirection = 'vertical';
        this.busyIconHeight = '3em';
        this.busyIconWidth = '3em';
    }
    __decorate([
        Input('vclBusyIndicatorCover'),
        HostBinding('class.vclLoadingLayerContainer'),
        __metadata("design:type", Object)
    ], BusyIndicatorCoverComponent.prototype, "busy", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BusyIndicatorCoverComponent.prototype, "busyIndicatorType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BusyIndicatorCoverComponent.prototype, "busyIndicatorDirection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusyIndicatorCoverComponent.prototype, "busyLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusyIndicatorCoverComponent.prototype, "busyIconHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusyIndicatorCoverComponent.prototype, "busyIconWidth", void 0);
    BusyIndicatorCoverComponent = __decorate([
        Component({
            selector: '[vclBusyIndicatorCover]',
            template: "<ng-content></ng-content>\r\n<div *ngIf=\"busy\" tabindex=\"-1\" class=\"vclLoadingLayer\">\r\n  <div class=\"vclLoadingLayerContent\">\r\n    <vcl-busy-indicator [type]=\"busyIndicatorType\" [label]=\"busyLabel\" [iconHeight]=\"busyIconHeight\" [iconWidth]=\"busyIconWidth\"\r\n                        [layout]=\"busyIndicatorDirection\">\r\n      <span *ngIf=\"busyLabel\">{{busyLabel}}</span>\r\n    </vcl-busy-indicator>\r\n  </div>\r\n</div>\r\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], BusyIndicatorCoverComponent);
    return BusyIndicatorCoverComponent;
}());
export { BusyIndicatorCoverComponent };
