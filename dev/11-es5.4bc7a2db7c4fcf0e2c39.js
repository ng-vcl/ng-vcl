!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"94Rr":function(n,c,d){"use strict";d.r(c),d.d(c,"demo",(function(){return i})),d.d(c,"BadgeDemoModule",(function(){return p}));var a,t=d("ofXK"),r=d("tyNb"),l=d("19H1"),o=d("2FIb"),b=d("fXoL"),v=d("Gojw"),g=((a=function n(){e(this,n)}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=b.Eb({type:a,selectors:[["ng-component"]],decls:26,vars:0,consts:[[1,"gutter-2","pb-2"],["type","primary"],["type","success"],["type","info"],["type","warning"],["type","error"],[1,"gutter-2"],["vclRounded",""],["vclRounded","","type","primary"],["vclRounded","","type","success"],["vclRounded","","type","info"],["vclRounded","","type","warning"],["vclRounded","","type","error"]],template:function(e,n){1&e&&(b.Qb(0,"div",0),b.Qb(1,"vcl-badge"),b.wc(2,"default"),b.Pb(),b.Qb(3,"vcl-badge",1),b.wc(4,"primary"),b.Pb(),b.Qb(5,"vcl-badge",2),b.wc(6,"success"),b.Pb(),b.Qb(7,"vcl-badge",3),b.wc(8,"info"),b.Pb(),b.Qb(9,"vcl-badge",4),b.wc(10,"warning"),b.Pb(),b.Qb(11,"vcl-badge",5),b.wc(12,"error"),b.Pb(),b.Pb(),b.Qb(13,"div",6),b.Qb(14,"vcl-badge",7),b.wc(15,"default"),b.Pb(),b.Qb(16,"vcl-badge",8),b.wc(17,"primary"),b.Pb(),b.Qb(18,"vcl-badge",9),b.wc(19,"success"),b.Pb(),b.Qb(20,"vcl-badge",10),b.wc(21,"info"),b.Pb(),b.Qb(22,"vcl-badge",11),b.wc(23,"warning"),b.Pb(),b.Qb(24,"vcl-badge",12),b.wc(25,"error"),b.Pb(),b.Pb())},directives:[v.a,v.b],encapsulation:2}),a);function i(){return{label:"Badge",tabs:{Demo:g,"README.md":{type:"md",content:'# vcl-badge\n\nA visually highlighted tag to attribute items.\n\n## Usage\n\n```js\nimport { VCLBadgeModule } from \'@vcl/ng-vcl\';\n\n@NgModule({\n  imports: [ VCLBadgeModule ],\n  ...\n})\nexport class AppComponent {}\n```\n\n```html\n<vcl-badge>default</vcl-badge>\n\n<vcl-badge type="primary">primary</vcl-badge>\n\n<vcl-badge type="success">success</vcl-badge>\n\n<vcl-badge type="info">info</vcl-badge>\n\n<vcl-badge type="warning">warning</vcl-badge>\n\n<vcl-badge type="error">error</vcl-badge>\n\n<vcl-badge vclRounded>default</vcl-badge>\n\n<vcl-badge vclRounded type="primary">primary</vcl-badge>\n\n<vcl-badge vclRounded type="success">success</vcl-badge>\n\n<vcl-badge vclRounded type="info">info</vcl-badge>\n\n<vcl-badge vclRounded type="warning">warning</vcl-badge>\n\n<vcl-badge vclRounded type="error">error</vcl-badge>\n```\n\n### API\n\n#### vcl-badge attributes\n\nName       | Type   | Default | Description\n---------- | ------ | ------- | ------------------------------------------------------------\n`type`     | string |         | the badge\'s type\n\n#### vclRounded directive\n\nName         | Description\n----------   | ------------------------------------------------------------\n`vclRounded` | Enables rounded corners\n'},"demo.component.html":{type:"html",content:d("m5sv")},"demo.component.ts":{type:"ts",content:d("sMmZ")}}}}var s,p=((s=function n(){e(this,n)}).\u0275mod=b.Ib({type:s}),s.\u0275inj=b.Hb({factory:function(e){return new(e||s)},imports:[[t.c,o.b,l.VCLBadgeModule,r.g.forChild([{path:"",component:o.a,data:{demo:i}}])]]}),s)},m5sv:function(e,n,c){"use strict";c.r(n),n.default='<div class="gutter-2 pb-2">\n  <vcl-badge>default</vcl-badge>\n  <vcl-badge type="primary">primary</vcl-badge>\n  <vcl-badge type="success">success</vcl-badge>\n  <vcl-badge type="info">info</vcl-badge>\n  <vcl-badge type="warning">warning</vcl-badge>\n  <vcl-badge type="error">error</vcl-badge>\n</div>\n\n<div class="gutter-2">\n  <vcl-badge vclRounded>default</vcl-badge>\n  <vcl-badge vclRounded type="primary">primary</vcl-badge>\n  <vcl-badge vclRounded type="success">success</vcl-badge>\n  <vcl-badge vclRounded type="info">info</vcl-badge>\n  <vcl-badge vclRounded type="warning">warning</vcl-badge>\n  <vcl-badge vclRounded type="error">error</vcl-badge>\n</div>\n'},sMmZ:function(e,n,c){"use strict";c.r(n),n.default="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class BadgeDemoComponent {\n}\n"}}])}();