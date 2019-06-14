import {
  Component,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  HostListener,
  ContentChild,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  OnDestroy,
  ChangeDetectionStrategy,
  ViewContainerRef,
  TemplateRef,
  Injector,
  forwardRef, Optional, Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NEVER, merge, Subscription } from 'rxjs';
import { startWith, switchMap, filter, takeUntil } from 'rxjs/operators';
import { ESCAPE, UP_ARROW, DOWN_ARROW, TAB } from '@angular/cdk/keycodes';
import { OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { TemplatePortal } from '@angular/cdk/portal';
import { createOffClickStream } from '../off-click/index';
import { TemplateLayerRef, LayerConfig } from '../layer/index';
import { SelectListItem, SelectListComponent } from '../select-list/index';

@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  exportAs: 'vclSelect',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent extends TemplateLayerRef<any, SelectListItem> implements OnDestroy {

  constructor(
    injector: Injector,
    private _dir: Directionality,
    private overlay: Overlay,
    protected viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef<HTMLElement>,
    private cdRef: ChangeDetectorRef,
  ) {
    super(injector);
  }

  private _dropdownOpenedSub?: Subscription;
  private _focused = false;

  @ContentChild(SelectListComponent, { static: false })
  selectList: SelectListComponent;

  @ViewChild('input', { read: ElementRef, static: true })
  input: ElementRef<HTMLInputElement>;

  @ViewChild('btn', { read: ElementRef, static: true })
  button: ElementRef<HTMLInputElement>;

  @ViewChild(TemplateRef, { static: true })
  templateRef: TemplateRef<any>;

  @HostBinding('attr.role')
  attrRole = 'listbox';

  @HostBinding('class.vclSelect')
  @HostBinding('class.vclInputGroupEmb')
  _hostClasses = true;

  @HostBinding('attr.tabindex')
  @Input()
  tabindex = 0;

  @Input()
  width?: number | string;

  @Input()
  height?: number | string;

  @Input()
  maxHeight?: number | string;

  @Input()
  placeholder?: string;

  @Output()
  afterClose = new EventEmitter<any | any[]>();

  get isFocused() {
    return this._focused || this.isAttached;
  }

  get isDisabled() {
    return this.selectList.isDisabled;
  }

  @HostBinding('class.vclError')
  get hasError() {
    return this.selectList.hasError;
  }

  @HostListener('focus')
  onFocus() {
    this._focused = true;
    if (!this.isAttached) {
      this.open();
    }
  }

  @HostListener('blur')
  onBlur() {
    this._focused = false;
    this.selectList.onTouched();
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    const code = event.keyCode;
    if (code === ESCAPE) {
      this.close();
      this.elementRef.nativeElement.blur();
    } else if (code === UP_ARROW) {
      this.selectList && this.selectList.highlightPrev();
      event.preventDefault();
      return false;
    } else if (code === DOWN_ARROW) {
      if (this.isAttached) {
        this.selectList && this.selectList.highlightNext();
      } else {
        if (!this.isAttached) {
          this.open();
        }
      }
      event.preventDefault();
      return false;
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const code = event.keyCode;
    if (code === TAB) {
      this.close();
    }
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const code = event.code || event.key;
    if (this.selectList && code === 'Enter') {
      event.preventDefault();
      this.selectList.selectHighlighted();
    }
  }

  get inputValue() {
    if (!this.selectList) {
      return '';
    }

    if (this.selectList.selectionMode === 'single') {
      const items = this.selectList.getItems();
      const item = items.find(_item => this.selectList.value === _item.value);
      return item ? item.label : (this.placeholder || '');
    } else {
      const value = Array.isArray(this.selectList.value) ? this.selectList.value : [];
      const items = this.selectList.getItems();
      const labels = items.filter(item => value.includes(item.value)).map(item => item.label);
      return labels.length === 0 ? (this.placeholder || '') : labels.join(', ');
    }
  }

  createPortal() {
    return new TemplatePortal(this.templateRef, this.viewContainerRef);
  }

  @HostListener('click')
  onClick() {
    if (!this.isAttached) {
      this.open();
    } else {
      this.close();
    }
  }

  protected getLayerConfig(): LayerConfig {
    return new LayerConfig({
      closeOnEscape: true,
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.reposition({
        autoClose: true
      }),
      direction: this._dir,
      width: this.width !== undefined ? this.width : this.elementRef.nativeElement.getBoundingClientRect().width,
      height: this.height,
      maxHeight: this.maxHeight || '20em',
      panelClass: [],
      positionStrategy: this.overlay.position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }]).withPush(false)
    });
  }

  onLabelClick(event: Event): void {
    if (this.isAttached) {
      return;
    }
    this.open();
  }

  protected afterAttached(): void {
    this.selectList.valueChange.pipe(
      takeUntil(this.afterClose)
    ).subscribe((value) => {
      if (this.isAttached) {
        if (this.selectList.selectionMode === 'single') {
          this.close(value);
        } else {
          this.cdRef.markForCheck();
        }
      }
    });

    this._dropdownOpenedSub = this.selectList.itemsChange.pipe(
      startWith(undefined),
      switchMap(() => {
        if (!this.isAttached) {
          return NEVER;
        }
        return createOffClickStream([this.overlayRef.overlayElement, this.elementRef.nativeElement], {
          document: this.injector.get(DOCUMENT)
        });
      })
    ).subscribe(() => {
      this.close();
    });
  }

  protected afterDetached(result) {
    this._dropdownOpenedSub && this._dropdownOpenedSub.unsubscribe();
    this.selectList.highlight(undefined);
    this.afterClose.emit(this.selectList.value);
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    this.destroy();
  }
}
