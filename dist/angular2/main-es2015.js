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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n  <header>\n    <div class=\"row\">\n      <div class=\"logo\">\n        <img src=\"/assets/logo.png\">\n      </div>\n      <ul class=\"main-nav\">\n      <li class=\"active\"><a href=\"\">HOME</a></li>\n      <li><a href=\"\">SERVICES</a></li>\n      <li><a href=\"\">ABOUT</a></li>\n      <li><a href=\"\">CONTACT</a></li>\n      <li><a href=\"\">NEWS</a></li>\n      <li><a href=\"\">FAQ</a></li>\n      </ul>\n    </div>\n    <div class=\"heroine\">\n      <h1> Are you ready?</h1>\n      <div class=\"button\" style=\"text-align: center;\">\n        <a href=\"\" class=\"btn btn-one\">Watch Video</a>\n        <a href=\"\" class=\"btn btn-two\">Explore More</a>\n      </div>\n    </div>\n  </header>\n\n<router-outlet></router-outlet>\n\n"

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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\nheader\n{\n background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(picture.jpg);\n height: 100vh;\n background-size: cover;\n background-position: center;\n}\n.main-nav\n{\n    float: right;\n    list-style: none;\n    margin-top: 30px;\n    margin-left: auto;\n}\n.main-nav ul\n{\n   display: inline;\n}\n.main-nav li\n{\n display: inline-block;\n}\n.main-nav li a\n{\n    color:white;\n    text-decoration: none;\n    padding: 5px 20px;\n    font-family:\"roboto\",sans-serif ;\n    font-size: 15px;\n}\n.main-nav li.active a\n{\n    border: 1px solid white;\n}\n.main-nav li a:hover\n{\n    border: 1px solid white;\n}\n.logo img\n{\n    width: 100px;\n    height: auto;\n    float: left;\n}\n.row\n{\n   max-width: 1200px;\n   margin: auto;\n}\n.heroine\n{\n    position: absolute;\n    width: 1200px;\n    margin-left: 0;\n    margin-top: 0;\n}\nh1\n{\n  color: white;\n  text-transform: uppercase;\n  font-size: 70px;\n  text-align: center;\n  margin-top: 275px;\n}\nbutton\n{\n    margin-top: 13px;\n    margin-left: 440px;\n    text-align: center;\n}\n.btn\n{\n    border: 1px solid white;\n    padding: 10px 30px;\n    color: white;\n    text-decoration: none;\n    margin-right: 10px;\n    font-size: 13px;\n    text-transform: uppercase;\n}\n.btn-one\n{\n    background-color: darkorange;\n    font-family: \"roboto\",sans-serif;\n}\n.btn-two\n{\n    font-family: \"roboto\",sans-serif;\n}\n.btn-two:hover\n{\n    background-color: darkorange;\n    transition: all 0.5s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Q0FFQyxtRkFBbUY7Q0FDbkYsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QiwyQkFBMkI7QUFDNUI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTs7R0FFRyxlQUFlO0FBQ2xCO0FBQ0E7O0NBRUMscUJBQXFCO0FBQ3RCO0FBQ0E7O0lBRUksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSx1QkFBdUI7QUFDM0I7QUFDQTs7SUFFSSx1QkFBdUI7QUFDM0I7QUFDQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBOztHQUVHLGlCQUFpQjtHQUNqQixZQUFZO0FBQ2Y7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7O0lBRUksNEJBQTRCO0lBQzVCLGdDQUFnQztBQUNwQztBQUNBOztJQUVJLGdDQUFnQztBQUNwQztBQUNBOztJQUVJLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5oZWFkZXJcbntcbiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjUpLHJnYmEoMCwwLDAsMC41KSksdXJsKHBpY3R1cmUuanBnKTtcbiBoZWlnaHQ6IDEwMHZoO1xuIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLm1haW4tbmF2XG57XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5tYWluLW5hdiB1bFxue1xuICAgZGlzcGxheTogaW5saW5lO1xufVxuLm1haW4tbmF2IGxpXG57XG4gZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm1haW4tbmF2IGxpIGFcbntcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6XCJyb2JvdG9cIixzYW5zLXNlcmlmIDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbi1uYXYgbGkuYWN0aXZlIGFcbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cbi5tYWluLW5hdiBsaSBhOmhvdmVyXG57XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4ubG9nbyBpbWdcbntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLnJvd1xue1xuICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICBtYXJnaW46IGF1dG87XG59XG4uaGVyb2luZVxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5oMVxue1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNzVweDtcbn1cbmJ1dHRvblxue1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG5cbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnRuLW9uZVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvcmFuZ2U7XG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCIsc2Fucy1zZXJpZjtcbn1cbi5idG4tdHdvXG57XG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvXCIsc2Fucy1zZXJpZjtcbn1cbi5idG4tdHdvOmhvdmVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yYW5nZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'professional website';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ec2-user/Angular2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map