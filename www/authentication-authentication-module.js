(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPageModule", function() { return AuthenticationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.page */ "./src/app/authentication/authentication.page.ts");







var routes = [
    {
        path: '',
        component: _authentication_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationPage"]
    }
];
var AuthenticationPageModule = /** @class */ (function () {
    function AuthenticationPageModule() {
    }
    AuthenticationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationPage"]]
        })
    ], AuthenticationPageModule);
    return AuthenticationPageModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.page.html":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"tabs/reptiles\"></ion-back-button>\n    </ion-buttons>   \n    <ion-title>Admin Authentication</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <p>This section needs to run through a username and password verification</p>\n    <ion-card>\n      <ion-card-header>\n        Login\n      </ion-card-header>\n      <ion-card-content>\n        <form (ngSubmit)=\"authenticate()\">\n          <h2>Basic Information</h2>\n          <ion-item>\n            <ion-label>Username: </ion-label>\n            <ion-input type=\"text\" name=\"name\" id=\"name\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Password: </ion-label>\n            <ion-input type=\"text\" name=\"pass\" id=\"pass\"></ion-input>\n          </ion-item>\n          <ion-button type=\"submit\"><ion-label>Submit</ion-label></ion-button>\n        </form>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/authentication/authentication.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/authentication/authentication.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/authentication/authentication.page.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPage", function() { return AuthenticationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var AuthenticationPage = /** @class */ (function () {
    function AuthenticationPage(router, navCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
    }
    AuthenticationPage.prototype.ngOnInit = function () {
    };
    AuthenticationPage.prototype.authenticate = function () {
        //This is where I need to verify the data...
        var username = document.getElementById("name").nodeValue;
        console.log(username);
        //I need to add the actual verification here before navigation
        var url = './tabs/settings2/';
        this.router.navigate([url]);
    };
    AuthenticationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.page.html */ "./src/app/authentication/authentication.page.html"),
            styles: [__webpack_require__(/*! ./authentication.page.scss */ "./src/app/authentication/authentication.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], AuthenticationPage);
    return AuthenticationPage;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map