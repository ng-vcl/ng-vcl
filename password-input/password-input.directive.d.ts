import { PasswordInputComponent } from './password-input.component';
import { InputDirective } from '../input/index';
export declare class PasswordInputDirective {
    private input;
    private passwordInput;
    constructor(input: InputDirective, passwordInput: PasswordInputComponent);
    readonly isDisabled: boolean | null;
    readonly type: string;
}
