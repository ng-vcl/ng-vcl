import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JssFormSchemaOptions, JssFormSchema } from './types';
export declare class FormObject {
    schema: JssFormSchema;
    key: string;
    parentKey: string | undefined;
    id: string;
    disableOverride: boolean;
    formType: string | undefined;
    formObjects: FormObject[] | FormObject[][] | undefined;
    options: JssFormSchemaOptions[];
    buttons: FormObject[];
    constructor(schema: JssFormSchema, key: string, parentKey?: string | undefined);
    readonly name: string;
    readonly placeholder: string;
    readonly label: string;
    readonly singularLabel: string;
    readonly required: boolean;
    readonly disabled: boolean;
    readonly hideLabel: boolean;
}
export declare function createFormObjects(schema: any, parent?: FormObject): FormObject[] | FormObject[][] | undefined;
export declare class JssFormObjectComponent {
    form: FormGroup;
    fo: FormObject;
    formComponent?: any;
    action: EventEmitter<any>;
    onAction(event: any): void;
    addItem(): void;
    removeItem(i: number): void;
    readonly hasError: boolean | null;
    readonly errorLabel: any;
}
