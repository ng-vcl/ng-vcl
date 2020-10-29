(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"66ue":function(e,t,r){"use strict";r.r(t),t.default='<vcl-progress-bar [value]="80"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [minValue]="10" [maxValue]="20" [value]="15"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [minValue]="10" [maxValue]="20" [value]="30"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="40" [secondaryValue]="60"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [indeterminate]="true"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [indeterminate]="true" [speed]="5"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="40" [indeterminate]="true"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="110" [indeterminate]="true"></vcl-progress-bar>\n<br>\n<vcl-progress-bar [value]="value$ | async" [maxValue]="1000"></vcl-progress-bar>\n'},"8miO":function(e,t,r){"use strict";r.r(t),t.default="import { Component } from '@angular/core';\nimport { zip, range, interval, animationFrameScheduler } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class ProgressBarDemoComponent {\n  value$ = zip(range(0, 1000), interval(50, animationFrameScheduler)).pipe(map(([x]) => x));\n}\n"},skhp:function(e,t,r){"use strict";r.r(t),r.d(t,"demo",(function(){return S})),r.d(t,"ProgressBarDemoModule",(function(){return D}));var n=r("ofXK"),s=r("tyNb"),a=r("19H1"),i=r("2FIb"),o=r("yCtX"),l=r("DH7j"),c=r("7o/Q"),u=r("l7GE"),h=r("ZUHj"),b=r("Lhse");class p{constructor(e){this.resultSelector=e}call(e,t){return t.subscribe(new m(e,this.resultSelector))}}class m extends c.a{constructor(e,t,r=Object.create(null)){super(e),this.iterators=[],this.active=0,this.resultSelector="function"==typeof t?t:null,this.values=r}_next(e){const t=this.iterators;Object(l.a)(e)?t.push(new v(e)):t.push("function"==typeof e[b.a]?new d(e[b.a]()):new g(this.destination,this,e))}_complete(){const e=this.iterators,t=e.length;if(this.unsubscribe(),0!==t){this.active=t;for(let r=0;r<t;r++){let t=e[r];t.stillUnsubscribed?this.destination.add(t.subscribe(t,r)):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const e=this.iterators,t=e.length,r=this.destination;for(let a=0;a<t;a++){let t=e[a];if("function"==typeof t.hasValue&&!t.hasValue())return}let n=!1;const s=[];for(let a=0;a<t;a++){let t=e[a],i=t.next();if(t.hasCompleted()&&(n=!0),i.done)return void r.complete();s.push(i.value)}this.resultSelector?this._tryresultSelector(s):r.next(s),n&&r.complete()}_tryresultSelector(e){let t;try{t=this.resultSelector.apply(this,e)}catch(r){return void this.destination.error(r)}this.destination.next(t)}}class d{constructor(e){this.iterator=e,this.nextResult=e.next()}hasValue(){return!0}next(){const e=this.nextResult;return this.nextResult=this.iterator.next(),e}hasCompleted(){const e=this.nextResult;return e&&e.done}}class v{constructor(e){this.array=e,this.index=0,this.length=0,this.length=e.length}[b.a](){return this}next(e){const t=this.index++;return t<this.length?{value:this.array[t],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class g extends u.a{constructor(e,t,r){super(e),this.parent=t,this.observable=r,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[b.a](){return this}next(){const e=this.buffer;return 0===e.length&&this.isComplete?{value:null,done:!0}:{value:e.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(e,t,r,n,s){this.buffer.push(t),this.parent.checkIterators()}subscribe(e,t){return Object(h.a)(this,this.observable,this,t)}}var f=r("HDdC");function y(e){const{start:t,index:r,count:n,subscriber:s}=e;r>=n?s.complete():(s.next(t),s.closed||(e.index=r+1,e.start=t+1,this.schedule(e)))}var x=r("l5mm"),V=r("eNwd"),w=r("lJxs"),L=r("fXoL"),C=r("pt6R");let j=(()=>{class e{constructor(){this.value$=function(...e){const t=e[e.length-1];return"function"==typeof t&&e.pop(),Object(o.a)(e,void 0).lift(new p(t))}(function(e=0,t,r){return new f.a(n=>{void 0===t&&(t=e,e=0);let s=0,a=e;if(r)return r.schedule(y,0,{index:s,count:t,start:e,subscriber:n});for(;;){if(s++>=t){n.complete();break}if(n.next(a++),n.closed)break}})}(0,1e3),Object(x.a)(50,V.a)).pipe(Object(w.a)(([e])=>e))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=L.Eb({type:e,selectors:[["ng-component"]],decls:18,vars:20,consts:[[3,"value"],[3,"minValue","maxValue","value"],[3,"value","secondaryValue"],[3,"indeterminate"],[3,"indeterminate","speed"],[3,"value","indeterminate"],[3,"value","maxValue"]],template:function(e,t){1&e&&(L.Lb(0,"vcl-progress-bar",0),L.Lb(1,"br"),L.Lb(2,"vcl-progress-bar",1),L.Lb(3,"br"),L.Lb(4,"vcl-progress-bar",1),L.Lb(5,"br"),L.Lb(6,"vcl-progress-bar",2),L.Lb(7,"br"),L.Lb(8,"vcl-progress-bar",3),L.Lb(9,"br"),L.Lb(10,"vcl-progress-bar",4),L.Lb(11,"br"),L.Lb(12,"vcl-progress-bar",5),L.Lb(13,"br"),L.Lb(14,"vcl-progress-bar",5),L.Lb(15,"br"),L.Lb(16,"vcl-progress-bar",6),L.bc(17,"async")),2&e&&(L.gc("value",80),L.yb(2),L.gc("minValue",10)("maxValue",20)("value",15),L.yb(2),L.gc("minValue",10)("maxValue",20)("value",30),L.yb(2),L.gc("value",40)("secondaryValue",60),L.yb(2),L.gc("indeterminate",!0),L.yb(2),L.gc("indeterminate",!0)("speed",5),L.yb(2),L.gc("value",40)("indeterminate",!0),L.yb(2),L.gc("value",110)("indeterminate",!0),L.yb(2),L.gc("value",L.cc(17,18,t.value$))("maxValue",1e3))},directives:[C.a],pipes:[n.b],encapsulation:2}),e})();function S(){return{label:"Progress-Bar",tabs:{Demo:j,"README.md":{type:"md",content:'# vcl-progress-bar\n\nThe progress is reflected as horizontal bar which is shown within a container.\nThere are two overlaying bars to represent a primary and an optional secondary progress.\nIn indeterminate mode, an animation is shown to indicate an ongoing process whose progress cannot be determined.\n\n## Usage\n\n```html\n<vcl-progress-bar [value]="0"></vcl-progress-bar>\n```\n\n### API\n\n#### Attributes\n\n| Name                | Type        | Default            | Description\n| ------------        | ----------- | ------------------ |--------------\n| `value`             | number      |                    | the current primary progress value\n| `secondaryValue`    | number      |                    | the current secondary progress value. hidden unless this value is specified\n| `minValue`          | number      |                    | the minimum value of the progress\n| `maxValue`          | number      |                    | the maximum value of the progress\n| `indeterminate`     | boolean     | false              | show an animiation if the value is not set or invalid\n| `speed`             | number      | 1                  | set custom animation duration/speed in seconds\n'},"demo.component.html":{type:"html",content:r("66ue")},"demo.component.ts":{type:"ts",content:r("8miO")}}}}let D=(()=>{class e{}return e.\u0275mod=L.Ib({type:e}),e.\u0275inj=L.Hb({factory:function(t){return new(t||e)},imports:[[n.c,i.b,a.VCLProgressBarModule,s.g.forChild([{path:"",component:i.a,data:{demo:S}}])]]}),e})()}}]);