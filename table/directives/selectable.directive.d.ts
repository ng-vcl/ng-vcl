import { ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { TableService } from '../services/table.service';
export declare class SelectableDirective implements OnChanges {
    private renderer;
    private el;
    selectable: boolean | '';
    tableService: TableService;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
}
