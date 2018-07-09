import { Observable, Subject } from 'rxjs';
import { NotifierOptions } from './types';
export declare class Notifier extends Observable<any> {
    private opts;
    closeSubject: Subject<{}>;
    constructor(opts: NotifierOptions);
    state: string;
    close(): void;
    mouseEnter(): void;
    mouseLeave(): void;
    readonly text: string | undefined;
    readonly html: boolean | undefined;
    readonly showCloseButton: boolean | undefined;
    readonly backgroundColor: string | undefined;
    readonly textColor: string | undefined;
    readonly layerClass: any;
    readonly iconClass: any;
    readonly calculatedTimeout: number | null;
}
