var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, HostBinding, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RatingComponent; }),
    multi: true
};
var RatingComponent = /** @class */ (function () {
    function RatingComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.type = 'horizontal';
        this.fullStar = 'fas fa-star';
        this.halfStar = 'fas fa-star-half-alt';
        this.emptyStar = 'far fa-star';
        this.starCount = 5;
        this.halves = true;
        this.value = 0;
        this.readonly = false;
        this.iconSize = undefined;
        this.textSize = undefined;
        this.showText = true;
        this.disabled = false;
        this.valueChange = new EventEmitter();
    }
    RatingComponent.prototype.clickStar = function (star) {
        if (this.disabled || this.readonly) {
            return;
        }
        this.value = star;
        this.valueChange.emit(this.value);
        this.onChangeCallback && this.onChangeCallback(this.value);
    };
    RatingComponent.prototype.isHalfStar = function (star) {
        return this.halves ? (Math.round(this.value * 2) / 2) == star - 0.5 : false;
    };
    RatingComponent.prototype.round = function (x) {
        return Math.round(x);
    };
    RatingComponent.prototype.getIcon = function (stars, small) {
        if (small === void 0) { small = false; }
        var classes = [
            'vclRatingItem',
            'vclIcon'
        ];
        if (small) {
            if (this.value >= this.starCount) {
                classes.push.apply(classes, this.fullStar.split(' '));
            }
            else if (this.value >= this.starCount / 2 && this.value < this.starCount) {
                classes.push.apply(classes, this.halfStar.split(' '));
            }
            else {
                classes.push.apply(classes, this.emptyStar.split(' '));
            }
        }
        else {
            if (this.round(this.value) >= stars && !this.isHalfStar(stars)) {
                classes.push.apply(classes, this.fullStar.split(' '));
            }
            else if (this.isHalfStar(stars)) {
                classes.push.apply(classes, this.halfStar.split(' '));
            }
            else {
                classes.push.apply(classes, this.emptyStar.split(' '));
            }
        }
        return classes;
    };
    Object.defineProperty(RatingComponent.prototype, "starArray", {
        get: function () {
            return Array(this.starCount).fill(0).map(function (x, i) { return i + 1; });
        },
        enumerable: true,
        configurable: true
    });
    RatingComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.cdRef.markForCheck();
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    RatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate([
        HostBinding(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "fullStar", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "halfStar", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "emptyStar", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "starCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "halves", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "readonly", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "iconSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "textSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "showText", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "disabled", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "valueChange", void 0);
    RatingComponent = __decorate([
        Component({
            selector: 'vcl-rating',
            template: "<ng-container *ngIf=\"type === 'horizontal' || type === 'vertical'\">\n  <span class=\"vclRating\"\n        [class.vclDisabled]=\"disabled\"\n        [class.vclRatingVertical]=\"type === 'vertical'\"\n        style=\"height: unset\">\n    <span *ngFor=\"let star of starArray\"\n          [ngClass]=\"getIcon(star)\"\n          [attr.tabindex]=\"readonly ? undefined : 0\"\n          (mousedown)=\"clickStar(star)\"\n          [ngStyle]=\"{'font-size': iconSize}\">\n    </span>\n  </span>\n</ng-container>\n<ng-container *ngIf=\"type === 'small'\">\n  <span class=\"vclRating\" [class.vclDisabled]=\"disabled\" style=\"height: unset\">\n    <span [ngClass]=\"getIcon(star, true)\" [ngStyle]=\"{'font-size': iconSize}\">\n    </span>\n    <strong *ngIf=\"showText\" [ngStyle]=\"{'font-size': textSize}\">{{ value }}</strong>\n  </span>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            styles: ["\n      .vclRatingVertical {\n        flex-direction: column;\n      }\n    "]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], RatingComponent);
    return RatingComponent;
}());
export { RatingComponent };
