(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"4w3q":function(l,n){l.exports='<h1 id="vcl-file-input">vcl-file-input</h1>\n<p>Enhanced file input</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-file-input [multiple]=&quot;true&quot; [accept]=&quot;accept&quot; [disabled]=&quot;disabled&quot;&gt;My biggest Files&lt;/vcl-file-input&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>accept</code></td>\n<td>string</td>\n<td>*</td>\n<td>like html5 file-input</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td></td>\n</tr>\n<tr>\n<td><code>multiple</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, more than 1 file can be selected</td>\n</tr>\n</tbody></table>\n'},N3FX:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FileInputDemoComponent { }\n'},UnD7:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>File Input<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-file-input</span>&gt;</span>My biggest File<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-file-input</span>&gt;</span>\n\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>File Input (Disabled)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-file-input</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span>One File<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-file-input</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>File Input (multiple)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-file-input</span> [<span class="hljs-attr">multiple</span>]=<span class="hljs-string">"true"</span>&gt;</span>Many Files<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-file-input</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>File Input (.png only)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-file-input</span> <span class="hljs-attr">accept</span>=<span class="hljs-string">"image/png"</span>&gt;</span>An Image<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-file-input</span>&gt;</span>\n'},lIf4:function(l,n,s){"use strict";s.r(n);var a=s("CcnG"),t=function(){return function(){}}(),e={demo:function(){return{name:"File Input",tabs:{Demo:t,"README.md":{type:"md",content:s("4w3q")},"demo.component.html":{type:"pre",content:s("UnD7")},"demo.component.ts":{type:"pre",content:s("N3FX")}}}}},u=function(){return function(){}}(),p=s("pMnS"),c=s("8Ip6"),o=s("G6uX"),i=s("gIcY"),r=s("5cNt"),b=a.qb({encapsulation:2,styles:[],data:{}});function d(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["File Input"])),(l()(),a.sb(2,0,null,null,3,"vcl-file-input",[["role","button"]],[[2,"vclInput",null],[2,"vclFileInput",null],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclError",null],[2,"vclDragndrop",null],[2,"isFocused",null]],[[null,"focus"],[null,"blur"],[null,"keydown"],[null,"click"],[null,"dragover"],[null,"dragleave"],[null,"drop"]],function(l,n,s){var t=!0;return"focus"===n&&(t=!1!==a.Cb(l,4).onFocus()&&t),"blur"===n&&(t=!1!==a.Cb(l,4).onBlur()&&t),"keydown"===n&&(t=!1!==a.Cb(l,4).keydown(s)&&t),"click"===n&&(t=!1!==a.Cb(l,4).onClick(s.target.value)&&t),"dragover"===n&&(t=!1!==a.Cb(l,4).onDragOver(s)&&t),"dragleave"===n&&(t=!1!==a.Cb(l,4).onDragLeave(s)&&t),"drop"===n&&(t=!1!==a.Cb(l,4).onDrop(s)&&t),t},o.kc,o.fb)),a.Gb(5120,null,i.l,function(l){return[l]},[r.gd]),a.rb(4,49152,null,0,r.gd,[a.h],null,null),(l()(),a.Jb(-1,0,["My biggest File"])),(l()(),a.sb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["File Input (Disabled)"])),(l()(),a.sb(8,0,null,null,3,"vcl-file-input",[["role","button"]],[[2,"vclInput",null],[2,"vclFileInput",null],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclError",null],[2,"vclDragndrop",null],[2,"isFocused",null]],[[null,"focus"],[null,"blur"],[null,"keydown"],[null,"click"],[null,"dragover"],[null,"dragleave"],[null,"drop"]],function(l,n,s){var t=!0;return"focus"===n&&(t=!1!==a.Cb(l,10).onFocus()&&t),"blur"===n&&(t=!1!==a.Cb(l,10).onBlur()&&t),"keydown"===n&&(t=!1!==a.Cb(l,10).keydown(s)&&t),"click"===n&&(t=!1!==a.Cb(l,10).onClick(s.target.value)&&t),"dragover"===n&&(t=!1!==a.Cb(l,10).onDragOver(s)&&t),"dragleave"===n&&(t=!1!==a.Cb(l,10).onDragLeave(s)&&t),"drop"===n&&(t=!1!==a.Cb(l,10).onDrop(s)&&t),t},o.kc,o.fb)),a.Gb(5120,null,i.l,function(l){return[l]},[r.gd]),a.rb(10,49152,null,0,r.gd,[a.h],{disabled:[0,"disabled"]},null),(l()(),a.Jb(-1,0,["One File"])),(l()(),a.sb(12,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["File Input (multiple)"])),(l()(),a.sb(14,0,null,null,3,"vcl-file-input",[["role","button"]],[[2,"vclInput",null],[2,"vclFileInput",null],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclError",null],[2,"vclDragndrop",null],[2,"isFocused",null]],[[null,"focus"],[null,"blur"],[null,"keydown"],[null,"click"],[null,"dragover"],[null,"dragleave"],[null,"drop"]],function(l,n,s){var t=!0;return"focus"===n&&(t=!1!==a.Cb(l,16).onFocus()&&t),"blur"===n&&(t=!1!==a.Cb(l,16).onBlur()&&t),"keydown"===n&&(t=!1!==a.Cb(l,16).keydown(s)&&t),"click"===n&&(t=!1!==a.Cb(l,16).onClick(s.target.value)&&t),"dragover"===n&&(t=!1!==a.Cb(l,16).onDragOver(s)&&t),"dragleave"===n&&(t=!1!==a.Cb(l,16).onDragLeave(s)&&t),"drop"===n&&(t=!1!==a.Cb(l,16).onDrop(s)&&t),t},o.kc,o.fb)),a.Gb(5120,null,i.l,function(l){return[l]},[r.gd]),a.rb(16,49152,null,0,r.gd,[a.h],{multiple:[0,"multiple"]},null),(l()(),a.Jb(-1,0,["Many Files"])),(l()(),a.sb(18,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["File Input (.png only)"])),(l()(),a.sb(20,0,null,null,3,"vcl-file-input",[["accept","image/png"],["role","button"]],[[2,"vclInput",null],[2,"vclFileInput",null],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclError",null],[2,"vclDragndrop",null],[2,"isFocused",null]],[[null,"focus"],[null,"blur"],[null,"keydown"],[null,"click"],[null,"dragover"],[null,"dragleave"],[null,"drop"]],function(l,n,s){var t=!0;return"focus"===n&&(t=!1!==a.Cb(l,22).onFocus()&&t),"blur"===n&&(t=!1!==a.Cb(l,22).onBlur()&&t),"keydown"===n&&(t=!1!==a.Cb(l,22).keydown(s)&&t),"click"===n&&(t=!1!==a.Cb(l,22).onClick(s.target.value)&&t),"dragover"===n&&(t=!1!==a.Cb(l,22).onDragOver(s)&&t),"dragleave"===n&&(t=!1!==a.Cb(l,22).onDragLeave(s)&&t),"drop"===n&&(t=!1!==a.Cb(l,22).onDrop(s)&&t),t},o.kc,o.fb)),a.Gb(5120,null,i.l,function(l){return[l]},[r.gd]),a.rb(22,49152,null,0,r.gd,[a.h],{accept:[0,"accept"]},null),(l()(),a.Jb(-1,0,["An Image"]))],function(l,n){l(n,10,0,!0),l(n,16,0,!0),l(n,22,0,"image/png")},function(l,n){l(n,2,0,!0,!0,a.Cb(n,4).tabindex,a.Cb(n,4).disabled,a.Cb(n,4).invalidFiles,a.Cb(n,4).isDragging,a.Cb(n,4).isFocused),l(n,8,0,!0,!0,a.Cb(n,10).tabindex,a.Cb(n,10).disabled,a.Cb(n,10).invalidFiles,a.Cb(n,10).isDragging,a.Cb(n,10).isFocused),l(n,14,0,!0,!0,a.Cb(n,16).tabindex,a.Cb(n,16).disabled,a.Cb(n,16).invalidFiles,a.Cb(n,16).isDragging,a.Cb(n,16).isFocused),l(n,20,0,!0,!0,a.Cb(n,22).tabindex,a.Cb(n,22).disabled,a.Cb(n,22).invalidFiles,a.Cb(n,22).isDragging,a.Cb(n,22).isFocused)})}function g(l){return a.Lb(0,[(l()(),a.sb(0,0,null,null,1,"ng-component",[],null,null,null,d,b)),a.rb(1,49152,null,0,t,[],null,null)],null,null)}var h=a.ob("ng-component",t,g,{},{},[]),v=s("Ip0R"),f=s("2FIb"),m=s("ZYCi"),C=s("PNUx");s.d(n,"FileInputDemoModuleNgFactory",function(){return j});var j=a.pb(u,[],function(l){return a.zb([a.Ab(512,a.j,a.eb,[[8,[p.a,c.a,h]],[3,a.j],a.y]),a.Ab(4608,v.n,v.m,[a.v,[2,v.y]]),a.Ab(4608,i.w,i.w,[]),a.Ab(1073742336,v.c,v.c,[]),a.Ab(1073742336,i.t,i.t,[]),a.Ab(1073742336,i.k,i.k,[]),a.Ab(1073742336,r.fc,r.fc,[]),a.Ab(1073742336,r.Yb,r.Yb,[]),a.Ab(1073742336,f.a,f.a,[]),a.Ab(1073742336,r.yb,r.yb,[]),a.Ab(1073742336,m.m,m.m,[[2,m.s],[2,m.l]]),a.Ab(1073742336,u,u,[]),a.Ab(1024,m.j,function(){return[[{path:"",component:C.a,data:e}]]},[])])})}}]);