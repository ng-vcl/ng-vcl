(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{NMBi:function(e,t,o){"use strict";o.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html',\n})\nexport class PopoverDemoComponent {\n\n}\n"},QXnv:function(e,t,o){"use strict";o.r(t),t.default='<div style="min-height:500px; width: 100%;">\n  <button vcl-button [selectable]="true" [selected]="popover1.visible" (click)="popover1.toggle()">Toggle Popover</button>\n  <div #target style="position: absolute; top: 300px; left: 200px; padding: 10px; border: 3px double green">\n    The target\n  </div>\n</div>\n\n<ng-template\n  vclPopover\n  #popover1="vclPopover"\n  [target]="target"\n  (afterClose)="popover2.close()">\n  <div style="width: 400px">\n    Popover is connected to the target <br>\n    <button vcl-button (click)="popover2.open()">Show additional Popover</button>\n    &nbsp;\n    <button vcl-button (click)="popover1.close();">Close Popovers</button>\n  </div>\n</ng-template>\n\n<ng-template\n  vclPopover\n  #popover2="vclPopover"\n  [closeOnOffClick]="true"\n  [target]="target"\n  [positions]="[{\n    originX: \'start\',\n    originY: \'top\',\n    overlayX: \'start\',\n    overlayY: \'bottom\'\n  }]">\n  <div style="width: 300px; height: 50px;">\n      Popover is connected to the target<br>\n  </div>\n</ng-template>\n'},pYTx:function(e,t,o){"use strict";o.r(t),o.d(t,"demo",(function(){return g})),o.d(t,"PopoverDemoModule",(function(){return m}));var n=o("ofXK"),r=o("tyNb"),c=o("19H1"),l=o("2FIb"),i=o("fXoL"),p=o("6B8K"),a=o("7K8r");function s(e,t){if(1&e){const e=i.Rb();i.Qb(0,"div",8),i.wc(1," Popover is connected to the target "),i.Lb(2,"br"),i.Qb(3,"button",9),i.Xb("click",(function(){return i.mc(e),i.ac(),i.lc(9).open()})),i.wc(4,"Show additional Popover"),i.Pb(),i.wc(5," \xa0 "),i.Qb(6,"button",9),i.Xb("click",(function(){return i.mc(e),i.ac(),i.lc(7).close()})),i.wc(7,"Close Popovers"),i.Pb(),i.Pb()}}function v(e,t){1&e&&(i.Qb(0,"div",10),i.wc(1," Popover is connected to the target"),i.Lb(2,"br"),i.Pb())}const b=function(){return{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}},d=function(e){return[e]};let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Eb({type:e,selectors:[["ng-component"]],decls:10,vars:9,consts:[[2,"min-height","500px","width","100%"],["vcl-button","",3,"selectable","selected","click"],[2,"position","absolute","top","300px","left","200px","padding","10px","border","3px double green"],["target",""],["vclPopover","",3,"target","afterClose"],["popover1","vclPopover"],["vclPopover","",3,"closeOnOffClick","target","positions"],["popover2","vclPopover"],[2,"width","400px"],["vcl-button","",3,"click"],[2,"width","300px","height","50px"]],template:function(e,t){if(1&e){const e=i.Rb();i.Qb(0,"div",0),i.Qb(1,"button",1),i.Xb("click",(function(){return i.mc(e),i.lc(7).toggle()})),i.wc(2,"Toggle Popover"),i.Pb(),i.Qb(3,"div",2,3),i.wc(5," The target "),i.Pb(),i.Pb(),i.uc(6,s,8,0,"ng-template",4,5,i.vc),i.Xb("afterClose",(function(){return i.mc(e),i.lc(9).close()})),i.uc(8,v,3,0,"ng-template",6,7,i.vc)}if(2&e){const e=i.lc(4),t=i.lc(7);i.yb(1),i.gc("selectable",!0)("selected",t.visible),i.yb(5),i.gc("target",e),i.yb(2),i.gc("closeOnOffClick",!0)("target",e)("positions",i.ic(7,d,i.hc(6,b)))}},directives:[p.b,a.a],encapsulation:2}),e})();function g(){return{label:"Popover",tabs:{Demo:u,"README.md":{type:"md",content:'# vcl-popover\n\nA popover is an overlay floating at the position of the target element.\n\n## Usage\n\n```html\n<div #myTarget>any dom element can be the target</div>\n<button (click)="popover.toggle()"> \n\n<vcl-popover #popover="vclPopover" [target]="myTarget" [positions]="myPositions">\n  Popover-Content\n</vcl-popover>\n```\n\n### API\n\n#### Attributes\n\nName                | Type                          | Default             | Description\n------------------- | ---------------------------   | ------------------- | ------------------- \n`target`            | ElementRef \\| HTMLElement     |                     | the target must be an ElementRef instance\n`positions`         | [ConnectedPosition](https://material.angular.io/cdk/overlay/api#ConnectedPosition) | | @angular/cdk OverlayPosition array\n`scrollStrategy`    | [ScrollStrategy](https://material.angular.io/cdk/overlay/api#ScrollStrategy) | | @angular/cdk ScrollStrategy\n`closeOnOffClick`   | boolean                       | false               | Close popover when on a click outside of the popover\n`visible` _(1)_     | boolean                       | false               | the popover is hidden if false\n  \n#### Methods  \n\nName             | Attributes | Description\n------------     | ---------- | --------------------------------------------------------------------------\n`open`           |            | will show the popover\n`close`          |            | will hide the popover\n`toggle`         |            | will show when hidden and hide when visible\n\n_(1) Supports Two-way binding_\n'},"demo.component.html":{type:"html",content:o("QXnv")},"demo.component.ts":{type:"ts",content:o("NMBi")}}}}let m=(()=>{class e{}return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[n.c,l.b,c.VCLPopoverModule,c.VCLButtonModule,r.g.forChild([{path:"",component:l.a,data:{demo:g}}])]]}),e})()}}]);