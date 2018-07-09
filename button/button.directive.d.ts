import { ElementRef } from '@angular/core';
export declare class ButtonDirective {
    private elementRef;
    constructor(elementRef: ElementRef);
    disabled: boolean;
    readonly isDisabled: boolean | null;
    onMouseEnter(e: any): void;
    onMouseLeave(e: any): void;
    hovered: boolean;
    focus(): void;
}
