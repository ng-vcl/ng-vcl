var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Default"] = 0] = "Default";
    NotificationType[NotificationType["Info"] = 1] = "Info";
    NotificationType[NotificationType["Warning"] = 2] = "Warning";
    NotificationType[NotificationType["Error"] = 3] = "Error";
    NotificationType[NotificationType["Success"] = 4] = "Success";
})(NotificationType || (NotificationType = {}));
var DATA = (_a = {},
    _a[NotificationType.Default] = {
        icon: 'fa-bell-o',
        class: ''
    },
    _a[NotificationType.Info] = {
        icon: 'fa-info-circle',
        class: 'vclInfo'
    },
    _a[NotificationType.Warning] = {
        icon: 'fa-warning',
        class: 'vclWarning'
    },
    _a[NotificationType.Error] = {
        icon: 'fa-exclamation-circle',
        class: 'vclError'
    },
    _a[NotificationType.Success] = {
        icon: 'fa-check-circle',
        class: 'vclSuccess'
    },
    _a);
var FlexAlign = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
};
var TextAlign = {
    left: 'left',
    center: 'center',
    right: 'right'
};
var IconType;
(function (IconType) {
    IconType["FA"] = "fa";
    IconType["Custom"] = "custom";
    IconType["Image"] = "image";
})(IconType || (IconType = {}));
export function notificationTypeFromString(type) {
    switch (type.toLocaleLowerCase()) {
        default:
            return NotificationType.Default;
        case 'info':
            return NotificationType.Info;
        case 'warning':
            return NotificationType.Warning;
        case 'error':
            return NotificationType.Error;
        case 'success':
            return NotificationType.Success;
    }
}
export function notificationIconFromType(type) {
    return DATA[type].icon;
}
export function notificationStyleClassFromType(type) {
    return DATA[type].class;
}
export { NotificationType, FlexAlign, TextAlign, IconType };
var _a;
