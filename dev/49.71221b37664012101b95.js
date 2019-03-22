(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"5MnE":function(s,l){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ZoomBoxDemoComponent {\n\n}\n'},"8tTW":function(s,l){s.exports='<h1 id="vcl-zoom-box">vcl-zoom-box</h1>\n<p>Zoom into areas of images.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">first</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">&quot;30&quot;</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">&quot;60&quot;</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">&quot;120&quot;</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;190&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/320/320?image=434&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">&quot;first&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="zoom-box-container-attributes">Zoom-Box Container Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>x</code></td>\n<td>number</td>\n<td>0</td>\n<td>Left offset (optional)</td>\n</tr>\n<tr>\n<td><code>y</code></td>\n<td>number</td>\n<td>0</td>\n<td>Top offset (optional)</td>\n</tr>\n<tr>\n<td><code>width</code></td>\n<td>number</td>\n<td></td>\n<td>Width of zoomed box</td>\n</tr>\n<tr>\n<td><code>height</code></td>\n<td>number</td>\n<td></td>\n<td>Height of zoomed box</td>\n</tr>\n<tr>\n<td><code>resetOnOut</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Reset position to initial on mouse out</td>\n</tr>\n</tbody></table>\n<h3 id="zoom-box-attributes">Zoom-Box Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>image</code></td>\n<td>string</td>\n<td>&quot;&quot;</td>\n<td>High resolution image (optional)</td>\n</tr>\n<tr>\n<td><code>highResScale</code></td>\n<td>number</td>\n<td>1</td>\n<td>High resolution image scale multiplier (required if image is defined)</td>\n</tr>\n</tbody></table>\n'},FgeQ:function(s,l){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Sample Zoom-Box<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">first</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"190"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"first"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with a higher resolution image and mouse reset<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">second</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">resetOnOut</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"second"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with an initially hidden magnifier<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">third</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">hiding</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"third"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with appearing magnifier<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">fourth</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">hidden</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">hiding</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"fourth"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with an constantly hidden magnifier<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridRow"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">fifth</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">invisible</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclGridSpan-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"fifth"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},oD0a:function(s,l,n){"use strict";n.r(l);var a=n("CcnG"),t=function(){return function(){}}(),p={demo:function(){return{label:"Busy",tabs:{Demo:t,"README.md":{type:"md",content:n("8tTW")},"demo.component.html":{type:"pre",content:n("FgeQ")},"demo.component.ts":{type:"pre",content:n("5MnE")}}}}},c=function(){return function(){}}(),h=n("pMnS"),i=n("8Ip6"),o=n("G6uX"),u=n("5cNt"),e=a.ob({encapsulation:2,styles:[],data:{}});function g(s){return a.Jb(0,[(s()(),a.qb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Hb(-1,null,["Sample Zoom-Box"])),(s()(),a.qb(2,0,null,null,10,"div",[["class","vclGridRow"]],null,null,null,null,null)),(s()(),a.qb(3,0,null,null,6,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),a.qb(4,0,null,null,5,"vcl-zoom-box-container",[],null,null,null,o.Yb,o.T)),a.pb(5,1097728,[["first",4]],1,u.Sc,[a.k,a.E],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"]},null),a.Fb(335544320,1,{magnifier:0}),(s()(),a.qb(7,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(s()(),a.qb(8,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,o.Xb,o.S)),a.pb(9,49152,[[1,4]],0,u.Rc,[a.k,a.E],null,null),(s()(),a.qb(10,0,null,null,2,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),a.qb(11,0,null,null,1,"vcl-zoom-box",[],[[1,"role",0]],null,null,o.Wb,o.R)),a.pb(12,49152,null,0,u.Qc,[],{target:[0,"target"]},null),(s()(),a.qb(13,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.qb(14,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.qb(15,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Hb(-1,null,["Zoom-Box with a higher resolution image and mouse reset"])),(s()(),a.qb(17,0,null,null,10,"div",[["class","vclGridRow"]],null,null,null,null,null)),(s()(),a.qb(18,0,null,null,6,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),a.qb(19,0,null,null,5,"vcl-zoom-box-container",[],null,null,null,o.Yb,o.T)),a.pb(20,1097728,[["second",4]],1,u.Sc,[a.k,a.E],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"],resetOnOut:[4,"resetOnOut"]},null),a.Fb(335544320,2,{magnifier:0}),(s()(),a.qb(22,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(s()(),a.qb(23,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,o.Xb,o.S)),a.pb(24,49152,[[2,4]],0,u.Rc,[a.k,a.E],null,null),(s()(),a.qb(25,0,null,null,2,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),a.qb(26,0,null,null,1,"vcl-zoom-box",[["image","https://picsum.photos/640/640?image=434"]],[[1,"role",0]],null,null,o.Wb,o.R)),a.pb(27,49152,null,0,u.Qc,[],{target:[0,"target"],image:[1,"image"],scale:[2,"scale"]},null),(s()(),a.qb(28,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.qb(29,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.qb(30,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Hb(-1,null,["Zoom-Box with an initially hidden magnifier"])),(s()(),a.qb(32,0,null,null,10,"div",[["class","vclGridRow"]],null,null,null,null,null)),(s()(),a.qb(33,0,null,null,6,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),a.qb(34,0,null,null,5,"vcl-zoom-box-container",[],null,null,null,o.Yb,o.T)),a.pb(35,1097728,[["third",4]],1,u.Sc,[a.k,a.E],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"],hiding:[4,"hiding"]},null),a.Fb(335544320,3,{magnifier:0}),(s()(),a.qb(37,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(s()(),a.qb(38,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,o.Xb,o.S)),a.pb(39,49152,[[3,4]],0,u.Rc,[a.k,a.E],null,null),(s()(),a.qb(40,0,null,null,2,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),a.qb(41,0,null,null,1,"vcl-zoom-box",[["image","https://picsum.photos/640/640?image=434"]],[[1,"role",0]],null,null,o.Wb,o.R)),a.pb(42,49152,null,0,u.Qc,[],{target:[0,"target"],image:[1,"image"],scale:[2,"scale"]},null),(s()(),a.qb(43,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.qb(44,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.qb(45,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Hb(-1,null,["Zoom-Box with appearing magnifier"])),(s()(),a.qb(47,0,null,null,10,"div",[["class","vclGridRow"]],null,null,null,null,null)),(s()(),a.qb(48,0,null,null,6,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),a.qb(49,0,null,null,5,"vcl-zoom-box-container",[],null,null,null,o.Yb,o.T)),a.pb(50,1097728,[["fourth",4]],1,u.Sc,[a.k,a.E],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"],hidden:[4,"hidden"],hiding:[5,"hiding"]},null),a.Fb(335544320,4,{magnifier:0}),(s()(),a.qb(52,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(s()(),a.qb(53,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,o.Xb,o.S)),a.pb(54,49152,[[4,4]],0,u.Rc,[a.k,a.E],null,null),(s()(),a.qb(55,0,null,null,2,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),a.qb(56,0,null,null,1,"vcl-zoom-box",[["image","https://picsum.photos/640/640?image=434"]],[[1,"role",0]],null,null,o.Wb,o.R)),a.pb(57,49152,null,0,u.Qc,[],{target:[0,"target"],image:[1,"image"],scale:[2,"scale"]},null),(s()(),a.qb(58,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.qb(59,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),a.qb(60,0,null,null,1,"h3",[],null,null,null,null,null)),(s()(),a.Hb(-1,null,["Zoom-Box with an constantly hidden magnifier"])),(s()(),a.qb(62,0,null,null,10,"div",[["class","vclGridRow"]],null,null,null,null,null)),(s()(),a.qb(63,0,null,null,6,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),a.qb(64,0,null,null,5,"vcl-zoom-box-container",[],null,null,null,o.Yb,o.T)),a.pb(65,1097728,[["fifth",4]],1,u.Sc,[a.k,a.E],{x:[0,"x"],y:[1,"y"],width:[2,"width"],height:[3,"height"],invisible:[4,"invisible"]},null),a.Fb(335544320,5,{magnifier:0}),(s()(),a.qb(67,0,null,0,0,"img",[["src","https://picsum.photos/320/320?image=434"]],null,null,null,null,null)),(s()(),a.qb(68,0,null,0,1,"vcl-zoom-box-magnifier",[],null,null,null,o.Xb,o.S)),a.pb(69,49152,[[5,4]],0,u.Rc,[a.k,a.E],null,null),(s()(),a.qb(70,0,null,null,2,"div",[["class","vclGridSpan-4"]],null,null,null,null,null)),(s()(),a.qb(71,0,null,null,1,"vcl-zoom-box",[["image","https://picsum.photos/640/640?image=434"]],[[1,"role",0]],null,null,o.Wb,o.R)),a.pb(72,49152,null,0,u.Qc,[],{target:[0,"target"],image:[1,"image"],scale:[2,"scale"]},null)],function(s,l){s(l,5,0,30,60,120,190),s(l,12,0,a.Ab(l,5)),s(l,20,0,30,60,190,120,!0),s(l,27,0,a.Ab(l,20),"https://picsum.photos/640/640?image=434",2),s(l,35,0,30,60,190,120,!0),s(l,42,0,a.Ab(l,35),"https://picsum.photos/640/640?image=434",2),s(l,50,0,30,60,190,120,!0,!0),s(l,57,0,a.Ab(l,50),"https://picsum.photos/640/640?image=434",2),s(l,65,0,30,60,190,120,!0),s(l,72,0,a.Ab(l,65),"https://picsum.photos/640/640?image=434",2)},function(s,l){s(l,11,0,"zoombox"),s(l,26,0,"zoombox"),s(l,41,0,"zoombox"),s(l,56,0,"zoombox"),s(l,71,0,"zoombox")})}function r(s){return a.Jb(0,[(s()(),a.qb(0,0,null,null,1,"ng-component",[],null,null,null,g,e)),a.pb(1,49152,null,0,t,[],null,null)],null,null)}var j=a.mb("ng-component",t,r,{},{},[]),m=n("Ip0R"),d=n("2FIb"),b=n("ZYCi"),v=n("PNUx");n.d(l,"ZoomBoxDemoModuleNgFactory",function(){return x});var x=a.nb(c,[],function(s){return a.xb([a.yb(512,a.j,a.cb,[[8,[h.a,i.a,j]],[3,a.j],a.y]),a.yb(4608,m.n,m.m,[a.v,[2,m.y]]),a.yb(1073742336,m.c,m.c,[]),a.yb(1073742336,u.gc,u.gc,[]),a.yb(1073742336,u.Zb,u.Zb,[]),a.yb(1073742336,d.a,d.a,[]),a.yb(1073742336,u.hc,u.hc,[]),a.yb(1073742336,b.m,b.m,[[2,b.s],[2,b.l]]),a.yb(1073742336,c,c,[]),a.yb(1024,b.j,function(){return[[{path:"",component:v.a,data:p}]]},[])])})}}]);