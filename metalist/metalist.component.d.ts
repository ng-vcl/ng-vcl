import { ChangeDetectorRef, EventEmitter, QueryList, AfterContentInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
export declare class MetalistItem implements MetalistItem {
    private metalist;
    constructor(metalist: any);
    value: any;
    metadata: any;
    disabled: boolean;
    readonly marked: boolean;
    readonly selected: boolean;
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class MetalistComponent implements ControlValueAccessor, AfterContentInit, OnDestroy {
    private cdRef;
    mode: 'multiple' | 'single';
    maxSelectableItems?: number;
    change: EventEmitter<any>;
    itemsChange: EventEmitter<any>;
    items?: QueryList<MetalistItem>;
    value: any | any[];
    markedItem?: MetalistItem;
    itemsSub?: Subscription;
    constructor(cdRef: ChangeDetectorRef);
    readonly itemsArray: MetalistItem[];
    isMarked(item: MetalistItem): boolean;
    isSelected(item: MetalistItem): boolean;
    readonly selectedItem: MetalistItem | undefined;
    readonly selectedItems: MetalistItem[];
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private triggerChange();
    select(item?: MetalistItem | number): void;
    deselect(item: MetalistItem | number): void;
    private determineMarkedIndex();
    mark(item: MetalistItem | number): void;
    markNext(): void;
    markPrev(): void;
    selectMarked(): void;
    setValue(value: any): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
