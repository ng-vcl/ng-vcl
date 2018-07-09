var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Observable, interval, merge, never, Subject } from 'rxjs';
import { first, skipWhile } from 'rxjs/operators';
import { NotifierType, TYPE_CLASS_MAP } from './types';
var Notifier = /** @class */ (function (_super) {
    __extends(Notifier, _super);
    function Notifier(opts) {
        var _this = _super.call(this) || this;
        _this.opts = opts;
        _this.closeSubject = new Subject();
        _this.state = 'visible';
        var timeout = _this.calculatedTimeout;
        var timeout$ = typeof timeout === 'number' ?
            interval(timeout).pipe(skipWhile(function () { return _this.state === 'hovered'; })) :
            never();
        _this.source = merge(_this.closeSubject, timeout$).pipe(first());
        return _this;
    }
    Notifier.prototype.close = function () {
        this.closeSubject.next();
    };
    Notifier.prototype.mouseEnter = function () {
        this.state = 'hovered';
    };
    Notifier.prototype.mouseLeave = function () {
        this.state = 'active';
    };
    Object.defineProperty(Notifier.prototype, "text", {
        get: function () {
            return this.opts.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "html", {
        get: function () {
            return this.opts.html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "showCloseButton", {
        get: function () {
            return this.opts.showCloseButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "backgroundColor", {
        get: function () {
            return this.opts.backgroundColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "textColor", {
        get: function () {
            return this.opts.textColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "layerClass", {
        get: function () {
            return TYPE_CLASS_MAP[this.opts.type || NotifierType.None].notifierClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "iconClass", {
        get: function () {
            return TYPE_CLASS_MAP[this.opts.type || NotifierType.None].iconClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notifier.prototype, "calculatedTimeout", {
        get: function () {
            if (typeof this.opts.timeout === 'number') {
                return this.opts.timeout;
            }
            else if (typeof this.opts.timeout === 'boolean' && !this.opts.timeout) {
                return null;
            }
            else if (!this.opts.html && typeof this.opts.text === 'string') {
                // avg reading speed per min (WPM): 19
                // min 4 secs
                var wordCnt = this.opts.text.split(/\s+/).length;
                return Math.min((wordCnt / 19) * 60 * 1000, 4000);
            }
            else if (this.opts.html) {
                return 5000;
            }
            else {
                return 4000;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Notifier;
}(Observable));
export { Notifier };
