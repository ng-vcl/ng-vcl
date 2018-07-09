import { ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import { TableService } from '../services/table.service';
export declare class BreakingWordsDirective {
    private renderer;
    private el;
    breakWords: boolean | '';
    tableService: TableService;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
}
