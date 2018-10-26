var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostListener, ChangeDetectionStrategy, HostBinding, Output, EventEmitter, ViewChild, ElementRef, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var MoveDirection;
(function (MoveDirection) {
    MoveDirection[MoveDirection["Left"] = 0] = "Left";
    MoveDirection[MoveDirection["Right"] = 1] = "Right";
})(MoveDirection || (MoveDirection = {}));
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SliderComponent; }),
    multi: true
};
var SliderComponent = /** @class */ (function () {
    function SliderComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.disabled = false;
        this.min = 0;
        this.max = 10;
        this.wheel = false;
        this.lock = false;
        this.focused = false;
        this.percentLeftKnob = 0;
        this.scalePoints = [];
        this.firstPan = true;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(SliderComponent.prototype, "pmin", {
        get: function () {
            var min = Number(this.min);
            return !isNaN(min) ? min : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "pmax", {
        get: function () {
            var max = Number(this.max);
            return !isNaN(max) ? max : 0;
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngAfterContentInit = function () {
        this.percentLeftKnob = this.calculatePercentLeftKnob(this.value);
    };
    Object.defineProperty(SliderComponent.prototype, "valueValid", {
        get: function () {
            return this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.validateValue = function (value) {
        return typeof this.value === 'number' && this.value >= this.pmin && this.value <= this.pmax;
    };
    Object.defineProperty(SliderComponent.prototype, "showScale", {
        get: function () {
            return Array.isArray(this.scale) || (typeof this.scale === 'boolean' && this.scale);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngOnChanges = function (changes) {
        if ('min' in changes || 'max' in changes || 'scale' in changes) {
            this.updateScalePoints();
        }
        if ('value' in changes) {
            this.percentLeftKnob = this.calculatePercentLeftKnob(this.value);
        }
    };
    SliderComponent.prototype.setValue = function (value, updateKnob) {
        this.value = Number(value);
        if (updateKnob) {
            this.percentLeftKnob = this.calculatePercentLeftKnob(value);
        }
        this.valueChange.emit(this.value);
        this.onChange(this.value);
    };
    SliderComponent.prototype.calculatePercentLeftKnob = function (value) {
        if (!this.validateValue(value)) {
            return 0;
        }
        var rangeLength = this.pmax - this.pmin;
        var valueLeft = value - this.pmin;
        var delta = rangeLength / valueLeft;
        return 100 / delta;
    };
    SliderComponent.prototype.percentToValue = function (per) {
        var rangeLength = this.pmax - this.pmin;
        var newVal = (rangeLength / 100) * per;
        return Math.round(newVal);
    };
    SliderComponent.prototype.updateScalePoints = function () {
        var _this = this;
        if (Array.isArray(this.scale)) {
            var steps_1 = this.scale.length;
            this.scalePoints = this.scale.map(function (label, idx) {
                return {
                    label: label,
                    percent: (100 / (steps_1 - 1)) * idx
                };
            });
        }
        else {
            var steps_2;
            if (typeof this.scale === 'number') {
                steps_2 = this.scale;
            }
            else {
                steps_2 = this.pmax - this.pmin + 1;
            }
            this.scalePoints = Array.from(Array(steps_2).keys()).map(function (i) {
                var percent = (100 / (steps_2 - 1)) * i;
                return {
                    label: _this.percentToValue(percent).toString(),
                    percent: percent
                };
            });
        }
    };
    SliderComponent.prototype.closestScalePoint = function (percentValue) {
        var closest = this.scalePoints[0];
        var dist = 100;
        this.scalePoints.forEach(function (sP) {
            var pDist = Math.abs(sP.percent - percentValue);
            if (pDist < dist) {
                closest = sP;
                dist = pDist;
            }
        });
        return closest.percent;
    };
    SliderComponent.prototype.deltaPxToPercent = function (deltaPx) {
        var fullPx = this.scaleElement.nativeElement.offsetWidth;
        var deltaPer = 100 / (fullPx / deltaPx);
        return Math.round(deltaPer * 100) / 100; // round 2 decs
    };
    SliderComponent.prototype.onFocus = function () {
        this.focused = true;
    };
    SliderComponent.prototype.onBlur = function () {
        this.focused = false;
        this.onTouched();
    };
    /**
     * clicking the rail should also reposition the bar
     */
    SliderComponent.prototype.onTap = function (event) {
        if (this.disabled || event.target.className == 'vclSliderKnob') {
            return;
        }
        var railX = event.changedPointers[0].offsetX;
        if (railX <= 0) {
            return;
        }
        var percentLeftKnob = this.deltaPxToPercent(railX);
        this.percentLeftKnob = this.lock ? this.closestScalePoint(percentLeftKnob) : percentLeftKnob;
        var value = this.percentToValue(this.percentLeftKnob);
        this.setValue(value, false);
    };
    SliderComponent.prototype.selectPoint = function (p) {
        var value = this.percentToValue(p.percent);
        this.setValue(value, true);
    };
    SliderComponent.prototype.move = function (direction) {
        if (this.lock) {
            this.moveToPoint(direction);
        }
        else {
            this.moveValue(direction);
        }
    };
    SliderComponent.prototype.moveToPoint = function (direction) {
        var currentPointValue = this.closestScalePoint(this.calculatePercentLeftKnob(this.value));
        var currentPoint = this.scalePoints.find(function (p) { return p.percent == currentPointValue; });
        var i = currentPoint ? this.scalePoints.indexOf(currentPoint) : 0;
        var nextPoint;
        if (direction == MoveDirection.Right) {
            i++;
            if (i >= this.scalePoints.length) {
                i = this.scalePoints.length - 1;
            }
            nextPoint = this.scalePoints[i];
        }
        else {
            i--;
            if (i < 0) {
                i = 0;
            }
            nextPoint = this.scalePoints[i];
        }
        var value = this.percentToValue(nextPoint.percent);
        this.setValue(value, true);
    };
    SliderComponent.prototype.moveValue = function (direction) {
        var value = this.valueValid ? this.value : this.pmin;
        if (direction === MoveDirection.Right) {
            value++;
            if (value > this.pmax)
                value = this.pmax;
        }
        else {
            value--;
            if (value < this.pmin)
                value = this.pmin;
        }
        this.setValue(value, true);
    };
    SliderComponent.prototype.onWheel = function (ev) {
        if (this.disabled || !this.wheel) {
            return;
        }
        if (ev.deltaY < 0) {
            this.move(MoveDirection.Right);
            ev.preventDefault();
        }
        else if (ev.deltaY > 0) {
            this.move(MoveDirection.Left);
            ev.preventDefault();
        }
    };
    SliderComponent.prototype.keydown = function (ev) {
        if (this.disabled) {
            return;
        }
        switch (ev.code) {
            case 'ArrowLeft':
                this.move(MoveDirection.Left);
                ev.preventDefault();
                break;
            case 'ArrowRight':
                this.move(MoveDirection.Right);
                ev.preventDefault();
                break;
            case 'Space':
                this.moveToPoint(MoveDirection.Right);
                ev.preventDefault();
                break;
        }
    };
    SliderComponent.prototype.onPan = function (ev) {
        if (this.disabled) {
            return;
        }
        if (this.firstPan) {
            this.firstPan = false;
            this.lastPercentLeftKnob = this.percentLeftKnob;
        }
        var deltaPx = ev.deltaX;
        var percentLeftKnob = this.lastPercentLeftKnob + this.deltaPxToPercent(deltaPx);
        if (percentLeftKnob < 0) {
            percentLeftKnob = 0;
        }
        else if (percentLeftKnob > 100) {
            percentLeftKnob = 100;
        }
        if (this.lock) {
            this.percentLeftKnob = this.closestScalePoint(percentLeftKnob);
        }
        else {
            var newValue = this.percentToValue(percentLeftKnob);
            this.percentLeftKnob = this.calculatePercentLeftKnob(newValue);
        }
        if (ev.isFinal) {
            this.firstPan = true;
            var value = this.percentToValue(this.percentLeftKnob);
            this.setValue(value, false);
        }
    };
    SliderComponent.prototype.writeValue = function (value) {
        this.setValue(value, true);
        this.cdRef.markForCheck();
    };
    SliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate([
        HostBinding(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "value", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "valueChange", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata("design:type", Boolean)
    ], SliderComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "min", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "max", void 0);
    __decorate([
        Input('mousewheel'),
        __metadata("design:type", Boolean)
    ], SliderComponent.prototype, "wheel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SliderComponent.prototype, "lock", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SliderComponent.prototype, "scale", void 0);
    __decorate([
        HostBinding('class.vclFocused'),
        __metadata("design:type", Boolean)
    ], SliderComponent.prototype, "focused", void 0);
    __decorate([
        ViewChild('scale'),
        __metadata("design:type", ElementRef)
    ], SliderComponent.prototype, "scaleElement", void 0);
    __decorate([
        HostListener('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SliderComponent.prototype, "onFocus", null);
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SliderComponent.prototype, "onBlur", null);
    __decorate([
        HostListener('tap', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SliderComponent.prototype, "onTap", null);
    __decorate([
        HostListener('wheel', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SliderComponent.prototype, "onWheel", null);
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SliderComponent.prototype, "keydown", null);
    SliderComponent = __decorate([
        Component({
            selector: 'vcl-slider',
            template: "<div class=\"vclSliderRail\">\r\n  <div class=\"vclSliderScale\" horizontal=\"\" justified=\"\" layout=\"\" #scale>\r\n    <div *ngFor=\"let point of scalePoints\" class=\"vclSliderScalePointMark\"></div>\r\n  </div>\r\n  <div *ngIf=\"valueValid\" class=\"vclSliderKnobContainer\" [style.left]=\"percentLeftKnob + '%'\" (pan)=\"onPan($event)\">\r\n    <div  class=\"vclSliderKnob\"></div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"showScale\" class=\"vclSliderScale\" horizontal=\"\" justified=\"\" layout=\"\">\r\n  <div *ngFor=\"let point of scalePoints\" class=\"vclSliderScalePointLabel\" (click)=\"selectPoint(point)\">{{point.label}}</div>\r\n</div>\r\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '[class.vclSlider]': 'true'
            },
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], SliderComponent);
    return SliderComponent;
}());
export { SliderComponent };
