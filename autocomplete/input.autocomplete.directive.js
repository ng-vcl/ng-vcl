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
import { Directive, ElementRef, Input, HostListener, Output, EventEmitter, HostBinding } from '@angular/core';
import { Autocomplete } from './autocomplete.component';
import { ObservableComponent } from '../core/index';
var InputAutocompleteDirective = /** @class */ (function (_super) {
    __extends(InputAutocompleteDirective, _super);
    function InputAutocompleteDirective(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.autocompleteSelect = new EventEmitter();
        _this.autocompleteAfterSelectAction = 'value';
        _this.disabled = false;
        return _this;
    }
    Object.defineProperty(InputAutocompleteDirective.prototype, "ac", {
        get: function () {
            if (!(this._ac instanceof Autocomplete)) {
                throw 'invalid vcl-input-autocomplete parameter';
            }
            return this._ac;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputAutocompleteDirective.prototype, "attrDisabled", {
        get: function () {
            return this.disabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    InputAutocompleteDirective.prototype.onFocusOrInput = function () {
        this.renderAutocomplete();
    };
    InputAutocompleteDirective.prototype.onBlur = function () {
        if (this.acSub) {
            this.acSub.unsubscribe();
            this.acSub = undefined;
        }
    };
    InputAutocompleteDirective.prototype.renderAutocomplete = function () {
        var _this = this;
        if (this.acSub) {
            return;
        }
        this.acSub = this.ac.open(this.elementRef).subscribe(function (selection) {
            if (_this.autocompleteAfterSelectAction === 'value') {
                _this.elementRef.nativeElement.value = String(selection.value);
            }
            else if (_this.autocompleteAfterSelectAction === 'label') {
                _this.elementRef.nativeElement.value = selection.label;
            }
            else if (_this.autocompleteAfterSelectAction === 'sublabel') {
                _this.elementRef.nativeElement.value = selection.sublabel;
            }
            else if (typeof _this.autocompleteAfterSelectAction === 'function') {
                _this.elementRef.nativeElement.value = _this.autocompleteAfterSelectAction(selection);
            }
            else {
                _this.elementRef.nativeElement.value = '';
            }
            _this.elementRef.nativeElement.focus();
            _this.destroyAutocomplete();
            _this.autocompleteSelect.emit(selection);
        });
    };
    InputAutocompleteDirective.prototype.destroyAutocomplete = function () {
        if (this.acSub) {
            this.acSub.unsubscribe();
            this.acSub = undefined;
        }
    };
    InputAutocompleteDirective.prototype.onKeyUp = function (event) {
        var code = event.code || event.key;
        if (code === 'Escape') {
            this.destroyAutocomplete();
        }
        else if (code === 'ArrowUp') {
            this.ac && this.ac.highlightPrev();
            event.preventDefault();
            return false;
        }
        else if (event.code === 'ArrowDown') {
            if (!this.acSub) {
                this.renderAutocomplete();
            }
            else {
                this.ac && this.ac.highlightNext();
            }
            event.preventDefault();
            return false;
        }
    };
    InputAutocompleteDirective.prototype.handleKeyPressEvent = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var code;
            return __generator(this, function (_a) {
                code = event.code || event.key;
                if (this.ac && code === 'Enter') {
                    event.preventDefault();
                    if (this.ac.isHighlighted) {
                        this.ac.selectHighlighted();
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    InputAutocompleteDirective.prototype.ngOnDestroy = function () {
        this.destroyAutocomplete();
        _super.prototype.ngOnDestroy.call(this);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], InputAutocompleteDirective.prototype, "autocompleteSelect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], InputAutocompleteDirective.prototype, "autocompleteAfterSelectAction", void 0);
    __decorate([
        Input('vcl-input-autocomplete'),
        __metadata("design:type", Autocomplete)
    ], InputAutocompleteDirective.prototype, "_ac", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata("design:type", Boolean)
    ], InputAutocompleteDirective.prototype, "disabled", void 0);
    __decorate([
        HostBinding('attr.disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], InputAutocompleteDirective.prototype, "attrDisabled", null);
    __decorate([
        HostListener('focus'),
        HostListener('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputAutocompleteDirective.prototype, "onFocusOrInput", null);
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputAutocompleteDirective.prototype, "onBlur", null);
    __decorate([
        HostListener('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputAutocompleteDirective.prototype, "onKeyUp", null);
    __decorate([
        HostListener('keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", Promise)
    ], InputAutocompleteDirective.prototype, "handleKeyPressEvent", null);
    InputAutocompleteDirective = __decorate([
        Directive({
            selector: 'input[vcl-input-autocomplete]',
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], InputAutocompleteDirective);
    return InputAutocompleteDirective;
}(ObservableComponent));
export { InputAutocompleteDirective };
