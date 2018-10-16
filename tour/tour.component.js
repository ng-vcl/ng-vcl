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
import { AttachmentX, AttachmentY, PopoverComponent } from '@ng-vcl/ng-vcl';
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
            template: "<vcl-popover #popover\n  [debug]=\"debugPopover\"\n  [visible]=\"visible\"\n  [target]=\"target\"\n  [targetX]=\"targetX\"\n  [attachmentX]=\"attachmentX\"\n  [offsetAttachmentX]=\"offsetAttachmentX\"\n  [targetY]=\"targetY\"\n  [attachmentY]=\"attachmentY\"\n  [offsetAttachmentY]=\"offsetAttachmentY\"\n  [style.z-index]=\"tour.options?.zIndex\">\n\n  <div class=\"vclTourContainer\">\n\n    <div class=\"vclTourContainerHeader\" *ngIf=\"title\">\n      {{ title }}\n    </div>\n\n    <div class=\"vclTourContainerContent\">\n      <ng-content></ng-content>\n    </div>\n\n    <div class=\"vclTourContainerFooter\">\n      \n      <button vcl-button *ngIf=\"hasPrevious\"\n        [ngClass]=\"tour.options?.buttonClass\"\n        [label]=\"tour.options?.previousLabel\"\n        [prepIcon]=\"tour.options?.previousIcon\"\n        (click)=\"previous()\">\n      </button>\n\n      <button vcl-button *ngIf=\"hasNext\"\n        [ngClass]=\"tour.options?.buttonClass\"\n        [label]=\"tour.options?.nextLabel\"\n        [appIcon]=\"tour.options?.nextIcon\"\n        (click)=\"next()\">\n      </button>\n\n      <button vcl-button\n        [ngClass]=\"tour.options?.buttonClass\"\n        [label]=\"tour.options?.exitLabel\"\n        [prepIcon]=\"tour.options?.exitIcon\"\n        (click)=\"exit()\">\n      </button>\n\n    </div>\n    \n  </div>\n\n</vcl-popover>",
            styles: [".vclTourContainer {\n    background-color: #fff;\n    text-align: center;\n    font-size: 14px;\n    color: #000;\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n  }\n  \n.vclTourContainer .vclTourContainerHeader {\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n  background-color: #ddd;\n  border-radius: 5px;\n  -webkit-box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, .5);\n}\n  \n.vclTourContainer .vclTourContainerContent {\n  padding: 10px;\n}\n\n.vclTourContainer .vclTourContainerFooter {\n  padding: 10px;\n}\n\n.vclTourContainer .vclButton:first {\n  margin-left: 0;\n}"]
        }),
        __metadata("design:paramtypes", [TourService])
    ], TourComponent);
    return TourComponent;
    var TourComponent_1;
}());
export { TourComponent };
