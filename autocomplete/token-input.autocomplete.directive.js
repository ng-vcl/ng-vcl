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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, ElementRef, Input, HostListener, SkipSelf, HostBinding, Optional, EventEmitter, Output } from '@angular/core';
import { Autocomplete } from './autocomplete.component';
import { ObservableComponent } from '../core/index';
import { TokenInputContainerComponent } from '../token/index';
var TokenInputAutocompleteDirective = /** @class */ (function (_super) {
    __extends(TokenInputAutocompleteDirective, _super);
    function TokenInputAutocompleteDirective(elementRef, tokenInputContainer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.tokenInputContainer = tokenInputContainer;
        _this.autocompleteSelect = new EventEmitter();
        _this.disabled = false;
        _this.focused = false;
        _this.wasEmpty = true;
        if (!tokenInputContainer) {
            throw 'vcl-token-input ,must be used within a vcl-token-input-container';
        }
        return _this;
    }
    Object.defineProperty(TokenInputAutocompleteDirective.prototype, "isDisabled", {
        get: function () {
            return this.disabled || this.tokenInputContainer.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenInputAutocompleteDirective.prototype, "classDisabled", {
        get: function () {
            return this.isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenInputAutocompleteDirective.prototype, "attrDisabled", {
        get: function () {
            return this.disabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenInputAutocompleteDirective.prototype, "ac", {
        get: function () {
            if (!(this._ac instanceof Autocomplete)) {
                throw 'invalid vcl-token-input-autocomplete parameter';
            }
            return this._ac;
        },
        enumerable: true,
        configurable: true
    });
    TokenInputAutocompleteDirective.prototype.listenActivate = function () {
        this.focused = true;
        this.renderAutocomplete();
    };
    TokenInputAutocompleteDirective.prototype.onBlur = function () {
        this.focused = false;
        this.destroyAutocomplete();
    };
    TokenInputAutocompleteDirective.prototype.renderAutocomplete = function () {
        var _this = this;
        if (this.acSub) {
            return;
        }
        this.acSub = this.ac.open(this.tokenInputContainer.elementRef).subscribe(function (selection) {
            _this.tokenInputContainer.addToken(selection.label || String(selection.value), selection.value);
            _this.elementRef.nativeElement.value = '';
            if (!_this.focused) {
                _this.destroyAutocomplete();
            }
            _this.autocompleteSelect.emit(selection);
        });
    };
    TokenInputAutocompleteDirective.prototype.destroyAutocomplete = function () {
        if (this.acSub) {
            this.acSub.unsubscribe();
            this.acSub = undefined;
        }
    };
    TokenInputAutocompleteDirective.prototype.onKeyPress = function (event) {
        var code = event.code || event.key;
        if (code === 'Tab') {
            this.destroyAutocomplete();
        }
    };
    TokenInputAutocompleteDirective.prototype.onKeyDown = function (event) {
        var value = event.target.value;
        this.wasEmpty = value === '';
    };
    TokenInputAutocompleteDirective.prototype.onKeyUp = function (event) {
        var code = event && (event.code || event.key); // fallback for ie11
        var value = event.target.value;
        if (code === 'Escape') {
            this.destroyAutocomplete();
        }
        else if (code === 'ArrowUp') {
            this.ac && this.ac.highlightPrev();
            event.preventDefault();
            return false;
        }
        else if (code === 'ArrowDown') {
            if (!this.acSub) {
                this.renderAutocomplete();
            }
            else {
                this.ac && this.ac.highlightNext();
            }
            event.preventDefault();
            return false;
        }
        else if (code == 'Backspace' && this.lastKey == 'Backspace' && value === '' && this.wasEmpty) {
            // remove last token
            this.tokenInputContainer.removeLastToken();
        }
        else if (code === 'Enter') {
            event.preventDefault();
            if (this.ac.isHighlighted) {
                this.ac && this.ac.selectHighlighted();
                this.elementRef.nativeElement.value = '';
            }
        }
        else if (code) {
            this.lastKey = code;
        }
    };
    TokenInputAutocompleteDirective.prototype.ngOnDestroy = function () {
        this.destroyAutocomplete();
        _super.prototype.ngOnDestroy.call(this);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TokenInputAutocompleteDirective.prototype, "autocompleteSelect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TokenInputAutocompleteDirective.prototype, "disabled", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TokenInputAutocompleteDirective.prototype, "classDisabled", null);
    __decorate([
        HostBinding('attr.disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TokenInputAutocompleteDirective.prototype, "attrDisabled", null);
    __decorate([
        Input('vcl-token-input-autocomplete'),
        __metadata("design:type", Autocomplete)
    ], TokenInputAutocompleteDirective.prototype, "_ac", void 0);
    __decorate([
        HostListener('input'),
        HostListener('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TokenInputAutocompleteDirective.prototype, "listenActivate", null);
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TokenInputAutocompleteDirective.prototype, "onBlur", null);
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TokenInputAutocompleteDirective.prototype, "onKeyPress", null);
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TokenInputAutocompleteDirective.prototype, "onKeyDown", null);
    __decorate([
        HostListener('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TokenInputAutocompleteDirective.prototype, "onKeyUp", null);
    TokenInputAutocompleteDirective = __decorate([
        Directive({
            selector: 'input[vcl-token-input-autocomplete]',
            host: {
                '[class.vclInput]': 'true',
                '[attr.flex]': 'true'
            }
        }),
        __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            TokenInputContainerComponent])
    ], TokenInputAutocompleteDirective);
    return TokenInputAutocompleteDirective;
}(ObservableComponent));
export { TokenInputAutocompleteDirective };
