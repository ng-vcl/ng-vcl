import { EventEmitter } from '@angular/core';
export declare class ButtonSelectDirective {
    selectable: boolean | undefined;
    selected: boolean;
    select: EventEmitter<boolean>;
    onClick(): void;
}
