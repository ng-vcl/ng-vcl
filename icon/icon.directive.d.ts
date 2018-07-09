import { SimpleChanges } from '@angular/core';
import { NgClass } from '@angular/common';
import { IconResolver } from './icon-resolver.service';
export declare class IconDirective {
    ariaLabel: string | undefined;
    alt: string | undefined;
    role: string | undefined;
    readonly attrRole: string;
    readonly attrAriaLabel: string | undefined;
    readonly isAriaHidden: boolean;
}
export declare class IconFontDirective {
    private ngClass;
    private _iconResolvers;
    constructor(ngClass: NgClass, _iconResolvers: IconResolver[]);
    icon: string | undefined;
    ngOnChanges(changes: SimpleChanges): void;
}
