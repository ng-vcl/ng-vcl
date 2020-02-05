function _classCallCheck(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(s,a){for(var n=0;n<a.length;n++){var l=a[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,l.key,l)}}function _createClass(s,a,n){return a&&_defineProperties(s.prototype,a),n&&_defineProperties(s,n),s}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"/DZT":function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic radio group<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"rgValue2"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclRadioButtonLabel</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"m"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      Male\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:mars"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclRadioButtonLabel</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"f"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      Female\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:venus"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclRadioButtonLabel</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"g"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      Genderless\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:genderless"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Current value: {{rgValue2}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Vertical radio group<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-group</span> <span class="hljs-attr">layout</span>=<span class="hljs-string">"vertical"</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"rgValue3"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclRadioButtonLabel</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"m"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      Male\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:mars"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclRadioButtonLabel</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"f"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      Female\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:venus"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">vclRadioButtonLabel</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"g"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n      Genderless\n      <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:genderless"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Current value: {{rgValue3}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n'},"41wQ":function(s,a,n){"use strict";n.r(a);var l,t=n("ofXK"),p=n("3Pt+"),c=n("tyNb"),e=n("19H1"),o=n("2FIb"),r=n("fXoL"),h=n("EaCA"),g=n("8Ii/"),i=n("btmi"),d=n("Vp9f"),j=n("9Rb9"),u=((l=function(){function s(){_classCallCheck(this,s),this.isChecked=!1,this.rgValue1="red",this.rgValue2="f",this.rgValue3="g"}return _createClass(s,[{key:"onChange",value:function(s){console.log("radio-button onChange fired"),console.dir(s)}}]),s}()).\u0275fac=function(s){return new(s||l)},l.\u0275cmp=r.Gb({type:l,selectors:[["ng-component"]],decls:40,vars:4,consts:[[3,"ngModel","ngModelChange"],["vclRadioButtonLabel",""],["value","m"],["icon","fas:mars"],["value","f"],["icon","fas:venus"],["value","g"],["icon","fas:genderless"],["layout","vertical",3,"ngModel","ngModelChange"]],template:function(s,a){1&s&&(r.Sb(0,"h3"),r.yc(1,"Basic radio group"),r.Rb(),r.Sb(2,"vcl-radio-group",0),r.ac("ngModelChange",(function(s){return a.rgValue2=s})),r.Sb(3,"label",1),r.Nb(4,"vcl-radio-button",2),r.Sb(5,"vcl-icogram"),r.yc(6," Male "),r.Nb(7,"vcl-icon",3),r.Rb(),r.Rb(),r.Sb(8,"label",1),r.Nb(9,"vcl-radio-button",4),r.Sb(10,"vcl-icogram"),r.yc(11," Female "),r.Nb(12,"vcl-icon",5),r.Rb(),r.Rb(),r.Sb(13,"label",1),r.Nb(14,"vcl-radio-button",6),r.Sb(15,"vcl-icogram"),r.yc(16," Genderless "),r.Nb(17,"vcl-icon",7),r.Rb(),r.Rb(),r.Rb(),r.Sb(18,"p"),r.yc(19),r.Rb(),r.Sb(20,"h3"),r.yc(21,"Vertical radio group"),r.Rb(),r.Sb(22,"vcl-radio-group",8),r.ac("ngModelChange",(function(s){return a.rgValue3=s})),r.Sb(23,"label",1),r.Nb(24,"vcl-radio-button",2),r.Sb(25,"vcl-icogram"),r.yc(26," Male "),r.Nb(27,"vcl-icon",3),r.Rb(),r.Rb(),r.Sb(28,"label",1),r.Nb(29,"vcl-radio-button",4),r.Sb(30,"vcl-icogram"),r.yc(31," Female "),r.Nb(32,"vcl-icon",5),r.Rb(),r.Rb(),r.Sb(33,"label",1),r.Nb(34,"vcl-radio-button",6),r.Sb(35,"vcl-icogram"),r.yc(36," Genderless "),r.Nb(37,"vcl-icon",7),r.Rb(),r.Rb(),r.Rb(),r.Sb(38,"p"),r.yc(39),r.Rb()),2&s&&(r.Ab(2),r.ic("ngModel",a.rgValue2),r.Ab(17),r.Ac("Current value: ",a.rgValue2,""),r.Ab(3),r.ic("ngModel",a.rgValue3),r.Ab(17),r.Ac("Current value: ",a.rgValue3,""))},directives:[h.a,p.r,p.u,g.a,i.a,d.a,j.a],encapsulation:2}),l);function b(){return{label:"Radio Button",tabs:{Demo:u,"README.md":{type:"md",content:'<h1 id="vcl-radio-button">vcl-radio-button</h1>\n<p>A radio group with radio buttons utilizing <code>vcl-icon</code></p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-group</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span> Red\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-button</span>&gt;</span> Green\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-radio-group</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-radio-button-attributes">vcl-radio-button attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>checked</code>*</td>\n<td>boolean</td>\n<td>false</td>\n<td>2-Way-Binding. State of radio button</td>\n</tr>\n<tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>Value of the radio button</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the radio button</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-radio-group-attributes">vcl-radio-group attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any | any[]</td>\n<td></td>\n<td>Value of the checked radio button</td>\n</tr>\n<tr>\n<td><code>layout</code></td>\n<td>&apos;horizontal&apos; | &apos;vertical&apos;</td>\n<td>&apos;horizontal&apos;</td>\n<td>Renders radio group horizontally or vertically</td>\n</tr>\n</tbody></table>\n<h4 id="events">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>any | any[]</td>\n<td>emits the new value when radio group value changes</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("/DZT")},"demo.component.ts":{type:"pre",content:n("x/Bt")}}}}n.d(a,"demo",(function(){return b})),n.d(a,"RadioButtonDemoModule",(function(){return v}));var m,v=((m=function s(){_classCallCheck(this,s)}).\u0275mod=r.Kb({type:m}),m.\u0275inj=r.Jb({factory:function(s){return new(s||m)},imports:[[t.c,p.m,o.b,e.ab,e.N,c.g.forChild([{path:"",component:o.a,data:{demo:b}}])]]}),m)},"x/Bt":function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> RadioButtonDemoComponent {\n\n  isChecked = <span class="hljs-literal">false</span>;\n\n  rgValue1 = <span class="hljs-string">\'red\'</span>;\n  rgValue2 = <span class="hljs-string">\'f\'</span>;\n  rgValue3 = <span class="hljs-string">\'g\'</span>;\n\n  onChange(value) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'radio-button onChange fired\'</span>);\n    <span class="hljs-built_in">console</span>.dir(value);\n  }\n}\n'}}]);