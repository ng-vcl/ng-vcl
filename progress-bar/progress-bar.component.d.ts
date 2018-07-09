export declare class ProgressBarComponent {
    value: number;
    secondaryValue: number;
    minValue: number;
    maxValue: number;
    indeterminate: boolean;
    label: string;
    speed: number;
    readonly showIndeterminate: boolean;
    readonly showValue: boolean;
    readonly showSecondaryValue: boolean;
    readonly transformValue: string;
    readonly transformSecondaryValue: string;
    readonly animationDurationValue: string;
    readonly range: number;
    scaleValue(value: number): number;
    validateValue(value: number): boolean;
    isNumber(value: number): boolean;
}
