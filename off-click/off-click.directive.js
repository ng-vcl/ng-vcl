var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EventEmitter, Output, Input, Directive, ElementRef } from '@angular/core';
import { timer, fromEvent, merge } from 'rxjs';
import { first, skipUntil, map, filter } from 'rxjs/operators';
var OffClickDirective = /** @class */ (function () {
    function OffClickDirective(elem) {
        this.elem = elem;
        this.offClickDelay = 10;
        this.offClickListen = true;
        this.offClick = new EventEmitter();
        this.subs = [];
    }
    OffClickDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof document !== 'undefined') {
            // Track mouse move on host element and store hovered inner elements
            var subTrack = merge(fromEvent(this.elem.nativeElement, 'mouseover').pipe(map(function (e) { return e.target || undefined; })), fromEvent(this.elem.nativeElement, 'mouseleave').pipe(map(function () { return undefined; }))).subscribe(function (target) { return _this.hoveredElement = target; });
            // Add a small delay, so any click that causes this directive to render does not trigger an off-click
            var subClick = fromEvent(document, 'click').pipe(filter(function () { return _this.offClickListen; }), skipUntil(timer(this.offClickDelay).pipe(first()))).subscribe(function (ev) {
                var popoverHostElement = _this.elem.nativeElement;
                // Check that the target is not the off-clicks target element or any sub element
                var checks = [
                    _this.hoveredElement,
                    popoverHostElement
                ].concat((_this.offClickExcludes || []).map(function (e) { return e instanceof ElementRef ? e.nativeElement : e; }).filter(function (e) { return e instanceof Element; })).filter(function (el) { return !!el; });
                var target = ev.target;
                if (target) {
                    var targetIsNotExcludedElementOrChildElement = checks.every(function (el) {
                        return !(el === target || el.contains(target));
                    });
                    if (targetIsNotExcludedElementOrChildElement) {
                        _this.offClick.emit();
                    }
                }
            });
            this.subs = [subTrack, subClick];
        }
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], OffClickDirective.prototype, "offClickDelay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], OffClickDirective.prototype, "offClickListen", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], OffClickDirective.prototype, "offClickExcludes", void 0);
    __decorate([
        Output('offClick'),
        __metadata("design:type", Object)
    ], OffClickDirective.prototype, "offClick", void 0);
    OffClickDirective = __decorate([
        Directive({
            selector: '[offClick]',
            exportAs: 'offClick'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], OffClickDirective);
    return OffClickDirective;
}());
export { OffClickDirective };
