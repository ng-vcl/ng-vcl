(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{207:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var e=t(1),u=function(n){function l(l){return n.call(this,l)||this}return Object(e.c)(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var t=n.target.currentValue;t&&(this.wormhole=this.connectWormhole(t,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(t(93).b)},410:function(n,l,t){"use strict";t.r(l);var e=t(0),u=function(){function n(){this.value=!1}return n.prototype.onChange=function(n){console.log("changed:"),console.dir(n)},n}();var a={demo:function(){return{name:"Flip-Switch",tabs:{Demo:u,"README.md":{type:"md",content:t(566)},"demo.component.html":{type:"pre",content:t(567)},"demo.component.ts":{type:"pre",content:t(568)}}}}},s=function(){return function(){}}(),o=t(159),i=t(434),c=t(488),r=t(46),b=t(469),p=e.Cb({encapsulation:2,styles:[],data:{}});function h(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["2-way-binding"])),(n()(),e.Eb(2,0,null,null,2,"vcl-flip-switch",[["offLabel","Off"],["onLabel","On"]],[[2,"vclFlipSwitch",null],[2,"vclFlipSwitchPressed",null],[1,"role",0],[1,"aria-pressed",0],[1,"touch-action",0],[8,"tabIndex",0],[2,"vclDisabled",null]],[[null,"valueChange"],[null,"tap"],[null,"keydown"]],function(n,l,t){var u=!0,a=n.component;"tap"===l&&(u=!1!==e.Ob(n,4).onTap()&&u);"keydown"===l&&(u=!1!==e.Ob(n,4).keydown(t)&&u);"valueChange"===l&&(u=!1!==(a.value=t)&&u);return u},c.b,c.a)),e.Sb(5120,null,r.l,function(n){return[n]},[b.a]),e.Db(4,49152,null,0,b.a,[e.i],{onLabel:[0,"onLabel"],offLabel:[1,"offLabel"],value:[2,"value"]},{valueChange:"valueChange"}),(n()(),e.Eb(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.Vb(6,null,["\nCurrent value: "," "])),(n()(),e.Eb(7,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,['Preset "on"'])),(n()(),e.Eb(9,0,null,null,2,"vcl-flip-switch",[["offLabel","Off"],["onLabel","On"],["value","true"]],[[2,"vclFlipSwitch",null],[2,"vclFlipSwitchPressed",null],[1,"role",0],[1,"aria-pressed",0],[1,"touch-action",0],[8,"tabIndex",0],[2,"vclDisabled",null]],[[null,"change"],[null,"tap"],[null,"keydown"]],function(n,l,t){var u=!0,a=n.component;"tap"===l&&(u=!1!==e.Ob(n,11).onTap()&&u);"keydown"===l&&(u=!1!==e.Ob(n,11).keydown(t)&&u);"change"===l&&(u=!1!==a.onChange(t)&&u);return u},c.b,c.a)),e.Sb(5120,null,r.l,function(n){return[n]},[b.a]),e.Db(11,49152,null,0,b.a,[e.i],{onLabel:[0,"onLabel"],offLabel:[1,"offLabel"],value:[2,"value"]},null)],function(n,l){n(l,4,0,"On","Off",l.component.value);n(l,11,0,"On","Off","true")},function(n,l){var t=l.component;n(l,2,0,!0,e.Ob(l,4).value,"button",e.Ob(l,4).value,"pan-y",e.Ob(l,4).tabindex,e.Ob(l,4).disabled),n(l,6,0,t.value);n(l,9,0,!0,e.Ob(l,11).value,"button",e.Ob(l,11).value,"pan-y",e.Ob(l,11).tabindex,e.Ob(l,11).disabled)})}function f(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"ng-component",[],null,null,null,h,p)),e.Db(1,49152,null,0,u,[],null,null)],null,null)}var d=e.Ab("ng-component",u,f,{},{},[]),v=t(3),m=t(83),g=t(436),y=t(435),w=t(451),C=t(489),O=t(4),j=t(431);t.d(l,"FlipSwitchDemoModuleNgFactory",function(){return T});var T=e.Bb(s,[],function(n){return e.Lb([e.Mb(512,e.l,e.qb,[[8,[o.a,i.a,d]],[3,e.l],e.F]),e.Mb(4608,v.n,v.m,[e.B,[2,v.y]]),e.Mb(4608,r.w,r.w,[]),e.Mb(1073742336,v.c,v.c,[]),e.Mb(1073742336,r.t,r.t,[]),e.Mb(1073742336,r.k,r.k,[]),e.Mb(1073742336,m.a,m.a,[]),e.Mb(1073742336,g.a,g.a,[]),e.Mb(1073742336,y.a,y.a,[]),e.Mb(1073742336,w.a,w.a,[]),e.Mb(1073742336,C.a,C.a,[]),e.Mb(1073742336,O.m,O.m,[[2,O.s],[2,O.l]]),e.Mb(1073742336,s,s,[]),e.Mb(1024,O.j,function(){return[[{path:"",component:j.a,data:a}]]},[])])})},431:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var e,u;return"object"==typeof l.tabs[t]&&l.tabs[t]?u="pre"===(e=l.tabs[t].type)||"html"===e||"md"===e?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(e="component",u=l.tabs[t]),{name:t,content:u,type:e}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},432:function(n,l,t){"use strict";t.d(l,"b",function(){return e}),t.d(l,"a",function(){return u});var e=function(){return function(){}}(),u=function(){return function(){this.disabled=!1,this.tabClass=""}}()},433:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var e=t(93),u=t(0),a=t(432),s=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new u.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new e.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,t,e=this.tabs.toArray();n instanceof a.a?(l=e.indexOf(n),t=n):"number"==typeof n&&e[n]?t=e[l=n]:(l=-1,t=null),l>=0&&t instanceof a.a&&!t.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(t.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},434:function(n,l,t){"use strict";t.d(l,"a",function(){return T});var e=t(0),u=t(207),a=t(437),s=t(432),o=t(3),i=t(438),c=t(433),r=t(431),b=t(4),p=t(6),h=e.Cb({encapsulation:2,styles:[],data:{}});function f(n){return e.Xb(0,[(n()(),e.Vb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function d(n){return e.Xb(0,[(n()(),e.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(1,671744,null,0,u.a,[e.db],{target:[0,"target"]},null),(n()(),e.vb(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function v(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),e.Vb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function m(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function g(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function w(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,a.b,a.a)),e.Db(1,49152,[[1,4]],1,s.a,[],null,null),e.Tb(335544320,2,{label:0}),(n()(),e.vb(0,[[2,2]],0,1,null,f)),e.Db(4,16384,null,0,s.b,[],null,null),(n()(),e.vb(16777216,null,0,1,null,d)),e.Db(6,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,v)),e.Db(8,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,m)),e.Db(10,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,g)),e.Db(12,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,y)),e.Db(14,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function C(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,i.b,i.a)),e.Db(2,1228800,null,1,c.a,[],{borders:[0,"borders"]},null),e.Tb(603979776,1,{tabs:1}),(n()(),e.vb(16777216,null,0,1,null,w)),e.Db(5,278528,null,0,o.k,[e.db,e.Z,e.z],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,"true"),n(l,5,0,t.tabs)},null)}function O(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),e.Vb(1,null,[" ",""])),(n()(),e.vb(16777216,null,null,1,null,C)),e.Db(3,16384,null,0,o.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function j(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"ng-component",[],null,null,null,O,h)),e.Db(1,114688,null,0,r.a,[b.a,p.c],null,null)],function(n,l){n(l,1,0)},null)}var T=e.Ab("ng-component",r.a,j,{},{},[])},435:function(n,l,t){"use strict";t.d(l,"a",function(){return e});t(431);var e=function(){return function(){}}()},436:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},437:function(n,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return o});var e=t(0),u=t(432),a=e.Cb({encapsulation:2,styles:[],data:{}});function s(n){return e.Xb(0,[e.Nb(null,0),(n()(),e.vb(0,null,null,0))],null,null)}function o(n){return e.Xb(0,[e.Tb(402653184,1,{content:0}),(n()(),e.vb(0,[[1,2]],null,0,null,s))],null,null)}function i(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"vcl-tab",[],null,null,null,o,a)),e.Db(1,49152,null,1,u.a,[],null,null),e.Tb(335544320,1,{label:0})],null,null)}u.a},438:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t.d(l,"b",function(){return c});var e=t(0),u=t(207),a=t(3),s=t(433),o=e.Cb({encapsulation:2,styles:[],data:{}});function i(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,l,t){var e=!0,u=n.component;"click"===l&&(e=!1!==u.onTabClick(n.context.$implicit)&&e);return e},null,null)),(n()(),e.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),e.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(3,671744,null,0,u.a,[e.db],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,e.Gb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function c(n){return e.Xb(0,[e.Tb(402653184,1,{tabContent:0}),(n()(),e.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),e.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),e.vb(16777216,null,null,1,null,i)),e.Db(4,278528,null,0,a.k,[e.db,e.Z,e.z],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),e.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),e.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),e.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),e.Nb(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,e.Gb(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,2,0,e.Gb(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,5,0,!0===t.hideContent?"none":null,e.Gb(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}function r(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"vcl-tab-nav",[],null,null,null,c,o)),e.Db(1,1228800,null,1,s.a,[],null,null),e.Tb(603979776,1,{tabs:1})],null,null)}s.a},451:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},469:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var e=t(0),u=(t(46).l,function(){function n(n){this.cdRef=n,this.tabindex=0,this.onLabel="On",this.offLabel="Off",this.value=!1,this.disabled=!1,this.valueChange=new e.q}return n.prototype.onTap=function(){this.toggle()},n.prototype.keydown=function(n){switch(n.code){case"Space":n.preventDefault(),this.toggle();break;case"ArrowLeft":n.preventDefault(),this.value||this.toggle();break;case"ArrowRight":n.preventDefault(),this.value&&this.toggle()}},n.prototype.toggle=function(){this.disabled||(this.value=!this.value,this.valueChange.emit(this.value),this.onChangeCallback&&this.onChangeCallback(this.value))},n.prototype.writeValue=function(n){this.value=n,this.cdRef.markForCheck()},n.prototype.registerOnChange=function(n){this.onChangeCallback=n},n.prototype.registerOnTouched=function(n){this.onTouchedCallback=n},n.prototype.setDisabledState=function(n){this.disabled=n,this.cdRef.markForCheck()},n}())},488:function(n,l,t){"use strict";t.d(l,"a",function(){return s}),t.d(l,"b",function(){return o});var e=t(0),u=t(46),a=t(469),s=e.Cb({encapsulation:2,styles:[],data:{}});function o(n){return e.Xb(2,[(n()(),e.Eb(0,0,null,null,6,"label",[["class","vclFlipSwitchLabel"]],null,null,null,null,null)),(n()(),e.Eb(1,0,null,null,4,"div",[["class","vclFlipSwitchTrack"]],null,null,null,null,null)),(n()(),e.Eb(2,0,null,null,1,"div",[["class","vclFlipSwitchActive"]],[[1,"aria-hidden",0]],null,null,null,null)),(n()(),e.Vb(3,null,["",""])),(n()(),e.Eb(4,0,null,null,1,"div",[["class","vclFlipSwitchInactive"]],[[1,"aria-hidden",0]],null,null,null,null)),(n()(),e.Vb(5,null,["",""])),(n()(),e.Eb(6,0,null,null,0,"div",[["class","vclFlipSwitchKnob"]],null,null,null,null,null))],null,function(n,l){var t=l.component;n(l,2,0,!t.value),n(l,3,0,t.onLabel),n(l,4,0,t.value),n(l,5,0,t.offLabel)})}function i(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"vcl-flip-switch",[],[[2,"vclFlipSwitch",null],[2,"vclFlipSwitchPressed",null],[1,"role",0],[1,"aria-pressed",0],[1,"touch-action",0],[8,"tabIndex",0],[2,"vclDisabled",null]],[[null,"tap"],[null,"keydown"]],function(n,l,t){var u=!0;"tap"===l&&(u=!1!==e.Ob(n,2).onTap()&&u);"keydown"===l&&(u=!1!==e.Ob(n,2).keydown(t)&&u);return u},o,s)),e.Sb(5120,null,u.l,function(n){return[n]},[a.a]),e.Db(2,49152,null,0,a.a,[e.i],null,null)],null,function(n,l){n(l,0,0,!0,e.Ob(l,2).value,"button",e.Ob(l,2).value,"pan-y",e.Ob(l,2).tabindex,e.Ob(l,2).disabled)})}a.a},489:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},566:function(n,l){n.exports='<h1 id="vcl-flip-switch">vcl-flip-switch</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-flip-switch [(value)]=&quot;value&quot; onLabel=&quot;On&quot; offLabel=&quot;Off&quot;&gt;&lt;/vcl-flip-switch&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code> <em>(1)</em></td>\n<td>boolean</td>\n<td>false</td>\n<td>set the value</td>\n</tr>\n<tr>\n<td><code>onLabel</code></td>\n<td>string</td>\n<td>&apos;On&apos;</td>\n<td>The label for &quot;on&quot;</td>\n</tr>\n<tr>\n<td><code>offLabel</code></td>\n<td>string</td>\n<td>&apos;Off&apos;</td>\n<td>The label for &quot;off&quot;</td>\n</tr>\n</tbody></table>\n<p><em>(1) Supports Two-way binding</em></p>\n'},567:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>2-way-binding<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-flip-switch</span> <span class="hljs-attr">onLabel</span>=<span class="hljs-string">"On"</span> <span class="hljs-attr">offLabel</span>=<span class="hljs-string">"Off"</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-flip-switch</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\nCurrent value: {{value}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Preset "on"<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-flip-switch</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">onLabel</span>=<span class="hljs-string">"On"</span> <span class="hljs-attr">offLabel</span>=<span class="hljs-string">"Off"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onChange($event)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-flip-switch</span>&gt;</span>\n'},568:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FlipSwitchDemoComponent {\n\n  selectedItem: <span class="hljs-built_in">any</span>;\n\n  value: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>;\n\n  onChange(ev) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'changed:\'</span>);\n    <span class="hljs-built_in">console</span>.dir(ev);\n  }\n}\n'}}]);