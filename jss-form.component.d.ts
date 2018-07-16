import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, ControlValueAccessor } from '@angular/forms';
import { FormObject } from './jss-form-object.component';
import { JssFormSchema } from './types';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class JssFormComponent implements OnChanges, ControlValueAccessor {
    private fb;
    schema: JssFormSchema | undefined;
    ngSubmit: EventEmitter<any>;
    action: EventEmitter<any>;
    private _disable;
    disable: boolean;
    form: FormGroup | undefined;
    formObjects: FormObject[] | undefined;
    private formValueChangeSub;
    constructor(fb: FormBuilder);
    onSubmit(): void;
    onAction(event: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * create the formGroup for the given schema
     */
    private createFormGroup(schema);
    /**
     * validate if value matches schema
     * @return {?any[]} error-array or null if no errors
     */
    private createJsonSchemaValidator(schema, prefix);
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
