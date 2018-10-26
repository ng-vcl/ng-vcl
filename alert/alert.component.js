var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, HostListener, Input, ElementRef } from '@angular/core';
import { from } from 'rxjs';
import { LayerRef, LayerService } from './../layer/index';
import { AlertError, AlertType, AlertAlignment, TYPE_CLASS_MAP, TEXT_ALIGNMENT_CLASS_MAP, BUTTON_ALIGNMENT_CLASS_MAP } from './types';
export function dismiss(layer, err) {
    if (err instanceof Error) {
        layer.closeWithError(err);
    }
    else {
        layer.closeWithError(new AlertError(err));
    }
}
var AlertComponent = /** @class */ (function () {
    function AlertComponent(elementRef, alertLayer, layerService, cdRef) {
        this.elementRef = elementRef;
        this.alertLayer = alertLayer;
        this.layerService = layerService;
        this.cdRef = cdRef;
        this.alert = {};
        this.alertLayer = alertLayer;
    }
    AlertComponent.prototype.onKeyUp = function (ev) {
        // Check if the top layer is the alert layer
        if (this.layerService.getTopLayer() === this.alertLayer) {
            if (ev.key === 'Escape' && this.alert.escClose) {
                dismiss(this.alertLayer, 'esc');
            }
            else if (ev.key === 'Enter') {
                this.confirm();
            }
        }
    };
    Object.defineProperty(AlertComponent.prototype, "alertClass", {
        get: function () {
            return TYPE_CLASS_MAP[this.alert.type || AlertType.None].alertClass + ' ' + (this.alert.customClass || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "iconClass", {
        get: function () {
            return TYPE_CLASS_MAP[this.alert.type || AlertType.None].iconClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "titleAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.titleAlignment || AlertAlignment.Left];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "iconAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.iconAlignment || AlertAlignment.Center];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "contentAlignmentClass", {
        get: function () {
            return TEXT_ALIGNMENT_CLASS_MAP[this.alert.contentAlignment || AlertAlignment.Left];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "buttonAlignmentClass", {
        get: function () {
            return BUTTON_ALIGNMENT_CLASS_MAP[this.alert.buttonAlignment || AlertAlignment.Right];
        },
        enumerable: true,
        configurable: true
    });
    AlertComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.focus();
    };
    AlertComponent.prototype.confirm = function () {
        var _this = this;
        if (this.alert.loader)
            return;
        var result = {};
        if (this.alert.input) {
            if (this.alert.inputValidator) {
                var validationError = 'Invalid value';
                try {
                    var valid = this.alert.inputValidator(this.value);
                    if (!valid) {
                        this.validationError = 'Invalid value';
                        return;
                    }
                    result.value = this.value;
                }
                catch (ex) {
                    this.validationError = String(ex);
                    return;
                }
            }
        }
        if (this.alert.confirmAction) {
            this.alert.loader = true;
            this.cdRef.markForCheck();
            var $ = from(typeof this.alert.confirmAction === 'function' ? this.alert.confirmAction(result) : this.alert.confirmAction);
            $.subscribe(function (value) {
                var asyncResult = {};
                asyncResult.value = value;
                _this.alertLayer.send(asyncResult);
            }, function (err) {
                dismiss(_this.alertLayer, err);
            }, function () {
                _this.alertLayer.close();
            });
        }
        else {
            if (this.alert.loaderOnConfirm) {
                this.alert.loader = true;
                this.cdRef.markForCheck();
                result.close = function () { return _this.alertLayer.close(); };
                this.alertLayer.send(result);
            }
            else {
                this.alertLayer.close(result);
            }
        }
    };
    AlertComponent.prototype.cancel = function () {
        dismiss(this.alertLayer, 'cancel');
    };
    AlertComponent.prototype.close = function () {
        dismiss(this.alertLayer, 'close');
    };
    AlertComponent.prototype.valueChange = function (value) {
        this.value = value;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "alert", void 0);
    __decorate([
        HostListener('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], AlertComponent.prototype, "onKeyUp", null);
    AlertComponent = __decorate([
        Component({
            template: "<div class=\"vclNotification\" [ngClass]=\"alertClass\">\r\n\r\n  <div class=\"vclNotificationHeader vclLayoutHorizontal vclLayoutCenter\" [ngClass]=\"titleAlignmentClass\" *ngIf=\"alert.title\">\r\n    <div class=\"vclLayoutFlex\">{{alert.title}}</div>\r\n    <button *ngIf=\"alert.showCloseButton\" type=\"button\" class=\"vclButton vclTransparent vclSquare\" (click)=\"close()\"><i class=\"fas fa-times\"></i></button>\r\n  </div>\r\n\r\n  <div class=\"vclNotificationContent vclLayoutVertical vclLayoutCenterJustified \">\r\n\r\n    <div *ngIf=\"iconClass\" class=\"vclNotificationIconContainer\" [ngClass]=\"iconAlignmentClass\">\r\n      <span class=\"vclIcon vclNotificationIcon\" [ngClass]=\"iconClass\"></span>\r\n    </div>\r\n\r\n    <div style=\"padding-bottom: 1em\" [ngClass]=\"contentAlignmentClass\" *ngIf=\"alert.text && !alert.html\">{{alert.text}}</div>\r\n    <div style=\"padding-bottom: 1em\" [ngClass]=\"contentAlignmentClass\" [innerHtml]=\"alert.text\" *ngIf=\"alert.text && alert.html\"></div>\r\n\r\n    <div style=\"padding-bottom: 0.5em\" *ngIf=\"alert.input\"><alert-input [alert]=\"alert\" (valueChange)=\"valueChange($event)\"></alert-input></div>\r\n\r\n    <div *ngIf=\"validationError\" class=\"vclNotification vclError\">\r\n      <div class=\"vclNotificationContent\">\r\n        <vcl-icogram label=\"{{validationError}}\" prepIcon=\"fa:exclamation-circle\"></vcl-icogram>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"vclLayoutHorizontal vclLooseButtonGroup\" [ngClass]=\"buttonAlignmentClass\">\r\n      <button vcl-button\r\n        *ngIf=\"!!alert.showConfirmButton\"\r\n        type=\"button\"\r\n        (click)=\"confirm()\"\r\n        [style.background-color]=\"alert.confirmButtonColor\"\r\n        [ngClass]=\"alert.confirmButtonClass\"\r\n        [disabled]=\"alert.loader\"        \r\n        [appIcon]=\"alert.loader ? null : alert.confirmButtonAppIcon\"\r\n        [prepIcon]=\"alert.loader ? 'fa:refresh fa-spin' : alert.confirmButtonPrepIcon\"\r\n        [label]=\"alert.confirmButtonLabel\"\r\n        >\r\n      </button>\r\n      <button vcl-button\r\n        *ngIf=\"!!alert.showCancelButton\"\r\n        type=\"button\"\r\n        [style.background-color]=\"!!alert.cancelButtonColor\"\r\n        [ngClass]=\"alert.cancelButtonClass\"\r\n        [appIcon]=\"alert.cancelButtonAppIcon\"\r\n        [prepIcon]=\"alert.cancelButtonPrepIcon\"\r\n        [disabled]=\"(!alert.showConfirmButton && !!alert.loader)\"\r\n        [appIcon]=\"(!alert.showConfirmButton && !!alert.loader) ? null : alert.cancelButtonAppIcon\"\r\n        [prepIcon]=\"(!alert.showConfirmButton && !!alert.loader) ? 'fa:refresh fa-spin' : alert.cancelButtonPrepIcon\"        \r\n        [label]=\"alert.cancelButtonLabel\"        \r\n        (click)=\"cancel()\"\r\n        >\r\n      </button>\r\n    </div>\r\n    <div *ngIf=\"!alert.showCancelButton && !alert.showConfirmButton && !!alert.loader\">\r\n      <div class=\"vclLayoutHorizontal vclLayoutCenterJustified\">\r\n        <div class=\"vclBusyIndicator vclIcogram vclLayoutVertical vclLayoutJustified\" role=\"status\">\r\n            <div class=\"vclIcon fas fa-circle-notch fa-spin fa-3x fa-fw\" aria-hidden=\"true\" aria-label=\"loading\u2026\" role=\"img\"></div>\r\n          <div class=\"vclText\">Loading\u2026</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            host: {
                '[tabindex]': '0',
                '[style.outline]': '"none"'
            }
        }),
        __metadata("design:paramtypes", [ElementRef, LayerRef, LayerService, ChangeDetectorRef])
    ], AlertComponent);
    return AlertComponent;
}());
export { AlertComponent };
