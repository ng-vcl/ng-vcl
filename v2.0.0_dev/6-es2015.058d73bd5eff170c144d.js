(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4cmz":function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { ComponentLayerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'bar.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BarComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> layer: ComponentLayerRef</span>) { }\n\n  <span class="hljs-keyword">get</span> title() {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.layer.data.title;\n  }\n\n  close(value?: <span class="hljs-built_in">string</span>) {\n    <span class="hljs-keyword">this</span>.layer.close({\n      value\n    });\n  }\n}\n'},"7Fbk":function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component, Injector, Injectable, Inject, forwardRef, HostBinding } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Overlay } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/cdk/overlay\'</span>;\n<span class="hljs-keyword">import</span> { ComponentLayerRef, LayerConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> NagLayerData {\n  allowDecline: <span class="hljs-built_in">boolean</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> NagLayerResult {\n  accept: <span class="hljs-built_in">boolean</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> INagLayer <span class="hljs-keyword">extends</span> ComponentLayerRef&lt;NagLayerData, NagLayerResult, NagComponent&gt; {\n  nag(): <span class="hljs-built_in">void</span>;\n}\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'nag.component.html\'</span>,\n  styles: [<span class="hljs-string">`:host { width: 100%; }`</span>]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> NagComponent {\n  <span class="hljs-comment">// Inject the ComponentLayerRef and use an interface for typings</span>\n  <span class="hljs-comment">// Injecting with forwardRef(() =&gt; NagLayer) would result in an `Cannot access \'NagLayer\' before initialization` at runtime when targeting es2015</span>\n  <span class="hljs-comment">// See https://github.com/angular/angular/issues/30106</span>\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-meta">@Inject</span>(ComponentLayerRef) <span class="hljs-keyword">public</span> layer: INagLayer</span>) { }\n\n  <span class="hljs-meta">@HostBinding</span>(<span class="hljs-string">\'class.nag\'</span>)\n  <span class="hljs-meta">@HostBinding</span>(<span class="hljs-string">\'class.container\'</span>)\n  <span class="hljs-meta">@HostBinding</span>(<span class="hljs-string">\'class.row\'</span>)\n  <span class="hljs-meta">@HostBinding</span>(<span class="hljs-string">\'class.justify-center\'</span>)\n  _hostClasses = <span class="hljs-literal">true</span>;\n\n  accept() {\n    <span class="hljs-keyword">this</span>.layer.nag();\n    <span class="hljs-keyword">this</span>.layer.close({\n      accept: <span class="hljs-literal">true</span>\n    });\n  }\n\n  decline() {\n    <span class="hljs-keyword">this</span>.layer.close({\n      accept: <span class="hljs-literal">false</span>\n    });\n  }\n}\n\n<span class="hljs-meta">@Injectable</span>({\n  providedIn: <span class="hljs-string">\'root\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> NagLayer <span class="hljs-keyword">extends</span> ComponentLayerRef&lt;NagLayerData, NagLayerResult, NagComponent&gt; <span class="hljs-keyword">implements</span> INagLayer {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">injector: Injector, <span class="hljs-keyword">private</span> overlay: Overlay</span>) {\n    <span class="hljs-keyword">super</span>(injector);\n  }\n\n  <span class="hljs-comment">// Return the layer component</span>\n  getComponent() {\n    <span class="hljs-keyword">return</span> NagComponent;\n  }\n\n  <span class="hljs-comment">// Overrides default configuration</span>\n  createLayerConfig(config?: LayerConfig): LayerConfig {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">super</span>.createLayerConfig({\n      closeOnEscape: <span class="hljs-literal">false</span>,\n      hasBackdrop: <span class="hljs-literal">false</span>,\n      width: <span class="hljs-string">\'100%\'</span>,\n      positionStrategy: <span class="hljs-keyword">this</span>.overlay.position()\n        .global()\n        .bottom()\n        .centerHorizontally()\n    }, config);\n  }\n\n  nag(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'Nag...\'</span>);\n  }\n}\n'},"7seb":function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { LayerService, LayerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n<span class="hljs-keyword">import</span> { BarComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./bar.component\'</span>;\n<span class="hljs-keyword">import</span> { NagLayer } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./nag.component\'</span>;\n\n<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> LayerDemoComponent {\n\n  barLayer: LayerRef;\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">\n    <span class="hljs-keyword">private</span> nagLayer: NagLayer,\n    layerService: LayerService,\n  </span>) {  \n    <span class="hljs-keyword">this</span>.barLayer = layerService.create(BarComponent, {\n      closeOnBackdropClick: <span class="hljs-literal">false</span>,\n      closeOnEscape: <span class="hljs-literal">false</span>\n    });\n\n  }\n\n  openBarComponent() {\n    <span class="hljs-keyword">this</span>.barLayer.open({\n      data: {\n        title: <span class="hljs-string">`bar component layer title (<span class="hljs-subst">${i++}</span>)`</span>\n      }\n    }).subscribe(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'Bar component result: \'</span> + result?.value);\n    });\n  }\n\n  openNagLayer() {\n    <span class="hljs-keyword">this</span>.nagLayer.open({\n      data: {\n        allowDecline: <span class="hljs-literal">true</span>\n      }\n    }).subscribe(<span class="hljs-function">(<span class="hljs-params">result</span>) =&gt;</span> {\n      <span class="hljs-keyword">if</span> (result.accept) {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'Accepted\'</span>);\n      } <span class="hljs-keyword">else</span> {\n        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'Declined\'</span>);\n      }\n    });\n  }\n\n  ngOnDestroy() {\n    <span class="hljs-keyword">this</span>.barLayer?.destroy();\n  }\n}\n'},DvOU:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-panel-dialog</span> [<span class="hljs-attr">showCloseButton</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">close</span>)=<span class="hljs-string">"close()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-panel-title</span>&gt;</span>{{title}}<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-panel-title</span>&gt;</span>\n  bar layer content\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">vclPanelFooterButton</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transparent outline"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"close()"</span>&gt;</span>Close Layer<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">vclPanelFooterButton</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"emphasized"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"close(\'data\')"</span>&gt;</span>Close Layer with result<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-panel-dialog</span>&gt;</span>\n'},FjNf:function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return v})),n.d(a,"LayerDemoModule",(function(){return w}));var l=n("tyNb"),t=n("ofXK"),e=n("19H1"),p=n("2FIb"),c=n("fXoL"),o=n("s+0I"),r=n("yMTc"),i=n("6B8K");let h=(()=>{class s{constructor(s){this.layer=s}get title(){return this.layer.data.title}close(s){this.layer.close({value:s})}}return s.\u0275fac=function(a){return new(a||s)(c.Mb(e.d))},s.\u0275cmp=c.Gb({type:s,selectors:[["ng-component"]],decls:8,vars:2,consts:[[3,"showCloseButton","close"],["vcl-button","","vclPanelFooterButton","",1,"transparent","outline",3,"click"],["vcl-button","","vclPanelFooterButton","",1,"emphasized",3,"click"]],template:function(s,a){1&s&&(c.Sb(0,"vcl-panel-dialog",0),c.ac("close",(function(){return a.close()})),c.Sb(1,"vcl-panel-title"),c.yc(2),c.Rb(),c.yc(3," bar layer content "),c.Sb(4,"button",1),c.ac("click",(function(){return a.close()})),c.yc(5,"Close Layer"),c.Rb(),c.Sb(6,"button",2),c.ac("click",(function(){return a.close("data")})),c.yc(7,"Close Layer with result"),c.Rb(),c.Rb()),2&s&&(c.ic("showCloseButton",!0),c.Ab(2),c.zc(a.title))},directives:[o.a,r.a,r.d,i.b,r.b],encapsulation:2}),s})();var j=n("rDax");function y(s,a){if(1&s){const s=c.Tb();c.Sb(0,"button",7),c.ac("click",(function(){return c.oc(s),c.dc().decline()})),c.yc(1,"Decline"),c.Rb()}}let g=(()=>{class s{constructor(s){this.layer=s,this._hostClasses=!0}accept(){this.layer.nag(),this.layer.close({accept:!0})}decline(){this.layer.close({accept:!1})}}return s.\u0275fac=function(a){return new(a||s)(c.Mb(e.d))},s.\u0275cmp=c.Gb({type:s,selectors:[["ng-component"]],hostVars:8,hostBindings:function(s,a){2&s&&c.Db("nag",a._hostClasses)("container",a._hostClasses)("row",a._hostClasses)("justify-center",a._hostClasses)},decls:11,vars:1,consts:[[1,"layout-width","row","center"],[1,"flex","layout-three"],["href","#"],[1,"row","justify-center","center","gutter-margin-l-r"],[1,"loose-button-group"],["vcl-button","","type","button",3,"click",4,"ngIf"],["vcl-button","","type","button",1,"emphasized",3,"click"],["vcl-button","","type","button",3,"click"]],template:function(s,a){1&s&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.yc(2," Cookies and similar technologies help us deliver our services. By using our services, you agree to our use of cookies. You can find further information about the use of Cookies on this website in our "),c.Sb(3,"a",2),c.yc(4,"privacy policy"),c.Rb(),c.yc(5,". "),c.Rb(),c.Sb(6,"div",3),c.Sb(7,"div",4),c.wc(8,y,2,0,"button",5),c.Sb(9,"button",6),c.ac("click",(function(){return a.accept()})),c.yc(10,"Accept"),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&s&&(c.Ab(8),c.ic("ngIf",a.layer.data.allowDecline))},directives:[t.t,i.b],styles:["[_nghost-%COMP%] { width: 100%; }"]}),s})(),u=(()=>{class s extends e.d{constructor(s,a){super(s),this.overlay=a}getComponent(){return g}createLayerConfig(s){return super.createLayerConfig({closeOnEscape:!1,hasBackdrop:!1,width:"100%",positionStrategy:this.overlay.position().global().bottom().centerHorizontally()},s)}nag(){console.log("Nag...")}}return s.\u0275fac=function(a){return new(a||s)(c.Wb(c.r),c.Wb(j.a))},s.\u0275prov=c.Ib({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var d=n("X9a5");function m(s,a){if(1&s){const s=c.Tb();c.Sb(0,"vcl-panel-dialog",3),c.ac("close",(function(){return c.oc(s),c.dc(),c.nc(11).close()})),c.Sb(1,"vcl-panel-title"),c.yc(2),c.Rb(),c.yc(3," Press escape or click outside of layer to close"),c.Nb(4,"br"),c.Nb(5,"br"),c.Sb(6,"button",4),c.ac("click",(function(){return c.oc(s),c.dc(),c.nc(11).close()})),c.yc(7,"Close layer"),c.Rb(),c.Rb()}if(2&s){const s=a.title;c.ic("showCloseButton",!0),c.Ab(2),c.zc(s)}}let b=0,f=(()=>{class s{constructor(s,a){this.nagLayer=s,this.barLayer=a.create(h,{closeOnBackdropClick:!1,closeOnEscape:!1})}openBarComponent(){this.barLayer.open({data:{title:`bar component layer title (${b++})`}}).subscribe(s=>{var a;console.log("Bar component result: "+(null===(a=s)||void 0===a?void 0:a.value))})}openNagLayer(){this.nagLayer.open({data:{allowDecline:!0}}).subscribe(s=>{s.accept?console.log("Accepted"):console.log("Declined")})}ngOnDestroy(){var s;null===(s=this.barLayer)||void 0===s||s.destroy()}}return s.\u0275fac=function(a){return new(a||s)(c.Mb(u),c.Mb(e.l))},s.\u0275cmp=c.Gb({type:s,selectors:[["ng-component"]],decls:12,vars:0,consts:[["vcl-button","",3,"click"],["vclLayer",""],["layer","vclLayer"],[3,"showCloseButton","close"],["vcl-button","","vclPanelFooterButton","",1,"transparent","outline",3,"click"]],template:function(s,a){if(1&s){const s=c.Tb();c.Sb(0,"button",0),c.ac("click",(function(){return c.oc(s),c.nc(11).open({data:{title:"Template layer"}})})),c.yc(1,"Open inline layer"),c.Rb(),c.Nb(2,"br"),c.Nb(3,"br"),c.Sb(4,"button",0),c.ac("click",(function(){return a.openBarComponent()})),c.yc(5,"Open bar component as layer"),c.Rb(),c.Nb(6,"br"),c.Nb(7,"br"),c.Sb(8,"button",0),c.ac("click",(function(){return a.openNagLayer()})),c.yc(9,"Open nag layer"),c.Rb(),c.wc(10,m,8,2,"ng-template",1,2,c.xc)}},directives:[i.b,d.a,o.a,r.a,r.d,r.b],encapsulation:2}),s})();function v(){return{label:"Layer",tabs:{Demo:f,"README.md":{type:"md",content:'<h1 id="vcl-layer">vcl-layer</h1>\n<p>An overlay placed in the center of the screen.<br>The layer uses @angular/cdk&apos;s <a href="https://material.angular.io/cdk/overlay/api">overlay api</a> for positioning.</p>\n<h2 id="usage">Usage</h2>\n<h3 id="the-layer-reference-object">The layer reference object</h3>\n<p>A layer reference object extends from the <code>TemplateLayerRef</code> or <code>ComponentLayerRef</code> class which allows layer interaction like listening for events and opening/closing the layer.<br>Both classes implement the <code>Layer</code> interface`</p>\n<p>A layer reference can be created via the <code>vcl-layer</code> component or with the <code>LayerService</code> from a component class:</p>\n<h4 id="inline-layer-templatelayerref">Inline layer (TemplateLayerRef)</h4>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;myTemplateLayer.open()&quot;</span>&gt;</span>Open Layer<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-layer</span> #<span class="hljs-attr">myTemplateLayer</span>=<span class="hljs-string">&quot;vclLayer&quot;</span>&gt;</span>\n  <span class="hljs-comment">&lt;!-- myTemplateLayer is of type TemplateLayerRef --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vclPanel vclM-0&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vclPanelBody&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vclPanelContent&quot;</span>&gt;</span>\n        Content\n        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;myTemplateLayer.close()&quot;</span>&gt;</span>Close Layer<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-layer</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-layer</span>&gt;</span></pre>\n<h4 id="component-layer-componentlayerref">Component layer (ComponentLayerRef)</h4>\n<p>Any component can inject the ComponentLayerRef class.<br>It will be available if the component is opened via the layer service</p>\n<pre class="hljs"><span class="hljs-keyword">import</span> { ComponentLayerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n<span class="hljs-comment">// This is just a common component</span>\n<span class="hljs-meta">@Component</span>({ ... })\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyLayerComponent {\n  <span class="hljs-comment">// layer is a reference to the current layer.</span>\n  <span class="hljs-comment">// Its value is null when the component is not used as a layer</span>\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-meta">@Optional</span>() <span class="hljs-keyword">private</span> layer?: ComponentLayerRef</span>) { }\n\n  close() {\n    <span class="hljs-comment">// Close the layer</span>\n    <span class="hljs-keyword">this</span>.layer.close(<span class="hljs-string">&apos;result&apos;</span>);\n  }\n}</pre>\n<p>Any component can be opened with the layer service.<br>Make sure the component is provided in your module as part of the <code>entryComponents</code>.</p>\n<pre class="hljs"><span class="hljs-keyword">import</span> { LayerService } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n<span class="hljs-keyword">import</span> { MyLayerComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./my-layer.component&apos;</span>;\n\n<span class="hljs-meta">@Component</span>({ ... })\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">\n    <span class="hljs-keyword">private</span> layerService: LayerService <span class="hljs-comment">// This is the reference to the component layer</span>\n  </span>) {}\n\n  openComponentLayer() {\n    <span class="hljs-keyword">const</span> layer = <span class="hljs-keyword">this</span>.layerService.open(MyLayerComponent);\n    layer.afterClose.subscribe(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {\n      <span class="hljs-built_in">console</span>.log(result);\n    });\n  }\n}</pre>\n<h3 id="api">API</h3>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> Layer {\n  readonly afterClose: Observable&lt;<span class="hljs-built_in">any</span>&gt;;\n  readonly isVisible: <span class="hljs-built_in">boolean</span>;\n  readonly data: <span class="hljs-built_in">any</span>;\n  toggle(): <span class="hljs-built_in">void</span>;\n  open(config?: LayerConfig): <span class="hljs-built_in">void</span>;\n  close(result?: <span class="hljs-built_in">any</span>): <span class="hljs-built_in">void</span>;\n  destroy(): <span class="hljs-built_in">void</span>;\n}\n\n<span class="hljs-keyword">class</span> LayerService {\n  create(component: ComponentType&lt;TComponent&gt;, config?: LayerConfig): ComponentLayerRef;\n  open(component: ComponentType&lt;TComponent&gt;, config?: LayerConfig): ComponentLayerRef;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> LayerConfig&lt;TData = <span class="hljs-built_in">any</span>&gt; <span class="hljs-keyword">extends</span> OverlayConfig {\n  data?: TData;\n  closeOnBackdropClick?: <span class="hljs-built_in">boolean</span>;\n  closeOnEscape?: <span class="hljs-built_in">boolean</span>;\n}\n</pre>\n<h4 id="vcl-layer-attributes">vcl-layer attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>closeOnBackdropClick</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Wether a the layer should close when clicked outside</td>\n</tr>\n<tr>\n<td><code>closeOnEscape</code></td>\n<td>boolean</td>\n<td>true</td>\n<td>Wether a the layer should close when escape is pressed</td>\n</tr>\n<tr>\n<td><code>position</code></td>\n<td>PositionStrategy</td>\n<td></td>\n<td></td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("z7eq")},"demo.component.ts":{type:"pre",content:n("7seb")},"nag.component.html":{type:"pre",content:n("wNeY")},"nag.component.ts":{type:"pre",content:n("7Fbk")},"bar.component.html":{type:"pre",content:n("DvOU")},"bar.component.ts":{type:"pre",content:n("4cmz")}}}}let w=(()=>{class s{}return s.\u0275mod=c.Kb({type:s}),s.\u0275inj=c.Jb({factory:function(a){return new(a||s)},providers:[u],imports:[[t.c,p.b,e.Q,e.A,e.N,e.V,l.g.forChild([{path:"",component:p.a,data:{demo:v}}])]]}),s})()},wNeY:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"layout-width row center"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex layout-three"</span>&gt;</span>\n    Cookies and similar technologies help us deliver our services. By using our services,\n    you agree to our use of cookies. You can find further information about the\n    use of Cookies on this website in our <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>privacy policy<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row justify-center center gutter-margin-l-r"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"loose-button-group"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"layer.data.allowDecline"</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"decline()"</span>&gt;</span>Decline<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"emphasized"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"accept()"</span>&gt;</span>Accept<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},z7eq:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"layer.open({data: { title: \'Template layer\' }})"</span>&gt;</span>Open inline layer<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"openBarComponent()"</span>&gt;</span>Open bar component as layer<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"openNagLayer()"</span>&gt;</span>Open nag layer<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">vclLayer</span> #<span class="hljs-attr">layer</span>=<span class="hljs-string">"vclLayer"</span> <span class="hljs-attr">let-title</span>=<span class="hljs-string">"title"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-panel-dialog</span> [<span class="hljs-attr">showCloseButton</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">close</span>)=<span class="hljs-string">"layer.close()"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">vcl-panel-title</span>&gt;</span>{{title}}<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-panel-title</span>&gt;</span>\n    Press escape or click outside of layer to close<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">vclPanelFooterButton</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transparent outline"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"layer.close()"</span>&gt;</span>Close layer<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-panel-dialog</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n'}}]);