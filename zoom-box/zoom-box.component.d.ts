import { ZoomBoxContainerComponent } from './zoom-box-container.component';
export declare class ZoomBoxComponent {
    target: ZoomBoxContainerComponent;
    image: string | null;
    scale: number;
    readonly zoomedSource: string;
    readonly zoomedX: number;
    readonly zoomedY: number;
    readonly zoomedWidth: number;
    readonly zoomedHeight: number;
}
