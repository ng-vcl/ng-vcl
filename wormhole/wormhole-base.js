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
import { TemplateRef } from '@angular/core';
import { never, merge } from 'rxjs';
import { map } from 'rxjs/operators';
var Wormhole = /** @class */ (function () {
    function Wormhole() {
    }
    return Wormhole;
}());
export { Wormhole };
var TemplateWormholeBase = /** @class */ (function (_super) {
    __extends(TemplateWormholeBase, _super);
    // The wormhole directive needs a reference to the template
    function TemplateWormholeBase(templateRef) {
        var _this = _super.call(this) || this;
        _this.templateRef = templateRef;
        if (!(templateRef instanceof TemplateRef)) {
            throw 'invalid TemplateRef';
        }
        return _this;
    }
    Object.defineProperty(TemplateWormholeBase.prototype, "isConnected", {
        get: function () {
            return !!(this.viewRef);
        },
        enumerable: true,
        configurable: true
    });
    TemplateWormholeBase.prototype.connect = function (attrs, events, index) {
        var _this = this;
        if (typeof attrs === 'object' && attrs) {
            this.cachedAttrs = attrs;
        }
        this.disconnect();
        this.viewRef = this.attach(this.templateRef, index);
        this.viewRef.onDestroy(function () {
            _this.viewRef = undefined;
        });
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(this.viewRef.context, this.cachedAttrs);
        }
        this.viewRef.detectChanges();
        return never();
    };
    TemplateWormholeBase.prototype.disconnect = function () {
        this.detach();
        this.viewRef = undefined;
    };
    TemplateWormholeBase.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.viewRef && attrs && typeof attrs === 'object') {
            Object.assign(this.viewRef.context, attrs);
            this.viewRef.markForCheck();
        }
    };
    return TemplateWormholeBase;
}(Wormhole));
export { TemplateWormholeBase };
var ComponentWormholeBase = /** @class */ (function (_super) {
    __extends(ComponentWormholeBase, _super);
    function ComponentWormholeBase(componentClass) {
        var _this = _super.call(this) || this;
        _this.componentClass = componentClass;
        if (!(typeof componentClass === 'function')) {
            throw 'invalid component class';
        }
        return _this;
    }
    Object.defineProperty(ComponentWormholeBase.prototype, "compInstance", {
        get: function () {
            return this.compRef && this.compRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentWormholeBase.prototype, "isConnected", {
        get: function () {
            return !!this.compRef;
        },
        enumerable: true,
        configurable: true
    });
    ComponentWormholeBase.prototype.connect = function (attrs, events, index) {
        var _this = this;
        if (typeof attrs === 'object' && attrs) {
            this.cachedAttrs = attrs;
        }
        this.disconnect();
        this.compRef = this.attach(this.componentClass, index);
        this.compRef.onDestroy(function () {
            _this.compRef = undefined;
        });
        var instance = this.compRef.instance;
        if (this.cachedAttrs && typeof this.cachedAttrs === 'object') {
            Object.assign(instance, this.cachedAttrs);
        }
        this.compRef.changeDetectorRef.detectChanges();
        var events$ = (events || []).map(function (event) {
            if (!instance[event])
                throw 'Event not found: ' + event;
            return instance[event] && instance[event].pipe(map(function (value) { return ({ type: event, value: value }); }));
        });
        return merge.apply(void 0, events$);
    };
    ComponentWormholeBase.prototype.disconnect = function () {
        this.detach();
        this.compRef = undefined;
    };
    ComponentWormholeBase.prototype.setAttributes = function (attrs) {
        this.cachedAttrs = attrs;
        if (this.compRef && attrs && typeof attrs === 'object') {
            Object.assign(this.compRef.instance, attrs);
            // TODO: Change detection is not triggering when changedetection is set to onPush
            // Workaround for ng 4
            // https://github.com/angular/angular/issues/12313
            var cdRef = this.compRef.changeDetectorRef;
            if (cdRef && cdRef['_view'] && cdRef['_view'].nodes[0] && cdRef['_view'].nodes[0].componentView) {
                this.compRef.changeDetectorRef['_view'].nodes[0].componentView.state |= (1 << 3);
            }
            this.compRef.changeDetectorRef.markForCheck();
        }
    };
    return ComponentWormholeBase;
}(Wormhole));
export { ComponentWormholeBase };
