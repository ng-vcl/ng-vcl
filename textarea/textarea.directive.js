var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, HostBinding, HostListener } from '@angular/core';
var TextareaDirective = /** @class */ (function () {
    function TextareaDirective(elRef) {
        this.elRef = elRef;
        this.selectAllOnFocus = false;
        this.autogrow = false;
    }
    TextareaDirective.prototype.onChange = function () {
        var value = this.elRef && this.elRef.nativeElement.value;
        this.setRows(value);
    };
    TextareaDirective.prototype.ngOnChanges = function (changes) {
        if ('value' in changes) {
            this.setRows(changes.value.currentValue);
        }
    };
    TextareaDirective.prototype.ngDoCheck = function () {
        var value = this.elRef && this.elRef.nativeElement.value;
        this.setRows(value);
    };
    TextareaDirective.prototype.ngAfterViewInit = function () {
        var value = this.elRef && this.elRef.nativeElement.value;
        this.setRows(value);
    };
    TextareaDirective.prototype.onFocus = function (value) {
        if (this.selectAllOnFocus && this.elRef) {
            this.elRef.nativeElement.select();
        }
    };
    TextareaDirective.prototype.setRows = function (value) {
        if (this.autogrow && typeof value === 'string') {
            var rows = value.split('\n').length + 1;
            if (typeof this.minRows === 'number' && rows < this.minRows) {
                this.rows = this.minRows;
            }
            else if (typeof this.maxRows === 'number' && rows > this.maxRows) {
                this.rows = this.maxRows;
            }
            else {
                this.rows = rows;
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TextareaDirective.prototype, "selectAllOnFocus", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TextareaDirective.prototype, "autogrow", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TextareaDirective.prototype, "maxRows", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TextareaDirective.prototype, "minRows", void 0);
    __decorate([
        HostBinding('attr.rows'),
        Input(),
        __metadata("design:type", Number)
    ], TextareaDirective.prototype, "rows", void 0);
    __decorate([
        HostListener('propertychange'),
        HostListener('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TextareaDirective.prototype, "onChange", null);
    __decorate([
        HostListener('focus', ['$event.target.value']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TextareaDirective.prototype, "onFocus", null);
    TextareaDirective = __decorate([
        Directive({
            selector: 'textarea[vcl-textarea]',
            host: {
                '[class.vclInput]': 'true',
            }
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], TextareaDirective);
    return TextareaDirective;
}());
export { TextareaDirective };
