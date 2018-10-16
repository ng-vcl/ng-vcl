var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ComponentFactoryResolver, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { determineType } from './utils';
var uniqueID = 0;
var FormObject = /** @class */ (function () {
    function FormObject(schema, key, parentKey) {
        this.schema = schema;
        this.key = key;
        this.parentKey = parentKey;
        this.disableOverride = false;
        this.options = [];
        this.buttons = [];
        this.formObjects = createFormObjects(schema, this);
        this.formType = determineType(schema);
        if (this.formType === 'select' || this.formType === 'dropdown' || this.formType === 'radio') {
            var options = void 0;
            if (!schema.options && schema.enum) {
                options = schema.enum.map(function (s) { return ({ label: s === null ? '-' : s, value: s }); });
            }
            else if (schema.options) {
                options = schema.options.map(function (option) { return ({
                    value: option.value,
                    label: option.label ? option.label : String(option.value),
                    sublabel: option.sublabel
                }); });
            }
            else {
                options = [];
            }
            this.options = options;
        }
        else if (this.formType === 'buttons') {
            this.buttons = (schema.buttons || []).map(function (btnSchema) { return new FormObject(btnSchema, key); });
        }
        this.id = "vcl-jss-form-" + key + "-" + ++uniqueID;
    }
    Object.defineProperty(FormObject.prototype, "name", {
        get: function () {
            return this.parentKey ? this.parentKey + '.' + this.key : this.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormObject.prototype, "placeholder", {
        get: function () {
            return typeof this.schema.placeholder !== 'undefined' ? this.schema.placeholder : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormObject.prototype, "label", {
        get: function () {
            return this.schema.label || this.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormObject.prototype, "singularLabel", {
        get: function () {
            return this.schema.singularLabel || this.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormObject.prototype, "required", {
        get: function () {
            if (this.formType === 'text') {
                return typeof this.schema.minLength === 'number' && this.schema.minLength > 0;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormObject.prototype, "disabled", {
        get: function () {
            return !!this.schema.disabled || this.disableOverride;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormObject.prototype, "hideLabel", {
        get: function () {
            return !!this.schema.hideLabel;
        },
        enumerable: true,
        configurable: true
    });
    return FormObject;
}());
export { FormObject };
export function createFormObjects(schema, parent) {
    if (schema.properties) {
        return Object.keys(schema.properties).map(function (key) {
            return new FormObject(schema.properties[key], key, parent ? parent.key : undefined);
        });
    }
    else if (schema.items) {
        var amount = schema.count || 1;
        var result = [];
        for (var i = 0; i < amount; i++) {
            result.push(Object.keys(schema.items.properties).map(function (key) {
                return new FormObject(schema.items.properties[key], key, parent ? parent.key : undefined);
            }));
        }
        return result;
    }
    else {
        return undefined;
    }
}
var JssFormObjectComponent = /** @class */ (function () {
    function JssFormObjectComponent(factoryResolver) {
        this.factoryResolver = factoryResolver;
        this.action = new EventEmitter();
    }
    JssFormObjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isCustom) {
            this.dynamicViewContainerRef.clear();
            var factory = this.factoryResolver.resolveComponentFactory(this.fo.schema.customComponent);
            var component_1 = this.dynamicViewContainerRef.createComponent(factory);
            if (!this.validCustom(component_1.instance)) {
                console.error(component_1.instance.constructor.name, 'is not an instance of ControlValueAccessor');
                this.dynamicViewContainerRef.clear();
            }
            else {
                if (this.fo.schema.customParameters) {
                    for (var key in this.fo.schema.customParameters) {
                        component_1.instance[key] = this.fo.schema.customParameters[key];
                    }
                }
                component_1.instance.registerOnChange(function (newValue) {
                    _this.form.controls[_this.fo.key]['_pendingValue'] = newValue;
                    _this.form.controls[_this.fo.key]['_pendingChange'] = true;
                    _this.form.controls[_this.fo.key]['_pendingDirty'] = true;
                    _this.form.controls[_this.fo.key].setValue(newValue, { emitModelToViewChange: false });
                    _this.form.controls[_this.fo.key]['_pendingChange'] = false;
                });
                this.form.controls[this.fo.key]['registerOnChange'](function (newValue, emitModelEvent) {
                    component_1.instance.writeValue(newValue);
                });
            }
        }
    };
    JssFormObjectComponent.prototype.onAction = function (event) {
        this.action.emit(event);
    };
    JssFormObjectComponent.prototype.addItem = function () {
        var newFormGroup = this.formComponent.createFormGroup(this.fo.schema.items);
        var parentArray = this.form.get(this.fo.key);
        parentArray.setControl(parentArray.controls.length, newFormGroup);
        this.fo.formObjects.push(createFormObjects(this.fo.schema, this.fo)[0]);
    };
    JssFormObjectComponent.prototype.removeItem = function (i) {
        var parentArray = this.form.get(this.fo.key);
        parentArray.removeAt(i);
        this.fo.formObjects.splice(i, 1);
    };
    Object.defineProperty(JssFormObjectComponent.prototype, "hasError", {
        get: function () {
            var ctrl = this.form.get(this.fo.key);
            return (ctrl && ctrl.invalid && ctrl.errors && (ctrl.touched || ctrl.dirty));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JssFormObjectComponent.prototype, "errorLabel", {
        get: function () {
            var ctrl = this.form.get(this.fo.key);
            if (ctrl && ctrl.invalid && ctrl.touched && ctrl.errors) {
                var key = Object.keys(ctrl.errors)[0];
                if (key) {
                    return ctrl.errors[key];
                }
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JssFormObjectComponent.prototype, "isCustom", {
        get: function () {
            return !!this.fo.schema.customComponent;
        },
        enumerable: true,
        configurable: true
    });
    JssFormObjectComponent.prototype.validCustom = function (instance) {
        if (!('writeValue' in instance)
            || !('registerOnChange' in instance)
            || !('registerOnTouched' in instance)
            || !('setDisabledState' in instance)) {
            return false;
        }
        return true;
    };
    __decorate([
        ViewChild('dynamic', { read: ViewContainerRef }),
        __metadata("design:type", ViewContainerRef)
    ], JssFormObjectComponent.prototype, "dynamicViewContainerRef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", FormGroup)
    ], JssFormObjectComponent.prototype, "form", void 0);
    __decorate([
        Input(),
        __metadata("design:type", FormObject)
    ], JssFormObjectComponent.prototype, "fo", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], JssFormObjectComponent.prototype, "formComponent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], JssFormObjectComponent.prototype, "action", void 0);
    JssFormObjectComponent = __decorate([
        Component({
            selector: 'vcl-jss-form-object',
            template: "<div [formGroup]=\"form\">\n\n  <label vcl-form-control-label *ngIf=\"isCustom && !fo.hideLabel\" [label]=\"fo.label\" [required]=\"fo.required\" [for]=\"fo.id\"></label>\n  <ng-template #dynamic></ng-template>\n\n  <ng-container *ngIf=\"!isCustom\">\n    <ng-container *ngIf=\"!fo.formObjects;else nested\">\n\n      <ng-container [ngSwitch]=\"fo.formType\">\n\n        <ng-container  *ngSwitchCase=\"'text'\">\n          <label vcl-form-control-label *ngIf=\"!fo.hideLabel\" [label]=\"fo.label\" [required]=\"fo.required\" [for]=\"fo.id\"></label>\n          <vcl-input-control-group [type]=\"'error'\" [label]=\"errorLabel\">\n            <input vcl-input\n                   [id]=\"fo.id\"\n                   type=\"text\"\n                   [class.vclError]=\"hasError\"\n                   [placeholder]=\"fo.placeholder\"\n                   [formControlName]=\"fo.key\"\n                   [disabled]=\"fo.disabled\"/>\n          </vcl-input-control-group>\n        </ng-container>\n\n        <ng-container  *ngSwitchCase=\"'textarea'\">\n          <label vcl-form-control-label *ngIf=\"!fo.hideLabel\" [label]=\"fo.label\" [required]=\"fo.required\" [for]=\"fo.id\"></label>\n          <vcl-input-control-group [type]=\"'error'\" [label]=\"errorLabel\">\n            <textarea vcl-textarea\n                      [id]=\"fo.id\"\n                      [formControlName]=\"fo.key\"\n                      [autogrow]=\"true\"\n                      [minRows]=\"5\"\n                      [maxRows]=\"10\"\n                      [readonly]=\"fo.disabled\"></textarea>\n          </vcl-input-control-group>\n        </ng-container>\n\n        <ng-container  *ngSwitchCase=\"'password'\">\n          <label vcl-form-control-label *ngIf=\"!fo.hideLabel\" [label]=\"fo.label\" [required]=\"fo.required\" [for]=\"fo.id\"></label>\n\n          <vcl-input-control-group [type]=\"'error'\" [label]=\"errorLabel\">\n            <vcl-password-input\n              [visibleIcon]=\"fo.schema.visibleIcon || ' fa fa-eye '\"\n              [invisibleIcon]=\"fo.schema.invisibleIcon || ' fa fa-eye-slash '\"\n            >\n              <input vcl-input\n                     vcl-password-input\n                     [id]=\"fo.id\"\n                     [class.vclError]=\"hasError\"\n                     [placeholder]=\"fo.placeholder\"\n                     [formControlName]=\"fo.key\"\n                     [disabled]=\"fo.disabled\"/>\n            </vcl-password-input>\n          </vcl-input-control-group>\n        </ng-container>\n\n        <ng-container  *ngSwitchCase=\"'hidden'\">\n            <input\n                   [id]=\"fo.id\"\n                   type=\"hidden\"\n                   [formControlName]=\"fo.key\" />\n\n        </ng-container>\n\n        <ng-container  *ngSwitchCase=\"'number'\">\n          <label vcl-form-control-label *ngIf=\"!fo.hideLabel\" [label]=\"fo.label\" [for]=\"fo.id\"></label>\n          <vcl-input-control-group [type]=\"'error'\" [label]=\"errorLabel\">\n            <input vcl-input\n                   [id]=\"fo.id\"\n                   type=\"number\"\n                   valueType=\"number\"\n                   placeholder=\"number\"\n                   [class.vclError]=\"hasError\"\n                   [name]=\"fo.key\"\n                   [formControlName]=\"fo.key\"\n                   [disabled]=\"fo.disabled\"/>\n          </vcl-input-control-group>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'select'\">\n          <label vcl-form-control-label *ngIf=\"!fo.hideLabel\" [label]=\"fo.label\" [for]=\"fo.id\"></label>\n          <vcl-input-control-group [type]=\"'error'\" [label]=\"errorLabel\">\n            <vcl-select [id]=\"fo.id\"\n                        [formControlName]=\"fo.key\"\n                        [class.vclError]=\"hasError\"\n                        [mode]=\"fo.schema.type==='array' ? 'multiple' : 'single'\"\n                        [disabled]=\"fo.disabled\">\n              <vcl-select-option *ngFor=\"let option of fo.options\" [value]=\"option.value\" [label]=\"option.label\" [sublabel]=\"option.sublabel\"></vcl-select-option>\n            </vcl-select>\n          </vcl-input-control-group>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'dropdown'\">\n          <label vcl-form-control-label *ngIf=\"!fo.hideLabel\" [label]=\"fo.label\" [for]=\"fo.id\"></label>\n          <vcl-input-control-group [type]=\"'error'\" [label]=\"errorLabel\">\n            <vcl-dropdown [id]=\"fo.id\"\n                          [formControlName]=\"fo.key\"\n                          [class.vclError]=\"hasError\"\n                          [mode]=\"fo.schema.type==='array' ? 'multiple' : 'single'\"\n                          [disabled]=\"fo.disabled\">\n              <vcl-dropdown-option *ngFor=\"let option of fo.options\" [value]=\"option.value\" [label]=\"option.label\" [sublabel]=\"option.sublabel\"></vcl-dropdown-option>\n            </vcl-dropdown>\n          </vcl-input-control-group>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'switch'\">\n          <label vcl-form-control-label *ngIf=\"!fo.hideLabel\" [label]=\"fo.label\" [for]=\"fo.id\"></label>\n          <vcl-flip-switch [id]=\"fo.id\"\n                           onLabel=\"{{'Yes' }}\"\n                           offLabel=\"{{'No'}}\"\n                           [formControlName]=\"fo.key\"\n                           [disabled]=\"fo.disabled\">\n          </vcl-flip-switch>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'slider'\">\n          <label vcl-form-control-label *ngIf=\"!fo.hideLabel\" [label]=\"fo.label\" [for]=\"fo.id\"></label>\n          <vcl-slider [id]=\"fo.id\"\n                      [class.vclError]=\"hasError\"\n                      [min]=\"fo.schema.mininum\"\n                      [max]=\"fo.schema.maximum\"\n                      [scale]=\"fo.schema.scale\"\n                      [formControlName]=\"fo.key\"\n                      [disabled]=\"fo.disabled\">\n          </vcl-slider>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'checkbox'\">\n          <vcl-checkbox [id]=\"fo.id\" [formControlName]=\"fo.key\" [label]=\"fo.label\" [disabled]=\"fo.disabled\" [hideLabel]=\"fo.hideLabel\"></vcl-checkbox>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'radio'\">\n          <label vcl-form-control-label *ngIf=\"!fo.hideLabel\" [label]=\"fo.label\" [for]=\"fo.id\"></label>\n          <vcl-input-control-group [type]=\"'error'\" [label]=\"errorLabel\" inline=true>\n            <vcl-radio-group [id]=\"fo.id\" [formControlName]=\"fo.key\"\n                              [class.vclError]=\"hasError\">\n              <vcl-radio-button *ngFor=\"let option of fo.options\"\n                                [label]=\"option.label\"\n                                [value]=\"option.value\"\n                                [disabled]=\"fo.disabled\"></vcl-radio-button>\n            </vcl-radio-group>\n          </vcl-input-control-group>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'submit'\">\n          <button vcl-button\n                  type=\"submit\"\n                  [disabled]=\"(fo.schema.autoDisable && !form.valid) || fo.disabled\"\n                  [prepIcon]=\"fo.schema.prepIcon\"\n                  [appIcon]=\"fo.schema.appIcon\"\n                  [ngClass]=\"fo.schema.class\"\n                  [label]=\"fo.schema.label\">\n          </button>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'button'\">\n          <button vcl-button\n                  type=\"button\"\n                  [prepIcon]=\"fo.schema.prepIcon\"\n                  [appIcon]=\"fo.schema.appIcon\"\n                  [ngClass]=\"fo.schema.class\"\n                  [label]=\"fo.schema.label\"\n                  (click)=\"onAction(fo.schema.action || fo.schema)\"\n                  [disabled]=\"fo.disabled\"></button>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'buttons'\">\n          <div class=\"vclLooseButtonGroup\">\n            <ng-container *ngFor=\"let btnFo of fo.buttons\">\n              <ng-container *ngIf=\"btnFo.formType === 'submit'\">\n                <button vcl-button\n                        type=\"submit\"\n                        [disabled]=\"(btnFo.schema.autoDisable && !form.valid) || fo.disabled\"\n                        [prepIcon]=\"btnFo.schema.prepIcon\"\n                        [appIcon]=\"btnFo.schema.appIcon\"\n                        [ngClass]=\"btnFo.schema.class\"\n                        [label]=\"btnFo.schema.label\">\n                </button>\n              </ng-container>\n\n              <ng-container *ngIf=\"btnFo.formType === 'button'\">\n                <button vcl-button\n                        type=\"button\"\n                        [prepIcon]=\"btnFo.schema.prepIcon\"\n                        [appIcon]=\"btnFo.schema.appIcon\"\n                        [ngClass]=\"btnFo.schema.class\"\n                        [label]=\"btnFo.schema.label\"\n                        (click)=\"onAction(btnFo.schema.action || button)\"\n                        [disabled]=\"fo.disabled\"></button>\n              </ng-container>\n            </ng-container>\n          </div>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'token'\">\n          <label vcl-form-control-label *ngIf=\"!fo.hideLabel\" [label]=\"fo.label\" [required]=\"fo.required\" [for]=\"fo.id\"></label>\n          <vcl-token-input-container [disabled]=\"fo.disabled\" [controlAsString]=\"true\" [formControlName]=\"fo.key\">\n            <input vcl-input vcl-token-input />\n          </vcl-token-input-container>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'date'\">\n          <label vcl-form-control-label *ngIf=\"!fo.hideLabel\" [label]=\"fo.label\" [required]=\"fo.required\" [for]=\"fo.id\"></label>\n          <vcl-date-picker [id]=\"fo.id\"\n                           [formControlName]=\"fo.key\"\n                           [config]=\"fo.schema.datePickerConfig\">\n          </vcl-date-picker>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'custom'\">\n          <label vcl-form-control-label *ngIf=\"!fo.hideLabel\" [label]=\"fo.label\" [required]=\"fo.required\" [for]=\"fo.id\"></label>\n          <vcl-date-picker [id]=\"fo.id\"\n                           [formControlName]=\"fo.key\"\n                           [config]=\"fo.schema.datePickerConfig\">\n          </vcl-date-picker>\n        </ng-container>\n      </ng-container>\n\n      <ng-container *ngIf=\"fo.schema && fo.schema.hint\">\n        <div class=\"vclFormControlHint\">\n          {{ fo.schema.hint }}\n        </div>\n      </ng-container>\n    </ng-container>\n\n    <ng-template #nested>\n      <ng-container [ngSwitch]=\"fo.formType\">\n        <ng-container *ngSwitchDefault>\n          <fieldset class=\"vclFieldset\" [ngStyle]=\"{'margin-top': '20px', 'margin-bottom': '20px', 'padding-top': fo.schema.hint ? '0.3em' : undefined}\">\n            <legend>{{fo.label}}</legend>\n            <ng-container *ngIf=\"fo.schema.hint\">\n              <div class=\"vclFormControlHint\">{{ fo.schema.hint }}</div>\n            </ng-container>\n            <ng-container *ngFor=\"let subFo of fo.formObjects\">\n              <vcl-jss-form-object [fo]=\"subFo\" [form]=\"form.get(fo.key)\"></vcl-jss-form-object>\n            </ng-container>\n          </fieldset>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'array'\">\n          <fieldset class=\"vclFieldset\"\n                    [formArrayName]=\"fo.key\"\n                    [ngStyle]=\"{'margin-top': '20px', 'margin-bottom': '20px', 'padding-top': fo.schema.hint ? '0.3em' : undefined}\">\n            <legend>{{fo.label}} <vcl-icon icon=\"fa fa-plus\" (tap)=\"addItem()\" style=\"color: green\"></vcl-icon></legend>\n            <ng-container *ngIf=\"fo.schema.hint\">\n              <div class=\"vclFormControlHint\">{{ fo.schema.hint }}</div>\n            </ng-container>\n            <ng-container *ngFor=\"let subArray of fo.formObjects; let i = index\" [attr.data-index]=\"i\">\n              <ng-container [formGroupName]=\"i\">\n                <fieldset>\n                  <legend>{{fo.singularLabel}} <vcl-icon icon=\"fa fa-times\" (tap)=\"removeItem(i)\" style=\"color: red\"></vcl-icon></legend>\n                  <ng-container *ngFor=\"let subFo of subArray\">\n                    <vcl-jss-form-object [fo]=\"subFo\" [form]=\"form.get(fo.key).controls[i]\" [formComponent]=\"formComponent\"></vcl-jss-form-object>\n                  </ng-container>\n                </fieldset>\n              </ng-container>\n            </ng-container>\n          </fieldset>\n        </ng-container>\n      </ng-container>\n    </ng-template>\n  </ng-container>\n\n</div>\n"
        }),
        __metadata("design:paramtypes", [ComponentFactoryResolver])
    ], JssFormObjectComponent);
    return JssFormObjectComponent;
}());
export { JssFormObjectComponent };
