var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var MonthPickerComponent = /** @class */ (function () {
    function MonthPickerComponent(ref) {
        this.ref = ref;
        this.tag = MonthPickerComponent_1.Tag;
        this.now = new Date();
        this.yearMeta = {};
        this.debug = false;
        this.expanded = true;
        this.expandedChange = new EventEmitter();
        this.currentYear = this.now.getFullYear();
        this.currentYearChange = new EventEmitter();
        this.prevYearBtnTap = new EventEmitter();
        this.nextYearBtnTap = new EventEmitter();
        this.select = new EventEmitter();
        this.deselect = new EventEmitter();
        // Customization
        this.tabindex = 0;
        this.monthsPerRow = 3;
        this.locales = 'en-US';
        this.dateOptions = { month: 'short' };
        this.expandable = false;
        this.prevYearAvailable = false;
        this.nextYearAvailable = false;
        this.useAvailableMonths = false;
        this.closeBtnIcon = 'fa:times';
        this.prevYearBtnIcon = 'fa:chevron-left';
        this.nextYearBtnIcon = 'fa:chevron-right';
        this.minSelectableMonths = 0;
        this.minYear = Number.MIN_SAFE_INTEGER;
        this.maxYear = Number.MAX_SAFE_INTEGER;
        this.change = new EventEmitter();
    }
    MonthPickerComponent_1 = MonthPickerComponent;
    Object.defineProperty(MonthPickerComponent.prototype, "min", {
        set: function (value) {
            var tag = this.tag + ".min:";
            if (this.debug)
                console.log(tag, 'value:', value);
            if (!value) {
                return;
            }
            this.minValue = value;
            if (this.debug)
                console.log(tag, 'this.maxValue:', this.maxValue);
            if (this.debug)
                console.log(tag, 'this.months:', this.months);
            if (!this.maxValue || !this.months) {
                return;
            }
            this.setAvailableMonths();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonthPickerComponent.prototype, "max", {
        set: function (value) {
            var tag = this.tag + ".max:";
            if (this.debug)
                console.log(tag, 'value:', value);
            if (!value) {
                return;
            }
            this.maxValue = value;
            if (this.debug)
                console.log(tag, 'this.minValue:', this.maxValue);
            if (this.debug)
                console.log(tag, 'this.months:', this.months);
            if (!this.minValue || !this.months) {
                return;
            }
            this.setAvailableMonths();
        },
        enumerable: true,
        configurable: true
    });
    MonthPickerComponent.prototype.setAvailableMonths = function () {
        this.useAvailableMonths = true;
        this.removeAllAvailableMonths();
        this.addAvailableMonthRange();
    };
    MonthPickerComponent.prototype.onModelChange = function (value) {
        this.onChangeCallback && this.onChangeCallback(value);
    };
    MonthPickerComponent.prototype.writeValue = function (value) {
        if (value) {
            this.selectMonth(value.getFullYear(), value.getMonth());
            this.ref.markForCheck();
        }
    };
    MonthPickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MonthPickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MonthPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tag = this.tag + ".ngOnInit()";
        // Create month labels.
        var date = new Date(this.now.getFullYear(), 0);
        this.months = Array(MonthPickerComponent_1.MonthCount).fill(0).map(function (_) {
            var month = date.toLocaleString(_this.locales, _this.dateOptions);
            date.setMonth(date.getMonth() + 1);
            return month;
        });
        if (!this.maxSelectableMonths) {
            this.maxSelectableMonths = this.colors && this.colors.length || 1;
        }
        this.availableColors = this.colors ? this.colors.map(function (color) { return true; }) : [];
        this.setYearMeta(this.currentYear);
        this.addAvailableMonthRange();
    };
    MonthPickerComponent.prototype.ngOnChanges = function (changes) {
        var tag = this.tag + ".ngOnChanges()";
        if (this.debug)
            console.log(tag, 'changes:', changes);
        if (changes.currentYear && !changes.currentYear.isFirstChange())
            this.setYearMeta(changes.currentYear.currentValue);
    };
    MonthPickerComponent.prototype.setYearMeta = function (year) {
        var tag = this.tag + ".setYearMeta()";
        if (this.debug)
            console.log(tag, 'year:', year);
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        this.currentMeta = this.yearMeta[year];
    };
    MonthPickerComponent.prototype.createYearMeta = function (year) {
        return this.months.map(function (_) { return ({}); });
    };
    MonthPickerComponent.prototype.selectMonth = function (year, month) {
        if (!this.isMonthAvailable(year, month) || this.isMonthPreselected(year, month)) {
            return;
        }
        var monthMeta = this.getYearMeta(year)[month];
        if (monthMeta.selected) {
            if (this.getSelectedDates().length <= this.minSelectableMonths) {
                return;
            }
            return this.deselectMonth(year, month);
        }
        if (this.maxSelectableMonths === 1) {
            this.iterateMonthMetas(function (year, month, mMeta) {
                mMeta.selected = mMeta === monthMeta;
            });
        }
        if (this.getSelectedDates().length < this.maxSelectableMonths) {
            monthMeta.selected = true;
        }
        if (monthMeta.selected) {
            this.setMonthBackgroundColor(year, month);
            this.notifySelect(year + "." + month);
            this.onModelChange(new Date(year, month));
            if (this.maxSelectableMonths === 1 && this.expandable) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthPickerComponent.prototype.preselectMonth = function (year, month, color) {
        var tag = this.tag + ".preselectMonth()";
        var debug = this.debug && false;
        if (debug)
            console.log(tag, year + "." + month);
        var monthMeta = this.getYearMeta(year)[month];
        if (monthMeta.selected) {
            this.deselectMonth(year, month);
        }
        monthMeta.preselected = true;
        monthMeta.color = color;
        if (debug)
            console.log(tag, 'monthMeta:', monthMeta);
        this.ref.markForCheck();
    };
    MonthPickerComponent.prototype.dePreselectMonth = function (year, month) {
        var tag = this.tag + ".dePreselectMonth()";
        var debug = this.debug && false;
        if (debug)
            console.log(tag, year + "." + month);
        if (!this.isMonthPreselected(year, month))
            return;
        var monthMeta = this.getYearMeta(year)[month];
        monthMeta.preselected = false;
        delete monthMeta.color;
        if (debug)
            console.log(tag, 'monthMeta:', monthMeta);
        this.ref.markForCheck();
    };
    MonthPickerComponent.prototype.isMonthAvailable = function (year, month) {
        return this.isDateInBounds(year, month) && (!this.useAvailableMonths ||
            this.yearMeta[year] && this.yearMeta[year][month].available);
    };
    MonthPickerComponent.prototype.isDateInBounds = function (year, month) {
        return this.isMonthInBounds(month) && this.isYearInBounds(year);
    };
    MonthPickerComponent.prototype.isMonthInBounds = function (month) {
        return month > -1 && month < MonthPickerComponent_1.MonthCount;
    };
    MonthPickerComponent.prototype.isYearInBounds = function (year) {
        return year > this.minYear && year < this.maxYear;
    };
    MonthPickerComponent.prototype.isMonthPreselected = function (year, month) {
        var tag = this.tag + ".isMonthPreselected()";
        var debug = this.debug && false;
        if (debug)
            console.log(tag, year + "." + month);
        var isMonthPreselected = !!(this.isDateInBounds(year, month) &&
            this.yearMeta[year] && this.yearMeta[year][month].preselected);
        if (debug)
            console.log(tag, 'isMonthPreselected:', isMonthPreselected);
        return isMonthPreselected;
    };
    MonthPickerComponent.prototype.getYearMeta = function (year) {
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        return this.yearMeta[year];
    };
    MonthPickerComponent.prototype.iterateMonthMetas = function (cb) {
        var _this = this;
        Object.keys(this.yearMeta).forEach(function (year) {
            _this.yearMeta[year].forEach(function (monthMeta, month) {
                cb(Number(year), month, monthMeta);
            });
        });
    };
    MonthPickerComponent.prototype.getSelectedDates = function () {
        var selectedDates = [];
        this.iterateMonthMetas(function (year, month, monthMeta) {
            if (monthMeta.selected) {
                selectedDates.push(year + "." + month);
            }
        });
        return selectedDates;
    };
    MonthPickerComponent.prototype.setMonthBackgroundColor = function (year, month) {
        var color = this.getMonthBackgroundColor();
        if (color) {
            var monthMeta = this.getYearMeta(year)[month];
            monthMeta.color = color;
        }
    };
    MonthPickerComponent.prototype.getMonthBackgroundColor = function () {
        var index = this.availableColors.findIndex(function (available) { return available; });
        if (index !== -1) {
            this.availableColors[index] = false;
            return this.colors[index];
        }
    };
    MonthPickerComponent.prototype.deselectMonth = function (year, month) {
        if (this.isMonthSelected(year, month)) {
            var monthMeta = this.getYearMeta(year)[month];
            monthMeta.selected = false;
            this.clearMonthBackgroundColor(year, month);
            this.notifyDeselect(year + "." + month);
        }
    };
    MonthPickerComponent.prototype.isMonthSelected = function (year, month) {
        return this.isDateInBounds(year, month) &&
            this.yearMeta[year] && this.yearMeta[year][month].selected;
    };
    MonthPickerComponent.prototype.clearMonthBackgroundColor = function (year, month) {
        if (this.availableColors) {
            var monthMeta = this.getYearMeta(year)[month];
            if (monthMeta.color) {
                var index = this.colors.indexOf(monthMeta.color);
                this.availableColors[index] = true;
                delete monthMeta.color;
            }
        }
    };
    MonthPickerComponent.prototype.deselectAllMonths = function () {
        this.iterateMonthMetas(this.deselectMonth);
    };
    MonthPickerComponent.prototype.addAvailableMonthRange = function (min, max) {
        if (min === void 0) { min = this.minValue; }
        if (max === void 0) { max = this.maxValue; }
        var tag = this.tag + ".addAvailableMonthRange()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'min:', min);
        if (debug)
            console.log(tag, 'max:', max);
        for (var i = new Date(min); i <= max; i.setMonth(i.getMonth() + 1)) {
            this.addAvailableMonth(i.getFullYear(), i.getMonth());
        }
    };
    MonthPickerComponent.prototype.addAvailableMonth = function (year, month) {
        if (this.isDateInBounds(year, month)) {
            this.getYearMeta(year)[month].available = true;
            this.ref.markForCheck();
        }
    };
    MonthPickerComponent.prototype.removeAvailableMonth = function (year, month) {
        if (this.isDateInBounds(year, month) && this.yearMeta[year]) {
            this.yearMeta[year][month].available = false;
        }
    };
    MonthPickerComponent.prototype.removeAllAvailableMonths = function () {
        var _this = this;
        this.iterateMonthMetas(function (year, month) {
            _this.dePreselectMonth(year, month);
            _this.deselectMonth(year, month);
            _this.removeAvailableMonth(year, month);
        });
        this.ref.markForCheck();
    };
    MonthPickerComponent.prototype.onPrevYearTap = function () {
        if (this.prevYearAvailable) {
            this.currentYear--;
            this.setYearMeta(this.currentYear);
            this.currentYearChange.emit(this.currentYear);
            this.prevYearBtnTap.emit();
        }
    };
    MonthPickerComponent.prototype.onNextYearTap = function () {
        if (this.nextYearAvailable) {
            this.currentYear++;
            this.setYearMeta(this.currentYear);
            this.currentYearChange.emit(this.currentYear);
            this.nextYearBtnTap.emit();
        }
    };
    MonthPickerComponent.prototype.onCloseBtnTap = function () {
        if (this.expandable) {
            if (this.expanded) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthPickerComponent.prototype.notifySelect = function (date) {
        this.select.emit(date);
    };
    MonthPickerComponent.prototype.notifyDeselect = function (date) {
        this.deselect.emit(date);
    };
    MonthPickerComponent.prototype.isCurrentMonth = function (year, month) {
        return this.now.getFullYear() == year && this.now.getMonth() === month;
    };
    MonthPickerComponent.prototype.getMonth = function (year, month) {
        if (this.isDateInBounds(year, month)) {
            return Object.assign({
                date: year + "." + month,
                label: this.months[month]
            }, this.getYearMeta(year)[month]);
        }
    };
    MonthPickerComponent.Tag = 'MonthPickerComponent';
    MonthPickerComponent.MonthCount = 12;
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MonthPickerComponent.prototype, "debug", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MonthPickerComponent.prototype, "expanded", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], MonthPickerComponent.prototype, "expandedChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MonthPickerComponent.prototype, "currentYear", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], MonthPickerComponent.prototype, "currentYearChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MonthPickerComponent.prototype, "prevYearBtnTap", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MonthPickerComponent.prototype, "nextYearBtnTap", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MonthPickerComponent.prototype, "select", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MonthPickerComponent.prototype, "deselect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MonthPickerComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MonthPickerComponent.prototype, "monthsPerRow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], MonthPickerComponent.prototype, "colors", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MonthPickerComponent.prototype, "locales", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MonthPickerComponent.prototype, "dateOptions", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MonthPickerComponent.prototype, "expandable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MonthPickerComponent.prototype, "prevYearAvailable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MonthPickerComponent.prototype, "nextYearAvailable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MonthPickerComponent.prototype, "useAvailableMonths", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MonthPickerComponent.prototype, "closeBtnIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MonthPickerComponent.prototype, "prevYearBtnIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MonthPickerComponent.prototype, "nextYearBtnIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MonthPickerComponent.prototype, "maxSelectableMonths", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MonthPickerComponent.prototype, "minSelectableMonths", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MonthPickerComponent.prototype, "minYear", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MonthPickerComponent.prototype, "maxYear", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MonthPickerComponent.prototype, "change", void 0);
    __decorate([
        Input('min'),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], MonthPickerComponent.prototype, "min", null);
    __decorate([
        Input('max'),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], MonthPickerComponent.prototype, "max", null);
    MonthPickerComponent = MonthPickerComponent_1 = __decorate([
        Component({
            selector: 'vcl-month-picker',
            template: "<div class=\"vclDatePicker\">\r\n  <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput vclNoMargin\"\r\n    [attr.role]=\"'grid'\"\r\n    [attr.tabindex]=\"tabindex\"\r\n    [attr.aria-multiselectable]=\"maxSelectableMonths > 1\"\r\n    [attr.aria-expanded]=\"expanded\">\r\n\r\n    <div class=\"vclDGRow\">\r\n      <div class=\"vclToolbar vclLayoutHorizontal vclLayoutFlex vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\r\n        <div class=\"vclLayoutHorizontal vclLayoutCenter\">\r\n          <button vcl-button class=\"vclButton vclTransparent vclLayoutHorizontal vclLayoutCenterCenter\"\r\n            type=\"button\"\r\n            [class.vclDisabled]=\"!prevYearAvailable\"\r\n            [icon]=\"prevYearBtnIcon\"\r\n            (click)=\"onPrevYearTap()\">\r\n          </button>\r\n\r\n          <span class=\"vclCalHeaderLabel\">{{ currentYear }}</span>\r\n\r\n          <button vcl-button\r\n            type=\"button\"\r\n            class=\"vclButton vclTransparent vclLayoutHorizontal vclLayoutCenterCenter\"\r\n            [class.vclDisabled]=\"!nextYearAvailable\"\r\n            [icon]=\"nextYearBtnIcon\"\r\n            (click)=\"onNextYearTap()\">\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"vclLayoutHorizontal vclLayoutFlex vclLayoutEndJustified\">\r\n          <button vcl-button *ngIf=\"expandable\"\r\n            type=\"button\"\r\n            class=\"vclButton vclTransparent vclLayoutHorizontal vclLayoutCenterCenter\"\r\n            [icon]=\"closeBtnIcon\"\r\n            (click)=\"onCloseBtnTap()\">\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"vclSeparator\"></div>\r\n\r\n    <ng-template ngFor let-iM [ngForOf]=\"months\" let-i=\"index\">\r\n      <div *ngIf=\"i % monthsPerRow === 0\" class=\"vclDGRow\" role=\"row\">\r\n        <div *ngFor=\"let jM of months.slice(i, (i + monthsPerRow > months.length ? months.length : i + monthsPerRow)); let j = index;\"\r\n          (click)=\"selectMonth(currentYear, i+j)\"\r\n          class=\"vclDGCell vclCalItem\"\r\n          [class.vclAvailable]=\"!useAvailableMonths || currentMeta[i+j].available\"\r\n          [class.vclUnavailable]=\"useAvailableMonths && !currentMeta[i+j].available\"\r\n          [class.vclToday]=\"isCurrentMonth(i+j)\"\r\n          [class.vclOtherMonth]=\"!isCurrentMonth(i+j)\"\r\n          [class.vclDisabled]=\"useAvailableMonths && !currentMeta[i+j].available\"\r\n          [class.vclSelected]=\"currentMeta[i+j].selected || currentMeta[i+j].preselected\"\r\n          [style.background-color]=\"currentMeta[i+j].color\"\r\n          [style.order]=\"i+j\"\r\n          [attr.aria-selected]=\"currentMeta[i+j].selected || currentMeta[i+j].preselected\"\r\n          [tabindex]=\"i+j\"\r\n          role=\"gridcell\">\r\n            <div class=\"vclLayoutHorizontal vclLayoutCenterJustified vclMonthPickerListItemLabel\">\r\n              {{months[i + j]}}\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return MonthPickerComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], MonthPickerComponent);
    return MonthPickerComponent;
    var MonthPickerComponent_1;
}());
export { MonthPickerComponent };
