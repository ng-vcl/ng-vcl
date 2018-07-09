import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { TemplateRef, ElementRef, QueryList, AfterContentInit, OnDestroy, EventEmitter } from '@angular/core';
import { PopoverComponent } from '../popover/index';
import { ObservableComponent } from '../core/index';
export declare class Autocomplete extends ObservableComponent implements AfterContentInit, OnDestroy {
    popover: PopoverComponent;
    items?: QueryList<AutocompleteOption>;
    content?: QueryList<AutocompleteContent>;
    disabled: boolean;
    select: EventEmitter<AutocompleteOption>;
    target$: BehaviorSubject<any>;
    items$: BehaviorSubject<AutocompleteOption[]>;
    content$: BehaviorSubject<AutocompleteContent[]>;
    itemsVisible$: Observable<boolean>;
    visible$: Observable<boolean>;
    popoverWidth$: Observable<string | undefined>;
    itemsSub?: Subscription;
    contentSub?: Subscription;
    highlightedItem: number;
    open(targetElement: ElementRef): Observable<AutocompleteOption>;
    readonly visible: boolean;
    close(): void;
    highlightPrev(): void;
    readonly isHighlighted: boolean;
    highlightNext(): void;
    selectHighlighted(): boolean;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
export declare class AutocompleteOption {
    type: 'item' | 'separator' | 'header';
    value?: any;
    label?: string;
    sublabel?: string;
    disabled?: boolean;
}
export declare class AutocompleteContent {
    templateRef: TemplateRef<any>;
}
