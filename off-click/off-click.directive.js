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
import { timer, fromEvent } from 'rxjs';
import { first, skipUntil } from 'rxjs/operators';
var OffClickDirective = /** @class */ (function () {
    function OffClickDirective(elem) {
        this.elem = elem;
        this.offClickDelay = 10;
        this.offClick = new EventEmitter();
    }
    OffClickDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof document !== 'undefined') {
            // Add a small delay, so any click that causes this directive to render does not trigger an off-click
            var delay$ = timer(this.offClickDelay).pipe(first());
            this.sub = fromEvent(document, 'click').pipe(skipUntil(delay$)).subscribe(function (ev) {
                var me = _this.elem.nativeElement;
                // Check that the target is not the off-clicks target element or any sub element
                var excludes = [
                    me
                ].concat((_this.offClickExcludes || []).map(function (e) { return e instanceof ElementRef ? e.nativeElement : e; }).filter(function (e) { return e instanceof Element; }));
                if (ev.target && excludes.every(function (e) { return e !== ev.target && !e.contains(ev.target); })) {
                    _this.offClick.emit();
                }
            });
        }
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        this.sub && this.sub.unsubscribe();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], OffClickDirective.prototype, "offClickDelay", void 0);
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
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], OffClickDirective);
    return OffClickDirective;
}());
export { OffClickDirective };
