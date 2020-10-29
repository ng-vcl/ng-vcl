(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{Wc1u:function(n,b,l){"use strict";l.r(b),b.default='<h3>Default</h3>\n\n<vcl-tab-nav >\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-label>Tab2</vcl-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n\n<hr>\n\n<h3>With layout="right"</h3>\n\n<vcl-tab-nav layout="right" tabContentClass="vclSpan-70p" tabsClass="vclSpan-30p">\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-label>Tab2</vcl-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n\n<hr>\n\n<h3>With layout="left"</h3>\n\n<vcl-tab-nav layout="left" tabContentClass="vclSpan-70p" tabsClass="vclSpan-30p">\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-label>Tab2</vcl-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n\n<hr>\n\n<h3>With borders</h3>\n\n<vcl-tab-nav borders=true>\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-label>Tab2</vcl-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n\n<hr>\n\n\n<h3>Shared content</h3>\n\n<vcl-tab-nav [(selectedTabIndex)]="tabIndex">\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-label>Tab2</vcl-label>\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n  </vcl-tab>\n  Shared Content Tab: {{tabIndex}}\n</vcl-tab-nav>\n\n\n<h3>No content</h3>\n\n<vcl-tab-nav>\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n  </vcl-tab>\n  <vcl-tab>\n      <vcl-label>Tab2</vcl-label>\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n  </vcl-tab>\n</vcl-tab-nav>\n'},saWJ:function(n,b,l){"use strict";l.r(b),l.d(b,"demo",(function(){return i})),l.d(b,"TabNavDemoModule",(function(){return u}));var a=l("ofXK"),t=l("tyNb"),e=l("19H1"),c=l("2FIb"),v=l("fXoL"),o=l("tKhL"),s=l("ZMf7"),r=l("pKlR");let d=(()=>{class n{constructor(){this.tabIndex=0}}return n.\u0275fac=function(b){return new(b||n)},n.\u0275cmp=v.Eb({type:n,selectors:[["ng-component"]],decls:89,vars:8,consts:[[3,"disabled"],["layout","right","tabContentClass","vclSpan-70p","tabsClass","vclSpan-30p"],["layout","left","tabContentClass","vclSpan-70p","tabsClass","vclSpan-30p"],["borders","true"],[3,"selectedTabIndex","selectedTabIndexChange"]],template:function(n,b){1&n&&(v.Qb(0,"h3"),v.wc(1,"Default"),v.Pb(),v.Qb(2,"vcl-tab-nav"),v.Qb(3,"vcl-tab"),v.Qb(4,"vcl-label"),v.wc(5,"Tab1"),v.Pb(),v.wc(6," Content1 "),v.Pb(),v.Qb(7,"vcl-tab"),v.Qb(8,"vcl-label"),v.wc(9,"Tab2"),v.Pb(),v.wc(10," Content2 "),v.Pb(),v.Qb(11,"vcl-tab",0),v.Qb(12,"vcl-label"),v.wc(13,"Tab3"),v.Pb(),v.wc(14," Content3 "),v.Pb(),v.Pb(),v.Lb(15,"hr"),v.Qb(16,"h3"),v.wc(17,'With layout="right"'),v.Pb(),v.Qb(18,"vcl-tab-nav",1),v.Qb(19,"vcl-tab"),v.Qb(20,"vcl-label"),v.wc(21,"Tab1"),v.Pb(),v.wc(22," Content1 "),v.Pb(),v.Qb(23,"vcl-tab"),v.Qb(24,"vcl-label"),v.wc(25,"Tab2"),v.Pb(),v.wc(26," Content2 "),v.Pb(),v.Qb(27,"vcl-tab",0),v.Qb(28,"vcl-label"),v.wc(29,"Tab3"),v.Pb(),v.wc(30," Content3 "),v.Pb(),v.Pb(),v.Lb(31,"hr"),v.Qb(32,"h3"),v.wc(33,'With layout="left"'),v.Pb(),v.Qb(34,"vcl-tab-nav",2),v.Qb(35,"vcl-tab"),v.Qb(36,"vcl-label"),v.wc(37,"Tab1"),v.Pb(),v.wc(38," Content1 "),v.Pb(),v.Qb(39,"vcl-tab"),v.Qb(40,"vcl-label"),v.wc(41,"Tab2"),v.Pb(),v.wc(42," Content2 "),v.Pb(),v.Qb(43,"vcl-tab",0),v.Qb(44,"vcl-label"),v.wc(45,"Tab3"),v.Pb(),v.wc(46," Content3 "),v.Pb(),v.Pb(),v.Lb(47,"hr"),v.Qb(48,"h3"),v.wc(49,"With borders"),v.Pb(),v.Qb(50,"vcl-tab-nav",3),v.Qb(51,"vcl-tab"),v.Qb(52,"vcl-label"),v.wc(53,"Tab1"),v.Pb(),v.wc(54," Content1 "),v.Pb(),v.Qb(55,"vcl-tab"),v.Qb(56,"vcl-label"),v.wc(57,"Tab2"),v.Pb(),v.wc(58," Content2 "),v.Pb(),v.Qb(59,"vcl-tab",0),v.Qb(60,"vcl-label"),v.wc(61,"Tab3"),v.Pb(),v.wc(62," Content3 "),v.Pb(),v.Pb(),v.Lb(63,"hr"),v.Qb(64,"h3"),v.wc(65,"Shared content"),v.Pb(),v.Qb(66,"vcl-tab-nav",4),v.Xb("selectedTabIndexChange",(function(n){return b.tabIndex=n})),v.Qb(67,"vcl-tab"),v.Qb(68,"vcl-label"),v.wc(69,"Tab1"),v.Pb(),v.Pb(),v.Qb(70,"vcl-tab"),v.Qb(71,"vcl-label"),v.wc(72,"Tab2"),v.Pb(),v.Pb(),v.Qb(73,"vcl-tab",0),v.Qb(74,"vcl-label"),v.wc(75,"Tab3"),v.Pb(),v.Pb(),v.wc(76),v.Pb(),v.Qb(77,"h3"),v.wc(78,"No content"),v.Pb(),v.Qb(79,"vcl-tab-nav"),v.Qb(80,"vcl-tab"),v.Qb(81,"vcl-label"),v.wc(82,"Tab1"),v.Pb(),v.Pb(),v.Qb(83,"vcl-tab"),v.Qb(84,"vcl-label"),v.wc(85,"Tab2"),v.Pb(),v.Pb(),v.Qb(86,"vcl-tab",0),v.Qb(87,"vcl-label"),v.wc(88,"Tab3"),v.Pb(),v.Pb(),v.Pb()),2&n&&(v.yb(11),v.gc("disabled",!0),v.yb(16),v.gc("disabled",!0),v.yb(16),v.gc("disabled",!0),v.yb(16),v.gc("disabled",!0),v.yb(7),v.gc("selectedTabIndex",b.tabIndex),v.yb(7),v.gc("disabled",!0),v.yb(3),v.yc(" Shared Content Tab: ",b.tabIndex,"\n"),v.yb(10),v.gc("disabled",!0))},directives:[o.a,s.a,r.a],encapsulation:2}),n})();function i(){return{label:"Tab Navigation",tabs:{Demo:d,"README.md":{type:"md",content:'# vcl-tab-nav\n\nThe tab nav allows to organize content in tabs.\nOnly one tab is visible at a given time.\n\n## Usage\n\n```js\nimport { VCLTabNavModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLTabNavModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-tab-nav>\n  <vcl-tab>\n    <vcl-label>Tab1</vcl-label>\n    Content1\n  </vcl-tab>\n  <vcl-tab>\n    <vcl-label>Tab2</vcl-label>\n    Content2\n  </vcl-tab>\n  <vcl-tab [disabled]="true">\n    <vcl-label>Tab3</vcl-label>\n    Content3\n  </vcl-tab>\n</vcl-tab-nav>\n```\n\n### API\n\n#### vcl-tab-nav attributes\n\n| Name                     | Type        | Default  | Description\n| ------------             | ----------- | -------- |--------------\n| `selectedTabIndex`       | number      |        0 | The index of the currently visible tab\n| `borders`                | boolean     |    false | Enables borders for the tab-nav\n| `layout`                 | string      |          | The layout: `undefined` , `"left"` or `"right"`\n\n#### Events\n\n| Name                             | Type             | Description\n| ---------------------            | ---------------  | -\n| `selectedTabIndexChange`         | number           | emits the new value when the tab changes\n\n\n#### vcl-tab attributes\n\n| Name                     | Type        | Default  | Description\n| ------------             | ----------- | -------- |--------------\n| `disabled`               | boolean     |   false  | Disables the tab when true\n\n'},"demo.component.html":{type:"html",content:l("Wc1u")},"demo.component.ts":{type:"ts",content:l("tmcX")}}}}let u=(()=>{class n{}return n.\u0275mod=v.Ib({type:n}),n.\u0275inj=v.Hb({factory:function(b){return new(b||n)},imports:[[a.c,c.b,e.VCLTabNavModule,t.g.forChild([{path:"",component:c.a,data:{demo:i}}])]]}),n})()},tmcX:function(n,b,l){"use strict";l.r(b),b.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class TabNavDemoComponent {\n  tabIndex = 0;\n}\n"}}]);