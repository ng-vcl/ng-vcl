import { ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import { TableService } from '../services/table.service';
export declare class AlignmentCenterDirective {
    private renderer;
    private el;
    align: boolean | '';
    tableService: TableService;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
}
