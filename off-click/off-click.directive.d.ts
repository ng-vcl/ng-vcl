import { EventEmitter, ElementRef } from '@angular/core';
export declare class OffClickDirective {
    private elem;
    offClickDelay: number;
    offClickListen: boolean;
    offClickExcludes?: (ElementRef | Element)[];
    offClick: EventEmitter<{}>;
    private subs;
    private hoveredElement?;
    constructor(elem: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
