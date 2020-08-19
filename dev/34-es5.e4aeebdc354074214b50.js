!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"66ue":function(e,t,r){"use strict";r.r(t),t.default='<vcl-progress-bar [value]="80"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [minValue]="10" [maxValue]="20" [value]="15"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [minValue]="10" [maxValue]="20" [value]="30"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="40" [secondaryValue]="60"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [indeterminate]="true"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [indeterminate]="true" [speed]="5"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="40" [indeterminate]="true"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="110" [indeterminate]="true"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="value$ | async" [maxValue]="1000"></vcl-progress-bar>\n'},"8miO":function(e,t,r){"use strict";r.r(t),t.default="import { Component } from '@angular/core';\nimport { zip, range, interval, animationFrameScheduler } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class ProgressBarDemoComponent {\n  value$ = zip(range(0, 1000), interval(50, animationFrameScheduler)).pipe(map(([x]) => x));\n}\n"},skhp:function(t,n,a){"use strict";a.r(n),a.d(n,"demo",(function(){return A})),a.d(n,"ProgressBarDemoModule",(function(){return P}));var i=a("ofXK"),u=a("tyNb"),c=a("19H1"),f=a("2FIb"),p=a("yCtX"),b=a("DH7j"),h=a("7o/Q"),v=a("Lhse"),m=a("zx2A"),d=function(){function e(t){s(this,e),this.resultSelector=t}return l(e,[{key:"call",value:function(e,t){return t.subscribe(new y(e,this.resultSelector))}}]),e}(),y=function(e){r(n,e);var t=o(n);function n(e,r){var o;arguments.length>2&&void 0!==arguments[2]||Object.create(null);return s(this,n),(o=t.call(this,e)).resultSelector=r,o.iterators=[],o.active=0,o.resultSelector="function"==typeof r?r:void 0,o}return l(n,[{key:"_next",value:function(e){var t=this.iterators;Object(b.a)(e)?t.push(new x(e)):t.push("function"==typeof e[v.a]?new g(e[v.a]()):new w(this.destination,this,e))}},{key:"_complete",value:function(){var e=this.iterators,t=e.length;if(this.unsubscribe(),0!==t){this.active=t;for(var r=0;r<t;r++){var n=e[r];n.stillUnsubscribed?this.destination.add(n.subscribe()):this.active--}}else this.destination.complete()}},{key:"notifyInactive",value:function(){this.active--,0===this.active&&this.destination.complete()}},{key:"checkIterators",value:function(){for(var e=this.iterators,t=e.length,r=this.destination,n=0;n<t;n++){var o=e[n];if("function"==typeof o.hasValue&&!o.hasValue())return}for(var a=!1,i=[],s=0;s<t;s++){var u=e[s],l=u.next();if(u.hasCompleted()&&(a=!0),l.done)return void r.complete();i.push(l.value)}this.resultSelector?this._tryresultSelector(i):r.next(i),a&&r.complete()}},{key:"_tryresultSelector",value:function(e){var t;try{t=this.resultSelector.apply(this,e)}catch(r){return void this.destination.error(r)}this.destination.next(t)}}]),n}(h.a),g=function(){function e(t){s(this,e),this.iterator=t,this.nextResult=t.next()}return l(e,[{key:"hasValue",value:function(){return!0}},{key:"next",value:function(){var e=this.nextResult;return this.nextResult=this.iterator.next(),e}},{key:"hasCompleted",value:function(){var e=this.nextResult;return Boolean(e&&e.done)}}]),e}(),x=function(){function e(t){s(this,e),this.array=t,this.index=0,this.length=0,this.length=t.length}return l(e,[{key:v.a,value:function(){return this}},{key:"next",value:function(e){var t=this.index++;return t<this.length?{value:this.array[t],done:!1}:{value:null,done:!0}}},{key:"hasValue",value:function(){return this.array.length>this.index}},{key:"hasCompleted",value:function(){return this.array.length===this.index}}]),e}(),w=function(e){r(n,e);var t=o(n);function n(e,r,o){var a;return s(this,n),(a=t.call(this,e)).parent=r,a.observable=o,a.stillUnsubscribed=!0,a.buffer=[],a.isComplete=!1,a}return l(n,[{key:v.a,value:function(){return this}},{key:"next",value:function(){var e=this.buffer;return 0===e.length&&this.isComplete?{value:null,done:!0}:{value:e.shift(),done:!1}}},{key:"hasValue",value:function(){return this.buffer.length>0}},{key:"hasCompleted",value:function(){return 0===this.buffer.length&&this.isComplete}},{key:"notifyComplete",value:function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}},{key:"notifyNext",value:function(e){this.buffer.push(e),this.parent.checkIterators()}},{key:"subscribe",value:function(){return Object(m.c)(this.observable,new m.a(this))}}]),n}(m.b),k=a("HDdC");function V(e){var t=e.start,r=e.index,n=e.count,o=e.subscriber;r>=n?o.complete():(o.next(t),o.closed||(e.index=r+1,e.start=t+1,this.schedule(e)))}var j,O=a("l5mm"),C=a("eNwd"),K=a("lJxs"),S=a("fXoL"),R=a("pt6R"),_=((j=function t(){s(this,t),this.value$=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t[t.length-1];return"function"==typeof n&&t.pop(),Object(p.a)(t,void 0).lift(new d(n))}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return new k.a((function(n){void 0===t&&(t=e,e=0);var o=0,a=e;if(r)return r.schedule(V,0,{index:o,count:t,start:e,subscriber:n});for(;;){if(o++>=t){n.complete();break}if(n.next(a++),n.closed)break}}))}(0,1e3),Object(O.a)(50,C.a)).pipe(Object(K.a)((function(t){return e(t,1)[0]})))}).\u0275fac=function(e){return new(e||j)},j.\u0275cmp=S.Db({type:j,selectors:[["ng-component"]],decls:18,vars:20,consts:[[3,"value"],[3,"minValue","maxValue","value"],[3,"value","secondaryValue"],[3,"indeterminate"],[3,"indeterminate","speed"],[3,"value","indeterminate"],[3,"value","maxValue"]],template:function(e,t){1&e&&(S.Kb(0,"vcl-progress-bar",0),S.Kb(1,"br"),S.Kb(2,"vcl-progress-bar",1),S.Kb(3,"br"),S.Kb(4,"vcl-progress-bar",1),S.Kb(5,"br"),S.Kb(6,"vcl-progress-bar",2),S.Kb(7,"br"),S.Kb(8,"vcl-progress-bar",3),S.Kb(9,"br"),S.Kb(10,"vcl-progress-bar",4),S.Kb(11,"br"),S.Kb(12,"vcl-progress-bar",5),S.Kb(13,"br"),S.Kb(14,"vcl-progress-bar",5),S.Kb(15,"br"),S.Kb(16,"vcl-progress-bar",6),S.ac(17,"async")),2&e&&(S.fc("value",80),S.yb(2),S.fc("minValue",10)("maxValue",20)("value",15),S.yb(2),S.fc("minValue",10)("maxValue",20)("value",30),S.yb(2),S.fc("value",40)("secondaryValue",60),S.yb(2),S.fc("indeterminate",!0),S.yb(2),S.fc("indeterminate",!0)("speed",5),S.yb(2),S.fc("value",40)("indeterminate",!0),S.yb(2),S.fc("value",110)("indeterminate",!0),S.yb(2),S.fc("value",S.bc(17,18,t.value$))("maxValue",1e3))},directives:[R.a],pipes:[i.b],encapsulation:2}),j);function A(){return{label:"Progress-Bar",tabs:{Demo:_,"README.md":{type:"md",content:'# vcl-progress-bar\n\nThe progress is reflected as horizontal bar which is shown within a container.\nThere are two overlaying bars to represent a primary and an optional secondary progress.\nIn indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.\n\n## Usage\n\n```html\n<vcl-progress-bar [value]="0"></vcl-progress-bar>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type        | Default            | Description\n| ------------        | ----------- | ------------------ |--------------\n| `value`             | number      |                    | the current primary progress value\n| `secondaryValue`    | number      |                    | the current secondary progress value. hidden unless this value is specified\n| `minValue`          | number      |                    | the minimum value of the progress\n| `maxValue`          | number      |                    | the maximum value of the progress\n| `indeterminate`     | boolean     | false              | show an animiation if the value is not set or invalid\n| `speed`             | number      | 1                  | set custom animation duration/speed in seconds\n'},"demo.component.html":{type:"html",content:a("66ue")},"demo.component.ts":{type:"ts",content:a("8miO")}}}}var D,P=((D=function e(){s(this,e)}).\u0275mod=S.Hb({type:D}),D.\u0275inj=S.Gb({factory:function(e){return new(e||D)},imports:[[i.c,f.b,c.VCLProgressBarModule,u.g.forChild([{path:"",component:f.a,data:{demo:A}}])]]}),D)}}])}();