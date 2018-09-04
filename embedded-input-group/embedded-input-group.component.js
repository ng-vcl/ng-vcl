var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, HostBinding, ContentChildren, forwardRef, QueryList, Self, SkipSelf, Directive } from '@angular/core';
import { ObservableComponent } from '../core/index';
import { InputDirective } from '../input/index';
import { ButtonDirective } from '../button/index';
var EmbeddedInputGroupComponent = /** @class */ (function (_super) {
    __extends(EmbeddedInputGroupComponent, _super);
    function EmbeddedInputGroupComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    Object.defineProperty(EmbeddedInputGroupComponent.prototype, "hasAppendedItem", {
        get: function () {
            return !!this.appIcon || (this.buttons && this.buttons.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], EmbeddedInputGroupComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], EmbeddedInputGroupComponent.prototype, "prepIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], EmbeddedInputGroupComponent.prototype, "appIcon", void 0);
    __decorate([
        ContentChildren(forwardRef(function () { return EmbeddedButtonDirective; })),
        __metadata("design:type", QueryList)
    ], EmbeddedInputGroupComponent.prototype, "buttons", void 0);
    EmbeddedInputGroupComponent = __decorate([
        Component({
            selector: 'vcl-embedded-input-group',
            template: "<div *ngIf='prepIcon' class=\"vclPrepended\">\n  <vcl-icon [icon]='prepIcon'></vcl-icon>\n</div>\n\n<ng-content select=\"input[vcl-input][vcl-embedded-input-group]\"></ng-content>\n\n<div *ngIf='appIcon' class=\"vclAppended\">\n  <vcl-icon [icon]='appIcon'></vcl-icon>\n</div>\n\n<ng-content select=\"button[vcl-button][vcl-embedded-input-group]\"></ng-content>\n",
            host: {
                '[class.vclInputGroupEmb]': 'true',
                '[style.display]': '"block"'
            }
        })
    ], EmbeddedInputGroupComponent);
    return EmbeddedInputGroupComponent;
}(ObservableComponent));
export { EmbeddedInputGroupComponent };
var EmbeddedInputDirective = /** @class */ (function () {
    function EmbeddedInputDirective(input, inputGroup) {
        this.input = input;
        this.inputGroup = inputGroup;
    }
    Object.defineProperty(EmbeddedInputDirective.prototype, "isDisabled", {
        get: function () {
            return this.input.disabled || this.inputGroup.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedInputDirective.prototype, "classDisabled", {
        get: function () {
            return this.isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedInputDirective.prototype, "attrDisabled", {
        get: function () {
            return this.isDisabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedInputDirective.prototype, "prepItem", {
        get: function () {
            return !!this.inputGroup.prepIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedInputDirective.prototype, "hasAppendedItem", {
        get: function () {
            return this.inputGroup.hasAppendedItem;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('class.vclDisabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], EmbeddedInputDirective.prototype, "classDisabled", null);
    __decorate([
        HostBinding('attr.disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], EmbeddedInputDirective.prototype, "attrDisabled", null);
    __decorate([
        HostBinding('class.vclPrepItem'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], EmbeddedInputDirective.prototype, "prepItem", null);
    __decorate([
        HostBinding('class.vclAppItem'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], EmbeddedInputDirective.prototype, "hasAppendedItem", null);
    EmbeddedInputDirective = __decorate([
        Directive({
            selector: 'input[vcl-input][vcl-embedded-input-group]',
        }),
        __param(0, Self()),
        __param(1, SkipSelf()),
        __metadata("design:paramtypes", [InputDirective,
            EmbeddedInputGroupComponent])
    ], EmbeddedInputDirective);
    return EmbeddedInputDirective;
}());
export { EmbeddedInputDirective };
var EmbeddedButtonDirective = /** @class */ (function () {
    function EmbeddedButtonDirective(button, inputGroup) {
        this.button = button;
        this.inputGroup = inputGroup;
    }
    Object.defineProperty(EmbeddedButtonDirective.prototype, "isDisabled", {
        get: function () {
            return (this.button.disabled || this.inputGroup.disabled) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('class.vclDisabled'),
        HostBinding('attr.disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], EmbeddedButtonDirective.prototype, "isDisabled", null);
    EmbeddedButtonDirective = __decorate([
        Directive({
            selector: 'button[vcl-button][vcl-embedded-input-group][icon]',
            host: {
                '[class.vclTransparent]': 'true',
                '[class.vclAppended]': 'true'
            }
        }),
        __param(0, Self()),
        __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ButtonDirective,
            EmbeddedInputGroupComponent])
    ], EmbeddedButtonDirective);
    return EmbeddedButtonDirective;
}());
export { EmbeddedButtonDirective };
