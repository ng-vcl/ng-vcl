import { OnInit, OnChanges, EventEmitter, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CalendarDate } from './calendar-date';
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export interface DatePickerConfig {
    closeOnSelect?: boolean;
    disabled?: boolean;
    highlightToday?: boolean;
    highlightSelected?: boolean;
    displayWeekNumbers?: boolean;
    displayWeekdays?: boolean;
    displayDate?: boolean;
    displayTime?: boolean;
    displayHours24?: boolean;
    displayHours?: boolean;
    displayMinutes?: boolean;
    displaySeconds?: boolean;
    prevYearBtnIcon?: string;
    nextYearBtnIcon?: string;
    displayJumpToday?: boolean;
    displayJumpSelected?: boolean;
    selectedDate?: Date | undefined;
    selectRange?: boolean;
    selectedRangeEnd?: Date | undefined;
    maxRangeLength?: number;
    minDate?: Date | undefined;
    maxDate?: Date | undefined;
}
export declare class DatePickerComponent implements OnInit, OnChanges, ControlValueAccessor {
    private cdRef;
    static readonly Tag: string;
    private readonly tag;
    private readonly debug;
    closeOnSelect: boolean;
    disabled: boolean;
    highlightToday: boolean;
    highlightSelected: boolean;
    displayWeekNumbers: boolean;
    displayWeekdays: boolean;
    displayDate: boolean;
    displayTime: boolean;
    displayHours24: boolean;
    displayHours: boolean;
    displayMinutes: boolean;
    displaySeconds: boolean;
    prevYearBtnIcon: string;
    nextYearBtnIcon: string;
    displayJumpToday: boolean;
    displayJumpSelected: boolean;
    selectedDate: Date | undefined;
    selectRange: boolean;
    selectedRangeEnd: Date | undefined;
    maxRangeLength: number;
    minDate: Date | undefined;
    maxDate: Date | undefined;
    config: DatePickerConfig | undefined;
    change: EventEmitter<Date | (Date | undefined)[]>;
    currentDate: CalendarDate | undefined;
    currentRangeEnd: CalendarDate | undefined;
    viewDate: CalendarDate;
    today: CalendarDate;
    showYearPick: boolean;
    constructor(cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setDate(date?: Date): void;
    showYear(): void;
    onDateTap(date: CalendarDate): void;
    /**
     * activate the given date
     */
    select(date: CalendarDate): void;
    /**
     * ui-markers
     */
    isMarked(date: CalendarDate): boolean;
    isBeginning(date: CalendarDate): boolean;
    isEnd(date: CalendarDate): boolean;
    isDayDisabled(day: CalendarDate): boolean;
    /**
     * functions to move viewDate
     */
    nextMonth(): void;
    prevMonth(): void;
    gotoToday(): void;
    gotoSelected(): void;
    yearPickSelect(year: number): void;
    /**
     * things needed for ControlValueAccessor-Interface
     */
    private onTouchedCallback;
    private onChangeCallback;
    writeValue(value: Date): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    timeChange(date: Date): void;
}
