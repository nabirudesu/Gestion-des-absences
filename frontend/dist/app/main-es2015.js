(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>admin works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" full\">\n  <div id=\"background\"></div> \n<div class=\"form\" >\n  <img class=\"art\" src=\"../../assets/ESI-logo.svg\">\n  \n  <div class=\"name\" (submit)=\"onSubmituser()\"><h5 class=\"title1\">Email</h5>       <input [(ngModel)]=\"UserName\" class=\"input-form\" placeholder=\"Enter your email\"/></div>\n    <div class=\"name\" (submit)=\"onSubmitpass()\">  <h5 class=\"title2\">Password</h5>     <input [(ngModel)]=\"Password\" class=\"input-form\" type=\"password\" placeholder=\"Enter your password\"/></div>  \n    <div class=\"button-log\"><button class=\"but-login\" (click)=\"onLoginClick()\" ><b>Login</b></button></div>\n    <div><p *ngIf=\"wronguser\" class=\"messege\">Wrong username or password ..</p></div>\n  </div> \n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"background\"></div> \n<div class=\"form\" >\n    \n\n    <div class=\"img-container\"><img class=\"art\" src=\"../../assets/ESI-logo.svg\"></div>\n    <div class=\"form-container\"> \n        \n    <div class=\"name\">  <h5 class=\"title2\">Group</h5>     <input class=\"input-form\"  [(ngModel)]=\"Groupe\" placeholder=\"Enter your group\"/></div>  \n    <div class=\"name\" >\n            <h5 class=\"title2\">Module</h5> \n    <select class=\"cus-select\"   placeholder=\"Choose module\" ng-option=\"Names\" [(ngModel)]=\"Modul\" >\n    <option>Maths</option>    \n    <option>Science</option>    \n    <option>IGL</option>    \n    </select>\n    \n    </div> \n    <div class=\"name\">  <h5 class=\"title2\">Justification</h5>     <textarea class=\"text-form\" [(ngModel)]=\"justific\"  placeholder=\"your Jutification\"></textarea></div> \n    <div class=\"button-log\"><button class=\"but-login\"><b><a>Sent</a></b></button><button class=\"but-login\"><b>Import</b></button></div>\n    </div>\n    \n</div>  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/teacher.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/teacher.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"background\"></div>\n<div class=\"main-container\">\n<div class=\"mail\">\n  <div class=\"title1\"><b>EmailBox</b></div>\n<ul class=\"students\">\n  <li *ngFor=\"let student of STUDENTS\"\n    [class.selected]=\"student === selectedstudent\"\n    (click)=\"onSelect(student)\">\n    <div class=\"fullname\">{{student.name | uppercase}} {{student.surname}}</div> <div> Group &nbsp;: {{student.group}}</div>\n  </li>\n</ul>\n</div>\n<div *ngIf=\"selectedstudent\" class=\"details\" >\n<div class=\"title2\"><b>Details</b></div>\n<div class=\"justification-view\">\n<div class=\"details-view\">\n  <div class=\"fullname2\">{{selectedstudent.name | uppercase}} {{selectedstudent.surname}}</div>\n  <div class=\"fullname2\"><span>group&nbsp; :</span>&nbsp;&nbsp;  &nbsp;{{selectedstudent.group}}</div>\n</div>\n<div >\n  <div class=\"span-view\"><span >Justification:</span></div><textarea  class=\"justification-text\" readonly=\"readonly\">{{selectedstudent.justification}}</textarea>\n</div>\n\n</div>\n<div class=\"button-log\"><button class=\"but-login\"><b><a>confirm</a></b></button><button class=\"but-login\"><b>Delete</b></button></div>\n</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/admin.ts":
/*!**********************!*\
  !*** ./src/admin.ts ***!
  \**********************/
/*! exports provided: admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admin", function() { return admin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/user.ts");


class admin extends _user__WEBPACK_IMPORTED_MODULE_1__["user"] {
}


/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);

class AppModule {
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/teacher/teacher.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











const AppRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'Admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"] },
    { path: 'Student/:id/:username', component: _student_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"] },
    { path: 'Teacher', component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_8__["TeacherComponent"] },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _student_student_component__WEBPACK_IMPORTED_MODULE_7__["StudentComponent"],
            _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_8__["TeacherComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(AppRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes shadows{\r\n    from{box-shadow: black 0px 0px 10px 2px;}\r\n    to{box-shadow: transparent 0px 0px 120px 2px;}\r\n}\r\n\r\n\r\n@keyframes shadows{\r\n    from{box-shadow: black 0px 0px 10px 2px;}\r\n    to{box-shadow: transparent 0px 0px 120px 2px;}\r\n}\r\n\r\n\r\n.form{\r\n    width: 340px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    text-align: center;\r\n   \r\n    border-radius: 20px;\r\n    border-width: 1rem;\r\n    background-color: transparent;\r\n    \r\n    \r\n    margin: 50px auto;\r\n  \r\n   \r\n}\r\n\r\n\r\n.name{\r\n    width: 100%;\r\n   margin-top: 1rem;\r\n   padding: 10px;\r\n   max-lines: 3;\r\n}\r\n\r\n\r\n#background {\r\n    background-image: url('coffee-notebook-writing-computer-34601.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    width: 130%;\r\n\r\n    height: 130%;\r\n    overflow-x: hidden;\r\n    position: absolute;\r\n    top: -2.5%;\r\n    left: -2.5%;\r\n   \r\n    z-index: -1;\r\n    \r\n    \r\n\r\n    /* START */\r\n    /* START */\r\n    /* START */\r\n    /* START */\r\n\r\n    /* You can adjust the blur-radius as you'd like */\r\n    -webkit-filter: blur(5px);\r\n            filter: blur(5px);\r\n  \r\n    \r\n}\r\n\r\n\r\n.input-form {\r\nborder-radius: 40px;\r\npadding: 0.45rem;\r\nmargin-bottom: 0rem;\r\n\r\nwidth: 59%;\r\n\r\nborder: none;\r\ntransition: all 250ms ease-in-out;\r\nfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\nfont-weight: bold;\r\n}\r\n\r\n\r\n.input-form:hover {\r\n    border-radius: 40px;\r\n    padding: 0.45rem;\r\n   \r\n    width: 59%;\r\n    border: none;\r\n    -webkit-animation-name: shadows;\r\n            animation-name: shadows;\r\n    -webkit-animation-direction: normal;\r\n            animation-direction: normal;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    -webkit-animation-duration: 500ms;\r\n            animation-duration: 500ms;\r\n    }\r\n\r\n\r\n.art{\r\nwidth: 70%;\r\nborder-radius: 16px;\r\nbox-shadow: black 0px 0px 15px 2px;\r\nbackground-color: white;\r\nmargin: 2rem -1rem auto;\r\npadding: 0.8em 1.2rem;\r\n\r\n}\r\n\r\n\r\n.input-form:focus {\r\n        border-radius: 40px;\r\n        padding: 0.6rem;\r\n       \r\n        width: 59%;\r\n        border: none;\r\n        box-shadow: black 0px 0px 15px 2px;\r\n        margin: -0.15rem auto;\r\n        \r\n    \r\n}\r\n\r\n\r\n.title1{\r\n    margin-top: -0.4rem;\r\n    margin-bottom: 1rem\r\n   }\r\n\r\n\r\n.title2{\r\n    margin-top: -1.2rem;\r\n    margin-bottom: 1rem\r\n}\r\n\r\n\r\n.but-login{\r\n   \r\n    background-color:rgb(255, 255, 255);\r\n    padding: 0.45rem 0.9rem ;\r\n    border-radius: 1rem;\r\n    border: none;\r\n    transition: all 250ms ease-in-out;\r\n    margin: 1rem 0.5rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    \r\n   \r\n\r\n}\r\n\r\n\r\n.messege {\r\n    color: red;\r\n    font-size: 70%;\r\n    font-weight: 9px;\r\n    transition: all 250ms ease-in-out;\r\n}\r\n\r\n\r\n.but-login:hover{\r\n    margin: 0.95rem 0.4rem;\r\n    background-color:rgb(255, 255, 255);\r\n    \r\n    padding: 0.5rem 1rem ;\r\n    border-radius: 1rem;\r\n  \r\n    \r\n    box-shadow: rgb(0, 0, 0) 2px 2px 35px 2px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLEtBQUssa0NBQWtDLENBQUM7SUFDeEMsR0FBRyx5Q0FBeUMsQ0FBQztBQUNqRDs7O0FBSEE7SUFDSSxLQUFLLGtDQUFrQyxDQUFDO0lBQ3hDLEdBQUcseUNBQXlDLENBQUM7QUFDakQ7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjs7SUFFbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw2QkFBNkI7OztJQUc3QixpQkFBaUI7OztBQUdyQjs7O0FBRUE7SUFDSSxXQUFXO0dBQ1osZ0JBQWdCO0dBQ2hCLGFBQWE7R0FDYixZQUFZO0FBQ2Y7OztBQUNBO0lBQ0ksbUVBQW1GO0lBQ25GLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsV0FBVzs7SUFFWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVzs7SUFFWCxXQUFXOzs7O0lBSVgsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTs7SUFFVixpREFBaUQ7SUFDakQseUJBQWlCO1lBQWpCLGlCQUFpQjs7O0FBR3JCOzs7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEIsbUJBQW1COztBQUVuQixVQUFVOztBQUVWLFlBQVk7QUFDWixpQ0FBaUM7QUFDakMsNERBQTREO0FBQzVELGlCQUFpQjtBQUNqQjs7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCOztJQUVoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekI7OztBQUNKO0FBQ0EsVUFBVTtBQUNWLG1CQUFtQjtBQUNuQixrQ0FBa0M7QUFDbEMsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QixxQkFBcUI7O0FBRXJCOzs7QUFDQTtRQUNRLG1CQUFtQjtRQUNuQixlQUFlOztRQUVmLFVBQVU7UUFDVixZQUFZO1FBQ1osa0NBQWtDO1FBQ2xDLHFCQUFxQjs7O0FBRzdCOzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQjtHQUNEOzs7QUFDSDtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKOzs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQiw0REFBNEQ7Ozs7QUFJaEU7OztBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOzs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixtQ0FBbUM7O0lBRW5DLHFCQUFxQjtJQUNyQixtQkFBbUI7OztJQUduQix5Q0FBeUM7O0FBRTdDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc2hhZG93c3tcclxuICAgIGZyb217Ym94LXNoYWRvdzogYmxhY2sgMHB4IDBweCAxMHB4IDJweDt9XHJcbiAgICB0b3tib3gtc2hhZG93OiB0cmFuc3BhcmVudCAwcHggMHB4IDEyMHB4IDJweDt9XHJcbn1cclxuXHJcblxyXG4uZm9ybXtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBcclxuICAgIFxyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgXHJcbiAgIFxyXG59XHJcblxyXG4ubmFtZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICBwYWRkaW5nOiAxMHB4O1xyXG4gICBtYXgtbGluZXM6IDM7XHJcbn1cclxuI2JhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL1BpY3R1cmVzL2NvZmZlZS1ub3RlYm9vay13cml0aW5nLWNvbXB1dGVyLTM0NjAxLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEzMCU7XHJcblxyXG4gICAgaGVpZ2h0OiAxMzAlO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMi41JTtcclxuICAgIGxlZnQ6IC0yLjUlO1xyXG4gICBcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICAvKiBTVEFSVCAqL1xyXG4gICAgLyogU1RBUlQgKi9cclxuICAgIC8qIFNUQVJUICovXHJcbiAgICAvKiBTVEFSVCAqL1xyXG5cclxuICAgIC8qIFlvdSBjYW4gYWRqdXN0IHRoZSBibHVyLXJhZGl1cyBhcyB5b3UnZCBsaWtlICovXHJcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICBcclxuICAgIFxyXG59XHJcbi5pbnB1dC1mb3JtIHtcclxuYm9yZGVyLXJhZGl1czogNDBweDtcclxucGFkZGluZzogMC40NXJlbTtcclxubWFyZ2luLWJvdHRvbTogMHJlbTtcclxuXHJcbndpZHRoOiA1OSU7XHJcblxyXG5ib3JkZXI6IG5vbmU7XHJcbnRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcclxuZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaW5wdXQtZm9ybTpob3ZlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMC40NXJlbTtcclxuICAgXHJcbiAgICB3aWR0aDogNTklO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNoYWRvd3M7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgIH1cclxuLmFydHtcclxud2lkdGg6IDcwJTtcclxuYm9yZGVyLXJhZGl1czogMTZweDtcclxuYm94LXNoYWRvdzogYmxhY2sgMHB4IDBweCAxNXB4IDJweDtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbm1hcmdpbjogMnJlbSAtMXJlbSBhdXRvO1xyXG5wYWRkaW5nOiAwLjhlbSAxLjJyZW07XHJcblxyXG59ICAgIFxyXG4uaW5wdXQtZm9ybTpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgICAgICBcclxuICAgICAgICB3aWR0aDogNTklO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBibGFjayAwcHggMHB4IDE1cHggMnB4O1xyXG4gICAgICAgIG1hcmdpbjogLTAuMTVyZW0gYXV0bztcclxuICAgICAgICBcclxuICAgIFxyXG59XHJcbi50aXRsZTF7XHJcbiAgICBtYXJnaW4tdG9wOiAtMC40cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbVxyXG4gICB9XHJcbi50aXRsZTJ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMS4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbVxyXG59XHJcblxyXG4uYnV0LWxvZ2lue1xyXG4gICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMC40NXJlbSAwLjlyZW0gO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcclxuICAgIG1hcmdpbjogMXJlbSAwLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBcclxuICAgXHJcblxyXG59XHJcbi5tZXNzZWdlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDcwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmJ1dC1sb2dpbjpob3ZlcntcclxuICAgIG1hcmdpbjogMC45NXJlbSAwLjRyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIFxyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBcclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDJweCAycHggMzVweCAycHg7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _const_students__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../const-students */ "./src/const-students.ts");
/* harmony import */ var _teacher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../teacher */ "./src/teacher.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../user */ "./src/user.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/admin */ "./src/admin.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);









let LoginComponent = class LoginComponent {
    constructor(router, login) {
        this.router = router;
        this.login = login;
    }
    loginauth() {
        return;
    }
    onSubmituser() {
        return this.UserName;
    }
    onSubmitpass() {
        return this.Password;
    }
    onLoginClick() {
        jquery__WEBPACK_IMPORTED_MODULE_8__["ajax"]({
            url: "http://127.0.0.1:8000/auth/",
            method: 'POST',
            async: true,
            data: { "username": this.UserName, "password": this.Password },
            pipe: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
    isstudent() {
        var s = false;
        _const_students__WEBPACK_IMPORTED_MODULE_1__["Students"].forEach((element) => {
            if (this.UserName === element.username && this.Password === element.password)
                s = true;
        });
        return s;
    }
    isteacher() {
        return (_user__WEBPACK_IMPORTED_MODULE_3__["user"]) instanceof (_teacher__WEBPACK_IMPORTED_MODULE_2__["teacher"]);
    }
    isadmin() {
        return (_user__WEBPACK_IMPORTED_MODULE_3__["user"]) instanceof (src_admin__WEBPACK_IMPORTED_MODULE_6__["admin"]);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let LoginService = class LoginService {
    constructor() {
    }
    get_Token(user, password) {
        jquery__WEBPACK_IMPORTED_MODULE_2__["ajax"]({
            url: "http://127.0.0.1:8000/auth/",
            method: 'POST',
            data: JSON.stringify({ 'username': user,
                'password': password }),
            contentType: 'application/json ; ',
            succes: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.log('no!!');
                console.log(err);
            }
        });
    }
    login(user, password) {
        jquery__WEBPACK_IMPORTED_MODULE_2__["ajax"]({
            url: "http://127.0.0.1:8000/api/",
            method: 'GET',
            async: true,
            Headers: {
                "authorization": `Token ${this.get_Token(user, password)}`
            },
            succes: function (response) {
                console.log(this.get_Token(user, password));
                return true;
            },
            error: function (err) {
                console.log(err);
                console.log(this.get_Token(user, password));
                return false;
            }
        });
    }
};
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes shadows{\r\n    from{box-shadow: black 0px 0px 10px 2px;}\r\n    to{box-shadow: transparent 0px 0px 120px 2px;}\r\n}\r\n@keyframes shadows{\r\n    from{box-shadow: black 0px 0px 10px 2px;}\r\n    to{box-shadow: transparent 0px 0px 120px 2px;}\r\n}\r\n#background {\r\n    background-image: url('coffee-notebook-writing-computer-34601.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    width: 150%;\r\n\r\n    height: 150%;\r\n    overflow-x: hidden;\r\n    position: absolute;\r\n    top: -2.5%;\r\n    left: -2.5%;\r\n   \r\n    z-index: -1;\r\n\r\n    -webkit-filter: blur(5px);\r\n\r\n            filter: blur(5px);\r\n  \r\n    \r\n}\r\n.form{\r\n    width: 900px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    \r\n    \r\n   \r\n   \r\n    border-radius: 10px;\r\n    border-width: 1rem;\r\n    background-color:  transparent;\r\n    box-shadow: black 2px 2px 35px 2px;\r\n    \r\n    margin: 50px auto;\r\n}\r\n.name{\r\n    width: 100%;\r\n   margin-top: 1rem;\r\n   padding: 10px;\r\n   max-lines: 3;\r\n   text-align: center;\r\n}\r\n.input-form {\r\nborder-radius: 40px;\r\npadding: 0.45rem;\r\nmargin-bottom: 0rem;\r\nwidth: 300px;\r\nborder: none;\r\ntransition: all 250ms ease-in-out;\r\nfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\nfont-weight: bold;\r\n}\r\n.input-form:hover {\r\n    border-radius: 40px;\r\n    padding: 0.45rem;\r\n   \r\n    \r\n    border: none;\r\n    -webkit-animation-name: shadows;\r\n            animation-name: shadows;\r\n    -webkit-animation-direction: normal;\r\n            animation-direction: normal;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    -webkit-animation-duration: 500ms;\r\n            animation-duration: 500ms;\r\n    }\r\n.art{\r\nwidth: 300px;\r\nborder-radius: 40px;\r\nbox-shadow: black 0px 0px 15px 2px;\r\nbackground-color: white;\r\n\r\npadding: 1em 1.2rem;\r\n\r\n\r\n}\r\n.img-container{\r\nwidth: 45%;\r\ntext-align: center;\r\npadding-left: 3.5rem ;\r\n\r\n}\r\n.input-form:focus {\r\n        border-radius: 40px;\r\n        padding: 0.6rem;\r\n       \r\n        width: 300px;\r\n        border: none;\r\n        box-shadow: black 0px 0px 15px 2px;\r\n        margin: -0.15rem auto;\r\n        \r\n    \r\n}\r\n.title1{\r\n    margin-top: -0.4rem;\r\n    margin-bottom: 1rem\r\n   }\r\n.title2{\r\n    margin-top: -1.2rem;\r\n    margin-bottom: 1rem\r\n}\r\n.but-login{\r\n   \r\n    background-color:rgb(255, 255, 255);\r\n    padding: 0.45rem 0.9rem ;\r\n    border-radius: 1rem;\r\n    border: none;\r\n    transition: all 250ms ease-in-out;\r\n    margin: 1rem 0.5rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    \r\n   \r\n\r\n}\r\n.cus-select{\r\n    text-align: center;\r\n    padding: .5rem 1rem;\r\n\r\n    width: 40%;\r\n    border-radius: 20px;\r\n    border: none;\r\n    transition: all 250ms ease-in-out;\r\n   \r\n}\r\n.select:hover{\r\n    box-shadow: rgb(0, 0, 0) 0px 0px 15px 2px;\r\n}\r\n.select:focus{\r\n    box-shadow: rgb(0, 0, 0) 0px 0px 15px 2px;\r\n}\r\n.but-login:hover{\r\n    margin: 0.95rem 0.4rem;\r\n    background-color:rgb(255, 255, 255);\r\n    \r\n    padding: 0.5rem 1rem ;\r\n    border-radius: 1rem;\r\n  \r\n    \r\n    box-shadow: rgb(0, 0, 0) 2px 2px 35px 2px;\r\n\r\n}\r\n.button-log{\r\ntext-align: center;\r\n}\r\n.form-container{\r\n    width : 50%;\r\n    margin-top: 1rem ;\r\n    text-align: center;\r\n    \r\n    \r\n}\r\n.text-form {\r\n    border-radius: 16px;\r\n    max-height: 150px;\r\n    min-height: 150px;\r\n    max-width: 296px;\r\n    min-width: 296px;\r\n    padding: 0.45rem;\r\n    margin-bottom: 0rem;\r\n    margin-top: 0rem;\r\n    width: 300px;\r\n    border: none;\r\n    transition: all 250ms ease-in-out;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-weight: bold;\r\n    }\r\n.text-form:hover {\r\n        border-radius: 16px;\r\n        padding: 0.45rem;\r\n       \r\n        \r\n        border: none;\r\n        -webkit-animation-name: shadows;\r\n                animation-name: shadows;\r\n        -webkit-animation-direction: normal;\r\n                animation-direction: normal;\r\n        -webkit-animation-iteration-count: 1;\r\n                animation-iteration-count: 1;\r\n        -webkit-animation-duration: 500ms;\r\n                animation-duration: 500ms;\r\n        }\r\n.text-form:focus {\r\n            border-radius: 16px;\r\n            padding: 0.6rem;\r\n           \r\n            \r\n            border: none;\r\n            box-shadow: black 0px 0px 15px 2px;\r\n            margin: -0.15rem auto;\r\n            \r\n        \r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxLQUFLLGtDQUFrQyxDQUFDO0lBQ3hDLEdBQUcseUNBQXlDLENBQUM7QUFDakQ7QUFIQTtJQUNJLEtBQUssa0NBQWtDLENBQUM7SUFDeEMsR0FBRyx5Q0FBeUMsQ0FBQztBQUNqRDtBQUNBO0lBQ0ksbUVBQW1GO0lBQ25GLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsV0FBVzs7SUFFWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVzs7SUFFWCxXQUFXOztJQUVYLHlCQUFpQjs7WUFBakIsaUJBQWlCOzs7QUFHckI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjs7Ozs7SUFLbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsa0NBQWtDOztJQUVsQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7R0FDWixnQkFBZ0I7R0FDaEIsYUFBYTtHQUNiLFlBQVk7R0FDWixrQkFBa0I7QUFDckI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWixZQUFZO0FBQ1osaUNBQWlDO0FBQ2pDLDREQUE0RDtBQUM1RCxpQkFBaUI7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7OztJQUdoQixZQUFZO0lBQ1osK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QjtBQUNKO0FBQ0EsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixrQ0FBa0M7QUFDbEMsdUJBQXVCOztBQUV2QixtQkFBbUI7OztBQUduQjtBQUNBO0FBQ0EsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQixxQkFBcUI7O0FBRXJCO0FBQ0E7UUFDUSxtQkFBbUI7UUFDbkIsZUFBZTs7UUFFZixZQUFZO1FBQ1osWUFBWTtRQUNaLGtDQUFrQztRQUNsQyxxQkFBcUI7OztBQUc3QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CO0dBQ0Q7QUFDSDtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKO0FBRUE7O0lBRUksbUNBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsNERBQTREOzs7O0FBSWhFO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1COztJQUVuQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQ0FBaUM7O0FBRXJDO0FBQ0E7SUFDSSx5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1DQUFtQzs7SUFFbkMscUJBQXFCO0lBQ3JCLG1CQUFtQjs7O0lBR25CLHlDQUF5Qzs7QUFFN0M7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7OztBQUd0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGlDQUFpQztJQUNqQyw0REFBNEQ7SUFDNUQsaUJBQWlCO0lBQ2pCO0FBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsZ0JBQWdCOzs7UUFHaEIsWUFBWTtRQUNaLCtCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCLG1DQUEyQjtnQkFBM0IsMkJBQTJCO1FBQzNCLG9DQUE0QjtnQkFBNUIsNEJBQTRCO1FBQzVCLGlDQUF5QjtnQkFBekIseUJBQXlCO1FBQ3pCO0FBRUo7WUFDUSxtQkFBbUI7WUFDbkIsZUFBZTs7O1lBR2YsWUFBWTtZQUNaLGtDQUFrQztZQUNsQyxxQkFBcUI7OztJQUc3QiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzaGFkb3dze1xyXG4gICAgZnJvbXtib3gtc2hhZG93OiBibGFjayAwcHggMHB4IDEwcHggMnB4O31cclxuICAgIHRve2JveC1zaGFkb3c6IHRyYW5zcGFyZW50IDBweCAwcHggMTIwcHggMnB4O31cclxufVxyXG4jYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vUGljdHVyZXMvY29mZmVlLW5vdGVib29rLXdyaXRpbmctY29tcHV0ZXItMzQ2MDEuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuXHJcbiAgICBoZWlnaHQ6IDE1MCU7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yLjUlO1xyXG4gICAgbGVmdDogLTIuNSU7XHJcbiAgIFxyXG4gICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgXHJcbiAgICBcclxufVxyXG4uZm9ybXtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgXHJcbiAgIFxyXG4gICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBibGFjayAycHggMnB4IDM1cHggMnB4O1xyXG4gICAgXHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG4ubmFtZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICBwYWRkaW5nOiAxMHB4O1xyXG4gICBtYXgtbGluZXM6IDM7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXQtZm9ybSB7XHJcbmJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbnBhZGRpbmc6IDAuNDVyZW07XHJcbm1hcmdpbi1ib3R0b206IDByZW07XHJcbndpZHRoOiAzMDBweDtcclxuYm9yZGVyOiBub25lO1xyXG50cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbmZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmlucHV0LWZvcm06aG92ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHBhZGRpbmc6IDAuNDVyZW07XHJcbiAgIFxyXG4gICAgXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogc2hhZG93cztcclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xyXG4gICAgfVxyXG4uYXJ0e1xyXG53aWR0aDogMzAwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbmJveC1zaGFkb3c6IGJsYWNrIDBweCAwcHggMTVweCAycHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxucGFkZGluZzogMWVtIDEuMnJlbTtcclxuXHJcblxyXG59IFxyXG4uaW1nLWNvbnRhaW5lcntcclxud2lkdGg6IDQ1JTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5wYWRkaW5nLWxlZnQ6IDMuNXJlbSA7XHJcblxyXG59ICAgXHJcbi5pbnB1dC1mb3JtOmZvY3VzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcclxuICAgICAgIFxyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogYmxhY2sgMHB4IDBweCAxNXB4IDJweDtcclxuICAgICAgICBtYXJnaW46IC0wLjE1cmVtIGF1dG87XHJcbiAgICAgICAgXHJcbiAgICBcclxufVxyXG4udGl0bGUxe1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW1cclxuICAgfVxyXG4udGl0bGUye1xyXG4gICAgbWFyZ2luLXRvcDogLTEuMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW1cclxufVxyXG5cclxuLmJ1dC1sb2dpbntcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDAuNDVyZW0gMC45cmVtIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbiAgIFxyXG5cclxufVxyXG4uY3VzLXNlbGVjdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcblxyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgIFxyXG59XHJcbi5zZWxlY3Q6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgMHB4IDBweCAxNXB4IDJweDtcclxufVxyXG4uc2VsZWN0OmZvY3Vze1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDBweCAwcHggMTVweCAycHg7XHJcbn1cclxuLmJ1dC1sb2dpbjpob3ZlcntcclxuICAgIG1hcmdpbjogMC45NXJlbSAwLjRyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIFxyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBcclxuICAgIFxyXG4gICAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDJweCAycHggMzVweCAycHg7XHJcblxyXG59XHJcbi5idXR0b24tbG9ne1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY29udGFpbmVye1xyXG4gICAgd2lkdGggOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtIDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLnRleHQtZm9ybSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIG1heC13aWR0aDogMjk2cHg7XHJcbiAgICBtaW4td2lkdGg6IDI5NnB4O1xyXG4gICAgcGFkZGluZzogMC40NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDByZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAudGV4dC1mb3JtOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNDVyZW07XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNoYWRvd3M7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgLnRleHQtZm9ybTpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogYmxhY2sgMHB4IDBweCAxNXB4IDJweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAtMC4xNXJlbSBhdXRvO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../names */ "./src/names.ts");



let StudentComponent = class StudentComponent {
    constructor() {
        this.Names = _names__WEBPACK_IMPORTED_MODULE_2__["names"];
    }
    ngOnInit() {
    }
};
StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/student/student.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")).default]
    })
], StudentComponent);



/***/ }),

/***/ "./src/app/teacher/teacher.component.css":
/*!***********************************************!*\
  !*** ./src/app/teacher/teacher.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-container{\r\n    width: 800px;\r\n    height: 500px;\r\n    margin: auto;\r\n    background-color: transparent;\r\n    border-radius: 3px;\r\n    box-shadow: 0px 0px 8px 1px;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n#background {\r\n    background-image: url('coffee-notebook-writing-computer-34601.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    width: 150%;\r\n   \r\n\r\n    height: 150%;\r\n    overflow-x: hidden;\r\n    position: absolute;\r\n    top: -2.5%;\r\n    left: -2.5%;\r\n   \r\n    z-index: -1;\r\n\r\n    -webkit-filter: blur(5px);\r\n\r\n            filter: blur(5px);\r\n  \r\n    \r\n}\r\n.title1{ \r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: bold;\r\n    margin-left: 7rem ;\r\n    background-color: rgb(255, 255, 255);\r\n    margin-right: 6.5rem;\r\n    box-shadow: 0px 0px px 2px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    padding-top: 3px ;\r\n    padding-bottom: 4px ;\r\n    box-shadow: 0px 0px 6px 1px;\r\n    margin-top: 9px;\r\n}\r\n.title2{\r\n    padding-top: 10px;\r\n    \r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: bold;\r\n    \r\n    margin: auto;\r\n    background-color: white;\r\n   \r\n    margin-top: 25px;\r\n    margin-bottom: 1rem ;\r\n    padding-top: 3px ;\r\n    padding-bottom: 3px ;\r\n    text-align: center;\r\n    padding-left: 2.5em;\r\n    padding-right: 2.5em;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 15px 1px;\r\n\r\n}\r\n.students{\r\n    width: 300px;\r\n    height: 350px ;\r\n    background-color: white;\r\n    margin: auto;\r\n    list-style-type: none;\r\n    overflow-y : scroll; \r\n    overflow-x: hidden;   \r\n    border-radius: 3px;\r\n    \r\n    margin-top: 9px;\r\n    \r\n    \r\n    \r\n}\r\n.fullname{\r\n    width: 200px;\r\n}\r\n.students li {\r\n    \r\n    cursor: pointer;\r\n    position: relative;\r\n    margin-left: -2.2rem;\r\n    margin-right: .3rem ;\r\n    background-color: #EEE;\r\n    font-size: 63%;\r\n    margin-top: 0rem;\r\n    margin-bottom: 0rem;\r\n    \r\n    \r\n    border-radius: 2px;\r\n    padding-left: 2rem;\r\n    padding-top: .45rem;\r\n    padding-bottom: .45rem;\r\n   \r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    \r\n    transition: all 250ms ease-in-out;\r\n\r\n  }\r\n.students li:hover {\r\n    \r\n    background-color: rgb(88, 216, 248);\r\n    margin-left: -2.2rem;\r\n    margin-right: .3rem ;\r\n    padding-top: .45rem;\r\n    padding-bottom: .45rem;\r\n    \r\n   \r\n    \r\n  \r\n    \r\n  }\r\n.mail{\r\n      background-color: rgb(255, 255, 255);\r\n      margin-top: 25px;\r\n      margin-left: 2rem;\r\n      box-shadow: 0px 0px 15px 1px;\r\n      margin-bottom: 4.3rem;\r\n      border-radius: 10px ;\r\n      \r\n  }\r\n.students li.selected{\r\n    background-color: #CFD8DC;\r\n    color: white;\r\n    padding-top: .55rem;\r\n    padding-bottom: .55rem;\r\n    margin-left: -2.3rem;\r\n    margin-right: .2em;\r\n  }\r\n.students li.selected:hover {\r\n    background-color: #BBD8DC;\r\n    color: white;\r\n  }\r\n.justification-view{\r\n    width: 330px;\r\n    margin-bottom: 1rem;\r\n    margin-top: 0rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    box-shadow: 0px 0px 15px 1px;\r\n    background-color: white;\r\n    border-radius: 2px;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n\r\n\r\n    \r\n  }\r\n.details-view{\r\n      display: flex;\r\n      flex-direction: row;\r\n\r\n  }\r\n.fullname2{\r\n      padding-left: 1rem;\r\n      padding-top: 1rem;\r\n      width: 480px;\r\n      font-size: 80%;\r\n  }\r\n.span-view{\r\n      padding-top: 1rem;\r\n      padding-left: 2rem;\r\n      padding-bottom: 1rem;\r\n      \r\n  }\r\n.justification-text{\r\n     \r\n      max-width: 280px;\r\n      min-width: 280px;\r\n      max-height: 230px;\r\n      min-height: 230px;\r\n      margin-left:25px;\r\n      margin-bottom: 2rem;\r\n      border-radius: 5px;\r\n      border: 1.5px solid rgb(0, 0, 0);\r\n  }\r\n.but-login{\r\n   \r\n    background-color:rgb(255, 255, 255);\r\n    padding: 0.35rem 0.6rem ;\r\n  \r\n    border-radius: 1rem;\r\n    border: none;\r\n    transition: all 250ms ease-in-out;\r\n    \r\n    margin-left: .25rem;\r\n    margin-right: .25rem;\r\n    margin-top: .25rem;\r\n    margin-bottom: .8rem;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    text-align: center;\r\n    font-size: 70%;\r\n    \r\n   \r\n\r\n}\r\n.but-login:hover{\r\n    margin-left: .15rem;\r\n    margin-right: .15rem;\r\n    margin-top: .2rem;\r\n    margin-bottom: .7rem;\r\n    background-color:rgb(255, 255, 255);\r\n    \r\n    padding: 0.4rem .7rem ;\r\n    border-radius: 1rem;\r\n  \r\n    \r\n    box-shadow: rgb(0, 0, 0) 2px 2px 35px 2px;\r\n\r\n}\r\n.details{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-left: 3rem;\r\n}\r\n\r\n\r\n  \r\n\r\n      \r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci90ZWFjaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw0REFBNEQ7SUFDNUQsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUVBQW1GO0lBQ25GLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsV0FBVzs7O0lBR1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7O0lBRVgsV0FBVzs7SUFFWCx5QkFBaUI7O1lBQWpCLGlCQUFpQjs7O0FBR3JCO0FBQ0E7SUFDSSx3SUFBd0k7SUFDeEksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjs7SUFFakIsd0lBQXdJO0lBQ3hJLGlCQUFpQjs7SUFFakIsWUFBWTtJQUNaLHVCQUF1Qjs7SUFFdkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiw0QkFBNEI7O0FBRWhDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCOztJQUVsQixlQUFlOzs7O0FBSW5CO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7O0lBR25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjs7SUFFdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7O0lBRW5CLGlDQUFpQzs7RUFFbkM7QUFDQTs7SUFFRSxtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsc0JBQXNCOzs7Ozs7RUFNeEI7QUFDQTtNQUNJLG9DQUFvQztNQUNwQyxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLDRCQUE0QjtNQUM1QixxQkFBcUI7TUFDckIsb0JBQW9COztFQUV4QjtBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjs7Ozs7RUFLeEI7QUFDQTtNQUNJLGFBQWE7TUFDYixtQkFBbUI7O0VBRXZCO0FBQ0E7TUFDSSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixjQUFjO0VBQ2xCO0FBQ0E7TUFDSSxpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLG9CQUFvQjs7RUFFeEI7QUFFQTs7TUFFSSxnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsZ0NBQWdDO0VBQ3BDO0FBQ0E7O0lBRUUsbUNBQW1DO0lBQ25DLHdCQUF3Qjs7SUFFeEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQ0FBaUM7O0lBRWpDLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiw0REFBNEQ7SUFDNUQsa0JBQWtCO0lBQ2xCLGNBQWM7Ozs7QUFJbEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQ0FBbUM7O0lBRW5DLHNCQUFzQjtJQUN0QixtQkFBbUI7OztJQUduQix5Q0FBeUM7O0FBRTdDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC90ZWFjaGVyL3RlYWNoZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDFweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbiNiYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9QaWN0dXJlcy9jb2ZmZWUtbm90ZWJvb2std3JpdGluZy1jb21wdXRlci0zNDYwMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIHdpZHRoOiAxNTAlO1xyXG4gICBcclxuXHJcbiAgICBoZWlnaHQ6IDE1MCU7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yLjUlO1xyXG4gICAgbGVmdDogLTIuNSU7XHJcbiAgIFxyXG4gICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgXHJcbiAgICBcclxufVxyXG4udGl0bGUxeyBcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cmVtIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIG1hcmdpbi1yaWdodDogNi41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCBweCAycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4IDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHggO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG59XHJcbi50aXRsZTJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgXHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSA7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4IDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHggO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDFweDtcclxuXHJcbn1cclxuLnN0dWRlbnRze1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweCA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG92ZXJmbG93LXkgOiBzY3JvbGw7IFxyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmZ1bGxuYW1le1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5zdHVkZW50cyBsaSB7XHJcbiAgICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMi4ycmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuM3JlbSA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gICAgZm9udC1zaXplOiA2MyU7XHJcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogLjQ1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC40NXJlbTtcclxuICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcclxuXHJcbiAgfVxyXG4gIC5zdHVkZW50cyBsaTpob3ZlciB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgMjE2LCAyNDgpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yLjJyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC4zcmVtIDtcclxuICAgIHBhZGRpbmctdG9wOiAuNDVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjQ1cmVtO1xyXG4gICAgXHJcbiAgIFxyXG4gICAgXHJcbiAgXHJcbiAgICBcclxuICB9XHJcbiAgLm1haWx7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAxcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQuM3JlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCA7XHJcbiAgICAgIFxyXG4gIH1cclxuICAuc3R1ZGVudHMgbGkuc2VsZWN0ZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IC41NXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNTVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTIuM3JlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLjJlbTtcclxuICB9XHJcbiAgLnN0dWRlbnRzIGxpLnNlbGVjdGVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5qdXN0aWZpY2F0aW9uLXZpZXd7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG5cclxuXHJcbiAgICBcclxuICB9XHJcbiAgLmRldGFpbHMtdmlld3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgfVxyXG4gIC5mdWxsbmFtZTJ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgIHdpZHRoOiA0ODBweDtcclxuICAgICAgZm9udC1zaXplOiA4MCU7XHJcbiAgfVxyXG4gIC5zcGFuLXZpZXd7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICBcclxuICB9XHJcbiAgXHJcbiAgLmp1c3RpZmljYXRpb24tdGV4dHtcclxuICAgICBcclxuICAgICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgICAgbWluLXdpZHRoOiAyODBweDtcclxuICAgICAgbWF4LWhlaWdodDogMjMwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDIzMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDoyNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlcjogMS41cHggc29saWQgcmdiKDAsIDAsIDApO1xyXG4gIH1cclxuICAuYnV0LWxvZ2lue1xyXG4gICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgcGFkZGluZzogMC4zNXJlbSAwLjZyZW0gO1xyXG4gIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLjI1cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjhyZW07XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDcwJTtcclxuICAgIFxyXG4gICBcclxuXHJcbn1cclxuLmJ1dC1sb2dpbjpob3ZlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAuMTVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC4xNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IC4ycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjdyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIFxyXG4gICAgcGFkZGluZzogMC40cmVtIC43cmVtIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgXHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSAycHggMnB4IDM1cHggMnB4O1xyXG5cclxufVxyXG4uZGV0YWlsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xyXG59XHJcblxyXG5cclxuICBcclxuXHJcbiAgICAgIFxyXG4gIl19 */");

/***/ }),

/***/ "./src/app/teacher/teacher.component.ts":
/*!**********************************************!*\
  !*** ./src/app/teacher/teacher.component.ts ***!
  \**********************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _const_students__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../const-students */ "./src/const-students.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TeacherComponent = class TeacherComponent {
    constructor() {
        this.STUDENTS = _const_students__WEBPACK_IMPORTED_MODULE_1__["Students"];
    }
    ngOnInit() {
    }
    onSelect(stud) {
        this.selectedstudent = stud;
        return true;
    }
};
TeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-teacher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/teacher.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./teacher.component.css */ "./src/app/teacher/teacher.component.css")).default]
    })
], TeacherComponent);



/***/ }),

/***/ "./src/const-students.ts":
/*!*******************************!*\
  !*** ./src/const-students.ts ***!
  \*******************************/
/*! exports provided: Students */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Students", function() { return Students; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const Students = [
    { username: 'lokmane-std', Email: 'lokmane.com99@gmail.com', name: 'lokmane', surname: 'sadani', group: 5, password: '123', justification: 'i was sick' },
    { username: 'lokmane-std', Email: 'lokmane.com99@gmail.com', name: 'lokmane', surname: 'sadani', group: 5, password: '123', justification: 'i was sick' },
    { username: 'lokmane-std', Email: 'lokmane.com99@gmail.com', name: 'lokmane', surname: 'sadani', group: 5, password: '123', justification: 'i was sick' },
    { username: 'lokmane-std', Email: 'lokmane.com99@gmail.com', name: 'lokmane', surname: 'sadani', group: 5, password: '123', justification: 'i was sick' },
    { username: 'lokmane-std', Email: 'lokmane.com99@gmail.com', name: 'lokmane', surname: 'sadani', group: 5, password: '123', justification: 'i was sick' },
    { username: 'lokmane-std', Email: 'lokmane.com99@gmail.com', name: 'lokmane', surname: 'sadani', group: 5, password: '123', justification: 'i was sick' },
    { username: 'lokmane-std', Email: 'lokmane.com99@gmail.com', name: 'lokmane', surname: 'sadani', group: 5, password: '123', justification: 'i was sick' },
    { username: 'lokmane-std', Email: 'lokmane.com99@gmail.com', name: 'lokmane', surname: 'sadani', group: 5, password: '123', justification: 'i was sick' },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/names.ts":
/*!**********************!*\
  !*** ./src/names.ts ***!
  \**********************/
/*! exports provided: names */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const names = [
    'maths',
    'maths',
    'maths',
    'maths',
    'maths',
    'maths',
    'maths'
];


/***/ }),

/***/ "./src/teacher.ts":
/*!************************!*\
  !*** ./src/teacher.ts ***!
  \************************/
/*! exports provided: teacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teacher", function() { return teacher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/user.ts");


class teacher extends _user__WEBPACK_IMPORTED_MODULE_1__["user"] {
}


/***/ }),

/***/ "./src/user.ts":
/*!*********************!*\
  !*** ./src/user.ts ***!
  \*********************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class user {
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lokmane/app/frontend/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);