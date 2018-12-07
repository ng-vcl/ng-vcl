import { EventEmitter } from '@angular/core';
import { LayerRef } from '@ng-vcl/ng-vcl';
export interface ButtonOptions {
    label?: string;
    class?: string;
    onTap?: string;
}
export declare class ModalComponent {
    buttons: ButtonOptions[];
    showClose: boolean;
    title: string;
    class: string;
    tapButton: EventEmitter<string>;
    layerModal: LayerRef;
    open(): void;
    close(): void;
}
