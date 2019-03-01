(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{YR26:function(l,s){l.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormLayoutsDemoComponent {\n\n}\n'},o01H:function(l,s){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Features<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\nThe forms can be in one of these layouts:<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>vertical (default): stacked both labels and controls<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>horizontal: two column layout, one for labels other for controls<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>inline: both labels and controls in a single line<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Examples<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Vertical input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclForm"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> [<span class="hljs-attr">required</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"input"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Placeholder"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Checkbox"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Submit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Horizontal input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclForm vclFormHorizontal"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputControlGroup vclGridRow"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> [<span class="hljs-attr">required</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Email"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gcb"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"email"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gca"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Email"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gca"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"email"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclFormControlHint"</span>&gt;</span>Helpful hint<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputControlGroup vclGridRow"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> [<span class="hljs-attr">required</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Password"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gcb"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"password"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gca"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Password"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"password"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gca"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"password"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputControlGroup vclGridRow"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gcb"</span>&gt;</span>&amp;nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gca"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Remember me"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputControlGroup vclGridRow"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gcb"</span>&gt;</span>&amp;nbsp;<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-gca"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclFormActionArea"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLooseButtonGroup"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Sign in"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Cancel"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Inline input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclForm vclFormInline"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> [<span class="hljs-attr">required</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Label"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputInlineControlGroup"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Placeholder"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vcl-form-control-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputInlineControlGroup"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-checkbox</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Submit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},zPAz:function(l,s,n){"use strict";n.r(s);var a=n("CcnG"),p=function(){return function(){}}(),t={demo:function(){return{name:"Form",tabs:{Demo:p,"demo.component.html":{type:"pre",content:n("o01H")},"demo.component.ts":{type:"pre",content:n("YR26")}}}}},u=function(){return function(){}}(),c=n("pMnS"),e=n("8Ip6"),r=n("gIcY"),b=n("G6uX"),o=n("5cNt"),i=a.ob({encapsulation:2,styles:[],data:{}});function h(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Features"])),(l()(),a.Hb(-1,null,["\nThe forms can be in one of these layouts:"])),(l()(),a.qb(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(5,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),a.qb(6,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["vertical (default): stacked both labels and controls"])),(l()(),a.qb(8,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["horizontal: two column layout, one for labels other for controls"])),(l()(),a.qb(10,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["inline: both labels and controls in a single line"])),(l()(),a.qb(12,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Examples"])),(l()(),a.qb(14,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Vertical input"])),(l()(),a.qb(16,0,null,null,18,"form",[["class","vclForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,s,n){var p=!0;return"submit"===s&&(p=!1!==a.Ab(l,18).onSubmit(n)&&p),"reset"===s&&(p=!1!==a.Ab(l,18).onReset()&&p),p},null,null)),a.pb(17,16384,null,0,r.v,[],null,null),a.pb(18,4210688,null,0,r.p,[[8,null],[8,null]],null,null),a.Eb(2048,null,r.b,null,[r.p]),a.pb(20,16384,null,0,r.o,[[4,r.b]],null,null),(l()(),a.qb(21,0,null,null,1,"label",[["for","input"],["label","Label"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(22,49152,null,0,o.rc,[],{label:[0,"label"],for:[1,"for"],required:[2,"required"]},null),(l()(),a.qb(23,0,null,null,1,"input",[["id","input"],["placeholder","Placeholder"],["vcl-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0]],null,null,null,null)),a.pb(24,16384,null,0,o.E,[],null,null),(l()(),a.qb(25,0,null,null,4,"vcl-checkbox",[],[[2,"vclInputControlGroup",null]],[[null,"tap"]],function(l,s,n){var p=!0;return"tap"===s&&(p=!1!==a.Ab(l,27).onTap(n)&&p),p},b.ob,b.j)),a.Eb(5120,null,r.l,function(l){return[l]},[o.q]),a.pb(27,49152,null,0,o.q,[a.h],null,null),(l()(),a.qb(28,0,null,0,1,"label",[["label","Checkbox"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(29,49152,null,0,o.rc,[],{label:[0,"label"]},null),(l()(),a.qb(30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(32,0,null,null,2,"button",[["label","Submit"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,s,n){var p=!0;return"mouseenter"===s&&(p=!1!==a.Ab(l,33).onMouseEnter(n)&&p),"mouseleave"===s&&(p=!1!==a.Ab(l,33).onMouseLeave(n)&&p),p},b.nb,b.i)),a.pb(33,16384,null,0,o.l,[a.k],null,null),a.pb(34,49152,null,0,o.o,[],{label:[0,"label"]},null),(l()(),a.qb(35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(36,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(37,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Horizontal input"])),(l()(),a.qb(39,0,null,null,39,"form",[["class","vclForm vclFormHorizontal"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,s,n){var p=!0;return"submit"===s&&(p=!1!==a.Ab(l,41).onSubmit(n)&&p),"reset"===s&&(p=!1!==a.Ab(l,41).onReset()&&p),p},null,null)),a.pb(40,16384,null,0,r.v,[],null,null),a.pb(41,4210688,null,0,r.p,[[8,null],[8,null]],null,null),a.Eb(2048,null,r.b,null,[r.p]),a.pb(43,16384,null,0,r.o,[[4,r.b]],null,null),(l()(),a.qb(44,0,null,null,7,"div",[["class","vclInputControlGroup vclGridRow"]],null,null,null,null,null)),(l()(),a.qb(45,0,null,null,1,"label",[["class","vclGridSpan-gcb"],["for","email"],["label","Email"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(46,49152,null,0,o.rc,[],{label:[0,"label"],for:[1,"for"],required:[2,"required"]},null),(l()(),a.qb(47,0,null,null,4,"div",[["class","vclGridSpan-gca"]],null,null,null,null,null)),(l()(),a.qb(48,0,null,null,1,"input",[["class","vclGridSpan-gca"],["id","email"],["placeholder","Email"],["type","email"],["vcl-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0]],null,null,null,null)),a.pb(49,16384,null,0,o.E,[],null,null),(l()(),a.qb(50,0,null,null,1,"div",[["class","vclFormControlHint"]],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Helpful hint"])),(l()(),a.qb(52,0,null,null,5,"div",[["class","vclInputControlGroup vclGridRow"]],null,null,null,null,null)),(l()(),a.qb(53,0,null,null,1,"label",[["class","vclGridSpan-gcb"],["for","password"],["label","Password"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(54,49152,null,0,o.rc,[],{label:[0,"label"],for:[1,"for"],required:[2,"required"]},null),(l()(),a.qb(55,0,null,null,2,"div",[["class","vclGridSpan-gca"]],null,null,null,null,null)),(l()(),a.qb(56,0,null,null,1,"input",[["class","vclGridSpan-gca"],["id","password"],["placeholder","Password"],["type","password"],["vcl-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0]],null,null,null,null)),a.pb(57,16384,null,0,o.E,[],null,null),(l()(),a.qb(58,0,null,null,8,"div",[["class","vclInputControlGroup vclGridRow"]],null,null,null,null,null)),(l()(),a.qb(59,0,null,null,1,"div",[["class","vclGridSpan-gcb"]],null,null,null,null,null)),(l()(),a.Hb(-1,null,["\xa0"])),(l()(),a.qb(61,0,null,null,5,"div",[["class","vclGridSpan-gca"]],null,null,null,null,null)),(l()(),a.qb(62,0,null,null,4,"vcl-checkbox",[],[[2,"vclInputControlGroup",null]],[[null,"tap"]],function(l,s,n){var p=!0;return"tap"===s&&(p=!1!==a.Ab(l,64).onTap(n)&&p),p},b.ob,b.j)),a.Eb(5120,null,r.l,function(l){return[l]},[o.q]),a.pb(64,49152,null,0,o.q,[a.h],null,null),(l()(),a.qb(65,0,null,0,1,"label",[["label","Remember me"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(66,49152,null,0,o.rc,[],{label:[0,"label"]},null),(l()(),a.qb(67,0,null,null,11,"div",[["class","vclInputControlGroup vclGridRow"]],null,null,null,null,null)),(l()(),a.qb(68,0,null,null,1,"div",[["class","vclGridSpan-gcb"]],null,null,null,null,null)),(l()(),a.Hb(-1,null,["\xa0"])),(l()(),a.qb(70,0,null,null,8,"div",[["class","vclGridSpan-gca"]],null,null,null,null,null)),(l()(),a.qb(71,0,null,null,7,"div",[["class","vclFormActionArea"]],null,null,null,null,null)),(l()(),a.qb(72,0,null,null,6,"div",[["class","vclLooseButtonGroup"]],null,null,null,null,null)),(l()(),a.qb(73,0,null,null,2,"button",[["label","Sign in"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,s,n){var p=!0;return"mouseenter"===s&&(p=!1!==a.Ab(l,74).onMouseEnter(n)&&p),"mouseleave"===s&&(p=!1!==a.Ab(l,74).onMouseLeave(n)&&p),p},b.nb,b.i)),a.pb(74,16384,null,0,o.l,[a.k],null,null),a.pb(75,49152,null,0,o.o,[],{label:[0,"label"]},null),(l()(),a.qb(76,0,null,null,2,"button",[["label","Cancel"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,s,n){var p=!0;return"mouseenter"===s&&(p=!1!==a.Ab(l,77).onMouseEnter(n)&&p),"mouseleave"===s&&(p=!1!==a.Ab(l,77).onMouseLeave(n)&&p),p},b.nb,b.i)),a.pb(77,16384,null,0,o.l,[a.k],null,null),a.pb(78,49152,null,0,o.o,[],{label:[0,"label"]},null),(l()(),a.qb(79,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(80,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.qb(81,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Hb(-1,null,["Inline input"])),(l()(),a.qb(83,0,null,null,16,"form",[["class","vclForm vclFormInline"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,s,n){var p=!0;return"submit"===s&&(p=!1!==a.Ab(l,85).onSubmit(n)&&p),"reset"===s&&(p=!1!==a.Ab(l,85).onReset()&&p),p},null,null)),a.pb(84,16384,null,0,r.v,[],null,null),a.pb(85,4210688,null,0,r.p,[[8,null],[8,null]],null,null),a.Eb(2048,null,r.b,null,[r.p]),a.pb(87,16384,null,0,r.o,[[4,r.b]],null,null),(l()(),a.qb(88,0,null,null,3,"label",[["class","vclInputInlineControlGroup"],["label","Label"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(89,49152,null,0,o.rc,[],{label:[0,"label"],required:[1,"required"]},null),(l()(),a.qb(90,0,null,0,1,"input",[["placeholder","Placeholder"],["vcl-input",""]],[[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0]],null,null,null,null)),a.pb(91,16384,null,0,o.E,[],null,null),(l()(),a.qb(92,0,null,null,4,"vcl-checkbox",[],[[2,"vclInputControlGroup",null]],[[null,"tap"]],function(l,s,n){var p=!0;return"tap"===s&&(p=!1!==a.Ab(l,94).onTap(n)&&p),p},b.ob,b.j)),a.Eb(5120,null,r.l,function(l){return[l]},[o.q]),a.pb(94,49152,null,0,o.q,[a.h],null,null),(l()(),a.qb(95,0,null,0,1,"label",[["class","vclInputInlineControlGroup"],["label","Checkbox"],["vcl-form-control-label",""]],[[2,"vclFormControlLabel",null],[2,"vclDisabled",null],[1,"for",0],[2,"vclFormControlLabelWrapping",null]],null,null,b.Pb,b.K)),a.pb(96,49152,null,0,o.rc,[],{label:[0,"label"]},null),(l()(),a.qb(97,0,null,null,2,"button",[["label","Submit"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclDisabled",null],[1,"disabled",0],[2,"vclHovered",null],[1,"aria-label",0]],[[null,"mouseenter"],[null,"mouseleave"]],function(l,s,n){var p=!0;return"mouseenter"===s&&(p=!1!==a.Ab(l,98).onMouseEnter(n)&&p),"mouseleave"===s&&(p=!1!==a.Ab(l,98).onMouseLeave(n)&&p),p},b.nb,b.i)),a.pb(98,16384,null,0,o.l,[a.k],null,null),a.pb(99,49152,null,0,o.o,[],{label:[0,"label"]},null)],function(l,s){l(s,22,0,"Label","input",!0),l(s,29,0,"Checkbox"),l(s,34,0,"Submit"),l(s,46,0,"Email","email",!0),l(s,54,0,"Password","password",!0),l(s,66,0,"Remember me"),l(s,75,0,"Sign in"),l(s,78,0,"Cancel"),l(s,89,0,"Label",!0),l(s,96,0,"Checkbox"),l(s,99,0,"Submit")},function(l,s){l(s,16,0,a.Ab(s,20).ngClassUntouched,a.Ab(s,20).ngClassTouched,a.Ab(s,20).ngClassPristine,a.Ab(s,20).ngClassDirty,a.Ab(s,20).ngClassValid,a.Ab(s,20).ngClassInvalid,a.Ab(s,20).ngClassPending),l(s,21,0,!0,a.Ab(s,22).disabled,a.Ab(s,22).for,a.Ab(s,22).vclFormControlLabelWrapping),l(s,23,0,!0,a.Ab(s,24).isDisabled,a.Ab(s,24).attrDisabled),l(s,25,0,!0),l(s,28,0,!0,a.Ab(s,29).disabled,a.Ab(s,29).for,a.Ab(s,29).vclFormControlLabelWrapping),l(s,32,0,!0,a.Ab(s,33).isDisabled,a.Ab(s,33).isDisabled,a.Ab(s,33).hovered,a.Ab(s,34).ariaLabel),l(s,39,0,a.Ab(s,43).ngClassUntouched,a.Ab(s,43).ngClassTouched,a.Ab(s,43).ngClassPristine,a.Ab(s,43).ngClassDirty,a.Ab(s,43).ngClassValid,a.Ab(s,43).ngClassInvalid,a.Ab(s,43).ngClassPending),l(s,45,0,!0,a.Ab(s,46).disabled,a.Ab(s,46).for,a.Ab(s,46).vclFormControlLabelWrapping),l(s,48,0,!0,a.Ab(s,49).isDisabled,a.Ab(s,49).attrDisabled),l(s,53,0,!0,a.Ab(s,54).disabled,a.Ab(s,54).for,a.Ab(s,54).vclFormControlLabelWrapping),l(s,56,0,!0,a.Ab(s,57).isDisabled,a.Ab(s,57).attrDisabled),l(s,62,0,!0),l(s,65,0,!0,a.Ab(s,66).disabled,a.Ab(s,66).for,a.Ab(s,66).vclFormControlLabelWrapping),l(s,73,0,!0,a.Ab(s,74).isDisabled,a.Ab(s,74).isDisabled,a.Ab(s,74).hovered,a.Ab(s,75).ariaLabel),l(s,76,0,!0,a.Ab(s,77).isDisabled,a.Ab(s,77).isDisabled,a.Ab(s,77).hovered,a.Ab(s,78).ariaLabel),l(s,83,0,a.Ab(s,87).ngClassUntouched,a.Ab(s,87).ngClassTouched,a.Ab(s,87).ngClassPristine,a.Ab(s,87).ngClassDirty,a.Ab(s,87).ngClassValid,a.Ab(s,87).ngClassInvalid,a.Ab(s,87).ngClassPending),l(s,88,0,!0,a.Ab(s,89).disabled,a.Ab(s,89).for,a.Ab(s,89).vclFormControlLabelWrapping),l(s,90,0,!0,a.Ab(s,91).isDisabled,a.Ab(s,91).attrDisabled),l(s,92,0,!0),l(s,95,0,!0,a.Ab(s,96).disabled,a.Ab(s,96).for,a.Ab(s,96).vclFormControlLabelWrapping),l(s,97,0,!0,a.Ab(s,98).isDisabled,a.Ab(s,98).isDisabled,a.Ab(s,98).hovered,a.Ab(s,99).ariaLabel)})}function g(l){return a.Jb(0,[(l()(),a.qb(0,0,null,null,1,"ng-component",[],null,null,null,h,i)),a.pb(1,49152,null,0,p,[],null,null)],null,null)}var j=a.mb("ng-component",p,g,{},{},[]),m=n("Ip0R"),d=n("2FIb"),v=n("ZYCi"),f=n("PNUx");n.d(s,"FormLayoutsDemoModuleNgFactory",function(){return A});var A=a.nb(u,[],function(l){return a.xb([a.yb(512,a.j,a.cb,[[8,[c.a,e.a,j]],[3,a.j],a.y]),a.yb(4608,m.n,m.m,[a.v,[2,m.y]]),a.yb(4608,r.w,r.w,[]),a.yb(4608,r.e,r.e,[]),a.yb(5120,o.hc,function(){return[new o.t]},[]),a.yb(1073742336,m.c,m.c,[]),a.yb(1073742336,r.t,r.t,[]),a.yb(1073742336,r.k,r.k,[]),a.yb(1073742336,r.r,r.r,[]),a.yb(1073742336,o.fc,o.fc,[]),a.yb(1073742336,o.Yb,o.Yb,[]),a.yb(1073742336,d.a,d.a,[]),a.yb(1073742336,o.Db,o.Db,[]),a.yb(1073742336,o.Ib,o.Ib,[]),a.yb(1073742336,o.Cb,o.Cb,[]),a.yb(1073742336,o.tb,o.tb,[]),a.yb(1073742336,o.Ab,o.Ab,[]),a.yb(1073742336,o.Eb,o.Eb,[]),a.yb(1073742336,o.Fb,o.Fb,[]),a.yb(1073742336,o.ub,o.ub,[]),a.yb(1073742336,o.Kb,o.Kb,[]),a.yb(1073742336,o.Gb,o.Gb,[]),a.yb(1073742336,v.m,v.m,[[2,v.s],[2,v.l]]),a.yb(1073742336,u,u,[]),a.yb(1024,v.j,function(){return[[{path:"",component:f.a,data:t}]]},[])])})}}]);