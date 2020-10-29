(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"9SRc":function(e,n,l){"use strict";l.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class SliderDemoComponent {\n  value1 = 0;\n  value2 = 0;\n  value3 = 0;\n  value4 = 0;\n  value5 = 0;\n  value6 = 0;\n}\n"},C1sD:function(e,n,l){"use strict";l.r(n),l.d(n,"demo",(function(){return b})),l.d(n,"SliderDemoModule",(function(){return d}));var a=l("ofXK"),u=l("tyNb"),t=l("3Pt+"),c=l("19H1"),s=l("2FIb"),i=l("fXoL"),v=l("AS2X");const o=function(){return["\u2600","\u2601","\u2602","\u2603","\u2604","1"]},r=function(){return["d","i","s","a","b","l","e","d"]};let m=(()=>{class e{constructor(){this.value1=0,this.value2=0,this.value3=0,this.value4=0,this.value5=0,this.value6=0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Eb({type:e,selectors:[["ng-component"]],decls:22,vars:30,consts:[[3,"value","valueChange"],[3,"value","min","max","scale","valueChange"],[3,"value","min","max","scale","lock","valueChange"],[3,"value","min","max","enableWheel","scale","valueChange"],[3,"value","min","max","disabled","scale","valueChange"]],template:function(e,n){1&e&&(i.Qb(0,"h3"),i.wc(1,"Basic"),i.Pb(),i.Qb(2,"vcl-slider",0),i.Xb("valueChange",(function(e){return n.value1=e})),i.Pb(),i.wc(3),i.Qb(4,"h3"),i.wc(5,"With a scale"),i.Pb(),i.Qb(6,"vcl-slider",1),i.Xb("valueChange",(function(e){return n.value2=e})),i.Pb(),i.wc(7),i.Qb(8,"h3"),i.wc(9,"With value locked to the scale"),i.Pb(),i.Qb(10,"vcl-slider",2),i.Xb("valueChange",(function(e){return n.value3=e})),i.Pb(),i.wc(11),i.Qb(12,"h3"),i.wc(13,"custom labeled scale"),i.Pb(),i.Qb(14,"vcl-slider",3),i.Xb("valueChange",(function(e){return n.value4=e})),i.Pb(),i.wc(15),i.Qb(16,"h3"),i.wc(17,"disabled"),i.Pb(),i.Qb(18,"vcl-slider",4),i.Xb("valueChange",(function(e){return n.value5=e})),i.Pb(),i.Qb(19,"h3"),i.wc(20,"With value outer min/max bounds"),i.Pb(),i.Qb(21,"vcl-slider",1),i.Xb("valueChange",(function(e){return n.value6=e})),i.Pb()),2&e&&(i.yb(2),i.gc("value",n.value1),i.yb(1),i.yc("\nValue: ",n.value1," "),i.yb(3),i.gc("value",n.value2)("min",0)("max",100)("scale",11),i.yb(1),i.yc("\nValue: ",n.value2," "),i.yb(3),i.gc("value",n.value3)("min",0)("max",100)("scale",11)("lock",!0),i.yb(1),i.yc("\nValue: ",n.value3," "),i.yb(3),i.gc("value",n.value4)("min",0)("max",5)("enableWheel",!0)("scale",i.hc(28,o)),i.yb(1),i.yc("\nValue: ",n.value4," "),i.yb(3),i.gc("value",n.value5)("min",0)("max",7)("disabled",!0)("scale",i.hc(29,r)),i.yb(3),i.gc("value",n.value6)("min",10)("max",100)("scale",11))},directives:[v.a],encapsulation:2}),e})();function b(){return{label:"Slider",tabs:{Demo:m,"README.md":{type:"md",content:'# vcl-slider\n\n## Usage\n\n_Note: HammerJS must be loaded for touch events_\n\n```js\nimport { VCLSliderModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLSliderModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-slider\n  [(value)]="value1"\n  [min]="0"\n  [max]="100"\n  [scale]="10">\n</vcl-slider>\n```\n\n```html\n<vcl-slider\n  [(value)]="value2"\n  [min]="0"\n  [max]="50"\n  [lock]="5"\n  [enableWheel]="true"\n  [scale]="[\'Zero\',\'One\',\'Two\',\'Three\',\'Four\',\'Five\']">\n</vcl-slider>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type                   | Default            | Description\n| ------------        | -----------            | ------------------ |--------------\n| `value`             | number                 |                    | The current value\n| `min`               | number                 | 0                  | The min value\n| `max`               | number                 | 100                | The max value\n| `scale`             | string[] &#124 number  |                    | The legend below the slider\n| `lock`              | boolean                | false              | The selectable value is locked to the scale\n| `enableWheel`       | boolean                | false              | Allows to change the value with the mouse wheel\n| `disabled`          | boolean                | false              | Disables the slider when true\n| `tabindex`          | number                 | 0                  | The tabindex of the slider\n\n#### Events\n\nName                  | Type             | Description\n--------------------- | ---------------  | -\n`valueChange`         | any &#124; any[] | emits the new value when slider value changes\n'},"demo.component.html":{type:"html",content:l("btlG")},"demo.component.ts":{type:"ts",content:l("9SRc")}}}}let d=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(n){return new(n||e)},imports:[[a.c,t.m,s.b,c.VCLSliderModule,u.g.forChild([{path:"",component:s.a,data:{demo:b}}])]]}),e})()},btlG:function(e,n,l){"use strict";l.r(n),n.default='<h3>Basic</h3>\n<vcl-slider [(value)]="value1"></vcl-slider>\nValue: {{value1}}\n\n<h3>With a scale</h3>\n<vcl-slider \n  [(value)]="value2" \n  [min]="0" \n  [max]="100"\n  [scale]="11">\n</vcl-slider>\nValue: {{value2}}\n\n<h3>With value locked to the scale</h3>\n<vcl-slider \n  [(value)]="value3" \n  [min]="0" \n  [max]="100"\n  [scale]="11"\n  [lock]="true" >\n</vcl-slider>\nValue: {{value3}}\n\n\n<h3>custom labeled scale</h3>\n<vcl-slider \n  [(value)]="value4" \n  [min]="0" \n  [max]="5" \n  [enableWheel]="true" \n  [scale]="[\'\u2600\',\'\u2601\',\'\u2602\',\'\u2603\',\'\u2604\',\'1\']">\n</vcl-slider>\nValue: {{value4}}\n\n\n<h3>disabled</h3>\n\n<vcl-slider \n  [(value)]="value5" \n  [min]="0" \n  [max]="7" \n  [disabled]="true" \n  [scale]="[\'d\',\'i\',\'s\',\'a\',\'b\',\'l\', \'e\', \'d\']">\n</vcl-slider>\n\n<h3>With value outer min/max bounds</h3>\n<vcl-slider \n  [(value)]="value6" \n  [min]="10" \n  [max]="100"\n  [scale]="11">\n</vcl-slider>\n'}}]);