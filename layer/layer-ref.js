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
import { Subject, Observable } from 'rxjs';
var LayerResult = /** @class */ (function (_super) {
    __extends(LayerResult, _super);
    function LayerResult(source, layerRef) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.layerRef = layerRef;
        return _this;
    }
    LayerResult.prototype.close = function (data) {
        this.layerRef.close();
    };
    LayerResult.prototype.closeWithError = function (data) {
        this.layerRef.closeWithError();
    };
    return LayerResult;
}(Observable));
export { LayerResult };
var LayerRef = /** @class */ (function () {
    function LayerRef() {
        this.stateChange = new Subject();
        this.state$ = this.stateChange.asObservable();
    }
    LayerRef.prototype.open = function (attrs) {
        this.visible = true;
        this.attrs = attrs;
        this.stateChange.next({ attrs: attrs, visible: true });
        if (this.results) {
            this.results.complete();
        }
        this.results = new Subject();
        return new LayerResult(this.results, this);
    };
    LayerRef.prototype.close = function (data) {
        this.visible = false;
        this.stateChange.next({ visible: false });
        if (this.results) {
            if (data !== undefined) {
                this.results.next(data);
            }
            this.results.complete();
            this.results = undefined;
        }
    };
    LayerRef.prototype.closeWithError = function (data) {
        this.visible = false;
        this.stateChange.next({ visible: false });
        if (this.results) {
            this.results.error(data);
            this.results = undefined;
        }
    };
    LayerRef.prototype.send = function (data) {
        if (data !== undefined && this.results) {
            this.results.next(data);
        }
    };
    LayerRef.prototype.event = function (event) { };
    return LayerRef;
}());
export { LayerRef };
var DynamicLayerRef = /** @class */ (function (_super) {
    __extends(DynamicLayerRef, _super);
    function DynamicLayerRef(_register, _unregister) {
        var _this = _super.call(this) || this;
        _this._register = _register;
        _this._unregister = _unregister;
        _this._registered = false;
        return _this;
    }
    DynamicLayerRef.prototype.open = function (attrs) {
        if (!this._registered) {
            this._register();
            this._registered = true;
        }
        return _super.prototype.open.call(this, attrs);
    };
    DynamicLayerRef.prototype.close = function (data) {
        _super.prototype.close.call(this, data);
        this._unregister();
        this._registered = false;
    };
    DynamicLayerRef.prototype.closeWithError = function (data) {
        _super.prototype.closeWithError.call(this, data);
        this._unregister();
        this._registered = false;
    };
    DynamicLayerRef.prototype.event = function (event) {
        if (this.results) {
            this.results.next(event);
        }
    };
    return DynamicLayerRef;
}(LayerRef));
export { DynamicLayerRef };
