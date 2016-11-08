import { Router } from '@angular/router';
import { Component, Directive, ContentChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';



@Directive({
  selector: 'vcl-navitem'
})
export class NavigationItemComponent {

  @Input()
  label;

  @Input()
  route;

  @ContentChildren(NavigationItemComponent)
  items: QueryList<NavigationItemComponent>;

  @Input()
  active: boolean = true;

  @Input()
  selected: boolean = false;

  @Input()
  opened = false;

  @Input()
  heading = false;

  @Input()
  href;

  @Input()
  prepIcon;

  @Input()
  appIcon;



  constructor() { }

  /**
   * transforms this NavigationItemComponent insto an object,
   * so it can be handled the same way as an inputList
   * @return {Object}
   */
  toObject(): Object {
    const ret = {
      label: this.label,
      active: this.active,
      selected: this.selected,
      opened: this.opened,
      heading: this.heading,
      href: this.href,
      prepIcon: this.prepIcon,
      appIcon: this.appIcon
    };

    if (this.route) ret['route'] = [this.route];

    // add nested items
    const items = [];
    const ar = this.items.toArray();
    ar.shift(); // remove first because 'this' is contained
    ar.map(navItemCom => items.push(navItemCom.toObject()));
    if (items.length > 0) ret['items'] = items; // only add if length>0 to not show nested-icons
    return ret;
  }



}



@Component({
  selector: 'vcl-navigation',
  templateUrl: 'navigation.component.html',
})
export class NavigationComponent {

  constructor(private router: Router) { }


  @Input()
  ident: string;

  @Input()
  selectedItem;

  @Input()
  ariaRole: string = 'presentation';

  @Input()
  tabindex: number = 0;

  @Input()
  touchAction: string = 'pan-y'; // TODO what does this?

  @Input()
  type: string = 'horizontal';

  @Input()
  subLevelHintIconClosed: string = 'fa:chevron-right';

  @Input()
  subLevelHintIconOpened: string = 'fa:chevron-down';

  @Input()
  subLevelHintIconSide: 'left' | 'right' = 'right';


  @ContentChildren(NavigationItemComponent)
  templateItems: QueryList<NavigationItemComponent>;

  @Input()
  navigationItems: any[] = [];

  @Output()
  select = new EventEmitter();

  ngAfterContentInit() {


    let templateItemsAr = this.templateItems.toArray();
    if (templateItemsAr.length > 0) {
      const items = [];
      templateItemsAr.map(i => items.push(i.toObject()));
      this.navigationItems = items;
    }


    const selectedItem = this._navigationItems.filter(item => item.selected)[0];
    if (selectedItem) {
      this.selectItem(selectedItem);
    }
  }

  get _navigationItems(): any[] {
    return this.navigationItems.filter(item => item.active);
  }

  get isVertical(): boolean {
    return this.type === 'vertical';
  }

  getPrepIcon(item): string {
    return item.items && this.subLevelHintIconSide === 'left'
      ? item.opened
        ? this.subLevelHintIconOpened
        : this.subLevelHintIconClosed
      : item.prepIcon;
  }

  getAppIcon(item): string {
    return item.items && this.subLevelHintIconSide === 'right'
      ? item.opened
        ? this.subLevelHintIconOpened
        : this.subLevelHintIconClosed
      : item.appIcon;
  }

  selectItem(item) {
    if (item == this.selectedItem || item.items) {
      return;
    }

    if (this.selectedItem) {
      this.selectedItem.selected = false;
    }

    item.selected = true;
    this.selectedItem = item;

    if (item.href) {
      window.location.href = item.href;
    } else if (item.route) {
      this.router.navigate(item.route);
    }

    this.select.emit(item);
  }

  onSelect(item) {
    if (this.selectedItem) {
      this.selectedItem.selected = false;
    }
    this.selectedItem = item;
    this.select.emit(item);
  }

  toggleMenu(item) {
    item.opened = !item.opened;
  }
}