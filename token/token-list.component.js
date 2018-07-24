var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ContentChildren, QueryList, forwardRef, ChangeDetectorRef } from '@angular/core';
import { merge } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TokenComponent } from './token.component';
import { map, startWith } from 'rxjs/operators';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TokenListComponent; }),
    multi: true
};
var TokenListComponent = /** @class */ (function () {
    function TokenListComponent(cdRef) {
        this.cdRef = cdRef;
        this.selectable = false;
        this.dispatchEvent = false;
        this.disabled = false;
        this.tokensChange = new EventEmitter();
        this.labels = [];
    }
    TokenListComponent.prototype.syncTokens = function () {
        var labels = this.labels;
        if (Array.isArray(labels)) {
            this.tokens && this.tokens.forEach(function (token) {
                token.selected = labels.includes(token.label);
            });
        }
    };
    TokenListComponent.prototype.syncSelectedValues = function () {
        this.labels = this.tokens ? this.tokens.filter(function (t) { return t.selected; }).map(function (t) { return t.label; }) : [];
    };
    TokenListComponent.prototype.triggerChange = function () {
        this.tokensChange.emit(this.labels);
        !!this.onChangeCallback && this.onChangeCallback(this.labels);
    };
    TokenListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.disabled) {
            this.setDisabledState(changes.disabled.currentValue);
        }
    };
    TokenListComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Update the selectedIndex to match the selected buttons when not using ngModel
        if (!this.onChangeCallback) {
            this.syncSelectedValues();
            this.triggerChange();
        }
        // Subscribes to buttons press event
        var listenButtonPress = function () {
            if (!_this.tokens) {
                return;
            }
            _this.dispose();
            _this.cdRef.markForCheck();
            var select$ = merge.apply(void 0, (_this.tokens.map(function (token) { return token.select.pipe(map(function () { return token; })); })));
            _this.tokenSubscription = select$.subscribe(function (token) {
                if (_this.selectable) {
                    token.selected = !token.selected;
                }
                _this.syncSelectedValues();
                _this.triggerChange();
            });
        };
        this.tokens && this.tokens.changes.pipe(startWith(null)).subscribe(function () {
            listenButtonPress();
            setTimeout(function () {
                _this.syncSelectedValues();
                _this.setDisabledState(_this.disabled);
            });
        });
    };
    TokenListComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    TokenListComponent.prototype.dispose = function () {
        this.tokenSubscription && this.tokenSubscription.unsubscribe();
    };
    TokenListComponent.prototype.writeValue = function (value) {
        this.labels = value;
        this.syncTokens();
        this.cdRef.markForCheck();
    };
    TokenListComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TokenListComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    TokenListComponent.prototype.setDisabledState = function (isDisabled) {
        this.tokens && this.tokens.forEach(function (t) { return t.setDisabledState(isDisabled); });
    };
    __decorate([
        ContentChildren(TokenComponent),
        __metadata("design:type", QueryList)
    ], TokenListComponent.prototype, "tokens", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TokenListComponent.prototype, "selectable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TokenListComponent.prototype, "dispatchEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TokenListComponent.prototype, "disabled", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TokenListComponent.prototype, "tokensChange", void 0);
    TokenListComponent = __decorate([
        Component({
            selector: 'vcl-token-list',
            template: '<ng-content></ng-content>',
            host: {
                '[class.vclTokenList]': 'true',
                '[class.vclTokenContainer]': 'true'
            },
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], TokenListComponent);
    return TokenListComponent;
}());
export { TokenListComponent };
