var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { NotifierType, NotifierPosition, NOTIFIER_DEFAULTS, POSITION_MAP } from './types';
import { Notifier } from './notifier';
import { LayerService, LayerRef } from '../layer/index';
import { NotifierComponent } from './notifier.component';
var NotifierLayerRef = /** @class */ (function (_super) {
    __extends(NotifierLayerRef, _super);
    function NotifierLayerRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotifierLayerRef;
}(LayerRef));
export { NotifierLayerRef };
var NotifierService = /** @class */ (function () {
    function NotifierService(ls) {
        this.ls = ls;
        this.closed = false;
        this.layers = new Map();
    }
    NotifierService.prototype.next = function (opts) {
        this.queue(opts);
    };
    NotifierService.prototype.info = function (opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ type: NotifierType.Info }, opts);
    };
    NotifierService.prototype.success = function (opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ type: NotifierType.Success }, opts);
    };
    NotifierService.prototype.warning = function (opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ type: NotifierType.Warning }, opts);
    };
    NotifierService.prototype.error = function (opts) {
        if (opts === void 0) { opts = {}; }
        return this.queue({ type: NotifierType.Error }, opts);
    };
    NotifierService.prototype.queue = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var notifierOpts = Object.assign.apply(Object, [{}, NOTIFIER_DEFAULTS].concat(opts));
        var notifier = new Notifier(notifierOpts);
        var pos = notifierOpts.position || NotifierPosition.TopRight;
        var reverse = POSITION_MAP[pos].reverse;
        if (!this.layers.has(pos)) {
            var layerRef = this.ls.create(NotifierComponent, {
                transparent: true,
                customClass: POSITION_MAP[pos].class
            });
            layerRef.notifiers = [];
            this.layers.set(pos, layerRef);
        }
        var layer = this.layers.get(pos);
        if (layer) {
            notifier.subscribe(function () {
                layer.notifiers = layer.notifiers.filter(function (g) { return g !== notifier; });
                if (layer.notifiers.length === 0) {
                    layer.close();
                }
                else {
                    layer.open({ notifiers: layer.notifiers });
                }
            });
            layer.notifiers = reverse ? [notifier].concat(layer.notifiers) : layer.notifiers.concat([notifier]);
            layer.open({ notifiers: layer.notifiers });
        }
    };
    NotifierService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LayerService])
    ], NotifierService);
    return NotifierService;
}());
export { NotifierService };
