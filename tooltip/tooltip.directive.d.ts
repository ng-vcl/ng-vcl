import { OnDestroy, ElementRef, ComponentFactoryResolver, ViewContainerRef, ComponentRef, OnChanges, SimpleChanges } from '@angular/core';
import { TooltipComponent, Placement } from './tooltip.component';
export declare class TooltipDirective implements OnDestroy, OnChanges {
    private element;
    private resolver;
    private viewContainerRef;
    private document;
    content: string;
    position: Placement;
    tooltip: ComponentRef<TooltipComponent>;
    constructor(element: ElementRef, resolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, document: any);
    ngOnChanges(changes: SimpleChanges): void;
    onMouseEnter(): void;
    ngOnDestroy(): void;
}
