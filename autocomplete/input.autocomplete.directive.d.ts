import { Subscription } from 'rxjs';
import { ElementRef, OnDestroy, EventEmitter } from '@angular/core';
import { Autocomplete, AutocompleteOption } from './autocomplete.component';
import { ObservableComponent } from '../core/index';
export declare class InputAutocompleteDirective extends ObservableComponent implements OnDestroy {
    elementRef: ElementRef;
    constructor(elementRef: ElementRef);
    autocompleteSelect: EventEmitter<AutocompleteOption>;
    autocompleteAfterSelectAction: 'label' | 'sublabel' | 'value' | {
        (option: AutocompleteOption): string;
    } | 'clear';
    _ac?: Autocomplete;
    readonly ac: Autocomplete;
    acSub?: Subscription;
    disabled: boolean;
    readonly attrDisabled: boolean | null;
    onFocusOrInput(): void;
    onBlur(): void;
    renderAutocomplete(): void;
    destroyAutocomplete(): void;
    onKeyUp(event: any): false | undefined;
    handleKeyPressEvent(event: KeyboardEvent): Promise<void>;
    ngOnDestroy(): void;
}
