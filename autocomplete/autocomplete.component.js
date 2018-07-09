var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Component, Directive, ViewChild, Input, TemplateRef, ContentChildren, QueryList, forwardRef, EventEmitter, Output } from '@angular/core';
import { PopoverComponent } from '../popover/index';
import { ObservableComponent } from '../core/index';
var Autocomplete = /** @class */ (function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        _this.select = new EventEmitter();
        _this.target$ = new BehaviorSubject(undefined);
        _this.items$ = new BehaviorSubject([]);
        _this.content$ = new BehaviorSubject([]);
        _this.itemsVisible$ = combineLatest(_this.target$, _this.items$, (function (target, items) {
            return !!target && items.length > 0;
        }));
        _this.visible$ = combineLatest(_this.target$, _this.items$, _this.content$, (function (target, items, content) {
            return !!target && (items.length > 0 || content.length > 0);
        }));
        _this.popoverWidth$ = _this.target$.pipe(map(function (target) {
            if (target && target.element.nativeElement.offsetWidth) {
                return target.element.nativeElement.offsetWidth + 'px';
            }
            else {
                return undefined;
            }
        }));
        _this.highlightedItem = -1;
        return _this;
    }
    Autocomplete.prototype.open = function (targetElement) {
        var _this = this;
        this.highlightedItem = -1;
        this.target$.next({
            element: targetElement,
            select: function (ac) {
                this.select.emit(ac);
            }
        });
        return new Observable(function (observer) {
            var sub = _this.select.subscribe(observer);
            return function () {
                sub.unsubscribe();
                _this.target$.next(undefined);
            };
        });
    };
    Object.defineProperty(Autocomplete.prototype, "visible", {
        get: function () {
            return !!this.target$.value;
        },
        enumerable: true,
        configurable: true
    });
    Autocomplete.prototype.close = function () {
        this.target$.next(undefined);
    };
    Autocomplete.prototype.highlightPrev = function () {
        var _this = this;
        if (this.items) {
            if (this.highlightedItem < 0) {
                this.highlightedItem = this.items.toArray().findIndex(function (item) { return item.type === 'item'; });
            }
            else {
                var revIdx = this.items.toArray().reverse().findIndex(function (item, thisRevId, items) {
                    var thisIdx = (items.length - 1) - thisRevId;
                    return item.type === 'item' && thisIdx < _this.highlightedItem;
                });
                if (revIdx === -1) {
                    this.highlightedItem = this.items.toArray().findIndex(function (item) { return item.type === 'item'; });
                }
                else {
                    var idx = (this.items.length - 1) - revIdx;
                    this.highlightedItem = idx;
                }
            }
        }
    };
    Object.defineProperty(Autocomplete.prototype, "isHighlighted", {
        get: function () {
            return this.highlightedItem >= 0;
        },
        enumerable: true,
        configurable: true
    });
    Autocomplete.prototype.highlightNext = function () {
        var _this = this;
        if (this.items) {
            var idx = this.items.toArray().findIndex(function (item, thisIdx) { return item.type === 'item' && thisIdx > _this.highlightedItem; });
            if (idx > -1) {
                this.highlightedItem = idx;
            }
        }
    };
    Autocomplete.prototype.selectHighlighted = function () {
        if (this.highlightedItem >= 0 && this.target$.value && this.items && this.items.toArray()[this.highlightedItem]) {
            var item = this.items.toArray()[this.highlightedItem];
            this.target$.value.select(item);
            return true;
        }
        return false;
    };
    Autocomplete.prototype.ngAfterContentInit = function () {
        var _this = this;
        var items = this.items;
        var content = this.content;
        this.itemsSub = items && items.changes.pipe(startWith(items.toArray()), map(function () { return items.toArray(); })).subscribe(function (items) {
            _this.items$.next(items);
            _this.highlightedItem = -1;
        });
        this.contentSub = content && content.changes.pipe(startWith(content.toArray()), map(function () { return content.toArray(); })).subscribe(this.content$);
    };
    Autocomplete.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.itemsSub && this.itemsSub.unsubscribe();
        this.contentSub && this.contentSub.unsubscribe();
    };
    __decorate([
        ViewChild('popover'),
        __metadata("design:type", PopoverComponent)
    ], Autocomplete.prototype, "popover", void 0);
    __decorate([
        ContentChildren(forwardRef(function () { return AutocompleteOption; })),
        __metadata("design:type", QueryList)
    ], Autocomplete.prototype, "items", void 0);
    __decorate([
        ContentChildren(forwardRef(function () { return AutocompleteContent; })),
        __metadata("design:type", QueryList)
    ], Autocomplete.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], Autocomplete.prototype, "disabled", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], Autocomplete.prototype, "select", void 0);
    Autocomplete = __decorate([
        Component({
            selector: 'vcl-autocomplete',
            exportAs: 'vclAutocomplete',
            template: "<ng-container *ngIf=\"(target$ | async) as target\">\n  <vcl-popover #popover \n               *ngIf=\"visible$ | async\"\n               [target]=\"target.element\" \n               [visible]=\"true\" \n               targetX=\"left\" \n               targetY=\"bottom\" \n               attachmentX=\"left\" \n               attachmentY=\"top\" \n               [style.width]=\"popoverWidth$ | async\"\n               (mousedown)=\"$event.preventDefault()\"\n               >\n  \n    <ng-container *ngIf=\"(items$ | async)?.length > 0\">\n      <ul class=\"vclDropdown vclNoBorder vclOpen\" role=\"menu\">\n        <ng-container *ngFor=\"let item of items$ | async; let idx = index\">\n          <li *ngIf=\"item.type==='item'\" \n            class=\"vclDropdownItem\"\n            [class.vclHighlighted]=\"idx === highlightedItem\"\n            [class.vclDisabled]=\"disabled || item.disabled\"\n            role=\"menuitem\"\n            (click)=\"target.select(item)\">\n            <div role=\"menuitem\" class=\"vclDropdownItemLabel\">{{item.label}}</div>\n            <div *ngIf=\"item.sublabel\" class=\"vclDropdownItemSubLabel\">{{item.sublabel}}</div>\n          </li>\n          <li *ngIf=\"item.type==='separator'\" role=\"menuitem\">\n            <div class=\"vclSeparator\" role=\"separator\"></div>\n          </li>\n          <li *ngIf=\"item.type==='header'\" class=\"vclDropdownItemGroupHeader\" role=\"menuitem\">\n            <div class=\"vclDropdownItemGroupHeaderLabel\">{{item.label}}</div>\n          </li>\n        </ng-container>\n      </ul>\n    </ng-container>\n    <ng-container *ngFor=\"let c of content$ | async\">\n      <ng-container *ngTemplateOutlet=\"c.templateRef\"></ng-container>\n    </ng-container>\n  </vcl-popover>\n</ng-container>\n",
            styles: ["\n    .vclDropdown {\n      padding: 0;\n      position: static;\n    }\n    .vclPopOver {\n      padding: 0;\n    }\n  "]
        })
    ], Autocomplete);
    return Autocomplete;
}(ObservableComponent));
export { Autocomplete };
var AutocompleteOption = /** @class */ (function () {
    function AutocompleteOption() {
        this.type = 'item';
        this.disabled = false;
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AutocompleteOption.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AutocompleteOption.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AutocompleteOption.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AutocompleteOption.prototype, "sublabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AutocompleteOption.prototype, "disabled", void 0);
    AutocompleteOption = __decorate([
        Directive({
            selector: 'vcl-autocomplete-option'
        })
    ], AutocompleteOption);
    return AutocompleteOption;
}());
export { AutocompleteOption };
var AutocompleteContent = /** @class */ (function () {
    function AutocompleteContent() {
    }
    __decorate([
        ViewChild(TemplateRef),
        __metadata("design:type", TemplateRef)
    ], AutocompleteContent.prototype, "templateRef", void 0);
    AutocompleteContent = __decorate([
        Component({
            selector: 'vcl-autocomplete-content',
            template: '<ng-template><ng-content></ng-content></ng-template>'
        })
    ], AutocompleteContent);
    return AutocompleteContent;
}());
export { AutocompleteContent };
