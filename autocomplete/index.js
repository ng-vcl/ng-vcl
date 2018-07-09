var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VCLPopoverModule } from '../popover/index';
import { VCLInputModule } from '../input/index';
import { VCLTokenModule } from '../token/index';
import { Autocomplete, AutocompleteOption, AutocompleteContent } from './autocomplete.component';
import { InputAutocompleteDirective } from './input.autocomplete.directive';
import { TokenInputAutocompleteDirective } from './token-input.autocomplete.directive';
export { Autocomplete, AutocompleteOption, AutocompleteContent, InputAutocompleteDirective, TokenInputAutocompleteDirective };
var VCLAutocompleteModule = /** @class */ (function () {
    function VCLAutocompleteModule() {
    }
    VCLAutocompleteModule = __decorate([
        NgModule({
            imports: [CommonModule, VCLInputModule, VCLPopoverModule, VCLTokenModule],
            exports: [InputAutocompleteDirective, Autocomplete, AutocompleteOption, AutocompleteContent, TokenInputAutocompleteDirective],
            declarations: [InputAutocompleteDirective, Autocomplete, AutocompleteOption, AutocompleteContent, TokenInputAutocompleteDirective],
            providers: [],
        })
    ], VCLAutocompleteModule);
    return VCLAutocompleteModule;
}());
export { VCLAutocompleteModule };
