import { EmbeddedViewRef, TemplateRef, ComponentRef, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { WormholeAttributes, WormholeEvent } from './wormhole';
export interface WormholeAttributes {
    [key: string]: any;
}
export declare abstract class Wormhole {
    readonly abstract isConnected: boolean;
    abstract connect(attrs?: WormholeAttributes, events?: string[]): Observable<WormholeEvent>;
    abstract disconnect(): any;
    abstract setAttributes(attrs: WormholeAttributes): any;
    readonly abstract currentIndex: number;
}
export declare abstract class TemplateWormholeBase extends Wormhole {
    private templateRef;
    private cachedAttrs;
    viewRef: EmbeddedViewRef<any> | undefined;
    constructor(templateRef: TemplateRef<any>);
    readonly isConnected: boolean;
    connect(attrs?: WormholeAttributes, events?: string[], index?: number): Observable<WormholeEvent>;
    disconnect(): void;
    setAttributes(attrs: WormholeAttributes): void;
    protected abstract attach(templateRef: TemplateRef<any>, index?: number): EmbeddedViewRef<any>;
    protected abstract detach(): any;
}
export declare abstract class ComponentWormholeBase<T> extends Wormhole {
    private componentClass;
    compRef: ComponentRef<T> | undefined;
    readonly compInstance: T | undefined;
    private cachedAttrs;
    constructor(componentClass: Type<T>);
    readonly isConnected: boolean;
    connect(attrs?: WormholeAttributes, events?: string[], index?: number): Observable<WormholeEvent>;
    disconnect(): void;
    setAttributes(attrs: WormholeAttributes): void;
    protected abstract attach(factory: Type<T>, index?: number): ComponentRef<T>;
    protected abstract detach(): any;
}
