import { InjectionToken, Injector, ModuleWithProviders, Type } from '@angular/core';
import { LayerManagerService } from './layer-manager.service';
import { LayerService } from './layer.service';
import { DynamicLayerRef, LayerAttributes, LayerRef, LayerResult } from './layer-ref';
import { LAYER_ANIMATIONS, LayerAnimationConfig, LayerContainerComponent, LayerOptions } from './layer-container.component';
import { LayerRefDirective } from './layer-ref.directive';
export { LayerRefDirective, LayerRef, LayerAttributes, LayerService, LayerContainerComponent, DynamicLayerRef, LayerAnimationConfig, LAYER_ANIMATIONS, LayerResult };
export declare const LAYERS: InjectionToken<{}>;
export interface RootLayerConfig {
    layers?: Type<LayerRef>[];
}
export interface ChildLayerConfig {
    layers?: Type<LayerRef>[];
}
export declare function Layer<T>(component: Type<T>, opts?: LayerOptions): (target: any) => void;
export declare class VCLLayerModule {
    static forRoot(config?: RootLayerConfig): ModuleWithProviders;
    static forChild(config?: ChildLayerConfig): ModuleWithProviders;
    constructor(layers: Type<LayerRef>[], layerManager: LayerManagerService, injector: Injector);
}
