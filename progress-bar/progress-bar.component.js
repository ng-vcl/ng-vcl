var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.minValue = 0;
        this.maxValue = 100;
        this.indeterminate = false;
        this.speed = 1;
    }
    Object.defineProperty(ProgressBarComponent.prototype, "showIndeterminate", {
        get: function () {
            return this.indeterminate && !this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "showValue", {
        get: function () {
            return !this.indeterminate || this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "showSecondaryValue", {
        get: function () {
            return this.validateValue(this.secondaryValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "transformValue", {
        get: function () {
            var value = this.validateValue(this.value) ? this.scaleValue(this.value) : 0;
            return "scaleX(" + value + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "transformSecondaryValue", {
        get: function () {
            var value = this.validateValue(this.secondaryValue) ? this.scaleValue(this.secondaryValue) : 0;
            return "scaleX(" + value + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "animationDurationValue", {
        get: function () {
            var value = this.isNumber(this.speed) ? this.speed : 1;
            return value + "s";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "range", {
        get: function () {
            return this.maxValue - this.minValue;
        },
        enumerable: true,
        configurable: true
    });
    ProgressBarComponent.prototype.scaleValue = function (value) {
        return (value - this.minValue) / this.range;
    };
    ProgressBarComponent.prototype.validateValue = function (value) {
        return this.isNumber(value) &&
            value >= this.minValue &&
            value <= this.maxValue;
    };
    ProgressBarComponent.prototype.isNumber = function (value) {
        return typeof value === 'number' && value !== NaN;
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "secondaryValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "minValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "maxValue", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ProgressBarComponent.prototype, "indeterminate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ProgressBarComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "speed", void 0);
    ProgressBarComponent = __decorate([
        Component({
            selector: 'vcl-progress-bar',
            template: "<div class=\"vclProgressBar\"\n     [attr.aria-valuenow]=\"value\" \n     [attr.aria-valuemin]=\"minValue\" \n     [attr.aria-valuemax]=\"maxValue\" \n     [attr.aria-valuetext]=\"label\"\n     [class.vclIndeterminate]=\"showIndeterminate\"\n     >\n  <div *ngIf=\"showValue\" class=\"vclProgress vclPrimary vclLayoutFit\" [style.transform]=\"transformValue\"></div>\n  <div *ngIf=\"showSecondaryValue\" class=\"vclProgress vclSecondary vclLayoutFit\" [style.transform]=\"transformSecondaryValue\"></div>\n  <div *ngIf=\"showIndeterminate\" class=\"vclProgress vclPrimary vclLayoutFit\" [style.animation-duration]=\"animationDurationValue\"></div>\n</div>\n\n",
            host: {
                '[attr.role]': '"progressbar"',
            },
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());
export { ProgressBarComponent };
