export interface IHintService {
    initialize(IHintOptions: any): void;
}
export interface IHintOptions {
    elementsDisabled: boolean;
    defaultPosition: string;
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
}
export declare class HintOptions implements IHintOptions {
    elementsDisabled: boolean;
    defaultPosition: string;
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
}
export declare const HintConfig: {
    HINT_TAG: string;
    DEFAULT_POSITION: string;
    Z_INDEX: string;
    DEFAULT_ORDER: number;
    DEFAULT_PX_LAYER: number;
    APPLY_RELATIVE: boolean;
    DISMISS_ON_OVERLAY: boolean;
};
export declare enum Placement {
    Top = "top",
    Bottom = "bottom",
    Left = "left",
    Right = "right",
}
export interface Step {
    selector: string;
    order: number;
}
