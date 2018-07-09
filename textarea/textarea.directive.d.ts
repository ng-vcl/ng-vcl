import { ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class TextareaDirective implements AfterViewInit, OnChanges {
    private elRef;
    constructor(elRef: ElementRef);
    selectAllOnFocus: boolean;
    autogrow: boolean;
    maxRows: number | undefined;
    minRows: number | undefined;
    rows: number;
    onChange(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    onFocus(value: any): void;
    setRows(value: any): void;
}
