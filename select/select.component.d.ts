import { ElementRef, QueryList, EventEmitter, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MetalistItem } from '../metalist/index';
import { DropdownComponent } from '../dropdown/index';
import { SelectOption } from './select-option.component';
export declare enum DropDirection {
    Top = 0,
    Bottom = 1,
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class SelectComponent implements ControlValueAccessor, AfterViewInit {
    private elementRef;
    private cdRef;
    private static readonly Tag;
    debug: boolean;
    dropdown: DropdownComponent;
    items: QueryList<SelectOption>;
    select: ElementRef;
    mode: 'multiple' | 'single';
    placeholder: string;
    tabindex: number;
    expanded: boolean;
    zIndex: number;
    disabled: boolean;
    listenKeys: boolean;
    maxSelectableItems?: number;
    expandedIcon: string;
    collapsedIcon: string;
    change: EventEmitter<any>;
    focused: boolean;
    dropDirection: DropDirection;
    value: any | any[];
    constructor(elementRef: ElementRef, cdRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    keydown(ev: any): void;
    reFocus(): void;
    onFocus(event?: any): Promise<void>;
    onBlur(event?: any): void;
    toggle(): void;
    close(): void;
    dropdownTop: number;
    displayValue?: string;
    selectedItems: {
        metaItem: MetalistItem;
        label: string;
    }[];
    readonly showDisplayValue: boolean;
    open(): Promise<void>;
    syncDisplayValue(): void;
    deselectItem(item: MetalistItem): void;
    onItemsChange(): void;
    onDropdownChange(value: any): void;
    /**
     * Things needed for ControlValueAccessor-Interface.
     */
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
