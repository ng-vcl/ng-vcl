var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, forwardRef, ChangeDetectionStrategy, Input, Output, ViewChild, HostBinding, ElementRef, EventEmitter, HostListener, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { accept } from './accept';
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return FileInputComponent; }),
    multi: true
};
var FileInputComponent = /** @class */ (function () {
    function FileInputComponent(cdRef) {
        this.cdRef = cdRef;
        this.icon = 'fa fa-upload';
        this.accept = '*';
        this.multiple = false;
        this.files = new EventEmitter();
        this.tabindex = 0;
        this.disabled = false;
        this.invalidFiles = false;
        this.isDragging = false;
        this.isFocused = false;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(FileInputComponent.prototype, "fileInput", {
        get: function () {
            return this.input && this.input.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    FileInputComponent.prototype.onFocus = function () {
        this.isFocused = true;
    };
    FileInputComponent.prototype.onBlur = function () {
        this.isFocused = false;
        this.onTouched();
    };
    FileInputComponent.prototype.onInputChange = function () {
        if (this.fileInput && this.fileInput.files) {
            this.updateFiles(this.fileInput.files);
        }
    };
    FileInputComponent.prototype.checkFiles = function (files) {
        var _this = this;
        var hasWrongFiles = Array.from(files).some(function (file) { return !accept(file, _this.accept); });
        // TODO remove *-check after issue https://github.com/okonet/attr-accept/issues/8
        this.invalidFiles = hasWrongFiles && this.accept !== '*';
    };
    FileInputComponent.prototype.keydown = function (ev) {
        switch (ev.code) {
            case 'Enter':
            case 'Space':
                ev.preventDefault();
                if (this.disabled) {
                    return;
                }
                this.fileInput && this.fileInput.click();
                this.onTouched();
                break;
        }
    };
    FileInputComponent.prototype.onClick = function (value) {
        if (this.disabled) {
            return;
        }
        this.fileInput && this.fileInput.click();
        this.onTouched();
    };
    FileInputComponent.prototype.onDragOver = function (e) {
        this.isDragging = true;
        e.preventDefault();
        e.stopPropagation();
    };
    FileInputComponent.prototype.onDragLeave = function (e) {
        this.isDragging = false;
        e.preventDefault();
        e.stopPropagation();
    };
    FileInputComponent.prototype.onDrop = function (e) {
        // cancel event and hover styling
        e.preventDefault();
        e.stopPropagation();
        if (this.disabled)
            return;
        this.isDragging = false;
        // fetch FileList object
        var files = e.target.files || e.dataTransfer.files;
        this.updateFiles(files);
        this.onTouched();
    };
    FileInputComponent.prototype.updateFiles = function (files) {
        if (files instanceof FileList) {
            var name_1 = files[0].name;
            if (this.multiple) {
                name_1 += ' (' + files.length + ')';
            }
            this.filename = name_1;
            this.value = files;
            this.checkFiles(files);
            this.files.emit(files);
            this.onChange(files);
        }
    };
    FileInputComponent.prototype.writeValue = function (files) {
        this.value = files;
        this.cdRef.markForCheck();
    };
    FileInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    FileInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    FileInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FileInputComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FileInputComponent.prototype, "accept", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], FileInputComponent.prototype, "multiple", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FileInputComponent.prototype, "files", void 0);
    __decorate([
        Input(),
        HostBinding('attr.tabindex'),
        __metadata("design:type", Number)
    ], FileInputComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        HostBinding('class.vclDisabled'),
        __metadata("design:type", Boolean)
    ], FileInputComponent.prototype, "disabled", void 0);
    __decorate([
        HostBinding('class.vclError'),
        __metadata("design:type", Object)
    ], FileInputComponent.prototype, "invalidFiles", void 0);
    __decorate([
        HostBinding('class.vclDragndrop'),
        __metadata("design:type", Boolean)
    ], FileInputComponent.prototype, "isDragging", void 0);
    __decorate([
        HostBinding('class.isFocused'),
        __metadata("design:type", Boolean)
    ], FileInputComponent.prototype, "isFocused", void 0);
    __decorate([
        ViewChild('input'),
        __metadata("design:type", ElementRef)
    ], FileInputComponent.prototype, "input", void 0);
    __decorate([
        HostListener('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileInputComponent.prototype, "onFocus", null);
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileInputComponent.prototype, "onBlur", null);
    __decorate([
        HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileInputComponent.prototype, "keydown", null);
    __decorate([
        HostListener('click', ['$event.target.value']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileInputComponent.prototype, "onClick", null);
    __decorate([
        HostListener('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileInputComponent.prototype, "onDragOver", null);
    __decorate([
        HostListener('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileInputComponent.prototype, "onDragLeave", null);
    __decorate([
        HostListener('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileInputComponent.prototype, "onDrop", null);
    FileInputComponent = __decorate([
        Component({
            selector: 'vcl-file-input',
            template: "<input #input type=\"file\" [style.display]=\"'none'\" (change)=\"onInputChange()\" [accept]=\"accept\" [multiple]=\"multiple\" [disabled]=\"disabled\" />\n<div class=\"vclFileInputIcon vclIcon {{ icon }}\" aria-hidden=\"true\" aria-label=\"account\" role=\"img\"></div>\n<div class=\"vclFileInputPlaceholder\">\n  <ng-container *ngIf=\"filename\">{{ filename }}</ng-container>\n  <div *ngIf=\"!filename\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            host: {
                '[class.vclInput]': 'true',
                '[class.vclFileInput]': 'true',
                role: 'button',
            }
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], FileInputComponent);
    return FileInputComponent;
}());
export { FileInputComponent };
