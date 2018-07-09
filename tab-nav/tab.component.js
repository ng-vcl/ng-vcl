var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChild, ViewChild, Input, Directive, TemplateRef } from '@angular/core';
var TabLabelDirective = /** @class */ (function () {
    function TabLabelDirective() {
    }
    TabLabelDirective = __decorate([
        Directive({ selector: '[vcl-tab-label]' })
    ], TabLabelDirective);
    return TabLabelDirective;
}());
export { TabLabelDirective };
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.disabled = false;
        this.tabClass = '';
    }
    __decorate([
        ContentChild(TabLabelDirective, { read: TemplateRef }),
        __metadata("design:type", TabLabelDirective)
    ], TabComponent.prototype, "label", void 0);
    __decorate([
        ViewChild(TemplateRef),
        __metadata("design:type", TemplateRef)
    ], TabComponent.prototype, "content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "tabClass", void 0);
    TabComponent = __decorate([
        Component({
            selector: 'vcl-tab',
            template: '<ng-template><ng-content></ng-content></ng-template>'
        })
    ], TabComponent);
    return TabComponent;
}());
export { TabComponent };
