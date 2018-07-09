import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class RadioButtonComponent implements ControlValueAccessor {
    private cdRef;
    private uniqueID;
    id: string;
    checkedIcon: string;
    uncheckedIcon: string;
    disabled: boolean;
    value: any;
    inline: boolean;
    iconPosition: 'left' | 'right';
    label: string;
    tabindex: number;
    checked: boolean;
    checkedChange: EventEmitter<boolean>;
    focus: EventEmitter<boolean>;
    blur: EventEmitter<boolean>;
    focused: boolean;
    readonly isDisabled: boolean;
    readonly icon: string;
    constructor(cdRef: ChangeDetectorRef);
    onKeyup(e: KeyboardEvent): void;
    onTap(e: Event): void;
    triggerChangeAction(e: Event): void;
    setChecked(value: boolean): void;
    setInline(value: boolean): void;
    onFocus(): void;
    onBlur(): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onChange;
    private onTouched;
    writeValue(value: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private cvaDisabled;
    setDisabledState(isDisabled: boolean): void;
}
