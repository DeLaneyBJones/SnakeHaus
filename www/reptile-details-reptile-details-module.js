(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reptile-details-reptile-details-module"],{

/***/ "./src/app/reptile-details/reptile-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/reptile-details/reptile-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ReptileDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReptileDetailsPageModule", function() { return ReptileDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reptile_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reptile-details.page */ "./src/app/reptile-details/reptile-details.page.ts");







var routes = [
    {
        path: '',
        component: _reptile_details_page__WEBPACK_IMPORTED_MODULE_6__["ReptileDetailsPage"]
    }
];
var ReptileDetailsPageModule = /** @class */ (function () {
    function ReptileDetailsPageModule() {
    }
    ReptileDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reptile_details_page__WEBPACK_IMPORTED_MODULE_6__["ReptileDetailsPage"]]
        })
    ], ReptileDetailsPageModule);
    return ReptileDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/reptile-details/reptile-details.page.html":
/*!***********************************************************!*\
  !*** ./src/app/reptile-details/reptile-details.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"tabs/reptiles\"></ion-back-button>\n    </ion-buttons>    \n    <ion-title>{{reptileInfo.SnakeName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row *ngIf=\"reptileInfo.Picture != null\"><img src='{{reptileInfo.Picture}}'></ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row *ngIf=\"reptileInfo.Picture == null\"><img src='../../assets/img/SnakeHausLogo.png'></ion-row>\n  </ion-grid>\n  \n  <h1 padding >{{reptileInfo.SnakeName}}</h1>\n  <ion-card>\n    <ion-card-header>\n      {{reptileInfo.SnakeName}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item (click)=\"this.basicInfo = !this.basicInfo\">\n        <h2>Basic Information</h2>\n      </ion-item>\n      <ion-item *ngIf=\"basicInfo\" id=\"InfoSort\">\n        <ion-grid>\n          <ion-row *ngIf=\"reptileInfo.SnakeName != null\"><h2>Name:</h2><p>{{reptileInfo.SnakeName}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.Species != null\"><h2>Species:</h2><p>{{reptileInfo.Species}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.Morph != null\"><h2>Morph: </h2> <p>{{reptileInfo.Morph}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.BirthDay != null\"><h2>DoB: </h2> <p>{{reptileInfo.BirthDay}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.Handling != null\"><h2>Handling: </h2> <p>{{reptileInfo.Handling}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.Aquired != null\"><h2>Aquired: </h2> <p>{{reptileInfo.Aquired}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.ScaleVentral != null\"><h2>Scale Ventral: </h2> <p>{{reptileInfo.ScaleVentral}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.ScaleMid != null\"><h2>ScaleMid: </h2> <p>{{reptileInfo.ScaleMid}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.ScaleSubCauudal != null\"><h2>ScaleSubCauudal: </h2> <p>{{reptileInfo.ScaleSubCauudal}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.Saddles != null\"><h2>Saddles: </h2> <p>{{reptileInfo.Saddles}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.ScaleCount5 != null\"><h2>ScaleCount5: </h2> <p>{{reptileInfo.ScaleCount5}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.Location != null\"><h2>Location: </h2><p>{{reptileInfo.Location}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.Active != null\"><h2>Active: </h2><p>{{reptileInfo.Active}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.Adopter != null\"><h2>Active: </h2><p>{{reptileInfo.Adopter}}</p></ion-row>\n          <ion-row *ngIf=\"reptileInfo.AdoptionDate != null\"><h2>Adoption Date: </h2>{{reptileInfo.AdoptionDate}}</ion-row>\n          \n          <ion-row *ngIf=\"(reptileInfo.SnakeName == null) && (reptileInfo.Species == null) && (reptileInfo.Morph == null) && (reptileInfo.BirthDay == null) && (reptileInfo.Aquired == null) && (reptileInfo.ScaleVentral == null) && (reptileInfo.ScaleSubCauudal == null) && (reptileInfo.Saddles == null) && (reptileInfo.ScaleCount5 == null) && (reptileInfo.Location == null) && (reptileInfo.Active == null) && (reptileInfo.Adopter == null) && (reptileInfo.AdoptionDate == null)\">\n            No information is currently avaliable\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item (click)=\"this.feed = !this.feed\">\n        <h2>Feed</h2>\n      </ion-item>\n      <ion-item *ngIf=\"feed\" id=\"InfoSort\">\n        <ion-grid>\n          <ion-row *ngIf=\"feedInfo.Food != null\"><h2>Food:</h2><p>{{feedInfo.Food}}</p></ion-row>\n          <ion-row *ngIf=\"feedInfo.Frequency != null\"><h2>Frequency:</h2><p>{{feedInfo.Frequency}}</p></ion-row>\n          <ion-row *ngIf=\"(feedInfo.Food == null) && (feedInfo.Frequency == null)\">No information is currently avaliable</ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item (click)=\"this.observations = !this.observations\">\n        <h2>Observations</h2>\n      </ion-item>\n      <ion-virtual-scroll *ngIf=\"observations\" id=\"InfoSort\" [items]=\"observationInfo\">\n        <ion-grid *virtualItem=\"let item\">\n          <ion-row *ngIf=\"(item.Observation != null) && (item.O_Date != null)\" id=\"InfoSort\">\n            <ion-row><p>{{item.O_Date}}   {{item.Observation}}</p></ion-row>\n          </ion-row>\n        </ion-grid>\n      </ion-virtual-scroll>\n      <ion-row *ngIf=\"(observationInfo.length == 0) && observations\">No information is currently avaliable</ion-row>\n\n      <ion-item (click)=\"this.feedSchedInfo = !this.feedSchedInfo\">\n        <h2>Feed Schedule</h2>\n      </ion-item>\n      <ion-item *ngIf=\"feedSchedInfo\" id=\"InfoSort\">\n        <ion-grid>\n          <ion-row *ngIf=\"feedSchedule.F_Date != null\">Date: {{feedSchedule.F_Date}}</ion-row>\n          <ion-row *ngIf=\"feedSchedule.Food != null\">Food: {{feedSchedule.Food}}</ion-row>\n          <ion-row *ngIf=\"feedSchedule.Comment != null\">Comment: {{feedSchedule.Comment}}</ion-row>\n          <ion-row *ngIf=\"(feedSchedule.F_Date == null) && (feedSchedule.Food == null) && (feedSchedule.Comment == null)\">No information is currently avaliable</ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <ion-item (click)=\"this.medication = !this.medication\">\n        <h2>Medication</h2>\n      </ion-item>\n      <ion-item *ngIf=\"medication\">\n        <ion-grid>\n          <ion-row *ngIf=\"medsInfo.RxDate != null\">Date: {{medsInfo.RxDate}}</ion-row>\n          <ion-row *ngIf=\"medsInfo.Rx != null\">Rx: {{medsInfo.Rx}}</ion-row>\n          <ion-row *ngIf=\"medsInfo.NextRx != null\">NextRx: {{medsInfo.NextRx}}</ion-row>\n          <ion-row *ngIf=\"(medsInfo.RxDate == null) && (medsInfo.Rx == null) && (medsInfo.NextRx == null)\">No information is currently avaliable</ion-row>\n        </ion-grid>\n      </ion-item>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/reptile-details/reptile-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/reptile-details/reptile-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none; }\n\n#InfoSort h2 {\n  padding-right: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWxhbmV5am9uZXMvRG9jdW1lbnRzLzQ0NS80NDVSZXB0aWxlUHJvamVjdC9TbmFrZUhhdXMvc3JjL2FwcC9yZXB0aWxlLWRldGFpbHMvcmVwdGlsZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUdRLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVwdGlsZS1kZXRhaWxzL3JlcHRpbGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4jSW5mb1NvcnRcbntcbiAgICBoMiB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/reptile-details/reptile-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/reptile-details/reptile-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ReptileDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReptileDetailsPage", function() { return ReptileDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_feed_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/feed-data */ "./src/app/providers/feed-data.ts");
/* harmony import */ var _providers_feed_schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/feed-schedule */ "./src/app/providers/feed-schedule.ts");
/* harmony import */ var _providers_reptile_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/reptile-data */ "./src/app/providers/reptile-data.ts");
/* harmony import */ var _providers_meds_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/meds-data */ "./src/app/providers/meds-data.ts");
/* harmony import */ var _providers_observations_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/observations-data */ "./src/app/providers/observations-data.ts");








var ReptileDetailsPage = /** @class */ (function () {
    function ReptileDetailsPage(reptileData, feedData, feedSched, medsData, obsData, route) {
        this.reptileData = reptileData;
        this.feedData = feedData;
        this.feedSched = feedSched;
        this.medsData = medsData;
        this.obsData = obsData;
        this.route = route;
        var name = this.route.snapshot.paramMap.get('id');
        this.reptileInfo = reptileData.getReptile(name);
        this.feedInfo = feedData.getFeed(name);
        this.feedSchedule = feedSched.getFeedSchedule(name);
        this.medsInfo = medsData.getMeds(name);
        this.observationInfo = obsData.getObservations(name);
        console.log("this.observationInfo: ");
        console.log(this.observationInfo);
        this.feedSchedInfo = false;
        this.observations = false;
        this.feed = false;
        this.basicInfo = false;
        this.medication = false;
    }
    ReptileDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reptile-details',
            template: __webpack_require__(/*! ./reptile-details.page.html */ "./src/app/reptile-details/reptile-details.page.html"),
            styles: [__webpack_require__(/*! ./reptile-details.page.scss */ "./src/app/reptile-details/reptile-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_reptile_data__WEBPACK_IMPORTED_MODULE_5__["ReptileData"], _providers_feed_data__WEBPACK_IMPORTED_MODULE_3__["FeedData"], _providers_feed_schedule__WEBPACK_IMPORTED_MODULE_4__["FeedSchedule"], _providers_meds_data__WEBPACK_IMPORTED_MODULE_6__["MedsData"], _providers_observations_data__WEBPACK_IMPORTED_MODULE_7__["ObservationData"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ReptileDetailsPage);
    return ReptileDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=reptile-details-reptile-details-module.js.map