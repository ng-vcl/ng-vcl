(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"2pKz":function(s,a,l){"use strict";l.r(a);var n=l("ofXK"),t=l("3Pt+"),e=l("tyNb"),c=l("19H1"),p=l("+J/9"),h=l("2FIb"),i=l("fXoL"),j=l("I9Sx"),g=l("zDo1"),m=l("StUX"),r=l("gCzt");function v(s,a){if(1&s&&(i.Tb(0,"vcl-select-list-item",12),i.Tb(1,"vcl-select-list-label"),i.Ac(2),i.Rb(),i.Rb()),2&s){const s=a.$implicit;i.jc("value",s.value),i.zb(2),i.Bc(s.label)}}let b=(()=>{class s{constructor(){this.value1=void 0,this.value2=[],this.items=Array.from(Array(30).keys()).map(s=>({label:"item "+(s+1),value:s+1}))}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=i.Gb({type:s,selectors:[["ng-component"]],decls:44,vars:5,consts:[[3,"value","valueChange"],["label"," - "],["value","gr"],["value","fr"],["value","de"],["value","gb","label","United Kingdom"],["value","jp"],["value","cn"],["value","th"],["placeholder","Select items"],["selectionMode","multiple",3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(s,a){1&s&&(i.Tb(0,"h3"),i.Ac(1,"single-select"),i.Rb(),i.Tb(2,"vcl-select"),i.Tb(3,"vcl-select-list",0),i.bc("valueChange",(function(s){return a.value1=s})),i.Tb(4,"vcl-select-list-item",1),i.Tb(5,"vcl-select-list-label"),i.Ac(6,"None"),i.Rb(),i.Rb(),i.Tb(7,"vcl-select-list-header"),i.Ac(8,"Europe"),i.Rb(),i.Tb(9,"vcl-select-list-item",2),i.Tb(10,"vcl-select-list-label"),i.Ac(11,"Greece"),i.Rb(),i.Tb(12,"vcl-select-list-sublabel"),i.Ac(13,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),i.Rb(),i.Rb(),i.Tb(14,"vcl-select-list-item",3),i.Tb(15,"vcl-select-list-label"),i.Ac(16,"France"),i.Rb(),i.Rb(),i.Tb(17,"vcl-select-list-item",4),i.Tb(18,"vcl-select-list-label"),i.Ac(19,"Germany"),i.Rb(),i.Rb(),i.Tb(20,"vcl-select-list-item",5),i.Tb(21,"vcl-select-list-label"),i.Ac(22,"The United Kingdom of Great Britain and Northern Ireland"),i.Rb(),i.Rb(),i.Tb(23,"vcl-select-list-header"),i.Ac(24,"Asia"),i.Rb(),i.Tb(25,"vcl-select-list-item",6),i.Tb(26,"vcl-select-list-label"),i.Ac(27,"Japan"),i.Rb(),i.Rb(),i.Tb(28,"vcl-select-list-item",7),i.Tb(29,"vcl-select-list-label"),i.Ac(30,"China"),i.Rb(),i.Rb(),i.Tb(31,"vcl-select-list-item",8),i.Tb(32,"vcl-select-list-label"),i.Ac(33,"Thailand"),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Tb(34,"p"),i.Ac(35),i.Rb(),i.Nb(36,"br"),i.Tb(37,"h3"),i.Ac(38,"multi-select"),i.Rb(),i.Tb(39,"vcl-select",9),i.Tb(40,"vcl-select-list",10),i.bc("valueChange",(function(s){return a.value2=s})),i.yc(41,v,3,2,"vcl-select-list-item",11),i.Rb(),i.Rb(),i.Tb(42,"p"),i.Ac(43),i.Rb()),2&s&&(i.zb(3),i.jc("value",a.value1),i.zb(32),i.Cc(" Selected value: ",a.value1,""),i.zb(5),i.jc("value",a.value2),i.zb(1),i.jc("ngForOf",a.items),i.zb(2),i.Cc(" Selected values: ",a.value2,""))},directives:[j.a,g.a,m.a,m.b,r.a,m.c,n.s],encapsulation:2}),s})();function o(){return{label:"Select",tabs:{Demo:b,"README.md":{type:"md",content:'<h1 id="vcl-select">vcl-select</h1>\n<p>A select control. Wraps the vcl-select-list to render a list of selectable items in a dropdown.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-select</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot; -&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>[Clear selection]<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Item 1<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Item 2<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Item 3<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-select-attributes">vcl-select attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>placeholder</code></td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the select</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:l("XQVd")},"demo.component.ts":{type:"pre",content:l("WM4m")}}}}l.d(a,"demo",(function(){return o})),l.d(a,"SelectDemoModule",(function(){return u}));let u=(()=>{class s{}return s.\u0275mod=i.Kb({type:s}),s.\u0275inj=i.Jb({factory:function(a){return new(a||s)},imports:[[n.c,t.m,h.b,c.db,p.c,e.g.forChild([{path:"",component:h.a,data:{demo:o}}])]]}),s})()},WM4m:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> SelectDemoComponent {\n\n  value1 = <span class="hljs-literal">undefined</span>;\n  value2 = [];\n\n  items = <span class="hljs-built_in">Array</span>.from(<span class="hljs-built_in">Array</span>(<span class="hljs-number">30</span>).keys()).map(<span class="hljs-function"><span class="hljs-params">i</span> =&gt;</span> ({\n    label: <span class="hljs-string">\'item \'</span> + (i + <span class="hljs-number">1</span>),\n    value: i + <span class="hljs-number">1</span>\n  }));\n\n}\n'},XQVd:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single-select<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-select</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value1"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">" - "</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>None<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Europe<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gr"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Greece<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-sublabel</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"fr"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>France<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"de"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Germany<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"gb"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"United Kingdom"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>The United Kingdom of Great Britain and Northern Ireland<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-header</span>&gt;</span>Asia<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-header</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"jp"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Japan<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"cn"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>China<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"th"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>Thailand<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Selected value: {{value1}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>multi-select<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-select</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Select items"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value2"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"multiple"</span> &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-item</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-select-list-label</span>&gt;</span>{{item.label}}<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-label</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select-list</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-select</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> Selected values: {{value2}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n'}}]);