import { ElementRef, Renderer2, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class SpanDirective implements AfterContentInit, OnChanges {
    private renderer;
    private el;
    width: number;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
}
