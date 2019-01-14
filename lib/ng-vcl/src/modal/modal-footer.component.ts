import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'vcl-modal-footer',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalFooterComponent { }