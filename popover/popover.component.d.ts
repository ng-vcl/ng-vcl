import { ChangeDetectorRef, ElementRef, EventEmitter, InjectionToken, SimpleChanges, AfterViewInit } from '@angular/core';
import { AnimationBuilder, AnimationFactory, AnimationMetadata } from '@angular/animations';
import { ObservableComponent } from '../core/index';
export declare type AttachmentX = 'left' | 'center' | 'right';
export declare const AttachmentX: {
    Left: AttachmentX;
    Center: AttachmentX;
    Right: AttachmentX;
};
export declare type AttachmentY = 'top' | 'center' | 'bottom';
export declare const AttachmentY: {
    Top: AttachmentY;
    Center: AttachmentY;
    Bottom: AttachmentY;
};
export declare enum PopoverState {
    visible = 0,
    hidden = 1,
    opening = 2,
    closing = 3,
}
export declare const POPOVER_ANIMATIONS: InjectionToken<{}>;
export interface PopoverAnimationConfig {
    enter?: AnimationMetadata | AnimationMetadata[];
    leave?: AnimationMetadata | AnimationMetadata[];
}
export declare class PopoverComponent extends ObservableComponent implements AfterViewInit {
    protected readonly me: ElementRef;
    private builder;
    private cdRef;
    private animations;
    private static readonly Tag;
    private tag;
    enableStyling: boolean;
    debug: boolean;
    target: string | ElementRef | Element;
    targetElement: Element;
    targetX: AttachmentX;
    targetY: AttachmentY;
    attachmentX: AttachmentX;
    offsetAttachmentX: number;
    attachmentY: AttachmentY;
    offsetAttachmentY: number;
    visible: boolean;
    willClose: EventEmitter<any>;
    willOpen: EventEmitter<any>;
    state: PopoverState;
    readonly classHidden: boolean;
    readonly styleVisibility: string;
    private translateX;
    private translateY;
    readonly transform: string;
    enterAnimationFactory: AnimationFactory | undefined;
    leaveAnimationFactory: AnimationFactory | undefined;
    constructor(me: ElementRef, builder: AnimationBuilder, cdRef: ChangeDetectorRef, animations: PopoverAnimationConfig);
    private onChange(changes?);
    private setTarget(value?);
    getTargetElement(value: Element | ElementRef | string): Element | undefined;
    private setTag();
    reposition(): void;
    private ngOnInit();
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    open(): void;
    close(): void;
    toggle(): void;
    onWindowResize(ev: any): void;
    private getAttachmentPosition();
}
