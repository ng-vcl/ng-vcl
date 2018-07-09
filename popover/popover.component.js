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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Inject, InjectionToken, Input, Optional, Output } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { ObservableComponent } from '../core/index';
export var AttachmentX = {
    Left: 'left',
    Center: 'center',
    Right: 'right',
};
export var AttachmentY = {
    Top: 'top',
    Center: 'center',
    Bottom: 'bottom',
};
var Dimension = {
    Width: 'width',
    Height: 'height',
};
export var PopoverState;
(function (PopoverState) {
    PopoverState[PopoverState["visible"] = 0] = "visible";
    PopoverState[PopoverState["hidden"] = 1] = "hidden";
    PopoverState[PopoverState["opening"] = 2] = "opening";
    PopoverState[PopoverState["closing"] = 3] = "closing";
})(PopoverState || (PopoverState = {}));
export var POPOVER_ANIMATIONS = new InjectionToken('@ng-vcl/ng-vcl#popover_animations');
var PopoverComponent = /** @class */ (function (_super) {
    __extends(PopoverComponent, _super);
    function PopoverComponent(me, builder, cdRef, animations) {
        var _this = _super.call(this) || this;
        _this.me = me;
        _this.builder = builder;
        _this.cdRef = cdRef;
        _this.animations = animations;
        _this.enableStyling = true;
        _this.debug = false;
        _this.targetX = AttachmentX.Left;
        _this.targetY = AttachmentY.Bottom;
        _this.attachmentX = AttachmentX.Left;
        _this.offsetAttachmentX = 0;
        _this.attachmentY = AttachmentY.Top;
        _this.offsetAttachmentY = 0;
        _this.willClose = new EventEmitter();
        _this.willOpen = new EventEmitter();
        _this.state = PopoverState.hidden;
        _this.translateX = 1;
        _this.translateY = 0;
        _this.observeChanges('target', 'targetX', 'targetY', 'attachmentX', 'attachmentY').subscribe(function (changes) {
            if (changes.target) {
                _this.setTarget(changes.target.currentValue);
                _this.setTag();
            }
            _this.reposition();
        });
        return _this;
    }
    PopoverComponent_1 = PopoverComponent;
    Object.defineProperty(PopoverComponent.prototype, "visible", {
        get: function () {
            return (this.state === PopoverState.opening || this.state === PopoverState.visible);
        },
        set: function (value) {
            if (value) {
                this.open();
            }
            else {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "classHidden", {
        get: function () {
            return this.state === PopoverState.hidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "styleVisibility", {
        get: function () {
            return this.state === PopoverState.opening ? 'hidden' : 'visible';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopoverComponent.prototype, "transform", {
        get: function () {
            return "translate(" + String(this.translateX) + "px, " + String(this.translateY) + "px)";
        },
        enumerable: true,
        configurable: true
    });
    PopoverComponent.prototype.setTarget = function (value) {
        if (typeof value === 'string') {
            this.targetElement = document.querySelector(value) || undefined;
        }
        else if (value instanceof Element) {
            this.targetElement = value;
        }
        else if (value instanceof ElementRef) {
            this.targetElement = value.nativeElement || undefined;
        }
        else {
            this.targetElement = undefined;
        }
    };
    PopoverComponent.prototype.setTag = function () {
        this.tag = PopoverComponent_1.Tag + "." + this.target;
    };
    PopoverComponent.prototype.reposition = function () {
        var tag = this.tag + ".reposition()";
        var targetPos = this.targetElement ? this.targetElement.getBoundingClientRect() : undefined;
        if (this.debug)
            console.log(tag, 'targetPos:', targetPos);
        if (!this.visible || !targetPos)
            return;
        var ownPos = this.getAttachmentPosition();
        if (this.debug)
            console.log(tag, 'ownPos:', ownPos);
        var mustX = this.targetX === AttachmentX.Center ?
            targetPos[AttachmentX.Left] + targetPos[Dimension.Width] / 2 :
            targetPos[this.targetX];
        var isX = this.attachmentX === AttachmentX.Center ?
            ownPos[AttachmentX.Left] + ownPos[Dimension.Width] / 2 :
            ownPos[this.attachmentX];
        var diffX = mustX - isX;
        this.translateX = this.translateX + diffX + this.offsetAttachmentX;
        var mustY = this.targetY === AttachmentY.Center ?
            targetPos[AttachmentY.Top] + targetPos[Dimension.Height] / 2 :
            targetPos[this.targetY];
        var isY = this.attachmentY === AttachmentY.Center ?
            ownPos[AttachmentY.Top] + ownPos[Dimension.Height] / 2 :
            ownPos[this.attachmentY];
        var diffY = mustY - isY + +this.offsetAttachmentY;
        if (this.debug) {
            console.log(tag, {
                targetPos: targetPos,
                ownPos: ownPos,
                mustX: mustX,
                isX: isX,
                diffX: diffX,
                mustY: mustY,
                isY: isY,
                diffY: diffY
            });
        }
        this.translateY = this.translateY + diffY;
    };
    PopoverComponent.prototype.ngOnInit = function () {
        this.setTag();
        var tag = this.tag + ".ngOnInit()";
        if (this.debug)
            console.log(tag, 'this:', this);
    };
    PopoverComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.reposition(); });
        if (this.animations) {
            if (this.animations.enter) {
                this.enterAnimationFactory = this.builder.build(this.animations.enter);
            }
            if (this.animations.leave) {
                this.leaveAnimationFactory = this.builder.build(this.animations.leave);
            }
        }
    };
    PopoverComponent.prototype.ngOnChanges = function (changes) {
        if (this.debug) {
            var tag = this.tag + ".ngOnChanges()";
            console.log(tag, 'changes:', changes);
        }
        _super.prototype.ngOnChanges.call(this, changes);
    };
    PopoverComponent.prototype.open = function () {
        var _this = this;
        if (this.state === PopoverState.visible || this.state === PopoverState.opening) {
            return;
        }
        this.state = PopoverState.opening;
        this.willOpen.emit();
        // We have to wait one runloop before calling reposition(), so the element is rendered and the right bounds can be determined.
        // Also when opening the popover is hidden via the visibility-style. This avoids flashing up on the wrong position.
        setTimeout(function () {
            _this.reposition();
            if (_this.enterAnimationFactory && _this.me) {
                var player_1 = _this.enterAnimationFactory.create(_this.me.nativeElement);
                player_1.onDone(function () {
                    player_1.destroy();
                });
                player_1.play();
            }
            _this.state = PopoverState.visible;
            _this.cdRef.markForCheck();
        }, 0);
    };
    PopoverComponent.prototype.close = function () {
        var _this = this;
        if (this.state === PopoverState.hidden || this.state === PopoverState.closing) {
            return;
        }
        this.state = PopoverState.closing;
        this.willClose.emit();
        if (this.leaveAnimationFactory && this.me) {
            var player_2 = this.leaveAnimationFactory.create(this.me.nativeElement);
            player_2.onDone(function () {
                player_2.destroy();
                _this.state = PopoverState.hidden;
                _this.cdRef.markForCheck();
            });
            player_2.play();
        }
        else {
            this.state = PopoverState.hidden;
            this.cdRef.markForCheck();
        }
    };
    PopoverComponent.prototype.toggle = function () {
        if (this.visible) {
            this.close();
        }
        else {
            this.open();
        }
    };
    PopoverComponent.prototype.onWindowResize = function (ev) {
        this.reposition();
    };
    PopoverComponent.prototype.getAttachmentPosition = function () {
        return this.me.nativeElement.getBoundingClientRect();
    };
    PopoverComponent.Tag = 'PopoverComponent';
    __decorate([
        HostBinding('class.vclPopOver'),
        Input(),
        __metadata("design:type", Object)
    ], PopoverComponent.prototype, "enableStyling", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PopoverComponent.prototype, "debug", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PopoverComponent.prototype, "target", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PopoverComponent.prototype, "targetX", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PopoverComponent.prototype, "targetY", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PopoverComponent.prototype, "attachmentX", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PopoverComponent.prototype, "offsetAttachmentX", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PopoverComponent.prototype, "attachmentY", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PopoverComponent.prototype, "offsetAttachmentY", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PopoverComponent.prototype, "visible", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PopoverComponent.prototype, "willClose", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PopoverComponent.prototype, "willOpen", void 0);
    __decorate([
        HostBinding('class.vclLayoutHidden'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], PopoverComponent.prototype, "classHidden", null);
    __decorate([
        HostBinding('style.visibility'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], PopoverComponent.prototype, "styleVisibility", null);
    __decorate([
        HostBinding('style.transform'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], PopoverComponent.prototype, "transform", null);
    __decorate([
        HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PopoverComponent.prototype, "onWindowResize", null);
    PopoverComponent = PopoverComponent_1 = __decorate([
        Component({
            selector: 'vcl-popover',
            template: '<ng-content></ng-content>',
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[style.position]': '"absolute"'
            }
        }),
        __param(3, Optional()), __param(3, Inject(POPOVER_ANIMATIONS)),
        __metadata("design:paramtypes", [ElementRef,
            AnimationBuilder,
            ChangeDetectorRef, Object])
    ], PopoverComponent);
    return PopoverComponent;
    var PopoverComponent_1;
}(ObservableComponent));
export { PopoverComponent };
