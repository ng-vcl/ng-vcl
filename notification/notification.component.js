var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { FlexAlign, TextAlign, IconType, notificationTypeFromString, notificationIconFromType, notificationStyleClassFromType } from './types';
import { NotificationBodyComponent } from './notification-body.component';
import { NotificationFooterComponent } from './notification-footer.component';
import { NotificationHeaderComponent } from './notification-header.component';
import { Observable } from 'rxjs';
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.nType = 'default';
        this.icon = '';
        this.iconClass = '';
        this.iconImage = '';
        this.iconSide = 'left';
        this.drawIcon = true;
        this.header = '';
        this.footer = '';
        this.button = '';
        this.showButton = true;
        this.verticalBody = false;
        this.styleClass = undefined;
        this.headerAlign = 'left';
        this.bodyAlign = 'center';
        this.footerAlign = 'left';
        this.textColor = '';
        this.backgroundColor = '';
        this.buttonClickEvent = new EventEmitter();
    }
    Object.defineProperty(NotificationComponent.prototype, "buttonClick", {
        get: function () {
            return this.buttonClickEvent.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "eType", {
        get: function () {
            return notificationTypeFromString(this.nType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "notificationStyleClass", {
        get: function () {
            if (this.styleClass) {
                return this.styleClass;
            }
            return notificationStyleClassFromType(this.eType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "notificationStyles", {
        get: function () {
            return {
                color: this.textColor,
                'background-color': this.backgroundColor
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "eIconClass", {
        get: function () {
            if (this.icon) {
                return 'fa ' + this.icon;
            }
            else if (this.iconClass) {
                return this.iconClass;
            }
            return 'fa ' + notificationIconFromType(this.eType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "iconType", {
        get: function () {
            if (this.iconImage) {
                return IconType.Image;
            }
            else if (this.iconClass) {
                return IconType.Custom;
            }
            return IconType.FA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "nested", {
        get: function () {
            return this.headerComponent != null || this.bodyComponent != null || this.footerComponent != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "headerStyle", {
        get: function () {
            if (this.nested) {
                return {
                    padding: 0,
                    'flex-flow': 'column',
                    'align-items': (this.headerComponent != null ? this.headerComponent.alignItems : 'flex-start')
                };
            }
            return {
                'text-align': TextAlign[this.headerAlign]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "bodyStyle", {
        get: function () {
            if (this.nested) {
                return {
                    padding: 0,
                    'flex-flow': 'column',
                    'flex-direction': 'row',
                    'align-items': (this.bodyComponent != null ? this.bodyComponent.alignItems : 'flex-start')
                };
            }
            return {
                'flex-flow': this.verticalBody ? 'column' : '',
                'align-items': FlexAlign[this.bodyAlign],
                'text-align': this.verticalBody ? TextAlign[this.bodyAlign] : ''
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "footerStyle", {
        get: function () {
            if (this.nested) {
                return {
                    padding: 0,
                    'flex-flow': 'column',
                    'align-items': (this.footerComponent != null ? this.footerComponent.alignItems : 'flex-start')
                };
            }
            return {
                display: 'block',
                'text-align': TextAlign[this.footerAlign],
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationComponent.prototype, "bodyIconStyle", {
        get: function () {
            if (this.verticalBody) {
                return {
                    padding: '1em',
                };
            }
            if (this.iconSide == 'right') {
                return {
                    order: 1,
                    'padding-right': '1em',
                    'padding-left': '0.3em'
                };
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    NotificationComponent.prototype.onClick = function () {
        this.buttonClickEvent.emit(null);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "nType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "iconClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "iconImage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "iconSide", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NotificationComponent.prototype, "drawIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "header", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "footer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "button", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NotificationComponent.prototype, "showButton", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NotificationComponent.prototype, "verticalBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "styleClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "headerAlign", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "bodyAlign", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "footerAlign", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "textColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NotificationComponent.prototype, "backgroundColor", void 0);
    __decorate([
        ContentChild(NotificationHeaderComponent),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "headerComponent", void 0);
    __decorate([
        ContentChild(NotificationBodyComponent),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "bodyComponent", void 0);
    __decorate([
        ContentChild(NotificationFooterComponent),
        __metadata("design:type", Object)
    ], NotificationComponent.prototype, "footerComponent", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Observable),
        __metadata("design:paramtypes", [])
    ], NotificationComponent.prototype, "buttonClick", null);
    NotificationComponent = __decorate([
        Component({
            selector: 'vcl-notification',
            template: "<div #notification class=\"vclNotification\" [ngClass]=\"notificationStyleClass\" [ngStyle]=\"notificationStyles\">\r\n\r\n  <div class=\"vclNotificationHeader vclLayoutHorizontal vclLayoutCenter\" *ngIf=\"header || (nested && headerComponent != null)\" [ngStyle]=\"headerStyle\">\r\n    <div class=\"vclLayoutFlex\" *ngIf=\"!nested\">{{ header }}</div>\r\n    <button vcl-button class=\"vclTransparent\" *ngIf=\"(button && showButton) && !nested\" (click)=\"onClick()\" [icon]=\"button\"></button>\r\n\r\n    <ng-content *ngIf=\"nested && headerComponent != null\" select=\"vcl-notification-header\"></ng-content>\r\n  </div>\r\n\r\n  <div [ngClass]=\"{'vclLayoutHorizontal': !verticalBody, 'vlcLayoutVertical': verticalBody}\" [ngStyle]=\"bodyStyle\">\r\n    <div class=\"vclNotificationIconContainer\" *ngIf=\"drawIcon\" [ngStyle]=\"bodyIconStyle\">\r\n      <span class=\"vclIcon vclNotificationIcon {{ eIconClass }}\" *ngIf=\"iconType == 'fa' || iconType == 'custom'\"></span>\r\n      <img class=\"vclIcon vclNotificationIcon\" [src]=\"iconImage\" *ngIf=\"iconType == 'image'\">\r\n    </div>\r\n\r\n    <div class=\"vclNotificationContent vclLayoutFlex\">\r\n      <ng-content *ngIf=\"!nested\"></ng-content>\r\n\r\n      <ng-content *ngIf=\"nested && bodyComponent != null\" select=\"vcl-notification-body\"></ng-content>\r\n    </div>\r\n\r\n    <button vcl-button class=\"vclTransparent vclLayoutSelfStart\" *ngIf=\"(button && showButton) && !header\" (click)=\"onClick()\" [icon]=\"button\"></button>\r\n  </div>\r\n\r\n  <div class=\"vclNotificationFooter vclLayoutHorizontal vclLayoutCenter\" [ngStyle]=\"footerStyle\" *ngIf=\"footer || (nested && footerComponent != null)\">\r\n    <ng-container *ngIf=\"footer && !nested\">{{ footer }}</ng-container>\r\n    <ng-content *ngIf=\"nested && footerComponent != null\" select=\"vcl-notification-footer\"></ng-content>\r\n  </div>\r\n\r\n</div>\r\n"
        })
    ], NotificationComponent);
    return NotificationComponent;
}());
export { NotificationComponent };
