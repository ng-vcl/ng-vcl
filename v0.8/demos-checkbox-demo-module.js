(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demos-checkbox-demo-module"],{

/***/ "./demo/app/demos/checkbox/demo.component.html":
/*!*****************************************************!*\
  !*** ./demo/app/demos/checkbox/demo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Basic</h3>\n<vcl-checkbox [(checked)]=\"isChecked\"></vcl-checkbox> Check!\n\n<h3>Disabled</h3>\n<vcl-checkbox [disabled]=\"true\"></vcl-checkbox> Check!\n\n<h3>With Form Control Label</h3>\n\n<label vcl-form-control-label>\n  <vcl-checkbox [(checked)]=\"isChecked2\"></vcl-checkbox>\n  Check!\n</label>\n\n<h3>Disabled with Form Control Label</h3>\n\n<label vcl-form-control-label>\n  <vcl-checkbox [disabled]=\"true\"></vcl-checkbox>\n  Check!\n</label>\n"

/***/ }),

/***/ "./demo/app/demos/checkbox/demo.component.ts":
/*!***************************************************!*\
  !*** ./demo/app/demos/checkbox/demo.component.ts ***!
  \***************************************************/
/*! exports provided: CheckboxDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxDemoComponent", function() { return CheckboxDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxDemoComponent = /** @class */ (function () {
    function CheckboxDemoComponent() {
        this.isChecked = false;
        this.isChecked2 = false;
        this.isChecked3 = false;
        this.isChecked4 = false;
    }
    CheckboxDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./demo.component.html */ "./demo/app/demos/checkbox/demo.component.html")
        })
    ], CheckboxDemoComponent);
    return CheckboxDemoComponent;
}());



/***/ }),

/***/ "./demo/app/demos/checkbox/demo.module.ts":
/*!************************************************!*\
  !*** ./demo/app/demos/checkbox/demo.module.ts ***!
  \************************************************/
/*! exports provided: demo, CheckboxDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxDemoModule", function() { return CheckboxDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-vcl/ng-vcl */ "./lib/ng-vcl/src/index.ts");
/* harmony import */ var _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../modules/demo/demo.module */ "./demo/app/modules/demo/demo.module.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo.component */ "./demo/app/demos/checkbox/demo.component.ts");








function demo() {
    return {
        label: 'Checkbox',
        tabs: {
            Demo: _demo_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxDemoComponent"],
            'README.md': {
                type: 'md',
                content: __webpack_require__(/*! raw-loader!highlight-loader?!markdown-loader?breaks=true!../../../../lib/ng-vcl/src/checkbox/README.md */ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/checkbox/README.md")
            },
            'demo.component.html': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=html!./demo.component.html */ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/checkbox/demo.component.html")
            },
            'demo.component.ts': {
                type: 'pre',
                content: __webpack_require__(/*! highlight-loader?raw=true&lang=ts!./demo.component.ts */ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/checkbox/demo.component.ts")
            }
        },
    };
}
var CheckboxDemoModule = /** @class */ (function () {
    function CheckboxDemoModule() {
    }
    CheckboxDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLCheckboxModule"],
                _ng_vcl_ng_vcl__WEBPACK_IMPORTED_MODULE_5__["VCLFormControlLabelModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                        path: '',
                        component: _modules_demo_demo_module__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: { demo: demo }
                    }]),
            ],
            entryComponents: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxDemoComponent"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxDemoComponent"]]
        })
    ], CheckboxDemoModule);
    return CheckboxDemoModule;
}());



/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=html!./demo/app/demos/checkbox/demo.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=html!./demo/app/demos/checkbox/demo.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Basic<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-checkbox</span> [(<span class=\"hljs-attr\">checked</span>)]=<span class=\"hljs-string\">\"isChecked\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-checkbox</span>&gt;</span> Check!\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Disabled<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-checkbox</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-checkbox</span>&gt;</span> Check!\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>With Form Control Label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vcl-form-control-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-checkbox</span> [(<span class=\"hljs-attr\">checked</span>)]=<span class=\"hljs-string\">\"isChecked2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-checkbox</span>&gt;</span>\n  Check!\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>Disabled with Form Control Label<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">vcl-form-control-label</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vcl-checkbox</span> [<span class=\"hljs-attr\">disabled</span>]=<span class=\"hljs-string\">\"true\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vcl-checkbox</span>&gt;</span>\n  Check!\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/highlight-loader/index.js?raw=true&lang=ts!./demo/app/demos/checkbox/demo.component.ts":
/*!****************************************************************************************************!*\
  !*** ./node_modules/highlight-loader?raw=true&lang=ts!./demo/app/demos/checkbox/demo.component.ts ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@angular/core'</span>;\n\n<span class=\"hljs-meta\">@Component</span>({\n  templateUrl: <span class=\"hljs-string\">'demo.component.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> CheckboxDemoComponent {\n  isChecked = <span class=\"hljs-literal\">false</span>;\n  isChecked2 = <span class=\"hljs-literal\">false</span>;\n  isChecked3 = <span class=\"hljs-literal\">false</span>;\n  isChecked4 = <span class=\"hljs-literal\">false</span>;\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlight-loader/index.js!./node_modules/markdown-loader/index.js?breaks=true!./lib/ng-vcl/src/checkbox/README.md":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlight-loader!./node_modules/markdown-loader?breaks=true!./lib/ng-vcl/src/checkbox/README.md ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"vcl-checkbox\">vcl-checkbox</h1>\n<p>A Checkbox utilizing <code>vcl-icon</code></p>\n<h2 id=\"usage\">Usage</h2>\n<pre class=\"hljs\"><span class=\"hljs-keyword\">import</span> { VCLCheckboxModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&apos;@ng-vcl/ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class=\"hljs-attr\">imports</span>: [ VCLCheckboxModule ],\n  ...\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">AppComponent</span> </span>{}</pre>\n<pre class=\"hljs\"><code>&lt;vcl-checkbox [(checked)]=&quot;checked&quot;&gt;&lt;/vcl-checkbox&gt;</code></pre>\n<h3 id=\"api\">API</h3>\n<h4 id=\"attributes\">Attributes</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>checked</code> <em>(1)</em></td>\n<td>boolean</td>\n<td>false</td>\n<td>State of checkbox</td>\n</tr>\n<tr>\n<td><code>checkedIcon</code></td>\n<td>string</td>\n<td>fa:check-square-o</td>\n<td>Icon to be displayed when checked</td>\n</tr>\n<tr>\n<td><code>uncheckedIcon</code></td>\n<td>string</td>\n<td>fa:square-o</td>\n<td>Icon to be displayed when unchecked</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the checkbox</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Disables checkbox if true</td>\n</tr>\n<tr>\n<td><code>iconPosition</code></td>\n<td>string</td>\n<td>left</td>\n<td>Icon positioning relative to content</td>\n</tr>\n</tbody></table>\n<p><em>(1) Supports Two-way binding</em></p>\n"

/***/ })

}]);
//# sourceMappingURL=demos-checkbox-demo-module.js.map