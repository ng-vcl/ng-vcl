!function(){function t(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2FIb":function(n,i,r){"use strict";r.d(i,"a",(function(){return P})),r.d(i,"b",(function(){return j}));var c=r("ofXK"),a=r("19H1"),u=r("+rOU"),s=r("fXoL"),f=r("tyNb"),b=r("jhN1"),l=r("tKhL"),d=r("ZMf7"),h=r("pKlR"),m=r("lR5k");function p(t,n){}function y(t,n){if(1&t&&(s.Qb(0,"div"),s.uc(1,p,0,0,"ng-template",5),s.Pb()),2&t){var e=s.ac().$implicit;s.yb(1),s.gc("cdkPortalOutlet",e.content)}}function v(t,n){if(1&t&&(s.Qb(0,"div"),s.Qb(1,"pre"),s.wc(2),s.Pb(),s.Pb()),2&t){var e=s.ac().$implicit;s.yb(2),s.xc(e.content)}}function g(t,n){if(1&t&&s.Lb(0,"markdown",6),2&t){var e=s.ac().$implicit;s.gc("data",e.content)}}function k(t,n){if(1&t&&(s.Lb(0,"markdown",6),s.bc(1,"language")),2&t){var e=s.ac().$implicit;s.gc("data",s.dc(1,1,e.content,"typescript"))}}function w(t,n){if(1&t&&(s.Lb(0,"markdown",6),s.bc(1,"language")),2&t){var e=s.ac().$implicit;s.gc("data",s.dc(1,1,e.content,"html"))}}function O(t,n){if(1&t&&(s.Qb(0,"vcl-tab"),s.Qb(1,"vcl-label"),s.wc(2),s.Pb(),s.uc(3,y,2,1,"div",1),s.uc(4,v,3,1,"div",1),s.uc(5,g,1,1,"markdown",4),s.uc(6,k,2,4,"markdown",4),s.uc(7,w,2,4,"markdown",4),s.Pb()),2&t){var e=n.$implicit;s.yb(2),s.xc(e.name),s.yb(1),s.gc("ngIf","component"===e.type),s.yb(1),s.gc("ngIf","text"===e.type),s.yb(1),s.gc("ngIf","md"===e.type),s.yb(1),s.gc("ngIf","ts"===e.type),s.yb(1),s.gc("ngIf","html"===e.type)}}function _(t,n){if(1&t&&(s.Qb(0,"div"),s.Qb(1,"vcl-tab-nav",2),s.uc(2,O,8,6,"vcl-tab",3),s.Pb(),s.Pb()),2&t){var e=s.ac();s.yb(2),s.gc("ngForOf",e.tabs)}}var C,I,P=((I=function(){function n(t,i){e(this,n),this.activatedRoute=t,this.sanitizer=i,this.tabs=[]}return o(n,[{key:"ngOnInit",value:function(){var n=this.activatedRoute.snapshot.data.demo();n?(this.title=n.label,this.tabs=n.tabs?Object.keys(n.tabs).reduce((function(e,i){var o,r;return"object"==typeof n.tabs[i]&&n.tabs[i]?(o=n.tabs[i].type,r="object"==typeof n.tabs[i].content&&n.tabs[i].content&&n.tabs[i].content.default?n.tabs[i].content.default:n.tabs[i].content):"function"==typeof n.tabs[i]&&(o="component",r=new u.c(n.tabs[i])),r&&o?[].concat(t(e),[{name:i,content:r,type:o}]):e}),[]):[]):(this.title="ng-vcl",this.tabs=[])}}]),n}()).\u0275fac=function(t){return new(t||I)(s.Kb(f.a),s.Kb(b.b))},I.\u0275cmp=s.Eb({type:I,selectors:[["ng-component"]],decls:3,vars:2,consts:[[1,"article-header"],[4,"ngIf"],["borders","true"],[4,"ngFor","ngForOf"],[3,"data",4,"ngIf"],[3,"cdkPortalOutlet"],[3,"data"]],template:function(t,n){1&t&&(s.Qb(0,"h2",0),s.wc(1),s.Pb(),s.uc(2,_,3,1,"div",1)),2&t&&(s.yb(1),s.yc(" ",n.title,""),s.yb(1),s.gc("ngIf",n.tabs.length>0))},directives:[c.t,l.a,c.s,d.a,h.a,u.b,m.b],pipes:[m.a],encapsulation:2}),I),j=((C=function t(){e(this,t)}).\u0275mod=s.Ib({type:C}),C.\u0275inj=s.Hb({factory:function(t){return new(t||C)},imports:[[c.c,a.VCLTabNavModule,u.h,m.c.forChild()]]}),C)},f0Vy:function(t,n,i){"use strict";i.d(n,"a",(function(){return d})),i.d(n,"b",(function(){return h}));var r=i("fXoL"),c=i("3Pt+"),a=i("19H1"),u=i("XNiG"),s=i("ofXK"),f=i("6B8K"),b=i("9Rb9"),l=0,d=function(){var t=function(){function t(n){e(this,t),this.injector=n,this._hostClasses=!0,this._stateChangedEmitter=new u.a,this._generatedId="vcl_file-input_"+l++,this._focused=!1,this._cvaDisabled=!1,this.stateChanged=this._stateChangedEmitter.asObservable(),this.controlType="counter",this.value=0,this.hasError=!1,this.onChange=function(){},this.onTouched=function(){}}return o(t,[{key:"setErrorState",value:function(t){this.hasError=t}},{key:"onFocus",value:function(){this._focused=!0,this._stateChangedEmitter.next()}},{key:"onBlur",value:function(t){this._focused=!1,this._stateChangedEmitter.next(),t&&this.onTouched()}},{key:"increment",value:function(){"number"==typeof this.max&&this.value>=this.max||(this.value++,this.onChange(this.value))}},{key:"decrement",value:function(){"number"==typeof this.min&&this.value<=this.min||(this.value--,this.onChange(this.value),this.onTouched())}},{key:"writeValue",value:function(t){this.value=t}},{key:"registerOnChange",value:function(t){this.onChange=t}},{key:"registerOnTouched",value:function(t){this.onTouched=t}},{key:"setDisabledState",value:function(t){this._cvaDisabled=t}},{key:"ngControl",get:function(){return this.injector.get(c.q,null)}},{key:"elementId",get:function(){return this.id||this._generatedId}},{key:"isDisabled",get:function(){return this._cvaDisabled||this.disabled}},{key:"isFocused",get:function(){return this._focused}}]),t}();return t.\u0275fac=function(n){return new(n||t)(r.Kb(r.r))},t.\u0275cmp=r.Eb({type:t,selectors:[["demo-counter"]],hostVars:3,hostBindings:function(t,n){2&t&&(r.zb("id",n.elementId),r.Bb("error",n.hasError))},inputs:{id:"id",disabled:"disabled",min:"min",max:"max"},features:[r.xb([{provide:c.p,useExisting:Object(r.S)((function(){return t})),multi:!0},{provide:a.FORM_CONTROL_GROUP_INPUT_STATE,useExisting:Object(r.S)((function(){return t}))}])],decls:6,vars:1,consts:[["vcl-square-button","","type","button",1,"transparent",3,"click","keydown.enter","focus"],["icon","fas:minus"],["icon","fas:plus"]],template:function(t,n){1&t&&(r.Qb(0,"button",0),r.Xb("click",(function(){return n.decrement()}))("keydown.enter",(function(t){return n.decrement(),t.preventDefault()}))("focus",(function(){return n.onFocus()}))("focus",(function(){return n.onBlur(!1)})),r.Lb(1,"vcl-icon",1),r.Pb(),r.Qb(2,"span"),r.wc(3),r.Pb(),r.Qb(4,"button",0),r.Xb("click",(function(){return n.increment()}))("keydown.enter",(function(t){return n.increment(),t.preventDefault()}))("focus",(function(){return n.onFocus()}))("focus",(function(){return n.onBlur(!0)})),r.Lb(5,"vcl-icon",2),r.Pb()),2&t&&(r.yb(3),r.xc(n.value))},directives:[f.b,b.a],styles:["[_nghost-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n    [_nghost-%COMP%]    > span[_ngcontent-%COMP%] {\n      font-size: 2em;\n      user-select: none;\n      padding-left: 0.2em;\n      padding-right: 0.2em;\n    }"]}),t}(),h=function(){var t=function t(){e(this,t)};return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(n){return new(n||t)},imports:[[s.c,c.m,c.B,a.VCLIcogramModule,a.VCLButtonModule]]}),t}()}}])}();