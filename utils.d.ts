import { AbstractControl } from '@angular/forms';
import { JssFormSchema } from './types';
/**
 * if no formType is given, this will guess the right one
 */
export declare function determineType(schema: JssFormSchema): string | undefined;
export declare function markAsDeeplyTouched(control: AbstractControl): void;
