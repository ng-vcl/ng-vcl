(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{196:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var e=t(25),s=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function e(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),a=function(n){function l(l){return n.call(this,l)||this}return s(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var t=n.target.currentValue;t&&(this.wormhole=this.connectWormhole(t,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(e.b)},393:function(n,l,t){"use strict";t.r(l);var e=t(0),s=t(25),a=function(){return function(){}}(),o=function(){function n(){}return Object.defineProperty(n.prototype,"target",{set:function(n){this.host=new s.b(n)},enumerable:!0,configurable:!0}),n.prototype.ngAfterViewInit=function(){this.host.connectWormhole(a,{value:"value"})},n.prototype.ngOnDestroy=function(){this.host&&this.host.clearWormholes()},n}();var u={demo:function(){return{label:"Wormhole",tabs:{Demo:o,"README.md":{type:"md",content:t(664)},"demo.component.html":{type:"pre",content:t(665)},"demo.component.ts":{type:"pre",content:t(666)}}}}},r=function(){return function(){}}(),c=t(151),i=t(423),p=t(196),b=e.Cb({encapsulation:2,styles:[],data:{}});function h(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),e.Vb(-1,null,["I am a component. And this is my "])),(n()(),e.Eb(2,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),e.Vb(3,null,["",""]))],null,function(n,l){n(l,3,0,l.component.value)})}var m=e.Ab("ng-component",a,function(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"ng-component",[],null,null,null,h,b)),e.Db(1,49152,null,0,a,[],null,null)],null,null)},{value:"value"},{},[]),d=e.Cb({encapsulation:2,styles:[],data:{}});function f(n){return e.Xb(0,[(n()(),e.Vb(-1,null,[" But is rendered below\n"]))],null,null)}function g(n){return e.Xb(0,[e.Tb(402653184,1,{myFirstTemplateWormhole:0}),e.Tb(402653184,2,{target:0}),(n()(),e.Vb(-1,null,["The template wormhole is defined above the hr\n"])),(n()(),e.vb(0,[["someTemplate",2]],null,0,null,f)),(n()(),e.Eb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.Eb(5,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(6,671744,null,0,p.a,[e.db],{target:[0,"target"]},null),(n()(),e.Eb(7,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.Eb(8,16777216,[[2,3],["target",1]],null,0,"div",[],null,null,null,null,null))],function(n,l){n(l,6,0,e.Ob(l,3))},null)}var v=e.Ab("ng-component",o,function(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"ng-component",[],null,null,null,g,d)),e.Db(1,4374528,null,0,o,[],null,null)],null,null)},{},{},[]),y=t(3),j=t(80),w=t(425),C=t(424),T=t(4),x=t(420);t.d(l,"WormholeDemoModuleNgFactory",function(){return I});var I=e.Bb(r,[],function(n){return e.Lb([e.Mb(512,e.l,e.qb,[[8,[c.a,i.a,v,m]],[3,e.l],e.F]),e.Mb(4608,y.n,y.m,[e.B,[2,y.y]]),e.Mb(1073742336,y.c,y.c,[]),e.Mb(1073742336,j.a,j.a,[]),e.Mb(1073742336,w.a,w.a,[]),e.Mb(1073742336,C.a,C.a,[]),e.Mb(1073742336,T.m,T.m,[[2,T.s],[2,T.l]]),e.Mb(1073742336,r,r,[]),e.Mb(1024,T.j,function(){return[[{path:"",component:x.a,data:u}]]},[])])})},420:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var e,s;return"object"==typeof l.tabs[t]&&l.tabs[t]?s="pre"===(e=l.tabs[t].type)||"html"===e||"md"===e?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(e="component",s=l.tabs[t]),{name:t,content:s,type:e}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},421:function(n,l,t){"use strict";t.d(l,"b",function(){return e}),t.d(l,"a",function(){return s});var e=function(){return function(){}}(),s=function(){return function(){this.disabled=!1,this.tabClass=""}}()},422:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var e=t(25),s=t(0),a=t(421),o=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new s.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new e.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,t,e=this.tabs.toArray();n instanceof a.a?(l=e.indexOf(n),t=n):"number"==typeof n&&e[n]?t=e[l=n]:(l=-1,t=null),l>=0&&t instanceof a.a&&!t.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(t.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},423:function(n,l,t){"use strict";t.d(l,"a",function(){return T});var e=t(0),s=t(196),a=t(426),o=t(421),u=t(3),r=t(427),c=t(422),i=t(420),p=t(4),b=t(6),h=e.Cb({encapsulation:2,styles:[],data:{}});function m(n){return e.Xb(0,[(n()(),e.Vb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function d(n){return e.Xb(0,[(n()(),e.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(1,671744,null,0,s.a,[e.db],{target:[0,"target"]},null),(n()(),e.vb(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function f(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),e.Vb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function g(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function v(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function j(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,a.b,a.a)),e.Db(1,49152,[[1,4]],1,o.a,[],null,null),e.Tb(335544320,2,{label:0}),(n()(),e.vb(0,[[2,2]],0,1,null,m)),e.Db(4,16384,null,0,o.b,[],null,null),(n()(),e.vb(16777216,null,0,1,null,d)),e.Db(6,16384,null,0,u.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,f)),e.Db(8,16384,null,0,u.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,g)),e.Db(10,16384,null,0,u.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,v)),e.Db(12,16384,null,0,u.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(16777216,null,0,1,null,y)),e.Db(14,16384,null,0,u.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function w(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,r.b,r.a)),e.Db(2,1228800,null,1,c.a,[],{borders:[0,"borders"]},null),e.Tb(603979776,1,{tabs:1}),(n()(),e.vb(16777216,null,0,1,null,j)),e.Db(5,278528,null,0,u.k,[e.db,e.Z,e.z],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,"true"),n(l,5,0,t.tabs)},null)}function C(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),e.Vb(1,null,[" ",""])),(n()(),e.vb(16777216,null,null,1,null,w)),e.Db(3,16384,null,0,u.l,[e.db,e.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}var T=e.Ab("ng-component",i.a,function(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,1,"ng-component",[],null,null,null,C,h)),e.Db(1,114688,null,0,i.a,[p.a,b.c],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},424:function(n,l,t){"use strict";t.d(l,"a",function(){return e});t(420);var e=function(){return function(){}}()},425:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){}}()},426:function(n,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return u});var e=t(0),s=t(421),a=e.Cb({encapsulation:2,styles:[],data:{}});function o(n){return e.Xb(0,[e.Nb(null,0),(n()(),e.vb(0,null,null,0))],null,null)}function u(n){return e.Xb(0,[e.Tb(402653184,1,{content:0}),(n()(),e.vb(0,[[1,2]],null,0,null,o))],null,null)}s.a},427:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return c});var e=t(0),s=t(196),a=t(3),o=t(422),u=e.Cb({encapsulation:2,styles:[],data:{}});function r(n){return e.Xb(0,[(n()(),e.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,l,t){var e=!0,s=n.component;"click"===l&&(e=!1!==s.onTabClick(n.context.$implicit)&&e);return e},null,null)),(n()(),e.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),e.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e.Db(3,671744,null,0,s.a,[e.db],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,e.Gb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function c(n){return e.Xb(0,[e.Tb(402653184,1,{tabContent:0}),(n()(),e.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),e.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),e.vb(16777216,null,null,1,null,r)),e.Db(4,278528,null,0,a.k,[e.db,e.Z,e.z],{ngForOf:[0,"ngForOf"]},null),(n()(),e.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),e.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),e.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),e.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),e.Nb(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,e.Gb(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,2,0,e.Gb(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,5,0,!0===t.hideContent?"none":null,e.Gb(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}o.a},664:function(n,l){n.exports='<h1 id="wormhole">wormhole</h1>\n<p>The wormhole directive allows to render templates and components in the DOM.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLWormholeModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLWormholeModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<p>Use the the <code>wormhole</code> directive to create a wormhole template...</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">myFirstWormhole</span>&gt;</span>\n  I will be rendered through a wormhole\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span></pre>\n<p>...and connect it via the wormholeTarget directive.<br>The template is rendered below the wormhole directive.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">wormhole</span> [<span class="hljs-attr">connect</span>]=<span class="hljs-string">&quot;myFirstWormhole&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wormhole</span>&gt;</span>\n<span class="hljs-comment">&lt;!-- The myFirstWormhole template is rendered here --&gt;</span></pre>\n'},665:function(n,l){n.exports='The template wormhole is defined above the hr\n<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">someTemplate</span>&gt;</span>\n  But is rendered below\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">wormhole</span> [<span class="hljs-attr">connect</span>]=<span class="hljs-string">"someTemplate"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wormhole</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">target</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n\n\n'},666:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, ViewChild, Input, ViewContainerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Wormhole, WormholeHost } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  template: <span class="hljs-string">\'&lt;p&gt;I am a component. And this is my &lt;b&gt;{{value}}&lt;/b&gt;&lt;/p&gt;\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyComponent {\n  <span class="hljs-meta">@Input</span>()\n  value: <span class="hljs-built_in">string</span>;\n}\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> WormholeDemoComponent {\n\n  <span class="hljs-comment">// Template wormhole</span>\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'myFirstWormhole\'</span>)\n  myFirstTemplateWormhole: <span class="hljs-built_in">any</span>;\n\n\n  <span class="hljs-comment">// Component wormhole</span>\n\n  <span class="hljs-comment">// This is the target where the component will be rendered</span>\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'target\'</span>, { read: ViewContainerRef })\n  <span class="hljs-keyword">set</span> target(vcRef: ViewContainerRef) {\n    <span class="hljs-keyword">this</span>.host =  <span class="hljs-keyword">new</span> WormholeHost(vcRef);\n  }\n\n  host: WormholeHost;\n\n  ngAfterViewInit() {\n    <span class="hljs-comment">// Create and connect wormhole</span>\n    <span class="hljs-keyword">this</span>.host.connectWormhole(MyComponent, {\n      value: <span class="hljs-string">\'value\'</span>\n    });\n  }\n\n  ngOnDestroy() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.host) {\n      <span class="hljs-keyword">this</span>.host.clearWormholes();\n    }\n  }\n}\n'}}]);