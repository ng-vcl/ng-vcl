function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2FIb":function(t,n,e){"use strict";e.d(n,"a",(function(){return w})),e.d(n,"b",(function(){return C}));var i=e("ofXK"),c=e("19H1"),s=e("+rOU"),r=e("fXoL"),o=e("tyNb"),a=e("jhN1"),u=e("tKhL"),l=e("ZMf7"),f=e("pKlR");function b(t,n){}function d(t,n){if(1&t&&(r.Sb(0,"div"),r.wc(1,b,0,0,"ng-template",6),r.Rb()),2&t){var e=r.dc().$implicit;r.Ab(1),r.ic("cdkPortalOutlet",e.content)}}function h(t,n){if(1&t&&(r.Sb(0,"div"),r.Sb(1,"pre"),r.yc(2),r.Rb(),r.Rb()),2&t){var e=r.dc().$implicit;r.Ab(2),r.zc(e.content)}}function p(t,n){if(1&t&&r.Nb(0,"div",7),2&t){var e=r.dc().$implicit;r.ic("innerHtml",e.content,r.pc)}}function v(t,n){if(1&t&&r.Nb(0,"div",8),2&t){var e=r.dc().$implicit;r.ic("innerHtml",e.content,r.pc)}}function m(t,n){if(1&t&&r.Nb(0,"pre",7),2&t){var e=r.dc().$implicit;r.ic("innerHtml",e.content,r.pc)}}function y(t,n){if(1&t&&(r.Sb(0,"vcl-tab"),r.Sb(1,"vcl-label"),r.yc(2),r.Rb(),r.wc(3,d,2,1,"div",1),r.wc(4,h,3,1,"div",1),r.wc(5,p,1,1,"div",4),r.wc(6,v,1,1,"div",5),r.wc(7,m,1,1,"pre",4),r.Rb()),2&t){var e=n.$implicit;r.Ab(2),r.zc(e.name),r.Ab(1),r.ic("ngIf","component"===e.type),r.Ab(1),r.ic("ngIf","text"===e.type),r.Ab(1),r.ic("ngIf","html"===e.type),r.Ab(1),r.ic("ngIf","md"===e.type),r.Ab(1),r.ic("ngIf","pre"===e.type)}}function g(t,n){if(1&t&&(r.Sb(0,"div"),r.Sb(1,"vcl-tab-nav",2),r.wc(2,y,8,6,"vcl-tab",3),r.Rb(),r.Rb()),2&t){var e=r.dc();r.Ab(2),r.ic("ngForOf",e.tabs)}}var k,_,w=((_=function(){function t(n,e){_classCallCheck(this,t),this.activatedRoute=n,this.sanitizer=e,this.tabs=[]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this,n=this.activatedRoute.snapshot.data.demo();n?(this.title=n.label,this.tabs=n.tabs?Object.keys(n.tabs).map((function(e){var i,c;return"object"==typeof n.tabs[e]&&n.tabs[e]?c="pre"===(i=n.tabs[e].type)||"html"===i||"md"===i?t.sanitizer.bypassSecurityTrustHtml(n.tabs[e].content):n.tabs[e].content:"function"==typeof n.tabs[e]&&(i="component",c=new s.c(n.tabs[e])),{name:e,content:c,type:i}})):[]):(this.title="ng-vcl",this.tabs=[])}}]),t}()).\u0275fac=function(t){return new(t||_)(r.Mb(o.a),r.Mb(a.b))},_.\u0275cmp=r.Gb({type:_,selectors:[["ng-component"]],decls:3,vars:2,consts:[[1,"article-header"],[4,"ngIf"],["borders","true"],[4,"ngFor","ngForOf"],[3,"innerHtml",4,"ngIf"],["class","markdown-body",3,"innerHtml",4,"ngIf"],[3,"cdkPortalOutlet"],[3,"innerHtml"],[1,"markdown-body",3,"innerHtml"]],template:function(t,n){1&t&&(r.Sb(0,"h2",0),r.yc(1),r.Rb(),r.wc(2,g,3,1,"div",1)),2&t&&(r.Ab(1),r.Ac(" ",n.title,""),r.Ab(1),r.ic("ngIf",n.tabs.length>0))},directives:[i.t,u.a,i.s,l.a,f.a,s.b],encapsulation:2}),_),C=((k=function t(){_classCallCheck(this,t)}).\u0275mod=r.Kb({type:k}),k.\u0275inj=r.Jb({factory:function(t){return new(t||k)},imports:[[i.c,c.db,s.h]]}),k)},f0Vy:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return b}));var i=e("fXoL"),c=e("3Pt+"),s=e("19H1"),r=e("XNiG"),o=e("ofXK"),a=e("6B8K"),u=e("9Rb9"),l=0,f=function(){var t=function(){function t(n){_classCallCheck(this,t),this.injector=n,this._hostClasses=!0,this._stateChangedEmitter=new r.a,this._generatedId="vcl_file-input_"+l++,this._focused=!1,this._cvaDisabled=!1,this.stateChanged=this._stateChangedEmitter.asObservable(),this.controlType="counter",this.value=0,this.hasError=!1,this.onChange=function(){},this.onTouched=function(){}}return _createClass(t,[{key:"setErrorState",value:function(t){this.hasError=t}},{key:"onFocus",value:function(){this._focused=!0,this._stateChangedEmitter.next()}},{key:"onBlur",value:function(t){this._focused=!1,this._stateChangedEmitter.next(),t&&this.onTouched()}},{key:"increment",value:function(){"number"==typeof this.max&&this.value>=this.max||(this.value++,this.onChange(this.value))}},{key:"decrement",value:function(){"number"==typeof this.min&&this.value<=this.min||(this.value--,this.onChange(this.value),this.onTouched())}},{key:"writeValue",value:function(t){this.value=t}},{key:"registerOnChange",value:function(t){this.onChange=t}},{key:"registerOnTouched",value:function(t){this.onTouched=t}},{key:"setDisabledState",value:function(t){this._cvaDisabled=t}},{key:"ngControl",get:function(){return this.injector.get(c.q,null)}},{key:"elementId",get:function(){return this.id||this._generatedId}},{key:"isDisabled",get:function(){return this._cvaDisabled||this.disabled}},{key:"isFocused",get:function(){return this._focused}}]),t}();return t.\u0275fac=function(n){return new(n||t)(i.Mb(i.r))},t.\u0275cmp=i.Gb({type:t,selectors:[["demo-counter"]],hostVars:3,hostBindings:function(t,n){2&t&&(i.Bb("id",n.elementId),i.Db("error",n.hasError))},inputs:{id:"id",disabled:"disabled",min:"min",max:"max"},features:[i.zb([{provide:c.p,useExisting:Object(i.S)((function(){return t})),multi:!0},{provide:s.f,useExisting:Object(i.S)((function(){return t}))}])],decls:6,vars:1,consts:[["vcl-square-button","","type","button",1,"transparent",3,"click","keydown.enter","focus"],["icon","fas:minus"],["icon","fas:plus"]],template:function(t,n){1&t&&(i.Sb(0,"button",0),i.ac("click",(function(){return n.decrement()}))("keydown.enter",(function(t){return n.decrement(),t.preventDefault()}))("focus",(function(){return n.onFocus()}))("focus",(function(){return n.onBlur(!1)})),i.Nb(1,"vcl-icon",1),i.Rb(),i.Sb(2,"span"),i.yc(3),i.Rb(),i.Sb(4,"button",0),i.ac("click",(function(){return n.increment()}))("keydown.enter",(function(t){return n.increment(),t.preventDefault()}))("focus",(function(){return n.onFocus()}))("focus",(function(){return n.onBlur(!0)})),i.Nb(5,"vcl-icon",2),i.Rb()),2&t&&(i.Ab(3),i.zc(n.value))},directives:[a.b,u.a],styles:["[_nghost-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n    [_nghost-%COMP%]    > span[_ngcontent-%COMP%] {\n      font-size: 2em;\n      user-select: none;\n      padding-left: 0.2em;\n      padding-right: 0.2em;\n    }"]}),t}(),b=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(n){return new(n||t)},imports:[[o.c,c.m,c.B,s.M,s.A]]}),t}()}}]);