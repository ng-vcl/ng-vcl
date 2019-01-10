var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChild, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { LayerRef } from '../layer/index';
import { ModalBodyComponent } from './modal-body.component';
import { ModalFooterComponent } from './modal-footer.component';
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
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "closeButton", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "class", void 0);
    __decorate([
        ContentChild(ModalBodyComponent),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "bodyComponent", void 0);
    __decorate([
        ContentChild(ModalFooterComponent),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "footerComponent", void 0);
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
            template: "\n<ng-template vcl-layer #layerModal=\"layer\" [modal]=\"true\">\n  <div class=\"vclLayer\" role=\"dialog\">\n    <div class=\"vclLayerBox\">\n      <div [ngClass]=\"class\" class=\"vclPanel vclPanelDialog vclNoMargin\" role=\"dialog\">\n        <div *ngIf=\"closeButton || title\" class=\"vclPanelHeader vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\">\n          <h3 class=\"vclPanelTitle\">{{title}}</h3>\n          <button *ngIf=\"closeButton\" type=\"button\" class=\"vclButton vclTransparent\" (tap)=\"layerModal.close()\" >\n            <div class=\"vclIcogram\"><div class=\"vclIcon fa fa-times\" aria-hidden=\"true\" aria-label=\"Close\" role=\"img\"></div></div>\n          </button>\n        </div>\n        <div class=\"vclPanelBody\">\n          <div class=\"vclPanelContent\" *ngIf=\"bodyComponent != null\">\n            <ng-content select=\"vcl-modal-body\"></ng-content>\n          </div>\n        </div>\n        <div class=\"vclPanelFooter vclNoBg vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" *ngIf=\"footerComponent != null\">\n          <div></div>\n          <ng-content select=\"vcl-modal-footer\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>"
        })
    ], ModalComponent);
    return ModalComponent;
}());
export { ModalComponent };
