(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{Cu3m:function(s,l,n){"use strict";n.r(l);var a=n("CcnG"),t=n("5cNt"),e=1,o=function(){return function(){}}(),p=function(){function s(s){this.notifier=s,this.position=t.U.TopRight}return s.prototype.default=function(){this.notifier.queue({text:"An default message "+e++,position:this.position})},s.prototype.info=function(){this.notifier.info({text:"An info message "+e++,position:this.position})},s.prototype.success=function(){this.notifier.success({text:"A success message "+e++,position:this.position})},s.prototype.warning=function(){this.notifier.warning({text:"A warning "+e++,position:this.position})},s.prototype.error=function(){this.notifier.error({text:"An error message "+e++,position:this.position})},s.prototype.custom=function(){this.notifier.queue({text:"<b>A <i>custom</i> message</b>",html:!0,backgroundColor:"black",textColor:"white",position:this.position,showCloseButton:!1,timeout:1e4})},s.prototype.componentAsContent=function(){this.notifier.info({position:this.position,contentComponentDetails:{contentComponentClass:o,attributes:{text:"notifier content custom component button "+e++}}})},s}(),u={demo:function(){return{label:"Notifiers",tabs:{Demo:p,"README.md":{type:"md",content:n("vi0r")},"demo.component.html":{type:"pre",content:n("eqRX")},"demo.component.ts":{type:"pre",content:n("msDu")}}}}},i=function(){return function(){}}(),r=n("G6uX"),c=n("pMnS"),b=n("8Ip6"),h=n("gIcY"),j=a.qb({encapsulation:2,styles:[],data:{}});function m(s){return a.Lb(0,[(s()(),a.sb(0,0,null,null,1,"button",[["class","vclButton"]],null,null,null,null,null)),(s()(),a.Jb(1,null,["",""]))],null,function(s,l){s(l,1,0,l.component.text)})}function g(s){return a.Lb(0,[(s()(),a.sb(0,0,null,null,1,"notifier-content-component",[],null,null,null,m,j)),a.rb(1,49152,null,0,o,[],null,null)],null,null)}var d=a.ob("notifier-content-component",o,g,{text:"text"},{},[]),v=a.qb({encapsulation:2,styles:[],data:{}});function C(s){return a.Lb(0,[(s()(),a.sb(0,0,null,null,30,"vcl-button-group",[["mode","single"]],[[2,"vclButtonGroup",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(s,l,n){var a=!0;return"ngModelChange"===l&&(a=!1!==(s.component.position=n)&&a),a},r.lb,r.g)),a.rb(1,1228800,null,1,t.m,[a.h],{mode:[0,"mode"]},null),a.Hb(603979776,1,{buttons:1}),a.Gb(1024,null,h.l,function(s){return[s]},[t.m]),a.rb(4,671744,null,0,h.q,[[8,null],[8,null],[8,null],[6,h.l]],{model:[0,"model"]},{update:"ngModelChange"}),a.Gb(2048,null,h.m,null,[h.q]),a.rb(6,16384,null,0,h.n,[[4,h.m]],null,null),(s()(),a.sb(7,0,null,0,3,"button",[["label","Top Right"],["vcl-button",""],["vcl-button-group",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(s,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==a.Cb(s,8).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,8).onMouseLeave(n)&&t),"click"===l&&(t=!1!==a.Cb(s,10).onClick()&&t),t},r.nb,r.i)),a.rb(8,16384,null,0,t.l,[a.k],null,null),a.rb(9,49152,null,0,t.o,[],{label:[0,"label"]},null),a.rb(10,16384,[[1,4]],0,t.y,[[1,t.m],t.l],null,null),(s()(),a.sb(11,0,null,0,3,"button",[["label","Top"],["vcl-button",""],["vcl-button-group",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(s,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==a.Cb(s,12).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,12).onMouseLeave(n)&&t),"click"===l&&(t=!1!==a.Cb(s,14).onClick()&&t),t},r.nb,r.i)),a.rb(12,16384,null,0,t.l,[a.k],null,null),a.rb(13,49152,null,0,t.o,[],{label:[0,"label"]},null),a.rb(14,16384,[[1,4]],0,t.y,[[1,t.m],t.l],null,null),(s()(),a.sb(15,0,null,0,3,"button",[["label","Top Left"],["vcl-button",""],["vcl-button-group",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(s,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==a.Cb(s,16).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,16).onMouseLeave(n)&&t),"click"===l&&(t=!1!==a.Cb(s,18).onClick()&&t),t},r.nb,r.i)),a.rb(16,16384,null,0,t.l,[a.k],null,null),a.rb(17,49152,null,0,t.o,[],{label:[0,"label"]},null),a.rb(18,16384,[[1,4]],0,t.y,[[1,t.m],t.l],null,null),(s()(),a.sb(19,0,null,0,3,"button",[["label","Bottom Right"],["vcl-button",""],["vcl-button-group",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(s,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==a.Cb(s,20).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,20).onMouseLeave(n)&&t),"click"===l&&(t=!1!==a.Cb(s,22).onClick()&&t),t},r.nb,r.i)),a.rb(20,16384,null,0,t.l,[a.k],null,null),a.rb(21,49152,null,0,t.o,[],{label:[0,"label"]},null),a.rb(22,16384,[[1,4]],0,t.y,[[1,t.m],t.l],null,null),(s()(),a.sb(23,0,null,0,3,"button",[["label","Bottom"],["vcl-button",""],["vcl-button-group",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(s,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==a.Cb(s,24).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,24).onMouseLeave(n)&&t),"click"===l&&(t=!1!==a.Cb(s,26).onClick()&&t),t},r.nb,r.i)),a.rb(24,16384,null,0,t.l,[a.k],null,null),a.rb(25,49152,null,0,t.o,[],{label:[0,"label"]},null),a.rb(26,16384,[[1,4]],0,t.y,[[1,t.m],t.l],null,null),(s()(),a.sb(27,0,null,0,3,"button",[["label","Bottom Left"],["vcl-button",""],["vcl-button-group",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclSelected",null]],[[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(s,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==a.Cb(s,28).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,28).onMouseLeave(n)&&t),"click"===l&&(t=!1!==a.Cb(s,30).onClick()&&t),t},r.nb,r.i)),a.rb(28,16384,null,0,t.l,[a.k],null,null),a.rb(29,49152,null,0,t.o,[],{label:[0,"label"]},null),a.rb(30,16384,[[1,4]],0,t.y,[[1,t.m],t.l],null,null),(s()(),a.sb(31,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(32,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(33,0,null,null,2,"button",[["label","An message"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Cb(s,34).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,34).onMouseLeave(n)&&t),"tap"===l&&(t=!1!==e.default()&&t),t},r.nb,r.i)),a.rb(34,16384,null,0,t.l,[a.k],null,null),a.rb(35,49152,null,0,t.o,[],{label:[0,"label"]},null),(s()(),a.sb(36,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(37,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(38,0,null,null,2,"button",[["label","An info message"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Cb(s,39).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,39).onMouseLeave(n)&&t),"tap"===l&&(t=!1!==e.info()&&t),t},r.nb,r.i)),a.rb(39,16384,null,0,t.l,[a.k],null,null),a.rb(40,49152,null,0,t.o,[],{label:[0,"label"]},null),(s()(),a.sb(41,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(42,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(43,0,null,null,2,"button",[["label","A success message"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Cb(s,44).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,44).onMouseLeave(n)&&t),"tap"===l&&(t=!1!==e.success()&&t),t},r.nb,r.i)),a.rb(44,16384,null,0,t.l,[a.k],null,null),a.rb(45,49152,null,0,t.o,[],{label:[0,"label"]},null),(s()(),a.sb(46,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(47,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(48,0,null,null,2,"button",[["label","A warning"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Cb(s,49).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,49).onMouseLeave(n)&&t),"tap"===l&&(t=!1!==e.warning()&&t),t},r.nb,r.i)),a.rb(49,16384,null,0,t.l,[a.k],null,null),a.rb(50,49152,null,0,t.o,[],{label:[0,"label"]},null),(s()(),a.sb(51,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(52,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(53,0,null,null,2,"button",[["label","An error message"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Cb(s,54).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,54).onMouseLeave(n)&&t),"tap"===l&&(t=!1!==e.error()&&t),t},r.nb,r.i)),a.rb(54,16384,null,0,t.l,[a.k],null,null),a.rb(55,49152,null,0,t.o,[],{label:[0,"label"]},null),(s()(),a.sb(56,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(57,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(58,0,null,null,2,"button",[["label","A custom message"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Cb(s,59).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,59).onMouseLeave(n)&&t),"tap"===l&&(t=!1!==e.custom()&&t),t},r.nb,r.i)),a.rb(59,16384,null,0,t.l,[a.k],null,null),a.rb(60,49152,null,0,t.o,[],{label:[0,"label"]},null),(s()(),a.sb(61,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(62,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(63,0,null,null,2,"button",[["label","A custom component message"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(s,l,n){var t=!0,e=s.component;return"mouseenter"===l&&(t=!1!==a.Cb(s,64).onMouseEnter(n)&&t),"mouseleave"===l&&(t=!1!==a.Cb(s,64).onMouseLeave(n)&&t),"tap"===l&&(t=!1!==e.componentAsContent()&&t),t},r.nb,r.i)),a.rb(64,16384,null,0,t.l,[a.k],null,null),a.rb(65,49152,null,0,t.o,[],{label:[0,"label"]},null),(s()(),a.sb(66,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.sb(67,0,null,null,0,"br",[],null,null,null,null,null))],function(s,l){var n=l.component;s(l,1,0,"single"),s(l,4,0,n.position),s(l,9,0,"Top Right"),s(l,13,0,"Top"),s(l,17,0,"Top Left"),s(l,21,0,"Bottom Right"),s(l,25,0,"Bottom"),s(l,29,0,"Bottom Left"),s(l,35,0,"An message"),s(l,40,0,"An info message"),s(l,45,0,"A success message"),s(l,50,0,"A warning"),s(l,55,0,"An error message"),s(l,60,0,"A custom message"),s(l,65,0,"A custom component message")},function(s,l){s(l,0,0,!0,a.Cb(l,6).ngClassUntouched,a.Cb(l,6).ngClassTouched,a.Cb(l,6).ngClassPristine,a.Cb(l,6).ngClassDirty,a.Cb(l,6).ngClassValid,a.Cb(l,6).ngClassInvalid,a.Cb(l,6).ngClassPending),s(l,7,0,!0,a.Cb(l,8).isDisabled,a.Cb(l,8).isDisabled,a.Cb(l,8).hovered,a.Cb(l,9).ariaLabel,a.Cb(l,10).isDisabled,a.Cb(l,10).isDisabled,a.Cb(l,10).selected),s(l,11,0,!0,a.Cb(l,12).isDisabled,a.Cb(l,12).isDisabled,a.Cb(l,12).hovered,a.Cb(l,13).ariaLabel,a.Cb(l,14).isDisabled,a.Cb(l,14).isDisabled,a.Cb(l,14).selected),s(l,15,0,!0,a.Cb(l,16).isDisabled,a.Cb(l,16).isDisabled,a.Cb(l,16).hovered,a.Cb(l,17).ariaLabel,a.Cb(l,18).isDisabled,a.Cb(l,18).isDisabled,a.Cb(l,18).selected),s(l,19,0,!0,a.Cb(l,20).isDisabled,a.Cb(l,20).isDisabled,a.Cb(l,20).hovered,a.Cb(l,21).ariaLabel,a.Cb(l,22).isDisabled,a.Cb(l,22).isDisabled,a.Cb(l,22).selected),s(l,23,0,!0,a.Cb(l,24).isDisabled,a.Cb(l,24).isDisabled,a.Cb(l,24).hovered,a.Cb(l,25).ariaLabel,a.Cb(l,26).isDisabled,a.Cb(l,26).isDisabled,a.Cb(l,26).selected),s(l,27,0,!0,a.Cb(l,28).isDisabled,a.Cb(l,28).isDisabled,a.Cb(l,28).hovered,a.Cb(l,29).ariaLabel,a.Cb(l,30).isDisabled,a.Cb(l,30).isDisabled,a.Cb(l,30).selected),s(l,33,0,!0,a.Cb(l,34).isDisabled,a.Cb(l,34).isDisabled,a.Cb(l,34).hovered,a.Cb(l,35).ariaLabel),s(l,38,0,!0,a.Cb(l,39).isDisabled,a.Cb(l,39).isDisabled,a.Cb(l,39).hovered,a.Cb(l,40).ariaLabel),s(l,43,0,!0,a.Cb(l,44).isDisabled,a.Cb(l,44).isDisabled,a.Cb(l,44).hovered,a.Cb(l,45).ariaLabel),s(l,48,0,!0,a.Cb(l,49).isDisabled,a.Cb(l,49).isDisabled,a.Cb(l,49).hovered,a.Cb(l,50).ariaLabel),s(l,53,0,!0,a.Cb(l,54).isDisabled,a.Cb(l,54).isDisabled,a.Cb(l,54).hovered,a.Cb(l,55).ariaLabel),s(l,58,0,!0,a.Cb(l,59).isDisabled,a.Cb(l,59).isDisabled,a.Cb(l,59).hovered,a.Cb(l,60).ariaLabel),s(l,63,0,!0,a.Cb(l,64).isDisabled,a.Cb(l,64).isDisabled,a.Cb(l,64).hovered,a.Cb(l,65).ariaLabel)})}function f(s){return a.Lb(0,[(s()(),a.sb(0,0,null,null,1,"ng-component",[],null,null,null,C,v)),a.rb(1,49152,null,0,p,[t.V],null,null)],null,null)}var k=a.ob("ng-component",p,f,{},{},[]),w=n("Ip0R"),y=n("2FIb"),A=n("ZYCi"),D=n("PNUx");n.d(l,"NotifierDemoModuleNgFactory",function(){return L});var L=a.pb(i,[],function(s){return a.zb([a.Ab(512,a.j,a.eb,[[8,[r.a,r.b,c.a,b.a,k,d]],[3,a.j],a.y]),a.Ab(4608,w.n,w.m,[a.v,[2,w.y]]),a.Ab(4608,h.w,h.w,[]),a.Ab(5120,t.hc,function(){return[new t.t]},[]),a.Ab(4608,t.L,t.L,[t.jd,a.r]),a.Ab(4608,t.V,t.V,[t.L]),a.Ab(1073742336,w.c,w.c,[]),a.Ab(1073742336,h.t,h.t,[]),a.Ab(1073742336,h.k,h.k,[]),a.Ab(1073742336,t.fc,t.fc,[]),a.Ab(1073742336,t.Yb,t.Yb,[]),a.Ab(1073742336,y.a,y.a,[]),a.Ab(1073742336,t.Db,t.Db,[]),a.Ab(1073742336,t.Ib,t.Ib,[]),a.Ab(1073742336,t.Cb,t.Cb,[]),a.Ab(1073742336,t.tb,t.tb,[]),a.Ab(1024,t.F,function(){return[void 0]},[]),a.Ab(1073742336,t.Hb,t.Hb,[t.F,t.jd,a.r]),a.Ab(1073742336,t.Ob,t.Ob,[]),a.Ab(1073742336,t.Pb,t.Pb,[]),a.Ab(1073742336,t.sb,t.sb,[]),a.Ab(1073742336,A.m,A.m,[[2,A.s],[2,A.l]]),a.Ab(1073742336,i,i,[]),a.Ab(1024,A.j,function(){return[[{path:"",component:D.a,data:u}]]},[])])})},eqRX:function(s,l){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-button-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"position"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"single"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">vcl-button-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Top Right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">vcl-button-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Top"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">vcl-button-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Top Left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">vcl-button-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Bottom Right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">vcl-button-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Bottom"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">vcl-button-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Bottom Left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-button-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"default()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"An message"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"info()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"An info message"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"success()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"A success message"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"warning()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"A warning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"error()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"An error message"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"custom()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"A custom message"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"componentAsContent()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"A custom component message"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n'},msDu:function(s,l){s.exports='<span class="hljs-keyword">import</span> { NotifierPosition, NotifierService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/ng-vcl\'</span>;\n<span class="hljs-keyword">import</span> { Component, Input } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-keyword">let</span> cnt = <span class="hljs-number">1</span>;\n\n<span class="hljs-meta">@Component</span>({selector: <span class="hljs-string">\'notifier-content-component\'</span>, template: <span class="hljs-string">\'&lt;button class="vclButton"&gt;{{text}}&lt;/button&gt;\'</span>})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> NotifierContentComponent {\n  <span class="hljs-meta">@Input</span>()text;\n}\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> NotifierDemoComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> notifier: NotifierService</span>) {}\n\n  position: NotifierPosition = NotifierPosition.TopRight;\n\n  <span class="hljs-keyword">default</span>() {\n    <span class="hljs-keyword">this</span>.notifier.queue({\n      text: <span class="hljs-string">\'An default message \'</span> + cnt++,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.info({\n      text: <span class="hljs-string">\'An info message \'</span> + cnt++,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  success() {\n    <span class="hljs-keyword">this</span>.notifier.success({\n      text: <span class="hljs-string">\'A success message \'</span> + cnt++,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  warning() {\n    <span class="hljs-keyword">this</span>.notifier.warning({\n      text: <span class="hljs-string">\'A warning \'</span> + cnt++,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  error() {\n    <span class="hljs-keyword">this</span>.notifier.error({\n      text: <span class="hljs-string">\'An error message \'</span> + cnt++,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  custom() {\n    <span class="hljs-keyword">this</span>.notifier.queue({\n      text: <span class="hljs-string">\'&lt;b&gt;A &lt;i&gt;custom&lt;/i&gt; message&lt;/b&gt;\'</span>,\n      html: <span class="hljs-literal">true</span>,\n      backgroundColor: <span class="hljs-string">\'black\'</span>,\n      textColor: <span class="hljs-string">\'white\'</span>,\n      position: <span class="hljs-keyword">this</span>.position,\n      showCloseButton: <span class="hljs-literal">false</span>,\n      timeout: <span class="hljs-number">10000</span>\n    });\n  }\n  componentAsContent() {\n    <span class="hljs-keyword">this</span>.notifier.info({\n      position: <span class="hljs-keyword">this</span>.position,\n      contentComponentDetails: {contentComponentClass: NotifierContentComponent, attributes: {text: <span class="hljs-string">`notifier content custom component button <span class="hljs-subst">${cnt++}</span>`</span>}}\n    });\n  }\n\n}\n'},vi0r:function(s,l){s.exports='<h1 id="vcl-notifier">vcl-notifier</h1>\n<p>Growl-style notifiers</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLNotifierModule, VCLLayerModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ \n    VCLLayerModule.forRoot(),\n    VCLNotifierModule,\n  ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs">@Component({ ... })\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyComponent</span> </span>{\n\n  <span class="hljs-keyword">constructor</span>(private notifier: NotifierService) {}\n\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.info({\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&apos;An info message&apos;</span>\n    });\n  }\n  success() {\n    <span class="hljs-keyword">this</span>.notifier.success({\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&apos;A success message&apos;</span>,\n      <span class="hljs-attr">position</span>: NotifierPosition.BottomRight\n    });\n  }\n  warning() {\n    <span class="hljs-keyword">this</span>.notifier.warning({\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&apos;A warning&apos;</span>,\n      <span class="hljs-attr">showCloseButton</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">timeout</span>: <span class="hljs-number">10000</span>\n    });\n  }\n  error() {\n    <span class="hljs-keyword">this</span>.notifier.error({\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&apos;An error message&apos;</span>,\n      <span class="hljs-attr">timeout</span>: <span class="hljs-literal">false</span>\n    });\n  }\n  custom() {\n    <span class="hljs-keyword">this</span>.notifier.show({\n      <span class="hljs-attr">text</span>: <span class="hljs-string">&apos;&lt;b&gt;A &lt;i&gt;custom&lt;/i&gt; message&lt;/b&gt;&apos;</span>,\n      <span class="hljs-attr">html</span>: <span class="hljs-literal">true</span>,\n      <span class="hljs-attr">backgroundColor</span>: <span class="hljs-string">&apos;black&apos;</span>,\n      <span class="hljs-attr">textColor</span>: <span class="hljs-string">&apos;white&apos;</span>,\n      <span class="hljs-attr">position</span>: NotifierPosition.TopLeft,\n      <span class="hljs-attr">showCloseButton</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">timeout</span>: <span class="hljs-number">10000</span>\n    });\n  }\n}</pre>\n<h3 id="api">API</h3>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> NotifierType {\n  None,\n  Info,\n  Success,\n  Warning,\n  <span class="hljs-built_in">Error</span>\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> NotifierPosition {\n  TopRight,\n  Top,\n  TopLeft,\n  BottomRight,\n  Bottom,\n  BottomLeft,\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> NotifierOptions {\n  text?: <span class="hljs-built_in">string</span>;\n  html?: <span class="hljs-built_in">boolean</span>;\n  <span class="hljs-keyword">type</span>?: NotifierType;\n  showCloseButton?: <span class="hljs-built_in">boolean</span>;\n  position?: NotifierPosition;\n  timeout?: <span class="hljs-built_in">number</span> | <span class="hljs-built_in">boolean</span>;\n  backgroundColor?: <span class="hljs-built_in">string</span>;\n  textColor?: <span class="hljs-built_in">string</span>;\n}</pre>\n'}}]);