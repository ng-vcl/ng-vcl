var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { ChangeDetectorRef, Component, ElementRef, Inject, InjectionToken, Input, Optional, ReflectiveInjector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { ComponentWormhole, TemplateWormhole } from '../wormhole/index';
import { LayerRef } from './layer-ref';
export var COMPONENT_LAYER_ANNOTATION_ID = 'ng-vcl_component_layer';
export var LAYER_ANIMATIONS = new InjectionToken('@ng-vcl/ng-vcl#layer_animations');
var LayerContainerComponent = /** @class */ (function () {
    function LayerContainerComponent(cdRef, builder, elementRef, animations) {
        this.cdRef = cdRef;
        this.zIndex = 1000;
        if (animations && animations.boxEnter) {
            this.boxEnterAnimationFactory = builder.build(animations.boxEnter);
        }
        if (animations && animations.boxLeave) {
            this.boxLeaveAnimationFactory = builder.build(animations.boxLeave);
        }
        if (animations && animations.coverEnter) {
            this.coverEnterAnimationFactory = builder.build(animations.coverEnter);
        }
        if (animations && animations.coverLeave) {
            this.coverLeaveAnimationFactory = builder.build(animations.coverLeave);
        }
    }
    Object.defineProperty(LayerContainerComponent.prototype, "layerAttrs", {
        set: function (layerAttrs) {
            this._layerAttrs = layerAttrs;
            if (this.wormhole && this.wormhole instanceof ComponentWormhole) {
                this.wormhole.setAttributes(this.mergedLayerAttrs);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayerContainerComponent.prototype, "mergedLayerAttrs", {
        get: function () {
            return this.layerOpts.attrs ? Object.assign({}, this.layerOpts.attrs, this._layerAttrs) : this._layerAttrs;
        },
        enumerable: true,
        configurable: true
    });
    LayerContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var layer = this.layerRef;
        if (layer && this.layerContentContainer) {
            // Creates a wormhole out of the LayerRef
            if (this.layerTarget instanceof TemplateRef) {
                this.wormhole = new TemplateWormhole(this.layerTarget, this.layerContentContainer);
            }
            else {
                // The created injector injects this instance as LayerRef
                // It is used in the component instance created within the wormhole
                var layerInjector = ReflectiveInjector.resolveAndCreate([{
                        provide: LayerRef,
                        useValue: this.layerRef
                    }], this.layerInjector);
                this.wormhole = new ComponentWormhole(this.layerTarget, this.layerContentContainer, layerInjector);
            }
            if (!this.wormhole) {
                throw 'invalid layer';
            }
            this.eventSub = this.wormhole.connect(this.mergedLayerAttrs, this.layerOpts.events).subscribe(function (event) {
                _this.layerRef.event(event);
            });
            if (this.boxEnterAnimationFactory && this.box) {
                this.boxEnterAnimationFactory.create(this.box.nativeElement).play();
            }
            if (this.coverEnterAnimationFactory && this.cover) {
                var player_1 = this.coverEnterAnimationFactory.create(this.cover.nativeElement);
                player_1.onDone(function () { return player_1.destroy(); });
                player_1.play();
            }
        }
    };
    LayerContainerComponent.prototype.animateLeave = function () {
        var _this = this;
        return Promise.all([
            new Promise(function (resolve) {
                if (_this.boxLeaveAnimationFactory && _this.box) {
                    var player = _this.boxLeaveAnimationFactory.create(_this.box.nativeElement);
                    player.onDone(resolve);
                    player.play();
                }
                else {
                    resolve();
                }
            }),
            new Promise(function (resolve) {
                if (_this.coverLeaveAnimationFactory && _this.cover) {
                    var player_2 = _this.coverLeaveAnimationFactory.create(_this.cover.nativeElement);
                    player_2.onDone(function () {
                        player_2.destroy();
                        resolve();
                    });
                    player_2.play();
                }
                else {
                    resolve();
                }
            }),
        ]);
    };
    LayerContainerComponent.prototype.ngOnDestroy = function () {
        this.wormhole && this.wormhole.disconnect();
        this.eventSub && this.eventSub.unsubscribe();
    };
    LayerContainerComponent.prototype.triggerOffClick = function (event) {
        if (event.target === this.container.nativeElement) {
            if (this.layerOpts.offClick) {
                this.layerOpts.offClick(this.layerRef);
            }
            else {
                if (!this.layerOpts.modal) {
                    this.layerRef.close();
                }
            }
        }
    };
    __decorate([
        ViewChild('container'),
        __metadata("design:type", ElementRef)
    ], LayerContainerComponent.prototype, "container", void 0);
    __decorate([
        ViewChild('cover'),
        __metadata("design:type", ElementRef)
    ], LayerContainerComponent.prototype, "cover", void 0);
    __decorate([
        ViewChild('box'),
        __metadata("design:type", ElementRef)
    ], LayerContainerComponent.prototype, "box", void 0);
    __decorate([
        Input(),
        __metadata("design:type", LayerRef)
    ], LayerContainerComponent.prototype, "layerRef", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LayerContainerComponent.prototype, "layerOpts", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LayerContainerComponent.prototype, "layerTarget", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LayerContainerComponent.prototype, "layerInjector", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LayerContainerComponent.prototype, "layerAttrs", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LayerContainerComponent.prototype, "zIndex", void 0);
    __decorate([
        ViewChild('layerContent', { read: ViewContainerRef }),
        __metadata("design:type", ViewContainerRef)
    ], LayerContainerComponent.prototype, "layerContentContainer", void 0);
    LayerContainerComponent = __decorate([
        Component({
            template: "<div \n  #container \n  class=\"vclLayer\"\n  [ngClass]=\"layerOpts.customClass\"\n  [class.vclTransparent]=\"layerOpts.transparent\"\n  [class.vclLayerFill]=\"layerOpts.fill\"\n  [class.vclLayerStickToBottom]=\"layerOpts.stickToBottom\"\n  [style.z-index]=\"zIndex + 1\"\n  [style.pointer-events]=\"'all'\" \n  role=\"dialog\" \n  (click)='triggerOffClick($event)'\n  >\n  <div *ngIf=\"layerOpts.noLayerBox\" #layerContent></div>\n  <div *ngIf=\"!layerOpts.noLayerBox\" #box class=\"vclLayerBox\" [class.vclLayerGutterPadding]=\"layerOpts.gutterPadding\" [style.pointer-events]=\"'all'\" [style.z-index]=\"zIndex + 2\">\n    <div #layerContent></div>\n  </div>\n</div>\n<div #cover *ngIf=\"layerOpts.modal\" class=\"vclLayerCover\" [style.z-index]=\"zIndex\"></div>\n"
        }),
        __param(3, Optional()), __param(3, Inject(LAYER_ANIMATIONS)),
        __metadata("design:paramtypes", [ChangeDetectorRef,
            AnimationBuilder,
            ElementRef, Object])
    ], LayerContainerComponent);
    return LayerContainerComponent;
}());
export { LayerContainerComponent };
