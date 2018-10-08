var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ViewChild } from '@angular/core';
import { AttachmentX, AttachmentY, PopoverComponent } from '@ng-vcl/ng-vcl';
import { HintService } from './hint.service';
import { HintConfig } from './types';
var TourComponent = /** @class */ (function () {
    function TourComponent(hint) {
        this.hint = hint;
        this.tag = TourComponent_1.Tag;
        this.debug = true;
        this.debugPopover = true;
        this.targetX = AttachmentX.Center;
        this.attachmentX = AttachmentX.Center;
        this.targetY = AttachmentY.Bottom;
        this.attachmentY = AttachmentY.Top;
        var tag = this.tag + ".constructor()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'hint.options:', hint.options);
    }
    TourComponent_1 = TourComponent;
    Object.defineProperty(TourComponent.prototype, "classes", {
        get: function () {
            return "vclTourContainer step" + this.order;
        },
        enumerable: true,
        configurable: true
    });
    TourComponent.prototype.ngOnInit = function () {
        // this.order = Number(typeof this.order === 'number' ? this.order : this.hint.options.defaultOrder);
        this.hint.register(this.target + "_" + Number(this.order || 0), this);
    };
    TourComponent.prototype.showStep = function () {
        this.hint.showingStep$.next(this);
        this.order = +this.order || this.hint.options.defaultOrder;
        var highlightedElement = this.popover.targetElement;
        if (highlightedElement) {
            highlightedElement.style.zIndex = HintConfig.Z_INDEX;
            if (this.hint.options.elementsDisabled) {
                this.disableClick(highlightedElement);
            }
            if (this.hint.options.applyRelative) {
                this.enableHighlight(highlightedElement);
            }
        }
        this.visible = true;
        this.hasNext = this.hint.hasNext();
        this.hasPrevious = this.hint.hasPrevious();
    };
    TourComponent.prototype.hideStep = function () {
        var highlightedElement = this.popover.targetElement;
        if (highlightedElement) {
            highlightedElement.style.zIndex = null;
            this.enableClick(highlightedElement);
            this.disableHighlight(highlightedElement);
        }
        this.visible = false;
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
    TourComponent.Tag = 'TourComponent';
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TourComponent.prototype, "debug", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TourComponent.prototype, "debugPopover", void 0);
    __decorate([
        ViewChild('popover'),
        __metadata("design:type", PopoverComponent)
    ], TourComponent.prototype, "popover", void 0);
    __decorate([
        HostBinding('class'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], TourComponent.prototype, "classes", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TourComponent.prototype, "order", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TourComponent.prototype, "target", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "targetX", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "attachmentX", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "targetY", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "attachmentY", void 0);
    TourComponent = TourComponent_1 = __decorate([
        Component({
            selector: HintConfig.HINT_TAG,
            template: "<vcl-popover #popover\r\n  [debug]=\"debugPopover\"\r\n  [visible]=\"visible\"\r\n  [target]=\"target\"\r\n  [targetX]=\"targetX\"\r\n  [attachmentX]=\"attachmentX\"\r\n  [targetY]=\"targetY\"\r\n  [attachmentY]=\"attachmentY\"\r\n  [style.z-index]=\"20\">\r\n\r\n  <div class=\"vclTourContainer\">\r\n\r\n    <div class=\"vclTourContainerHeader\" *ngIf=\"title\">\r\n      {{ title }}\r\n    </div>\r\n\r\n    <div class=\"vclTourContainerContent\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n\r\n    <div class=\"vclTourContainerFooter\">\r\n      \r\n      <button vcl-button *ngIf=\"hasPrevious\"\r\n        [ngClass]=\"hint.options?.buttonClass\"\r\n        [label]=\"hint.options?.previousLabel\"\r\n        [prepIcon]=\"hint.options?.previousIcon\"\r\n        (click)=\"previous()\">\r\n      </button>\r\n\r\n      <button vcl-button *ngIf=\"hasNext\"\r\n        [ngClass]=\"hint.options?.buttonClass\"\r\n        [label]=\"hint.options?.nextLabel\"\r\n        [appIcon]=\"hint.options?.nextIcon\"\r\n        (click)=\"next()\">\r\n      </button>\r\n\r\n      <button vcl-button\r\n        [ngClass]=\"hint.options?.buttonClass\"\r\n        [label]=\"hint.options?.exitLabel\"\r\n        [prepIcon]=\"hint.options?.exitIcon\"\r\n        (click)=\"exit()\">\r\n      </button>\r\n\r\n    </div>\r\n    \r\n  </div>\r\n\r\n</vcl-popover>",
            styles: [".vclTourContainer {\r\n    background-color: #fff;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    color: #000;\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\r\n    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\r\n  }\r\n  \r\n.vclTourContainer .vclTourContainerHeader {\r\n  padding: 10px;\r\n  border-bottom: 1px solid #ccc;\r\n  background-color: #ddd;\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\r\n  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\r\n}\r\n  \r\n.vclTourContainer .vclTourContainerContent {\r\n  padding: 10px;\r\n}\r\n\r\n.vclTourContainer .vclTourContainerFooter {\r\n  padding: 10px;\r\n}\r\n\r\n.vclTourContainer .vclButton:first {\r\n  margin-left: 0;\r\n}"]
        }),
        __metadata("design:paramtypes", [HintService])
    ], TourComponent);
    return TourComponent;
    var TourComponent_1;
}());
export { TourComponent };
