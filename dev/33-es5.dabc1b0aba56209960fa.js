function _slicedToArray(s,n){return _arrayWithHoles(s)||_iterableToArrayLimit(s,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(s,n){if(Symbol.iterator in Object(s)||"[object Arguments]"===Object.prototype.toString.call(s)){var t=[],a=!0,e=!1,r=void 0;try{for(var l,i=s[Symbol.iterator]();!(a=(l=i.next()).done)&&(t.push(l.value),!n||t.length!==n);a=!0);}catch(o){e=!0,r=o}finally{try{a||null==i.return||i.return()}finally{if(e)throw r}}return t}}function _arrayWithHoles(s){if(Array.isArray(s))return s}function _possibleConstructorReturn(s,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(s):n}function _assertThisInitialized(s){if(void 0===s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function _getPrototypeOf(s){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)})(s)}function _inherits(s,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(n&&n.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),n&&_setPrototypeOf(s,n)}function _setPrototypeOf(s,n){return(_setPrototypeOf=Object.setPrototypeOf||function(s,n){return s.__proto__=n,s})(s,n)}function _classCallCheck(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(s,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(s,a.key,a)}}function _createClass(s,n,t){return n&&_defineProperties(s.prototype,n),t&&_defineProperties(s,t),s}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"8XpO":function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"80"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"15"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">minValue</span>]=<span class="hljs-string">"10"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"20"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"30"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">secondaryValue</span>]=<span class="hljs-string">"60"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">speed</span>]=<span class="hljs-string">"5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"40"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"110"</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-progress-bar</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"value$ | async"</span> [<span class="hljs-attr">maxValue</span>]=<span class="hljs-string">"1000"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-progress-bar</span>&gt;</span>\n'},HoVZ:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { zip, range, interval, animationFrameScheduler } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { map } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ProgressBarDemoComponent {\n  value$ = zip(range(<span class="hljs-number">0</span>, <span class="hljs-number">1000</span>), interval(<span class="hljs-number">50</span>, animationFrameScheduler)).pipe(map(<span class="hljs-function">(<span class="hljs-params">[x]</span>) =&gt;</span> x));\n}\n'},skhp:function(s,n,t){"use strict";t.r(n);var a=t("ofXK"),e=t("tyNb"),r=t("19H1"),l=t("2FIb"),i=t("yCtX"),o=t("DH7j"),p=t("7o/Q"),c=t("l7GE"),u=t("ZUHj"),h=t("Lhse"),d=function(){function s(n){_classCallCheck(this,s),this.resultSelector=n}return _createClass(s,[{key:"call",value:function(s,n){return n.subscribe(new b(s,this.resultSelector))}}]),s}(),b=function(s){function n(s,t){var a,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.create(null);return _classCallCheck(this,n),(a=_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,s))).iterators=[],a.active=0,a.resultSelector="function"==typeof t?t:null,a.values=e,a}return _inherits(n,s),_createClass(n,[{key:"_next",value:function(s){var n=this.iterators;Object(o.a)(s)?n.push(new f(s)):n.push("function"==typeof s[h.a]?new g(s[h.a]()):new m(this.destination,this,s))}},{key:"_complete",value:function(){var s=this.iterators,n=s.length;if(this.unsubscribe(),0!==n){this.active=n;for(var t=0;t<n;t++){var a=s[t];a.stillUnsubscribed?this.destination.add(a.subscribe(a,t)):this.active--}}else this.destination.complete()}},{key:"notifyInactive",value:function(){this.active--,0===this.active&&this.destination.complete()}},{key:"checkIterators",value:function(){for(var s=this.iterators,n=s.length,t=this.destination,a=0;a<n;a++){var e=s[a];if("function"==typeof e.hasValue&&!e.hasValue())return}for(var r=!1,l=[],i=0;i<n;i++){var o=s[i],p=o.next();if(o.hasCompleted()&&(r=!0),p.done)return void t.complete();l.push(p.value)}this.resultSelector?this._tryresultSelector(l):t.next(l),r&&t.complete()}},{key:"_tryresultSelector",value:function(s){var n;try{n=this.resultSelector.apply(this,s)}catch(t){return void this.destination.error(t)}this.destination.next(n)}}]),n}(p.a),g=function(){function s(n){_classCallCheck(this,s),this.iterator=n,this.nextResult=n.next()}return _createClass(s,[{key:"hasValue",value:function(){return!0}},{key:"next",value:function(){var s=this.nextResult;return this.nextResult=this.iterator.next(),s}},{key:"hasCompleted",value:function(){var s=this.nextResult;return s&&s.done}}]),s}(),f=function(){function s(n){_classCallCheck(this,s),this.array=n,this.index=0,this.length=0,this.length=n.length}return _createClass(s,[{key:h.a,value:function(){return this}},{key:"next",value:function(s){var n=this.index++;return n<this.length?{value:this.array[n],done:!1}:{value:null,done:!0}}},{key:"hasValue",value:function(){return this.array.length>this.index}},{key:"hasCompleted",value:function(){return this.array.length===this.index}}]),s}(),m=function(s){function n(s,t,a){var e;return _classCallCheck(this,n),(e=_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,s))).parent=t,e.observable=a,e.stillUnsubscribed=!0,e.buffer=[],e.isComplete=!1,e}return _inherits(n,s),_createClass(n,[{key:h.a,value:function(){return this}},{key:"next",value:function(){var s=this.buffer;return 0===s.length&&this.isComplete?{value:null,done:!0}:{value:s.shift(),done:!1}}},{key:"hasValue",value:function(){return this.buffer.length>0}},{key:"hasCompleted",value:function(){return 0===this.buffer.length&&this.isComplete}},{key:"notifyComplete",value:function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}},{key:"notifyNext",value:function(s,n,t,a,e){this.buffer.push(n),this.parent.checkIterators()}},{key:"subscribe",value:function(s,n){return Object(u.a)(this,this.observable,this,n)}}]),n}(c.a),v=t("HDdC");function j(s){var n=s.start,t=s.index,a=s.count,e=s.subscriber;t>=a?e.complete():(e.next(n),e.closed||(s.index=t+1,s.start=n+1,this.schedule(s)))}var y,_=t("l5mm"),k=t("eNwd"),x=t("lJxs"),w=t("fXoL"),C=t("pt6R"),O=((y=function s(){_classCallCheck(this,s),this.value$=function(){for(var s=arguments.length,n=new Array(s),t=0;t<s;t++)n[t]=arguments[t];var a=n[n.length-1];return"function"==typeof a&&n.pop(),Object(i.a)(n,void 0).lift(new d(a))}(function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0;return new v.a((function(a){void 0===n&&(n=s,s=0);var e=0,r=s;if(t)return t.schedule(j,0,{index:e,count:n,start:s,subscriber:a});for(;;){if(e++>=n){a.complete();break}if(a.next(r++),a.closed)break}}))}(0,1e3),Object(_.a)(50,k.a)).pipe(Object(x.a)((function(s){return _slicedToArray(s,1)[0]})))}).\u0275fac=function(s){return new(s||y)},y.\u0275cmp=w.Gb({type:y,selectors:[["ng-component"]],decls:18,vars:20,consts:[[3,"value"],[3,"minValue","maxValue","value"],[3,"value","secondaryValue"],[3,"indeterminate"],[3,"indeterminate","speed"],[3,"value","indeterminate"],[3,"value","maxValue"]],template:function(s,n){1&s&&(w.Nb(0,"vcl-progress-bar",0),w.Nb(1,"br"),w.Nb(2,"vcl-progress-bar",1),w.Nb(3,"br"),w.Nb(4,"vcl-progress-bar",1),w.Nb(5,"br"),w.Nb(6,"vcl-progress-bar",2),w.Nb(7,"br"),w.Nb(8,"vcl-progress-bar",3),w.Nb(9,"br"),w.Nb(10,"vcl-progress-bar",4),w.Nb(11,"br"),w.Nb(12,"vcl-progress-bar",5),w.Nb(13,"br"),w.Nb(14,"vcl-progress-bar",5),w.Nb(15,"br"),w.Nb(16,"vcl-progress-bar",6),w.ec(17,"async")),2&s&&(w.ic("value",80),w.Ab(2),w.ic("minValue",10)("maxValue",20)("value",15),w.Ab(2),w.ic("minValue",10)("maxValue",20)("value",30),w.Ab(2),w.ic("value",40)("secondaryValue",60),w.Ab(2),w.ic("indeterminate",!0),w.Ab(2),w.ic("indeterminate",!0)("speed",5),w.Ab(2),w.ic("value",40)("indeterminate",!0),w.Ab(2),w.ic("value",110)("indeterminate",!0),w.Ab(2),w.ic("value",w.fc(17,18,n.value$))("maxValue",1e3))},directives:[C.a],pipes:[a.b],encapsulation:2}),y);function V(){return{label:"Progress-Bar",tabs:{Demo:O,"README.md":{type:"md",content:'<h1 id="vcl-progress-bar">vcl-progress-bar</h1>\n<p>The progress is reflected as horizontal bar which is shown within a container.<br>There are two overlaying bars to represent a primary and an optional secondary progress.<br>In indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-progress-bar [value]=&quot;0&quot;&gt;&lt;/vcl-progress-bar&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>number</td>\n<td></td>\n<td>the current primary progress value</td>\n</tr>\n<tr>\n<td><code>secondaryValue</code></td>\n<td>number</td>\n<td></td>\n<td>the current secondary progress value. hidden unless this value is specified</td>\n</tr>\n<tr>\n<td><code>minValue</code></td>\n<td>number</td>\n<td></td>\n<td>the minimum value of the progress</td>\n</tr>\n<tr>\n<td><code>maxValue</code></td>\n<td>number</td>\n<td></td>\n<td>the maximum value of the progress</td>\n</tr>\n<tr>\n<td><code>indeterminate</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>show an animiation if the value is not set or invalid</td>\n</tr>\n<tr>\n<td><code>speed</code></td>\n<td>number</td>\n<td>1</td>\n<td>set custom animation duration/speed in seconds</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:t("8XpO")},"demo.component.ts":{type:"pre",content:t("HoVZ")}}}}t.d(n,"demo",(function(){return V})),t.d(n,"ProgressBarDemoModule",(function(){return A}));var N,A=((N=function s(){_classCallCheck(this,s)}).\u0275mod=w.Kb({type:N}),N.\u0275inj=w.Jb({factory:function(s){return new(s||N)},imports:[[a.c,l.b,r.Z,e.g.forChild([{path:"",component:l.a,data:{demo:V}}])]]}),N)}}]);