import { Observer } from 'rxjs';
import { NotifierOptions, NotifierPosition } from './types';
import { Notifier } from './notifier';
import { LayerService, LayerRef } from '../layer/index';
export declare class NotifierLayerRef extends LayerRef {
    notifiers: Notifier[];
}
export declare class NotifierService implements Observer<NotifierOptions> {
    private ls;
    readonly closed: boolean;
    constructor(ls: LayerService);
    layers: Map<NotifierPosition, NotifierLayerRef>;
    next(opts: NotifierOptions): void;
    complete: () => void;
    info(opts?: NotifierOptions): void;
    success(opts?: NotifierOptions): void;
    warning(opts?: NotifierOptions): void;
    error(opts?: NotifierOptions): void;
    queue(...opts: NotifierOptions[]): void;
}
