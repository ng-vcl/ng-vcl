!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5V1D":function(n,t,o){"use strict";o.r(t),t.default="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class ButtonGroupDemoComponent {\n\n  value1 = 2;\n  value2 = 1;\n  value3 = [];\n\n}\n"},"C/wp":function(n,t,o){"use strict";o.r(t),t.default='<h3>Horizontal button group</h3>\n<vcl-button-group [(value)]="value1">\n  <button vcl-button [value]="1">One</button>\n  <button vcl-button [value]="2">Two</button>\n  <button vcl-button [value]="3">Three</button>\n</vcl-button-group>\n<p>Selected value: {{value1}}</p>\n\n<h3>Vertical button group</h3>\n<vcl-button-group class="vertical" style="width: 10em" [(value)]="value2">\n  <button vcl-button [value]="1">One</button>\n  <button vcl-button [value]="2">Two</button>\n  <button vcl-button [value]="3">Three</button>\n</vcl-button-group>\n<p>Selected value: {{value2}}</p>\n\n<h3>Horizontal button group (multiple selection)</h3>\n<vcl-button-group selectionMode="multiple" [(value)]="value3">\n  <button vcl-button square [value]="\'italic\'">\n    <vcl-icon icon="fas:italic"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'bold\'">\n    <vcl-icon icon="fas:bold"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'underline\'">\n    <vcl-icon icon="fas:underline"></vcl-icon>\n  </button>\n</vcl-button-group>\n<p>Selected values: {{value3}}</p>\n\n\n<h3>Disabled button group</h3>\n<vcl-button-group [disabled]="true" selectionMode="multiple">\n  <button vcl-button square [value]="\'italic\'">\n    <vcl-icon icon="fas:italic"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'bold\'">\n    <vcl-icon icon="fas:bold"></vcl-icon>\n  </button>\n  <button vcl-button square [value]="\'underline\'">\n    <vcl-icon icon="fas:underline"></vcl-icon>\n  </button>\n</vcl-button-group>\n'},"GEV+":function(t,o,e){"use strict";e.r(o),e.d(o,"demo",(function(){return f})),e.d(o,"ButtonGroupDemoModule",(function(){return h}));var u,l=e("ofXK"),c=e("3Pt+"),b=e("tyNb"),a=e("19H1"),v=e("2FIb"),i=e("fXoL"),r=e("ErXM"),p=e("6B8K"),s=e("9Rb9"),d=((u=function t(){n(this,t),this.value1=2,this.value2=1,this.value3=[]}).\u0275fac=function(n){return new(n||u)},u.\u0275cmp=i.Db({type:u,selectors:[["ng-component"]],decls:42,vars:19,consts:[[3,"value","valueChange"],["vcl-button","",3,"value"],[1,"vertical",2,"width","10em",3,"value","valueChange"],["selectionMode","multiple",3,"value","valueChange"],["vcl-button","","square","",3,"value"],["icon","fas:italic"],["icon","fas:bold"],["icon","fas:underline"],["selectionMode","multiple",3,"disabled"]],template:function(n,t){1&n&&(i.Pb(0,"h3"),i.xc(1,"Horizontal button group"),i.Ob(),i.Pb(2,"vcl-button-group",0),i.Wb("valueChange",(function(n){return t.value1=n})),i.Pb(3,"button",1),i.xc(4,"One"),i.Ob(),i.Pb(5,"button",1),i.xc(6,"Two"),i.Ob(),i.Pb(7,"button",1),i.xc(8,"Three"),i.Ob(),i.Ob(),i.Pb(9,"p"),i.xc(10),i.Ob(),i.Pb(11,"h3"),i.xc(12,"Vertical button group"),i.Ob(),i.Pb(13,"vcl-button-group",2),i.Wb("valueChange",(function(n){return t.value2=n})),i.Pb(14,"button",1),i.xc(15,"One"),i.Ob(),i.Pb(16,"button",1),i.xc(17,"Two"),i.Ob(),i.Pb(18,"button",1),i.xc(19,"Three"),i.Ob(),i.Ob(),i.Pb(20,"p"),i.xc(21),i.Ob(),i.Pb(22,"h3"),i.xc(23,"Horizontal button group (multiple selection)"),i.Ob(),i.Pb(24,"vcl-button-group",3),i.Wb("valueChange",(function(n){return t.value3=n})),i.Pb(25,"button",4),i.Kb(26,"vcl-icon",5),i.Ob(),i.Pb(27,"button",4),i.Kb(28,"vcl-icon",6),i.Ob(),i.Pb(29,"button",4),i.Kb(30,"vcl-icon",7),i.Ob(),i.Ob(),i.Pb(31,"p"),i.xc(32),i.Ob(),i.Pb(33,"h3"),i.xc(34,"Disabled button group"),i.Ob(),i.Pb(35,"vcl-button-group",8),i.Pb(36,"button",4),i.Kb(37,"vcl-icon",5),i.Ob(),i.Pb(38,"button",4),i.Kb(39,"vcl-icon",6),i.Ob(),i.Pb(40,"button",4),i.Kb(41,"vcl-icon",7),i.Ob(),i.Ob()),2&n&&(i.yb(2),i.fc("value",t.value1),i.yb(1),i.fc("value",1),i.yb(2),i.fc("value",2),i.yb(2),i.fc("value",3),i.yb(3),i.zc("Selected value: ",t.value1,""),i.yb(3),i.fc("value",t.value2),i.yb(1),i.fc("value",1),i.yb(2),i.fc("value",2),i.yb(2),i.fc("value",3),i.yb(3),i.zc("Selected value: ",t.value2,""),i.yb(3),i.fc("value",t.value3),i.yb(1),i.fc("value","italic"),i.yb(2),i.fc("value","bold"),i.yb(2),i.fc("value","underline"),i.yb(3),i.zc("Selected values: ",t.value3,""),i.yb(3),i.fc("disabled",!0),i.yb(1),i.fc("value","italic"),i.yb(2),i.fc("value","bold"),i.yb(2),i.fc("value","underline"))},directives:[r.a,p.b,s.a],encapsulation:2}),u);function f(){return{label:"Button Group",tabs:{Demo:d,"README.md":{type:"md",content:'# vcl-button-group\n\nA button group which distributes space for each button equally to occupy 100% horizontal space.\n\n## Usage\n\n```js\nimport { VCLButtonGroupModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLButtonGroupModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-button-group [(value)]="value" mode="single">\n  <button vcl-button [value]="1">Action 1</button>\n  <button vcl-button [value]="2">Action 2</button>\n  <button vcl-button [value]="3">Action 3</button>\n</vcl-button-group>\n```\n\n### API\n\n#### Attributes\n\n| Name                  | Type                           | Default  | Description\n| --------------------- | ----------------------         | -------- |--------------\n| `value`               | any &#124; any[]               |          | Index of the selected button(s)\n| `selectionMode`       | `single` \\| `multiple`         | `single` | Select only one or multiple buttons\n\n#### Events\n\n| Name                  | Type                           | Description\n| -                     | -                              | -\n| `valueChange`         | event (any &#124; any[])       | Triggers when selected buttons change\n'},"demo.component.html":{type:"html",content:e("C/wp")},"demo.component.ts":{type:"ts",content:e("5V1D")}}}}var m,h=((m=function t(){n(this,t)}).\u0275mod=i.Hb({type:m}),m.\u0275inj=i.Gb({factory:function(n){return new(n||m)},imports:[[l.c,c.m,v.b,a.VCLButtonGroupModule,a.VCLButtonModule,a.VCLIconModule,b.g.forChild([{path:"",component:v.a,data:{demo:f}}])]]}),m)}}])}();