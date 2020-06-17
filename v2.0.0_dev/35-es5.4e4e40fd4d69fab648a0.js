function _classCallCheck(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{YDqW:function(s,a){s.exports='<span class="hljs-keyword">import</span> {Component} <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> RatingDemoComponent {\n\n  horizontalValue = <span class="hljs-number">2.5</span>;\n  verticalValue = <span class="hljs-number">2.5</span>;\n  customValue = <span class="hljs-number">7.5</span>;\n\n}\n'},iuMV:function(s,a){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Horizontal<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"horizontalValue"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Value: {{ horizontalValue }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Vertical<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"vertical"</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"verticalValue"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Value: {{ verticalValue }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Custom Star Count<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating</span> [<span class="hljs-attr">ratingItemCount</span>]=<span class="hljs-string">"10"</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"customValue"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Value: {{ customValue }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>With label<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"vInputEx1"</span>&gt;</span>\n  Rating: {{rating1.labelChange | async}}\n<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span> #<span class="hljs-attr">rating1</span>=<span class="hljs-string">"vclRating"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: red"</span>&gt;</span>Bad<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item</span>&gt;</span> \n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: orange"</span>&gt;</span>Average<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: green"</span>&gt;</span>Good<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>With rich label<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-control-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"vInputEx1"</span>&gt;</span>\n  Rating: <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item-label</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"rating2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item-label</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2"</span> #<span class="hljs-attr">rating2</span>=<span class="hljs-string">"vclRating"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: red"</span>&gt;</span>Bad<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item</span>&gt;</span> \n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: orange"</span>&gt;</span>Average<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating-item</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: green"</span>&gt;</span>Good<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Custom Icons<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-rating</span> <span class="hljs-attr">ratingFullIcon</span>=<span class="hljs-string">"fas fa-battery-full"</span> <span class="hljs-attr">ratingHalfIcon</span>=<span class="hljs-string">"fas fa-battery-half"</span> <span class="hljs-attr">ratingEmptyIcon</span>=<span class="hljs-string">"fas fa-battery-empty"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"2.5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-rating</span>&gt;</span>\n'},j3VI:function(s,a,n){"use strict";n.r(a),n.d(a,"demo",(function(){return m})),n.d(a,"RatingDemoModule",(function(){return u}));var l,t=n("ofXK"),p=n("3Pt+"),c=n("tyNb"),e=n("2FIb"),h=n("fXoL"),r=n("ySGC"),g=n("SQVY"),i=n("R+ME"),o=((l=function s(){_classCallCheck(this,s),this.horizontalValue=2.5,this.verticalValue=2.5,this.customValue=7.5}).\u0275fac=function(s){return new(s||l)},l.\u0275cmp=h.Gb({type:l,selectors:[["ng-component"]],decls:50,vars:14,consts:[[3,"value","valueChange"],["type","vertical",3,"value","valueChange"],[3,"ratingItemCount","value","valueChange"],["for","vInputEx1",1,"form-control-label"],[3,"value"],["rating1","vclRating"],[2,"color","red"],[2,"color","orange"],[2,"color","green"],[3,"target"],["rating2","vclRating"],["ratingFullIcon","fas fa-battery-full","ratingHalfIcon","fas fa-battery-half","ratingEmptyIcon","fas fa-battery-empty",3,"value"]],template:function(s,a){if(1&s&&(h.Sb(0,"h2"),h.yc(1,"Horizontal"),h.Rb(),h.Sb(2,"vcl-rating",0),h.ac("valueChange",(function(s){return a.horizontalValue=s})),h.Rb(),h.Sb(3,"div"),h.yc(4),h.Rb(),h.Sb(5,"h2"),h.yc(6,"Vertical"),h.Rb(),h.Sb(7,"vcl-rating",1),h.ac("valueChange",(function(s){return a.verticalValue=s})),h.Rb(),h.Sb(8,"div"),h.yc(9),h.Rb(),h.Sb(10,"h2"),h.yc(11,"Custom Star Count"),h.Rb(),h.Sb(12,"vcl-rating",2),h.ac("valueChange",(function(s){return a.customValue=s})),h.Rb(),h.Sb(13,"div"),h.yc(14),h.Rb(),h.Sb(15,"h2"),h.yc(16,"With label"),h.Rb(),h.Sb(17,"label",3),h.yc(18),h.ec(19,"async"),h.Rb(),h.Sb(20,"vcl-rating",4,5),h.Sb(22,"vcl-rating-item"),h.Sb(23,"span",6),h.yc(24,"Bad"),h.Rb(),h.Rb(),h.Sb(25,"vcl-rating-item"),h.Sb(26,"span",7),h.yc(27,"Average"),h.Rb(),h.Rb(),h.Sb(28,"vcl-rating-item"),h.Sb(29,"span",8),h.yc(30,"Good"),h.Rb(),h.Rb(),h.Rb(),h.Sb(31,"h2"),h.yc(32,"With rich label"),h.Rb(),h.Sb(33,"label",3),h.yc(34," Rating: "),h.Nb(35,"vcl-rating-item-label",9),h.Rb(),h.Sb(36,"vcl-rating",4,10),h.Sb(38,"vcl-rating-item"),h.Sb(39,"span",6),h.yc(40,"Bad"),h.Rb(),h.Rb(),h.Sb(41,"vcl-rating-item"),h.Sb(42,"span",7),h.yc(43,"Average"),h.Rb(),h.Rb(),h.Sb(44,"vcl-rating-item"),h.Sb(45,"span",8),h.yc(46,"Good"),h.Rb(),h.Rb(),h.Rb(),h.Sb(47,"h2"),h.yc(48,"Custom Icons"),h.Rb(),h.Nb(49,"vcl-rating",11)),2&s){var n=h.nc(21),l=h.nc(37);h.Ab(2),h.ic("value",a.horizontalValue),h.Ab(2),h.Ac("Value: ",a.horizontalValue,""),h.Ab(3),h.ic("value",a.verticalValue),h.Ab(2),h.Ac("Value: ",a.verticalValue,""),h.Ab(3),h.ic("ratingItemCount",10)("value",a.customValue),h.Ab(2),h.Ac("Value: ",a.customValue,""),h.Ab(4),h.Ac(" Rating: ",h.fc(19,12,n.labelChange),"\n"),h.Ab(2),h.ic("value",2),h.Ab(15),h.ic("target",l),h.Ab(1),h.ic("value",2),h.Ab(13),h.ic("value",2.5)}},directives:[r.a,g.b,i.a],pipes:[t.b],encapsulation:2}),l),j=n("19H1");function m(){return{label:"Rating",tabs:{Demo:o,"README.md":{type:"md",content:'<h1 id="vcl-rating">vcl-rating</h1>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><code>&lt;vcl-rating [(value)]=&quot;value&quot;&gt;&lt;/vcl-rating&gt;</code></pre>\n<h3 id="api">API</h3>\n<h4 id="attributes">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>value</code> <em>(1)</em></td>\n<td>number</td>\n<td>0</td>\n<td>set the value</td>\n</tr>\n<tr>\n<td><code>type</code></td>\n<td>&apos;horizontal&apos;, &apos;vertical&apos;, &apos;small&apos;</td>\n<td>&apos;horizontal&apos;</td>\n<td>Rating type.</td>\n</tr>\n<tr>\n<td><code>fullStar</code></td>\n<td>string</td>\n<td>&apos;vcl:star&apos;</td>\n<td>Full star icon</td>\n</tr>\n<tr>\n<td><code>halfStar</code></td>\n<td>string</td>\n<td>&apos;vcl:star-half&apos;</td>\n<td>Half star icon</td>\n</tr>\n<tr>\n<td><code>emptyStar</code></td>\n<td>string</td>\n<td>&apos;vcl:star-empty&apos;</td>\n<td>Empty star icon</td>\n</tr>\n<tr>\n<td><code>starCount</code></td>\n<td>number</td>\n<td>5</td>\n<td>Max rating</td>\n</tr>\n<tr>\n<td><code>readonly</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Whether the stars can be clicked</td>\n</tr>\n</tbody></table>\n<h4 id="events">Events</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>valueChange</code></td>\n<td>number</td>\n<td>emits when the value changes</td>\n</tr>\n</tbody></table>\n'},"demo.component.html":{type:"pre",content:n("iuMV")},"demo.component.ts":{type:"pre",content:n("YDqW")}}}}var d,u=((d=function s(){_classCallCheck(this,s)}).\u0275mod=h.Kb({type:d}),d.\u0275inj=h.Jb({factory:function(s){return new(s||d)},imports:[[t.c,p.m,e.b,j.ab,c.g.forChild([{path:"",component:e.a,data:{demo:m}}])]]}),d)}}]);