(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{LUmi:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"min-height:500px; width: 100%;"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">"true"</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"popover1.visible"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"popover1.toggle()"</span>&gt;</span>Toggle Popover<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">target</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"position: absolute; top: 300px; left: 200px; padding: 10px; border: 3px double green"</span>&gt;</span>\n    The target\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span>\n  #<span class="hljs-attr">popover1</span>=<span class="hljs-string">"vclPopover"</span>\n  [<span class="hljs-attr">target</span>]=<span class="hljs-string">"target"</span>\n  (<span class="hljs-attr">afterClose</span>)=<span class="hljs-string">"popover2.close()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 400px"</span>&gt;</span>\n    Popover is connected to the target <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"popover2.open()"</span>&gt;</span>Show additional Popover<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    &amp;nbsp;\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"popover1.close();"</span>&gt;</span>Close Popovers<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span>\n  #<span class="hljs-attr">popover2</span>=<span class="hljs-string">"vclPopover"</span>\n  [<span class="hljs-attr">closeOnOffClick</span>]=<span class="hljs-string">"true"</span>\n  [<span class="hljs-attr">target</span>]=<span class="hljs-string">"target"</span>\n  [<span class="hljs-attr">positions</span>]=<span class="hljs-string">"[{\n    originX: \'start\',\n    originY: \'top\',\n    overlayX: \'start\',\n    overlayY: \'bottom\'\n  }]"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 300px; height: 50px;"</span>&gt;</span>\n      Popover is connected to the target<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span>\n'},pFrn:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> PopoverDemoComponent {\n\n}\n'},pYTx:function(s,n,t){"use strict";t.r(n);var a=t("ofXK"),l=t("tyNb"),p=t("19H1"),e=t("2FIb"),o=t("fXoL"),c=t("6B8K"),r=t("Urql");const h=function(){return{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}},i=function(s){return[s]};let d=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=o.Gb({type:s,selectors:[["ng-component"]],decls:21,vars:9,consts:[[2,"min-height","500px","width","100%"],["vcl-button","",3,"selectable","selected","click"],[2,"position","absolute","top","300px","left","200px","padding","10px","border","3px double green"],["target",""],[3,"target","afterClose"],["popover1","vclPopover"],[2,"width","400px"],["vcl-button","",3,"click"],[3,"closeOnOffClick","target","positions"],["popover2","vclPopover"],[2,"width","300px","height","50px"]],template:function(s,n){if(1&s){const s=o.Ub();o.Tb(0,"div",0),o.Tb(1,"button",1),o.bc("click",(function(n){return o.pc(s),o.oc(7).toggle()})),o.Ac(2,"Toggle Popover"),o.Rb(),o.Tb(3,"div",2,3),o.Ac(5," The target "),o.Rb(),o.Rb(),o.Tb(6,"vcl-popover",4,5),o.bc("afterClose",(function(n){return o.pc(s),o.oc(17).close()})),o.Tb(8,"div",6),o.Ac(9," Popover is connected to the target "),o.Nb(10,"br"),o.Tb(11,"button",7),o.bc("click",(function(n){return o.pc(s),o.oc(17).open()})),o.Ac(12,"Show additional Popover"),o.Rb(),o.Ac(13," \xa0 "),o.Tb(14,"button",7),o.bc("click",(function(n){return o.pc(s),o.oc(7).close()})),o.Ac(15,"Close Popovers"),o.Rb(),o.Rb(),o.Rb(),o.Tb(16,"vcl-popover",8,9),o.Tb(18,"div",10),o.Ac(19," Popover is connected to the target"),o.Nb(20,"br"),o.Rb(),o.Rb()}if(2&s){const s=o.oc(4),n=o.oc(7);o.zb(1),o.jc("selectable",!0)("selected",n.visible),o.zb(5),o.jc("target",s),o.zb(10),o.jc("closeOnOffClick",!0)("target",s)("positions",o.lc(7,i,o.kc(6,h)))}},directives:[c.b,r.a],encapsulation:2}),s})();function g(){return{label:"Popover",tabs:{Demo:d,"README.md":{type:"md",content:'<h1 id="vcl-popover">vcl-popover</h1>\n<p>A popover is an overlay floating at the position of the target element.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">myTarget</span>&gt;</span>any dom element can be the target<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;popover.toggle()&quot;</span>&gt;</span> \n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span> #<span class="hljs-attr">popover</span>=<span class="hljs-string">&quot;vclPopover&quot;</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">&quot;myTarget&quot;</span> [<span class="hljs-attr">positions</span>]=<span class="hljs-string">&quot;myPositions&quot;</span>&gt;</span>\n  Popover-Content\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>target</code></td>\n<td>ElementRef | HTMLElement</td>\n<td></td>\n<td>the target must be an ElementRef instance</td>\n</tr>\n<tr>\n<td><code>positions</code></td>\n<td><a href="https://material.angular.io/cdk/overlay/api#ConnectedPosition">ConnectedPosition</a></td>\n<td></td>\n<td>@angular/cdk OverlayPosition array</td>\n</tr>\n<tr>\n<td><code>scrollStrategy</code></td>\n<td><a href="https://material.angular.io/cdk/overlay/api#ScrollStrategy">ScrollStrategy</a></td>\n<td></td>\n<td>@angular/cdk ScrollStrategy</td>\n</tr>\n<tr>\n<td><code>closeOnOffClick</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Close popover when on a click outside of the popover</td>\n</tr>\n<tr>\n<td><code>visible</code> <em>(1)</em></td>\n<td>boolean</td>\n<td>false</td>\n<td>the popover is hidden if false</td>\n</tr>\n</tbody></table>\n<h4 id="methods">Methods</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Attributes</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>open</code></td>\n<td></td>\n<td>will show the popover</td>\n</tr>\n<tr>\n<td><code>close</code></td>\n<td></td>\n<td>will hide the popover</td>\n</tr>\n<tr>\n<td><code>toggle</code></td>\n<td></td>\n<td>will show when hidden and hide when visible</td>\n</tr>\n</tbody></table>\n<p><em>(1) Supports Two-way binding</em></p>\n'},"demo.component.html":{type:"pre",content:t("LUmi")},"demo.component.ts":{type:"pre",content:t("pFrn")}}}}t.d(n,"demo",(function(){return g})),t.d(n,"PopoverDemoModule",(function(){return j}));let j=(()=>{class s{}return s.\u0275mod=o.Kb({type:s}),s.\u0275inj=o.Jb({factory:function(n){return new(n||s)},imports:[[a.c,e.b,p.Z,p.C,l.g.forChild([{path:"",component:e.a,data:{demo:g}}])]]}),s})()}}]);