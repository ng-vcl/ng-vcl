import { OnDestroy, QueryList, EventEmitter, SimpleChanges, ChangeDetectorRef, OnChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RadioButtonComponent } from './radio-button.component';
export declare enum SelectionMode {
    Single = 0,
    Multiple = 1,
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class RadioGroupComponent implements OnDestroy, OnChanges, ControlValueAccessor {
    private cdRef;
    changesSub: Subscription | undefined;
    checkedSub: Subscription | undefined;
    blurSub: Subscription | undefined;
    value: any;
    layout: 'horizontal' | 'vertical';
    change: EventEmitter<any>;
    radioButtons?: QueryList<RadioButtonComponent> | undefined;
    readonly vclInputInlineControlGroup: boolean;
    constructor(cdRef: ChangeDetectorRef);
    private syncRadioButtons();
    private triggerChange();
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    dispose(): void;
    /**
    * things needed for ControlValueAccessor-Interface
    */
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
