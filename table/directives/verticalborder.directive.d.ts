import { ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import { TableService } from '../services/table.service';
export declare class VerticalBorderDirective {
    private renderer;
    private el;
    border: boolean | '';
    tableService: TableService;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
}
