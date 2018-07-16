import { FormGroup } from '@angular/forms';
/**
 * if no formType is given, this will guess the right one
 */
export function determineType(schema) {
    if (schema.formType) {
        return schema.formType;
    }
    else if (schema.type == 'string') {
        return (schema.enum) ? 'select' : 'text';
    }
    else if (schema.type == 'number' || schema.type === 'integer') {
        return 'number';
    }
    else if (schema.type == 'boolean') {
        return 'switch';
    }
    else if (schema.type == 'submit') {
        return 'submit';
    }
    else if (schema.type == 'button') {
        return 'button';
    }
    else if (schema.type == 'buttons') {
        return 'buttons';
    }
    return undefined;
}
export function markAsDeeplyTouched(control) {
    // Mark this control as touched
    control.markAsTouched();
    // Recursively mark any control children as touched
    if (control instanceof FormGroup) {
        Object.keys(control.controls).forEach(function (key) {
            var c2 = control.get(key);
            if (c2) {
                markAsDeeplyTouched(c2);
            }
        });
    }
}
