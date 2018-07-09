import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class CheckboxComponent implements ControlValueAccessor {
    private cdRef;
    tabindex: number;
    checkedIcon: string;
    uncheckedIcon: string;
    label?: string;
    disabled: boolean;
    iconPosition: 'left' | 'right';
    checked: boolean;
    hideLabel: boolean;
    /**
    Action fired when the `checked` state changes due to user interaction.
    */
    checkedChange: EventEmitter<boolean>;
    constructor(cdRef: ChangeDetectorRef);
    onKeyup(e: any): void;
    onTap(e: any): void;
    updateValue(): void;
    readonly icon: string;
    readonly isDisabled: boolean;
    onBlur(): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private cvaDisabled;
    setDisabledState(isDisabled: boolean): void;
}
