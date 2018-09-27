import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class RatingComponent implements ControlValueAccessor {
    private cdRef;
    tabindex: number;
    type: 'horizontal' | 'vertical' | 'small';
    fullStar: string;
    halfStar: string;
    emptyStar: string;
    starCount: number;
    halves: boolean;
    value: number;
    readonly: boolean;
    iconSize?: string;
    textSize?: string;
    showText: boolean;
    disabled: boolean;
    valueChange: EventEmitter<number>;
    constructor(cdRef: ChangeDetectorRef);
    clickStar(star: any): void;
    isHalfStar(star: number): boolean;
    round(x: number): number;
    getIcon(stars: number, small?: boolean): string[];
    readonly starArray: number[];
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: number): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
