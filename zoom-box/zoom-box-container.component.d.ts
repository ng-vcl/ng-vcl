import { ElementRef, AfterContentInit, Renderer2 } from '@angular/core';
export declare class ZoomBoxContainerComponent implements AfterContentInit {
    private element;
    x: number;
    y: number;
    width: number;
    height: number;
    resetOnOut: boolean;
    hidden: boolean;
    hiding: boolean;
    invisible: boolean;
    private startX;
    private startY;
    private imgContent;
    private magnifier;
    constructor(element: ElementRef, renderer: Renderer2);
    ngAfterContentInit(): void;
    onMove(event: MouseEvent): void;
    onOver(): void;
    onOut(): void;
    readonly image: any;
}
