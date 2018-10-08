import { EventEmitter, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export interface Month {
    date: string;
    label: string;
    available?: boolean;
    selected?: boolean;
    preselected?: boolean;
    color?: string;
}
export declare class MonthPickerComponent implements ControlValueAccessor {
    private readonly ref;
    static readonly Tag: string;
    readonly tag: string;
    static readonly MonthCount: number;
    readonly now: Date;
    months: string[];
    yearMeta: any;
    currentMeta: any[];
    availableColors: boolean[];
    debug: boolean;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    currentYear: number;
    currentYearChange: EventEmitter<number>;
    prevYearBtnTap: EventEmitter<{}>;
    nextYearBtnTap: EventEmitter<{}>;
    select: EventEmitter<string>;
    deselect: EventEmitter<string>;
    tabindex: number;
    monthsPerRow: number;
    colors: string[];
    locales: string | string[];
    dateOptions: Intl.DateTimeFormatOptions;
    expandable: boolean;
    prevYearAvailable: boolean;
    nextYearAvailable: boolean;
    useAvailableMonths: boolean;
    closeBtnIcon: string;
    prevYearBtnIcon: string;
    nextYearBtnIcon: string;
    maxSelectableMonths: number;
    minSelectableMonths: number;
    minYear: number;
    maxYear: number;
    change: EventEmitter<Date | (Date | undefined)[]>;
    minValue: Date;
    min: Date;
    maxValue: Date;
    max: Date;
    setAvailableMonths(): void;
    onModelChange(value: any): void;
    writeValue(value: Date): void;
    onTouchedCallback: (_: any) => void;
    onChangeCallback: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    constructor(ref: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setYearMeta(year: number): void;
    createYearMeta(year: number): any[];
    selectMonth(year: number, month: number): void;
    preselectMonth(year: number, month: number, color: string): void;
    dePreselectMonth(year: number, month: number): void;
    isMonthAvailable(year: number, month: number): boolean;
    isDateInBounds(year: number, month: number): boolean;
    isMonthInBounds(month: number): boolean;
    isYearInBounds(year: number): boolean;
    isMonthPreselected(year: number, month: number): boolean;
    getYearMeta(year: number): any[];
    iterateMonthMetas(cb: any): void;
    getSelectedDates(): string[];
    setMonthBackgroundColor(year: number, month: number): void;
    getMonthBackgroundColor(): string | undefined;
    deselectMonth(year: number, month: number): void;
    isMonthSelected(year: number, month: number): boolean;
    clearMonthBackgroundColor(year: number, month: number): void;
    deselectAllMonths(): void;
    addAvailableMonthRange(min?: Date, max?: Date): void;
    addAvailableMonth(year: number, month: number): void;
    removeAvailableMonth(year: number, month: number): void;
    removeAllAvailableMonths(): void;
    onPrevYearTap(): void;
    onNextYearTap(): void;
    onCloseBtnTap(): void;
    notifySelect(date: string): void;
    notifyDeselect(date: string): void;
    isCurrentMonth(year: number, month?: number): boolean;
    getMonth(year: number, month: number): any;
}