import { EventEmitter } from '@angular/core';
import { LayerRef } from '../layer/index';
import { ModalBodyComponent } from './modal-body.component';
import { ModalFooterComponent } from './modal-footer.component';
export declare class ModalComponent {
    closeButton: boolean;
    title: string;
    class: string;
    bodyComponent: ModalBodyComponent | null;
    footerComponent: ModalFooterComponent | null;
    tapButton: EventEmitter<string>;
    layerModal: LayerRef;
    open(): void;
    close(): void;
}
