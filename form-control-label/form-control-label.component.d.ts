import { ElementRef } from '@angular/core';
export declare class FormControlLabelComponent {
    content: ElementRef;
    disabled: boolean;
    requiredIndicatorCharacter: string;
    label: string | undefined;
    subLabel: string | undefined;
    for: string | undefined;
    wrapping?: boolean;
    readonly vclFormControlLabelWrapping: boolean;
    required: boolean;
    requiredIndLabel: string;
}
