import { ElementRef, Renderer2 } from '@angular/core';
import { ZoomBoxContainerComponent } from './zoom-box-container.component';
export declare class ZoomBoxMagnifierComponent {
    private element;
    private renderer;
    parent: ZoomBoxContainerComponent;
    constructor(element: ElementRef, renderer: Renderer2);
    update(): void;
}
