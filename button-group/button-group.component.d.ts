import { OnDestroy, QueryList, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ButtonDirective } from '../button/index';
export declare class GroupButtonDirective {
    private buttonGroupContainer;
    private host;
    constructor(buttonGroupContainer: any, host: ButtonDirective);
    readonly isDisabled: boolean | null;
    selected: boolean;
    select: EventEmitter<boolean>;
    onClick(): void;
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class ButtonGroupComponent implements OnDestroy, ControlValueAccessor {
    private cdRef;
    constructor(cdRef: ChangeDetectorRef);
    private pressSubscription;
    buttons?: QueryList<GroupButtonDirective>;
    disabled: boolean;
    mode: 'multiple' | 'single';
    selectionChange: EventEmitter<number | number[]>;
    selectedIndex: number | number[];
    private select(idx);
    private syncButtons();
    private triggerChange();
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
}
