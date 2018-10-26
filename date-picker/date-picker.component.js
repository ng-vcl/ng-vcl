var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CalendarDate } from './calendar-date';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent(cdRef) {
        this.cdRef = cdRef;
        // behavior
        this.closeOnSelect = false;
        this.disabled = false;
        // styling
        this.highlightToday = true;
        this.highlightSelected = true;
        this.displayWeekNumbers = true;
        this.displayWeekdays = true;
        this.displayDate = true;
        this.displayTime = false;
        this.displayHours24 = true;
        this.displayHours = true;
        this.displayMinutes = true;
        this.displaySeconds = false;
        this.prevYearBtnIcon = 'fa:chevron-left';
        this.nextYearBtnIcon = 'fa:chevron-right';
        this.displayJumpToday = true;
        this.displayJumpSelected = true;
        this.selectRange = false;
        this.maxRangeLength = Infinity;
        this.change = new EventEmitter();
        this.today = new CalendarDate();
        this.showYearPick = false;
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        if (this.config) {
            for (var key in this.config) {
                this[key] = this.config[key];
            }
        }
        this.setDate(this.selectedDate);
        if (this.selectedRangeEnd) {
            this.selectRange = true;
            this.select(new CalendarDate(this.selectedRangeEnd));
        }
    };
    DatePickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedDate) {
            this.setDate(changes.selectedDate.currentValue);
        }
    };
    DatePickerComponent.prototype.setDate = function (date) {
        if (date) {
            this.currentDate = new CalendarDate(date);
            this.viewDate = this.currentDate.clone();
        }
        else {
            this.viewDate = new CalendarDate();
        }
    };
    DatePickerComponent.prototype.showYear = function () {
        if (this.disabled) {
            return;
        }
        this.showYearPick = true;
    };
    DatePickerComponent.prototype.onDateTap = function (date) {
        if (this.disabled || this.isDayDisabled(date)) {
            return;
        }
        this.select(date);
        if (!this.selectRange) {
            if (this.currentDate && !this.currentDate.isSameMonthAndYear(this.viewDate)) {
                this.gotoSelected();
            }
            var currentDate = this.currentDate ? this.currentDate.date : undefined;
            this.onChangeCallback && this.onChangeCallback(currentDate);
            this.change.emit(currentDate);
            this.selectedDate = currentDate;
        }
        else {
            var currentDate = this.currentDate ? this.currentDate.date : undefined;
            if (currentDate) {
                this.onChangeCallback && this.onChangeCallback(currentDate);
            }
            this.change.emit([currentDate, this.currentRangeEnd ? this.currentRangeEnd.date : undefined]);
        }
    };
    /**
     * activate the given date
     */
    DatePickerComponent.prototype.select = function (date) {
        if (!this.selectRange) {
            this.currentDate = date;
        }
        else {
            if (this.currentDate && this.currentRangeEnd) {
                // reset all
                this.currentDate = undefined;
                this.currentRangeEnd = undefined;
            }
            else if (this.currentDate && !this.currentRangeEnd) {
                this.currentRangeEnd = date;
            }
            else if (!this.currentDate) {
                this.currentDate = date;
            }
            // swap values if currentDate > currentRangeEnd
            if (this.currentRangeEnd &&
                this.currentDate &&
                this.currentRangeEnd.date < this.currentDate.date) {
                this.currentRangeEnd.date = [this.currentDate.date, this.currentDate.date = this.currentRangeEnd.date][0]; // swap values
            }
            // if more days selected than maxRangeLength, strip days
            if (this.selectRange &&
                this.currentRangeEnd &&
                this.currentDate &&
                this.currentDate.daysInRange(this.currentRangeEnd) > this.maxRangeLength) {
                var diffDays = this.currentDate.daysInRange(this.currentRangeEnd) - this.maxRangeLength;
                this.currentRangeEnd.moveDays(diffDays * (-1));
            }
        }
    };
    /**
     * ui-markers
     */
    DatePickerComponent.prototype.isMarked = function (date) {
        if (!this.selectRange && this.currentDate && this.currentDate.isSameDay(date))
            return true;
        return !!this.currentDate && !!this.currentRangeEnd && date.inRange(this.currentDate, this.currentRangeEnd);
    };
    DatePickerComponent.prototype.isDayDisabled = function (day) {
        var minDate = this.minDate || new Date(0, 0, 1);
        var maxDate = this.maxDate || new Date(10000, 0, 1);
        return day.gt(maxDate) || day.lt(minDate);
    };
    /**
     * functions to move viewDate
     */
    DatePickerComponent.prototype.nextMonth = function () {
        var viewDate = this.viewDate || new CalendarDate();
        if (this.showYearPick) {
            this.viewDate = viewDate.addYears(1);
        }
        else {
            this.viewDate = viewDate.incrementMonths(1);
        }
    };
    DatePickerComponent.prototype.prevMonth = function () {
        var viewDate = this.viewDate || new CalendarDate();
        if (this.showYearPick) {
            this.viewDate = viewDate.addYears(-1);
        }
        else {
            this.viewDate = viewDate.incrementMonths(-1);
        }
    };
    DatePickerComponent.prototype.gotoToday = function () {
        this.viewDate = new CalendarDate();
    };
    DatePickerComponent.prototype.gotoSelected = function () {
        this.viewDate = this.currentDate || new CalendarDate();
    };
    DatePickerComponent.prototype.yearPickSelect = function (year) {
        if (this.disabled) {
            return;
        }
        var viewDate = this.viewDate || new CalendarDate();
        this.viewDate = viewDate.moveToYear(year);
        this.showYearPick = false;
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        this.selectedDate = value;
        this.currentDate = value ? new CalendarDate(value) : undefined;
        this.viewDate = this.currentDate ? this.currentDate : new CalendarDate();
        this.cdRef.markForCheck();
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    DatePickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    DatePickerComponent.prototype.timeChange = function (date) {
        this.selectedDate = date;
        this.currentDate = date ? new CalendarDate(date) : undefined;
        if (this.currentDate) {
            this.onDateTap(this.currentDate);
        }
        this.viewDate = this.currentDate ? this.currentDate : new CalendarDate();
        this.cdRef.markForCheck();
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "closeOnSelect", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "highlightToday", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "highlightSelected", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayWeekNumbers", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayWeekdays", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayTime", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayHours24", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayHours", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayMinutes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displaySeconds", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "prevYearBtnIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "nextYearBtnIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayJumpToday", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayJumpSelected", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "selectedDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "selectRange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "selectedRangeEnd", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DatePickerComponent.prototype, "maxRangeLength", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "minDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "maxDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "config", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DatePickerComponent.prototype, "change", void 0);
    DatePickerComponent = __decorate([
        Component({
            selector: 'vcl-date-picker',
            template: "<div class=\"vclLayoutHorizontal\">\r\n  <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\" style=\"min-width: 18em;\" *ngIf=\"displayDate\">\r\n    <div class=\"vclDGRow\">\r\n      <div class=\"vclDGCell vclToolbar\">\r\n        <div class=\" vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\r\n          <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" [disabled]=\"disabled\" (click)=\"prevMonth()\">\r\n                <div class=\"vclIcogram\">\r\n                  <div class=\"vclIcon fas fa-angle-left\" aria-hidden=\"false\" aria-label=\"previous\" role=\"img\"></div>\r\n                </div>\r\n              </button>\r\n          <span class=\"vclCalHeaderLabel\" (click)=\"showYear()\" [class.date-picker-pointer]=\"!showYearPick\">\r\n            {{viewDate?.getMonthString()}}&nbsp;&nbsp;{{viewDate?.getYearString()}}\r\n          </span>\r\n            <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" [disabled]=\"disabled\" (click)=\"nextMonth()\">\r\n              <div class=\"vclIcogram\">\r\n                <div class=\"vclIcon fas fa-angle-right\" aria-hidden=\"false\" aria-label=\"next\" role=\"img\"></div>\r\n              </div>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"!showYearPick\">\r\n        <div *ngIf=\"displayWeekNumbers || displayWeekdays\" class=\"vclDGRow\">\r\n          <div *ngIf=\"displayWeekNumbers\" class=\"vclDGCell vclCalItem vclOtherMonth\">\r\n            {{'week'}}\r\n          </div>\r\n          <div *ngFor=\"let day of viewDate.getWeekDays()\" class=\"vclDGCell vclWeekdayLabel\">\r\n            <ng-container *ngIf=\"displayWeekdays\">\r\n              {{day}}\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"vclDGRow\" *ngFor=\"let week of viewDate.getMonthBlock()\">\r\n          <div *ngIf=\"displayWeekNumbers && week.length==7\" class=\"vclDGCell\">\r\n            {{week[5].getWeekNumber()}}\r\n          </div>\r\n          <div *ngFor=\"let day of week\" class=\"vclDGCell vclCalItem\" [class.vclDisabled]=\"disabled || isDayDisabled(day)\" [class.vclOtherMonth]=\"!day.isSameMonthAndYear(viewDate)\" [class.vclSelected]=\"isMarked(day)\" (click)=\"onDateTap(day)\" [class.vclToday]=\"highlightSelected && day.isToday()\">\r\n            {{day.date.getDate()}}\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"displayJumpSelected || displayJumpToday\" class=\"vclDGRow\">\r\n          <div class=\"vclDGCell\">\r\n            <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified\" role=\"menubar\" aria-level=\"2\">\r\n              <button *ngIf=\"displayJumpToday\" type=\"button\" title=\"go to today\" class=\"vclButton vclTransparent vclLayoutFlex\" [disabled]=\"disabled\" (click)=\"gotoToday()\">\r\n                <div class=\" vclIcogram\">\r\n                  <span class=\"vclText \">go to today</span>\r\n                </div>\r\n              </button>\r\n              <button *ngIf=\"displayJumpSelected\" type=\"button\" title=\"go to selected\" class=\"vclButton vclTransparent vclLayoutFlex\" [disabled]=\"disabled\" (click)=\"gotoSelected()\">\r\n                <div class=\" vclIcogram\">\r\n                  <span class=\"vclText \">go to selected</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"showYearPick\">\r\n        <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let row of viewDate.getYearsBlock()\">\r\n          <div *ngFor=\"let year of row\" class=\"vclDGCell vclCalItem\" role=\"gridcell\" [class.vclSelected]=\"viewDate.date.getFullYear()==year\" (click)=\"yearPickSelect(year)\" [class.vclToday]=\"highlightSelected && today.isInYear(year)\">\r\n            {{year}}\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n    <vcl-time-picker *ngIf=\"displayTime\"\r\n                     [(ngModel)]=\"selectedDate\"\r\n                     (ngModelChange)=\"timeChange($event)\"\r\n                     [displayHours]=\"displayHours\"\r\n                     [displayMinutes]=\"displayMinutes\"\r\n                     [displaySeconds]=\"displaySeconds\"\r\n                     [displayHours24]=\"displayHours24\"\r\n                     [ngStyle]=\"{'margin-left': displayDate ? '10px' : 0}\">\r\n    </vcl-time-picker>\r\n</div>\r\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclDatePicker]': 'true',
                '[attr.role]': '"listbox"',
                '[attr.aria-multiselectable]': 'false',
            },
            styles: [".hidden{display:none;}\n     .date-picker-pointer{cursor: pointer;}\n    "]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], DatePickerComponent);
    return DatePickerComponent;
}());
export { DatePickerComponent };
