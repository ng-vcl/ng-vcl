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
import { Component, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, forwardRef, ContentChildren, QueryList, Inject } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var MetalistItem = /** @class */ (function () {
    function MetalistItem(metalist) {
        this.metalist = metalist;
        this.disabled = false;
    }
    Object.defineProperty(MetalistItem.prototype, "marked", {
        get: function () {
            return this.metalist.isMarked(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetalistItem.prototype, "selected", {
        get: function () {
            return this.metalist.isSelected(this);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MetalistItem.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MetalistItem.prototype, "metadata", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], MetalistItem.prototype, "disabled", void 0);
    MetalistItem = __decorate([
        Component({
            selector: '[vcl-metalist-item]',
            template: '<ng-content></ng-content>',
            exportAs: 'meta'
        }),
        __param(0, Inject(forwardRef(function () { return MetalistComponent; }))),
        __metadata("design:paramtypes", [Object])
    ], MetalistItem);
    return MetalistItem;
}());
export { MetalistItem };
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MetalistComponent; }),
    multi: true
};
var MetalistComponent = /** @class */ (function () {
    function MetalistComponent(cdRef) {
        this.cdRef = cdRef;
        // If `single`, a single item can be selected
        // If `multiple` multiple items can be selected
        this.mode = 'single';
        this.change = new EventEmitter();
        this.itemsChange = new EventEmitter();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(MetalistComponent.prototype, "itemsArray", {
        get: function () {
            return this.items ? this.items.toArray() : [];
        },
        enumerable: true,
        configurable: true
    });
    MetalistComponent.prototype.isMarked = function (item) {
        return this.markedItem === item;
    };
    MetalistComponent.prototype.isSelected = function (item) {
        var value = this.value;
        if (this.mode === 'multiple' && Array.isArray(value)) {
            return value.includes(item.value);
        }
        else {
            return item.value === value;
        }
    };
    Object.defineProperty(MetalistComponent.prototype, "selectedItem", {
        get: function () {
            return this.selectedItems[0] || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MetalistComponent.prototype, "selectedItems", {
        get: function () {
            return this.itemsArray.filter(function (i) { return i.selected; });
        },
        enumerable: true,
        configurable: true
    });
    MetalistComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.itemsSub = this.items && this.items.changes.subscribe(function () {
            _this.itemsChange.emit();
        });
    };
    MetalistComponent.prototype.ngOnDestroy = function () {
        this.itemsSub && this.itemsSub.unsubscribe();
    };
    MetalistComponent.prototype.triggerChange = function () {
        this.itemsChange.emit();
        this.change.emit(this.value);
        this.onChange(this.value);
    };
    MetalistComponent.prototype.select = function (item) {
        if (item === undefined) {
            return this.selectMarked();
        }
        if (typeof item === 'number') {
            item = this.itemsArray[item];
        }
        if (item instanceof MetalistItem) {
            if (item.disabled) {
                return;
            }
            if (this.mode === 'multiple') {
                var selectedItems = this.itemsArray.filter(function (i) { return i.selected; });
                if (item.selected) {
                    var value_1 = item.value;
                    if (!Array.isArray(this.value)) {
                        this.value = [];
                    }
                    this.value = this.value.filter(function (v) { return v !== value_1; });
                }
                else {
                    // prevent overflow
                    var maxSelectableItems = typeof this.maxSelectableItems === 'number' ? this.maxSelectableItems : Infinity;
                    if (selectedItems.length < maxSelectableItems) {
                        if (!Array.isArray(this.value)) {
                            this.value = [];
                        }
                        this.value.push(item.value);
                    }
                }
            }
            else {
                this.value = item.value;
            }
            this.triggerChange();
            this.cdRef.markForCheck();
        }
    };
    MetalistComponent.prototype.deselect = function (item) {
        if (typeof item === 'number') {
            item = this.itemsArray[item];
        }
        if (item instanceof MetalistItem) {
            var value_2 = item.value;
            if (this.mode === 'single' && this.value === value_2) {
                this.value = undefined;
                this.triggerChange();
            }
            else if (this.mode === 'multiple') {
                if (!Array.isArray(this.value)) {
                    this.value = [];
                }
                this.value = this.value.filter(function (v) { return v !== value_2; });
                this.triggerChange();
            }
            this.cdRef.markForCheck();
        }
    };
    MetalistComponent.prototype.determineMarkedIndex = function () {
        var idx = this.itemsArray.findIndex(function (item) { return item.marked; });
        return idx >= 0 ? idx : this.itemsArray.findIndex(function (metaItem) { return metaItem.selected; });
    };
    MetalistComponent.prototype.mark = function (item) {
        if (typeof item === 'number') {
            item = this.itemsArray[item];
        }
        if (item instanceof MetalistItem) {
            this.markedItem = item;
            this.itemsChange.emit();
            this.cdRef.markForCheck();
        }
    };
    MetalistComponent.prototype.markNext = function () {
        var _this = this;
        var items = this.itemsArray;
        var newIdx = this.determineMarkedIndex() + 1;
        if (newIdx >= (items.length)) {
            newIdx = items.length - 1;
        }
        items.every(function (item, cidx) {
            var mark = cidx >= newIdx;
            if (!item.disabled && mark) {
                _this.markedItem = item;
                return false;
            }
            return true;
        });
        this.itemsChange.emit();
        this.cdRef.markForCheck();
    };
    MetalistComponent.prototype.markPrev = function () {
        var _this = this;
        var items = this.itemsArray.reverse();
        var newIdx = this.determineMarkedIndex() - 1;
        if (newIdx <= 0 && items.length > 0) {
            newIdx = 0;
        }
        newIdx = (items.length - 1) - newIdx;
        items.every(function (item, cidx) {
            var mark = cidx >= newIdx;
            if (!item.disabled && mark) {
                _this.markedItem = item;
                return false;
            }
            return true;
        });
        this.itemsChange.emit();
        this.cdRef.markForCheck();
    };
    MetalistComponent.prototype.selectMarked = function () {
        if (this.markedItem) {
            this.select(this.markedItem);
            this.cdRef.markForCheck();
        }
    };
    MetalistComponent.prototype.setValue = function (value) {
        this.value = value;
        this.cdRef.markForCheck();
    };
    MetalistComponent.prototype.writeValue = function (value) {
        this.setValue(value);
    };
    MetalistComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MetalistComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MetalistComponent.prototype, "mode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], MetalistComponent.prototype, "maxSelectableItems", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MetalistComponent.prototype, "change", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MetalistComponent.prototype, "itemsChange", void 0);
    __decorate([
        ContentChildren(MetalistItem),
        __metadata("design:type", QueryList)
    ], MetalistComponent.prototype, "items", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MetalistComponent.prototype, "value", void 0);
    MetalistComponent = __decorate([
        Component({
            selector: 'vcl-metalist, [vcl-metalist]',
            template: "<ng-content></ng-content>\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], MetalistComponent);
    return MetalistComponent;
}());
export { MetalistComponent };
