import { ElementRef, Renderer2, SimpleChanges, OnChanges } from '@angular/core';
import { TableService } from '../services/table.service';
export declare class DisableDirective implements OnChanges {
    private renderer;
    private el;
    disabled: boolean | '';
    tableService: TableService;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
}
