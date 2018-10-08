var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
import { Component, Input, Output, forwardRef, EventEmitter, HostListener, ElementRef, ChangeDetectorRef, HostBinding, Directive, ContentChild, TemplateRef, SkipSelf, Self, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputDirective } from '../input/index';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TokenInputContainerComponent; }),
    multi: true
};
var TokenInputLabelPre = /** @class */ (function () {
    function TokenInputLabelPre() {
    }
    TokenInputLabelPre = __decorate([
        Directive({ selector: '[vcl-token-input-pre]' })
    ], TokenInputLabelPre);
    return TokenInputLabelPre;
}());
export { TokenInputLabelPre };
var TokenInputLabelPost = /** @class */ (function () {
    function TokenInputLabelPost() {
    }
    TokenInputLabelPost = __decorate([
        Directive({ selector: '[vcl-token-input-post]' })
    ], TokenInputLabelPost);
    return TokenInputLabelPost;
}());
export { TokenInputLabelPost };
var TokenInputContainerComponent = /** @class */ (function () {
    function TokenInputContainerComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.tokens = [];
        this.selectable = false;
        this.allowDuplicates = false;
        this.preselect = false;
        this.removeIcon = 'fa:remove';
        this.removeToken = true;
        this.tabindex = 0;
        this.controlAsString = false;
        this.disabled = false;
        this.tokensChange = new EventEmitter();
        this.remove = new EventEmitter();
        // Emits on enter key with no input
        this.confirm = new EventEmitter();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    TokenInputContainerComponent.prototype.removeLastToken = function () {
        this.tokens = this.tokens.slice();
        this.tokens.pop();
        this.triggerChange();
        this.cdRef.markForCheck();
    };
    TokenInputContainerComponent.prototype.addToken = function (token) {
        token = typeof token === 'string' ? { label: token } : token;
        var newToken = __assign({}, token, { selected: token.selected === undefined ? this.preselect : token.selected, value: token.value === undefined ? token.label : token.value });
        if (this.allowDuplicates === false && this.tokens.some(function (thisToken) { return thisToken.value === newToken.value; })) {
            return;
        }
        this.tokens = this.tokens.concat([newToken]);
        this.triggerChange();
        this.cdRef.markForCheck();
    };
    TokenInputContainerComponent.prototype.select = function (token) {
        if (this.selectable) {
            token.selected = !token.selected;
            this.triggerChange();
        }
    };
    TokenInputContainerComponent.prototype.onTokenRemove = function (token) {
        this.remove.emit(token);
        if (this.removeToken) {
            this.tokens = this.tokens.filter(function (t) { return t !== token; });
            this.triggerChange();
        }
    };
    TokenInputContainerComponent.prototype.triggerChange = function () {
        this.tokensChange.emit(this.tokens);
        if (this.controlAsString) {
            this.onChange(this.tokens.map(function (t) { return t.label; }));
        }
        else {
            this.onChange(this.tokens);
        }
    };
    TokenInputContainerComponent.prototype.writeValue = function (tokens) {
        var _this = this;
        if (Array.isArray(tokens)) {
            this.tokens = tokens.map(function (t) { return typeof t === 'string' ? { label: t, selected: _this.preselect } : t; })
                .filter(function (t) { return typeof t === 'object' && t; });
        }
        else {
            this.tokens = [];
        }
        this.cdRef.markForCheck();
    };
    TokenInputContainerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TokenInputContainerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TokenInputContainerComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TokenInputContainerComponent.prototype, "selectable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TokenInputContainerComponent.prototype, "allowDuplicates", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TokenInputContainerComponent.prototype, "preselect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TokenInputContainerComponent.prototype, "removeIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TokenInputContainerComponent.prototype, "removeToken", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TokenInputContainerComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TokenInputContainerComponent.prototype, "tokenClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TokenInputContainerComponent.prototype, "controlAsString", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata("design:type", Object)
    ], TokenInputContainerComponent.prototype, "disabled", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TokenInputContainerComponent.prototype, "tokensChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TokenInputContainerComponent.prototype, "remove", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TokenInputContainerComponent.prototype, "confirm", void 0);
    __decorate([
        ContentChild(TokenInputLabelPre, { read: TemplateRef }),
        __metadata("design:type", TokenInputLabelPre)
    ], TokenInputContainerComponent.prototype, "labelPre", void 0);
    __decorate([
        ContentChild(TokenInputLabelPost, { read: TemplateRef }),
        __metadata("design:type", TokenInputLabelPost)
    ], TokenInputContainerComponent.prototype, "labelPost", void 0);
    TokenInputContainerComponent = __decorate([
        Component({
            selector: 'vcl-token-input-container',
            template: "<div class=\"vclTokenContainer\">\r\n  <wormhole *ngIf=\"labelPre\" [connect]=\"labelPre\"></wormhole>\r\n  <vcl-token *ngFor=\"let token of tokens\"\r\n             (remove)=\"onTokenRemove(token)\"\r\n             (click)=\"select(token)\"\r\n             [tokenIcon]=\"token.tokenIcon\"\r\n             [disabled]=\"disabled\"\r\n             [ngClass]=\"tokenClass\"\r\n             [selected]=\"token.selected\"\r\n             [removable]=\"true\"\r\n             [icon]=\"removeIcon\"\r\n             [attr.tabindex]=\"-1\"\r\n             [label]=\"token.label\">\r\n  </vcl-token>\r\n  <wormhole *ngIf=\"labelPost\" [connect]=\"labelPost\"></wormhole>\r\n</div>\r\n<ng-content></ng-content>\r\n",
            host: {
                '[class.vclInput]': 'true',
                '[class.vclTokenInput]': 'true',
                '[class.vclLayoutHorizontal]': 'true',
                '[class.vclLayoutWrap]': 'true',
                '[attr.tabindex]': '-1',
            },
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
    ], TokenInputContainerComponent);
    return TokenInputContainerComponent;
}());
export { TokenInputContainerComponent };
var TokenInputDirective = /** @class */ (function () {
    function TokenInputDirective(elementRef, input, tokenInputContainer) {
        this.elementRef = elementRef;
        this.input = input;
        this.tokenInputContainer = tokenInputContainer;
        this.addTokenOnEnter = true;
        if (!tokenInputContainer) {
            throw 'vcl-token-input ,must be used within a vcl-token-input-container';
        }
    }
    Object.defineProperty(TokenInputDirective.prototype, "isDisabled", {
        get: function () {
            return this.input.disabled || this.tokenInputContainer.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenInputDirective.prototype, "classDisabled", {
        get: function () {
            return this.isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenInputDirective.prototype, "attrDisabled", {
        get: function () {
            return this.isDisabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    TokenInputDirective.prototype.onKeydown = function (ev) {
        var value = ev.target.value;
        var code = ev && (ev.code || ev.key); // fallback for ie11
        if (code == 'Backspace' && this.lastKey == 'Backspace' && value === '') {
            // remove last token
            this.tokenInputContainer.removeLastToken();
        }
        else if (code == 'Enter') {
            ev.preventDefault();
        }
        else if (code) {
            this.lastKey = code;
        }
    };
    TokenInputDirective.prototype.onKeyPressEnter = function (ev) {
        var value = ev.target.value;
        if (value === '') {
            this.tokenInputContainer.confirm.emit();
        }
        else if (this.addTokenOnEnter) {
            this.tokenInputContainer.addToken(value);
            this.elementRef.nativeElement.value = '';
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TokenInputDirective.prototype, "addTokenOnEnter", void 0);
    __decorate([
        HostBinding('class.vclDisabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TokenInputDirective.prototype, "classDisabled", null);
    __decorate([
        HostBinding('attr.disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TokenInputDirective.prototype, "attrDisabled", null);
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TokenInputDirective.prototype, "onKeydown", null);
    __decorate([
        HostListener('keyup.enter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TokenInputDirective.prototype, "onKeyPressEnter", null);
    TokenInputDirective = __decorate([
        Directive({
            selector: 'input[vcl-token-input]'
        }),
        __param(1, Self()),
        __param(2, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            InputDirective,
            TokenInputContainerComponent])
    ], TokenInputDirective);
    return TokenInputDirective;
}());
export { TokenInputDirective };
