import { EventEmitter, ElementRef } from '@angular/core';
export declare class OffClickDirective {
    private elem;
    offClickDelay: number;
    offClickExcludes?: (ElementRef | Element)[];
    offClick: EventEmitter<{}>;
    private sub;
    constructor(elem: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
