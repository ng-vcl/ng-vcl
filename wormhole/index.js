var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { Wormhole } from './wormhole-base';
import { ComponentWormhole, TemplateWormhole } from './wormhole';
import { DomComponentWormhole, DomTemplateWormhole } from './wormhole-dom';
import { WormholeDirective } from './wormhole.directive';
import { DomWormholeHost, WormholeHost } from './wormhole-host';
export { TemplateWormhole, ComponentWormhole, Wormhole, WormholeDirective, DomComponentWormhole, DomTemplateWormhole, WormholeHost, DomWormholeHost };
var VCLWormholeModule = /** @class */ (function () {
    function VCLWormholeModule() {
    }
    VCLWormholeModule = __decorate([
        NgModule({
            exports: [WormholeDirective],
            declarations: [WormholeDirective],
            providers: []
        })
    ], VCLWormholeModule);
    return VCLWormholeModule;
}());
export { VCLWormholeModule };
