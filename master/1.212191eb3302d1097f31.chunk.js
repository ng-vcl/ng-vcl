(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{443:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){return function(){}}()},447:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var l=t(0),o=function(){function n(n){this.cdRef=n,this.label="",this.disabled=!1,this.selected=!1,this.removable=!1,this.icon="fa:times",this.remove=new l.q,this.select=new l.q,this.cvaDisabled=!1}return n.prototype.onTap=function(n){this.isDisabled||this.select.emit(n)},n.prototype.onRemoveClick=function(n){n.stopPropagation(),this.remove.emit(n)},n.prototype.setDisabledState=function(n){this.cvaDisabled=n,this.cdRef.markForCheck()},Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this.cvaDisabled||this.disabled},enumerable:!0,configurable:!0}),n}()},452:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){return function(){}}()},453:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){return function(){}}()},459:function(n,e,t){"use strict";t.d(e,"a",function(){return s});var l=t(0),o=t(206),i=t(46),u=t(68),c=t(430),s=(i.l,function(){function n(n){this.cdRef=n,this.selectable=!1,this.dispatchEvent=!1,this.disabled=!1,this.tokensChange=new l.q,this.labels=[]}return n.prototype.syncTokens=function(){var n=this.labels;Array.isArray(n)&&this.tokens&&this.tokens.forEach(function(e){e.selected=n.includes(e.label)})},n.prototype.syncSelectedValues=function(){this.labels=this.tokens?this.tokens.filter(function(n){return n.selected}).map(function(n){return n.label}):[]},n.prototype.triggerChange=function(){this.tokensChange.emit(this.labels),this.onChangeCallback&&this.onChangeCallback(this.labels)},n.prototype.ngOnChanges=function(n){n.disabled&&this.setDisabledState(n.disabled.currentValue)},n.prototype.ngAfterContentInit=function(){var n=this;this.onChangeCallback||(this.syncSelectedValues(),this.triggerChange());this.tokens&&this.tokens.changes.pipe(Object(c.a)(null)).subscribe(function(){!function(){if(n.tokens){n.dispose(),n.cdRef.markForCheck();var e=o.a.apply(void 0,n.tokens.map(function(n){return n.select.pipe(Object(u.a)(function(){return n}))}));n.tokenSubscription=e.subscribe(function(e){n.selectable&&(e.selected=!e.selected),n.syncSelectedValues(),n.triggerChange()})}}(),setTimeout(function(){n.syncSelectedValues(),n.setDisabledState(n.disabled)})})},n.prototype.ngOnDestroy=function(){this.dispose()},n.prototype.dispose=function(){this.tokenSubscription&&this.tokenSubscription.unsubscribe()},n.prototype.writeValue=function(n){this.labels=n,this.syncTokens(),this.cdRef.markForCheck()},n.prototype.registerOnChange=function(n){this.onChangeCallback=n},n.prototype.registerOnTouched=function(n){this.onTouchedCallback=n},n.prototype.setDisabledState=function(n){this.tokens&&this.tokens.forEach(function(e){return e.setDisabledState(n)})},n}())},470:function(n,e,t){"use strict";t.d(e,"a",function(){return d}),t.d(e,"b",function(){return f});var l=t(0),o=t(73),i=t(32),u=t(131),c=t(94),s=t(64),a=t(3),r=t(447),d=l.Cb({encapsulation:2,styles:[],data:{}});function b(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,1,"div",[["vcl-icogram",""]],[[2,"vclIcogram",null],[1,"role",0]],null,null,o.c,o.a)),l.Db(1,49152,null,0,i.a,[],{appIcon:[0,"appIcon"]},null)],function(n,e){n(e,1,0,e.component.tokenIcon)},function(n,e){n(e,0,0,!0,"img")})}function p(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,2,"button",[["class","vclTransparent"],["title","Remove"],["type","button"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[2,"vclSquare",null],[1,"aria-label",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(n,e,t){var o=!0,i=n.component;"mouseenter"===e&&(o=!1!==l.Ob(n,1).onMouseEnter(t)&&o);"mouseleave"===e&&(o=!1!==l.Ob(n,1).onMouseLeave(t)&&o);"click"===e&&(o=!1!==i.onRemoveClick(t)&&o);return o},u.b,u.a)),l.Db(1,16384,null,0,c.a,[l.o],{disabled:[0,"disabled"]},null),l.Db(2,49152,null,0,s.a,[],{title:[0,"title"],icon:[1,"icon"]},null)],function(n,e){var t=e.component;n(e,1,0,t.isDisabled);n(e,2,0,"Remove",t.icon)},function(n,e){n(e,0,0,!0,l.Ob(e,1).isDisabled,l.Ob(e,1).isDisabled,l.Ob(e,1).hovered,!0,l.Ob(e,2).title)})}function f(n){return l.Xb(0,[(n()(),l.vb(16777216,null,null,1,null,b)),l.Db(1,16384,null,0,a.l,[l.db,l.Z],{ngIf:[0,"ngIf"]},null),(n()(),l.Eb(2,0,null,null,1,"span",[["class","vclTokenLabel"]],null,null,null,null,null)),(n()(),l.Vb(3,null,["",""])),(n()(),l.vb(16777216,null,null,1,null,p)),l.Db(5,16384,null,0,a.l,[l.db,l.Z],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,1,0,t.tokenIcon),n(e,5,0,t.removable)},function(n,e){n(e,3,0,e.component.label)})}function h(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,1,"vcl-token",[],[[2,"vclToken",null],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"tap"]],function(n,e,t){var o=!0;"tap"===e&&(o=!1!==l.Ob(n,1).onTap(t)&&o);return o},f,d)),l.Db(1,49152,null,0,r.a,[l.i],null,null)],null,function(n,e){n(e,0,0,!0,l.Ob(e,1).selected,l.Ob(e,1).isDisabled)})}r.a},476:function(n,e,t){"use strict";t.d(e,"a",function(){return s});var l=t(0),o=t(46),i=function(n,e,t,l){return new(t||(t=Promise))(function(o,i){function u(n){try{s(l.next(n))}catch(n){i(n)}}function c(n){try{s(l.throw(n))}catch(n){i(n)}}function s(n){n.done?o(n.value):new t(function(e){e(n.value)}).then(u,c)}s((l=l.apply(n,e||[])).next())})},u=function(n,e){var t,l,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,l&&(o=2&i[0]?l.return:i[0]?l.throw||((o=l.return)&&o.call(l),0):l.next)&&!(o=o.call(l,i[1])).done)return o;switch(l=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,l=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(n,u)}catch(n){i=[6,n],l=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},c=function(n){return n[n.Top=0]="Top",n[n.Bottom=1]="Bottom",n}({}),s=(o.l,function(){function n(n,e){this.elementRef=n,this.cdRef=e,this.debug=!1,this.mode="single",this.placeholder="Select value",this.tabindex=0,this.expanded=!1,this.zIndex=999999,this.disabled=!1,this.listenKeys=!0,this.expandedIcon="fa:chevron-up",this.collapsedIcon="fa:chevron-down",this.change=new l.q,this.focused=!1,this.dropdownTop=-1,this.selectedItems=[],this.onChange=function(){},this.onTouched=function(){}}return n.prototype.ngAfterViewInit=function(){var e=n.Tag+".ngAfterViewInit()";(this.debug||!1)&&console.log(e),this.onItemsChange()},n.prototype.keydown=function(n){if(this.listenKeys){var e=!0;switch(n.code){case"ArrowDown":case"ArrowUp":case"Enter":this.expanded?this.dropdown.onMetalistKeydown(n):this.open();break;case"Space":this.toggle();break;case"Tab":this.close();case"Escape":this.close();default:e=!1}e&&n.preventDefault()}},n.prototype.reFocus=function(){this.elementRef.nativeElement.focus()},n.prototype.onFocus=function(n){return i(this,void 0,void 0,function(){return u(this,function(n){return this.focused=!0,[2]})})},n.prototype.onBlur=function(n){var e=this;setTimeout(function(){var n=void 0!==typeof document&&document.activeElement,t=e.elementRef&&e.elementRef.nativeElement;n&&t&&!e.elementRef.nativeElement.contains(n)&&(e.close(),e.cdRef.markForCheck())},1),this.focused=!1,this.onTouched()},n.prototype.toggle=function(){this.disabled||(this.expanded?this.close():this.open())},n.prototype.close=function(){this.expanded=!1},Object.defineProperty(n.prototype,"showDisplayValue",{get:function(){return"single"===this.mode||0===this.selectedItems.length},enumerable:!0,configurable:!0}),n.prototype.open=function(){return i(this,void 0,void 0,function(){var e,t,l,o,i,s,a;return u(this,function(u){switch(u.label){case 0:return e=n.Tag+".open()",this.debug||!1,this.expanded=!0,t=this.elementRef.nativeElement.getBoundingClientRect(),this.debug&&console.log(e,"position:",t),l=document.documentElement?document.documentElement.clientHeight:void 0,o=window.innerHeight||l||document.body.clientHeight,this.debug&&console.log(e,"screenHeight:",o),i=o-t.bottom,this.debug&&console.log(e,"spaceBottom:",i),s=t.top,this.debug&&console.log(e,"spaceTop:",s),a=this.dropDirection===c.Top||this.dropDirection===c.Bottom?this.dropDirection:i<s?c.Top:c.Bottom,this.debug&&console.log(e,"dropDirection:",c[a]),[4,new Promise(function(n){return setTimeout(n,0)})];case 1:switch(u.sent(),a){case c.Top:this.dropdownTop=-1*(this.dropdown.elementRef.nativeElement.children[0].offsetHeight-1+.3);break;case c.Bottom:this.dropdownTop=-1.1+this.select.nativeElement.offsetHeight}return this.cdRef.markForCheck(),[2]}})})},n.prototype.syncDisplayValue=function(){var n=this.dropdown&&this.dropdown.metalist&&this.dropdown.metalist.selectedItems||[];this.selectedItems=n.map(function(n){return{label:n.metadata&&n.metadata.metadata&&n.metadata.metadata.label||String(n.value),metaItem:n}});var e=this.selectedItems[0];this.displayValue=e?e.label:this.placeholder},n.prototype.deselectItem=function(n){this.dropdown.metalist.deselect(n)},n.prototype.onItemsChange=function(){this.syncDisplayValue(),this.cdRef.detectChanges(),this.cdRef.markForCheck()},n.prototype.onDropdownChange=function(n){var e=this;"single"===this.mode&&this.close(),this.syncDisplayValue(),this.change.emit(n),this.onChange(n),setTimeout(function(){return e.reFocus()},0)},n.prototype.writeValue=function(n){this.value=n,this.dropdown.writeValue(n),this.syncDisplayValue(),this.cdRef.markForCheck()},n.prototype.registerOnChange=function(n){this.onChange=n},n.prototype.registerOnTouched=function(n){this.onTouched=n},n.prototype.setDisabledState=function(n){this.disabled=n,this.cdRef.markForCheck()},n.Tag="SelectComponent",n}())},477:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){return function(){}}()},495:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){return function(){this.disabled=!1}}()},496:function(n,e,t){"use strict";t.d(e,"a",function(){return d});var l=t(0),o=t(206),i=t(507),u=t(509),c=t(68),s=t(123),a=t(508),r=t(428),d=function(){function n(n){this.elem=n,this.offClickDelay=10,this.offClickListen=!0,this.offClick=new l.q,this.subs=[]}return n.prototype.ngAfterViewInit=function(){var n=this;if("undefined"!=typeof document){var e=Object(o.a)(Object(i.a)(this.elem.nativeElement,"mouseover").pipe(Object(c.a)(function(n){return n.target||void 0})),Object(i.a)(this.elem.nativeElement,"mouseleave").pipe(Object(c.a)(function(){}))).subscribe(function(e){return n.hoveredElement=e}),t=Object(i.a)(document,"click").pipe(Object(s.a)(function(){return n.offClickListen}),Object(a.a)(Object(u.a)(this.offClickDelay).pipe(Object(r.a)()))).subscribe(function(e){var t=n.elem.nativeElement,o=[n.hoveredElement,t].concat((n.offClickExcludes||[]).map(function(n){return n instanceof l.o?n.nativeElement:n}).filter(function(n){return n instanceof Element})).filter(function(n){return!!n}),i=e.target;i&&(o.every(function(n){return!(n===i||n.contains(i))})&&n.offClick.emit())});this.subs=[e,t]}},n.prototype.ngOnDestroy=function(){this.subs.forEach(function(n){return n.unsubscribe()})},n}()},519:function(n,e,t){"use strict";t.d(e,"a",function(){return k}),t.d(e,"b",function(){return O});var l=t(0),o=t(470),i=t(447),u=t(520),c=t(46),s=t(459),a=t(3),r=t(485),d=t(468),b=t(496),p=t(131),f=t(94),h=t(64),m=t(486),v=t(161),g=t(5),y=t(476),k=l.Cb({encapsulation:2,styles:[],data:{}});function w(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,1,"div",[["class","vclInput"],["readonly",""]],[[2,"vclSelected",null]],[[null,"click"]],function(n,e,t){var l=!0,o=n.component;"click"===e&&(l=!1!==o.toggle()&&l);return l},null,null)),(n()(),l.Vb(1,null,[" "," "]))],null,function(n,e){var t=e.component;n(e,0,0,t.focused),n(e,1,0,t.displayValue)})}function D(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,1,"vcl-token",[],[[2,"vclToken",null],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"remove"],[null,"tap"]],function(n,e,t){var o=!0,i=n.component;"tap"===e&&(o=!1!==l.Ob(n,1).onTap(t)&&o);"remove"===e&&(o=!1!==i.deselectItem(n.context.$implicit.metaItem)&&o);return o},o.b,o.a)),l.Db(1,49152,[[3,4]],0,i.a,[l.i],{label:[0,"label"],removable:[1,"removable"]},{remove:"remove"})],function(n,e){n(e,1,0,e.context.$implicit.label,!0)},function(n,e){n(e,0,0,!0,l.Ob(e,1).selected,l.Ob(e,1).isDisabled)})}function C(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,6,"div",[["class","vclInput vclTokenInput vclLayoutHorizontal vclLayoutWrap"],["readonly",""]],[[2,"vclSelected",null]],[[null,"click"]],function(n,e,t){var l=!0,o=n.component;"click"===e&&(l=!1!==o.toggle()&&l);return l},null,null)),(n()(),l.Eb(1,0,null,null,5,"vcl-token-list",[],[[2,"vclTokenList",null],[2,"vclTokenContainer",null]],null,null,u.b,u.a)),l.Sb(5120,null,c.l,function(n){return[n]},[s.a]),l.Db(3,1753088,null,1,s.a,[l.i],{disabled:[0,"disabled"]},null),l.Tb(603979776,3,{tokens:1}),(n()(),l.vb(16777216,null,0,1,null,D)),l.Db(6,278528,null,0,a.k,[l.db,l.Z,l.z],{ngForOf:[0,"ngForOf"]},null)],function(n,e){var t=e.component;n(e,3,0,t.disabled),n(e,6,0,t.selectedItems)},function(n,e){n(e,0,0,e.component.focused);n(e,1,0,!0,!0)})}function I(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,1,"vcl-dropdown-option",[],null,null,null,r.b,r.a)),l.Db(1,49152,[[4,4]],0,d.a,[],{value:[0,"value"],metadata:[1,"metadata"],label:[2,"label"],sublabel:[3,"sublabel"],prepIcon:[4,"prepIcon"],appIcon:[5,"appIcon"],appIconSrc:[6,"appIconSrc"],prepIconSrc:[7,"prepIconSrc"],disabled:[8,"disabled"]},null)],function(n,e){var t=e.component;n(e,1,0,e.context.$implicit.value,e.context.$implicit,e.context.$implicit.label,e.context.$implicit.sublabel,e.context.$implicit.prepIcon,e.context.$implicit.appIcon,e.context.$implicit.appIconSrc,e.context.$implicit.prepIconSrc,t.disabled||e.context.$implicit.disabled)},null)}function O(n){return l.Xb(0,[l.Tb(402653184,1,{dropdown:0}),l.Tb(402653184,2,{select:0}),(n()(),l.Eb(2,0,null,null,15,"div",[],null,[[null,"offClick"]],function(n,e,t){var l=!0,o=n.component;"offClick"===e&&(l=!1!==o.close()&&l);return l},null,null)),l.Db(3,4341760,null,0,b.a,[l.o],null,{offClick:"offClick"}),(n()(),l.Eb(4,0,[[2,0],["select",1]],null,7,"div",[["class","vclLayoutHorizontal vclSelect vclInputGroupEmb"]],[[4,"marginBottom",null]],null,null,null,null)),(n()(),l.vb(16777216,null,null,1,null,w)),l.Db(6,16384,null,0,a.l,[l.db,l.Z],{ngIf:[0,"ngIf"]},null),(n()(),l.vb(16777216,null,null,1,null,C)),l.Db(8,16384,null,0,a.l,[l.db,l.Z],{ngIf:[0,"ngIf"]},null),(n()(),l.Eb(9,0,null,null,2,"button",[["class","vclTransparent vclAppended"],["tabindex","-1"],["type","button"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[2,"vclSquare",null],[1,"aria-label",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"]],function(n,e,t){var o=!0,i=n.component;"mouseenter"===e&&(o=!1!==l.Ob(n,10).onMouseEnter(t)&&o);"mouseleave"===e&&(o=!1!==l.Ob(n,10).onMouseLeave(t)&&o);"click"===e&&(o=!1!==i.toggle()&&o);return o},p.b,p.a)),l.Db(10,16384,null,0,f.a,[l.o],{disabled:[0,"disabled"]},null),l.Db(11,49152,null,0,h.a,[],{icon:[0,"icon"]},null),(n()(),l.Eb(12,0,null,null,5,"vcl-dropdown",[["tabindex","-1"]],[[4,"position",null],[4,"top","px"],[4,"width",null],[4,"position",null],[4,"zIndex",null],[1,"tabindex",0]],[[null,"change"],[null,"itemsChange"]],function(n,e,t){var l=!0,o=n.component;"change"===e&&(l=!1!==o.onDropdownChange(t)&&l);"itemsChange"===e&&(l=!1!==o.onItemsChange()&&l);return l},m.b,m.a)),l.Sb(5120,null,c.l,function(n){return[n]},[v.b]),l.Db(14,4308992,[[1,4],["dropdown",4]],1,v.b,[l.o,l.i,g.b,[2,v.a]],{tabindex:[0,"tabindex"],value:[1,"value"],expanded:[2,"expanded"],mode:[3,"mode"],maxSelectableItems:[4,"maxSelectableItems"],disabled:[5,"disabled"]},{change:"change",itemsChange:"itemsChange"}),l.Tb(603979776,4,{items:1}),(n()(),l.vb(16777216,null,null,1,null,I)),l.Db(17,278528,null,0,a.k,[l.db,l.Z,l.z],{ngForOf:[0,"ngForOf"]},null)],function(n,e){var t=e.component;n(e,6,0,t.showDisplayValue),n(e,8,0,!t.showDisplayValue),n(e,10,0,t.disabled),n(e,11,0,t.expanded?t.expandedIcon:t.collapsedIcon);n(e,14,0,"-1",t.value,t.expanded,t.mode,t.maxSelectableItems,t.disabled),n(e,17,0,t.items)},function(n,e){var t=e.component;n(e,4,0,0);n(e,9,0,!0,l.Ob(e,10).isDisabled,l.Ob(e,10).isDisabled,l.Ob(e,10).hovered,!0,l.Ob(e,11).title);n(e,12,0,"relative",t.dropdownTop,"100%","absolute",t.zIndex,-1)})}function T(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,3,"vcl-select",[],[[4,"position",null],[4,"display",null],[1,"tabindex",0]],[[null,"keydown"],[null,"focus"],[null,"blur"]],function(n,e,t){var o=!0;"keydown"===e&&(o=!1!==l.Ob(n,2).keydown(t)&&o);"focus"===e&&(o=!1!==l.Ob(n,2).onFocus(t)&&o);"blur"===e&&(o=!1!==l.Ob(n,2).onBlur(t)&&o);return o},O,k)),l.Sb(5120,null,c.l,function(n){return[n]},[y.a]),l.Db(2,4243456,null,1,y.a,[l.o,l.i],null,null),l.Tb(603979776,1,{items:1})],null,function(n,e){n(e,0,0,"relative","block",l.Ob(e,2).tabindex)})}y.a},520:function(n,e,t){"use strict";t.d(e,"a",function(){return u}),t.d(e,"b",function(){return c});var l=t(0),o=t(46),i=t(459),u=l.Cb({encapsulation:2,styles:[],data:{}});function c(n){return l.Xb(0,[l.Nb(null,0)],null,null)}function s(n){return l.Xb(0,[(n()(),l.Eb(0,0,null,null,3,"vcl-token-list",[],[[2,"vclTokenList",null],[2,"vclTokenContainer",null]],null,null,c,u)),l.Sb(5120,null,o.l,function(n){return[n]},[i.a]),l.Db(2,1753088,null,1,i.a,[l.i],null,null),l.Tb(603979776,1,{tokens:1})],null,function(n,e){n(e,0,0,!0,!0)})}i.a},521:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){return function(){}}()}}]);