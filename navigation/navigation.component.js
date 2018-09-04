var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Directive, ContentChildren, QueryList, Input, Output, EventEmitter, Inject, forwardRef, Optional, SkipSelf } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
var NavigationItemDirective = /** @class */ (function () {
    function NavigationItemDirective(router, nav, parent) {
        this.router = router;
        this.nav = nav;
        this.parent = parent;
        this.selected = false;
        this.selectable = true;
        this.opened = false;
        this.heading = false;
        this.exactRoute = true;
        this.onHover = new EventEmitter();
    }
    NavigationItemDirective_1 = NavigationItemDirective;
    Object.defineProperty(NavigationItemDirective.prototype, "items", {
        get: function () {
            var _this = this;
            return (this.contentItems && this.contentItems.filter(function (item) { return item !== _this; })) || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItemDirective.prototype, "route", {
        get: function () {
            return this._route;
        },
        set: function (route) {
            this._route = Array.isArray(route) ? route : [route];
            this._urlTree = this.router.createUrlTree(this._route);
        },
        enumerable: true,
        configurable: true
    });
    NavigationItemDirective.prototype.updateSelectedState = function () {
        this.selected = !!this._urlTree && this.router.isActive(this._urlTree, this.exactRoute);
        if (this.selected) {
            this.openParents();
        }
    };
    NavigationItemDirective.prototype.openParents = function () {
        var openParents = function (item) {
            if (item.parent) {
                item.parent.opened = true;
                openParents(item.parent);
            }
        };
        openParents(this);
    };
    NavigationItemDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.nav.useRouter) {
            if (this.router.navigated) {
                this.updateSelectedState();
            }
            this._subscription = this.router.events.subscribe(function (s) {
                if (s instanceof NavigationEnd) {
                    _this.updateSelectedState();
                }
            });
        }
    };
    NavigationItemDirective.prototype.ngOnDestroy = function () {
        this._subscription && this._subscription.unsubscribe();
    };
    Object.defineProperty(NavigationItemDirective.prototype, "calcPrepIcon", {
        get: function () {
            return this.items && this.items.length > 0 && this.nav.subLevelHintIconSide === 'left' ? (this.opened ? this.nav.subLevelHintIconOpened : this.nav.subLevelHintIconClosed) : this.prepIcon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItemDirective.prototype, "calcAppIcon", {
        get: function () {
            return this.items && this.items.length > 0 && this.nav.subLevelHintIconSide === 'right' ? (this.opened ? this.nav.subLevelHintIconOpened : this.nav.subLevelHintIconClosed) : this.appIcon;
        },
        enumerable: true,
        configurable: true
    });
    NavigationItemDirective.prototype.mouseOver = function () {
        this.onHover.emit(this);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationItemDirective.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationItemDirective.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NavigationItemDirective.prototype, "selectable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NavigationItemDirective.prototype, "opened", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavigationItemDirective.prototype, "heading", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavigationItemDirective.prototype, "prepIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavigationItemDirective.prototype, "appIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavigationItemDirective.prototype, "class", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavigationItemDirective.prototype, "href", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], NavigationItemDirective.prototype, "exactRoute", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NavigationItemDirective.prototype, "onHover", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NavigationItemDirective.prototype, "route", null);
    __decorate([
        ContentChildren(NavigationItemDirective_1),
        __metadata("design:type", QueryList)
    ], NavigationItemDirective.prototype, "contentItems", void 0);
    NavigationItemDirective = NavigationItemDirective_1 = __decorate([
        Directive({
            selector: 'vcl-navitem'
        }),
        __param(1, Inject(forwardRef(function () { return NavigationComponent; }))),
        __param(2, Optional()), __param(2, SkipSelf()), __param(2, Inject(NavigationItemDirective_1)),
        __metadata("design:paramtypes", [Router, Object, Object])
    ], NavigationItemDirective);
    return NavigationItemDirective;
    var NavigationItemDirective_1;
}());
export { NavigationItemDirective };
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router) {
        this.router = router;
        this.ariaRole = 'presentation';
        this.tabindex = 0;
        this.type = 'vertical';
        this.useRouter = false;
        this.subLevelHintIconClosed = 'fa:chevron-right';
        this.subLevelHintIconOpened = 'fa:chevron-down';
        this.subLevelHintIconSide = 'right';
        this.select = new EventEmitter();
        this.navigate = new EventEmitter();
    }
    Object.defineProperty(NavigationComponent.prototype, "navigationItems", {
        get: function () {
            return this.inputItems || this.contentItems || [];
        },
        enumerable: true,
        configurable: true
    });
    NavigationComponent.prototype.runItems = function (cb) {
        var runItems = function (items) {
            items.forEach(function (item) {
                cb(item);
                if (item.items) {
                    runItems(item.items);
                }
            });
        };
        runItems(this.navigationItems);
    };
    NavigationComponent.prototype.selectRoute = function (route, openParents) {
        var _this = this;
        if (openParents === void 0) { openParents = true; }
        this.runItems(function (item) {
            if (item.route) {
                // TODO should use containsTree from @angular/router for comparison
                // currently not exposed as public api
                item.selected = item.route.length === route.length && item.route.every(function (v, i) { return v === route[i]; });
                if (item.selected) {
                    _this.selectedItem = item;
                    if (openParents) {
                        item.openParents();
                    }
                }
            }
        });
    };
    NavigationComponent.prototype.selectItem = function (item) {
        if (item.items && item.items.length > 0) {
            item.opened = !item.opened;
            return;
        }
        if (this.selectedItem) {
            this.selectedItem.selected = false;
        }
        item.selected = true;
        this.selectedItem = item;
        if (item.href) {
            window.location.href = item.href;
        }
        else if (item.route) {
            if (this.useRouter) {
                this.router.navigate(item.route);
            }
            else {
                this.navigate.emit(item.route);
            }
        }
        this.select.emit(item);
    };
    NavigationComponent.prototype.onSubItemSelect = function (item) {
        this.selectItem(item);
    };
    NavigationComponent.prototype.mouseOver = function (item) {
        item.mouseOver();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "ident", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "ariaRole", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], NavigationComponent.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "useRouter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "subLevelHintIconClosed", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "subLevelHintIconOpened", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "subLevelHintIconSide", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "inputItems", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "select", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "navigate", void 0);
    __decorate([
        ContentChildren(NavigationItemDirective),
        __metadata("design:type", QueryList)
    ], NavigationComponent.prototype, "contentItems", void 0);
    NavigationComponent = __decorate([
        Component({
            selector: 'nav[vcl-navigation]',
            host: {
                '[class.vclNavigation]': 'true'
            },
            template: "  <ul [class.vclLayoutHorizontal]=\"type === 'horizontal'\">\n    <li *ngFor=\"let item of navigationItems\"\n        [class.vclSelected]=\"item.selectable && item.selected\"\n        [class.vclOpen]=\"item.opened\"\n        [class.vclClose]=\"!item.opened\"\n        [class.vclNavigationHeading]=\"item.heading\"\n        [class.vclNavigationItem]=\"!item.heading\"\n        [attr.aria-selected]=\"item.selectable && item.selected\"\n        [attr.role]=\"item.heading && 'sectionhead' || ariaRole\"\n        [attr.tabindex]=\"tabindex\"\n        [ngClass]=\"item.class\"\n        (mouseover)=\"mouseOver(item)\"\n        >\n\n      <span *ngIf=\"item.heading\">\n        {{item.label}}\n      </span>\n\n      <a vcl-link class=\"vclNavigationItemLabel\"\n        *ngIf=\"!item.heading\"\n        [label]=\"item.label\"\n        [prepIcon]=\"item.calcPrepIcon\"\n        [appIcon]=\"item.calcAppIcon\"\n        (click)=\"selectItem(item)\">\n      </a>\n\n      <nav vcl-navigation *ngIf=\"item.items && item.items.length > 0\"\n          [inputItems]=\"item.items\"\n          [type]=\"type\"\n          [useRouter]=\"useRouter\"\n          [subLevelHintIconOpened]=\"subLevelHintIconOpened\"\n          [subLevelHintIconClosed]=\"subLevelHintIconClosed\"\n          [subLevelHintIconSide]=\"subLevelHintIconSide\"\n          (select)=\"onSubItemSelect($event)\">\n      </nav>\n    </li>\n  </ul>\n"
        }),
        __metadata("design:paramtypes", [Router])
    ], NavigationComponent);
    return NavigationComponent;
}());
export { NavigationComponent };
