import { InjectionToken } from '@angular/core';
export interface IconResolver {
    match(icon: string): boolean;
    lookup(icon: string): string;
}
export declare const VCL_ICON_RESOLVER: InjectionToken<{}>;
export declare class DefaultIconResolverService implements IconResolver {
    match(icon: string): boolean;
    lookup(icon: string): string;
}
