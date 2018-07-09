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
function getViewRootNode(embeddedViewRef) {
    var rootNodes = embeddedViewRef.rootNodes;
    return (rootNodes && rootNodes.length && rootNodes[0]) || undefined;
}
function getComponentRootNode(componentRef) {
    return getViewRootNode(componentRef.hostView);
}
var DomComponentWormhole = /** @class */ (function (_super) {
    __extends(DomComponentWormhole, _super);
    function DomComponentWormhole(componentClass, appRef, node, injector) {
        var _this = _super.call(this, componentClass) || this;
        _this.appRef = appRef;
        _this.node = node;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(DomComponentWormhole.prototype, "rootComponentRef", {
        get: function () {
            var rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
            if (!rootComponent) {
                throw 'Application root component not found';
            }
            return rootComponent;
        },
        enumerable: true,
        configurable: true
    });
    DomComponentWormhole.prototype.attach = function (componentClass, index) {
        var injector = this.injector || this.rootComponentRef.injector;
        if (!this.compFactory) {
            var componentFactoryResolver = injector.get(ComponentFactoryResolver);
            this.compFactory = componentFactoryResolver.resolveComponentFactory(componentClass);
        }
        var compRef = this.compFactory.create(injector);
        this.appRef.attachView(compRef.hostView);
        var compRefRootNode = getComponentRootNode(compRef);
        var node = this.node || getComponentRootNode(this.rootComponentRef);
        if (!compRefRootNode) {
            throw 'component root node not found';
        }
        if (!node) {
            throw 'root node not found';
        }
        node.appendChild(compRefRootNode);
        return compRef;
    };
    DomComponentWormhole.prototype.detach = function () {
        if (this.compRef) {
            this.compRef.destroy();
        }
    };
    Object.defineProperty(DomComponentWormhole.prototype, "currentIndex", {
        get: function () {
            return this.compRef ? 0 : -1;
        },
        enumerable: true,
        configurable: true
    });
    return DomComponentWormhole;
}(ComponentWormholeBase));
export { DomComponentWormhole };
var DomTemplateWormhole = /** @class */ (function (_super) {
    __extends(DomTemplateWormhole, _super);
    // The wormhole directive needs a reference to the template
    function DomTemplateWormhole(templateRef, appRef, node, injector) {
        var _this = _super.call(this, templateRef) || this;
        _this.appRef = appRef;
        _this.node = node;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(DomTemplateWormhole.prototype, "rootComponentRef", {
        get: function () {
            var rootComponent = this.appRef.components && this.appRef.components.length && this.appRef.components[0];
            if (!rootComponent) {
                throw 'Application root component not found';
            }
            return rootComponent;
        },
        enumerable: true,
        configurable: true
    });
    DomTemplateWormhole.prototype.attach = function (templateRef, index) {
        var injector = this.injector || this.rootComponentRef.injector;
        var embeddedView = templateRef.createEmbeddedView(undefined);
        this.appRef.attachView(embeddedView);
        var compRefRootNode = getViewRootNode(embeddedView);
        var node = this.node || getComponentRootNode(this.rootComponentRef);
        if (!compRefRootNode) {
            throw 'component root node not found';
        }
        if (!node) {
            throw 'root node not found';
        }
        node.appendChild(compRefRootNode);
        return embeddedView;
    };
    DomTemplateWormhole.prototype.detach = function () {
        if (this.viewRef && this.currentIndex >= 0) {
            this.viewRef.destroy();
        }
    };
    Object.defineProperty(DomTemplateWormhole.prototype, "currentIndex", {
        get: function () {
            return this.viewRef ? 0 : -1;
        },
        enumerable: true,
        configurable: true
    });
    return DomTemplateWormhole;
}(TemplateWormholeBase));
export { DomTemplateWormhole };
