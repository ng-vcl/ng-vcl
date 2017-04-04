import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'metalist.component.html'
})
export class MetalistComponent {

  items: any = [
    { name: 'name 1', value: 1 },
    { name: 'name 2', value: 2 },
    { name: 'name 3', value: 3, selected: true },
    { name: 'name 4', value: 4 },
    { name: 'name 5', value: 5 },
  ];

  value1 = 2;
  value2 = 4;

  onChange(value: number) {
    console.log('metalist change', value);
  }
}
