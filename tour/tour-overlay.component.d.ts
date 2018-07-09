import { HintService } from './hint.service';
export declare class TourOverlayComponent {
    hintService: HintService;
    show: boolean;
    constructor(hintService: HintService);
    dismiss(): void;
}
