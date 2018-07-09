import { TemplateRef, ViewContainerRef, EmbeddedViewRef, Type, ComponentRef, Injector } from '@angular/core';
import { ComponentWormholeBase, TemplateWormholeBase } from './wormhole-base';
export interface WormholeAttributes {
    [key: string]: any;
}
export interface WormholeEvent {
    type: string;
    value: any;
}
export declare class TemplateWormhole extends TemplateWormholeBase {
    private viewContainerRef;
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
    attach(templateRef: TemplateRef<any>, index?: number): EmbeddedViewRef<any>;
    detach(): void;
    readonly currentIndex: number;
}
export declare class ComponentWormhole<T> extends ComponentWormholeBase<T> {
    private viewContainerRef;
    private injector;
    private compFactory;
    constructor(componentClass: Type<T>, viewContainerRef: ViewContainerRef, injector?: Injector | undefined);
    attach(componentClass: Type<T>, index?: number): ComponentRef<T>;
    detach(): void;
    readonly currentIndex: number;
}
