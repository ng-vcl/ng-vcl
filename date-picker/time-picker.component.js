var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TimePickerComponent; }),
    multi: true
};
var TimePickerComponent = /** @class */ (function () {
    function TimePickerComponent(cdRef) {
        this.cdRef = cdRef;
        this.displayHours = true;
        this.displayMinutes = true;
        this.displaySeconds = true;
        this.displayHours24 = true;
        this.currentHour = -1;
        this.currentMinute = -1;
        this.currentSecond = -1;
    }
    TimePickerComponent.prototype.ngOnInit = function () {
        if (this.selectedDate) {
            this.currentHour = this.selectedDate.getHours();
            this.currentMinute = this.selectedDate.getMinutes();
            this.currentSecond = this.selectedDate.getSeconds();
        }
    };
    TimePickerComponent.prototype.isHourMarked = function (hour) {
        return hour === this.currentHour;
    };
    TimePickerComponent.prototype.isMinuteMarked = function (minute) {
        return minute === this.currentMinute;
    };
    TimePickerComponent.prototype.isSecondMarked = function (second) {
        return second === this.currentSecond;
    };
    TimePickerComponent.prototype.onHourTap = function (hour) {
        this.currentHour = hour;
        if (!this.selectedDate) {
            this.selectedDate = new Date();
        }
        this.selectedDate.setHours(hour);
        this.onChangeCallback && this.onChangeCallback(this.selectedDate);
    };
    TimePickerComponent.prototype.onMinuteTap = function (minute) {
        this.currentMinute = minute;
        if (!this.selectedDate) {
            this.selectedDate = new Date();
        }
        this.selectedDate.setMinutes(minute);
        this.onChangeCallback && this.onChangeCallback(this.selectedDate);
    };
    TimePickerComponent.prototype.onSecondTap = function (second) {
        this.currentSecond = second;
        if (!this.selectedDate) {
            this.selectedDate = new Date();
        }
        this.selectedDate.setSeconds(second);
        this.onChangeCallback && this.onChangeCallback(this.selectedDate);
    };
    TimePickerComponent.prototype.onSwitch24h = function () {
        this.displayHours24 = !this.displayHours24;
    };
    TimePickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedDate) {
            this.selectedDate = changes.selectedDate.currentValue;
            if (this.selectedDate) {
                this.currentHour = this.selectedDate.getHours();
                this.currentMinute = this.selectedDate.getMinutes();
                this.currentSecond = this.selectedDate.getSeconds();
            }
        }
    };
    TimePickerComponent.prototype.writeValue = function (value) {
        this.selectedDate = value;
        if (this.selectedDate) {
            this.currentHour = this.selectedDate.getHours();
            this.currentMinute = this.selectedDate.getMinutes();
            this.currentSecond = this.selectedDate.getSeconds();
        }
        this.cdRef.markForCheck();
    };
    TimePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TimePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    TimePickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.cdRef.markForCheck();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TimePickerComponent.prototype, "selectedDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TimePickerComponent.prototype, "displayHours", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TimePickerComponent.prototype, "displayMinutes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TimePickerComponent.prototype, "displaySeconds", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TimePickerComponent.prototype, "displayHours24", void 0);
    TimePickerComponent = __decorate([
        Component({
            selector: 'vcl-time-picker',
            template: "<div class=\"vclLayoutHorizontal\">\r\n  <div class=\"vclDatePicker\" role=\"listbox\" aria-multiselectable=\"false\" style=\"width: 18em;\" *ngIf=\"displayHours\">\r\n    <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\" *ngIf=\"displayHours24\">\r\n      <div class=\"vclDGRow vclToolbar\">\r\n        <button type=\"button\" class=\"vclButton vclSquare\" style=\"visibility: hidden\">12h</button>\r\n        <div class=\"vclDGCell\">\r\n          <span class=\"vclCalHeaderLabel\">Hour</span>\r\n        </div>\r\n        <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"onSwitch24h()\" style=\"height: 100%\">12h</button>\r\n      </div>\r\n      <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let i of [0, 1, 2, 3]\">\r\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let x of [0, 1, 2, 3, 4, 5]\" [class.vclSelected]=\"isHourMarked(i * 6 + x)\" (tap)=\"onHourTap(i * 6 + x)\">{{ i * 6 + x }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\" *ngIf=\"!displayHours24\">\r\n      <div class=\"vclDGRow vclToolbar\">\r\n        <button type=\"button\" class=\"vclButton vclSquare\" style=\"visibility: hidden\">24h</button>\r\n        <div class=\"vclDGCell\">\r\n          <span class=\"vclCalHeaderLabel\">AM</span>\r\n        </div>\r\n        <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"onSwitch24h()\" style=\"height: 100%\">24h</button>\r\n      </div>\r\n      <div class=\"vclDGRow\" role=\"row\">\r\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [12, 1, 2, 3, 4, 5]\" [class.vclSelected]=\"isHourMarked(i % 12)\" (tap)=\"onHourTap(i % 12)\">{{ i }}</div>\r\n      </div>\r\n      <div class=\"vclDGRow\" role=\"row\">\r\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [6, 7, 8, 9, 10, 11]\" [class.vclSelected]=\"isHourMarked(i % 12)\" (tap)=\"onHourTap(i % 12)\">{{ i }}</div>\r\n      </div>\r\n      <div class=\"vclDGRow vclToolbar\">\r\n        <div class=\"vclDGCell\">\r\n          <span class=\"vclCalHeaderLabel\">PM</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"vclDGRow\" role=\"row\">\r\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [12, 1, 2, 3, 4, 5]\" [class.vclSelected]=\"isHourMarked(i % 12 + 12)\" (tap)=\"onHourTap(i % 12 + 12)\">{{ i }}</div>\r\n      </div>\r\n      <div class=\"vclDGRow\" role=\"row\">\r\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [6, 7, 8, 9, 10, 11]\" [class.vclSelected]=\"isHourMarked(i % 12 + 12)\" (tap)=\"onHourTap(i % 12 + 12)\">{{ i }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"vclDatePicker\" role=\"listbox\" aria-multiselectable=\"false\" [ngStyle]=\"{width: '18em', 'margin-left': displayHours ? '10px' : 0}\" *ngIf=\"displayMinutes\">\r\n    <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\">\r\n      <div class=\"vclDGRow\">\r\n        <div class=\"vclDGCell vclToolbar\">\r\n          <span class=\"vclCalHeaderLabel\">Minute</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let i of [0, 1, 2, 3, 4, 5]\">\r\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let x of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\" [class.vclSelected]=\"isMinuteMarked(i * 10 + x)\" (tap)=\"onMinuteTap(i * 10 + x)\">:{{ i * 10 + x }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"vclDatePicker\" role=\"listbox\" aria-multiselectable=\"false\" [ngStyle]=\"{width: '18em', 'margin-left': displayHours || displayMinutes ? '10px' : 0}\" *ngIf=\"displaySeconds\">\r\n    <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\">\r\n      <div class=\"vclDGRow\">\r\n        <div class=\"vclDGCell vclToolbar\">\r\n          <span class=\"vclCalHeaderLabel\">Second</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let i of [0, 1, 2, 3, 4, 5]\">\r\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let x of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\" [class.vclSelected]=\"isSecondMarked(i * 10 + x)\" (tap)=\"onSecondTap(i * 10 + x)\">:{{ i * 10 + x }}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclDatePicker]': 'true',
                '[attr.role]': '"listbox"',
                '[attr.aria-multiselectable]': 'false',
                '[style.height]': '"284px"' // TODO this fixes for IE11
            },
            styles: [".hidden{display:none;}\n     .date-picker-pointer{cursor: pointer;}\n    "]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], TimePickerComponent);
    return TimePickerComponent;
}());
export { TimePickerComponent };
