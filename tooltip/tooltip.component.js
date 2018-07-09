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
import { Component, Input, ElementRef, Inject, Renderer } from '@angular/core';
import { TooltipService } from './tooltip.service';
import { DOCUMENT } from '@angular/platform-browser';
import { trigger, state, transition, animate, style } from '@angular/animations';
export var AnimationState;
(function (AnimationState) {
    AnimationState["Shown"] = "shown";
    AnimationState["Hidden"] = "hidden";
    AnimationState["None"] = "none";
})(AnimationState || (AnimationState = {}));
export var Placement;
(function (Placement) {
    Placement["Top"] = "top";
    Placement["Bottom"] = "bottom";
    Placement["Left"] = "left";
    Placement["Right"] = "right";
})(Placement || (Placement = {}));
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(element, document, renderer, tooltipService) {
        this.element = element;
        this.document = document;
        this.renderer = renderer;
        this.tooltipService = tooltipService;
        this.debug = false;
        this.placement = Placement.Top;
        this._animationState = AnimationState.Hidden;
        this.showArrowPointer = true;
        // Initial position should out of screen
        this.tooltipPlacement = { Top: -1000, Left: -1000 };
        // true if initialized by directive
        this.showOnInit = false;
    }
    TooltipComponent_1 = TooltipComponent;
    TooltipComponent.prototype.ngOnChanges = function (changes) {
        if (changes.placement || changes.content || changes.animationState) {
            this.showTooltip()();
        }
    };
    TooltipComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var tag = TooltipComponent_1.Tag + ".ngAfterViewInit()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'this:', this);
        if (debug)
            console.log(tag, 'this.animationState:', this.animationState);
        setTimeout(function () {
            if (_this.showOnInit || _this.animationState === AnimationState.Shown) {
                setTimeout(function () { return _this.showTooltip()(); });
            }
            else if (!_this.animationState) {
                _this._animationState = AnimationState.None;
                _this.renderer.listen(_this.hostElement, 'mouseenter', function () { return _this.showTooltip(); });
                _this.renderer.listen(_this.hostElement, 'focusin', function () { return _this.showTooltip(); });
                _this.renderer.listen(_this.hostElement, 'focusout', function () { _this._animationState = AnimationState.Hidden; });
                _this.renderer.listen(_this.hostElement, 'mouseleave', function () { _this._animationState = AnimationState.Hidden; });
            }
        });
    };
    TooltipComponent.prototype.showTooltip = function () {
        var _this = this;
        var tag = TooltipComponent_1.Tag + ".showTooltip()";
        var debug = this.debug || false;
        return function () {
            if (_this.hostElement) {
                var tooltipOffset = _this.tooltipService.positionElements(_this.hostElement, _this.element.nativeElement.children[0].children[0], _this.placement);
                if (debug)
                    console.log(tag, 'tooltipOffset:', tooltipOffset);
                _this.tooltipPlacement = {
                    Top: tooltipOffset.Top,
                    Left: tooltipOffset.Left
                };
                if (debug)
                    console.log(tag, 'this.tooltipPlacement:', _this.tooltipPlacement);
                _this._animationState = AnimationState.Shown;
                _this.document.querySelector('body').appendChild(_this.element.nativeElement);
                return true;
            }
            else {
                console.error('Host element not specified');
                return false;
            }
        };
    };
    Object.defineProperty(TooltipComponent.prototype, "tooltipPosition", {
        get: function () {
            switch (this.placement) {
                case Placement.Right:
                    return 'vclTooltip vclArrowPointerLeft';
                case Placement.Left:
                    return 'vclTooltip vclArrowPointerRight';
                case Placement.Bottom:
                    return 'vclTooltip vclArrowPointerTop';
                case Placement.Top:
                default:
                    return 'vclTooltip vclArrowPointerBottom';
            }
        },
        enumerable: true,
        configurable: true
    });
    TooltipComponent.prototype.ngOnDestroy = function () {
        if (!this.showOnInit) {
            this.element.nativeElement.parentNode.removeChild(this.element.nativeElement);
        }
    };
    TooltipComponent.Tag = 'TooltipComponent';
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TooltipComponent.prototype, "debug", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipComponent.prototype, "placement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", HTMLElement)
    ], TooltipComponent.prototype, "hostElement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipComponent.prototype, "animationState", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TooltipComponent.prototype, "showArrowPointer", void 0);
    TooltipComponent = TooltipComponent_1 = __decorate([
        Component({
            selector: 'vcl-tooltip',
            template: "<div [@enterAnimation]=\"animationState || _animationState\" [style.left]=\"tooltipPlacement.Left + 'px'\" [style.top]=\"tooltipPlacement.Top + 'px'\"\n  style=\"white-space:nowrap;\" role=\"tooltip\" [class]=\"tooltipPosition\">\n  <div class=\"vclTooltipContent\">\n    {{ content }}\n    <ng-content></ng-content>\n  </div>\n  <div [class.vclArrowPointer]=\"showArrowPointer\"></div>\n</div>\n",
            host: {
                '[class.vclTooltip]': 'true',
            },
            animations: [
                trigger('enterAnimation', [
                    state('shown', style({ opacity: 1, 'z-index': 'initial' })),
                    state('hidden', style({ opacity: 0, 'z-index': '-1' })),
                    state('none', style({ opacity: 0 })),
                    transition('hidden => shown', animate('0.2s')),
                ])
            ],
            styles: [":host{ top: 0; left: 0 }"]
        }),
        __param(1, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [ElementRef, Object, Renderer,
            TooltipService])
    ], TooltipComponent);
    return TooltipComponent;
    var TooltipComponent_1;
}());
export { TooltipComponent };
