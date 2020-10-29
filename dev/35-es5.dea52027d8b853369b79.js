function _classCallCheck(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(s,a){for(var n=0;n<a.length;n++){var l=a[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,l.key,l)}}function _createClass(s,a,n){return a&&_defineProperties(s.prototype,a),n&&_defineProperties(s,n),s}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"/DZT":function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic radio group<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"rgValue2"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"m"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      Male\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:mars"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"f"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      Female\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:venus"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"g"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      Genderless\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:genderless"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Current value: {{rgValue2}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Vertical radio group<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-group</span> <span class="hljs-attr">layout</span>=<span class="hljs-string">"vertical"</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"rgValue3"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"m"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      Male\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:mars"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"f"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      Female\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:venus"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"g"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      Genderless\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:genderless"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Current value: {{rgValue3}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n'},"41wQ":function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return u})),n.d(a,"RadioButtonDemoModule",(function(){return m}));var l,t=n("ofXK"),p=n("3Pt+"),c=n("tyNb"),e=n("19H1"),o=n("2FIb"),r=n("fXoL"),h=n("EaCA"),g=n("btmi"),i=n("Vp9f"),d=n("9Rb9"),j=((l=function(){function s(){_classCallCheck(this,s),this.isChecked=!1,this.rgValue1="red",this.rgValue2="f",this.rgValue3="g"}return _createClass(s,[{key:"onChange",value:function(s){console.log("radio-button onChange fired"),console.dir(s)}}]),s}()).\u0275fac=function(s){return new(s||l)},l.\u0275cmp=r.Gb({type:l,selectors:[["ng-component"]],decls:34,vars:4,consts:[[3,"ngModel","ngModelChange"],["value","m"],["icon","fas:mars"],["value","f"],["icon","fas:venus"],["value","g"],["icon","fas:genderless"],["layout","vertical",3,"ngModel","ngModelChange"]],template:function(s,a){1&s&&(r.Sb(0,"h3"),r.yc(1,"Basic radio group"),r.Rb(),r.Sb(2,"vcl-radio-group",0),r.ac("ngModelChange",(function(s){return a.rgValue2=s})),r.Sb(3,"vcl-radio-button",1),r.Sb(4,"vcl-icogram"),r.yc(5," Male "),r.Nb(6,"vcl-icon",2),r.Rb(),r.Rb(),r.Sb(7,"vcl-radio-button",3),r.Sb(8,"vcl-icogram"),r.yc(9," Female "),r.Nb(10,"vcl-icon",4),r.Rb(),r.Rb(),r.Sb(11,"vcl-radio-button",5),r.Sb(12,"vcl-icogram"),r.yc(13," Genderless "),r.Nb(14,"vcl-icon",6),r.Rb(),r.Rb(),r.Rb(),r.Sb(15,"p"),r.yc(16),r.Rb(),r.Sb(17,"h3"),r.yc(18,"Vertical radio group"),r.Rb(),r.Sb(19,"vcl-radio-group",7),r.ac("ngModelChange",(function(s){return a.rgValue3=s})),r.Sb(20,"vcl-radio-button",1),r.Sb(21,"vcl-icogram"),r.yc(22," Male "),r.Nb(23,"vcl-icon",2),r.Rb(),r.Rb(),r.Sb(24,"vcl-radio-button",3),r.Sb(25,"vcl-icogram"),r.yc(26," Female "),r.Nb(27,"vcl-icon",4),r.Rb(),r.Rb(),r.Sb(28,"vcl-radio-button",5),r.Sb(29,"vcl-icogram"),r.yc(30," Genderless "),r.Nb(31,"vcl-icon",6),r.Rb(),r.Rb(),r.Rb(),r.Sb(32,"p"),r.yc(33),r.Rb()),2&s&&(r.Ab(2),r.ic("ngModel",a.rgValue2),r.Ab(14),r.Ac("Current value: ",a.rgValue2,""),r.Ab(3),r.ic("ngModel",a.rgValue3),r.Ab(14),r.Ac("Current value: ",a.rgValue3,""))},directives:[h.a,p.r,p.u,g.a,i.a,d.a],encapsulation:2}),l);function u(){return{label:"Radio Button",tabs:{Demo:j,"README.md":{type:"md",content:'<h1 id="vcl-radio-button">vcl-radio-button</h1>\n<p>A radio group with radio buttons utilizing <code>vcl-icon</code></p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-group</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span> Red\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span> Green\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-group</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-radio-button-attributes">vcl-radio-button attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>checked</code>*</td>\n<td>boolean</td>\n<td>false</td>\n<td>2-Way-Binding. State of radio button</td>\n</tr>\n<tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>Value of the radio button</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the radio button</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-radio-group-attributes">vcl-radio-group attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any | any[]</td>\n<td></td>\n<td>Value of the checked radio button</td>\n</tr>\n<tr>\n<td><code>layout</code></td>\n<td>&apos;horizontal&apos; | &apos;vertical&apos;</td>\n<td>&apos;horizontal&apos;</td>\n<td>Renders radio group horizontally or vertically</td>\n</tr>\n</tbody></table>\n<h4 id="events">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any | any[]</td>\n<td>emits the new value when radio group value changes</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("/DZT")},"demo.component.ts":{type:"pre",content:n("x/Bt")}}}}var b,m=((b=function s(){_classCallCheck(this,s)}).\u0275mod=r.Kb({type:b}),b.\u0275inj=r.Jb({factory:function(s){return new(s||b)},imports:[[t.c,p.m,o.b,e.ab,e.M,c.g.forChild([{path:"",component:o.a,data:{demo:u}}])]]}),b)},"x/Bt":function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> RadioButtonDemoComponent {\n\n  isChecked = <span class="hljs-literal">false</span>;\n\n  rgValue1 = <span class="hljs-string">\'red\'</span>;\n  rgValue2 = <span class="hljs-string">\'f\'</span>;\n  rgValue3 = <span class="hljs-string">\'g\'</span>;\n\n  onChange(value) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'radio-button onChange fired\'</span>);\n    <span class="hljs-built_in">console</span>.dir(value);\n  }\n}\n'}}]);