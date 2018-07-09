var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, InjectionToken } from '@angular/core';
export var VCL_ICON_RESOLVER = new InjectionToken('VCL_ICON_RESOLVER');
// The default name resolver following the CSS class name conventions of
// the well-known Font Awesome icon font. Basically it translates
// `fa:user` into `fa fa-user`
var DefaultIconResolverService = /** @class */ (function () {
    function DefaultIconResolverService() {
    }
    DefaultIconResolverService.prototype.match = function (icon) {
        return /^[a-z0-9-_]+:[a-z0-9-_]+(:[a-z0-9-_]+)?$/.test(icon);
    };
    DefaultIconResolverService.prototype.lookup = function (icon) {
        if (typeof icon === 'string') {
            var iconName = icon;
            var providerName = void 0;
            // Split on first : occurrence
            var iconParts = iconName.split(':');
            if (iconParts.length === 0) {
                return icon;
            }
            else {
                var setName = iconParts.shift();
                var iconClasses = iconParts.join(" " + setName + "-");
                return setName + " " + setName + "-" + iconClasses;
            }
        }
        return icon;
    };
    DefaultIconResolverService = __decorate([
        Injectable()
    ], DefaultIconResolverService);
    return DefaultIconResolverService;
}());
export { DefaultIconResolverService };
