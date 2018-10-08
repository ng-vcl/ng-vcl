var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLPopoverModule, VCLButtonModule } from '@ng-vcl/ng-vcl';
import { TourOverlayComponent } from './tour-overlay.component';
import { HintService } from './hint.service';
import { TourComponent } from './tour.component';
import { HintConfig } from './types';
export { HintService, HintConfig, TourComponent };
var VCLTourModule = /** @class */ (function () {
    function VCLTourModule() {
    }
    VCLTourModule = __decorate([
        NgModule({
            imports: [CommonModule, VCLPopoverModule, VCLButtonModule],
            exports: [TourComponent, TourOverlayComponent],
            declarations: [TourComponent, TourOverlayComponent],
            providers: [HintService],
        })
    ], VCLTourModule);
    return VCLTourModule;
}());
export { VCLTourModule };
