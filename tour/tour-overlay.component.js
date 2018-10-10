var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TourService } from './tour.service';
var TourOverlayComponent = /** @class */ (function () {
    function TourOverlayComponent(tour) {
        this.tour = tour;
    }
    TourOverlayComponent = __decorate([
        Component({
            selector: 'vcl-tour-overlay',
            template: "<div \r\n  class=\"vclTourOverlay\" \r\n  [class.vclLayoutHidden]=\"!tour.showOverlay\"\r\n  (click)=\"tour.onOverlayClick()\">\r\n</div>",
            styles: ["\r\n.vclTourOverlay {\r\n    position: fixed !important ;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, .5);\r\n    z-index: 20;\r\n    top: 0;\r\n    left: 0;\r\n}"]
        }),
        __metadata("design:paramtypes", [TourService])
    ], TourOverlayComponent);
    return TourOverlayComponent;
}());
export { TourOverlayComponent };
