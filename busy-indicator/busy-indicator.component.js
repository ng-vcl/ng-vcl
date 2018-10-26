var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
var CIRCULAR = 'data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iCiAgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIgogICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIgoJd2lkdGg9IjEwMCUiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KCTxnPgoJICAgIDxkZWZzPgoJICAgIAk8Y2xpcFBhdGggaWQ9ImNsaXAiPgoJICAgICAgCQk8cGF0aCAgZD0iTSA1MCA1MCBMIDM1IDAgTCA2NSAwIHoiIC8+CgkJICAgIDwvY2xpcFBhdGg+CgkgICAgCTxlbGxpcHNlIGlkPSJDaXJjbGVCbG9jayIgY2xpcC1wYXRoPSJ1cmwoI2NsaXApIiBjeD0iNTAiIGN5PSI1MCIgcng9IjQwIiByeT0iNDAiIHN0eWxlPSJmaWxsOm5vbmU7IHN0cm9rZTojRThFOEU4IiBzdHJva2Utd2lkdGg9IjE1Ii8+CgkgICAgPC9kZWZzPgoKCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoNDAgNTAgNTApIiAvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSg4MCA1MCA1MCkiIC8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMTYwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgyMDAgNTAgNTApIi8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDI0MCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMjgwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgzMjAgNTAgNTApIi8+CgoJCTxlbGxpcHNlIGNsaXAtcGF0aD0idXJsKCNjbGlwKSIgY3g9IjUwIiBjeT0iNTAiIHJ4PSI0MCIgcnk9IjQwIiBzdHlsZT0iZmlsbDpub25lOyBzdHJva2U6IzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxNSI+CgkJCTxhbmltYXRlVHJhbnNmb3JtCgkJCQlhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCgkJCQlhdHRyaWJ1dGVUeXBlPSJYTUwiCgkJCQl0eXBlPSJyb3RhdGUiCgkJCQl2YWx1ZXM9IjAgNTAgNTA7IDQwIDUwIDUwOyA4MCA1MCA1MDsgMTIwIDUwIDUwOyAxNjAgNTAgNTA7IDIwMCA1MCA1MDsgMjQwIDUwIDUwOyAyODAgNTAgNTA7IDMyMCA1MCA1MCIKCQkJCWR1cj0iM3MiCgkJCQlyZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIKCQkJCWFkZGl0aXZlPSJyZXBsYWNlIgoJCQkJY2FsY01vZGU9ImRpc2NyZXRlIgoJCQkJZmlsbD0iZnJlZXplIi8+CgkJPC9lbGxpcHNlPgoJPC9nPgo8L3N2Zz4=';
var STRAIGHT = 'data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iCiAgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIgogICAgIHZpZXdCb3g9IjAgMCA5MCA2MCIKICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIKCSB3aWR0aD0iMTAwJSIKCSBoZWlnaHQ9IjEyMCUiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICA8Zz4KCSAgICA8cmVjdAoJICAgIAlzdHJva2Utd2lkdGg9IjAiCgkgICAgCXN0cm9rZT0iI2ZmZiIKCSAgICAJZmlsbD0ibm9uZSIKCSAgICAJaGVpZ2h0PSIzMCIKCSAgICAJd2lkdGg9IjkwIgoJICAgIAl4PSIwIiB5PSIxNSI+PC9yZWN0PgoJICAgIDxkZWZzPgoJCQk8cmVjdCBjbGFzcz0idGVzdCIgZmlsbD0iI0U4RThFOCIgaWQ9IlJlY3QiIHg9IjAiIHk9IjE1IiBoZWlnaHQ9IjMwIiB3aWR0aD0iMTUiPjwvcmVjdD4KCSAgICA8L2RlZnM+CgoJCTx1c2UgeGxpbms6aHJlZj0iI1JlY3QiIC8+CgkJPHVzZSB4bGluazpocmVmPSIjUmVjdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUpIiAvPgoJCTx1c2UgeGxpbms6aHJlZj0iI1JlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwKSIgLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNSZWN0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NSkiIC8+CgoJCTxyZWN0IGZpbGw9IiMwMDAiIHg9IjUiIHk9IjE1IiBoZWlnaHQ9IjMwIiB3aWR0aD0iMTUiPgoJCQk8YW5pbWF0ZQoJCQkJZmlsbD0iZnJlZXplIgoJCQkJZHVyPSIxNTAwbXMiCgkJCQljYWxjTW9kZT0iZGlzY3JldGUiCgkJCQlyZXN0YXJ0PSJhbHdheXMiCgkJCQl2YWx1ZXM9IjA7MjU7NTA7NzUiCgkJCQlyZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIKCQkJCWF0dHJpYnV0ZU5hbWU9IngiLz4KCSAgICA8L3JlY3Q+Cgk8L2c+Cjwvc3ZnPgo=';
var BusyIndicatorComponent = /** @class */ (function () {
    function BusyIndicatorComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.type = 'circular';
        this.layout = 'vertical';
        this.label = 'Loading';
        this.iconHeight = '3em';
        this.iconWidth = '3em';
        this.indicatorSrc = this.sanitizer.bypassSecurityTrustResourceUrl(CIRCULAR);
    }
    BusyIndicatorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.imageSrc || changes.type) {
            if (!this.imageSrc) {
                this.indicatorSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.type === 'straight' ? STRAIGHT : CIRCULAR);
            }
            else {
                this.indicatorSrc = this.imageSrc;
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BusyIndicatorComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BusyIndicatorComponent.prototype, "layout", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusyIndicatorComponent.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusyIndicatorComponent.prototype, "iconHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusyIndicatorComponent.prototype, "iconWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BusyIndicatorComponent.prototype, "classSrc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], BusyIndicatorComponent.prototype, "imageSrc", void 0);
    BusyIndicatorComponent = __decorate([
        Component({
            selector: 'vcl-busy-indicator',
            template: "<div class=\"vclLayoutCenterJustified vclIcogram {{layout == 'vertical' ? 'vclLayoutVertical' : 'vclLayoutHorizontal'}}\" role=\"status\">\r\n  <div class=\"vclIcon vclLayoutSelfCenter {{classSrc}}\" [attr.aria-label]=\"label\" role=\"img\">\r\n    <img *ngIf=\"!classSrc\" [style.height]=\"iconHeight\" [style.width]=\"iconWidth\" [src]=\"indicatorSrc\" role=\u201Dpresentation\u201D>\r\n  </div>\r\n  <div class=\"vclLayoutSelfCenter\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n\r\n"
        }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], BusyIndicatorComponent);
    return BusyIndicatorComponent;
}());
export { BusyIndicatorComponent };
