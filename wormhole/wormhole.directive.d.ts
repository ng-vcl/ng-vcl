import { ViewContainerRef, SimpleChanges } from '@angular/core';
import { Wormhole, WormholeAttributes } from './wormhole-base';
import { WormholeHost } from './wormhole-host';
export declare class WormholeDirective extends WormholeHost {
    constructor(viewContainerRef: ViewContainerRef);
    readonly isConnected: boolean;
    target: any;
    attrs: WormholeAttributes;
    wormhole: Wormhole;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
