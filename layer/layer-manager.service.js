var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector, ApplicationRef } from '@angular/core';
import { DomWormholeHost } from '../wormhole/index';
import { LayerContainerComponent } from './layer-container.component';
var LayerManagerService = /** @class */ (function () {
    function LayerManagerService(appRef, injector) {
        this.injector = injector;
        this.layerMetaMap = new Map();
        this.baseZIndex = 1000;
        this.visibleLayers = [];
        this.host = new DomWormholeHost(appRef, undefined, injector);
    }
    Object.defineProperty(LayerManagerService.prototype, "currentZIndex", {
        get: function () {
            return this.baseZIndex + (this.visibleLayers.length * 10);
        },
        enumerable: true,
        configurable: true
    });
    LayerManagerService.prototype.addVisibleLayer = function (layer) {
        this.visibleLayers = this.visibleLayers.concat([layer]);
    };
    LayerManagerService.prototype.removeVisibleLayer = function (layer) {
        this.visibleLayers = this.visibleLayers.filter(function (l) { return l !== layer; });
    };
    LayerManagerService.prototype._register = function (layerRef, target, injector, opts) {
        var _this = this;
        var containerWormholeRef = this.host.createWormhole(LayerContainerComponent);
        var layerSub = layerRef.state$.subscribe(function (state) {
            if (state.visible && !containerWormholeRef.isConnected) {
                containerWormholeRef.connect({
                    layerRef: layerRef,
                    layerAttrs: state.attrs,
                    layerOpts: opts || {},
                    layerTarget: target,
                    layerInjector: injector,
                    zIndex: _this.currentZIndex,
                });
                _this.addVisibleLayer(layerRef);
            }
            else if (state.visible) {
                containerWormholeRef.setAttributes({
                    layerAttrs: state.attrs
                });
            }
            else {
                if (containerWormholeRef.compInstance) {
                    containerWormholeRef.compInstance.animateLeave().then(function () {
                        containerWormholeRef.disconnect();
                        _this.removeVisibleLayer(layerRef);
                    });
                }
            }
        });
        this.layerMetaMap.set(layerRef, { wormhole: containerWormholeRef, subscription: layerSub });
    };
    LayerManagerService.prototype._unregister = function (layer) {
        var meta = this.layerMetaMap.get(layer);
        if (meta) {
            meta.wormhole.disconnect();
            meta.subscription.unsubscribe();
        }
    };
    LayerManagerService.prototype.ngOnDestroy = function () {
        var _this = this;
        this.layerMetaMap.forEach(function (meta, layer) { return _this._unregister(layer); });
        this.host.clearWormholes();
    };
    LayerManagerService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ApplicationRef, Injector])
    ], LayerManagerService);
    return LayerManagerService;
}());
export { LayerManagerService };
