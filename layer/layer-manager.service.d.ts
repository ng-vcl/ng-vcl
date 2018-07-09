import { Injector, TemplateRef, Type, ApplicationRef } from '@angular/core';
import { LayerRef } from './layer-ref';
import { LayerOptions } from './layer-container.component';
export declare class LayerManagerService {
    private injector;
    private layerMetaMap;
    baseZIndex: number;
    visibleLayers: LayerRef[];
    private host;
    constructor(appRef: ApplicationRef, injector: Injector);
    readonly currentZIndex: number;
    private addVisibleLayer(layer);
    private removeVisibleLayer(layer);
    _register(layerRef: LayerRef, target: TemplateRef<any> | Type<any>, injector: Injector, opts?: LayerOptions): void;
    _unregister(layer: LayerRef): void;
    ngOnDestroy(): void;
}
