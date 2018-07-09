import { Subscription } from 'rxjs';
import { ElementRef, OnDestroy, EventEmitter } from '@angular/core';
import { Autocomplete, AutocompleteOption } from './autocomplete.component';
import { ObservableComponent } from '../core/index';
import { TokenInputContainerComponent } from '../token/index';
export declare class TokenInputAutocompleteDirective extends ObservableComponent implements OnDestroy {
    private elementRef;
    private tokenInputContainer;
    constructor(elementRef: ElementRef, tokenInputContainer: TokenInputContainerComponent);
    autocompleteSelect: EventEmitter<AutocompleteOption>;
    disabled: boolean;
    readonly isDisabled: boolean;
    readonly classDisabled: boolean;
    readonly attrDisabled: boolean | null;
    _ac?: Autocomplete;
    readonly ac: Autocomplete;
    acSub?: Subscription;
    focused: boolean;
    listenActivate(): void;
    onBlur(): void;
    renderAutocomplete(): void;
    destroyAutocomplete(): void;
    onKeyPress(event: any): void;
    private lastKey;
    private wasEmpty;
    onKeyDown(event: any): void;
    onKeyUp(event: any): false | undefined;
    ngOnDestroy(): void;
}
