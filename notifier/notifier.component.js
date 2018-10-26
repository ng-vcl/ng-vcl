var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
var NotifierComponent = /** @class */ (function () {
    function NotifierComponent() {
        this.notifiers = [];
    }
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], NotifierComponent.prototype, "notifiers", void 0);
    NotifierComponent = __decorate([
        Component({
            template: "<ng-container *ngFor=\"let notifier of notifiers\">\r\n  <vcl-notification (mouseenter)=\"notifier.mouseEnter()\"\r\n                    (mouseleave)=\"notifier.mouseLeave()\"\r\n                    button=\"fa:times\"\r\n                    (buttonClick)=\"notifier.close()\"\r\n                    [showButton]=\"notifier.showCloseButton\"\r\n                    [iconClass]=\"notifier.iconClass\"\r\n                    [styleClass]=\"notifier.layerClass\"\r\n                    [textColor]=\"notifier.textColor\"\r\n                    [backgroundColor]=\"notifier.backgroundColor\">\r\n  <vcl-notification-body>\r\n      <div *ngIf=\"notifier.text && !notifier.html && !notifier.opts.contentComponentDetails\">{{notifier.text}}</div>\r\n      <div *ngIf=\"notifier.text && notifier.html && !notifier.opts.contentComponentDetails\" [innerHtml]=\"notifier.text\"></div>\r\n      <vcl-notifier-content-component *ngIf=\"notifier.opts.contentComponentDetails\" [wormholeComponentDetails]=\"notifier.opts.contentComponentDetails\"></vcl-notifier-content-component>\r\n    </vcl-notification-body>\r\n  </vcl-notification>\r\n</ng-container>\r\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            animations: [
                trigger('notifierState', [
                    state('visible', style({ opacity: 0.91 })),
                    state('hovered', style({ opacity: 1.0 })),
                    transition(':enter', [
                        style({ opacity: 0 }),
                        animate('200ms ease-in')
                    ]),
                    transition(':leave', [
                        animate('200ms ease-out', style({ opacity: 0 }))
                    ]),
                    transition('visible <=> hovered', animate('300ms'))
                ]),
            ],
            host: {
                '[@notifierState]': 'true'
            },
            styles: ["\n     .vclLayerNotificationTopRight { left: auto; bottom: auto; top: 1em; right: 1em; }\n     .vclLayerNotificationTop { left: 0; bottom: auto; top: 1em; right: 0; }\n     .vclLayerNotificationTopLeft { left: 1em; bottom: auto; top: 1em; right: auto; }\n     .vclLayerNotificationBottomRight { left: auto; bottom: 1em; top: auto; right: 1em; }\n     .vclLayerNotificationBottom { left: 0; bottom: 1em; top: auto; right: 0; }\n     .vclLayerNotificationBottomLeft { left: 1em; bottom: 1em; top: auto; right: auto; }\n    "]
        })
    ], NotifierComponent);
    return NotifierComponent;
}());
export { NotifierComponent };
