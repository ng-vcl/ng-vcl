import { EventEmitter, ChangeDetectorRef } from '@angular/core';
export interface Token {
    label: string;
    selected?: boolean;
    removable?: boolean;
    value?: any;
}
export declare class TokenComponent implements Token {
    private cdRef;
    label: string;
    value: string;
    disabled: boolean;
    onTap(e: Event): void;
    selected: boolean;
    removable: boolean;
    icon: string;
    remove: EventEmitter<{}>;
    select: EventEmitter<{}>;
    constructor(cdRef: ChangeDetectorRef);
    onRemoveClick(event: any): void;
    private cvaDisabled;
    setDisabledState(isDisabled: boolean): void;
    readonly isDisabled: boolean;
}
