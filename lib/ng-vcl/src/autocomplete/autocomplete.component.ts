import { Component, Input, ViewChild,
  ElementRef, ContentChild, ChangeDetectorRef, Output, EventEmitter, ChangeDetectionStrategy, ViewContainerRef, TemplateRef, Injector, OnDestroy } from '@angular/core';
import { NEVER, merge, Subscription } from 'rxjs';
import { startWith, switchMap, filter, take, takeUntil } from 'rxjs/operators';
import { ESCAPE } from '@angular/cdk/keycodes';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { SelectListComponent } from '../select-list/index';
import { createOffClickStream } from '../off-click/index';
import { TemplateLayerRef, LayerConfig } from '../layer/index';

export class AutocompleteConfig extends LayerConfig {
  value: string;
  target: ElementRef;
}

@Component({
  selector: 'vcl-autocomplete',
  templateUrl: 'autocomplete.component.html',
  exportAs: 'vclAutocomplete',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent extends TemplateLayerRef implements OnDestroy {

  constructor(
    injector: Injector,
    private _dir: Directionality,
    private overlay: Overlay,
    protected viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef,
  ) {
    super(injector);
  }

  private _dropdownOpenedSub?: Subscription;
  private _target?: ElementRef<HTMLElement>;

  @ContentChild(SelectListComponent, { static: false })
  selectList: SelectListComponent;

  @ViewChild(TemplateRef, { static: false })
  templateRef: TemplateRef<any>;

  @Input()
  width?: number | string;

  @Input()
  height?: number | string;

  @Input()
  maxHeight?: number | string;

  @Output()
  afterClose = new EventEmitter<any | any[]>();

  createPortal() {
    return new TemplatePortal(this.templateRef, this.viewContainerRef);
  }

  get isOpen() {
    return this.isAttached;
  }

  getLayerConfig() {
    return new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      direction: this._dir,
      width: this.width !== undefined ? this.width : this._target.nativeElement.getBoundingClientRect().width,
      height: this.height,
      maxHeight: this.maxHeight || '20em',
      panelClass: [],
      positionStrategy: this.overlay.position()
      .flexibleConnectedTo(this._target)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom'
        }
      ])
    });
  }

  open(config: AutocompleteConfig) {
    this.selectList.writeValue(config.value);
    this._target = config.target;
    return super.open(config);
  }

  protected afterAttached(): void {
    super.afterAttached();
    this.selectList.valueChange.pipe(
      takeUntil(this.afterClose),
      take(1)
    ).subscribe((value) => {
      if (this.isAttached) {
        this.close(value);
      }
    });

    this._dropdownOpenedSub = this.selectList.itemsChange.pipe(
      // tslint:disable-next-line:deprecation
      startWith(undefined),
      switchMap(() => {
        if (!this.isAttached) {
          return NEVER;
        }
        return merge(
          this.overlayRef.keydownEvents().pipe(
            filter(event => {
              return event.keyCode === ESCAPE;
            })
          ),
          createOffClickStream([this.overlayRef.overlayElement, this._target.nativeElement], {
            document: this.injector.get(DOCUMENT)
          })
        );
      })
    ).subscribe(() => {
      this.close();
    });
  }

  protected afterDetached(result?: any) {
    super.afterDetached(result);
    if (!this.isDestroyed) {
      // We need to trigger change detection manually, because
      // `fromEvent` doesn't seem to do it at the proper time.
      this.cdRef.detectChanges();
    }
    this._target = undefined;
    this._dropdownOpenedSub && this._dropdownOpenedSub.unsubscribe();
    this.selectList.highlight(undefined);
    this.afterClose.emit(result);
  }

  ngOnDestroy() {
    this.destroy();
  }
}
