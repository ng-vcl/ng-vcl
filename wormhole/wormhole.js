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
import { ComponentFactoryResolver } from '@angular/core';
import { ComponentWormholeBase, TemplateWormholeBase } from './wormhole-base';
var TemplateWormhole = /** @class */ (function (_super) {
    __extends(TemplateWormhole, _super);
    // The wormhole directive needs a reference to the template
    function TemplateWormhole(templateRef, viewContainerRef) {
        var _this = _super.call(this, templateRef) || this;
        _this.viewContainerRef = viewContainerRef;
        if (!viewContainerRef) {
            throw 'missing ViewContainerRef';
        }
        return _this;
    }
    TemplateWormhole.prototype.attach = function (templateRef, index) {
        return this.viewContainerRef.createEmbeddedView(templateRef, null, typeof index === 'number' ? index : this.viewContainerRef.length);
    };
    TemplateWormhole.prototype.detach = function () {
        if (this.isConnected && this.currentIndex >= 0) {
            this.viewContainerRef.remove(this.currentIndex);
        }
    };
    Object.defineProperty(TemplateWormhole.prototype, "currentIndex", {
        get: function () {
            return this.viewRef ? this.viewContainerRef.indexOf(this.viewRef) : -1;
        },
        enumerable: true,
        configurable: true
    });
    return TemplateWormhole;
}(TemplateWormholeBase));
export { TemplateWormhole };
var ComponentWormhole = /** @class */ (function (_super) {
    __extends(ComponentWormhole, _super);
    function ComponentWormhole(componentClass, viewContainerRef, injector) {
        var _this = _super.call(this, componentClass) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        if (!viewContainerRef) {
            throw 'missing ViewContainerRef';
        }
        return _this;
    }
    ComponentWormhole.prototype.attach = function (componentClass, index) {
        var injector = this.injector || this.viewContainerRef.parentInjector;
        if (!this.compFactory) {
            var componentFactoryResolver = injector.get(ComponentFactoryResolver);
            this.compFactory = componentFactoryResolver.resolveComponentFactory(componentClass);
        }
        return this.viewContainerRef.createComponent(this.compFactory, typeof index === 'number' ? index : this.viewContainerRef.length, injector);
    };
    ComponentWormhole.prototype.detach = function () {
        if (this.compRef) {
            this.compRef.destroy();
        }
    };
    Object.defineProperty(ComponentWormhole.prototype, "currentIndex", {
        get: function () {
            return this.compRef ? this.viewContainerRef.indexOf(this.compRef.hostView) : -1;
        },
        enumerable: true,
        configurable: true
    });
    return ComponentWormhole;
}(ComponentWormholeBase));
export { ComponentWormhole };
