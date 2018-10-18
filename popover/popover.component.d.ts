import { ChangeDetectorRef, ElementRef, EventEmitter, InjectionToken, SimpleChanges, OnInit, AfterViewInit } from '@angular/core';
import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
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
export declare class PopoverComponent extends ObservableComponent implements OnInit, AfterViewInit {
    protected readonly ref: ElementRef;
    protected readonly builder: AnimationBuilder;
    protected readonly cd: ChangeDetectorRef;
    protected animations: PopoverAnimationConfig;
    private static readonly Tag;
    private tag;
    private state;
    private translateX;
    private translateY;
    private enterAnimationFactory;
    private leaveAnimationFactory;
    enableStyling: boolean;
    debug: boolean;
    target: string | ElementRef | Element;
    targetElement: Element;
    targetX: AttachmentX;
    attachmentX: AttachmentX;
    offsetAttachmentX: number;
    targetY: AttachmentY;
    attachmentY: AttachmentY;
    offsetAttachmentY: number;
    visible: boolean;
    willClose: EventEmitter<any>;
    willOpen: EventEmitter<any>;
    readonly classHidden: boolean;
    readonly styleVisibility: string;
    readonly transform: string;
    onWindowResize(event: Event): void;
    constructor(ref: ElementRef, builder: AnimationBuilder, cd: ChangeDetectorRef, animations: PopoverAnimationConfig);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private onChange(changes?);
    private setTarget(value?);
    private setTag();
    private getTargetElement(value);
    reposition(): void;
    private getAttachmentPosition();
    open(): void;
    close(): void;
    toggle(): void;
}
