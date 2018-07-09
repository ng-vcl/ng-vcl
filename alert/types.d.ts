import { Observable } from 'rxjs';
export declare enum AlertType {
    None = 0,
    Question = 1,
    Info = 2,
    Success = 3,
    Warning = 4,
    Error = 5,
}
export declare enum AlertAlignment {
    Left = 0,
    Center = 1,
    Right = 2,
}
export declare enum AlertInput {
    None = 0,
    Text = 1,
}
export interface AlertOptions {
    text?: string;
    title?: string;
    html?: boolean;
    type?: AlertType;
    showConfirmButton?: boolean;
    showCancelButton?: boolean;
    showCloseButton?: boolean;
    offClickClose?: boolean;
    escClose?: boolean;
    customClass?: string;
    confirmButtonLabel?: string;
    confirmButtonClass?: string;
    confirmButtonColor?: string;
    confirmButtonPrepIcon?: string;
    confirmButtonAppIcon?: string;
    cancelButtonLabel?: string;
    cancelButtonClass?: string;
    cancelButtonColor?: string;
    cancelButtonPrepIcon?: string;
    cancelButtonAppIcon?: string;
    loader?: boolean;
    loaderOnConfirm?: boolean;
    input?: AlertInput;
    inputValue?: any;
    inputPlaceholder?: string;
    inputValidator?: {
        (value: any): boolean;
    };
    contentAlignment?: AlertAlignment;
    titleAlignment?: AlertAlignment;
    iconAlignment?: AlertAlignment;
    buttonAlignment?: AlertAlignment;
    confirmAction?: Function | Observable<any>;
}
export declare const ALERT_DEFAULTS: AlertOptions;
export declare const TYPE_CLASS_MAP: {
    [AlertType.None]: {
        alertClass: string;
        iconClass: string;
    };
    [AlertType.Question]: {
        alertClass: string;
        iconClass: string;
    };
    [AlertType.Info]: {
        alertClass: string;
        iconClass: string;
    };
    [AlertType.Success]: {
        alertClass: string;
        iconClass: string;
    };
    [AlertType.Warning]: {
        alertClass: string;
        iconClass: string;
    };
    [AlertType.Error]: {
        alertClass: string;
        iconClass: string;
    };
};
export declare const TEXT_ALIGNMENT_CLASS_MAP: {
    [AlertAlignment.Left]: string;
    [AlertAlignment.Center]: string;
    [AlertAlignment.Right]: string;
};
export declare const BUTTON_ALIGNMENT_CLASS_MAP: {
    [AlertAlignment.Left]: string;
    [AlertAlignment.Center]: string;
    [AlertAlignment.Right]: string;
};
export interface AlertResult {
    value?: any;
    close?: {
        (): void;
    };
}
export declare class AlertError extends Error {
    reason: string;
    constructor(reason: string, message?: string);
}
