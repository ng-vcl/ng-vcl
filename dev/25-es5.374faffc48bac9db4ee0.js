(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{I9Sx:function(l,s,n){"use strict";n.d(s,"a",function(){return g});var e=n("mrSG"),t=n("CcnG"),a=n("Ip0R"),c=n("K9Ia"),u=n("p0ib"),i=n("GDxn"),p=n("ny24"),o=n("p0Sj"),r=n("15JJ"),b=n("YSh2"),h=n("4c35"),d=n("yTgr"),v=n("7qb7"),g=(n("rr8R"),n("gW3m"),function(l){function s(s,n,e,a,u,i){var p=l.call(this,s)||this;return p._dir=n,p.overlay=e,p.viewContainerRef=a,p.elementRef=u,p.cdRef=i,p.stateChangedEmitter=new c.a,p._focused=!1,p.attrRole="listbox",p._hostClasses=!0,p.tabindex=0,p.afterClose=new t.m,p.controlType="select",p.materialModifierClass=void 0,p}return e.d(s,l),Object.defineProperty(s.prototype,"stateChanged",{get:function(){return Object(u.a)(this.selectList.stateChanged,this.stateChangedEmitter)},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"isFocused",{get:function(){return this._focused||this.isAttached},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"isDisabled",{get:function(){return this.selectList.isDisabled},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"isLabelFloating",{get:function(){return this.isAttached||this.inputValue.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"elementId",{get:function(){return this.selectList.elementId},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"ngControl",{get:function(){return this.selectList.ngControl},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"value",{get:function(){return this.selectList.value},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"hasError",{get:function(){return this.selectList.hasError},enumerable:!0,configurable:!0}),s.prototype.onFocus=function(){this._focused=!0,this.isAttached||this.open(),this.stateChangedEmitter.next()},s.prototype.onBlur=function(){this._focused=!1,this.selectList.onTouched(),this.stateChangedEmitter.next()},s.prototype.onKeyUp=function(l){var s=l.keyCode;if(s===b.d)this.close(),this.elementRef.nativeElement.blur();else{if(s===b.f)return this.selectList&&this.selectList.highlightPrev(),l.preventDefault(),!1;if(s===b.b)return this.isAttached?this.selectList&&this.selectList.highlightNext():this.isAttached||this.open(),l.preventDefault(),!1}},s.prototype.onKeyDown=function(l){l.keyCode===b.e&&this.close()},s.prototype.onKeyPress=function(l){this.selectList&&"Enter"===(l.code||l.key)&&(l.preventDefault(),this.selectList.selectHighlighted())},Object.defineProperty(s.prototype,"inputValue",{get:function(){var l=this;if(!this.selectList)return"";if("single"===this.selectList.selectionMode){var s=this.selectList.getItems().find(function(s){return l.selectList.value===s.value});return s?s.label:this.placeholder||""}var n=Array.isArray(this.selectList.value)?this.selectList.value:[],e=this.selectList.getItems().filter(function(l){return n.includes(l.value)}).map(function(l){return l.label});return 0===e.length?"":e.join(", ")},enumerable:!0,configurable:!0}),s.prototype.createPortal=function(){return new h.f(this.templateRef,this.viewContainerRef)},s.prototype.onClick=function(){this.isAttached?this.close():this.open()},s.prototype.getLayerConfig=function(){return new v.b({closeOnEscape:!0,hasBackdrop:!1,scrollStrategy:this.overlay.scrollStrategies.reposition({autoClose:!0}),direction:this._dir,width:void 0!==this.width?this.width:this.elementRef.nativeElement.getBoundingClientRect().width,height:this.height,maxHeight:this.maxHeight||"20em",panelClass:[],positionStrategy:this.overlay.position().flexibleConnectedTo(this.elementRef).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}]).withPush(!1)})},s.prototype.onLabelClick=function(l){this.isAttached||this.open()},s.prototype.ngAfterContentInit=function(){var l=this;this._valueChangeSub=this.selectList.valueChange.subscribe(function(){l.cdRef.markForCheck(),l.stateChangedEmitter.next()})},s.prototype.afterAttached=function(){var l=this;this.selectList.valueChange.pipe(Object(p.a)(this.afterClose)).subscribe(function(s){l.isAttached&&("single"===l.selectList.selectionMode?l.close(s):l.cdRef.markForCheck(),l.stateChangedEmitter.next()),l.cdRef.markForCheck()}),this.stateChangedEmitter.next(),this._dropdownOpenedSub=this.selectList.itemsChange.pipe(Object(o.a)(void 0),Object(r.a)(function(){return l.isAttached?Object(d.b)([l.overlayRef.overlayElement,l.elementRef.nativeElement],{document:l.injector.get(a.d)}):i.a})).subscribe(function(){l.close(),l.stateChangedEmitter.next()})},s.prototype.afterDetached=function(l){this._dropdownOpenedSub&&this._dropdownOpenedSub.unsubscribe(),this.selectList.highlight(void 0),this.afterClose.emit(this.selectList.value),this.cdRef.markForCheck(),this.cdRef.detectChanges()},s.prototype.ngOnDestroy=function(){this._valueChangeSub&&this._valueChangeSub.unsubscribe(),this.destroy()},s}(v.d))},OpJw:function(l,s){l.exports='<h1 id="vcl-select">vcl-select</h1>\n<p>A select control. Utilizes the select-list to render a list of selectable items in a dropdown.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-select</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot; -&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>[Clear selection]<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Item 3<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-select-attributes">vcl-select attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any | any[]</td>\n<td></td>\n<td>value(s) of the selected option(s)</td>\n</tr>\n<tr>\n<td><code>placeholder</code></td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>selectionMode</code></td>\n<td>&quot;single&quot; | &quot;multiple&quot;</td>\n<td>&quot;single&quot;</td>\n<td></td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the select</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disabled the control when true</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-select-events">vcl-select events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any | any[]</td>\n<td>emits the new value when the selected options change</td>\n</tr>\n</tbody></table>\n'},Oze5:function(l,s,n){"use strict";n.r(s);var e=n("CcnG"),t=function(){return function(){this.value1=void 0,this.value2=[],this.items=Array.from(Array(30).keys()).map(function(l){return{label:"item "+(l+1),value:l+1}})}}(),a={demo:function(){return{label:"Select",tabs:{Demo:t,"README.md":{type:"md",content:n("OpJw")},"demo.component.html":{type:"pre",content:n("XQVd")},"demo.component.ts":{type:"pre",content:n("WM4m")}}}}},c=function(){return function(){}}(),u=n("pMnS"),i=n("8Ip6"),p=n("kf/9"),o=n("StUX"),r=n("twzc"),b=n("q3qj"),h=n("2JrD"),d=n("I9Sx"),v=n("pIVY"),g=n("Fzqc"),m=n("eDkP"),j=n("t1Fl"),f=n("zDo1"),F=n("gIcY"),y=n("YUBC"),C=n("gCzt"),k=n("Ip0R"),D=e.rb({encapsulation:2,styles:[],data:{}});function w(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,6,"vcl-select-list-item",[],[[2,"vclDropdownItem",null],[1,"role",0],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclHighlighted",null],[2,"vclSelected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],function(l,s,n){var t=!0;return"click"===s&&(t=!1!==e.Fb(l,1).onClick()&&t),"focus"===s&&(t=!1!==e.Fb(l,1).onFocus()&&t),"blur"===s&&(t=!1!==e.Fb(l,1).onBlur()&&t),"keypress"===s&&(t=!1!==e.Fb(l,1).onKeypress(n)&&t),t},p.d,p.a)),e.sb(1,49152,[[13,4]],1,o.a,[r.b,e.k],{value:[0,"value"]},null),e.Kb(603979776,15,{_labelElementRef:0}),e.Jb(2048,[[14,4]],r.a,null,[o.a]),(l()(),e.tb(4,0,[[15,0]],1,2,"vcl-select-list-label",[],[[2,"vclDropdownItemLabel",null]],null,null,p.e,p.b)),e.sb(5,49152,null,0,o.b,[],null,null),(l()(),e.Mb(6,0,["",""]))],function(l,s){l(s,1,0,s.context.$implicit.value)},function(l,s){l(s,0,0,e.Fb(s,1)._hostClasses,e.Fb(s,1).attrRole,e.Fb(s,1).attrTabindex,e.Fb(s,1).isDisabled,e.Fb(s,1).isHighlighted,e.Fb(s,1).isSelected),l(s,4,0,e.Fb(s,5)._hostClasses),l(s,6,0,s.context.$implicit.label)})}function _(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["single-select"])),(l()(),e.tb(2,16777216,null,null,77,"vcl-select",[],[[1,"role",0],[2,"vclSelect",null],[2,"vclInputGroupEmb",null],[1,"tabindex",0],[2,"vclError",null]],[[null,"focus"],[null,"blur"],[null,"keyup"],[null,"keydown"],[null,"keypress"],[null,"click"]],function(l,s,n){var t=!0;return"focus"===s&&(t=!1!==e.Fb(l,5).onFocus()&&t),"blur"===s&&(t=!1!==e.Fb(l,5).onBlur()&&t),"keyup"===s&&(t=!1!==e.Fb(l,5).onKeyUp(n)&&t),"keydown"===s&&(t=!1!==e.Fb(l,5).onKeyDown(n)&&t),"keypress"===s&&(t=!1!==e.Fb(l,5).onKeyPress(n)&&t),"click"===s&&(t=!1!==e.Fb(l,5).onClick()&&t),t},b.b,b.a)),e.Jb(6144,null,h.c,null,[d.a]),e.Jb(6144,null,v.b,null,[d.a]),e.sb(5,1228800,null,1,d.a,[e.r,g.b,m.a,e.P,e.k,e.h],null,null),e.Kb(603979776,1,{selectList:0}),(l()(),e.tb(7,0,null,0,72,"vcl-select-list",[],[[1,"id",0],[2,"vclDropdown",null],[2,"vclOpen",null],[2,"vclError",null]],[[null,"valueChange"]],function(l,s,n){var e=!0;return"valueChange"===s&&(e=!1!==(l.component.value1=n)&&e),e},j.b,j.a)),e.Jb(6144,null,h.c,null,[f.a]),e.sb(9,1228800,[[1,4]],2,f.a,[e.h,[2,F.n],[2,h.b],[2,h.a]],{value:[0,"value"]},{valueChange:"valueChange"}),e.Kb(603979776,2,{_items:1}),e.Kb(603979776,3,{_content:1}),e.Jb(2048,null,r.b,null,[f.a]),(l()(),e.tb(13,0,null,0,6,"vcl-select-list-item",[["label"," - "]],[[2,"vclDropdownItem",null],[1,"role",0],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclHighlighted",null],[2,"vclSelected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],function(l,s,n){var t=!0;return"click"===s&&(t=!1!==e.Fb(l,14).onClick()&&t),"focus"===s&&(t=!1!==e.Fb(l,14).onFocus()&&t),"blur"===s&&(t=!1!==e.Fb(l,14).onBlur()&&t),"keypress"===s&&(t=!1!==e.Fb(l,14).onKeypress(n)&&t),t},p.d,p.a)),e.sb(14,49152,[[2,4]],1,o.a,[r.b,e.k],{_label:[0,"_label"]},null),e.Kb(603979776,4,{_labelElementRef:0}),e.Jb(2048,[[3,4]],r.a,null,[o.a]),(l()(),e.tb(17,0,[[4,0]],1,2,"vcl-select-list-label",[],[[2,"vclDropdownItemLabel",null]],null,null,p.e,p.b)),e.sb(18,49152,null,0,o.b,[],null,null),(l()(),e.Mb(-1,0,["None"])),(l()(),e.tb(20,0,null,0,3,"vcl-select-list-header",[],[[2,"vclDropdownItemGroupHeader",null]],null,null,y.b,y.a)),e.sb(21,49152,null,0,C.a,[],null,null),e.Jb(2048,[[3,4]],r.a,null,[C.a]),(l()(),e.Mb(-1,0,["Europe"])),(l()(),e.tb(24,0,null,0,9,"vcl-select-list-item",[["value","gr"]],[[2,"vclDropdownItem",null],[1,"role",0],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclHighlighted",null],[2,"vclSelected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],function(l,s,n){var t=!0;return"click"===s&&(t=!1!==e.Fb(l,25).onClick()&&t),"focus"===s&&(t=!1!==e.Fb(l,25).onFocus()&&t),"blur"===s&&(t=!1!==e.Fb(l,25).onBlur()&&t),"keypress"===s&&(t=!1!==e.Fb(l,25).onKeypress(n)&&t),t},p.d,p.a)),e.sb(25,49152,[[2,4]],1,o.a,[r.b,e.k],{value:[0,"value"]},null),e.Kb(603979776,5,{_labelElementRef:0}),e.Jb(2048,[[3,4]],r.a,null,[o.a]),(l()(),e.tb(28,0,[[5,0]],1,2,"vcl-select-list-label",[],[[2,"vclDropdownItemLabel",null]],null,null,p.e,p.b)),e.sb(29,49152,null,0,o.b,[],null,null),(l()(),e.Mb(-1,0,["Greece"])),(l()(),e.tb(31,0,null,2,2,"vcl-select-list-sublabel",[],[[2,"vclDropdownItemSubLabel",null]],null,null,p.f,p.c)),e.sb(32,49152,null,0,o.c,[],null,null),(l()(),e.Mb(-1,0,["A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"])),(l()(),e.tb(34,0,null,0,6,"vcl-select-list-item",[["value","fr"]],[[2,"vclDropdownItem",null],[1,"role",0],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclHighlighted",null],[2,"vclSelected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],function(l,s,n){var t=!0;return"click"===s&&(t=!1!==e.Fb(l,35).onClick()&&t),"focus"===s&&(t=!1!==e.Fb(l,35).onFocus()&&t),"blur"===s&&(t=!1!==e.Fb(l,35).onBlur()&&t),"keypress"===s&&(t=!1!==e.Fb(l,35).onKeypress(n)&&t),t},p.d,p.a)),e.sb(35,49152,[[2,4]],1,o.a,[r.b,e.k],{value:[0,"value"]},null),e.Kb(603979776,6,{_labelElementRef:0}),e.Jb(2048,[[3,4]],r.a,null,[o.a]),(l()(),e.tb(38,0,[[6,0]],1,2,"vcl-select-list-label",[],[[2,"vclDropdownItemLabel",null]],null,null,p.e,p.b)),e.sb(39,49152,null,0,o.b,[],null,null),(l()(),e.Mb(-1,0,["France"])),(l()(),e.tb(41,0,null,0,6,"vcl-select-list-item",[["value","de"]],[[2,"vclDropdownItem",null],[1,"role",0],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclHighlighted",null],[2,"vclSelected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],function(l,s,n){var t=!0;return"click"===s&&(t=!1!==e.Fb(l,42).onClick()&&t),"focus"===s&&(t=!1!==e.Fb(l,42).onFocus()&&t),"blur"===s&&(t=!1!==e.Fb(l,42).onBlur()&&t),"keypress"===s&&(t=!1!==e.Fb(l,42).onKeypress(n)&&t),t},p.d,p.a)),e.sb(42,49152,[[2,4]],1,o.a,[r.b,e.k],{value:[0,"value"]},null),e.Kb(603979776,7,{_labelElementRef:0}),e.Jb(2048,[[3,4]],r.a,null,[o.a]),(l()(),e.tb(45,0,[[7,0]],1,2,"vcl-select-list-label",[],[[2,"vclDropdownItemLabel",null]],null,null,p.e,p.b)),e.sb(46,49152,null,0,o.b,[],null,null),(l()(),e.Mb(-1,0,["Germany"])),(l()(),e.tb(48,0,null,0,6,"vcl-select-list-item",[["label","United Kingdom"],["value","gb"]],[[2,"vclDropdownItem",null],[1,"role",0],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclHighlighted",null],[2,"vclSelected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],function(l,s,n){var t=!0;return"click"===s&&(t=!1!==e.Fb(l,49).onClick()&&t),"focus"===s&&(t=!1!==e.Fb(l,49).onFocus()&&t),"blur"===s&&(t=!1!==e.Fb(l,49).onBlur()&&t),"keypress"===s&&(t=!1!==e.Fb(l,49).onKeypress(n)&&t),t},p.d,p.a)),e.sb(49,49152,[[2,4]],1,o.a,[r.b,e.k],{value:[0,"value"],_label:[1,"_label"]},null),e.Kb(603979776,8,{_labelElementRef:0}),e.Jb(2048,[[3,4]],r.a,null,[o.a]),(l()(),e.tb(52,0,[[8,0]],1,2,"vcl-select-list-label",[],[[2,"vclDropdownItemLabel",null]],null,null,p.e,p.b)),e.sb(53,49152,null,0,o.b,[],null,null),(l()(),e.Mb(-1,0,["The United Kingdom of Great Britain and Northern Ireland"])),(l()(),e.tb(55,0,null,0,3,"vcl-select-list-header",[],[[2,"vclDropdownItemGroupHeader",null]],null,null,y.b,y.a)),e.sb(56,49152,null,0,C.a,[],null,null),e.Jb(2048,[[3,4]],r.a,null,[C.a]),(l()(),e.Mb(-1,0,["Asia"])),(l()(),e.tb(59,0,null,0,6,"vcl-select-list-item",[["value","jp"]],[[2,"vclDropdownItem",null],[1,"role",0],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclHighlighted",null],[2,"vclSelected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],function(l,s,n){var t=!0;return"click"===s&&(t=!1!==e.Fb(l,60).onClick()&&t),"focus"===s&&(t=!1!==e.Fb(l,60).onFocus()&&t),"blur"===s&&(t=!1!==e.Fb(l,60).onBlur()&&t),"keypress"===s&&(t=!1!==e.Fb(l,60).onKeypress(n)&&t),t},p.d,p.a)),e.sb(60,49152,[[2,4]],1,o.a,[r.b,e.k],{value:[0,"value"]},null),e.Kb(603979776,9,{_labelElementRef:0}),e.Jb(2048,[[3,4]],r.a,null,[o.a]),(l()(),e.tb(63,0,[[9,0]],1,2,"vcl-select-list-label",[],[[2,"vclDropdownItemLabel",null]],null,null,p.e,p.b)),e.sb(64,49152,null,0,o.b,[],null,null),(l()(),e.Mb(-1,0,["Japan"])),(l()(),e.tb(66,0,null,0,6,"vcl-select-list-item",[["value","cn"]],[[2,"vclDropdownItem",null],[1,"role",0],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclHighlighted",null],[2,"vclSelected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],function(l,s,n){var t=!0;return"click"===s&&(t=!1!==e.Fb(l,67).onClick()&&t),"focus"===s&&(t=!1!==e.Fb(l,67).onFocus()&&t),"blur"===s&&(t=!1!==e.Fb(l,67).onBlur()&&t),"keypress"===s&&(t=!1!==e.Fb(l,67).onKeypress(n)&&t),t},p.d,p.a)),e.sb(67,49152,[[2,4]],1,o.a,[r.b,e.k],{value:[0,"value"]},null),e.Kb(603979776,10,{_labelElementRef:0}),e.Jb(2048,[[3,4]],r.a,null,[o.a]),(l()(),e.tb(70,0,[[10,0]],1,2,"vcl-select-list-label",[],[[2,"vclDropdownItemLabel",null]],null,null,p.e,p.b)),e.sb(71,49152,null,0,o.b,[],null,null),(l()(),e.Mb(-1,0,["China"])),(l()(),e.tb(73,0,null,0,6,"vcl-select-list-item",[["value","th"]],[[2,"vclDropdownItem",null],[1,"role",0],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclHighlighted",null],[2,"vclSelected",null]],[[null,"click"],[null,"focus"],[null,"blur"],[null,"keypress"]],function(l,s,n){var t=!0;return"click"===s&&(t=!1!==e.Fb(l,74).onClick()&&t),"focus"===s&&(t=!1!==e.Fb(l,74).onFocus()&&t),"blur"===s&&(t=!1!==e.Fb(l,74).onBlur()&&t),"keypress"===s&&(t=!1!==e.Fb(l,74).onKeypress(n)&&t),t},p.d,p.a)),e.sb(74,49152,[[2,4]],1,o.a,[r.b,e.k],{value:[0,"value"]},null),e.Kb(603979776,11,{_labelElementRef:0}),e.Jb(2048,[[3,4]],r.a,null,[o.a]),(l()(),e.tb(77,0,[[11,0]],1,2,"vcl-select-list-label",[],[[2,"vclDropdownItemLabel",null]],null,null,p.e,p.b)),e.sb(78,49152,null,0,o.b,[],null,null),(l()(),e.Mb(-1,0,["Thailand"])),(l()(),e.tb(80,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Mb(81,null,[" Selected value: ",""])),(l()(),e.tb(82,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.tb(83,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["multi-select"])),(l()(),e.tb(85,16777216,null,null,12,"vcl-select",[["placeholder","Select items"]],[[1,"role",0],[2,"vclSelect",null],[2,"vclInputGroupEmb",null],[1,"tabindex",0],[2,"vclError",null]],[[null,"focus"],[null,"blur"],[null,"keyup"],[null,"keydown"],[null,"keypress"],[null,"click"]],function(l,s,n){var t=!0;return"focus"===s&&(t=!1!==e.Fb(l,88).onFocus()&&t),"blur"===s&&(t=!1!==e.Fb(l,88).onBlur()&&t),"keyup"===s&&(t=!1!==e.Fb(l,88).onKeyUp(n)&&t),"keydown"===s&&(t=!1!==e.Fb(l,88).onKeyDown(n)&&t),"keypress"===s&&(t=!1!==e.Fb(l,88).onKeyPress(n)&&t),"click"===s&&(t=!1!==e.Fb(l,88).onClick()&&t),t},b.b,b.a)),e.Jb(6144,null,h.c,null,[d.a]),e.Jb(6144,null,v.b,null,[d.a]),e.sb(88,1228800,null,1,d.a,[e.r,g.b,m.a,e.P,e.k,e.h],{placeholder:[0,"placeholder"]},null),e.Kb(603979776,12,{selectList:0}),(l()(),e.tb(90,0,null,0,7,"vcl-select-list",[["selectionMode","multiple"]],[[1,"id",0],[2,"vclDropdown",null],[2,"vclOpen",null],[2,"vclError",null]],[[null,"valueChange"]],function(l,s,n){var e=!0;return"valueChange"===s&&(e=!1!==(l.component.value2=n)&&e),e},j.b,j.a)),e.Jb(6144,null,r.b,null,[f.a]),e.Jb(6144,null,h.c,null,[f.a]),e.sb(93,1228800,[[12,4]],2,f.a,[e.h,[2,F.n],[2,h.b],[2,h.a]],{selectionMode:[0,"selectionMode"],value:[1,"value"]},{valueChange:"valueChange"}),e.Kb(603979776,13,{_items:1}),e.Kb(603979776,14,{_content:1}),(l()(),e.ib(16777216,null,0,1,null,w)),e.sb(97,278528,null,0,k.k,[e.P,e.M,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(98,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Mb(99,null,[" Selected values: ",""]))],function(l,s){var n=s.component;l(s,9,0,n.value1),l(s,14,0," - "),l(s,25,0,"gr"),l(s,35,0,"fr"),l(s,42,0,"de"),l(s,49,0,"gb","United Kingdom"),l(s,60,0,"jp"),l(s,67,0,"cn"),l(s,74,0,"th"),l(s,88,0,"Select items"),l(s,93,0,"multiple",n.value2),l(s,97,0,n.items)},function(l,s){var n=s.component;l(s,2,0,e.Fb(s,5).attrRole,e.Fb(s,5)._hostClasses,e.Fb(s,5)._hostClasses,e.Fb(s,5).tabindex,e.Fb(s,5).hasError),l(s,7,0,e.Fb(s,9).elementId,e.Fb(s,9)._hostClasses,e.Fb(s,9)._hostClasses,e.Fb(s,9).hasError),l(s,13,0,e.Fb(s,14)._hostClasses,e.Fb(s,14).attrRole,e.Fb(s,14).attrTabindex,e.Fb(s,14).isDisabled,e.Fb(s,14).isHighlighted,e.Fb(s,14).isSelected),l(s,17,0,e.Fb(s,18)._hostClasses),l(s,20,0,e.Fb(s,21).classVCLDropdownItemGroupHeader),l(s,24,0,e.Fb(s,25)._hostClasses,e.Fb(s,25).attrRole,e.Fb(s,25).attrTabindex,e.Fb(s,25).isDisabled,e.Fb(s,25).isHighlighted,e.Fb(s,25).isSelected),l(s,28,0,e.Fb(s,29)._hostClasses),l(s,31,0,e.Fb(s,32)._hostClasses),l(s,34,0,e.Fb(s,35)._hostClasses,e.Fb(s,35).attrRole,e.Fb(s,35).attrTabindex,e.Fb(s,35).isDisabled,e.Fb(s,35).isHighlighted,e.Fb(s,35).isSelected),l(s,38,0,e.Fb(s,39)._hostClasses),l(s,41,0,e.Fb(s,42)._hostClasses,e.Fb(s,42).attrRole,e.Fb(s,42).attrTabindex,e.Fb(s,42).isDisabled,e.Fb(s,42).isHighlighted,e.Fb(s,42).isSelected),l(s,45,0,e.Fb(s,46)._hostClasses),l(s,48,0,e.Fb(s,49)._hostClasses,e.Fb(s,49).attrRole,e.Fb(s,49).attrTabindex,e.Fb(s,49).isDisabled,e.Fb(s,49).isHighlighted,e.Fb(s,49).isSelected),l(s,52,0,e.Fb(s,53)._hostClasses),l(s,55,0,e.Fb(s,56).classVCLDropdownItemGroupHeader),l(s,59,0,e.Fb(s,60)._hostClasses,e.Fb(s,60).attrRole,e.Fb(s,60).attrTabindex,e.Fb(s,60).isDisabled,e.Fb(s,60).isHighlighted,e.Fb(s,60).isSelected),l(s,63,0,e.Fb(s,64)._hostClasses),l(s,66,0,e.Fb(s,67)._hostClasses,e.Fb(s,67).attrRole,e.Fb(s,67).attrTabindex,e.Fb(s,67).isDisabled,e.Fb(s,67).isHighlighted,e.Fb(s,67).isSelected),l(s,70,0,e.Fb(s,71)._hostClasses),l(s,73,0,e.Fb(s,74)._hostClasses,e.Fb(s,74).attrRole,e.Fb(s,74).attrTabindex,e.Fb(s,74).isDisabled,e.Fb(s,74).isHighlighted,e.Fb(s,74).isSelected),l(s,77,0,e.Fb(s,78)._hostClasses),l(s,81,0,n.value1),l(s,85,0,e.Fb(s,88).attrRole,e.Fb(s,88)._hostClasses,e.Fb(s,88)._hostClasses,e.Fb(s,88).tabindex,e.Fb(s,88).hasError),l(s,90,0,e.Fb(s,93).elementId,e.Fb(s,93)._hostClasses,e.Fb(s,93)._hostClasses,e.Fb(s,93).hasError),l(s,99,0,n.value2)})}function I(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,1,"ng-component",[],null,null,null,_,D)),e.sb(1,49152,null,0,t,[],null,null)],null,null)}var S=e.pb("ng-component",t,I,{},{},[]),x=n("M2Lx"),E=n("dy60"),L=n("tfYh"),R=n("4c35"),K=n("p/eS"),O=n("2FIb"),A=n("dWZg"),M=n("qAlS"),J=n("hUuX"),q=n("61Fc"),H=n("g2Nb"),P=n("hyVG"),G=n("rr8R"),T=n("iA4x"),B=n("ZYCi"),U=n("PNUx");n.d(s,"SelectDemoModuleNgFactory",function(){return Y});var Y=e.qb(c,[],function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[u.a,i.a,S]],[3,e.j],e.y]),e.Db(4608,k.n,k.m,[e.v,[2,k.A]]),e.Db(4608,F.v,F.v,[]),e.Db(4608,x.a,x.a,[]),e.Db(4608,m.a,m.a,[m.h,m.c,e.j,m.f,m.d,e.r,e.A,k.d,g.b,[2,k.h]]),e.Db(5120,m.i,m.j,[m.a]),e.Db(4608,E.a,E.a,[[2,L.a]]),e.Db(1073742336,k.c,k.c,[]),e.Db(1073742336,F.u,F.u,[]),e.Db(1073742336,F.l,F.l,[]),e.Db(1073742336,R.e,R.e,[]),e.Db(1073742336,x.b,x.b,[]),e.Db(1073742336,K.a,K.a,[]),e.Db(1073742336,O.a,O.a,[]),e.Db(1073742336,g.a,g.a,[]),e.Db(1073742336,A.b,A.b,[]),e.Db(1073742336,M.c,M.c,[]),e.Db(1073742336,m.e,m.e,[]),e.Db(1073742336,J.b,J.b,[]),e.Db(1073742336,q.c,q.c,[]),e.Db(1073742336,H.a,H.a,[]),e.Db(1073742336,P.a,P.a,[]),e.Db(1073742336,G.a,G.a,[]),e.Db(1073742336,T.a,T.a,[]),e.Db(1073742336,B.q,B.q,[[2,B.v],[2,B.m]]),e.Db(1073742336,c,c,[]),e.Db(1024,B.i,function(){return[[{path:"",component:U.a,data:a}]]},[])])})},WM4m:function(l,s){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> SelectDemoComponent {\n\n  value1 = <span class="hljs-literal">undefined</span>;\n  value2 = [];\n\n  items = <span class="hljs-built_in">Array</span>.from(<span class="hljs-built_in">Array</span>(<span class="hljs-number">30</span>).keys()).map(<span class="hljs-function"><span class="hljs-params">i</span> =&gt;</span> ({\n    label: <span class="hljs-string">\'item \'</span> + (i + <span class="hljs-number">1</span>),\n    value: i + <span class="hljs-number">1</span>\n  }));\n\n}\n'},XQVd:function(l,s){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single-select<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-select</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">" - "</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>None<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Europe<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gr"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Greece<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"fr"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>France<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"de"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Germany<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gb"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"United Kingdom"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>The United Kingdom of Great Britain and Northern Ireland<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Asia<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"jp"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Japan<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"cn"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>China<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"th"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Thailand<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Selected value: {{value1}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>multi-select<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Select items"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value2"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"multiple"</span> &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>{{item.label}}<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Selected values: {{value2}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n'},iA4x:function(l,s,n){"use strict";n.d(s,"a",function(){return e}),n("I9Sx");var e=function(){return function(){}}()},"kf/9":function(l,s,n){"use strict";n.d(s,"b",function(){return t}),n.d(s,"e",function(){return a}),n.d(s,"c",function(){return c}),n.d(s,"f",function(){return u}),n.d(s,"a",function(){return i}),n.d(s,"d",function(){return p});var e=n("CcnG"),t=(n("StUX"),n("twzc"),e.rb({encapsulation:2,styles:[],data:{}}));function a(l){return e.Ob(0,[e.Eb(null,0)],null,null)}var c=e.rb({encapsulation:2,styles:[],data:{}});function u(l){return e.Ob(0,[e.Eb(null,0)],null,null)}var i=e.rb({encapsulation:2,styles:[],data:{}});function p(l){return e.Ob(2,[e.Eb(null,0),e.Eb(null,1),e.Eb(null,2)],null,null)}},q3qj:function(l,s,n){"use strict";n.d(s,"a",function(){return o}),n.d(s,"b",function(){return b});var e=n("CcnG"),t=n("slit"),a=n("6B8K"),c=n("b1Eb"),u=n("X5GH"),i=n("dy60"),p=n("9Rb9"),o=(n("2JrD"),n("I9Sx"),n("pIVY"),n("Fzqc"),n("eDkP"),e.rb({encapsulation:2,styles:[],data:{}}));function r(l){return e.Ob(0,[(l()(),e.tb(0,0,null,null,1,"div",[["style","width: 100%"]],null,null,null,null,null)),e.Eb(null,0)],null,null)}function b(l){return e.Ob(2,[e.Kb(402653184,1,{input:0}),e.Kb(402653184,2,{button:0}),e.Kb(402653184,3,{templateRef:0}),(l()(),e.tb(3,0,[[1,0],["input",1]],null,0,"input",[["class","vclInput vclAppItem vclReadonly"],["readonly",""],["role","listbox"]],[[8,"placeholder",0],[8,"value",0],[1,"tabindex",0],[8,"disabled",0],[2,"vclDisabled",null]],null,null,null,null)),(l()(),e.tb(4,0,[[2,0]],null,4,"button",[["class","vclAppended"],["tabindex","-1"],["type","button"],["vcl-square-button",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"],[null,"focus"],[null,"blur"]],function(l,s,n){var t=!0;return"mouseenter"===s&&(t=!1!==e.Fb(l,5).onMouseEnter()&&t),"mouseleave"===s&&(t=!1!==e.Fb(l,5).onMouseLeave()&&t),"click"===s&&(t=!1!==e.Fb(l,5).onClick()&&t),"focus"===s&&(t=!1!==e.Fb(l,5).onFocus()&&t),"blur"===s&&(t=!1!==e.Fb(l,5).onBlur()&&t),t},t.b,t.a)),e.sb(5,49152,[["btn",4]],0,a.b,[e.h,e.k,[3,a.a]],{disabled:[0,"disabled"],type:[1,"type"]},null),(l()(),e.tb(6,0,null,0,2,"vcl-icon",[["icon","vcl:arrow-down"]],[[2,"vclIcon",null],[1,"role",0]],null,null,c.b,c.a)),e.Jb(512,null,u.a,u.a,[e.E,i.a]),e.sb(8,4767744,null,0,p.a,[u.a,e.k],{icon:[0,"icon"]},null),(l()(),e.ib(0,[[3,2]],null,0,null,r))],function(l,s){l(s,5,0,s.component.isDisabled,"button"),l(s,8,0,"vcl:arrow-down")},function(l,s){var n=s.component;l(s,3,0,n.placeholder||"",n.inputValue,-1,n.isDisabled,n.isDisabled),l(s,4,0,e.Fb(s,5).classVCLSquare,e.Fb(s,5).attrType,e.Fb(s,5).isDisabled,e.Fb(s,5).isDisabled,e.Fb(s,5)._hostClasses,e.Fb(s,5).hovered,e.Fb(s,5).selectable,e.Fb(s,5).selected),l(s,6,0,e.Fb(s,8).vclIcon,e.Fb(s,8).attrRole)})}},t1Fl:function(l,s,n){"use strict";n.d(s,"a",function(){return t}),n.d(s,"b",function(){return a});var e=n("CcnG"),t=(n("twzc"),n("zDo1"),n("2JrD"),n("gIcY"),e.rb({encapsulation:2,styles:[],data:{}}));function a(l){return e.Ob(0,[e.Eb(null,0)],null,null)}}}]);