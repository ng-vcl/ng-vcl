var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var TourOptions = /** @class */ (function () {
    function TourOptions() {
        this.debug = false;
        this.debugTour = false;
        this.debugPopover = false;
        this.useOrder = false;
        this.elementsDisabled = true;
        this.applyRelative = true;
        this.dismissOnOverlay = false;
        this.zIndex = 21;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.exitLabel = 'Exit';
        this.previousIcon = 'fa fa-chevron-left';
        this.nextIcon = 'fa fa-chevron-right';
        this.exitIcon = 'fa fa-close';
        this.buttonClass = '';
        this.offsetAttachmentX = 0;
        this.offsetAttachmentY = 0;
    }
    return TourOptions;
}());
export { TourOptions };
var TourService = /** @class */ (function () {
    function TourService() {
        this.tag = TourService_1.Tag;
        this._tourComponents = [];
        this.tourComponents = [];
        this.index = 0;
        this.end$ = new Subject();
        this.tourComponent$ = new Subject();
        this._showOverlay = false;
    }
    TourService_1 = TourService;
    Object.defineProperty(TourService.prototype, "showOverlay", {
        get: function () {
            return this._showOverlay;
        },
        set: function (showOverlay) {
            this._showOverlay = showOverlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TourService.prototype, "hasPrevious", {
        get: function () {
            var tag = this.tag + ".hasPrevious()";
            var debug = this.debug || false;
            var hasPrevious = this.index > 0;
            if (debug)
                console.log(tag, 'hasPrevious:', hasPrevious);
            return hasPrevious;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TourService.prototype, "hasNext", {
        get: function () {
            var tag = this.tag + ".hasNext()";
            var debug = this.debug || false;
            var hasNext = this.index < this.tourComponents.length - 1;
            if (debug)
                console.log(tag, 'hasNext:', hasNext);
            return hasNext;
        },
        enumerable: true,
        configurable: true
    });
    TourService.prototype.register = function (tourComponent) {
        var tag = this.tag + ".register()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'tourComponent:', tourComponent);
        this._tourComponents = this._tourComponents.includes(tourComponent) ?
            this._tourComponents : this._tourComponents.concat([tourComponent]);
        if (debug)
            console.log(tag, 'this._tourComponents:', this._tourComponents);
    };
    TourService.prototype.initialize = function (options) {
        if (options === void 0) { options = new TourOptions(); }
        var tag = this.tag + ".initialize()";
        this.options = Object.assign(new TourOptions(), options);
        this.debug = this.options.debug || false;
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'options:', options);
        if (debug)
            console.log(tag, 'this.options:', this.options);
    };
    TourService.prototype.start = function (index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        var tag = this.tag + ".start()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'index:', index);
        this.tourComponents = this.options.useOrder ?
            this._tourComponents.slice().sort(function (s1, s2) { return s1.order - s2.order; }) :
            this._tourComponents;
        if (debug)
            console.log(tag, 'this.tourComponents:', this.tourComponents);
        this.tourComponents.forEach(function (tourComponent) {
            tourComponent.debug = tourComponent.debug || _this.options.debugTour;
            tourComponent.debugPopover = tourComponent.debugPopover || _this.options.debugPopover;
            tourComponent.offsetAttachmentX = isNumber(tourComponent.offsetAttachmentX) ?
                tourComponent.offsetAttachmentX : _this.options.offsetAttachmentX;
            tourComponent.offsetAttachmentY = isNumber(tourComponent.offsetAttachmentY) ?
                tourComponent.offsetAttachmentY : _this.options.offsetAttachmentY;
        });
        this.show(index);
    };
    TourService.prototype.show = function (index) {
        var tag = this.tag + ".show()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'index:', index);
        this.tourComponent && this.tourComponent.hide();
        var tourComponent = this.tourComponents[index];
        if (debug)
            console.log(tag, 'tourComponent:', tourComponent);
        if (!tourComponent) {
            this.tourComponent = null;
            this.index = 0;
            return;
        }
        this.tourComponent = tourComponent;
        this.index = index;
        this.showOverlay = true;
        tourComponent.show();
        this.tourComponent$.next(this.tourComponent);
    };
    TourService.prototype.showPrevious = function () {
        var tag = this.tag + ".showPrevious()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'hasPrevious:', this.hasPrevious);
        if (!this.hasPrevious)
            return this.end();
        this.show(this.index - 1);
    };
    TourService.prototype.showNext = function () {
        var tag = this.tag + ".showNext()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'hasNext:', this.hasNext);
        if (!this.hasNext)
            return this.end();
        this.show(this.index + 1);
    };
    TourService.prototype.end = function () {
        var tag = this.tag + ".end()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag);
        this.tourComponent && this.tourComponent.hide();
        this.showOverlay = false;
        this.index = 0;
        this.end$.next(true);
    };
    TourService.prototype.onOverlayClick = function () {
        var tag = this.tag + ".onOverlayClick()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'this.options.dismissOnOverlay:', this.options.dismissOnOverlay);
        if (this.options.dismissOnOverlay)
            this.showNext();
    };
    TourService.Tag = 'TourService';
    TourService = TourService_1 = __decorate([
        Injectable()
    ], TourService);
    return TourService;
    var TourService_1;
}());
export { TourService };
var isNumber = function (v) { return !isNaN(Number(v)) && isFinite(v); };
var ɵ0 = isNumber;
export { ɵ0 };
