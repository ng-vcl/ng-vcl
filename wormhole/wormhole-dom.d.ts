import { EmbeddedViewRef, ComponentRef, ApplicationRef, Type, TemplateRef, Injector } from '@angular/core';
import { ComponentWormholeBase, TemplateWormholeBase } from './wormhole-base';
export declare class DomComponentWormhole<T> extends ComponentWormholeBase<T> {
    private appRef;
    private node;
    private injector;
    private compFactory;
    constructor(componentClass: Type<T>, appRef: ApplicationRef, node?: HTMLElement | undefined, injector?: Injector | undefined);
    readonly rootComponentRef: ComponentRef<any>;
    attach(componentClass: Type<T>, index?: number): ComponentRef<T>;
    detach(): void;
    readonly currentIndex: number;
}
export declare class DomTemplateWormhole extends TemplateWormholeBase {
    private appRef;
    private node;
    private injector;
    constructor(templateRef: TemplateRef<any>, appRef: ApplicationRef, node?: HTMLElement | undefined, injector?: Injector | undefined);
    readonly rootComponentRef: ComponentRef<any>;
    protected attach(templateRef: TemplateRef<any>, index?: number): EmbeddedViewRef<any>;
    protected detach(): void;
    readonly currentIndex: number;
}
