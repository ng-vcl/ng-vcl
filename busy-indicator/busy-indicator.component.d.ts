import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OnChanges, SimpleChanges } from '@angular/core';
export declare class BusyIndicatorComponent implements OnChanges {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    type: 'straight' | 'circular';
    layout: 'vertical' | 'horizontal';
    label: string;
    iconHeight: string;
    iconWidth: string;
    classSrc?: string;
    imageSrc?: string;
    ngOnChanges(changes: SimpleChanges): void;
    indicatorSrc?: SafeResourceUrl;
}
