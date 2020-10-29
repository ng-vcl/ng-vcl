function _classCallCheck(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{CI8A:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> InputDemoComponent {\n  data1 = <span class="hljs-string">\'foobar\'</span>;\n}\n'},UOgG:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>Basic input<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"data1"</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>Input value:<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span> {{data1}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>Input (autoselect)<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">autoselect</span>=<span class="hljs-string">true</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>Readonly input<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">value</span>=<span class="hljs-string">\'readonly\'</span> [<span class="hljs-attr">readonly</span>]=<span class="hljs-string">"true"</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>Disabled input<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">value</span>=<span class="hljs-string">\'disabled\'</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>textarea<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>Autogrowing textarea<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> [<span class="hljs-attr">autogrow</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">minRows</span>]=<span class="hljs-string">"5"</span> [<span class="hljs-attr">maxRows</span>]=<span class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-label</span>&gt;</span>Disabled textarea<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-field</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-field</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-form-control-group</span>&gt;</span>\n'},"V+ad":function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return b})),n.d(a,"InputDemoModule",(function(){return f}));var l,t=n("ofXK"),p=n("3Pt+"),c=n("tyNb"),e=n("19H1"),o=n("2FIb"),r=n("fXoL"),h=n("xsjC"),g=n("x1VK"),u=n("pKlR"),j=n("oZnf"),d=n("1/Kn"),i=n("mo8z"),m=((l=function s(){_classCallCheck(this,s),this.data1="foobar"}).\u0275fac=function(s){return new(s||l)},l.\u0275cmp=r.Gb({type:l,selectors:[["ng-component"]],decls:38,vars:8,consts:[["vclInput","",3,"ngModel","ngModelChange"],["vclInput","","autoselect","true"],["vclInput","","value","readonly",3,"readonly"],["vclInput","","value","disabled",3,"disabled"],["vclInput","","rows","3"],["vclInput","",3,"autogrow","minRows","maxRows"],["vclInput","",3,"disabled"]],template:function(s,a){1&s&&(r.Sb(0,"vcl-form-control-group"),r.Sb(1,"vcl-label"),r.yc(2,"Basic input"),r.Rb(),r.Sb(3,"vcl-input-field"),r.Sb(4,"input",0),r.ac("ngModelChange",(function(s){return a.data1=s})),r.Rb(),r.Rb(),r.Rb(),r.Sb(5,"b"),r.yc(6,"Input value:"),r.Rb(),r.yc(7),r.Sb(8,"vcl-form-control-group"),r.Sb(9,"vcl-label"),r.yc(10,"Input (autoselect)"),r.Rb(),r.Sb(11,"vcl-input-field"),r.Nb(12,"input",1),r.Rb(),r.Rb(),r.Sb(13,"vcl-form-control-group"),r.Sb(14,"vcl-label"),r.yc(15,"Readonly input"),r.Rb(),r.Sb(16,"vcl-input-field"),r.Nb(17,"input",2),r.Rb(),r.Rb(),r.Sb(18,"vcl-form-control-group"),r.Sb(19,"vcl-label"),r.yc(20,"Disabled input"),r.Rb(),r.Sb(21,"vcl-input-field"),r.Nb(22,"input",3),r.Rb(),r.Rb(),r.Sb(23,"vcl-form-control-group"),r.Sb(24,"vcl-label"),r.yc(25,"textarea"),r.Rb(),r.Sb(26,"vcl-input-field"),r.Nb(27,"textarea",4),r.Rb(),r.Rb(),r.Sb(28,"vcl-form-control-group"),r.Sb(29,"vcl-label"),r.yc(30,"Autogrowing textarea"),r.Rb(),r.Sb(31,"vcl-input-field"),r.Nb(32,"textarea",5),r.Rb(),r.Rb(),r.Sb(33,"vcl-form-control-group"),r.Sb(34,"vcl-label"),r.yc(35,"Disabled textarea"),r.Rb(),r.Sb(36,"vcl-input-field"),r.Nb(37,"textarea",6),r.Rb(),r.Rb()),2&s&&(r.Ab(4),r.ic("ngModel",a.data1),r.Ab(3),r.Ac(" ",a.data1," "),r.Ab(10),r.ic("readonly",!0),r.Ab(5),r.ic("disabled",!0),r.Ab(10),r.ic("autogrow",!0)("minRows",5)("maxRows",10),r.Ab(5),r.ic("disabled",!0))},directives:[h.a,g.a,u.a,j.a,d.a,p.c,p.r,p.u,i.a],encapsulation:2}),l);function b(){return{label:"Input",tabs:{Demo:m,"README.md":{type:"md",content:'<h1 id="input">input</h1>\n<p>Enhanced text input</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLInputModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLInputModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;data&quot;</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vclInput</span> <span class="hljs-attr">autoselect</span>=<span class="hljs-string">true</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">vclInput</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;data1&quot;</span> [<span class="hljs-attr">autogrow</span>]=<span class="hljs-string">&quot;true&quot;</span> [<span class="hljs-attr">minRows</span>]=<span class="hljs-string">&quot;5&quot;</span> [<span class="hljs-attr">maxRows</span>]=<span class="hljs-string">&quot;10&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="inputvclinput-attributes">input[vclInput] attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the input when true</td>\n</tr>\n<tr>\n<td><code>autoselect</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects text on focus</td>\n</tr>\n</tbody></table>\n<h4 id="textareavclinput-attributes">textarea[vclInput] Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>autogrow</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Adjusts the <code>rows</code> attribute so it matches the current values number of lines</td>\n</tr>\n<tr>\n<td><code>minRows</code></td>\n<td>number</td>\n<td></td>\n<td>The min value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>maxRows</code></td>\n<td>number</td>\n<td></td>\n<td>The max value for <code>rows</code> when using autogrow</td>\n</tr>\n<tr>\n<td><code>autoselect</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects text on focus</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("UOgG")},"demo.component.ts":{type:"pre",content:n("CI8A")}}}}var v,f=((v=function s(){_classCallCheck(this,s)}).\u0275mod=r.Kb({type:v}),v.\u0275inj=r.Jb({factory:function(s){return new(s||v)},imports:[[t.c,p.m,o.b,e.O,c.g.forChild([{path:"",component:o.a,data:{demo:b}}])]]}),v)}}]);