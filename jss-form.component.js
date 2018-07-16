var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Validator } from 'jsonschema';
import { createFormObjects } from './jss-form-object.component';
var VALIDATOR;
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return JssFormComponent; }),
    multi: true
};
var JssFormComponent = /** @class */ (function () {
    function JssFormComponent(fb) {
        this.fb = fb;
        this.ngSubmit = new EventEmitter();
        this.action = new EventEmitter();
        this._disable = false;
        /**
         * things needed for ControlValueAccessor-Interface
         */
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(JssFormComponent.prototype, "disable", {
        get: function () {
            return this._disable;
        },
        set: function (value) {
            this._disable = value;
            if (this.formObjects) {
                this.formObjects.forEach(function (fo) {
                    fo.disableOverride = value;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    JssFormComponent.prototype.onSubmit = function () {
        this.ngSubmit.emit(this.form && this.form.value);
    };
    JssFormComponent.prototype.onAction = function (event) {
        this.action.emit(event);
    };
    JssFormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.schema) {
            var schema = changes.schema.currentValue;
            this.formObjects = createFormObjects(schema);
            this.form = this.createFormGroup(schema);
            this.formValueChangeSub && this.formValueChangeSub.unsubscribe();
            this.formValueChangeSub = this.form.valueChanges.subscribe(function (value) {
                _this.onChange && _this.onChange(value);
            });
        }
    };
    /**
     * create the formGroup for the given schema
     */
    JssFormComponent.prototype.createFormGroup = function (schema) {
        var _this = this;
        var createGroup = function (schema) {
            var group = {};
            var props = schema.properties || schema.items || {};
            Object.keys(props).map(function (key) {
                var p = props[key];
                if (p) {
                    // objects
                    if (p.type === 'object') {
                        group[key] = createGroup(p);
                        // arrays
                    }
                    else if (p.formType === 'array' && p.type === 'array') {
                        var amount = p.count || 1;
                        var result = [];
                        for (var i = 0; i < amount; i++) {
                            result.push(createGroup(p.items));
                        }
                        group[key] = _this.fb.array(result);
                        // non-objects
                    }
                    else {
                        var state = '';
                        switch (p.type) {
                            case 'number':
                                state = 0;
                                break;
                            case 'array':
                                state = [];
                                break;
                            case 'boolean':
                                state = false;
                                break;
                            case undefined:
                                state = undefined;
                                break;
                        }
                        group[key] = new FormControl(state, _this.createJsonSchemaValidator(p, false));
                    }
                }
            });
            if (schema.formType === 'array' && schema.type === 'array') {
                return _this.fb.array([
                    _this.fb.group(group)
                ]);
            }
            return _this.fb.group(group, {
                validator: _this.createJsonSchemaValidator(schema, true)
            });
        };
        return createGroup(schema);
    };
    /**
     * validate if value matches schema
     * @return {?any[]} error-array or null if no errors
     */
    JssFormComponent.prototype.createJsonSchemaValidator = function (schema, prefix) {
        return function (c) {
            if (!VALIDATOR) {
                VALIDATOR = new Validator();
            }
            var result = VALIDATOR.validate(c.value, schema, {});
            if (result && !result.valid) {
                var error_1 = {};
                result.errors.forEach(function (err) {
                    var key = prefix ? err.property + '.' + err.name : err.name;
                    error_1[key] = err.message;
                });
                return error_1;
            }
            return null;
        };
    };
    JssFormComponent.prototype.writeValue = function (value) {
        if (this.form && value && typeof value === 'object') {
            this.form.patchValue(value);
        }
    };
    JssFormComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    JssFormComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], JssFormComponent.prototype, "schema", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], JssFormComponent.prototype, "ngSubmit", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], JssFormComponent.prototype, "action", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], JssFormComponent.prototype, "disable", null);
    JssFormComponent = __decorate([
        Component({
            selector: 'vcl-jss-form',
            template: "<form class=\"vclForm\" novalidate [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <ng-container *ngFor=\"let fo of formObjects\">\n    <vcl-jss-form-object [form]=\"form\" \n                         [fo]=\"fo\"\n                         (action)=\"onAction($event)\"\n                         [formComponent]=\"this\"\n                         >\n    </vcl-jss-form-object>\n  </ng-container>\n  <ng-content></ng-content>\n</form>\n",
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], JssFormComponent);
    return JssFormComponent;
}());
export { JssFormComponent };
