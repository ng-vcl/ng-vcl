(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"8QN/":function(n,s){n.exports='<h1 id="vcl-progress-bar">vcl-progress-bar</h1>\n<p>The progress is reflected as horizontal bar which is shown within a container.<br>There are two overlaying bars to represent a primary and an optional secondary progress.<br>In indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-progress-bar [value]=&quot;0&quot;&gt;&lt;/vcl-progress-bar&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>number</td>\n<td></td>\n<td>the current primary progress value</td>\n</tr>\n<tr>\n<td><code>secondaryValue</code></td>\n<td>number</td>\n<td></td>\n<td>the current secondary progress value. hidden unless this value is specified</td>\n</tr>\n<tr>\n<td><code>minValue</code></td>\n<td>number</td>\n<td></td>\n<td>the minimum value of the progress</td>\n</tr>\n<tr>\n<td><code>maxValue</code></td>\n<td>number</td>\n<td></td>\n<td>the maximum value of the progress</td>\n</tr>\n<tr>\n<td><code>indeterminate</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>show an animiation if the value is not set or invalid</td>\n</tr>\n<tr>\n<td><code>speed</code></td>\n<td>number</td>\n<td>1</td>\n<td>set custom animation duration/speed in seconds</td>\n</tr>\n</tbody></table>\n'},"8XpO":function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"80"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"15"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"30"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">secondaryValue</span>]=<span class="hljs-string">"60"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">speed</span>]=<span class="hljs-string">"5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"110"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"value$ | async"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"1000"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n'},HoVZ:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { zip, range, interval, animationFrameScheduler } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { map } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ProgressBarDemoComponent {\n  value$ = zip(range(<span class="hljs-number">0</span>, <span class="hljs-number">1000</span>), interval(<span class="hljs-number">50</span>, animationFrameScheduler)).pipe(map(<span class="hljs-function">(<span class="hljs-params">[x]</span>) =&gt;</span> x));\n}\n'},UMmg:function(n,s,t){"use strict";t.r(s);var l=t("CcnG"),a=t("mrSG"),e=t("IUTb"),r=t("isby"),u=t("FFOo"),o=t("MGBS"),i=t("zotm"),p=t("En8+"),c=function(){function n(n){this.resultSelector=n}return n.prototype.call=function(n,s){return s.subscribe(new h(n,this.resultSelector))},n}(),h=function(n){function s(s,t,l){void 0===l&&(l=Object.create(null));var a=n.call(this,s)||this;return a.iterators=[],a.active=0,a.resultSelector="function"==typeof t?t:null,a.values=l,a}return a.d(s,n),s.prototype._next=function(n){var s=this.iterators;Object(r.a)(n)?s.push(new d(n)):s.push("function"==typeof n[p.a]?new b(n[p.a]()):new m(this.destination,this,n))},s.prototype._complete=function(){var n=this.iterators,s=n.length;if(this.unsubscribe(),0!==s){this.active=s;for(var t=0;t<s;t++){var l=n[t];l.stillUnsubscribed?this.destination.add(l.subscribe(l,t)):this.active--}}else this.destination.complete()},s.prototype.notifyInactive=function(){this.active--,0===this.active&&this.destination.complete()},s.prototype.checkIterators=function(){for(var n=this.iterators,s=n.length,t=this.destination,l=0;l<s;l++)if("function"==typeof(r=n[l]).hasValue&&!r.hasValue())return;var a=!1,e=[];for(l=0;l<s;l++){var r,u=(r=n[l]).next();if(r.hasCompleted()&&(a=!0),u.done)return void t.complete();e.push(u.value)}this.resultSelector?this._tryresultSelector(e):t.next(e),a&&t.complete()},s.prototype._tryresultSelector=function(n){var s;try{s=this.resultSelector.apply(this,n)}catch(t){return void this.destination.error(t)}this.destination.next(s)},s}(u.a),b=function(){function n(n){this.iterator=n,this.nextResult=n.next()}return n.prototype.hasValue=function(){return!0},n.prototype.next=function(){var n=this.nextResult;return this.nextResult=this.iterator.next(),n},n.prototype.hasCompleted=function(){var n=this.nextResult;return n&&n.done},n}(),d=function(){function n(n){this.array=n,this.index=0,this.length=0,this.length=n.length}return n.prototype[p.a]=function(){return this},n.prototype.next=function(n){var s=this.index++;return s<this.length?{value:this.array[s],done:!1}:{value:null,done:!0}},n.prototype.hasValue=function(){return this.array.length>this.index},n.prototype.hasCompleted=function(){return this.array.length===this.index},n}(),m=function(n){function s(s,t,l){var a=n.call(this,s)||this;return a.parent=t,a.observable=l,a.stillUnsubscribed=!0,a.buffer=[],a.isComplete=!1,a}return a.d(s,n),s.prototype[p.a]=function(){return this},s.prototype.next=function(){var n=this.buffer;return 0===n.length&&this.isComplete?{value:null,done:!0}:{value:n.shift(),done:!1}},s.prototype.hasValue=function(){return this.buffer.length>0},s.prototype.hasCompleted=function(){return 0===this.buffer.length&&this.isComplete},s.prototype.notifyComplete=function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()},s.prototype.notifyNext=function(n,s,t,l,a){this.buffer.push(s),this.parent.checkIterators()},s.prototype.subscribe=function(n,s){return Object(i.a)(this,this.observable,this,s)},s}(o.a),g=t("6blF"),f=t("xXU7"),v=t("tHPV"),j=t("67Y/"),y=function(){return function(){var n,s;this.value$=function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];var t=n[n.length-1];return"function"==typeof t&&n.pop(),Object(e.a)(n,void 0).lift(new c(t))}((n=0,s=1e3,void 0===n&&(n=0),new g.a(function(t){void 0===s&&(s=n,n=0);for(var l=0,a=n;;){if(l++>=s){t.complete();break}if(t.next(a++),t.closed)break}})),Object(f.a)(50,v.a)).pipe(Object(j.a)(function(n){return n[0]}))}}(),V={demo:function(){return{label:"Progress-Bar",tabs:{Demo:y,"README.md":{type:"md",content:t("8QN/")},"demo.component.html":{type:"pre",content:t("8XpO")},"demo.component.ts":{type:"pre",content:t("HoVZ")}}}}},x=function(){return function(){}}(),w=t("pMnS"),O=t("8Ip6"),F=t("Ip0R"),P=function(){function n(){this._hostAttrRole="progressbar",this.minValue=0,this.maxValue=100,this.indeterminate=!1,this.speed=1}return Object.defineProperty(n.prototype,"showIndeterminate",{get:function(){return this.indeterminate&&!this.validateValue(this.value)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showValue",{get:function(){return!this.indeterminate||this.validateValue(this.value)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"showSecondaryValue",{get:function(){return this.validateValue(this.secondaryValue)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"transformValue",{get:function(){return"scaleX("+(this.validateValue(this.value)?this.scaleValue(this.value):0)+")"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"transformSecondaryValue",{get:function(){return"scaleX("+(this.validateValue(this.secondaryValue)?this.scaleValue(this.secondaryValue):0)+")"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"animationDurationValue",{get:function(){return(this.isNumber(this.speed)?this.speed:1)+"s"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"range",{get:function(){return this.maxValue-this.minValue},enumerable:!0,configurable:!0}),n.prototype.scaleValue=function(n){return(n-this.minValue)/this.range},n.prototype.validateValue=function(n){return this.isNumber(n)&&n>=this.minValue&&n<=this.maxValue},n.prototype.isNumber=function(n){return"number"==typeof n&&isFinite(n)},n}(),D=l.rb({encapsulation:2,styles:[],data:{}});function I(n){return l.Ob(0,[(n()(),l.tb(0,0,null,null,0,"div",[["class","vclProgress vclPrimary vclLayoutFit"]],[[4,"transform",null]],null,null,null,null))],null,function(n,s){n(s,0,0,s.component.transformValue)})}function S(n){return l.Ob(0,[(n()(),l.tb(0,0,null,null,0,"div",[["class","vclProgress vclSecondary vclLayoutFit"]],[[4,"transform",null]],null,null,null,null))],null,function(n,s){n(s,0,0,s.component.transformSecondaryValue)})}function R(n){return l.Ob(0,[(n()(),l.tb(0,0,null,null,0,"div",[["class","vclProgress vclPrimary vclLayoutFit"]],[[4,"animation-duration",null]],null,null,null,null))],null,function(n,s){n(s,0,0,s.component.animationDurationValue)})}function C(n){return l.Ob(2,[(n()(),l.tb(0,0,null,null,6,"div",[["class","vclProgressBar"]],[[1,"aria-valuenow",0],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuetext",0],[2,"vclIndeterminate",null]],null,null,null,null)),(n()(),l.ib(16777216,null,null,1,null,I)),l.sb(2,16384,null,0,F.l,[l.P,l.M],{ngIf:[0,"ngIf"]},null),(n()(),l.ib(16777216,null,null,1,null,S)),l.sb(4,16384,null,0,F.l,[l.P,l.M],{ngIf:[0,"ngIf"]},null),(n()(),l.ib(16777216,null,null,1,null,R)),l.sb(6,16384,null,0,F.l,[l.P,l.M],{ngIf:[0,"ngIf"]},null)],function(n,s){var t=s.component;n(s,2,0,t.showValue),n(s,4,0,t.showSecondaryValue),n(s,6,0,t.showIndeterminate)},function(n,s){var t=s.component;n(s,0,0,t.value,t.minValue,t.maxValue,t.label,t.showIndeterminate)})}var k=l.rb({encapsulation:2,styles:[],data:{}});function A(n){return l.Ob(0,[(n()(),l.tb(0,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,C,D)),l.sb(1,49152,null,0,P,[],{value:[0,"value"]},null),(n()(),l.tb(2,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.tb(3,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,C,D)),l.sb(4,49152,null,0,P,[],{value:[0,"value"],minValue:[1,"minValue"],maxValue:[2,"maxValue"]},null),(n()(),l.tb(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.tb(6,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,C,D)),l.sb(7,49152,null,0,P,[],{value:[0,"value"],minValue:[1,"minValue"],maxValue:[2,"maxValue"]},null),(n()(),l.tb(8,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.tb(9,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,C,D)),l.sb(10,49152,null,0,P,[],{value:[0,"value"],secondaryValue:[1,"secondaryValue"]},null),(n()(),l.tb(11,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.tb(12,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,C,D)),l.sb(13,49152,null,0,P,[],{indeterminate:[0,"indeterminate"]},null),(n()(),l.tb(14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.tb(15,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,C,D)),l.sb(16,49152,null,0,P,[],{indeterminate:[0,"indeterminate"],speed:[1,"speed"]},null),(n()(),l.tb(17,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.tb(18,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,C,D)),l.sb(19,49152,null,0,P,[],{value:[0,"value"],indeterminate:[1,"indeterminate"]},null),(n()(),l.tb(20,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.tb(21,0,null,null,1,"vcl-progress-bar",[],[[1,"role",0]],null,null,C,D)),l.sb(22,49152,null,0,P,[],{value:[0,"value"],indeterminate:[1,"indeterminate"]},null),(n()(),l.tb(23,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.tb(24,0,null,null,2,"vcl-progress-bar",[],[[1,"role",0]],null,null,C,D)),l.sb(25,49152,null,0,P,[],{value:[0,"value"],maxValue:[1,"maxValue"]},null),l.Hb(131072,F.b,[l.h])],function(n,s){var t=s.component;n(s,1,0,80),n(s,4,0,15,10,20),n(s,7,0,30,10,20),n(s,10,0,40,60),n(s,13,0,!0),n(s,16,0,!0,5),n(s,19,0,40,!0),n(s,22,0,110,!0),n(s,25,0,l.Nb(s,25,0,l.Fb(s,26).transform(t.value$)),1e3)},function(n,s){n(s,0,0,l.Fb(s,1)._hostAttrRole),n(s,3,0,l.Fb(s,4)._hostAttrRole),n(s,6,0,l.Fb(s,7)._hostAttrRole),n(s,9,0,l.Fb(s,10)._hostAttrRole),n(s,12,0,l.Fb(s,13)._hostAttrRole),n(s,15,0,l.Fb(s,16)._hostAttrRole),n(s,18,0,l.Fb(s,19)._hostAttrRole),n(s,21,0,l.Fb(s,22)._hostAttrRole),n(s,24,0,l.Fb(s,25)._hostAttrRole)})}function _(n){return l.Ob(0,[(n()(),l.tb(0,0,null,null,1,"ng-component",[],null,null,null,A,k)),l.sb(1,49152,null,0,y,[],null,null)],null,null)}var M=l.pb("ng-component",y,_,{},{},[]),N=t("M2Lx"),U=t("4c35"),X=t("p/eS"),q=t("2FIb"),B=t("s2it"),T=t("ZYCi"),z=t("PNUx");t.d(s,"ProgressBarDemoModuleNgFactory",function(){return H});var H=l.qb(x,[],function(n){return l.Cb([l.Db(512,l.j,l.bb,[[8,[w.a,O.a,M]],[3,l.j],l.y]),l.Db(4608,F.n,F.m,[l.v,[2,F.A]]),l.Db(4608,N.a,N.a,[]),l.Db(1073742336,F.c,F.c,[]),l.Db(1073742336,U.e,U.e,[]),l.Db(1073742336,N.b,N.b,[]),l.Db(1073742336,X.a,X.a,[]),l.Db(1073742336,q.a,q.a,[]),l.Db(1073742336,B.a,B.a,[]),l.Db(1073742336,T.q,T.q,[[2,T.v],[2,T.m]]),l.Db(1073742336,x,x,[]),l.Db(1024,T.i,function(){return[[{path:"",component:z.a,data:V}]]},[])])})},s2it:function(n,s,t){"use strict";t.d(s,"a",function(){return l});var l=function(){return function(){}}()},xXU7:function(n,s,t){"use strict";t.d(s,"a",function(){return r});var l=t("6blF"),a=t("T1DM"),e=t("/21U");function r(n,s){return void 0===n&&(n=0),void 0===s&&(s=a.a),(!Object(e.a)(n)||n<0)&&(n=0),s&&"function"==typeof s.schedule||(s=a.a),new l.a(function(t){return t.add(s.schedule(u,n,{subscriber:t,counter:0,period:n})),t})}function u(n){var s=n.subscriber,t=n.counter,l=n.period;s.next(t),this.schedule({subscriber:s,counter:t+1,period:l},l)}}}]);