var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector } from '@angular/core';
import { LayerManagerService } from './layer-manager.service';
import { DynamicLayerRef } from './layer-ref';
var LayerService = /** @class */ (function () {
    function LayerService(layerManager, injector) {
        this.layerManager = layerManager;
        this.injector = injector;
    }
    LayerService.prototype.hasVisibleLayers = function () {
        return this.layerManager.visibleLayers.length > 0;
    };
    LayerService.prototype.getVisibleLayers = function () {
        return this.layerManager.visibleLayers.slice();
    };
    LayerService.prototype.getTopLayer = function () {
        return this.layerManager.visibleLayers.slice().pop();
    };
    LayerService.prototype.closeAll = function () {
        this.layerManager.visibleLayers.forEach(function (layer) { return layer.close(); });
    };
    LayerService.prototype.closeTop = function () {
        var topLayer = this.getTopLayer();
        if (topLayer) {
            topLayer.close();
        }
    };
    LayerService.prototype.create = function (component, opts) {
        var _this = this;
        var layerRef = new DynamicLayerRef(function () {
            _this.layerManager._register(layerRef, component, _this.injector, opts);
        }, function () {
            _this.layerManager._unregister(layerRef);
        });
        return layerRef;
    };
    LayerService.prototype.open = function (component, attrs, opts) {
        var layerRef = this.create(component, opts);
        layerRef.open(attrs);
        return layerRef;
    };
    LayerService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LayerManagerService, Injector])
    ], LayerService);
    return LayerService;
}());
export { LayerService };
