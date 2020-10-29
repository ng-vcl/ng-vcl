(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"GEV+":function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return g})),n.d(a,"ButtonGroupDemoModule",(function(){return b}));var l=n("ofXK"),t=n("3Pt+"),p=n("tyNb"),c=n("19H1"),e=n("2FIb"),o=n("fXoL"),h=n("ErXM"),u=n("6B8K"),j=n("9Rb9");let r=(()=>{class s{constructor(){this.value1=2,this.value2=1,this.value3=[]}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=o.Gb({type:s,selectors:[["ng-component"]],decls:42,vars:19,consts:[[3,"value","valueChange"],["vcl-button","",3,"value"],[1,"vertical",2,"width","10em",3,"value","valueChange"],["selectionMode","multiple",3,"value","valueChange"],["vcl-square-button","",3,"value"],["icon","fas:italic"],["icon","fas:bold"],["icon","fas:underline"],["selectionMode","multiple",3,"disabled"]],template:function(s,a){1&s&&(o.Sb(0,"h3"),o.yc(1,"Horizontal button group"),o.Rb(),o.Sb(2,"vcl-button-group",0),o.ac("valueChange",(function(s){return a.value1=s})),o.Sb(3,"button",1),o.yc(4,"One"),o.Rb(),o.Sb(5,"button",1),o.yc(6,"Two"),o.Rb(),o.Sb(7,"button",1),o.yc(8,"Three"),o.Rb(),o.Rb(),o.Sb(9,"p"),o.yc(10),o.Rb(),o.Sb(11,"h3"),o.yc(12,"Vertical button group"),o.Rb(),o.Sb(13,"vcl-button-group",2),o.ac("valueChange",(function(s){return a.value2=s})),o.Sb(14,"button",1),o.yc(15,"One"),o.Rb(),o.Sb(16,"button",1),o.yc(17,"Two"),o.Rb(),o.Sb(18,"button",1),o.yc(19,"Three"),o.Rb(),o.Rb(),o.Sb(20,"p"),o.yc(21),o.Rb(),o.Sb(22,"h3"),o.yc(23,"Horizontal button group (multiple selection)"),o.Rb(),o.Sb(24,"vcl-button-group",3),o.ac("valueChange",(function(s){return a.value3=s})),o.Sb(25,"button",4),o.Nb(26,"vcl-icon",5),o.Rb(),o.Sb(27,"button",4),o.Nb(28,"vcl-icon",6),o.Rb(),o.Sb(29,"button",4),o.Nb(30,"vcl-icon",7),o.Rb(),o.Rb(),o.Sb(31,"p"),o.yc(32),o.Rb(),o.Sb(33,"h3"),o.yc(34,"Disabled button group"),o.Rb(),o.Sb(35,"vcl-button-group",8),o.Sb(36,"button",4),o.Nb(37,"vcl-icon",5),o.Rb(),o.Sb(38,"button",4),o.Nb(39,"vcl-icon",6),o.Rb(),o.Sb(40,"button",4),o.Nb(41,"vcl-icon",7),o.Rb(),o.Rb()),2&s&&(o.Ab(2),o.ic("value",a.value1),o.Ab(1),o.ic("value",1),o.Ab(2),o.ic("value",2),o.Ab(2),o.ic("value",3),o.Ab(3),o.Ac("Selected value: ",a.value1,""),o.Ab(3),o.ic("value",a.value2),o.Ab(1),o.ic("value",1),o.Ab(2),o.ic("value",2),o.Ab(2),o.ic("value",3),o.Ab(3),o.Ac("Selected value: ",a.value2,""),o.Ab(3),o.ic("value",a.value3),o.Ab(1),o.ic("value","italic"),o.Ab(2),o.ic("value","bold"),o.Ab(2),o.ic("value","underline"),o.Ab(3),o.Ac("Selected values: ",a.value3,""),o.Ab(3),o.ic("disabled",!0),o.Ab(1),o.ic("value","italic"),o.Ab(2),o.ic("value","bold"),o.Ab(2),o.ic("value","underline"))},directives:[h.a,u.b,j.a],encapsulation:2}),s})();function g(){return{label:"Button Group",tabs:{Demo:r,"README.md":{type:"md",content:'<h1 id="vcl-button-group">vcl-button-group</h1>\n<p>A button group which distributes space for each button equally to occupy 100% horizontal space.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLButtonGroupModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLButtonGroupModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-button-group</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;single&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Action 1<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Action 2<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>Action 3<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-button-group</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>any | any[]</td>\n<td></td>\n<td>Index of the selected button(s)</td>\n</tr>\n<tr>\n<td><code>selectionMode</code></td>\n<td><code>single</code> | <code>multiple</code></td>\n<td><code>single</code></td>\n<td>Select only one or multiple buttons</td>\n</tr>\n</tbody></table>\n<h4 id="events">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>event (any | any[])</td>\n<td>Triggers when selected buttons change</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("V+FK")},"demo.component.ts":{type:"pre",content:n("qgr+")}}}}let b=(()=>{class s{}return s.\u0275mod=o.Kb({type:s}),s.\u0275inj=o.Jb({factory:function(a){return new(a||s)},imports:[[l.c,t.m,e.b,c.B,c.C,c.Q,p.g.forChild([{path:"",component:e.a,data:{demo:g}}])]]}),s})()},"V+FK":function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Horizontal button group<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-button-group</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value1"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"1"</span>&gt;</span>One<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span>&gt;</span>Two<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"3"</span>&gt;</span>Three<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-button-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Selected value: {{value1}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Vertical button group<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-button-group</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vertical"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 10em"</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value2"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"1"</span>&gt;</span>One<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span>&gt;</span>Two<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"3"</span>&gt;</span>Three<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-button-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Selected value: {{value2}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Horizontal button group (multiple selection)<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-button-group</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"multiple"</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value3"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'italic\'"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:italic"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'bold\'"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:bold"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'underline\'"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:underline"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-button-group</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Selected values: {{value3}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Disabled button group<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-button-group</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"multiple"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'italic\'"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:italic"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'bold\'"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:bold"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"\'underline\'"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fas:underline"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-button-group</span>&gt;</span>\n'},"qgr+":function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> ButtonGroupDemoComponent {\n\n  value1 = <span class="hljs-number">2</span>;\n  value2 = <span class="hljs-number">1</span>;\n  value3 = [];\n\n}\n'}}]);