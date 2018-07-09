import { Renderer2, ElementRef } from '@angular/core';
export declare class TableService {
    private renderer;
    private el;
    constructor(renderer: Renderer2, el: ElementRef);
    ClassToggle(className: string, add: boolean | '', targetEl: string): boolean;
    private addClass(className);
    private removeClass(className);
}
