import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VCLSliderModule} from '@vcl/ng-vcl';
import { DemoModule, DemoComponent } from './../../modules/demo/demo.module';
import { SliderDemoComponent } from './demo.component';
import README from '!raw-loader!@vcl/ng-vcl/slider/README.md';

export function demo() {
  return {
    label: 'Slider',
    tabs: {
      Demo: SliderDemoComponent,
      'README.md': {
        type: 'md',
        content: README
      },
      'demo.component.html': {
        type: 'html',
        content: require('!raw-loader!./demo.component.html')
      },
      'demo.component.ts': {
        type: 'ts',
        content: require('!raw-loader!./demo.component.ts')
      }
    }
  };
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoModule,
    VCLSliderModule,
    RouterModule.forChild([{
      path: '',
      component: DemoComponent,
      data: {demo}
    }]),
  ],
  entryComponents: [ SliderDemoComponent ],
  declarations: [ SliderDemoComponent ]
})
export class SliderDemoModule { }
