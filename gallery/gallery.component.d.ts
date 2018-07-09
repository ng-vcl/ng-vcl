import { AfterContentInit, AfterViewInit, InjectionToken, QueryList } from '@angular/core';
import { GalleryImageComponent } from './gallery-image.component';
import { AnimationBuilder, AnimationFactory, AnimationMetadata } from '@angular/animations';
export declare const GALLERY_ANIMATIONS: InjectionToken<{}>;
export interface GalleryAnimationConfig {
    middleRefade?: AnimationMetadata | AnimationMetadata[];
    nextToMiddle?: AnimationMetadata | AnimationMetadata[];
    previousToMiddle?: AnimationMetadata | AnimationMetadata[];
}
export declare enum ImageChange {
    PREVIOUS = 0,
    NEXT = 1,
}
export declare class GalleryComponent implements AfterContentInit, AfterViewInit {
    private builder;
    private animations;
    selectedImage: number;
    wrap: boolean;
    images?: QueryList<GalleryImageComponent>;
    imageArray: GalleryImageComponent[];
    middleRefadeAnimationFactory: AnimationFactory | undefined;
    nextToMiddleAnimationFactory: AnimationFactory | undefined;
    previousToMiddleAnimationFactory: AnimationFactory | undefined;
    constructor(builder: AnimationBuilder, animations: GalleryAnimationConfig);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    selectImage(index: number): void;
    nextImage(): number;
    previousImage(): number;
    selectNext(): void;
    selectPrevious(): void;
}
