var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';
var FormControlLabelComponent = /** @class */ (function () {
    function FormControlLabelComponent() {
        this.disabled = false;
        this.requiredIndicatorCharacter = '•';
        // Whether an indicator that an input in to the labeled control is required
        this.required = false;
    }
    Object.defineProperty(FormControlLabelComponent.prototype, "vclFormControlLabelWrapping", {
        get: function () {
            if (typeof this.wrapping === 'boolean') {
                return this.wrapping;
            }
            else {
                // Not wrapping if "for" is defined
                if (this.for || !this.content || !this.content.nativeElement) {
                    return false;
                }
                // Wrapping if any ng-content is defined
                return hasContent(this.content.nativeElement);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ViewChild('content'),
        __metadata("design:type", ElementRef)
    ], FormControlLabelComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        HostBinding('class.vclDisabled'),
        __metadata("design:type", Object)
    ], FormControlLabelComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FormControlLabelComponent.prototype, "requiredIndicatorCharacter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormControlLabelComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FormControlLabelComponent.prototype, "subLabel", void 0);
    __decorate([
        HostBinding('attr.for'),
        Input(),
        __metadata("design:type", Object)
    ], FormControlLabelComponent.prototype, "for", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], FormControlLabelComponent.prototype, "wrapping", void 0);
    __decorate([
        HostBinding('class.vclFormControlLabelWrapping'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FormControlLabelComponent.prototype, "vclFormControlLabelWrapping", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], FormControlLabelComponent.prototype, "required", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], FormControlLabelComponent.prototype, "requiredIndLabel", void 0);
    FormControlLabelComponent = __decorate([
        Component({
            selector: 'label[vcl-form-control-label]',
            template: "{{label}}\n<em *ngIf=\"required\" class=\"vclRequiredIndicator\" aria-hidden=\"true\" [attr.aria-label]=\"requiredIndLabel\">\n  {{requiredIndicatorCharacter}}\n</em>\n<span *ngIf=\"subLabel\" class=\"vclFormControlSubLabel\">{{subLabel}}</span>\n<div #content><ng-content></ng-content></div>\n",
            host: {
                '[class.vclFormControlLabel]': 'true',
            },
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FormControlLabelComponent);
    return FormControlLabelComponent;
}());
export { FormControlLabelComponent };
function hasContent(element) {
    var nodes = Array.from(element.childNodes);
    return nodes.some(function (node) {
        // Ignore empty text
        if (node.nodeType === 3 && node.textContent && node.textContent.trim().length === 0) {
            return false;
        }
        // Ignore comments
        if (node.nodeType === 8) {
            return false;
        }
        return true;
    });
}
