webpackJsonp([16],{432:function(n,l,t){"use strict";function s(){return{label:"Busy",tabs:{Demo:e,"README.md":{type:"md",content:t(851)},"demo.component.html":{type:"pre",content:t(852)},"demo.component.ts":{type:"pre",content:t(853)}}}}function a(n){return i._41(0,[(n()(),i._39(null,["\n\n"])),(n()(),i._19(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._39(null,["Simple busy indicator:"])),(n()(),i._39(null,["\n"])),(n()(),i._19(0,null,null,1,"vcl-busy-indicator",[],null,null,null,o.b,o.a)),i._17(49152,null,0,r.a,[],null,null),(n()(),i._39(null,["\n"])),(n()(),i._19(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._19(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._39(null,["\n\n"])),(n()(),i._19(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._39(null,["Busy indicator with label and alternative icon:"])),(n()(),i._39(null,["\n"])),(n()(),i._19(0,null,null,2,"vcl-busy-indicator",[["type","straight"]],null,null,null,o.b,o.a)),i._17(49152,null,0,r.a,[],{type:[0,"type"]},null),(n()(),i._39(0,["\n  Loading...\n"])),(n()(),i._39(null,["\n"])),(n()(),i._19(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._19(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._39(null,["\n\n"])),(n()(),i._19(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._39(null,["Busy container:"])),(n()(),i._39(null,["\n"])),(n()(),i._19(0,null,null,11,"div",[["busyIndicatorType","straight"],["busyLabel","Loading..."],["class","vclContainer vclLayoutHorizontal"],["style","height:15em"]],[[2,"vclLoadingLayerContainer",null]],null,null,p.b,p.a)),i._17(49152,null,0,d.a,[],{busy:[0,"busy"],busyIndicatorType:[1,"busyIndicatorType"],busyLabel:[2,"busyLabel"]},null),(n()(),i._39(0,["\n  "])),(n()(),i._19(0,null,0,7,"div",[["class","vclLayoutFlex"],["style","padding:0.5em"]],null,null,null,null,null)),(n()(),i._39(null,["\n    Busy container"])),(n()(),i._19(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._39(null,["\n    "])),(n()(),i._19(0,null,null,2,"button",[["label","Make container busy for 3 secs"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(n,l,t){var s=!0,a=n.component;if("keypress"===l){s=!1!==i._33(n,31).onKeypress(t)&&s}if("mouseenter"===l){s=!1!==i._33(n,31).onMouseEnter(t)&&s}if("mouseleave"===l){s=!1!==i._33(n,31).onMouseLeave(t)&&s}if("tap"===l){s=!1!==i._33(n,31).onTap(t)&&s}if("click"===l){s=!1!==i._33(n,31).onClick(t)&&s}if("tap"===l){s=!1!==a.makeBusy()&&s}return s},_.b,_.a)),i._17(4898816,null,1,b.a,[i.n],{label:[0,"label"]},null),i._37(603979776,1,{buttonContent:1}),(n()(),i._39(null,["\n  "])),(n()(),i._39(0,["\n"])),(n()(),i._39(null,["\n"]))],function(n,l){var t=l.component;n(l,14,0,"straight");n(l,24,0,t.isBusy,"straight","Loading...");n(l,31,0,"Make container busy for 3 secs")},function(n,l){n(l,23,0,i._33(l,24).busy);n(l,30,0,!0,i._33(l,31).hovered,i._33(l,31).isDisabled,i._33(l,31).selected,i._33(l,31).title)})}function u(n){return i._41(0,[(n()(),i._19(0,null,null,1,"ng-component",[],null,null,null,a,y)),i._17(49152,null,0,e,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var e=function(){function n(){this.isBusy=!1}return n.prototype.makeBusy=function(){var n=this;this.isBusy=!0,setTimeout(function(){return n.isBusy=!1},3e3)},n}(),c=function(){function n(){}return n}(),i=t(2),o=t(545),r=t(534),p=t(559),d=t(543),_=t(189),b=t(79),h=[],y=i._16({encapsulation:2,styles:h,data:{}}),f=i._14("ng-component",e,u,{},{},[]);t.d(l,"BusyDemoModuleNgFactory",function(){return O});var g=t(2),m=t(454),v=t(21),j=t(40),C=t(114),T=t(59),I=t(451),x=t(455),L=t(187),B=t(188),k=t(190),w=t(500),q=t(27),$=t(449),O=g._15(c,[],function(n){return g._30([g._31(512,g.k,g._11,[[8,[m.a,f]],[3,g.k],g.E]),g._31(4608,v.m,v.l,[g.A]),g._31(4608,j.a,j.a,[]),g._31(512,v.c,v.c,[]),g._31(512,C.a,C.a,[]),g._31(512,T.d,T.d,[]),g._31(512,I.a,I.a,[]),g._31(512,x.a,x.a,[]),g._31(512,L.a,L.a,[]),g._31(512,B.a,B.a,[]),g._31(512,k.a,k.a,[]),g._31(512,w.a,w.a,[]),g._31(512,q.m,q.m,[[2,q.r],[2,q.l]]),g._31(512,c,c,[]),g._31(1024,q.j,function(){return[[{path:"",component:$.a,data:{demo:s}}]]},[])])})},448:function(n,l,t){"use strict";t.d(l,"b",function(){return s}),t.d(l,"a",function(){return a});var s=function(){function n(){}return n}(),a=function(){function n(){this.disabled=!1,this.tabClass=""}return n}()},449:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var s=t(27),a=t(28),u=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var s,a;return"object"==typeof l.tabs[t]&&l.tabs[t]?(s=l.tabs[t].type,a="pre"===s||"html"===s||"md"===s?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content):"function"==typeof l.tabs[t]&&(s="component",a=l.tabs[t]),{name:t,content:a,type:s}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n.ctorParameters=function(){return[{type:s.a},{type:a.c}]},n}()},450:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var s=t(59),a=t(2),u=t(448),e=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new a.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){this.wormholeHost=new s.e(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){var l,t,s=this.tabs.toArray();n instanceof u.a?(l=s.indexOf(n),t=n):"number"==typeof n&&s[n]?(l=n,t=s[l]):(l=-1,t=null),l>=0&&t instanceof u.a&&!t.disabled&&(this.wormholeHost.clearWormholes(),this.selectedTabIndex=l,this.selectedTabIndexChange$.emit(l),this.wormholeHost.connectWormhole(t.content))},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost.clearWormholes()},n}()},451:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){}return n}()},452:function(n,l,t){"use strict";function s(n){return e._41(0,[e._32(null,0),(n()(),e._13(0,null,null,0))],null,null)}function a(n){return e._41(0,[e._37(402653184,1,{content:0}),(n()(),e._13(0,[[1,2]],null,0,null,s))],null,null)}function u(n){return e._41(0,[(n()(),e._19(0,null,null,2,"vcl-tab",[],null,null,null,a,o)),e._17(49152,null,1,c.a,[],null,null),e._37(335544320,1,{label:0})],null,null)}t.d(l,"a",function(){return o}),l.b=a;var e=t(2),c=t(448),i=[],o=e._16({encapsulation:2,styles:i,data:{}});e._14("vcl-tab",c.a,u,{disabled:"disabled",tabClass:"tabClass"},{},["*"])},453:function(n,l,t){"use strict";function s(n){return e._41(0,[(n()(),e._19(0,null,null,7,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,t){var s=!0,a=n.component;if("tap"===l){s=!1!==a.selectTab(n.context.$implicit)&&s}return s},null,null)),(n()(),e._39(null,["\n        "])),(n()(),e._19(0,null,null,4,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),e._39(null,[" \n          "])),(n()(),e._19(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),e._17(671744,null,0,c.a,[e._1],{target:[0,"target"]},null),(n()(),e._39(null,["\n        "])),(n()(),e._39(null,["\n    "]))],function(n,l){n(l,5,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,e._22(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function a(n){return e._41(0,[e._37(402653184,1,{tabContent:0}),(n()(),e._19(0,null,null,20,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),e._39(null,["\n  "])),(n()(),e._19(0,null,null,4,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),e._39(null,["\n    "])),(n()(),e._13(16777216,null,null,1,null,s)),e._17(802816,null,0,i.j,[e._1,e.Y,e.y],{ngForOf:[0,"ngForOf"]},null),(n()(),e._39(null,["\n  "])),(n()(),e._39(null,["\n  "])),(n()(),e._19(0,null,null,11,"div",[],[[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),e._39(null,["\n    "])),(n()(),e._19(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),e._39(null,["\n      "])),(n()(),e._19(16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),e._39(null,["\n    "])),(n()(),e._39(null,["\n    "])),(n()(),e._19(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),e._39(null,["\n      "])),e._32(null,0),(n()(),e._39(null,["\n    "])),(n()(),e._39(null,["\n  "])),(n()(),e._39(null,["\n"])),(n()(),e._39(null,["\n"]))],function(n,l){n(l,6,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,e._22(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,3,0,e._22(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,9,0,e._22(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}function u(n){return e._41(0,[(n()(),e._19(0,null,null,2,"vcl-tab-nav",[],null,null,null,a,p)),e._17(1228800,null,1,o.a,[],null,null),e._37(603979776,1,{tabs:1})],null,null)}t.d(l,"a",function(){return p}),l.b=a;var e=t(2),c=t(186),i=t(21),o=t(450),r=[],p=e._16({encapsulation:2,styles:r,data:{}});e._14("vcl-tab-nav",o.a,u,{layout:"layout",tabbableClass:"tabbableClass",tabsClass:"tabsClass",tabContentClass:"tabContentClass",borders:"borders",selectedTabIndex:"selectedTabIndex"},{selectedTabIndexChange:"selectedTabIndexChange"},["*"])},454:function(n,l,t){"use strict";function s(n){return _._41(0,[(n()(),_._39(null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function a(n){return _._41(0,[(n()(),_._19(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),_._17(671744,null,0,b.a,[_._1],{target:[0,"target"]},null),(n()(),_._13(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function u(n){return _._41(0,[(n()(),_._19(0,null,null,2,"div",[],null,null,null,null,null)),(n()(),_._19(0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),_._39(null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function e(n){return _._41(0,[(n()(),_._19(0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function c(n){return _._41(0,[(n()(),_._19(0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function i(n){return _._41(0,[(n()(),_._19(0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function o(n){return _._41(0,[(n()(),_._19(0,null,null,21,"vcl-tab",[],null,null,null,h.b,h.a)),_._17(49152,[[1,4]],1,y.a,[],null,null),_._37(335544320,2,{label:0}),(n()(),_._39(0,["\n      "])),(n()(),_._13(0,[[2,2]],0,1,null,s)),_._17(16384,null,0,y.b,[],null,null),(n()(),_._39(0,["\n      "])),(n()(),_._13(16777216,null,0,1,null,a)),_._17(16384,null,0,f.k,[_._1,_.Y],{ngIf:[0,"ngIf"]},null),(n()(),_._39(0,["\n      "])),(n()(),_._13(16777216,null,0,1,null,u)),_._17(16384,null,0,f.k,[_._1,_.Y],{ngIf:[0,"ngIf"]},null),(n()(),_._39(0,["\n      "])),(n()(),_._13(16777216,null,0,1,null,e)),_._17(16384,null,0,f.k,[_._1,_.Y],{ngIf:[0,"ngIf"]},null),(n()(),_._39(0,["\n      "])),(n()(),_._13(16777216,null,0,1,null,c)),_._17(16384,null,0,f.k,[_._1,_.Y],{ngIf:[0,"ngIf"]},null),(n()(),_._39(0,["\n      "])),(n()(),_._13(16777216,null,0,1,null,i)),_._17(16384,null,0,f.k,[_._1,_.Y],{ngIf:[0,"ngIf"]},null),(n()(),_._39(0,["\n    "]))],function(n,l){n(l,8,0,"component"===l.context.$implicit.type),n(l,11,0,"text"===l.context.$implicit.type),n(l,14,0,"html"===l.context.$implicit.type),n(l,17,0,"md"===l.context.$implicit.type),n(l,20,0,"pre"===l.context.$implicit.type)},null)}function r(n){return _._41(0,[(n()(),_._19(0,null,null,9,"div",[],null,null,null,null,null)),(n()(),_._39(null,["\n  "])),(n()(),_._19(0,null,null,6,"vcl-tab-nav",[["borders","true"]],null,null,null,g.b,g.a)),_._17(1228800,null,1,m.a,[],{borders:[0,"borders"]},null),_._37(603979776,1,{tabs:1}),(n()(),_._39(0,["\n    "])),(n()(),_._13(16777216,null,0,1,null,o)),_._17(802816,null,0,f.j,[_._1,_.Y,_.y],{ngForOf:[0,"ngForOf"]},null),(n()(),_._39(0,["\n  "])),(n()(),_._39(null,["\n"]))],function(n,l){var t=l.component;n(l,3,0,"true"),n(l,7,0,t.tabs)},null)}function p(n){return _._41(0,[(n()(),_._19(0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),_._39(null,[" ",""])),(n()(),_._39(null,["\n"])),(n()(),_._13(16777216,null,null,1,null,r)),_._17(16384,null,0,f.k,[_._1,_.Y],{ngIf:[0,"ngIf"]},null),(n()(),_._39(null,["\n"]))],function(n,l){n(l,4,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function d(n){return _._41(0,[(n()(),_._19(0,null,null,1,"ng-component",[],null,null,null,p,I)),_._17(114688,null,0,v.a,[j.a,C.c],null,null)],function(n,l){n(l,1,0)},null)}t.d(l,"a",function(){return x});var _=t(2),b=t(186),h=t(452),y=t(448),f=t(21),g=t(453),m=t(450),v=t(449),j=t(27),C=t(28),T=[],I=_._16({encapsulation:2,styles:T,data:{}}),x=_._14("ng-component",v.a,d,{},{},[])},455:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=(t(449),function(){function n(){}return n}())},500:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){}return n}()},534:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){this.type="circular"}return Object.defineProperty(n.prototype,"indicatorClass",{get:function(){return"straight"===this.type?"vclBusy-busyIndStraight":"vclBusy-busyIndCircular"},enumerable:!0,configurable:!0}),n}()},543:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){this.busy=!1}return n}()},545:function(n,l,t){"use strict";function s(n){return u._41(2,[(n()(),u._19(0,null,null,9,"div",[["class","vclLayoutVertical vclLayoutCenterJustified"]],null,null,null,null,null)),(n()(),u._39(null,["\n  "])),(n()(),u._19(0,null,null,6,"div",[["class","vclBusyIndicator"],["role","status"]],null,null,null,null,null)),(n()(),u._39(null,["\n    "])),(n()(),u._19(0,null,null,1,"i",[],null,null,null,null,null)),u._17(278528,null,0,e.i,[u.y,u.z,u.n,u.O],{ngClass:[0,"ngClass"]},null),(n()(),u._39(null,["\n    "])),u._32(null,0),(n()(),u._39(null,["\n  "])),(n()(),u._39(null,["\n"])),(n()(),u._39(null,["\n"]))],function(n,l){n(l,5,0,l.component.indicatorClass)},null)}function a(n){return u._41(0,[(n()(),u._19(0,null,null,1,"vcl-busy-indicator",[],null,null,null,s,o)),u._17(49152,null,0,c.a,[],null,null)],null,null)}t.d(l,"a",function(){return o}),l.b=s;var u=t(2),e=t(21),c=t(534),i=[],o=u._16({encapsulation:2,styles:i,data:{}});u._14("vcl-busy-indicator",c.a,a,{type:"type"},{},["*"])},559:function(n,l,t){"use strict";function s(n){return c._41(0,[(n()(),c._19(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),c._39(null,["",""]))],null,function(n,l){n(l,1,0,l.component.busyLabel)})}function a(n){return c._41(0,[(n()(),c._19(0,null,null,11,"div",[["class","vclLoadingLayer"],["tabindex","-1"]],null,null,null,null,null)),(n()(),c._39(null,["\n  "])),(n()(),c._19(0,null,null,8,"div",[["class","vclLoadingLayerContent"]],null,null,null,null,null)),(n()(),c._39(null,["\n    "])),(n()(),c._19(0,null,null,5,"vcl-busy-indicator",[],null,null,null,i.b,i.a)),c._17(49152,null,0,o.a,[],{type:[0,"type"]},null),(n()(),c._39(0,["\n      "])),(n()(),c._13(16777216,null,0,1,null,s)),c._17(16384,null,0,r.k,[c._1,c.Y],{ngIf:[0,"ngIf"]},null),(n()(),c._39(0,["\n    "])),(n()(),c._39(null,["\n  "])),(n()(),c._39(null,["\n"]))],function(n,l){var t=l.component;n(l,5,0,t.busyIndicatorType),n(l,8,0,t.busyLabel)},null)}function u(n){return c._41(2,[c._32(null,0),(n()(),c._39(null,["\n"])),(n()(),c._13(16777216,null,null,1,null,a)),c._17(16384,null,0,r.k,[c._1,c.Y],{ngIf:[0,"ngIf"]},null),(n()(),c._39(null,["\n"]))],function(n,l){n(l,3,0,l.component.busy)},null)}function e(n){return c._41(0,[(n()(),c._19(0,null,null,1,"div",[["vclBusy",""]],[[2,"vclLoadingLayerContainer",null]],null,null,u,_)),c._17(49152,null,0,p.a,[],{busy:[0,"busy"]},null)],function(n,l){n(l,1,0,"")},function(n,l){n(l,0,0,c._33(l,1).busy)})}t.d(l,"a",function(){return _}),l.b=u;var c=t(2),i=t(545),o=t(534),r=t(21),p=t(543),d=[],_=c._16({encapsulation:2,styles:d,data:{}});c._14("[vclBusy]",p.a,e,{busy:"vclBusy",busyIndicatorType:"busyIndicatorType",busyLabel:"busyLabel"},{},["*"])},851:function(n,l){n.exports='<h1 id="vclbusyindicator">vclBusyIndicator</h1>\n<h2 id="vcl-busy-indicator">vcl-busy-indicator</h2>\n<p>An indicator to show that a lasting operation is currently in progress.</p>\n<h3 id="usage">Usage</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;straight&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="vclbusy-attributes-">vclBusy Attributes:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>type</code></td>\n<td>&quot;circular&quot; \\</td>\n<td>&quot;straight&quot;</td>\n<td>&quot;circular&quot;</td>\n<td>The indicator type</td>\n</tr>\n</tbody>\n</table>\n<h2 id="vclbusy">vclBusy</h2>\n<p>Covers an element with a layer showing the vcl-busy-indicator to indicate a busy state and prevent user interaction.</p>\n<h3 id="usage">Usage</h3>\n<pre class="hljs">  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">vclBusy</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">busyLabel</span>]=<span class="hljs-string">&quot;&apos;Loading...&apos;&quot;</span> [<span class="hljs-attr">busyIndicatorType</span>]=<span class="hljs-string">&quot;&quot;</span>&gt;</span>\n    This content will be covered by the layer\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="vclbusy-attributes-">vclBusy Attributes:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>vclBusy</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Shows the layer when <code>true</code></td>\n</tr>\n<tr>\n<td><code>busyIndicatorType</code></td>\n<td>&quot;circular&quot; \\</td>\n<td>&quot;straight&quot;</td>\n<td>&quot;circular&quot;</td>\n<td>The indicator type</td>\n</tr>\n<tr>\n<td><code>busyLabel</code></td>\n<td>string</td>\n<td></td>\n<td>Optional - The busy layers label</td>\n</tr>\n</tbody>\n</table>\n'},852:function(n,l){n.exports='\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Simple busy indicator:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Busy indicator with label and alternative icon:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-busy-indicator</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"straight"</span>&gt;</span>\n  Loading...\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-busy-indicator</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Busy container:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclContainer vclLayoutHorizontal"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"height:15em"</span> [<span class="hljs-attr">vclBusy</span>]=<span class="hljs-string">"isBusy"</span> <span class="hljs-attr">busyLabel</span>=<span class="hljs-string">"Loading..."</span> <span class="hljs-attr">busyIndicatorType</span>=<span class="hljs-string">"straight"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding:0.5em"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutFlex"</span>&gt;</span>\n    Busy container<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"makeBusy()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Make container busy for 3 secs"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},853:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BusyDemoComponent {\n  isBusy = <span class="hljs-literal">false</span>;\n  makeBusy() {\n    <span class="hljs-keyword">this</span>.isBusy = <span class="hljs-literal">true</span>;\n    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword">this</span>.isBusy = <span class="hljs-literal">false</span>, <span class="hljs-number">3000</span>);\n  }\n}\n'}});