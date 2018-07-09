var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AlertType, ALERT_DEFAULTS } from './types';
import { AlertComponent, dismiss } from './alert.component';
import { LayerService } from './../layer/index';
var AlertService = /** @class */ (function () {
    function AlertService(ls) {
        this.ls = ls;
        this.noop = function () { };
    }
    AlertService.prototype.alert = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text }, opts);
    };
    AlertService.prototype.info = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Info }, opts);
    };
    AlertService.prototype.success = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Success }, opts);
    };
    AlertService.prototype.warning = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Warning }, opts);
    };
    AlertService.prototype.error = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Error }, opts);
    };
    AlertService.prototype.question = function (text, opts) {
        if (opts === void 0) { opts = {}; }
        return this.open({ text: text, type: AlertType.Question, showCancelButton: true }, opts);
    };
    AlertService.prototype.open = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        return this.create.apply(this, opts).open();
    };
    AlertService.prototype.create = function () {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var alert = Object.assign.apply(Object, [{}, ALERT_DEFAULTS].concat(opts));
        return this.ls.create(AlertComponent, {
            offClick: function (layer) {
                dismiss(layer, 'offClick');
            },
            modal: true,
            transparent: true,
            attrs: { alert: alert }
        });
    };
    AlertService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [LayerService])
    ], AlertService);
    return AlertService;
}());
export { AlertService };
