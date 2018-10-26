var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild } from '@angular/core';
import { AttachmentX, AttachmentY, PopoverComponent } from '../popover/index';
import { TourService } from './tour.service';
export var VCLTourStepTag = 'vcl-tour-step';
var TourComponent = /** @class */ (function () {
    function TourComponent(tour) {
        this.tour = tour;
        this.debug = false;
        this.debugPopover = false;
        this.targetX = AttachmentX.Center;
        this.attachmentX = AttachmentX.Center;
        this.targetY = AttachmentY.Bottom;
        this.attachmentY = AttachmentY.Top;
        this.visible = false;
        this.hasNext = false;
        this.hasPrevious = false;
        var tag = this.tag + ".constructor()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'tour.options:', tour.options);
    }
    TourComponent_1 = TourComponent;
    TourComponent.prototype.ngOnInit = function () {
        this.tag = TourComponent_1.Tag + "." + this.target;
        var tag = this.tag + ".ngOnInit()";
        var debug = this.debug || false;
        this.tour.register(this);
    };
    TourComponent.prototype.show = function () {
        var tag = this.tag + ".show()";
        var debug = this.debug || false;
        var el = this.popover.targetElement;
        if (debug)
            console.log(tag, 'el:', el);
        if (el) {
            el.style.zIndex = "" + this.tour.options.zIndex;
            if (debug)
                console.log(tag, 'tour.options.elementsDisabled:', this.tour.options.elementsDisabled);
            if (this.tour.options.elementsDisabled) {
                this.disableClick(el);
            }
            if (debug)
                console.log(tag, 'tour.options.applyRelative:', this.tour.options.applyRelative);
            if (this.tour.options.applyRelative) {
                this.enableHighlight(el);
            }
        }
        this.visible = true;
        this.hasNext = this.tour.hasNext;
        this.hasPrevious = this.tour.hasPrevious;
        if (debug)
            console.log(tag, 'this:', this);
    };
    TourComponent.prototype.hide = function () {
        var tag = this.tag + ".hide()";
        var debug = this.debug || false;
        var highlightedElement = this.popover.targetElement;
        if (debug)
            console.log(tag, 'highlightedElement:', highlightedElement);
        if (highlightedElement) {
            highlightedElement.style.zIndex = null;
            this.enableClick(highlightedElement);
            this.disableHighlight(highlightedElement);
        }
        this.visible = false;
        if (debug)
            console.log(tag, 'this:', this);
    };
    TourComponent.prototype.previous = function () {
        var tag = this.tag + ".previous()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag);
        this.tour.showPrevious();
    };
    TourComponent.prototype.next = function () {
        var tag = this.tag + ".next()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag);
        this.tour.showNext();
    };
    TourComponent.prototype.exit = function () {
        var tag = this.tag + ".exit()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag);
        this.tour.end();
    };
    TourComponent.prototype.disableClick = function (element) {
        var tag = this.tag + ".disableClick()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'element:', element);
        element.style.cursor = 'default';
        element.style.pointerEvents = 'none';
    };
    TourComponent.prototype.enableClick = function (element) {
        var tag = this.tag + ".disableClick()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'element:', element);
        element.style.cursor = 'auto';
        element.style.pointerEvents = 'visiblePainted';
    };
    TourComponent.prototype.enableHighlight = function (element) {
        var tag = this.tag + ".disableClick()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'element:', element);
        element.setAttribute('position', element.style.position);
        element.style.position = 'relative';
    };
    TourComponent.prototype.disableHighlight = function (element) {
        var tag = this.tag + ".disableClick()";
        var debug = this.debug || false;
        if (debug)
            console.log(tag, 'element:', element);
        element.style.position = element.getAttribute('position');
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
        __metadata("design:type", Number)
    ], TourComponent.prototype, "offsetAttachmentX", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "targetY", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TourComponent.prototype, "attachmentY", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TourComponent.prototype, "offsetAttachmentY", void 0);
    TourComponent = TourComponent_1 = __decorate([
        Component({
            selector: VCLTourStepTag,
            template: "<vcl-popover #popover\r\n  [debug]=\"debugPopover\"\r\n  [visible]=\"visible\"\r\n  [target]=\"target\"\r\n  [targetX]=\"targetX\"\r\n  [attachmentX]=\"attachmentX\"\r\n  [offsetAttachmentX]=\"offsetAttachmentX\"\r\n  [targetY]=\"targetY\"\r\n  [attachmentY]=\"attachmentY\"\r\n  [offsetAttachmentY]=\"offsetAttachmentY\"\r\n  [style.z-index]=\"tour.options?.zIndex\">\r\n\r\n  <div class=\"vclTourContainer\">\r\n\r\n    <div class=\"vclTourContainerHeader\" *ngIf=\"title\">\r\n      {{ title }}\r\n    </div>\r\n\r\n    <div class=\"vclTourContainerContent\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n\r\n    <div class=\"vclTourContainerFooter\">\r\n      \r\n      <button vcl-button *ngIf=\"hasPrevious\"\r\n        [ngClass]=\"tour.options?.buttonClass\"\r\n        [label]=\"tour.options?.previousLabel\"\r\n        [prepIcon]=\"tour.options?.previousIcon\"\r\n        (click)=\"previous()\">\r\n      </button>\r\n\r\n      <button vcl-button *ngIf=\"hasNext\"\r\n        [ngClass]=\"tour.options?.buttonClass\"\r\n        [label]=\"tour.options?.nextLabel\"\r\n        [appIcon]=\"tour.options?.nextIcon\"\r\n        (click)=\"next()\">\r\n      </button>\r\n\r\n      <button vcl-button\r\n        [ngClass]=\"tour.options?.buttonClass\"\r\n        [label]=\"tour.options?.exitLabel\"\r\n        [prepIcon]=\"tour.options?.exitIcon\"\r\n        (click)=\"exit()\">\r\n      </button>\r\n\r\n    </div>\r\n    \r\n  </div>\r\n\r\n</vcl-popover>",
            styles: [".vclTourContainer {\r\n    background-color: #fff;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    color: #000;\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\r\n    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\r\n  }\r\n  \r\n.vclTourContainer .vclTourContainerHeader {\r\n  padding: 10px;\r\n  border-bottom: 1px solid #ccc;\r\n  background-color: #ddd;\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\r\n  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\r\n}\r\n  \r\n.vclTourContainer .vclTourContainerContent {\r\n  padding: 10px;\r\n}\r\n\r\n.vclTourContainer .vclTourContainerFooter {\r\n  padding: 10px;\r\n}\r\n\r\n.vclTourContainer .vclButton:first {\r\n  margin-left: 0;\r\n}"]
        }),
        __metadata("design:paramtypes", [TourService])
    ], TourComponent);
    return TourComponent;
    var TourComponent_1;
}());
export { TourComponent };
