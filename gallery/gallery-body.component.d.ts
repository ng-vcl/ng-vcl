import { AfterContentChecked, ElementRef } from '@angular/core';
import { GalleryComponent } from './gallery.component';
export declare class GalleryBodyComponent implements AfterContentChecked {
    private elementRef;
    target: GalleryComponent;
    imageContainer: ElementRef;
    private initialized;
    private imgS;
    private containerHeight;
    private loadedCount;
    constructor(parent: GalleryComponent, elementRef: ElementRef);
    onSwipeLeft(): void;
    onSwipeRight(): void;
    ngAfterContentChecked(): void;
    imageLoaded(): void;
    private reload();
    readonly translatePosition: number;
    readonly imageContainerStyle: object;
    selectNext(): void;
    selectPrevious(): void;
}
