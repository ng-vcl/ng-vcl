!function(){function e(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"3uYo":function(e,l,t){"use strict";t.r(l),l.default="import { Component, ViewChild, ElementRef } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class SelectListDemoComponent {\n  value1 = 'gr';\n  value2 = [];\n  value3 = 'gr';\n}\n"},"YR3/":function(e,l,t){"use strict";t.r(l),l.default='<h3>Basic vcl-select-list</h3>\n\n<vcl-select-list [(value)]="value1">\n  <vcl-select-list-header>Europe</vcl-select-list-header>\n  <vcl-select-list-item value="gr">\n    <vcl-icon vclPrepend icon="fas:flag"></vcl-icon>\n    Greece\n    <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n  </vcl-select-list-item>\n  <vcl-select-list-item value="fr">\n    France\n  </vcl-select-list-item>\n  <vcl-select-list-item value="de">\n    Germany\n  </vcl-select-list-item>\n  <vcl-select-list-item value="gb">\n    The United Kingdom of Great Britain and Northern Ireland\n  </vcl-select-list-item>\n  <vcl-select-list-header>Asia</vcl-select-list-header>\n  <vcl-select-list-item value="jp">\n    Japan\n  </vcl-select-list-item>\n  <vcl-select-list-item value="ch">\n    China\n  </vcl-select-list-item>\n  <vcl-select-list-item value="th">\n    Thailand\n  </vcl-select-list-item>\n</vcl-select-list>\n \nValue: {{value1}}\n\n<h3>multi-select</h3>\n\n<vcl-select-list [(value)]="value2" selectionMode="multiple">\n  <vcl-select-list-header>Europe</vcl-select-list-header>\n  <vcl-select-list-item value="gr">\n    Greece\n    <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n  </vcl-select-list-item>\n  <vcl-select-list-item value="fr">\n    France\n  </vcl-select-list-item>\n  <vcl-select-list-item value="de">\n    Germany\n  </vcl-select-list-item>\n  <vcl-select-list-item value="gb">\n    The United Kingdom of Great Britain and Northern Ireland\n  </vcl-select-list-item>\n  <vcl-select-list-header>Asia</vcl-select-list-header>\n  <vcl-select-list-item value="jp">\n    Japan\n  </vcl-select-list-item>\n  <vcl-select-list-item value="ch">\n    China\n  </vcl-select-list-item>\n  <vcl-select-list-item value="th">\n    Thailand\n  </vcl-select-list-item>\n</vcl-select-list>\n\nValue: {{value2}}\n\n<vcl-select-list [(value)]="value3" [disabled]="true">\n  <vcl-select-list-header>Europe</vcl-select-list-header>\n  <vcl-select-list-item value="gr">\n    Greece\n    <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n  </vcl-select-list-item>\n  <vcl-select-list-item value="fr">\n    France\n  </vcl-select-list-item>\n  <vcl-select-list-item value="de">\n    Germany\n  </vcl-select-list-item>\n  <vcl-select-list-item value="gb">\n    The United Kingdom of Great Britain and Northern Ireland\n  </vcl-select-list-item>\n  <vcl-select-list-header>Asia</vcl-select-list-header>\n  <vcl-select-list-item value="jp">\n    Japan\n  </vcl-select-list-item>\n  <vcl-select-list-item value="ch">\n    China\n  </vcl-select-list-item>\n  <vcl-select-list-item value="th">\n    Thailand\n  </vcl-select-list-item>\n</vcl-select-list>\n\nValue: {{value3}}\n'},fQng:function(l,t,n){"use strict";n.r(t),n.d(t,"demo",(function(){return g})),n.d(t,"SelectListDemoModule",(function(){return x}));var c,s=n("ofXK"),i=n("3Pt+"),a=n("tyNb"),v=n("19H1"),u=n("vxfF"),o=n("2FIb"),r=n("fXoL"),m=n("zDo1"),b=n("gCzt"),h=n("StUX"),d=n("9Rb9"),p=n("pKlR"),f=((c=function l(){e(this,l),this.value1="gr",this.value2=[],this.value3="gr"}).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=r.Db({type:c,selectors:[["ng-component"]],decls:71,vars:7,consts:[[3,"value","valueChange"],["value","gr"],["vclPrepend","","icon","fas:flag"],["value","fr"],["value","de"],["value","gb"],["value","jp"],["value","ch"],["value","th"],["selectionMode","multiple",3,"value","valueChange"],[3,"value","disabled","valueChange"]],template:function(e,l){1&e&&(r.Pb(0,"h3"),r.xc(1,"Basic vcl-select-list"),r.Ob(),r.Pb(2,"vcl-select-list",0),r.Wb("valueChange",(function(e){return l.value1=e})),r.Pb(3,"vcl-select-list-header"),r.xc(4,"Europe"),r.Ob(),r.Pb(5,"vcl-select-list-item",1),r.Kb(6,"vcl-icon",2),r.xc(7," Greece "),r.Pb(8,"vcl-sub-label"),r.xc(9,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),r.Ob(),r.Ob(),r.Pb(10,"vcl-select-list-item",3),r.xc(11," France "),r.Ob(),r.Pb(12,"vcl-select-list-item",4),r.xc(13," Germany "),r.Ob(),r.Pb(14,"vcl-select-list-item",5),r.xc(15," The United Kingdom of Great Britain and Northern Ireland "),r.Ob(),r.Pb(16,"vcl-select-list-header"),r.xc(17,"Asia"),r.Ob(),r.Pb(18,"vcl-select-list-item",6),r.xc(19," Japan "),r.Ob(),r.Pb(20,"vcl-select-list-item",7),r.xc(21," China "),r.Ob(),r.Pb(22,"vcl-select-list-item",8),r.xc(23," Thailand "),r.Ob(),r.Ob(),r.xc(24),r.Pb(25,"h3"),r.xc(26,"multi-select"),r.Ob(),r.Pb(27,"vcl-select-list",9),r.Wb("valueChange",(function(e){return l.value2=e})),r.Pb(28,"vcl-select-list-header"),r.xc(29,"Europe"),r.Ob(),r.Pb(30,"vcl-select-list-item",1),r.xc(31," Greece "),r.Pb(32,"vcl-sub-label"),r.xc(33,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),r.Ob(),r.Ob(),r.Pb(34,"vcl-select-list-item",3),r.xc(35," France "),r.Ob(),r.Pb(36,"vcl-select-list-item",4),r.xc(37," Germany "),r.Ob(),r.Pb(38,"vcl-select-list-item",5),r.xc(39," The United Kingdom of Great Britain and Northern Ireland "),r.Ob(),r.Pb(40,"vcl-select-list-header"),r.xc(41,"Asia"),r.Ob(),r.Pb(42,"vcl-select-list-item",6),r.xc(43," Japan "),r.Ob(),r.Pb(44,"vcl-select-list-item",7),r.xc(45," China "),r.Ob(),r.Pb(46,"vcl-select-list-item",8),r.xc(47," Thailand "),r.Ob(),r.Ob(),r.xc(48),r.Pb(49,"vcl-select-list",10),r.Wb("valueChange",(function(e){return l.value3=e})),r.Pb(50,"vcl-select-list-header"),r.xc(51,"Europe"),r.Ob(),r.Pb(52,"vcl-select-list-item",1),r.xc(53," Greece "),r.Pb(54,"vcl-sub-label"),r.xc(55,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),r.Ob(),r.Ob(),r.Pb(56,"vcl-select-list-item",3),r.xc(57," France "),r.Ob(),r.Pb(58,"vcl-select-list-item",4),r.xc(59," Germany "),r.Ob(),r.Pb(60,"vcl-select-list-item",5),r.xc(61," The United Kingdom of Great Britain and Northern Ireland "),r.Ob(),r.Pb(62,"vcl-select-list-header"),r.xc(63,"Asia"),r.Ob(),r.Pb(64,"vcl-select-list-item",6),r.xc(65," Japan "),r.Ob(),r.Pb(66,"vcl-select-list-item",7),r.xc(67," China "),r.Ob(),r.Pb(68,"vcl-select-list-item",8),r.xc(69," Thailand "),r.Ob(),r.Ob(),r.xc(70)),2&e&&(r.yb(2),r.fc("value",l.value1),r.yb(22),r.zc(" Value: ",l.value1," "),r.yb(3),r.fc("value",l.value2),r.yb(21),r.zc(" Value: ",l.value2," "),r.yb(1),r.fc("value",l.value3)("disabled",!0),r.yb(21),r.zc(" Value: ",l.value3,"\n"))},directives:[m.a,b.a,h.a,d.a,p.b],encapsulation:2}),c);function g(){return{label:"Select List",tabs:{Demo:f,"README.md":{type:"md",content:'# vcl-select-list\n\nA list consisting of items which can be selected.\n\n## Usage\n\n```html\n<vcl-select-list [(value)]="value">\n  <vcl-select-list-item value="1">\n    Item 1\n  </vcl-select-list-item>\n  <vcl-select-list-item value="2">\n    Item 2\n  </vcl-select-list-item>\n  <vcl-select-list-item value="3" [disabled]="true">\n    Item 3\n  </vcl-select-list-item>\n</vcl-select-list>\n```\n\n### vcl-select-list attributes\n\nName            | Type                             | Default     | Description\n----------      | -------                          | -------     | --------------------------------------\n`value`         | any                              |             | Current value\n`selectionMode` | \'single\' \\| \'multiple\' \\| \'none\' | \'single\'    | `single` allows only one item to be selected. `multi` allows multiple items to be selected.\n\n### vcl-select-list events\n\nName            | Type    | Description\n----------      | ------- | --------------------------------------\n`valueChange`   | any     | Fired when the select-list value has changes\n\n\n### vcl-select-list-item attributes\n\nName              | Type                  | Default   | Description\n----------        | -------               | -------   | --------------------------------------\n`value`           | any                   |           | The items value\n`disabled`        | boolean               |           | Disables the item\n'},"demo.component.html":{type:"html",content:n("YR3/")},"demo.component.ts":{type:"ts",content:n("3uYo")}}}}var P,x=((P=function l(){e(this,l)}).\u0275mod=r.Hb({type:P}),P.\u0275inj=r.Gb({factory:function(e){return new(e||P)},imports:[[s.c,i.m,o.b,v.VCLButtonModule,v.VCLSelectModule,v.VCLIconModule,v.VCLInputModule,v.VCLIcogramModule,v.VCLBusyIndicatorModule,u.f,a.g.forChild([{path:"",component:o.a,data:{demo:g}}])]]}),P)}}])}();