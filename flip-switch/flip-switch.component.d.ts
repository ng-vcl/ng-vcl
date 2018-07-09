import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class FlipSwitchComponent implements ControlValueAccessor {
    private cdRef;
    tabindex: number;
    onLabel: string;
    offLabel: string;
    value: boolean;
    disabled: boolean;
    valueChange: EventEmitter<boolean>;
    constructor(cdRef: ChangeDetectorRef);
    onTap(): void;
    keydown(ev: any): void;
    toggle(): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
