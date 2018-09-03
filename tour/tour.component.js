var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { HintService } from './hint.service';
import { HintConfig, Placement } from './types';
var TourComponent = /** @class */ (function () {
    function TourComponent(hintService) {
        this.hintService = hintService;
    }
    TourComponent.prototype.ngOnInit = function () {
        this.hintService.register(this.selector + "_" + Number(this.order || 0), this);
    };
    TourComponent.prototype.showStep = function () {
        this.hintService.showingStep$.next(this);
        this.position = this.position || this.hintService.hintOptions.defaultPosition;
        this.order = +this.order || this.hintService.hintOptions.defaultOrder;
        var highlightedElement = document.getElementById(this.selector);
        if (highlightedElement) {
            highlightedElement.style.zIndex = HintConfig.Z_INDEX;
            if (this.hintService.hintOptions.elementsDisabled) {
                this.disableClick(highlightedElement);
            }
            if (this.hintService.hintOptions.applyRelative) {
                this.enableHighlight(highlightedElement);
            }
            switch (this.position) {
                case Placement.Top:
                    this.transformClass = 'transformX_50 transformY_100';
                    this.topPos = highlightedElement.offsetTop - this.hintService.hintOptions.defaultLayer;
                    this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth / 2;
                    break;
                case Placement.Bottom:
                    this.transformClass = 'transformX_50';
                    this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight + this.hintService.hintOptions.defaultLayer;
                    this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth / 2;
                    break;
                case Placement.Left:
                    this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight / 2;
                    this.leftPos = highlightedElement.offsetLeft - this.hintService.hintOptions.defaultLayer;
                    this.transformClass = 'transformY_50 transformX_100';
                    break;
                case Placement.Right:
                    this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight / 2;
                    this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth + this.hintService.hintOptions.defaultLayer;
                    this.transformClass = 'transformY_50';
                    break;
                default:
                    throw 'Invalid hint position: ' + this.position;
            }
        }
        else {
            this.topPos = 0;
            this.leftPos = 0;
        }
        this.showMe = true;
        this.hasNext = this.hintService.hasNext();
        this.hasPrevious = this.hintService.hasPrevious();
    };
    TourComponent.prototype.hideStep = function () {
        var highlightedElement = document.getElementById(this.selector);
        if (highlightedElement) {
            highlightedElement.style.zIndex = null;
            this.enableClick(highlightedElement);
            this.disableHighlight(highlightedElement);
        }
        this.showMe = false;
    };
    TourComponent.prototype.exit = function () {
        this.hintService.end();
    };
    TourComponent.prototype.next = function () {
        this.hideStep();
        this.hintService.showNext();
    };
    TourComponent.prototype.previous = function () {
        this.hideStep();
        this.hintService.showPrevious();
    };
    TourComponent.prototype.disableClick = function (element) {
        element.style.cursor = 'default';
        element.style.pointerEvents = 'none';
    };
    TourComponent.prototype.enableClick = function (element) {
        element.style.cursor = null;
        element.style.pointerEvents = null;
    };
    TourComponent.prototype.enableHighlight = function (element) {
        element.style.position = 'relative';
    };
    TourComponent.prototype.disableHighlight = function (element) {
        element.style.position = null;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "selector", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TourComponent.prototype, "order", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "position", void 0);
    TourComponent = __decorate([
        Component({
            selector: HintConfig.HINT_TAG,
            template: "<div class=\"vclTourHintWrapper {{transformClass}} step{{order}} {{position}}\"\r\n  *ngIf=\"showMe\" [ngStyle]=\"{'top': topPos+'px', 'left': leftPos+'px'}\" >\r\n    <div class=\"header\" *ngIf=\"title\">{{title}}</div>\r\n    <div class=\"content\"><ng-content></ng-content></div>\r\n    <div class=\"footer\">\r\n      <button type=\"button\" class=\"vclButton\" *ngIf=\"hasPrevious\" (click)=\"previous()\">\r\n        <div class=\"vclIcogram\">\r\n          <div class=\"vclIcon fa fa-chevron-left\" aria-hidden=\"true\" role=\"img\"></div>\r\n          <span class=\"vclText\">Previous</span>\r\n        </div>\r\n      </button>\r\n      <button type=\"button\" class=\"vclButton\" *ngIf=\"hasNext\" (click)=\"next()\">\r\n        <div class=\"vclIcogram\">\r\n          <div class=\"vclIcon fa fa-chevron-right\" aria-hidden=\"true\" role=\"img\"></div>\r\n          <span class=\"vclText\">Next</span>\r\n        </div>\r\n      </button>\r\n      <button type=\"button\" class=\"vclButton\" (click)=\"exit()\">\r\n        <div class=\"vclIcogram\">\r\n          <div class=\"vclIcon fa fa-close\" aria-hidden=\"true\" role=\"img\"></div>\r\n          <span class=\"vclText\">Exit</span>\r\n        </div>\r\n      </button>\r\n    </div>\r\n  </div>",
            styles: [".vclTourHintWrapper {\r\n    position: absolute !important;\r\n    background-color: #fff;\r\n    z-index: 999;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    color: #000;\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\r\n    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\r\n  }\r\n  \r\n.vclTourHintWrapper .header {\r\n  padding: 10px;\r\n  border-bottom: 1px solid #ccc;\r\n  background-color: #ddd;\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\r\n  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\r\n}\r\n  \r\n.vclTourHintWrapper .content {\r\n  padding: 10px;\r\n}\r\n\r\n.vclTourHintWrapper .footer {\r\n  padding: 10px;\r\n}\r\n\r\n.vclTourHintWrapper .vclButton:first {\r\n  margin-left: 0;\r\n}\r\n  \r\n.vclTourHintWrapper.transformX_50.transformY_100 {\r\n  -webkit-transform: translateX(-50%) translateY(-100%);\r\n  transform: translateX(-50%) translateY(-100%);\r\n}\r\n  \r\n.vclTourHintWrapper.transformX_50 {\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n}\r\n  \r\n.vclTourHintWrapper.transformY_50 {\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n  \r\n.vclTourHintWrapper.transformY_50.transformX_100 {\r\n  -webkit-transform: translateX(-100%) translateY(-50%);\r\n  transform: translateX(-100%) translateY(-50%);\r\n}\r\n  "]
        }),
        __metadata("design:paramtypes", [HintService])
    ], TourComponent);
    return TourComponent;
}());
export { TourComponent };
