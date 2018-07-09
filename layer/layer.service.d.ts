import { Injector, Type } from '@angular/core';
import { LayerManagerService } from './layer-manager.service';
import { LayerRef, LayerAttributes } from './layer-ref';
import { LayerOptions } from './layer-container.component';
export declare class LayerService {
    private layerManager;
    private injector;
    constructor(layerManager: LayerManagerService, injector: Injector);
    hasVisibleLayers(): boolean;
    getVisibleLayers(): LayerRef[];
    getTopLayer(): LayerRef | undefined;
    closeAll(): void;
    closeTop(): void;
    create(component: Type<any>, opts?: LayerOptions): LayerRef;
    open(component: Type<any>, attrs?: LayerAttributes, opts?: LayerOptions): LayerRef;
}
