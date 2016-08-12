import {NgModule } from '@angular/core';

import { VCLIconModule,  } from './components/icon/icon.module';
import { VCLIcogramModule } from './components/icogram/icogram.module';
import { VCLButtonModule } from './components/button/button.module';
import { VCLLayerModule } from './components/layer/layer.module';

export * from './components/icon/icon.module';
export * from './components/icogram/icogram.module';
export * from './components/button/button.module';

import { IconService } from './services/icon.service';

export * from './services/icon.service';

@NgModule({
  imports: [
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLLayerModule,
  ],
  exports: [
    VCLIconModule,
    VCLIcogramModule,
    VCLButtonModule,
    VCLLayerModule,
  ],
  providers: [IconService],
})
export class VCLModule { }
