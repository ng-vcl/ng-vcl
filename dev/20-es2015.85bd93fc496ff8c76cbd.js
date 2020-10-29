(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{DFrE:function(e,n,r){"use strict";r.r(n),n.default='\n\n<button vcl-button (click)="opened = !opened">Toggle drawer</button>\n\n<br><br>\n\n<vcl-drawer-container style="width: 20em; height: 20em; background-color: #b47c17">\n  <vcl-drawer [opened]="opened" style="width: 5em; background-color: #166a24" >\n    Drawer\n  </vcl-drawer>\n  Content\n</vcl-drawer-container>\n\n<br><br>\n\n<button vcl-button (click)="drawer1.toggle()">Toggle drawer</button>\n\n<br><br>\n\n<vcl-drawer-container style="width: 20em; height: 20em; background-color: #b47c17">\n  <vcl-drawer #drawer1="vclDrawer" mode="side" style="width: 5em; background-color: #166a24" >\n    Drawer\n  </vcl-drawer>\n  Content\n</vcl-drawer-container>\n\n<br><br>\n\n<button vcl-button (click)="drawer2.toggle()">Toggle drawer</button>\n\n<br><br>\n\n<vcl-drawer-container style="width: 20em; height: 20em; background-color: #b47c17">\n  <vcl-drawer #drawer2="vclDrawer" mode="over" style="width: 5em; background-color: #166a24" >\n    Drawer\n  </vcl-drawer>\n  Content\n</vcl-drawer-container>\n\n<br><br>\n'},ay7N:function(e,n,r){"use strict";r.r(n),n.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class DrawerDemoComponent {\n  opened = true;\n}\n"},jtrS:function(e,n,r){"use strict";r.r(n),r.d(n,"demo",(function(){return s})),r.d(n,"DrawerDemoModule",(function(){return u}));var t=r("ofXK"),o=r("tyNb"),c=r("19H1"),a=r("2FIb"),d=r("fXoL"),l=r("6B8K"),b=r("Pheu"),w=r("4RH/");let i=(()=>{class e{constructor(){this.opened=!0}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d.Eb({type:e,selectors:[["ng-component"]],decls:32,vars:1,consts:[["vcl-button","",3,"click"],[2,"width","20em","height","20em","background-color","#b47c17"],[2,"width","5em","background-color","#166a24",3,"opened"],["mode","side",2,"width","5em","background-color","#166a24"],["drawer1","vclDrawer"],["mode","over",2,"width","5em","background-color","#166a24"],["drawer2","vclDrawer"]],template:function(e,n){if(1&e){const e=d.Rb();d.Qb(0,"button",0),d.Xb("click",(function(){return n.opened=!n.opened})),d.wc(1,"Toggle drawer"),d.Pb(),d.Lb(2,"br"),d.Lb(3,"br"),d.Qb(4,"vcl-drawer-container",1),d.Qb(5,"vcl-drawer",2),d.wc(6," Drawer "),d.Pb(),d.wc(7," Content\n"),d.Pb(),d.Lb(8,"br"),d.Lb(9,"br"),d.Qb(10,"button",0),d.Xb("click",(function(){return d.mc(e),d.lc(16).toggle()})),d.wc(11,"Toggle drawer"),d.Pb(),d.Lb(12,"br"),d.Lb(13,"br"),d.Qb(14,"vcl-drawer-container",1),d.Qb(15,"vcl-drawer",3,4),d.wc(17," Drawer "),d.Pb(),d.wc(18," Content\n"),d.Pb(),d.Lb(19,"br"),d.Lb(20,"br"),d.Qb(21,"button",0),d.Xb("click",(function(){return d.mc(e),d.lc(27).toggle()})),d.wc(22,"Toggle drawer"),d.Pb(),d.Lb(23,"br"),d.Lb(24,"br"),d.Qb(25,"vcl-drawer-container",1),d.Qb(26,"vcl-drawer",5,6),d.wc(28," Drawer "),d.Pb(),d.wc(29," Content\n"),d.Pb(),d.Lb(30,"br"),d.Lb(31,"br")}2&e&&(d.yb(5),d.gc("opened",n.opened))},directives:[l.b,b.a,w.a],encapsulation:2}),e})();function s(){return{label:"Drawer",tabs:{Demo:i,"README.md":{type:"md",content:"# vcl-drawer\n\nSliding drawer with content area. In closed state, only the content area is visible.\n\n## Usage\n\n```html\n    <vcl-drawer-container>\n      <vcl-drawer mode=\"side\">\n        Drawer\n      </vcl-drawer>\n      Content\n    </vcl-drawer-container>\n```\n\n### Drawer modes\n\n`side`: Drawer appears besides the content. The content is pushed away and shrinked to make space for the drawer.\n`over`: Drawer floats over the content. The content is covered by a backdrop.\n\n### Opening and closing the drawer\n\nA drawer can be opened and closed with the `opened` property.\n\nThe opened state can also be changed via the drawer instance. \nIt exposes a `open()`, `close()` and `toggle()` method.\n\n\n```html\n    <vcl-drawer-container #drawer=\"vclDrawer\">\n      <vcl-drawer>...</vcl-drawer>\n      ...\n    </vcl-drawer-container>\n    <button (click)=\"drawer.toggle()\">Toggle</button>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type                  | Default            | Description\n| ------------        | -----------           | --------           |--------------\n| `position`          | 'left  \\| 'right'     | 'left'             | Drawer position\n| `mode`              | 'side  \\| 'over'      | 'side'             | Drawer mode\n| `opened`            | boolean               | `false` | `true`   | Drawer is opened. Default value is `true` for `side` mode and `false` for `over` mode.\n"},"demo.component.html":{type:"html",content:r("DFrE")},"demo.component.ts":{type:"ts",content:r("ay7N")}}}}let u=(()=>{class e{}return e.\u0275mod=d.Ib({type:e}),e.\u0275inj=d.Hb({factory:function(n){return new(n||e)},imports:[[t.c,a.b,c.VCLButtonModule,c.VCLDrawerModule,o.g.forChild([{path:"",component:a.a,data:{demo:s}}])]]}),e})()}}]);