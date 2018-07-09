import { Observable } from 'rxjs';
import { AlertOptions, AlertResult } from './types';
import { LayerService, LayerRef, LayerResult } from './../layer/index';
export declare class AlertService {
    private ls;
    constructor(ls: LayerService);
    currentLayer: LayerRef | undefined;
    alert(text: string, opts?: AlertOptions): Observable<AlertResult>;
    info(text: string, opts?: AlertOptions): Observable<AlertResult>;
    success(text: string, opts?: AlertOptions): Observable<AlertResult>;
    warning(text: string, opts?: AlertOptions): Observable<AlertResult>;
    error(text: string, opts?: AlertOptions): Observable<AlertResult>;
    question(text: string, opts?: AlertOptions): Observable<AlertResult>;
    open(...opts: AlertOptions[]): LayerResult<AlertResult>;
    create(...opts: AlertOptions[]): LayerRef;
    noop: () => void;
}
