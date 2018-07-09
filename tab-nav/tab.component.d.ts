import { TemplateRef } from '@angular/core';
export declare class TabLabelDirective {
}
export declare class TabComponent {
    label: TabLabelDirective;
    content: TemplateRef<any>;
    disabled: boolean;
    tabClass: string;
}
