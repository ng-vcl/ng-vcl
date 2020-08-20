(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{FGeR:function(e,n,t){"use strict";t.r(n),n.default='<h3>Basic</h3>\n<vcl-flip-switch [(value)]="value1"></vcl-flip-switch><br>\nCurrent value: {{value1}}\n\n<h3>With custom labels</h3>\n<vcl-flip-switch onLabel="Yes" offLabel="No" [(value)]="value2"></vcl-flip-switch><br>\nCurrent value: {{value2}}\n'},i9pS:function(e,n,t){"use strict";t.r(n),n.default="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class FlipSwitchDemoComponent {\n  value1 = false;\n  value2 = false;\n}\n"},siuY:function(e,n,t){"use strict";t.r(n),t.d(n,"demo",(function(){return f})),t.d(n,"FlipSwitchDemoModule",(function(){return v}));var l=t("ofXK"),a=t("3Pt+"),o=t("tyNb"),c=t("19H1"),u=t("2FIb"),i=t("fXoL"),s=t("TzFS");let r=(()=>{class e{constructor(){this.value1=!1,this.value2=!1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Db({type:e,selectors:[["ng-component"]],decls:10,vars:4,consts:[[3,"value","valueChange"],["onLabel","Yes","offLabel","No",3,"value","valueChange"]],template:function(e,n){1&e&&(i.Pb(0,"h3"),i.xc(1,"Basic"),i.Ob(),i.Pb(2,"vcl-flip-switch",0),i.Wb("valueChange",(function(e){return n.value1=e})),i.Ob(),i.Kb(3,"br"),i.xc(4),i.Pb(5,"h3"),i.xc(6,"With custom labels"),i.Ob(),i.Pb(7,"vcl-flip-switch",1),i.Wb("valueChange",(function(e){return n.value2=e})),i.Ob(),i.Kb(8,"br"),i.xc(9)),2&e&&(i.yb(2),i.fc("value",n.value1),i.yb(2),i.zc("\nCurrent value: ",n.value1," "),i.yb(3),i.fc("value",n.value2),i.yb(2),i.zc("\nCurrent value: ",n.value2,"\n"))},directives:[s.a],encapsulation:2}),e})();function f(){return{label:"Flip-Switch",tabs:{Demo:r,"README.md":{type:"md",content:'# vcl-flip-switch\n\n## Usage\n\n```html\n<vcl-flip-switch [(value)]="value" onLabel="On" offLabel="Off"></vcl-flip-switch>\n```\n\n### API\n\n#### Attributes\n\nName          | Type    | Default | Description\n------------- | ------- | ------- | -------------------------------\n`value`       | boolean | false   | set the value\n`onLabel`     | string  | \'On\'    | The label for "on"\n`offLabel`    | string  | \'Off\'   | The label for "off"\n\n#### Events\n\n| Name                  | Type             | Description\n| --------------------- | ---------------  | -\n| `valueChange`         | any &#124; any[] | emits the new value after a change\n'},"demo.component.html":{type:"html",content:t("FGeR")},"demo.component.ts":{type:"ts",content:t("i9pS")}}}}let v=(()=>{class e{}return e.\u0275mod=i.Hb({type:e}),e.\u0275inj=i.Gb({factory:function(n){return new(n||e)},imports:[[l.c,a.m,u.b,c.VCLFlipSwitchModule,o.g.forChild([{path:"",component:u.a,data:{demo:f}}])]]}),e})()}}]);