webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_uploadFile_uploadFile_component__ = __webpack_require__("../../../../../src/app/components/uploadFile/uploadFile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_file_drop__ = __webpack_require__("../../../../ngx-file-drop/ngx-file-drop.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_uploadFile_uploadFile_component__["a" /* UploadFileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_file_drop__["a" /* FileDropModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_uploadFile_uploadFile_component__ = __webpack_require__("../../../../../src/app/components/uploadFile/uploadFile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_uploadFile_uploadFile_component__["a" /* UploadFileComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* PreloadAllModules */] });
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/uploadFile/uploadFile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uploadFile_service__ = __webpack_require__("../../../../../src/app/components/uploadFile/uploadFile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__ = __webpack_require__("../../../../angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadFileComponent = (function () {
    function UploadFileComponent(uploadFileService) {
        this.uploadFileService = uploadFileService;
        this.data = null;
        this.submitted = false;
        this.files = [];
        this.status = false;
        this.typeCohorts = 'weekly';
    }
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent.prototype.dropped = function (event) {
        var _this = this;
        this.files = event.files;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            file.fileEntry.file(function (info) {
                _this.onValidate(info);
            });
        }
    };
    UploadFileComponent.prototype.onValidate = function (data) {
        var _this = this;
        var options = {
            fieldSeparator: ',',
            quoteStrings: '',
            decimalseparator: '.',
            showLabels: true,
            headers: ["cohort_week", "activity_week", "users", "revenue"],
            useBom: true
        };
        this.submitted = true;
        if (data !== null) {
            var events = [];
            var reader_1 = new FileReader();
            reader_1.readAsText(data);
            reader_1.onload = function () {
                var text = reader_1.result;
                _this.uploadFileService.uploadData(text).subscribe(function (result) {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                        title: 'Success',
                        text: 'Report generated correctly',
                        type: 'success'
                    });
                    new __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__["Angular2Csv"](result, 'report', options);
                }, function (error) {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                        title: 'Error!',
                        text: 'An error occurs when generating the report',
                        type: 'error'
                    });
                });
            };
        }
        ;
    };
    return UploadFileComponent;
}());
UploadFileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'upload-file',
        providers: [__WEBPACK_IMPORTED_MODULE_1__uploadFile_service__["a" /* UploadFileService */]],
        template: __webpack_require__("../../../../../src/app/components/uploadFile/uploadFile.template.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__uploadFile_service__["a" /* UploadFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__uploadFile_service__["a" /* UploadFileService */]) === "function" && _a || Object])
], UploadFileComponent);

var _a;
//# sourceMappingURL=uploadFile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/uploadFile/uploadFile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_config__ = __webpack_require__("../../../../../src/app/utils/config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFileService = (function () {
    function UploadFileService(http) {
        this.http = http;
    }
    UploadFileService.prototype.uploadData = function (events) {
        var data = { data: events };
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_2__utils_config__["a" /* Config */].API, data)
            .map(__WEBPACK_IMPORTED_MODULE_2__utils_config__["a" /* Config */].extractData).catch(__WEBPACK_IMPORTED_MODULE_2__utils_config__["a" /* Config */].handleError);
    };
    return UploadFileService;
}());
UploadFileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UploadFileService);

var _a;
//# sourceMappingURL=uploadFile.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/uploadFile/uploadFile.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row marketing\">\n  <div class=\"col-lg-3\">\n      <div class=\"bd-example margin\">\n          <h2>Convert this:</h2>\n          <img src=\"./assets/convert.png\" width=\"100%\">\n      </div>\n  </div>\n    <div class=\"col-lg-6 items-center\">\n            <h1 class=\"template-style\">8BALL CONVERTER</h1>\n            <h3 class=\"text-muted template-style\">Convert all your users timestamp into cohorts</h3>\n            <div class=\"bd-example bd-border\">\n                <form>\n                <div class=\"form-group\" style=\"text-align: left;\">\n                  <label>How do you want the cohorts?</label>\n                  <div class=\"input-group\">\n                      <input type=\"radio\" [ngModelOptions]=\"{standalone: true}\" value=\"weekly\" [(ngModel)]=\"typeCohorts\" aria-label=\"Checkbox for following text input\">\n                      <label style=\"margin-left: 10px\">Weekly</label>\n                    </div>\n                </div>\n                <div class=\"center\">\n                    <file-drop headertext=\"Drop files here\" (onFileDrop)=\"dropped($event)\">\n                    </file-drop>\n                    <div class=\"upload-table\" style=\"margin-top: 20px\">\n                        <table class=\"table table-striped table-bordered\">\n                            <thead>\n                                <tr>\n                                    <th>Name</th>\n                                </tr>\n                            </thead>\n                            <tbody class=\"upload-name-style\">\n                                <tr *ngFor=\"let item of files\">\n                                    <td><strong>{{ item.relativePath }}</strong></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                  <div class=\"form-group\">\n                  </div>\n              </form>\n            </div>\n    </div>\n    <div class=\"col-lg-3 margin\">\n        <div class=\"bd-example\">\n            <h2>Into this:</h2>\n            <img src=\"./assets/into.png\" width=\"100%\" style=\"margin-top: 2.2rem;\">\n        </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/utils/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });

var Config = (function () {
    function Config() {
    }
    Object.defineProperty(Config, "API", {
        get: function () {
            return 'https://107.170.76.230:3000/cohort';
        },
        enumerable: true,
        configurable: true
    });
    Config.extractData = function (res) {
        var body = res.json() || {};
        return body;
    };
    Config.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map