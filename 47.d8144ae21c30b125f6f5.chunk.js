(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{190:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var s=t(5),e=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function s(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}(),a=function(n){function l(l){return n.call(this,l)||this}return e(l,n),Object.defineProperty(l.prototype,"isConnected",{get:function(){return!!this.wormhole&&this.wormhole.isConnected},enumerable:!0,configurable:!0}),l.prototype.ngOnChanges=function(n){var l="attrs"in n&&n.attrs.currentValue||void 0;if("target"in n){this.clearWormholes();var t=n.target.currentValue;t&&(this.wormhole=this.connectWormhole(t,l))}else l&&this.wormhole&&this.wormhole.setAttributes(l)},l.prototype.ngOnDestroy=function(){this.wormhole&&this.wormhole.disconnect()},l}(s.b)},202:function(n,l,t){"use strict";t.d(l,"a",function(){return r});var s=t(6),e=t(432),a=t(436);function r(n,l){return void 0===n&&(n=0),void 0===l&&(l=e.a),(!Object(a.a)(n)||n<0)&&(n=0),l&&"function"==typeof l.schedule||(l=e.a),new s.a(function(t){return t.add(l.schedule(u,n,{subscriber:t,counter:0,period:n})),t})}function u(n){var l=n.subscriber,t=n.counter,s=n.period;l.next(t),this.schedule({subscriber:l,counter:t+1,period:s},s)}},374:function(n,l,t){"use strict";t.r(l);var s=t(0),e=t(6);function a(n){var l=n.start,t=n.index,s=n.count,e=n.subscriber;t>=s?e.complete():(e.next(l),e.closed||(n.index=t+1,n.start=l+1,this.schedule(n)))}var r=t(202),u=t(1),o=t(41),i=t(62),c=t(10),p=t(48),b=t(49),h=t(70);var d=function(){function n(n){this.resultSelector=n}return n.prototype.call=function(n,l){return l.subscribe(new f(n,this.resultSelector))},n}(),f=function(n){function l(l,t,s){void 0===s&&(s=Object.create(null));var e=n.call(this,l)||this;return e.iterators=[],e.active=0,e.resultSelector="function"==typeof t?t:null,e.values=s,e}return u.c(l,n),l.prototype._next=function(n){var l=this.iterators;Object(i.a)(n)?l.push(new g(n)):"function"==typeof n[h.a]?l.push(new m(n[h.a]())):l.push(new v(this.destination,this,n))},l.prototype._complete=function(){var n=this.iterators,l=n.length;if(0!==l){this.active=l;for(var t=0;t<l;t++){var s=n[t];s.stillUnsubscribed?this.add(s.subscribe(s,t)):this.active--}}else this.destination.complete()},l.prototype.notifyInactive=function(){this.active--,0===this.active&&this.destination.complete()},l.prototype.checkIterators=function(){for(var n=this.iterators,l=n.length,t=this.destination,s=0;s<l;s++){if("function"==typeof(r=n[s]).hasValue&&!r.hasValue())return}var e=!1,a=[];for(s=0;s<l;s++){var r,u=(r=n[s]).next();if(r.hasCompleted()&&(e=!0),u.done)return void t.complete();a.push(u.value)}this.resultSelector?this._tryresultSelector(a):t.next(a),e&&t.complete()},l.prototype._tryresultSelector=function(n){var l;try{l=this.resultSelector.apply(this,n)}catch(n){return void this.destination.error(n)}this.destination.next(l)},l}(c.a),m=function(){function n(n){this.iterator=n,this.nextResult=n.next()}return n.prototype.hasValue=function(){return!0},n.prototype.next=function(){var n=this.nextResult;return this.nextResult=this.iterator.next(),n},n.prototype.hasCompleted=function(){var n=this.nextResult;return n&&n.done},n}(),g=function(){function n(n){this.array=n,this.index=0,this.length=0,this.length=n.length}return n.prototype[h.a]=function(){return this},n.prototype.next=function(n){var l=this.index++,t=this.array;return l<this.length?{value:t[l],done:!1}:{value:null,done:!0}},n.prototype.hasValue=function(){return this.array.length>this.index},n.prototype.hasCompleted=function(){return this.array.length===this.index},n}(),v=function(n){function l(l,t,s){var e=n.call(this,l)||this;return e.parent=t,e.observable=s,e.stillUnsubscribed=!0,e.buffer=[],e.isComplete=!1,e}return u.c(l,n),l.prototype[h.a]=function(){return this},l.prototype.next=function(){var n=this.buffer;return 0===n.length&&this.isComplete?{value:null,done:!0}:{value:n.shift(),done:!1}},l.prototype.hasValue=function(){return this.buffer.length>0},l.prototype.hasCompleted=function(){return 0===this.buffer.length&&this.isComplete},l.prototype.notifyComplete=function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()},l.prototype.notifyNext=function(n,l,t,s,e){this.buffer.push(l),this.parent.checkIterators()},l.prototype.subscribe=function(n,l){return Object(b.a)(this,this.observable,this,l)},l}(p.a);function y(){for(var n=[],l=0;l<arguments.length;l++)n[l]=arguments[l];return function(l){return l.lift.call(function(){for(var n=[],l=0;l<arguments.length;l++)n[l]=arguments[l];var t=n[n.length-1];return"function"==typeof t&&n.pop(),Object(o.a)(n,void 0).lift(new d(t))}.apply(void 0,[l].concat(n)))}}var j=function(){return function(){this.value$=function(n,l,t){return void 0===n&&(n=0),void 0===l&&(l=0),new e.a(function(s){var e=0,r=n;if(t)return t.schedule(a,0,{index:e,count:l,start:n,subscriber:s});for(;;){if(e++>=l){s.complete();break}if(s.next(r++),s.closed)break}})}(0,1e3).pipe(y(Object(r.a)(50),function(n){return n}))}}();var x={demo:function(){return{label:"Progress-Bar",tabs:{Demo:j,"README.md":{type:"md",content:t(640)},"demo.component.html":{type:"pre",content:t(641)},"demo.component.ts":{type:"pre",content:t(642)}}}}},C=function(){return function(){}}(),V=t(144),w=t(415),I=t(3),T=function(){function n(){this.minValue=0,this.maxValue=100,this.indeterminate=!1,this.speed=1}return Object.defineProperty(n.prototype,"showIndeterminate",{get:function(){return this.indeterminate&&!this.validateValue(this.value)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showValue",{get:function(){return!this.indeterminate||this.validateValue(this.value)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showSecondaryValue",{get:function(){return this.validateValue(this.secondaryValue)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"transformValue",{get:function(){return"scaleX("+(this.validateValue(this.value)?this.scaleValue(this.value):0)+")"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"transformSecondaryValue",{get:function(){return"scaleX("+(this.validateValue(this.secondaryValue)?this.scaleValue(this.secondaryValue):0)+")"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"animationDurationValue",{get:function(){return(this.isNumber(this.speed)?this.speed:1)+"s"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"range",{get:function(){return this.maxValue-this.minValue},enumerable:!0,configurable:!0}),n.prototype.scaleValue=function(n){return(n-this.minValue)/this.range},n.prototype.validateValue=function(n){return this.isNumber(n)&&n>=this.minValue&&n<=this.maxValue},n.prototype.isNumber=function(n){return"number"==typeof n&&NaN!==n},n}(),O=s.Ab({encapsulation:2,styles:[],data:{}});function B(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,0,"div",[["class","vclProgress vclPrimary vclLayoutFit"]],[[4,"transform",null]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.transformValue)})}function P(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,0,"div",[["class","vclProgress vclSecondary vclLayoutFit"]],[[4,"transform",null]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.transformSecondaryValue)})}function k(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,0,"div",[["class","vclProgress vclPrimary vclLayoutFit"]],[[4,"animation-duration",null]],null,null,null,null))],null,function(n,l){n(l,0,0,l.component.animationDurationValue)})}function $(n){return s.Vb(2,[(n()(),s.Cb(0,0,null,null,6,"div",[["class","vclProgressBar"]],[[1,"aria-valuenow",0],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuetext",0],[2,"vclIndeterminate",null]],null,null,null,null)),(n()(),s.tb(16777216,null,null,1,null,B)),s.Bb(2,16384,null,0,I.l,[s.bb,s.Y],{ngIf:[0,"ngIf"]},null),(n()(),s.tb(16777216,null,null,1,null,P)),s.Bb(4,16384,null,0,I.l,[s.bb,s.Y],{ngIf:[0,"ngIf"]},null),(n()(),s.tb(16777216,null,null,1,null,k)),s.Bb(6,16384,null,0,I.l,[s.bb,s.Y],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.showValue),n(l,4,0,t.showSecondaryValue),n(l,6,0,t.showIndeterminate)},function(n,l){var t=l.component;n(l,0,0,t.value,t.minValue,t.maxValue,t.label,t.showIndeterminate)})}var S=s.Ab({encapsulation:2,styles:[],data:{}});function A(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,$,O)),s.Bb(1,49152,null,0,T,[],{value:[0,"value"]},null),(n()(),s.Cb(2,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Cb(3,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,$,O)),s.Bb(4,49152,null,0,T,[],{value:[0,"value"],minValue:[1,"minValue"],maxValue:[2,"maxValue"]},null),(n()(),s.Cb(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Cb(6,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,$,O)),s.Bb(7,49152,null,0,T,[],{value:[0,"value"],minValue:[1,"minValue"],maxValue:[2,"maxValue"]},null),(n()(),s.Cb(8,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Cb(9,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,$,O)),s.Bb(10,49152,null,0,T,[],{value:[0,"value"],secondaryValue:[1,"secondaryValue"]},null),(n()(),s.Cb(11,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Cb(12,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,$,O)),s.Bb(13,49152,null,0,T,[],{indeterminate:[0,"indeterminate"]},null),(n()(),s.Cb(14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Cb(15,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,$,O)),s.Bb(16,49152,null,0,T,[],{indeterminate:[0,"indeterminate"],speed:[1,"speed"]},null),(n()(),s.Cb(17,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Cb(18,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,$,O)),s.Bb(19,49152,null,0,T,[],{value:[0,"value"],indeterminate:[1,"indeterminate"]},null),(n()(),s.Cb(20,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Cb(21,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,$,O)),s.Bb(22,49152,null,0,T,[],{value:[0,"value"],indeterminate:[1,"indeterminate"]},null),(n()(),s.Cb(23,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.Cb(24,0,null,null,2,"vcl-progress-bar",[],[[1,"role",0]],null,null,$,O)),s.Bb(25,49152,null,0,T,[],{value:[0,"value"],maxValue:[1,"maxValue"]},null),s.Ob(131072,I.b,[s.i])],function(n,l){var t=l.component;n(l,1,0,80);n(l,4,0,15,10,20);n(l,7,0,30,10,20);n(l,10,0,40,60);n(l,13,0,!0);n(l,16,0,!0,5);n(l,19,0,40,!0);n(l,22,0,110,!0);n(l,25,0,s.Ub(l,25,0,s.Mb(l,26).transform(t.value$)),1e3)},function(n,l){n(l,0,0,"progressbar");n(l,3,0,"progressbar");n(l,6,0,"progressbar");n(l,9,0,"progressbar");n(l,12,0,"progressbar");n(l,15,0,"progressbar");n(l,18,0,"progressbar");n(l,21,0,"progressbar");n(l,24,0,"progressbar")})}var N=s.yb("ng-component",j,function(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,1,"ng-component",[],null,null,null,A,S)),s.Bb(1,49152,null,0,j,[],null,null)],null,null)},{},{},[]),R=t(82),_=t(417),D=t(416),H=function(){return function(){}}(),Y=t(4),F=t(412);t.d(l,"ProgressBarDemoModuleNgFactory",function(){return K});var K=s.zb(C,[],function(n){return s.Jb([s.Kb(512,s.l,s.ob,[[8,[V.a,w.a,N]],[3,s.l],s.F]),s.Kb(4608,I.n,I.m,[s.B,[2,I.y]]),s.Kb(1073742336,I.c,I.c,[]),s.Kb(1073742336,R.a,R.a,[]),s.Kb(1073742336,_.a,_.a,[]),s.Kb(1073742336,D.a,D.a,[]),s.Kb(1073742336,H,H,[]),s.Kb(1073742336,Y.m,Y.m,[[2,Y.s],[2,Y.l]]),s.Kb(1073742336,C,C,[]),s.Kb(1024,Y.j,function(){return[[{path:"",component:F.a,data:x}]]},[])])})},412:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var s,e;return"object"==typeof l.tabs[t]&&l.tabs[t]?e="pre"===(s=l.tabs[t].type)||"html"===s||"md"===s?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content:"function"==typeof l.tabs[t]&&(s="component",e=l.tabs[t]),{name:t,content:e,type:s}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n}()},413:function(n,l,t){"use strict";t.d(l,"b",function(){return s}),t.d(l,"a",function(){return e});var s=function(){return function(){}}(),e=function(){return function(){this.disabled=!1,this.tabClass=""}}()},414:function(n,l,t){"use strict";t.d(l,"a",function(){return r});var s=t(5),e=t(0),a=t(413),r=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.hideContent=!1,this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new e.q}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){n&&(this.wormholeHost=new s.b(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){if(this.tabs){var l,t,s=this.tabs.toArray();n instanceof a.a?(l=s.indexOf(n),t=n):"number"==typeof n&&s[n]?t=s[l=n]:(l=-1,t=null),l>=0&&t instanceof a.a&&!t.disabled&&(this.wormholeHost&&(this.wormholeHost.clearWormholes(),this.wormholeHost.connectWormhole(t.content)),this.selectedTabIndex=l)}},n.prototype.onTabClick=function(n){this.selectTab(n),this.selectedTabIndexChange$.emit(this.selectedTabIndex)},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost&&this.wormholeHost.clearWormholes()},n}()},415:function(n,l,t){"use strict";t.d(l,"a",function(){return V});var s=t(0),e=t(190),a=t(418),r=t(413),u=t(3),o=t(419),i=t(414),c=t(412),p=t(4),b=t(8),h=s.Ab({encapsulation:2,styles:[],data:{}});function d(n){return s.Vb(0,[(n()(),s.Tb(0,null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function f(n){return s.Vb(0,[(n()(),s.Cb(0,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Bb(1,671744,null,0,e.a,[s.bb],{target:[0,"target"]},null),(n()(),s.tb(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function m(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),s.Cb(1,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),s.Tb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function g(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function v(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function y(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function j(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,14,"vcl-tab",[],null,null,null,a.b,a.a)),s.Bb(1,49152,[[1,4]],1,r.a,[],null,null),s.Rb(335544320,2,{label:0}),(n()(),s.tb(0,[[2,2]],0,1,null,d)),s.Bb(4,16384,null,0,r.b,[],null,null),(n()(),s.tb(16777216,null,0,1,null,f)),s.Bb(6,16384,null,0,u.l,[s.bb,s.Y],{ngIf:[0,"ngIf"]},null),(n()(),s.tb(16777216,null,0,1,null,m)),s.Bb(8,16384,null,0,u.l,[s.bb,s.Y],{ngIf:[0,"ngIf"]},null),(n()(),s.tb(16777216,null,0,1,null,g)),s.Bb(10,16384,null,0,u.l,[s.bb,s.Y],{ngIf:[0,"ngIf"]},null),(n()(),s.tb(16777216,null,0,1,null,v)),s.Bb(12,16384,null,0,u.l,[s.bb,s.Y],{ngIf:[0,"ngIf"]},null),(n()(),s.tb(16777216,null,0,1,null,y)),s.Bb(14,16384,null,0,u.l,[s.bb,s.Y],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,6,0,"component"===l.context.$implicit.type),n(l,8,0,"text"===l.context.$implicit.type),n(l,10,0,"html"===l.context.$implicit.type),n(l,12,0,"md"===l.context.$implicit.type),n(l,14,0,"pre"===l.context.$implicit.type)},null)}function x(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),s.Cb(1,0,null,null,4,"vcl-tab-nav",[["borders","true"]],null,null,null,o.b,o.a)),s.Bb(2,1228800,null,1,i.a,[],{borders:[0,"borders"]},null),s.Rb(603979776,1,{tabs:1}),(n()(),s.tb(16777216,null,0,1,null,j)),s.Bb(5,278528,null,0,u.k,[s.bb,s.Y,s.z],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,"true"),n(l,5,0,t.tabs)},null)}function C(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),s.Tb(1,null,[" ",""])),(n()(),s.tb(16777216,null,null,1,null,x)),s.Bb(3,16384,null,0,u.l,[s.bb,s.Y],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}var V=s.yb("ng-component",c.a,function(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,1,"ng-component",[],null,null,null,C,h)),s.Bb(1,114688,null,0,c.a,[p.a,b.c],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},416:function(n,l,t){"use strict";t.d(l,"a",function(){return s});t(412);var s=function(){return function(){}}()},417:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){return function(){}}()},418:function(n,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return u});var s=t(0),e=t(413),a=s.Ab({encapsulation:2,styles:[],data:{}});function r(n){return s.Vb(0,[s.Lb(null,0),(n()(),s.tb(0,null,null,0))],null,null)}function u(n){return s.Vb(0,[s.Rb(402653184,1,{content:0}),(n()(),s.tb(0,[[1,2]],null,0,null,r))],null,null)}e.a},419:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return i});var s=t(0),e=t(190),a=t(3),r=t(414),u=s.Ab({encapsulation:2,styles:[],data:{}});function o(n){return s.Vb(0,[(n()(),s.Cb(0,0,null,null,3,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"click"]],function(n,l,t){var s=!0,e=n.component;"click"===l&&(s=!1!==e.onTabClick(n.context.$implicit)&&s);return s},null,null)),(n()(),s.Cb(1,0,null,null,2,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),s.Cb(2,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s.Bb(3,671744,null,0,e.a,[s.bb],{target:[0,"target"]},null)],function(n,l){n(l,3,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,s.Eb(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function i(n){return s.Vb(0,[s.Rb(402653184,1,{tabContent:0}),(n()(),s.Cb(1,0,null,null,8,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),s.Cb(2,0,null,null,2,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),s.tb(16777216,null,null,1,null,o)),s.Bb(4,278528,null,0,a.k,[s.bb,s.Y,s.z],{ngForOf:[0,"ngForOf"]},null),(n()(),s.Cb(5,0,null,null,4,"div",[],[[4,"display",null],[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),s.Cb(6,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),s.Cb(7,16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),s.Cb(8,0,null,null,1,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),s.Lb(null,0)],function(n,l){n(l,4,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,s.Eb(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,2,0,s.Eb(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,5,0,!0===t.hideContent?"none":null,s.Eb(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}r.a},432:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var s=t(149),e=new(t(148).a)(s.a)},436:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var s=t(62);function e(n){return!Object(s.a)(n)&&n-parseFloat(n)+1>=0}},640:function(n,l){n.exports='<h1 id="vcl-progress-bar">vcl-progress-bar</h1>\n<p>The progress is reflected as horizontal bar which is shown within a container.<br>There are two overlaying bars to represent a primary and an optional secondary progress.<br>In indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;0&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>value</code></td>\n<td>number</td>\n<td></td>\n<td>the current primary progress value</td>\n</tr>\n<tr>\n<td><code>secondaryValue</code></td>\n<td>number</td>\n<td></td>\n<td>the current secondary progress value. hidden unless this value is specified</td>\n</tr>\n<tr>\n<td><code>minValue</code></td>\n<td>number</td>\n<td></td>\n<td>the minimum value of the progress</td>\n</tr>\n<tr>\n<td><code>maxValue</code></td>\n<td>number</td>\n<td></td>\n<td>the maximum value of the progress</td>\n</tr>\n<tr>\n<td><code>indeterminate</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>show an animiation if the value is not set or invalid</td>\n</tr>\n<tr>\n<td><code>speed</code></td>\n<td>number</td>\n<td>1</td>\n<td>set custom animation duration/speed in seconds</td>\n</tr>\n</tbody>\n</table>\n'},641:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"80"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"15"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"30"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">secondaryValue</span>]=<span class="hljs-string">"60"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">speed</span>]=<span class="hljs-string">"5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"110"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"value$ | async"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"1000"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n'},642:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Observable ,  range ,  interval } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { zip } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ProgressBarDemoComponent {\n  value$ = range(<span class="hljs-number">0</span>, <span class="hljs-number">1000</span>).pipe(zip(interval(<span class="hljs-number">50</span>), <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x));\n}\n'}}]);