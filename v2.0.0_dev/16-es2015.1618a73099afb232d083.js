(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{CNrg:function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return i})),n.d(a,"CalendarDemoModule",(function(){return j}));var t=n("ofXK"),e=n("tyNb"),l=n("19H1"),p=n("2FIb"),c=n("fXoL"),r=n("VSXH"),d=n("6B8K");function h(s,a){if(1&s){const s=c.Tb();c.Sb(0,"div",10),c.Sb(1,"div",11),c.Sb(2,"div",12),c.Sb(3,"button",13),c.ac("click",(function(){c.oc(s);const a=c.dc();return c.nc(33).viewDate=a.today})),c.yc(4," go to today "),c.Rb(),c.Sb(5,"button",14),c.ac("click",(function(){c.oc(s),c.dc();const a=c.nc(33);return a.viewDate=a.value})),c.yc(6," go to selected "),c.Rb(),c.Rb(),c.Rb(),c.Rb()}}let o=(()=>{class s{constructor(s){this.dateAdapter=s,this.dateArray=[],this.monthArray=[],this.today=this.dateAdapter.today(),this.available=[{match:{start:this.dateAdapter.addDays(this.dateAdapter.today(),1),end:this.dateAdapter.addDays(this.dateAdapter.today(),14)},class:"available",view:"month"},{match:this.dateAdapter.always(),class:"unavailable",disabled:!0,view:"month"}]}get sdate(){return this.dateAdapter.format(this.date,"date")}get sdateRange(){return this.dateAdapter.isRange(this.dateRange)?this.dateAdapter.format(this.dateRange.start,"date")+" - "+this.dateAdapter.format(this.dateRange.end,"date"):"-"}get sdateArray(){return this.dateArray.map(s=>this.dateAdapter.format(s,"date")).join(", ")}get smonth(){return this.dateAdapter.format(this.month,"yearMonth")}get smonthRange(){return this.dateAdapter.isRange(this.monthRange)?this.dateAdapter.format(this.monthRange.start,"yearMonth")+" - "+this.dateAdapter.format(this.monthRange.end,"yearMonth"):"-"}get smonthArray(){return this.monthArray.map(s=>this.dateAdapter.format(s,"yearMonth")).join(", ")}}return s.\u0275fac=function(a){return new(a||s)(c.Mb(l.F))},s.\u0275cmp=c.Gb({type:s,selectors:[["ng-component"]],decls:35,vars:17,consts:[[3,"value","valueChange"],["selectionMode","range",3,"value","valueChange"],["selectionMode","multiple",3,"value","maxSelectableDates","valueChange"],["selectionMode","month",3,"value","valueChange"],["selectionMode","month-range",3,"value","valueChange"],["selectionMode","month-multiple",3,"value","maxSelectableDates","valueChange"],[3,"disabled"],[3,"dateModifiers"],["c","vclCalendar"],["vclCalendarFooter","","class","d-g-row",4,"ngIf"],["vclCalendarFooter","",1,"d-g-row"],[1,"d-g-cell","toolbar"],["role","menubar",1,"flex","row","justify-between","center"],["vcl-button","","type","button",1,"transparent","flex",3,"click"],["vcl-square-button","","type","button",1,"transparent","flex",3,"click"]],template:function(s,a){if(1&s&&(c.Sb(0,"h3"),c.yc(1,"Basic calendar"),c.Rb(),c.Sb(2,"vcl-calendar",0),c.ac("valueChange",(function(s){return a.date=s})),c.Rb(),c.yc(3),c.Sb(4,"h3"),c.yc(5,'With selectionMode="range"'),c.Rb(),c.Sb(6,"vcl-calendar",1),c.ac("valueChange",(function(s){return a.dateRange=s})),c.Rb(),c.yc(7),c.Sb(8,"h3"),c.yc(9,'With selectionMode="multiple", maxSelectableDates=3'),c.Rb(),c.Sb(10,"vcl-calendar",2),c.ac("valueChange",(function(s){return a.dateArray=s})),c.Rb(),c.yc(11),c.Sb(12,"h3"),c.yc(13,'With selectionMode="month"'),c.Rb(),c.Sb(14,"vcl-calendar",3),c.ac("valueChange",(function(s){return a.month=s})),c.Rb(),c.yc(15),c.Sb(16,"h3"),c.yc(17,'With selectionMode="month-range"'),c.Rb(),c.Sb(18,"vcl-calendar",4),c.ac("valueChange",(function(s){return a.monthRange=s})),c.Rb(),c.yc(19),c.Sb(20,"h3"),c.yc(21,'With selectionMode="month-multiple", maxSelectableDates=2'),c.Rb(),c.Sb(22,"vcl-calendar",5),c.ac("valueChange",(function(s){return a.monthArray=s})),c.Rb(),c.yc(23),c.Sb(24,"h3"),c.yc(25,"Disabled"),c.Rb(),c.Nb(26,"vcl-calendar",6),c.Sb(27,"h3"),c.yc(28,"With dateModifiers"),c.Rb(),c.Nb(29,"vcl-calendar",7),c.Sb(30,"h3"),c.yc(31,"Custom Footer"),c.Rb(),c.Sb(32,"vcl-calendar",null,8),c.wc(34,h,7,0,"div",9),c.Rb()),2&s){const s=c.nc(33);c.Ab(2),c.ic("value",a.date),c.Ab(1),c.Ac("\nValue: ",a.sdate," "),c.Ab(3),c.ic("value",a.dateRange),c.Ab(1),c.Ac("\nValue: ",a.sdateRange," "),c.Ab(3),c.ic("value",a.dateArray)("maxSelectableDates",3),c.Ab(1),c.Ac("\nValue: ",a.sdateArray," "),c.Ab(3),c.ic("value",a.month),c.Ab(1),c.Ac("\nValue: ",a.smonth," "),c.Ab(3),c.ic("value",a.monthRange),c.Ab(1),c.Ac("\nValue: ",a.smonthRange," "),c.Ab(3),c.ic("value",a.monthArray)("maxSelectableDates",2),c.Ab(1),c.Ac("\nValue: ",a.smonthArray," "),c.Ab(3),c.ic("disabled",!0),c.Ab(3),c.ic("dateModifiers",a.available),c.Ab(5),c.ic("ngIf","month"===s.view)}},directives:[r.a,t.t,d.b],styles:["vcl-calendar[_ngcontent-%COMP%] {\n    width: 18em;\n  }"]}),s})();function i(){return{label:"Calendar",tabs:{Demo:o,"README.md":{type:"md",content:'<h1 id="vcl-calendar">vcl-calendar</h1>\n<p>A calendar to display and select dates</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLCalendarModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLCalendarModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}</pre>\n<pre class="hljs"><code>&lt;vcl-calendar [date]=&quot;date&quot;&gt;&lt;/vcl-calendar&gt;</code></pre>\n<h3 id="date-representation">Date representation</h3>\n<p>The calendar uses the <code>VCLDateAdapter</code> for date representation.<br>Check the <a href="#/dateadapter"><code>VCLDateAdapter</code> docs</a> for further information.</p>\n<h3 id="selectionmode">selectionMode</h3>\n<p>The calendar supports a variety of selection modes. The default <code>selectionMode</code> is <code>date</code></p>\n<ul>\n<li><code>date</code> Can select a single date</li>\n<li><code>range</code> Can select a date range with a starting and ending date (see <code>VCLDateRange</code> interface)</li>\n<li><code>multiple</code> Can select multiple dates</li>\n<li><code>month</code> Can a single month</li>\n<li><code>month-multiple</code> Can select multiple months </li>\n<li><code>month-range</code> Can select a month range with a starting and ending month (see <code>VCLDateRange</code> interface)</li>\n</ul>\n<h3 id="datemodifier">dateModifier</h3>\n<p>A date modifier allows to customize specific days in the month calendar.<br>An array of object implementing the <code>VCLCalendarDateModifier</code> can be passed to the calendar.</p>\n<pre class="hljs"><code>&lt;vcl-calendar [dateModifiers]=&quot;dateModifiers&quot;&gt;&lt;/vcl-calendar&gt;</code></pre>\n<pre class="hljs">dateModifiers = [{\n  match: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2019</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>), <span class="hljs-comment">// Matches January, 1</span>\n  <span class="hljs-keyword">class</span>: <span class="hljs-string">&apos;holiday&apos;</span>, <span class="hljs-comment">// Adds holiday css class</span>\n  disabled: <span class="hljs-literal">true</span>, <span class="hljs-comment">// Disabled date</span>\n  view: <span class="hljs-string">&apos;month&apos;</span> <span class="hljs-comment">// Limits  modifier to month view</span>\n}]</pre>\n<h4 id="vcl-calendar-attributes">vcl-calendar attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code></td>\n<td>VCLDate | VCLDate[] | VCLDateRange<vcldate></vcldate></td>\n<td></td>\n<td>Selected date(s)/date range in the calendar</td>\n</tr>\n<tr>\n<td><code>viewDate</code></td>\n<td>VCLDate</td>\n<td>today</td>\n<td>The currently shown date in the calendar</td>\n</tr>\n<tr>\n<td><code>selectionMode</code></td>\n<td>VCLCalendarSelectionMode</td>\n<td></td>\n<td>See selectionMode description</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables the calendar when true</td>\n</tr>\n<tr>\n<td><code>dateModifiers</code></td>\n<td>VCLCalendarDateModifier[]</td>\n<td></td>\n<td>only <code>month</code> view: See dateModifier description</td>\n</tr>\n<tr>\n<td><code>showWeekOfTheYear</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>only <code>month</code> view: Show of the year when true</td>\n</tr>\n<tr>\n<td><code>maxSelectableDates</code></td>\n<td>boolean</td>\n<td></td>\n<td>only for selectionMode <code>multiple</code> and <code>month-range</code>: Maximum number of selectable dates</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-calendar-events">vcl-calendar events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>VCLDate | VCLDate[] | VCLDateRange<vcldate></vcldate></td>\n<td>Triggered when a new date is selected</td>\n</tr>\n<tr>\n<td><code>viewDateChange</code></td>\n<td>VCLDate</td>\n<td>Triggered when the viewDate changes</td>\n</tr>\n</tbody></table>\n<h4 id="vcl-calendar-interfaces">vcl-calendar interfaces</h4>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> VCLCalendarSelectionMode = <span class="hljs-string">&apos;date&apos;</span> | <span class="hljs-string">&apos;multiple&apos;</span> | <span class="hljs-string">&apos;range&apos;</span> | <span class="hljs-string">&apos;month&apos;</span> | <span class="hljs-string">&apos;month-multiple&apos;</span> | <span class="hljs-string">&apos;month-range&apos;</span>;\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> VCLCalendarView = <span class="hljs-string">&apos;month&apos;</span> | <span class="hljs-string">&apos;year&apos;</span> | <span class="hljs-string">&apos;years&apos;</span> | <span class="hljs-string">&apos;hours&apos;</span> | <span class="hljs-string">&apos;minutes&apos;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> VCLCalendarDateModifier&lt;VCLDate&gt; {\n  match: VCLDate | VCLDate[] | VCLDateRange&lt;VCLDate&gt;;\n  <span class="hljs-keyword">class</span>?: <span class="hljs-built_in">string</span>;\n  disabled?: <span class="hljs-built_in">boolean</span>;\n  view:? VCLCalendarView;\n}</pre>\n'},"demo.component.html":{type:"pre",content:n("HThc")},"demo.component.ts":{type:"pre",content:n("rR98")}}}}let j=(()=>{class s{}return s.\u0275mod=c.Kb({type:s}),s.\u0275inj=c.Jb({factory:function(a){return new(a||s)},imports:[[t.c,p.b,l.B,l.C,e.g.forChild([{path:"",component:p.a,data:{demo:i}}])]]}),s})()},HThc:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Basic calendar<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"date"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\nValue: {{sdate}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With selectionMode="range"<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"dateRange"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"range"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\nValue: {{sdateRange}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With selectionMode="multiple", maxSelectableDates=3<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"dateArray"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"multiple"</span> [<span class="hljs-attr">maxSelectableDates</span>]=<span class="hljs-string">"3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\nValue: {{sdateArray}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With selectionMode="month"<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"month"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"month"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\nValue: {{smonth}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With selectionMode="month-range"<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"monthRange"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"month-range"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\nValue: {{smonthRange}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With selectionMode="month-multiple", maxSelectableDates=2<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"monthArray"</span> <span class="hljs-attr">selectionMode</span>=<span class="hljs-string">"month-multiple"</span> [<span class="hljs-attr">maxSelectableDates</span>]=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\nValue: {{smonthArray}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>With dateModifiers<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> [<span class="hljs-attr">dateModifiers</span>]=<span class="hljs-string">"available"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Custom Footer<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-calendar</span> #<span class="hljs-attr">c</span>=<span class="hljs-string">"vclCalendar"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">vclCalendarFooter</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-g-row"</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"c.view === \'month\'"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-g-cell toolbar"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"flex row justify-between center"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"menubar"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transparent flex"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"c.viewDate = today"</span>&gt;</span>\n          go to today\n        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-square-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transparent flex"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"c.viewDate = c.value"</span>&gt;</span>\n          go to selected\n        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-calendar</span>&gt;</span>\n'},rR98:function(s,a){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { VCLDateRange, VCLDateAdapter } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n<span class="hljs-keyword">import</span> { VCLCalendarDateModifier } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>,\n  styles: [<span class="hljs-string">`\n  vcl-calendar {\n    width: 18em;\n  }\n  `</span>]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> CalendarDemoComponent {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> dateAdapter: VCLDateAdapter&lt;<span class="hljs-built_in">Date</span>&gt;</span>) { }\n\n  date: <span class="hljs-built_in">Date</span>;\n  <span class="hljs-keyword">get</span> sdate() {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.dateAdapter.format(<span class="hljs-keyword">this</span>.date, <span class="hljs-string">\'date\'</span>);\n  }\n  dateRange: VCLDateRange&lt;<span class="hljs-built_in">Date</span>&gt;;\n  <span class="hljs-keyword">get</span> sdateRange() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.dateAdapter.isRange(<span class="hljs-keyword">this</span>.dateRange)) {\n      <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.dateAdapter.format(<span class="hljs-keyword">this</span>.dateRange.start, <span class="hljs-string">\'date\'</span>) + <span class="hljs-string">\' - \'</span> + <span class="hljs-keyword">this</span>.dateAdapter.format(<span class="hljs-keyword">this</span>.dateRange.end, <span class="hljs-string">\'date\'</span>);\n    }\n    <span class="hljs-keyword">return</span> <span class="hljs-string">\'-\'</span>;\n  }\n  dateArray: <span class="hljs-built_in">Date</span>[] = [];\n  <span class="hljs-keyword">get</span> sdateArray() {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.dateArray.map(<span class="hljs-function"><span class="hljs-params">d</span> =&gt;</span> <span class="hljs-keyword">this</span>.dateAdapter.format(d, <span class="hljs-string">\'date\'</span>)).join(<span class="hljs-string">\', \'</span>);\n  }\n\n  month: <span class="hljs-built_in">Date</span>;\n  <span class="hljs-keyword">get</span> smonth() {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.dateAdapter.format(<span class="hljs-keyword">this</span>.month, <span class="hljs-string">\'yearMonth\'</span>);\n  }\n  monthRange: VCLDateRange&lt;<span class="hljs-built_in">Date</span>&gt;;\n  <span class="hljs-keyword">get</span> smonthRange() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.dateAdapter.isRange(<span class="hljs-keyword">this</span>.monthRange)) {\n      <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.dateAdapter.format(<span class="hljs-keyword">this</span>.monthRange.start, <span class="hljs-string">\'yearMonth\'</span>) + <span class="hljs-string">\' - \'</span> + <span class="hljs-keyword">this</span>.dateAdapter.format(<span class="hljs-keyword">this</span>.monthRange.end, <span class="hljs-string">\'yearMonth\'</span>);\n    }\n    <span class="hljs-keyword">return</span> <span class="hljs-string">\'-\'</span>;\n  }\n  monthArray: <span class="hljs-built_in">Date</span>[] = [];\n  <span class="hljs-keyword">get</span> smonthArray() {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.monthArray.map(<span class="hljs-function"><span class="hljs-params">d</span> =&gt;</span> <span class="hljs-keyword">this</span>.dateAdapter.format(d, <span class="hljs-string">\'yearMonth\'</span>)).join(<span class="hljs-string">\', \'</span>);\n  }\n\n  today = <span class="hljs-keyword">this</span>.dateAdapter.today();\n\n  available: VCLCalendarDateModifier&lt;<span class="hljs-built_in">Date</span>&gt;[] = [\n    {\n      <span class="hljs-comment">// Set vclAvailable class on specific range</span>\n      match: {\n        start: <span class="hljs-keyword">this</span>.dateAdapter.addDays(<span class="hljs-keyword">this</span>.dateAdapter.today(), <span class="hljs-number">1</span>),\n        end: <span class="hljs-keyword">this</span>.dateAdapter.addDays(<span class="hljs-keyword">this</span>.dateAdapter.today(), <span class="hljs-number">14</span>),\n      },\n      <span class="hljs-keyword">class</span>: <span class="hljs-string">\'available\'</span>,\n      view: <span class="hljs-string">\'month\'</span> <span class="hljs-comment">// Limit to month view</span>\n    }, {\n      <span class="hljs-comment">// Set vclUnavailable class and disable on specific range</span>\n      match: <span class="hljs-keyword">this</span>.dateAdapter.always(), <span class="hljs-comment">// Still works as first modifier is prioritized</span>\n      <span class="hljs-keyword">class</span>: <span class="hljs-string">\'unavailable\'</span>,\n      disabled: <span class="hljs-literal">true</span>,\n      view: <span class="hljs-string">\'month\'</span> <span class="hljs-comment">// Limit to month view</span>\n    }\n  ];\n}\n'}}]);