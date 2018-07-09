import { Subject, Observable } from 'rxjs';
import { WormholeEvent } from './../wormhole/index';
export interface LayerAttributes {
    [key: string]: any;
}
export declare class LayerResult<T> extends Observable<T> {
    source: Observable<any>;
    private layerRef;
    constructor(source: Observable<any>, layerRef: LayerRef);
    close(data?: any): void;
    closeWithError(data?: any): void;
}
export declare abstract class LayerRef {
    visible: boolean;
    attrs: LayerAttributes | undefined;
    protected results: Subject<any> | undefined;
    private stateChange;
    state$: Observable<{
        attrs?: LayerAttributes | undefined;
        visible: boolean;
    }>;
    open(attrs?: LayerAttributes): LayerResult<any>;
    close(data?: any): void;
    closeWithError(data?: any): void;
    send(data: any): void;
    event(event: WormholeEvent): void;
}
export declare class DynamicLayerRef extends LayerRef {
    private _register;
    private _unregister;
    constructor(_register: {
        (): void;
    }, _unregister: {
        (): void;
    });
    private _registered;
    open(attrs?: LayerAttributes): LayerResult<any>;
    close(data?: any): void;
    closeWithError(data?: any): void;
    event(event: WormholeEvent): void;
}
