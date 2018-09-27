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
    function TourComponent(hint) {
        this.hint = hint;
    }
    TourComponent.prototype.ngOnInit = function () {
        this.hint.register(this.selector + "_" + Number(this.order || 0), this);
    };
    TourComponent.prototype.showStep = function () {
        this.hint.showingStep$.next(this);
        this.position = this.position || this.hint.options.defaultPosition;
        this.order = +this.order || this.hint.options.defaultOrder;
        var highlightedElement = document.getElementById(this.selector);
        if (highlightedElement) {
            highlightedElement.style.zIndex = HintConfig.Z_INDEX;
            if (this.hint.options.elementsDisabled) {
                this.disableClick(highlightedElement);
            }
            if (this.hint.options.applyRelative) {
                this.enableHighlight(highlightedElement);
            }
            switch (this.position) {
                case Placement.Top:
                    this.transformClass = 'transformX_50 transformY_100';
                    this.topPos = highlightedElement.offsetTop - this.hint.options.defaultLayer;
                    this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth / 2;
                    break;
                case Placement.Bottom:
                    this.transformClass = 'transformX_50';
                    this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight + this.hint.options.defaultLayer;
                    this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth / 2;
                    break;
                case Placement.Left:
                    this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight / 2;
                    this.leftPos = highlightedElement.offsetLeft - this.hint.options.defaultLayer;
                    this.transformClass = 'transformY_50 transformX_100';
                    break;
                case Placement.Right:
                    this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight / 2;
                    this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth + this.hint.options.defaultLayer;
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
        this.hasNext = this.hint.hasNext();
        this.hasPrevious = this.hint.hasPrevious();
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
        this.hint.end();
    };
    TourComponent.prototype.next = function () {
        this.hideStep();
        this.hint.showNext();
    };
    TourComponent.prototype.previous = function () {
        this.hideStep();
        this.hint.showPrevious();
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
            template: "<div *ngIf=\"showMe\"\n  class=\"vclTourContainer {{ transformClass }} step{{ order }} {{ position }}\"\n  [ngStyle]=\"{'top': topPos+'px', 'left': leftPos+'px'}\" >\n\n    <div class=\"vclTourContainerHeader\" *ngIf=\"title\">\n      {{ title }}\n    </div>\n\n    <div class=\"vclTourContainerContent\">\n      <ng-content></ng-content>\n    </div>\n\n    <div class=\"vclTourContainerFooter\">\n      \n      <button vcl-button *ngIf=\"hasPrevious\"\n        [label]=\"hint.options.previousLabel\"\n        [prepIcon]=\"hint.options.previousIcon\"\n        (click)=\"previous()\">\n      </button>\n\n      <button vcl-button *ngIf=\"hasNext\"\n        [label]=\"hint.options.nextLabel\"\n        [prepIcon]=\"hint.options.nextIcon\"\n        (click)=\"next()\">\n      </button>\n\n      <button vcl-button\n        [label]=\"hint.options.exitLabel\"\n        [prepIcon]=\"hint.options.exitIcon\"\n        (click)=\"exit()\">\n      </button>\n\n    </div>\n  </div>",
            styles: [".vclTourContainer {\n    position: absolute !important;\n    background-color: #fff;\n    z-index: 999;\n    text-align: center;\n    font-size: 14px;\n    color: #000;\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n  }\n  \n.vclTourContainer .vclTourContainerHeader {\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  background-color: #ddd;\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n}\n  \n.vclTourContainer .vclTourContainerContent {\n  padding: 10px;\n}\n\n.vclTourContainer .vclTourContainerFooter {\n  padding: 10px;\n}\n\n.vclTourContainer .vclButton:first {\n  margin-left: 0;\n}\n  \n.vclTourContainer.transformX_50.transformY_100 {\n  -webkit-transform: translateX(-50%) translateY(-100%);\n  transform: translateX(-50%) translateY(-100%);\n}\n  \n.vclTourContainer.transformX_50 {\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n  \n.vclTourContainer.transformY_50 {\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n  \n.vclTourContainer.transformY_50.transformX_100 {\n  -webkit-transform: translateX(-100%) translateY(-50%);\n  transform: translateX(-100%) translateY(-50%);\n}\n  "]
        }),
        __metadata("design:paramtypes", [HintService])
    ], TourComponent);
    return TourComponent;
}());
export { TourComponent };
