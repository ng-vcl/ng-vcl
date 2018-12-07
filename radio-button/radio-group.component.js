var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, ContentChildren, Output, EventEmitter, forwardRef, ChangeDetectorRef, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { RadioButtonComponent } from './radio-button.component';
export var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["Single"] = 0] = "Single";
    SelectionMode[SelectionMode["Multiple"] = 1] = "Multiple";
})(SelectionMode || (SelectionMode = {}));
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RadioGroupComponent; }),
    multi: true
};
var RadioGroupComponent = /** @class */ (function () {
    function RadioGroupComponent(cdRef) {
        this.cdRef = cdRef;
        this.layout = 'horizontal';
        this.change = new EventEmitter();
        /**
        * things needed for ControlValueAccessor-Interface
        */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(RadioGroupComponent.prototype, "vclInputInlineControlGroup", {
        get: function () {
            return this.layout === 'horizontal';
        },
        enumerable: true,
        configurable: true
    });
    RadioGroupComponent.prototype.syncRadioButtons = function () {
        var _this = this;
        if (this.radioButtons) {
            this.radioButtons.forEach(function (rbtn, idx) {
                var value = rbtn.value === undefined ? idx : rbtn.value;
                rbtn.setChecked(_this.value === value);
            });
            this.cdRef.markForCheck();
        }
    };
    RadioGroupComponent.prototype.triggerChange = function () {
        this.change.emit(this.value);
        this.onChange(this.value);
    };
    RadioGroupComponent.prototype.ngOnChanges = function (changes) {
        if ('value' in changes) {
            this.syncRadioButtons();
        }
    };
    RadioGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Subscribes to radio button change event
        this.changesSub = this.radioButtons && this.radioButtons.changes.pipe(startWith(null)).subscribe(function () {
            _this.dispose();
            if (_this.radioButtons) {
                // Sync inline property
                _this.radioButtons && _this.radioButtons.forEach(function (crbtn) {
                    crbtn.setInline(_this.layout === 'horizontal');
                });
                // Subscribe last radio button to blur event
                _this.blurSub = _this.radioButtons.last && _this.radioButtons.last.blur.subscribe(function () {
                    _this.onTouched();
                }) || undefined;
                // Subscribe to checked change event
                var checked$ = merge.apply(void 0, (_this.radioButtons.map(function (source, idx) { return source.checkedChange.pipe(map(function () { return ({ source: source, idx: idx }); })); })));
                _this.checkedSub = checked$.subscribe(function (c) {
                    // Use index as value if radio button value is undefined
                    _this.value = c.source.value === undefined ? c.idx : c.source.value;
                    _this.syncRadioButtons();
                    _this.triggerChange();
                });
                _this.syncRadioButtons();
            }
        });
    };
    RadioGroupComponent.prototype.ngOnDestroy = function () {
        this.dispose();
        this.changesSub && this.changesSub.unsubscribe();
    };
    RadioGroupComponent.prototype.dispose = function () {
        this.blurSub && this.blurSub.unsubscribe();
        this.checkedSub && this.checkedSub.unsubscribe();
    };
    RadioGroupComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.syncRadioButtons();
    };
    RadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RadioGroupComponent.prototype.setDisabledState = function (isDisabled) {
        this.radioButtons && this.radioButtons.forEach(function (rb) { return rb.setDisabledState(isDisabled); });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], RadioGroupComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], RadioGroupComponent.prototype, "layout", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], RadioGroupComponent.prototype, "change", void 0);
    __decorate([
        ContentChildren(RadioButtonComponent),
        __metadata("design:type", Object)
    ], RadioGroupComponent.prototype, "radioButtons", void 0);
    __decorate([
        HostBinding('class.vclInputInlineControlGroup'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], RadioGroupComponent.prototype, "vclInputInlineControlGroup", null);
    RadioGroupComponent = __decorate([
        Component({
            selector: 'vcl-radio-group',
            template: "<ng-content></ng-content>",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                'attr.role': '"radiogroup"'
            }
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], RadioGroupComponent);
    return RadioGroupComponent;
}());
export { RadioGroupComponent };
