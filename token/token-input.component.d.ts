import { EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { InputDirective } from '../input/index';
import { Token } from './token.component';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TokenInputLabelPre {
}
export declare class TokenInputLabelPost {
}
export declare class TokenInputContainerComponent implements ControlValueAccessor {
    elementRef: ElementRef;
    private cdRef;
    tokens: Token[];
    selectable: boolean;
    allowDuplicates: boolean;
    preselect: boolean;
    removeIcon: string;
    tabindex: number;
    tokenClass: string | undefined;
    controlAsString: boolean;
    disabled: boolean;
    tokensChange: EventEmitter<Token[]>;
    confirm: EventEmitter<Token[]>;
    labelPre: TokenInputLabelPre;
    labelPost: TokenInputLabelPost;
    constructor(elementRef: ElementRef, cdRef: ChangeDetectorRef);
    removeLastToken(): void;
    addToken(label: string, value?: any, selected?: boolean): void;
    select(token: Token): void;
    removeToken(token: Token): void;
    triggerChange(): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onChange;
    private onTouched;
    writeValue(tokens: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
export declare class TokenInputDirective {
    private elementRef;
    private input;
    private tokenInputContainer;
    constructor(elementRef: ElementRef, input: InputDirective, tokenInputContainer: TokenInputContainerComponent);
    addTokenOnEnter: boolean;
    readonly isDisabled: boolean;
    readonly classDisabled: boolean;
    readonly attrDisabled: boolean | null;
    /**
     * remove last token on double-backspace
     */
    private lastKey;
    onKeydown(ev: any): void;
    onKeyPressEnter(ev: any): void;
}
