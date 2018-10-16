import { Subject, combineLatest, never, merge, timer, fromEvent, Observable, from, interval, BehaviorSubject } from 'rxjs';
import { filter, map, publishReplay, first, skipUntil, startWith, skipWhile } from 'rxjs/operators';
import { Directive, Input, Optional, SkipSelf, NgModule, Inject, Renderer2, ElementRef, HostBinding, HostListener, Component, forwardRef, ChangeDetectionStrategy, Output, ViewChild, EventEmitter, ChangeDetectorRef, TemplateRef, ComponentFactoryResolver, ApplicationRef, ViewContainerRef, ContentChildren, QueryList, Injectable, InjectionToken, Self, ContentChild, ReflectiveInjector, Injector, ViewEncapsulation, Renderer } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { AnimationBuilder, trigger, state, transition, animate, style } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { DomSanitizer, DOCUMENT } from '@angular/platform-browser';
import { AttachmentX, AttachmentY, PopoverComponent, VCLPopoverModule, VCLButtonModule } from '@ng-vcl/ng-vcl';

var ObservableComponent = /** @class */ (function () {
    function ObservableComponent() {
        this.changesSubject = new Subject();
        this.observedProps = {};
        this.changes$ = this.changesSubject.asObservable();
    }
    ObservableComponent.prototype.ngOnChanges = function (changes) {
        this.changesSubject.next(changes);
    };
    ObservableComponent.prototype.ngOnDestroy = function () {
        this.changesSubject.complete();
    };
    ObservableComponent.prototype.observeChanges = function () {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        return this.changes$.pipe(filter(function (changes) { return props.some(function (p) { return changes.hasOwnProperty(p); }); }));
    };
    ObservableComponent.prototype.observeChange = function (prop) {
        if (!this.observedProps[prop]) {
            var c$ = this.changes$.pipe(filter(function (changes) { return changes.hasOwnProperty(prop); }), map(function (changes) { return changes[prop]; }), publishReplay(1));
            c$.connect();
            this.observedProps[prop] = c$;
        }
        return this.observedProps[prop];
    };
    ObservableComponent.prototype.observeChangeValue = function (prop) {
        return this.observeChange(prop).pipe(map(function (change) { return change.currentValue; }));
    };
    return ObservableComponent;
}());

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
var LayoutDirective = /** @class */ (function (_super) {
    __extends(LayoutDirective, _super);
    function LayoutDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout$ = _this.observeChangeValue('layout');
        return _this;
    }
    __decorate([
        Input('vclLayout'),
        __metadata("design:type", Object)
    ], LayoutDirective.prototype, "layout", void 0);
    LayoutDirective = __decorate([
        Directive({
            selector: '[vclLayout]',
        })
    ], LayoutDirective);
    return LayoutDirective;
}(ObservableComponent));
/**
 * The vclLayoutTarget directive allows to set class injection points on elements in the component's template.
 * Developer can inject style classes into these elements using the vclLayout directive on the component.
 */
var LayoutTargetDirective = /** @class */ (function (_super) {
    __extends(LayoutTargetDirective, _super);
    function LayoutTargetDirective(layoutHost, renderer, elRef) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.elRef = elRef;
        _this.name$ = _this.observeChangeValue('name');
        _this.classes = [];
        if (layoutHost) {
            // Whenever the name or the layout property on the vclLayout directive changes, update the classes
            _this.sub = combineLatest(_this.name$, layoutHost.layout$).subscribe(function (_a) {
                var name = _a[0], layout = _a[1];
                // Remove any of previously added classes
                _this.classes.forEach(function (name) { return _this.renderer.removeClass(_this.elRef.nativeElement, name); });
                _this.classes = [];
                if (name && layout && typeof layout[name] === 'string') {
                    layout[name].split(' ').forEach(function (name) {
                        // Only add classes that are not present on the element
                        if (!_this.elRef.nativeElement.classList.contains(name)) {
                            // Add the class to the element
                            _this.renderer.addClass(_this.elRef.nativeElement, name);
                            // Remember them so they can be removed on a change
                            _this.classes = _this.classes.concat([name]);
                        }
                    });
                }
            });
        }
        return _this;
    }
    LayoutTargetDirective.prototype.ngOnDestroy = function () {
        this.sub && this.sub.unsubscribe();
        _super.prototype.ngOnDestroy.call(this);
    };
    __decorate([
        Input('vclLayoutTarget'),
        __metadata("design:type", String)
    ], LayoutTargetDirective.prototype, "name", void 0);
    LayoutTargetDirective = __decorate([
        Directive({
            selector: '[vclLayoutTarget]',
        }),
        __param(0, Optional()), __param(0, SkipSelf()), __param(0, Inject(LayoutDirective)),
        __metadata("design:paramtypes", [Object, Renderer2,
            ElementRef])
    ], LayoutTargetDirective);
    return LayoutTargetDirective;
}(ObservableComponent));
var VCLLayoutModule = /** @class */ (function () {
    function VCLLayoutModule() {
    }
    VCLLayoutModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [LayoutTargetDirective, LayoutDirective],
            exports: [LayoutTargetDirective, LayoutDirective, CommonModule],
            providers: [],
        })
    ], VCLLayoutModule);
    return VCLLayoutModule;
}());

function defineMetadata(key, value, target) {
    Reflect.defineMetadata(key, value, target);
}
function getMetadata(key, target) {
    return Reflect.getMetadata(key, target);
}

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var InputDirective = /** @class */ (function () {
    function InputDirective() {
        this.disabled = false;
    }
    Object.defineProperty(InputDirective.prototype, "isDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputDirective.prototype, "attrDisabled", {
        get: function () {
            return this.disabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$1([
        Input(),
        __metadata$1("design:type", Boolean)
    ], InputDirective.prototype, "disabled", void 0);
    __decorate$1([
        HostBinding('class.vclDisabled'),
        __metadata$1("design:type", Object),
        __metadata$1("design:paramtypes", [])
    ], InputDirective.prototype, "isDisabled", null);
    __decorate$1([
        HostBinding('attr.disabled'),
        __metadata$1("design:type", Object),
        __metadata$1("design:paramtypes", [])
    ], InputDirective.prototype, "attrDisabled", null);
    InputDirective = __decorate$1([
        Directive({
            selector: 'input[vcl-input]',
            host: {
                '[class.vclInput]': 'true'
            }
        })
    ], InputDirective);
    return InputDirective;
}());
var InputAutoSelectDirective = /** @class */ (function () {
    function InputAutoSelectDirective(elRef) {
        this.elRef = elRef;
    }
    // Autoselect
    InputAutoSelectDirective.prototype.onFocus = function () {
        this.elRef.nativeElement.select();
    };
    __decorate$1([
        HostListener('focus'),
        __metadata$1("design:type", Function),
        __metadata$1("design:paramtypes", []),
        __metadata$1("design:returntype", void 0)
    ], InputAutoSelectDirective.prototype, "onFocus", null);
    InputAutoSelectDirective = __decorate$1([
        Directive({
            selector: 'input[vcl-input][autoselect]',
        }),
        __metadata$1("design:paramtypes", [ElementRef])
    ], InputAutoSelectDirective);
    return InputAutoSelectDirective;
}());

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLInputModule = /** @class */ (function () {
    function VCLInputModule() {
    }
    VCLInputModule = __decorate$2([
        NgModule({
            imports: [],
            exports: [InputDirective, InputAutoSelectDirective],
            declarations: [InputDirective, InputAutoSelectDirective],
            providers: [],
        })
    ], VCLInputModule);
    return VCLInputModule;
}());

function accept(file, acceptedFiles) {
    if (file && acceptedFiles) {
        var acceptedFilesArray = (Array.isArray(acceptedFiles) ?
            acceptedFiles :
            acceptedFiles.split(','));
        var fileName_1 = file.name || '';
        var mimeType_1 = file.type || '';
        var baseMimeType_1 = mimeType_1.replace(/\/.*$/, '');
        return acceptedFilesArray.some(function (type) {
            var validType = type.trim();
            if (validType.charAt(0) === '.') {
                return fileName_1.toLowerCase().endsWith(validType.toLowerCase());
            }
            else if (/\/\*$/.test(validType)) {
                // This is something like a image/* mime type
                return baseMimeType_1 === validType.replace(/\/.*$/, '');
            }
            return mimeType_1 === validType;
        });
    }
    return true;
}

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
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
    __decorate$3([
        Input(),
        __metadata$2("design:type", String)
    ], FileInputComponent.prototype, "icon", void 0);
    __decorate$3([
        Input(),
        __metadata$2("design:type", String)
    ], FileInputComponent.prototype, "accept", void 0);
    __decorate$3([
        Input(),
        __metadata$2("design:type", Boolean)
    ], FileInputComponent.prototype, "multiple", void 0);
    __decorate$3([
        Output(),
        __metadata$2("design:type", Object)
    ], FileInputComponent.prototype, "files", void 0);
    __decorate$3([
        Input(),
        HostBinding('attr.tabindex'),
        __metadata$2("design:type", Number)
    ], FileInputComponent.prototype, "tabindex", void 0);
    __decorate$3([
        Input(),
        HostBinding('class.vclDisabled'),
        __metadata$2("design:type", Boolean)
    ], FileInputComponent.prototype, "disabled", void 0);
    __decorate$3([
        HostBinding('class.vclError'),
        __metadata$2("design:type", Object)
    ], FileInputComponent.prototype, "invalidFiles", void 0);
    __decorate$3([
        HostBinding('class.vclDragndrop'),
        __metadata$2("design:type", Boolean)
    ], FileInputComponent.prototype, "isDragging", void 0);
    __decorate$3([
        HostBinding('class.isFocused'),
        __metadata$2("design:type", Boolean)
    ], FileInputComponent.prototype, "isFocused", void 0);
    __decorate$3([
        ViewChild('input'),
        __metadata$2("design:type", ElementRef)
    ], FileInputComponent.prototype, "input", void 0);
    __decorate$3([
        HostListener('focus'),
        __metadata$2("design:type", Function),
        __metadata$2("design:paramtypes", []),
        __metadata$2("design:returntype", void 0)
    ], FileInputComponent.prototype, "onFocus", null);
    __decorate$3([
        HostListener('blur'),
        __metadata$2("design:type", Function),
        __metadata$2("design:paramtypes", []),
        __metadata$2("design:returntype", void 0)
    ], FileInputComponent.prototype, "onBlur", null);
    __decorate$3([
        HostListener('keydown', ['$event']),
        __metadata$2("design:type", Function),
        __metadata$2("design:paramtypes", [Object]),
        __metadata$2("design:returntype", void 0)
    ], FileInputComponent.prototype, "keydown", null);
    __decorate$3([
        HostListener('click', ['$event.target.value']),
        __metadata$2("design:type", Function),
        __metadata$2("design:paramtypes", [Object]),
        __metadata$2("design:returntype", void 0)
    ], FileInputComponent.prototype, "onClick", null);
    __decorate$3([
        HostListener('dragover', ['$event']),
        __metadata$2("design:type", Function),
        __metadata$2("design:paramtypes", [Object]),
        __metadata$2("design:returntype", void 0)
    ], FileInputComponent.prototype, "onDragOver", null);
    __decorate$3([
        HostListener('dragleave', ['$event']),
        __metadata$2("design:type", Function),
        __metadata$2("design:paramtypes", [Object]),
        __metadata$2("design:returntype", void 0)
    ], FileInputComponent.prototype, "onDragLeave", null);
    __decorate$3([
        HostListener('drop', ['$event']),
        __metadata$2("design:type", Function),
        __metadata$2("design:paramtypes", [Object]),
        __metadata$2("design:returntype", void 0)
    ], FileInputComponent.prototype, "onDrop", null);
    FileInputComponent = __decorate$3([
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
        __metadata$2("design:paramtypes", [ChangeDetectorRef])
    ], FileInputComponent);
    return FileInputComponent;
}());

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLFileInputModule = /** @class */ (function () {
    function VCLFileInputModule() {
    }
    VCLFileInputModule = __decorate$4([
        NgModule({
            imports: [CommonModule],
            exports: [FileInputComponent],
            declarations: [FileInputComponent],
            providers: [],
        })
    ], VCLFileInputModule);
    return VCLFileInputModule;
}());

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    __decorate$5([
        Input(),
        __metadata$3("design:type", Object)
    ], TextareaDirective.prototype, "selectAllOnFocus", void 0);
    __decorate$5([
        Input(),
        __metadata$3("design:type", Object)
    ], TextareaDirective.prototype, "autogrow", void 0);
    __decorate$5([
        Input(),
        __metadata$3("design:type", Object)
    ], TextareaDirective.prototype, "maxRows", void 0);
    __decorate$5([
        Input(),
        __metadata$3("design:type", Object)
    ], TextareaDirective.prototype, "minRows", void 0);
    __decorate$5([
        HostBinding('attr.rows'),
        Input(),
        __metadata$3("design:type", Number)
    ], TextareaDirective.prototype, "rows", void 0);
    __decorate$5([
        HostListener('propertychange'),
        HostListener('input'),
        __metadata$3("design:type", Function),
        __metadata$3("design:paramtypes", []),
        __metadata$3("design:returntype", void 0)
    ], TextareaDirective.prototype, "onChange", null);
    __decorate$5([
        HostListener('focus', ['$event.target.value']),
        __metadata$3("design:type", Function),
        __metadata$3("design:paramtypes", [Object]),
        __metadata$3("design:returntype", void 0)
    ], TextareaDirective.prototype, "onFocus", null);
    TextareaDirective = __decorate$5([
        Directive({
            selector: 'textarea[vcl-textarea]',
            host: {
                '[class.vclInput]': 'true',
            }
        }),
        __metadata$3("design:paramtypes", [ElementRef])
    ], TextareaDirective);
    return TextareaDirective;
}());

var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLTextareaModule = /** @class */ (function () {
    function VCLTextareaModule() {
    }
    VCLTextareaModule = __decorate$6([
        NgModule({
            imports: [FormsModule],
            exports: [TextareaDirective],
            declarations: [TextareaDirective],
            providers: [],
        })
    ], VCLTextareaModule);
    return VCLTextareaModule;
}());

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$1 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return FlipSwitchComponent; }),
    multi: true
};
var FlipSwitchComponent = /** @class */ (function () {
    function FlipSwitchComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.onLabel = 'On';
        this.offLabel = 'Off';
        this.value = false;
        this.disabled = false;
        this.valueChange = new EventEmitter();
    }
    FlipSwitchComponent.prototype.onTap = function () {
        this.toggle();
    };
    FlipSwitchComponent.prototype.keydown = function (ev) {
        switch (ev.code) {
            case 'Space':
                ev.preventDefault();
                this.toggle();
                break;
            case 'ArrowLeft':
                ev.preventDefault();
                if (!this.value) {
                    this.toggle();
                }
                break;
            case 'ArrowRight':
                ev.preventDefault();
                if (this.value) {
                    this.toggle();
                }
                break;
        }
    };
    FlipSwitchComponent.prototype.toggle = function () {
        if (this.disabled) {
            return;
        }
        this.value = !this.value;
        this.valueChange.emit(this.value);
        this.onChangeCallback && this.onChangeCallback(this.value);
    };
    FlipSwitchComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.cdRef.markForCheck();
    };
    FlipSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    FlipSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    FlipSwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate$7([
        HostBinding(),
        __metadata$4("design:type", Object)
    ], FlipSwitchComponent.prototype, "tabindex", void 0);
    __decorate$7([
        Input(),
        __metadata$4("design:type", String)
    ], FlipSwitchComponent.prototype, "onLabel", void 0);
    __decorate$7([
        Input(),
        __metadata$4("design:type", String)
    ], FlipSwitchComponent.prototype, "offLabel", void 0);
    __decorate$7([
        Input(),
        __metadata$4("design:type", Boolean)
    ], FlipSwitchComponent.prototype, "value", void 0);
    __decorate$7([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata$4("design:type", Boolean)
    ], FlipSwitchComponent.prototype, "disabled", void 0);
    __decorate$7([
        Output(),
        __metadata$4("design:type", Object)
    ], FlipSwitchComponent.prototype, "valueChange", void 0);
    __decorate$7([
        HostListener('tap'),
        __metadata$4("design:type", Function),
        __metadata$4("design:paramtypes", []),
        __metadata$4("design:returntype", void 0)
    ], FlipSwitchComponent.prototype, "onTap", null);
    __decorate$7([
        HostListener('keydown', ['$event']),
        __metadata$4("design:type", Function),
        __metadata$4("design:paramtypes", [Object]),
        __metadata$4("design:returntype", void 0)
    ], FlipSwitchComponent.prototype, "keydown", null);
    FlipSwitchComponent = __decorate$7([
        Component({
            selector: 'vcl-flip-switch',
            template: "<label class=\"vclFlipSwitchLabel\">\n  <div class=\"vclFlipSwitchTrack\">\n    <div class=\"vclFlipSwitchActive\" [attr.aria-hidden]=\"!value\">{{onLabel}}</div>\n    <div class=\"vclFlipSwitchInactive\" [attr.aria-hidden]=\"value\">{{offLabel}}</div>\n  </div>\n  <div class=\"vclFlipSwitchKnob\"></div>\n</label>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$1],
            host: {
                '[class.vclFlipSwitch]': 'true',
                '[class.vclFlipSwitchPressed]': 'value',
                '[attr.role]': '"button"',
                '[attr.aria-pressed]': 'value',
                '[attr.touch-action]': '"pan-y"'
            }
        }),
        __metadata$4("design:paramtypes", [ChangeDetectorRef])
    ], FlipSwitchComponent);
    return FlipSwitchComponent;
}());

var __extends$1 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Wormhole = /** @class */ (function () {
    function Wormhole() {
    }
    return Wormhole;
}());
var TemplateWormholeBase = /** @class */ (function (_super) {
    __extends$1(TemplateWormholeBase, _super);
    // The wormhole directive needs a reference to the template
    function TemplateWormholeBase(templateRef) {
        var _this = _super.call(this) || this;
        _this.templateRef = templateRef;
        if (!(templateRef instanceof TemplateRef)) {
            throw 'invalid TemplateRef';
        }
        return _this;
    }
    Object.defineProperty(TemplateWormholeBase.prototype, "isConnected", {
        get: function () {
            return !!(this.viewRef);
        },
        enumerable: true,
        configurable: true
    });
    TemplateWormholeBase.prototype.connect = function (attrs, events, index) {
        var _this = this;
        if (typeof attrs === 'object' && attrs) {
            this.cachedAttrs = attrs;
        }
        this.disconnect();
        this.viewRef = this.attach(this.templateRef, index);
        this.viewRef.onDestroy(function () {
            _this.viewRef = undefined;
        });
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(this.viewRef.context, this.cachedAttrs);
        }
        this.viewRef.detectChanges();
        return never();
    };
    TemplateWormholeBase.prototype.disconnect = function () {
        this.detach();
        this.viewRef = undefined;
    };
    TemplateWormholeBase.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.viewRef && attrs && typeof attrs === 'object') {
            Object.assign(this.viewRef.context, attrs);
            this.viewRef.markForCheck();
        }
    };
    return TemplateWormholeBase;
}(Wormhole));
var ComponentWormholeBase = /** @class */ (function (_super) {
    __extends$1(ComponentWormholeBase, _super);
    function ComponentWormholeBase(componentClass) {
        var _this = _super.call(this) || this;
        _this.componentClass = componentClass;
        if (!(typeof componentClass === 'function')) {
            throw 'invalid component class';
        }
        return _this;
    }
    Object.defineProperty(ComponentWormholeBase.prototype, "compInstance", {
        get: function () {
            return this.compRef && this.compRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentWormholeBase.prototype, "isConnected", {
        get: function () {
            return !!this.compRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentWormholeBase.prototype.connect = function (attrs, events, index) {
        var _this = this;
        if (typeof attrs === 'object' && attrs) {
            this.cachedAttrs = attrs;
        }
        this.disconnect();
        this.compRef = this.attach(this.componentClass, index);
        this.compRef.onDestroy(function () {
            _this.compRef = undefined;
        });
        var instance = this.compRef.instance;
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(instance, this.cachedAttrs);
        }
        this.compRef.changeDetectorRef.detectChanges();
        var events$ = (events || []).map(function (event) {
            if (!instance[event])
                throw 'Event not found: ' + event;
            return instance[event] && instance[event].pipe(map(function (value) { return ({ type: event, value: value }); }));
        });
        return merge.apply(void 0, events$);
    };
    ComponentWormholeBase.prototype.disconnect = function () {
        this.detach();
        this.compRef = undefined;
    };
    ComponentWormholeBase.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.compRef && attrs && typeof attrs === 'object') {
            Object.assign(this.compRef.instance, attrs);
            // TODO: Change detection is not triggering when changedetection is set to onPush
            // Workaround for ng 4
            // https://github.com/angular/angular/issues/12313
            var cdRef = this.compRef.changeDetectorRef;
            if (cdRef && cdRef['_view'] && cdRef['_view'].nodes[0] && cdRef['_view'].nodes[0].componentView) {
                this.compRef.changeDetectorRef['_view'].nodes[0].componentView.state |= (1 << 3);
            }
            this.compRef.changeDetectorRef.markForCheck();
        }
    };
    return ComponentWormholeBase;
}(Wormhole));

var __extends$2 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TemplateWormhole = /** @class */ (function (_super) {
    __extends$2(TemplateWormhole, _super);
    // The wormhole directive needs a reference to the template
    function TemplateWormhole(templateRef, viewContainerRef) {
        var _this = _super.call(this, templateRef) || this;
        _this.viewContainerRef = viewContainerRef;
        if (!viewContainerRef) {
            throw 'missing ViewContainerRef';
        }
        return _this;
    }
    TemplateWormhole.prototype.attach = function (templateRef, index) {
        return this.viewContainerRef.createEmbeddedView(templateRef, null, typeof index === 'number' ? index : this.viewContainerRef.length);
    };
    TemplateWormhole.prototype.detach = function () {
        if (this.isConnected && this.currentIndex >= 0) {
            this.viewContainerRef.remove(this.currentIndex);
        }
    };
    Object.defineProperty(TemplateWormhole.prototype, "currentIndex", {
        get: function () {
            return this.viewRef ? this.viewContainerRef.indexOf(this.viewRef) : -1;
        },
        enumerable: true,
        configurable: true
    });
    return TemplateWormhole;
}(TemplateWormholeBase));
var ComponentWormhole = /** @class */ (function (_super) {
    __extends$2(ComponentWormhole, _super);
    function ComponentWormhole(componentClass, viewContainerRef, injector) {
        var _this = _super.call(this, componentClass) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        if (!viewContainerRef) {
            throw 'missing ViewContainerRef';
        }
        return _this;
    }
    ComponentWormhole.prototype.attach = function (componentClass, index) {
        var injector = this.injector || this.viewContainerRef.parentInjector;
        if (!this.compFactory) {
            var componentFactoryResolver = injector.get(ComponentFactoryResolver);
            this.compFactory = componentFactoryResolver.resolveComponentFactory(componentClass);
        }
        return this.viewContainerRef.createComponent(this.compFactory, typeof index === 'number' ? index : this.viewContainerRef.length, injector);
    };
    ComponentWormhole.prototype.detach = function () {
        if (this.compRef) {
            this.compRef.destroy();
        }
    };
    Object.defineProperty(ComponentWormhole.prototype, "currentIndex", {
        get: function () {
            return this.compRef ? this.viewContainerRef.indexOf(this.compRef.hostView) : -1;
        },
        enumerable: true,
        configurable: true
    });
    return ComponentWormhole;
}(ComponentWormholeBase));

var __extends$3 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getViewRootNode(embeddedViewRef) {
    var rootNodes = embeddedViewRef.rootNodes;
    return (rootNodes && rootNodes.length && rootNodes[0]) || undefined;
}
function getComponentRootNode(componentRef) {
    return getViewRootNode(componentRef.hostView);
}
var DomComponentWormhole = /** @class */ (function (_super) {
    __extends$3(DomComponentWormhole, _super);
    function DomComponentWormhole(componentClass, appRef, node, injector) {
        var _this = _super.call(this, componentClass) || this;
        _this.appRef = appRef;
        _this.node = node;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(DomComponentWormhole.prototype, "rootComponentRef", {
        get: function () {
            var rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
            if (!rootComponent) {
                throw 'Application root component not found';
            }
            return rootComponent;
        },
        enumerable: true,
        configurable: true
    });
    DomComponentWormhole.prototype.attach = function (componentClass, index) {
        var injector = this.injector || this.rootComponentRef.injector;
        if (!this.compFactory) {
            var componentFactoryResolver = injector.get(ComponentFactoryResolver);
            this.compFactory = componentFactoryResolver.resolveComponentFactory(componentClass);
        }
        var compRef = this.compFactory.create(injector);
        this.appRef.attachView(compRef.hostView);
        var compRefRootNode = getComponentRootNode(compRef);
        var node = this.node || getComponentRootNode(this.rootComponentRef);
        if (!compRefRootNode) {
            throw 'component root node not found';
        }
        if (!node) {
            throw 'root node not found';
        }
        node.appendChild(compRefRootNode);
        return compRef;
    };
    DomComponentWormhole.prototype.detach = function () {
        if (this.compRef) {
            this.compRef.destroy();
        }
    };
    Object.defineProperty(DomComponentWormhole.prototype, "currentIndex", {
        get: function () {
            return this.compRef ? 0 : -1;
        },
        enumerable: true,
        configurable: true
    });
    return DomComponentWormhole;
}(ComponentWormholeBase));
var DomTemplateWormhole = /** @class */ (function (_super) {
    __extends$3(DomTemplateWormhole, _super);
    // The wormhole directive needs a reference to the template
    function DomTemplateWormhole(templateRef, appRef, node, injector) {
        var _this = _super.call(this, templateRef) || this;
        _this.appRef = appRef;
        _this.node = node;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(DomTemplateWormhole.prototype, "rootComponentRef", {
        get: function () {
            var rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
            if (!rootComponent) {
                throw 'Application root component not found';
            }
            return rootComponent;
        },
        enumerable: true,
        configurable: true
    });
    DomTemplateWormhole.prototype.attach = function (templateRef, index) {
        var injector = this.injector || this.rootComponentRef.injector;
        var embeddedView = templateRef.createEmbeddedView(undefined);
        this.appRef.attachView(embeddedView);
        var compRefRootNode = getViewRootNode(embeddedView);
        var node = this.node || getComponentRootNode(this.rootComponentRef);
        if (!compRefRootNode) {
            throw 'component root node not found';
        }
        if (!node) {
            throw 'root node not found';
        }
        node.appendChild(compRefRootNode);
        return embeddedView;
    };
    DomTemplateWormhole.prototype.detach = function () {
        if (this.viewRef && this.currentIndex >= 0) {
            this.viewRef.destroy();
        }
    };
    Object.defineProperty(DomTemplateWormhole.prototype, "currentIndex", {
        get: function () {
            return this.viewRef ? 0 : -1;
        },
        enumerable: true,
        configurable: true
    });
    return DomTemplateWormhole;
}(TemplateWormholeBase));

var __extends$4 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WormholeHostBase = /** @class */ (function () {
    function WormholeHostBase() {
        this._wormholes = [];
    }
    Object.defineProperty(WormholeHostBase.prototype, "wormholes", {
        get: function () {
            return this._wormholes.filter(function (w) { return w.isConnected; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WormholeHostBase.prototype, "connectedWormholes", {
        get: function () {
            return this._wormholes.filter(function (w) { return w.isConnected; }).length;
        },
        enumerable: true,
        configurable: true
    });
    WormholeHostBase.prototype.getWormhole = function (index) {
        return this._wormholes[index];
    };
    WormholeHostBase.prototype.connectWormhole = function (target, attrs, events) {
        var wormhole = this.createWormhole(target);
        wormhole.connect(attrs, events);
        return wormhole;
    };
    WormholeHostBase.prototype.disconnectWormhole = function (index) {
        var w = this.getWormhole(index);
        if (w) {
            w.disconnect();
        }
    };
    WormholeHostBase.prototype.disconnectWormholes = function () {
        this._wormholes.forEach(function (w) { return w.disconnect(); });
    };
    WormholeHostBase.prototype.clearWormholes = function () {
        this.disconnectWormholes();
        this._wormholes = [];
    };
    WormholeHostBase.prototype.removeWormhole = function (wormhole) {
        var w = typeof wormhole === 'number' ? this.getWormhole(wormhole) : wormhole;
        if (w) {
            w.disconnect();
            this._wormholes = this._wormholes.filter(function (cw) { return cw !== w; });
        }
    };
    return WormholeHostBase;
}());
var WormholeHost = /** @class */ (function (_super) {
    __extends$4(WormholeHost, _super);
    function WormholeHost(_host, _injector) {
        var _this = _super.call(this) || this;
        _this._host = _host;
        _this._injector = _injector;
        if (!_host) {
            throw 'missing host ViewContainerRef';
        }
        return _this;
    }
    WormholeHost.prototype.createWormhole = function (arg2) {
        var wormhole;
        if (typeof arg2 === 'function' && this._host) {
            wormhole = new ComponentWormhole(arg2, this._host, this._injector);
        }
        else if (arg2 instanceof TemplateRef && this._host) {
            wormhole = new TemplateWormhole(arg2, this._host);
        }
        else {
            throw 'Parameter must be component class or templateRef';
        }
        this._wormholes.push(wormhole);
        return wormhole;
    };
    return WormholeHost;
}(WormholeHostBase));
var DomWormholeHost = /** @class */ (function (_super) {
    __extends$4(DomWormholeHost, _super);
    function DomWormholeHost(_host, _node, _injector) {
        var _this = _super.call(this) || this;
        _this._host = _host;
        _this._node = _node;
        _this._injector = _injector;
        if (!_host) {
            throw 'missing host ApplicationRef';
        }
        return _this;
    }
    DomWormholeHost.prototype.createWormhole = function (arg2) {
        var wormhole;
        if (typeof arg2 === 'function' && this._host instanceof ApplicationRef) {
            wormhole = new DomComponentWormhole(arg2, this._host, this._node, this._injector);
        }
        else if (arg2 instanceof TemplateRef && this._host) {
            wormhole = new DomTemplateWormhole(arg2, this._host, this._node, this._injector);
        }
        else {
            throw 'Parameter must be component class or templateRef';
        }
        this._wormholes.push(wormhole);
        return wormhole;
    };
    return DomWormholeHost;
}(WormholeHostBase));

var __extends$5 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WormholeDirective = /** @class */ (function (_super) {
    __extends$5(WormholeDirective, _super);
    function WormholeDirective(viewContainerRef) {
        return _super.call(this, viewContainerRef) || this;
    }
    Object.defineProperty(WormholeDirective.prototype, "isConnected", {
        get: function () {
            return !!this.wormhole && this.wormhole.isConnected;
        },
        enumerable: true,
        configurable: true
    });
    WormholeDirective.prototype.ngOnChanges = function (changes) {
        var attrs = ('attrs' in changes && changes['attrs'].currentValue) || undefined;
        if ('target' in changes) {
            this.clearWormholes();
            var target = changes['target'].currentValue;
            if (target) {
                this.wormhole = this.connectWormhole(target, attrs);
            }
        }
        else if (attrs && this.wormhole) {
            this.wormhole.setAttributes(attrs);
        }
    };
    WormholeDirective.prototype.ngOnDestroy = function () {
        if (this.wormhole) {
            this.wormhole.disconnect();
        }
    };
    __decorate$8([
        Input('connect'),
        __metadata$5("design:type", Object)
    ], WormholeDirective.prototype, "target", void 0);
    __decorate$8([
        Input('attrs'),
        __metadata$5("design:type", Object)
    ], WormholeDirective.prototype, "attrs", void 0);
    WormholeDirective = __decorate$8([
        Directive({
            selector: 'wormhole'
        }),
        __metadata$5("design:paramtypes", [ViewContainerRef])
    ], WormholeDirective);
    return WormholeDirective;
}(WormholeHost));

var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLWormholeModule = /** @class */ (function () {
    function VCLWormholeModule() {
    }
    VCLWormholeModule = __decorate$9([
        NgModule({
            exports: [WormholeDirective],
            declarations: [WormholeDirective],
            providers: []
        })
    ], VCLWormholeModule);
    return VCLWormholeModule;
}());

var __decorate$a = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
    __decorate$a([
        Input(),
        __metadata$6("design:type", Object)
    ], MetalistItem.prototype, "value", void 0);
    __decorate$a([
        Input(),
        __metadata$6("design:type", Object)
    ], MetalistItem.prototype, "metadata", void 0);
    __decorate$a([
        Input(),
        __metadata$6("design:type", Boolean)
    ], MetalistItem.prototype, "disabled", void 0);
    MetalistItem = __decorate$a([
        Component({
            selector: '[vcl-metalist-item]',
            template: '<ng-content></ng-content>',
            exportAs: 'meta'
        }),
        __param$1(0, Inject(forwardRef(function () { return MetalistComponent; }))),
        __metadata$6("design:paramtypes", [Object])
    ], MetalistItem);
    return MetalistItem;
}());
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$2 = {
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
    __decorate$a([
        Input(),
        __metadata$6("design:type", String)
    ], MetalistComponent.prototype, "mode", void 0);
    __decorate$a([
        Input(),
        __metadata$6("design:type", Number)
    ], MetalistComponent.prototype, "maxSelectableItems", void 0);
    __decorate$a([
        Output(),
        __metadata$6("design:type", Object)
    ], MetalistComponent.prototype, "change", void 0);
    __decorate$a([
        Output(),
        __metadata$6("design:type", Object)
    ], MetalistComponent.prototype, "itemsChange", void 0);
    __decorate$a([
        ContentChildren(MetalistItem),
        __metadata$6("design:type", QueryList)
    ], MetalistComponent.prototype, "items", void 0);
    __decorate$a([
        Input(),
        __metadata$6("design:type", Object)
    ], MetalistComponent.prototype, "value", void 0);
    MetalistComponent = __decorate$a([
        Component({
            selector: 'vcl-metalist, [vcl-metalist]',
            template: "<ng-content></ng-content>\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$2],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata$6("design:paramtypes", [ChangeDetectorRef])
    ], MetalistComponent);
    return MetalistComponent;
}());

var __decorate$b = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLMetalistModule = /** @class */ (function () {
    function VCLMetalistModule() {
    }
    VCLMetalistModule = __decorate$b([
        NgModule({
            imports: [CommonModule, VCLWormholeModule],
            exports: [MetalistComponent, MetalistItem],
            declarations: [MetalistComponent, MetalistItem],
            providers: [],
        })
    ], VCLMetalistModule);
    return VCLMetalistModule;
}());

var __decorate$c = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLFlipSwitchModule = /** @class */ (function () {
    function VCLFlipSwitchModule() {
    }
    VCLFlipSwitchModule = __decorate$c([
        NgModule({
            imports: [CommonModule, VCLMetalistModule],
            exports: [FlipSwitchComponent],
            declarations: [FlipSwitchComponent],
            providers: [],
        })
    ], VCLFlipSwitchModule);
    return VCLFlipSwitchModule;
}());

var __decorate$d = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCL_ICON_RESOLVER = new InjectionToken('VCL_ICON_RESOLVER');
// The default name resolver following the CSS class name conventions of
// the well-known Font Awesome icon font. Basically it translates
// `fa:user` into `fa fa-user`
var DefaultIconResolverService = /** @class */ (function () {
    function DefaultIconResolverService() {
    }
    DefaultIconResolverService.prototype.match = function (icon) {
        return /^[a-z0-9-_]+:[a-z0-9-_]+(:[a-z0-9-_]+)?$/.test(icon);
    };
    DefaultIconResolverService.prototype.lookup = function (icon) {
        if (typeof icon === 'string') {
            var iconName = icon;
            // Split on first : occurrence
            var iconParts = iconName.split(':');
            if (iconParts.length === 0) {
                return icon;
            }
            else {
                var setName = iconParts.shift();
                var iconClasses = iconParts.join(" " + setName + "-");
                return setName + " " + setName + "-" + iconClasses;
            }
        }
        return icon;
    };
    DefaultIconResolverService = __decorate$d([
        Injectable()
    ], DefaultIconResolverService);
    return DefaultIconResolverService;
}());

var __decorate$e = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$2 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var IconDirective = /** @class */ (function () {
    function IconDirective() {
    }
    Object.defineProperty(IconDirective.prototype, "attrRole", {
        get: function () {
            return this.role || 'img';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconDirective.prototype, "attrAriaLabel", {
        get: function () {
            return this.ariaLabel || this.alt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconDirective.prototype, "isAriaHidden", {
        // Do not hide from aria when a label is provided
        get: function () {
            return !this.attrAriaLabel;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$e([
        Input('aria-label'),
        __metadata$7("design:type", Object)
    ], IconDirective.prototype, "ariaLabel", void 0);
    __decorate$e([
        Input(),
        __metadata$7("design:type", Object)
    ], IconDirective.prototype, "alt", void 0);
    __decorate$e([
        Input(),
        __metadata$7("design:type", Object)
    ], IconDirective.prototype, "role", void 0);
    __decorate$e([
        HostBinding('attr.role'),
        __metadata$7("design:type", Object),
        __metadata$7("design:paramtypes", [])
    ], IconDirective.prototype, "attrRole", null);
    __decorate$e([
        HostBinding('attr.aria-label'),
        __metadata$7("design:type", Object),
        __metadata$7("design:paramtypes", [])
    ], IconDirective.prototype, "attrAriaLabel", null);
    __decorate$e([
        HostBinding('attr.aria-hidden'),
        __metadata$7("design:type", Object),
        __metadata$7("design:paramtypes", [])
    ], IconDirective.prototype, "isAriaHidden", null);
    IconDirective = __decorate$e([
        Directive({
            selector: 'vcl-icon, [vcl-icon]',
            host: {
                '[class.vclIcon]': 'true',
            },
            providers: [NgClass]
        })
    ], IconDirective);
    return IconDirective;
}());
var IconFontDirective = /** @class */ (function () {
    function IconFontDirective(ngClass, _iconResolvers) {
        this.ngClass = ngClass;
        this._iconResolvers = _iconResolvers;
    }
    IconFontDirective.prototype.ngOnChanges = function (changes) {
        if (changes.icon) {
            var icon_1 = changes.icon.currentValue;
            var fontIconClass = void 0;
            if (!icon_1) {
                fontIconClass = [];
            }
            else {
                var resolver = this._iconResolvers.find(function (ir) { return ir.match(icon_1); });
                if (!resolver) {
                    fontIconClass = icon_1;
                }
                else {
                    fontIconClass = resolver.lookup(icon_1);
                }
            }
            this.ngClass.ngClass = fontIconClass;
            this.ngClass.ngDoCheck();
        }
    };
    __decorate$e([
        Input(),
        __metadata$7("design:type", Object)
    ], IconFontDirective.prototype, "icon", void 0);
    IconFontDirective = __decorate$e([
        Directive({
            selector: 'vcl-icon[icon], [vcl-icon][icon]',
            providers: [NgClass]
        }),
        __param$2(0, Self()),
        __param$2(1, Inject(VCL_ICON_RESOLVER)),
        __metadata$7("design:paramtypes", [NgClass, Array])
    ], IconFontDirective);
    return IconFontDirective;
}());

var __decorate$f = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLIconModule = /** @class */ (function () {
    function VCLIconModule() {
    }
    VCLIconModule = __decorate$f([
        NgModule({
            imports: [CommonModule],
            exports: [IconDirective, IconFontDirective],
            declarations: [IconDirective, IconFontDirective],
            providers: [{
                    provide: VCL_ICON_RESOLVER,
                    useClass: DefaultIconResolverService,
                    multi: true
                }],
        })
    ], VCLIconModule);
    return VCLIconModule;
}());

var __decorate$g = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DropdownOption = /** @class */ (function () {
    function DropdownOption() {
        this.disabled = false;
    }
    __decorate$g([
        ViewChild(TemplateRef),
        __metadata$8("design:type", TemplateRef)
    ], DropdownOption.prototype, "_content", void 0);
    __decorate$g([
        Input(),
        __metadata$8("design:type", Object)
    ], DropdownOption.prototype, "value", void 0);
    __decorate$g([
        Input(),
        __metadata$8("design:type", Object)
    ], DropdownOption.prototype, "metadata", void 0);
    __decorate$g([
        Input(),
        __metadata$8("design:type", String)
    ], DropdownOption.prototype, "label", void 0);
    __decorate$g([
        Input(),
        __metadata$8("design:type", String)
    ], DropdownOption.prototype, "sublabel", void 0);
    __decorate$g([
        Input(),
        __metadata$8("design:type", String)
    ], DropdownOption.prototype, "prepIcon", void 0);
    __decorate$g([
        Input(),
        __metadata$8("design:type", String)
    ], DropdownOption.prototype, "appIcon", void 0);
    __decorate$g([
        Input(),
        __metadata$8("design:type", String)
    ], DropdownOption.prototype, "appIconSrc", void 0);
    __decorate$g([
        Input(),
        __metadata$8("design:type", String)
    ], DropdownOption.prototype, "prepIconSrc", void 0);
    __decorate$g([
        Input(),
        __metadata$8("design:type", Boolean)
    ], DropdownOption.prototype, "disabled", void 0);
    DropdownOption = __decorate$g([
        Component({
            selector: 'vcl-dropdown-option',
            template: '<ng-template><ng-content></ng-content></ng-template>'
        })
    ], DropdownOption);
    return DropdownOption;
}());

var __decorate$h = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$3 = (this && this.__param) || function (paramIndex, decorator) {
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
var DropdownState;
(function (DropdownState) {
    DropdownState[DropdownState["Expanded"] = 0] = "Expanded";
    DropdownState[DropdownState["Closed"] = 1] = "Closed";
    DropdownState[DropdownState["Expanding"] = 2] = "Expanding";
    DropdownState[DropdownState["Closing"] = 3] = "Closing";
})(DropdownState || (DropdownState = {}));
var DROPDOWN_ANIMATIONS = new InjectionToken('@ng-vcl/ng-vcl#dropdown_animations');
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$3 = {
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
    __decorate$h([
        ViewChild('metalist'),
        __metadata$9("design:type", MetalistComponent)
    ], DropdownComponent.prototype, "metalist", void 0);
    __decorate$h([
        ViewChild('metalist', { read: ElementRef }),
        __metadata$9("design:type", ElementRef)
    ], DropdownComponent.prototype, "listbox", void 0);
    __decorate$h([
        ContentChildren(DropdownOption),
        __metadata$9("design:type", QueryList)
    ], DropdownComponent.prototype, "items", void 0);
    __decorate$h([
        Input(),
        __metadata$9("design:type", Number)
    ], DropdownComponent.prototype, "tabindex", void 0);
    __decorate$h([
        Input(),
        __metadata$9("design:type", Object)
    ], DropdownComponent.prototype, "value", void 0);
    __decorate$h([
        Input(),
        __metadata$9("design:type", Object),
        __metadata$9("design:paramtypes", [Object])
    ], DropdownComponent.prototype, "expanded", null);
    __decorate$h([
        Output(),
        __metadata$9("design:type", Object)
    ], DropdownComponent.prototype, "willClose", void 0);
    __decorate$h([
        Output(),
        __metadata$9("design:type", Object)
    ], DropdownComponent.prototype, "willExpand", void 0);
    __decorate$h([
        Input(),
        __metadata$9("design:type", String)
    ], DropdownComponent.prototype, "mode", void 0);
    __decorate$h([
        Input(),
        __metadata$9("design:type", Number)
    ], DropdownComponent.prototype, "maxSelectableItems", void 0);
    __decorate$h([
        Input(),
        __metadata$9("design:type", Object)
    ], DropdownComponent.prototype, "disabled", void 0);
    __decorate$h([
        Input(),
        __metadata$9("design:type", Boolean)
    ], DropdownComponent.prototype, "listenKeys", void 0);
    __decorate$h([
        Output(),
        __metadata$9("design:type", Object)
    ], DropdownComponent.prototype, "change", void 0);
    __decorate$h([
        Output(),
        __metadata$9("design:type", Object)
    ], DropdownComponent.prototype, "itemsChange", void 0);
    DropdownComponent = __decorate$h([
        Component({
            selector: 'vcl-dropdown',
            template: "<ul vcl-metalist #metalist\n  class=\"vclDropdown vclOpen\"\n  role=\"listbox\"\n  [class.vclLayoutHidden]=\"state === DropdownState.Closed\" \n  [value]=\"value\"\n  [mode]=\"mode\"\n  [maxSelectableItems]=\"maxSelectableItems\"\n  [class.vclDisabled]=\"disabled\"\n  [attr.tabindex]=\"tabindex\"\n  [attr.aria-multiselectable]=\"mode === 'multiple'\"\n  [style.position]=\"'static'\"\n  (change)=\"onMetalistChange($event)\"\n  (focus)=\"onMetalistFocus()\"\n  (blur)=\"onMetalistBlur()\"\n  (keydown)=\"onMetalistKeydown($event)\"\n  (itemsChange)=\"onItemsChange()\"\n  >\n    <li \n      *ngFor=\"let item of items\" \n      vcl-metalist-item\n      #meta=meta\n      [metadata]=\"item\"\n      [disabled]=\"disabled || item.disabled\"\n      [value]=\"item.value\"\n      role=\"option\"\n      class=\"vclDropdownItem\"\n      [class.vclSelected]=\"meta.selected\"\n      [class.vclDisabled]=\"disabled || meta.disabled\"\n      [class.vclHighlighted]=\"focused && meta.marked\"\n      [attr.aria-selected]=\"meta.selected\"\n      (click)=\"onMetalistItemTap(meta)\">\n      <div vcl-icogram *ngIf=\"item.label\" class=\"vclDropdownItemLabel\"\n         [prepIcon]=\"item.prepIcon\"\n         [appIcon]=\"item.appIcon\"\n         [appIconSrc]=\"item.appIconSrc\"\n         [prepIconSrc]=\"item.prepIconSrc\"\n      >\n        {{item.label}}\n      </div>\n      <div *ngIf=\"item.sublabel\" class=\"vclDropdownItemSubLabel\">\n        {{item.sublabel}}\n      </div>\n      <wormhole *ngIf=\"item._content\" [connect]=\"item._content\"></wormhole>\n    </li>\n</ul>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$3],
            host: {
                '[attr.tabindex]': '-1',
            }
        }),
        __param$3(3, Optional()), __param$3(3, Inject(DROPDOWN_ANIMATIONS)),
        __metadata$9("design:paramtypes", [ElementRef,
            ChangeDetectorRef,
            AnimationBuilder, Object])
    ], DropdownComponent);
    return DropdownComponent;
}());

var __decorate$i = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$a = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var IcogramComponent = /** @class */ (function () {
    function IcogramComponent() {
    }
    __decorate$i([
        Input(),
        __metadata$a("design:type", String)
    ], IcogramComponent.prototype, "label", void 0);
    __decorate$i([
        Input(),
        __metadata$a("design:type", String)
    ], IcogramComponent.prototype, "prepIcon", void 0);
    __decorate$i([
        Input(),
        __metadata$a("design:type", String)
    ], IcogramComponent.prototype, "appIcon", void 0);
    __decorate$i([
        Input(),
        __metadata$a("design:type", String)
    ], IcogramComponent.prototype, "prepIconSrc", void 0);
    __decorate$i([
        Input(),
        __metadata$a("design:type", String)
    ], IcogramComponent.prototype, "appIconSrc", void 0);
    IcogramComponent = __decorate$i([
        Component({
            selector: 'vcl-icogram, div[vcl-icogram]',
            host: {
                '[class.vclIcogram]': 'true',
                '[attr.role]': '"img"',
            },
            template: "<div vclLayoutTarget=\"prepIcon\" vcl-icon *ngIf=\"prepIcon || prepIconSrc\" [icon]=\"prepIcon\">\n  <ng-content select=\"[prepIcon]\"></ng-content>\n</div>\n<div vclLayoutTarget=\"label\" *ngIf=\"!!label\" class=\"vclText\">{{label}}</div>\n<ng-content></ng-content>\n<div vclLayoutTarget=\"appIcon\" vcl-icon *ngIf=\"appIcon || appIconSrc\" [icon]=\"appIcon\">\n  <ng-content select=\"[appIcon]\"></ng-content>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], IcogramComponent);
    return IcogramComponent;
}());
var IcogramSpanComponent = /** @class */ (function () {
    function IcogramSpanComponent() {
    }
    __decorate$i([
        Input(),
        __metadata$a("design:type", String)
    ], IcogramSpanComponent.prototype, "label", void 0);
    __decorate$i([
        Input(),
        __metadata$a("design:type", String)
    ], IcogramSpanComponent.prototype, "prepIcon", void 0);
    __decorate$i([
        Input(),
        __metadata$a("design:type", String)
    ], IcogramSpanComponent.prototype, "appIcon", void 0);
    __decorate$i([
        Input(),
        __metadata$a("design:type", String)
    ], IcogramSpanComponent.prototype, "prepIconSrc", void 0);
    __decorate$i([
        Input(),
        __metadata$a("design:type", String)
    ], IcogramSpanComponent.prototype, "appIconSrc", void 0);
    IcogramSpanComponent = __decorate$i([
        Component({
            selector: 'span[vcl-icogram]',
            host: {
                '[class.vclIcogram]': 'true',
                '[attr.role]': '"img"',
            },
            template: "<span vclLayoutTarget=\"prepIcon\" vcl-icon *ngIf=\"prepIcon || prepIconSrc\" [icon]=\"prepIcon\">\n  <ng-content select=\"[prepIcon]\"></ng-content>\n</span>\n<span vclLayoutTarget=\"label\" *ngIf=\"!!label\" class=\"vclText\">{{label}}</span>\n<ng-content></ng-content>\n<span vclLayoutTarget=\"appIcon\" vcl-icon *ngIf=\"appIcon || appIconSrc\" [icon]=\"appIcon\">\n  <ng-content select=\"[appIcon]\"></ng-content>\n</span>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], IcogramSpanComponent);
    return IcogramSpanComponent;
}());

var __decorate$j = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLIcogramModule = /** @class */ (function () {
    function VCLIcogramModule() {
    }
    VCLIcogramModule = __decorate$j([
        NgModule({
            imports: [CommonModule, VCLIconModule, VCLLayoutModule],
            exports: [IcogramComponent, IcogramSpanComponent, VCLLayoutModule],
            declarations: [IcogramComponent, IcogramSpanComponent],
            providers: [],
        })
    ], VCLIcogramModule);
    return VCLIcogramModule;
}());

var __decorate$k = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLDropdownModule = /** @class */ (function () {
    function VCLDropdownModule() {
    }
    VCLDropdownModule = __decorate$k([
        NgModule({
            imports: [CommonModule, VCLMetalistModule, VCLWormholeModule, VCLIcogramModule],
            exports: [DropdownComponent, DropdownOption],
            declarations: [DropdownComponent, DropdownOption],
            providers: [],
        })
    ], VCLDropdownModule);
    return VCLDropdownModule;
}());

var __decorate$l = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$b = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ButtonDirective = /** @class */ (function () {
    function ButtonDirective(elementRef) {
        this.elementRef = elementRef;
        this.disabled = false;
        this.hovered = false; // `true` if a pointer device is hovering the button (CSS' :hover)
    }
    Object.defineProperty(ButtonDirective.prototype, "isDisabled", {
        get: function () {
            return this.disabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    ButtonDirective.prototype.onMouseEnter = function (e) { this.hovered = true; };
    ButtonDirective.prototype.onMouseLeave = function (e) { this.hovered = false; };
    ButtonDirective.prototype.focus = function () {
        this.elementRef.nativeElement.focus();
    };
    __decorate$l([
        Input(),
        __metadata$b("design:type", Boolean)
    ], ButtonDirective.prototype, "disabled", void 0);
    __decorate$l([
        HostBinding('class.vclDisabled'),
        HostBinding('attr.disabled'),
        __metadata$b("design:type", Object),
        __metadata$b("design:paramtypes", [])
    ], ButtonDirective.prototype, "isDisabled", null);
    __decorate$l([
        HostListener('mouseenter', ['$event']),
        __metadata$b("design:type", Function),
        __metadata$b("design:paramtypes", [Object]),
        __metadata$b("design:returntype", void 0)
    ], ButtonDirective.prototype, "onMouseEnter", null);
    __decorate$l([
        HostListener('mouseleave', ['$event']),
        __metadata$b("design:type", Function),
        __metadata$b("design:paramtypes", [Object]),
        __metadata$b("design:returntype", void 0)
    ], ButtonDirective.prototype, "onMouseLeave", null);
    __decorate$l([
        HostBinding('class.vclHovered'),
        __metadata$b("design:type", Boolean)
    ], ButtonDirective.prototype, "hovered", void 0);
    ButtonDirective = __decorate$l([
        Directive({
            selector: 'button[vcl-button]',
            host: {
                '[class.vclButton]': 'true',
            },
        }),
        __metadata$b("design:paramtypes", [ElementRef])
    ], ButtonDirective);
    return ButtonDirective;
}());

var __decorate$m = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$c = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ButtonLabelComponent = /** @class */ (function () {
    function ButtonLabelComponent() {
    }
    Object.defineProperty(ButtonLabelComponent.prototype, "ariaLabel", {
        get: function () {
            return this.title || this.label;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$m([
        Input(),
        __metadata$c("design:type", String)
    ], ButtonLabelComponent.prototype, "title", void 0);
    __decorate$m([
        Input(),
        __metadata$c("design:type", String)
    ], ButtonLabelComponent.prototype, "label", void 0);
    __decorate$m([
        Input(),
        __metadata$c("design:type", String)
    ], ButtonLabelComponent.prototype, "prepIcon", void 0);
    __decorate$m([
        Input(),
        __metadata$c("design:type", String)
    ], ButtonLabelComponent.prototype, "appIcon", void 0);
    __decorate$m([
        Input(),
        __metadata$c("design:type", String)
    ], ButtonLabelComponent.prototype, "appIconSrc", void 0);
    __decorate$m([
        Input(),
        __metadata$c("design:type", String)
    ], ButtonLabelComponent.prototype, "prepIconSrc", void 0);
    __decorate$m([
        HostBinding('attr.aria-label'),
        __metadata$c("design:type", Object),
        __metadata$c("design:paramtypes", [])
    ], ButtonLabelComponent.prototype, "ariaLabel", null);
    ButtonLabelComponent = __decorate$m([
        Component({
            selector: 'button[vcl-button][label]',
            template: "<span vcl-icogram\n  [label]=\"label\"\n  [prepIcon]=\"prepIcon\"\n  [appIcon]=\"appIcon\"\n  [appIconSrc]=\"appIconSrc\"\n  [prepIconSrc]=\"prepIconSrc\">\n  <ng-content></ng-content>\n</span>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ButtonLabelComponent);
    return ButtonLabelComponent;
}());

var __decorate$n = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$d = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ButtonSelectDirective = /** @class */ (function () {
    function ButtonSelectDirective() {
        this.selected = false;
        this.select = new EventEmitter();
    }
    Object.defineProperty(ButtonSelectDirective.prototype, "selectable", {
        set: function (value) {
            this.selected = !!value;
        },
        enumerable: true,
        configurable: true
    });
    ButtonSelectDirective.prototype.onClick = function () {
        this.selected = !this.selected;
        this.select.emit(this.selected);
    };
    __decorate$n([
        Input(),
        __metadata$d("design:type", Object),
        __metadata$d("design:paramtypes", [Object])
    ], ButtonSelectDirective.prototype, "selectable", null);
    __decorate$n([
        Input(),
        HostBinding('class.vclSelected'),
        __metadata$d("design:type", Boolean)
    ], ButtonSelectDirective.prototype, "selected", void 0);
    __decorate$n([
        Output(),
        __metadata$d("design:type", Object)
    ], ButtonSelectDirective.prototype, "select", void 0);
    __decorate$n([
        HostListener('click'),
        __metadata$d("design:type", Function),
        __metadata$d("design:paramtypes", []),
        __metadata$d("design:returntype", void 0)
    ], ButtonSelectDirective.prototype, "onClick", null);
    ButtonSelectDirective = __decorate$n([
        Directive({
            selector: 'button[vcl-button][selectable]',
        })
    ], ButtonSelectDirective);
    return ButtonSelectDirective;
}());

var __decorate$o = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$e = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ButtonIconComponent = /** @class */ (function () {
    function ButtonIconComponent() {
    }
    __decorate$o([
        HostBinding('attr.aria-label'),
        Input(),
        __metadata$e("design:type", String)
    ], ButtonIconComponent.prototype, "title", void 0);
    __decorate$o([
        Input(),
        __metadata$e("design:type", String)
    ], ButtonIconComponent.prototype, "icon", void 0);
    __decorate$o([
        Input(),
        __metadata$e("design:type", String)
    ], ButtonIconComponent.prototype, "iconSrc", void 0);
    ButtonIconComponent = __decorate$o([
        Component({
            selector: 'button[vcl-button][icon], button[vcl-button][iconSrc]',
            template: "<span vcl-icogram [appIcon]=\"icon\" [appIconSrc]=\"iconSrc\"></span>\n\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclSquare]': 'true'
            }
        })
    ], ButtonIconComponent);
    return ButtonIconComponent;
}());

var __decorate$p = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLButtonModule$1 = /** @class */ (function () {
    function VCLButtonModule$$1() {
    }
    VCLButtonModule$$1 = __decorate$p([
        NgModule({
            imports: [CommonModule, VCLIcogramModule],
            exports: [ButtonDirective, ButtonLabelComponent, ButtonSelectDirective, ButtonIconComponent],
            declarations: [ButtonDirective, ButtonLabelComponent, ButtonSelectDirective, ButtonIconComponent],
            providers: [],
        })
    ], VCLButtonModule$$1);
    return VCLButtonModule$$1;
}());

var __decorate$q = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$f = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OffClickDirective = /** @class */ (function () {
    function OffClickDirective(elem) {
        this.elem = elem;
        this.offClickDelay = 10;
        this.offClickListen = true;
        this.offClick = new EventEmitter();
        this.subs = [];
    }
    OffClickDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof document !== 'undefined') {
            // Track mouse move on host element and store hovered inner elements
            var subTrack = merge(fromEvent(this.elem.nativeElement, 'mouseover').pipe(map(function (e) { return e.target || undefined; })), fromEvent(this.elem.nativeElement, 'mouseleave').pipe(map(function () { return undefined; }))).subscribe(function (target) { return _this.hoveredElement = target; });
            // Add a small delay, so any click that causes this directive to render does not trigger an off-click
            var subClick = fromEvent(document, 'click').pipe(filter(function () { return _this.offClickListen; }), skipUntil(timer(this.offClickDelay).pipe(first()))).subscribe(function (ev) {
                var popoverHostElement = _this.elem.nativeElement;
                // Check that the target is not the off-clicks target element or any sub element
                var checks = [
                    _this.hoveredElement,
                    popoverHostElement
                ].concat((_this.offClickExcludes || []).map(function (e) { return e instanceof ElementRef ? e.nativeElement : e; }).filter(function (e) { return e instanceof Element; })).filter(function (el) { return !!el; });
                var target = ev.target;
                if (target) {
                    var targetIsNotExcludedElementOrChildElement = checks.every(function (el) {
                        return !(el === target || el.contains(target));
                    });
                    if (targetIsNotExcludedElementOrChildElement) {
                        _this.offClick.emit();
                    }
                }
            });
            this.subs = [subTrack, subClick];
        }
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    __decorate$q([
        Input(),
        __metadata$f("design:type", Object)
    ], OffClickDirective.prototype, "offClickDelay", void 0);
    __decorate$q([
        Input(),
        __metadata$f("design:type", Object)
    ], OffClickDirective.prototype, "offClickListen", void 0);
    __decorate$q([
        Input(),
        __metadata$f("design:type", Array)
    ], OffClickDirective.prototype, "offClickExcludes", void 0);
    __decorate$q([
        Output('offClick'),
        __metadata$f("design:type", Object)
    ], OffClickDirective.prototype, "offClick", void 0);
    OffClickDirective = __decorate$q([
        Directive({
            selector: '[offClick]',
            exportAs: 'offClick'
        }),
        __metadata$f("design:paramtypes", [ElementRef])
    ], OffClickDirective);
    return OffClickDirective;
}());

var __decorate$r = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLOffClickModule = /** @class */ (function () {
    function VCLOffClickModule() {
    }
    VCLOffClickModule = __decorate$r([
        NgModule({
            declarations: [OffClickDirective],
            exports: [OffClickDirective]
        })
    ], VCLOffClickModule);
    return VCLOffClickModule;
}());

var __extends$6 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$s = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$g = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$4 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AttachmentX$1 = {
    Left: 'left',
    Center: 'center',
    Right: 'right',
};
var AttachmentY$1 = {
    Top: 'top',
    Center: 'center',
    Bottom: 'bottom',
};
var Dimension = {
    Width: 'width',
    Height: 'height',
};
var PopoverState;
(function (PopoverState) {
    PopoverState[PopoverState["visible"] = 0] = "visible";
    PopoverState[PopoverState["hidden"] = 1] = "hidden";
    PopoverState[PopoverState["opening"] = 2] = "opening";
    PopoverState[PopoverState["closing"] = 3] = "closing";
})(PopoverState || (PopoverState = {}));
var POPOVER_ANIMATIONS = new InjectionToken('@ng-vcl/ng-vcl#popover_animations');
var PopoverComponent$1 = /** @class */ (function (_super) {
    __extends$6(PopoverComponent$$1, _super);
    function PopoverComponent$$1(ref, builder, cd, animations) {
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.builder = builder;
        _this.cd = cd;
        _this.animations = animations;
        _this.state = PopoverState.hidden;
        _this.translateX = 1;
        _this.translateY = 0;
        _this.enableStyling = true;
        _this.debug = false;
        _this.targetX = AttachmentX$1.Left;
        _this.attachmentX = AttachmentX$1.Left;
        _this.offsetAttachmentX = 0;
        _this.targetY = AttachmentY$1.Bottom;
        _this.attachmentY = AttachmentY$1.Top;
        _this.offsetAttachmentY = 0;
        _this.willClose = new EventEmitter();
        _this.willOpen = new EventEmitter();
        return _this;
    }
    PopoverComponent_1 = PopoverComponent$$1;
    Object.defineProperty(PopoverComponent$$1.prototype, "visible", {
        get: function () {
            return (this.state === PopoverState.opening || this.state === PopoverState.visible);
        },
        set: function (value) {
            value ? this.open() : this.close();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent$$1.prototype, "classHidden", {
        get: function () {
            return this.state === PopoverState.hidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent$$1.prototype, "styleVisibility", {
        get: function () {
            return this.state === PopoverState.opening ? 'hidden' : 'visible';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent$$1.prototype, "transform", {
        get: function () {
            return "translate(" + String(this.translateX) + "px, " + String(this.translateY) + "px)";
        },
        enumerable: true,
        configurable: true
    });
    PopoverComponent$$1.prototype.onWindowResize = function (event) {
        this.reposition();
    };
    PopoverComponent$$1.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        var tag = this.tag + ".ngOnChanges()";
        if (this.debug)
            console.log(tag, 'changes:', changes);
        this.onChange(changes);
    };
    PopoverComponent$$1.prototype.ngOnInit = function () {
        this.setTag();
        var tag = this.tag + ".ngOnInit()";
        if (this.debug)
            console.log(tag, 'this:', this);
    };
    PopoverComponent$$1.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onChange(); });
        if (this.animations) {
            if (this.animations.enter) {
                this.enterAnimationFactory = this.builder.build(this.animations.enter);
            }
            if (this.animations.leave) {
                this.leaveAnimationFactory = this.builder.build(this.animations.leave);
            }
        }
    };
    PopoverComponent$$1.prototype.onChange = function (changes) {
        if (changes === void 0) { changes = { target: { currentValue: this.target } }; }
        var tag = this.tag + ".onChange()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'changes:', changes);
        if (changes.target) {
            this.setTarget(changes.target.currentValue);
            this.setTag();
        }
        // this.reposition();
    };
    PopoverComponent$$1.prototype.setTarget = function (value) {
        if (value === void 0) { value = this.target; }
        this.targetElement = this.getTargetElement(value);
    };
    PopoverComponent$$1.prototype.setTag = function () {
        this.tag = PopoverComponent_1.Tag + "." + this.target;
    };
    PopoverComponent$$1.prototype.getTargetElement = function (value) {
        var tag = PopoverComponent_1.Tag + ".getTargetElement()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'value:', value);
        var el = undefined;
        if (typeof value === 'string') {
            if (debug)
                console.log(tag, 'typeof value === string');
            el = document.querySelector(value);
        }
        else if (value instanceof Element) {
            if (debug)
                console.log(tag, 'value instanceof Element');
            el = value;
        }
        else if (value instanceof ElementRef) {
            if (debug)
                console.log(tag, 'value instanceof ElementRef');
            el = value.nativeElement;
        }
        else {
            if (debug)
                console.log(tag, 'value is undefined');
        }
        if (debug)
            console.log(tag, 'el:', el);
        return el;
    };
    PopoverComponent$$1.prototype.reposition = function () {
        var tag = this.tag + ".reposition()";
        var debug = this.debug || false;
        var targetPos = this.targetElement ? this.targetElement.getBoundingClientRect() : undefined;
        if (debug)
            console.log(tag, 'targetPos:', targetPos);
        if (!targetPos)
            return;
        var ownPos = this.getAttachmentPosition();
        if (debug)
            console.log(tag, 'ownPos:', ownPos);
        if (!ownPos)
            return;
        var mustX = this.targetX === AttachmentX$1.Center ?
            targetPos[AttachmentX$1.Left] + targetPos[Dimension.Width] / 2 :
            targetPos[this.targetX];
        var isX = this.attachmentX === AttachmentX$1.Center ?
            ownPos[AttachmentX$1.Left] + ownPos[Dimension.Width] / 2 :
            ownPos[this.attachmentX];
        var diffX = mustX - isX;
        this.translateX = this.translateX + diffX + this.offsetAttachmentX;
        var mustY = this.targetY === AttachmentY$1.Center ?
            targetPos[AttachmentY$1.Top] + targetPos[Dimension.Height] / 2 :
            targetPos[this.targetY];
        var isY = this.attachmentY === AttachmentY$1.Center ?
            ownPos[AttachmentY$1.Top] + ownPos[Dimension.Height] / 2 :
            ownPos[this.attachmentY];
        var diffY = mustY - isY + this.offsetAttachmentY;
        if (debug) {
            console.log(tag, {
                targetPos: targetPos,
                ownPos: ownPos,
                mustX: mustX,
                isX: isX,
                diffX: diffX,
                mustY: mustY,
                isY: isY,
                diffY: diffY
            });
        }
        this.translateY = this.translateY + diffY;
    };
    PopoverComponent$$1.prototype.getAttachmentPosition = function () {
        return this.ref.nativeElement.getBoundingClientRect();
    };
    PopoverComponent$$1.prototype.open = function () {
        var _this = this;
        if (this.state === PopoverState.visible || this.state === PopoverState.opening) {
            return;
        }
        this.state = PopoverState.opening;
        this.willOpen.emit();
        // We have to wait one runloop before calling reposition(), so the element is rendered and the right bounds can be determined.
        // Also when opening the popover is hidden via the visibility-style. This avoids flashing up on the wrong position.
        setTimeout(function () {
            _this.reposition();
            if (_this.enterAnimationFactory && _this.ref) {
                var player_1 = _this.enterAnimationFactory.create(_this.ref.nativeElement);
                player_1.onDone(function () {
                    player_1.destroy();
                });
                player_1.play();
            }
            _this.state = PopoverState.visible;
            _this.cd.markForCheck();
        });
    };
    PopoverComponent$$1.prototype.close = function () {
        var _this = this;
        if (this.state === PopoverState.hidden || this.state === PopoverState.opening || this.state === PopoverState.closing) {
            return;
        }
        this.state = PopoverState.closing;
        this.willClose.emit();
        if (this.leaveAnimationFactory && this.ref) {
            var player_2 = this.leaveAnimationFactory.create(this.ref.nativeElement);
            player_2.onDone(function () {
                player_2.destroy();
                _this.state = PopoverState.hidden;
                _this.cd.markForCheck();
            });
            player_2.play();
        }
        else {
            this.state = PopoverState.hidden;
            this.cd.markForCheck();
        }
    };
    PopoverComponent$$1.prototype.toggle = function () {
        if (this.visible) {
            this.close();
        }
        else {
            this.open();
        }
    };
    PopoverComponent$$1.Tag = 'PopoverComponent';
    __decorate$s([
        HostBinding('class.vclPopOver'),
        Input(),
        __metadata$g("design:type", Object)
    ], PopoverComponent$$1.prototype, "enableStyling", void 0);
    __decorate$s([
        Input(),
        __metadata$g("design:type", Object)
    ], PopoverComponent$$1.prototype, "debug", void 0);
    __decorate$s([
        Input(),
        __metadata$g("design:type", Object)
    ], PopoverComponent$$1.prototype, "target", void 0);
    __decorate$s([
        Input(),
        __metadata$g("design:type", String)
    ], PopoverComponent$$1.prototype, "targetX", void 0);
    __decorate$s([
        Input(),
        __metadata$g("design:type", String)
    ], PopoverComponent$$1.prototype, "attachmentX", void 0);
    __decorate$s([
        Input(),
        __metadata$g("design:type", Number)
    ], PopoverComponent$$1.prototype, "offsetAttachmentX", void 0);
    __decorate$s([
        Input(),
        __metadata$g("design:type", String)
    ], PopoverComponent$$1.prototype, "targetY", void 0);
    __decorate$s([
        Input(),
        __metadata$g("design:type", String)
    ], PopoverComponent$$1.prototype, "attachmentY", void 0);
    __decorate$s([
        Input(),
        __metadata$g("design:type", Number)
    ], PopoverComponent$$1.prototype, "offsetAttachmentY", void 0);
    __decorate$s([
        Input(),
        __metadata$g("design:type", Boolean),
        __metadata$g("design:paramtypes", [Boolean])
    ], PopoverComponent$$1.prototype, "visible", null);
    __decorate$s([
        Output(),
        __metadata$g("design:type", Object)
    ], PopoverComponent$$1.prototype, "willClose", void 0);
    __decorate$s([
        Output(),
        __metadata$g("design:type", Object)
    ], PopoverComponent$$1.prototype, "willOpen", void 0);
    __decorate$s([
        HostBinding('class.vclLayoutHidden'),
        __metadata$g("design:type", Object),
        __metadata$g("design:paramtypes", [])
    ], PopoverComponent$$1.prototype, "classHidden", null);
    __decorate$s([
        HostBinding('style.visibility'),
        __metadata$g("design:type", Object),
        __metadata$g("design:paramtypes", [])
    ], PopoverComponent$$1.prototype, "styleVisibility", null);
    __decorate$s([
        HostBinding('style.transform'),
        __metadata$g("design:type", Object),
        __metadata$g("design:paramtypes", [])
    ], PopoverComponent$$1.prototype, "transform", null);
    __decorate$s([
        HostListener('window:resize', ['$event']),
        __metadata$g("design:type", Function),
        __metadata$g("design:paramtypes", [Event]),
        __metadata$g("design:returntype", void 0)
    ], PopoverComponent$$1.prototype, "onWindowResize", null);
    PopoverComponent$$1 = PopoverComponent_1 = __decorate$s([
        Component({
            selector: 'vcl-popover',
            template: '<ng-content></ng-content>',
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[style.position]': '"absolute"'
            }
        }),
        __param$4(3, Optional()), __param$4(3, Inject(POPOVER_ANIMATIONS)),
        __metadata$g("design:paramtypes", [ElementRef,
            AnimationBuilder,
            ChangeDetectorRef, Object])
    ], PopoverComponent$$1);
    return PopoverComponent$$1;
    var PopoverComponent_1;
}(ObservableComponent));

var __decorate$t = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLPopoverModule$1 = /** @class */ (function () {
    function VCLPopoverModule$$1() {
    }
    VCLPopoverModule$$1 = __decorate$t([
        NgModule({
            imports: [
                CommonModule,
                VCLOffClickModule
            ],
            providers: [],
            exports: [PopoverComponent$1],
            declarations: [PopoverComponent$1]
        })
    ], VCLPopoverModule$$1);
    return VCLPopoverModule$$1;
}());

var __decorate$u = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$h = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TokenComponent = /** @class */ (function () {
    function TokenComponent(cdRef) {
        this.cdRef = cdRef;
        this.label = '';
        this.disabled = false;
        this.selected = false;
        this.removable = false;
        this.icon = 'fa:times';
        this.remove = new EventEmitter();
        this.select = new EventEmitter();
        // Store cva disabled state in an extra property to remember the old state after the token-list has been disabled
        this.cvaDisabled = false;
    }
    TokenComponent.prototype.onTap = function (e) {
        if (this.isDisabled) {
            return;
        }
        this.select.emit(e);
    };
    TokenComponent.prototype.onRemoveClick = function (event) {
        event.stopPropagation();
        this.remove.emit(event);
    };
    TokenComponent.prototype.setDisabledState = function (isDisabled) {
        this.cvaDisabled = isDisabled;
        this.cdRef.markForCheck();
    };
    Object.defineProperty(TokenComponent.prototype, "isDisabled", {
        get: function () {
            return this.cvaDisabled || this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$u([
        Input(),
        __metadata$h("design:type", String)
    ], TokenComponent.prototype, "label", void 0);
    __decorate$u([
        Input(),
        __metadata$h("design:type", String)
    ], TokenComponent.prototype, "value", void 0);
    __decorate$u([
        Input(),
        __metadata$h("design:type", Boolean)
    ], TokenComponent.prototype, "disabled", void 0);
    __decorate$u([
        HostListener('tap', ['$event']),
        __metadata$h("design:type", Function),
        __metadata$h("design:paramtypes", [Event]),
        __metadata$h("design:returntype", void 0)
    ], TokenComponent.prototype, "onTap", null);
    __decorate$u([
        HostBinding('class.vclSelected'),
        Input(),
        __metadata$h("design:type", Boolean)
    ], TokenComponent.prototype, "selected", void 0);
    __decorate$u([
        Input(),
        __metadata$h("design:type", Boolean)
    ], TokenComponent.prototype, "removable", void 0);
    __decorate$u([
        Input(),
        __metadata$h("design:type", String)
    ], TokenComponent.prototype, "icon", void 0);
    __decorate$u([
        Input(),
        __metadata$h("design:type", String)
    ], TokenComponent.prototype, "tokenIcon", void 0);
    __decorate$u([
        Output(),
        __metadata$h("design:type", Object)
    ], TokenComponent.prototype, "remove", void 0);
    __decorate$u([
        Output(),
        __metadata$h("design:type", Object)
    ], TokenComponent.prototype, "select", void 0);
    __decorate$u([
        HostBinding('class.vclDisabled'),
        __metadata$h("design:type", Object),
        __metadata$h("design:paramtypes", [])
    ], TokenComponent.prototype, "isDisabled", null);
    TokenComponent = __decorate$u([
        Component({
            selector: 'vcl-token',
            template: "<div *ngIf=\"tokenIcon\" vcl-icogram [appIcon]=\"tokenIcon\" ></div>\n<span class=\"vclTokenLabel\">{{label}}</span>\n<button vcl-button\n        [disabled]=\"isDisabled\"\n        *ngIf=\"removable\" \n        class=\"vclTransparent\"\n        type=\"button\" \n        title=\"Remove\"\n        [icon]=\"icon\"\n        (click)=\"onRemoveClick($event)\">\n</button>\n",
            host: {
                '[class.vclToken]': 'true',
            }
        }),
        __metadata$h("design:paramtypes", [ChangeDetectorRef])
    ], TokenComponent);
    return TokenComponent;
}());

var __decorate$v = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$i = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$4 = {
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
    __decorate$v([
        ContentChildren(TokenComponent),
        __metadata$i("design:type", QueryList)
    ], TokenListComponent.prototype, "tokens", void 0);
    __decorate$v([
        Input(),
        __metadata$i("design:type", Boolean)
    ], TokenListComponent.prototype, "selectable", void 0);
    __decorate$v([
        Input(),
        __metadata$i("design:type", Boolean)
    ], TokenListComponent.prototype, "dispatchEvent", void 0);
    __decorate$v([
        Input(),
        __metadata$i("design:type", Boolean)
    ], TokenListComponent.prototype, "disabled", void 0);
    __decorate$v([
        Output(),
        __metadata$i("design:type", Object)
    ], TokenListComponent.prototype, "tokensChange", void 0);
    TokenListComponent = __decorate$v([
        Component({
            selector: 'vcl-token-list',
            template: '<ng-content></ng-content>',
            host: {
                '[class.vclTokenList]': 'true',
                '[class.vclTokenContainer]': 'true'
            },
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$4]
        }),
        __metadata$i("design:paramtypes", [ChangeDetectorRef])
    ], TokenListComponent);
    return TokenListComponent;
}());

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate$w = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$j = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$5 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$5 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TokenInputContainerComponent; }),
    multi: true
};
var TokenInputLabelPre = /** @class */ (function () {
    function TokenInputLabelPre() {
    }
    TokenInputLabelPre = __decorate$w([
        Directive({ selector: '[vcl-token-input-pre]' })
    ], TokenInputLabelPre);
    return TokenInputLabelPre;
}());
var TokenInputLabelPost = /** @class */ (function () {
    function TokenInputLabelPost() {
    }
    TokenInputLabelPost = __decorate$w([
        Directive({ selector: '[vcl-token-input-post]' })
    ], TokenInputLabelPost);
    return TokenInputLabelPost;
}());
var TokenInputContainerComponent = /** @class */ (function () {
    function TokenInputContainerComponent(elementRef, cdRef) {
        this.elementRef = elementRef;
        this.cdRef = cdRef;
        this.tokens = [];
        this.selectable = false;
        this.allowDuplicates = false;
        this.preselect = false;
        this.removeIcon = 'fa:times';
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
    __decorate$w([
        Input(),
        __metadata$j("design:type", Boolean)
    ], TokenInputContainerComponent.prototype, "selectable", void 0);
    __decorate$w([
        Input(),
        __metadata$j("design:type", Boolean)
    ], TokenInputContainerComponent.prototype, "allowDuplicates", void 0);
    __decorate$w([
        Input(),
        __metadata$j("design:type", Boolean)
    ], TokenInputContainerComponent.prototype, "preselect", void 0);
    __decorate$w([
        Input(),
        __metadata$j("design:type", String)
    ], TokenInputContainerComponent.prototype, "removeIcon", void 0);
    __decorate$w([
        Input(),
        __metadata$j("design:type", Boolean)
    ], TokenInputContainerComponent.prototype, "removeToken", void 0);
    __decorate$w([
        Input(),
        __metadata$j("design:type", Number)
    ], TokenInputContainerComponent.prototype, "tabindex", void 0);
    __decorate$w([
        Input(),
        __metadata$j("design:type", Object)
    ], TokenInputContainerComponent.prototype, "tokenClass", void 0);
    __decorate$w([
        Input(),
        __metadata$j("design:type", Object)
    ], TokenInputContainerComponent.prototype, "controlAsString", void 0);
    __decorate$w([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata$j("design:type", Object)
    ], TokenInputContainerComponent.prototype, "disabled", void 0);
    __decorate$w([
        Output(),
        __metadata$j("design:type", Object)
    ], TokenInputContainerComponent.prototype, "tokensChange", void 0);
    __decorate$w([
        Output(),
        __metadata$j("design:type", Object)
    ], TokenInputContainerComponent.prototype, "remove", void 0);
    __decorate$w([
        Output(),
        __metadata$j("design:type", Object)
    ], TokenInputContainerComponent.prototype, "confirm", void 0);
    __decorate$w([
        ContentChild(TokenInputLabelPre, { read: TemplateRef }),
        __metadata$j("design:type", TokenInputLabelPre)
    ], TokenInputContainerComponent.prototype, "labelPre", void 0);
    __decorate$w([
        ContentChild(TokenInputLabelPost, { read: TemplateRef }),
        __metadata$j("design:type", TokenInputLabelPost)
    ], TokenInputContainerComponent.prototype, "labelPost", void 0);
    TokenInputContainerComponent = __decorate$w([
        Component({
            selector: 'vcl-token-input-container',
            template: "<div class=\"vclTokenContainer\">\n  <wormhole *ngIf=\"labelPre\" [connect]=\"labelPre\"></wormhole>\n  <vcl-token *ngFor=\"let token of tokens\"\n             (remove)=\"onTokenRemove(token)\"\n             (click)=\"select(token)\"\n             [tokenIcon]=\"token.tokenIcon\"\n             [disabled]=\"disabled\"\n             [ngClass]=\"tokenClass\"\n             [selected]=\"token.selected\"\n             [removable]=\"true\"\n             [icon]=\"removeIcon\"\n             [attr.tabindex]=\"-1\"\n             [label]=\"token.label\">\n  </vcl-token>\n  <wormhole *ngIf=\"labelPost\" [connect]=\"labelPost\"></wormhole>\n</div>\n<ng-content></ng-content>\n",
            host: {
                '[class.vclInput]': 'true',
                '[class.vclTokenInput]': 'true',
                '[class.vclLayoutHorizontal]': 'true',
                '[class.vclLayoutWrap]': 'true',
                '[attr.tabindex]': '-1',
            },
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$5],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata$j("design:paramtypes", [ElementRef, ChangeDetectorRef])
    ], TokenInputContainerComponent);
    return TokenInputContainerComponent;
}());
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
    __decorate$w([
        Input(),
        __metadata$j("design:type", Object)
    ], TokenInputDirective.prototype, "addTokenOnEnter", void 0);
    __decorate$w([
        HostBinding('class.vclDisabled'),
        __metadata$j("design:type", Object),
        __metadata$j("design:paramtypes", [])
    ], TokenInputDirective.prototype, "classDisabled", null);
    __decorate$w([
        HostBinding('attr.disabled'),
        __metadata$j("design:type", Object),
        __metadata$j("design:paramtypes", [])
    ], TokenInputDirective.prototype, "attrDisabled", null);
    __decorate$w([
        HostListener('keydown', ['$event']),
        __metadata$j("design:type", Function),
        __metadata$j("design:paramtypes", [Object]),
        __metadata$j("design:returntype", void 0)
    ], TokenInputDirective.prototype, "onKeydown", null);
    __decorate$w([
        HostListener('keyup.enter', ['$event']),
        __metadata$j("design:type", Function),
        __metadata$j("design:paramtypes", [Object]),
        __metadata$j("design:returntype", void 0)
    ], TokenInputDirective.prototype, "onKeyPressEnter", null);
    TokenInputDirective = __decorate$w([
        Directive({
            selector: 'input[vcl-token-input]'
        }),
        __param$5(1, Self()),
        __param$5(2, SkipSelf()),
        __metadata$j("design:paramtypes", [ElementRef,
            InputDirective,
            TokenInputContainerComponent])
    ], TokenInputDirective);
    return TokenInputDirective;
}());

var __decorate$x = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLTokenModule = /** @class */ (function () {
    function VCLTokenModule() {
    }
    VCLTokenModule = __decorate$x([
        NgModule({
            imports: [CommonModule, VCLInputModule, VCLButtonModule$1, FormsModule, VCLIconModule, VCLIcogramModule, VCLWormholeModule],
            exports: [TokenComponent, TokenListComponent, TokenInputContainerComponent, TokenInputDirective, TokenInputLabelPost, TokenInputLabelPre],
            declarations: [TokenComponent, TokenListComponent, TokenInputContainerComponent, TokenInputDirective, TokenInputLabelPost, TokenInputLabelPre],
            providers: [],
        })
    ], VCLTokenModule);
    return VCLTokenModule;
}());

var __decorate$y = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$k = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SelectOption = /** @class */ (function () {
    function SelectOption() {
        this.disabled = false;
    }
    __decorate$y([
        ViewChild(TemplateRef),
        __metadata$k("design:type", TemplateRef)
    ], SelectOption.prototype, "content", void 0);
    __decorate$y([
        Input(),
        __metadata$k("design:type", Object)
    ], SelectOption.prototype, "value", void 0);
    __decorate$y([
        Input(),
        __metadata$k("design:type", String)
    ], SelectOption.prototype, "sublabel", void 0);
    __decorate$y([
        Input(),
        __metadata$k("design:type", String)
    ], SelectOption.prototype, "label", void 0);
    __decorate$y([
        Input(),
        __metadata$k("design:type", String)
    ], SelectOption.prototype, "prepIcon", void 0);
    __decorate$y([
        Input(),
        __metadata$k("design:type", String)
    ], SelectOption.prototype, "appIcon", void 0);
    __decorate$y([
        Input(),
        __metadata$k("design:type", String)
    ], SelectOption.prototype, "appIconSrc", void 0);
    __decorate$y([
        Input(),
        __metadata$k("design:type", String)
    ], SelectOption.prototype, "prepIconSrc", void 0);
    __decorate$y([
        Input(),
        __metadata$k("design:type", Boolean)
    ], SelectOption.prototype, "disabled", void 0);
    SelectOption = __decorate$y([
        Directive({
            selector: 'vcl-select-option'
        })
    ], SelectOption);
    return SelectOption;
}());

var __decorate$z = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$l = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter$1 = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$1 = (this && this.__generator) || function (thisArg, body) {
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
var DropDirection;
(function (DropDirection) {
    DropDirection[DropDirection["Top"] = 0] = "Top";
    DropDirection[DropDirection["Bottom"] = 1] = "Bottom";
})(DropDirection || (DropDirection = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$6 = {
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
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
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
        return __awaiter$1(this, void 0, void 0, function () {
            var tag, debug, position, screenHeight, spaceBottom, spaceTop, dropDirection;
            return __generator$1(this, function (_a) {
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
    __decorate$z([
        Input(),
        __metadata$l("design:type", Boolean)
    ], SelectComponent.prototype, "debug", void 0);
    __decorate$z([
        ViewChild('dropdown'),
        __metadata$l("design:type", DropdownComponent)
    ], SelectComponent.prototype, "dropdown", void 0);
    __decorate$z([
        ContentChildren(SelectOption),
        __metadata$l("design:type", QueryList)
    ], SelectComponent.prototype, "items", void 0);
    __decorate$z([
        ViewChild('select'),
        __metadata$l("design:type", ElementRef)
    ], SelectComponent.prototype, "select", void 0);
    __decorate$z([
        Input(),
        __metadata$l("design:type", String)
    ], SelectComponent.prototype, "mode", void 0);
    __decorate$z([
        Input(),
        __metadata$l("design:type", String)
    ], SelectComponent.prototype, "placeholder", void 0);
    __decorate$z([
        HostBinding('attr.tabindex'),
        Input(),
        __metadata$l("design:type", Object)
    ], SelectComponent.prototype, "tabindex", void 0);
    __decorate$z([
        Input(),
        __metadata$l("design:type", Boolean)
    ], SelectComponent.prototype, "expanded", void 0);
    __decorate$z([
        Input(),
        __metadata$l("design:type", Number)
    ], SelectComponent.prototype, "zIndex", void 0);
    __decorate$z([
        Input(),
        __metadata$l("design:type", Boolean)
    ], SelectComponent.prototype, "disabled", void 0);
    __decorate$z([
        Input(),
        __metadata$l("design:type", Boolean)
    ], SelectComponent.prototype, "listenKeys", void 0);
    __decorate$z([
        Input(),
        __metadata$l("design:type", Number)
    ], SelectComponent.prototype, "maxSelectableItems", void 0);
    __decorate$z([
        Input(),
        __metadata$l("design:type", String)
    ], SelectComponent.prototype, "expandedIcon", void 0);
    __decorate$z([
        Input(),
        __metadata$l("design:type", String)
    ], SelectComponent.prototype, "collapsedIcon", void 0);
    __decorate$z([
        Output('change'),
        __metadata$l("design:type", Object)
    ], SelectComponent.prototype, "change", void 0);
    __decorate$z([
        Input(),
        __metadata$l("design:type", Number)
    ], SelectComponent.prototype, "dropDirection", void 0);
    __decorate$z([
        Input(),
        __metadata$l("design:type", Object)
    ], SelectComponent.prototype, "value", void 0);
    __decorate$z([
        HostListener('keydown', ['$event']),
        __metadata$l("design:type", Function),
        __metadata$l("design:paramtypes", [Object]),
        __metadata$l("design:returntype", void 0)
    ], SelectComponent.prototype, "keydown", null);
    __decorate$z([
        HostListener('focus', ['$event']),
        __metadata$l("design:type", Function),
        __metadata$l("design:paramtypes", [Object]),
        __metadata$l("design:returntype", Promise)
    ], SelectComponent.prototype, "onFocus", null);
    __decorate$z([
        HostListener('blur', ['$event']),
        __metadata$l("design:type", Function),
        __metadata$l("design:paramtypes", [Object]),
        __metadata$l("design:returntype", void 0)
    ], SelectComponent.prototype, "onBlur", null);
    SelectComponent = SelectComponent_1 = __decorate$z([
        Component({
            selector: 'vcl-select',
            template: "<div (offClick)=\"close()\">\n  <div\n    #select\n    class=\"vclLayoutHorizontal vclSelect vclInputGroupEmb\"\n    [style.marginBottom]=\"0\"\n    >\n    <div *ngIf=\"showDisplayValue\" class=\"vclInput\" readonly [class.vclSelected]=\"focused\" (click)=\"toggle()\">\n      {{displayValue}}\n    </div>\n    <div *ngIf=\"!showDisplayValue\" class=\"vclInput vclTokenInput vclLayoutHorizontal vclLayoutWrap\" readonly [class.vclSelected]=\"focused\" (click)=\"toggle()\">\n      <vcl-token-list [disabled]=\"disabled\">\n        <vcl-token *ngFor=\"let item of selectedItems\" [label]=\"item.label\" [removable]=\"true\" (remove)=\"deselectItem(item.metaItem)\"></vcl-token>\n      </vcl-token-list>\n    </div>\n\n    <button vcl-button\n      [disabled]=\"disabled\"\n      type=\"button\"\n      tabindex=\"-1\"\n      class=\"vclTransparent vclAppended\"\n      [icon]=\"expanded ? expandedIcon : collapsedIcon\"\n      (click)=\"toggle()\">\n    </button>\n  </div>\n\n  <vcl-dropdown \n      #dropdown\n      tabindex=\"-1\"\n      [disabled]=\"disabled\"\n      [expanded]=\"expanded\"\n      [value]=\"value\"\n      [mode]=\"mode\"\n      [maxSelectableItems]=\"maxSelectableItems\"\n      [style.position]=\"'relative'\"\n      [style.top.px]=\"dropdownTop\"\n      [style.width]=\"'100%'\"\n      [style.position]=\"'absolute'\"\n      [style.zIndex]=\"zIndex\"\n      (change)=\"onDropdownChange($event)\"\n      (itemsChange)=\"onItemsChange()\"\n  >\n    <vcl-dropdown-option\n      *ngFor=\"let item of items\" \n      [metadata]=\"item\" \n      [value]=\"item.value\" \n      [disabled]=\"disabled || item.disabled\" \n      [label]=\"item.label\" \n      [sublabel]=\"item.sublabel\"\n      [prepIcon]=\"item.prepIcon\"\n      [appIcon]=\"item.appIcon\"\n      [appIconSrc]=\"item.appIconSrc\"\n      [prepIconSrc]=\"item.prepIconSrc\"\n      >\n    </vcl-dropdown-option>\n  </vcl-dropdown>\n</div>\n",
            // changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$6],
            host: {
                '[style.position]': '"relative"',
                '[style.display]': '"block"'
            }
        }),
        __metadata$l("design:paramtypes", [ElementRef,
            ChangeDetectorRef])
    ], SelectComponent);
    return SelectComponent;
    var SelectComponent_1;
}());

var __decorate$A = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLSelectModule = /** @class */ (function () {
    function VCLSelectModule() {
    }
    VCLSelectModule = __decorate$A([
        NgModule({
            imports: [CommonModule, VCLDropdownModule, VCLButtonModule$1, VCLOffClickModule, VCLPopoverModule$1, VCLTokenModule],
            exports: [SelectComponent, SelectOption],
            declarations: [SelectComponent, SelectOption],
            providers: []
        })
    ], VCLSelectModule);
    return VCLSelectModule;
}());

var __decorate$B = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$m = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$6 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var GroupButtonDirective = /** @class */ (function () {
    function GroupButtonDirective(buttonGroupContainer, host) {
        this.buttonGroupContainer = buttonGroupContainer;
        this.host = host;
        this.selected = false;
        this.select = new EventEmitter();
    }
    Object.defineProperty(GroupButtonDirective.prototype, "isDisabled", {
        get: function () {
            return this.host.disabled || this.buttonGroupContainer.disabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    GroupButtonDirective.prototype.onClick = function () {
        this.selected = !this.selected;
        this.select.emit(this.selected);
    };
    __decorate$B([
        HostBinding('class.vclDisabled'),
        HostBinding('attr.disabled'),
        __metadata$m("design:type", Object),
        __metadata$m("design:paramtypes", [])
    ], GroupButtonDirective.prototype, "isDisabled", null);
    __decorate$B([
        HostBinding('class.vclSelected'),
        __metadata$m("design:type", Boolean)
    ], GroupButtonDirective.prototype, "selected", void 0);
    __decorate$B([
        HostListener('click'),
        __metadata$m("design:type", Function),
        __metadata$m("design:paramtypes", []),
        __metadata$m("design:returntype", void 0)
    ], GroupButtonDirective.prototype, "onClick", null);
    GroupButtonDirective = __decorate$B([
        Directive({
            selector: 'button[vcl-button][vcl-button-group]',
        }),
        __param$6(0, SkipSelf()),
        __param$6(0, Inject(forwardRef(function () { return ButtonGroupComponent; }))),
        __metadata$m("design:paramtypes", [Object, ButtonDirective])
    ], GroupButtonDirective);
    return GroupButtonDirective;
}());
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$7 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ButtonGroupComponent; }),
    multi: true
};
var ButtonGroupComponent = /** @class */ (function () {
    function ButtonGroupComponent(cdRef) {
        this.cdRef = cdRef;
        this.disabled = false;
        // If `single`, a single item can be selected
        // If `multiple` multiple items can be selected
        this.mode = 'single';
        this.selectionChange = new EventEmitter();
        /**
       * things needed for ControlValueAccessor-Interface
       */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    ButtonGroupComponent.prototype.select = function (idx) {
        if (this.mode === 'multiple') {
            if (!Array.isArray(this.selectedIndex)) {
                this.selectedIndex = [];
            }
            if (this.selectedIndex.includes(idx)) {
                this.selectedIndex = this.selectedIndex.filter(function (thisIdx) { return thisIdx !== idx; });
            }
            else {
                this.selectedIndex = this.selectedIndex.concat([idx]);
            }
        }
        else {
            this.selectedIndex = idx;
        }
    };
    ButtonGroupComponent.prototype.syncButtons = function () {
        var selectedIndex = this.selectedIndex;
        if (this.buttons && this.mode === 'multiple' && Array.isArray(selectedIndex)) {
            this.buttons.forEach(function (btn, idx) {
                btn.selected = selectedIndex.includes(idx);
            });
        }
        else if (this.buttons && this.mode === 'single' && typeof selectedIndex === 'number') {
            this.buttons.forEach(function (btn, idx) {
                btn.selected = selectedIndex === idx;
            });
        }
    };
    ButtonGroupComponent.prototype.triggerChange = function () {
        this.selectionChange.emit(this.selectedIndex);
        this.onChange(this.selectedIndex);
    };
    ButtonGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.buttons && this.buttons.changes.pipe(startWith(null)).subscribe(function () {
            if (!_this.buttons) {
                return;
            }
            _this.dispose();
            // Subscribes to button click events
            var click$ = merge.apply(void 0, (_this.buttons.map(function (source, idx) { return source.select.pipe(map(function () { return idx; })); })));
            _this.pressSubscription = click$.subscribe(function (idx) {
                _this.select(idx);
                _this.syncButtons();
                _this.triggerChange();
                _this.onTouched();
            });
            _this.syncButtons();
        });
    };
    ButtonGroupComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    ButtonGroupComponent.prototype.dispose = function () {
        this.pressSubscription && this.pressSubscription.unsubscribe();
    };
    ButtonGroupComponent.prototype.writeValue = function (value) {
        this.selectedIndex = value;
        this.syncButtons();
        this.cdRef.markForCheck();
    };
    ButtonGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ButtonGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate$B([
        ContentChildren(GroupButtonDirective),
        __metadata$m("design:type", QueryList)
    ], ButtonGroupComponent.prototype, "buttons", void 0);
    __decorate$B([
        Input(),
        __metadata$m("design:type", Object)
    ], ButtonGroupComponent.prototype, "disabled", void 0);
    __decorate$B([
        Input(),
        __metadata$m("design:type", String)
    ], ButtonGroupComponent.prototype, "mode", void 0);
    __decorate$B([
        Output(),
        __metadata$m("design:type", Object)
    ], ButtonGroupComponent.prototype, "selectionChange", void 0);
    ButtonGroupComponent = __decorate$B([
        Component({
            selector: 'vcl-button-group',
            host: {
                '[class.vclButtonGroup]': 'true',
            },
            template: "<ng-content></ng-content>",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$7],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata$m("design:paramtypes", [ChangeDetectorRef])
    ], ButtonGroupComponent);
    return ButtonGroupComponent;
}());

var __decorate$C = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLButtonGroupModule = /** @class */ (function () {
    function VCLButtonGroupModule() {
    }
    VCLButtonGroupModule = __decorate$C([
        NgModule({
            imports: [CommonModule, VCLButtonModule$1],
            exports: [ButtonGroupComponent, GroupButtonDirective, VCLButtonModule$1],
            declarations: [ButtonGroupComponent, GroupButtonDirective],
            providers: [],
        })
    ], VCLButtonGroupModule);
    return VCLButtonGroupModule;
}());

var __extends$7 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LayerResult = /** @class */ (function (_super) {
    __extends$7(LayerResult, _super);
    function LayerResult(source, layerRef) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.layerRef = layerRef;
        return _this;
    }
    LayerResult.prototype.close = function (data) {
        this.layerRef.close();
    };
    LayerResult.prototype.closeWithError = function (data) {
        this.layerRef.closeWithError();
    };
    return LayerResult;
}(Observable));
var LayerRef = /** @class */ (function () {
    function LayerRef() {
        this.stateChange = new Subject();
        this.state$ = this.stateChange.asObservable();
    }
    LayerRef.prototype.open = function (attrs) {
        this.visible = true;
        this.attrs = attrs;
        this.stateChange.next({ attrs: attrs, visible: true });
        if (this.results) {
            this.results.complete();
        }
        this.results = new Subject();
        return new LayerResult(this.results, this);
    };
    LayerRef.prototype.close = function (data) {
        this.visible = false;
        this.stateChange.next({ visible: false });
        if (this.results) {
            if (data !== undefined) {
                this.results.next(data);
            }
            this.results.complete();
            this.results = undefined;
        }
    };
    LayerRef.prototype.closeWithError = function (data) {
        this.visible = false;
        this.stateChange.next({ visible: false });
        if (this.results) {
            this.results.error(data);
            this.results = undefined;
        }
    };
    LayerRef.prototype.send = function (data) {
        if (data !== undefined && this.results) {
            this.results.next(data);
        }
    };
    LayerRef.prototype.event = function (event) { };
    return LayerRef;
}());
var DynamicLayerRef = /** @class */ (function (_super) {
    __extends$7(DynamicLayerRef, _super);
    function DynamicLayerRef(_register, _unregister) {
        var _this = _super.call(this) || this;
        _this._register = _register;
        _this._unregister = _unregister;
        _this._registered = false;
        return _this;
    }
    DynamicLayerRef.prototype.open = function (attrs) {
        if (!this._registered) {
            this._register();
            this._registered = true;
        }
        return _super.prototype.open.call(this, attrs);
    };
    DynamicLayerRef.prototype.close = function (data) {
        _super.prototype.close.call(this, data);
        this._unregister();
        this._registered = false;
    };
    DynamicLayerRef.prototype.closeWithError = function (data) {
        _super.prototype.closeWithError.call(this, data);
        this._unregister();
        this._registered = false;
    };
    DynamicLayerRef.prototype.event = function (event) {
        if (this.results) {
            this.results.next(event);
        }
    };
    return DynamicLayerRef;
}(LayerRef));

var __decorate$D = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$n = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$7 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var COMPONENT_LAYER_ANNOTATION_ID = 'ng-vcl_component_layer';
var LAYER_ANIMATIONS = new InjectionToken('@ng-vcl/ng-vcl#layer_animations');
var LayerContainerComponent = /** @class */ (function () {
    function LayerContainerComponent(cdRef, builder, elementRef, animations) {
        this.cdRef = cdRef;
        this.zIndex = 1000;
        if (animations && animations.boxEnter) {
            this.boxEnterAnimationFactory = builder.build(animations.boxEnter);
        }
        if (animations && animations.boxLeave) {
            this.boxLeaveAnimationFactory = builder.build(animations.boxLeave);
        }
        if (animations && animations.coverEnter) {
            this.coverEnterAnimationFactory = builder.build(animations.coverEnter);
        }
        if (animations && animations.coverLeave) {
            this.coverLeaveAnimationFactory = builder.build(animations.coverLeave);
        }
    }
    Object.defineProperty(LayerContainerComponent.prototype, "layerAttrs", {
        set: function (layerAttrs) {
            this._layerAttrs = layerAttrs;
            if (this.wormhole && this.wormhole instanceof ComponentWormhole) {
                this.wormhole.setAttributes(this.mergedLayerAttrs);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerContainerComponent.prototype, "mergedLayerAttrs", {
        get: function () {
            return this.layerOpts.attrs ? Object.assign({}, this.layerOpts.attrs, this._layerAttrs) : this._layerAttrs;
        },
        enumerable: true,
        configurable: true
    });
    LayerContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var layer = this.layerRef;
        if (layer && this.layerContentContainer) {
            // Creates a wormhole out of the LayerRef
            if (this.layerTarget instanceof TemplateRef) {
                this.wormhole = new TemplateWormhole(this.layerTarget, this.layerContentContainer);
            }
            else {
                // The created injector injects this instance as LayerRef
                // It is used in the component instance created within the wormhole
                var layerInjector = ReflectiveInjector.resolveAndCreate([{
                        provide: LayerRef,
                        useValue: this.layerRef
                    }], this.layerInjector);
                this.wormhole = new ComponentWormhole(this.layerTarget, this.layerContentContainer, layerInjector);
            }
            if (!this.wormhole) {
                throw 'invalid layer';
            }
            this.eventSub = this.wormhole.connect(this.mergedLayerAttrs, this.layerOpts.events).subscribe(function (event) {
                _this.layerRef.event(event);
            });
            if (this.boxEnterAnimationFactory && this.box) {
                this.boxEnterAnimationFactory.create(this.box.nativeElement).play();
            }
            if (this.coverEnterAnimationFactory && this.cover) {
                var player_1 = this.coverEnterAnimationFactory.create(this.cover.nativeElement);
                player_1.onDone(function () { return player_1.destroy(); });
                player_1.play();
            }
        }
    };
    LayerContainerComponent.prototype.animateLeave = function () {
        var _this = this;
        return Promise.all([
            new Promise(function (resolve) {
                if (_this.boxLeaveAnimationFactory && _this.box) {
                    var player = _this.boxLeaveAnimationFactory.create(_this.box.nativeElement);
                    player.onDone(resolve);
                    player.play();
                }
                else {
                    resolve();
                }
            }),
            new Promise(function (resolve) {
                if (_this.coverLeaveAnimationFactory && _this.cover) {
                    var player_2 = _this.coverLeaveAnimationFactory.create(_this.cover.nativeElement);
                    player_2.onDone(function () {
                        player_2.destroy();
                        resolve();
                    });
                    player_2.play();
                }
                else {
                    resolve();
                }
            }),
        ]);
    };
    LayerContainerComponent.prototype.ngOnDestroy = function () {
        this.wormhole && this.wormhole.disconnect();
        this.eventSub && this.eventSub.unsubscribe();
    };
    LayerContainerComponent.prototype.triggerOffClick = function (event) {
        if (event.target === this.container.nativeElement) {
            if (this.layerOpts.offClick) {
                this.layerOpts.offClick(this.layerRef);
            }
            else {
                if (!this.layerOpts.modal) {
                    this.layerRef.close();
                }
            }
        }
    };
    __decorate$D([
        ViewChild('container'),
        __metadata$n("design:type", ElementRef)
    ], LayerContainerComponent.prototype, "container", void 0);
    __decorate$D([
        ViewChild('cover'),
        __metadata$n("design:type", ElementRef)
    ], LayerContainerComponent.prototype, "cover", void 0);
    __decorate$D([
        ViewChild('box'),
        __metadata$n("design:type", ElementRef)
    ], LayerContainerComponent.prototype, "box", void 0);
    __decorate$D([
        Input(),
        __metadata$n("design:type", LayerRef)
    ], LayerContainerComponent.prototype, "layerRef", void 0);
    __decorate$D([
        Input(),
        __metadata$n("design:type", Object)
    ], LayerContainerComponent.prototype, "layerOpts", void 0);
    __decorate$D([
        Input(),
        __metadata$n("design:type", Object)
    ], LayerContainerComponent.prototype, "layerTarget", void 0);
    __decorate$D([
        Input(),
        __metadata$n("design:type", Object)
    ], LayerContainerComponent.prototype, "layerInjector", void 0);
    __decorate$D([
        Input(),
        __metadata$n("design:type", Object),
        __metadata$n("design:paramtypes", [Object])
    ], LayerContainerComponent.prototype, "layerAttrs", null);
    __decorate$D([
        Input(),
        __metadata$n("design:type", Object)
    ], LayerContainerComponent.prototype, "zIndex", void 0);
    __decorate$D([
        ViewChild('layerContent', { read: ViewContainerRef }),
        __metadata$n("design:type", ViewContainerRef)
    ], LayerContainerComponent.prototype, "layerContentContainer", void 0);
    LayerContainerComponent = __decorate$D([
        Component({
            template: "<div \n  #container \n  class=\"vclLayer\"\n  [ngClass]=\"layerOpts.customClass\"\n  [class.vclTransparent]=\"layerOpts.transparent\"\n  [class.vclLayerFill]=\"layerOpts.fill\"\n  [class.vclLayerStickToBottom]=\"layerOpts.stickToBottom\"\n  [style.z-index]=\"zIndex + 1\"\n  [style.pointer-events]=\"'all'\" \n  role=\"dialog\" \n  (click)='triggerOffClick($event)'\n  >\n  <div *ngIf=\"layerOpts.noLayerBox\" #layerContent></div>\n  <div *ngIf=\"!layerOpts.noLayerBox\" #box class=\"vclLayerBox\" [class.vclLayerGutterPadding]=\"layerOpts.gutterPadding\" [style.pointer-events]=\"'all'\" [style.z-index]=\"zIndex + 2\">\n    <div #layerContent></div>\n  </div>\n</div>\n<div #cover *ngIf=\"layerOpts.modal\" class=\"vclLayerCover\" [style.z-index]=\"zIndex\"></div>\n"
        }),
        __param$7(3, Optional()), __param$7(3, Inject(LAYER_ANIMATIONS)),
        __metadata$n("design:paramtypes", [ChangeDetectorRef,
            AnimationBuilder,
            ElementRef, Object])
    ], LayerContainerComponent);
    return LayerContainerComponent;
}());

var __decorate$E = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$o = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LayerManagerService = /** @class */ (function () {
    function LayerManagerService(appRef, injector) {
        this.injector = injector;
        this.layerMetaMap = new Map();
        this.baseZIndex = 1000;
        this.visibleLayers = [];
        this.host = new DomWormholeHost(appRef, undefined, injector);
    }
    Object.defineProperty(LayerManagerService.prototype, "currentZIndex", {
        get: function () {
            return this.baseZIndex + (this.visibleLayers.length * 10);
        },
        enumerable: true,
        configurable: true
    });
    LayerManagerService.prototype.addVisibleLayer = function (layer) {
        this.visibleLayers = this.visibleLayers.concat([layer]);
    };
    LayerManagerService.prototype.removeVisibleLayer = function (layer) {
        this.visibleLayers = this.visibleLayers.filter(function (l) { return l !== layer; });
    };
    LayerManagerService.prototype._register = function (layerRef, target, injector, opts) {
        var _this = this;
        var containerWormholeRef = this.host.createWormhole(LayerContainerComponent);
        var layerSub = layerRef.state$.subscribe(function (state$$1) {
            if (state$$1.visible && !containerWormholeRef.isConnected) {
                containerWormholeRef.connect({
                    layerRef: layerRef,
                    layerAttrs: state$$1.attrs,
                    layerOpts: opts || {},
                    layerTarget: target,
                    layerInjector: injector,
                    zIndex: _this.currentZIndex,
                });
                _this.addVisibleLayer(layerRef);
            }
            else if (state$$1.visible) {
                containerWormholeRef.setAttributes({
                    layerAttrs: state$$1.attrs
                });
            }
            else {
                if (containerWormholeRef.compInstance) {
                    containerWormholeRef.compInstance.animateLeave().then(function () {
                        containerWormholeRef.disconnect();
                        _this.removeVisibleLayer(layerRef);
                    });
                }
            }
        });
        this.layerMetaMap.set(layerRef, { wormhole: containerWormholeRef, subscription: layerSub });
    };
    LayerManagerService.prototype._unregister = function (layer) {
        var meta = this.layerMetaMap.get(layer);
        if (meta) {
            meta.wormhole.disconnect();
            meta.subscription.unsubscribe();
        }
    };
    LayerManagerService.prototype.ngOnDestroy = function () {
        var _this = this;
        this.layerMetaMap.forEach(function (meta, layer) { return _this._unregister(layer); });
        this.host.clearWormholes();
    };
    LayerManagerService = __decorate$E([
        Injectable(),
        __metadata$o("design:paramtypes", [ApplicationRef, Injector])
    ], LayerManagerService);
    return LayerManagerService;
}());

var __decorate$F = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$p = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LayerService = /** @class */ (function () {
    function LayerService(layerManager, injector) {
        this.layerManager = layerManager;
        this.injector = injector;
    }
    LayerService.prototype.hasVisibleLayers = function () {
        return this.layerManager.visibleLayers.length > 0;
    };
    LayerService.prototype.getVisibleLayers = function () {
        return this.layerManager.visibleLayers.slice();
    };
    LayerService.prototype.getTopLayer = function () {
        return this.layerManager.visibleLayers.slice().pop();
    };
    LayerService.prototype.closeAll = function () {
        this.layerManager.visibleLayers.forEach(function (layer) { return layer.close(); });
    };
    LayerService.prototype.closeTop = function () {
        var topLayer = this.getTopLayer();
        if (topLayer) {
            topLayer.close();
        }
    };
    LayerService.prototype.create = function (component, opts) {
        var _this = this;
        var layerRef = new DynamicLayerRef(function () {
            _this.layerManager._register(layerRef, component, _this.injector, opts);
        }, function () {
            _this.layerManager._unregister(layerRef);
        });
        return layerRef;
    };
    LayerService.prototype.open = function (component, attrs, opts) {
        var layerRef = this.create(component, opts);
        layerRef.open(attrs);
        return layerRef;
    };
    LayerService = __decorate$F([
        Injectable(),
        __metadata$p("design:paramtypes", [LayerManagerService, Injector])
    ], LayerService);
    return LayerService;
}());

var __extends$8 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$G = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$q = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LayerRefDirective = /** @class */ (function (_super) {
    __extends$8(LayerRefDirective, _super);
    function LayerRefDirective(templateRef, layerManager, injector) {
        var _this = _super.call(this) || this;
        _this.templateRef = templateRef;
        _this.layerManager = layerManager;
        _this.injector = injector;
        return _this;
    }
    LayerRefDirective.prototype.ngOnInit = function () {
        this.layerManager._register(this, this.templateRef, this.injector, this);
    };
    LayerRefDirective.prototype.ngOnDestroy = function () {
        this.layerManager._unregister(this);
    };
    LayerRefDirective.prototype.event = function (event) {
        // Not required for template components
    };
    __decorate$G([
        Input(),
        __metadata$q("design:type", Boolean)
    ], LayerRefDirective.prototype, "modal", void 0);
    __decorate$G([
        Input(),
        __metadata$q("design:type", Boolean)
    ], LayerRefDirective.prototype, "transparent", void 0);
    __decorate$G([
        Input(),
        __metadata$q("design:type", Boolean)
    ], LayerRefDirective.prototype, "fill", void 0);
    __decorate$G([
        Input(),
        __metadata$q("design:type", Boolean)
    ], LayerRefDirective.prototype, "stickToBottom", void 0);
    __decorate$G([
        Input(),
        __metadata$q("design:type", Boolean)
    ], LayerRefDirective.prototype, "gutterPadding", void 0);
    __decorate$G([
        Input(),
        __metadata$q("design:type", String)
    ], LayerRefDirective.prototype, "customClass", void 0);
    __decorate$G([
        Input(),
        __metadata$q("design:type", Boolean)
    ], LayerRefDirective.prototype, "noLayerBox", void 0);
    LayerRefDirective = __decorate$G([
        Directive({
            selector: '[vcl-layer]',
            exportAs: 'layer',
        }),
        __metadata$q("design:paramtypes", [TemplateRef, LayerManagerService, Injector])
    ], LayerRefDirective);
    return LayerRefDirective;
}(LayerRef));

var __decorate$H = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$r = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$8 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LAYERS = new InjectionToken('@ng-vcl/ng-vcl#layers');
// The @Layer annotation
function Layer(component, opts) {
    return function (target) {
        Injectable()(target);
        defineMetadata(COMPONENT_LAYER_ANNOTATION_ID, { component: component, opts: opts }, target);
    };
}
var VCLLayerModule = /** @class */ (function () {
    function VCLLayerModule(layers, layerManager, injector) {
        if (layers) {
            // Flatten and filter layer classes
            layers = [].concat.apply([], layers).filter(function (layerCls) { return layerCls !== undefined; });
            layers.forEach(function (layerCls) {
                var layerMeta = getMetadata(COMPONENT_LAYER_ANNOTATION_ID, layerCls);
                var layerRef = injector.get(layerCls);
                if (layerMeta && layerRef) {
                    layerManager._register(layerRef, layerMeta.component, injector, layerMeta.opts);
                }
            });
        }
    }
    VCLLayerModule_1 = VCLLayerModule;
    VCLLayerModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return { ngModule: VCLLayerModule_1, providers: [
                LayerService,
                LayerManagerService
            ].concat((config.layers || []), [
                {
                    provide: LayerRef,
                    useValue: undefined
                },
                {
                    provide: LAYERS,
                    useValue: config.layers,
                    multi: true
                }
            ]) };
    };
    VCLLayerModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: VCLLayerModule_1,
            providers: [
                LayerService
            ].concat((config.layers || []), [
                {
                    provide: LAYERS,
                    useValue: config.layers,
                    multi: true
                }
            ])
        };
    };
    VCLLayerModule = VCLLayerModule_1 = __decorate$H([
        NgModule({
            imports: [
                CommonModule,
                VCLWormholeModule
            ],
            exports: [LayerRefDirective, LayerContainerComponent],
            declarations: [LayerRefDirective, LayerContainerComponent],
            entryComponents: [LayerContainerComponent],
            providers: []
        }),
        __param$8(0, Inject(LAYERS)),
        __metadata$r("design:paramtypes", [Array, LayerManagerService,
            Injector])
    ], VCLLayerModule);
    return VCLLayerModule;
    var VCLLayerModule_1;
}());

var __decorate$I = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$s = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TabLabelDirective = /** @class */ (function () {
    function TabLabelDirective() {
    }
    TabLabelDirective = __decorate$I([
        Directive({ selector: '[vcl-tab-label]' })
    ], TabLabelDirective);
    return TabLabelDirective;
}());
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.disabled = false;
        this.tabClass = '';
    }
    __decorate$I([
        ContentChild(TabLabelDirective, { read: TemplateRef }),
        __metadata$s("design:type", TabLabelDirective)
    ], TabComponent.prototype, "label", void 0);
    __decorate$I([
        ViewChild(TemplateRef),
        __metadata$s("design:type", TemplateRef)
    ], TabComponent.prototype, "content", void 0);
    __decorate$I([
        Input(),
        __metadata$s("design:type", Object)
    ], TabComponent.prototype, "disabled", void 0);
    __decorate$I([
        Input(),
        __metadata$s("design:type", String)
    ], TabComponent.prototype, "tabClass", void 0);
    TabComponent = __decorate$I([
        Component({
            selector: 'vcl-tab',
            template: '<ng-template><ng-content></ng-content></ng-template>'
        })
    ], TabComponent);
    return TabComponent;
}());

var __decorate$J = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$t = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TabNavComponent = /** @class */ (function () {
    function TabNavComponent() {
        this.layout = '';
        this.tabbableClass = '';
        this.tabsClass = '';
        this.tabContentClass = '';
        this.hideContent = false;
        // Sets vclTabStyleUni on vclTabs and removes vclNoBorder on vclTabContent when true
        this.borders = false;
        this.selectedTabIndex = 0;
        this.selectedTabIndexChange$ = new EventEmitter();
    }
    Object.defineProperty(TabNavComponent.prototype, "tabContent", {
        set: function (tabContent) {
            if (tabContent) {
                this.wormholeHost = new WormholeHost(tabContent);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabNavComponent.prototype, "selectedTabIndexChange", {
        get: function () {
            return this.selectedTabIndexChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // Sets a valid selectedTabIndex
    TabNavComponent.prototype.selectTab = function (tab) {
        if (!this.tabs) {
            return;
        }
        var tabs = this.tabs.toArray();
        var tabIdx;
        var tabComp;
        if (tab instanceof TabComponent) {
            tabIdx = tabs.indexOf(tab);
            tabComp = tab;
        }
        else if (typeof tab === 'number' && tabs[tab]) {
            tabIdx = tab;
            tabComp = tabs[tabIdx];
        }
        else {
            tabIdx = -1;
            tabComp = null;
        }
        if (tabIdx >= 0 && tabComp instanceof TabComponent && !tabComp.disabled) {
            if (this.wormholeHost) {
                this.wormholeHost.clearWormholes();
                this.wormholeHost.connectWormhole(tabComp.content);
            }
            this.selectedTabIndex = tabIdx;
        }
    };
    TabNavComponent.prototype.onTabClick = function (tab) {
        this.selectTab(tab);
        this.selectedTabIndexChange$.emit(this.selectedTabIndex);
    };
    TabNavComponent.prototype.ngAfterContentInit = function () {
        this.selectTab(this.selectedTabIndex);
    };
    TabNavComponent.prototype.ngOnDestroy = function () {
        if (this.wormholeHost) {
            this.wormholeHost.clearWormholes();
        }
    };
    __decorate$J([
        ViewChild('tabContent', { read: ViewContainerRef }),
        __metadata$t("design:type", Object),
        __metadata$t("design:paramtypes", [Object])
    ], TabNavComponent.prototype, "tabContent", null);
    __decorate$J([
        ContentChildren(TabComponent),
        __metadata$t("design:type", QueryList)
    ], TabNavComponent.prototype, "tabs", void 0);
    __decorate$J([
        Input(),
        __metadata$t("design:type", String)
    ], TabNavComponent.prototype, "layout", void 0);
    __decorate$J([
        Input(),
        __metadata$t("design:type", String)
    ], TabNavComponent.prototype, "tabbableClass", void 0);
    __decorate$J([
        Input(),
        __metadata$t("design:type", String)
    ], TabNavComponent.prototype, "tabsClass", void 0);
    __decorate$J([
        Input(),
        __metadata$t("design:type", String)
    ], TabNavComponent.prototype, "tabContentClass", void 0);
    __decorate$J([
        Input(),
        __metadata$t("design:type", Object)
    ], TabNavComponent.prototype, "hideContent", void 0);
    __decorate$J([
        Input(),
        __metadata$t("design:type", Boolean)
    ], TabNavComponent.prototype, "borders", void 0);
    __decorate$J([
        Input(),
        __metadata$t("design:type", Number)
    ], TabNavComponent.prototype, "selectedTabIndex", void 0);
    __decorate$J([
        Output(),
        __metadata$t("design:type", Observable),
        __metadata$t("design:paramtypes", [])
    ], TabNavComponent.prototype, "selectedTabIndexChange", null);
    TabNavComponent = __decorate$J([
        Component({
            selector: 'vcl-tab-nav',
            template: "<div class=\"vclTabbable {{tabbableClass}}\"\n     [class.vclTabsLeft]=\"layout==='left'\"\n     [class.vclTabsRight]=\"layout==='right'\">\n  <div class=\"vclTabs {{tabsClass}}\" [class.vclTabStyleUni]=\"!!borders\" role=\"tablist\">\n    <div *ngFor=\"let tab of tabs; let i = index\"\n         class=\"vclTab {{tab.tabClass}}\" \n         role=\"tab\"\n         [class.vclDisabled]=\"tab.disabled\"\n         [class.vclSelected]=\"selectedTabIndex===i\"\n         [class.aria-selected]=\"selectedTabIndex===i\"\n         (click)=\"onTabClick(tab)\">\n        <span class=\"vclTabLabel\"> \n          <wormhole [connect]=\"tab.label\"></wormhole>\n        </span>\n    </div>\n  </div>\n  <div [style.display]=\"hideContent === true ? 'none' : null\" class=\"vclTabContent {{tabContentClass}}\" [class.vclNoBorder]=\"!borders\">\n      <div role=\"tabpanel\" class=\"vclTabPanel\">\n          <div #tabContent></div>\n    </div>\n    <div role=\"tabpanel\" class=\"vclTabPanel\">\n        <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n"
        })
    ], TabNavComponent);
    return TabNavComponent;
}());

var __decorate$K = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLTabNavModule = /** @class */ (function () {
    function VCLTabNavModule() {
    }
    VCLTabNavModule = __decorate$K([
        NgModule({
            imports: [CommonModule, VCLWormholeModule],
            exports: [TabComponent, TabLabelDirective, TabNavComponent],
            declarations: [TabComponent, TabLabelDirective, TabNavComponent],
            providers: [],
        })
    ], VCLTabNavModule);
    return VCLTabNavModule;
}());

var __decorate$L = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$u = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LinkComponent = /** @class */ (function () {
    function LinkComponent() {
        this.disabled = false;
    }
    Object.defineProperty(LinkComponent.prototype, "styleCursor", {
        get: function () {
            return this.disabled ? 'not-allowed' : 'pointer';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkComponent.prototype, "attrHref", {
        get: function () {
            return this.disabled ? undefined : this.href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkComponent.prototype, "useIcogram", {
        get: function () {
            return (this.appIcon || this.prepIcon);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$L([
        HostBinding('attr.title'),
        HostBinding('attr.aria-label'),
        Input(),
        __metadata$u("design:type", Object)
    ], LinkComponent.prototype, "title", void 0);
    __decorate$L([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata$u("design:type", Boolean)
    ], LinkComponent.prototype, "disabled", void 0);
    __decorate$L([
        HostBinding('style.cursor'),
        __metadata$u("design:type", Object),
        __metadata$u("design:paramtypes", [])
    ], LinkComponent.prototype, "styleCursor", null);
    __decorate$L([
        Input(),
        __metadata$u("design:type", Object)
    ], LinkComponent.prototype, "href", void 0);
    __decorate$L([
        Input(),
        __metadata$u("design:type", Object)
    ], LinkComponent.prototype, "label", void 0);
    __decorate$L([
        Input(),
        __metadata$u("design:type", Object)
    ], LinkComponent.prototype, "prepIcon", void 0);
    __decorate$L([
        Input(),
        __metadata$u("design:type", Object)
    ], LinkComponent.prototype, "appIcon", void 0);
    __decorate$L([
        HostBinding('attr.href'),
        __metadata$u("design:type", Object),
        __metadata$u("design:paramtypes", [])
    ], LinkComponent.prototype, "attrHref", null);
    __decorate$L([
        HostBinding('class.vclContentLink'),
        __metadata$u("design:type", Object),
        __metadata$u("design:paramtypes", [])
    ], LinkComponent.prototype, "useIcogram", null);
    LinkComponent = __decorate$L([
        Component({
            selector: 'a[vcl-link]',
            template: "<span vcl-icogram\n  [label]=\"label || href\"\n  [prepIcon]=\"prepIcon\"\n  [appIcon]=\"appIcon\">\n  <ng-content></ng-content>\n</span>\n"
        })
    ], LinkComponent);
    return LinkComponent;
}());

var __decorate$M = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLLinkModule = /** @class */ (function () {
    function VCLLinkModule() {
    }
    VCLLinkModule = __decorate$M([
        NgModule({
            imports: [CommonModule, VCLIcogramModule],
            exports: [LinkComponent],
            declarations: [LinkComponent],
            providers: [],
        })
    ], VCLLinkModule);
    return VCLLinkModule;
}());

var __decorate$N = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$v = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$9 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NavigationItemDirective = /** @class */ (function () {
    function NavigationItemDirective(router, nav, parent) {
        this.router = router;
        this.nav = nav;
        this.parent = parent;
        this.selected = false;
        this.selectable = true;
        this.opened = false;
        this.heading = false;
        this.exactRoute = true;
        this.showActive = false;
        this.onHover = new EventEmitter();
        this.onLeave = new EventEmitter();
    }
    NavigationItemDirective_1 = NavigationItemDirective;
    Object.defineProperty(NavigationItemDirective.prototype, "items", {
        get: function () {
            var _this = this;
            return (this.contentItems && this.contentItems.filter(function (item) { return item !== _this; })) || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItemDirective.prototype, "route", {
        get: function () {
            return this._route;
        },
        set: function (route) {
            this._route = Array.isArray(route) ? route : [route];
            this._urlTree = this.router.createUrlTree(this._route);
        },
        enumerable: true,
        configurable: true
    });
    NavigationItemDirective.prototype.updateSelectedState = function () {
        this.selected = !!this._urlTree && this.router.isActive(this._urlTree, this.exactRoute);
        if (this.selected) {
            this.openParents();
        }
    };
    NavigationItemDirective.prototype.openParents = function () {
        var openParents = function (item) {
            if (item.parent) {
                item.parent.opened = true;
                openParents(item.parent);
            }
        };
        openParents(this);
    };
    NavigationItemDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.nav.useRouter) {
            if (this.router.navigated) {
                this.updateSelectedState();
            }
            this._subscription = this.router.events.subscribe(function (s) {
                if (s instanceof NavigationEnd) {
                    _this.updateSelectedState();
                }
            });
        }
    };
    NavigationItemDirective.prototype.ngOnDestroy = function () {
        this._subscription && this._subscription.unsubscribe();
    };
    Object.defineProperty(NavigationItemDirective.prototype, "calcPrepIcon", {
        get: function () {
            return this.items && this.items.length > 0 && this.nav.subLevelHintIconSide === 'left' ? (this.opened ? this.nav.subLevelHintIconOpened : this.nav.subLevelHintIconClosed) : this.prepIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItemDirective.prototype, "calcAppIcon", {
        get: function () {
            return this.items && this.items.length > 0 && this.nav.subLevelHintIconSide === 'right' ? (this.opened ? this.nav.subLevelHintIconOpened : this.nav.subLevelHintIconClosed) : this.appIcon;
        },
        enumerable: true,
        configurable: true
    });
    NavigationItemDirective.prototype.mouseOver = function () {
        this.onHover.emit(this);
    };
    NavigationItemDirective.prototype.mouseLeave = function () {
        this.onLeave.emit(this);
    };
    __decorate$N([
        Input(),
        __metadata$v("design:type", String)
    ], NavigationItemDirective.prototype, "label", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", String)
    ], NavigationItemDirective.prototype, "name", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Boolean)
    ], NavigationItemDirective.prototype, "selectable", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Boolean)
    ], NavigationItemDirective.prototype, "opened", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Object)
    ], NavigationItemDirective.prototype, "heading", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Object)
    ], NavigationItemDirective.prototype, "prepIcon", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Object)
    ], NavigationItemDirective.prototype, "appIcon", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Object)
    ], NavigationItemDirective.prototype, "class", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Object)
    ], NavigationItemDirective.prototype, "href", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Boolean)
    ], NavigationItemDirective.prototype, "exactRoute", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Boolean)
    ], NavigationItemDirective.prototype, "showActive", void 0);
    __decorate$N([
        Output(),
        __metadata$v("design:type", Object)
    ], NavigationItemDirective.prototype, "onHover", void 0);
    __decorate$N([
        Output(),
        __metadata$v("design:type", Object)
    ], NavigationItemDirective.prototype, "onLeave", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Object),
        __metadata$v("design:paramtypes", [Object])
    ], NavigationItemDirective.prototype, "route", null);
    __decorate$N([
        ContentChildren(NavigationItemDirective_1),
        __metadata$v("design:type", QueryList)
    ], NavigationItemDirective.prototype, "contentItems", void 0);
    NavigationItemDirective = NavigationItemDirective_1 = __decorate$N([
        Directive({
            selector: 'vcl-navitem'
        }),
        __param$9(1, Inject(forwardRef(function () { return NavigationComponent; }))),
        __param$9(2, Optional()), __param$9(2, SkipSelf()), __param$9(2, Inject(NavigationItemDirective_1)),
        __metadata$v("design:paramtypes", [Router, Object, Object])
    ], NavigationItemDirective);
    return NavigationItemDirective;
    var NavigationItemDirective_1;
}());
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        this.router = router;
        this.ariaRole = 'presentation';
        this.tabindex = 0;
        this.type = 'vertical';
        this.useRouter = false;
        this.subLevelHintIconClosed = 'fa:chevron-right';
        this.subLevelHintIconOpened = 'fa:chevron-down';
        this.subLevelHintIconSide = 'right';
        this.select = new EventEmitter();
        this.navigate = new EventEmitter();
    }
    Object.defineProperty(NavigationComponent.prototype, "navigationItems", {
        get: function () {
            return this.inputItems || this.contentItems || [];
        },
        enumerable: true,
        configurable: true
    });
    NavigationComponent.prototype.runItems = function (cb) {
        var runItems = function (items) {
            items.forEach(function (item) {
                cb(item);
                if (item.items) {
                    runItems(item.items);
                }
            });
        };
        runItems(this.navigationItems);
    };
    NavigationComponent.prototype.selectRoute = function (route, openParents) {
        var _this = this;
        if (openParents === void 0) { openParents = true; }
        this.runItems(function (item) {
            if (item.route) {
                // TODO should use containsTree from @angular/router for comparison
                // currently not exposed as public api
                item.selected = item.route.length === route.length && item.route.every(function (v, i) { return v === route[i]; });
                if (item.selected) {
                    _this.selectedItem = item;
                    if (openParents) {
                        item.openParents();
                    }
                }
            }
        });
    };
    NavigationComponent.prototype.selectItem = function (item) {
        if (item.items && item.items.length > 0) {
            item.opened = !item.opened;
            return;
        }
        if (!item.selectable) {
            return;
        }
        if (this.selectedItem) {
            this.selectedItem.selected = false;
        }
        item.selected = true;
        this.selectedItem = item;
        if (item.href) {
            window.location.href = item.href;
        }
        else if (item.route) {
            if (this.useRouter) {
                this.router.navigate(item.route);
            }
            else {
                this.navigate.emit(item.route);
            }
        }
        this.select.emit(item);
    };
    NavigationComponent.prototype.onSubItemSelect = function (item) {
        this.selectItem(item);
    };
    NavigationComponent.prototype.mouseOver = function (item) {
        item.mouseOver();
    };
    NavigationComponent.prototype.mouseLeave = function (item) {
        item.mouseLeave();
    };
    __decorate$N([
        Input(),
        __metadata$v("design:type", String)
    ], NavigationComponent.prototype, "ident", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", String)
    ], NavigationComponent.prototype, "ariaRole", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Number)
    ], NavigationComponent.prototype, "tabindex", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", String)
    ], NavigationComponent.prototype, "type", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Object)
    ], NavigationComponent.prototype, "useRouter", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", String)
    ], NavigationComponent.prototype, "subLevelHintIconClosed", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", String)
    ], NavigationComponent.prototype, "subLevelHintIconOpened", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", String)
    ], NavigationComponent.prototype, "subLevelHintIconSide", void 0);
    __decorate$N([
        Input(),
        __metadata$v("design:type", Object)
    ], NavigationComponent.prototype, "inputItems", void 0);
    __decorate$N([
        Output(),
        __metadata$v("design:type", Object)
    ], NavigationComponent.prototype, "select", void 0);
    __decorate$N([
        Output(),
        __metadata$v("design:type", Object)
    ], NavigationComponent.prototype, "navigate", void 0);
    __decorate$N([
        ContentChildren(NavigationItemDirective),
        __metadata$v("design:type", QueryList)
    ], NavigationComponent.prototype, "contentItems", void 0);
    NavigationComponent = __decorate$N([
        Component({
            selector: 'nav[vcl-navigation]',
            host: {
                '[class.vclNavigation]': 'true'
            },
            template: "<ul [class.vclLayoutHorizontal]=\"type === 'horizontal'\">\n  <li *ngFor=\"let item of navigationItems\"\n      [class.vclSelected]=\"(item.showActive || item.selectable) && item.selected\"\n      [class.vclOpen]=\"item.opened\"\n      [class.vclClose]=\"!item.opened\"\n      [class.vclNavigationHeading]=\"item.heading\"\n      [class.vclNavigationItem]=\"!item.heading\"\n      [attr.aria-selected]=\"item.selectable && item.selected\"\n      [attr.role]=\"item.heading && 'sectionhead' || ariaRole\"\n      [attr.tabindex]=\"tabindex\"\n      [ngClass]=\"item.class\"\n      (mouseleave)=\"mouseLeave(item)\"\n      (mouseover)=\"mouseOver(item)\">\n\n      <span *ngIf=\"item.heading\">\n        {{item.label}}\n      </span>\n\n    <a vcl-link class=\"vclNavigationItemLabel\"\n       *ngIf=\"!item.heading\"\n       [label]=\"item.label\"\n       [prepIcon]=\"item.calcPrepIcon\"\n       [appIcon]=\"item.calcAppIcon\"\n       (click)=\"selectItem(item)\">\n    </a>\n\n    <nav vcl-navigation *ngIf=\"item.items && item.items.length > 0\"\n         [inputItems]=\"item.items\"\n         [type]=\"type\"\n         [useRouter]=\"useRouter\"\n         [subLevelHintIconOpened]=\"subLevelHintIconOpened\"\n         [subLevelHintIconClosed]=\"subLevelHintIconClosed\"\n         [subLevelHintIconSide]=\"subLevelHintIconSide\"\n         (select)=\"onSubItemSelect($event)\">\n    </nav>\n  </li>\n</ul>\n"
        }),
        __metadata$v("design:paramtypes", [Router])
    ], NavigationComponent);
    return NavigationComponent;
}());

var __decorate$O = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLNavigationModule = /** @class */ (function () {
    function VCLNavigationModule() {
    }
    VCLNavigationModule = __decorate$O([
        NgModule({
            imports: [CommonModule, VCLLinkModule],
            exports: [NavigationComponent, NavigationItemDirective],
            declarations: [NavigationComponent, NavigationItemDirective],
            providers: [],
        })
    ], VCLNavigationModule);
    return VCLNavigationModule;
}());

var __decorate$P = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$w = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.ariaLevel = 1;
    }
    __decorate$P([
        Input(),
        __metadata$w("design:type", Number)
    ], ToolbarComponent.prototype, "ariaLevel", void 0);
    ToolbarComponent = __decorate$P([
        Component({
            selector: 'vcl-toolbar',
            template: '<ng-content></ng-content>',
            host: {
                '[class.vclToolbar]': 'true',
                '[class.vclLayoutHorizontal]': 'true',
                '[class.vclLayoutJustified]': 'true',
                '[class.vclSecondary]': 'ariaLevel == 2',
                '[attr.aria-level]': 'ariaLevel',
                '[attr.role]': '"menubar"',
            }
        }),
        __metadata$w("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());

var __decorate$Q = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLToolbarModule = /** @class */ (function () {
    function VCLToolbarModule() {
    }
    VCLToolbarModule = __decorate$Q([
        NgModule({
            imports: [CommonModule],
            exports: [ToolbarComponent],
            declarations: [ToolbarComponent],
            providers: [],
        })
    ], VCLToolbarModule);
    return VCLToolbarModule;
}());

var __decorate$R = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$x = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.minValue = 0;
        this.maxValue = 100;
        this.indeterminate = false;
        this.speed = 1;
    }
    Object.defineProperty(ProgressBarComponent.prototype, "showIndeterminate", {
        get: function () {
            return this.indeterminate && !this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "showValue", {
        get: function () {
            return !this.indeterminate || this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "showSecondaryValue", {
        get: function () {
            return this.validateValue(this.secondaryValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "transformValue", {
        get: function () {
            var value = this.validateValue(this.value) ? this.scaleValue(this.value) : 0;
            return "scaleX(" + value + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "transformSecondaryValue", {
        get: function () {
            var value = this.validateValue(this.secondaryValue) ? this.scaleValue(this.secondaryValue) : 0;
            return "scaleX(" + value + ")";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "animationDurationValue", {
        get: function () {
            var value = this.isNumber(this.speed) ? this.speed : 1;
            return value + "s";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "range", {
        get: function () {
            return this.maxValue - this.minValue;
        },
        enumerable: true,
        configurable: true
    });
    ProgressBarComponent.prototype.scaleValue = function (value) {
        return (value - this.minValue) / this.range;
    };
    ProgressBarComponent.prototype.validateValue = function (value) {
        return this.isNumber(value) &&
            value >= this.minValue &&
            value <= this.maxValue;
    };
    ProgressBarComponent.prototype.isNumber = function (value) {
        return typeof value === 'number' && value !== NaN;
    };
    __decorate$R([
        Input(),
        __metadata$x("design:type", Number)
    ], ProgressBarComponent.prototype, "value", void 0);
    __decorate$R([
        Input(),
        __metadata$x("design:type", Number)
    ], ProgressBarComponent.prototype, "secondaryValue", void 0);
    __decorate$R([
        Input(),
        __metadata$x("design:type", Number)
    ], ProgressBarComponent.prototype, "minValue", void 0);
    __decorate$R([
        Input(),
        __metadata$x("design:type", Number)
    ], ProgressBarComponent.prototype, "maxValue", void 0);
    __decorate$R([
        Input(),
        __metadata$x("design:type", Boolean)
    ], ProgressBarComponent.prototype, "indeterminate", void 0);
    __decorate$R([
        Input(),
        __metadata$x("design:type", String)
    ], ProgressBarComponent.prototype, "label", void 0);
    __decorate$R([
        Input(),
        __metadata$x("design:type", Number)
    ], ProgressBarComponent.prototype, "speed", void 0);
    ProgressBarComponent = __decorate$R([
        Component({
            selector: 'vcl-progress-bar',
            template: "<div class=\"vclProgressBar\"\n     [attr.aria-valuenow]=\"value\" \n     [attr.aria-valuemin]=\"minValue\" \n     [attr.aria-valuemax]=\"maxValue\" \n     [attr.aria-valuetext]=\"label\"\n     [class.vclIndeterminate]=\"showIndeterminate\"\n     >\n  <div *ngIf=\"showValue\" class=\"vclProgress vclPrimary vclLayoutFit\" [style.transform]=\"transformValue\"></div>\n  <div *ngIf=\"showSecondaryValue\" class=\"vclProgress vclSecondary vclLayoutFit\" [style.transform]=\"transformSecondaryValue\"></div>\n  <div *ngIf=\"showIndeterminate\" class=\"vclProgress vclPrimary vclLayoutFit\" [style.animation-duration]=\"animationDurationValue\"></div>\n</div>\n\n",
            host: {
                '[attr.role]': '"progressbar"',
            },
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

var __decorate$S = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLProgressBarModule = /** @class */ (function () {
    function VCLProgressBarModule() {
    }
    VCLProgressBarModule = __decorate$S([
        NgModule({
            imports: [CommonModule],
            exports: [ProgressBarComponent],
            declarations: [ProgressBarComponent]
        })
    ], VCLProgressBarModule);
    return VCLProgressBarModule;
}());

var __decorate$T = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$y = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$8 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RadioButtonComponent; }),
    multi: true
};
var uniqueID = 0;
var RadioButtonComponent = /** @class */ (function () {
    function RadioButtonComponent(cdRef) {
        this.cdRef = cdRef;
        this.uniqueID = "vcl-radio-button-" + ++uniqueID;
        this.id = this.uniqueID;
        this.checkedIcon = 'far fa-dot-circle';
        this.uncheckedIcon = 'far fa-circle';
        this.disabled = false;
        this.inline = false;
        this.iconPosition = 'left';
        this.tabindex = 0;
        this.checked = false;
        this.checkedChange = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.focused = true;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
        // Store cva disabled state in an extra property to remember the old state after the radio group has been disabled
        this.cvaDisabled = false;
    }
    Object.defineProperty(RadioButtonComponent.prototype, "isDisabled", {
        get: function () {
            return this.cvaDisabled || this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "icon", {
        get: function () {
            return this.checked ? this.checkedIcon : this.uncheckedIcon;
        },
        enumerable: true,
        configurable: true
    });
    RadioButtonComponent.prototype.onKeyup = function (e) {
        switch (e.code) {
            case 'Space':
                this.triggerChangeAction(e);
                break;
        }
    };
    RadioButtonComponent.prototype.onTap = function (e) {
        this.triggerChangeAction(e);
    };
    RadioButtonComponent.prototype.triggerChangeAction = function (e) {
        e.preventDefault();
        if (this.isDisabled) {
            return;
        }
        // radio-buttons cannot be 'unchecked' by definition
        if (this.checked === true) {
            return;
        }
        this.checked = true;
        this.checkedChange.emit(this.checked);
        this.onChange(this.checked);
        this.onTouched();
    };
    RadioButtonComponent.prototype.setChecked = function (value) {
        this.checked = value;
        this.cdRef.markForCheck();
    };
    RadioButtonComponent.prototype.setInline = function (value) {
        this.inline = value;
        this.cdRef.markForCheck();
    };
    RadioButtonComponent.prototype.onFocus = function () {
        this.focused = true;
        this.focus.emit();
    };
    RadioButtonComponent.prototype.onBlur = function () {
        this.focused = false;
        this.blur.emit();
    };
    RadioButtonComponent.prototype.writeValue = function (value) {
        if (value !== this.checked) {
            this.setChecked(!!value);
        }
    };
    RadioButtonComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RadioButtonComponent.prototype.setDisabledState = function (isDisabled) {
        this.cvaDisabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate$T([
        HostBinding('attr.id'),
        Input(),
        __metadata$y("design:type", String)
    ], RadioButtonComponent.prototype, "id", void 0);
    __decorate$T([
        Input(),
        __metadata$y("design:type", Object)
    ], RadioButtonComponent.prototype, "checkedIcon", void 0);
    __decorate$T([
        Input(),
        __metadata$y("design:type", Object)
    ], RadioButtonComponent.prototype, "uncheckedIcon", void 0);
    __decorate$T([
        Input(),
        __metadata$y("design:type", Object)
    ], RadioButtonComponent.prototype, "disabled", void 0);
    __decorate$T([
        Input(),
        __metadata$y("design:type", Object)
    ], RadioButtonComponent.prototype, "value", void 0);
    __decorate$T([
        Input(),
        __metadata$y("design:type", Boolean)
    ], RadioButtonComponent.prototype, "inline", void 0);
    __decorate$T([
        Input(),
        __metadata$y("design:type", String)
    ], RadioButtonComponent.prototype, "iconPosition", void 0);
    __decorate$T([
        Input(),
        __metadata$y("design:type", String)
    ], RadioButtonComponent.prototype, "label", void 0);
    __decorate$T([
        Input(),
        __metadata$y("design:type", Object)
    ], RadioButtonComponent.prototype, "tabindex", void 0);
    __decorate$T([
        Input(),
        __metadata$y("design:type", Boolean)
    ], RadioButtonComponent.prototype, "checked", void 0);
    __decorate$T([
        Output(),
        __metadata$y("design:type", Object)
    ], RadioButtonComponent.prototype, "checkedChange", void 0);
    __decorate$T([
        Output(),
        __metadata$y("design:type", Object)
    ], RadioButtonComponent.prototype, "focus", void 0);
    __decorate$T([
        Output(),
        __metadata$y("design:type", Object)
    ], RadioButtonComponent.prototype, "blur", void 0);
    __decorate$T([
        HostListener('tap', ['$event']),
        __metadata$y("design:type", Function),
        __metadata$y("design:paramtypes", [Event]),
        __metadata$y("design:returntype", void 0)
    ], RadioButtonComponent.prototype, "onTap", null);
    RadioButtonComponent = __decorate$T([
        Component({
            selector: 'vcl-radio-button',
            template: "<ng-template #rb>\n  <div class=\"vclRadioButton\" \n      [class.vclDisabled]=\"isDisabled\" \n      role=\"radio\" \n      [attr.tabindex]=\"tabindex\" \n      [attr.aria-checked]=\"checked\"\n      [attr.aria-disabled]=\"isDisabled\"\n      (keyup)=\"onKeyup($event)\"\n      (blur)=\"onBlur()\"\n      >\n  <div vcl-icon [icon]=\"icon\"></div>\n</div>  \n</ng-template>\n\n<label vcl-form-control-label [wrapping]=\"true\">\n  <ng-container *ngIf=\"iconPosition==='left'\" [ngTemplateOutlet]=\"rb\"></ng-container>\n  {{label}}  \n  <ng-content></ng-content>\n  <ng-container *ngIf=\"iconPosition==='right'\" [ngTemplateOutlet]=\"rb\"></ng-container>\n</label>\n  ",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$8],
            host: {
                '[style.display]': 'inline === true ? "inline-block" : null',
                '[class.vclInputControlGroup]': 'inline === false',
            }
        }),
        __metadata$y("design:paramtypes", [ChangeDetectorRef])
    ], RadioButtonComponent);
    return RadioButtonComponent;
}());

var __decorate$U = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$z = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["Single"] = 0] = "Single";
    SelectionMode[SelectionMode["Multiple"] = 1] = "Multiple";
})(SelectionMode || (SelectionMode = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$9 = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RadioGroupComponent; }),
    multi: true
};
var RadioGroupComponent = /** @class */ (function () {
    function RadioGroupComponent(cdRef) {
        this.cdRef = cdRef;
        this.layout = 'horizontal';
        this.change = new EventEmitter();
        /**
        * things needed for ControlValueAccessor-Interface
        */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(RadioGroupComponent.prototype, "vclInputInlineControlGroup", {
        get: function () {
            return this.layout === 'horizontal';
        },
        enumerable: true,
        configurable: true
    });
    RadioGroupComponent.prototype.syncRadioButtons = function () {
        var _this = this;
        if (this.radioButtons) {
            this.radioButtons.forEach(function (rbtn, idx) {
                var value = rbtn.value === undefined ? idx : rbtn.value;
                rbtn.setChecked(_this.value === value);
            });
            this.cdRef.markForCheck();
        }
    };
    RadioGroupComponent.prototype.triggerChange = function () {
        this.change.emit(this.value);
        this.onChange(this.value);
    };
    RadioGroupComponent.prototype.ngOnChanges = function (changes) {
        if ('value' in changes) {
            this.syncRadioButtons();
        }
    };
    RadioGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Subscribes to radio button change event
        this.changesSub = this.radioButtons && this.radioButtons.changes.pipe(startWith(null)).subscribe(function () {
            _this.dispose();
            if (_this.radioButtons) {
                // Sync inline property
                _this.radioButtons && _this.radioButtons.forEach(function (crbtn) {
                    crbtn.setInline(_this.layout === 'horizontal');
                });
                // Subscribe last radio button to blur event
                _this.blurSub = _this.radioButtons.last.blur.subscribe(function () {
                    _this.onTouched();
                });
                // Subscribe to checked change event
                var checked$ = merge.apply(void 0, (_this.radioButtons.map(function (source, idx) { return source.checkedChange.pipe(map(function () { return ({ source: source, idx: idx }); })); })));
                _this.checkedSub = checked$.subscribe(function (c) {
                    // Use index as value if radio button value is undefined
                    _this.value = c.source.value === undefined ? c.idx : c.source.value;
                    _this.syncRadioButtons();
                    _this.triggerChange();
                });
                _this.syncRadioButtons();
            }
        });
    };
    RadioGroupComponent.prototype.ngOnDestroy = function () {
        this.dispose();
        this.changesSub && this.changesSub.unsubscribe();
    };
    RadioGroupComponent.prototype.dispose = function () {
        this.blurSub && this.blurSub.unsubscribe();
        this.checkedSub && this.checkedSub.unsubscribe();
    };
    RadioGroupComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.syncRadioButtons();
    };
    RadioGroupComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    RadioGroupComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    RadioGroupComponent.prototype.setDisabledState = function (isDisabled) {
        this.radioButtons && this.radioButtons.forEach(function (rb) { return rb.setDisabledState(isDisabled); });
    };
    __decorate$U([
        Input(),
        __metadata$z("design:type", Object)
    ], RadioGroupComponent.prototype, "value", void 0);
    __decorate$U([
        Input(),
        __metadata$z("design:type", String)
    ], RadioGroupComponent.prototype, "layout", void 0);
    __decorate$U([
        Output(),
        __metadata$z("design:type", Object)
    ], RadioGroupComponent.prototype, "change", void 0);
    __decorate$U([
        ContentChildren(RadioButtonComponent),
        __metadata$z("design:type", Object)
    ], RadioGroupComponent.prototype, "radioButtons", void 0);
    __decorate$U([
        HostBinding('class.vclInputInlineControlGroup'),
        __metadata$z("design:type", Object),
        __metadata$z("design:paramtypes", [])
    ], RadioGroupComponent.prototype, "vclInputInlineControlGroup", null);
    RadioGroupComponent = __decorate$U([
        Component({
            selector: 'vcl-radio-group',
            template: "<ng-content></ng-content>",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$9],
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                'attr.role': '"radiogroup"'
            }
        }),
        __metadata$z("design:paramtypes", [ChangeDetectorRef])
    ], RadioGroupComponent);
    return RadioGroupComponent;
}());

var __decorate$V = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$A = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var FormControlLabelComponent = /** @class */ (function () {
    function FormControlLabelComponent() {
        this.disabled = false;
        this.requiredIndicatorCharacter = '•';
        // Whether an indicator that an input in to the labeled control is required
        this.required = false;
    }
    Object.defineProperty(FormControlLabelComponent.prototype, "vclFormControlLabelWrapping", {
        get: function () {
            if (typeof this.wrapping === 'boolean') {
                return this.wrapping;
            }
            else {
                // Not wrapping if "for" is defined
                if (this.for || !this.content || !this.content.nativeElement) {
                    return false;
                }
                // Wrapping if any ng-content is defined
                return hasContent(this.content.nativeElement);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate$V([
        ViewChild('content'),
        __metadata$A("design:type", ElementRef)
    ], FormControlLabelComponent.prototype, "content", void 0);
    __decorate$V([
        Input(),
        HostBinding('class.vclDisabled'),
        __metadata$A("design:type", Object)
    ], FormControlLabelComponent.prototype, "disabled", void 0);
    __decorate$V([
        Input(),
        __metadata$A("design:type", String)
    ], FormControlLabelComponent.prototype, "requiredIndicatorCharacter", void 0);
    __decorate$V([
        Input(),
        __metadata$A("design:type", Object)
    ], FormControlLabelComponent.prototype, "label", void 0);
    __decorate$V([
        Input(),
        __metadata$A("design:type", Object)
    ], FormControlLabelComponent.prototype, "subLabel", void 0);
    __decorate$V([
        HostBinding('attr.for'),
        Input(),
        __metadata$A("design:type", Object)
    ], FormControlLabelComponent.prototype, "for", void 0);
    __decorate$V([
        Input(),
        __metadata$A("design:type", Boolean)
    ], FormControlLabelComponent.prototype, "wrapping", void 0);
    __decorate$V([
        HostBinding('class.vclFormControlLabelWrapping'),
        __metadata$A("design:type", Object),
        __metadata$A("design:paramtypes", [])
    ], FormControlLabelComponent.prototype, "vclFormControlLabelWrapping", null);
    __decorate$V([
        Input(),
        __metadata$A("design:type", Boolean)
    ], FormControlLabelComponent.prototype, "required", void 0);
    __decorate$V([
        Input(),
        __metadata$A("design:type", String)
    ], FormControlLabelComponent.prototype, "requiredIndLabel", void 0);
    FormControlLabelComponent = __decorate$V([
        Component({
            selector: 'label[vcl-form-control-label]',
            template: "{{label}}\n<em *ngIf=\"required\" class=\"vclRequiredIndicator\" aria-hidden=\"true\" [attr.aria-label]=\"requiredIndLabel\">\n  {{requiredIndicatorCharacter}}\n</em>\n<span *ngIf=\"subLabel\" class=\"vclFormControlSubLabel\">{{subLabel}}</span>\n<div #content><ng-content></ng-content></div>\n",
            host: {
                '[class.vclFormControlLabel]': 'true',
            },
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormControlLabelComponent);
    return FormControlLabelComponent;
}());
function hasContent(element) {
    var nodes = Array.from(element.childNodes);
    return nodes.some(function (node) {
        // Ignore empty text
        if (node.nodeType === 3 && node.textContent && node.textContent.trim().length === 0) {
            return false;
        }
        // Ignore comments
        if (node.nodeType === 8) {
            return false;
        }
        return true;
    });
}

var __decorate$W = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLFormControlLabelModule = /** @class */ (function () {
    function VCLFormControlLabelModule() {
    }
    VCLFormControlLabelModule = __decorate$W([
        NgModule({
            imports: [CommonModule, VCLIconModule],
            exports: [FormControlLabelComponent],
            declarations: [FormControlLabelComponent]
        })
    ], VCLFormControlLabelModule);
    return VCLFormControlLabelModule;
}());

var __decorate$X = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLRadioButtonModule = /** @class */ (function () {
    function VCLRadioButtonModule() {
    }
    VCLRadioButtonModule = __decorate$X([
        NgModule({
            imports: [CommonModule, VCLIconModule, VCLFormControlLabelModule],
            exports: [RadioButtonComponent, RadioGroupComponent],
            declarations: [RadioButtonComponent, RadioGroupComponent]
        })
    ], VCLRadioButtonModule);
    return VCLRadioButtonModule;
}());

var __decorate$Y = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$B = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$a = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CheckboxComponent; }),
    multi: true
};
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.checkedIcon = 'far fa-check-square';
        this.uncheckedIcon = 'far fa-square';
        this.disabled = false;
        this.iconPosition = 'left';
        this.checked = false;
        this.hideLabel = false;
        /**
        Action fired when the `checked` state changes due to user interaction.
        */
        this.checkedChange = new EventEmitter();
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
        // Store cva disabled state in an extra property to remember the old state after the radio group has been disabled
        this.cvaDisabled = false;
    }
    CheckboxComponent.prototype.onKeyup = function (e) {
        switch (e.code) {
            case 'Space':
                e.preventDefault();
                this.updateValue();
                break;
        }
    };
    CheckboxComponent.prototype.onTap = function (e) {
        e.preventDefault();
        return this.updateValue();
    };
    CheckboxComponent.prototype.updateValue = function () {
        if (this.isDisabled) {
            return;
        }
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
        this.onTouched();
        this.onChange(this.checked);
    };
    Object.defineProperty(CheckboxComponent.prototype, "icon", {
        get: function () {
            return this.checked ? this.checkedIcon : this.uncheckedIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "isDisabled", {
        get: function () {
            return this.cvaDisabled || this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.onBlur = function () {
        this.onTouched();
    };
    CheckboxComponent.prototype.writeValue = function (value) {
        this.checked = !!value;
        this.cdRef.markForCheck();
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.cvaDisabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate$Y([
        Input(),
        __metadata$B("design:type", Object)
    ], CheckboxComponent.prototype, "tabindex", void 0);
    __decorate$Y([
        Input(),
        __metadata$B("design:type", String)
    ], CheckboxComponent.prototype, "checkedIcon", void 0);
    __decorate$Y([
        Input(),
        __metadata$B("design:type", String)
    ], CheckboxComponent.prototype, "uncheckedIcon", void 0);
    __decorate$Y([
        Input(),
        __metadata$B("design:type", String)
    ], CheckboxComponent.prototype, "label", void 0);
    __decorate$Y([
        Input(),
        __metadata$B("design:type", Boolean)
    ], CheckboxComponent.prototype, "disabled", void 0);
    __decorate$Y([
        Input(),
        __metadata$B("design:type", String)
    ], CheckboxComponent.prototype, "iconPosition", void 0);
    __decorate$Y([
        Input(),
        __metadata$B("design:type", Boolean)
    ], CheckboxComponent.prototype, "checked", void 0);
    __decorate$Y([
        Input(),
        __metadata$B("design:type", Boolean)
    ], CheckboxComponent.prototype, "hideLabel", void 0);
    __decorate$Y([
        Output(),
        __metadata$B("design:type", Object)
    ], CheckboxComponent.prototype, "checkedChange", void 0);
    __decorate$Y([
        HostListener('tap', ['$event']),
        __metadata$B("design:type", Function),
        __metadata$B("design:paramtypes", [Object]),
        __metadata$B("design:returntype", void 0)
    ], CheckboxComponent.prototype, "onTap", null);
    CheckboxComponent = __decorate$Y([
        Component({
            selector: 'vcl-checkbox',
            template: "<ng-template #cb>\n  <div class=\"vclCheckbox\" \n      [class.vclDisabled]=\"isDisabled\" \n      role=\"checkbox\" \n      [attr.tabindex]=\"tabindex\" \n      [attr.aria-checked]=\"checked\"\n      [attr.aria-disabled]=\"isDisabled\"\n      (keyup)=\"onKeyup($event)\"\n      (blur)=\"onBlur()\"\n      >\n  <div vcl-icon [icon]=\"icon\"></div>\n</div>  \n</ng-template>\n\n<label vcl-form-control-label [wrapping]=\"true\" [label]=\"hideLabel ? '' : label\">\n  <ng-container *ngIf=\"iconPosition==='left'\" [ngTemplateOutlet]=\"cb\"></ng-container>\n  {{label }}\n  <ng-content></ng-content>\n  <ng-container *ngIf=\"iconPosition==='right'\" [ngTemplateOutlet]=\"cb\"></ng-container>\n</label>\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$a],
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclInputControlGroup]': 'true',
            }
        }),
        __metadata$B("design:paramtypes", [ChangeDetectorRef])
    ], CheckboxComponent);
    return CheckboxComponent;
}());

var __decorate$Z = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLCheckboxModule = /** @class */ (function () {
    function VCLCheckboxModule() {
    }
    VCLCheckboxModule = __decorate$Z([
        NgModule({
            imports: [CommonModule, VCLIconModule, VCLFormControlLabelModule],
            exports: [CheckboxComponent],
            declarations: [CheckboxComponent]
        })
    ], VCLCheckboxModule);
    return VCLCheckboxModule;
}());

/**
 * this is a helper-class so that the Date-logic
 * is not mashed with the components logic
 */
var MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
var WEEK_DAYS = [
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su'
];
var CalendarDate = /** @class */ (function () {
    function CalendarDate(date) {
        if (!(date instanceof Date)) {
            date = new Date;
        }
        this.date = date;
    }
    CalendarDate.prototype.clone = function () {
        return new CalendarDate(new Date(this.date.getTime()));
    };
    CalendarDate.prototype.getWeekDays = function () {
        return WEEK_DAYS;
    };
    CalendarDate.prototype.getMonthString = function () {
        var monthNr = this.date.getMonth();
        return MONTH_NAMES[monthNr];
    };
    CalendarDate.prototype.getYearString = function () {
        return this.date.getFullYear().toString();
    };
    /**
     * gets the first day of the month for the given date's month.
     */
    CalendarDate.prototype.getFirstDateOfMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
    };
    CalendarDate.prototype.moveToYear = function (year) {
        var newDate = new Date(year, this.date.getMonth(), 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        return new CalendarDate(newDate);
    };
    CalendarDate.prototype.addYears = function (amount) {
        if (amount === void 0) { amount = 1; }
        var newDate = new Date(this.date.getFullYear() + amount, this.date.getMonth(), 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        return new CalendarDate(newDate);
    };
    CalendarDate.prototype.addDays = function (date, amount) {
        if (amount === void 0) { amount = 1; }
        return new Date(date.getTime() + 24 * 60 * 60 * 1000 * amount);
    };
    CalendarDate.prototype.moveDays = function (amount) {
        this.date = this.addDays(this.date, amount);
    };
    /**
     * returns true if this is greater than that
     */
    CalendarDate.prototype.gt = function (date) {
        return this.date > date;
    };
    /**
     * returns true if this is lower than that
     */
    CalendarDate.prototype.lt = function (date) {
        return this.date < date;
    };
    /**
     * Gets a new date incremented by the given number of months. Number of months can be negative.
     * If the date of the given month does not match the target month, the date will be set to the
     * last day of the month.
     */
    CalendarDate.prototype.incrementMonths = function (numberOfMonths) {
        var dateInTargetMonth = new Date(this.date.getFullYear(), this.date.getMonth() + numberOfMonths, 1, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        var numberOfDaysInMonth = this.getNumberOfDaysInMonth(dateInTargetMonth);
        if (numberOfDaysInMonth < this.date.getDate()) {
            dateInTargetMonth.setDate(numberOfDaysInMonth);
        }
        else {
            dateInTargetMonth.setDate(this.date.getDate());
        }
        return new CalendarDate(dateInTargetMonth);
    };
    /**
      * Gets the number of days in the month for the given date's month
      */
    CalendarDate.prototype.getNumberOfDaysInMonth = function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    CalendarDate.prototype.getLastDateOfMonth = function (date) {
        var dayNr = this.getNumberOfDaysInMonth(date);
        return new Date(date.getFullYear(), date.getMonth(), dayNr, date.getHours(), date.getMinutes(), date.getSeconds());
    };
    /**
      * Gets whether two dates have the same month and year
      */
    CalendarDate.prototype.isSameMonthAndYear = function (date) {
        if (date === void 0) { date = new CalendarDate(); }
        return this.date.getFullYear() === date.date.getFullYear() && this.date.getMonth() === date.date.getMonth();
    };
    /**
     * Gets whether two dates are the same day (not not necesarily the same time)
     */
    CalendarDate.prototype.isSameDay = function (date) {
        return this.date.getDate() == date.date.getDate() && this.isSameMonthAndYear(date);
    };
    CalendarDate.prototype.isToday = function () {
        return this.isSameDay(new CalendarDate());
    };
    CalendarDate.prototype.isInYear = function (year) {
        return this.date.getFullYear() === year;
    };
    /**
     * returns a set of days which are in the given month or
     * are in the same weekNumber as a day in the given month
     */
    CalendarDate.prototype.getMonthBlock = function () {
        var dates = [];
        var firstDayOfMonth = this.getFirstDateOfMonth(this.date);
        var lastDayOfMonth = this.getLastDateOfMonth(this.date);
        var daysOfMonth = this.getNumberOfDaysInMonth(this.date);
        // all days of this month
        for (var i = 0; i < daysOfMonth; i++) {
            dates.push(this.addDays(firstDayOfMonth, i));
        }
        // days of prev month but in same week
        var weekDay = firstDayOfMonth.getDay();
        // since js starts counting week-days from Sunday (0), need to change it as last weekday (7)
        if (weekDay === 0) {
            weekDay = 7;
        }
        var minus = 0;
        while (weekDay > 1) {
            minus--;
            dates.unshift(this.addDays(firstDayOfMonth, minus));
            weekDay--;
        }
        // days of next month but in same week
        var addDays = 7 - lastDayOfMonth.getDay();
        var plus = 0;
        while (addDays > 0 && lastDayOfMonth.getDay() !== 0) {
            plus++;
            dates.push(this.addDays(lastDayOfMonth, plus));
            addDays--;
        }
        var ret = dates.map(function (date) { return new CalendarDate(date); });
        var blocks = [];
        // split in weeks
        var chunk = 7;
        for (var i = 0, j = ret.length; i < j; i += chunk) {
            var temparray = ret.slice(i, i + chunk);
            if (temparray.length == 7)
                blocks.push(temparray);
        }
        return blocks;
    };
    CalendarDate.prototype.getYearsBlock = function () {
        var years = [];
        var currentYear = this.date.getFullYear() - 12;
        while (years.length < 25) {
            years.push(currentYear);
            currentYear++;
        }
        // split rows
        var ret = [];
        var chunk = 5;
        for (var i = 0, j = years.length; i < j; i += chunk) {
            var temparray = years.slice(i, i + chunk);
            if (temparray.length == 5)
                ret.push(temparray);
        }
        return ret;
    };
    CalendarDate.prototype.getWeekNumber = function () {
        // Copy date so don't modify original
        var d = new Date(+this.date);
        d.setHours(0, 0, 0);
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        // Get first day of year
        var yearStart = new Date(d.getFullYear(), 0, 1);
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
        // Return array of year and week number
        return weekNo;
    };
    /**
     * returns true if this is between the given dates
     */
    CalendarDate.prototype.inRange = function (from$$1, to) {
        if (!(from$$1 instanceof CalendarDate) || !(to instanceof CalendarDate)) {
            return false;
        }
        return (this.date >= from$$1.date && this.date <= to.date)
            || this.isSameDay(from$$1) || this.isSameDay(to);
    };
    CalendarDate.prototype.daysInRange = function (to) {
        var oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((this.date.getTime() - to.date.getTime()) / (oneDay))) + 1;
    };
    return CalendarDate;
}());

var __decorate$_ = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$C = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$b = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent(cdRef) {
        this.cdRef = cdRef;
        // behavior
        this.closeOnSelect = false;
        this.disabled = false;
        // styling
        this.highlightToday = true;
        this.highlightSelected = true;
        this.displayWeekNumbers = true;
        this.displayWeekdays = true;
        this.displayDate = true;
        this.displayTime = false;
        this.displayHours24 = true;
        this.displayHours = true;
        this.displayMinutes = true;
        this.displaySeconds = false;
        this.prevYearBtnIcon = 'fa:chevron-left';
        this.nextYearBtnIcon = 'fa:chevron-right';
        this.displayJumpToday = true;
        this.displayJumpSelected = true;
        this.selectRange = false;
        this.maxRangeLength = Infinity;
        this.change = new EventEmitter();
        this.today = new CalendarDate();
        this.showYearPick = false;
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        if (this.config) {
            for (var key in this.config) {
                this[key] = this.config[key];
            }
        }
        this.setDate(this.selectedDate);
        if (this.selectedRangeEnd) {
            this.selectRange = true;
            this.select(new CalendarDate(this.selectedRangeEnd));
        }
    };
    DatePickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedDate) {
            this.setDate(changes.selectedDate.currentValue);
        }
    };
    DatePickerComponent.prototype.setDate = function (date) {
        this.currentDate = new CalendarDate(date);
        this.viewDate = this.currentDate.clone();
    };
    DatePickerComponent.prototype.showYear = function () {
        if (this.disabled) {
            return;
        }
        this.showYearPick = true;
    };
    DatePickerComponent.prototype.onDateTap = function (date) {
        if (this.disabled || this.isDayDisabled(date)) {
            return;
        }
        this.select(date);
        if (!this.selectRange) {
            if (this.currentDate && !this.currentDate.isSameMonthAndYear(this.viewDate)) {
                this.gotoSelected();
            }
            var currentDate = this.currentDate ? this.currentDate.date : undefined;
            this.onChangeCallback && this.onChangeCallback(currentDate);
            this.change.emit(currentDate);
            this.selectedDate = currentDate;
        }
        else {
            var currentDate = this.currentDate ? this.currentDate.date : undefined;
            if (currentDate) {
                this.onChangeCallback && this.onChangeCallback(currentDate);
            }
            this.change.emit([currentDate, this.currentRangeEnd ? this.currentRangeEnd.date : undefined]);
        }
    };
    /**
     * activate the given date
     */
    DatePickerComponent.prototype.select = function (date) {
        if (!this.selectRange) {
            this.currentDate = date;
        }
        else {
            if (this.currentDate && this.currentRangeEnd) {
                // reset all
                this.currentDate = undefined;
                this.currentRangeEnd = undefined;
            }
            else if (this.currentDate && !this.currentRangeEnd) {
                this.currentRangeEnd = date;
            }
            else if (!this.currentDate) {
                this.currentDate = date;
            }
            // swap values if currentDate > currentRangeEnd
            if (this.currentRangeEnd &&
                this.currentDate &&
                this.currentRangeEnd.date < this.currentDate.date) {
                this.currentRangeEnd.date = [this.currentDate.date, this.currentDate.date = this.currentRangeEnd.date][0]; // swap values
            }
            // if more days selected than maxRangeLength, strip days
            if (this.selectRange &&
                this.currentRangeEnd &&
                this.currentDate &&
                this.currentDate.daysInRange(this.currentRangeEnd) > this.maxRangeLength) {
                var diffDays = this.currentDate.daysInRange(this.currentRangeEnd) - this.maxRangeLength;
                this.currentRangeEnd.moveDays(diffDays * (-1));
            }
        }
    };
    /**
     * ui-markers
     */
    DatePickerComponent.prototype.isMarked = function (date) {
        if (!this.selectRange && this.currentDate && this.currentDate.isSameDay(date))
            return true;
        return !!this.currentDate && !!this.currentRangeEnd && date.inRange(this.currentDate, this.currentRangeEnd);
    };
    DatePickerComponent.prototype.isDayDisabled = function (day) {
        var minDate = this.minDate || new Date(0, 0, 1);
        var maxDate = this.maxDate || new Date(10000, 0, 1);
        return day.gt(maxDate) || day.lt(minDate);
    };
    /**
     * functions to move viewDate
     */
    DatePickerComponent.prototype.nextMonth = function () {
        var viewDate = this.viewDate || new CalendarDate();
        if (this.showYearPick) {
            this.viewDate = viewDate.addYears(1);
        }
        else {
            this.viewDate = viewDate.incrementMonths(1);
        }
    };
    DatePickerComponent.prototype.prevMonth = function () {
        var viewDate = this.viewDate || new CalendarDate();
        if (this.showYearPick) {
            this.viewDate = viewDate.addYears(-1);
        }
        else {
            this.viewDate = viewDate.incrementMonths(-1);
        }
    };
    DatePickerComponent.prototype.gotoToday = function () {
        this.viewDate = new CalendarDate();
    };
    DatePickerComponent.prototype.gotoSelected = function () {
        this.viewDate = this.currentDate || new CalendarDate();
    };
    DatePickerComponent.prototype.yearPickSelect = function (year) {
        if (this.disabled) {
            return;
        }
        var viewDate = this.viewDate || new CalendarDate();
        this.viewDate = viewDate.moveToYear(year);
        this.showYearPick = false;
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        this.selectedDate = value;
        this.currentDate = new CalendarDate(value);
        this.viewDate = this.currentDate;
        this.cdRef.markForCheck();
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    DatePickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    DatePickerComponent.prototype.timeChange = function (date) {
        this.selectedDate = date;
        this.currentDate = new CalendarDate(date);
        this.onDateTap(this.currentDate);
        this.viewDate = this.currentDate;
        this.cdRef.markForCheck();
    };
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "closeOnSelect", void 0);
    __decorate$_([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "disabled", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "highlightToday", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "highlightSelected", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayWeekNumbers", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayWeekdays", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayDate", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayTime", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayHours24", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayHours", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayMinutes", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "displaySeconds", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", String)
    ], DatePickerComponent.prototype, "prevYearBtnIcon", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", String)
    ], DatePickerComponent.prototype, "nextYearBtnIcon", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayJumpToday", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "displayJumpSelected", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Object)
    ], DatePickerComponent.prototype, "selectedDate", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Boolean)
    ], DatePickerComponent.prototype, "selectRange", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Object)
    ], DatePickerComponent.prototype, "selectedRangeEnd", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Number)
    ], DatePickerComponent.prototype, "maxRangeLength", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Object)
    ], DatePickerComponent.prototype, "minDate", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Object)
    ], DatePickerComponent.prototype, "maxDate", void 0);
    __decorate$_([
        Input(),
        __metadata$C("design:type", Object)
    ], DatePickerComponent.prototype, "config", void 0);
    __decorate$_([
        Output(),
        __metadata$C("design:type", Object)
    ], DatePickerComponent.prototype, "change", void 0);
    DatePickerComponent = __decorate$_([
        Component({
            selector: 'vcl-date-picker',
            template: "<div class=\"vclLayoutHorizontal\">\n  <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\" style=\"min-width: 18em;\" *ngIf=\"displayDate\">\n    <div class=\"vclDGRow\">\n      <div class=\"vclDGCell vclToolbar\">\n        <div class=\" vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n          <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" [disabled]=\"disabled\" (click)=\"prevMonth()\">\n                <div class=\"vclIcogram\">\n                  <div class=\"vclIcon fa fa-angle-left\" aria-hidden=\"false\" aria-label=\"previous\" role=\"img\"></div>\n                </div>\n              </button>\n          <span class=\"vclCalHeaderLabel\" (click)=\"showYear()\" [class.date-picker-pointer]=\"!showYearPick\">\n            {{viewDate?.getMonthString()}}&nbsp;&nbsp;{{viewDate?.getYearString()}}\n          </span>\n            <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" [disabled]=\"disabled\" (click)=\"nextMonth()\">\n              <div class=\"vclIcogram\">\n                <div class=\"vclIcon fa fa-angle-right\" aria-hidden=\"false\" aria-label=\"next\" role=\"img\"></div>\n              </div>\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <ng-container *ngIf=\"!showYearPick\">\n        <div *ngIf=\"displayWeekNumbers || displayWeekdays\" class=\"vclDGRow\">\n          <div *ngIf=\"displayWeekNumbers\" class=\"vclDGCell vclCalItem vclOtherMonth\">\n            {{'week'}}\n          </div>\n          <div *ngFor=\"let day of viewDate.getWeekDays()\" class=\"vclDGCell vclWeekdayLabel\">\n            <ng-container *ngIf=\"displayWeekdays\">\n              {{day}}\n            </ng-container>\n          </div>\n        </div>\n\n        <div class=\"vclDGRow\" *ngFor=\"let week of viewDate.getMonthBlock()\">\n          <div *ngIf=\"displayWeekNumbers && week.length==7\" class=\"vclDGCell\">\n            {{week[5].getWeekNumber()}}\n          </div>\n          <div *ngFor=\"let day of week\" class=\"vclDGCell vclCalItem\" [class.vclDisabled]=\"disabled || isDayDisabled(day)\" [class.vclOtherMonth]=\"!day.isSameMonthAndYear(viewDate)\" [class.vclSelected]=\"isMarked(day)\" (click)=\"onDateTap(day)\" [class.vclToday]=\"highlightSelected && day.isToday()\">\n            {{day.date.getDate()}}\n          </div>\n        </div>\n\n        <div *ngIf=\"displayJumpSelected || displayJumpToday\" class=\"vclDGRow\">\n          <div class=\"vclDGCell\">\n            <div class=\"vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified\" role=\"menubar\" aria-level=\"2\">\n              <button *ngIf=\"displayJumpToday\" type=\"button\" title=\"go to today\" class=\"vclButton vclTransparent vclLayoutFlex\" [disabled]=\"disabled\" (click)=\"gotoToday()\">\n                <div class=\" vclIcogram\">\n                  <span class=\"vclText \">go to today</span>\n                </div>\n              </button>\n              <button *ngIf=\"displayJumpSelected\" type=\"button\" title=\"go to selected\" class=\"vclButton vclTransparent vclLayoutFlex\" [disabled]=\"disabled\" (click)=\"gotoSelected()\">\n                <div class=\" vclIcogram\">\n                  <span class=\"vclText \">go to selected</span>\n                </div>\n              </button>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n\n      <ng-container *ngIf=\"showYearPick\">\n        <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let row of viewDate.getYearsBlock()\">\n          <div *ngFor=\"let year of row\" class=\"vclDGCell vclCalItem\" role=\"gridcell\" [class.vclSelected]=\"viewDate.date.getFullYear()==year\" (click)=\"yearPickSelect(year)\" [class.vclToday]=\"highlightSelected && today.isInYear(year)\">\n            {{year}}\n          </div>\n        </div>\n      </ng-container>\n    </div>\n    <vcl-time-picker *ngIf=\"displayTime\"\n                     [(ngModel)]=\"selectedDate\"\n                     (ngModelChange)=\"timeChange($event)\"\n                     [displayHours]=\"displayHours\"\n                     [displayMinutes]=\"displayMinutes\"\n                     [displaySeconds]=\"displaySeconds\"\n                     [displayHours24]=\"displayHours24\"\n                     [ngStyle]=\"{'margin-left': displayDate ? '10px' : 0}\">\n    </vcl-time-picker>\n</div>\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$b],
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclDatePicker]': 'true',
                '[attr.role]': '"listbox"',
                '[attr.aria-multiselectable]': 'false',
            },
            styles: [".hidden{display:none;}\n     .date-picker-pointer{cursor: pointer;}\n    "]
        }),
        __metadata$C("design:paramtypes", [ChangeDetectorRef])
    ], DatePickerComponent);
    return DatePickerComponent;
}());

var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$D = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$c = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TimePickerComponent; }),
    multi: true
};
var TimePickerComponent = /** @class */ (function () {
    function TimePickerComponent(cdRef) {
        this.cdRef = cdRef;
        this.displayHours = true;
        this.displayMinutes = true;
        this.displaySeconds = true;
        this.displayHours24 = true;
        this.currentHour = -1;
        this.currentMinute = -1;
        this.currentSecond = -1;
    }
    TimePickerComponent.prototype.ngOnInit = function () {
        if (this.selectedDate) {
            this.currentHour = this.selectedDate.getHours();
            this.currentMinute = this.selectedDate.getMinutes();
            this.currentSecond = this.selectedDate.getSeconds();
        }
    };
    TimePickerComponent.prototype.isHourMarked = function (hour) {
        return hour === this.currentHour;
    };
    TimePickerComponent.prototype.isMinuteMarked = function (minute) {
        return minute === this.currentMinute;
    };
    TimePickerComponent.prototype.isSecondMarked = function (second) {
        return second === this.currentSecond;
    };
    TimePickerComponent.prototype.onHourTap = function (hour) {
        this.currentHour = hour;
        if (!this.selectedDate) {
            this.selectedDate = new Date();
        }
        this.selectedDate.setHours(hour);
        this.onChangeCallback && this.onChangeCallback(this.selectedDate);
    };
    TimePickerComponent.prototype.onMinuteTap = function (minute) {
        this.currentMinute = minute;
        if (!this.selectedDate) {
            this.selectedDate = new Date();
        }
        this.selectedDate.setMinutes(minute);
        this.onChangeCallback && this.onChangeCallback(this.selectedDate);
    };
    TimePickerComponent.prototype.onSecondTap = function (second) {
        this.currentSecond = second;
        if (!this.selectedDate) {
            this.selectedDate = new Date();
        }
        this.selectedDate.setSeconds(second);
        this.onChangeCallback && this.onChangeCallback(this.selectedDate);
    };
    TimePickerComponent.prototype.onSwitch24h = function () {
        this.displayHours24 = !this.displayHours24;
    };
    TimePickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedDate) {
            this.selectedDate = changes.selectedDate.currentValue;
            if (this.selectedDate) {
                this.currentHour = this.selectedDate.getHours();
                this.currentMinute = this.selectedDate.getMinutes();
                this.currentSecond = this.selectedDate.getSeconds();
            }
        }
    };
    TimePickerComponent.prototype.writeValue = function (value) {
        this.selectedDate = value;
        if (this.selectedDate) {
            this.currentHour = this.selectedDate.getHours();
            this.currentMinute = this.selectedDate.getMinutes();
            this.currentSecond = this.selectedDate.getSeconds();
        }
        this.cdRef.markForCheck();
    };
    TimePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TimePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    TimePickerComponent.prototype.setDisabledState = function (isDisabled) {
        this.cdRef.markForCheck();
    };
    __decorate$10([
        Input(),
        __metadata$D("design:type", Object)
    ], TimePickerComponent.prototype, "selectedDate", void 0);
    __decorate$10([
        Input(),
        __metadata$D("design:type", Boolean)
    ], TimePickerComponent.prototype, "displayHours", void 0);
    __decorate$10([
        Input(),
        __metadata$D("design:type", Boolean)
    ], TimePickerComponent.prototype, "displayMinutes", void 0);
    __decorate$10([
        Input(),
        __metadata$D("design:type", Boolean)
    ], TimePickerComponent.prototype, "displaySeconds", void 0);
    __decorate$10([
        Input(),
        __metadata$D("design:type", Boolean)
    ], TimePickerComponent.prototype, "displayHours24", void 0);
    TimePickerComponent = __decorate$10([
        Component({
            selector: 'vcl-time-picker',
            template: "<div class=\"vclLayoutHorizontal\">\n  <div class=\"vclDatePicker\" role=\"listbox\" aria-multiselectable=\"false\" style=\"width: 18em;\" *ngIf=\"displayHours\">\n    <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\" *ngIf=\"displayHours24\">\n      <div class=\"vclDGRow vclToolbar\">\n        <button type=\"button\" class=\"vclButton vclSquare\" style=\"visibility: hidden\">12h</button>\n        <div class=\"vclDGCell\">\n          <span class=\"vclCalHeaderLabel\">Hour</span>\n        </div>\n        <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"onSwitch24h()\" style=\"height: 100%\">12h</button>\n      </div>\n      <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let i of [0, 1, 2, 3]\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let x of [0, 1, 2, 3, 4, 5]\" [class.vclSelected]=\"isHourMarked(i * 6 + x)\" (tap)=\"onHourTap(i * 6 + x)\">{{ i * 6 + x }}</div>\n      </div>\n    </div>\n    <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\" *ngIf=\"!displayHours24\">\n      <div class=\"vclDGRow vclToolbar\">\n        <button type=\"button\" class=\"vclButton vclSquare\" style=\"visibility: hidden\">24h</button>\n        <div class=\"vclDGCell\">\n          <span class=\"vclCalHeaderLabel\">AM</span>\n        </div>\n        <button type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"onSwitch24h()\" style=\"height: 100%\">24h</button>\n      </div>\n      <div class=\"vclDGRow\" role=\"row\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [12, 1, 2, 3, 4, 5]\" [class.vclSelected]=\"isHourMarked(i % 12)\" (tap)=\"onHourTap(i % 12)\">{{ i }}</div>\n      </div>\n      <div class=\"vclDGRow\" role=\"row\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [6, 7, 8, 9, 10, 11]\" [class.vclSelected]=\"isHourMarked(i % 12)\" (tap)=\"onHourTap(i % 12)\">{{ i }}</div>\n      </div>\n      <div class=\"vclDGRow vclToolbar\">\n        <div class=\"vclDGCell\">\n          <span class=\"vclCalHeaderLabel\">PM</span>\n        </div>\n      </div>\n      <div class=\"vclDGRow\" role=\"row\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [12, 1, 2, 3, 4, 5]\" [class.vclSelected]=\"isHourMarked(i % 12 + 12)\" (tap)=\"onHourTap(i % 12 + 12)\">{{ i }}</div>\n      </div>\n      <div class=\"vclDGRow\" role=\"row\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let i of [6, 7, 8, 9, 10, 11]\" [class.vclSelected]=\"isHourMarked(i % 12 + 12)\" (tap)=\"onHourTap(i % 12 + 12)\">{{ i }}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"vclDatePicker\" role=\"listbox\" aria-multiselectable=\"false\" [ngStyle]=\"{width: '18em', 'margin-left': displayHours ? '10px' : 0}\" *ngIf=\"displayMinutes\">\n    <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\">\n      <div class=\"vclDGRow\">\n        <div class=\"vclDGCell vclToolbar\">\n          <span class=\"vclCalHeaderLabel\">Minute</span>\n        </div>\n      </div>\n      <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let i of [0, 1, 2, 3, 4, 5]\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let x of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\" [class.vclSelected]=\"isMinuteMarked(i * 10 + x)\" (tap)=\"onMinuteTap(i * 10 + x)\">:{{ i * 10 + x }}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"vclDatePicker\" role=\"listbox\" aria-multiselectable=\"false\" [ngStyle]=\"{width: '18em', 'margin-left': displayHours || displayMinutes ? '10px' : 0}\" *ngIf=\"displaySeconds\">\n    <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput\">\n      <div class=\"vclDGRow\">\n        <div class=\"vclDGCell vclToolbar\">\n          <span class=\"vclCalHeaderLabel\">Second</span>\n        </div>\n      </div>\n      <div class=\"vclDGRow\" role=\"row\" *ngFor=\"let i of [0, 1, 2, 3, 4, 5]\">\n        <div class=\"vclDGCell vclCalItem\" role=\"option\" *ngFor=\"let x of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\" [class.vclSelected]=\"isSecondMarked(i * 10 + x)\" (tap)=\"onSecondTap(i * 10 + x)\">:{{ i * 10 + x }}</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$c],
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclDatePicker]': 'true',
                '[attr.role]': '"listbox"',
                '[attr.aria-multiselectable]': 'false',
                '[style.height]': '"284px"' // TODO this fixes for IE11
            },
            styles: [".hidden{display:none;}\n     .date-picker-pointer{cursor: pointer;}\n    "]
        }),
        __metadata$D("design:paramtypes", [ChangeDetectorRef])
    ], TimePickerComponent);
    return TimePickerComponent;
}());

var __decorate$11 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLDatePickerModule = /** @class */ (function () {
    function VCLDatePickerModule() {
    }
    VCLDatePickerModule = __decorate$11([
        NgModule({
            imports: [CommonModule, VCLButtonModule$1, FormsModule],
            exports: [DatePickerComponent, TimePickerComponent],
            declarations: [DatePickerComponent, TimePickerComponent],
            providers: [],
        })
    ], VCLDatePickerModule);
    return VCLDatePickerModule;
}());

var __decorate$12 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$E = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MonthPickerComponent = /** @class */ (function () {
    function MonthPickerComponent(ref) {
        this.ref = ref;
        this.tag = MonthPickerComponent_1.Tag;
        this.now = new Date();
        this.yearMeta = {};
        this.debug = false;
        this.expanded = true;
        this.expandedChange = new EventEmitter();
        this.currentYear = this.now.getFullYear();
        this.currentYearChange = new EventEmitter();
        this.prevYearBtnTap = new EventEmitter();
        this.nextYearBtnTap = new EventEmitter();
        this.select = new EventEmitter();
        this.deselect = new EventEmitter();
        // Customization
        this.tabindex = 0;
        this.monthsPerRow = 3;
        this.locales = 'en-US';
        this.dateOptions = { month: 'short' };
        this.expandable = false;
        this.prevYearAvailable = false;
        this.nextYearAvailable = false;
        this.useAvailableMonths = false;
        this.closeBtnIcon = 'fa:times';
        this.prevYearBtnIcon = 'fa:chevron-left';
        this.nextYearBtnIcon = 'fa:chevron-right';
        this.minSelectableMonths = 0;
        this.minYear = Number.MIN_SAFE_INTEGER;
        this.maxYear = Number.MAX_SAFE_INTEGER;
        this.change = new EventEmitter();
    }
    MonthPickerComponent_1 = MonthPickerComponent;
    Object.defineProperty(MonthPickerComponent.prototype, "min", {
        set: function (value) {
            var tag = this.tag + ".min:";
            if (this.debug)
                console.log(tag, 'value:', value);
            if (!value) {
                return;
            }
            this.minValue = value;
            if (this.debug)
                console.log(tag, 'this.maxValue:', this.maxValue);
            if (this.debug)
                console.log(tag, 'this.months:', this.months);
            if (!this.maxValue || !this.months) {
                return;
            }
            this.setAvailableMonths();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MonthPickerComponent.prototype, "max", {
        set: function (value) {
            var tag = this.tag + ".max:";
            if (this.debug)
                console.log(tag, 'value:', value);
            if (!value) {
                return;
            }
            this.maxValue = value;
            if (this.debug)
                console.log(tag, 'this.minValue:', this.maxValue);
            if (this.debug)
                console.log(tag, 'this.months:', this.months);
            if (!this.minValue || !this.months) {
                return;
            }
            this.setAvailableMonths();
        },
        enumerable: true,
        configurable: true
    });
    MonthPickerComponent.prototype.setAvailableMonths = function () {
        this.useAvailableMonths = true;
        this.removeAllAvailableMonths();
        this.addAvailableMonthRange();
    };
    MonthPickerComponent.prototype.onModelChange = function (value) {
        this.onChangeCallback && this.onChangeCallback(value);
    };
    MonthPickerComponent.prototype.writeValue = function (value) {
        if (value) {
            this.selectMonth(value.getFullYear(), value.getMonth());
            this.ref.markForCheck();
        }
    };
    MonthPickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MonthPickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MonthPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tag = this.tag + ".ngOnInit()";
        // Create month labels.
        var date = new Date(this.now.getFullYear(), 0);
        this.months = Array(MonthPickerComponent_1.MonthCount).fill(0).map(function (_) {
            var month = date.toLocaleString(_this.locales, _this.dateOptions);
            date.setMonth(date.getMonth() + 1);
            return month;
        });
        if (!this.maxSelectableMonths) {
            this.maxSelectableMonths = this.colors && this.colors.length || 1;
        }
        this.availableColors = this.colors ? this.colors.map(function (color) { return true; }) : [];
        this.setYearMeta(this.currentYear);
        this.addAvailableMonthRange();
    };
    MonthPickerComponent.prototype.ngOnChanges = function (changes) {
        var tag = this.tag + ".ngOnChanges()";
        if (this.debug)
            console.log(tag, 'changes:', changes);
        if (changes.currentYear && !changes.currentYear.isFirstChange())
            this.setYearMeta(changes.currentYear.currentValue);
    };
    MonthPickerComponent.prototype.setYearMeta = function (year) {
        var tag = this.tag + ".setYearMeta()";
        if (this.debug)
            console.log(tag, 'year:', year);
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        this.currentMeta = this.yearMeta[year];
    };
    MonthPickerComponent.prototype.createYearMeta = function (year) {
        return this.months.map(function (_) { return ({}); });
    };
    MonthPickerComponent.prototype.selectMonth = function (year, month) {
        if (!this.isMonthAvailable(year, month) || this.isMonthPreselected(year, month)) {
            return;
        }
        var monthMeta = this.getYearMeta(year)[month];
        if (monthMeta.selected) {
            if (this.getSelectedDates().length <= this.minSelectableMonths) {
                return;
            }
            return this.deselectMonth(year, month);
        }
        if (this.maxSelectableMonths === 1) {
            this.iterateMonthMetas(function (year, month, mMeta) {
                mMeta.selected = mMeta === monthMeta;
            });
        }
        if (this.getSelectedDates().length < this.maxSelectableMonths) {
            monthMeta.selected = true;
        }
        if (monthMeta.selected) {
            this.setMonthBackgroundColor(year, month);
            this.notifySelect(year + "." + month);
            this.onModelChange(new Date(year, month));
            if (this.maxSelectableMonths === 1 && this.expandable) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthPickerComponent.prototype.preselectMonth = function (year, month, color) {
        var tag = this.tag + ".preselectMonth()";
        var debug = this.debug && false;
        if (debug)
            console.log(tag, year + "." + month);
        var monthMeta = this.getYearMeta(year)[month];
        if (monthMeta.selected) {
            this.deselectMonth(year, month);
        }
        monthMeta.preselected = true;
        monthMeta.color = color;
        if (debug)
            console.log(tag, 'monthMeta:', monthMeta);
        this.ref.markForCheck();
    };
    MonthPickerComponent.prototype.dePreselectMonth = function (year, month) {
        var tag = this.tag + ".dePreselectMonth()";
        var debug = this.debug && false;
        if (debug)
            console.log(tag, year + "." + month);
        if (!this.isMonthPreselected(year, month))
            return;
        var monthMeta = this.getYearMeta(year)[month];
        monthMeta.preselected = false;
        delete monthMeta.color;
        if (debug)
            console.log(tag, 'monthMeta:', monthMeta);
        this.ref.markForCheck();
    };
    MonthPickerComponent.prototype.isMonthAvailable = function (year, month) {
        return this.isDateInBounds(year, month) && (!this.useAvailableMonths ||
            this.yearMeta[year] && this.yearMeta[year][month].available);
    };
    MonthPickerComponent.prototype.isDateInBounds = function (year, month) {
        return this.isMonthInBounds(month) && this.isYearInBounds(year);
    };
    MonthPickerComponent.prototype.isMonthInBounds = function (month) {
        return month > -1 && month < MonthPickerComponent_1.MonthCount;
    };
    MonthPickerComponent.prototype.isYearInBounds = function (year) {
        return year > this.minYear && year < this.maxYear;
    };
    MonthPickerComponent.prototype.isMonthPreselected = function (year, month) {
        var tag = this.tag + ".isMonthPreselected()";
        var debug = this.debug && false;
        if (debug)
            console.log(tag, year + "." + month);
        var isMonthPreselected = !!(this.isDateInBounds(year, month) &&
            this.yearMeta[year] && this.yearMeta[year][month].preselected);
        if (debug)
            console.log(tag, 'isMonthPreselected:', isMonthPreselected);
        return isMonthPreselected;
    };
    MonthPickerComponent.prototype.getYearMeta = function (year) {
        if (!this.yearMeta[year]) {
            this.yearMeta[year] = this.createYearMeta(year);
        }
        return this.yearMeta[year];
    };
    MonthPickerComponent.prototype.iterateMonthMetas = function (cb) {
        var _this = this;
        Object.keys(this.yearMeta).forEach(function (year) {
            _this.yearMeta[year].forEach(function (monthMeta, month) {
                cb(Number(year), month, monthMeta);
            });
        });
    };
    MonthPickerComponent.prototype.getSelectedDates = function () {
        var selectedDates = [];
        this.iterateMonthMetas(function (year, month, monthMeta) {
            if (monthMeta.selected) {
                selectedDates.push(year + "." + month);
            }
        });
        return selectedDates;
    };
    MonthPickerComponent.prototype.setMonthBackgroundColor = function (year, month) {
        var color = this.getMonthBackgroundColor();
        if (color) {
            var monthMeta = this.getYearMeta(year)[month];
            monthMeta.color = color;
        }
    };
    MonthPickerComponent.prototype.getMonthBackgroundColor = function () {
        var index = this.availableColors.findIndex(function (available) { return available; });
        if (index !== -1) {
            this.availableColors[index] = false;
            return this.colors[index];
        }
    };
    MonthPickerComponent.prototype.deselectMonth = function (year, month) {
        if (this.isMonthSelected(year, month)) {
            var monthMeta = this.getYearMeta(year)[month];
            monthMeta.selected = false;
            this.clearMonthBackgroundColor(year, month);
            this.notifyDeselect(year + "." + month);
        }
    };
    MonthPickerComponent.prototype.isMonthSelected = function (year, month) {
        return this.isDateInBounds(year, month) &&
            this.yearMeta[year] && this.yearMeta[year][month].selected;
    };
    MonthPickerComponent.prototype.clearMonthBackgroundColor = function (year, month) {
        if (this.availableColors) {
            var monthMeta = this.getYearMeta(year)[month];
            if (monthMeta.color) {
                var index = this.colors.indexOf(monthMeta.color);
                this.availableColors[index] = true;
                delete monthMeta.color;
            }
        }
    };
    MonthPickerComponent.prototype.deselectAllMonths = function () {
        this.iterateMonthMetas(this.deselectMonth);
    };
    MonthPickerComponent.prototype.addAvailableMonthRange = function (min, max) {
        if (min === void 0) { min = this.minValue; }
        if (max === void 0) { max = this.maxValue; }
        var tag = this.tag + ".addAvailableMonthRange()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'min:', min);
        if (debug)
            console.log(tag, 'max:', max);
        for (var i = new Date(min); i <= max; i.setMonth(i.getMonth() + 1)) {
            this.addAvailableMonth(i.getFullYear(), i.getMonth());
        }
    };
    MonthPickerComponent.prototype.addAvailableMonth = function (year, month) {
        if (this.isDateInBounds(year, month)) {
            this.getYearMeta(year)[month].available = true;
            this.ref.markForCheck();
        }
    };
    MonthPickerComponent.prototype.removeAvailableMonth = function (year, month) {
        if (this.isDateInBounds(year, month) && this.yearMeta[year]) {
            this.yearMeta[year][month].available = false;
        }
    };
    MonthPickerComponent.prototype.removeAllAvailableMonths = function () {
        var _this = this;
        this.iterateMonthMetas(function (year, month) {
            _this.dePreselectMonth(year, month);
            _this.deselectMonth(year, month);
            _this.removeAvailableMonth(year, month);
        });
        this.ref.markForCheck();
    };
    MonthPickerComponent.prototype.onPrevYearTap = function () {
        if (this.prevYearAvailable) {
            this.currentYear--;
            this.setYearMeta(this.currentYear);
            this.currentYearChange.emit(this.currentYear);
            this.prevYearBtnTap.emit();
        }
    };
    MonthPickerComponent.prototype.onNextYearTap = function () {
        if (this.nextYearAvailable) {
            this.currentYear++;
            this.setYearMeta(this.currentYear);
            this.currentYearChange.emit(this.currentYear);
            this.nextYearBtnTap.emit();
        }
    };
    MonthPickerComponent.prototype.onCloseBtnTap = function () {
        if (this.expandable) {
            if (this.expanded) {
                this.expanded = false;
                this.expandedChange.emit(this.expanded);
            }
        }
    };
    MonthPickerComponent.prototype.notifySelect = function (date) {
        this.select.emit(date);
    };
    MonthPickerComponent.prototype.notifyDeselect = function (date) {
        this.deselect.emit(date);
    };
    MonthPickerComponent.prototype.isCurrentMonth = function (year, month) {
        return this.now.getFullYear() == year && this.now.getMonth() === month;
    };
    MonthPickerComponent.prototype.getMonth = function (year, month) {
        if (this.isDateInBounds(year, month)) {
            return Object.assign({
                date: year + "." + month,
                label: this.months[month]
            }, this.getYearMeta(year)[month]);
        }
    };
    MonthPickerComponent.Tag = 'MonthPickerComponent';
    MonthPickerComponent.MonthCount = 12;
    __decorate$12([
        Input(),
        __metadata$E("design:type", Boolean)
    ], MonthPickerComponent.prototype, "debug", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Boolean)
    ], MonthPickerComponent.prototype, "expanded", void 0);
    __decorate$12([
        Output(),
        __metadata$E("design:type", EventEmitter)
    ], MonthPickerComponent.prototype, "expandedChange", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Number)
    ], MonthPickerComponent.prototype, "currentYear", void 0);
    __decorate$12([
        Output(),
        __metadata$E("design:type", EventEmitter)
    ], MonthPickerComponent.prototype, "currentYearChange", void 0);
    __decorate$12([
        Output(),
        __metadata$E("design:type", Object)
    ], MonthPickerComponent.prototype, "prevYearBtnTap", void 0);
    __decorate$12([
        Output(),
        __metadata$E("design:type", Object)
    ], MonthPickerComponent.prototype, "nextYearBtnTap", void 0);
    __decorate$12([
        Output(),
        __metadata$E("design:type", Object)
    ], MonthPickerComponent.prototype, "select", void 0);
    __decorate$12([
        Output(),
        __metadata$E("design:type", Object)
    ], MonthPickerComponent.prototype, "deselect", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Number)
    ], MonthPickerComponent.prototype, "tabindex", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Number)
    ], MonthPickerComponent.prototype, "monthsPerRow", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Array)
    ], MonthPickerComponent.prototype, "colors", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Object)
    ], MonthPickerComponent.prototype, "locales", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Object)
    ], MonthPickerComponent.prototype, "dateOptions", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Boolean)
    ], MonthPickerComponent.prototype, "expandable", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Boolean)
    ], MonthPickerComponent.prototype, "prevYearAvailable", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Boolean)
    ], MonthPickerComponent.prototype, "nextYearAvailable", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Boolean)
    ], MonthPickerComponent.prototype, "useAvailableMonths", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", String)
    ], MonthPickerComponent.prototype, "closeBtnIcon", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", String)
    ], MonthPickerComponent.prototype, "prevYearBtnIcon", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", String)
    ], MonthPickerComponent.prototype, "nextYearBtnIcon", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Number)
    ], MonthPickerComponent.prototype, "maxSelectableMonths", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Number)
    ], MonthPickerComponent.prototype, "minSelectableMonths", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Number)
    ], MonthPickerComponent.prototype, "minYear", void 0);
    __decorate$12([
        Input(),
        __metadata$E("design:type", Number)
    ], MonthPickerComponent.prototype, "maxYear", void 0);
    __decorate$12([
        Output(),
        __metadata$E("design:type", Object)
    ], MonthPickerComponent.prototype, "change", void 0);
    __decorate$12([
        Input('min'),
        __metadata$E("design:type", Date),
        __metadata$E("design:paramtypes", [Date])
    ], MonthPickerComponent.prototype, "min", null);
    __decorate$12([
        Input('max'),
        __metadata$E("design:type", Date),
        __metadata$E("design:paramtypes", [Date])
    ], MonthPickerComponent.prototype, "max", null);
    MonthPickerComponent = MonthPickerComponent_1 = __decorate$12([
        Component({
            selector: 'vcl-month-picker',
            template: "<div class=\"vclDatePicker\">\n  <div class=\"vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput vclNoMargin\"\n    [attr.role]=\"'grid'\"\n    [attr.tabindex]=\"tabindex\"\n    [attr.aria-multiselectable]=\"maxSelectableMonths > 1\"\n    [attr.aria-expanded]=\"expanded\">\n\n    <div class=\"vclDGRow\">\n      <div class=\"vclToolbar vclLayoutHorizontal vclLayoutFlex vclLayoutJustified vclLayoutCenter\" role=\"menubar\" aria-level=\"1\">\n        <div class=\"vclLayoutHorizontal vclLayoutCenter\">\n          <button vcl-button class=\"vclButton vclTransparent vclLayoutHorizontal vclLayoutCenterCenter\"\n            type=\"button\"\n            [class.vclDisabled]=\"!prevYearAvailable\"\n            [icon]=\"prevYearBtnIcon\"\n            (click)=\"onPrevYearTap()\">\n          </button>\n\n          <span class=\"vclCalHeaderLabel\">{{ currentYear }}</span>\n\n          <button vcl-button\n            type=\"button\"\n            class=\"vclButton vclTransparent vclLayoutHorizontal vclLayoutCenterCenter\"\n            [class.vclDisabled]=\"!nextYearAvailable\"\n            [icon]=\"nextYearBtnIcon\"\n            (click)=\"onNextYearTap()\">\n          </button>\n        </div>\n\n        <div class=\"vclLayoutHorizontal vclLayoutFlex vclLayoutEndJustified\">\n          <button vcl-button *ngIf=\"expandable\"\n            type=\"button\"\n            class=\"vclButton vclTransparent vclLayoutHorizontal vclLayoutCenterCenter\"\n            [icon]=\"closeBtnIcon\"\n            (click)=\"onCloseBtnTap()\">\n          </button>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"vclSeparator\"></div>\n\n    <ng-template ngFor let-iM [ngForOf]=\"months\" let-i=\"index\">\n      <div *ngIf=\"i % monthsPerRow === 0\" class=\"vclDGRow\" role=\"row\">\n        <div *ngFor=\"let jM of months.slice(i, (i + monthsPerRow > months.length ? months.length : i + monthsPerRow)); let j = index;\"\n          (click)=\"selectMonth(currentYear, i+j)\"\n          class=\"vclDGCell vclCalItem\"\n          [class.vclAvailable]=\"!useAvailableMonths || currentMeta[i+j].available\"\n          [class.vclUnavailable]=\"useAvailableMonths && !currentMeta[i+j].available\"\n          [class.vclToday]=\"isCurrentMonth(i+j)\"\n          [class.vclOtherMonth]=\"!isCurrentMonth(i+j)\"\n          [class.vclDisabled]=\"useAvailableMonths && !currentMeta[i+j].available\"\n          [class.vclSelected]=\"currentMeta[i+j].selected || currentMeta[i+j].preselected\"\n          [style.background-color]=\"currentMeta[i+j].color\"\n          [style.order]=\"i+j\"\n          [attr.aria-selected]=\"currentMeta[i+j].selected || currentMeta[i+j].preselected\"\n          [tabindex]=\"i+j\"\n          role=\"gridcell\">\n            <div class=\"vclLayoutHorizontal vclLayoutCenterJustified vclMonthPickerListItemLabel\">\n              {{months[i + j]}}\n            </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return MonthPickerComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata$E("design:paramtypes", [ChangeDetectorRef])
    ], MonthPickerComponent);
    return MonthPickerComponent;
    var MonthPickerComponent_1;
}());

var __decorate$13 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLMonthPickerModule = /** @class */ (function () {
    function VCLMonthPickerModule() {
    }
    VCLMonthPickerModule = __decorate$13([
        NgModule({
            imports: [CommonModule, VCLButtonModule$1],
            exports: [MonthPickerComponent],
            declarations: [MonthPickerComponent],
            providers: [],
        })
    ], VCLMonthPickerModule);
    return VCLMonthPickerModule;
}());

var __decorate$14 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$F = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LabelComponent = /** @class */ (function () {
    function LabelComponent() {
    }
    Object.defineProperty(LabelComponent.prototype, "vclPrimary", {
        get: function () {
            return this.type === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "vclSuccess", {
        get: function () {
            return this.type === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "vclInfo", {
        get: function () {
            return this.type === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "vclWarning", {
        get: function () {
            return this.type === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "vclError", {
        get: function () {
            return this.type === 'error';
        },
        enumerable: true,
        configurable: true
    });
    __decorate$14([
        Input('vcl-label'),
        __metadata$F("design:type", Object)
    ], LabelComponent.prototype, "type", void 0);
    __decorate$14([
        HostBinding('class.vclPrimary'),
        __metadata$F("design:type", Object),
        __metadata$F("design:paramtypes", [])
    ], LabelComponent.prototype, "vclPrimary", null);
    __decorate$14([
        HostBinding('class.vclSuccess'),
        __metadata$F("design:type", Object),
        __metadata$F("design:paramtypes", [])
    ], LabelComponent.prototype, "vclSuccess", null);
    __decorate$14([
        HostBinding('class.vclInfo'),
        __metadata$F("design:type", Object),
        __metadata$F("design:paramtypes", [])
    ], LabelComponent.prototype, "vclInfo", null);
    __decorate$14([
        HostBinding('class.vclWarning'),
        __metadata$F("design:type", Object),
        __metadata$F("design:paramtypes", [])
    ], LabelComponent.prototype, "vclWarning", null);
    __decorate$14([
        HostBinding('class.vclError'),
        __metadata$F("design:type", Object),
        __metadata$F("design:paramtypes", [])
    ], LabelComponent.prototype, "vclError", null);
    LabelComponent = __decorate$14([
        Directive({
            selector: '[vcl-label]',
            host: {
                '[class.vclLabel]': 'true'
            }
        })
    ], LabelComponent);
    return LabelComponent;
}());

var __decorate$15 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLLabelModule = /** @class */ (function () {
    function VCLLabelModule() {
    }
    VCLLabelModule = __decorate$15([
        NgModule({
            imports: [CommonModule, VCLMetalistModule],
            exports: [LabelComponent],
            declarations: [LabelComponent],
            providers: [],
        })
    ], VCLLabelModule);
    return VCLLabelModule;
}());

var __decorate$16 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$G = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MoveDirection;
(function (MoveDirection) {
    MoveDirection[MoveDirection["Left"] = 0] = "Left";
    MoveDirection[MoveDirection["Right"] = 1] = "Right";
})(MoveDirection || (MoveDirection = {}));
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$d = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SliderComponent; }),
    multi: true
};
var SliderComponent = /** @class */ (function () {
    function SliderComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.disabled = false;
        this.min = 0;
        this.max = 10;
        this.wheel = false;
        this.lock = false;
        this.focused = false;
        this.percentLeftKnob = 0;
        this.scalePoints = [];
        this.firstPan = true;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(SliderComponent.prototype, "pmin", {
        get: function () {
            var min = Number(this.min);
            return !isNaN(min) ? min : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "pmax", {
        get: function () {
            var max = Number(this.max);
            return !isNaN(max) ? max : 0;
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngAfterContentInit = function () {
        this.percentLeftKnob = this.calculatePercentLeftKnob(this.value);
    };
    Object.defineProperty(SliderComponent.prototype, "valueValid", {
        get: function () {
            return this.validateValue(this.value);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.validateValue = function (value) {
        return typeof this.value === 'number' && this.value >= this.pmin && this.value <= this.pmax;
    };
    Object.defineProperty(SliderComponent.prototype, "showScale", {
        get: function () {
            return Array.isArray(this.scale) || (typeof this.scale === 'boolean' && this.scale);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngOnChanges = function (changes) {
        if ('min' in changes || 'max' in changes || 'scale' in changes) {
            this.updateScalePoints();
        }
        if ('value' in changes) {
            this.percentLeftKnob = this.calculatePercentLeftKnob(this.value);
        }
    };
    SliderComponent.prototype.setValue = function (value, updateKnob) {
        this.value = Number(value);
        if (updateKnob) {
            this.percentLeftKnob = this.calculatePercentLeftKnob(value);
        }
        this.valueChange.emit(this.value);
        this.onChange(this.value);
    };
    SliderComponent.prototype.calculatePercentLeftKnob = function (value) {
        if (!this.validateValue(value)) {
            return 0;
        }
        var rangeLength = this.pmax - this.pmin;
        var valueLeft = value - this.pmin;
        var delta = rangeLength / valueLeft;
        return 100 / delta;
    };
    SliderComponent.prototype.percentToValue = function (per) {
        var rangeLength = this.pmax - this.pmin;
        var newVal = (rangeLength / 100) * per;
        return Math.round(newVal);
    };
    SliderComponent.prototype.updateScalePoints = function () {
        var _this = this;
        if (Array.isArray(this.scale)) {
            var steps_1 = this.scale.length;
            this.scalePoints = this.scale.map(function (label, idx) {
                return {
                    label: label,
                    percent: (100 / (steps_1 - 1)) * idx
                };
            });
        }
        else {
            var steps_2;
            if (typeof this.scale === 'number') {
                steps_2 = this.scale;
            }
            else {
                steps_2 = this.pmax - this.pmin + 1;
            }
            this.scalePoints = Array.from(Array(steps_2).keys()).map(function (i) {
                var percent = (100 / (steps_2 - 1)) * i;
                return {
                    label: _this.percentToValue(percent).toString(),
                    percent: percent
                };
            });
        }
    };
    SliderComponent.prototype.closestScalePoint = function (percentValue) {
        var closest = this.scalePoints[0];
        var dist = 100;
        this.scalePoints.forEach(function (sP) {
            var pDist = Math.abs(sP.percent - percentValue);
            if (pDist < dist) {
                closest = sP;
                dist = pDist;
            }
        });
        return closest.percent;
    };
    SliderComponent.prototype.deltaPxToPercent = function (deltaPx) {
        var fullPx = this.scaleElement.nativeElement.offsetWidth;
        var deltaPer = 100 / (fullPx / deltaPx);
        return Math.round(deltaPer * 100) / 100; // round 2 decs
    };
    SliderComponent.prototype.onFocus = function () {
        this.focused = true;
    };
    SliderComponent.prototype.onBlur = function () {
        this.focused = false;
        this.onTouched();
    };
    /**
     * clicking the rail should also reposition the bar
     */
    SliderComponent.prototype.onTap = function (event) {
        if (this.disabled || event.target.className == 'vclSliderKnob') {
            return;
        }
        var railX = event.changedPointers[0].offsetX;
        if (railX <= 0) {
            return;
        }
        var percentLeftKnob = this.deltaPxToPercent(railX);
        this.percentLeftKnob = this.lock ? this.closestScalePoint(percentLeftKnob) : percentLeftKnob;
        var value = this.percentToValue(this.percentLeftKnob);
        this.setValue(value, false);
    };
    SliderComponent.prototype.selectPoint = function (p) {
        var value = this.percentToValue(p.percent);
        this.setValue(value, true);
    };
    SliderComponent.prototype.move = function (direction) {
        if (this.lock) {
            this.moveToPoint(direction);
        }
        else {
            this.moveValue(direction);
        }
    };
    SliderComponent.prototype.moveToPoint = function (direction) {
        var currentPointValue = this.closestScalePoint(this.calculatePercentLeftKnob(this.value));
        var currentPoint = this.scalePoints.find(function (p) { return p.percent == currentPointValue; });
        var i = currentPoint ? this.scalePoints.indexOf(currentPoint) : 0;
        var nextPoint;
        if (direction == MoveDirection.Right) {
            i++;
            if (i >= this.scalePoints.length) {
                i = this.scalePoints.length - 1;
            }
            nextPoint = this.scalePoints[i];
        }
        else {
            i--;
            if (i < 0) {
                i = 0;
            }
            nextPoint = this.scalePoints[i];
        }
        var value = this.percentToValue(nextPoint.percent);
        this.setValue(value, true);
    };
    SliderComponent.prototype.moveValue = function (direction) {
        var value = this.valueValid ? this.value : this.pmin;
        if (direction === MoveDirection.Right) {
            value++;
            if (value > this.pmax)
                value = this.pmax;
        }
        else {
            value--;
            if (value < this.pmin)
                value = this.pmin;
        }
        this.setValue(value, true);
    };
    SliderComponent.prototype.onWheel = function (ev) {
        if (this.disabled || !this.wheel) {
            return;
        }
        if (ev.deltaY < 0) {
            this.move(MoveDirection.Right);
            ev.preventDefault();
        }
        else if (ev.deltaY > 0) {
            this.move(MoveDirection.Left);
            ev.preventDefault();
        }
    };
    SliderComponent.prototype.keydown = function (ev) {
        if (this.disabled) {
            return;
        }
        switch (ev.code) {
            case 'ArrowLeft':
                this.move(MoveDirection.Left);
                ev.preventDefault();
                break;
            case 'ArrowRight':
                this.move(MoveDirection.Right);
                ev.preventDefault();
                break;
            case 'Space':
                this.moveToPoint(MoveDirection.Right);
                ev.preventDefault();
                break;
        }
    };
    SliderComponent.prototype.onPan = function (ev) {
        if (this.disabled) {
            return;
        }
        if (this.firstPan) {
            this.firstPan = false;
            this.lastPercentLeftKnob = this.percentLeftKnob;
        }
        var deltaPx = ev.deltaX;
        var percentLeftKnob = this.lastPercentLeftKnob + this.deltaPxToPercent(deltaPx);
        if (percentLeftKnob < 0) {
            percentLeftKnob = 0;
        }
        else if (percentLeftKnob > 100) {
            percentLeftKnob = 100;
        }
        if (this.lock) {
            this.percentLeftKnob = this.closestScalePoint(percentLeftKnob);
        }
        else {
            var newValue = this.percentToValue(percentLeftKnob);
            this.percentLeftKnob = this.calculatePercentLeftKnob(newValue);
        }
        if (ev.isFinal) {
            this.firstPan = true;
            var value = this.percentToValue(this.percentLeftKnob);
            this.setValue(value, false);
        }
    };
    SliderComponent.prototype.writeValue = function (value) {
        this.setValue(value, true);
        this.cdRef.markForCheck();
    };
    SliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate$16([
        HostBinding(),
        __metadata$G("design:type", Object)
    ], SliderComponent.prototype, "tabindex", void 0);
    __decorate$16([
        Input(),
        __metadata$G("design:type", Number)
    ], SliderComponent.prototype, "value", void 0);
    __decorate$16([
        Output(),
        __metadata$G("design:type", Object)
    ], SliderComponent.prototype, "valueChange", void 0);
    __decorate$16([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata$G("design:type", Boolean)
    ], SliderComponent.prototype, "disabled", void 0);
    __decorate$16([
        Input(),
        __metadata$G("design:type", Number)
    ], SliderComponent.prototype, "min", void 0);
    __decorate$16([
        Input(),
        __metadata$G("design:type", Number)
    ], SliderComponent.prototype, "max", void 0);
    __decorate$16([
        Input('mousewheel'),
        __metadata$G("design:type", Boolean)
    ], SliderComponent.prototype, "wheel", void 0);
    __decorate$16([
        Input(),
        __metadata$G("design:type", Boolean)
    ], SliderComponent.prototype, "lock", void 0);
    __decorate$16([
        Input(),
        __metadata$G("design:type", Object)
    ], SliderComponent.prototype, "scale", void 0);
    __decorate$16([
        HostBinding('class.vclFocused'),
        __metadata$G("design:type", Boolean)
    ], SliderComponent.prototype, "focused", void 0);
    __decorate$16([
        ViewChild('scale'),
        __metadata$G("design:type", ElementRef)
    ], SliderComponent.prototype, "scaleElement", void 0);
    __decorate$16([
        HostListener('focus'),
        __metadata$G("design:type", Function),
        __metadata$G("design:paramtypes", []),
        __metadata$G("design:returntype", void 0)
    ], SliderComponent.prototype, "onFocus", null);
    __decorate$16([
        HostListener('blur'),
        __metadata$G("design:type", Function),
        __metadata$G("design:paramtypes", []),
        __metadata$G("design:returntype", void 0)
    ], SliderComponent.prototype, "onBlur", null);
    __decorate$16([
        HostListener('tap', ['$event']),
        __metadata$G("design:type", Function),
        __metadata$G("design:paramtypes", [Object]),
        __metadata$G("design:returntype", void 0)
    ], SliderComponent.prototype, "onTap", null);
    __decorate$16([
        HostListener('wheel', ['$event']),
        __metadata$G("design:type", Function),
        __metadata$G("design:paramtypes", [Object]),
        __metadata$G("design:returntype", void 0)
    ], SliderComponent.prototype, "onWheel", null);
    __decorate$16([
        HostListener('keydown', ['$event']),
        __metadata$G("design:type", Function),
        __metadata$G("design:paramtypes", [Object]),
        __metadata$G("design:returntype", void 0)
    ], SliderComponent.prototype, "keydown", null);
    SliderComponent = __decorate$16([
        Component({
            selector: 'vcl-slider',
            template: "<div class=\"vclSliderRail\">\n  <div class=\"vclSliderScale\" horizontal=\"\" justified=\"\" layout=\"\" #scale>\n    <div *ngFor=\"let point of scalePoints\" class=\"vclSliderScalePointMark\"></div>\n  </div>\n  <div *ngIf=\"valueValid\" class=\"vclSliderKnobContainer\" [style.left]=\"percentLeftKnob + '%'\" (pan)=\"onPan($event)\">\n    <div  class=\"vclSliderKnob\"></div>\n  </div>\n</div>\n<div *ngIf=\"showScale\" class=\"vclSliderScale\" horizontal=\"\" justified=\"\" layout=\"\">\n  <div *ngFor=\"let point of scalePoints\" class=\"vclSliderScalePointLabel\" (click)=\"selectPoint(point)\">{{point.label}}</div>\n</div>\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$d],
            host: {
                '[class.vclSlider]': 'true'
            },
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata$G("design:paramtypes", [ChangeDetectorRef])
    ], SliderComponent);
    return SliderComponent;
}());

var __decorate$17 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLSliderModule = /** @class */ (function () {
    function VCLSliderModule() {
    }
    VCLSliderModule = __decorate$17([
        NgModule({
            imports: [CommonModule],
            exports: [SliderComponent],
            declarations: [SliderComponent],
            providers: [],
        })
    ], VCLSliderModule);
    return VCLSliderModule;
}());

var __decorate$18 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$H = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var InputControlGroup = /** @class */ (function () {
    function InputControlGroup() {
        this.inline = false;
    }
    Object.defineProperty(InputControlGroup.prototype, "notInline", {
        get: function () {
            return !this.inline;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$18([
        Input(),
        __metadata$H("design:type", Object)
    ], InputControlGroup.prototype, "type", void 0);
    __decorate$18([
        Input(),
        __metadata$H("design:type", String)
    ], InputControlGroup.prototype, "label", void 0);
    __decorate$18([
        HostBinding('class.vclInputInlineControlGroup'),
        Input(),
        __metadata$H("design:type", Object)
    ], InputControlGroup.prototype, "inline", void 0);
    __decorate$18([
        HostBinding('class.vclInputControlGroup'),
        __metadata$H("design:type", Object),
        __metadata$H("design:paramtypes", [])
    ], InputControlGroup.prototype, "notInline", null);
    InputControlGroup = __decorate$18([
        Component({
            selector: 'vcl-input-control-group, [vcl-input-control-group]',
            changeDetection: ChangeDetectionStrategy.OnPush,
            template: "<ng-content></ng-content>\n\n<div *ngIf=\"type && label && label!==''\" class=\"vclFormControlHint\"\n  [class.vclError]=\"type=='error'\"\n  [class.vclWarning]=\"type=='warning'\"\n  [class.vclSuccess]=\"type=='success'\">\n  {{label}}\n</div>\n"
        })
    ], InputControlGroup);
    return InputControlGroup;
}());

var __decorate$19 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLInputControlGroupModule = /** @class */ (function () {
    function VCLInputControlGroupModule() {
    }
    VCLInputControlGroupModule = __decorate$19([
        NgModule({
            imports: [CommonModule],
            exports: [InputControlGroup],
            declarations: [InputControlGroup],
            providers: [],
        })
    ], VCLInputControlGroupModule);
    return VCLInputControlGroupModule;
}());

var __extends$9 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AlertType;
(function (AlertType) {
    AlertType[AlertType["None"] = 0] = "None";
    AlertType[AlertType["Question"] = 1] = "Question";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Success"] = 3] = "Success";
    AlertType[AlertType["Warning"] = 4] = "Warning";
    AlertType[AlertType["Error"] = 5] = "Error";
})(AlertType || (AlertType = {}));
var AlertAlignment;
(function (AlertAlignment) {
    AlertAlignment[AlertAlignment["Left"] = 0] = "Left";
    AlertAlignment[AlertAlignment["Center"] = 1] = "Center";
    AlertAlignment[AlertAlignment["Right"] = 2] = "Right";
})(AlertAlignment || (AlertAlignment = {}));
var AlertInput;
(function (AlertInput) {
    AlertInput[AlertInput["None"] = 0] = "None";
    AlertInput[AlertInput["Text"] = 1] = "Text";
})(AlertInput || (AlertInput = {}));
var ALERT_DEFAULTS = {
    type: AlertType.None,
    html: false,
    showConfirmButton: true,
    showCancelButton: false,
    showCloseButton: false,
    offClickClose: true,
    escClose: true,
    cancelButtonLabel: 'Cancel',
    cancelButtonClass: 'vclDanger',
    confirmButtonLabel: 'OK',
    confirmButtonClass: 'vclEmphasized',
    loader: false,
    loaderOnConfirm: false,
    input: AlertInput.None,
    contentAlignment: AlertAlignment.Left,
    titleAlignment: AlertAlignment.Left,
    iconAlignment: AlertAlignment.Left,
    buttonAlignment: AlertAlignment.Right,
};
var TYPE_CLASS_MAP = (_a = {},
    _a[AlertType.None] = {
        alertClass: '',
        iconClass: ''
    },
    _a[AlertType.Question] = {
        alertClass: '',
        iconClass: 'fa fa-question-circle'
    },
    _a[AlertType.Info] = {
        alertClass: 'vclInfo',
        iconClass: 'fa fa-info-circle'
    },
    _a[AlertType.Success] = {
        alertClass: 'vclSuccess',
        iconClass: 'fa fa-check-circle'
    },
    _a[AlertType.Warning] = {
        alertClass: 'vclWarning',
        iconClass: 'fa fa-warning'
    },
    _a[AlertType.Error] = {
        alertClass: 'vclError',
        iconClass: 'fa fa-exclamation-circle'
    },
    _a);
var TEXT_ALIGNMENT_CLASS_MAP = (_b = {},
    _b[AlertAlignment.Left] = 'vclAlignLeft',
    _b[AlertAlignment.Center] = 'vclAlignCentered',
    _b[AlertAlignment.Right] = 'vclAlignRight',
    _b);
var BUTTON_ALIGNMENT_CLASS_MAP = (_c = {},
    _c[AlertAlignment.Left] = 'vclLayoutStartJustified',
    _c[AlertAlignment.Center] = 'vclLayoutCenterJustified',
    _c[AlertAlignment.Right] = 'vclLayoutEndJustified',
    _c);
var AlertError = /** @class */ (function (_super) {
    __extends$9(AlertError, _super);
    function AlertError(reason, message) {
        var _this = _super.call(this, message) || this;
        _this.reason = reason;
        return _this;
    }
    return AlertError;
}(Error));
var _a, _b, _c;

var __decorate$1a = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$I = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function dismiss(layer, err) {
    if (err instanceof Error) {
        layer.closeWithError(err);
    }
    else {
        layer.closeWithError(new AlertError(err));
    }
}
var AlertComponent = /** @class */ (function () {
    function AlertComponent(elementRef, alertLayer, layerService, cdRef) {
        this.elementRef = elementRef;
        this.alertLayer = alertLayer;
        this.layerService = layerService;
        this.cdRef = cdRef;
        this.alert = {};
        this.alertLayer = alertLayer;
    }
    AlertComponent.prototype.onKeyUp = function (ev) {
        // Check if the top layer is the alert layer
        if (this.layerService.getTopLayer() === this.alertLayer) {
            if (ev.key === 'Escape' && this.alert.escClose) {
                dismiss(this.alertLayer, 'esc');
            }
            else if (ev.key === 'Enter') {
                this.confirm();
            }
        }
    };
    Object.defineProperty(AlertComponent.prototype, "alertClass", {
        get: function () {
            return TYPE_CLASS_MAP[this.alert.type || AlertType.None].alertClass + ' ' + (this.alert.customClass || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "iconClass", {
        get: function () {
            return TYPE_CLASS_MAP[this.alert.type || AlertType.None].iconClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "titleAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.titleAlignment || AlertAlignment.Left];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "iconAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.iconAlignment || AlertAlignment.Center];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "contentAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.contentAlignment || AlertAlignment.Left];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "buttonAlignmentClass", {
        get: function () {
            return BUTTON_ALIGNMENT_CLASS_MAP[this.alert.buttonAlignment || AlertAlignment.Right];
        },
        enumerable: true,
        configurable: true
    });
    AlertComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.focus();
    };
    AlertComponent.prototype.confirm = function () {
        var _this = this;
        if (this.alert.loader)
            return;
        var result = {};
        if (this.alert.input) {
            if (this.alert.inputValidator) {
                try {
                    var valid = this.alert.inputValidator(this.value);
                    if (!valid) {
                        this.validationError = 'Invalid value';
                        return;
                    }
                    result.value = this.value;
                }
                catch (ex) {
                    this.validationError = String(ex);
                    return;
                }
            }
        }
        if (this.alert.confirmAction) {
            this.alert.loader = true;
            this.cdRef.markForCheck();
            var $ = from(typeof this.alert.confirmAction === 'function' ? this.alert.confirmAction(result) : this.alert.confirmAction);
            $.subscribe(function (value) {
                var asyncResult = {};
                asyncResult.value = value;
                _this.alertLayer.send(asyncResult);
            }, function (err) {
                dismiss(_this.alertLayer, err);
            }, function () {
                _this.alertLayer.close();
            });
        }
        else {
            if (this.alert.loaderOnConfirm) {
                this.alert.loader = true;
                this.cdRef.markForCheck();
                result.close = function () { return _this.alertLayer.close(); };
                this.alertLayer.send(result);
            }
            else {
                this.alertLayer.close(result);
            }
        }
    };
    AlertComponent.prototype.cancel = function () {
        dismiss(this.alertLayer, 'cancel');
    };
    AlertComponent.prototype.close = function () {
        dismiss(this.alertLayer, 'close');
    };
    AlertComponent.prototype.valueChange = function (value) {
        this.value = value;
    };
    __decorate$1a([
        Input(),
        __metadata$I("design:type", Object)
    ], AlertComponent.prototype, "alert", void 0);
    __decorate$1a([
        HostListener('keyup', ['$event']),
        __metadata$I("design:type", Function),
        __metadata$I("design:paramtypes", [KeyboardEvent]),
        __metadata$I("design:returntype", void 0)
    ], AlertComponent.prototype, "onKeyUp", null);
    AlertComponent = __decorate$1a([
        Component({
            template: "<div class=\"vclNotification\" [ngClass]=\"alertClass\">\n\n  <div class=\"vclNotificationHeader vclLayoutHorizontal vclLayoutCenter\" [ngClass]=\"titleAlignmentClass\" *ngIf=\"alert.title\">\n    <div class=\"vclLayoutFlex\">{{alert.title}}</div>\n    <button *ngIf=\"alert.showCloseButton\" type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"close()\"><i class=\"fa fa-times\"></i></button>\n  </div>\n\n  <div class=\"vclNotificationContent vclLayoutVertical vclLayoutCenterJustified \">\n\n    <div *ngIf=\"iconClass\" class=\"vclNotificationIconContainer\" [ngClass]=\"iconAlignmentClass\">\n      <span class=\"vclIcon vclNotificationIcon\" [ngClass]=\"iconClass\"></span>\n    </div>\n\n    <div style=\"padding-bottom: 1em\" [ngClass]=\"contentAlignmentClass\" *ngIf=\"alert.text && !alert.html\">{{alert.text}}</div>\n    <div style=\"padding-bottom: 1em\" [ngClass]=\"contentAlignmentClass\" [innerHtml]=\"alert.text\" *ngIf=\"alert.text && alert.html\"></div>\n\n    <div style=\"padding-bottom: 0.5em\" *ngIf=\"alert.input\"><alert-input [alert]=\"alert\" (valueChange)=\"valueChange($event)\"></alert-input></div>\n\n    <div *ngIf=\"validationError\" class=\"vclNotification vclError\">\n      <div class=\"vclNotificationContent\">\n        <vcl-icogram label=\"{{validationError}}\" prepIcon=\"fa:exclamation-circle\"></vcl-icogram>\n      </div>\n    </div>\n\n    <div class=\"vclLayoutHorizontal vclLooseButtonGroup\" [ngClass]=\"buttonAlignmentClass\">\n      <button vcl-button\n        *ngIf=\"!!alert.showConfirmButton\"\n        type=\"button\"\n        (click)=\"confirm()\"\n        [style.background-color]=\"alert.confirmButtonColor\"\n        [ngClass]=\"alert.confirmButtonClass\"\n        [disabled]=\"alert.loader\"        \n        [appIcon]=\"alert.loader ? null : alert.confirmButtonAppIcon\"\n        [prepIcon]=\"alert.loader ? 'fa:refresh fa-spin' : alert.confirmButtonPrepIcon\"\n        [label]=\"alert.confirmButtonLabel\"\n        >\n      </button>\n      <button vcl-button\n        *ngIf=\"!!alert.showCancelButton\"\n        type=\"button\"\n        [style.background-color]=\"!!alert.cancelButtonColor\"\n        [ngClass]=\"alert.cancelButtonClass\"\n        [appIcon]=\"alert.cancelButtonAppIcon\"\n        [prepIcon]=\"alert.cancelButtonPrepIcon\"\n        [disabled]=\"(!alert.showConfirmButton && !!alert.loader)\"\n        [appIcon]=\"(!alert.showConfirmButton && !!alert.loader) ? null : alert.cancelButtonAppIcon\"\n        [prepIcon]=\"(!alert.showConfirmButton && !!alert.loader) ? 'fa:refresh fa-spin' : alert.cancelButtonPrepIcon\"        \n        [label]=\"alert.cancelButtonLabel\"        \n        (click)=\"cancel()\"\n        >\n      </button>\n    </div>\n    <div *ngIf=\"!alert.showCancelButton && !alert.showConfirmButton && !!alert.loader\">\n      <div class=\"vclLayoutHorizontal vclLayoutCenterJustified\">\n        <div class=\"vclBusyIndicator vclIcogram vclLayoutVertical vclLayoutJustified\" role=\"status\">\n            <div class=\"vclIcon fa fa-circle-o-notch fa-spin fa-3x fa-fw\" aria-hidden=\"true\" aria-label=\"loading\u2026\" role=\"img\"></div>\n          <div class=\"vclText\">Loading\u2026</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[tabindex]': '0',
                '[style.outline]': '"none"'
            }
        }),
        __metadata$I("design:paramtypes", [ElementRef, LayerRef, LayerService, ChangeDetectorRef])
    ], AlertComponent);
    return AlertComponent;
}());

var __decorate$1b = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$J = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TODO: support text, password, textarea, select, radio, checkbox file.
var AlertInputComponent = /** @class */ (function () {
    function AlertInputComponent() {
        this.alert = {};
        this.valueChange = new EventEmitter();
        this.inputValue = '';
    }
    AlertInputComponent.prototype.ngOnInit = function () {
        if (this.control === 'input' && typeof this.alert.inputValue === 'string') {
            this.inputValue = this.alert.inputValue;
        }
    };
    AlertInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.input && this.input.nativeElement && this.input.nativeElement.focus) {
            setTimeout(function () { return _this.input.nativeElement.focus(); }, 1);
        }
    };
    Object.defineProperty(AlertInputComponent.prototype, "control", {
        get: function () {
            switch (this.alert.input) {
                case AlertInput.Text: return 'input';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertInputComponent.prototype, "placeholder", {
        get: function () {
            return this.alert.inputPlaceholder || '';
        },
        enumerable: true,
        configurable: true
    });
    AlertInputComponent.prototype.inputValueChange = function (value) {
        this.valueChange.emit(value);
    };
    __decorate$1b([
        ViewChild('input'),
        __metadata$J("design:type", ElementRef)
    ], AlertInputComponent.prototype, "input", void 0);
    __decorate$1b([
        Input(),
        __metadata$J("design:type", Object)
    ], AlertInputComponent.prototype, "alert", void 0);
    __decorate$1b([
        Output(),
        __metadata$J("design:type", Object)
    ], AlertInputComponent.prototype, "valueChange", void 0);
    AlertInputComponent = __decorate$1b([
        Component({
            template: "<input #input *ngIf=\"control==='input'\" class=\"vclInput\" [placeholder]=\"placeholder\" [ngModel]=\"inputValue\" (ngModelChange)=\"inputValueChange($event)\" autofocus>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'alert-input'
        })
    ], AlertInputComponent);
    return AlertInputComponent;
}());

var __decorate$1c = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$K = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlertService = /** @class */ (function () {
    function AlertService(ls) {
        this.ls = ls;
        this.noop = function () { };
    }
    AlertService.prototype.alert = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text }, opts);
    };
    AlertService.prototype.info = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Info }, opts);
    };
    AlertService.prototype.success = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Success }, opts);
    };
    AlertService.prototype.warning = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Warning }, opts);
    };
    AlertService.prototype.error = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Error }, opts);
    };
    AlertService.prototype.question = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Question, showCancelButton: true }, opts);
    };
    AlertService.prototype.open = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        return this.create.apply(this, opts).open();
    };
    AlertService.prototype.create = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var alert = Object.assign.apply(Object, [{}, ALERT_DEFAULTS].concat(opts));
        return this.ls.create(AlertComponent, {
            offClick: function (layer) {
                dismiss(layer, 'offClick');
            },
            modal: true,
            transparent: true,
            attrs: { alert: alert }
        });
    };
    AlertService = __decorate$1c([
        Injectable(),
        __metadata$K("design:paramtypes", [LayerService])
    ], AlertService);
    return AlertService;
}());

var __decorate$1d = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLAlertModule = /** @class */ (function () {
    function VCLAlertModule() {
    }
    VCLAlertModule = __decorate$1d([
        NgModule({
            imports: [
                FormsModule,
                CommonModule,
                VCLButtonModule$1,
                VCLInputModule,
                VCLIcogramModule,
                VCLLayerModule.forChild({ layers: [] })
            ],
            exports: [],
            declarations: [AlertComponent, AlertInputComponent],
            entryComponents: [AlertComponent],
            providers: [AlertService],
        })
    ], VCLAlertModule);
    return VCLAlertModule;
}());

var __decorate$1e = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$L = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CIRCULAR = 'data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iCiAgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIgogICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIgoJd2lkdGg9IjEwMCUiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KCTxnPgoJICAgIDxkZWZzPgoJICAgIAk8Y2xpcFBhdGggaWQ9ImNsaXAiPgoJICAgICAgCQk8cGF0aCAgZD0iTSA1MCA1MCBMIDM1IDAgTCA2NSAwIHoiIC8+CgkJICAgIDwvY2xpcFBhdGg+CgkgICAgCTxlbGxpcHNlIGlkPSJDaXJjbGVCbG9jayIgY2xpcC1wYXRoPSJ1cmwoI2NsaXApIiBjeD0iNTAiIGN5PSI1MCIgcng9IjQwIiByeT0iNDAiIHN0eWxlPSJmaWxsOm5vbmU7IHN0cm9rZTojRThFOEU4IiBzdHJva2Utd2lkdGg9IjE1Ii8+CgkgICAgPC9kZWZzPgoKCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoNDAgNTAgNTApIiAvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSg4MCA1MCA1MCkiIC8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMTYwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgyMDAgNTAgNTApIi8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDI0MCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMjgwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgzMjAgNTAgNTApIi8+CgoJCTxlbGxpcHNlIGNsaXAtcGF0aD0idXJsKCNjbGlwKSIgY3g9IjUwIiBjeT0iNTAiIHJ4PSI0MCIgcnk9IjQwIiBzdHlsZT0iZmlsbDpub25lOyBzdHJva2U6IzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxNSI+CgkJCTxhbmltYXRlVHJhbnNmb3JtCgkJCQlhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCgkJCQlhdHRyaWJ1dGVUeXBlPSJYTUwiCgkJCQl0eXBlPSJyb3RhdGUiCgkJCQl2YWx1ZXM9IjAgNTAgNTA7IDQwIDUwIDUwOyA4MCA1MCA1MDsgMTIwIDUwIDUwOyAxNjAgNTAgNTA7IDIwMCA1MCA1MDsgMjQwIDUwIDUwOyAyODAgNTAgNTA7IDMyMCA1MCA1MCIKCQkJCWR1cj0iM3MiCgkJCQlyZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIKCQkJCWFkZGl0aXZlPSJyZXBsYWNlIgoJCQkJY2FsY01vZGU9ImRpc2NyZXRlIgoJCQkJZmlsbD0iZnJlZXplIi8+CgkJPC9lbGxpcHNlPgoJPC9nPgo8L3N2Zz4=';
var STRAIGHT = 'data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iCiAgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIgogICAgIHZpZXdCb3g9IjAgMCA5MCA2MCIKICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIKCSB3aWR0aD0iMTAwJSIKCSBoZWlnaHQ9IjEyMCUiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICA8Zz4KCSAgICA8cmVjdAoJICAgIAlzdHJva2Utd2lkdGg9IjAiCgkgICAgCXN0cm9rZT0iI2ZmZiIKCSAgICAJZmlsbD0ibm9uZSIKCSAgICAJaGVpZ2h0PSIzMCIKCSAgICAJd2lkdGg9IjkwIgoJICAgIAl4PSIwIiB5PSIxNSI+PC9yZWN0PgoJICAgIDxkZWZzPgoJCQk8cmVjdCBjbGFzcz0idGVzdCIgZmlsbD0iI0U4RThFOCIgaWQ9IlJlY3QiIHg9IjAiIHk9IjE1IiBoZWlnaHQ9IjMwIiB3aWR0aD0iMTUiPjwvcmVjdD4KCSAgICA8L2RlZnM+CgoJCTx1c2UgeGxpbms6aHJlZj0iI1JlY3QiIC8+CgkJPHVzZSB4bGluazpocmVmPSIjUmVjdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUpIiAvPgoJCTx1c2UgeGxpbms6aHJlZj0iI1JlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwKSIgLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNSZWN0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NSkiIC8+CgoJCTxyZWN0IGZpbGw9IiMwMDAiIHg9IjUiIHk9IjE1IiBoZWlnaHQ9IjMwIiB3aWR0aD0iMTUiPgoJCQk8YW5pbWF0ZQoJCQkJZmlsbD0iZnJlZXplIgoJCQkJZHVyPSIxNTAwbXMiCgkJCQljYWxjTW9kZT0iZGlzY3JldGUiCgkJCQlyZXN0YXJ0PSJhbHdheXMiCgkJCQl2YWx1ZXM9IjA7MjU7NTA7NzUiCgkJCQlyZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIKCQkJCWF0dHJpYnV0ZU5hbWU9IngiLz4KCSAgICA8L3JlY3Q+Cgk8L2c+Cjwvc3ZnPgo=';
var BusyIndicatorComponent = /** @class */ (function () {
    function BusyIndicatorComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.type = 'circular';
        this.layout = 'vertical';
        this.label = 'Loading';
        this.iconHeight = '3em';
        this.iconWidth = '3em';
        this.indicatorSrc = this.sanitizer.bypassSecurityTrustResourceUrl(CIRCULAR);
    }
    BusyIndicatorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.imageSrc || changes.type) {
            if (!this.imageSrc) {
                this.indicatorSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.type === 'straight' ? STRAIGHT : CIRCULAR);
            }
            else {
                this.indicatorSrc = this.imageSrc;
            }
        }
    };
    __decorate$1e([
        Input(),
        __metadata$L("design:type", String)
    ], BusyIndicatorComponent.prototype, "type", void 0);
    __decorate$1e([
        Input(),
        __metadata$L("design:type", String)
    ], BusyIndicatorComponent.prototype, "layout", void 0);
    __decorate$1e([
        Input(),
        __metadata$L("design:type", Object)
    ], BusyIndicatorComponent.prototype, "label", void 0);
    __decorate$1e([
        Input(),
        __metadata$L("design:type", Object)
    ], BusyIndicatorComponent.prototype, "iconHeight", void 0);
    __decorate$1e([
        Input(),
        __metadata$L("design:type", Object)
    ], BusyIndicatorComponent.prototype, "iconWidth", void 0);
    __decorate$1e([
        Input(),
        __metadata$L("design:type", String)
    ], BusyIndicatorComponent.prototype, "classSrc", void 0);
    __decorate$1e([
        Input(),
        __metadata$L("design:type", String)
    ], BusyIndicatorComponent.prototype, "imageSrc", void 0);
    BusyIndicatorComponent = __decorate$1e([
        Component({
            selector: 'vcl-busy-indicator',
            template: "<div class=\"vclLayoutCenterJustified vclIcogram {{layout == 'vertical' ? 'vclLayoutVertical' : 'vclLayoutHorizontal'}}\" role=\"status\">\n  <div class=\"vclIcon vclLayoutSelfCenter {{classSrc}}\" [attr.aria-label]=\"label\" role=\"img\">\n    <img *ngIf=\"!classSrc\" [style.height]=\"iconHeight\" [style.width]=\"iconWidth\" [src]=\"indicatorSrc\" role=\u201Dpresentation\u201D>\n  </div>\n  <div class=\"vclLayoutSelfCenter\">\n    <ng-content></ng-content>\n  </div>\n</div>\n\n"
        }),
        __metadata$L("design:paramtypes", [DomSanitizer])
    ], BusyIndicatorComponent);
    return BusyIndicatorComponent;
}());

var __decorate$1f = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$M = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BusyIndicatorCoverComponent = /** @class */ (function () {
    function BusyIndicatorCoverComponent() {
        this.busy = false;
        this.busyIndicatorType = 'circular';
        this.busyIndicatorDirection = 'vertical';
        this.busyIconHeight = '3em';
        this.busyIconWidth = '3em';
    }
    __decorate$1f([
        Input('vclBusyIndicatorCover'),
        HostBinding('class.vclLoadingLayerContainer'),
        __metadata$M("design:type", Object)
    ], BusyIndicatorCoverComponent.prototype, "busy", void 0);
    __decorate$1f([
        Input(),
        __metadata$M("design:type", String)
    ], BusyIndicatorCoverComponent.prototype, "busyIndicatorType", void 0);
    __decorate$1f([
        Input(),
        __metadata$M("design:type", String)
    ], BusyIndicatorCoverComponent.prototype, "busyIndicatorDirection", void 0);
    __decorate$1f([
        Input(),
        __metadata$M("design:type", Object)
    ], BusyIndicatorCoverComponent.prototype, "busyLabel", void 0);
    __decorate$1f([
        Input(),
        __metadata$M("design:type", Object)
    ], BusyIndicatorCoverComponent.prototype, "busyIconHeight", void 0);
    __decorate$1f([
        Input(),
        __metadata$M("design:type", Object)
    ], BusyIndicatorCoverComponent.prototype, "busyIconWidth", void 0);
    BusyIndicatorCoverComponent = __decorate$1f([
        Component({
            selector: '[vclBusyIndicatorCover]',
            template: "<ng-content></ng-content>\n<div *ngIf=\"busy\" tabindex=\"-1\" class=\"vclLoadingLayer\">\n  <div class=\"vclLoadingLayerContent\">\n    <vcl-busy-indicator [type]=\"busyIndicatorType\" [label]=\"busyLabel\" [iconHeight]=\"busyIconHeight\" [iconWidth]=\"busyIconWidth\"\n                        [layout]=\"busyIndicatorDirection\">\n      <span *ngIf=\"busyLabel\">{{busyLabel}}</span>\n    </vcl-busy-indicator>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], BusyIndicatorCoverComponent);
    return BusyIndicatorCoverComponent;
}());

var __decorate$1g = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLBusyIndicatorModule = /** @class */ (function () {
    function VCLBusyIndicatorModule() {
    }
    VCLBusyIndicatorModule = __decorate$1g([
        NgModule({
            imports: [CommonModule, VCLIconModule, VCLIcogramModule],
            exports: [BusyIndicatorCoverComponent, BusyIndicatorComponent],
            declarations: [BusyIndicatorCoverComponent, BusyIndicatorComponent]
        })
    ], VCLBusyIndicatorModule);
    return VCLBusyIndicatorModule;
}());

var __decorate$1h = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$N = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotifierComponent = /** @class */ (function () {
    function NotifierComponent() {
        this.notifiers = [];
    }
    __decorate$1h([
        Input(),
        __metadata$N("design:type", Array)
    ], NotifierComponent.prototype, "notifiers", void 0);
    NotifierComponent = __decorate$1h([
        Component({
            template: "<ng-container *ngFor=\"let notifier of notifiers\">\n  <vcl-notification (mouseenter)=\"notifier.mouseEnter()\"\n                    (mouseleave)=\"notifier.mouseLeave()\"\n                    button=\"fa:times\"\n                    (buttonClick)=\"notifier.close()\"\n                    [showButton]=\"notifier.showCloseButton\"\n                    [iconClass]=\"notifier.iconClass\"\n                    [styleClass]=\"notifier.layerClass\"\n                    [textColor]=\"notifier.textColor\"\n                    [backgroundColor]=\"notifier.backgroundColor\">\n  <vcl-notification-body>\n      <div *ngIf=\"notifier.text && !notifier.html && !notifier.opts.contentComponentDetails\">{{notifier.text}}</div>\n      <div *ngIf=\"notifier.text && notifier.html && !notifier.opts.contentComponentDetails\" [innerHtml]=\"notifier.text\"></div>\n      <vcl-notifier-content-component *ngIf=\"notifier.opts.contentComponentDetails\" [wormholeComponentDetails]=\"notifier.opts.contentComponentDetails\"></vcl-notifier-content-component>\n    </vcl-notification-body>\n  </vcl-notification>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            animations: [
                trigger('notifierState', [
                    state('visible', style({ opacity: 0.91 })),
                    state('hovered', style({ opacity: 1.0 })),
                    transition(':enter', [
                        style({ opacity: 0 }),
                        animate('200ms ease-in')
                    ]),
                    transition(':leave', [
                        animate('200ms ease-out', style({ opacity: 0 }))
                    ]),
                    transition('visible <=> hovered', animate('300ms'))
                ]),
            ],
            host: {
                '[@notifierState]': 'true'
            },
            styles: ["\n     .vclLayerNotificationTopRight { left: auto; bottom: auto; top: 1em; right: 1em; }\n     .vclLayerNotificationTop { left: 0; bottom: auto; top: 1em; right: 0; }\n     .vclLayerNotificationTopLeft { left: 1em; bottom: auto; top: 1em; right: auto; }\n     .vclLayerNotificationBottomRight { left: auto; bottom: 1em; top: auto; right: 1em; }\n     .vclLayerNotificationBottom { left: 0; bottom: 1em; top: auto; right: 0; }\n     .vclLayerNotificationBottomLeft { left: 1em; bottom: 1em; top: auto; right: auto; }\n    "]
        })
    ], NotifierComponent);
    return NotifierComponent;
}());

var NotifierType;
(function (NotifierType) {
    NotifierType[NotifierType["None"] = 0] = "None";
    NotifierType[NotifierType["Info"] = 1] = "Info";
    NotifierType[NotifierType["Success"] = 2] = "Success";
    NotifierType[NotifierType["Warning"] = 3] = "Warning";
    NotifierType[NotifierType["Error"] = 4] = "Error";
})(NotifierType || (NotifierType = {}));
var NotifierPosition;
(function (NotifierPosition) {
    NotifierPosition[NotifierPosition["TopRight"] = 0] = "TopRight";
    NotifierPosition[NotifierPosition["Top"] = 1] = "Top";
    NotifierPosition[NotifierPosition["TopLeft"] = 2] = "TopLeft";
    NotifierPosition[NotifierPosition["BottomRight"] = 3] = "BottomRight";
    NotifierPosition[NotifierPosition["Bottom"] = 4] = "Bottom";
    NotifierPosition[NotifierPosition["BottomLeft"] = 5] = "BottomLeft";
})(NotifierPosition || (NotifierPosition = {}));
var NOTIFIER_DEFAULTS = {
    html: false,
    type: NotifierType.None,
    position: NotifierPosition.TopRight,
    showCloseButton: true
};
var TYPE_CLASS_MAP$1 = (_a$1 = {},
    _a$1[NotifierType.None] = {
        notifierClass: '',
        iconClass: ''
    },
    _a$1[NotifierType.Info] = {
        notifierClass: 'vclInfo',
        iconClass: 'fa fa-info-circle'
    },
    _a$1[NotifierType.Success] = {
        notifierClass: 'vclSuccess',
        iconClass: 'fa fa-check-circle'
    },
    _a$1[NotifierType.Warning] = {
        notifierClass: 'vclWarning',
        iconClass: 'fa fa-warning'
    },
    _a$1[NotifierType.Error] = {
        notifierClass: 'vclError',
        iconClass: 'fa fa-exclamation-circle'
    },
    _a$1);
var POSITION_MAP = (_b$1 = {},
    _b$1[NotifierPosition.TopRight] = {
        class: 'vclLayerNotificationTopRight',
        reverse: true
    },
    _b$1[NotifierPosition.Top] = {
        class: 'vclLayerNotificationTop',
        reverse: true,
    },
    _b$1[NotifierPosition.TopLeft] = {
        class: 'vclLayerNotificationTopLeft',
        reverse: true
    },
    _b$1[NotifierPosition.BottomRight] = {
        class: 'vclLayerNotificationBottomRight',
        reverse: false
    },
    _b$1[NotifierPosition.Bottom] = {
        class: 'vclLayerNotificationBottom',
        reverse: false
    },
    _b$1[NotifierPosition.BottomLeft] = {
        class: 'vclLayerNotificationBottomLeft',
        reverse: false
    },
    _b$1);
var x = NotifierType.Error;
var _a$1, _b$1;

var __extends$a = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Notifier = /** @class */ (function (_super) {
    __extends$a(Notifier, _super);
    function Notifier(opts) {
        var _this = _super.call(this) || this;
        _this.opts = opts;
        _this.closeSubject = new Subject();
        _this.state = 'visible';
        var timeout = _this.calculatedTimeout;
        var timeout$ = typeof timeout === 'number' ?
            interval(timeout).pipe(skipWhile(function () { return _this.state === 'hovered'; })) :
            never();
        _this.source = merge(_this.closeSubject, timeout$).pipe(first());
        return _this;
    }
    Notifier.prototype.close = function () {
        this.closeSubject.next();
    };
    Notifier.prototype.mouseEnter = function () {
        this.state = 'hovered';
    };
    Notifier.prototype.mouseLeave = function () {
        this.state = 'active';
    };
    Object.defineProperty(Notifier.prototype, "text", {
        get: function () {
            return this.opts.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "html", {
        get: function () {
            return this.opts.html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "showCloseButton", {
        get: function () {
            return this.opts.showCloseButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "backgroundColor", {
        get: function () {
            return this.opts.backgroundColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "textColor", {
        get: function () {
            return this.opts.textColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "layerClass", {
        get: function () {
            return TYPE_CLASS_MAP$1[this.opts.type || NotifierType.None].notifierClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "iconClass", {
        get: function () {
            return TYPE_CLASS_MAP$1[this.opts.type || NotifierType.None].iconClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "calculatedTimeout", {
        get: function () {
            if (typeof this.opts.timeout === 'number') {
                return this.opts.timeout;
            }
            else if (typeof this.opts.timeout === 'boolean' && !this.opts.timeout) {
                return null;
            }
            else if (!this.opts.html && typeof this.opts.text === 'string') {
                // avg reading speed per min (WPM): 19
                // min 4 secs
                var wordCnt = this.opts.text.split(/\s+/).length;
                return Math.min((wordCnt / 19) * 60 * 1000, 4000);
            }
            else if (this.opts.html) {
                return 5000;
            }
            else {
                return 4000;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Notifier;
}(Observable));

var __extends$b = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1i = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$O = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotifierLayerRef = /** @class */ (function (_super) {
    __extends$b(NotifierLayerRef, _super);
    function NotifierLayerRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotifierLayerRef;
}(LayerRef));
var NotifierService = /** @class */ (function () {
    function NotifierService(ls) {
        this.ls = ls;
        this.closed = false;
        this.layers = new Map();
    }
    NotifierService.prototype.next = function (opts) {
        this.queue(opts);
    };
    NotifierService.prototype.info = function (opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ type: NotifierType.Info }, opts);
    };
    NotifierService.prototype.success = function (opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ type: NotifierType.Success }, opts);
    };
    NotifierService.prototype.warning = function (opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ type: NotifierType.Warning }, opts);
    };
    NotifierService.prototype.error = function (opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ type: NotifierType.Error }, opts);
    };
    NotifierService.prototype.queue = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var notifierOpts = Object.assign.apply(Object, [{}, NOTIFIER_DEFAULTS].concat(opts));
        var notifier = new Notifier(notifierOpts);
        var pos = notifierOpts.position || NotifierPosition.TopRight;
        var reverse = POSITION_MAP[pos].reverse;
        if (!this.layers.has(pos)) {
            var layerRef = this.ls.create(NotifierComponent, {
                transparent: true,
                customClass: POSITION_MAP[pos].class
            });
            layerRef.notifiers = [];
            this.layers.set(pos, layerRef);
        }
        var layer = this.layers.get(pos);
        if (layer) {
            notifier.subscribe(function () {
                layer.notifiers = layer.notifiers.filter(function (g) { return g !== notifier; });
                if (layer.notifiers.length === 0) {
                    layer.close();
                }
                else {
                    layer.open({ notifiers: layer.notifiers });
                }
            });
            layer.notifiers = reverse ? [notifier].concat(layer.notifiers) : layer.notifiers.concat([notifier]);
            layer.open({ notifiers: layer.notifiers });
        }
    };
    NotifierService = __decorate$1i([
        Injectable(),
        __metadata$O("design:paramtypes", [LayerService])
    ], NotifierService);
    return NotifierService;
}());

var __decorate$1j = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$P = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var VCLNotifierContentComponent = /** @class */ (function () {
    function VCLNotifierContentComponent() {
    }
    Object.defineProperty(VCLNotifierContentComponent.prototype, "target", {
        set: function (vcRef) {
            this.host = new WormholeHost(vcRef);
        },
        enumerable: true,
        configurable: true
    });
    VCLNotifierContentComponent.prototype.ngAfterViewInit = function () {
        this.host.connectWormhole(this.wormholeComponentDetails.contentComponentClass, this.wormholeComponentDetails.attributes);
    };
    __decorate$1j([
        Input(),
        __metadata$P("design:type", Object)
    ], VCLNotifierContentComponent.prototype, "wormholeComponentDetails", void 0);
    __decorate$1j([
        ViewChild('wormholeHost', { read: ViewContainerRef }),
        __metadata$P("design:type", ViewContainerRef),
        __metadata$P("design:paramtypes", [ViewContainerRef])
    ], VCLNotifierContentComponent.prototype, "target", null);
    VCLNotifierContentComponent = __decorate$1j([
        Component({
            selector: 'vcl-notifier-content-component',
            template: "<div #wormholeHost></div>\n"
        })
    ], VCLNotifierContentComponent);
    return VCLNotifierContentComponent;
}());

var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Default"] = 0] = "Default";
    NotificationType[NotificationType["Info"] = 1] = "Info";
    NotificationType[NotificationType["Warning"] = 2] = "Warning";
    NotificationType[NotificationType["Error"] = 3] = "Error";
    NotificationType[NotificationType["Success"] = 4] = "Success";
})(NotificationType || (NotificationType = {}));
var DATA = (_a$2 = {},
    _a$2[NotificationType.Default] = {
        icon: 'fa-bell-o',
        class: ''
    },
    _a$2[NotificationType.Info] = {
        icon: 'fa-info-circle',
        class: 'vclInfo'
    },
    _a$2[NotificationType.Warning] = {
        icon: 'fa-warning',
        class: 'vclWarning'
    },
    _a$2[NotificationType.Error] = {
        icon: 'fa-exclamation-circle',
        class: 'vclError'
    },
    _a$2[NotificationType.Success] = {
        icon: 'fa-check-circle',
        class: 'vclSuccess'
    },
    _a$2);
var FlexAlign = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
};
var TextAlign = {
    left: 'left',
    center: 'center',
    right: 'right'
};
var IconType;
(function (IconType) {
    IconType["FA"] = "fa";
    IconType["Custom"] = "custom";
    IconType["Image"] = "image";
})(IconType || (IconType = {}));
function notificationTypeFromString(type) {
    switch (type.toLocaleLowerCase()) {
        default:
            return NotificationType.Default;
        case 'info':
            return NotificationType.Info;
        case 'warning':
            return NotificationType.Warning;
        case 'error':
            return NotificationType.Error;
        case 'success':
            return NotificationType.Success;
    }
}
function notificationIconFromType(type) {
    return DATA[type].icon;
}
function notificationStyleClassFromType(type) {
    return DATA[type].class;
}
var _a$2;

var __decorate$1k = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$Q = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationBodyComponent = /** @class */ (function () {
    function NotificationBodyComponent() {
        this.align = 'center';
    }
    Object.defineProperty(NotificationBodyComponent.prototype, "alignItems", {
        get: function () {
            return FlexAlign[this.align];
        },
        enumerable: true,
        configurable: true
    });
    __decorate$1k([
        Input(),
        __metadata$Q("design:type", String)
    ], NotificationBodyComponent.prototype, "align", void 0);
    NotificationBodyComponent = __decorate$1k([
        Component({
            selector: 'vcl-notification-body',
            template: '<ng-content></ng-content>'
        })
    ], NotificationBodyComponent);
    return NotificationBodyComponent;
}());

var __decorate$1l = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$R = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationFooterComponent = /** @class */ (function () {
    function NotificationFooterComponent() {
        this.align = 'left';
    }
    Object.defineProperty(NotificationFooterComponent.prototype, "alignItems", {
        get: function () {
            return FlexAlign[this.align];
        },
        enumerable: true,
        configurable: true
    });
    __decorate$1l([
        Input(),
        __metadata$R("design:type", String)
    ], NotificationFooterComponent.prototype, "align", void 0);
    NotificationFooterComponent = __decorate$1l([
        Component({
            selector: 'vcl-notification-footer',
            template: '<ng-content></ng-content>'
        })
    ], NotificationFooterComponent);
    return NotificationFooterComponent;
}());

var __decorate$1m = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$S = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationHeaderComponent = /** @class */ (function () {
    function NotificationHeaderComponent() {
        this.align = 'left';
    }
    Object.defineProperty(NotificationHeaderComponent.prototype, "alignItems", {
        get: function () {
            return FlexAlign[this.align];
        },
        enumerable: true,
        configurable: true
    });
    __decorate$1m([
        Input(),
        __metadata$S("design:type", String)
    ], NotificationHeaderComponent.prototype, "align", void 0);
    NotificationHeaderComponent = __decorate$1m([
        Component({
            selector: 'vcl-notification-header',
            template: '<ng-content></ng-content>'
        })
    ], NotificationHeaderComponent);
    return NotificationHeaderComponent;
}());

var __decorate$1n = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$T = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.nType = 'default';
        this.icon = '';
        this.iconClass = '';
        this.iconImage = '';
        this.iconSide = 'left';
        this.drawIcon = true;
        this.header = '';
        this.footer = '';
        this.button = '';
        this.showButton = true;
        this.verticalBody = false;
        this.styleClass = undefined;
        this.headerAlign = 'left';
        this.bodyAlign = 'center';
        this.footerAlign = 'left';
        this.textColor = '';
        this.backgroundColor = '';
        this.buttonClickEvent = new EventEmitter();
    }
    Object.defineProperty(NotificationComponent.prototype, "buttonClick", {
        get: function () {
            return this.buttonClickEvent.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "eType", {
        get: function () {
            return notificationTypeFromString(this.nType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "notificationStyleClass", {
        get: function () {
            if (this.styleClass) {
                return this.styleClass;
            }
            return notificationStyleClassFromType(this.eType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "notificationStyles", {
        get: function () {
            return {
                color: this.textColor,
                'background-color': this.backgroundColor
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "eIconClass", {
        get: function () {
            if (this.icon) {
                return 'fa ' + this.icon;
            }
            else if (this.iconClass) {
                return this.iconClass;
            }
            return 'fa ' + notificationIconFromType(this.eType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "iconType", {
        get: function () {
            if (this.iconImage) {
                return IconType.Image;
            }
            else if (this.iconClass) {
                return IconType.Custom;
            }
            return IconType.FA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "nested", {
        get: function () {
            return this.headerComponent != null || this.bodyComponent != null || this.footerComponent != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "headerStyle", {
        get: function () {
            if (this.nested) {
                return {
                    padding: 0,
                    'flex-flow': 'column',
                    'align-items': (this.headerComponent != null ? this.headerComponent.alignItems : 'flex-start')
                };
            }
            return {
                'text-align': TextAlign[this.headerAlign]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "bodyStyle", {
        get: function () {
            if (this.nested) {
                return {
                    padding: 0,
                    'flex-flow': 'column',
                    'flex-direction': 'row',
                    'align-items': (this.bodyComponent != null ? this.bodyComponent.alignItems : 'flex-start')
                };
            }
            return {
                'flex-flow': this.verticalBody ? 'column' : '',
                'align-items': FlexAlign[this.bodyAlign],
                'text-align': this.verticalBody ? TextAlign[this.bodyAlign] : ''
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "footerStyle", {
        get: function () {
            if (this.nested) {
                return {
                    padding: 0,
                    'flex-flow': 'column',
                    'align-items': (this.footerComponent != null ? this.footerComponent.alignItems : 'flex-start')
                };
            }
            return {
                display: 'block',
                'text-align': TextAlign[this.footerAlign],
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "bodyIconStyle", {
        get: function () {
            if (this.verticalBody) {
                return {
                    padding: '1em',
                };
            }
            if (this.iconSide == 'right') {
                return {
                    order: 1,
                    'padding-right': '1em',
                    'padding-left': '0.3em'
                };
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    NotificationComponent.prototype.onClick = function () {
        this.buttonClickEvent.emit(null);
    };
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "nType", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "icon", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "iconClass", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "iconImage", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "iconSide", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", Boolean)
    ], NotificationComponent.prototype, "drawIcon", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "header", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "footer", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "button", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", Boolean)
    ], NotificationComponent.prototype, "showButton", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", Boolean)
    ], NotificationComponent.prototype, "verticalBody", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", Object)
    ], NotificationComponent.prototype, "styleClass", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "headerAlign", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "bodyAlign", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "footerAlign", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "textColor", void 0);
    __decorate$1n([
        Input(),
        __metadata$T("design:type", String)
    ], NotificationComponent.prototype, "backgroundColor", void 0);
    __decorate$1n([
        ContentChild(NotificationHeaderComponent),
        __metadata$T("design:type", Object)
    ], NotificationComponent.prototype, "headerComponent", void 0);
    __decorate$1n([
        ContentChild(NotificationBodyComponent),
        __metadata$T("design:type", Object)
    ], NotificationComponent.prototype, "bodyComponent", void 0);
    __decorate$1n([
        ContentChild(NotificationFooterComponent),
        __metadata$T("design:type", Object)
    ], NotificationComponent.prototype, "footerComponent", void 0);
    __decorate$1n([
        Output(),
        __metadata$T("design:type", Observable),
        __metadata$T("design:paramtypes", [])
    ], NotificationComponent.prototype, "buttonClick", null);
    NotificationComponent = __decorate$1n([
        Component({
            selector: 'vcl-notification',
            template: "<div #notification class=\"vclNotification\" [ngClass]=\"notificationStyleClass\" [ngStyle]=\"notificationStyles\">\n\n  <div class=\"vclNotificationHeader vclLayoutHorizontal vclLayoutCenter\" *ngIf=\"header || (nested && headerComponent != null)\" [ngStyle]=\"headerStyle\">\n    <div class=\"vclLayoutFlex\" *ngIf=\"!nested\">{{ header }}</div>\n    <button vcl-button class=\"vclTransparent\" *ngIf=\"(button && showButton) && !nested\" (click)=\"onClick()\" [icon]=\"button\"></button>\n\n    <ng-content *ngIf=\"nested && headerComponent != null\" select=\"vcl-notification-header\"></ng-content>\n  </div>\n\n  <div [ngClass]=\"{'vclLayoutHorizontal': !verticalBody, 'vlcLayoutVertical': verticalBody}\" [ngStyle]=\"bodyStyle\">\n    <div class=\"vclNotificationIconContainer\" *ngIf=\"drawIcon\" [ngStyle]=\"bodyIconStyle\">\n      <span class=\"vclIcon vclNotificationIcon {{ eIconClass }}\" *ngIf=\"iconType == 'fa' || iconType == 'custom'\"></span>\n      <img class=\"vclIcon vclNotificationIcon\" [src]=\"iconImage\" *ngIf=\"iconType == 'image'\">\n    </div>\n\n    <div class=\"vclNotificationContent vclLayoutFlex\">\n      <ng-content *ngIf=\"!nested\"></ng-content>\n\n      <ng-content *ngIf=\"nested && bodyComponent != null\" select=\"vcl-notification-body\"></ng-content>\n    </div>\n\n    <button vcl-button class=\"vclTransparent vclLayoutSelfStart\" *ngIf=\"(button && showButton) && !header\" (click)=\"onClick()\" [icon]=\"button\"></button>\n  </div>\n\n  <div class=\"vclNotificationFooter vclLayoutHorizontal vclLayoutCenter\" [ngStyle]=\"footerStyle\" *ngIf=\"footer || (nested && footerComponent != null)\">\n    <ng-container *ngIf=\"footer && !nested\">{{ footer }}</ng-container>\n    <ng-content *ngIf=\"nested && footerComponent != null\" select=\"vcl-notification-footer\"></ng-content>\n  </div>\n\n</div>\n"
        })
    ], NotificationComponent);
    return NotificationComponent;
}());

var __decorate$1o = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLNotificationModule = /** @class */ (function () {
    function VCLNotificationModule() {
    }
    VCLNotificationModule = __decorate$1o([
        NgModule({
            imports: [CommonModule, VCLButtonModule$1],
            exports: [NotificationComponent, NotificationHeaderComponent, NotificationBodyComponent, NotificationFooterComponent],
            declarations: [NotificationComponent, NotificationHeaderComponent, NotificationBodyComponent, NotificationFooterComponent]
        })
    ], VCLNotificationModule);
    return VCLNotificationModule;
}());

var __decorate$1p = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLNotifierModule = /** @class */ (function () {
    function VCLNotifierModule() {
    }
    VCLNotifierModule = __decorate$1p([
        NgModule({
            imports: [
                FormsModule,
                CommonModule,
                VCLButtonModule$1,
                VCLLayerModule.forChild(),
                VCLWormholeModule,
                VCLNotificationModule
            ],
            exports: [],
            declarations: [NotifierComponent, VCLNotifierContentComponent],
            entryComponents: [NotifierComponent],
            providers: [
                NotifierService
            ],
        })
    ], VCLNotifierModule);
    return VCLNotifierModule;
}());

var __decorate$1q = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TooltipService = /** @class */ (function () {
    function TooltipService() {
        // padding between tooltip and target obj.
        this.offsetCorrection = 10;
    }
    TooltipService.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        var tooltipAlignment = positionStr;
        // set tooltip at middle of host element for now
        var alignmentCorrection = 'center';
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
        var targetElPos;
        switch (tooltipAlignment) {
            case 'right':
                targetElPos = {
                    Top: shiftHeight[alignmentCorrection](),
                    Left: shiftWidth[tooltipAlignment]() + this.offsetCorrection
                };
                break;
            case 'left':
                targetElPos = {
                    Top: shiftHeight[alignmentCorrection](),
                    Left: hostElPos.left - targetElWidth - this.offsetCorrection
                };
                break;
            case 'bottom':
                targetElPos = {
                    Top: shiftHeight[tooltipAlignment]() + this.offsetCorrection,
                    Left: shiftWidth[alignmentCorrection]()
                };
                break;
            default:
                targetElPos = {
                    Top: hostElPos.top - targetElHeight - this.offsetCorrection,
                    Left: shiftWidth[alignmentCorrection]()
                };
                break;
        }
        return targetElPos;
    };
    TooltipService.prototype.position = function (nativeEl) {
        var offsetParentBCR = { top: 0, left: 0 };
        var elBCR = this.offset(nativeEl);
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    TooltipService.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    };
    TooltipService.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle)
            return nativeEl.currentStyle[cssProp];
        if (window.getComputedStyle)
            return window.getComputedStyle(nativeEl)[cssProp];
        return nativeEl.style[cssProp];
    };
    TooltipService.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    TooltipService.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    TooltipService = __decorate$1q([
        Injectable()
    ], TooltipService);
    return TooltipService;
}());

var __decorate$1r = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$U = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$a = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AnimationState;
(function (AnimationState) {
    AnimationState["Shown"] = "shown";
    AnimationState["Hidden"] = "hidden";
    AnimationState["None"] = "none";
})(AnimationState || (AnimationState = {}));
var Placement;
(function (Placement) {
    Placement["Top"] = "top";
    Placement["Bottom"] = "bottom";
    Placement["Left"] = "left";
    Placement["Right"] = "right";
})(Placement || (Placement = {}));
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(element, document, renderer, tooltipService) {
        this.element = element;
        this.document = document;
        this.renderer = renderer;
        this.tooltipService = tooltipService;
        this.debug = false;
        this.placement = Placement.Top;
        this._animationState = AnimationState.Hidden;
        this.showArrowPointer = true;
        // Initial position should out of screen
        this.tooltipPlacement = { Top: -1000, Left: -1000 };
        // true if initialized by directive
        this.showOnInit = false;
    }
    TooltipComponent_1 = TooltipComponent;
    TooltipComponent.prototype.ngOnChanges = function (changes) {
        if (changes.placement || changes.content || changes.animationState) {
            this.showTooltip()();
        }
    };
    TooltipComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var tag = TooltipComponent_1.Tag + ".ngAfterViewInit()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'this:', this);
        if (debug)
            console.log(tag, 'this.animationState:', this.animationState);
        setTimeout(function () {
            if (_this.showOnInit || _this.animationState === AnimationState.Shown) {
                setTimeout(function () { return _this.showTooltip()(); });
            }
            else if (!_this.animationState) {
                _this._animationState = AnimationState.None;
                _this.renderer.listen(_this.hostElement, 'mouseenter', function () { return _this.showTooltip(); });
                _this.renderer.listen(_this.hostElement, 'focusin', function () { return _this.showTooltip(); });
                _this.renderer.listen(_this.hostElement, 'focusout', function () { _this._animationState = AnimationState.Hidden; });
                _this.renderer.listen(_this.hostElement, 'mouseleave', function () { _this._animationState = AnimationState.Hidden; });
            }
        });
    };
    TooltipComponent.prototype.showTooltip = function () {
        var _this = this;
        var tag = TooltipComponent_1.Tag + ".showTooltip()";
        var debug = this.debug || false;
        return function () {
            if (_this.hostElement) {
                var tooltipOffset = _this.tooltipService.positionElements(_this.hostElement, _this.element.nativeElement.children[0].children[0], _this.placement);
                if (debug)
                    console.log(tag, 'tooltipOffset:', tooltipOffset);
                _this.tooltipPlacement = {
                    Top: tooltipOffset.Top,
                    Left: tooltipOffset.Left
                };
                if (debug)
                    console.log(tag, 'this.tooltipPlacement:', _this.tooltipPlacement);
                _this._animationState = AnimationState.Shown;
                _this.document.querySelector('body').appendChild(_this.element.nativeElement);
                return true;
            }
            else {
                console.error('Host element not specified');
                return false;
            }
        };
    };
    Object.defineProperty(TooltipComponent.prototype, "tooltipPosition", {
        get: function () {
            switch (this.placement) {
                case Placement.Right:
                    return 'vclTooltip vclArrowPointerLeft';
                case Placement.Left:
                    return 'vclTooltip vclArrowPointerRight';
                case Placement.Bottom:
                    return 'vclTooltip vclArrowPointerTop';
                case Placement.Top:
                default:
                    return 'vclTooltip vclArrowPointerBottom';
            }
        },
        enumerable: true,
        configurable: true
    });
    TooltipComponent.prototype.ngOnDestroy = function () {
        if (!this.showOnInit) {
            var parentNode = this.element.nativeElement.parentNode;
            parentNode && parentNode.removeChild(this.element.nativeElement);
        }
    };
    TooltipComponent.Tag = 'TooltipComponent';
    __decorate$1r([
        Input(),
        __metadata$U("design:type", Boolean)
    ], TooltipComponent.prototype, "debug", void 0);
    __decorate$1r([
        Input(),
        __metadata$U("design:type", String)
    ], TooltipComponent.prototype, "content", void 0);
    __decorate$1r([
        Input(),
        __metadata$U("design:type", String)
    ], TooltipComponent.prototype, "placement", void 0);
    __decorate$1r([
        Input(),
        __metadata$U("design:type", HTMLElement)
    ], TooltipComponent.prototype, "hostElement", void 0);
    __decorate$1r([
        Input(),
        __metadata$U("design:type", String)
    ], TooltipComponent.prototype, "animationState", void 0);
    __decorate$1r([
        Input(),
        __metadata$U("design:type", Boolean)
    ], TooltipComponent.prototype, "showArrowPointer", void 0);
    TooltipComponent = TooltipComponent_1 = __decorate$1r([
        Component({
            selector: 'vcl-tooltip',
            template: "<div [@enterAnimation]=\"animationState || _animationState\" [style.left]=\"tooltipPlacement.Left + 'px'\" [style.top]=\"tooltipPlacement.Top + 'px'\"\n  style=\"white-space:nowrap;\" role=\"tooltip\" [class]=\"tooltipPosition\">\n  <div class=\"vclTooltipContent\">\n    {{ content }}\n    <ng-content></ng-content>\n  </div>\n  <div [class.vclArrowPointer]=\"showArrowPointer\"></div>\n</div>\n",
            host: {
                '[class.vclTooltip]': 'true',
            },
            animations: [
                trigger('enterAnimation', [
                    state('shown', style({ opacity: 1, 'z-index': 'initial' })),
                    state('hidden', style({ opacity: 0, 'z-index': '-1' })),
                    state('none', style({ opacity: 0 })),
                    transition('hidden => shown', animate('0.2s')),
                ])
            ],
            styles: [":host{ top: 0; left: 0 }"]
        }),
        __param$a(1, Inject(DOCUMENT)),
        __metadata$U("design:paramtypes", [ElementRef, Object, Renderer,
            TooltipService])
    ], TooltipComponent);
    return TooltipComponent;
    var TooltipComponent_1;
}());

var __decorate$1s = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$V = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$b = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(element, resolver, viewContainerRef, document) {
        this.element = element;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this.content = '';
    }
    TooltipDirective.prototype.ngOnChanges = function (changes) {
        if (this.tooltip) {
            if (changes.content) {
                this.tooltip.instance.content = this.content;
            }
            else if (changes.position) {
                this.tooltip.instance.placement = this.position;
            }
        }
    };
    TooltipDirective.prototype.onMouseEnter = function () {
        var factory = this.resolver.resolveComponentFactory(TooltipComponent);
        this.tooltip = this.viewContainerRef.createComponent(factory);
        this.tooltip.instance.content = this.content;
        this.tooltip.instance.placement = this.position;
        this.tooltip.instance.hostElement = this.element.nativeElement;
        this.tooltip.instance.showOnInit = true;
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        if (this.tooltip) {
            this.tooltip.destroy();
        }
    };
    __decorate$1s([
        Input(),
        __metadata$V("design:type", String)
    ], TooltipDirective.prototype, "content", void 0);
    __decorate$1s([
        Input(),
        __metadata$V("design:type", String)
    ], TooltipDirective.prototype, "position", void 0);
    __decorate$1s([
        HostListener('mouseenter'),
        HostListener('focusin'),
        __metadata$V("design:type", Function),
        __metadata$V("design:paramtypes", []),
        __metadata$V("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseEnter", null);
    __decorate$1s([
        HostListener('focusout'),
        HostListener('mouseleave'),
        __metadata$V("design:type", Function),
        __metadata$V("design:paramtypes", []),
        __metadata$V("design:returntype", void 0)
    ], TooltipDirective.prototype, "ngOnDestroy", null);
    TooltipDirective = __decorate$1s([
        Directive({ selector: '[vcl-tooltip]' }),
        __param$b(3, Inject(DOCUMENT)),
        __metadata$V("design:paramtypes", [ElementRef,
            ComponentFactoryResolver,
            ViewContainerRef, Object])
    ], TooltipDirective);
    return TooltipDirective;
}());

var __decorate$1t = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLTooltipModule = /** @class */ (function () {
    function VCLTooltipModule() {
    }
    VCLTooltipModule = __decorate$1t([
        NgModule({
            imports: [CommonModule],
            exports: [TooltipComponent, TooltipDirective],
            declarations: [TooltipComponent, TooltipDirective],
            providers: [TooltipService],
            entryComponents: [TooltipComponent]
        })
    ], VCLTooltipModule);
    return VCLTooltipModule;
}());

var __decorate$1u = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$W = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TableService = /** @class */ (function () {
    function TableService(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    TableService.prototype.ClassToggle = function (className, add, targetEl) {
        if (this.el.nativeElement.localName == targetEl || !targetEl) {
            if (add === '' || add) {
                // For table tag vclTable class is required to enable vcl table behavior
                if (targetEl == 'table' && className != 'vclTable') {
                    this.addClass('vclTable');
                }
                return this.addClass(className);
            }
            else {
                return this.removeClass(className);
            }
        }
        else {
            console.error(className + " can only be used on " + targetEl + " tag!");
            return false;
        }
    };
    TableService.prototype.addClass = function (className) {
        this.renderer.addClass(this.el.nativeElement, className);
        return true;
    };
    TableService.prototype.removeClass = function (className) {
        this.renderer.removeClass(this.el.nativeElement, className);
        return false;
    };
    TableService = __decorate$1u([
        Injectable(),
        __metadata$W("design:paramtypes", [Renderer2, ElementRef])
    ], TableService);
    return TableService;
}());

/*
Enables VCL table behavior
*/
var __decorate$1v = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$X = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var VclTableDirective = /** @class */ (function () {
    function VclTableDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    VclTableDirective.prototype.ngOnChanges = function (changes) {
        if (changes.alt) {
            this.selectable = this.tableService.ClassToggle('vclTable', this.selectable, 'table');
        }
    };
    __decorate$1v([
        Input('selectable'),
        __metadata$X("design:type", Object)
    ], VclTableDirective.prototype, "selectable", void 0);
    VclTableDirective = __decorate$1v([
        Directive({
            selector: '[vcl-table]',
        }),
        __metadata$X("design:paramtypes", [Renderer2, ElementRef])
    ], VclTableDirective);
    return VclTableDirective;
}());

/*
Column width

The column width can be defined in the table header using one of
the layout spans vclSpan-5p - vclSpan-100p from the corresponding module.
*/
var __decorate$1w = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$Y = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SpanDirective = /** @class */ (function () {
    function SpanDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    SpanDirective.prototype.ngOnChanges = function (changes) {
        if (changes.width) {
            this.ngAfterContentInit();
        }
    };
    SpanDirective.prototype.ngAfterContentInit = function () {
        // Apply class only on header
        if (this.el.nativeElement.localName == 'th') {
            var vclSpan = "vclSpan-" + this.width + "p";
            this.renderer.addClass(this.el.nativeElement, vclSpan);
        }
        else {
            console.error('Column width can be set only for header tag!');
        }
    };
    __decorate$1w([
        Input('span'),
        __metadata$Y("design:type", Number)
    ], SpanDirective.prototype, "width", void 0);
    SpanDirective = __decorate$1w([
        Directive({
            selector: '[span]',
        }),
        __metadata$Y("design:paramtypes", [Renderer2, ElementRef])
    ], SpanDirective);
    return SpanDirective;
}());

/*
Cell and column highlighting

Single cells and columns can be highlighted by using the
vclCellHighlight class on each tdin the respective column or on single cells only.
*/
var __decorate$1x = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$Z = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    HighlightDirective.prototype.ngOnChanges = function (changes) {
        if (changes.hightlight) {
            this.hightlight = this.tableService.ClassToggle('vclCellHighlight', this.hightlight, 'td');
        }
    };
    __decorate$1x([
        Input('hightlight'),
        __metadata$Z("design:type", Object)
    ], HighlightDirective.prototype, "hightlight", void 0);
    HighlightDirective = __decorate$1x([
        Directive({
            selector: '[hightlight]',
        }),
        __metadata$Z("design:paramtypes", [Renderer2, ElementRef])
    ], HighlightDirective);
    return HighlightDirective;
}());

var __decorate$1y = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$_ = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SortIconComponent = /** @class */ (function () {
    function SortIconComponent(e, renderer) {
        this.e = e;
        this.renderer = renderer;
        this.sort = 0;
        this.rootElement = e;
        this.renderer.addClass(e.nativeElement, 'vclFloatRight');
        this.renderer.addClass(e.nativeElement, 'vclIcon');
        this.renderer.addClass(e.nativeElement, 'fa');
        this.ChangeSortOrder(this.sort);
    }
    SortIconComponent.prototype.ChangeSortOrder = function (order) {
        this.renderer.removeClass(this.rootElement.nativeElement, 'fa-sort');
        this.renderer.removeClass(this.rootElement.nativeElement, 'fa-sort-up');
        this.renderer.removeClass(this.rootElement.nativeElement, 'fa-sort-down');
        switch (order) {
            case 1: {
                this.renderer.addClass(this.rootElement.nativeElement, 'fa-sort-up');
                break;
            }
            case -1: {
                this.renderer.addClass(this.rootElement.nativeElement, 'fa-sort-down');
                break;
            }
            default: {
                this.renderer.addClass(this.rootElement.nativeElement, 'fa-sort');
                break;
            }
        }
    };
    __decorate$1y([
        Input(),
        __metadata$_("design:type", Object)
    ], SortIconComponent.prototype, "sort", void 0);
    SortIconComponent = __decorate$1y([
        Component({
            selector: 'sort-icon',
            template: "<ng-content></ng-content>"
        }),
        __metadata$_("design:paramtypes", [ElementRef, Renderer2])
    ], SortIconComponent);
    return SortIconComponent;
}());

/*
Column sortability

Sortable columns are defined with the vclSortableCol class on the respective ths.
This class gives the whole header a pointer cursor on hover to indicate an action.
The application must register an appropriate event handler to change the sort order
for the whole th accordingly. Also an icon which indicates sortability should be
used as shown in the second column. The currently active sort order is indicated
by a respective icon and the classes vclSortAsc or vclSortDesc on the th element.
*/
var __decorate$1z = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SortDirective = /** @class */ (function () {
    function SortDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.change = new EventEmitter();
        this.isHeader = false;
        this.tableService = new TableService(renderer, el);
        this.isHeader =
            this.tableService.ClassToggle('vclSortableCol', true, 'th') &&
                this.tableService.ClassToggle('vclClearFix', true, 'th');
    }
    SortDirective.prototype.OnChangeOrder = function () {
        if (this.isHeader) {
            this.order = this.order == 1 ? -1 : 1;
            this.change.emit(this.order);
            switch (this.order) {
                case 1: {
                    this.renderer.removeClass(this.el.nativeElement, 'vclClearFix');
                    this.renderer.removeClass(this.el.nativeElement, 'vclSortDesc');
                    this.renderer.addClass(this.el.nativeElement, 'vclSortAsc');
                    if (this.sortIconComponent) {
                        this.sortIconComponent.ChangeSortOrder(1);
                    }
                    break;
                }
                case -1: {
                    this.renderer.removeClass(this.el.nativeElement, 'vclSortAsc');
                    this.renderer.addClass(this.el.nativeElement, 'vclSortDesc');
                    if (this.sortIconComponent) {
                        this.sortIconComponent.ChangeSortOrder(-1);
                    }
                    break;
                }
            }
        }
    };
    __decorate$1z([
        ContentChild(SortIconComponent),
        __metadata$10("design:type", SortIconComponent)
    ], SortDirective.prototype, "sortIconComponent", void 0);
    __decorate$1z([
        Output(),
        __metadata$10("design:type", EventEmitter)
    ], SortDirective.prototype, "change", void 0);
    __decorate$1z([
        HostListener('click'),
        __metadata$10("design:type", Function),
        __metadata$10("design:paramtypes", []),
        __metadata$10("design:returntype", void 0)
    ], SortDirective.prototype, "OnChangeOrder", null);
    SortDirective = __decorate$1z([
        Directive({
            selector: '[sort]',
            exportAs: 'sort-directive'
        }),
        __metadata$10("design:paramtypes", [Renderer2,
            ElementRef])
    ], SortDirective);
    return SortDirective;
}());

/*
Row and cell selection

Individual cells and thus rows can be visually selected using the vclSelected class.
*/
var __decorate$1A = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SelectDirective = /** @class */ (function () {
    function SelectDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    SelectDirective.prototype.ngOnChanges = function (changes) {
        if (changes.selected) {
            this.selected = this.tableService.ClassToggle('vclSelected', this.selected, 'tr');
        }
    };
    __decorate$1A([
        Input('selected'),
        __metadata$11("design:type", Object)
    ], SelectDirective.prototype, "selected", void 0);
    SelectDirective = __decorate$1A([
        Directive({
            selector: '[selected]'
        }),
        __metadata$11("design:paramtypes", [Renderer2, ElementRef])
    ], SelectDirective);
    return SelectDirective;
}());

/*
Row and cell selectability

Rows can be styled to suggest their selectability (single or multiple) using the vclRowSelectability modifier which makes rows show a pointer cursor on hover.
*/
var __decorate$1B = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SelectableDirective = /** @class */ (function () {
    function SelectableDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    SelectableDirective.prototype.ngOnChanges = function (changes) {
        if (changes.alt) {
            this.selectable = this.tableService.ClassToggle('vclRowSelectability', this.selectable, 'tr');
        }
    };
    __decorate$1B([
        Input('selectable'),
        __metadata$12("design:type", Object)
    ], SelectableDirective.prototype, "selectable", void 0);
    SelectableDirective = __decorate$1B([
        Directive({
            selector: '[selectable]',
        }),
        __metadata$12("design:paramtypes", [Renderer2, ElementRef])
    ], SelectableDirective);
    return SelectableDirective;
}());

/*
Row hover highlighting

If a table row should be highlighted on hover, the vclRowHoverHighlight
modifier class can be used. This hovering's intention is just for the
sake of readability and should not indicate an action.
*/
var __decorate$1C = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HoverDirective = /** @class */ (function () {
    function HoverDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        if (this.el.nativeElement.localName == 'table') {
            renderer.addClass(el.nativeElement, 'vclRowHoverHighlight');
        }
        else {
            console.error('[hover] should be used for table tag only!');
        }
    }
    HoverDirective = __decorate$1C([
        Directive({
            selector: '[hover]',
        }),
        __metadata$13("design:paramtypes", [Renderer2, ElementRef])
    ], HoverDirective);
    return HoverDirective;
}());

/*
Disabled rows

Rows can be visually disabled with the vclDisabled modifier.
*/
var __decorate$1D = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$14 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DisableDirective = /** @class */ (function () {
    function DisableDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    DisableDirective.prototype.ngOnChanges = function (changes) {
        if (changes.disabled) {
            this.disabled = this.tableService.ClassToggle('vclDisabled', this.disabled, 'tr');
        }
    };
    __decorate$1D([
        Input('disabled'),
        __metadata$14("design:type", Object)
    ], DisableDirective.prototype, "disabled", void 0);
    DisableDirective = __decorate$1D([
        Directive({
            selector: '[disabled]'
        }),
        __metadata$14("design:paramtypes", [Renderer2, ElementRef])
    ], DisableDirective);
    return DisableDirective;
}());

/*
Alternating row color

Optionally an alternating row color can be defined by using the modifier vclAltRowColor.
*/
var __decorate$1E = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$15 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AltRowColorDirective = /** @class */ (function () {
    function AltRowColorDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AltRowColorDirective.prototype.ngOnChanges = function (changes) {
        if (changes.alt) {
            this.alt = this.tableService.ClassToggle('vclAltRowColor', this.alt, 'table');
        }
    };
    __decorate$1E([
        Input('altrow'),
        __metadata$15("design:type", Object)
    ], AltRowColorDirective.prototype, "alt", void 0);
    AltRowColorDirective = __decorate$1E([
        Directive({
            selector: '[altrow]',
        }),
        __metadata$15("design:paramtypes", [Renderer2, ElementRef])
    ], AltRowColorDirective);
    return AltRowColorDirective;
}());

/*
Border configuration

The cell borders are removed with vclNoBorder. The border style can be changed from solid to dotted by using the vclDottedBorder modifier.
*/
var __decorate$1F = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$16 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NoBorderDirective = /** @class */ (function () {
    function NoBorderDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    NoBorderDirective.prototype.ngOnChanges = function (changes) {
        if (changes.noborder) {
            this.noborder = this.tableService.ClassToggle('vclNoBorder', this.noborder, 'table');
        }
    };
    __decorate$1F([
        Input('noborder'),
        __metadata$16("design:type", Object)
    ], NoBorderDirective.prototype, "noborder", void 0);
    NoBorderDirective = __decorate$1F([
        Directive({
            selector: '[noborder]',
        }),
        __metadata$16("design:paramtypes", [Renderer2, ElementRef])
    ], NoBorderDirective);
    return NoBorderDirective;
}());

/*
Border configuration

The cell borders are removed with vclNoBorder. The border style can be changed from solid to dotted by using the vclDottedBorder modifier.
*/
var __decorate$1G = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$17 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DottedBorderDirective = /** @class */ (function () {
    function DottedBorderDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    DottedBorderDirective.prototype.ngOnChanges = function (changes) {
        if (changes.dottedborder) {
            this.dottedborder = this.tableService.ClassToggle('vclDottedBorder', this.dottedborder, 'table');
        }
    };
    __decorate$1G([
        Input('dottedborder'),
        __metadata$17("design:type", Object)
    ], DottedBorderDirective.prototype, "dottedborder", void 0);
    DottedBorderDirective = __decorate$1G([
        Directive({
            selector: '[dottedborder]',
        }),
        __metadata$17("design:paramtypes", [Renderer2, ElementRef])
    ], DottedBorderDirective);
    return DottedBorderDirective;
}());

/*
Padding style

If the default cell padding is too extensive, vclCondensed makes it more compact.
*/
var __decorate$1H = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$18 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CondensedDirective = /** @class */ (function () {
    function CondensedDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    CondensedDirective.prototype.ngOnChanges = function (changes) {
        if (changes.condensed) {
            this.condensed = this.tableService.ClassToggle('vclCondensed', this.condensed, 'table');
        }
    };
    __decorate$1H([
        Input('condensed'),
        __metadata$18("design:type", Object)
    ], CondensedDirective.prototype, "condensed", void 0);
    CondensedDirective = __decorate$1H([
        Directive({
            selector: '[condensed]',
        }),
        __metadata$18("design:paramtypes", [Renderer2, ElementRef])
    ], CondensedDirective);
    return CondensedDirective;
}());

/*
Borders style

By default, only horizontal borders are shown. For vertical borders, use the vclVerticalBorder modifier.
*/
var __decorate$1I = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$19 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var VerticalBorderDirective = /** @class */ (function () {
    function VerticalBorderDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    VerticalBorderDirective.prototype.ngOnChanges = function (changes) {
        if (changes.border) {
            this.border = this.tableService.ClassToggle('vclVerticalBorder', this.border, 'table');
        }
    };
    __decorate$1I([
        Input('vertical-border'),
        __metadata$19("design:type", Object)
    ], VerticalBorderDirective.prototype, "border", void 0);
    VerticalBorderDirective = __decorate$1I([
        Directive({
            selector: '[vertical-border]',
        }),
        __metadata$19("design:paramtypes", [Renderer2, ElementRef])
    ], VerticalBorderDirective);
    return VerticalBorderDirective;
}());

/*
Text alignment

Left alignment is default, for centered text use class vclAlignCentered and for right aligned text vclAlignRight on tds.
*/
var __decorate$1J = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1a = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlignmentCenterDirective = /** @class */ (function () {
    function AlignmentCenterDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AlignmentCenterDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclAlignCentered', this.align, 'td');
        }
    };
    __decorate$1J([
        Input('align-center'),
        __metadata$1a("design:type", Object)
    ], AlignmentCenterDirective.prototype, "align", void 0);
    AlignmentCenterDirective = __decorate$1J([
        Directive({
            selector: '[align-center]',
        }),
        __metadata$1a("design:paramtypes", [Renderer2, ElementRef])
    ], AlignmentCenterDirective);
    return AlignmentCenterDirective;
}());

/*
Text alignment

Left alignment is default, for centered text use class vclAlignCentered and for right aligned text vclAlignRight on tds.
*/
var __decorate$1K = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1b = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlignmentRightDirective = /** @class */ (function () {
    function AlignmentRightDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AlignmentRightDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclAlignRight', this.align, 'td');
        }
    };
    __decorate$1K([
        Input('align-right'),
        __metadata$1b("design:type", Object)
    ], AlignmentRightDirective.prototype, "align", void 0);
    AlignmentRightDirective = __decorate$1K([
        Directive({
            selector: '[align-right]',
        }),
        __metadata$1b("design:paramtypes", [Renderer2, ElementRef])
    ], AlignmentRightDirective);
    return AlignmentRightDirective;
}());

/*
Vertical alignment

Top alignment is default, for vertically centered content use class
vclVAlignMiddle and for bottom aligned content vclVAlignBottom on a table or tds.
*/
var __decorate$1L = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1c = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlignmentbottomDirective = /** @class */ (function () {
    function AlignmentbottomDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AlignmentbottomDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclVAlignBottom', this.align, '');
        }
    };
    __decorate$1L([
        Input('align-bottom'),
        __metadata$1c("design:type", Object)
    ], AlignmentbottomDirective.prototype, "align", void 0);
    AlignmentbottomDirective = __decorate$1L([
        Directive({
            selector: '[align-bottom]',
        }),
        __metadata$1c("design:paramtypes", [Renderer2, ElementRef])
    ], AlignmentbottomDirective);
    return AlignmentbottomDirective;
}());

/*
Vertical alignment

Top alignment is default, for vertically centered content use class
vclVAlignMiddle and for bottom aligned content vclVAlignBottom on a table or tds.
*/
var __decorate$1M = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1d = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlignmentMiddleDirective = /** @class */ (function () {
    function AlignmentMiddleDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    AlignmentMiddleDirective.prototype.ngOnChanges = function (changes) {
        if (changes.align) {
            this.align = this.tableService.ClassToggle('vclVAlignMiddle', this.align, '');
        }
    };
    __decorate$1M([
        Input('align-middle'),
        __metadata$1d("design:type", Object)
    ], AlignmentMiddleDirective.prototype, "align", void 0);
    AlignmentMiddleDirective = __decorate$1M([
        Directive({
            selector: '[align-middle]',
        }),
        __metadata$1d("design:paramtypes", [Renderer2, ElementRef])
    ], AlignmentMiddleDirective);
    return AlignmentMiddleDirective;
}());

/*
Layout

The auto layout mode is used by default. For tables with toolbars however, the vclFixed class must be used to enable the fixed table layout mode.
*/
var __decorate$1N = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1e = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LayoutDirective$1 = /** @class */ (function () {
    function LayoutDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    LayoutDirective.prototype.ngOnChanges = function (changes) {
        if (changes.fixed) {
            this.fixed = this.tableService.ClassToggle('vclFixed', this.fixed, 'table');
        }
    };
    __decorate$1N([
        Input('fixed'),
        __metadata$1e("design:type", Object)
    ], LayoutDirective.prototype, "fixed", void 0);
    LayoutDirective = __decorate$1N([
        Directive({
            selector: '[fixed]',
        }),
        __metadata$1e("design:paramtypes", [Renderer2, ElementRef])
    ], LayoutDirective);
    return LayoutDirective;
}());

/*
Truncation

In conjunction with the fixed layout mode, the modifier vclNoWrap can be used to truncate all cell content which would
span more than one line and show an ellipsis to indicate truncated content instead.
Individual cells can also be truncated using the general vclNoWrap and vclOverflowEllipsis modifiers from the utils module.
*/
var __decorate$1O = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1f = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NoWrapDirective = /** @class */ (function () {
    function NoWrapDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    NoWrapDirective.prototype.ngOnChanges = function (changes) {
        if (changes.nowrap) {
            this.nowrap = this.tableService.ClassToggle('vclNoWrap', this.nowrap, 'td');
        }
    };
    __decorate$1O([
        Input('nowrap'),
        __metadata$1f("design:type", Object)
    ], NoWrapDirective.prototype, "nowrap", void 0);
    NoWrapDirective = __decorate$1O([
        Directive({
            selector: '[nowrap]'
        }),
        __metadata$1f("design:paramtypes", [Renderer2, ElementRef])
    ], NoWrapDirective);
    return NoWrapDirective;
}());

/*
Truncation

In conjunction with the fixed layout mode, the modifier vclNoWrap can be used to truncate all cell content which would
span more than one line and show an ellipsis to indicate truncated content instead.
Individual cells can also be truncated using the general vclNoWrap and vclOverflowEllipsis modifiers from the utils module.
*/
var __decorate$1P = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1g = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OverflowEllipsisDirective = /** @class */ (function () {
    function OverflowEllipsisDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    OverflowEllipsisDirective.prototype.ngOnChanges = function (changes) {
        if (changes.ellipsis) {
            this.ellipsis = this.tableService.ClassToggle('vclOverflowEllipsis', this.ellipsis, 'td');
        }
    };
    __decorate$1P([
        Input('overflow-ellipsis'),
        __metadata$1g("design:type", Object)
    ], OverflowEllipsisDirective.prototype, "ellipsis", void 0);
    OverflowEllipsisDirective = __decorate$1P([
        Directive({
            selector: '[overflow-ellipsis]'
        }),
        __metadata$1g("design:paramtypes", [Renderer2, ElementRef])
    ], OverflowEllipsisDirective);
    return OverflowEllipsisDirective;
}());

/*
Wrapping behavior

To allow breaking words of textual cell content apart, use the modifier vclBreakWords. This works best in combination with the fixed layout mode.
*/
var __decorate$1Q = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1h = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BreakingWordsDirective = /** @class */ (function () {
    function BreakingWordsDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.tableService = new TableService(renderer, el);
    }
    BreakingWordsDirective.prototype.ngOnChanges = function (changes) {
        if (changes.breakWords) {
            this.breakWords = this.tableService.ClassToggle('vclBreakWords', this.breakWords, '');
        }
    };
    __decorate$1Q([
        Input('break-words'),
        __metadata$1h("design:type", Object)
    ], BreakingWordsDirective.prototype, "breakWords", void 0);
    BreakingWordsDirective = __decorate$1Q([
        Directive({
            selector: '[break-words]',
        }),
        __metadata$1h("design:paramtypes", [Renderer2, ElementRef])
    ], BreakingWordsDirective);
    return BreakingWordsDirective;
}());

var directives = [
    VclTableDirective,
    SpanDirective,
    HighlightDirective,
    SortDirective,
    SelectDirective,
    SelectableDirective,
    HoverDirective,
    DisableDirective,
    AltRowColorDirective,
    NoBorderDirective,
    DottedBorderDirective,
    CondensedDirective,
    VerticalBorderDirective,
    AlignmentCenterDirective,
    AlignmentRightDirective,
    AlignmentbottomDirective,
    AlignmentMiddleDirective,
    LayoutDirective$1,
    NoWrapDirective,
    OverflowEllipsisDirective,
    BreakingWordsDirective
];

var __decorate$1R = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLTableModule = /** @class */ (function () {
    function VCLTableModule() {
    }
    VCLTableModule = __decorate$1R([
        NgModule({
            imports: [CommonModule],
            exports: [SortIconComponent].concat(directives),
            declarations: [SortIconComponent].concat(directives),
            entryComponents: [SortIconComponent],
            providers: [],
        })
    ], VCLTableModule);
    return VCLTableModule;
}());

var __decorate$1S = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1i = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PasswordInputComponent = /** @class */ (function () {
    function PasswordInputComponent() {
        this.visibleIcon = 'fa:eye';
        this.invisibleIcon = 'fa:eye-slash';
        this.visible = false;
        this.disabled = false;
    }
    Object.defineProperty(PasswordInputComponent.prototype, "buttonIcon", {
        get: function () {
            return this.visible ? this.visibleIcon : this.invisibleIcon;
        },
        enumerable: true,
        configurable: true
    });
    PasswordInputComponent.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    __decorate$1S([
        ContentChild(InputDirective, { read: InputDirective }),
        __metadata$1i("design:type", InputDirective)
    ], PasswordInputComponent.prototype, "input", void 0);
    __decorate$1S([
        Input(),
        __metadata$1i("design:type", Object)
    ], PasswordInputComponent.prototype, "visibleIcon", void 0);
    __decorate$1S([
        Input(),
        __metadata$1i("design:type", Object)
    ], PasswordInputComponent.prototype, "invisibleIcon", void 0);
    __decorate$1S([
        Input(),
        __metadata$1i("design:type", Object)
    ], PasswordInputComponent.prototype, "visible", void 0);
    __decorate$1S([
        Input(),
        __metadata$1i("design:type", Object)
    ], PasswordInputComponent.prototype, "disabled", void 0);
    PasswordInputComponent = __decorate$1S([
        Component({
            template: "<ng-content></ng-content>\n<button vcl-button\n        [icon]=\"buttonIcon\" \n        [disabled]=\"disabled\"\n        class=\"vclSquare\" \n        (click)=\"toggle()\">\n</button>\n",
            selector: 'vcl-password-input',
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[class.vclInputGroup]': 'true',
                '[attr.tabindex]': '-1'
            }
        })
    ], PasswordInputComponent);
    return PasswordInputComponent;
}());

var __decorate$1T = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1j = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$c = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PasswordInputDirective = /** @class */ (function () {
    function PasswordInputDirective(input, passwordInput) {
        this.input = input;
        this.passwordInput = passwordInput;
    }
    Object.defineProperty(PasswordInputDirective.prototype, "isDisabled", {
        get: function () {
            return (this.input.disabled || this.passwordInput.disabled) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PasswordInputDirective.prototype, "type", {
        get: function () {
            return this.passwordInput.visible ? 'text' : 'password';
        },
        enumerable: true,
        configurable: true
    });
    __decorate$1T([
        HostBinding('class.vclDisabled'),
        HostBinding('attr.disabled'),
        __metadata$1j("design:type", Object),
        __metadata$1j("design:paramtypes", [])
    ], PasswordInputDirective.prototype, "isDisabled", null);
    __decorate$1T([
        HostBinding('attr.type'),
        __metadata$1j("design:type", Object),
        __metadata$1j("design:paramtypes", [])
    ], PasswordInputDirective.prototype, "type", null);
    PasswordInputDirective = __decorate$1T([
        Directive({
            selector: 'input[vcl-password-input]'
        }),
        __param$c(0, Self()),
        __param$c(1, SkipSelf()),
        __metadata$1j("design:paramtypes", [InputDirective,
            PasswordInputComponent])
    ], PasswordInputDirective);
    return PasswordInputDirective;
}());

var __decorate$1U = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLPasswordInputModule = /** @class */ (function () {
    function VCLPasswordInputModule() {
    }
    VCLPasswordInputModule = __decorate$1U([
        NgModule({
            imports: [FormsModule, VCLInputModule, VCLButtonModule$1],
            exports: [PasswordInputComponent, PasswordInputDirective],
            declarations: [PasswordInputComponent, PasswordInputDirective]
        })
    ], VCLPasswordInputModule);
    return VCLPasswordInputModule;
}());

var __decorate$1V = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1k = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ZoomBoxMagnifierComponent = /** @class */ (function () {
    function ZoomBoxMagnifierComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        renderer.addClass(element.nativeElement, 'vclZoomBoxMagnifier');
    }
    ZoomBoxMagnifierComponent.prototype.update = function () {
        var styles = {
            top: this.parent.y + 'px',
            left: this.parent.x + 'px',
            width: this.parent.width + 'px',
            height: this.parent.height + 'px',
            display: (!this.parent.hiding && !this.parent.invisible) ? 'block' : 'none',
            'pointer-events': 'none'
        };
        for (var style$$1 in styles) {
            this.renderer.setStyle(this.element.nativeElement, style$$1, styles[style$$1]);
        }
    };
    ZoomBoxMagnifierComponent = __decorate$1V([
        Component({
            selector: 'vcl-zoom-box-magnifier',
            template: '<ng-content></ng-content>'
        }),
        __metadata$1k("design:paramtypes", [ElementRef, Renderer2])
    ], ZoomBoxMagnifierComponent);
    return ZoomBoxMagnifierComponent;
}());

var __decorate$1W = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1l = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ZoomBoxContainerComponent = /** @class */ (function () {
    function ZoomBoxContainerComponent(element, renderer) {
        this.element = element;
        this.x = 0;
        this.y = 0;
        this.resetOnOut = false;
        this.hidden = false;
        this.hiding = false;
        this.invisible = false;
        this.startX = -1;
        this.startY = -1;
        renderer.setStyle(element.nativeElement, 'position', 'relative');
    }
    ZoomBoxContainerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.magnifier.parent = this;
        this.magnifier.update();
        this.imgContent = this.element.nativeElement.querySelector('img');
        this.imgContent.onmousemove = function (event) { return _this.onMove(event); };
        this.imgContent.onmouseover = function () { return _this.onOver(); };
        this.imgContent.onmouseout = function () { return _this.onOut(); };
    };
    ZoomBoxContainerComponent.prototype.onMove = function (event) {
        if (this.startX == -1) {
            this.startX = this.x;
            this.startY = this.y;
        }
        var minX = this.width / 2;
        var maxX = this.imgContent.width - (this.width / 2);
        var minY = this.height / 2;
        var maxY = this.imgContent.height - (this.height / 2);
        this.x = Math.max(minX, Math.min(maxX, event.layerX)) - (this.width / 2);
        this.y = Math.max(minY, Math.min(maxY, event.layerY)) - (this.height / 2);
        this.magnifier.update();
    };
    ZoomBoxContainerComponent.prototype.onOver = function () {
        if (this.hidden || this.hiding) {
            this.hiding = false;
        }
        this.magnifier.update();
    };
    ZoomBoxContainerComponent.prototype.onOut = function () {
        if (this.resetOnOut) {
            this.x = this.startX;
            this.y = this.startY;
        }
        if (this.hidden) {
            this.hiding = true;
        }
        this.magnifier.update();
    };
    Object.defineProperty(ZoomBoxContainerComponent.prototype, "image", {
        get: function () {
            return this.imgContent.getAttribute('src');
        },
        enumerable: true,
        configurable: true
    });
    __decorate$1W([
        Input(),
        __metadata$1l("design:type", Number)
    ], ZoomBoxContainerComponent.prototype, "x", void 0);
    __decorate$1W([
        Input(),
        __metadata$1l("design:type", Number)
    ], ZoomBoxContainerComponent.prototype, "y", void 0);
    __decorate$1W([
        Input(),
        __metadata$1l("design:type", Number)
    ], ZoomBoxContainerComponent.prototype, "width", void 0);
    __decorate$1W([
        Input(),
        __metadata$1l("design:type", Number)
    ], ZoomBoxContainerComponent.prototype, "height", void 0);
    __decorate$1W([
        Input(),
        __metadata$1l("design:type", Boolean)
    ], ZoomBoxContainerComponent.prototype, "resetOnOut", void 0);
    __decorate$1W([
        Input(),
        __metadata$1l("design:type", Boolean)
    ], ZoomBoxContainerComponent.prototype, "hidden", void 0);
    __decorate$1W([
        Input(),
        __metadata$1l("design:type", Boolean)
    ], ZoomBoxContainerComponent.prototype, "hiding", void 0);
    __decorate$1W([
        Input(),
        __metadata$1l("design:type", Boolean)
    ], ZoomBoxContainerComponent.prototype, "invisible", void 0);
    __decorate$1W([
        ContentChild(ZoomBoxMagnifierComponent),
        __metadata$1l("design:type", ZoomBoxMagnifierComponent)
    ], ZoomBoxContainerComponent.prototype, "magnifier", void 0);
    ZoomBoxContainerComponent = __decorate$1W([
        Component({
            selector: 'vcl-zoom-box-container',
            template: '<div><ng-content></ng-content></div>'
        }),
        __metadata$1l("design:paramtypes", [ElementRef, Renderer2])
    ], ZoomBoxContainerComponent);
    return ZoomBoxContainerComponent;
}());

var __decorate$1X = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1m = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ZoomBoxComponent = /** @class */ (function () {
    function ZoomBoxComponent() {
    }
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedSource", {
        get: function () {
            if (this.image) {
                return this.image;
            }
            return this.target.image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedX", {
        get: function () {
            if (this.image) {
                return this.target.x * this.scale;
            }
            return this.target.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedY", {
        get: function () {
            if (this.image) {
                return this.target.y * this.scale;
            }
            return this.target.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedWidth", {
        get: function () {
            if (this.image) {
                return this.target.width * this.scale;
            }
            return this.target.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomBoxComponent.prototype, "zoomedHeight", {
        get: function () {
            if (this.image) {
                return this.target.height * this.scale;
            }
            return this.target.height;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$1X([
        Input(),
        __metadata$1m("design:type", ZoomBoxContainerComponent)
    ], ZoomBoxComponent.prototype, "target", void 0);
    __decorate$1X([
        Input(),
        __metadata$1m("design:type", Object)
    ], ZoomBoxComponent.prototype, "image", void 0);
    __decorate$1X([
        Input(),
        __metadata$1m("design:type", Number)
    ], ZoomBoxComponent.prototype, "scale", void 0);
    ZoomBoxComponent = __decorate$1X([
        Component({
            selector: 'vcl-zoom-box',
            template: "<div class=\"vclZoomBox\" [ngStyle]=\"{\n'position': 'static',\n'background-image': 'url(' + zoomedSource + ')',\n'width': zoomedWidth + 'px',\n'height': zoomedHeight + 'px',\n'background-position-x': '-' + zoomedX + 'px',\n'background-position-y': '-' + zoomedY + 'px'}\"></div>\n\n",
            host: {
                '[attr.role]': '"zoombox"',
            },
            changeDetection: ChangeDetectionStrategy.Default
        })
    ], ZoomBoxComponent);
    return ZoomBoxComponent;
}());

var __decorate$1Y = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLZoomBoxModule = /** @class */ (function () {
    function VCLZoomBoxModule() {
    }
    VCLZoomBoxModule = __decorate$1Y([
        NgModule({
            imports: [CommonModule],
            exports: [ZoomBoxComponent, ZoomBoxMagnifierComponent, ZoomBoxContainerComponent],
            declarations: [ZoomBoxComponent, ZoomBoxMagnifierComponent, ZoomBoxContainerComponent]
        })
    ], VCLZoomBoxModule);
    return VCLZoomBoxModule;
}());

var __decorate$1Z = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1n = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var GalleryImageComponent = /** @class */ (function () {
    function GalleryImageComponent() {
        this.thumbnail = '';
        this.alt = '';
    }
    __decorate$1Z([
        Input(),
        __metadata$1n("design:type", String)
    ], GalleryImageComponent.prototype, "image", void 0);
    __decorate$1Z([
        Input(),
        __metadata$1n("design:type", String)
    ], GalleryImageComponent.prototype, "thumbnail", void 0);
    __decorate$1Z([
        Input(),
        __metadata$1n("design:type", String)
    ], GalleryImageComponent.prototype, "alt", void 0);
    GalleryImageComponent = __decorate$1Z([
        Component({
            selector: 'vcl-gallery-image',
            template: '<ng-content></ng-content>',
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], GalleryImageComponent);
    return GalleryImageComponent;
}());

var __decorate$1_ = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1o = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$d = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var GALLERY_ANIMATIONS = new InjectionToken('@ng-vcl/ng-vcl#gallery_animations');
var ImageChange;
(function (ImageChange) {
    ImageChange[ImageChange["PREVIOUS"] = 0] = "PREVIOUS";
    ImageChange[ImageChange["NEXT"] = 1] = "NEXT";
})(ImageChange || (ImageChange = {}));
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(builder, animations) {
        this.builder = builder;
        this.animations = animations;
        this.selectedImage = 0;
        this.wrap = false;
    }
    GalleryComponent.prototype.ngAfterViewInit = function () {
        if (this.animations) {
            if (this.animations.middleRefade) {
                this.middleRefadeAnimationFactory = this.builder.build(this.animations.middleRefade);
            }
            if (this.animations.nextToMiddle) {
                this.nextToMiddleAnimationFactory = this.builder.build(this.animations.nextToMiddle);
            }
            if (this.animations.previousToMiddle) {
                this.previousToMiddleAnimationFactory = this.builder.build(this.animations.previousToMiddle);
            }
        }
    };
    GalleryComponent.prototype.ngAfterContentInit = function () {
        this.imageArray = this.images ? this.images.toArray() : [];
    };
    GalleryComponent.prototype.selectImage = function (index) {
        if (index !== undefined) {
            this.selectedImage = Math.max(0, Math.min(this.imageArray.length, index));
        }
    };
    GalleryComponent.prototype.nextImage = function () {
        var next = this.selectedImage + 1;
        if (!this.wrap) {
            next = Math.min(next, this.imageArray.length - 1);
        }
        if (next >= this.imageArray.length) {
            next = 0;
        }
        return next;
    };
    GalleryComponent.prototype.previousImage = function () {
        var previous = this.selectedImage - 1;
        if (!this.wrap) {
            previous = Math.max(previous, 0);
        }
        if (previous < 0) {
            previous = this.imageArray.length - 1;
        }
        return previous;
    };
    GalleryComponent.prototype.selectNext = function () {
        this.selectedImage = this.nextImage();
    };
    GalleryComponent.prototype.selectPrevious = function () {
        this.selectedImage = this.previousImage();
    };
    __decorate$1_([
        Input(),
        __metadata$1o("design:type", Number)
    ], GalleryComponent.prototype, "selectedImage", void 0);
    __decorate$1_([
        Input(),
        __metadata$1o("design:type", Boolean)
    ], GalleryComponent.prototype, "wrap", void 0);
    __decorate$1_([
        ContentChildren(GalleryImageComponent),
        __metadata$1o("design:type", QueryList)
    ], GalleryComponent.prototype, "images", void 0);
    GalleryComponent = __decorate$1_([
        Component({
            selector: 'vcl-gallery',
            template: "<div class=\"vclGallery\" touch-action=\"pan-y\">\n  <ng-content></ng-content>\n</div>\n",
            host: {
                '[attr.role]': '"gallery"',
            }
        }),
        __param$d(1, Optional()), __param$d(1, Inject(GALLERY_ANIMATIONS)),
        __metadata$1o("design:paramtypes", [AnimationBuilder, Object])
    ], GalleryComponent);
    return GalleryComponent;
}());

var __decorate$20 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1p = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$e = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var GalleryBodyComponent = /** @class */ (function () {
    function GalleryBodyComponent(parent, elementRef) {
        this.elementRef = elementRef;
        this.initialized = false;
        this.containerHeight = 0;
        this.loadedCount = 0;
        if (this.target == null) {
            this.target = parent;
        }
    }
    GalleryBodyComponent.prototype.onSwipeLeft = function () {
        this.selectNext();
    };
    GalleryBodyComponent.prototype.onSwipeRight = function () {
        this.selectPrevious();
    };
    GalleryBodyComponent.prototype.ngAfterContentChecked = function () {
        if (!this.initialized) {
            var images = this.imageContainer.nativeElement.querySelectorAll('img');
            if (images.length == 0) {
                return;
            }
            this.initialized = true;
            this.imgS = Array.from(images);
        }
    };
    GalleryBodyComponent.prototype.imageLoaded = function () {
        this.loadedCount++;
        this.reload();
    };
    GalleryBodyComponent.prototype.reload = function () {
        var maxHeight = 0;
        var leftPos = 0;
        for (var i in this.imgS) {
            var image = this.imgS[i];
            if (image.clientHeight > maxHeight) {
                maxHeight = image.clientHeight;
            }
            image['style'].left = Math.round(leftPos) + 'px';
            leftPos += image.clientWidth;
        }
        this.containerHeight = maxHeight;
    };
    Object.defineProperty(GalleryBodyComponent.prototype, "translatePosition", {
        get: function () {
            if (!this.imgS) {
                return 0;
            }
            var result = this.imageContainer.nativeElement.clientWidth / 2;
            for (var i = 0; i < this.target.selectedImage; i++) {
                result -= this.imgS['' + i].clientWidth;
            }
            result -= this.imgS['' + this.target.selectedImage].clientWidth / 2;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryBodyComponent.prototype, "imageContainerStyle", {
        get: function () {
            return {
                height: this.containerHeight + 'px',
                transform: 'translateX(' + this.translatePosition + 'px)',
                transition: this.loadedCount == (this.target.images && this.target.images.length) ? 'transform 0.5s' : ''
            };
        },
        enumerable: true,
        configurable: true
    });
    GalleryBodyComponent.prototype.selectNext = function () {
        this.target.selectNext();
    };
    GalleryBodyComponent.prototype.selectPrevious = function () {
        this.target.selectPrevious();
    };
    __decorate$20([
        Input(),
        __metadata$1p("design:type", GalleryComponent)
    ], GalleryBodyComponent.prototype, "target", void 0);
    __decorate$20([
        ViewChild('imageContainer'),
        __metadata$1p("design:type", ElementRef)
    ], GalleryBodyComponent.prototype, "imageContainer", void 0);
    __decorate$20([
        HostListener('swipeleft'),
        __metadata$1p("design:type", Function),
        __metadata$1p("design:paramtypes", []),
        __metadata$1p("design:returntype", void 0)
    ], GalleryBodyComponent.prototype, "onSwipeLeft", null);
    __decorate$20([
        HostListener('swiperight'),
        __metadata$1p("design:type", Function),
        __metadata$1p("design:paramtypes", []),
        __metadata$1p("design:returntype", void 0)
    ], GalleryBodyComponent.prototype, "onSwipeRight", null);
    GalleryBodyComponent = __decorate$20([
        Component({
            selector: 'vcl-gallery-body',
            template: "<div class=\"vclGalleryContent\" style=\"overflow: hidden;\">\n  <button *ngIf=\"target.selectedImage > 0 || target.wrap\" vcl-button class=\"vclButton vclGalleryPrevButton\" (click)=\"selectPrevious()\">\n    <div class=\"vclIcon fa fa-caret-left\" aria-hidden=\"true\" aria-label=\"Previous\" role=\"img\"></div>\n  </button>\n\n  <div #imageContainer style=\"position: relative; width: 100%; height: 100%; transition: transform 0.5s\" [ngStyle]=\"imageContainerStyle\">\n    <img *ngFor=\"let img of target.imageArray; let i = index\" [attr.data-index]=\"i\" (click)=\"target.selectImage(i)\" (load)=\"imageLoaded()\" [src]=\"img.image\" [alt]=\"img.alt\" style=\"touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); position: absolute; left: 0; top: 0\">\n  </div>\n\n  <button *ngIf=\"target.selectedImage < (target.images ? target.images.length - 1 : 0) || target.wrap\" vcl-button class=\"vclButton vclGalleryNextButton\" (click)=\"selectNext()\">\n    <div class=\"vclIcon fa fa-caret-right\" aria-hidden=\"true\" aria-label=\"Previous\" role=\"img\"></div>\n  </button>\n</div>\n"
        }),
        __param$e(0, Optional()),
        __metadata$1p("design:paramtypes", [GalleryComponent, ElementRef])
    ], GalleryBodyComponent);
    return GalleryBodyComponent;
}());

var __decorate$21 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1q = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$f = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var GalleryFooterComponent = /** @class */ (function () {
    function GalleryFooterComponent(parent) {
        if (this.target == null) {
            this.target = parent;
        }
    }
    __decorate$21([
        Input(),
        __metadata$1q("design:type", GalleryComponent)
    ], GalleryFooterComponent.prototype, "target", void 0);
    GalleryFooterComponent = __decorate$21([
        Component({
            selector: 'vcl-gallery-footer',
            template: "<div class=\"vclGalleryFooter vclAlignCentered\">\n  {{ target.selectedImage + 1 }}&nbsp;/&nbsp;{{ target.images ? target.images.length : 0 }}\n</div>\n"
        }),
        __param$f(0, Optional()),
        __metadata$1q("design:paramtypes", [GalleryComponent])
    ], GalleryFooterComponent);
    return GalleryFooterComponent;
}());

var __decorate$22 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1r = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$g = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var GalleryThumbnailsComponent = /** @class */ (function () {
    function GalleryThumbnailsComponent(parent) {
        if (this.target == null) {
            this.target = parent;
        }
    }
    __decorate$22([
        Input(),
        __metadata$1r("design:type", String)
    ], GalleryThumbnailsComponent.prototype, "galleryTitle", void 0);
    __decorate$22([
        Input(),
        __metadata$1r("design:type", GalleryComponent)
    ], GalleryThumbnailsComponent.prototype, "target", void 0);
    GalleryThumbnailsComponent = __decorate$22([
        Component({
            selector: 'vcl-gallery-thumbnails',
            template: "<div class=\"vclGalleryThumbs vclLayoutHorizontal vclLayoutCenterJustified\" touch-action=\"pan-y\">\n  <div *ngFor=\"let image of target.images; let i = index\" class=\"vclGalleryThumbWrapper\" [ngClass]=\"{'vclSelected': i == target.selectedImage}\" (click)=\"target.selectImage(i)\">\n    <img class=\"vclGalleryThumb\" [src]=\"image.thumbnail || image.image\" [alt]=\"image.alt\">\n  </div>\n</div>\n"
        }),
        __param$g(0, Optional()),
        __metadata$1r("design:paramtypes", [GalleryComponent])
    ], GalleryThumbnailsComponent);
    return GalleryThumbnailsComponent;
}());

var __decorate$23 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLGalleryModule = /** @class */ (function () {
    function VCLGalleryModule() {
    }
    VCLGalleryModule = __decorate$23([
        NgModule({
            imports: [CommonModule],
            exports: [GalleryComponent, GalleryImageComponent, GalleryBodyComponent, GalleryFooterComponent, GalleryThumbnailsComponent],
            declarations: [GalleryComponent, GalleryImageComponent, GalleryBodyComponent, GalleryFooterComponent, GalleryThumbnailsComponent]
        })
    ], VCLGalleryModule);
    return VCLGalleryModule;
}());

var __decorate$24 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1s = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    Object.defineProperty(BadgeComponent.prototype, "vclPrimary", {
        get: function () {
            return this.type === 'primary';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BadgeComponent.prototype, "vclSuccess", {
        get: function () {
            return this.type === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BadgeComponent.prototype, "vclInfo", {
        get: function () {
            return this.type === 'info';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BadgeComponent.prototype, "vclWarning", {
        get: function () {
            return this.type === 'warning';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BadgeComponent.prototype, "vclError", {
        get: function () {
            return this.type === 'error';
        },
        enumerable: true,
        configurable: true
    });
    __decorate$24([
        Input('vcl-badge'),
        __metadata$1s("design:type", Object)
    ], BadgeComponent.prototype, "type", void 0);
    __decorate$24([
        HostBinding('class.vclPrimary'),
        __metadata$1s("design:type", Object),
        __metadata$1s("design:paramtypes", [])
    ], BadgeComponent.prototype, "vclPrimary", null);
    __decorate$24([
        HostBinding('class.vclSuccess'),
        __metadata$1s("design:type", Object),
        __metadata$1s("design:paramtypes", [])
    ], BadgeComponent.prototype, "vclSuccess", null);
    __decorate$24([
        HostBinding('class.vclInfo'),
        __metadata$1s("design:type", Object),
        __metadata$1s("design:paramtypes", [])
    ], BadgeComponent.prototype, "vclInfo", null);
    __decorate$24([
        HostBinding('class.vclWarning'),
        __metadata$1s("design:type", Object),
        __metadata$1s("design:paramtypes", [])
    ], BadgeComponent.prototype, "vclWarning", null);
    __decorate$24([
        HostBinding('class.vclError'),
        __metadata$1s("design:type", Object),
        __metadata$1s("design:paramtypes", [])
    ], BadgeComponent.prototype, "vclError", null);
    BadgeComponent = __decorate$24([
        Directive({
            selector: '[vcl-badge]',
            host: {
                '[class.vclBadge]': 'true'
            }
        })
    ], BadgeComponent);
    return BadgeComponent;
}());

var __decorate$25 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLBadgeModule = /** @class */ (function () {
    function VCLBadgeModule() {
    }
    VCLBadgeModule = __decorate$25([
        NgModule({
            imports: [CommonModule, VCLMetalistModule],
            exports: [BadgeComponent],
            declarations: [BadgeComponent],
            providers: [],
        })
    ], VCLBadgeModule);
    return VCLBadgeModule;
}());

var __extends$c = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$26 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1t = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$h = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EmbeddedInputGroupComponent = /** @class */ (function (_super) {
    __extends$c(EmbeddedInputGroupComponent, _super);
    function EmbeddedInputGroupComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        return _this;
    }
    Object.defineProperty(EmbeddedInputGroupComponent.prototype, "hasAppendedItem", {
        get: function () {
            return !!this.appIcon || (this.buttons && this.buttons.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    __decorate$26([
        Input(),
        __metadata$1t("design:type", Boolean)
    ], EmbeddedInputGroupComponent.prototype, "disabled", void 0);
    __decorate$26([
        Input(),
        __metadata$1t("design:type", String)
    ], EmbeddedInputGroupComponent.prototype, "prepIcon", void 0);
    __decorate$26([
        Input(),
        __metadata$1t("design:type", String)
    ], EmbeddedInputGroupComponent.prototype, "appIcon", void 0);
    __decorate$26([
        ContentChildren(forwardRef(function () { return EmbeddedButtonDirective; })),
        __metadata$1t("design:type", QueryList)
    ], EmbeddedInputGroupComponent.prototype, "buttons", void 0);
    EmbeddedInputGroupComponent = __decorate$26([
        Component({
            selector: 'vcl-embedded-input-group',
            template: "<div *ngIf='prepIcon' class=\"vclPrepended\">\n  <vcl-icon [icon]='prepIcon'></vcl-icon>\n</div>\n\n<ng-content select=\"input[vcl-input][vcl-embedded-input-group]\"></ng-content>\n\n<div *ngIf='appIcon' class=\"vclAppended\">\n  <vcl-icon [icon]='appIcon'></vcl-icon>\n</div>\n\n<ng-content select=\"button[vcl-button][vcl-embedded-input-group]\"></ng-content>\n",
            host: {
                '[class.vclInputGroupEmb]': 'true',
                '[style.display]': '"block"'
            }
        })
    ], EmbeddedInputGroupComponent);
    return EmbeddedInputGroupComponent;
}(ObservableComponent));
var EmbeddedInputDirective = /** @class */ (function () {
    function EmbeddedInputDirective(input, inputGroup) {
        this.input = input;
        this.inputGroup = inputGroup;
    }
    Object.defineProperty(EmbeddedInputDirective.prototype, "isDisabled", {
        get: function () {
            return this.input.disabled || this.inputGroup.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedInputDirective.prototype, "classDisabled", {
        get: function () {
            return this.isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedInputDirective.prototype, "attrDisabled", {
        get: function () {
            return this.isDisabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedInputDirective.prototype, "prepItem", {
        get: function () {
            return !!this.inputGroup.prepIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmbeddedInputDirective.prototype, "hasAppendedItem", {
        get: function () {
            return this.inputGroup.hasAppendedItem;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$26([
        HostBinding('class.vclDisabled'),
        __metadata$1t("design:type", Object),
        __metadata$1t("design:paramtypes", [])
    ], EmbeddedInputDirective.prototype, "classDisabled", null);
    __decorate$26([
        HostBinding('attr.disabled'),
        __metadata$1t("design:type", Object),
        __metadata$1t("design:paramtypes", [])
    ], EmbeddedInputDirective.prototype, "attrDisabled", null);
    __decorate$26([
        HostBinding('class.vclPrepItem'),
        __metadata$1t("design:type", Object),
        __metadata$1t("design:paramtypes", [])
    ], EmbeddedInputDirective.prototype, "prepItem", null);
    __decorate$26([
        HostBinding('class.vclAppItem'),
        __metadata$1t("design:type", Object),
        __metadata$1t("design:paramtypes", [])
    ], EmbeddedInputDirective.prototype, "hasAppendedItem", null);
    EmbeddedInputDirective = __decorate$26([
        Directive({
            selector: 'input[vcl-input][vcl-embedded-input-group]',
        }),
        __param$h(0, Self()),
        __param$h(1, SkipSelf()),
        __metadata$1t("design:paramtypes", [InputDirective,
            EmbeddedInputGroupComponent])
    ], EmbeddedInputDirective);
    return EmbeddedInputDirective;
}());
var EmbeddedButtonDirective = /** @class */ (function () {
    function EmbeddedButtonDirective(button, inputGroup) {
        this.button = button;
        this.inputGroup = inputGroup;
    }
    Object.defineProperty(EmbeddedButtonDirective.prototype, "isDisabled", {
        get: function () {
            return (this.button.disabled || this.inputGroup.disabled) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate$26([
        HostBinding('class.vclDisabled'),
        HostBinding('attr.disabled'),
        __metadata$1t("design:type", Object),
        __metadata$1t("design:paramtypes", [])
    ], EmbeddedButtonDirective.prototype, "isDisabled", null);
    EmbeddedButtonDirective = __decorate$26([
        Directive({
            selector: 'button[vcl-button][vcl-embedded-input-group][icon]',
            host: {
                '[class.vclTransparent]': 'true',
                '[class.vclAppended]': 'true'
            }
        }),
        __param$h(0, Self()),
        __param$h(1, SkipSelf()),
        __metadata$1t("design:paramtypes", [ButtonDirective,
            EmbeddedInputGroupComponent])
    ], EmbeddedButtonDirective);
    return EmbeddedButtonDirective;
}());

var __decorate$27 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLEmbeddedInputGroupModule = /** @class */ (function () {
    function VCLEmbeddedInputGroupModule() {
    }
    VCLEmbeddedInputGroupModule = __decorate$27([
        NgModule({
            imports: [CommonModule, VCLButtonModule$1, VCLInputModule, VCLIconModule],
            exports: [EmbeddedInputGroupComponent, EmbeddedInputDirective, EmbeddedButtonDirective],
            declarations: [EmbeddedInputGroupComponent, EmbeddedInputDirective, EmbeddedButtonDirective],
        })
    ], VCLEmbeddedInputGroupModule);
    return VCLEmbeddedInputGroupModule;
}());

var __extends$d = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$28 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1u = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Autocomplete = /** @class */ (function (_super) {
    __extends$d(Autocomplete, _super);
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
                _this.select.emit(ac);
            },
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
    __decorate$28([
        ViewChild('popover'),
        __metadata$1u("design:type", PopoverComponent$1)
    ], Autocomplete.prototype, "popover", void 0);
    __decorate$28([
        ContentChildren(forwardRef(function () { return AutocompleteOption; })),
        __metadata$1u("design:type", QueryList)
    ], Autocomplete.prototype, "items", void 0);
    __decorate$28([
        ContentChildren(forwardRef(function () { return AutocompleteContent; })),
        __metadata$1u("design:type", QueryList)
    ], Autocomplete.prototype, "content", void 0);
    __decorate$28([
        Input(),
        __metadata$1u("design:type", Boolean)
    ], Autocomplete.prototype, "disabled", void 0);
    __decorate$28([
        Output(),
        __metadata$1u("design:type", Object)
    ], Autocomplete.prototype, "select", void 0);
    Autocomplete = __decorate$28([
        Component({
            selector: 'vcl-autocomplete',
            exportAs: 'vclAutocomplete',
            template: "<ng-container *ngIf=\"(target$ | async) as target\">\n  <vcl-popover #popover \n               *ngIf=\"visible$ | async\"\n               [target]=\"target.element\" \n               [visible]=\"true\" \n               targetX=\"left\" \n               targetY=\"bottom\" \n               attachmentX=\"left\" \n               attachmentY=\"top\" \n               [style.width]=\"popoverWidth$ | async\"\n               (mousedown)=\"$event.preventDefault()\"\n               >\n  \n    <ng-container *ngIf=\"(items$ | async)?.length > 0\">\n      <ul class=\"vclDropdown vclNoBorder vclOpen\" role=\"menu\">\n        <ng-container *ngFor=\"let item of items$ | async; let idx = index\">\n          <li *ngIf=\"item.type==='item'\" \n            class=\"vclDropdownItem\"\n            [class.vclHighlighted]=\"idx === highlightedItem\"\n            [class.vclDisabled]=\"disabled || item.disabled\"\n            role=\"menuitem\"\n            (click)=\"target.select(item)\">\n            <div role=\"menuitem\" class=\"vclDropdownItemLabel\">{{item.label}}</div>\n            <div *ngIf=\"item.sublabel\" class=\"vclDropdownItemSubLabel\">{{item.sublabel}}</div>\n          </li>\n          <li *ngIf=\"item.type==='separator'\" role=\"menuitem\">\n            <div class=\"vclSeparator\" role=\"separator\"></div>\n          </li>\n          <li *ngIf=\"item.type==='header'\" class=\"vclDropdownItemGroupHeader\" role=\"menuitem\">\n            <div class=\"vclDropdownItemGroupHeaderLabel\">{{item.label}}</div>\n          </li>\n        </ng-container>\n      </ul>\n    </ng-container>\n    <ng-container *ngFor=\"let c of content$ | async\">\n      <ng-container *ngTemplateOutlet=\"c.templateRef\"></ng-container>\n    </ng-container>\n  </vcl-popover>\n</ng-container>\n",
            styles: ["\n    .vclDropdown {\n      padding: 0;\n      position: static;\n    }\n    .vclPopOver {\n      padding: 0;\n    }\n  "]
        })
    ], Autocomplete);
    return Autocomplete;
}(ObservableComponent));
var AutocompleteOption = /** @class */ (function () {
    function AutocompleteOption() {
        this.type = 'item';
        this.disabled = false;
    }
    __decorate$28([
        Input(),
        __metadata$1u("design:type", String)
    ], AutocompleteOption.prototype, "type", void 0);
    __decorate$28([
        Input(),
        __metadata$1u("design:type", Object)
    ], AutocompleteOption.prototype, "value", void 0);
    __decorate$28([
        Input(),
        __metadata$1u("design:type", String)
    ], AutocompleteOption.prototype, "label", void 0);
    __decorate$28([
        Input(),
        __metadata$1u("design:type", String)
    ], AutocompleteOption.prototype, "sublabel", void 0);
    __decorate$28([
        Input(),
        __metadata$1u("design:type", Boolean)
    ], AutocompleteOption.prototype, "disabled", void 0);
    AutocompleteOption = __decorate$28([
        Directive({
            selector: 'vcl-autocomplete-option'
        })
    ], AutocompleteOption);
    return AutocompleteOption;
}());
var AutocompleteContent = /** @class */ (function () {
    function AutocompleteContent() {
    }
    __decorate$28([
        ViewChild(TemplateRef),
        __metadata$1u("design:type", TemplateRef)
    ], AutocompleteContent.prototype, "templateRef", void 0);
    AutocompleteContent = __decorate$28([
        Component({
            selector: 'vcl-autocomplete-content',
            template: '<ng-template><ng-content></ng-content></ng-template>'
        })
    ], AutocompleteContent);
    return AutocompleteContent;
}());

var __extends$e = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$29 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1v = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter$2 = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$2 = (this && this.__generator) || function (thisArg, body) {
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
var InputAutocompleteDirective = /** @class */ (function (_super) {
    __extends$e(InputAutocompleteDirective, _super);
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
        return __awaiter$2(this, void 0, void 0, function () {
            var code;
            return __generator$2(this, function (_a) {
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
    __decorate$29([
        Output(),
        __metadata$1v("design:type", Object)
    ], InputAutocompleteDirective.prototype, "autocompleteSelect", void 0);
    __decorate$29([
        Input(),
        __metadata$1v("design:type", Object)
    ], InputAutocompleteDirective.prototype, "autocompleteAfterSelectAction", void 0);
    __decorate$29([
        Input('vcl-input-autocomplete'),
        __metadata$1v("design:type", Autocomplete)
    ], InputAutocompleteDirective.prototype, "_ac", void 0);
    __decorate$29([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata$1v("design:type", Boolean)
    ], InputAutocompleteDirective.prototype, "disabled", void 0);
    __decorate$29([
        HostBinding('attr.disabled'),
        __metadata$1v("design:type", Object),
        __metadata$1v("design:paramtypes", [])
    ], InputAutocompleteDirective.prototype, "attrDisabled", null);
    __decorate$29([
        HostListener('focus'),
        HostListener('input'),
        __metadata$1v("design:type", Function),
        __metadata$1v("design:paramtypes", []),
        __metadata$1v("design:returntype", void 0)
    ], InputAutocompleteDirective.prototype, "onFocusOrInput", null);
    __decorate$29([
        HostListener('blur'),
        __metadata$1v("design:type", Function),
        __metadata$1v("design:paramtypes", []),
        __metadata$1v("design:returntype", void 0)
    ], InputAutocompleteDirective.prototype, "onBlur", null);
    __decorate$29([
        HostListener('keyup', ['$event']),
        __metadata$1v("design:type", Function),
        __metadata$1v("design:paramtypes", [Object]),
        __metadata$1v("design:returntype", void 0)
    ], InputAutocompleteDirective.prototype, "onKeyUp", null);
    __decorate$29([
        HostListener('keypress', ['$event']),
        __metadata$1v("design:type", Function),
        __metadata$1v("design:paramtypes", [KeyboardEvent]),
        __metadata$1v("design:returntype", Promise)
    ], InputAutocompleteDirective.prototype, "handleKeyPressEvent", null);
    InputAutocompleteDirective = __decorate$29([
        Directive({
            selector: 'input[vcl-input-autocomplete]',
        }),
        __metadata$1v("design:paramtypes", [ElementRef])
    ], InputAutocompleteDirective);
    return InputAutocompleteDirective;
}(ObservableComponent));

var __extends$f = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$2a = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1w = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$i = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TokenInputAutocompleteDirective = /** @class */ (function (_super) {
    __extends$f(TokenInputAutocompleteDirective, _super);
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
            _this.tokenInputContainer.addToken({
                label: selection.label || String(selection.value),
                value: selection.value
            });
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
    __decorate$2a([
        Output(),
        __metadata$1w("design:type", Object)
    ], TokenInputAutocompleteDirective.prototype, "autocompleteSelect", void 0);
    __decorate$2a([
        Input(),
        __metadata$1w("design:type", Boolean)
    ], TokenInputAutocompleteDirective.prototype, "disabled", void 0);
    __decorate$2a([
        HostBinding('class.vclDisabled'),
        __metadata$1w("design:type", Object),
        __metadata$1w("design:paramtypes", [])
    ], TokenInputAutocompleteDirective.prototype, "classDisabled", null);
    __decorate$2a([
        HostBinding('attr.disabled'),
        __metadata$1w("design:type", Object),
        __metadata$1w("design:paramtypes", [])
    ], TokenInputAutocompleteDirective.prototype, "attrDisabled", null);
    __decorate$2a([
        Input('vcl-token-input-autocomplete'),
        __metadata$1w("design:type", Autocomplete)
    ], TokenInputAutocompleteDirective.prototype, "_ac", void 0);
    __decorate$2a([
        HostListener('input'),
        HostListener('focus'),
        __metadata$1w("design:type", Function),
        __metadata$1w("design:paramtypes", []),
        __metadata$1w("design:returntype", void 0)
    ], TokenInputAutocompleteDirective.prototype, "listenActivate", null);
    __decorate$2a([
        HostListener('blur'),
        __metadata$1w("design:type", Function),
        __metadata$1w("design:paramtypes", []),
        __metadata$1w("design:returntype", void 0)
    ], TokenInputAutocompleteDirective.prototype, "onBlur", null);
    __decorate$2a([
        HostListener('keydown', ['$event']),
        __metadata$1w("design:type", Function),
        __metadata$1w("design:paramtypes", [Object]),
        __metadata$1w("design:returntype", void 0)
    ], TokenInputAutocompleteDirective.prototype, "onKeyPress", null);
    __decorate$2a([
        HostListener('keydown', ['$event']),
        __metadata$1w("design:type", Function),
        __metadata$1w("design:paramtypes", [Object]),
        __metadata$1w("design:returntype", void 0)
    ], TokenInputAutocompleteDirective.prototype, "onKeyDown", null);
    __decorate$2a([
        HostListener('keyup', ['$event']),
        __metadata$1w("design:type", Function),
        __metadata$1w("design:paramtypes", [Object]),
        __metadata$1w("design:returntype", void 0)
    ], TokenInputAutocompleteDirective.prototype, "onKeyUp", null);
    TokenInputAutocompleteDirective = __decorate$2a([
        Directive({
            selector: 'input[vcl-token-input-autocomplete]',
            host: {
                '[class.vclInput]': 'true',
                '[attr.flex]': 'true'
            }
        }),
        __param$i(1, Optional()), __param$i(1, SkipSelf()),
        __metadata$1w("design:paramtypes", [ElementRef,
            TokenInputContainerComponent])
    ], TokenInputAutocompleteDirective);
    return TokenInputAutocompleteDirective;
}(ObservableComponent));

var __decorate$2b = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLAutocompleteModule = /** @class */ (function () {
    function VCLAutocompleteModule() {
    }
    VCLAutocompleteModule = __decorate$2b([
        NgModule({
            imports: [CommonModule, VCLInputModule, VCLPopoverModule$1, VCLTokenModule],
            exports: [InputAutocompleteDirective, Autocomplete, AutocompleteOption, AutocompleteContent, TokenInputAutocompleteDirective],
            declarations: [InputAutocompleteDirective, Autocomplete, AutocompleteOption, AutocompleteContent, TokenInputAutocompleteDirective],
            providers: [],
        })
    ], VCLAutocompleteModule);
    return VCLAutocompleteModule;
}());

var __decorate$2c = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TourOptions = /** @class */ (function () {
    function TourOptions() {
        this.debug = false;
        this.debugTour = false;
        this.debugPopover = false;
        this.useOrder = false;
        this.elementsDisabled = true;
        this.applyRelative = true;
        this.dismissOnOverlay = false;
        this.zIndex = 21;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.exitLabel = 'Exit';
        this.previousIcon = 'fa fa-chevron-left';
        this.nextIcon = 'fa fa-chevron-right';
        this.exitIcon = 'fa fa-close';
        this.buttonClass = '';
        this.offsetAttachmentX = 0;
        this.offsetAttachmentY = 0;
    }
    return TourOptions;
}());
var TourService = /** @class */ (function () {
    function TourService() {
        this.tag = TourService_1.Tag;
        this._tourComponents = [];
        this.tourComponents = [];
        this.index = 0;
        this.end$ = new Subject();
        this.tourComponent$ = new Subject();
        this._showOverlay = false;
    }
    TourService_1 = TourService;
    Object.defineProperty(TourService.prototype, "showOverlay", {
        get: function () {
            return this._showOverlay;
        },
        set: function (showOverlay) {
            this._showOverlay = showOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TourService.prototype, "hasPrevious", {
        get: function () {
            var tag = this.tag + ".hasPrevious()";
            var debug = this.debug || false;
            var hasPrevious = this.index > 0;
            if (debug)
                console.log(tag, 'hasPrevious:', hasPrevious);
            return hasPrevious;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TourService.prototype, "hasNext", {
        get: function () {
            var tag = this.tag + ".hasNext()";
            var debug = this.debug || false;
            var hasNext = this.index < this.tourComponents.length - 1;
            if (debug)
                console.log(tag, 'hasNext:', hasNext);
            return hasNext;
        },
        enumerable: true,
        configurable: true
    });
    TourService.prototype.register = function (tourComponent) {
        var tag = this.tag + ".register()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'tourComponent:', tourComponent);
        this._tourComponents = this._tourComponents.includes(tourComponent) ?
            this._tourComponents : this._tourComponents.concat([tourComponent]);
        if (debug)
            console.log(tag, 'this._tourComponents:', this._tourComponents);
    };
    TourService.prototype.initialize = function (options) {
        if (options === void 0) { options = new TourOptions(); }
        var tag = this.tag + ".initialize()";
        this.options = Object.assign(new TourOptions(), options);
        this.debug = this.options.debug || false;
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'options:', options);
        if (debug)
            console.log(tag, 'this.options:', this.options);
    };
    TourService.prototype.start = function (index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        var tag = this.tag + ".start()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'index:', index);
        if (!this.options)
            this.initialize();
        this.tourComponents = this.options.useOrder ?
            this._tourComponents.slice().sort(function (s1, s2) { return s1.order - s2.order; }) :
            this._tourComponents;
        if (debug)
            console.log(tag, 'this.tourComponents:', this.tourComponents);
        this.tourComponents.forEach(function (tourComponent) {
            tourComponent.debug = tourComponent.debug || _this.options.debugTour;
            tourComponent.debugPopover = tourComponent.debugPopover || _this.options.debugPopover;
            tourComponent.offsetAttachmentX = isNumber(tourComponent.offsetAttachmentX) ?
                tourComponent.offsetAttachmentX : _this.options.offsetAttachmentX;
            tourComponent.offsetAttachmentY = isNumber(tourComponent.offsetAttachmentY) ?
                tourComponent.offsetAttachmentY : _this.options.offsetAttachmentY;
        });
        this.show(index);
    };
    TourService.prototype.show = function (index) {
        var tag = this.tag + ".show()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'index:', index);
        this.tourComponent && this.tourComponent.hide();
        var tourComponent = this.tourComponents[index];
        if (debug)
            console.log(tag, 'tourComponent:', tourComponent);
        if (!tourComponent) {
            this.tourComponent = null;
            this.index = 0;
            return;
        }
        this.tourComponent = tourComponent;
        this.index = index;
        this.showOverlay = true;
        tourComponent.show();
        this.tourComponent$.next(this.tourComponent);
    };
    TourService.prototype.showPrevious = function () {
        var tag = this.tag + ".showPrevious()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'hasPrevious:', this.hasPrevious);
        if (!this.hasPrevious)
            return this.end();
        this.show(this.index - 1);
    };
    TourService.prototype.showNext = function () {
        var tag = this.tag + ".showNext()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'hasNext:', this.hasNext);
        if (!this.hasNext)
            return this.end();
        this.show(this.index + 1);
    };
    TourService.prototype.end = function () {
        var tag = this.tag + ".end()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag);
        this.tourComponent && this.tourComponent.hide();
        this.showOverlay = false;
        this.index = 0;
        this.end$.next(true);
    };
    TourService.prototype.onOverlayClick = function () {
        var tag = this.tag + ".onOverlayClick()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'this.options.dismissOnOverlay:', this.options.dismissOnOverlay);
        if (this.options.dismissOnOverlay)
            this.showNext();
    };
    TourService.Tag = 'TourService';
    TourService = TourService_1 = __decorate$2c([
        Injectable()
    ], TourService);
    return TourService;
    var TourService_1;
}());
var isNumber = function (v) { return !isNaN(Number(v)) && isFinite(v); };

var __decorate$2d = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1x = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TourOverlayComponent = /** @class */ (function () {
    function TourOverlayComponent(tour) {
        this.tour = tour;
    }
    TourOverlayComponent = __decorate$2d([
        Component({
            selector: 'vcl-tour-overlay',
            template: "<div \n  class=\"vclTourOverlay\" \n  [class.vclLayoutHidden]=\"!tour.showOverlay\"\n  (click)=\"tour.onOverlayClick()\">\n</div>",
            styles: ["\n.vclTourOverlay {\n    position: fixed !important ;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, .5);\n    z-index: 20;\n    top: 0;\n    left: 0;\n}"]
        }),
        __metadata$1x("design:paramtypes", [TourService])
    ], TourOverlayComponent);
    return TourOverlayComponent;
}());

var __decorate$2e = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1y = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var VCLTourStepTag = 'vcl-tour-step';
var TourComponent = /** @class */ (function () {
    function TourComponent(tour) {
        this.tour = tour;
        this.debug = false;
        this.debugPopover = false;
        this.targetX = AttachmentX.Center;
        this.attachmentX = AttachmentX.Center;
        this.targetY = AttachmentY.Bottom;
        this.attachmentY = AttachmentY.Top;
        this.visible = false;
        this.hasNext = false;
        this.hasPrevious = false;
        var tag = this.tag + ".constructor()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'tour.options:', tour.options);
    }
    TourComponent_1 = TourComponent;
    TourComponent.prototype.ngOnInit = function () {
        this.tag = TourComponent_1.Tag + "." + this.target;
        var tag = this.tag + ".ngOnInit()";
        var debug = this.debug || false;
        this.tour.register(this);
    };
    TourComponent.prototype.show = function () {
        var tag = this.tag + ".show()";
        var debug = this.debug || false;
        var el = this.popover.targetElement;
        if (debug)
            console.log(tag, 'el:', el);
        if (el) {
            el.style.zIndex = "" + this.tour.options.zIndex;
            if (debug)
                console.log(tag, 'tour.options.elementsDisabled:', this.tour.options.elementsDisabled);
            if (this.tour.options.elementsDisabled) {
                this.disableClick(el);
            }
            if (debug)
                console.log(tag, 'tour.options.applyRelative:', this.tour.options.applyRelative);
            if (this.tour.options.applyRelative) {
                this.enableHighlight(el);
            }
        }
        this.visible = true;
        this.hasNext = this.tour.hasNext;
        this.hasPrevious = this.tour.hasPrevious;
        if (debug)
            console.log(tag, 'this:', this);
    };
    TourComponent.prototype.hide = function () {
        var tag = this.tag + ".hide()";
        var debug = this.debug || false;
        var highlightedElement = this.popover.targetElement;
        if (debug)
            console.log(tag, 'highlightedElement:', highlightedElement);
        if (highlightedElement) {
            highlightedElement.style.zIndex = null;
            this.enableClick(highlightedElement);
            this.disableHighlight(highlightedElement);
        }
        this.visible = false;
        if (debug)
            console.log(tag, 'this:', this);
    };
    TourComponent.prototype.previous = function () {
        var tag = this.tag + ".previous()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag);
        this.tour.showPrevious();
    };
    TourComponent.prototype.next = function () {
        var tag = this.tag + ".next()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag);
        this.tour.showNext();
    };
    TourComponent.prototype.exit = function () {
        var tag = this.tag + ".exit()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag);
        this.tour.end();
    };
    TourComponent.prototype.disableClick = function (element) {
        element.style.cursor = 'default';
        element.style.pointerEvents = 'none';
    };
    TourComponent.prototype.enableClick = function (element) {
        element.style.cursor = null;
        element.style.pointerEvents = null;
    };
    TourComponent.prototype.enableHighlight = function (element) {
        element.style.position = 'relative';
    };
    TourComponent.prototype.disableHighlight = function (element) {
        element.style.position = null;
    };
    TourComponent.Tag = 'TourComponent';
    __decorate$2e([
        Input(),
        __metadata$1y("design:type", Boolean)
    ], TourComponent.prototype, "debug", void 0);
    __decorate$2e([
        Input(),
        __metadata$1y("design:type", Boolean)
    ], TourComponent.prototype, "debugPopover", void 0);
    __decorate$2e([
        ViewChild('popover'),
        __metadata$1y("design:type", PopoverComponent)
    ], TourComponent.prototype, "popover", void 0);
    __decorate$2e([
        Input(),
        __metadata$1y("design:type", String)
    ], TourComponent.prototype, "title", void 0);
    __decorate$2e([
        Input(),
        __metadata$1y("design:type", Number)
    ], TourComponent.prototype, "order", void 0);
    __decorate$2e([
        Input(),
        __metadata$1y("design:type", Object)
    ], TourComponent.prototype, "target", void 0);
    __decorate$2e([
        Input(),
        __metadata$1y("design:type", String)
    ], TourComponent.prototype, "targetX", void 0);
    __decorate$2e([
        Input(),
        __metadata$1y("design:type", String)
    ], TourComponent.prototype, "attachmentX", void 0);
    __decorate$2e([
        Input(),
        __metadata$1y("design:type", Number)
    ], TourComponent.prototype, "offsetAttachmentX", void 0);
    __decorate$2e([
        Input(),
        __metadata$1y("design:type", String)
    ], TourComponent.prototype, "targetY", void 0);
    __decorate$2e([
        Input(),
        __metadata$1y("design:type", String)
    ], TourComponent.prototype, "attachmentY", void 0);
    __decorate$2e([
        Input(),
        __metadata$1y("design:type", Number)
    ], TourComponent.prototype, "offsetAttachmentY", void 0);
    TourComponent = TourComponent_1 = __decorate$2e([
        Component({
            selector: VCLTourStepTag,
            template: "<vcl-popover #popover\n  [debug]=\"debugPopover\"\n  [visible]=\"visible\"\n  [target]=\"target\"\n  [targetX]=\"targetX\"\n  [attachmentX]=\"attachmentX\"\n  [offsetAttachmentX]=\"offsetAttachmentX\"\n  [targetY]=\"targetY\"\n  [attachmentY]=\"attachmentY\"\n  [offsetAttachmentY]=\"offsetAttachmentY\"\n  [style.z-index]=\"tour.options?.zIndex\">\n\n  <div class=\"vclTourContainer\">\n\n    <div class=\"vclTourContainerHeader\" *ngIf=\"title\">\n      {{ title }}\n    </div>\n\n    <div class=\"vclTourContainerContent\">\n      <ng-content></ng-content>\n    </div>\n\n    <div class=\"vclTourContainerFooter\">\n      \n      <button vcl-button *ngIf=\"hasPrevious\"\n        [ngClass]=\"tour.options?.buttonClass\"\n        [label]=\"tour.options?.previousLabel\"\n        [prepIcon]=\"tour.options?.previousIcon\"\n        (click)=\"previous()\">\n      </button>\n\n      <button vcl-button *ngIf=\"hasNext\"\n        [ngClass]=\"tour.options?.buttonClass\"\n        [label]=\"tour.options?.nextLabel\"\n        [appIcon]=\"tour.options?.nextIcon\"\n        (click)=\"next()\">\n      </button>\n\n      <button vcl-button\n        [ngClass]=\"tour.options?.buttonClass\"\n        [label]=\"tour.options?.exitLabel\"\n        [prepIcon]=\"tour.options?.exitIcon\"\n        (click)=\"exit()\">\n      </button>\n\n    </div>\n    \n  </div>\n\n</vcl-popover>",
            styles: [".vclTourContainer {\n    background-color: #fff;\n    text-align: center;\n    font-size: 14px;\n    color: #000;\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n  }\n  \n.vclTourContainer .vclTourContainerHeader {\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  background-color: #ddd;\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n}\n  \n.vclTourContainer .vclTourContainerContent {\n  padding: 10px;\n}\n\n.vclTourContainer .vclTourContainerFooter {\n  padding: 10px;\n}\n\n.vclTourContainer .vclButton:first {\n  margin-left: 0;\n}"]
        }),
        __metadata$1y("design:paramtypes", [TourService])
    ], TourComponent);
    return TourComponent;
    var TourComponent_1;
}());

var __decorate$2f = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLTourModule = /** @class */ (function () {
    function VCLTourModule() {
    }
    VCLTourModule = __decorate$2f([
        NgModule({
            imports: [CommonModule, VCLPopoverModule, VCLButtonModule],
            exports: [TourComponent, TourOverlayComponent],
            declarations: [TourComponent, TourOverlayComponent],
            providers: [TourService],
        })
    ], VCLTourModule);
    return VCLTourModule;
}());

var __decorate$2g = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1z = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$e = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RatingComponent; }),
    multi: true
};
var RatingComponent = /** @class */ (function () {
    function RatingComponent(cdRef) {
        this.cdRef = cdRef;
        this.tabindex = 0;
        this.type = 'horizontal';
        this.fullStar = 'fa fa-star';
        this.halfStar = 'fa fa-star-half-o';
        this.emptyStar = 'fa fa-star-o';
        this.starCount = 5;
        this.halves = true;
        this.value = 0;
        this.readonly = false;
        this.iconSize = undefined;
        this.textSize = undefined;
        this.showText = true;
        this.disabled = false;
        this.valueChange = new EventEmitter();
    }
    RatingComponent.prototype.clickStar = function (star) {
        if (this.disabled || this.readonly) {
            return;
        }
        this.value = star;
        this.valueChange.emit(this.value);
        this.onChangeCallback && this.onChangeCallback(this.value);
    };
    RatingComponent.prototype.isHalfStar = function (star) {
        return this.halves ? (Math.round(this.value * 2) / 2) == star - 0.5 : false;
    };
    RatingComponent.prototype.round = function (x) {
        return Math.round(x);
    };
    RatingComponent.prototype.getIcon = function (stars, small) {
        if (small === void 0) { small = false; }
        var classes = [
            'vclRatingItem',
            'vclIcon'
        ];
        if (small) {
            if (this.value >= this.starCount) {
                classes.push.apply(classes, this.fullStar.split(' '));
            }
            else if (this.value >= this.starCount / 2 && this.value < this.starCount) {
                classes.push.apply(classes, this.halfStar.split(' '));
            }
            else {
                classes.push.apply(classes, this.emptyStar.split(' '));
            }
        }
        else {
            if (this.round(this.value) >= stars && !this.isHalfStar(stars)) {
                classes.push.apply(classes, this.fullStar.split(' '));
            }
            else if (this.isHalfStar(stars)) {
                classes.push.apply(classes, this.halfStar.split(' '));
            }
            else {
                classes.push.apply(classes, this.emptyStar.split(' '));
            }
        }
        return classes;
    };
    Object.defineProperty(RatingComponent.prototype, "starArray", {
        get: function () {
            return Array(this.starCount).fill(0).map(function (x, i) { return i + 1; });
        },
        enumerable: true,
        configurable: true
    });
    RatingComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.cdRef.markForCheck();
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    RatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    __decorate$2g([
        HostBinding(),
        __metadata$1z("design:type", Object)
    ], RatingComponent.prototype, "tabindex", void 0);
    __decorate$2g([
        Input(),
        __metadata$1z("design:type", String)
    ], RatingComponent.prototype, "type", void 0);
    __decorate$2g([
        Input(),
        __metadata$1z("design:type", String)
    ], RatingComponent.prototype, "fullStar", void 0);
    __decorate$2g([
        Input(),
        __metadata$1z("design:type", String)
    ], RatingComponent.prototype, "halfStar", void 0);
    __decorate$2g([
        Input(),
        __metadata$1z("design:type", String)
    ], RatingComponent.prototype, "emptyStar", void 0);
    __decorate$2g([
        Input(),
        __metadata$1z("design:type", Number)
    ], RatingComponent.prototype, "starCount", void 0);
    __decorate$2g([
        Input(),
        __metadata$1z("design:type", Boolean)
    ], RatingComponent.prototype, "halves", void 0);
    __decorate$2g([
        Input(),
        __metadata$1z("design:type", Number)
    ], RatingComponent.prototype, "value", void 0);
    __decorate$2g([
        Input(),
        __metadata$1z("design:type", Boolean)
    ], RatingComponent.prototype, "readonly", void 0);
    __decorate$2g([
        Input(),
        __metadata$1z("design:type", String)
    ], RatingComponent.prototype, "iconSize", void 0);
    __decorate$2g([
        Input(),
        __metadata$1z("design:type", String)
    ], RatingComponent.prototype, "textSize", void 0);
    __decorate$2g([
        Input(),
        __metadata$1z("design:type", Boolean)
    ], RatingComponent.prototype, "showText", void 0);
    __decorate$2g([
        HostBinding('class.vclDisabled'),
        Input(),
        __metadata$1z("design:type", Boolean)
    ], RatingComponent.prototype, "disabled", void 0);
    __decorate$2g([
        Output(),
        __metadata$1z("design:type", Object)
    ], RatingComponent.prototype, "valueChange", void 0);
    RatingComponent = __decorate$2g([
        Component({
            selector: 'vcl-rating',
            template: "<ng-container *ngIf=\"type === 'horizontal' || type === 'vertical'\">\n  <span class=\"vclRating\"\n        [class.vclDisabled]=\"disabled\"\n        [class.vclRatingVertical]=\"type === 'vertical'\"\n        style=\"height: unset\">\n    <span *ngFor=\"let star of starArray\"\n          [ngClass]=\"getIcon(star)\"\n          [attr.tabindex]=\"readonly ? undefined : 0\"\n          (mousedown)=\"clickStar(star)\"\n          [ngStyle]=\"{'font-size': iconSize}\">\n    </span>\n  </span>\n</ng-container>\n<ng-container *ngIf=\"type === 'small'\">\n  <span class=\"vclRating\" [class.vclDisabled]=\"disabled\" style=\"height: unset\">\n    <span [ngClass]=\"getIcon(star, true)\" [ngStyle]=\"{'font-size': iconSize}\">\n    </span>\n    <strong *ngIf=\"showText\" [ngStyle]=\"{'font-size': textSize}\">{{ value }}</strong>\n  </span>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR$e],
            styles: ["\n      .vclRatingVertical {\n        flex-direction: column;\n      }\n    "]
        }),
        __metadata$1z("design:paramtypes", [ChangeDetectorRef])
    ], RatingComponent);
    return RatingComponent;
}());

var __decorate$2h = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var VCLRatingModule = /** @class */ (function () {
    function VCLRatingModule() {
    }
    VCLRatingModule = __decorate$2h([
        NgModule({
            imports: [CommonModule],
            exports: [RatingComponent],
            declarations: [RatingComponent],
            providers: [],
        })
    ], VCLRatingModule);
    return VCLRatingModule;
}());

export { ObservableComponent, LayoutDirective, LayoutTargetDirective, VCLLayoutModule, defineMetadata, getMetadata, InputDirective, VCLInputModule, VCLFileInputModule, VCLTextareaModule, VCLFlipSwitchModule, IconDirective, IconFontDirective, DefaultIconResolverService, VCL_ICON_RESOLVER, VCLIconModule, MetalistItem, MetalistComponent, VCLMetalistModule, DropdownOption, DropdownComponent, DROPDOWN_ANIMATIONS, VCLDropdownModule, SelectComponent, SelectOption, DropDirection, VCLSelectModule, IcogramComponent, IcogramSpanComponent, VCLIcogramModule, ButtonDirective, ButtonLabelComponent, ButtonSelectDirective, ButtonIconComponent, VCLButtonModule$1 as VCLButtonModule, ButtonGroupComponent, GroupButtonDirective, VCLButtonGroupModule, LayerRefDirective, LayerRef, LayerService, LayerContainerComponent, DynamicLayerRef, LAYER_ANIMATIONS, LayerResult, LAYERS, Layer, VCLLayerModule, VCLTabNavModule, NavigationComponent, NavigationItemDirective, VCLNavigationModule, VCLToolbarModule, VCLLinkModule, PopoverComponent$1 as PopoverComponent, AttachmentX$1 as AttachmentX, AttachmentY$1 as AttachmentY, POPOVER_ANIMATIONS, VCLPopoverModule$1 as VCLPopoverModule, VCLProgressBarModule, RadioButtonComponent, RadioGroupComponent, VCLRadioButtonModule, CheckboxComponent, VCLCheckboxModule, VCLOffClickModule, DatePickerComponent, TimePickerComponent, VCLDatePickerModule, VCLFormControlLabelModule, TemplateWormhole, ComponentWormhole, Wormhole, WormholeDirective, DomComponentWormhole, DomTemplateWormhole, WormholeHost, DomWormholeHost, VCLWormholeModule, MonthPickerComponent, VCLMonthPickerModule, VCLLabelModule, TokenComponent, TokenInputContainerComponent, TokenInputDirective, TokenListComponent, VCLTokenModule, SliderComponent, VCLSliderModule, VCLInputControlGroupModule, AlertService, AlertType, AlertInput, AlertError, AlertAlignment, VCLAlertModule, BusyIndicatorCoverComponent, BusyIndicatorComponent, VCLBusyIndicatorModule, Notifier, NotifierService, NotifierType, NotifierPosition, NotifierComponent, VCLNotifierModule, TooltipComponent, AnimationState, Placement, VCLTooltipModule, VCLTableModule, PasswordInputComponent, PasswordInputDirective, VCLPasswordInputModule, VCLZoomBoxModule, VCLNotificationModule, notificationTypeFromString, notificationIconFromType, notificationStyleClassFromType, NotificationType, FlexAlign, TextAlign, IconType, GALLERY_ANIMATIONS, VCLGalleryModule, VCLBadgeModule, VCLEmbeddedInputGroupModule, Autocomplete, AutocompleteOption, AutocompleteContent, InputAutocompleteDirective, TokenInputAutocompleteDirective, VCLAutocompleteModule, TourService, TourOptions, TourComponent, VCLTourModule, VCLRatingModule };
