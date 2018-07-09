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
import { Component, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, forwardRef, SkipSelf, Directive, HostBinding, HostListener, Inject, ChangeDetectorRef } from '@angular/core';
import { merge } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { ButtonDirective } from '../button/index';
var GroupButtonDirective = /** @class */ (function () {
    function GroupButtonDirective(buttonGroupContainer, host) {
        this.buttonGroupContainer = buttonGroupContainer;
        this.host = host;
        this.selected = false;
        this.select = new EventEmitter();
    }
    Object.defineProperty(GroupButtonDirective.prototype, "isDisabled", {
        get: function () {
            return this.host.disabled || this.buttonGroupContainer.disabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    GroupButtonDirective.prototype.onClick = function () {
        this.selected = !this.selected;
        this.select.emit(this.selected);
    };
    __decorate([
        HostBinding('class.vclDisabled'),
        HostBinding('attr.disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], GroupButtonDirective.prototype, "isDisabled", null);
    __decorate([
        HostBinding('class.vclSelected'),
        __metadata("design:type", Boolean)
    ], GroupButtonDirective.prototype, "selected", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GroupButtonDirective.prototype, "onClick", null);
    GroupButtonDirective = __decorate([
        Directive({
            selector: 'button[vcl-button][vcl-button-group]',
        }),
        __param(0, SkipSelf()),
        __param(0, Inject(forwardRef(function () { return ButtonGroupComponent; }))),
        __metadata("design:paramtypes", [Object, ButtonDirective])
    ], GroupButtonDirective);
    return GroupButtonDirective;
}());
export { GroupButtonDirective };
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ButtonGroupComponent; }),
    multi: true
};
var ButtonGroupComponent = /** @class */ (function () {
    function ButtonGroupComponent(cdRef) {
        this.cdRef = cdRef;
        this.disabled = false;
        // If `single`, a single item can be selected
        // If `multiple` multiple items can be selected
        this.mode = 'single';
        this.selectionChange = new EventEmitter();
        /**
       * things needed for ControlValueAccessor-Interface
       */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    ButtonGroupComponent.prototype.select = function (idx) {
        if (this.mode === 'multiple') {
            if (!Array.isArray(this.selectedIndex)) {
                this.selectedIndex = [];
            }
            if (this.selectedIndex.includes(idx)) {
                this.selectedIndex = this.selectedIndex.filter(function (thisIdx) { return thisIdx !== idx; });
            }
            else {
                this.selectedIndex = this.selectedIndex.concat([idx]);
            }
        }
        else {
            this.selectedIndex = idx;
        }
    };
    ButtonGroupComponent.prototype.syncButtons = function () {
        var selectedIndex = this.selectedIndex;
        if (this.buttons && this.mode === 'multiple' && Array.isArray(selectedIndex)) {
            this.buttons.forEach(function (btn, idx) {
                btn.selected = selectedIndex.includes(idx);
            });
        }
        else if (this.buttons && this.mode === 'single' && typeof selectedIndex === 'number') {
            this.buttons.forEach(function (btn, idx) {
                btn.selected = selectedIndex === idx;
            });
        }
    };
    ButtonGroupComponent.prototype.triggerChange = function () {
        this.selectionChange.emit(this.selectedIndex);
        this.onChange(this.selectedIndex);
    };
    ButtonGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.buttons && this.buttons.changes.pipe(startWith(null)).subscribe(function () {
            if (!_this.buttons) {
                return;
            }
            _this.dispose();
            // Subscribes to button click events
            var click$ = merge.apply(void 0, (_this.buttons.map(function (source, idx) { return source.select.pipe(map(function () { return idx; })); })));
            _this.pressSubscription = click$.subscribe(function (idx) {
                _this.select(idx);
                _this.syncButtons();
                _this.triggerChange();
                _this.onTouched();
            });
            _this.syncButtons();
        });
    };
    ButtonGroupComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    ButtonGroupComponent.prototype.dispose = function () {
        this.pressSubscription && this.pressSubscription.unsubscribe();
    };
    ButtonGroupComponent.prototype.writeValue = function (value) {
        this.selectedIndex = value;
        this.syncButtons();
        this.cdRef.markForCheck();
    };
    ButtonGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        ContentChildren(GroupButtonDirective),
        __metadata("design:type", QueryList)
    ], ButtonGroupComponent.prototype, "buttons", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ButtonGroupComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonGroupComponent.prototype, "mode", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ButtonGroupComponent.prototype, "selectionChange", void 0);
    ButtonGroupComponent = __decorate([
        Component({
            selector: 'vcl-button-group',
            host: {
                '[class.vclButtonGroup]': 'true',
            },
            template: "<ng-content></ng-content>",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], ButtonGroupComponent);
    return ButtonGroupComponent;
}());
export { ButtonGroupComponent };
