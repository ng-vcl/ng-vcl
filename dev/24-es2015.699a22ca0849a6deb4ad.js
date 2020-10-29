(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"5jDY":function(e,l,a){"use strict";a.r(l),l.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class GalleryDemoComponent {\n\n}\n"},dRBF:function(e,l,a){"use strict";a.r(l),a.d(l,"demo",(function(){return u})),a.d(l,"GalleryDemoModule",(function(){return y}));var t=a("ofXK"),m=a("tyNb"),i=a("19H1"),g=a("2FIb"),n=a("fXoL"),s=a("8MxC"),o=a("A9Be"),r=a("18lT"),p=a("3oe6"),c=a("6MW4");let h=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=n.Eb({type:e,selectors:[["ng-component"]],decls:47,vars:7,consts:[[3,"selectedImage"],["image","https://picsum.photos/600/500?image=450","thumbnail","https://picsum.photos/200/200?image=450","alt","Image 1"],["image","https://picsum.photos/600/500?image=451","thumbnail","https://picsum.photos/200/200?image=451","alt","Image 2"],["image","https://picsum.photos/600/500?image=452","thumbnail","https://picsum.photos/200/200?image=452","alt","Image 3"],["image","https://picsum.photos/600/500?image=453","thumbnail","https://picsum.photos/200/200?image=453","alt","Image 4"],[1,"gallery-header"],[3,"selectedImage","wrap"],["image","https://picsum.photos/600/500?image=440","thumbnail","https://picsum.photos/200/200?image=440","alt","Image 1"],["image","https://picsum.photos/600/500?image=441","thumbnail","https://picsum.photos/200/200?image=441","alt","Image 2"],["image","https://picsum.photos/600/500?image=442","thumbnail","https://picsum.photos/200/200?image=442","alt","Image 3"],["image","https://picsum.photos/600/500?image=443","thumbnail","https://picsum.photos/200/200?image=443","alt","Image 4"],["external",""],["image","https://picsum.photos/600/500?image=430","thumbnail","https://picsum.photos/200/200?image=430","alt","Image 1"],["image","https://picsum.photos/600/500?image=431","thumbnail","https://picsum.photos/200/200?image=431","alt","Image 2"],["image","https://picsum.photos/600/500?image=432","thumbnail","https://picsum.photos/200/200?image=432","alt","Image 3"],["image","https://picsum.photos/600/500?image=433","thumbnail","https://picsum.photos/200/200?image=433","alt","Image 4"],[3,"target"]],template:function(e,l){if(1&e&&(n.Qb(0,"vcl-gallery",0),n.Lb(1,"vcl-gallery-image",1),n.Lb(2,"vcl-gallery-image",2),n.Lb(3,"vcl-gallery-image",3),n.Lb(4,"vcl-gallery-image",4),n.Qb(5,"div",5),n.Qb(6,"h2"),n.wc(7,"Simple gallery"),n.Pb(),n.Pb(),n.Lb(8,"vcl-gallery-body"),n.Lb(9,"vcl-gallery-footer"),n.Lb(10,"vcl-gallery-thumbnails"),n.Pb(),n.Lb(11,"br"),n.Lb(12,"br"),n.Qb(13,"vcl-gallery",6),n.Lb(14,"vcl-gallery-image",7),n.Lb(15,"vcl-gallery-image",8),n.Lb(16,"vcl-gallery-image",9),n.Lb(17,"vcl-gallery-image",10),n.Qb(18,"div",5),n.Qb(19,"h2"),n.wc(20,"Gallery with wrapping"),n.Pb(),n.Pb(),n.Lb(21,"vcl-gallery-body"),n.Lb(22,"vcl-gallery-footer"),n.Lb(23,"vcl-gallery-thumbnails"),n.Pb(),n.Lb(24,"br"),n.Lb(25,"br"),n.Qb(26,"h2"),n.wc(27,"Gallery components seperated"),n.Pb(),n.Qb(28,"vcl-gallery",0,11),n.Lb(30,"vcl-gallery-image",12),n.Lb(31,"vcl-gallery-image",13),n.Lb(32,"vcl-gallery-image",14),n.Lb(33,"vcl-gallery-image",15),n.Pb(),n.Qb(34,"h3"),n.wc(35,"Body:"),n.Pb(),n.Lb(36,"vcl-gallery-body",16),n.Lb(37,"br"),n.Lb(38,"br"),n.Qb(39,"h3"),n.wc(40,"Footer:"),n.Pb(),n.Lb(41,"vcl-gallery-footer",16),n.Lb(42,"br"),n.Lb(43,"br"),n.Qb(44,"h3"),n.wc(45,"Thumbnails:"),n.Pb(),n.Lb(46,"vcl-gallery-thumbnails",16)),2&e){const e=n.lc(29);n.gc("selectedImage",1),n.yb(13),n.gc("selectedImage",1)("wrap",!0),n.yb(15),n.gc("selectedImage",1),n.yb(8),n.gc("target",e),n.yb(5),n.gc("target",e),n.yb(5),n.gc("target",e)}},directives:[s.a,o.a,r.a,p.a,c.a],encapsulation:2}),e})();function u(){return{label:"Gallery",tabs:{Demo:h,"README.md":{type:"md",content:'# vcl-gallery\n\nA gallery containing multiple images with mobile swipe support.\n\n_Note: HammerJS must be loaded for touch events_\n\n## Usage\n\n```html\n<vcl-gallery [selectedImage]="1" [wrap]="true">\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=450" thumbnail="https://picsum.photos/200/200?image=450" alt="Image 1"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=451" thumbnail="https://picsum.photos/200/200?image=451" alt="Image 2"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=452" thumbnail="https://picsum.photos/200/200?image=452" alt="Image 3"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=453" thumbnail="https://picsum.photos/200/200?image=453" alt="Image 4"></vcl-gallery-image>\n\n  <vcl-gallery-header galleryTitle="Simple gallery"></vcl-gallery-header>\n  <vcl-gallery-body></vcl-gallery-body>\n  <vcl-gallery-footer></vcl-gallery-footer>\n  <vcl-gallery-thumbnails></vcl-gallery-thumbnails>\n</vcl-gallery>\n```\n\n### API\n\n#### Gallery Attributes\n\nName            | Type    | Default  | Description\n--------------- | ------- | -------- | ----------------------------------\n`selectedImage` | number  | 0        | the selected image (optional)\n`wrap`          | string  | false    | whether to wrap around (optional)\n\n#### Gallery Methods\n\nName             | Arguments     | Description\n---------------- | ------------- | -------------------------\n`selectImage`    | index: number | select an image by index\n`selectNext`     |               | select next image\n`selectPrevious` |               | select previous image\n\n#### Image Attributes\n\nName        | Type    | Default  | Description\n----------- | ------- | -------- | ----------------------------\n`image`     | string  |          | image source\n`thumbnail` | string  | `""`     | thumbnail source (optional)\n`alt`       | string  | `""`     | alt text (optional)\n\n### Gallery Header Attributes\n\nName            | Type              | Default  | Description\n--------------- | ----------------- | -------- | ---------------------\n`galleryTitle`  | string            |          | title of the gallery\n`target`       | GalleryComponent  |          | gallery component (required if outside of it)\n\n### Gallery Body Attributes\n\nName            | Type              | Default  | Description\n--------------- | ----------------- | -------- | ---------------------\n`target`       | GalleryComponent  |          | gallery component (required if outside of it)\n\n### Gallery Footer Attributes\n\nName            | Type              | Default  | Description\n--------------- | ----------------- | -------- | ---------------------\n`target`       | GalleryComponent  |          | gallery component (required if outside of it)\n\n### Gallery Thumbnails Attributes\n\nName            | Type              | Default  | Description\n--------------- | ----------------- | -------- | ---------------------\n`target`       | GalleryComponent  |          | gallery component (required if outside of it)\n'},"demo.component.html":{type:"html",content:a("yt+4")},"demo.component.ts":{type:"ts",content:a("5jDY")}}}}let y=(()=>{class e{}return e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({factory:function(l){return new(l||e)},imports:[[t.c,g.b,i.VCLGalleryModule,m.g.forChild([{path:"",component:g.a,data:{demo:u}}])]]}),e})()},"yt+4":function(e,l,a){"use strict";a.r(l),l.default='<vcl-gallery [selectedImage]="1">\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=450" thumbnail="https://picsum.photos/200/200?image=450" alt="Image 1"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=451" thumbnail="https://picsum.photos/200/200?image=451" alt="Image 2"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=452" thumbnail="https://picsum.photos/200/200?image=452" alt="Image 3"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=453" thumbnail="https://picsum.photos/200/200?image=453" alt="Image 4"></vcl-gallery-image>\n\n  <div class="gallery-header">\n    <h2>Simple gallery</h2>\n  </div>\n\n  <vcl-gallery-body></vcl-gallery-body>\n  <vcl-gallery-footer></vcl-gallery-footer>\n  <vcl-gallery-thumbnails></vcl-gallery-thumbnails>\n</vcl-gallery>\n<br><br>\n\n<vcl-gallery [selectedImage]="1" [wrap]="true">\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=440" thumbnail="https://picsum.photos/200/200?image=440" alt="Image 1"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=441" thumbnail="https://picsum.photos/200/200?image=441" alt="Image 2"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=442" thumbnail="https://picsum.photos/200/200?image=442" alt="Image 3"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=443" thumbnail="https://picsum.photos/200/200?image=443" alt="Image 4"></vcl-gallery-image>\n\n  <div class="gallery-header">\n    <h2>Gallery with wrapping</h2>\n  </div>\n\n  <vcl-gallery-body></vcl-gallery-body>\n  <vcl-gallery-footer></vcl-gallery-footer>\n  <vcl-gallery-thumbnails></vcl-gallery-thumbnails>\n</vcl-gallery>\n<br><br>\n\n<h2>Gallery components seperated</h2>\n\n<vcl-gallery #external [selectedImage]="1">\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=430" thumbnail="https://picsum.photos/200/200?image=430" alt="Image 1"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=431" thumbnail="https://picsum.photos/200/200?image=431" alt="Image 2"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=432" thumbnail="https://picsum.photos/200/200?image=432" alt="Image 3"></vcl-gallery-image>\n  <vcl-gallery-image image="https://picsum.photos/600/500?image=433" thumbnail="https://picsum.photos/200/200?image=433" alt="Image 4"></vcl-gallery-image>\n</vcl-gallery>\n\n<h3>Body:</h3>\n<vcl-gallery-body [target]="external"></vcl-gallery-body>\n<br><br>\n\n<h3>Footer:</h3>\n<vcl-gallery-footer [target]="external"></vcl-gallery-footer>\n<br><br>\n\n<h3>Thumbnails:</h3>\n<vcl-gallery-thumbnails [target]="external"></vcl-gallery-thumbnails>\n'}}]);