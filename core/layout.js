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
import { Directive, Input, Optional, SkipSelf, NgModule, Inject, Renderer2, ElementRef } from '@angular/core';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';
var LayoutDirective = /** @class */ (function (_super) {
    __extends(LayoutDirective, _super);
    function LayoutDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout$ = _this.observeChangeValue('layout');
        return _this;
    }
    __decorate([
        Input('vclLayout'),
        __metadata("design:type", Object)
    ], LayoutDirective.prototype, "layout", void 0);
    LayoutDirective = __decorate([
        Directive({
            selector: '[vclLayout]',
        })
    ], LayoutDirective);
    return LayoutDirective;
}(ObservableComponent));
export { LayoutDirective };
/**
 * The vclLayoutTarget directive allows to set class injection points on elements in the component's template.
 * Developer can inject style classes into these elements using the vclLayout directive on the component.
 */
var LayoutTargetDirective = /** @class */ (function (_super) {
    __extends(LayoutTargetDirective, _super);
    function LayoutTargetDirective(layoutHost, renderer, elRef) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.elRef = elRef;
        _this.name$ = _this.observeChangeValue('name');
        _this.classes = [];
        if (layoutHost) {
            // Whenever the name or the layout property on the vclLayout directive changes, update the classes
            _this.sub = combineLatest(_this.name$, layoutHost.layout$).subscribe(function (_a) {
                var name = _a[0], layout = _a[1];
                // Remove any of previously added classes
                _this.classes.forEach(function (name) { return _this.renderer.removeClass(_this.elRef.nativeElement, name); });
                _this.classes = [];
                if (name && layout && typeof layout[name] === 'string') {
                    layout[name].split(' ').forEach(function (name) {
                        // Only add classes that are not present on the element
                        if (!_this.elRef.nativeElement.classList.contains(name)) {
                            // Add the class to the element
                            _this.renderer.addClass(_this.elRef.nativeElement, name);
                            // Remember them so they can be removed on a change
                            _this.classes = _this.classes.concat([name]);
                        }
                    });
                }
            });
        }
        return _this;
    }
    LayoutTargetDirective.prototype.ngOnDestroy = function () {
        this.sub && this.sub.unsubscribe();
        _super.prototype.ngOnDestroy.call(this);
    };
    __decorate([
        Input('vclLayoutTarget'),
        __metadata("design:type", String)
    ], LayoutTargetDirective.prototype, "name", void 0);
    LayoutTargetDirective = __decorate([
        Directive({
            selector: '[vclLayoutTarget]',
        }),
        __param(0, Optional()), __param(0, SkipSelf()), __param(0, Inject(LayoutDirective)),
        __metadata("design:paramtypes", [Object, Renderer2,
            ElementRef])
    ], LayoutTargetDirective);
    return LayoutTargetDirective;
}(ObservableComponent));
export { LayoutTargetDirective };
var VCLLayoutModule = /** @class */ (function () {
    function VCLLayoutModule() {
    }
    VCLLayoutModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [LayoutTargetDirective, LayoutDirective],
            exports: [LayoutTargetDirective, LayoutDirective, CommonModule],
            providers: [],
        })
    ], VCLLayoutModule);
    return VCLLayoutModule;
}());
export { VCLLayoutModule };
