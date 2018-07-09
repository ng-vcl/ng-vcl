import { EventEmitter, ElementRef } from '@angular/core';
import { AlertOptions } from './types';
export declare class AlertInputComponent {
    input: ElementRef;
    alert: AlertOptions;
    valueChange: EventEmitter<any>;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    readonly control: string | null;
    readonly placeholder: string;
    inputValue: string;
    inputValueChange(value: string): void;
}
