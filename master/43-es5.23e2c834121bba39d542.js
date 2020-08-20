!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{RNNR:function(t,e,n){"use strict";n.r(e),e.default='<section class="vlcContentArea">\n    <vcl-tour-overlay></vcl-tour-overlay>\n    \n    <div class="col">\n        <div>\n            <button type="button" class="button" (click)="startTour()">\n                <div class="icogram">\n                    <span class="text">Start tour</span>\n                </div>\n            </button>\n        </div>   \n        <div>\n            <div class="grid-span-25p">\n                <h1 class="container" #heading1>Heading</h1>\n            </div>\n            <div class="grid-span-25p">\n                <br>\n                <p class="container" #heading2>Heading</p>\n            </div>\n            <div class="grid-span-25p">\n                <br>\n                <p class="container" #heading3>Heading</p>\n            </div>\n            <div class="grid-span-25p">\n                <br>\n                <p class="container" #heading4>Heading</p>\n            </div>\n        </div>\n    </div>\n\n    <vcl-tour-step\n        [target]="heading1"\n        title="Step Title">\n            Demo tour first step with title\n    </vcl-tour-step>\n\n    <vcl-tour-step \n        [target]="heading2"\n        [offsetY]="50">\n            Demo tour second step no title with Y offset\n    </vcl-tour-step>\n    \n    <vcl-tour-step\n        [target]="heading3"\n        [originX]="\'center\'"\n        [originY]="\'top\'"\n        [overlayX]="\'center\'"\n        [overlayY]="\'bottom\'">\n            Demo tour third step top position\n    </vcl-tour-step>\n\n    <vcl-tour-step\n        [target]="heading4"\n        [originX]="\'start\'"\n        [overlayX]="\'end\'"\n        [originY]="\'center\'"\n        [overlayY]="\'center\'">\n            Demo tour fourth step left position\n    </vcl-tour-step>\n\n    <vcl-tour-step\n        [target]="heading2"\n        [originX]="\'end\'"\n        [overlayX]="\'start\'"\n        [originY]="\'center\'"\n        [overlayY]="\'center\'">\n            Demo tour fifth step right position\n    </vcl-tour-step>\n    \n</section>\n'},o4zP:function(t,e,n){"use strict";n.r(e),e.default="import { Component } from '@angular/core';\nimport { TourService, TourOptions } from '@vcl/ng-vcl';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class TourDemoComponent {\n\n  constructor(public tour: TourService) { }\n\n  public startTour() {\n    this.tour.initialize();\n    this.tour.start();\n  }\n}\n"},sxPw:function(n,o,r){"use strict";r.r(o),r.d(o,"demo",(function(){return v})),r.d(o,"TourDemoModule",(function(){return f}));var i,a=r("ofXK"),s=r("tyNb"),l=r("19H1"),c=r("2FIb"),u=r("fXoL"),p=r("oFcg"),d=r("yDKU"),b=((i=function(){function n(e){t(this,n),this.tour=e}var o,r,i;return o=n,(r=[{key:"startTour",value:function(){this.tour.initialize(),this.tour.start()}}])&&e(o.prototype,r),i&&e(o,i),n}()).\u0275fac=function(t){return new(t||i)(u.Jb(l.TourService))},i.\u0275cmp=u.Db({type:i,selectors:[["ng-component"]],decls:38,vars:18,consts:[[1,"vlcContentArea"],[1,"col"],["type","button",1,"button",3,"click"],[1,"icogram"],[1,"text"],[1,"grid-span-25p"],[1,"container"],["heading1",""],["heading2",""],["heading3",""],["heading4",""],["title","Step Title",3,"target"],[3,"target","offsetY"],[3,"target","originX","originY","overlayX","overlayY"],[3,"target","originX","overlayX","originY","overlayY"]],template:function(t,e){if(1&t&&(u.Pb(0,"section",0),u.Kb(1,"vcl-tour-overlay"),u.Pb(2,"div",1),u.Pb(3,"div"),u.Pb(4,"button",2),u.Wb("click",(function(){return e.startTour()})),u.Pb(5,"div",3),u.Pb(6,"span",4),u.xc(7,"Start tour"),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(8,"div"),u.Pb(9,"div",5),u.Pb(10,"h1",6,7),u.xc(12,"Heading"),u.Ob(),u.Ob(),u.Pb(13,"div",5),u.Kb(14,"br"),u.Pb(15,"p",6,8),u.xc(17,"Heading"),u.Ob(),u.Ob(),u.Pb(18,"div",5),u.Kb(19,"br"),u.Pb(20,"p",6,9),u.xc(22,"Heading"),u.Ob(),u.Ob(),u.Pb(23,"div",5),u.Kb(24,"br"),u.Pb(25,"p",6,10),u.xc(27,"Heading"),u.Ob(),u.Ob(),u.Ob(),u.Ob(),u.Pb(28,"vcl-tour-step",11),u.xc(29," Demo tour first step with title "),u.Ob(),u.Pb(30,"vcl-tour-step",12),u.xc(31," Demo tour second step no title with Y offset "),u.Ob(),u.Pb(32,"vcl-tour-step",13),u.xc(33," Demo tour third step top position "),u.Ob(),u.Pb(34,"vcl-tour-step",14),u.xc(35," Demo tour fourth step left position "),u.Ob(),u.Pb(36,"vcl-tour-step",14),u.xc(37," Demo tour fifth step right position "),u.Ob(),u.Ob()),2&t){var n=u.kc(11),o=u.kc(16),r=u.kc(21),i=u.kc(26);u.yb(28),u.fc("target",n),u.yb(2),u.fc("target",o)("offsetY",50),u.yb(2),u.fc("target",r)("originX","center")("originY","top")("overlayX","center")("overlayY","bottom"),u.yb(2),u.fc("target",i)("originX","start")("overlayX","end")("originY","center")("overlayY","center"),u.yb(2),u.fc("target",o)("originX","end")("overlayX","start")("originY","center")("overlayY","center")}},directives:[p.a,d.a],encapsulation:2}),i);function v(){return{label:"Tour",tabs:{Demo:b,"README.md":{type:"md",content:"# vcl-tour-step and vcl-tour-overlay\n\nSimple and customizable application tour component with overlay.\n\nNote: For the highlight to work, the target element has to have a background-color.\n\n## Usage\n\n```js\nimport { VCLTourModule } from '@vcl/ng-vcl';\n\n@NgModule({\n  imports: [ VCLTourModule ],\n  ...\n})\nexport class AppComponent {}\n\nclass AppComponent {\n\n  constructor(public tour: TourService){ }\n\n  startTour() {\n    this.tour.start();\n  }\n}\n```\n\n```html\n\x3c!-- Overlay element inserted on top of the page--\x3e\n<vcl-tour-overlay></vcl-tour-overlay>\n\n\x3c!-- Start tour --\x3e\n<button name=\"button\" (click)=\"startTour()\">Begin tour</button>\n\n\x3c!-- Some application element --\x3e\n<div id=\"foo\">Some element</div>\n\n<vcl-tour-step target=\"#foo\" title=\"some title\">\n  \x3c!-- ANY HTML HERE --\x3e\n</vcl-tour-step>\n```\n\n### API\n\n#### vcl-tour-step attributes\n\n| Name                     | Type                          | Default            | Description\n| ------------------------ | ----------------------------- | ------------------ | --------------\n| `debug`                  | boolean                       | false              | Output debug information\n| `debugPopover`           | boolean                       | false              | Output `vcl-tour-step`'s `vcl-popover` debug information\n| `title`                  | string                        |                    | Tour step title\n| `target`                 | string  ElementRef  Element   |                    | The target can be a selector, element or ElementRef instance\n| `order`                  | number                        |                    | The order number in which tour step should be shown, necessary if same element used multiple times\n| `targetX`                | AttachmentX                   | AttachmentX.Center | Position of the target-side\n| `attachmentX`            | AttachmentX                   | AttachmentX.Center | Position of the popover-side\n| `offsetAttachmentX`      | number                        |                    | `vcl-popover`'s AttachmentX offset\n| `targetY`                | AttachmentY                   | AttachmentY.Bottom | Position of the target-vertical\n| `attachmentY`            | AttachmentY                   | AttachmentY.Top    | Position of the popover-vertical\n| `offsetAttachmentY`      | number                        |                    | `vcl-popover`'s AttachmentY offset\n\n\n#### TourService events\n\n| Name                     | Type          | Description\n| ------------------------ | ------------- | --------------\n| `end$`                   | true          | Event is emitted when the tour is finished or ended\n| `tourComponent$`         | TourComponent | Current `TourComponent` is emitted on each `vcl-tour-step`\n\n### TourService default options\n\n| Name                     | Type        | Default  | Description\n| ------------------------ | ----------- | -------- |--------------\n| `debug`                  | boolean     | false    | Output debug information\n| `debugTour`              | boolean     | false    | Output every `vcl-tour-step` debug information\n| `debugPopover`           | boolean     | false    | Output every `vcl-tour-step`'s `vcl-popover` debug information\n| `useOrder`               | boolean     | false    | `vcl-tour-step`'s `@Input() order` is not used and instead the service relies on the DOM element creation order\n| `elementsDisabled`       | boolean     | true     | Disabling highlightedElement (click) wont work\n| `applyRelative`          | boolean     | true     | Applying position:relative to highlightedElement (disable in case you want to highlight absolute positioned elements)\n| `dismissOnOverlay`       | boolean     | false    | Go to next step when clicking on overlay (close tour if this is last step)\n| `zIndex`                 | number      | 20       | Used `z-index` for `vcl-tour-step` components\n| `dismissOnOverlay`       | boolean     | false    | Go to next step when clicking on overlay (close tour if this is last step)\n| `offsetAttachmentX`      | number      | 0        | Used AttachmentX offset for `vcl-tour-step` components\n| `offsetAttachmentY`      | number      | 0        | Used AttachmentY offset for `vcl-tour-step` components\n\n\n#### Custom options usage\n\n```js\n startTour() {\n    this.tour.initialize({elementsDisabled: false}); // TourOptions\n    this.tour.start();\n  }\n```\n\n\n\nexport class TourOptions {\n  debug: boolean = false;\n  debugTour: boolean = false;\n  debugPopover: boolean = false;\n\n  useOrder: boolean = false;\n  elementsDisabled: boolean = true;\n  applyRelative: boolean = true;\n  dismissOnOverlay: boolean = false;\n\n  zIndex: number = 20;\n\n  previousLabel: string = 'Previous';\n  nextLabel: string = 'Next';\n  exitLabel: string = 'Exit';\n\n  previousIcon: string = 'fas fa-chevron-left';\n  nextIcon: string = 'fas fa-chevron-right';\n  exitIcon: string = 'fas fa-close';\n\n  buttonClass: string = '';\n}\n"},"demo.component.html":{type:"html",content:r("RNNR")},"demo.component.ts":{type:"ts",content:r("o4zP")}}}}var m,f=((m=function e(){t(this,e)}).\u0275mod=u.Hb({type:m}),m.\u0275inj=u.Gb({factory:function(t){return new(t||m)},imports:[[a.c,c.b,l.VCLTourModule,l.VCLButtonModule,l.VCLNavigationModule,l.VCLInputModule,s.g.forChild([{path:"",component:c.a,data:{demo:v}}])]]}),m)}}])}();