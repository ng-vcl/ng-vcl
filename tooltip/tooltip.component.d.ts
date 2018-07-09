import { ElementRef, AfterViewInit, Renderer, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ICoordinate } from './ICoordinate';
import { TooltipService } from './tooltip.service';
export declare enum AnimationState {
    Shown = "shown",
    Hidden = "hidden",
    None = "none",
}
export declare enum Placement {
    Top = "top",
    Bottom = "bottom",
    Left = "left",
    Right = "right",
}
export declare class TooltipComponent implements AfterViewInit, OnDestroy, OnChanges {
    private element;
    private document;
    private renderer;
    private tooltipService;
    private static readonly Tag;
    debug: boolean;
    content: string;
    placement: Placement;
    hostElement: HTMLElement;
    animationState: AnimationState;
    _animationState: AnimationState;
    showArrowPointer: boolean;
    tooltipPlacement: ICoordinate;
    showOnInit: boolean;
    constructor(element: ElementRef, document: any, renderer: Renderer, tooltipService: TooltipService);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    showTooltip(): Function;
    readonly tooltipPosition: string;
    ngOnDestroy(): void;
}
