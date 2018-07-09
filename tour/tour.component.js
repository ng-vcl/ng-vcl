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
            template: "<div class=\"vclTourHintWrapper {{transformClass}} step{{order}} {{position}}\"\n  *ngIf=\"showMe\" [ngStyle]=\"{'top': topPos+'px', 'left': leftPos+'px'}\" >\n    <div class=\"header\" *ngIf=\"title\">{{title}}</div>\n    <div class=\"content\"><ng-content></ng-content></div>\n    <div class=\"footer\">\n      <button type=\"button\" class=\"vclButton\" *ngIf=\"hasPrevious\" (click)=\"previous()\">\n        <div class=\"vclIcogram\">\n          <div class=\"vclIcon fa fa-chevron-left\" aria-hidden=\"true\" role=\"img\"></div>\n          <span class=\"vclText\">Previous</span>\n        </div>\n      </button>\n      <button type=\"button\" class=\"vclButton\" *ngIf=\"hasNext\" (click)=\"next()\">\n        <div class=\"vclIcogram\">\n          <div class=\"vclIcon fa fa-chevron-right\" aria-hidden=\"true\" role=\"img\"></div>\n          <span class=\"vclText\">Next</span>\n        </div>\n      </button>\n      <button type=\"button\" class=\"vclButton\" (click)=\"exit()\">\n        <div class=\"vclIcogram\">\n          <div class=\"vclIcon fa fa-close\" aria-hidden=\"true\" role=\"img\"></div>\n          <span class=\"vclText\">Exit</span>\n        </div>\n      </button>\n    </div>\n  </div>",
            styles: [".vclTourHintWrapper {\n    position: absolute !important;\n    background-color: #fff;\n    z-index: 999;\n    text-align: center;\n    font-size: 14px;\n    color: #000;\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n  }\n  \n.vclTourHintWrapper .header {\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  background-color: #ddd;\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n}\n  \n.vclTourHintWrapper .content {\n  padding: 10px;\n}\n\n.vclTourHintWrapper .footer {\n  padding: 10px;\n}\n\n.vclTourHintWrapper .vclButton:first {\n  margin-left: 0;\n}\n  \n.vclTourHintWrapper.transformX_50.transformY_100 {\n  -webkit-transform: translateX(-50%) translateY(-100%);\n  transform: translateX(-50%) translateY(-100%);\n}\n  \n.vclTourHintWrapper.transformX_50 {\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n  \n.vclTourHintWrapper.transformY_50 {\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n  \n.vclTourHintWrapper.transformY_50.transformX_100 {\n  -webkit-transform: translateX(-100%) translateY(-50%);\n  transform: translateX(-100%) translateY(-50%);\n}\n  "]
        }),
        __metadata("design:paramtypes", [HintService])
    ], TourComponent);
    return TourComponent;
}());
export { TourComponent };
