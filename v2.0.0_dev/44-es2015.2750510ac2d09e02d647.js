(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{lwGh:function(s,a,e){"use strict";e.r(a),e.d(a,"demo",(function(){return r})),e.d(a,"DateadapterDemoModule",(function(){return d}));var n=e("ofXK"),p=e("tyNb"),t=e("19H1"),l=e("2FIb"),o=e("fXoL");function r(){return{label:"Date Adapter",tabs:{"README.md":{type:"md",content:'<h1 id="vcldateadapter">VCLDateAdapter</h1>\n<p>The <code>VCLDateAdapter</code> is a service that provides utils for date operations.</p>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLDateadapterModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLDateadapterModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}\n</pre>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLDateAdapter } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;;\n\n<span class="hljs-meta">@Component</span>({ ... })\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> dateAdapter: VCLDateAdapter&lt;<span class="hljs-built_in">Date</span>&gt;</span>) {\n    <span class="hljs-keyword">const</span> today = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n    <span class="hljs-keyword">const</span> s = dateAdapter.format(today, <span class="hljs-string">&apos;date&apos;</span>);\n  }</pre>\n<p>Check the <code>VCLDateAdapter</code> <a href="https://github.com/ng-vcl/ng-vcl/tree/dev/lib/ng-vcl/src/dateadapter/dateadapter.ts">abstract class</a> for an overview of methods and properties.</p>\n<h3 id="date-representation">Date representation</h3>\n<p>The DateAdapter and components use the <code>VCLDate</code> generic type. The exact type is defined by the <code>VCLDateAdapter</code>.<br>The default implementation is using the native javascript date object.</p>\n<h4 id="date-range">Date range</h4>\n<p>A date range is defined by a start and an end date.</p>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> VCLDateRange&lt;VCLDate&gt; {\n  start: VCLDate;\n  end: VCLDate;\n}</pre>\n<h3 id="localization">Localization</h3>\n<p>The default date adapter uses the javascript <code>Intl</code> interfaces for localization.<br>The angular <code>LOCALE_ID</code> token is used to determine the application locale.</p>\n<p>Example:</p>\n<pre class="hljs"><span class="hljs-keyword">import</span> { LOCALE_ID } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@angular/core&apos;</span>;\n<span class="hljs-keyword">import</span> { platformBrowserDynamic } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@angular/platform-browser-dynamic&apos;</span>;\n<span class="hljs-keyword">import</span> { AppModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./app/app.module&apos;</span>;\n\nplatformBrowserDynamic().bootstrapModule(AppModule, {\n  providers: [{provide: LOCALE_ID, useValue: <span class="hljs-string">&apos;de&apos;</span> }]\n});</pre>\n<p>Check the <a href="https://angular.io/guide/i18n">official docs</a> for further information.</p>\n<h4 id="parsing-and-formatting-input-controls">Parsing and formatting input controls</h4>\n<p>One shortcomings of the native Date object is the lack of parsing support for specific locales.<br>The default data adapter expresses date and time for inputs in <code>ISO 8601</code>. e.g. <code>2019-08-08</code> or <code>18:11</code></p>\n<p>ng-vcl provides support for the following locales: <code>en</code>, <code>en-us</code>, <code>en-gb</code>, <code>de</code>, <code>de-AT</code>, <code>de-CH</code>, <code>de-DE</code>, <code>de-LI</code> and <code>de-LU</code><br>Add one or more of the following providers to active support for a locale.</p>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCL_NATIVE_DATE_ADAPTER_PARSER, NativeDateAdapterParserEN, NativeDateAdapterParserENGB, NativeDateAdapterParserDE } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  providers: [\n    {\n      <span class="hljs-comment">// `en`, `en-us`</span>\n      provide: VCL_NATIVE_DATE_ADAPTER_PARSER,\n      useClass: NativeDateAdapterParserEN,\n      multi: <span class="hljs-literal">true</span>\n    },\n    {\n      <span class="hljs-comment">// `en-gb</span>\n      provide: VCL_NATIVE_DATE_ADAPTER_PARSER,\n      useClass: NativeDateAdapterParserENGB,\n      multi: <span class="hljs-literal">true</span>\n    }  ,\n    {\n      <span class="hljs-comment">// `de`, `de-AT`, `de-CH`, `de-DE`, `de-LI`, `de-LU`</span>\n      provide: VCL_NATIVE_DATE_ADAPTER_PARSER,\n      useClass: NativeDateAdapterParserDE,\n      multi: <span class="hljs-literal">true</span>\n    }  \n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyApp {}</pre>\n<p>Other locales can be added by providing <code>VCL_NATIVE_DATE_ADAPTER_PARSER</code> with a class implementing the <code>VCLNativeDateAdapterParser</code><br>Check one of the existing <a href="https://github.com/ng-vcl/ng-vcl/tree/dev/lib/ng-vcl/src/dateadapter/parsers">providers</a> for an example.</p>\n<h3 id="weekday-offset">Weekday offset</h3>\n<p>The default first day of the week is Sunday.<br>Add the following provider for a weekday offset.</p>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCL_DATE_ADAPTER_WEEKDAY_OFFSET } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  providers: [\n    <span class="hljs-comment">// Calendar starts on Monday</span>\n    { provide: VCL_DATE_ADAPTER_WEEKDAY_OFFSET, useValue: <span class="hljs-number">1</span> }\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyApp {}</pre>\n<h3 id="custom-date-adapter">Custom date adapter</h3>\n<p>A custom adapter must extend from <code>VCLDateAdapter</code> and implement the abstract methods.</p>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyDateAdapter <span class="hljs-keyword">extends</span> VCLDateAdapter&lt;MyDate&gt; {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">\n    <span class="hljs-meta">@Inject</span>(VCL_DATE_ADAPTER_WEEKDAY_OFFSET)\n    <span class="hljs-keyword">private</span> weekDayOffset: <span class="hljs-built_in">number</span>,\n    <span class="hljs-meta">@Optional</span>()\n    <span class="hljs-meta">@Inject</span>(LOCALE_ID)\n    <span class="hljs-keyword">private</span> locale?: <span class="hljs-built_in">string</span>,\n  </span>) {\n    <span class="hljs-keyword">super</span>();\n  }\n\n  <span class="hljs-comment">// Abstract class implementation</span>\n  isDate(date: <span class="hljs-built_in">any</span>): date is <span class="hljs-built_in">Date</span> {\n    ...\n  }\n  ...\n}</pre>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLDateAdapter } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  providers: [\n    { provide: VCLDateAdapter, useClass: MyDateAdapter }\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyApp {}</pre>\n'}}}}let d=(()=>{class s{}return s.\u0275mod=o.Kb({type:s}),s.\u0275inj=o.Jb({factory:function(a){return new(a||s)},imports:[[n.c,l.b,t.A,t.B,p.g.forChild([{path:"",component:l.a,data:{demo:r}}])]]}),s})()}}]);