(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nativ\Documents\GitHub\AboutMe\AboutMe\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "GSEy":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IntroductionComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroductionComponent.ɵfac = function IntroductionComponent_Factory(t) { return new (t || IntroductionComponent)(); };
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], decls: 0, vars: 0, template: function IntroductionComponent_Template(rf, ctx) { }, styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n.banner[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    background-image: url('background1.jpg');\r\n    width: 100%;\r\n    position: absolute;\r\n    height: 100vh;\r\n    background-size: cover;\r\n    color: white;\r\n    text-align: center;\r\n    \r\n    filter: blur(8px);\r\n    -webkit-filter: blur(8px);\r\n}\r\n.heading[_ngcontent-%COMP%]{\r\n    color: white;\r\n    position: absolute;\r\n    top: 30%;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    text-shadow: 5px 5px 10px #000000;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    color: white;\r\n    position: absolute;\r\n    top: 82%;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    text-shadow: 5px 5px 10px #000000;\r\n}\r\n\r\n.bg-text[_ngcontent-%COMP%] {\r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0, 0.4); \r\n    color: white;\r\n    font-weight: bold;\r\n    border: 3px solid #f1f1f1;\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 2;\r\n    width: 80%;\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n  }\r\n@keyframes mymove {\r\n    from {top: 90%;}\r\n    to {top: 95%;}\r\n  }\r\n.arrow[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    animation: mymove 5s infinite;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    display: inline-block;\r\n    padding: 3px;\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 50%;\r\n    padding: 10px;\r\n    text-align: center;\r\n    transition: width 6s;\r\n  }\r\n.down[_ngcontent-%COMP%] {\r\n    transform: rotate(45deg);\r\n    -webkit-transform: rotate(45deg);\r\n  }\r\n.arrow[_ngcontent-%COMP%]:hover{\r\n      padding: 12px;\r\n  }\r\n@media only screen and (max-width: 768px) {\r\n    \r\n    p[_ngcontent-%COMP%]{\r\n        color: white;\r\n        position: absolute;\r\n        top: 60%;\r\n        width: 100%;\r\n        text-align: center;\r\n        font-size: 2rem;\r\n        text-shadow: 5px 5px 10px #000000;\r\n    }\r\n    .arrow[_ngcontent-%COMP%] {\r\n        border: solid white;\r\n        border-width: 0 3px 3px 0;\r\n        display: inline-block;\r\n        padding: 3px;\r\n        position: absolute;\r\n        top: 75%;\r\n        left: 50%;\r\n        padding: 10px;\r\n        text-align: center;\r\n        transition: width 6s;\r\n        animation: mymovet 5s infinite;\r\n      }\r\n      @keyframes mymovet {\r\n        from {top: 75%;}\r\n        to {top: 80%;}\r\n      }\r\n      .bg-text[_ngcontent-%COMP%] {\r\n        background-color: rgb(0,0,0); \r\n        background-color: rgba(0,0,0, 0.4); \r\n        color: white;\r\n        font-weight: bold;\r\n        border: 3px solid #f1f1f1;\r\n        position: absolute;\r\n        top: 30%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        z-index: 2;\r\n        width: 80%;\r\n        padding: 20px;\r\n        text-align: center;\r\n        font-size: 22px;\r\n        font-weight: bold;\r\n        font-family: sans-serif;\r\n      }\r\n      .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ \r\n        width: 100%;\r\n        height: 100vh;\r\n        background-image: url('background2.jpg');\r\n        background-size: cover;\r\n        color: white;\r\n        text-align: center;\r\n    }\r\n  }\r\n@media only screen\r\n      and (min-device-width: 375px) \r\n      and (max-device-width: 898px) \r\n      and (-webkit-min-device-pixel-ratio: 3)  {\r\n    \r\n    p[_ngcontent-%COMP%]{\r\n        color: white;\r\n        position: absolute;\r\n        top: 70%;\r\n        width: 100%;\r\n        text-align: center;\r\n        font-size: 2rem;\r\n        text-shadow: 5px 5px 10px #000000;\r\n    }\r\n    .arrow[_ngcontent-%COMP%] {\r\n        border: solid white;\r\n        border-width: 0 3px 3px 0;\r\n        display: inline-block;\r\n        padding: 3px;\r\n        position: absolute;\r\n        top: 85%;\r\n        left: 50%;\r\n        padding: 10px;\r\n        text-align: center;\r\n        transition: width 6s;\r\n        animation: mymovep 5s infinite;\r\n      }\r\n      @keyframes mymovep {\r\n        from {top: 85%;}\r\n        to {top: 90%;}\r\n      }\r\n      .bg-text[_ngcontent-%COMP%] {\r\n        background-color: rgb(0,0,0); \r\n        background-color: rgba(0,0,0, 0.4); \r\n        color: white;\r\n        font-weight: bold;\r\n        border: 2px solid #f1f1f1;\r\n        position: absolute;\r\n        top: 25%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        z-index: 2;\r\n        width: 80%;\r\n        padding: 20px;\r\n        text-align: center;\r\n        font-size: 22px;\r\n        font-weight: bold;\r\n        font-family: sans-serif;\r\n      }\r\n      .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ \r\n        width: 100%;\r\n        height: 100vh;\r\n        background-image: url('background2.jpg');\r\n        background-size: cover;\r\n        color: white;\r\n        text-align: center;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBO0lBQ0ksd0NBQTREO0lBQzVELFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlDQUFpQztBQUNyQztBQUVBLGtEQUFrRDtBQUNsRDtJQUNJLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxrQ0FBa0MsRUFBRSxnQ0FBZ0M7SUFDcEUsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtFQUN6QjtBQUdBO0lBQ0UsTUFBTSxRQUFRLENBQUM7SUFDZixJQUFJLFFBQVEsQ0FBQztFQUNmO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0QjtBQUVGO0lBQ0ksd0JBQXdCO0lBQ3hCLGdDQUFnQztFQUNsQztBQUNBO01BQ0ksYUFBYTtFQUNqQjtBQUVGO0lBQ0ksZ0JBQWdCO0lBQ2hCO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUNBQWlDO0lBQ3JDO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsOEJBQThCO01BQ2hDO01BQ0E7UUFDRSxNQUFNLFFBQVEsQ0FBQztRQUNmLElBQUksUUFBUSxDQUFDO01BQ2Y7TUFDQTtRQUNFLDRCQUE0QixFQUFFLG1CQUFtQjtRQUNqRCxrQ0FBa0MsRUFBRSxnQ0FBZ0M7UUFDcEUsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLFVBQVU7UUFDVixVQUFVO1FBQ1YsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHVCQUF1QjtNQUN6QjtNQUNBO1FBQ0UsV0FBVztRQUNYLGFBQWE7UUFDYix3Q0FBNEQ7UUFDNUQsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7RUFDRjtBQUVBOzs7O0lBSUUsZUFBZTtJQUNmO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUNBQWlDO0lBQ3JDO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsOEJBQThCO01BQ2hDO01BQ0E7UUFDRSxNQUFNLFFBQVEsQ0FBQztRQUNmLElBQUksUUFBUSxDQUFDO01BQ2Y7TUFDQTtRQUNFLDRCQUE0QixFQUFFLG1CQUFtQjtRQUNqRCxrQ0FBa0MsRUFBRSxnQ0FBZ0M7UUFDcEUsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLFVBQVU7UUFDVixVQUFVO1FBQ1YsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHVCQUF1QjtNQUN6QjtNQUNBO1FBQ0UsV0FBVztRQUNYLGFBQWE7UUFDYix3Q0FBNEQ7UUFDNUQsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDAlO1xyXG4gICAgcGFkZGluZzogMCU7XHJcbn1cclxuLmJhbm5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5iYW5uZXIgaW1ne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQxLmpwZycpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIEFkZCB0aGUgYmx1ciBlZmZlY3QgKi9cclxuICAgIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcclxufVxyXG5cclxuLmhlYWRpbmd7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCAjMDAwMDAwO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDgyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCAjMDAwMDAwO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0ZXh0IGluIHRoZSBtaWRkbGUgb2YgdGhlIHBhZ2UvaW1hZ2UgKi9cclxuLmJnLXRleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNCk7IC8qIEJsYWNrIHcvb3BhY2l0eS9zZWUtdGhyb3VnaCAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gXHJcbiAgXHJcbiAgQGtleWZyYW1lcyBteW1vdmUge1xyXG4gICAgZnJvbSB7dG9wOiA5MCU7fVxyXG4gICAgdG8ge3RvcDogOTUlO31cclxuICB9XHJcbiAgLmFycm93IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFuaW1hdGlvbjogbXltb3ZlIDVzIGluZmluaXRlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDkwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCA2cztcclxuICB9XHJcbiAgXHJcbi5kb3duIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICAuYXJyb3c6aG92ZXJ7XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG4gXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC8qIEZvciB0YWJsZXQ6ICovXHJcbiAgICBwe1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA2MCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAuYXJyb3cge1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDc1JTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggNnM7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBteW1vdmV0IDVzIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgbXltb3ZldCB7XHJcbiAgICAgICAgZnJvbSB7dG9wOiA3NSU7fVxyXG4gICAgICAgIHRvIHt0b3A6IDgwJTt9XHJcbiAgICAgIH1cclxuICAgICAgLmJnLXRleHQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC40KTsgLyogQmxhY2sgdy9vcGFjaXR5L3NlZS10aHJvdWdoICovXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMzAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgIC5iYW5uZXIgaW1neyBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kMi5qcGcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW5cclxuICAgICAgYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgXHJcbiAgICAgIGFuZCAobWF4LWRldmljZS13aWR0aDogODk4cHgpIFxyXG4gICAgICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMykgIHtcclxuICAgIC8qIEZvciBwaG9uZTogKi9cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDcwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggIzAwMDAwMDtcclxuICAgIH1cclxuICAgIC5hcnJvdyB7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogODUlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCA2cztcclxuICAgICAgICBhbmltYXRpb246IG15bW92ZXAgNXMgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBteW1vdmVwIHtcclxuICAgICAgICBmcm9tIHt0b3A6IDg1JTt9XHJcbiAgICAgICAgdG8ge3RvcDogOTAlO31cclxuICAgICAgfVxyXG4gICAgICAuYmctdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpOyAvKiBCbGFjayB3L29wYWNpdHkvc2VlLXRocm91Z2ggKi9cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YxZjFmMTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyNSU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgLmJhbm5lciBpbWd7IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQyLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroductionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-introduction',
                templateUrl: './introduction.component.html',
                styleUrls: ['./introduction.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");



class AppComponent {
    constructor() {
        this.title = 'AboutMe';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-projects/my-projects.component */ "mnP+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./introduction/introduction.component */ "GSEy");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        _my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_7__["MyProjectsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
        _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_11__["IntroductionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                    _my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_7__["MyProjectsComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                    _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_11__["IntroductionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 0, consts: [[1, "bg-dark", "text-center", "text-white"], [1, "container", "p-4", "pb-0"], [1, "mb-4"], ["href", "https://www.facebook.com/nativ1600", "target", "self", "role", "button", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [1, "fa", "fa-facebook-f"], ["href", "mailto:nativma22@gmail.com", "target", "self", "role", "button", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [1, "fa", "fa-envelope"], ["href", "https://www.instagram.com/nativ_maatuk/", "role", "button", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [1, "fa", "fa-instagram"], ["href", "https://www.linkedin.com/in/nativ-maatuk-a61308214/", "target", "self", "role", "button", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [1, "fa", "fa-linkedin"], ["href", "https://github.com/NativMaatuk", "target", "self", "role", "button", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [1, "fa", "fa-github"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A9 2021 Copyright: Nativ Maatuk ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor() {
        this.flag = false;
    }
    ngOnInit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 13, vars: 0, consts: [[1, "fixed-top"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", 2, "margin", "0", "padding", "5"], [1, "container-fluid"], ["data-toggle", "collapse", "data-target", "#navbarColor03", "routerLink", "home", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarColor03", "aria-controls", "navbarColor03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarColor03", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "hidden-md"], [1, "nav-item"], ["data-toggle", "collapse", "data-target", "#navbarColor03", "routerLink", "my-projects", 1, "nav-link", "hidden-md"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".divied[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin: 0;\r\n    border-bottom-left-radius: 60%; \r\n    border-top-right-radius: 60%; \r\n    border: 12px solid rgb(85, 122, 16);\r\n}\r\n.nav-item[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n  font-family: sans-serif;\r\n  }\r\n.navbar-brand[_ngcontent-%COMP%]:hover{\r\n    border-radius: 7%;\r\n    border-bottom: solid 2px black;\r\n    font-family: sans-serif;\r\n  }\r\n.animationNav[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    animation-name: example;\r\n    animation-duration: 4s;\r\n    animation-delay: -3s;\r\n  }\r\n@keyframes example {\r\n    0%   { left:100%; top:40px;}\r\n    25%  { left:70%; top:30px;}\r\n    50%  { left:50%; top:20px;}\r\n    75%  { left:30%; top:10px;}\r\n    100% { left:0%; top:0px;}\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLG1DQUFtQztBQUN2QztBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QjtBQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qix1QkFBdUI7RUFDekI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0QjtBQUVBO0lBQ0UsT0FBTyxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQzNCLE9BQU8sUUFBUSxFQUFFLFFBQVEsQ0FBQztJQUMxQixPQUFPLFFBQVEsRUFBRSxRQUFRLENBQUM7SUFDMUIsT0FBTyxRQUFRLEVBQUUsUUFBUSxDQUFDO0lBQzFCLE9BQU8sT0FBTyxFQUFFLE9BQU8sQ0FBQztFQUMxQjtBQUNBLEdBQUciLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2aWVke1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDYwJTsgXHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNjAlOyBcclxuICAgIGJvcmRlcjogMTJweCBzb2xpZCByZ2IoODUsIDEyMiwgMTYpO1xyXG59XHJcbi5uYXYtaXRlbTpob3ZlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAubmF2YmFyLWJyYW5kOmhvdmVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogNyU7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5hbmltYXRpb25OYXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtM3M7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZXhhbXBsZSB7XHJcbiAgICAwJSAgIHsgbGVmdDoxMDAlOyB0b3A6NDBweDt9XHJcbiAgICAyNSUgIHsgbGVmdDo3MCU7IHRvcDozMHB4O31cclxuICAgIDUwJSAgeyBsZWZ0OjUwJTsgdG9wOjIwcHg7fVxyXG4gICAgNzUlICB7IGxlZnQ6MzAlOyB0b3A6MTBweDt9XHJcbiAgICAxMDAlIHsgbGVmdDowJTsgdG9wOjBweDt9XHJcbiAgfVxyXG4gIC8qKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mnP+":
/*!******************************************************!*\
  !*** ./src/app/my-projects/my-projects.component.ts ***!
  \******************************************************/
/*! exports provided: MyProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsComponent", function() { return MyProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");





function MyProjectsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/", project_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MyProjectsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.projects = [
            { name: 'ConfirMe', link: 'https://nativmaatuk.github.io/ConfirmMe/', intro: 'Web App developed on Angular, DB - FireBase, to get control panel page enter "012" in phone input area and submit. responsive to PC and Phone', image: 'confirmeimg01.png' },
            { name: 'Tic-Tac-Toe', link: 'https://github.com/NativMaatuk/Tic-Tac-Toe', intro: 'PC Game for Windows, Developed on JAVA uses JavaFX, need JDK11 to run.', image: 'tic-tac-toeimg01.png' },
            { name: 'Minesweeper', link: 'https://github.com/NativMaatuk/Minesweeper', intro: 'PC Game for Windows, Developed on JAVA uses JavaFX, need JDK11 to run.', image: 'Minesweeperimg01.png' },
            { name: 'Defects', link: 'https://github.com/NativMaatuk/Defects', intro: 'The project solution composes of three projects: DefectsViewer, MathActions, UnitTester. developed on C#', image: 'Defectsimg01.png' },
            { name: 'Simon Says', link: 'https://github.com/NativMaatuk/Simon-Says', intro: 'Memory Game for Android, DB - FireBase', image: 'SimonSaysimg01.png' }
        ];
    }
}
MyProjectsComponent.ɵfac = function MyProjectsComponent_Factory(t) { return new (t || MyProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"])); };
MyProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProjectsComponent, selectors: [["app-my-projects"]], decls: 5, vars: 1, consts: [[1, "fix-top", "d-flex", "justify-content-center", "p-2", 2, "flex-wrap", "wrap"], ["style", "margin-left: 2%;margin-top: 5%;", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "5%"], [2, "margin-left", "2%", "margin-top", "5%"], [1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front"], ["alt", "Avatar", 2, "width", "300px", "height", "300px", 3, "src"], [1, "flip-card-back"], [2, "color", "slategray", "cursor", "pointer", 3, "href"]], template: function MyProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyProjectsComponent_div_2_Template, 13, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["body[_ngcontent-%COMP%]{\r\n  background-color: #292b2c;\r\n  width:100% ;\r\n  height: max-content;\r\n  position: absolute;\r\n}\r\n\r\n.flip-card[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  width: 300px;\r\n  height: 300px;\r\n  perspective: 1000px;\r\n}\r\n\r\n.flip-card-inner[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  transition: transform 0.6s;\r\n  transform-style: preserve-3d;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n\r\n.flip-card-front[_ngcontent-%COMP%] {\r\n  background-color: #bbb;\r\n  color: black;\r\n}\r\n\r\n.flip-card-back[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #d8d8d8;\r\n  color: black;\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n@media only screen\r\n    and (min-width: 375px) \r\n    and (max-width: 898px) {\r\n    .fix-top[_ngcontent-%COMP%]{\r\n      margin-top: 10%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvamVjdHMvbXktcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztFQUNuQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osMEJBQTBCO0FBQzVCOztBQUNBOzs7SUFHSTtNQUNFLGVBQWU7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL215LXByb2plY3RzL215LXByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTJiMmM7XHJcbiAgd2lkdGg6MTAwJSA7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uZmxpcC1jYXJkLWZyb250IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZsaXAtY2FyZC1iYWNrIHtcclxuICAvKmJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTsqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG4gICAgYW5kIChtaW4td2lkdGg6IDM3NXB4KSBcclxuICAgIGFuZCAobWF4LXdpZHRoOiA4OThweCkge1xyXG4gICAgLmZpeC10b3B7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-projects',
                templateUrl: './my-projects.component.html',
                styleUrls: ['./my-projects.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"] }]; }, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, consts: [[1, "container"], ["src", "https://kicksdigitalmarketing.com/wp-content/uploads/2019/09/iStock-1142986365.jpg", "width", "70%", "height", "50%"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-projects/my-projects.component */ "mnP+");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");







const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'my-projects', component: _my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_3__["MyProjectsComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../introduction/introduction.component */ "GSEy");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");




class MainComponent {
    constructor() { }
    ngOnInit() {
    }
    goInfo() {
        document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 87, vars: 0, consts: [[1, "container"], [1, "row"], [1, "banner"], [1, "bg-text"], [1, "arrow", "down", 3, "click"], [1, "bg-dark"], ["id", "info"], [1, "head-box-info", "d-flex", "bg-dark"], ["src", "assets/images/profile.jpeg", 1, "rounded-circle"], [1, "boxInfo"], [1, "center", "p-1"], [1, "body-box-info"], [1, "boxInfo", "rounded", "center", "p-3", 2, "width", "80%"], [1, "table", "table-striped", "center", "table-secondary", "skills-body"], [2, "border-bottom", "unset"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hi I'm Nativ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I design & build user interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Learn more about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_i_click_12_listener() { return ctx.goInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nativ Maatuk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Practical Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Self-learning and highly motivated to progress and develop professionally. Work efficiently as part of a team. Available immediately for a junior position in application development, software and Full Stack Web Development positions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "DB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "JAVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "phpMyAdmin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "NodeJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "MySql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "FireBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_1__["IntroductionComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".center[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.boxInfo[_ngcontent-%COMP%]{ \r\n    color: #fff;\r\n    width: 80%;\r\n    height: 70%;\r\n    padding: 2%;\r\n}\r\n.skills-body[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n}\r\n.head-box-info[_ngcontent-%COMP%]{\r\n  padding-left: 2%;\r\n  padding-top: 5%;\r\n  width: 80%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 100vh;\r\n}\r\n.body-box-info[_ngcontent-%COMP%]{\r\n padding-right: 20%;\r\n color: white;padding-bottom: 5%;\r\n font-size: 20px;\r\n}\r\n.animation[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    animation-name: infoAnimation;\r\n    animation-duration: 4s;\r\n    animation-delay: -3s;\r\n    transition: box-shadow .3s;\r\n}\r\n@keyframes infoAnimation {\r\n    0%   { top:100%;}\r\n    25%  { top:75%;}\r\n    50%  { top:50%;}\r\n    75%  { top:25%;}\r\n    100% { top:0%;}\r\n  }\r\n.space[_ngcontent-%COMP%]{\r\n    margin-top: 3%;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n.back[_ngcontent-%COMP%]{\r\n  padding: 4%;\r\n  width: 100%;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n  width: 15%;\r\n  height: 15%;\r\n}\r\n.card-profile[_ngcontent-%COMP%]{\r\n  padding: 2%;\r\n  width: 25%;\r\n  margin-left: auto;\r\n  margin-right: auto  ;\r\n}\r\n\r\n*[_ngcontent-%COMP%]{\r\n  margin: 0%;\r\n  padding: 0%;\r\n}\r\n.banner[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  background-image: url('background1.jpg');\r\n  width: 100%;\r\n  position: absolute;\r\n  height: 100vh;\r\n  background-size: cover;\r\n  color: white;\r\n  text-align: center;\r\n  \r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n}\r\n.heading[_ngcontent-%COMP%]{\r\n  color: white;\r\n  position: absolute;\r\n  top: 30%;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 3rem;\r\n  text-shadow: 5px 5px 10px #000000;\r\n}\r\np[_ngcontent-%COMP%]{\r\n  color: white;\r\n  position: absolute;\r\n  top: 82%;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  text-shadow: 5px 5px 10px #000000;\r\n}\r\n\r\n.bg-text[_ngcontent-%COMP%] {\r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0, 0.4); \r\n  color: white;\r\n  font-weight: bold;\r\n  border: 3px solid #f1f1f1;\r\n  position: absolute;\r\n  top: 30%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 2;\r\n  width: 80%;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  font-family: sans-serif;\r\n}\r\n@keyframes mymove {\r\n  from {top: 90%;}\r\n  to {top: 95%;}\r\n}\r\n.arrow[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  animation: mymove 5s infinite;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 90%;\r\n  left: 50%;\r\n  padding: 10px;\r\n  text-align: center;\r\n  transition: width 6s;\r\n}\r\n.down[_ngcontent-%COMP%] {\r\n  transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n}\r\n.arrow[_ngcontent-%COMP%]:hover{\r\n    padding: 12px;\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  \r\n  p[_ngcontent-%COMP%]{\r\n      color: white;\r\n      position: absolute;\r\n      top: 60%;\r\n      width: 100%;\r\n      text-align: center;\r\n      font-size: 2rem;\r\n      text-shadow: 5px 5px 10px #000000;\r\n  }\r\n  .arrow[_ngcontent-%COMP%] {\r\n      border: solid white;\r\n      border-width: 0 3px 3px 0;\r\n      display: inline-block;\r\n      padding: 3px;\r\n      position: absolute;\r\n      top: 75%;\r\n      left: 50%;\r\n      padding: 10px;\r\n      text-align: center;\r\n      transition: width 6s;\r\n      animation: mymovet 5s infinite;\r\n    }\r\n    @keyframes mymovet {\r\n      from {top: 75%;}\r\n      to {top: 80%;}\r\n    }\r\n    .bg-text[_ngcontent-%COMP%] {\r\n      background-color: rgb(0,0,0); \r\n      background-color: rgba(0,0,0, 0.4); \r\n      color: white;\r\n      font-weight: bold;\r\n      border: 3px solid #f1f1f1;\r\n      position: absolute;\r\n      top: 30%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      z-index: 2;\r\n      width: 80%;\r\n      padding: 20px;\r\n      text-align: center;\r\n      font-size: 22px;\r\n      font-weight: bold;\r\n      font-family: sans-serif;\r\n    }\r\n    .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ \r\n      width: 100%;\r\n      height: 100vh;\r\n      background-image: url('background2.jpg');\r\n      background-size: cover;\r\n      color: white;\r\n      text-align: center;\r\n  }\r\n}\r\n@media only screen\r\n    and (min-width: 375px) \r\n    and (max-width: 898px) {\r\n  \r\n  .skills-body[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n  }\r\n  .head-box-info[_ngcontent-%COMP%]{\r\n    padding-left: 2%;padding-top: 15%;\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 100vh;\r\n  }\r\n  .body-box-info[_ngcontent-%COMP%]{\r\n    padding-top: 0%;\r\n    padding-left: 0%;\r\n    padding-right: 0%;\r\n    color: white;\r\n    font-size: 17px;\r\n  }\r\n  .margin-top-for-phone[_ngcontent-%COMP%]{\r\n    margin-top: 20%;\r\n  }\r\n  p[_ngcontent-%COMP%]{\r\n      color: white;\r\n      top: 70%;\r\n      width: 100%;\r\n      text-align: center;\r\n      font-size: 1.5rem;\r\n      text-shadow: 5px 5px 10px #000000;\r\n  }\r\n  .arrow[_ngcontent-%COMP%] {\r\n      border: solid white;\r\n      border-width: 0 3px 3px 0;\r\n      cursor: pointer;\r\n      left: 50%;\r\n      padding: 15px;\r\n      text-align: center;\r\n      transition: width 6s;\r\n      animation: mymovep 5s infinite;\r\n    }\r\n    .arrow[_ngcontent-%COMP%]:hover{\r\n      padding: 17px;\r\n  }\r\n    @keyframes mymovep {\r\n      from {top: 75%;}\r\n      to {top: 80%;}\r\n    }\r\n    .bg-text[_ngcontent-%COMP%] {\r\n      background-color: rgb(0,0,0); \r\n      background-color: rgba(0,0,0, 0.4); \r\n      color: white;\r\n      font-weight: bold;\r\n      border: 2px solid #f1f1f1;\r\n      top: 25%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      z-index: 2;\r\n      width: 80%;\r\n      padding: 20px;\r\n      text-align: center;\r\n      font-size: 18px;\r\n      font-weight: bold;\r\n      font-family: sans-serif;\r\n    }\r\n    .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ \r\n      position: absolute;\r\n      top: 0;\r\n      width: 100%;\r\n      height: 100vh;\r\n      background-image: url('background2.jpg');\r\n      background-size: cover;\r\n      color: white;\r\n      text-align: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWSxDQUFDLGtCQUFrQjtDQUMvQixlQUFlO0FBQ2hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsMEJBQTBCO0FBQzlCO0FBRUU7SUFDRSxPQUFPLFFBQVEsQ0FBQztJQUNoQixPQUFPLE9BQU8sQ0FBQztJQUNmLE9BQU8sT0FBTyxDQUFDO0lBQ2YsT0FBTyxPQUFPLENBQUM7SUFDZixPQUFPLE1BQU0sQ0FBQztFQUNoQjtBQUNGO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0EsR0FBRztBQUNIO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUNBO0VBQ0Usd0NBQTREO0VBQzVELFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlDQUFpQztBQUNuQztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLDRCQUE0QixFQUFFLG1CQUFtQjtFQUNqRCxrQ0FBa0MsRUFBRSxnQ0FBZ0M7RUFDcEUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6QjtBQUdBO0VBQ0UsTUFBTSxRQUFRLENBQUM7RUFDZixJQUFJLFFBQVEsQ0FBQztBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0NBQWdDO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEI7TUFDSSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixpQ0FBaUM7RUFDckM7RUFDQTtNQUNJLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFNBQVM7TUFDVCxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLG9CQUFvQjtNQUNwQiw4QkFBOEI7SUFDaEM7SUFDQTtNQUNFLE1BQU0sUUFBUSxDQUFDO01BQ2YsSUFBSSxRQUFRLENBQUM7SUFDZjtJQUNBO01BQ0UsNEJBQTRCLEVBQUUsbUJBQW1CO01BQ2pELGtDQUFrQyxFQUFFLGdDQUFnQztNQUNwRSxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFNBQVM7TUFDVCxnQ0FBZ0M7TUFDaEMsVUFBVTtNQUNWLFVBQVU7TUFDVixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsYUFBYTtNQUNiLHdDQUE0RDtNQUM1RCxzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGtCQUFrQjtFQUN0QjtBQUNGO0FBRUE7OztFQUdFLGVBQWU7RUFDZjtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsZ0JBQWdCLENBQUMsZ0JBQWdCO0lBQ2pDLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtNQUNJLFlBQVk7TUFDWixRQUFRO01BQ1IsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsaUNBQWlDO0VBQ3JDO0VBQ0E7TUFDSSxtQkFBbUI7TUFDbkIseUJBQXlCO01BQ3pCLGVBQWU7TUFDZixTQUFTO01BQ1QsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixvQkFBb0I7TUFDcEIsOEJBQThCO0lBQ2hDO0lBQ0E7TUFDRSxhQUFhO0VBQ2pCO0lBQ0U7TUFDRSxNQUFNLFFBQVEsQ0FBQztNQUNmLElBQUksUUFBUSxDQUFDO0lBQ2Y7SUFDQTtNQUNFLDRCQUE0QixFQUFFLG1CQUFtQjtNQUNqRCxrQ0FBa0MsRUFBRSxnQ0FBZ0M7TUFDcEUsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQix5QkFBeUI7TUFDekIsUUFBUTtNQUNSLFNBQVM7TUFDVCxnQ0FBZ0M7TUFDaEMsVUFBVTtNQUNWLFVBQVU7TUFDVixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFdBQVc7TUFDWCxhQUFhO01BQ2Isd0NBQTREO01BQzVELHNCQUFzQjtNQUN0QixZQUFZO01BQ1osa0JBQWtCO0VBQ3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2VudGVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmJveEluZm97IFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG4uc2tpbGxzLWJvZHl7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4uaGVhZC1ib3gtaW5mb3tcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMDB2aDtcclxufVxyXG4uYm9keS1ib3gtaW5mb3tcclxuIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuIGNvbG9yOiB3aGl0ZTtwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5hbmltYXRpb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogaW5mb0FuaW1hdGlvbjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0zcztcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xyXG59XHJcblxyXG4gIEBrZXlmcmFtZXMgaW5mb0FuaW1hdGlvbiB7XHJcbiAgICAwJSAgIHsgdG9wOjEwMCU7fVxyXG4gICAgMjUlICB7IHRvcDo3NSU7fVxyXG4gICAgNTAlICB7IHRvcDo1MCU7fVxyXG4gICAgNzUlICB7IHRvcDoyNSU7fVxyXG4gICAgMTAwJSB7IHRvcDowJTt9XHJcbiAgfVxyXG4uc3BhY2V7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG5saXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYmFja3tcclxuICBwYWRkaW5nOiA0JTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5pbWd7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBoZWlnaHQ6IDE1JTtcclxufVxyXG4uY2FyZC1wcm9maWxle1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICA7XHJcbn1cclxuLyoqL1xyXG4qe1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgcGFkZGluZzogMCU7XHJcbn1cclxuLmJhbm5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmJhbm5lciBpbWd7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQxLmpwZycpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXHJcbiAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcclxufVxyXG5cclxuLmhlYWRpbmd7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggIzAwMDAwMDtcclxufVxyXG5we1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA4MiU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIHRleHQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgcGFnZS9pbWFnZSAqL1xyXG4uYmctdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpOyAvKiBCbGFjayB3L29wYWNpdHkvc2VlLXRocm91Z2ggKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIG15bW92ZSB7XHJcbiAgZnJvbSB7dG9wOiA5MCU7fVxyXG4gIHRvIHt0b3A6IDk1JTt9XHJcbn1cclxuLmFycm93IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYW5pbWF0aW9uOiBteW1vdmUgNXMgaW5maW5pdGU7XHJcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDZzO1xyXG59XHJcblxyXG4uZG93biB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbi5hcnJvdzpob3ZlcntcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAvKiBGb3IgdGFibGV0OiAqL1xyXG4gIHB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDYwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDA7XHJcbiAgfVxyXG4gIC5hcnJvdyB7XHJcbiAgICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNzUlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggNnM7XHJcbiAgICAgIGFuaW1hdGlvbjogbXltb3ZldCA1cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbXltb3ZldCB7XHJcbiAgICAgIGZyb20ge3RvcDogNzUlO31cclxuICAgICAgdG8ge3RvcDogODAlO31cclxuICAgIH1cclxuICAgIC5iZy10ZXh0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC40KTsgLyogQmxhY2sgdy9vcGFjaXR5L3NlZS10aHJvdWdoICovXHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzMCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyIGltZ3sgXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDIuanBnJyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgICBhbmQgKG1pbi13aWR0aDogMzc1cHgpIFxyXG4gICAgYW5kIChtYXgtd2lkdGg6IDg5OHB4KSB7XHJcbiAgLyogRm9yIHBob25lOiAqL1xyXG4gIC5za2lsbHMtYm9keXtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIC5oZWFkLWJveC1pbmZve1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtwYWRkaW5nLXRvcDogMTUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwMHZoO1xyXG4gIH1cclxuICAuYm9keS1ib3gtaW5mb3tcclxuICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgLm1hcmdpbi10b3AtZm9yLXBob25le1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIH1cclxuICBwe1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRvcDogNzAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCAjMDAwMDAwO1xyXG4gIH1cclxuICAuYXJyb3cge1xyXG4gICAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCA2cztcclxuICAgICAgYW5pbWF0aW9uOiBteW1vdmVwIDVzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgLmFycm93OmhvdmVye1xyXG4gICAgICBwYWRkaW5nOiAxN3B4O1xyXG4gIH1cclxuICAgIEBrZXlmcmFtZXMgbXltb3ZlcCB7XHJcbiAgICAgIGZyb20ge3RvcDogNzUlO31cclxuICAgICAgdG8ge3RvcDogODAlO31cclxuICAgIH1cclxuICAgIC5iZy10ZXh0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC40KTsgLyogQmxhY2sgdy9vcGFjaXR5L3NlZS10aHJvdWdoICovXHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgIHRvcDogMjUlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmJhbm5lciBpbWd7IFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kMi5qcGcnKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map