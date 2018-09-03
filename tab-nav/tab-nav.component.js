var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WormholeHost } from './../wormhole/index';
import { Component, ContentChildren, QueryList, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { TabComponent } from './tab.component';
var TabNavComponent = /** @class */ (function () {
    function TabNavComponent() {
        this.layout = '';
        this.tabbableClass = '';
        this.tabsClass = '';
        this.tabContentClass = '';
        this.hideContent = false;
        // Sets vclTabStyleUni on vclTabs and removes vclNoBorder on vclTabContent when true
        this.borders = false;
        this.selectedTabIndex = 0;
        this.selectedTabIndexChange$ = new EventEmitter();
    }
    Object.defineProperty(TabNavComponent.prototype, "tabContent", {
        set: function (tabContent) {
            if (tabContent) {
                this.wormholeHost = new WormholeHost(tabContent);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabNavComponent.prototype, "selectedTabIndexChange", {
        get: function () {
            return this.selectedTabIndexChange$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // Sets a valid selectedTabIndex
    TabNavComponent.prototype.selectTab = function (tab) {
        if (!this.tabs) {
            return;
        }
        var tabs = this.tabs.toArray();
        var tabIdx;
        var tabComp;
        if (tab instanceof TabComponent) {
            tabIdx = tabs.indexOf(tab);
            tabComp = tab;
        }
        else if (typeof tab === 'number' && tabs[tab]) {
            tabIdx = tab;
            tabComp = tabs[tabIdx];
        }
        else {
            tabIdx = -1;
            tabComp = null;
        }
        if (tabIdx >= 0 && tabComp instanceof TabComponent && !tabComp.disabled) {
            if (this.wormholeHost) {
                this.wormholeHost.clearWormholes();
                this.wormholeHost.connectWormhole(tabComp.content);
            }
            this.selectedTabIndex = tabIdx;
        }
    };
    TabNavComponent.prototype.onTabClick = function (tab) {
        this.selectTab(tab);
        this.selectedTabIndexChange$.emit(this.selectedTabIndex);
    };
    TabNavComponent.prototype.ngAfterContentInit = function () {
        this.selectTab(this.selectedTabIndex);
    };
    TabNavComponent.prototype.ngOnDestroy = function () {
        if (this.wormholeHost) {
            this.wormholeHost.clearWormholes();
        }
    };
    __decorate([
        ViewChild('tabContent', { read: ViewContainerRef }),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TabNavComponent.prototype, "tabContent", null);
    __decorate([
        ContentChildren(TabComponent),
        __metadata("design:type", QueryList)
    ], TabNavComponent.prototype, "tabs", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TabNavComponent.prototype, "layout", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TabNavComponent.prototype, "tabbableClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TabNavComponent.prototype, "tabsClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TabNavComponent.prototype, "tabContentClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TabNavComponent.prototype, "hideContent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TabNavComponent.prototype, "borders", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TabNavComponent.prototype, "selectedTabIndex", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Observable),
        __metadata("design:paramtypes", [])
    ], TabNavComponent.prototype, "selectedTabIndexChange", null);
    TabNavComponent = __decorate([
        Component({
            selector: 'vcl-tab-nav',
            template: "<div class=\"vclTabbable {{tabbableClass}}\"\r\n     [class.vclTabsLeft]=\"layout==='left'\"\r\n     [class.vclTabsRight]=\"layout==='right'\">\r\n  <div class=\"vclTabs {{tabsClass}}\" [class.vclTabStyleUni]=\"!!borders\" role=\"tablist\">\r\n    <div *ngFor=\"let tab of tabs; let i = index\"\r\n         class=\"vclTab {{tab.tabClass}}\" \r\n         role=\"tab\"\r\n         [class.vclDisabled]=\"tab.disabled\"\r\n         [class.vclSelected]=\"selectedTabIndex===i\"\r\n         [class.aria-selected]=\"selectedTabIndex===i\"\r\n         (click)=\"onTabClick(tab)\">\r\n        <span class=\"vclTabLabel\"> \r\n          <wormhole [connect]=\"tab.label\"></wormhole>\r\n        </span>\r\n    </div>\r\n  </div>\r\n  <div [style.display]=\"hideContent === true ? 'none' : null\" class=\"vclTabContent {{tabContentClass}}\" [class.vclNoBorder]=\"!borders\">\r\n      <div role=\"tabpanel\" class=\"vclTabPanel\">\r\n          <div #tabContent></div>\r\n    </div>\r\n    <div role=\"tabpanel\" class=\"vclTabPanel\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
        })
    ], TabNavComponent);
    return TabNavComponent;
}());
export { TabNavComponent };
