(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5AAY":function(l,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a});var e=t("8Y7J"),u=t("b1Eb"),i=t("X5GH"),s=t("dy60"),r=t("9Rb9"),o=(t("2JrD"),t("AXxg"),e.pb({encapsulation:2,styles:[],data:{}}));function a(l){return e.Mb(2,[(l()(),e.rb(0,0,null,null,2,"vcl-icon",[],[[2,"vclIcon",null],[1,"role",0]],null,null,u.b,u.a)),e.Hb(512,null,i.a,i.a,[e.C,s.a]),e.qb(2,4767744,null,0,r.a,[i.a,e.k],{icon:[0,"icon"]},null)],function(l,n){l(n,2,0,n.component.checked?"vcl:box-checked":"vcl:box")},function(l,n){l(n,0,0,e.Db(n,2).vclIcon,e.Db(n,2).attrRole)})}},DMRj:function(l,n,t){"use strict";var e=t("8Y7J");function u(l,n){if(l&&n){const t=Array.isArray(n)?n:n.split(","),e=l.name||"",u=l.type||"",i=u.replace(/\/.*$/,"");return t.some(l=>{const n=l.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):u===n})}return!0}t("mbT9");var i=t("XNiG");t.d(n,"a",function(){return r});let s=0;class r{constructor(l,n,t,u){this.cdRef=l,this.ngControl=n,this.formControlHost=t,this._errorStateAgent=u,this._hostClasses=!0,this._hostAttrRole="button",this.stateChangedEmitter=new i.a,this.stateChanged=this.stateChangedEmitter.asObservable(),this.controlType="file-input_",this._disabled=!1,this.generatedId="vcl_file-input_"+s++,this.valueChange=new e.m,this.disabled=!1,this.multiple=!1,this.files=new e.m,this.tabindex=0,this.invalidFiles=!1,this.isDragging=!1,this.isFocused=!1,this.onChange=()=>{},this.onTouched=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}get elementId(){return this.id||this.generatedId}get hasError(){const l=this.errorStateAgent||this._errorStateAgent;return!!l&&l(this.formControlHost,this)}get isDisabled(){return this.disabled||this._disabled}get fileInput(){return this.input&&this.input.nativeElement}onFocus(){this.isFocused=!0,this.stateChangedEmitter.next()}onBlur(){this.isFocused=!1,this.stateChangedEmitter.next(),this.onTouched()}onLabelClick(l){this.disabled||(this.fileInput&&this.fileInput.click(),this.onTouched())}onInputChange(){this.fileInput&&this.fileInput.files&&this.updateFiles(this.fileInput.files)}checkFiles(l){this.invalidFiles=!!u&&Array.from(l).some(l=>!u(l,this.accept))}keydown(l){switch(l.code){case"Enter":case"Space":if(l.preventDefault(),this.disabled)return;this.fileInput&&this.fileInput.click(),this.onTouched()}}onClick(l){this.disabled||(this.fileInput&&this.fileInput.click(),this.onTouched())}onDragOver(l){this.isDragging=!0,l.preventDefault(),l.stopPropagation()}onDragLeave(l){this.isDragging=!1,l.preventDefault(),l.stopPropagation()}onDrop(l){l.preventDefault(),l.stopPropagation(),this.disabled||(this.isDragging=!1,this.updateFiles(l.target.files||l.dataTransfer.files),this.onTouched())}updateFiles(l){if(l instanceof FileList){let n=l[0].name;this.multiple&&(n+=" ("+l.length+")"),this.filename=n,this.value=l,this.checkFiles(l),this.files.emit(l),this.valueChange.emit(l),this.onChange(l)}}ngOnDestroy(){this.stateChangedEmitter&&this.stateChangedEmitter.complete()}writeValue(l){this.value=l,this.cdRef.markForCheck()}registerOnChange(l){this.onChange=l}registerOnTouched(l){this.onTouched=l}setDisabledState(l){this._disabled=l,this.cdRef.markForCheck()}}},Hv3H:function(l,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return h});var e=t("8Y7J"),u=t("b1Eb"),i=t("X5GH"),s=t("dy60"),r=t("9Rb9"),o=t("SVse"),a=(t("2JrD"),t("DMRj"),e.pb({encapsulation:2,styles:[],data:{}}));function c(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,null,null,null,null,null,null,null)),(l()(),e.Kb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.component.filename)})}function b(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"div",[],null,null,null,null,null)),e.Cb(null,0)],null,null)}function h(l){return e.Mb(2,[e.Ib(402653184,1,{input:0}),(l()(),e.rb(1,0,[[1,0],["input",1]],null,0,"input",[["type","file"]],[[4,"display",null],[8,"accept",0],[8,"multiple",0],[8,"disabled",0]],[[null,"change"]],function(l,n,t){var e=!0;return"change"===n&&(e=!1!==l.component.onInputChange()&&e),e},null,null)),(l()(),e.rb(2,0,null,null,2,"vcl-icon",[["aria-hidden","true"],["class","vclFileInputIcon"],["role","img"]],[[2,"vclIcon",null],[1,"role",0]],null,null,u.b,u.a)),e.Hb(512,null,i.a,i.a,[e.C,s.a]),e.qb(4,4767744,null,0,r.a,[i.a,e.k],{role:[0,"role"],icon:[1,"icon"]},null),(l()(),e.rb(5,0,null,null,4,"div",[["class","vclFileInputPlaceholder"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,c)),e.qb(7,16384,null,0,o.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,b)),e.qb(9,16384,null,0,o.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,4,0,"img","vcl:upload"),l(n,7,0,t.filename),l(n,9,0,!t.filename)},function(l,n){var t=n.component;l(n,1,0,"none",t.accept,t.multiple,t.disabled),l(n,2,0,e.Db(n,4).vclIcon,e.Db(n,4).attrRole)})}},K5bH:function(l,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return i});var e=t("8Y7J"),u=(t("6B8K"),t("ErXM"),t("2JrD"),e.pb({encapsulation:2,styles:[],data:{}}));function i(l){return e.Mb(2,[e.Cb(null,0)],null,null)}},Tin2:function(l,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return h});var e=t("8Y7J"),u=t("kJTi"),i=t("X5GH"),s=t("dy60"),r=t("SQVY"),o=t("SVse"),a=(t("ySGC"),t("s7LF"),t("2JrD"),e.pb({encapsulation:0,styles:[".vclRatingVertical[_nghost-%COMP%] {\n        flex-direction: column;\n      }"],data:{}}));function c(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,2,"vcl-rating-item",[],[[2,"vclRatingItem",null],[2,"vclIcon",null],[1,"tabindex",0]],[[null,"click"],[null,"keypress"],[null,"mouseenter"],[null,"focus"],[null,"blur"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Db(l,2).onClick()&&u),"keypress"===n&&(u=!1!==e.Db(l,2).handleKeyPressEvent(t)&&u),"mouseenter"===n&&(u=!1!==e.Db(l,2).onMouseEnter()&&u),"focus"===n&&(u=!1!==e.Db(l,2).onFocus()&&u),"blur"===n&&(u=!1!==e.Db(l,2).onBlur()&&u),u},u.b,u.a)),e.Hb(512,null,i.a,i.a,[e.C,s.a]),e.qb(2,4243456,[[1,4]],0,r.b,[r.a,e.k,i.a],null,null)],null,function(l,n){l(n,0,0,e.Db(n,2).classVclRatingItem,e.Db(n,2).classVclIcon,e.Db(n,2).attrTabindex)})}function b(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,c)),e.qb(2,278528,null,0,o.k,[e.N,e.K,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e.gb(0,null,null,0))],function(l,n){l(n,2,0,n.component.ratingItemsArray)},null)}function h(l){return e.Mb(2,[e.Ib(671088640,1,{ratingItemViewChildren:1}),(l()(),e.gb(16777216,null,null,1,null,b)),e.qb(2,16384,null,0,o.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),e.Cb(null,0)],function(l,n){l(n,2,0,!n.component.hasContent)},null)}},f0Vy:function(l,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return s}),t("19H1");var e=t("XNiG");let u=0;class i{constructor(l,n,t){this.ngControl=l,this.formControlHost=n,this._errorStateAgent=t,this._hostClasses=!0,this._stateChangedEmitter=new e.a,this._generatedId="vcl_file-input_"+u++,this._focused=!1,this._cvaDisabled=!1,this.stateChanged=this._stateChangedEmitter.asObservable(),this.controlType="counter",this.value=0,this.onChange=()=>{},this.onTouched=()=>{},this.ngControl&&(this.ngControl.valueAccessor=this)}get elementId(){return this.id||this._generatedId}get isDisabled(){return this._cvaDisabled||this.disabled}get isFocused(){return this._focused}get hasError(){const l=this.errorStateAgent||this._errorStateAgent;return!!l&&l(this.formControlHost,this)}onLabelClick(l){}onFocus(){this._focused=!0,this._stateChangedEmitter.next()}onBlur(l){this._focused=!1,this._stateChangedEmitter.next(),l&&this.onTouched()}increment(){"number"==typeof this.max&&this.value>=this.max||(this.value++,this.onChange(this.value))}decrement(){"number"==typeof this.min&&this.value<=this.min||(this.value--,this.onChange(this.value),this.onTouched())}writeValue(l){this.value=l}registerOnChange(l){this.onChange=l}registerOnTouched(l){this.onTouched=l}setDisabledState(l){this._cvaDisabled=l}}class s{}},ftgk:function(l,n,t){"use strict";t.d(n,"b",function(){return h}),t.d(n,"c",function(){return d}),t.d(n,"a",function(){return v});var e=t("8Y7J"),u=t("f0Vy"),i=(t("SVse"),t("s7LF"),t("dy60")),s=(t("tfYh"),t("61Fc"),t("g2Nb"),t("hyVG"),t("slit")),r=t("6B8K"),o=t("b1Eb"),a=t("X5GH"),c=t("9Rb9"),b=t("2JrD"),h=e.pb({encapsulation:0,styles:[".vclText[_ngcontent-%COMP%] {\n      font-size: 2.5em;\n      user-select: none;\n      padding-left: 0.2em;\n      padding-right: 0.2em;\n    }"],data:{}});function d(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,4,"button",[["type","button"],["vcl-square-button",""],["vclPrepend",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"keydown.enter"],[null,"focus"],[null,"mouseenter"],[null,"mouseleave"],[null,"blur"]],function(l,n,t){var u=!0,i=l.component;return"mouseenter"===n&&(u=!1!==e.Db(l,1).onMouseEnter()&&u),"mouseleave"===n&&(u=!1!==e.Db(l,1).onMouseLeave()&&u),"click"===n&&(u=!1!==e.Db(l,1).onClick()&&u),"focus"===n&&(u=!1!==e.Db(l,1).onFocus()&&u),"blur"===n&&(u=!1!==e.Db(l,1).onBlur()&&u),"click"===n&&(u=!1!==i.decrement()&&u),"keydown.enter"===n&&(u=!1!==i.decrement()&&u),"focus"===n&&(u=!1!==i.onFocus()&&u),"focus"===n&&(u=!1!==i.onBlur(!1)&&u),u},s.b,s.a)),e.qb(1,49152,null,0,r.b,[e.h,e.k,[3,r.a]],{type:[0,"type"]},null),(l()(),e.rb(2,0,null,0,2,"vcl-icon",[["icon","fas:minus"]],[[2,"vclIcon",null],[1,"role",0]],null,null,o.b,o.a)),e.Hb(512,null,a.a,a.a,[e.C,i.a]),e.qb(4,4767744,null,0,c.a,[a.a,e.k],{icon:[0,"icon"]},null),(l()(),e.rb(5,0,null,null,1,"div",[["class","vclText"]],null,null,null,null,null)),(l()(),e.Kb(6,null,["",""])),(l()(),e.rb(7,0,null,null,4,"button",[["type","button"],["vcl-square-button",""],["vclAppend",""]],[[2,"vclSquare",null],[1,"type",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclButton",null],[2,"vclHovered",null],[1,"aria-pressed",0],[2,"vclSelected",null]],[[null,"click"],[null,"keydown.enter"],[null,"focus"],[null,"mouseenter"],[null,"mouseleave"],[null,"blur"]],function(l,n,t){var u=!0,i=l.component;return"mouseenter"===n&&(u=!1!==e.Db(l,8).onMouseEnter()&&u),"mouseleave"===n&&(u=!1!==e.Db(l,8).onMouseLeave()&&u),"click"===n&&(u=!1!==e.Db(l,8).onClick()&&u),"focus"===n&&(u=!1!==e.Db(l,8).onFocus()&&u),"blur"===n&&(u=!1!==e.Db(l,8).onBlur()&&u),"click"===n&&(u=!1!==i.increment()&&u),"keydown.enter"===n&&(u=!1!==i.increment()&&u),"focus"===n&&(u=!1!==i.onFocus()&&u),"focus"===n&&(u=!1!==i.onBlur(!0)&&u),u},s.b,s.a)),e.qb(8,49152,null,0,r.b,[e.h,e.k,[3,r.a]],{type:[0,"type"]},null),(l()(),e.rb(9,0,null,0,2,"vcl-icon",[["icon","fas:plus"]],[[2,"vclIcon",null],[1,"role",0]],null,null,o.b,o.a)),e.Hb(512,null,a.a,a.a,[e.C,i.a]),e.qb(11,4767744,null,0,c.a,[a.a,e.k],{icon:[0,"icon"]},null)],function(l,n){l(n,1,0,"button"),l(n,4,0,"fas:minus"),l(n,8,0,"button"),l(n,11,0,"fas:plus")},function(l,n){var t=n.component;l(n,0,0,e.Db(n,1).classVCLSquare,e.Db(n,1).attrType,e.Db(n,1).isDisabled,e.Db(n,1).isDisabled,e.Db(n,1)._hostClasses,e.Db(n,1).hovered,e.Db(n,1).selectable,e.Db(n,1).selected),l(n,2,0,e.Db(n,4).vclIcon,e.Db(n,4).attrRole),l(n,6,0,t.value),l(n,7,0,e.Db(n,8).classVCLSquare,e.Db(n,8).attrType,e.Db(n,8).isDisabled,e.Db(n,8).isDisabled,e.Db(n,8)._hostClasses,e.Db(n,8).hovered,e.Db(n,8).selectable,e.Db(n,8).selected),l(n,9,0,e.Db(n,11).vclIcon,e.Db(n,11).attrRole)})}function f(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"demo-counter",[],[[2,"vclIcogram",null],[1,"id",0],[2,"vclError",null]],null,null,d,h)),e.qb(1,49152,null,0,u.a,[[8,null],[2,b.b],[2,b.a]],null,null)],null,function(l,n){l(n,0,0,e.Db(n,1)._hostClasses,e.Db(n,1).elementId,e.Db(n,1).hasError)})}var v=e.nb("demo-counter",u.a,f,{errorStateAgent:"errorStateAgent",id:"id",disabled:"disabled",min:"min",max:"max"},{},[])},"j+ek":function(l,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return c});var e=t("8Y7J"),u=t("SVse"),i=(t("2JrD"),t("AS2X"),t("s7LF"),e.pb({encapsulation:2,styles:[],data:{}}));function s(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,0,"div",[["class","vclSliderScalePointMark"]],null,null,null,null,null))],null,null)}function r(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"div",[["class","vclSliderKnobContainer"]],[[4,"left",null]],[[null,"pan"]],function(l,n,t){var e=!0;return"pan"===n&&(e=!1!==l.component.onPan(t)&&e),e},null,null)),(l()(),e.rb(1,0,null,null,0,"div",[["class","vclSliderKnob"]],null,null,null,null,null))],null,function(l,n){l(n,0,0,n.component.percentLeftKnob+"%")})}function o(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"div",[["class","vclSliderScalePointLabel"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.selectPoint(l.context.$implicit)&&e),e},null,null)),(l()(),e.Kb(1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit.label)})}function a(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,2,"div",[["class","vclSliderScale"],["horizontal",""],["justified",""],["layout",""]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,o)),e.qb(2,278528,null,0,u.k,[e.N,e.K,e.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.scalePoints)},null)}function c(l){return e.Mb(2,[e.Ib(671088640,1,{scaleElement:0}),(l()(),e.rb(1,0,null,null,5,"div",[["class","vclSliderRail"]],null,null,null,null,null)),(l()(),e.rb(2,0,[[1,0],["scale",1]],null,2,"div",[["class","vclSliderScale"],["horizontal",""],["justified",""],["layout",""]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,s)),e.qb(4,278528,null,0,u.k,[e.N,e.K,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e.gb(16777216,null,null,1,null,r)),e.qb(6,16384,null,0,u.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,a)),e.qb(8,16384,null,0,u.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,4,0,t.scalePoints),l(n,6,0,t.percentLeftKnob>=0),l(n,8,0,t.showScale)},null)}},kJTi:function(l,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return o});var e=t("8Y7J"),u=t("SVse"),i=(t("X5GH"),t("dy60"),t("SQVY"),e.pb({encapsulation:2,styles:[],data:{}}));function s(l){return e.Mb(0,[e.Cb(null,0),(l()(),e.gb(0,null,null,0))],null,null)}function r(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function o(l){return e.Mb(2,[e.Ib(671088640,1,{labelTemplateRef:0}),e.Ib(671088640,2,{labelElementRef:0}),(l()(),e.gb(0,[[1,2],["labelTemplate",2]],null,0,null,s)),(l()(),e.rb(3,0,[[2,0],["label",1]],null,2,"div",[["style","display: none"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,r)),e.qb(5,540672,null,0,u.p,[e.N],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null)],function(l,n){l(n,5,0,e.Db(n,2))},null)}},oHYS:function(l,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return i});var e=t("8Y7J"),u=(t("2JrD"),t("TzFS"),e.pb({encapsulation:2,styles:[],data:{}}));function i(l){return e.Mb(2,[(l()(),e.rb(0,0,null,null,6,"label",[["class","vclFlipSwitchLabel"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,4,"div",[["class","vclFlipSwitchTrack"]],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,1,"div",[["class","vclFlipSwitchActive"]],[[1,"aria-hidden",0]],null,null,null,null)),(l()(),e.Kb(3,null,["",""])),(l()(),e.rb(4,0,null,null,1,"div",[["class","vclFlipSwitchInactive"]],[[1,"aria-hidden",0]],null,null,null,null)),(l()(),e.Kb(5,null,["",""])),(l()(),e.rb(6,0,null,null,0,"div",[["class","vclFlipSwitchKnob"]],null,null,null,null,null))],null,function(l,n){var t=n.component;l(n,2,0,!t.value),l(n,3,0,t.onLabel),l(n,4,0,t.value),l(n,5,0,t.offLabel)})}}}]);