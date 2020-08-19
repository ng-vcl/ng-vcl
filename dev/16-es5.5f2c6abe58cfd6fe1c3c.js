!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4pD4":function(e,t,a){"use strict";a.r(t),t.default="import { Component } from '@angular/core';\nimport { VCLDateRange, VCLDateAdapter } from '@vcl/ng-vcl';\nimport { VCLCalendarDateModifier } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'demo.component.html',\n  styles: [`\n  vcl-calendar {\n    width: 18em;\n  }\n  `]\n})\nexport class CalendarDemoComponent {\n  constructor(private dateAdapter: VCLDateAdapter<Date>) { }\n\n  date: Date;\n  get sdate() {\n    return this.dateAdapter.format(this.date, 'date');\n  }\n  dateRange: VCLDateRange<Date>;\n  get sdateRange() {\n    if (this.dateAdapter.isRange(this.dateRange)) {\n      return this.dateAdapter.format(this.dateRange.start, 'date') + ' - ' + this.dateAdapter.format(this.dateRange.end, 'date');\n    }\n    return '-';\n  }\n  dateArray: Date[] = [];\n  get sdateArray() {\n    return this.dateArray.map(d => this.dateAdapter.format(d, 'date')).join(', ');\n  }\n\n  month: Date;\n  get smonth() {\n    return this.dateAdapter.format(this.month, 'yearMonth');\n  }\n  monthRange: VCLDateRange<Date>;\n  get smonthRange() {\n    if (this.dateAdapter.isRange(this.monthRange)) {\n      return this.dateAdapter.format(this.monthRange.start, 'yearMonth') + ' - ' + this.dateAdapter.format(this.monthRange.end, 'yearMonth');\n    }\n    return '-';\n  }\n  monthArray: Date[] = [];\n  get smonthArray() {\n    return this.monthArray.map(d => this.dateAdapter.format(d, 'yearMonth')).join(', ');\n  }\n\n  today = this.dateAdapter.today();\n\n  available: VCLCalendarDateModifier<Date>[] = [\n    {\n      // Set vclAvailable class on specific range\n      match: {\n        start: this.dateAdapter.addDays(this.dateAdapter.today(), 1),\n        end: this.dateAdapter.addDays(this.dateAdapter.today(), 14),\n      },\n      class: 'available',\n      view: 'month' // Limit to month view\n    }, {\n      // Set vclUnavailable class and disable on specific range\n      match: this.dateAdapter.always(), // Still works as first modifier is prioritized\n      class: 'unavailable',\n      disabled: true,\n      view: 'month' // Limit to month view\n    }\n  ];\n}\n"},CNrg:function(a,n,r){"use strict";r.r(n),r.d(n,"demo",(function(){return v})),r.d(n,"CalendarDemoModule",(function(){return p}));var l=r("ofXK"),o=r("tyNb"),d=r("19H1"),i=r("2FIb"),c=r("fXoL"),s=r("VSXH"),h=r("6B8K");function m(e,t){if(1&e){var a=c.Qb();c.Pb(0,"div",10),c.Pb(1,"div",11),c.Pb(2,"div",12),c.Pb(3,"button",13),c.Wb("click",(function(){c.lc(a);var e=c.Zb();return c.kc(33).viewDate=e.today})),c.xc(4," go to today "),c.Ob(),c.Pb(5,"button",14),c.Wb("click",(function(){c.lc(a),c.Zb();var e=c.kc(33);return e.viewDate=e.value})),c.xc(6," go to selected "),c.Ob(),c.Ob(),c.Ob(),c.Ob()}}var u,b=((u=function(){function a(t){e(this,a),this.dateAdapter=t,this.dateArray=[],this.monthArray=[],this.today=this.dateAdapter.today(),this.available=[{match:{start:this.dateAdapter.addDays(this.dateAdapter.today(),1),end:this.dateAdapter.addDays(this.dateAdapter.today(),14)},class:"available",view:"month"},{match:this.dateAdapter.always(),class:"unavailable",disabled:!0,view:"month"}]}var n,r,l;return n=a,(r=[{key:"sdate",get:function(){return this.dateAdapter.format(this.date,"date")}},{key:"sdateRange",get:function(){return this.dateAdapter.isRange(this.dateRange)?this.dateAdapter.format(this.dateRange.start,"date")+" - "+this.dateAdapter.format(this.dateRange.end,"date"):"-"}},{key:"sdateArray",get:function(){var e=this;return this.dateArray.map((function(t){return e.dateAdapter.format(t,"date")})).join(", ")}},{key:"smonth",get:function(){return this.dateAdapter.format(this.month,"yearMonth")}},{key:"smonthRange",get:function(){return this.dateAdapter.isRange(this.monthRange)?this.dateAdapter.format(this.monthRange.start,"yearMonth")+" - "+this.dateAdapter.format(this.monthRange.end,"yearMonth"):"-"}},{key:"smonthArray",get:function(){var e=this;return this.monthArray.map((function(t){return e.dateAdapter.format(t,"yearMonth")})).join(", ")}}])&&t(n.prototype,r),l&&t(n,l),a}()).\u0275fac=function(e){return new(e||u)(c.Jb(d.VCLDateAdapter))},u.\u0275cmp=c.Db({type:u,selectors:[["ng-component"]],decls:35,vars:17,consts:[[3,"value","valueChange"],["selectionMode","range",3,"value","valueChange"],["selectionMode","multiple",3,"value","maxSelectableDates","valueChange"],["selectionMode","month",3,"value","valueChange"],["selectionMode","month-range",3,"value","valueChange"],["selectionMode","month-multiple",3,"value","maxSelectableDates","valueChange"],[3,"disabled"],[3,"dateModifiers"],["c","vclCalendar"],["vclCalendarFooter","","class","d-g-row",4,"ngIf"],["vclCalendarFooter","",1,"d-g-row"],[1,"d-g-cell","toolbar"],["role","menubar",1,"flex","row","justify-between","center"],["vcl-button","","type","button",1,"transparent","flex",3,"click"],["vcl-button","","square","","type","button",1,"transparent","flex",3,"click"]],template:function(e,t){if(1&e&&(c.Pb(0,"h3"),c.xc(1,"Basic calendar"),c.Ob(),c.Pb(2,"vcl-calendar",0),c.Wb("valueChange",(function(e){return t.date=e})),c.Ob(),c.xc(3),c.Pb(4,"h3"),c.xc(5,'With selectionMode="range"'),c.Ob(),c.Pb(6,"vcl-calendar",1),c.Wb("valueChange",(function(e){return t.dateRange=e})),c.Ob(),c.xc(7),c.Pb(8,"h3"),c.xc(9,'With selectionMode="multiple", maxSelectableDates=3'),c.Ob(),c.Pb(10,"vcl-calendar",2),c.Wb("valueChange",(function(e){return t.dateArray=e})),c.Ob(),c.xc(11),c.Pb(12,"h3"),c.xc(13,'With selectionMode="month"'),c.Ob(),c.Pb(14,"vcl-calendar",3),c.Wb("valueChange",(function(e){return t.month=e})),c.Ob(),c.xc(15),c.Pb(16,"h3"),c.xc(17,'With selectionMode="month-range"'),c.Ob(),c.Pb(18,"vcl-calendar",4),c.Wb("valueChange",(function(e){return t.monthRange=e})),c.Ob(),c.xc(19),c.Pb(20,"h3"),c.xc(21,'With selectionMode="month-multiple", maxSelectableDates=2'),c.Ob(),c.Pb(22,"vcl-calendar",5),c.Wb("valueChange",(function(e){return t.monthArray=e})),c.Ob(),c.xc(23),c.Pb(24,"h3"),c.xc(25,"Disabled"),c.Ob(),c.Kb(26,"vcl-calendar",6),c.Pb(27,"h3"),c.xc(28,"With dateModifiers"),c.Ob(),c.Kb(29,"vcl-calendar",7),c.Pb(30,"h3"),c.xc(31,"Custom Footer"),c.Ob(),c.Pb(32,"vcl-calendar",null,8),c.vc(34,m,7,0,"div",9),c.Ob()),2&e){var a=c.kc(33);c.yb(2),c.fc("value",t.date),c.yb(1),c.zc("\nValue: ",t.sdate," "),c.yb(3),c.fc("value",t.dateRange),c.yb(1),c.zc("\nValue: ",t.sdateRange," "),c.yb(3),c.fc("value",t.dateArray)("maxSelectableDates",3),c.yb(1),c.zc("\nValue: ",t.sdateArray," "),c.yb(3),c.fc("value",t.month),c.yb(1),c.zc("\nValue: ",t.smonth," "),c.yb(3),c.fc("value",t.monthRange),c.yb(1),c.zc("\nValue: ",t.smonthRange," "),c.yb(3),c.fc("value",t.monthArray)("maxSelectableDates",2),c.yb(1),c.zc("\nValue: ",t.smonthArray," "),c.yb(3),c.fc("disabled",!0),c.yb(3),c.fc("dateModifiers",t.available),c.yb(5),c.fc("ngIf","month"===a.view)}},directives:[s.a,l.t,h.b],styles:["vcl-calendar[_ngcontent-%COMP%] {\n    width: 18em;\n  }"]}),u);function v(){return{label:"Calendar",tabs:{Demo:b,"README.md":{type:"md",content:"# vcl-calendar\n\nA calendar to display and select dates\n\n## Usage\n\n```js\nimport { VCLCalendarModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLCalendarModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-calendar [date]=\"date\"></vcl-calendar>\n```\n\n### Date representation\n\nThe calendar uses the `VCLDateAdapter` for date representation.\nCheck the [`VCLDateAdapter` docs](#/dateadapter) for further information.\n\n### selectionMode\n\nThe calendar supports a variety of selection modes. The default `selectionMode` is `date`\n\n- `date` Can select a single date\n- `range` Can select a date range with a starting and ending date (see `VCLDateRange` interface)\n- `multiple` Can select multiple dates\n- `month` Can a single month\n- `month-multiple` Can select multiple months \n- `month-range` Can select a month range with a starting and ending month (see `VCLDateRange` interface)\n\n### dateModifier\n\nA date modifier allows to customize specific days in the month calendar.\nAn array of object implementing the `VCLCalendarDateModifier` can be passed to the calendar.\n\n```html\n<vcl-calendar [dateModifiers]=\"dateModifiers\"></vcl-calendar>\n```\n\n```ts\ndateModifiers = [{\n  match: new Date(2019, 0, 1), // Matches January, 1\n  class: 'holiday', // Adds holiday css class\n  disabled: true, // Disabled date\n  view: 'month' // Limits  modifier to month view\n}]\n```\n\n#### vcl-calendar attributes\n\nName                | Type                                            | Default | Description\n---------------     | -------                                         | ------- | -----------------------------------------------\n`value`             | VCLDate \\| VCLDate[] \\| VCLDateRange<VCLDate>   |         | Selected date(s)/date range in the calendar\n`viewDate`          | VCLDate                                         | today   | The currently shown date in the calendar \n`selectionMode`     | VCLCalendarSelectionMode                        |         | See selectionMode description\n`disabled`          | boolean                                         | false   | Disables the calendar when true\n`dateModifiers`     | VCLCalendarDateModifier[]                       |         | only `month` view: See dateModifier description\n`showWeekOfTheYear` | boolean                                         | false   | only `month` view: Show of the year when true\n`maxSelectableDates`| boolean                                         |         | only for selectionMode `multiple` and `month-range`: Maximum number of selectable dates\n\n#### vcl-calendar events\nName                | Type                                              | Description\n---------------     | -------                                           | -----------------------------------------------\n`valueChange`       | VCLDate \\| VCLDate[] \\| VCLDateRange<VCLDate>     | Triggered when a new date is selected\n`viewDateChange`    | VCLDate                                           | Triggered when the viewDate changes\n\n#### vcl-calendar interfaces\n\n```ts\nexport type VCLCalendarSelectionMode = 'date' | 'multiple' | 'range' | 'month' | 'month-multiple' | 'month-range';\nexport type VCLCalendarView = 'month' | 'year' | 'years' | 'hours' | 'minutes';\n\nexport interface VCLCalendarDateModifier<VCLDate> {\n  match: VCLDate | VCLDate[] | VCLDateRange<VCLDate>;\n  class?: string;\n  disabled?: boolean;\n  view:? VCLCalendarView;\n}\n```\n"},"demo.component.html":{type:"html",content:r("EZQ4")},"demo.component.ts":{type:"ts",content:r("4pD4")}}}}var f,p=((f=function t(){e(this,t)}).\u0275mod=c.Hb({type:f}),f.\u0275inj=c.Gb({factory:function(e){return new(e||f)},imports:[[l.c,i.b,d.VCLButtonModule,d.VCLCalendarModule,o.g.forChild([{path:"",component:i.a,data:{demo:v}}])]]}),f)},EZQ4:function(e,t,a){"use strict";a.r(t),t.default='<h3>Basic calendar</h3>\n\n<vcl-calendar [(value)]="date"></vcl-calendar>\nValue: {{sdate}}\n\n<h3>With selectionMode="range"</h3>\n\n<vcl-calendar [(value)]="dateRange" selectionMode="range"></vcl-calendar>\nValue: {{sdateRange}}\n\n<h3>With selectionMode="multiple", maxSelectableDates=3</h3>\n\n<vcl-calendar [(value)]="dateArray" selectionMode="multiple" [maxSelectableDates]="3"></vcl-calendar>\nValue: {{sdateArray}}\n\n<h3>With selectionMode="month"</h3>\n\n<vcl-calendar [(value)]="month" selectionMode="month"></vcl-calendar>\nValue: {{smonth}}\n\n<h3>With selectionMode="month-range"</h3>\n\n<vcl-calendar [(value)]="monthRange" selectionMode="month-range"></vcl-calendar>\nValue: {{smonthRange}}\n\n<h3>With selectionMode="month-multiple", maxSelectableDates=2</h3>\n\n<vcl-calendar [(value)]="monthArray" selectionMode="month-multiple" [maxSelectableDates]="2"></vcl-calendar>\nValue: {{smonthArray}}\n\n<h3>Disabled</h3>\n\n<vcl-calendar [disabled]="true"></vcl-calendar>\n\n<h3>With dateModifiers</h3>\n\n<vcl-calendar [dateModifiers]="available"></vcl-calendar>\n\n<h3>Custom Footer</h3>\n\n<vcl-calendar #c="vclCalendar">\n  <div vclCalendarFooter class="d-g-row" *ngIf="c.view === \'month\'">\n    <div class="d-g-cell toolbar">\n      <div class="flex row justify-between center" role="menubar">\n        <button vcl-button class="transparent flex" type="button" (click)="c.viewDate = today">\n          go to today\n        </button>\n        <button vcl-button square class="transparent flex" type="button" (click)="c.viewDate = c.value">\n          go to selected\n        </button>\n      </div>\n    </div>\n  </div>\n</vcl-calendar>\n'}}])}();