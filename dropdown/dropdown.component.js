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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, forwardRef, Inject, InjectionToken, Input, Optional, Output, QueryList, ViewChild, } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownOption } from './dropdown-option.component';
import { MetalistComponent } from '../metalist/index';
export var DropdownState;
(function (DropdownState) {
    DropdownState[DropdownState["Expanded"] = 0] = "Expanded";
    DropdownState[DropdownState["Closed"] = 1] = "Closed";
    DropdownState[DropdownState["Expanding"] = 2] = "Expanding";
    DropdownState[DropdownState["Closing"] = 3] = "Closing";
})(DropdownState || (DropdownState = {}));
export var DROPDOWN_ANIMATIONS = new InjectionToken('@ng-vcl/ng-vcl#dropdown_animations');
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DropdownComponent; }),
    multi: true
};
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(elementRef, cdRef, builder, animations) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.builder = builder;
        this.animations = animations;
        this.tabindex = 0;
        this.state = DropdownState.Expanded;
        this.willClose = new EventEmitter();
        this.willExpand = new EventEmitter();
        // If `single`, a single item can be selected
        // If `multiple` multiple items can be selected
        this.mode = 'single';
        this.disabled = false;
        this.listenKeys = true;
        this.change = new EventEmitter();
        this.itemsChange = new EventEmitter();
        this.focused = false;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
        this.DropdownState = DropdownState;
    }
    Object.defineProperty(DropdownComponent.prototype, "expanded", {
        get: function () {
            return (this.state === DropdownState.Expanding || this.state === DropdownState.Expanded);
        },
        set: function (value) {
            if (value) {
                this.expand();
            }
            else {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    DropdownComponent.prototype.ngOnInit = function () {
        this.scroll('selected');
    };
    DropdownComponent.prototype.expand = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var player_1;
            return __generator(this, function (_a) {
                if (this.state === DropdownState.Expanded || this.state === DropdownState.Expanding) {
                    return [2 /*return*/];
                }
                this.state = DropdownState.Expanding;
                this.willExpand.emit();
                if (this.enterAnimationFactory && this.elementRef) {
                    player_1 = this.enterAnimationFactory.create(this.elementRef.nativeElement);
                    player_1.onDone(function () {
                        player_1.destroy();
                        _this.state = DropdownState.Expanded;
                        _this.cdRef.markForCheck();
                    });
                    player_1.play();
                }
                else {
                    this.state = DropdownState.Expanded;
                    this.cdRef.markForCheck();
                }
                return [2 /*return*/];
            });
        });
    };
    DropdownComponent.prototype.close = function () {
        var _this = this;
        if (this.state === DropdownState.Closed || this.state === DropdownState.Closing) {
            return;
        }
        this.state = DropdownState.Closing;
        this.willClose.emit();
        if (this.leaveAnimationFactory && this.elementRef) {
            var player_2 = this.leaveAnimationFactory.create(this.elementRef.nativeElement);
            player_2.onDone(function () {
                player_2.destroy();
                _this.state = DropdownState.Closed;
                _this.cdRef.markForCheck();
            });
            player_2.play();
        }
        else {
            this.state = DropdownState.Closed;
            this.cdRef.markForCheck();
        }
    };
    DropdownComponent.prototype.scroll = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var selectedItem, allItems_1, scrollTop_1, metalistItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 0); })];
                    case 1:
                        _a.sent();
                        if (this.listbox.nativeElement) {
                            selectedItem = this.listbox.nativeElement.querySelectorAll('.vclSelected')[0];
                            if (!selectedItem) {
                                return [2 /*return*/];
                            }
                            allItems_1 = this.listbox.nativeElement.querySelectorAll('.vclDropdownItem');
                            scrollTop_1 = -this.listbox.nativeElement.clientHeight / 2 + (selectedItem.clientHeight / 2);
                            metalistItems = this.metalist.itemsArray;
                            metalistItems.some(function (item, idx) {
                                if (item[target]) {
                                    _this.listbox.nativeElement.scrollTop = scrollTop_1;
                                    return true;
                                }
                                scrollTop_1 += allItems_1[idx].clientHeight;
                                return false;
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DropdownComponent.prototype.onMetalistItemTap = function (metaItem) {
        this.metalist.select(metaItem);
        this.onTouched();
    };
    DropdownComponent.prototype.onMetalistKeydown = function (ev) {
        if (this.listenKeys) {
            var prevent = true;
            switch (ev.code) {
                case 'ArrowDown':
                    this.metalist.markNext();
                    this.scroll('marked');
                    break;
                case 'ArrowUp':
                    this.metalist.markPrev();
                    this.scroll('marked');
                    break;
                case 'Enter':
                    this.metalist.selectMarked();
                    break;
                default:
                    prevent = false;
            }
            this.onTouched();
            prevent && ev.preventDefault();
        }
    };
    DropdownComponent.prototype.ngAfterViewInit = function () {
        if (this.animations) {
            if (this.animations.enter) {
                this.enterAnimationFactory = this.builder.build(this.animations.enter);
            }
            if (this.animations.leave) {
                this.leaveAnimationFactory = this.builder.build(this.animations.leave);
            }
        }
    };
    DropdownComponent.prototype.onMetalistFocus = function () {
        this.focused = true;
    };
    DropdownComponent.prototype.onMetalistBlur = function () {
        this.focused = false;
        this.onTouched();
    };
    DropdownComponent.prototype.onMetalistChange = function (value) {
        this.change.emit(value);
        this.onChange(value);
    };
    DropdownComponent.prototype.onItemsChange = function () {
        // Nested meta items have changed. So we need need to trigger change detection
        this.cdRef.detectChanges();
        this.itemsChange.emit();
    };
    DropdownComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.metalist.setValue(value);
    };
    DropdownComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    DropdownComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    DropdownComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate([
        ViewChild('metalist'),
        __metadata("design:type", MetalistComponent)
    ], DropdownComponent.prototype, "metalist", void 0);
    __decorate([
        ViewChild('metalist', { read: ElementRef }),
        __metadata("design:type", ElementRef)
    ], DropdownComponent.prototype, "listbox", void 0);
    __decorate([
        ContentChildren(DropdownOption),
        __metadata("design:type", QueryList)
    ], DropdownComponent.prototype, "items", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DropdownComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DropdownComponent.prototype, "expanded", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "willClose", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "willExpand", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "mode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DropdownComponent.prototype, "maxSelectableItems", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "listenKeys", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "change", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "itemsChange", void 0);
    DropdownComponent = __decorate([
        Component({
            selector: 'vcl-dropdown',
            template: "<ul vcl-metalist #metalist\n  class=\"vclDropdown vclOpen\"\n  role=\"listbox\"\n  [class.vclLayoutHidden]=\"state === DropdownState.Closed\" \n  [value]=\"value\"\n  [mode]=\"mode\"\n  [maxSelectableItems]=\"maxSelectableItems\"\n  [class.vclDisabled]=\"disabled\"\n  [attr.tabindex]=\"tabindex\"\n  [attr.aria-multiselectable]=\"mode === 'multiple'\"\n  [style.position]=\"'static'\"\n  (change)=\"onMetalistChange($event)\"\n  (focus)=\"onMetalistFocus()\"\n  (blur)=\"onMetalistBlur()\"\n  (keydown)=\"onMetalistKeydown($event)\"\n  (itemsChange)=\"onItemsChange()\"\n  >\n    <li \n      *ngFor=\"let item of items\" \n      vcl-metalist-item\n      #meta=meta\n      [metadata]=\"item\"\n      [disabled]=\"disabled || item.disabled\"\n      [value]=\"item.value\"\n      role=\"option\"\n      class=\"vclDropdownItem\"\n      [class.vclSelected]=\"meta.selected\"\n      [class.vclDisabled]=\"disabled || meta.disabled\"\n      [class.vclHighlighted]=\"focused && meta.marked\"\n      [attr.aria-selected]=\"meta.selected\"\n      (click)=\"onMetalistItemTap(meta)\">\n      <div vcl-icogram *ngIf=\"item.label\" class=\"vclDropdownItemLabel\"\n         [prepIcon]=\"item.prepIcon\"\n         [appIcon]=\"item.appIcon\"\n         [appIconSrc]=\"item.appIconSrc\"\n         [prepIconSrc]=\"item.prepIconSrc\"\n      >\n        {{item.label}}\n      </div>\n      <div *ngIf=\"item.sublabel\" class=\"vclDropdownItemSubLabel\">\n        {{item.sublabel}}\n      </div>\n      <wormhole *ngIf=\"item._content\" [connect]=\"item._content\"></wormhole>\n    </li>\n</ul>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '[attr.tabindex]': '-1',
            }
        }),
        __param(3, Optional()), __param(3, Inject(DROPDOWN_ANIMATIONS)),
        __metadata("design:paramtypes", [ElementRef,
            ChangeDetectorRef,
            AnimationBuilder, Object])
    ], DropdownComponent);
    return DropdownComponent;
}());
export { DropdownComponent };
