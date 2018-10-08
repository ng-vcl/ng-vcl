import { OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class TimePickerComponent implements OnInit, OnChanges, ControlValueAccessor {
    private cdRef;
    selectedDate: Date | undefined;
    displayHours: boolean;
    displayMinutes: boolean;
    displaySeconds: boolean;
    displayHours24: boolean;
    constructor(cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    private currentHour;
    private currentMinute;
    private currentSecond;
    isHourMarked(hour: number): boolean;
    isMinuteMarked(minute: number): boolean;
    isSecondMarked(second: number): boolean;
    onHourTap(hour: number): void;
    onMinuteTap(minute: number): void;
    onSecondTap(second: number): void;
    onSwitch24h(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: Date): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}