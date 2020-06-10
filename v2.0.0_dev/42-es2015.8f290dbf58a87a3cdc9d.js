(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"5MnE":function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ZoomBoxDemoComponent {\n\n}\n'},FgeQ:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Sample Zoom-Box<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-row"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">first</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"190"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"first"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with a higher resolution image and mouse reset<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-row"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">second</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">resetOnOut</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"second"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with an initially hidden magnifier<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-row"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">third</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">hiding</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"third"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with appearing magnifier<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-row"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">fourth</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">hidden</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">hiding</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"fourth"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Zoom-Box with an constantly hidden magnifier<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-row"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">fifth</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">"30"</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">"60"</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">"190"</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">"120"</span> [<span class="hljs-attr">invisible</span>]=<span class="hljs-string">"true"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://picsum.photos/320/320?image=434"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-4"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"fifth"</span> <span class="hljs-attr">image</span>=<span class="hljs-string">"https://picsum.photos/640/640?image=434"</span> [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},KqqY:function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return r})),n.d(a,"ZoomBoxDemoModule",(function(){return j}));var l=n("ofXK"),t=n("tyNb"),p=n("19H1"),c=n("2FIb"),h=n("fXoL"),o=n("rlMt"),i=n("EHKx"),g=n("5/Eo");let e=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=h.Gb({type:s,selectors:[["ng-component"]],decls:58,vars:34,consts:[[1,"grid-row"],[1,"grid-span-4"],[3,"x","y","width","height"],["first",""],["src","https://picsum.photos/320/320?image=434"],[3,"target"],[3,"x","y","width","height","resetOnOut"],["second",""],["image","https://picsum.photos/640/640?image=434",3,"target","scale"],[3,"x","y","width","height","hiding"],["third",""],[3,"x","y","width","height","hidden","hiding"],["fourth",""],[3,"x","y","width","height","invisible"],["fifth",""]],template:function(s,a){if(1&s&&(h.Sb(0,"h3"),h.yc(1,"Sample Zoom-Box"),h.Rb(),h.Sb(2,"div",0),h.Sb(3,"div",1),h.Sb(4,"vcl-zoom-box-container",2,3),h.Nb(6,"img",4),h.Nb(7,"vcl-zoom-box-magnifier"),h.Rb(),h.Rb(),h.Sb(8,"div",1),h.Nb(9,"vcl-zoom-box",5),h.Rb(),h.Rb(),h.Nb(10,"br"),h.Nb(11,"br"),h.Sb(12,"h3"),h.yc(13,"Zoom-Box with a higher resolution image and mouse reset"),h.Rb(),h.Sb(14,"div",0),h.Sb(15,"div",1),h.Sb(16,"vcl-zoom-box-container",6,7),h.Nb(18,"img",4),h.Nb(19,"vcl-zoom-box-magnifier"),h.Rb(),h.Rb(),h.Sb(20,"div",1),h.Nb(21,"vcl-zoom-box",8),h.Rb(),h.Rb(),h.Nb(22,"br"),h.Nb(23,"br"),h.Sb(24,"h3"),h.yc(25,"Zoom-Box with an initially hidden magnifier"),h.Rb(),h.Sb(26,"div",0),h.Sb(27,"div",1),h.Sb(28,"vcl-zoom-box-container",9,10),h.Nb(30,"img",4),h.Nb(31,"vcl-zoom-box-magnifier"),h.Rb(),h.Rb(),h.Sb(32,"div",1),h.Nb(33,"vcl-zoom-box",8),h.Rb(),h.Rb(),h.Nb(34,"br"),h.Nb(35,"br"),h.Sb(36,"h3"),h.yc(37,"Zoom-Box with appearing magnifier"),h.Rb(),h.Sb(38,"div",0),h.Sb(39,"div",1),h.Sb(40,"vcl-zoom-box-container",11,12),h.Nb(42,"img",4),h.Nb(43,"vcl-zoom-box-magnifier"),h.Rb(),h.Rb(),h.Sb(44,"div",1),h.Nb(45,"vcl-zoom-box",8),h.Rb(),h.Rb(),h.Nb(46,"br"),h.Nb(47,"br"),h.Sb(48,"h3"),h.yc(49,"Zoom-Box with an constantly hidden magnifier"),h.Rb(),h.Sb(50,"div",0),h.Sb(51,"div",1),h.Sb(52,"vcl-zoom-box-container",13,14),h.Nb(54,"img",4),h.Nb(55,"vcl-zoom-box-magnifier"),h.Rb(),h.Rb(),h.Sb(56,"div",1),h.Nb(57,"vcl-zoom-box",8),h.Rb(),h.Rb()),2&s){const s=h.nc(5),a=h.nc(17),n=h.nc(29),l=h.nc(41),t=h.nc(53);h.Ab(4),h.ic("x",30)("y",60)("width",120)("height",190),h.Ab(5),h.ic("target",s),h.Ab(7),h.ic("x",30)("y",60)("width",190)("height",120)("resetOnOut",!0),h.Ab(5),h.ic("target",a)("scale",2),h.Ab(7),h.ic("x",30)("y",60)("width",190)("height",120)("hiding",!0),h.Ab(5),h.ic("target",n)("scale",2),h.Ab(7),h.ic("x",30)("y",60)("width",190)("height",120)("hidden",!0)("hiding",!0),h.Ab(5),h.ic("target",l)("scale",2),h.Ab(7),h.ic("x",30)("y",60)("width",190)("height",120)("invisible",!0),h.Ab(5),h.ic("target",t)("scale",2)}},directives:[o.a,i.a,g.a],encapsulation:2}),s})();function r(){return{label:"Zoom Box",tabs:{Demo:e,"README.md":{type:"md",content:'<h1 id="vcl-zoom-box">vcl-zoom-box</h1>\n<p>Zoom into areas of images.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-container</span> #<span class="hljs-attr">first</span> [<span class="hljs-attr">x</span>]=<span class="hljs-string">&quot;30&quot;</span> [<span class="hljs-attr">y</span>]=<span class="hljs-string">&quot;60&quot;</span> [<span class="hljs-attr">width</span>]=<span class="hljs-string">&quot;120&quot;</span> [<span class="hljs-attr">height</span>]=<span class="hljs-string">&quot;190&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://picsum.photos/320/320?image=434&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-magnifier</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box-container</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-zoom-box</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">&quot;first&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-zoom-box</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="zoom-box-container-attributes">Zoom-Box Container Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>x</code></td>\n<td>number</td>\n<td>0</td>\n<td>Left offset (optional)</td>\n</tr>\n<tr>\n<td><code>y</code></td>\n<td>number</td>\n<td>0</td>\n<td>Top offset (optional)</td>\n</tr>\n<tr>\n<td><code>width</code></td>\n<td>number</td>\n<td></td>\n<td>Width of zoomed box</td>\n</tr>\n<tr>\n<td><code>height</code></td>\n<td>number</td>\n<td></td>\n<td>Height of zoomed box</td>\n</tr>\n<tr>\n<td><code>resetOnOut</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Reset position to initial on mouse out</td>\n</tr>\n</tbody></table>\n<h3 id="zoom-box-attributes">Zoom-Box Attributes</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>image</code></td>\n<td>string</td>\n<td>&quot;&quot;</td>\n<td>High resolution image (optional)</td>\n</tr>\n<tr>\n<td><code>highResScale</code></td>\n<td>number</td>\n<td>1</td>\n<td>High resolution image scale multiplier (required if image is defined)</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("FgeQ")},"demo.component.ts":{type:"pre",content:n("5MnE")}}}}let j=(()=>{class s{}return s.\u0275mod=h.Kb({type:s}),s.\u0275inj=h.Jb({factory:function(a){return new(a||s)},imports:[[l.c,c.b,p.hb,t.g.forChild([{path:"",component:c.a,data:{demo:r}}])]]}),s})()}}]);