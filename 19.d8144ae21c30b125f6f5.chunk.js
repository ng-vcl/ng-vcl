(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{190:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var e=t(5),a=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function e(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),s=function(n){function l(l){return n.call(this,l)||this}return a(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var t=n.target.currentValue;t&&(this.wormhole=this.connectWormhole(t,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(e.b)},383:function(n,l,t){"use strict";t.r(l);var e=t(0),a=function(){function n(){this.value=!1}return n.prototype.onChange=function(n){console.log("changed:"),console.dir(n)},n}();var s={demo:function(){return{name:"Flip-Switch",tabs:{Demo:a,"README.md":{type:"md",content:t(542)},"demo.component.html":{type:"pre",content:t(543)},"demo.component.ts":{type:"pre",content:t(544)}}}}},u=function(){return function(){}}(),o=t(144),i=t(415),c=t(465),r=t(40),b=t(447),p=e.Ab({encapsulation:2,styles:[],data:{}});function h(n){return e.Vb(0,[(n()(),e.Cb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Tb(-1,null,["2-way-binding"])),(n()(),e.Cb(2,0,null,null,2,"vcl-flip-switch",[["offLabel","Off"],["onLabel","On"]],[[2,"vclFlipSwitch",null],[2,"vclFlipSwitchPressed",null],[1,"role",0],[1,"aria-pressed",0],[1,"touch-action",0],[8,"tabIndex",0],[2,"vclDisabled",null]],[[null,"valueChange"],[null,"tap"],[null,"keydown"]],function(n,l,t){var a=!0,s=n.component;"tap"===l&&(a=!1!==e.Mb(n,4).onTap()&&a);"keydown"===l&&(a=!1!==e.Mb(n,4).keydown(t)&&a);"valueChange"===l&&(a=!1!==(s.value=t)&&a);return a},c.b,c.a)),e.Qb(5120,null,r.l,function(n){return[n]},[b.a]),e.Bb(4,49152,null,0,b.a,[e.i],{onLabel:[0,"onLabel"],offLabel:[1,"offLabel"],value:[2,"value"]},{valueChange:"valueChange"}),(n()(),e.Cb(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.Tb(6,null,["\nCurrent value: "," "])),(n()(),e.Cb(7,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Tb(-1,null,['Preset "on"'])),(n()(),e.Cb(9,0,null,null,2,"vcl-flip-switch",[["offLabel","Off"],["onLabel","On"],["value","true"]],[[2,"vclFlipSwitch",null],[2,"vclFlipSwitchPressed",null],[1,"role",0],[1,"aria-pressed",0],[1,"touch-action",0],[8,"tabIndex",0],[2,"vclDisabled",null]],[[null,"change"],[null,"tap"],[null,"keydown"]],function(n,l,t){var a=!0,s=n.component;"tap"===l&&(a=!1!==e.Mb(n,11).onTap()&&a);"keydown"===l&&(a=!1!==e.Mb(n,11).keydown(t)&&a);"change"===l&&(a=!1!==s.onChange(t)&&a);return a},c.b,c.a)),e.Qb(5120,null,r.l,function(n){return[n]},[b.a]),e.Bb(11,49152,null,0,b.a,[e.i],{onLabel:[0,"onLabel"],offLabel:[1,"offLabel"],value:[2,"value"]},null)],function(n,l){n(l,4,0,"On","Off",l.component.value);n(l,11,0,"On","Off","true")},function(n,l){var t=l.component;n(l,2,0,!0,e.Mb(l,4).value,"button",e.Mb(l,4).value,"pan-y",e.Mb(l,4).tabindex,e.Mb(l,4).disabled),n(l,6,0,t.value);n(l,9,0,!0,e.Mb(l,11).value,"button",e.Mb(l,11).value,"pan-y",e.Mb(l,11).tabindex,e.Mb(l,11).disabled)})}var f=e.yb("ng-component",a,function(n){return e.Vb(0,[(n()(),e.Cb(0,0,null,null,1,"ng-component",[],null,null,null,h,p)),e.Bb(1,49152,null,0,a,[],null,null)],null,null)},{},{},[]),d=t(3),v=t(82),g=t(417),m=t(416),C=t(433),y=t(466),w=t(4),j=t(412);t.d(l,"FlipSwitchDemoModuleNgFactory",function(){return T});var T=e.zb(u,[],function(n){return e.Jb([e.Kb(512,e.l,e.ob,[[8,[o.a,i.a,f]],[3,e.l],e.F]),e.Kb(4608,d.n,d.m,[e.B,[2,d.y]]),e.Kb(4608,r.w,r.w,[]),e.Kb(1073742336,d.c,d.c,[]),e.Kb(1073742336,r.t,r.t,[]),e.Kb(1073742336,r.k,r.k,[]),e.Kb(1073742336,v.a,v.a,[]),e.Kb(1073742336,g.a,g.a,[]),e.Kb(1073742336,m.a,m.a,[]),e.Kb(1073742336,C.a,C.a,[]),e.Kb(1073742336,y.a,y.a,[]),e.Kb(1073742336,w.m,w.m,[[2,w.s],[2,w.l]]),e.Kb(1073742336,u,u,[]),e.Kb(1024,w.j,function(){return[[{path:"",component:j.a,data:s}]]},[])])})},412:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var e,a;return"object"==typeof l.tabs[t]&&l.tabs[t]?a="pre"===(e=l.tabs[t].type)||"html"===e||"md"===e?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(e="component",a=l.tabs[t]),{name:t,content:a,type:e}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},413:function(n,l,t){"use strict";t.d(l,"b",function(){return e}),t.d(l,"a",function(){return a});var e=function(){return function(){}}(),a=function(){return function(){this.disabled=!1,this.tabClass=""}}()},414:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var e=t(5),a=t(0),s=t(413),u=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new a.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new e.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,t,e=this.tabs.toArray();n instanceof s.a?(l=e.indexOf(n),t=n):"number"==typeof n&&e[n]?t=e[l=n]:(l=-1,t=null),l>=0&&t instanceof s.a&&!t.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(t.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},415:function(n,l,t){"use strict";t.d(l,"a",function(){return T});var e=t(0),a=t(190),s=t(418),u=t(413),o=t(3),i=t(419),c=t(414),r=t(412),b=t(4),p=t(8),h=e.Ab({encapsulation:2,styles:[],data:{}});function f(n){return e.Vb(0,[(n()(),e.Tb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function d(n){return e.Vb(0,[(n()(),e.Cb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Bb(1,671744,null,0,a.a,[e.bb],{target:[0,"target"]},null),(n()(),e.tb(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function v(n){return e.Vb(0,[(n()(),e.Cb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.Cb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),e.Tb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function g(n){return e.Vb(0,[(n()(),e.Cb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function m(n){return e.Vb(0,[(n()(),e.Cb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function C(n){return e.Vb(0,[(n()(),e.Cb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return e.Vb(0,[(n()(),e.Cb(0,0,null,null,14,"vcl-tab",[],null,null,null,s.b,s.a)),e.Bb(1,49152,[[1,4]],1,u.a,[],null,null),e.Rb(335544320,2,{label:0}),(n()(),e.tb(0,[[2,2]],0,1,null,f)),e.Bb(4,16384,null,0,u.b,[],null,null),(n()(),e.tb(16777216,null,0,1,null,d)),e.Bb(6,16384,null,0,o.l,[e.bb,e.Y],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(16777216,null,0,1,null,v)),e.Bb(8,16384,null,0,o.l,[e.bb,e.Y],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(16777216,null,0,1,null,g)),e.Bb(10,16384,null,0,o.l,[e.bb,e.Y],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(16777216,null,0,1,null,m)),e.Bb(12,16384,null,0,o.l,[e.bb,e.Y],{ngIf:[0,"ngIf"]},null),(n()(),e.tb(16777216,null,0,1,null,C)),e.Bb(14,16384,null,0,o.l,[e.bb,e.Y],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function w(n){return e.Vb(0,[(n()(),e.Cb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.Cb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,i.b,i.a)),e.Bb(2,1228800,null,1,c.a,[],{borders:[0,"borders"]},null),e.Rb(603979776,1,{tabs:1}),(n()(),e.tb(16777216,null,0,1,null,y)),e.Bb(5,278528,null,0,o.k,[e.bb,e.Y,e.z],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,"true"),n(l,5,0,t.tabs)},null)}function j(n){return e.Vb(0,[(n()(),e.Cb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),e.Tb(1,null,[" ",""])),(n()(),e.tb(16777216,null,null,1,null,w)),e.Bb(3,16384,null,0,o.l,[e.bb,e.Y],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}var T=e.yb("ng-component",r.a,function(n){return e.Vb(0,[(n()(),e.Cb(0,0,null,null,1,"ng-component",[],null,null,null,j,h)),e.Bb(1,114688,null,0,r.a,[b.a,p.c],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},416:function(n,l,t){"use strict";t.d(l,"a",function(){return e});t(412);var e=function(){return function(){}}()},417:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},418:function(n,l,t){"use strict";t.d(l,"a",function(){return s}),t.d(l,"b",function(){return o});var e=t(0),a=t(413),s=e.Ab({encapsulation:2,styles:[],data:{}});function u(n){return e.Vb(0,[e.Lb(null,0),(n()(),e.tb(0,null,null,0))],null,null)}function o(n){return e.Vb(0,[e.Rb(402653184,1,{content:0}),(n()(),e.tb(0,[[1,2]],null,0,null,u))],null,null)}a.a},419:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t.d(l,"b",function(){return c});var e=t(0),a=t(190),s=t(3),u=t(414),o=e.Ab({encapsulation:2,styles:[],data:{}});function i(n){return e.Vb(0,[(n()(),e.Cb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,l,t){var e=!0,a=n.component;"click"===l&&(e=!1!==a.onTabClick(n.context.$implicit)&&e);return e},null,null)),(n()(),e.Cb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),e.Cb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Bb(3,671744,null,0,a.a,[e.bb],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,e.Eb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function c(n){return e.Vb(0,[e.Rb(402653184,1,{tabContent:0}),(n()(),e.Cb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),e.Cb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),e.tb(16777216,null,null,1,null,i)),e.Bb(4,278528,null,0,s.k,[e.bb,e.Y,e.z],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Cb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),e.Cb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),e.Cb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),e.Cb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),e.Lb(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,e.Eb(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,2,0,e.Eb(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,5,0,!0===t.hideContent?"none":null,e.Eb(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}u.a},433:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},447:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var e=t(0),a=(t(40).l,function(){function n(n){this.cdRef=n,this.tabindex=0,this.onLabel="On",this.offLabel="Off",this.value=!1,this.disabled=!1,this.valueChange=new e.q}return n.prototype.onTap=function(){this.toggle()},n.prototype.keydown=function(n){switch(n.code){case"Space":n.preventDefault(),this.toggle();break;case"ArrowLeft":n.preventDefault(),this.value||this.toggle();break;case"ArrowRight":n.preventDefault(),this.value&&this.toggle()}},n.prototype.toggle=function(){this.disabled||(this.value=!this.value,this.valueChange.emit(this.value),this.onChangeCallback&&this.onChangeCallback(this.value))},n.prototype.writeValue=function(n){this.value=n,this.cdRef.markForCheck()},n.prototype.registerOnChange=function(n){this.onChangeCallback=n},n.prototype.registerOnTouched=function(n){this.onTouchedCallback=n},n.prototype.setDisabledState=function(n){this.disabled=n,this.cdRef.markForCheck()},n}())},465:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return o});var e=t(0),a=t(40),s=t(447),u=e.Ab({encapsulation:2,styles:[],data:{}});function o(n){return e.Vb(2,[(n()(),e.Cb(0,0,null,null,6,"label",[["class","vclFlipSwitchLabel"]],null,null,null,null,null)),(n()(),e.Cb(1,0,null,null,4,"div",[["class","vclFlipSwitchTrack"]],null,null,null,null,null)),(n()(),e.Cb(2,0,null,null,1,"div",[["class","vclFlipSwitchActive"]],[[1,"aria-hidden",0]],null,null,null,null)),(n()(),e.Tb(3,null,["",""])),(n()(),e.Cb(4,0,null,null,1,"div",[["class","vclFlipSwitchInactive"]],[[1,"aria-hidden",0]],null,null,null,null)),(n()(),e.Tb(5,null,["",""])),(n()(),e.Cb(6,0,null,null,0,"div",[["class","vclFlipSwitchKnob"]],null,null,null,null,null))],null,function(n,l){var t=l.component;n(l,2,0,!t.value),n(l,3,0,t.onLabel),n(l,4,0,t.value),n(l,5,0,t.offLabel)})}s.a},466:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},542:function(n,l){n.exports='<h1 id="vcl-flip-switch">vcl-flip-switch</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-flip-switch</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">onLabel</span>=<span class="hljs-string">&quot;On&quot;</span> <span class="hljs-attr">offLabel</span>=<span class="hljs-string">&quot;Off&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-flip-switch</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>value</code> <em>(1)</em></td>\n<td>boolean</td>\n<td>false</td>\n<td>set the value</td>\n</tr>\n<tr>\n<td><code>onLabel</code></td>\n<td>string</td>\n<td>&apos;On&apos;</td>\n<td>The label for &quot;on&quot;</td>\n</tr>\n<tr>\n<td><code>offLabel</code></td>\n<td>string</td>\n<td>&apos;Off&apos;</td>\n<td>The label for &quot;off&quot;</td>\n</tr>\n</tbody>\n</table>\n<p><em>(1) Supports Two-way binding</em></p>\n'},543:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>2-way-binding<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-flip-switch</span> <span class="hljs-attr">onLabel</span>=<span class="hljs-string">"On"</span> <span class="hljs-attr">offLabel</span>=<span class="hljs-string">"Off"</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-flip-switch</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\nCurrent value: {{value}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Preset "on"<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-flip-switch</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">onLabel</span>=<span class="hljs-string">"On"</span> <span class="hljs-attr">offLabel</span>=<span class="hljs-string">"Off"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onChange($event)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-flip-switch</span>&gt;</span>\n'},544:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FlipSwitchDemoComponent {\n\n  selectedItem: <span class="hljs-built_in">any</span>;\n\n  value: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>;\n\n  onChange(ev) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'changed:\'</span>);\n    <span class="hljs-built_in">console</span>.dir(ev);\n  }\n}\n'}}]);