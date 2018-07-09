var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VCLIcogramModule } from '../icogram/index';
import { ButtonDirective } from './button.directive';
import { ButtonLabelComponent } from './button.label.component';
import { ButtonSelectDirective } from './button.select.directive';
import { ButtonIconComponent } from './button.icon.component';
export { ButtonDirective, ButtonLabelComponent, ButtonSelectDirective, ButtonIconComponent };
var VCLButtonModule = /** @class */ (function () {
    function VCLButtonModule() {
    }
    VCLButtonModule = __decorate([
        NgModule({
            imports: [CommonModule, VCLIcogramModule],
            exports: [ButtonDirective, ButtonLabelComponent, ButtonSelectDirective, ButtonIconComponent],
            declarations: [ButtonDirective, ButtonLabelComponent, ButtonSelectDirective, ButtonIconComponent],
            providers: [],
        })
    ], VCLButtonModule);
    return VCLButtonModule;
}());
export { VCLButtonModule };
