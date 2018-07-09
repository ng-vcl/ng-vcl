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
import { Directive, HostListener, Input, ElementRef, ComponentFactoryResolver, ViewContainerRef, Inject } from '@angular/core';
import { TooltipComponent, Placement } from './tooltip.component';
import { DOCUMENT } from '@angular/platform-browser';
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(element, resolver, viewContainerRef, document) {
        this.element = element;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this.content = '';
    }
    TooltipDirective.prototype.ngOnChanges = function (changes) {
        if (this.tooltip) {
            if (changes.content) {
                this.tooltip.instance.content = this.content;
            }
            else if (changes.position) {
                this.tooltip.instance.placement = this.position;
            }
        }
    };
    TooltipDirective.prototype.onMouseEnter = function () {
        var factory = this.resolver.resolveComponentFactory(TooltipComponent);
        this.tooltip = this.viewContainerRef.createComponent(factory);
        this.tooltip.instance.content = this.content;
        this.tooltip.instance.placement = this.position;
        this.tooltip.instance.hostElement = this.element.nativeElement;
        this.tooltip.instance.showOnInit = true;
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        if (this.tooltip) {
            this.tooltip.destroy();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "position", void 0);
    __decorate([
        HostListener('mouseenter'),
        HostListener('focusin'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseEnter", null);
    __decorate([
        HostListener('focusout'),
        HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "ngOnDestroy", null);
    TooltipDirective = __decorate([
        Directive({ selector: '[vcl-tooltip]' }),
        __param(3, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [ElementRef,
            ComponentFactoryResolver,
            ViewContainerRef, Object])
    ], TooltipDirective);
    return TooltipDirective;
}());
export { TooltipDirective };
