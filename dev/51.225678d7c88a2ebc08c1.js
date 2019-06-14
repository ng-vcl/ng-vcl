(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{RWac:function(n,s){n.exports='<span class="hljs-keyword">import</span> {Component, ViewChild} <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> {PopoverComponent} <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormMashupsDemoComponent {\n\n  value: <span class="hljs-built_in">any</span> = <span class="hljs-number">1</span>;\n\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'dropOver\'</span>)\n  dropOver: PopoverComponent;\n\n  onSelect(value: <span class="hljs-built_in">any</span>) {\n    <span class="hljs-keyword">this</span>.value = value;\n    <span class="hljs-keyword">this</span>.dropOver.close();\n  }\n\n  offClick() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.dropOver.visible) {\n      <span class="hljs-keyword">this</span>.dropOver.close();\n    }\n  }\n}\n'},"W+F8":function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This section shows several ubiquitus form components which\n   are not available as a single component but can be built as mashups\n   of form controls available in the ng-vcl.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Split Button with Dropdown<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclButtonGroup"</span> #<span class="hljs-attr">target</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Primary Action"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fa:chevron-down"</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"dropOver.toggle()"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span> #<span class="hljs-attr">dropOver</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"target"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclNoPadding"</span> (<span class="hljs-attr">offClick</span>)=<span class="hljs-string">"offClick()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"1"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onSelect($event)"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-dropdown-option</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let i of [0, 1, 2, 3, 4]"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"i"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Item {{ i }}"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown-option</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-dropdown</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Selected index: {{ value }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n'},zXeZ:function(n,s,l){"use strict";l.r(s);var a=l("CcnG"),t=function(){function n(){this.value=1}return n.prototype.onSelect=function(n){this.value=n,this.dropOver.close()},n.prototype.offClick=function(){this.dropOver.visible&&this.dropOver.close()},n}(),e={demo:function(){return{name:"Form",tabs:{Demo:t,"demo.component.html":{type:"pre",content:l("W+F8")},"demo.component.ts":{type:"pre",content:l("RWac")}}}}},p=function(){return function(){}}(),o=l("pMnS"),c=l("8Ip6"),u=l("G6uX"),r=l("5cNt"),i=l("ihYY"),b=l("gIcY"),h=l("Ip0R"),v=a.qb({encapsulation:2,styles:[],data:{}});function j(n){return a.Lb(0,[(n()(),a.sb(0,0,null,null,1,"vcl-dropdown-option",[],null,null,null,u.rb,u.m)),a.rb(1,49152,[[2,4]],0,r.v,[],{value:[0,"value"],label:[1,"label"]},null)],function(n,s){n(s,1,0,s.context.$implicit,a.ub(1,"Item ",s.context.$implicit,""))},null)}function g(n){return a.Lb(0,[a.Hb(402653184,1,{dropOver:0}),(n()(),a.sb(1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Jb(-1,null,["This section shows several ubiquitus form components which are not available as a single component but can be built as mashups of form controls available in the ng-vcl."])),(n()(),a.sb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.sb(4,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),a.Jb(-1,null,["Split Button with Dropdown"])),(n()(),a.sb(6,0,[["target",1]],null,6,"div",[["class","vclButtonGroup"]],null,null,null,null,null)),(n()(),a.sb(7,0,null,null,2,"button",[["label","Primary Action"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"mouseenter"],[null,"mouseleave"]],function(n,s,l){var t=!0;return"mouseenter"===s&&(t=!1!==a.Cb(n,8).onMouseEnter(l)&&t),"mouseleave"===s&&(t=!1!==a.Cb(n,8).onMouseLeave(l)&&t),t},u.nb,u.i)),a.rb(8,16384,null,0,r.l,[a.k],null,null),a.rb(9,49152,null,0,r.o,[],{label:[0,"label"]},null),(n()(),a.sb(10,0,null,null,2,"button",[["icon","fa:chevron-down"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[2,"vclSquare",null],[1,"aria-label",0]],[[null,"tap"],[null,"mouseenter"],[null,"mouseleave"]],function(n,s,l){var t=!0;return"mouseenter"===s&&(t=!1!==a.Cb(n,11).onMouseEnter(l)&&t),"mouseleave"===s&&(t=!1!==a.Cb(n,11).onMouseLeave(l)&&t),"tap"===s&&(t=!1!==a.Cb(n,14).toggle()&&t),t},u.mb,u.h)),a.rb(11,16384,null,0,r.l,[a.k],null,null),a.rb(12,49152,null,0,r.n,[],{icon:[0,"icon"]},null),(n()(),a.sb(13,0,null,null,9,"vcl-popover",[["class","vclNoPadding"]],[[4,"position",null],[2,"vclPopOver",null],[2,"vclLayoutHidden",null],[4,"visibility",null],[4,"transform",null]],[[null,"offClick"],["window","resize"]],function(n,s,l){var t=!0,e=n.component;return"window:resize"===s&&(t=!1!==a.Cb(n,14).onWindowResize(l)&&t),"offClick"===s&&(t=!1!==e.offClick()&&t),t},u.Ab,u.v)),a.rb(14,4964352,[[1,4],["dropOver",4]],0,r.Z,[a.k,i.b,a.h,[2,r.W]],{target:[0,"target"]},null),a.rb(15,4341760,null,0,r.id,[a.k],null,{offClick:"offClick"}),(n()(),a.sb(16,0,null,0,6,"vcl-dropdown",[],[[1,"tabindex",0]],[[null,"change"]],function(n,s,l){var a=!0;return"change"===s&&(a=!1!==n.component.onSelect(l)&&a),a},u.qb,u.l)),a.Gb(5120,null,b.l,function(n){return[n]},[r.u]),a.rb(18,4308992,null,1,r.u,[a.k,a.h,i.b,[2,r.r]],{value:[0,"value"]},{change:"change"}),a.Hb(603979776,2,{items:1}),(n()(),a.jb(16777216,null,null,2,null,j)),a.rb(21,278528,null,0,h.k,[a.R,a.O,a.t],{ngForOf:[0,"ngForOf"]},null),a.Db(22,5),(n()(),a.sb(23,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a.sb(24,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Jb(25,null,["Selected index: ",""]))],function(n,s){n(s,9,0,"Primary Action"),n(s,12,0,"fa:chevron-down"),n(s,14,0,a.Cb(s,6)),n(s,18,0,1);var l=n(s,22,0,0,1,2,3,4);n(s,21,0,l)},function(n,s){var l=s.component;n(s,7,0,!0,a.Cb(s,8).isDisabled,a.Cb(s,8).isDisabled,a.Cb(s,8).hovered,a.Cb(s,9).ariaLabel),n(s,10,0,!0,a.Cb(s,11).isDisabled,a.Cb(s,11).isDisabled,a.Cb(s,11).hovered,!0,a.Cb(s,12).title),n(s,13,0,"absolute",a.Cb(s,14).enableStyling,a.Cb(s,14).classHidden,a.Cb(s,14).styleVisibility,a.Cb(s,14).transform),n(s,16,0,-1),n(s,25,0,l.value)})}function m(n){return a.Lb(0,[(n()(),a.sb(0,0,null,null,1,"ng-component",[],null,null,null,g,v)),a.rb(1,49152,null,0,t,[],null,null)],null,null)}var d=a.ob("ng-component",t,m,{},{},[]),f=l("2FIb"),w=l("ZYCi"),C=l("PNUx");l.d(s,"FormMashupsDemoModuleNgFactory",function(){return k});var k=a.pb(p,[],function(n){return a.zb([a.Ab(512,a.j,a.eb,[[8,[o.a,c.a,d]],[3,a.j],a.y]),a.Ab(4608,h.n,h.m,[a.v,[2,h.y]]),a.Ab(4608,b.w,b.w,[]),a.Ab(4608,b.e,b.e,[]),a.Ab(5120,r.hc,function(){return[new r.t]},[]),a.Ab(1073742336,h.c,h.c,[]),a.Ab(1073742336,b.t,b.t,[]),a.Ab(1073742336,b.k,b.k,[]),a.Ab(1073742336,b.r,b.r,[]),a.Ab(1073742336,r.fc,r.fc,[]),a.Ab(1073742336,r.Yb,r.Yb,[]),a.Ab(1073742336,f.a,f.a,[]),a.Ab(1073742336,r.Db,r.Db,[]),a.Ab(1073742336,r.Ib,r.Ib,[]),a.Ab(1073742336,r.Cb,r.Cb,[]),a.Ab(1073742336,r.tb,r.tb,[]),a.Ab(1073742336,r.Qb,r.Qb,[]),a.Ab(1073742336,r.Sb,r.Sb,[]),a.Ab(1073742336,r.Kb,r.Kb,[]),a.Ab(1073742336,r.wb,r.wb,[]),a.Ab(1073742336,w.m,w.m,[[2,w.s],[2,w.l]]),a.Ab(1073742336,p,p,[]),a.Ab(1024,w.j,function(){return[[{path:"",component:C.a,data:e}]]},[])])})}}]);