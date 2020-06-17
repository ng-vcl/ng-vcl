function _classCallCheck(s,n){if(!(s instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(s,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function _createClass(s,n,a){return n&&_defineProperties(s.prototype,n),a&&_defineProperties(s,a),s}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+eiR":function(s,n,a){"use strict";a.r(n),a.d(n,"demo",(function(){return k})),a.d(n,"NotifierDemoModule",(function(){return A}));var t,l=a("ofXK"),p=a("tyNb"),c=a("3Pt+"),o=a("19H1"),i=a("2FIb"),e=a("fXoL"),r=a("cjwi"),h=a("ErXM"),j=a("6B8K"),g=a("9Rb9"),u=a("+rOU"),m=a("qVRD"),b=((t=function(){function s(n,a,t){_classCallCheck(this,s),this.notifierService=n,this.templateRef=a,this.viewContainerRef=t,this.opts={content:void 0}}return _createClass(s,[{key:"open",value:function(){this.notificationOverlayRef=this.notifierService.queue(Object.assign(Object.assign({},this.opts),{content:new u.i(this.templateRef,this.viewContainerRef,{content:"string"==typeof this.opts.content?this.opts.content:void 0})}))}},{key:"close",value:function(){var s;null===(s=this.notificationOverlayRef)||void 0===s||s.close()}}]),s}()).\u0275fac=function(s){return new(s||t)(e.Mb(m.a),e.Mb(e.K),e.Mb(e.N))},t.\u0275dir=e.Hb({type:t,selectors:[["","vclNotification",""]],inputs:{opts:["vclNotification","opts"]},exportAs:["vclNotification"]}),t),f=["htmlNotification"];function d(s,n){if(1&s&&(e.Sb(0,"p"),e.yc(1,"A "),e.Sb(2,"span",13),e.yc(3,"centered"),e.Rb(),e.yc(4," modal message"),e.Rb(),e.Sb(5,"p"),e.yc(6),e.Rb()),2&s){var a=n.content;e.Ab(6),e.Ac("Notification content: ",a,"")}}var v,w=1,y=((v=function(){function s(n){_classCallCheck(this,s),this.notifier=n,this.positions=o.r,this.position=o.r.TopRight,this.modalNotificationOptions={content:"foo",position:o.r.Center,title:"modal",hasBackdrop:!0,timeout:!1,showCloseButton:!0}}return _createClass(s,[{key:"default",value:function(){this.notifier.queue({content:"A message "+w++,position:this.position})}},{key:"info",value:function(){this.notifier.info({content:"An info message "+w++,title:"Info",icon:"vcl:info",position:this.position})}},{key:"success",value:function(){this.notifier.success({content:"A success message "+w++,title:"Success",position:this.position})}},{key:"warning",value:function(){this.notifier.warning({content:"A warning "+w++,title:"Warning",position:this.position})}},{key:"error",value:function(){this.notifier.error({content:"An error message "+w++,title:"Error",position:this.position})}},{key:"custom",value:function(){this.notifier.queue({content:"A custom class message",position:this.position,showCloseButton:!1,timeout:1e4,class:"demoCustomNotifier"})}}]),s}()).\u0275fac=function(s){return new(s||v)(e.Mb(o.s))},v.\u0275cmp=e.Gb({type:v,selectors:[["ng-component"]],viewQuery:function(s,n){var a;1&s&&e.Dc(f,!0),2&s&&e.mc(a=e.bc())&&(n.htmlNotification=a.first)},decls:57,vars:9,consts:[["type","success"],["mode","single",3,"value","valueChange"],["vcl-square-button","",3,"value"],["icon","mdi:arrow-top-right"],["icon","mdi:arrow-up"],["icon","mdi:arrow-top-left"],["icon","mdi:arrow-bottom-right"],["icon","mdi:arrow-down"],["icon","mdi:arrow-bottom-left"],["icon","mdi:arrow-all"],["vcl-button","",3,"click"],[3,"vclNotification"],["modalNotification","vclNotification"],[2,"font-style","italic"]],template:function(s,n){if(1&s){var a=e.Tb();e.Sb(0,"h3"),e.yc(1,"Inline notifications"),e.Rb(),e.Sb(2,"vcl-notification"),e.yc(3," An inline message\n"),e.Rb(),e.Sb(4,"vcl-notification",0),e.Sb(5,"vcl-notification-title"),e.yc(6,"Success"),e.Rb(),e.yc(7," An inline success message\n"),e.Rb(),e.Sb(8,"h3"),e.yc(9,"Growl style notifications"),e.Rb(),e.Sb(10,"vcl-button-group",1),e.ac("valueChange",(function(s){return n.position=s})),e.Sb(11,"button",2),e.Nb(12,"vcl-icon",3),e.Rb(),e.Sb(13,"button",2),e.Nb(14,"vcl-icon",4),e.Rb(),e.Sb(15,"button",2),e.Nb(16,"vcl-icon",5),e.Rb(),e.Sb(17,"button",2),e.Nb(18,"vcl-icon",6),e.Rb(),e.Sb(19,"button",2),e.Nb(20,"vcl-icon",7),e.Rb(),e.Sb(21,"button",2),e.Nb(22,"vcl-icon",8),e.Rb(),e.Sb(23,"button",2),e.Nb(24,"vcl-icon",9),e.Rb(),e.Rb(),e.Nb(25,"br"),e.Nb(26,"br"),e.Sb(27,"button",10),e.ac("click",(function(){return n.default()})),e.yc(28,"An message"),e.Rb(),e.Nb(29,"br"),e.Nb(30,"br"),e.Sb(31,"button",10),e.ac("click",(function(){return n.info()})),e.yc(32,"An info message"),e.Rb(),e.Nb(33,"br"),e.Nb(34,"br"),e.Sb(35,"button",10),e.ac("click",(function(){return n.success()})),e.yc(36,"A success message"),e.Rb(),e.Nb(37,"br"),e.Nb(38,"br"),e.Sb(39,"button",10),e.ac("click",(function(){return n.warning()})),e.yc(40,"A warning"),e.Rb(),e.Nb(41,"br"),e.Nb(42,"br"),e.Sb(43,"button",10),e.ac("click",(function(){return n.error()})),e.yc(44,"An error message"),e.Rb(),e.Nb(45,"br"),e.Nb(46,"br"),e.Sb(47,"button",10),e.ac("click",(function(){return n.custom()})),e.yc(48,"A custom message"),e.Rb(),e.Nb(49,"br"),e.Nb(50,"br"),e.Sb(51,"button",10),e.ac("click",(function(){return e.oc(a),e.nc(56).open()})),e.yc(52,"A centered modal message"),e.Rb(),e.Nb(53,"br"),e.Nb(54,"br"),e.wc(55,d,7,1,"ng-template",11,12,e.xc)}2&s&&(e.Ab(10),e.ic("value",n.position),e.Ab(1),e.ic("value",n.positions.TopRight),e.Ab(2),e.ic("value",n.positions.Top),e.Ab(2),e.ic("value",n.positions.TopLeft),e.Ab(2),e.ic("value",n.positions.BottomRight),e.Ab(2),e.ic("value",n.positions.Bottom),e.Ab(2),e.ic("value",n.positions.BottomLeft),e.Ab(2),e.ic("value",n.positions.Center),e.Ab(32),e.ic("vclNotification",n.modalNotificationOptions))},directives:[r.a,r.b,h.a,j.b,g.a,b],styles:["\n    .demoCustomNotifier {\n      background-color: black;\n      color: white;\n    }\n  "],encapsulation:2}),v);function k(){return{label:"Notification",tabs:{Demo:y,"README.md":{type:"md",content:'<h1 id="vcl-notifications">vcl-notifications</h1>\n<p>Notification messages for events with growl-style support</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLNotifierModule, VCLLayerModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ \n    VCLNotifierModule,\n  ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<p>Inline</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-notification</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span> \n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vclNotificationHeader</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  An inline success message\n  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vclNotificationFooter</span>&gt;</span>Footer<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-notification</span>&gt;</span></pre>\n<p>Growl-style</p>\n<pre class="hljs"><span class="hljs-meta">@Component</span>({ ... })\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> notifier: NotifierService</span>) {}\n\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.queue({\n      content: <span class="hljs-string">&apos;A message&apos;</span>\n    });\n  }\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.info({\n      content: <span class="hljs-string">&apos;An info message&apos;</span>\n    });\n  }\n  success() {\n    <span class="hljs-keyword">this</span>.notifier.success({\n      content: <span class="hljs-string">&apos;A success message&apos;</span>,\n      position: NotifierPosition.BottomRight\n    });\n  }\n  warning() {\n    <span class="hljs-keyword">this</span>.notifier.warning({\n      content: <span class="hljs-string">&apos;A warning&apos;</span>,\n      showCloseButton: <span class="hljs-literal">true</span>,\n      timeout: <span class="hljs-number">10000</span>\n    });\n  }\n  error() {\n    <span class="hljs-keyword">this</span>.notifier.error({\n      content: <span class="hljs-string">&apos;An error message&apos;</span>,\n      timeout: <span class="hljs-literal">false</span>,\n      icon: <span class="hljs-string">&apos;fas:warning&apos;</span>,\n      position: NotifierPosition.TopLeft,\n      <span class="hljs-keyword">class</span>: <span class="hljs-string">&apos;my-error-message&apos;</span>\n    });\n  }\n}</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> [<span class="hljs-attr">vclNotification</span>[]=<span class="hljs-string">&quot;{}&quot;</span> #<span class="hljs-attr">n</span>=<span class="hljs-string">&quot;vclNotification&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;n.open()&quot;</span>&gt;</span>Show notification<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> NotifierType {\n  None,\n  Info,\n  Success,\n  Warning,\n  <span class="hljs-built_in">Error</span>\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> NotifierPosition {\n  TopRight,\n  Top,\n  TopLeft,\n  BottomRight,\n  Bottom,\n  BottomLeft,\n  Center\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> NotifierOptions {\n  content?: <span class="hljs-built_in">string</span>;\n  <span class="hljs-keyword">type</span>?: NotifierType;\n  icon: <span class="hljs-built_in">string</span> | <span class="hljs-literal">false</span>;\n  showCloseButton?: <span class="hljs-built_in">boolean</span>;\n  position?: NotifierPosition;\n  timeout?: <span class="hljs-built_in">number</span> | <span class="hljs-built_in">boolean</span>;\n  <span class="hljs-keyword">class</span>?: <span class="hljs-built_in">string</span>;\n  context?: <span class="hljs-built_in">any</span>;\n}</pre>\n'},"demo.component.html":{type:"pre",content:a("2nGh")},"demo.component.ts":{type:"pre",content:a("ZkaI")}}}}var N,A=((N=function s(){_classCallCheck(this,s)}).\u0275mod=e.Kb({type:N}),N.\u0275inj=e.Jb({factory:function(s){return new(s||N)},imports:[[l.c,c.m,i.b,o.T,o.z,o.A,p.g.forChild([{path:"",component:i.a,data:{demo:k}}])]]}),N)},"2nGh":function(s,n){s.exports='\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Inline notifications<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-notification</span>&gt;</span> \n  An inline message\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-notification</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-notification</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span> \n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-notification-title</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-notification-title</span>&gt;</span>\n  An inline success message\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-notification</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Growl style notifications<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-button-group</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"position"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"single"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.TopRight"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-top-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.Top"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-up"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.TopLeft"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-top-left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.BottomRight"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-bottom-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.Bottom"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-down"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.BottomLeft"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-bottom-left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"positions.Center"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"mdi:arrow-all"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-button-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"default()"</span>&gt;</span>An message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"info()"</span>&gt;</span>An info message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"success()"</span>&gt;</span>A success message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"warning()"</span>&gt;</span>A warning<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"error()"</span>&gt;</span>An error message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"custom()"</span>&gt;</span>A custom message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"modalNotification.open()"</span>&gt;</span>A centered modal message<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> \n  [<span class="hljs-attr">vclNotification</span>]=<span class="hljs-string">"modalNotificationOptions"</span>\n  #<span class="hljs-attr">modalNotification</span>=<span class="hljs-string">"vclNotification"</span>\n  <span class="hljs-attr">let-content</span>=<span class="hljs-string">"content"</span>\n  &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>A <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"font-style: italic;"</span>&gt;</span>centered<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> modal message<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Notification content: {{content}}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n\n'},ZkaI:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NotifierPosition, NotifierService, NotifierOptions } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n<span class="hljs-keyword">import</span> { Component, Input, ViewEncapsulation, ViewChild, TemplateRef } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { TemplatePortal } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/cdk/portal\'</span>;\n\n<span class="hljs-keyword">let</span> cnt = <span class="hljs-number">1</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>,\n  encapsulation: ViewEncapsulation.None,\n  styles: [<span class="hljs-string">`\n    .demoCustomNotifier {\n      background-color: black;\n      color: white;\n    }\n  `</span>]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> NotifierDemoComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> notifier: NotifierService</span>) {}\n\n  positions = NotifierPosition;\n  position: NotifierPosition = NotifierPosition.TopRight;\n\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'htmlNotification\'</span>)\n  htmlNotification: TemplatePortal;\n\n  <span class="hljs-keyword">default</span>() {\n    <span class="hljs-keyword">this</span>.notifier.queue({\n      content: <span class="hljs-string">\'A message \'</span> + cnt++,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.info({\n      content: <span class="hljs-string">\'An info message \'</span> + cnt++,\n      title: <span class="hljs-string">\'Info\'</span>,\n      icon: <span class="hljs-string">\'vcl:info\'</span>,\n      position: <span class="hljs-keyword">this</span>.position,\n    });\n  }\n  success() {\n    <span class="hljs-keyword">this</span>.notifier.success({\n      content: <span class="hljs-string">\'A success message \'</span> + cnt++,\n      title: <span class="hljs-string">\'Success\'</span>,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  warning() {\n    <span class="hljs-keyword">this</span>.notifier.warning({\n      content: <span class="hljs-string">\'A warning \'</span> + cnt++,\n      title: <span class="hljs-string">\'Warning\'</span>,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  error() {\n    <span class="hljs-keyword">this</span>.notifier.error({\n      content: <span class="hljs-string">\'An error message \'</span> + cnt++,\n      title: <span class="hljs-string">\'Error\'</span>,\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  custom() {\n    <span class="hljs-keyword">this</span>.notifier.queue({\n      content: <span class="hljs-string">\'A custom class message\'</span>,\n      position: <span class="hljs-keyword">this</span>.position,\n      showCloseButton: <span class="hljs-literal">false</span>,\n      timeout: <span class="hljs-number">10000</span>,\n      <span class="hljs-keyword">class</span>: <span class="hljs-string">\'demoCustomNotifier\'</span>\n    });\n  }\n\n  modalNotificationOptions: NotifierOptions = {\n    content: <span class="hljs-string">\'foo\'</span>, \n    position: NotifierPosition.Center, \n    title: <span class="hljs-string">\'modal\'</span>, \n    hasBackdrop: <span class="hljs-literal">true</span>, \n    timeout: <span class="hljs-literal">false</span>, \n    showCloseButton: <span class="hljs-literal">true</span> \n  }\n\n}\n'}}]);