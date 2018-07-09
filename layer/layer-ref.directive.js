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
import { Input, TemplateRef, Directive, Injector } from '@angular/core';
import { LayerRef } from './layer-ref';
import { LayerManagerService } from './layer-manager.service';
var LayerRefDirective = /** @class */ (function (_super) {
    __extends(LayerRefDirective, _super);
    function LayerRefDirective(templateRef, layerManager, injector) {
        var _this = _super.call(this) || this;
        _this.templateRef = templateRef;
        _this.layerManager = layerManager;
        _this.injector = injector;
        return _this;
    }
    LayerRefDirective.prototype.ngOnInit = function () {
        this.layerManager._register(this, this.templateRef, this.injector, this);
    };
    LayerRefDirective.prototype.ngOnDestroy = function () {
        this.layerManager._unregister(this);
    };
    LayerRefDirective.prototype.event = function (event) {
        // Not required for template components
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], LayerRefDirective.prototype, "modal", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], LayerRefDirective.prototype, "transparent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], LayerRefDirective.prototype, "fill", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], LayerRefDirective.prototype, "stickToBottom", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], LayerRefDirective.prototype, "gutterPadding", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], LayerRefDirective.prototype, "customClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], LayerRefDirective.prototype, "noLayerBox", void 0);
    LayerRefDirective = __decorate([
        Directive({
            selector: '[vcl-layer]',
            exportAs: 'layer',
        }),
        __metadata("design:paramtypes", [TemplateRef, LayerManagerService, Injector])
    ], LayerRefDirective);
    return LayerRefDirective;
}(LayerRef));
export { LayerRefDirective };
