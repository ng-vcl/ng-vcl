import { ElementRef, Renderer2, EventEmitter } from '@angular/core';
import { SortIconComponent } from '../components/sorticon.component';
import { TableService } from '../services/table.service';
export declare class SortDirective {
    private renderer;
    private el;
    sortIconComponent: SortIconComponent;
    change: EventEmitter<-1 | 0 | 1>;
    isHeader: boolean;
    order: -1 | 0 | 1;
    tableService: TableService;
    constructor(renderer: Renderer2, el: ElementRef);
    OnChangeOrder(): void;
}
