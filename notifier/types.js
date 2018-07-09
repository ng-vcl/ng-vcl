export var NotifierType;
(function (NotifierType) {
    NotifierType[NotifierType["None"] = 0] = "None";
    NotifierType[NotifierType["Info"] = 1] = "Info";
    NotifierType[NotifierType["Success"] = 2] = "Success";
    NotifierType[NotifierType["Warning"] = 3] = "Warning";
    NotifierType[NotifierType["Error"] = 4] = "Error";
})(NotifierType || (NotifierType = {}));
export var NotifierPosition;
(function (NotifierPosition) {
    NotifierPosition[NotifierPosition["TopRight"] = 0] = "TopRight";
    NotifierPosition[NotifierPosition["Top"] = 1] = "Top";
    NotifierPosition[NotifierPosition["TopLeft"] = 2] = "TopLeft";
    NotifierPosition[NotifierPosition["BottomRight"] = 3] = "BottomRight";
    NotifierPosition[NotifierPosition["Bottom"] = 4] = "Bottom";
    NotifierPosition[NotifierPosition["BottomLeft"] = 5] = "BottomLeft";
})(NotifierPosition || (NotifierPosition = {}));
export var NOTIFIER_DEFAULTS = {
    html: false,
    type: NotifierType.None,
    position: NotifierPosition.TopRight,
    showCloseButton: true
};
export var TYPE_CLASS_MAP = (_a = {},
    _a[NotifierType.None] = {
        notifierClass: '',
        iconClass: ''
    },
    _a[NotifierType.Info] = {
        notifierClass: 'vclInfo',
        iconClass: 'fa fa-info-circle'
    },
    _a[NotifierType.Success] = {
        notifierClass: 'vclSuccess',
        iconClass: 'fa fa-check-circle'
    },
    _a[NotifierType.Warning] = {
        notifierClass: 'vclWarning',
        iconClass: 'fa fa-warning'
    },
    _a[NotifierType.Error] = {
        notifierClass: 'vclError',
        iconClass: 'fa fa-exclamation-circle'
    },
    _a);
export var POSITION_MAP = (_b = {},
    _b[NotifierPosition.TopRight] = {
        class: 'vclLayerNotificationTopRight',
        reverse: true
    },
    _b[NotifierPosition.Top] = {
        class: 'vclLayerNotificationTop',
        reverse: true,
    },
    _b[NotifierPosition.TopLeft] = {
        class: 'vclLayerNotificationTopLeft',
        reverse: true
    },
    _b[NotifierPosition.BottomRight] = {
        class: 'vclLayerNotificationBottomRight',
        reverse: false
    },
    _b[NotifierPosition.Bottom] = {
        class: 'vclLayerNotificationBottom',
        reverse: false
    },
    _b[NotifierPosition.BottomLeft] = {
        class: 'vclLayerNotificationBottomLeft',
        reverse: false
    },
    _b);
var x = NotifierType.Error;
var _a, _b;
