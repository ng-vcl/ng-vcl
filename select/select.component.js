var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component, forwardRef, HostBinding, ViewChild, ContentChildren, ElementRef, Input, QueryList, EventEmitter, Output, HostListener, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownComponent } from '../dropdown/index';
import { SelectOption } from './select-option.component';
export var DropDirection;
(function (DropDirection) {
    DropDirection[DropDirection["Top"] = 0] = "Top";
    DropDirection[DropDirection["Bottom"] = 1] = "Bottom";
})(DropDirection || (DropDirection = {}));
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = /** @class */ (function () {
    function SelectComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.debug = false;
        // If `Single`, a single item can be selected
        // If `Multiple` multiple items can be selected
        this.mode = 'single';
        this.placeholder = 'Select value';
        this.tabindex = 0;
        this.expanded = false;
        this.zIndex = 999999;
        this.disabled = false;
        this.listenKeys = true;
        // styling
        this.expandedIcon = 'fa:chevron-up';
        this.collapsedIcon = 'fa:chevron-down';
        this.change = new EventEmitter();
        this.focused = false;
        this.dropdownTop = -1;
        this.selectedItems = [];
        /**
         * Things needed for ControlValueAccessor-Interface.
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    SelectComponent_1 = SelectComponent;
    SelectComponent.prototype.ngAfterViewInit = function () {
        var tag = SelectComponent_1.Tag + ".ngAfterViewInit()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag);
        this.onItemsChange();
    };
    SelectComponent.prototype.keydown = function (ev) {
        if (this.listenKeys) {
            var prevent = true;
            switch (ev.code) {
                case 'ArrowDown':
                    if (this.expanded) {
                        this.dropdown.onMetalistKeydown(ev);
                        // this.dropdown.metalist.markNext();
                    }
                    else {
                        this.open();
                    }
                    break;
                case 'ArrowUp':
                    if (this.expanded) {
                        this.dropdown.onMetalistKeydown(ev);
                        // this.dropdown.metalist.markPrev();
                    }
                    else {
                        this.open();
                    }
                    break;
                case 'Enter':
                    if (this.expanded) {
                        this.dropdown.onMetalistKeydown(ev);
                        // this.dropdown.metalist.selectMarked();
                        // this.cdRef.detectChanges();
                    }
                    else {
                        this.open();
                    }
                    break;
                case 'Space':
                    this.toggle();
                    break;
                case 'Tab':
                    this.close();
                case 'Escape':
                    this.close();
                default:
                    prevent = false;
            }
            prevent && ev.preventDefault();
        }
    };
    SelectComponent.prototype.reFocus = function () {
        this.elementRef.nativeElement.focus();
    };
    SelectComponent.prototype.onFocus = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.focused = true;
                return [2 /*return*/];
            });
        });
    };
    SelectComponent.prototype.onBlur = function (event) {
        var _this = this;
        // When the element loses focus, the dropdown should close
        // Only close when the active element is not a child element of the select component
        setTimeout(function () {
            var target = typeof document !== undefined && document.activeElement;
            var nativeElement = _this.elementRef && _this.elementRef.nativeElement;
            if (target && nativeElement && !_this.elementRef.nativeElement.contains(target)) {
                _this.close();
                _this.cdRef.markForCheck();
            }
        }, 1);
        this.focused = false;
        this.onTouched();
    };
    SelectComponent.prototype.toggle = function () {
        if (this.disabled) {
            return;
        }
        if (!this.expanded) {
            this.open();
        }
        else {
            this.close();
        }
    };
    SelectComponent.prototype.close = function () {
        this.expanded = false;
    };
    Object.defineProperty(SelectComponent.prototype, "showDisplayValue", {
        get: function () {
            return this.mode === 'single' || this.selectedItems.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tag, debug, position, screenHeight, spaceBottom, spaceTop, dropDirection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tag = SelectComponent_1.Tag + ".open()";
                        debug = this.debug || false;
                        this.expanded = true;
                        position = this.elementRef.nativeElement.getBoundingClientRect();
                        if (this.debug)
                            console.log(tag, 'position:', position);
                        screenHeight = window.innerHeight
                            || document.documentElement.clientHeight
                            || document.body.clientHeight;
                        if (this.debug)
                            console.log(tag, 'screenHeight:', screenHeight);
                        spaceBottom = screenHeight - position.bottom;
                        if (this.debug)
                            console.log(tag, 'spaceBottom:', spaceBottom);
                        spaceTop = position.top;
                        if (this.debug)
                            console.log(tag, 'spaceTop:', spaceTop);
                        dropDirection = (this.dropDirection === DropDirection.Top ||
                            this.dropDirection === DropDirection.Bottom) ? this.dropDirection :
                            (spaceBottom < spaceTop) ? DropDirection.Top : DropDirection.Bottom;
                        if (this.debug)
                            console.log(tag, 'dropDirection:', DropDirection[dropDirection]);
                        // Wait for the dropdown to be rendered, so the offsetHeight can be determined
                        return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 0); })];
                    case 1:
                        // Wait for the dropdown to be rendered, so the offsetHeight can be determined
                        _a.sent();
                        switch (dropDirection) {
                            case DropDirection.Top:
                                this.dropdownTop = -1 *
                                    (this.dropdown.elementRef.nativeElement.children[0].offsetHeight
                                        - 1 // border
                                        + 0.3 // fix chrome ugly 1-pixel-render
                                    );
                                break;
                            case DropDirection.Bottom:
                                this.dropdownTop = -1.1
                                    + this.select.nativeElement.offsetHeight;
                                break;
                        }
                        this.cdRef.markForCheck();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectComponent.prototype.syncDisplayValue = function () {
        var items = ((this.dropdown && this.dropdown.metalist && this.dropdown.metalist.selectedItems) || []);
        this.selectedItems = items.map(function (item) {
            var label = (item.metadata && item.metadata.metadata && item.metadata.metadata.label) || String(item.value);
            return {
                label: label,
                metaItem: item
            };
        });
        var item = this.selectedItems[0];
        if (item) {
            this.displayValue = item.label;
        }
        else {
            this.displayValue = this.placeholder;
        }
    };
    SelectComponent.prototype.deselectItem = function (item) {
        this.dropdown.metalist.deselect(item);
    };
    SelectComponent.prototype.onItemsChange = function () {
        this.syncDisplayValue();
        this.cdRef.detectChanges();
        this.cdRef.markForCheck();
    };
    SelectComponent.prototype.onDropdownChange = function (value) {
        var _this = this;
        if (this.mode === 'single') {
            this.close();
        }
        this.syncDisplayValue();
        // propagate value change
        this.change.emit(value);
        // propagate form-change
        this.onChange(value);
        // refocus
        setTimeout(function () { return _this.reFocus(); }, 0);
    };
    SelectComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.dropdown.writeValue(value);
        this.syncDisplayValue();
        this.cdRef.markForCheck();
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    SelectComponent.Tag = 'SelectComponent';
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SelectComponent.prototype, "debug", void 0);
    __decorate([
        ViewChild('dropdown'),
        __metadata("design:type", DropdownComponent)
    ], SelectComponent.prototype, "dropdown", void 0);
    __decorate([
        ContentChildren(SelectOption),
        __metadata("design:type", QueryList)
    ], SelectComponent.prototype, "items", void 0);
    __decorate([
        ViewChild('select'),
        __metadata("design:type", ElementRef)
    ], SelectComponent.prototype, "select", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "mode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "placeholder", void 0);
    __decorate([
        HostBinding('attr.tabindex'),
        Input(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SelectComponent.prototype, "expanded", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SelectComponent.prototype, "zIndex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SelectComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SelectComponent.prototype, "listenKeys", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SelectComponent.prototype, "maxSelectableItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "expandedIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "collapsedIcon", void 0);
    __decorate([
        Output('change'),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "change", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SelectComponent.prototype, "dropDirection", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "value", void 0);
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SelectComponent.prototype, "keydown", null);
    __decorate([
        HostListener('focus', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], SelectComponent.prototype, "onFocus", null);
    __decorate([
        HostListener('blur', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SelectComponent.prototype, "onBlur", null);
    SelectComponent = SelectComponent_1 = __decorate([
        Component({
            selector: 'vcl-select',
            template: "<div (offClick)=\"close()\">\r\n  <div\r\n    #select\r\n    class=\"vclLayoutHorizontal vclSelect vclInputGroupEmb\"\r\n    [style.marginBottom]=\"0\"\r\n    >\r\n    <div *ngIf=\"showDisplayValue\" class=\"vclInput\" readonly [class.vclSelected]=\"focused\" (click)=\"toggle()\">\r\n      {{displayValue}}\r\n    </div>\r\n    <div *ngIf=\"!showDisplayValue\" class=\"vclInput vclTokenInput vclLayoutHorizontal vclLayoutWrap\" readonly [class.vclSelected]=\"focused\" (click)=\"toggle()\">\r\n      <vcl-token-list [disabled]=\"disabled\">\r\n        <vcl-token *ngFor=\"let item of selectedItems\" [label]=\"item.label\" [removable]=\"true\" (remove)=\"deselectItem(item.metaItem)\"></vcl-token>\r\n      </vcl-token-list>\r\n    </div>\r\n\r\n    <button vcl-button\r\n      [disabled]=\"disabled\"\r\n      type=\"button\"\r\n      tabindex=\"-1\"\r\n      class=\"vclTransparent vclAppended\"\r\n      [icon]=\"expanded ? expandedIcon : collapsedIcon\"\r\n      (click)=\"toggle()\">\r\n    </button>\r\n  </div>\r\n\r\n  <vcl-dropdown \r\n      #dropdown\r\n      tabindex=\"-1\"\r\n      [disabled]=\"disabled\"\r\n      [expanded]=\"expanded\"\r\n      [value]=\"value\"\r\n      [mode]=\"mode\"\r\n      [maxSelectableItems]=\"maxSelectableItems\"\r\n      [style.position]=\"'relative'\"\r\n      [style.top.px]=\"dropdownTop\"\r\n      [style.width]=\"'100%'\"\r\n      [style.position]=\"'absolute'\"\r\n      [style.zIndex]=\"zIndex\"\r\n      (change)=\"onDropdownChange($event)\"\r\n      (itemsChange)=\"onItemsChange()\"\r\n  >\r\n    <vcl-dropdown-option\r\n      *ngFor=\"let item of items\" \r\n      [metadata]=\"item\" \r\n      [value]=\"item.value\" \r\n      [disabled]=\"disabled || item.disabled\" \r\n      [label]=\"item.label\" \r\n      [sublabel]=\"item.sublabel\"\r\n      [prepIcon]=\"item.prepIcon\"\r\n      [appIcon]=\"item.appIcon\"\r\n      [appIconSrc]=\"item.appIconSrc\"\r\n      [prepIconSrc]=\"item.prepIconSrc\"\r\n      >\r\n    </vcl-dropdown-option>\r\n  </vcl-dropdown>\r\n</div>\r\n",
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '[style.position]': '"relative"',
                '[style.display]': '"block"'
            }
        }),
        __metadata("design:paramtypes", [ElementRef,
            ChangeDetectorRef])
    ], SelectComponent);
    return SelectComponent;
    var SelectComponent_1;
}());
export { SelectComponent };
