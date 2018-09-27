import { HintService } from './hint.service';
export declare class TourOverlayComponent {
    hint: HintService;
    show: boolean;
    constructor(hint: HintService);
    dismiss(): void;
}
