(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2wBp":function(e,t,n){"use strict";n.r(t),t.default="import { HttpClient } from '@angular/common/http';\nimport { Component, OnDestroy } from '@angular/core';\nimport { BehaviorSubject ,  of, scheduled, asapScheduler } from 'rxjs';\nimport { switchMap, map, catchError, startWith, distinctUntilChanged } from 'rxjs/operators';\n\nconst BOOK_API_URL = 'https://www.googleapis.com/books/v1/volumes';\n\ninterface Book {\n  id: string;\n  title: string;\n  author?: string;\n  date?: string;\n  image?: string;\n}\ninterface Search {\n  state: 'cleared' | 'loading' | 'error' | 'success';\n  books: Book[];\n}\n\n@Component({\n  templateUrl: 'async.component.html'\n})\nexport class AutocompleteAsyncDemoComponent implements OnDestroy {\n  constructor(private http: HttpClient) { }\n\n  search: Search = {\n    state: 'cleared',\n    books: []\n  };\n\n  books: Book[] = [];\n\n  search$ = new BehaviorSubject<string>('');\n\n  ngOnInit() {\n    this.search$.pipe(\n      distinctUntilChanged(),\n      switchMap(value => {\n        // Show nothing if less than 2 characters\n        if (!value || value.length < 2) {\n          return scheduled<Search>([{ state: 'cleared', books: [] }], asapScheduler);\n        } else {\n          return this.http.get(`${BOOK_API_URL}?q=${value}&projection=lite`).pipe(\n            map((data: any) => {\n              const items = data.items || [];\n              return {\n                state: 'success',\n                books: items.filter(item => item.id && item.volumeInfo && item.volumeInfo.title)\n                            .map(item => ({\n                  id: item.id,\n                  title: item.volumeInfo.title,\n                  image: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail,\n                  author: item.volumeInfo.authors && item.volumeInfo.authors.join(', '),\n                  date: item.volumeInfo.publishedDate,\n                }))\n              };\n            }),\n            catchError(() => scheduled<Search>([{ state: 'error', books: [] }], asapScheduler)), // Error state\n            startWith({ state: 'loading', books: [] }) // Set state to loading before the request\n          );\n        }\n      }),\n      startWith<Search>({ state: 'cleared', books: [] }) // Initial state\n    ).subscribe(search => this.search = search);\n  }\n\n  onSelectBook(book: Book) {\n    if (book) {\n      this.search$.next('');\n      this.books.push(book);\n    }\n  }\n\n  onClearBooks() {\n    this.books = [];\n  }\n\n  ngOnDestroy() {\n    this.search$.complete();\n  }\n}\n"},"6/fp":function(e,t,n){"use strict";n.r(t),t.default='<h3>Basic autocomplete</h3>\n\n<vcl-input-field>\n  <vcl-icon icon="fas:flag"></vcl-icon>\n  <input placeholder="Search"\n         vclInput\n         [vclAutocompleteInput]="acCountries"\n         />\n</vcl-input-field>\n\n<ng-template vclAutocomplete #acCountries="vclAutocomplete">\n  <vcl-select-list>\n    <vcl-select-list-header>Europe</vcl-select-list-header>\n    <vcl-select-list-item value="Greece">\n      Greece\n      <vcl-sub-label>A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas</vcl-sub-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value="France">\n      France\n    </vcl-select-list-item>\n    <vcl-select-list-item value="Germany">\n      Germany\n    </vcl-select-list-item>\n    <vcl-select-list-item value="The United Kingdom">\n      The United Kingdom of Great Britain and Northern Ireland\n    </vcl-select-list-item>\n    <vcl-select-list-header>Asia</vcl-select-list-header>\n    <vcl-select-list-item value="Japan">\n      Japan\n    </vcl-select-list-item>\n    <vcl-select-list-item value="China">\n      China\n    </vcl-select-list-item>\n    <vcl-select-list-item value="Thailand">\n      Thailand\n    </vcl-select-list-item>\n  </vcl-select-list>\n</ng-template>\n'},khga:function(e,t,n){"use strict";n.r(t),n.d(t,"demo",(function(){return M})),n.d(t,"AutocompleteDemoModule",(function(){return V}));var o=n("ofXK"),l=n("3Pt+"),c=n("tyNb"),s=n("19H1"),i=n("vxfF"),a=n("2FIb"),r=n("fXoL"),u=n("oZnf"),m=n("9Rb9"),b=n("1/Kn"),p=n("RCbH"),v=n("33vX"),h=n("zDo1"),d=n("gCzt"),g=n("StUX"),f=n("pKlR");function k(e,t){1&e&&(r.Qb(0,"vcl-select-list"),r.Qb(1,"vcl-select-list-header"),r.wc(2,"Europe"),r.Pb(),r.Qb(3,"vcl-select-list-item",4),r.wc(4," Greece "),r.Qb(5,"vcl-sub-label"),r.wc(6,"A country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas"),r.Pb(),r.Pb(),r.Qb(7,"vcl-select-list-item",5),r.wc(8," France "),r.Pb(),r.Qb(9,"vcl-select-list-item",6),r.wc(10," Germany "),r.Pb(),r.Qb(11,"vcl-select-list-item",7),r.wc(12," The United Kingdom of Great Britain and Northern Ireland "),r.Pb(),r.Qb(13,"vcl-select-list-header"),r.wc(14,"Asia"),r.Pb(),r.Qb(15,"vcl-select-list-item",8),r.wc(16," Japan "),r.Pb(),r.Qb(17,"vcl-select-list-item",9),r.wc(18," China "),r.Pb(),r.Qb(19,"vcl-select-list-item",10),r.wc(20," Thailand "),r.Pb(),r.Pb())}let I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Eb({type:e,selectors:[["ng-component"]],decls:7,vars:1,consts:[["icon","fas:flag"],["placeholder","Search","vclInput","",3,"vclAutocompleteInput"],["vclAutocomplete",""],["acCountries","vclAutocomplete"],["value","Greece"],["value","France"],["value","Germany"],["value","The United Kingdom"],["value","Japan"],["value","China"],["value","Thailand"]],template:function(e,t){if(1&e&&(r.Qb(0,"h3"),r.wc(1,"Basic autocomplete"),r.Pb(),r.Qb(2,"vcl-input-field"),r.Lb(3,"vcl-icon",0),r.Lb(4,"input",1),r.Pb(),r.uc(5,k,21,0,"ng-template",2,3,r.vc)),2&e){const e=r.lc(6);r.yb(4),r.gc("vclAutocompleteInput",e)}},directives:[u.a,m.a,b.a,p.a,v.a,v.b,h.a,d.a,g.a,f.b],encapsulation:2}),e})();var y=n("2Vo4"),w=n("7HRe"),A=n("7Hc7"),P=n("/uUt"),C=n("eIep"),B=n("lJxs"),Q=n("JIr8"),x=n("JX91"),D=n("tk/3"),S=n("6B8K"),O=n("kVmk"),L=n("dCgY");function j(e,t){1&e&&(r.Qb(0,"vcl-select-list-content"),r.Qb(1,"div",8),r.Lb(2,"vcl-busy-indicator",9),r.Pb(),r.Pb())}function $(e,t){1&e&&(r.Qb(0,"vcl-select-list-content"),r.Qb(1,"div",9),r.wc(2,"No books found"),r.Pb(),r.Pb())}function F(e,t){if(1&e&&(r.Qb(0,"vcl-select-list-item",11),r.wc(1),r.Pb()),2&e){const e=t.$implicit;r.gc("value",e),r.yb(1),r.yc(" ",e.title," ")}}function T(e,t){if(1&e&&(r.Ob(0),r.uc(1,F,2,2,"vcl-select-list-item",10),r.Nb()),2&e){const e=r.ac(2);r.yb(1),r.gc("ngForOf",e.search.books)}}function N(e,t){if(1&e&&(r.Qb(0,"vcl-select-list"),r.uc(1,j,3,0,"vcl-select-list-content",7),r.uc(2,$,3,0,"vcl-select-list-content",7),r.uc(3,T,2,1,"ng-container",7),r.Pb()),2&e){const e=r.ac();r.yb(1),r.gc("ngIf","loading"===e.search.state),r.yb(1),r.gc("ngIf","success"===e.search.state&&0===e.search.books.length),r.yb(1),r.gc("ngIf","success"===e.search.state&&e.search.books.length>0)}}function U(e,t){if(1&e&&(r.Qb(0,"li",16),r.Qb(1,"div"),r.Lb(2,"img",17),r.Pb(),r.Qb(3,"div",18),r.Qb(4,"div",19),r.Qb(5,"div",20),r.Qb(6,"h2",21),r.wc(7),r.Pb(),r.Pb(),r.Qb(8,"div",22),r.Qb(9,"i"),r.wc(10),r.Pb(),r.Lb(11,"br"),r.Qb(12,"span"),r.wc(13),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb()),2&e){const e=t.$implicit;r.yb(2),r.gc("src",e.image,r.oc),r.yb(5),r.xc(e.title),r.yb(3),r.xc(e.date),r.yb(3),r.xc(e.author)}}function G(e,t){if(1&e){const e=r.Rb();r.Ob(0),r.Qb(1,"h3"),r.wc(2),r.Pb(),r.Qb(3,"div",12),r.Qb(4,"ul",13),r.uc(5,U,14,4,"li",14),r.Pb(),r.Pb(),r.Qb(6,"button",15),r.Xb("click",(function(){return r.mc(e),r.ac().onClearBooks()})),r.wc(7,"Clear"),r.Pb(),r.Nb()}if(2&e){const e=r.ac();r.yb(2),r.yc("Books (",e.books.length,")"),r.yb(3),r.gc("ngForOf",e.books)}}const E=function(e){return{autocomplete:e,mapInputValue:"void"}};let K=(()=>{class e{constructor(e){this.http=e,this.search={state:"cleared",books:[]},this.books=[],this.search$=new y.a("")}ngOnInit(){this.search$.pipe(Object(P.a)(),Object(C.a)(e=>!e||e.length<2?Object(w.a)([{state:"cleared",books:[]}],A.a):this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${e}&projection=lite`).pipe(Object(B.a)(e=>({state:"success",books:(e.items||[]).filter(e=>e.id&&e.volumeInfo&&e.volumeInfo.title).map(e=>({id:e.id,title:e.volumeInfo.title,image:e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.smallThumbnail,author:e.volumeInfo.authors&&e.volumeInfo.authors.join(", "),date:e.volumeInfo.publishedDate}))})),Object(Q.a)(()=>Object(w.a)([{state:"error",books:[]}],A.a)),Object(x.a)({state:"loading",books:[]}))),Object(x.a)({state:"cleared",books:[]})).subscribe(e=>this.search=e)}onSelectBook(e){e&&(this.search$.next(""),this.books.push(e))}onClearBooks(){this.books=[]}ngOnDestroy(){this.search$.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(D.a))},e.\u0275cmp=r.Eb({type:e,selectors:[["ng-component"]],decls:11,vars:5,consts:[["vclPrepend","","icon","fas:search"],["vclInput","","placeholder","Search Google Books api",3,"vclAutocompleteInput","input","vclAutocompleteInputSelectionChange"],["inputBooks",""],["vcl-square-button","","vclAppend","",3,"click"],[3,"icon"],["vclAutocomplete",""],["acBooks","vclAutocomplete"],[4,"ngIf"],[1,"row","justify-content-center"],[2,"padding","1em"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"data-list","item-selectability","item-hover-highlight","no-border","scrollable","y",2,"max-height","20em"],["role","listbox","aria-multiselectable","false",1,"data-list-body"],["class","data-list-item row","role","option","aria-selected","false",4,"ngFor","ngForOf"],["vcl-button","",3,"click"],["role","option","aria-selected","false",1,"data-list-item","row"],[1,"responsive-image",3,"src"],[1,"gutter-margin","flex"],[1,"row"],[1,"row","center","flex"],[1,"m-0"],[1,"secondary-text-color","align-right"]],template:function(e,t){if(1&e){const e=r.Rb();r.Qb(0,"h3"),r.wc(1,"vcl-dropdown with async data"),r.Pb(),r.Qb(2,"vcl-input-field"),r.Lb(3,"vcl-icon",0),r.Qb(4,"input",1,2),r.Xb("input",(function(e){return t.search$.next(e.target.value)}))("vclAutocompleteInputSelectionChange",(function(e){return t.onSelectBook(e)})),r.Pb(),r.Qb(6,"button",3),r.Xb("click",(function(){r.mc(e);const n=r.lc(5);return n.value="",n.focus(),t.search$.next("")})),r.Lb(7,"vcl-icon",4),r.Pb(),r.Pb(),r.uc(8,N,4,3,"ng-template",5,6,r.vc),r.uc(10,G,8,2,"ng-container",7)}if(2&e){const e=r.lc(9);r.yb(4),r.gc("vclAutocompleteInput","cleared"===t.search.state?void 0:r.ic(3,E,e)),r.yb(3),r.gc("icon","fas:times-circle"),r.yb(3),r.gc("ngIf",t.books.length>0)}},directives:[u.a,m.a,b.a,p.a,S.b,v.a,o.t,v.b,h.a,O.a,L.a,o.s,g.a],encapsulation:2}),e})();function M(){return{label:"Autocomplete",tabs:{Demo:I,"Async Demo":K,"README.md":{type:"md",content:'# vcl-autocomplete\n\nAn autocomplete extension for inputs utilizing the select-list\n\n## Usage\n\n\n```html\n<input placeholder="Type to open dropdown" [vclAutocompleteInput]="ac" />\n\n<ng-template vclAutocomplete #ac="vclAutocomplete">\n  <vcl-select-list>\n    <vcl-select-list-header>Items</vcl-select-list-header>\n    <vcl-select-list-item value="1">\n      Item 1\n      <vcl-sub-label>Description of Item 1</vcl-sub-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value="2">\n      Item 2\n      <vcl-sub-label>Description of Item 2</vcl-sub-label>\n    </vcl-select-list-item>\n    <vcl-select-list-item value="3" [disabled]="true">\n      Item 3\n      <vcl-sub-label>Description of Item 3</vcl-sub-label>\n    </vcl-select-list-item>\n    <vcl-select-list-seperator></vcl-select-list-seperator>\n    <vcl-select-list-item value="4" [disabled]="true">\n      Seperated Item\n      <vcl-sub-label>Description of Item 4</vcl-sub-label>\n    </vcl-select-list-item>\n  </vcl-select-list>\n</ng-template>\n```\n\n### vclAutocomplete attributes\n\nName            | Type                             | Default     | Description\n----------      | -------                          | -------     | --------------------------------------\n`width`         | number \\| string                 |             | Dropdown width\n`height`        | number \\| string                 | \'20em\'      | Dropdown height\n`maxHeight`     | number \\| string                 |             | Dropdown max height\n\n### vclAutocomplete events\n\nName            | Type    | Description\n----------      | ------- | --------------------------------------\n`afterClose`    | any     | Fired after the dropdown was closed\n\n### input[vclAutocompleteInput] attributes\n\nName                         | Type                                   | Default | Description\n----------                   | -------                                | ------- | --------------------------------------\n`vclAutocomplete`            | vcl-autocomplete                       |         | The autocomplete component to use\n'},"demo.component.html":{type:"html",content:n("6/fp")},"demo.component.ts":{type:"ts",content:n("snN1")},"async.component.html":{type:"html",content:n("wNr6")},"async.component.ts":{type:"ts",content:n("2wBp")}}}}let V=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(t){return new(t||e)},imports:[[o.c,l.m,a.b,s.VCLButtonModule,s.VCLIconModule,s.VCLInputModule,s.VCLIcogramModule,s.VCLBusyIndicatorModule,s.VCLAutocompleteModule,i.c,c.g.forChild([{path:"",component:a.a,data:{demo:M}}])]]}),e})()},snN1:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  templateUrl: 'demo.component.html'\n})\nexport class AutocompleteDemoComponent {\n\n}\n"},wNr6:function(e,t,n){"use strict";n.r(t),t.default='\n<h3>vcl-dropdown with async data</h3>\n\n<vcl-input-field>\n  <vcl-icon vclPrepend icon="fas:search"></vcl-icon>\n  <input #inputBooks \n         vclInput \n         placeholder="Search Google Books api" \n         (input)="search$.next($event.target.value)"\n         [vclAutocompleteInput]="search.state === \'cleared\' ? undefined : {autocomplete: acBooks, mapInputValue: \'void\'}"\n         (vclAutocompleteInputSelectionChange)="onSelectBook($event)"\n         />\n  <button vcl-square-button vclAppend\n          (click)="inputBooks.value = \'\'; inputBooks.focus(); search$.next(\'\')">\n    <vcl-icon [icon]="\'fas:times-circle\'"></vcl-icon>\n  </button>\n</vcl-input-field>\n\n<ng-template vclAutocomplete #acBooks="vclAutocomplete">\n  <vcl-select-list>\n    <vcl-select-list-content *ngIf="search.state === \'loading\'">\n      <div class="row justify-content-center">\n        <vcl-busy-indicator style="padding: 1em"> </vcl-busy-indicator>\n      </div>\n    </vcl-select-list-content>\n    <vcl-select-list-content *ngIf="search.state === \'success\' && search.books.length === 0">\n      <div style="padding: 1em">No books found</div>\n    </vcl-select-list-content>\n    <ng-container *ngIf="search.state === \'success\' && search.books.length > 0">\n      <vcl-select-list-item *ngFor="let book of search.books" [value]="book">\n        {{book.title}}\n      </vcl-select-list-item>\n    </ng-container>\n  </vcl-select-list>\n</ng-template>\n\n<ng-container *ngIf="books.length > 0">\n\n  <h3>Books ({{books.length}})</h3>\n\n  <div class="data-list item-selectability item-hover-highlight no-border scrollable y" style="max-height: 20em;">\n    <ul class="data-list-body" role="listbox" aria-multiselectable="false">\n      <li *ngFor="let book of books" class="data-list-item row" role="option" aria-selected="false">\n        <div>\n          <img class="responsive-image" [src]="book.image">\n        </div>\n        <div class="gutter-margin flex">\n          <div class="row">\n            <div class="row center flex">\n              <h2 class="m-0">{{book.title}}</h2>\n            </div>\n            <div class="secondary-text-color align-right">\n              <i>{{book.date}}</i><br>\n              <span>{{book.author}}</span>\n            </div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <button vcl-button (click)="onClearBooks()">Clear</button>\n\n</ng-container>\n'}}]);