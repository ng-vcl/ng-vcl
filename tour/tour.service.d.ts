import { Subject } from 'rxjs';
import { TourComponent } from './tour.component';
export declare class TourOptions {
    debug: boolean;
    debugTour: boolean;
    debugPopover: boolean;
    useOrder: boolean;
    elementsDisabled: boolean;
    applyRelative: boolean;
    dismissOnOverlay: boolean;
    zIndex: number;
    previousLabel: string;
    nextLabel: string;
    exitLabel: string;
    previousIcon: string;
    nextIcon: string;
    exitIcon: string;
    buttonClass: string;
    offsetAttachmentX: number;
    offsetAttachmentY: number;
}
export declare class TourService {
    private static readonly Tag;
    private readonly tag;
    private debug;
    options: TourOptions;
    private _tourComponents;
    private tourComponents;
    private tourComponent;
    private index;
    end$: Subject<boolean>;
    tourComponent$: Subject<TourComponent>;
    private _showOverlay;
    showOverlay: boolean;
    readonly hasPrevious: boolean;
    readonly hasNext: boolean;
    register(tourComponent: TourComponent): void;
    initialize(options?: TourOptions): void;
    start(index?: number): void;
    show(index: number): void;
    showPrevious(): void;
    showNext(): void;
    end(): void;
    onOverlayClick(): void;
}
