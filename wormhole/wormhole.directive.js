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
import { ViewContainerRef, Directive, Input } from '@angular/core';
import { WormholeHost } from './wormhole-host';
var WormholeDirective = /** @class */ (function (_super) {
    __extends(WormholeDirective, _super);
    function WormholeDirective(viewContainerRef) {
        return _super.call(this, viewContainerRef) || this;
    }
    Object.defineProperty(WormholeDirective.prototype, "isConnected", {
        get: function () {
            return !!this.wormhole && this.wormhole.isConnected;
        },
        enumerable: true,
        configurable: true
    });
    WormholeDirective.prototype.ngOnChanges = function (changes) {
        var attrs = ('attrs' in changes && changes['attrs'].currentValue) || undefined;
        if ('target' in changes) {
            this.clearWormholes();
            var target = changes['target'].currentValue;
            if (target) {
                this.wormhole = this.connectWormhole(target, attrs);
            }
        }
        else if (attrs && this.wormhole) {
            this.wormhole.setAttributes(attrs);
        }
    };
    WormholeDirective.prototype.ngOnDestroy = function () {
        if (this.wormhole) {
            this.wormhole.disconnect();
        }
    };
    __decorate([
        Input('connect'),
        __metadata("design:type", Object)
    ], WormholeDirective.prototype, "target", void 0);
    __decorate([
        Input('attrs'),
        __metadata("design:type", Object)
    ], WormholeDirective.prototype, "attrs", void 0);
    WormholeDirective = __decorate([
        Directive({
            selector: 'wormhole'
        }),
        __metadata("design:paramtypes", [ViewContainerRef])
    ], WormholeDirective);
    return WormholeDirective;
}(WormholeHost));
export { WormholeDirective };
