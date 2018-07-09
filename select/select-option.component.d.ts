import { TemplateRef } from '@angular/core';
export declare class SelectOption {
    content: TemplateRef<any>;
    value: any;
    sublabel: string;
    label: string;
    prepIcon?: string;
    appIcon?: string;
    appIconSrc?: string;
    prepIconSrc?: string;
    disabled: boolean;
}
