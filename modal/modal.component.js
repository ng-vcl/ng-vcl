var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { LayerRef } from '@ng-vcl/ng-vcl';
var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.tapButton = new EventEmitter();
    }
    ModalComponent.prototype.open = function () {
        this.layerModal.open();
    };
    ModalComponent.prototype.close = function () {
        this.layerModal.close();
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ModalComponent.prototype, "buttons", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "showClose", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "class", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "tapButton", void 0);
    __decorate([
        ViewChild('layerModal'),
        __metadata("design:type", LayerRef)
    ], ModalComponent.prototype, "layerModal", void 0);
    ModalComponent = __decorate([
        Component({
            selector: 'vcl-modal',
            template: "\r\n<ng-template vcl-layer #layerModal=\"layer\" [modal]=\"true\">\r\n  <div class=\"vclLayer\" role=\"dialog\">\r\n    <div class=\"vclLayerBox\">\r\n      <div [ngClass]=\"class\" class=\"vclPanel vclPanelDialog vclNoMargin\" role=\"dialog\">\r\n          <div *ngIf=\"showClose || title\" class=\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\r\n            <h3 class=\"vclPanelTitle\">{{title}}</h3>\r\n            <button *ngIf=\"showClose\" type=\"button\" class=\"vclButton vclTransparent\" (tap)=\"layerModal.close()\" >\r\n              <div class=\"vclIcogram\"><div class=\"vclIcon fa fa-times\" aria-hidden=\"true\" aria-label=\"Close\" role=\"img\"></div></div>\r\n            </button>\r\n          </div>\r\n          <div class=\"vclPanelBody\">\r\n            <div class=\"vclPanelContent\">\r\n              <ng-content></ng-content>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"buttons\" class=\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\r\n            <div></div>\r\n            <div class=\"vclLooseButtonGroup\">\r\n              <ng-template ngFor let-iB [ngForOf]=\"buttons\">\r\n                <button type=\"button\" class=\"vclButton\" [ngClass]=\"iB.class\" (tap)=\"tapButton.emit(iB.onTap) \">\r\n                  <div class=\"vclIcogram\">\r\n                    <span class=\"vclText\">{{iB.label}}</span>\r\n                  </div>\r\n                </button>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</ng-template>"
        })
    ], ModalComponent);
    return ModalComponent;
}());
export { ModalComponent };
