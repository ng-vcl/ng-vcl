var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from './../icogram/index';
import { VCLButtonModule } from './../button/index';
import { VCLLayerModule } from './../layer/index';
import { VCLInputModule } from './../input/index';
import { AlertComponent } from './alert.component';
import { AlertInputComponent } from './alert-input.component';
import { AlertService } from './alert.service';
import { AlertType, AlertError, AlertInput, AlertAlignment } from './types';
export { AlertService, AlertType, AlertInput, AlertError, AlertAlignment };
var VCLAlertModule = /** @class */ (function () {
    function VCLAlertModule() {
    }
    VCLAlertModule = __decorate([
        NgModule({
            imports: [
                FormsModule,
                CommonModule,
                VCLButtonModule,
                VCLInputModule,
                VCLIcogramModule,
                VCLLayerModule.forChild({ layers: [] })
            ],
            exports: [],
            declarations: [AlertComponent, AlertInputComponent],
            entryComponents: [AlertComponent],
            providers: [AlertService],
        })
    ], VCLAlertModule);
    return VCLAlertModule;
}());
export { VCLAlertModule };
