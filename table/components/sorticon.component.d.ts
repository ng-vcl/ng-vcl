import { ElementRef, Renderer2 } from '@angular/core';
export declare class SortIconComponent {
    private e;
    private renderer;
    sort: -1 | 0 | 1;
    private rootElement;
    constructor(e: ElementRef, renderer: Renderer2);
    ChangeSortOrder(order: -1 | 0 | 1): void;
}
