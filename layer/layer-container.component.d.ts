import { ChangeDetectorRef, ElementRef, InjectionToken, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { AnimationBuilder, AnimationFactory, AnimationMetadata } from '@angular/animations';
import { Subscription } from 'rxjs';
import { Wormhole } from '../wormhole/index';
import { LayerAttributes, LayerRef } from './layer-ref';
export declare const COMPONENT_LAYER_ANNOTATION_ID = "ng-vcl_component_layer";
export declare const LAYER_ANIMATIONS: InjectionToken<{}>;
export interface LayerAnimationConfig {
    boxEnter?: AnimationMetadata | AnimationMetadata[];
    boxLeave?: AnimationMetadata | AnimationMetadata[];
    coverEnter?: AnimationMetadata | AnimationMetadata[];
    coverLeave?: AnimationMetadata | AnimationMetadata[];
}
export interface LayerMeta {
    component: Type<any>;
    opts: LayerOptions;
}
export interface LayerOptions {
    modal?: boolean;
    transparent?: boolean;
    fill?: boolean;
    stickToBottom?: boolean;
    gutterPadding?: boolean;
    customClass?: string;
    offClick?: {
        (layerRef: LayerRef): void;
    };
    attrs?: LayerAttributes;
    noLayerBox?: boolean;
    events?: string[];
}
export declare class LayerContainerComponent {
    private cdRef;
    container: ElementRef;
    cover: ElementRef;
    box: ElementRef;
    layerRef: LayerRef;
    layerOpts: LayerOptions;
    layerTarget: TemplateRef<any> | Type<any>;
    layerInjector: any;
    layerAttrs: LayerAttributes;
    _layerAttrs: LayerAttributes;
    readonly mergedLayerAttrs: LayerAttributes;
    zIndex: number;
    wormhole: Wormhole | undefined;
    eventSub?: Subscription;
    layerContentContainer: ViewContainerRef;
    boxEnterAnimationFactory?: AnimationFactory | undefined;
    boxLeaveAnimationFactory?: AnimationFactory | undefined;
    coverEnterAnimationFactory: AnimationFactory | undefined;
    coverLeaveAnimationFactory: AnimationFactory | undefined;
    constructor(cdRef: ChangeDetectorRef, builder: AnimationBuilder, elementRef: ElementRef, animations: LayerAnimationConfig);
    ngAfterViewInit(): void;
    animateLeave(): Promise<[{}, {}]>;
    ngOnDestroy(): void;
    triggerOffClick(event: any): void;
}
