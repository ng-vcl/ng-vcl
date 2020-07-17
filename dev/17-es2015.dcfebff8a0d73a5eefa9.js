(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{hcGX:function(e,c,n){"use strict";n.r(c),n.d(c,"demo",(function(){return k})),n.d(c,"CheckboxDemoModule",(function(){return i}));var o=n("ofXK"),t=n("3Pt+"),l=n("tyNb"),h=n("19H1"),a=n("2FIb"),b=n("fXoL"),u=n("AXxg");let d=(()=>{class e{constructor(){this.value1=!1,this.value2=!1,this.value3=!1,this.value4=!1}}return e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=b.Eb({type:e,selectors:[["ng-component"]],decls:17,vars:8,consts:[[3,"checked","checkedChange"],[3,"checked","disabled","checkedChange"],[1,"col"]],template:function(e,c){1&e&&(b.Qb(0,"h3"),b.wc(1,"Horizontal"),b.Pb(),b.Qb(2,"vcl-checkbox",0),b.Xb("checkedChange",(function(e){return c.value1=e})),b.wc(3,"Check 1! "),b.Pb(),b.Qb(4,"vcl-checkbox",0),b.Xb("checkedChange",(function(e){return c.value2=e})),b.wc(5,"Check 2! "),b.Pb(),b.Qb(6,"vcl-checkbox",1),b.Xb("checkedChange",(function(e){return c.value3=e})),b.wc(7,"Check 3! (disabled) "),b.Pb(),b.Qb(8,"h3"),b.wc(9,"Vertical"),b.Pb(),b.Qb(10,"div",2),b.Qb(11,"vcl-checkbox",0),b.Xb("checkedChange",(function(e){return c.value1=e})),b.wc(12,"Check 1! "),b.Pb(),b.Qb(13,"vcl-checkbox",0),b.Xb("checkedChange",(function(e){return c.value2=e})),b.wc(14,"Check 2! "),b.Pb(),b.Qb(15,"vcl-checkbox",1),b.Xb("checkedChange",(function(e){return c.value3=e})),b.wc(16,"Check 3! (disabled) "),b.Pb(),b.Pb()),2&e&&(b.yb(2),b.gc("checked",c.value1),b.yb(2),b.gc("checked",c.value2),b.yb(2),b.gc("checked",c.value3)("disabled",!0),b.yb(5),b.gc("checked",c.value1),b.yb(2),b.gc("checked",c.value2),b.yb(2),b.gc("checked",c.value3)("disabled",!0))},directives:[u.a],encapsulation:2}),e})();function k(){return{label:"Checkbox",tabs:{Demo:d,"README.md":{type:"md",content:"# vcl-checkbox\n\nA Checkbox utilizing `vcl-icon`\n\n## Usage\n\n```js\nimport { VCLCheckboxModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLCheckboxModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-checkbox [(checked)]=\"value\">Check!</vcl-checkbox>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type        | Default            | Description\n| ------------        | ----------- | ------------------ |--------------\n| `checked`           | boolean     | false              | State of checkbox\n| `tabindex`          | number      | 0                  | The tabindex of the checkbox\n| `disabled`          | boolean     | false              | Disables checkbox if true\n\n### Events\n\nName            | Type    | Description\n----------      | ------- | --------------------------------------\n`checkedChange` | any     | Fired when the checked state has changed\n"},"demo.component.html":{type:"html",content:n("oGyJ")},"demo.component.ts":{type:"ts",content:n("oqni")}}}}let i=(()=>{class e{}return e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({factory:function(c){return new(c||e)},imports:[[o.c,t.m,a.b,h.VCLCheckboxModule,h.VCLFormControlGroupModule,l.g.forChild([{path:"",component:a.a,data:{demo:k}}])]]}),e})()},oGyJ:function(e,c,n){"use strict";n.r(c),c.default='<h3>Horizontal</h3>\n<vcl-checkbox [(checked)]="value1">Check 1! </vcl-checkbox>\n<vcl-checkbox [(checked)]="value2">Check 2! </vcl-checkbox>\n<vcl-checkbox [(checked)]="value3" [disabled]=true>Check 3! (disabled) </vcl-checkbox>\n\n<h3>Vertical</h3>\n\n<div class="col">\n  <vcl-checkbox [(checked)]="value1">Check 1! </vcl-checkbox>\n  <vcl-checkbox [(checked)]="value2">Check 2! </vcl-checkbox>\n  <vcl-checkbox [(checked)]="value3" [disabled]=true>Check 3! (disabled) </vcl-checkbox>\n</div>\n'},oqni:function(e,c,n){"use strict";n.r(c),c.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class CheckboxDemoComponent {\n  value1 = false;\n  value2 = false;\n  value3 = false;\n  value4 = false;\n}\n"}}]);