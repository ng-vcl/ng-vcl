var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, HostListener, HostBinding, ChangeDetectorRef } from '@angular/core';
var TokenComponent = /** @class */ (function () {
    function TokenComponent(cdRef) {
        this.cdRef = cdRef;
        this.disabled = false;
        this.selected = false;
        this.removable = false;
        this.icon = 'fa:remove';
        this.remove = new EventEmitter();
        this.select = new EventEmitter();
        // Store cva disabled state in an extra property to remember the old state after the token-list has been disabled
        this.cvaDisabled = false;
    }
    TokenComponent.prototype.onTap = function (e) {
        if (this.isDisabled) {
            return;
        }
        this.select.emit(e);
    };
    TokenComponent.prototype.onRemoveClick = function (event) {
        event.stopPropagation();
        this.remove.emit(event);
    };
    TokenComponent.prototype.setDisabledState = function (isDisabled) {
        this.cvaDisabled = isDisabled;
        this.cdRef.markForCheck();
    };
    Object.defineProperty(TokenComponent.prototype, "isDisabled", {
        get: function () {
            return this.cvaDisabled || this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TokenComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TokenComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TokenComponent.prototype, "disabled", void 0);
    __decorate([
        HostListener('tap', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], TokenComponent.prototype, "onTap", null);
    __decorate([
        HostBinding('class.vclSelected'),
        Input(),
        __metadata("design:type", Boolean)
    ], TokenComponent.prototype, "selected", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TokenComponent.prototype, "removable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TokenComponent.prototype, "icon", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TokenComponent.prototype, "remove", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TokenComponent.prototype, "select", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TokenComponent.prototype, "isDisabled", null);
    TokenComponent = __decorate([
        Component({
            selector: 'vcl-token',
            template: "<span class=\"vclTokenLabel\">{{label}}</span>\n<button vcl-button\n        [disabled]=\"isDisabled\"\n        *ngIf=\"removable\" \n        class=\"vclTransparent\"\n        type=\"button\" \n        title=\"Remove\"\n        [icon]=\"icon\"\n        (click)=\"onRemoveClick($event)\">\n</button>\n",
            host: {
                '[class.vclToken]': 'true',
            }
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], TokenComponent);
    return TokenComponent;
}());
export { TokenComponent };
