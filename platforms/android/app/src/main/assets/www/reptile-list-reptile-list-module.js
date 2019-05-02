(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reptile-list-reptile-list-module"],{

/***/ "./src/app/reptile-list/reptile-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/reptile-list/reptile-list.module.ts ***!
  \*****************************************************/
/*! exports provided: ReptileListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReptileListPageModule", function() { return ReptileListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reptile_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reptile-list.page */ "./src/app/reptile-list/reptile-list.page.ts");







var routes = [
    {
        path: '',
        component: _reptile_list_page__WEBPACK_IMPORTED_MODULE_6__["ReptileListPage"]
    }
];
var ReptileListPageModule = /** @class */ (function () {
    function ReptileListPageModule() {
    }
    ReptileListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reptile_list_page__WEBPACK_IMPORTED_MODULE_6__["ReptileListPage"]]
        })
    ], ReptileListPageModule);
    return ReptileListPageModule;
}());



/***/ }),

/***/ "./src/app/reptile-list/reptile-list.page.html":
/*!*****************************************************!*\
  !*** ./src/app/reptile-list/reptile-list.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n    <ion-title>Reptiles</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color='primary'>\n    <ion-searchbar [(ngModel)]=\"searchQuery\" (ionInput)=\"getReptiles($event)\" (ionClear)=\"resetList($event)\">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-virtual-scroll [items]=\"reptiles\" [headerFn]=\"customHeaderFn\">\n      <ion-item-divider *virtualHeader='let header'>\n        {{header}}\n      </ion-item-divider>\n      <ion-item *virtualItem=\"let snake\" (click)=\"goReptileDetails(snake)\" detail-push>\n        <ion-thumbnail slot=\"start\" *ngIf='snake.Picture != null'>\n          <ion-img src=\"snake.Picture\"></ion-img>\n        </ion-thumbnail>\n        <ion-thumbnail slot=\"start\" *ngIf='snake.Picture == null'>\n          <ion-img src=\"../assets/img/SnakeHausLogo.png\"></ion-img>\n        </ion-thumbnail>\n        <ul class=\"clear\">\n          <li class=\"clear\"><h2>{{snake.SnakeName}}</h2></li>\n          <li class=\"clear\"><p>{{snake.Species}}</p></li>\n        </ul>\n      </ion-item>\n      </ion-virtual-scroll>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/reptile-list/reptile-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/reptile-list/reptile-list.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-reptile-list ion-item-divider {\n  background-color: #82b786;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxhbmV5am9uZXMvRG9jdW1lbnRzLzQ0NS80NDVSZXB0aWxlUHJvamVjdC9TbmFrZUhhdXMvc3JjL2FwcC9yZXB0aWxlLWxpc3QvcmVwdGlsZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlcHRpbGUtbGlzdC9yZXB0aWxlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1yZXB0aWxlLWxpc3Qge1xuICAgIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJiNzg2O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/reptile-list/reptile-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/reptile-list/reptile-list.page.ts ***!
  \***************************************************/
/*! exports provided: ReptileListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReptileListPage", function() { return ReptileListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_reptile_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/reptile-data */ "./src/app/providers/reptile-data.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ReptileListPage = /** @class */ (function () {
    function ReptileListPage(navCtrl, reptileData, router) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.reptileData = reptileData;
        this.router = router;
        this.reptiles = [];
        this.searchQuery = '';
        reptileData.getReptiles().then(function (theResult) {
            _this.reptiles = theResult;
        });
    }
    ReptileListPage.prototype.goReptileDetails = function (theReptileData) {
        var url = './tabs/details/' + theReptileData.SnakeName;
        this.router.navigate([url]);
    };
    ReptileListPage.prototype.getReptiles = function (event) {
        var _this = this;
        this.reptileData.getReptiles().then(function (theResult) {
            _this.reptiles = theResult;
        });
        var queryString = event.target.value;
        if (queryString != undefined) {
            if (queryString.trim() == '') {
                return;
            }
            this.reptileData.getFilteredReptiles(queryString).then(function (theResult) {
                _this.reptiles = theResult;
            });
        }
    };
    ReptileListPage.prototype.resetList = function (event) {
        var _this = this;
        this.reptileData.getReptiles().then(function (theResult) {
            _this.reptiles = theResult;
        });
    };
    ReptileListPage.prototype.customHeaderFn = function (record, recordIndex, records) {
        if (recordIndex > 0) {
            if (record.SnakeName[0] !== records[recordIndex - 1].SnakeName[0]) {
                return record.SnakeName[0];
            }
            else {
                return null;
            }
        }
        else {
            return record.SnakeName[0];
        }
    };
    ReptileListPage.prototype.ngOnInit = function () {
    };
    ReptileListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reptile-list',
            template: __webpack_require__(/*! ./reptile-list.page.html */ "./src/app/reptile-list/reptile-list.page.html"),
            styles: [__webpack_require__(/*! ./reptile-list.page.scss */ "./src/app/reptile-list/reptile-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_reptile_data__WEBPACK_IMPORTED_MODULE_2__["ReptileData"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ReptileListPage);
    return ReptileListPage;
}());



/***/ })

}]);
//# sourceMappingURL=reptile-list-reptile-list-module.js.map