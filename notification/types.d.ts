declare enum NotificationType {
    Default = 0,
    Info = 1,
    Warning = 2,
    Error = 3,
    Success = 4,
}
declare const FlexAlign: {
    left: string;
    center: string;
    right: string;
};
declare const TextAlign: {
    left: string;
    center: string;
    right: string;
};
declare enum IconType {
    FA = "fa",
    Custom = "custom",
    Image = "image",
}
export declare function notificationTypeFromString(type: string): NotificationType;
export declare function notificationIconFromType(type: NotificationType): string;
export declare function notificationStyleClassFromType(type: NotificationType): string;
export { NotificationType, FlexAlign, TextAlign, IconType };
