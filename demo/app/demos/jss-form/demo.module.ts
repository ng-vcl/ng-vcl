import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VCLJssFormModule, VCLNotifierModule, VCLButtonModule, VCLIcogramModule } from '@ng-vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { JssFormDemoComponent } from './demo.component';
import { FormFieldCounterComponent } from './jss-form-extended';
import { VCLCounterModule } from '../form-control-group/counter.component';

export function demo() {
  return {
    label: 'JSS-Form',
    tabs: {
      Demo: JssFormDemoComponent,
      'README.md': {
        type: 'md',
        content: require('raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/jss-form/README.md')
      },
      'demo.component.html': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=html!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./demo.component.ts')
      },
      'jss-form-extended.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./jss-form-extended.ts')
      },
      'hero.ts': {
        type: 'pre',
        content: require('!highlight-loader?raw=true&lang=ts!./hero.ts')
      }
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoModule,
    VCLCounterModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLJssFormModule,
    VCLNotifierModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ JssFormDemoComponent, FormFieldCounterComponent ],
  declarations: [ JssFormDemoComponent, FormFieldCounterComponent ]
})
export class VCLJssFormDemoModule { }