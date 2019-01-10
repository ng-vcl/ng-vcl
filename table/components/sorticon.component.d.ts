import { ElementRef, Renderer2 } from '@angular/core';
export declare type SortOptions = -1 | 0 | 1;
export declare class SortIconComponent {
    private e;
    private renderer;
    sort: SortOptions;
    private rootElement;
    constructor(e: ElementRef, renderer: Renderer2);
    ChangeSortOrder(order: SortOptions): void;
}
