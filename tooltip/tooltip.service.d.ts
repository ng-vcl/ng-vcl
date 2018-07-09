import { ICoordinate } from './ICoordinate';
export declare class TooltipService {
    offsetCorrection: number;
    positionElements(hostEl: HTMLElement, targetEl: HTMLElement, positionStr: string, appendToBody?: boolean): ICoordinate;
    private position(nativeEl);
    private offset(nativeEl);
    private getStyle(nativeEl, cssProp);
    private isStaticPositioned(nativeEl);
    private parentOffsetEl(nativeEl);
}
