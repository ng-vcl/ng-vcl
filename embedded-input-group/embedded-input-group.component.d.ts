import { QueryList } from '@angular/core';
import { ObservableComponent } from '../core/index';
import { InputDirective } from '../input/index';
import { ButtonDirective } from '../button/index';
export declare class EmbeddedInputGroupComponent extends ObservableComponent {
    disabled: boolean;
    prepIcon?: string;
    appIcon?: string;
    buttons?: QueryList<EmbeddedButtonDirective>;
    readonly hasAppendedItem: boolean | undefined;
}
export declare class EmbeddedInputDirective {
    private input;
    private inputGroup;
    constructor(input: InputDirective, inputGroup: EmbeddedInputGroupComponent);
    readonly isDisabled: boolean;
    readonly classDisabled: boolean;
    readonly attrDisabled: boolean | null;
    readonly prepItem: boolean;
    readonly hasAppendedItem: boolean | undefined;
}
export declare class EmbeddedButtonDirective {
    private button;
    private inputGroup;
    constructor(button: ButtonDirective, inputGroup: EmbeddedInputGroupComponent);
    readonly isDisabled: boolean | null;
}
