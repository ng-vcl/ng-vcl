var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
var InputControlGroup = /** @class */ (function () {
    function InputControlGroup() {
        this.inline = false;
    }
    Object.defineProperty(InputControlGroup.prototype, "notInline", {
        get: function () {
            return !this.inline;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], InputControlGroup.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], InputControlGroup.prototype, "label", void 0);
    __decorate([
        HostBinding('class.vclInputInlineControlGroup'),
        Input(),
        __metadata("design:type", Object)
    ], InputControlGroup.prototype, "inline", void 0);
    __decorate([
        HostBinding('class.vclInputControlGroup'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], InputControlGroup.prototype, "notInline", null);
    InputControlGroup = __decorate([
        Component({
            selector: 'vcl-input-control-group, [vcl-input-control-group]',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "<ng-content></ng-content>\r\n\r\n<div *ngIf=\"type && label && label!==''\" class=\"vclFormControlHint\"\r\n  [class.vclError]=\"type=='error'\"\r\n  [class.vclWarning]=\"type=='warning'\"\r\n  [class.vclSuccess]=\"type=='success'\">\r\n  {{label}}\r\n</div>\r\n"
        })
    ], InputControlGroup);
    return InputControlGroup;
}());
export { InputControlGroup };
