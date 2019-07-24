(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1/Kn":function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return r});var s=e("CcnG"),l=e("K9Ia"),a=(e("mbT9"),e("gW3m"),new s.q("vcl_input_host")),o=0,r=function(){function n(n,t,e,s,a){this.elementRef=n,this.ngControl=t,this.formControlHost=e,this._errorStateAgent=s,this.inputHost=a,this.uniqueId="vcl_input_"+o++,this._disabled=!1,this._focused=!1,this.stateChangedEmitter=new l.a,this.stateChanged=this.stateChangedEmitter.asObservable(),this.controlType="input",this.materialModifierClass=void 0,this.disabled=!1,this.autoselect=!1,this.classVclInput=!0}return Object.defineProperty(n.prototype,"elementId",{get:function(){return this.id||this.uniqueId},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isFocused",{get:function(){return this._focused},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isLabelFloating",{get:function(){return this.isFocused||this.value.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.disabled||this._disabled||this.inputHost&&this.inputHost.isDisabled},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasError",{get:function(){var n=this.errorStateAgent||this._errorStateAgent;return!!n&&n(this.formControlHost,this)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrDisabled",{get:function(){return!!this.isDisabled||null},enumerable:!0,configurable:!0}),n.prototype.focus=function(){this.elementRef.nativeElement.focus()},n.prototype.onFocus=function(){this._focused=!0,this.autoselect&&this.elementRef.nativeElement.select(),this.inputHost&&this.inputHost.notifyInputFocus(this),this.stateChangedEmitter.next()},n.prototype.onBlur=function(){this._focused=!1,this.inputHost&&this.inputHost.notifyInputBlur(this),this.stateChangedEmitter.next()},n.prototype.onLabelClick=function(n){this.elementRef.nativeElement.focus()},Object.defineProperty(n.prototype,"value",{get:function(){return this.elementRef.nativeElement.value||""},enumerable:!0,configurable:!0}),n.prototype.ngOnDestroy=function(){this.stateChangedEmitter&&this.stateChangedEmitter.complete()},n.prototype.getError=function(n){return this.hasError&&this.ngControl.getError(n)},n.prototype.onInput=function(){this.stateChangedEmitter.next()},n}()},"2JrD":function(n,t,e){"use strict";e.d(t,"b",function(){return l}),e.d(t,"a",function(){return a}),e.d(t,"c",function(){return o});var s=e("CcnG"),l=new s.q("vcl-form-control-host"),a=new s.q("vcl-form-control-error-state-agent"),o=new s.q("vcl-form-control-input")},DD28:function(n,t,e){"use strict";e.d(t,"a",function(){return s}),e("sM5x"),e("tMsr"),e("nhKh");var s=function(){return function(){}}()},KBb2:function(n,t){n.exports='<h1 id="vcl-token">vcl-token</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLTokenModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLTokenModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<h2 id="single-token">single token</h2>\n<pre class="hljs"><code>&lt;vcl-token&gt;mytoken&lt;/vcl-token&gt;</code></pre>\n<h2 id="single-selected-token">single selected token</h2>\n<pre class="hljs"><code>&lt;vcl-token [selected]=&quot;true&quot;&gt;mytoken&lt;/vcl-token&gt;</code></pre>\n<h2 id="single-removable-token">single removable token</h2>\n<pre class="hljs"><code>&lt;vcl-token [removable]=&quot;true&quot; (remove)=&quot;onRemove()&quot;&gt;mytoken&lt;/vcl-token&gt;</code></pre>\n<h2 id="token-list">token-list</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">&quot;true&quot;</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;changed($event);&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>mytoken 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>mytoken 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span></pre>\n<h2 id="token-input">token-input</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">&quot;changed($event);&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-token-attributes">vcl-token attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>token value</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the token is highlighted</td>\n</tr>\n<tr>\n<td><code>removable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the remove-cross is shown</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-token-events">vcl-token events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>remove</code></td>\n<td></td>\n<td>called when the remove-button is pressed</td>\n</tr>\n</tbody></table>\n<h4 id="token-list-attributes">token-list attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any[]</td>\n<td>any[]</td>\n<td>The values of the selected tokens</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selectable if true</td>\n</tr>\n</tbody></table>\n<h4 id="token-list-events">token-list events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>tokensChange</code></td>\n<td>string[]</td>\n<td>called when the selection of token changes</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-token-input-attributes">vcl-token-input attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>Token[]</td>\n<td>[]</td>\n<td>List of tokens</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selectable if true</td>\n</tr>\n<tr>\n<td><code>allowDuplicates</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens with matching values are not added</td>\n</tr>\n<tr>\n<td><code>addOnEnter</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>New token will be added when pressing enter</td>\n</tr>\n<tr>\n<td><code>preselect</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>tokens are preselected after being added if true</td>\n</tr>\n<tr>\n<td><code>tokenClass</code></td>\n<td>string</td>\n<td></td>\n<td>additional css class for tokens</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the token-input</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-token-input-events">vcl-token-input events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>Token[]</td>\n<td>called after tokens are added/removed or the selection of token changes</td>\n</tr>\n<tr>\n<td><code>confirm</code></td>\n<td>Token[]</td>\n<td>called after <code>enter</code> is pressed when input element is empty</td>\n</tr>\n</tbody></table>\n<h4 id="interfaces">interfaces</h4>\n<pre class="hljs"><span class="hljs-keyword">interface</span> Token {\n  label: <span class="hljs-built_in">string</span>;\n  value: <span class="hljs-built_in">any</span>;\n  selected?: <span class="hljs-built_in">boolean</span>;\n}</pre>\n'},XIT8:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var s=e("mrSG"),l=function(n){function t(){return n.call(this)||this}return s.d(t,n),Object.defineProperty(t.prototype,"vclMaterial",{set:function(n){this.setMode(n)},enumerable:!0,configurable:!0}),t}(e("pIVY").c)},b77Z:function(n,t){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single tokens<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span>&gt;</span>my token<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"true"</span>&gt;</span>my selected token<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">remove</span>)=<span class="hljs-string">"onRemove($event)"</span>&gt;</span>my removable token<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">remove</span>)=<span class="hljs-string">"onRemove($event)"</span>&gt;</span>my icon token<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>token-list<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"[1]"</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">"onListChange($event);"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"1"</span>&gt;</span>my token 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span>&gt;</span>my token 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>selectable and removable tokenlist<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"[1]"</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">"onListChange($event);"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"1"</span>&gt;</span>my token 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span>&gt;</span>my token 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>token-input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">"onInputChange($event);"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>token-input (disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input</span>&gt;</span>\n'},gW3m:function(n,t,e){"use strict";e.d(t,"c",function(){return l}),e.d(t,"b",function(){return a}),e("iSCa");var s=e("pIVY");function l(){return new s.c}e.d(t,"a",function(){return s.c}),e("XIT8");var a=function(){return function(){}}()},hUuX:function(n,t,e){"use strict";e.d(t,"b",function(){return l});var s=e("1/Kn");e.d(t,"a",function(){return s.b});var l=function(){return function(){}}()},iSCa:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var s=e("p0Sj"),l=(e("pIVY"),function(){function n(n,t,e,s){var l=this;this.config=n,this.elementRef=t,this.renderer=e,this.cdRef=s,this.focused=!1,this.float=!1,n&&(this.globalMode=n.mode,n.modeChange.subscribe(function(n){l.globalMode=n,l.cdRef.markForCheck()}))}return Object.defineProperty(n.prototype,"mode",{get:function(){return this.localMode||this.globalMode||"float"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"active",{get:function(){return(this.config||this.hasMaterialDirective)&&this.input},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasMaterialDirective",{get:function(){return this.elementRef.nativeElement.hasAttribute("vclMaterial")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classMaterial",{get:function(){return this.active&&"disabled"!==this.mode},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classMaterialFloatingLabel",{get:function(){return this.active&&("static"===this.mode||"float"===this.mode&&this.float)},enumerable:!0,configurable:!0}),n.prototype.ngAfterViewInit=function(){var n=this;this.active&&this.input.stateChanged.pipe(Object(s.a)(void 0)).subscribe(function(){n.input.materialModifierClass&&n._currentModifierClass!==n.input.materialModifierClass?(n._currentModifierClass&&n.renderer.removeClass(n.elementRef.nativeElement,n._currentModifierClass),n.renderer.addClass(n.elementRef.nativeElement,n.input.materialModifierClass)):!n.input.materialModifierClass&&n._currentModifierClass&&n.renderer.removeClass(n.elementRef.nativeElement,n._currentModifierClass),n.float=n.input.isLabelFloating,n.focused=n.input.isLabelFloating&&n.input.isFocused})},n}())},kN3k:function(n,t,e){"use strict";e.r(t);var s=e("CcnG"),l=function(){function n(){}return n.prototype.onRemove=function(n){console.log("onRemove",n)},n.prototype.onListChange=function(n){console.log("onListChange",n)},n.prototype.onInputChange=function(n){console.log("onInputChange",n)},n}(),a={demo:function(){return{label:"Token",tabs:{Demo:l,"README.md":{type:"md",content:e("KBb2")},"demo.component.html":{type:"pre",content:e("b77Z")},"demo.component.ts":{type:"pre",content:e("qOPM")}}}}},o=function(){return function(){}}(),r=e("pMnS"),i=e("8Ip6"),u=e("+nGw"),c=e("sM5x"),p=e("gIcY"),h=e("nhKh"),b=s.rb({encapsulation:2,styles:[],data:{}});function d(n){return s.Ob(2,[s.Eb(null,0)],null,null)}var f=e("Gc1z"),g=e("pIVY"),v=e("tMsr"),m=e("2JrD"),k=e("1/Kn"),y=s.rb({encapsulation:2,styles:[],data:{}});function j(n){return s.Ob(0,[(n()(),s.tb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.Mb(-1,null,["single tokens"])),(n()(),s.tb(2,0,null,null,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,t,e){var l=!0;return"blur"===t&&(l=!1!==s.Fb(n,3).onBlur(e)&&l),"click"===t&&(l=!1!==s.Fb(n,3).onClick(e)&&l),l},u.b,u.a)),s.sb(3,49152,null,0,c.b,[s.h,s.k,[3,c.a]],null,null),(n()(),s.Mb(-1,0,["my token"])),(n()(),s.tb(5,0,null,null,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,t,e){var l=!0;return"blur"===t&&(l=!1!==s.Fb(n,6).onBlur(e)&&l),"click"===t&&(l=!1!==s.Fb(n,6).onClick(e)&&l),l},u.b,u.a)),s.sb(6,49152,null,0,c.b,[s.h,s.k,[3,c.a]],{selected:[0,"selected"]},null),(n()(),s.Mb(-1,0,["my selected token"])),(n()(),s.tb(8,0,null,null,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"remove"],[null,"blur"],[null,"click"]],function(n,t,e){var l=!0,a=n.component;return"blur"===t&&(l=!1!==s.Fb(n,9).onBlur(e)&&l),"click"===t&&(l=!1!==s.Fb(n,9).onClick(e)&&l),"remove"===t&&(l=!1!==a.onRemove(e)&&l),l},u.b,u.a)),s.sb(9,49152,null,0,c.b,[s.h,s.k,[3,c.a]],{removable:[0,"removable"]},{remove:"remove"}),(n()(),s.Mb(-1,0,["my removable token"])),(n()(),s.tb(11,0,null,null,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"remove"],[null,"blur"],[null,"click"]],function(n,t,e){var l=!0,a=n.component;return"blur"===t&&(l=!1!==s.Fb(n,12).onBlur(e)&&l),"click"===t&&(l=!1!==s.Fb(n,12).onClick(e)&&l),"remove"===t&&(l=!1!==a.onRemove(e)&&l),l},u.b,u.a)),s.sb(12,49152,null,0,c.b,[s.h,s.k,[3,c.a]],{removable:[0,"removable"]},{remove:"remove"}),(n()(),s.Mb(-1,0,["my icon token"])),(n()(),s.tb(14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.tb(15,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.Mb(-1,null,["token-list"])),(n()(),s.tb(17,0,null,null,11,"vcl-token-list",[],[[2,"vclTokenList",null],[2,"vclTokenContainer",null]],[[null,"valueChange"]],function(n,t,e){var s=!0;return"valueChange"===t&&(s=!1!==n.component.onListChange(e)&&s),s},d,b)),s.Jb(5120,null,p.m,function(n){return[n]},[h.a]),s.sb(19,1753088,null,1,h.a,[s.h],{value:[0,"value"]},null),s.Kb(603979776,1,{tokens:1}),s.Gb(21,1),s.Jb(2048,null,c.a,null,[h.a]),(n()(),s.tb(23,0,null,0,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,t,e){var l=!0;return"blur"===t&&(l=!1!==s.Fb(n,24).onBlur(e)&&l),"click"===t&&(l=!1!==s.Fb(n,24).onClick(e)&&l),l},u.b,u.a)),s.sb(24,49152,[[1,4]],0,c.b,[s.h,s.k,[3,c.a]],{_value:[0,"_value"]},null),(n()(),s.Mb(-1,0,["my token 1"])),(n()(),s.tb(26,0,null,0,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,t,e){var l=!0;return"blur"===t&&(l=!1!==s.Fb(n,27).onBlur(e)&&l),"click"===t&&(l=!1!==s.Fb(n,27).onClick(e)&&l),l},u.b,u.a)),s.sb(27,49152,[[1,4]],0,c.b,[s.h,s.k,[3,c.a]],{_value:[0,"_value"]},null),(n()(),s.Mb(-1,0,["my token 2"])),(n()(),s.tb(29,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.tb(30,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.Mb(-1,null,["selectable and removable tokenlist"])),(n()(),s.tb(32,0,null,null,11,"vcl-token-list",[],[[2,"vclTokenList",null],[2,"vclTokenContainer",null]],[[null,"valueChange"]],function(n,t,e){var s=!0;return"valueChange"===t&&(s=!1!==n.component.onListChange(e)&&s),s},d,b)),s.Jb(5120,null,p.m,function(n){return[n]},[h.a]),s.sb(34,1753088,null,1,h.a,[s.h],{selectable:[0,"selectable"],removable:[1,"removable"],value:[2,"value"]},null),s.Kb(603979776,2,{tokens:1}),s.Gb(36,1),s.Jb(2048,null,c.a,null,[h.a]),(n()(),s.tb(38,0,null,0,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,t,e){var l=!0;return"blur"===t&&(l=!1!==s.Fb(n,39).onBlur(e)&&l),"click"===t&&(l=!1!==s.Fb(n,39).onClick(e)&&l),l},u.b,u.a)),s.sb(39,49152,[[2,4]],0,c.b,[s.h,s.k,[3,c.a]],{_value:[0,"_value"]},null),(n()(),s.Mb(-1,0,["my token 1"])),(n()(),s.tb(41,0,null,0,2,"vcl-token",[],[[2,"vclToken",null],[1,"tabindex",0],[2,"vclSelected",null],[4,"cursor",null],[2,"vclDisabled",null]],[[null,"blur"],[null,"click"]],function(n,t,e){var l=!0;return"blur"===t&&(l=!1!==s.Fb(n,42).onBlur(e)&&l),"click"===t&&(l=!1!==s.Fb(n,42).onClick(e)&&l),l},u.b,u.a)),s.sb(42,49152,[[2,4]],0,c.b,[s.h,s.k,[3,c.a]],{_value:[0,"_value"]},null),(n()(),s.Mb(-1,0,["my token 2"])),(n()(),s.tb(44,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),s.tb(45,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.Mb(-1,null,["token-input"])),(n()(),s.tb(47,0,null,null,9,"vcl-token-input",[],[[2,"vclInput",null],[2,"vclTokenInput",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutWrap",null],[1,"id",0],[2,"vclDisabled",null],[2,"vclError",null],[1,"tabindex",0]],[[null,"valueChange"],[null,"keydown"],[null,"keyup.enter"]],function(n,t,e){var l=!0,a=n.component;return"keydown"===t&&(l=!1!==s.Fb(n,49).onKeydown(e)&&l),"keyup.enter"===t&&(l=!1!==s.Fb(n,49).onKeyPressEnter(e)&&l),"valueChange"===t&&(l=!1!==a.onInputChange(e)&&l),l},f.b,f.a)),s.Jb(6144,null,g.b,null,[v.a]),s.sb(49,1097728,null,2,v.a,[s.k,s.E,s.h,[8,null],[2,m.b],[2,m.a]],null,{valueChange:"valueChange"}),s.Kb(603979776,3,{input:0}),s.Kb(603979776,4,{inputElementRef:0}),s.Jb(2048,null,k.a,null,[v.a]),(n()(),s.tb(53,0,[[4,0]],0,3,"input",[["vclInput",""]],[[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(n,t,e){var l=!0;return"focus"===t&&(l=!1!==s.Fb(n,56).onFocus()&&l),"blur"===t&&(l=!1!==s.Fb(n,56).onBlur()&&l),"input"===t&&(l=!1!==s.Fb(n,56).onInput()&&l),"change"===t&&(l=!1!==s.Fb(n,56).onInput()&&l),"ngModelChange"===t&&(l=!1!==s.Fb(n,56).onInput()&&l),l},null,null)),s.Jb(6144,null,m.c,null,[k.b]),s.Jb(6144,null,g.b,null,[k.b]),s.sb(56,147456,[[3,4]],0,k.b,[s.k,[2,p.n],[2,m.b],[2,m.a],[2,k.a]],null,null),(n()(),s.tb(57,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),s.Mb(-1,null,["token-input (disabled)"])),(n()(),s.tb(59,0,null,null,9,"vcl-token-input",[],[[2,"vclInput",null],[2,"vclTokenInput",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutWrap",null],[1,"id",0],[2,"vclDisabled",null],[2,"vclError",null],[1,"tabindex",0]],[[null,"keydown"],[null,"keyup.enter"]],function(n,t,e){var l=!0;return"keydown"===t&&(l=!1!==s.Fb(n,61).onKeydown(e)&&l),"keyup.enter"===t&&(l=!1!==s.Fb(n,61).onKeyPressEnter(e)&&l),l},f.b,f.a)),s.Jb(6144,null,g.b,null,[v.a]),s.sb(61,1097728,null,2,v.a,[s.k,s.E,s.h,[8,null],[2,m.b],[2,m.a]],{disabled:[0,"disabled"]},null),s.Kb(603979776,5,{input:0}),s.Kb(603979776,6,{inputElementRef:0}),s.Jb(2048,null,k.a,null,[v.a]),(n()(),s.tb(65,0,[[6,0]],0,3,"input",[["vclInput",""]],[[1,"id",0],[2,"vclInput",null],[2,"vclDisabled",null],[2,"vclError",null],[1,"disabled",0]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"change"],[null,"ngModelChange"]],function(n,t,e){var l=!0;return"focus"===t&&(l=!1!==s.Fb(n,68).onFocus()&&l),"blur"===t&&(l=!1!==s.Fb(n,68).onBlur()&&l),"input"===t&&(l=!1!==s.Fb(n,68).onInput()&&l),"change"===t&&(l=!1!==s.Fb(n,68).onInput()&&l),"ngModelChange"===t&&(l=!1!==s.Fb(n,68).onInput()&&l),l},null,null)),s.Jb(6144,null,m.c,null,[k.b]),s.Jb(6144,null,g.b,null,[k.b]),s.sb(68,147456,[[5,4]],0,k.b,[s.k,[2,p.n],[2,m.b],[2,m.a],[2,k.a]],null,null)],function(n,t){n(t,6,0,!0),n(t,9,0,!0),n(t,12,0,!0);var e=n(t,21,0,1);n(t,19,0,e),n(t,24,0,1),n(t,27,0,2);var s=n(t,36,0,1);n(t,34,0,!0,!0,s),n(t,39,0,1),n(t,42,0,2),n(t,61,0,!0)},function(n,t){n(t,2,0,s.Fb(t,3).classVclToken,s.Fb(t,3).tabindex,s.Fb(t,3).selected,s.Fb(t,3).styleCursor,s.Fb(t,3).isDisabled),n(t,5,0,s.Fb(t,6).classVclToken,s.Fb(t,6).tabindex,s.Fb(t,6).selected,s.Fb(t,6).styleCursor,s.Fb(t,6).isDisabled),n(t,8,0,s.Fb(t,9).classVclToken,s.Fb(t,9).tabindex,s.Fb(t,9).selected,s.Fb(t,9).styleCursor,s.Fb(t,9).isDisabled),n(t,11,0,s.Fb(t,12).classVclToken,s.Fb(t,12).tabindex,s.Fb(t,12).selected,s.Fb(t,12).styleCursor,s.Fb(t,12).isDisabled),n(t,17,0,s.Fb(t,19)._hostClasses,s.Fb(t,19)._hostClasses),n(t,23,0,s.Fb(t,24).classVclToken,s.Fb(t,24).tabindex,s.Fb(t,24).selected,s.Fb(t,24).styleCursor,s.Fb(t,24).isDisabled),n(t,26,0,s.Fb(t,27).classVclToken,s.Fb(t,27).tabindex,s.Fb(t,27).selected,s.Fb(t,27).styleCursor,s.Fb(t,27).isDisabled),n(t,32,0,s.Fb(t,34)._hostClasses,s.Fb(t,34)._hostClasses),n(t,38,0,s.Fb(t,39).classVclToken,s.Fb(t,39).tabindex,s.Fb(t,39).selected,s.Fb(t,39).styleCursor,s.Fb(t,39).isDisabled),n(t,41,0,s.Fb(t,42).classVclToken,s.Fb(t,42).tabindex,s.Fb(t,42).selected,s.Fb(t,42).styleCursor,s.Fb(t,42).isDisabled),n(t,47,0,s.Fb(t,49)._hostClasses,s.Fb(t,49)._hostClasses,s.Fb(t,49)._hostClasses,s.Fb(t,49)._hostClasses,s.Fb(t,49).elementId,s.Fb(t,49).isDisabled,s.Fb(t,49).hasError,s.Fb(t,49)._hostAttrTabindex),n(t,53,0,s.Fb(t,56).elementId,s.Fb(t,56).classVclInput,s.Fb(t,56).isDisabled,s.Fb(t,56).hasError,s.Fb(t,56).attrDisabled),n(t,59,0,s.Fb(t,61)._hostClasses,s.Fb(t,61)._hostClasses,s.Fb(t,61)._hostClasses,s.Fb(t,61)._hostClasses,s.Fb(t,61).elementId,s.Fb(t,61).isDisabled,s.Fb(t,61).hasError,s.Fb(t,61)._hostAttrTabindex),n(t,65,0,s.Fb(t,68).elementId,s.Fb(t,68).classVclInput,s.Fb(t,68).isDisabled,s.Fb(t,68).hasError,s.Fb(t,68).attrDisabled)})}function C(n){return s.Ob(0,[(n()(),s.tb(0,0,null,null,1,"ng-component",[],null,null,null,j,y)),s.sb(1,49152,null,0,l,[],null,null)],null,null)}var F=s.pb("ng-component",l,C,{},{},[]),D=e("Ip0R"),_=e("M2Lx"),T=e("dy60"),E=e("tfYh"),I=e("4c35"),w=e("p/eS"),O=e("2FIb"),M=e("hUuX"),R=e("61Fc"),x=e("g2Nb"),P=e("hyVG"),S=e("DD28"),L=e("ZYCi"),q=e("PNUx");e.d(t,"TokenDemoModuleNgFactory",function(){return V});var V=s.qb(o,[],function(n){return s.Cb([s.Db(512,s.j,s.bb,[[8,[r.a,i.a,F]],[3,s.j],s.y]),s.Db(4608,D.n,D.m,[s.v,[2,D.A]]),s.Db(4608,p.v,p.v,[]),s.Db(4608,_.a,_.a,[]),s.Db(4608,T.a,T.a,[[2,E.a]]),s.Db(1073742336,D.c,D.c,[]),s.Db(1073742336,p.u,p.u,[]),s.Db(1073742336,p.l,p.l,[]),s.Db(1073742336,I.e,I.e,[]),s.Db(1073742336,_.b,_.b,[]),s.Db(1073742336,w.a,w.a,[]),s.Db(1073742336,O.a,O.a,[]),s.Db(1073742336,M.b,M.b,[]),s.Db(1073742336,R.c,R.c,[]),s.Db(1073742336,x.a,x.a,[]),s.Db(1073742336,P.a,P.a,[]),s.Db(1073742336,S.a,S.a,[]),s.Db(1073742336,L.q,L.q,[[2,L.v],[2,L.m]]),s.Db(1073742336,o,o,[]),s.Db(1024,L.i,function(){return[[{path:"",component:q.a,data:a}]]},[])])})},mbT9:function(n,t,e){"use strict";function s(n,t){return n&&t&&t.ngControl&&t.ngControl.invalid&&(t.ngControl.touched||n.submitted)}e.d(t,"b",function(){return s}),e.d(t,"a",function(){return l}),e("2JrD"),e("xsjC");var l=function(){return function(){}}()},nhKh:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var s=e("CcnG"),l=e("p0Sj"),a=(e("sM5x"),function(){function n(n){this.cdRef=n,this.cvaDisabled=!1,this._hostClasses=!0,this.disabled=!1,this.selectable=!1,this.removable=!1,this.tokensChange=new s.m,this.value=[],this.onChangeCallback=function(n){},this.onTouchedCallback=function(){}}return Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.disabled||this.cvaDisabled},enumerable:!0,configurable:!0}),n.prototype.syncTokens=function(){var n=this,t=this.value;Array.isArray(t)||(t=[]),this.tokens&&this.tokens.forEach(function(e){e.selected=t.includes(e.value),e.selectable=n.selectable,e.removable=n.removable,e.setDisabledState(n.isDisabled)})},n.prototype.ngOnChanges=function(n){(n.disabled||n.value)&&this.syncTokens()},n.prototype.notifyTokenRemove=function(n){this.syncTokens()},n.prototype.notifyTokenSelect=function(n){this.value=this.tokens?this.tokens.filter(function(n){return n.selected}).map(function(n){return n.value}):[],this.syncTokens(),this.onChangeCallback(this.value)},n.prototype.notifyTokenBlur=function(n){n===this.tokens.last&&this.onTouchedCallback()},n.prototype.ngAfterContentInit=function(){var n=this;this.tokenSub=this.tokens&&this.tokens.changes.pipe(Object(l.a)(null)).subscribe(function(){n.syncTokens()})},n.prototype.ngOnDestroy=function(){this.dispose()},n.prototype.dispose=function(){this.tokenSub&&this.tokenSub.unsubscribe()},n.prototype.writeValue=function(n){this.value=n,this.syncTokens(),this.cdRef.markForCheck()},n.prototype.registerOnChange=function(n){this.onChangeCallback=n},n.prototype.registerOnTouched=function(n){this.onTouchedCallback=n},n.prototype.setDisabledState=function(n){this.cvaDisabled=n,this.syncTokens()},n}())},pIVY:function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o}),e.d(t,"c",function(){return r});var s=e("CcnG"),l=e("K9Ia"),a=new s.q("vcl-form-control-material-host"),o=new s.q("vcl-form-control-material-input"),r=function(){function n(n){this._modeChangeEmitter=new l.a,this.modeChange=this._modeChangeEmitter.asObservable(),this._mode=n||"float"}return Object.defineProperty(n.prototype,"mode",{get:function(){return this._mode},enumerable:!0,configurable:!0}),n.prototype.setMode=function(n){this._mode=n,this._modeChangeEmitter.next(n)},n}()},qOPM:function(n,t){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TokenDemoComponent {\n\n  onRemove(token) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onRemove\'</span>, token);\n  }\n\n  onListChange(value) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onListChange\'</span>, value);\n  }\n\n  onInputChange(value) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onInputChange\'</span>, value);\n  }\n}\n'},sM5x:function(n,t,e){"use strict";e.d(t,"a",function(){return l}),e.d(t,"b",function(){return a});var s=e("CcnG"),l=new s.q("vcl_token_observer"),a=function(){function n(n,t,e){this.cdRef=n,this.elementRef=t,this.observer=e,this.classVclToken=!0,this.tabindex=0,this.disabled=!1,this.selected=!1,this.selectable=!1,this.removable=!1,this.remove=new s.m,this.selectionChange=new s.m,this.cvaDisabled=!1}return Object.defineProperty(n.prototype,"label",{get:function(){return this._label||this.elementRef.nativeElement.innerHTML},set:function(n){this._label=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"value",{get:function(){return this._value||this.label},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"styleCursor",{get:function(){return this.selectable?null:"unset"},enumerable:!0,configurable:!0}),n.prototype.onBlur=function(n){this.observer&&this.observer.notifyTokenBlur(this)},n.prototype.onClick=function(n){!this.isDisabled&&this.selectable&&(this.selected=!this.selected,this.selectionChange.emit(this.selected),this.observer&&this.observer.notifyTokenSelect(this))},n.prototype.onRemoveClick=function(n){n.stopPropagation(),this.remove.emit(n),this.observer&&this.observer.notifyTokenRemove(this)},n.prototype.setDisabledState=function(n){this.cvaDisabled=n,this.cdRef.markForCheck()},Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.cvaDisabled||this.disabled},enumerable:!0,configurable:!0}),n}()},tMsr:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var s=e("mrSG"),l=e("CcnG"),a=e("YSh2"),o=e("K9Ia"),r=(e("mbT9"),e("hUuX"),e("gW3m"),0),i=function(){function n(n,t,e,s,a,i){this.elementRef=n,this.renderer=t,this.cdRef=e,this.ngControl=s,this.formControlHost=a,this._errorStateAgent=i,this._stateChangedEmitter=new o.a,this._generatedId="vcl_token-input_"+r++,this._cvaDisabled=!1,this.stateChanged=this._stateChangedEmitter.asObservable(),this.controlType="token-input",this._hostClasses=!0,this._hostAttrTabindex=-1,this.selectable=!1,this.addOnEnter=!0,this.allowDuplicates=!1,this.preselect=!0,this.removeToken=!0,this.value=[],this.disabled=!1,this.valueChange=new l.m,this.remove=new l.m,this.confirm=new l.m,this.onChange=function(){},this.onTouched=function(){},this.ngControl&&(this.ngControl.valueAccessor=this)}return Object.defineProperty(n.prototype,"elementId",{get:function(){return this.id||this._generatedId},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this._cvaDisabled||this.disabled},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isFocused",{get:function(){return this.input.isFocused},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isLabelFloating",{get:function(){return this.input.isLabelFloating||this.value&&this.value.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasError",{get:function(){var n=this.errorStateAgent||this._errorStateAgent;return!!n&&n(this.formControlHost,this)},enumerable:!0,configurable:!0}),n.prototype.removeLastToken=function(){this.value=this.value.slice(),this.value.pop(),this.triggerChange(),this.cdRef.markForCheck()},n.prototype.addToken=function(n){var t=s.a({selected:void 0===(n="string"==typeof n?{label:n,value:n}:n).selected?this.preselect:n.selected},n);!1===this.allowDuplicates&&this.value.some(function(n){return n.value===t.value})||(this.value=this.value.concat([t]),this.triggerChange(),this.cdRef.markForCheck(),this.onTouched())},n.prototype.notifyInputFocus=function(n){this._stateChangedEmitter.next()},n.prototype.notifyInputBlur=function(n){this.onTouched(),this._stateChangedEmitter.next()},n.prototype.select=function(n){this.selectable&&(n.selected=!n.selected,this.triggerChange())},n.prototype.onTokenRemove=function(n){this.remove.emit(n),this.removeToken&&(this.value=this.value.filter(function(t){return t!==n}),this.triggerChange())},n.prototype.triggerChange=function(){this.valueChange.emit(this.value),this.onChange(this.value)},n.prototype.onLabelClick=function(n){this.inputElementRef.nativeElement.focus()},n.prototype.writeValue=function(n){var t=this;this.value=Array.isArray(n)?n.map(function(n){return"string"==typeof n?{label:n,selected:t.preselect}:n}).filter(function(n){return"object"==typeof n&&n}):[],this.cdRef.markForCheck()},n.prototype.registerOnChange=function(n){this.onChange=n},n.prototype.registerOnTouched=function(n){this.onTouched=n},n.prototype.setDisabledState=function(n){this.disabled=n},n.prototype.onKeydown=function(n){if(n.target===this.inputElementRef.nativeElement){var t=n.keyCode;t===a.a&&this._lastKeyCode===a.a&&""===this.inputElementRef.nativeElement.value?this.removeLastToken():t===a.c&&n.preventDefault(),this._lastKeyCode=t}},n.prototype.onKeyPressEnter=function(n){if(n.target===this.inputElementRef.nativeElement){var t=this.inputElementRef.nativeElement.value;""===t?this.confirm.emit():this.addOnEnter&&(this.addToken(t),this.inputElementRef.nativeElement.value="")}},n.prototype.ngAfterContentInit=function(){this.inputElementRef&&this.renderer.addClass(this.inputElementRef.nativeElement,"vclLayoutFlex")},n}()},xsjC:function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e("2JrD");var s=e("K9Ia"),l=e("p0Sj"),a=function(){function n(n,t,e){this.elementRef=n,this.formGroup=t,this.ngForm=e,this._stateChangedEmitter=new s.a,this.stateChange=this._stateChangedEmitter.asObservable()}return Object.defineProperty(n.prototype,"classVclFormControlGroup",{get:function(){return!this.classVclFormInlineControlGroup},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classVclFormInlineControlGroup",{get:function(){return"vcl-form-inline-control-group"===this.elementRef.nativeElement.tagName.toLowerCase()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrVCLControlType",{get:function(){return this.input&&this.input.controlType},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_form",{get:function(){return this.ngForm||this.formGroup},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"pending",{get:function(){return this._form.pending},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"invalid",{get:function(){return this._form.invalid},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"valid",{get:function(){return this._form.valid},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"touched",{get:function(){return this._form.touched},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"untouched",{get:function(){return this._form.untouched},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"submitted",{get:function(){return this._form.submitted},enumerable:!0,configurable:!0}),n.prototype.ngAfterViewInit=function(){this.input&&this.input.stateChanged.pipe(Object(l.a)(void 0)).subscribe(this._stateChangedEmitter)},n.prototype.ngOnDestroy=function(){return this._stateChangedEmitter.complete()},n}()}}]);