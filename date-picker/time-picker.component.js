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
            template: "<div class=\"vclLayoutHorizontal\">\n  <div *ngIf=\"displayHours\" class=\"vclDatePicker\" role=\"listbox\" aria-multiselectable=\"false\" style=\"width: 18em;\">\n    <div *ngIf=\"displayHours24\" class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\">\n      <div class=\"vclDGRow\">\n        <div class=\"vclDGCell\">\n          <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n            <div class=\"vclButtonDim\"></div>\n            <div class=\"vclCalHeaderLabel\">Hour</div>\n            <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"onSwitch24h()\">12h</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let i of [0, 1, 2, 3]\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let x of [0, 1, 2, 3, 4, 5]\" [class.vclSelected]=\"isHourMarked(i * 6 + x)\" (click)=\"onHourTap(i * 6 + x)\">{{ i * 6 + x }}</div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!displayHours24\" class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\">\n      \n      <div class=\"vclDGRow\">\n        <div class=\"vclDGCell\">\n          <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n            <div class=\"vclButtonDim\"></div>\n            <div class=\"vclCalHeaderLabel\">AM</div>\n            <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"onSwitch24h()\">24h</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"vclDGRow\" role=\"row\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [12, 1, 2, 3, 4, 5]\" [class.vclSelected]=\"isHourMarked(i % 12)\" (click)=\"onHourTap(i % 12)\">{{ i }}</div>\n      </div>\n      <div class=\"vclDGRow\" role=\"row\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [6, 7, 8, 9, 10, 11]\" [class.vclSelected]=\"isHourMarked(i % 12)\" (click)=\"onHourTap(i % 12)\">{{ i }}</div>\n      </div>\n\n      <div class=\"vclDGRow\">\n        <div class=\"vclDGCell\">\n          <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n            <div class=\"vclButtonDim\"></div>\n            <div class=\"vclCalHeaderLabel\">PM</div>\n            <div class=\"vclButtonDim\"></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"vclDGRow\" role=\"row\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [12, 1, 2, 3, 4, 5]\" [class.vclSelected]=\"isHourMarked(i % 12 + 12)\" (click)=\"onHourTap(i % 12 + 12)\">{{ i }}</div>\n      </div>\n\n      <div class=\"vclDGRow\" role=\"row\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [6, 7, 8, 9, 10, 11]\" [class.vclSelected]=\"isHourMarked(i % 12 + 12)\" (click)=\"onHourTap(i % 12 + 12)\">{{ i }}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"vclDatePicker\" role=\"listbox\" aria-multiselectable=\"false\" [ngStyle]=\"{width: '18em', 'margin-left': displayHours ? '10px' : 0}\" *ngIf=\"displayMinutes\">\n    <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\">\n        <div class=\"vclDGRow\">\n          <div class=\"vclDGCell\">\n            <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n              <div class=\"vclButtonDim\"></div>\n              <div class=\"vclCalHeaderLabel\">Minute</div>\n              <div class=\"vclButtonDim\"></div>\n            </div>\n          </div>\n        </div>\n\n      <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let i of [0, 1, 2, 3, 4, 5]\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let x of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\" [class.vclSelected]=\"isMinuteMarked(i * 10 + x)\" (click)=\"onMinuteTap(i * 10 + x)\">:{{ i * 10 + x }}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"vclDatePicker\" role=\"listbox\" aria-multiselectable=\"false\" [ngStyle]=\"{width: '18em', 'margin-left': displayHours || displayMinutes ? '10px' : 0}\" *ngIf=\"displaySeconds\">\n    <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\">\n      <div class=\"vclDGRow\">\n        <div class=\"vclDGCell\">\n          <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n            <div class=\"vclButtonDim\"></div>\n            <div class=\"vclCalHeaderLabel\">Second</div>\n            <div class=\"vclButtonDim\"></div>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let i of [0, 1, 2, 3, 4, 5]\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let x of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\" [class.vclSelected]=\"isSecondMarked(i * 10 + x)\" (click)=\"onSecondTap(i * 10 + x)\">:{{ i * 10 + x }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
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
