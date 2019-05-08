import { Component, Input, HostBinding, ViewChild,
  ElementRef, HostListener, ContentChild, forwardRef, ChangeDetectorRef, Output, EventEmitter, Optional, Inject, OnDestroy, ChangeDetectionStrategy, ViewContainerRef, TemplateRef, Injector } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ESCAPE, UP_ARROW, DOWN_ARROW, TAB } from '@angular/cdk/keycodes';
import { Subject, NEVER, merge, Subscription } from 'rxjs';
import { FormControlInput, FORM_CONTROL_INPUT, FORM_CONTROL_HOST, FormControlHost, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent } from '../form-control-group/index';
import { SelectListDirective } from '../select-list/index';
import { TemplateOverlay } from '../overlay/index';
import { SelectListItem } from '../select-list/types';
import { OverlayConfig, Overlay } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { startWith, switchMap, filter, take, takeUntil } from 'rxjs/operators';
import { createOffClickStream } from '../off-click/index';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'vcl-select',
  templateUrl: 'select.component.html',
  exportAs: 'vclSelect',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent extends TemplateOverlay<SelectListItem, any> implements OnDestroy {

  constructor(
    injector: Injector,
    private _dir: Directionality,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef<HTMLElement>,
    private cdRef: ChangeDetectorRef,
  ) {
    super(injector);
  }

  private _dropdownOpenedSub?: Subscription;
  private _focused = false;

  @ContentChild(SelectListDirective)
  selectList: SelectListDirective;

  @ViewChild('input', { read: ElementRef })
  input: ElementRef<HTMLInputElement>;

  @ViewChild('btn', { read: ElementRef })
  button: ElementRef<HTMLInputElement>;

  @ViewChild(TemplateRef)
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
  label?: string;

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
      this.attach();
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
      this.detach();
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
          this.attach();
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
      this.detach();
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
      return item ? item.label : (this.label || '');
    } else {
      const value = Array.isArray(this.selectList.value) ? this.selectList.value : [];

      const items = this.selectList.getItems();
      const labels = items.filter(item => value.includes(item.value)).map(item => item.label);

      return labels.length === 0 ? (this.label || '') : labels.join(', ');
    }
  }

  protected getTemplateRef(): TemplateRef<any> {
    return this.templateRef;
  }
  protected getViewContainerRef(): ViewContainerRef {
    return this.viewContainerRef;
  }

  @HostListener('click')
  onClick() {
    if (this.isAttached) {
      this.detach();
    } else {
      this.attach();
    }
  }

  protected attach() {
    const config = new OverlayConfig({
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      direction: this._dir,
      width: this.width !== undefined ? this.width : this.elementRef.nativeElement.getBoundingClientRect().width,
      height: this.height,
      maxHeight: this.maxHeight || '20em',
      panelClass: [],
      positionStrategy: this.overlay.position()
      .connectedTo(this.elementRef, {
        originX: 'start',
        originY: 'bottom'
      }, {
        overlayX: 'start',
        overlayY: 'top'
      }).withFallbackPosition({
        originX: 'start',
        originY: 'top'
      }, {
        overlayX: 'start',
        overlayY: 'bottom'
      })
    });
    super.attach(config);
  }

  onLabelClick(event: Event): void {
    if (this.isAttached) {
      return;
    }
    this.attach();
  }

  protected afterAttached(): void {
    this.selectList.valueChange.pipe(
      takeUntil(this.afterClose)
    ).subscribe(() => {
      if (this.isAttached) {
        if (this.selectList.selectionMode === 'single') {
          this.detach();
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
        return merge(
          this.overlayRef.keydownEvents().pipe(
            filter(event => {
              return event.keyCode === ESCAPE;
            })
          ),
          createOffClickStream([this.overlayRef.overlayElement, this.elementRef.nativeElement], {
            document: this.injector.get(DOCUMENT)
          })
        );
      })
    ).subscribe(() => {
      this.detach();
    });
  }

  protected afterDetached(result) {
    if (!this.isDestroyed) {
      // We need to trigger change detection manually, because
      // `fromEvent` doesn't seem to do it at the proper time.
      this.cdRef.detectChanges();
    }
    this._dropdownOpenedSub && this._dropdownOpenedSub.unsubscribe();
    this.selectList.highlight(undefined);
    this.afterClose.emit(this.selectList.value);
  }

  ngOnDestroy() {
    this.destroy();
  }
}
