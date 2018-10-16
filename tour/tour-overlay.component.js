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
            template: "<div \n  class=\"vclTourOverlay\" \n  [class.vclLayoutHidden]=\"!tour.showOverlay\"\n  (click)=\"tour.onOverlayClick()\">\n</div>",
            styles: ["\n.vclTourOverlay {\n    position: fixed !important ;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, .5);\n    z-index: 20;\n    top: 0;\n    left: 0;\n}"]
        }),
        __metadata("design:paramtypes", [TourService])
    ], TourOverlayComponent);
    return TourOverlayComponent;
}());
export { TourOverlayComponent };
