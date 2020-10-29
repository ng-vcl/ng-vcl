(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"5fBO":function(s,t){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { TourService, TourOptions } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TourDemoComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">public</span> tour: TourService</span>) { }\n\n  <span class="hljs-keyword">public</span> startTour() {\n    <span class="hljs-keyword">this</span>.tour.initialize();\n    <span class="hljs-keyword">this</span>.tour.start();\n  }\n}\n'},UtIC:function(s,t){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">section</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vlcContentArea"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-overlay</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-overlay</span>&gt;</span>\n    \n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"col"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"button"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"startTour()"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"icogram"</span>&gt;</span>\n                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text"</span>&gt;</span>Start tour<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>   \n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-25p"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">h1</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span> #<span class="hljs-attr">heading1</span>&gt;</span>Heading<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-25p"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span> #<span class="hljs-attr">heading2</span>&gt;</span>Heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-25p"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span> #<span class="hljs-attr">heading3</span>&gt;</span>Heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"grid-span-25p"</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n                <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span> #<span class="hljs-attr">heading4</span>&gt;</span>Heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span>\n        [<span class="hljs-attr">target</span>]=<span class="hljs-string">"heading1"</span>\n        <span class="hljs-attr">title</span>=<span class="hljs-string">"Step Title"</span>&gt;</span>\n            Demo tour first step with title\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span> \n        [<span class="hljs-attr">target</span>]=<span class="hljs-string">"heading2"</span>\n        [<span class="hljs-attr">offsetY</span>]=<span class="hljs-string">"50"</span>&gt;</span>\n            Demo tour second step no title with Y offset\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n    \n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span>\n        [<span class="hljs-attr">target</span>]=<span class="hljs-string">"heading3"</span>\n        [<span class="hljs-attr">originX</span>]=<span class="hljs-string">"\'center\'"</span>\n        [<span class="hljs-attr">originY</span>]=<span class="hljs-string">"\'top\'"</span>\n        [<span class="hljs-attr">overlayX</span>]=<span class="hljs-string">"\'center\'"</span>\n        [<span class="hljs-attr">overlayY</span>]=<span class="hljs-string">"\'bottom\'"</span>&gt;</span>\n            Demo tour third step top position\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span>\n        [<span class="hljs-attr">target</span>]=<span class="hljs-string">"heading4"</span>\n        [<span class="hljs-attr">originX</span>]=<span class="hljs-string">"\'start\'"</span>\n        [<span class="hljs-attr">overlayX</span>]=<span class="hljs-string">"\'end\'"</span>\n        [<span class="hljs-attr">originY</span>]=<span class="hljs-string">"\'center\'"</span>\n        [<span class="hljs-attr">overlayY</span>]=<span class="hljs-string">"\'center\'"</span>&gt;</span>\n            Demo tour fourth step left position\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span>\n        [<span class="hljs-attr">target</span>]=<span class="hljs-string">"heading2"</span>\n        [<span class="hljs-attr">originX</span>]=<span class="hljs-string">"\'end\'"</span>\n        [<span class="hljs-attr">overlayX</span>]=<span class="hljs-string">"\'start\'"</span>\n        [<span class="hljs-attr">originY</span>]=<span class="hljs-string">"\'center\'"</span>\n        [<span class="hljs-attr">overlayY</span>]=<span class="hljs-string">"\'center\'"</span>&gt;</span>\n            Demo tour fifth step right position\n    <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span>\n    \n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n'},sxPw:function(s,t,n){"use strict";n.r(t),n.d(t,"demo",(function(){return h})),n.d(t,"TourDemoModule",(function(){return i}));var a=n("ofXK"),l=n("tyNb"),e=n("19H1"),p=n("2FIb"),o=n("fXoL"),r=n("oFcg"),c=n("yDKU");let d=(()=>{class s{constructor(s){this.tour=s}startTour(){this.tour.initialize(),this.tour.start()}}return s.\u0275fac=function(t){return new(t||s)(o.Mb(e.v))},s.\u0275cmp=o.Gb({type:s,selectors:[["ng-component"]],decls:38,vars:18,consts:[[1,"vlcContentArea"],[1,"col"],["type","button",1,"button",3,"click"],[1,"icogram"],[1,"text"],[1,"grid-span-25p"],[1,"container"],["heading1",""],["heading2",""],["heading3",""],["heading4",""],["title","Step Title",3,"target"],[3,"target","offsetY"],[3,"target","originX","originY","overlayX","overlayY"],[3,"target","originX","overlayX","originY","overlayY"]],template:function(s,t){if(1&s&&(o.Sb(0,"section",0),o.Nb(1,"vcl-tour-overlay"),o.Sb(2,"div",1),o.Sb(3,"div"),o.Sb(4,"button",2),o.ac("click",(function(){return t.startTour()})),o.Sb(5,"div",3),o.Sb(6,"span",4),o.yc(7,"Start tour"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(8,"div"),o.Sb(9,"div",5),o.Sb(10,"h1",6,7),o.yc(12,"Heading"),o.Rb(),o.Rb(),o.Sb(13,"div",5),o.Nb(14,"br"),o.Sb(15,"p",6,8),o.yc(17,"Heading"),o.Rb(),o.Rb(),o.Sb(18,"div",5),o.Nb(19,"br"),o.Sb(20,"p",6,9),o.yc(22,"Heading"),o.Rb(),o.Rb(),o.Sb(23,"div",5),o.Nb(24,"br"),o.Sb(25,"p",6,10),o.yc(27,"Heading"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(28,"vcl-tour-step",11),o.yc(29," Demo tour first step with title "),o.Rb(),o.Sb(30,"vcl-tour-step",12),o.yc(31," Demo tour second step no title with Y offset "),o.Rb(),o.Sb(32,"vcl-tour-step",13),o.yc(33," Demo tour third step top position "),o.Rb(),o.Sb(34,"vcl-tour-step",14),o.yc(35," Demo tour fourth step left position "),o.Rb(),o.Sb(36,"vcl-tour-step",14),o.yc(37," Demo tour fifth step right position "),o.Rb(),o.Rb()),2&s){const s=o.nc(11),t=o.nc(16),n=o.nc(21),a=o.nc(26);o.Ab(28),o.ic("target",s),o.Ab(2),o.ic("target",t)("offsetY",50),o.Ab(2),o.ic("target",n)("originX","center")("originY","top")("overlayX","center")("overlayY","bottom"),o.Ab(2),o.ic("target",a)("originX","start")("overlayX","end")("originY","center")("overlayY","center"),o.Ab(2),o.ic("target",t)("originX","end")("overlayX","start")("originY","center")("overlayY","center")}},directives:[r.a,c.a],encapsulation:2}),s})();function h(){return{label:"Tour",tabs:{Demo:d,"README.md":{type:"md",content:'<h1 id="vcl-tour-step-and-vcl-tour-overlay">vcl-tour-step and vcl-tour-overlay</h1>\n<p>Simple and customizable application tour component with overlay.</p>\n<p>Note: For the highlight to work, the target element has to have a background-color.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLTourModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLTourModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{\n\n  <span class="hljs-keyword">constructor</span>(public tour: TourService){ }\n\n  startTour() {\n    <span class="hljs-keyword">this</span>.tour.start();\n  }\n}</pre>\n<pre class="hljs"><span class="hljs-comment">&lt;!-- Overlay element inserted on top of the page--&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-overlay</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-overlay</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Start tour --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;startTour()&quot;</span>&gt;</span>Begin tour<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- Some application element --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;foo&quot;</span>&gt;</span>Some element<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-tour-step</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;#foo&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;some title&quot;</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- ANY HTML HERE --&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-tour-step</span>&gt;</span></pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-tour-step-attributes">vcl-tour-step attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>debug</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output debug information</td>\n</tr>\n<tr>\n<td><code>debugPopover</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output <code>vcl-tour-step</code>&apos;s <code>vcl-popover</code> debug information</td>\n</tr>\n<tr>\n<td><code>title</code></td>\n<td>string</td>\n<td></td>\n<td>Tour step title</td>\n</tr>\n<tr>\n<td><code>target</code></td>\n<td>string  ElementRef  Element</td>\n<td></td>\n<td>The target can be a selector, element or ElementRef instance</td>\n</tr>\n<tr>\n<td><code>order</code></td>\n<td>number</td>\n<td></td>\n<td>The order number in which tour step should be shown, necessary if same element used multiple times</td>\n</tr>\n<tr>\n<td><code>targetX</code></td>\n<td>AttachmentX</td>\n<td>AttachmentX.Center</td>\n<td>Position of the target-side</td>\n</tr>\n<tr>\n<td><code>attachmentX</code></td>\n<td>AttachmentX</td>\n<td>AttachmentX.Center</td>\n<td>Position of the popover-side</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentX</code></td>\n<td>number</td>\n<td></td>\n<td><code>vcl-popover</code>&apos;s AttachmentX offset</td>\n</tr>\n<tr>\n<td><code>targetY</code></td>\n<td>AttachmentY</td>\n<td>AttachmentY.Bottom</td>\n<td>Position of the target-vertical</td>\n</tr>\n<tr>\n<td><code>attachmentY</code></td>\n<td>AttachmentY</td>\n<td>AttachmentY.Top</td>\n<td>Position of the popover-vertical</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentY</code></td>\n<td>number</td>\n<td></td>\n<td><code>vcl-popover</code>&apos;s AttachmentY offset</td>\n</tr>\n</tbody></table>\n<h4 id="tourservice-events">TourService events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>end$</code></td>\n<td>true</td>\n<td>Event is emitted when the tour is finished or ended</td>\n</tr>\n<tr>\n<td><code>tourComponent$</code></td>\n<td>TourComponent</td>\n<td>Current <code>TourComponent</code> is emitted on each <code>vcl-tour-step</code></td>\n</tr>\n</tbody></table>\n<h3 id="tourservice-default-options">TourService default options</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>debug</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output debug information</td>\n</tr>\n<tr>\n<td><code>debugTour</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output every <code>vcl-tour-step</code> debug information</td>\n</tr>\n<tr>\n<td><code>debugPopover</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Output every <code>vcl-tour-step</code>&apos;s <code>vcl-popover</code> debug information</td>\n</tr>\n<tr>\n<td><code>useOrder</code></td>\n<td>boolean</td>\n<td>false</td>\n<td><code>vcl-tour-step</code>&apos;s <code>@Input() order</code> is not used and instead the service relies on the DOM element creation order</td>\n</tr>\n<tr>\n<td><code>elementsDisabled</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Disabling highlightedElement (click) wont work</td>\n</tr>\n<tr>\n<td><code>applyRelative</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Applying position:relative to highlightedElement (disable in case you want to highlight absolute positioned elements)</td>\n</tr>\n<tr>\n<td><code>dismissOnOverlay</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Go to next step when clicking on overlay (close tour if this is last step)</td>\n</tr>\n<tr>\n<td><code>zIndex</code></td>\n<td>number</td>\n<td>20</td>\n<td>Used <code>z-index</code> for <code>vcl-tour-step</code> components</td>\n</tr>\n<tr>\n<td><code>dismissOnOverlay</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Go to next step when clicking on overlay (close tour if this is last step)</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentX</code></td>\n<td>number</td>\n<td>0</td>\n<td>Used AttachmentX offset for <code>vcl-tour-step</code> components</td>\n</tr>\n<tr>\n<td><code>offsetAttachmentY</code></td>\n<td>number</td>\n<td>0</td>\n<td>Used AttachmentY offset for <code>vcl-tour-step</code> components</td>\n</tr>\n</tbody></table>\n<h4 id="custom-options-usage">Custom options usage</h4>\n<pre class="hljs"> startTour() {\n    <span class="hljs-keyword">this</span>.tour.initialize({<span class="hljs-attr">elementsDisabled</span>: <span class="hljs-literal">false</span>}); <span class="hljs-comment">// TourOptions</span>\n    <span class="hljs-keyword">this</span>.tour.start();\n  }</pre>\n<p>export class TourOptions {<br>  debug: boolean = false;<br>  debugTour: boolean = false;<br>  debugPopover: boolean = false;</p>\n<p>  useOrder: boolean = false;<br>  elementsDisabled: boolean = true;<br>  applyRelative: boolean = true;<br>  dismissOnOverlay: boolean = false;</p>\n<p>  zIndex: number = 20;</p>\n<p>  previousLabel: string = &apos;Previous&apos;;<br>  nextLabel: string = &apos;Next&apos;;<br>  exitLabel: string = &apos;Exit&apos;;</p>\n<p>  previousIcon: string = &apos;fas fa-chevron-left&apos;;<br>  nextIcon: string = &apos;fas fa-chevron-right&apos;;<br>  exitIcon: string = &apos;fas fa-close&apos;;</p>\n<p>  buttonClass: string = &apos;&apos;;<br>}</p>\n'},"demo.component.html":{type:"pre",content:n("UtIC")},"demo.component.ts":{type:"pre",content:n("5fBO")}}}}let i=(()=>{class s{}return s.\u0275mod=o.Kb({type:s}),s.\u0275inj=o.Jb({factory:function(t){return new(t||s)},imports:[[a.c,p.b,e.kb,e.C,e.W,e.R,l.g.forChild([{path:"",component:p.a,data:{demo:h}}])]]}),s})()}}]);