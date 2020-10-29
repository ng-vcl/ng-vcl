(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"8xGh":function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> SliderDemoComponent {\n  value1 = <span class="hljs-number">0</span>;\n  value2 = <span class="hljs-number">0</span>;\n  value3 = <span class="hljs-number">0</span>;\n  value4 = <span class="hljs-number">0</span>;\n  value5 = <span class="hljs-number">0</span>;\n  value6 = <span class="hljs-number">0</span>;\n}\n'},C1sD:function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return i})),n.d(a,"SliderDemoModule",(function(){return j}));var l=n("ofXK"),t=n("tyNb"),e=n("3Pt+"),p=n("19H1"),c=n("2FIb"),h=n("fXoL"),r=n("AS2X");const d=function(){return["\u2600","\u2601","\u2602","\u2603","\u2604","1"]},u=function(){return["d","i","s","a","b","l","e","d"]};let o=(()=>{class s{constructor(){this.value1=0,this.value2=0,this.value3=0,this.value4=0,this.value5=0,this.value6=0}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=h.Gb({type:s,selectors:[["ng-component"]],decls:22,vars:30,consts:[[3,"value","valueChange"],[3,"value","min","max","scale","valueChange"],[3,"value","min","max","scale","lock","valueChange"],[3,"value","min","max","enableWheel","scale","valueChange"],[3,"value","min","max","disabled","scale","valueChange"]],template:function(s,a){1&s&&(h.Sb(0,"h3"),h.yc(1,"Basic"),h.Rb(),h.Sb(2,"vcl-slider",0),h.ac("valueChange",(function(s){return a.value1=s})),h.Rb(),h.yc(3),h.Sb(4,"h3"),h.yc(5,"With a scale"),h.Rb(),h.Sb(6,"vcl-slider",1),h.ac("valueChange",(function(s){return a.value2=s})),h.Rb(),h.yc(7),h.Sb(8,"h3"),h.yc(9,"With value locked to the scale"),h.Rb(),h.Sb(10,"vcl-slider",2),h.ac("valueChange",(function(s){return a.value3=s})),h.Rb(),h.yc(11),h.Sb(12,"h3"),h.yc(13,"custom labeled scale"),h.Rb(),h.Sb(14,"vcl-slider",3),h.ac("valueChange",(function(s){return a.value4=s})),h.Rb(),h.yc(15),h.Sb(16,"h3"),h.yc(17,"disabled"),h.Rb(),h.Sb(18,"vcl-slider",4),h.ac("valueChange",(function(s){return a.value5=s})),h.Rb(),h.Sb(19,"h3"),h.yc(20,"With value outer min/max bounds"),h.Rb(),h.Sb(21,"vcl-slider",1),h.ac("valueChange",(function(s){return a.value6=s})),h.Rb()),2&s&&(h.Ab(2),h.ic("value",a.value1),h.Ab(1),h.Ac("\nValue: ",a.value1," "),h.Ab(3),h.ic("value",a.value2)("min",0)("max",100)("scale",11),h.Ab(1),h.Ac("\nValue: ",a.value2," "),h.Ab(3),h.ic("value",a.value3)("min",0)("max",100)("scale",11)("lock",!0),h.Ab(1),h.Ac("\nValue: ",a.value3," "),h.Ab(3),h.ic("value",a.value4)("min",0)("max",5)("enableWheel",!0)("scale",h.jc(28,d)),h.Ab(1),h.Ac("\nValue: ",a.value4," "),h.Ab(3),h.ic("value",a.value5)("min",0)("max",7)("disabled",!0)("scale",h.jc(29,u)),h.Ab(3),h.ic("value",a.value6)("min",10)("max",100)("scale",11))},directives:[r.a],encapsulation:2}),s})();function i(){return{label:"Slider",tabs:{Demo:o,"README.md":{type:"md",content:'<h1 id="vcl-slider">vcl-slider</h1>\n<h2 id="usage">Usage</h2>\n<p><em>Note: HammerJS must be loaded for touch events</em></p>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLSliderModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLSliderModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-slider</span>\n  [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;value1&quot;</span>\n  [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>\n  [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;100&quot;</span>\n  [<span class="hljs-attr">scale</span>]=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-slider</span>&gt;</span></pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-slider</span>\n  [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;value2&quot;</span>\n  [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;0&quot;</span>\n  [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;50&quot;</span>\n  [<span class="hljs-attr">lock</span>]=<span class="hljs-string">&quot;5&quot;</span>\n  [<span class="hljs-attr">enableWheel</span>]=<span class="hljs-string">&quot;true&quot;</span>\n  [<span class="hljs-attr">scale</span>]=<span class="hljs-string">&quot;[&apos;Zero&apos;,&apos;One&apos;,&apos;Two&apos;,&apos;Three&apos;,&apos;Four&apos;,&apos;Five&apos;]&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-slider</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>number</td>\n<td></td>\n<td>The current value</td>\n</tr>\n<tr>\n<td><code>min</code></td>\n<td>number</td>\n<td>0</td>\n<td>The min value</td>\n</tr>\n<tr>\n<td><code>max</code></td>\n<td>number</td>\n<td>100</td>\n<td>The max value</td>\n</tr>\n<tr>\n<td><code>scale</code></td>\n<td>string[] &amp;#124 number</td>\n<td></td>\n<td>The legend below the slider</td>\n</tr>\n<tr>\n<td><code>lock</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>The selectable value is locked to the scale</td>\n</tr>\n<tr>\n<td><code>enableWheel</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Allows to change the value with the mouse wheel</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the slider when true</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the slider</td>\n</tr>\n</tbody></table>\n<h4 id="events">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any | any[]</td>\n<td>emits the new value when slider value changes</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("tEdQ")},"demo.component.ts":{type:"pre",content:n("8xGh")}}}}let j=(()=>{class s{}return s.\u0275mod=h.Kb({type:s}),s.\u0275inj=h.Jb({factory:function(a){return new(a||s)},imports:[[l.c,e.m,c.b,p.db,t.g.forChild([{path:"",component:c.a,data:{demo:i}}])]]}),s})()},tEdQ:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-slider</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-slider</span>&gt;</span>\nValue: {{value1}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With a scale<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-slider</span> \n  [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value2"</span> \n  [<span class="hljs-attr">min</span>]=<span class="hljs-string">"0"</span> \n  [<span class="hljs-attr">max</span>]=<span class="hljs-string">"100"</span>\n  [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"11"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-slider</span>&gt;</span>\nValue: {{value2}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With value locked to the scale<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-slider</span> \n  [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value3"</span> \n  [<span class="hljs-attr">min</span>]=<span class="hljs-string">"0"</span> \n  [<span class="hljs-attr">max</span>]=<span class="hljs-string">"100"</span>\n  [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"11"</span>\n  [<span class="hljs-attr">lock</span>]=<span class="hljs-string">"true"</span> &gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-slider</span>&gt;</span>\nValue: {{value3}}\n\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>custom labeled scale<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-slider</span> \n  [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value4"</span> \n  [<span class="hljs-attr">min</span>]=<span class="hljs-string">"0"</span> \n  [<span class="hljs-attr">max</span>]=<span class="hljs-string">"5"</span> \n  [<span class="hljs-attr">enableWheel</span>]=<span class="hljs-string">"true"</span> \n  [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"[\'\u2600\',\'\u2601\',\'\u2602\',\'\u2603\',\'\u2604\',\'1\']"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-slider</span>&gt;</span>\nValue: {{value4}}\n\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>disabled<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-slider</span> \n  [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value5"</span> \n  [<span class="hljs-attr">min</span>]=<span class="hljs-string">"0"</span> \n  [<span class="hljs-attr">max</span>]=<span class="hljs-string">"7"</span> \n  [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span> \n  [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"[\'d\',\'i\',\'s\',\'a\',\'b\',\'l\', \'e\', \'d\']"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-slider</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With value outer min/max bounds<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-slider</span> \n  [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value6"</span> \n  [<span class="hljs-attr">min</span>]=<span class="hljs-string">"10"</span> \n  [<span class="hljs-attr">max</span>]=<span class="hljs-string">"100"</span>\n  [<span class="hljs-attr">scale</span>]=<span class="hljs-string">"11"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-slider</span>&gt;</span>\n'}}]);