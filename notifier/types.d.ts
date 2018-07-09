import { WormholeAttributes } from '../wormhole/wormhole';
export declare enum NotifierType {
    None = 0,
    Info = 1,
    Success = 2,
    Warning = 3,
    Error = 4,
}
export declare enum NotifierPosition {
    TopRight = 0,
    Top = 1,
    TopLeft = 2,
    BottomRight = 3,
    Bottom = 4,
    BottomLeft = 5,
}
export interface NotifierOptions {
    text?: string;
    html?: boolean;
    contentComponentDetails?: {
        contentComponentClass: any;
        attributes?: WormholeAttributes;
    };
    type?: NotifierType;
    showCloseButton?: boolean;
    position?: NotifierPosition;
    timeout?: number | boolean;
    backgroundColor?: string;
    textColor?: string;
}
export declare const NOTIFIER_DEFAULTS: NotifierOptions;
export declare const TYPE_CLASS_MAP: any;
export declare const POSITION_MAP: {
    [NotifierPosition.TopRight]: {
        class: string;
        reverse: boolean;
    };
    [NotifierPosition.Top]: {
        class: string;
        reverse: boolean;
    };
    [NotifierPosition.TopLeft]: {
        class: string;
        reverse: boolean;
    };
    [NotifierPosition.BottomRight]: {
        class: string;
        reverse: boolean;
    };
    [NotifierPosition.Bottom]: {
        class: string;
        reverse: boolean;
    };
    [NotifierPosition.BottomLeft]: {
        class: string;
        reverse: boolean;
    };
};
