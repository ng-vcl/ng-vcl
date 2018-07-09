import { OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ObservableComponent } from './observable.component';
export interface VCLLayout {
    [key: string]: string;
}
export declare class LayoutDirective extends ObservableComponent {
    layout?: VCLLayout;
    layout$: Observable<VCLLayout | undefined>;
}
/**
 * The vclLayoutTarget directive allows to set class injection points on elements in the component's template.
 * Developer can inject style classes into these elements using the vclLayout directive on the component.
 */
export declare class LayoutTargetDirective extends ObservableComponent implements OnDestroy {
    private renderer;
    private elRef;
    name?: string;
    name$: Observable<string | undefined>;
    sub?: Subscription;
    classes: string[];
    constructor(layoutHost: LayoutDirective | undefined, renderer: Renderer2, elRef: ElementRef);
    ngOnDestroy(): void;
}
export declare class VCLLayoutModule {
}
