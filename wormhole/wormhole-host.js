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
import { TemplateRef, ApplicationRef } from '@angular/core';
import { ComponentWormhole, TemplateWormhole } from './wormhole';
import { DomComponentWormhole, DomTemplateWormhole } from './wormhole-dom';
var WormholeHostBase = /** @class */ (function () {
    function WormholeHostBase() {
        this._wormholes = [];
    }
    Object.defineProperty(WormholeHostBase.prototype, "wormholes", {
        get: function () {
            return this._wormholes.filter(function (w) { return w.isConnected; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WormholeHostBase.prototype, "connectedWormholes", {
        get: function () {
            return this._wormholes.filter(function (w) { return w.isConnected; }).length;
        },
        enumerable: true,
        configurable: true
    });
    WormholeHostBase.prototype.getWormhole = function (index) {
        return this._wormholes[index];
    };
    WormholeHostBase.prototype.connectWormhole = function (target, attrs, events) {
        var wormhole = this.createWormhole(target);
        wormhole.connect(attrs, events);
        return wormhole;
    };
    WormholeHostBase.prototype.disconnectWormhole = function (index) {
        var w = this.getWormhole(index);
        if (w) {
            w.disconnect();
        }
    };
    WormholeHostBase.prototype.disconnectWormholes = function () {
        this._wormholes.forEach(function (w) { return w.disconnect(); });
    };
    WormholeHostBase.prototype.clearWormholes = function () {
        this.disconnectWormholes();
        this._wormholes = [];
    };
    WormholeHostBase.prototype.removeWormhole = function (wormhole) {
        var w = typeof wormhole === 'number' ? this.getWormhole(wormhole) : wormhole;
        if (w) {
            w.disconnect();
            this._wormholes = this._wormholes.filter(function (cw) { return cw !== w; });
        }
    };
    return WormholeHostBase;
}());
export { WormholeHostBase };
var WormholeHost = /** @class */ (function (_super) {
    __extends(WormholeHost, _super);
    function WormholeHost(_host, _injector) {
        var _this = _super.call(this) || this;
        _this._host = _host;
        _this._injector = _injector;
        if (!_host) {
            throw 'missing host ViewContainerRef';
        }
        return _this;
    }
    WormholeHost.prototype.createWormhole = function (arg2) {
        var wormhole;
        if (typeof arg2 === 'function' && this._host) {
            wormhole = new ComponentWormhole(arg2, this._host, this._injector);
        }
        else if (arg2 instanceof TemplateRef && this._host) {
            wormhole = new TemplateWormhole(arg2, this._host);
        }
        else {
            throw 'Parameter must be component class or templateRef';
        }
        this._wormholes.push(wormhole);
        return wormhole;
    };
    return WormholeHost;
}(WormholeHostBase));
export { WormholeHost };
var DomWormholeHost = /** @class */ (function (_super) {
    __extends(DomWormholeHost, _super);
    function DomWormholeHost(_host, _node, _injector) {
        var _this = _super.call(this) || this;
        _this._host = _host;
        _this._node = _node;
        _this._injector = _injector;
        if (!_host) {
            throw 'missing host ApplicationRef';
        }
        return _this;
    }
    DomWormholeHost.prototype.createWormhole = function (arg2) {
        var wormhole;
        if (typeof arg2 === 'function' && this._host instanceof ApplicationRef) {
            wormhole = new DomComponentWormhole(arg2, this._host, this._node, this._injector);
        }
        else if (arg2 instanceof TemplateRef && this._host) {
            wormhole = new DomTemplateWormhole(arg2, this._host, this._node, this._injector);
        }
        else {
            throw 'Parameter must be component class or templateRef';
        }
        this._wormholes.push(wormhole);
        return wormhole;
    };
    return DomWormholeHost;
}(WormholeHostBase));
export { DomWormholeHost };
