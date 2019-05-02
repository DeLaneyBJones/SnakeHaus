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

module.exports = "<ion-header *ngIf=\"verifyFailed\">\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"tabs/reptiles\"></ion-back-button>\n    </ion-buttons>   \n    <ion-title>Admin Authentication</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-header *ngIf=\"!verifyFailed\">\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"tabs/reptiles\"></ion-back-button>\n      </ion-buttons>   \n      <ion-title>Admin Authentication</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n    <img src = \"../../assets/img/SnakeHausLogo.png\">\n    <ion-card>\n      <ion-card-header>\n        Login\n      </ion-card-header>\n      <ion-grid *ngIf=\"verifyFailed\">\n        <ion-col id=\"verifyFailed\">\n          <ion-row>\n              <h2>Login Failed</h2>\n          </ion-row>\n          <ion-row>\n              <p>Username or Password is incorrect</p>\n          </ion-row>\n        </ion-col>\n      </ion-grid>\n      <ion-card-content>\n        <form (ngSubmit)=\"authenticate()\">\n          <h2>Basic Information</h2>\n          <ion-item>\n            <ion-label>Username: </ion-label>\n            <ion-input type=\"text\" name=\"name\" id=\"name\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Password: </ion-label>\n            <ion-input type=\"password\" name=\"pass\" id=\"pass\"></ion-input>\n          </ion-item>\n          <ion-button type=\"submit\"><ion-label>Submit</ion-label></ion-button>\n        </form>\n      </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/authentication/authentication.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".verifyFailed, #verifyFailed {\n  color: #f04141 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxhbmV5am9uZXMvRG9jdW1lbnRzLzQ0NS80NDVSZXB0aWxlUHJvamVjdC9TbmFrZUhhdXMvc3JjL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJpZnlGYWlsZWQsICN2ZXJpZnlGYWlsZWQge1xuICAgIGNvbG9yOiAjZjA0MTQxICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

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
/* harmony import */ var _providers_login_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/login-data */ "./src/app/providers/login-data.ts");





var AuthenticationPage = /** @class */ (function () {
    function AuthenticationPage(router, navCtrl, verify) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.verify = verify;
        this.verifyFailed = false;
    }
    AuthenticationPage.prototype.ngOnInit = function () {
    };
    AuthenticationPage.prototype.authenticate = function () {
        var form = document.querySelector('form');
        var data = new FormData(form);
        var username = data.get('name');
        var password = data.get('pass');
        if (this.verify.login(username, password)) {
            this.verifyFailed = false;
            var url = './tabs/settings2/';
            this.router.navigate([url]);
        }
        else {
            this.verifyFailed = true;
        }
    };
    AuthenticationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.page.html */ "./src/app/authentication/authentication.page.html"),
            styles: [__webpack_require__(/*! ./authentication.page.scss */ "./src/app/authentication/authentication.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_login_data__WEBPACK_IMPORTED_MODULE_4__["Verification"]])
    ], AuthenticationPage);
    return AuthenticationPage;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map