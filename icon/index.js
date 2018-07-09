var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDirective, IconFontDirective } from './icon.directive';
import { VCL_ICON_RESOLVER, DefaultIconResolverService } from './icon-resolver.service';
export { IconDirective, IconFontDirective, DefaultIconResolverService, VCL_ICON_RESOLVER };
var VCLIconModule = /** @class */ (function () {
    function VCLIconModule() {
    }
    VCLIconModule = __decorate([
        NgModule({
            imports: [CommonModule],
            exports: [IconDirective, IconFontDirective],
            declarations: [IconDirective, IconFontDirective],
            providers: [{
                    provide: VCL_ICON_RESOLVER,
                    useClass: DefaultIconResolverService,
                    multi: true
                }],
        })
    ], VCLIconModule);
    return VCLIconModule;
}());
export { VCLIconModule };
