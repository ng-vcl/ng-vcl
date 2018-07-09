var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLButtonModule } from './../button/index';
import { VCLLayerModule } from './../layer/index';
import { VCLWormholeModule } from './../wormhole/index';
import { NotifierComponent } from './notifier.component';
import { NotifierService } from './notifier.service';
import { Notifier } from './notifier';
import { NotifierPosition, NotifierType } from './types';
import { VCLNotifierContentComponent } from './notifier-content.component';
import { VCLNotificationModule } from '../notification/index';
export { Notifier, NotifierService, NotifierType, NotifierPosition, NotifierComponent };
var VCLNotifierModule = /** @class */ (function () {
    function VCLNotifierModule() {
    }
    VCLNotifierModule = __decorate([
        NgModule({
            imports: [
                FormsModule,
                CommonModule,
                VCLButtonModule,
                VCLLayerModule.forChild(),
                VCLWormholeModule,
                VCLNotificationModule
            ],
            exports: [],
            declarations: [NotifierComponent, VCLNotifierContentComponent],
            entryComponents: [NotifierComponent],
            providers: [
                NotifierService
            ],
        })
    ], VCLNotifierModule);
    return VCLNotifierModule;
}());
export { VCLNotifierModule };
