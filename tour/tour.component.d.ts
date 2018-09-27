import { OnInit } from '@angular/core';
import { HintService } from './hint.service';
export declare class TourComponent implements OnInit {
    hint: HintService;
    title: string;
    selector: string;
    order: number;
    position: string;
    showMe: boolean;
    hasNext: boolean;
    hasPrevious: boolean;
    topPos: number;
    leftPos: number;
    transformClass: string;
    transformY: boolean;
    transformX: boolean;
    constructor(hint: HintService);
    ngOnInit(): void;
    showStep(): void;
    hideStep(): void;
    exit(): void;
    next(): void;
    previous(): void;
    private disableClick(element);
    private enableClick(element);
    private enableHighlight(element);
    private disableHighlight(element);
}
