import { ElementRef } from '@angular/core';
export interface IHintOptionsFull {
    debug: boolean;
    elementsDisabled: boolean;
    defaultOrder: number;
    defaultLayer: number;
    applyRelative: boolean;
    stepTag: string;
    dismissOnOverlay: boolean;
    previousLabel: string;
    nextLabel: string;
    exitLabel: string;
    previousIcon: string;
    nextIcon: string;
    exitIcon: string;
    buttonClass: string;
}
export declare type IHintOptions = Partial<IHintOptionsFull>;
export declare class HintOptions implements IHintOptions {
    debug: boolean;
    elementsDisabled: boolean;
    defaultOrder: number;
    defaultLayer: number;
    applyRelative: boolean;
    stepTag: string;
    dismissOnOverlay: boolean;
    previousLabel: string;
    nextLabel: string;
    exitLabel: string;
    previousIcon: string;
    nextIcon: string;
    exitIcon: string;
    buttonClass: string;
}
export declare const HintConfig: {
    HINT_TAG: string;
    Z_INDEX: string;
    DEFAULT_ORDER: number;
    DEFAULT_PX_LAYER: number;
    APPLY_RELATIVE: boolean;
    DISMISS_ON_OVERLAY: boolean;
};
export interface Step {
    target: string | ElementRef | Element;
    order: number;
}
