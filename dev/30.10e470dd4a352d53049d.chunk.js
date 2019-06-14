(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{207:function(n,l,s){"use strict";s.d(l,"a",function(){return a});var t=s(1),a=function(n){function l(l){return n.call(this,l)||this}return Object(t.c)(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var s=n.target.currentValue;s&&(this.wormhole=this.connectWormhole(s,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(s(93).b)},415:function(n,l,s){"use strict";s.r(l);var t=s(0),a=function(){function n(){this.email="",this.password1="",this.password2=""}return n.prototype.ngOnInit=function(){this.update()},n.prototype.update=function(){return this.email.length<1?(this.type="error",void(this.label="Pleas enter a valid email.")):0==this.password1.length&&0==this.password2.length?(this.type="error",void(this.label="Pleas enter a password.")):this.password1!=this.password2?(this.type="error",void(this.label="Password is not matching.")):this.password1.length<8?(this.type="warning",void(this.label="We are recommending to use passwords with at least 8 symbols.")):(this.type="success",void(this.label="Everything is perfect!"))},n}();var e={demo:function(){return{label:"Input Control Group",tabs:{Demo:a,"README.md":{type:"md",content:s(575)},"demo.component.html":{type:"pre",content:s(576)},"demo.component.ts":{type:"pre",content:s(577)}}}}},u=function(){return function(){}}(),o=s(159),p=s(434),r=s(516),i=s(490),c=s(46),b=t.Cb({encapsulation:2,styles:[],data:{}});function h(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Vb(-1,null,["Input control group"])),(n()(),t.Eb(2,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),t.Vb(-1,null,["Follow the instructions in the "])),(n()(),t.Eb(4,0,null,null,1,"b",[["style","color: #ff0000;"]],null,null,null,null,null)),(n()(),t.Vb(-1,null,["RED"])),(n()(),t.Vb(-1,null,[" message and see how it changes."])),(n()(),t.Eb(7,0,null,null,26,"vcl-input-control-group",[],[[2,"vclInputInlineControlGroup",null],[2,"vclInputControlGroup",null]],null,null,r.b,r.a)),t.Db(8,49152,null,0,i.a,[],{type:[0,"type"],label:[1,"label"]},null),(n()(),t.Eb(9,0,null,0,24,"fieldset",[["class","vclFieldset"]],null,null,null,null,null)),(n()(),t.Eb(10,0,null,null,7,"label",[["class","vclFormControlLabel vclFormControlLabelWrapping"]],null,null,null,null,null)),(n()(),t.Vb(-1,null,["Email "])),(n()(),t.Eb(12,0,null,null,5,"input",[["type","email"],["vcl-input",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,s){var a=!0,e=n.component;"input"===l&&(a=!1!==t.Ob(n,13)._handleInput(s.target.value)&&a);"blur"===l&&(a=!1!==t.Ob(n,13).onTouched()&&a);"compositionstart"===l&&(a=!1!==t.Ob(n,13)._compositionStart()&&a);"compositionend"===l&&(a=!1!==t.Ob(n,13)._compositionEnd(s.target.value)&&a);"ngModelChange"===l&&(a=!1!==(e.email=s)&&a);"keyup"===l&&(a=!1!==e.update()&&a);return a},null,null)),t.Db(13,16384,null,0,c.c,[t.Q,t.o,[2,c.a]],null,null),t.Sb(1024,null,c.l,function(n){return[n]},[c.c]),t.Db(15,671744,null,0,c.q,[[8,null],[8,null],[8,null],[6,c.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Sb(2048,null,c.m,null,[c.q]),t.Db(17,16384,null,0,c.n,[[4,c.m]],null,null),(n()(),t.Eb(18,0,null,null,7,"label",[["class","vclFormControlLabel vclFormControlLabelWrapping"]],null,null,null,null,null)),(n()(),t.Vb(-1,null,["Password "])),(n()(),t.Eb(20,0,null,null,5,"input",[["type","password"],["vcl-input",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,s){var a=!0,e=n.component;"input"===l&&(a=!1!==t.Ob(n,21)._handleInput(s.target.value)&&a);"blur"===l&&(a=!1!==t.Ob(n,21).onTouched()&&a);"compositionstart"===l&&(a=!1!==t.Ob(n,21)._compositionStart()&&a);"compositionend"===l&&(a=!1!==t.Ob(n,21)._compositionEnd(s.target.value)&&a);"ngModelChange"===l&&(a=!1!==(e.password1=s)&&a);"keyup"===l&&(a=!1!==e.update()&&a);return a},null,null)),t.Db(21,16384,null,0,c.c,[t.Q,t.o,[2,c.a]],null,null),t.Sb(1024,null,c.l,function(n){return[n]},[c.c]),t.Db(23,671744,null,0,c.q,[[8,null],[8,null],[8,null],[6,c.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Sb(2048,null,c.m,null,[c.q]),t.Db(25,16384,null,0,c.n,[[4,c.m]],null,null),(n()(),t.Eb(26,0,null,null,7,"label",[["class","vclFormControlLabel vclFormControlLabelWrapping"]],null,null,null,null,null)),(n()(),t.Vb(-1,null,["Repeat password "])),(n()(),t.Eb(28,0,null,null,5,"input",[["type","password"],["vcl-input",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,s){var a=!0,e=n.component;"input"===l&&(a=!1!==t.Ob(n,29)._handleInput(s.target.value)&&a);"blur"===l&&(a=!1!==t.Ob(n,29).onTouched()&&a);"compositionstart"===l&&(a=!1!==t.Ob(n,29)._compositionStart()&&a);"compositionend"===l&&(a=!1!==t.Ob(n,29)._compositionEnd(s.target.value)&&a);"ngModelChange"===l&&(a=!1!==(e.password2=s)&&a);"keyup"===l&&(a=!1!==e.update()&&a);return a},null,null)),t.Db(29,16384,null,0,c.c,[t.Q,t.o,[2,c.a]],null,null),t.Sb(1024,null,c.l,function(n){return[n]},[c.c]),t.Db(31,671744,null,0,c.q,[[8,null],[8,null],[8,null],[6,c.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Sb(2048,null,c.m,null,[c.q]),t.Db(33,16384,null,0,c.n,[[4,c.m]],null,null)],function(n,l){var s=l.component;n(l,8,0,s.type,s.label),n(l,15,0,s.email),n(l,23,0,s.password1),n(l,31,0,s.password2)},function(n,l){n(l,7,0,t.Ob(l,8).inline,t.Ob(l,8).notInline),n(l,12,0,t.Ob(l,17).ngClassUntouched,t.Ob(l,17).ngClassTouched,t.Ob(l,17).ngClassPristine,t.Ob(l,17).ngClassDirty,t.Ob(l,17).ngClassValid,t.Ob(l,17).ngClassInvalid,t.Ob(l,17).ngClassPending),n(l,20,0,t.Ob(l,25).ngClassUntouched,t.Ob(l,25).ngClassTouched,t.Ob(l,25).ngClassPristine,t.Ob(l,25).ngClassDirty,t.Ob(l,25).ngClassValid,t.Ob(l,25).ngClassInvalid,t.Ob(l,25).ngClassPending),n(l,28,0,t.Ob(l,33).ngClassUntouched,t.Ob(l,33).ngClassTouched,t.Ob(l,33).ngClassPristine,t.Ob(l,33).ngClassDirty,t.Ob(l,33).ngClassValid,t.Ob(l,33).ngClassInvalid,t.Ob(l,33).ngClassPending)})}function d(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,1,"ng-component",[],null,null,null,h,b)),t.Db(1,114688,null,0,a,[],null,null)],function(n,l){n(l,1,0)},null)}var g=t.Ab("ng-component",a,d,{},{},[]),m=s(3),f=s(83),j=s(436),v=s(435),y=s(464),w=s(4),C=s(431);s.d(l,"InputControlGroupDemoModuleNgFactory",function(){return k});var k=t.Bb(u,[],function(n){return t.Lb([t.Mb(512,t.l,t.qb,[[8,[o.a,p.a,g]],[3,t.l],t.F]),t.Mb(4608,c.w,c.w,[]),t.Mb(4608,m.n,m.m,[t.B,[2,m.y]]),t.Mb(1073742336,c.t,c.t,[]),t.Mb(1073742336,c.k,c.k,[]),t.Mb(1073742336,m.c,m.c,[]),t.Mb(1073742336,f.a,f.a,[]),t.Mb(1073742336,j.a,j.a,[]),t.Mb(1073742336,v.a,v.a,[]),t.Mb(1073742336,y.a,y.a,[]),t.Mb(1073742336,w.m,w.m,[[2,w.s],[2,w.l]]),t.Mb(1073742336,u,u,[]),t.Mb(1024,w.j,function(){return[[{path:"",component:C.a,data:e}]]},[])])})},431:function(n,l,s){"use strict";s.d(l,"a",function(){return t});var t=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(s){var t,a;return"object"==typeof l.tabs[s]&&l.tabs[s]?a="pre"===(t=l.tabs[s].type)||"html"===t||"md"===t?n.sanitizer.bypassSecurityTrustHtml(l.tabs[s].content):l.tabs[s].content:"function"==typeof l.tabs[s]&&(t="component",a=l.tabs[s]),{name:s,content:a,type:t}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},432:function(n,l,s){"use strict";s.d(l,"b",function(){return t}),s.d(l,"a",function(){return a});var t=function(){return function(){}}(),a=function(){return function(){this.disabled=!1,this.tabClass=""}}()},433:function(n,l,s){"use strict";s.d(l,"a",function(){return u});var t=s(93),a=s(0),e=s(432),u=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new a.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new t.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,s,t=this.tabs.toArray();n instanceof e.a?(l=t.indexOf(n),s=n):"number"==typeof n&&t[n]?s=t[l=n]:(l=-1,s=null),l>=0&&s instanceof e.a&&!s.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(s.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},434:function(n,l,s){"use strict";s.d(l,"a",function(){return O});var t=s(0),a=s(207),e=s(437),u=s(432),o=s(3),p=s(438),r=s(433),i=s(431),c=s(4),b=s(6),h=t.Cb({encapsulation:2,styles:[],data:{}});function d(n){return t.Xb(0,[(n()(),t.Vb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function g(n){return t.Xb(0,[(n()(),t.Eb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),t.Db(1,671744,null,0,a.a,[t.db],{target:[0,"target"]},null),(n()(),t.vb(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function m(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.Eb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),t.Vb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function f(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function j(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function v(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,14,"vcl-tab",[],null,null,null,e.b,e.a)),t.Db(1,49152,[[1,4]],1,u.a,[],null,null),t.Tb(335544320,2,{label:0}),(n()(),t.vb(0,[[2,2]],0,1,null,d)),t.Db(4,16384,null,0,u.b,[],null,null),(n()(),t.vb(16777216,null,0,1,null,g)),t.Db(6,16384,null,0,o.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t.vb(16777216,null,0,1,null,m)),t.Db(8,16384,null,0,o.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t.vb(16777216,null,0,1,null,f)),t.Db(10,16384,null,0,o.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t.vb(16777216,null,0,1,null,j)),t.Db(12,16384,null,0,o.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null),(n()(),t.vb(16777216,null,0,1,null,v)),t.Db(14,16384,null,0,o.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function w(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),t.Eb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,p.b,p.a)),t.Db(2,1228800,null,1,r.a,[],{borders:[0,"borders"]},null),t.Tb(603979776,1,{tabs:1}),(n()(),t.vb(16777216,null,0,1,null,y)),t.Db(5,278528,null,0,o.k,[t.db,t.Z,t.z],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var s=l.component;n(l,2,0,"true"),n(l,5,0,s.tabs)},null)}function C(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),t.Vb(1,null,[" ",""])),(n()(),t.vb(16777216,null,null,1,null,w)),t.Db(3,16384,null,0,o.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function k(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,1,"ng-component",[],null,null,null,C,h)),t.Db(1,114688,null,0,i.a,[c.a,b.c],null,null)],function(n,l){n(l,1,0)},null)}var O=t.Ab("ng-component",i.a,k,{},{},[])},435:function(n,l,s){"use strict";s.d(l,"a",function(){return t});s(431);var t=function(){return function(){}}()},436:function(n,l,s){"use strict";s.d(l,"a",function(){return t});var t=function(){return function(){}}()},437:function(n,l,s){"use strict";s.d(l,"a",function(){return e}),s.d(l,"b",function(){return o});var t=s(0),a=s(432),e=t.Cb({encapsulation:2,styles:[],data:{}});function u(n){return t.Xb(0,[t.Nb(null,0),(n()(),t.vb(0,null,null,0))],null,null)}function o(n){return t.Xb(0,[t.Tb(402653184,1,{content:0}),(n()(),t.vb(0,[[1,2]],null,0,null,u))],null,null)}function p(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,2,"vcl-tab",[],null,null,null,o,e)),t.Db(1,49152,null,1,a.a,[],null,null),t.Tb(335544320,1,{label:0})],null,null)}a.a},438:function(n,l,s){"use strict";s.d(l,"a",function(){return o}),s.d(l,"b",function(){return r});var t=s(0),a=s(207),e=s(3),u=s(433),o=t.Cb({encapsulation:2,styles:[],data:{}});function p(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,l,s){var t=!0,a=n.component;"click"===l&&(t=!1!==a.onTabClick(n.context.$implicit)&&t);return t},null,null)),(n()(),t.Eb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),t.Eb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),t.Db(3,671744,null,0,a.a,[t.db],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var s=l.component;n(l,0,0,t.Gb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,s.selectedTabIndex===l.context.index,s.selectedTabIndex===l.context.index)})}function r(n){return t.Xb(0,[t.Tb(402653184,1,{tabContent:0}),(n()(),t.Eb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),t.Eb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),t.vb(16777216,null,null,1,null,p)),t.Db(4,278528,null,0,e.k,[t.db,t.Z,t.z],{ngForOf:[0,"ngForOf"]},null),(n()(),t.Eb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),t.Eb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),t.Eb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),t.Eb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),t.Nb(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var s=l.component;n(l,1,0,t.Gb(1,"vclTabbable ",s.tabbableClass,""),"left"===s.layout,"right"===s.layout),n(l,2,0,t.Gb(1,"vclTabs ",s.tabsClass,""),!!s.borders),n(l,5,0,!0===s.hideContent?"none":null,t.Gb(1,"vclTabContent ",s.tabContentClass,""),!s.borders)})}function i(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,2,"vcl-tab-nav",[],null,null,null,r,o)),t.Db(1,1228800,null,1,u.a,[],null,null),t.Tb(603979776,1,{tabs:1})],null,null)}u.a},464:function(n,l,s){"use strict";s.d(l,"a",function(){return t});var t=function(){return function(){}}()},490:function(n,l,s){"use strict";s.d(l,"a",function(){return t});var t=function(){function n(){this.inline=!1}return Object.defineProperty(n.prototype,"notInline",{get:function(){return!this.inline},enumerable:!0,configurable:!0}),n}()},516:function(n,l,s){"use strict";s.d(l,"a",function(){return u}),s.d(l,"b",function(){return p});var t=s(0),a=s(3),e=s(490),u=t.Cb({encapsulation:2,styles:[],data:{}});function o(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,1,"div",[["class","vclFormControlHint"]],[[2,"vclError",null],[2,"vclWarning",null],[2,"vclSuccess",null]],null,null,null,null)),(n()(),t.Vb(1,null,[" ","\n"]))],null,function(n,l){var s=l.component;n(l,0,0,"error"==s.type,"warning"==s.type,"success"==s.type),n(l,1,0,s.label)})}function p(n){return t.Xb(2,[t.Nb(null,0),(n()(),t.vb(16777216,null,null,1,null,o)),t.Db(2,16384,null,0,a.l,[t.db,t.Z],{ngIf:[0,"ngIf"]},null)],function(n,l){var s=l.component;n(l,2,0,s.type&&s.label&&""!==s.label)},null)}function r(n){return t.Xb(0,[(n()(),t.Eb(0,0,null,null,1,"vcl-input-control-group",[],[[2,"vclInputInlineControlGroup",null],[2,"vclInputControlGroup",null]],null,null,p,u)),t.Db(1,49152,null,0,e.a,[],null,null)],null,function(n,l){n(l,0,0,t.Ob(l,1).inline,t.Ob(l,1).notInline)})}e.a},575:function(n,l){n.exports='<h1 id="vcl-input-control-group">vcl-input-control-group</h1>\n<p>Input-Control-Group to handle the error-state of any object.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLInputControlGroupModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLInputControlGroupModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-control-group</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;label&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-control-group</span>&gt;</span></pre>\n<h5 id="styling-of-the-state-message-can-be-done-with-these-selectors-">Styling of the state message can be done with these selectors:</h5>\n<ul>\n<li>.vclFormControlHint.vclError</li>\n<li>.vclFormControlHint.vclWarning</li>\n<li>.vclFormControlHint.vclSuccess</li>\n</ul>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>type</code></td>\n<td>&apos;error&apos; | &apos;warning&apos; | &apos;success&apos; | undefined</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>inline</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>&#xA0;</td>\n</tr>\n<tr>\n<td><code>notInline</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>readonly</td>\n</tr>\n</tbody></table>\n'},576:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Input control group<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Follow the instructions in the <span class="hljs-tag">&lt;<span class="hljs-name">b</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #ff0000;"</span>&gt;</span>RED<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span> message and see how it changes.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-control-group</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">"type"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"label"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">fieldset</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclFieldset"</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclFormControlLabel vclFormControlLabelWrapping"</span>&gt;</span>Email\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"email"</span> (<span class="hljs-attr">keyup</span>)=<span class="hljs-string">"update()"</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclFormControlLabel vclFormControlLabelWrapping"</span>&gt;</span>Password\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"password1"</span> (<span class="hljs-attr">keyup</span>)=<span class="hljs-string">"update()"</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclFormControlLabel vclFormControlLabelWrapping"</span>&gt;</span>Repeat password\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"password2"</span> (<span class="hljs-attr">keyup</span>)=<span class="hljs-string">"update()"</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;/<span class="hljs-name">fieldset</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-control-group</span>&gt;</span>\n'},577:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> InputControlGroupDemoComponent <span class="hljs-keyword">implements</span> OnInit {\n\n  <span class="hljs-keyword">public</span> <span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span> | <span class="hljs-literal">undefined</span>;\n  <span class="hljs-keyword">public</span> label: <span class="hljs-built_in">string</span>;\n\n  <span class="hljs-keyword">public</span> email: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'\'</span>;\n  <span class="hljs-keyword">public</span> password1: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'\'</span>;\n  <span class="hljs-keyword">public</span> password2: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'\'</span>;\n\n  ngOnInit() {\n    <span class="hljs-keyword">this</span>.update();\n  }\n\n  update() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.email.length &lt; <span class="hljs-number">1</span>) {\n      <span class="hljs-keyword">this</span>.type = <span class="hljs-string">\'error\'</span>;\n      <span class="hljs-keyword">this</span>.label = <span class="hljs-string">\'Pleas enter a valid email.\'</span>;\n      <span class="hljs-keyword">return</span>;\n    }\n\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.password1.length == <span class="hljs-number">0</span> &amp;&amp; <span class="hljs-keyword">this</span>.password2.length == <span class="hljs-number">0</span> ) {\n      <span class="hljs-keyword">this</span>.type = <span class="hljs-string">\'error\'</span>;\n      <span class="hljs-keyword">this</span>.label = <span class="hljs-string">\'Pleas enter a password.\'</span>;\n      <span class="hljs-keyword">return</span>;\n    }\n\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.password1 != <span class="hljs-keyword">this</span>.password2) {\n      <span class="hljs-keyword">this</span>.type = <span class="hljs-string">\'error\'</span>;\n      <span class="hljs-keyword">this</span>.label = <span class="hljs-string">\'Password is not matching.\'</span>;\n      <span class="hljs-keyword">return</span>;\n    }\n\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.password1.length &lt; <span class="hljs-number">8</span>) {\n      <span class="hljs-keyword">this</span>.type = <span class="hljs-string">\'warning\'</span>;\n      <span class="hljs-keyword">this</span>.label = <span class="hljs-string">\'We are recommending to use passwords with at least 8 symbols.\'</span>;\n      <span class="hljs-keyword">return</span>;\n    }\n\n    <span class="hljs-keyword">this</span>.type = <span class="hljs-string">\'success\'</span>;\n    <span class="hljs-keyword">this</span>.label = <span class="hljs-string">\'Everything is perfect!\'</span>;\n  }\n\n}\n'}}]);