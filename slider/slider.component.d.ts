import { SimpleChanges, EventEmitter, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare enum MoveDirection {
    Left = 0,
    Right = 1,
}
export interface ScalePoint {
    label: string;
    percent: number;
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class SliderComponent implements ControlValueAccessor {
    private cdRef;
    tabindex: number;
    value: number;
    valueChange: EventEmitter<number>;
    disabled: boolean;
    min: number;
    max: number;
    wheel: boolean;
    lock: boolean;
    scale: string[] | number | undefined;
    focused: boolean;
    scaleElement: ElementRef;
    readonly pmin: number;
    readonly pmax: number;
    percentLeftKnob: number;
    scalePoints: ScalePoint[];
    constructor(cdRef: ChangeDetectorRef);
    ngAfterContentInit(): void;
    readonly valueValid: boolean;
    validateValue(value: number): boolean;
    readonly showScale: boolean;
    ngOnChanges(changes: SimpleChanges): void;
    setValue(value: number, updateKnob: boolean): void;
    calculatePercentLeftKnob(value: number): number;
    percentToValue(per: number): number;
    updateScalePoints(): void;
    closestScalePoint(percentValue: number): number;
    deltaPxToPercent(deltaPx: number): number;
    onFocus(): void;
    onBlur(): void;
    /**
     * clicking the rail should also reposition the bar
     */
    onTap(event: any): void;
    selectPoint(p: ScalePoint): void;
    move(direction: MoveDirection): void;
    moveToPoint(direction: MoveDirection): void;
    moveValue(direction: MoveDirection): void;
    onWheel(ev: any): void;
    keydown(ev: any): void;
    lastPercentLeftKnob: number;
    firstPan: boolean;
    onPan(ev: any): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
