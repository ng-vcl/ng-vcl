import { ViewContainerRef, Type, TemplateRef, ApplicationRef, Injector } from '@angular/core';
import { Wormhole, WormholeAttributes } from './wormhole-base';
import { ComponentWormhole, TemplateWormhole } from './wormhole';
import { DomComponentWormhole, DomTemplateWormhole } from './wormhole-dom';
export declare abstract class WormholeHostBase {
    protected _wormholes: Wormhole[];
    readonly wormholes: number;
    readonly connectedWormholes: number;
    getWormhole(index: number): Wormhole | undefined;
    abstract createWormhole<T>(component: Type<T>): Wormhole;
    abstract createWormhole<T>(templateRef: TemplateRef<T>): Wormhole;
    abstract createWormhole<T>(arg2: Type<T> | TemplateRef<T>): Wormhole;
    connectWormhole<T>(component: Type<T>, attrs?: WormholeAttributes, events?: string[]): Wormhole;
    connectWormhole<T>(templateRef: TemplateRef<T>, attrs?: WormholeAttributes, events?: string[]): Wormhole;
    disconnectWormhole(index: number): void;
    disconnectWormholes(): void;
    clearWormholes(): void;
    removeWormhole(wormhole: Wormhole | number): void;
}
export declare class WormholeHost extends WormholeHostBase {
    private _host;
    private _injector;
    constructor(_host: ViewContainerRef, _injector?: Injector | undefined);
    createWormhole<T>(component: Type<T>): TemplateWormhole;
    createWormhole<T>(templateRef: TemplateRef<T>): ComponentWormhole<T>;
}
export declare class DomWormholeHost extends WormholeHostBase {
    private _host;
    private _node;
    private _injector;
    constructor(_host: ApplicationRef, _node?: HTMLElement | undefined, _injector?: Injector | undefined);
    createWormhole<T>(component: Type<T>): DomComponentWormhole<T>;
    createWormhole<T>(templateRef: TemplateRef<T>): DomTemplateWormhole;
}
