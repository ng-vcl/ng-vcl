import { ElementRef } from '@angular/core';
export declare class InputDirective {
    disabled: boolean;
    readonly isDisabled: boolean;
    readonly attrDisabled: boolean | null;
}
export declare class InputAutoSelectDirective {
    private elRef;
    constructor(elRef: ElementRef);
    onFocus(): void;
}
