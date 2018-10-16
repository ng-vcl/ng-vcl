var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JssFormComponent } from './jss-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VCLButtonModule, VCLDropdownModule, VCLFlipSwitchModule, VCLSliderModule, VCLCheckboxModule, VCLSelectModule, VCLRadioButtonModule, VCLInputControlGroupModule, VCLFormControlLabelModule, VCLTokenModule, VCLIconModule, VCLTextareaModule, VCLPasswordInputModule, VCLInputModule, VCLDatePickerModule } from '@ng-vcl/ng-vcl';
import { JssFormObjectComponent } from './jss-form-object.component';
export { JssFormComponent, JssFormObjectComponent };
export { markAsDeeplyTouched } from './utils';
var VCLJssFormModule = /** @class */ (function () {
    function VCLJssFormModule() {
    }
    VCLJssFormModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                VCLButtonModule,
                VCLDropdownModule,
                VCLFlipSwitchModule,
                VCLSliderModule,
                VCLCheckboxModule,
                VCLSelectModule,
                VCLRadioButtonModule,
                VCLFormControlLabelModule,
                VCLInputControlGroupModule,
                VCLInputModule,
                VCLTextareaModule,
                VCLPasswordInputModule,
                VCLTokenModule,
                VCLIconModule,
                VCLDatePickerModule
            ],
            exports: [JssFormComponent, JssFormObjectComponent],
            declarations: [JssFormComponent, JssFormObjectComponent],
            providers: [],
        })
    ], VCLJssFormModule);
    return VCLJssFormModule;
}());
export { VCLJssFormModule };
