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
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 13, vars: 0, consts: [[1, "fixed-top"], [1, "navbar", "navbar-expand-lg", "navbar-dark", 2, "margin", "0", "padding", "5"], [1, "container-fluid"], ["routerLink", "home", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarColor03", "aria-controls", "navbarColor03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarColor03", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "hidden-md"], [1, "nav-item"], ["routerLink", "my-projects", 1, "nav-link", "hidden-md"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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


class MyProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyProjectsComponent.ɵfac = function MyProjectsComponent_Factory(t) { return new (t || MyProjectsComponent)(); };
MyProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProjectsComponent, selectors: [["app-my-projects"]], decls: 3, vars: 0, consts: [[1, "card"]], template: function MyProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Need to add all Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n  background-color: #292b2c;\r\n  position: absolute; \r\n  width:100% ;\r\n  height: 100vh;\r\n\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    top: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvamVjdHMvbXktcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7O0FBRWY7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL215LXByb2plY3RzL215LXByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTJiMmM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICB3aWR0aDoxMDAlIDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxufVxyXG4uY2FyZHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogNTAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-projects',
                templateUrl: './my-projects.component.html',
                styleUrls: ['./my-projects.component.css']
            }]
    }], function () { return []; }, null); })();


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
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 89, vars: 0, consts: [[1, "container"], [1, "row"], [1, "banner"], [1, "bg-text"], [1, "arrow", "down", 3, "click"], [1, "bg-dark"], ["id", "info"], [1, "d-flex", "bg-dark", "p-5", 2, "width", "80%", "margin-left", "auto", "margin-right", "auto", "margin-top", "100vh"], ["src", "assets/images/profile.jpeg", 1, "rounded-circle"], [1, "boxInfo"], [1, "center", "p-1"], [1, "p-1"], [1, "boxInfo", "rounded", "center", 2, "width", "80%"], [1, "table", "table-striped", "center", "table-secondary", 2, "width", "80%"], [2, "border-bottom", "unset"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hi I'm Nativ. I desing & build user interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Learn more about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_i_click_10_listener() { return ctx.goInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nativ Maatuk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Practical Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Self-learning and highly motivated to progress and develop professionally.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Work efficiently as part of a team.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Available immediately for a junior position in application development, software and Full Stack Web Development positions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "DB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "JAVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "phpMyAdmin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "NodeJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "MySql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "FireBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_1__["IntroductionComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".center[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.boxInfo[_ngcontent-%COMP%]{ \r\n    color: #fff;\r\n    width: 80%;\r\n    height: 70%;\r\n    padding: 2%;\r\n}\r\n.animation[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    animation-name: infoAnimation;\r\n    animation-duration: 4s;\r\n    animation-delay: -3s;\r\n    transition: box-shadow .3s;\r\n}\r\n@keyframes infoAnimation {\r\n    0%   { top:100%;}\r\n    25%  { top:75%;}\r\n    50%  { top:50%;}\r\n    75%  { top:25%;}\r\n    100% { top:0%;}\r\n  }\r\n.space[_ngcontent-%COMP%]{\r\n    margin-top: 3%;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n.back[_ngcontent-%COMP%]{\r\n  padding: 4%;\r\n  width: 100%;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n  width: 15%;\r\n  height: 15%;\r\n}\r\n.card-profile[_ngcontent-%COMP%]{\r\n  padding: 2%;\r\n  width: 25%;\r\n  margin-left: auto;\r\n  margin-right: auto  ;\r\n}\r\n\r\n*[_ngcontent-%COMP%]{\r\n  margin: 0%;\r\n  padding: 0%;\r\n}\r\n.banner[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  background-image: url('background1.jpg');\r\n  width: 100%;\r\n  position: absolute;\r\n  height: 100vh;\r\n  background-size: cover;\r\n  color: white;\r\n  text-align: center;\r\n  \r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n}\r\n.heading[_ngcontent-%COMP%]{\r\n  color: white;\r\n  position: absolute;\r\n  top: 30%;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 3rem;\r\n  text-shadow: 5px 5px 10px #000000;\r\n}\r\np[_ngcontent-%COMP%]{\r\n  color: white;\r\n  position: absolute;\r\n  top: 82%;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  text-shadow: 5px 5px 10px #000000;\r\n}\r\n\r\n.bg-text[_ngcontent-%COMP%] {\r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0, 0.4); \r\n  color: white;\r\n  font-weight: bold;\r\n  border: 3px solid #f1f1f1;\r\n  position: absolute;\r\n  top: 30%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 2;\r\n  width: 80%;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  font-family: sans-serif;\r\n}\r\n@keyframes mymove {\r\n  from {top: 90%;}\r\n  to {top: 95%;}\r\n}\r\n.arrow[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  animation: mymove 5s infinite;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  display: inline-block;\r\n  padding: 3px;\r\n  position: absolute;\r\n  top: 90%;\r\n  left: 50%;\r\n  padding: 10px;\r\n  text-align: center;\r\n  transition: width 6s;\r\n}\r\n.down[_ngcontent-%COMP%] {\r\n  transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n}\r\n.arrow[_ngcontent-%COMP%]:hover{\r\n    padding: 12px;\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  \r\n  p[_ngcontent-%COMP%]{\r\n      color: white;\r\n      position: absolute;\r\n      top: 60%;\r\n      width: 100%;\r\n      text-align: center;\r\n      font-size: 2rem;\r\n      text-shadow: 5px 5px 10px #000000;\r\n  }\r\n  .arrow[_ngcontent-%COMP%] {\r\n      border: solid white;\r\n      border-width: 0 3px 3px 0;\r\n      display: inline-block;\r\n      padding: 3px;\r\n      position: absolute;\r\n      top: 75%;\r\n      left: 50%;\r\n      padding: 10px;\r\n      text-align: center;\r\n      transition: width 6s;\r\n      animation: mymovet 5s infinite;\r\n    }\r\n    @keyframes mymovet {\r\n      from {top: 75%;}\r\n      to {top: 80%;}\r\n    }\r\n    .bg-text[_ngcontent-%COMP%] {\r\n      background-color: rgb(0,0,0); \r\n      background-color: rgba(0,0,0, 0.4); \r\n      color: white;\r\n      font-weight: bold;\r\n      border: 3px solid #f1f1f1;\r\n      position: absolute;\r\n      top: 30%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      z-index: 2;\r\n      width: 80%;\r\n      padding: 20px;\r\n      text-align: center;\r\n      font-size: 22px;\r\n      font-weight: bold;\r\n      font-family: sans-serif;\r\n    }\r\n    .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ \r\n      width: 100%;\r\n      height: 100vh;\r\n      background-image: url('background2.jpg');\r\n      background-size: cover;\r\n      color: white;\r\n      text-align: center;\r\n  }\r\n}\r\n@media only screen\r\n    and (min-width: 375px) \r\n    and (max-width: 898px) {\r\n  \r\n  p[_ngcontent-%COMP%]{\r\n      color: white;\r\n      top: 70%;\r\n      width: 100%;\r\n      text-align: center;\r\n      font-size: 2rem;\r\n      text-shadow: 5px 5px 10px #000000;\r\n  }\r\n  .arrow[_ngcontent-%COMP%] {\r\n      border: solid white;\r\n      border-width: 0 3px 3px 0;\r\n      cursor: pointer;\r\n      padding: 3px;\r\n      top: 78%;\r\n      left: 50%;\r\n      padding: 10px;\r\n      text-align: center;\r\n      transition: width 6s;\r\n      animation: mymovep 5s infinite;\r\n    }\r\n    @keyframes mymovep {\r\n      from {top: 85%;}\r\n      to {top: 90%;}\r\n    }\r\n    .bg-text[_ngcontent-%COMP%] {\r\n      background-color: rgb(0,0,0); \r\n      background-color: rgba(0,0,0, 0.4); \r\n      color: white;\r\n      font-weight: bold;\r\n      border: 2px solid #f1f1f1;\r\n      top: 25%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      z-index: 2;\r\n      width: 80%;\r\n      padding: 20px;\r\n      text-align: center;\r\n      font-size: 22px;\r\n      font-weight: bold;\r\n      font-family: sans-serif;\r\n    }\r\n    .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ \r\n      padding: 0;\r\n      margin: 0;\r\n      width: 100%;\r\n      height: 100vh;\r\n      background-image: url('background2.jpg');\r\n      background-size: cover;\r\n      color: white;\r\n      text-align: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsMEJBQTBCO0FBQzlCO0FBRUU7SUFDRSxPQUFPLFFBQVEsQ0FBQztJQUNoQixPQUFPLE9BQU8sQ0FBQztJQUNmLE9BQU8sT0FBTyxDQUFDO0lBQ2YsT0FBTyxPQUFPLENBQUM7SUFDZixPQUFPLE1BQU0sQ0FBQztFQUNoQjtBQUNGO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0EsR0FBRztBQUNIO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUNBO0VBQ0Usd0NBQTREO0VBQzVELFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlDQUFpQztBQUNuQztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLDRCQUE0QixFQUFFLG1CQUFtQjtFQUNqRCxrQ0FBa0MsRUFBRSxnQ0FBZ0M7RUFDcEUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6QjtBQUdBO0VBQ0UsTUFBTSxRQUFRLENBQUM7RUFDZixJQUFJLFFBQVEsQ0FBQztBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdDQUFnQztBQUNsQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCO01BQ0ksWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsaUNBQWlDO0VBQ3JDO0VBQ0E7TUFDSSxtQkFBbUI7TUFDbkIseUJBQXlCO01BQ3pCLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixvQkFBb0I7TUFDcEIsOEJBQThCO0lBQ2hDO0lBQ0E7TUFDRSxNQUFNLFFBQVEsQ0FBQztNQUNmLElBQUksUUFBUSxDQUFDO0lBQ2Y7SUFDQTtNQUNFLDRCQUE0QixFQUFFLG1CQUFtQjtNQUNqRCxrQ0FBa0MsRUFBRSxnQ0FBZ0M7TUFDcEUsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQix5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixTQUFTO01BQ1QsZ0NBQWdDO01BQ2hDLFVBQVU7TUFDVixVQUFVO01BQ1YsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsV0FBVztNQUNYLGFBQWE7TUFDYix3Q0FBNEQ7TUFDNUQsc0JBQXNCO01BQ3RCLFlBQVk7TUFDWixrQkFBa0I7RUFDdEI7QUFDRjtBQUVBOzs7RUFHRSxlQUFlO0VBQ2Y7TUFDSSxZQUFZO01BQ1osUUFBUTtNQUNSLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGlDQUFpQztFQUNyQztFQUNBO01BQ0ksbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YsWUFBWTtNQUNaLFFBQVE7TUFDUixTQUFTO01BQ1QsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixvQkFBb0I7TUFDcEIsOEJBQThCO0lBQ2hDO0lBQ0E7TUFDRSxNQUFNLFFBQVEsQ0FBQztNQUNmLElBQUksUUFBUSxDQUFDO0lBQ2Y7SUFDQTtNQUNFLDRCQUE0QixFQUFFLG1CQUFtQjtNQUNqRCxrQ0FBa0MsRUFBRSxnQ0FBZ0M7TUFDcEUsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQix5QkFBeUI7TUFDekIsUUFBUTtNQUNSLFNBQVM7TUFDVCxnQ0FBZ0M7TUFDaEMsVUFBVTtNQUNWLFVBQVU7TUFDVixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxVQUFVO01BQ1YsU0FBUztNQUNULFdBQVc7TUFDWCxhQUFhO01BQ2Isd0NBQTREO01BQzVELHNCQUFzQjtNQUN0QixZQUFZO01BQ1osa0JBQWtCO0VBQ3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2VudGVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmJveEluZm97IFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmFuaW1hdGlvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBpbmZvQW5pbWF0aW9uO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTNzO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XHJcbn1cclxuXHJcbiAgQGtleWZyYW1lcyBpbmZvQW5pbWF0aW9uIHtcclxuICAgIDAlICAgeyB0b3A6MTAwJTt9XHJcbiAgICAyNSUgIHsgdG9wOjc1JTt9XHJcbiAgICA1MCUgIHsgdG9wOjUwJTt9XHJcbiAgICA3NSUgIHsgdG9wOjI1JTt9XHJcbiAgICAxMDAlIHsgdG9wOjAlO31cclxuICB9XHJcbi5zcGFjZXtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcbmxpe1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5iYWNre1xyXG4gIHBhZGRpbmc6IDQlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmltZ3tcclxuICB3aWR0aDogMTUlO1xyXG4gIGhlaWdodDogMTUlO1xyXG59XHJcbi5jYXJkLXByb2ZpbGV7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIDtcclxufVxyXG4vKiovXHJcbip7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBwYWRkaW5nOiAwJTtcclxufVxyXG4uYmFubmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uYmFubmVyIGltZ3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDEuanBnJyk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIEFkZCB0aGUgYmx1ciBlZmZlY3QgKi9cclxuICBmaWx0ZXI6IGJsdXIoOHB4KTtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCAjMDAwMDAwO1xyXG59XHJcbnB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDgyJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggIzAwMDAwMDtcclxufVxyXG5cclxuLyogUG9zaXRpb24gdGV4dCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBwYWdlL2ltYWdlICovXHJcbi5iZy10ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNCk7IC8qIEJsYWNrIHcvb3BhY2l0eS9zZWUtdGhyb3VnaCAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogODAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgbXltb3ZlIHtcclxuICBmcm9tIHt0b3A6IDkwJTt9XHJcbiAgdG8ge3RvcDogOTUlO31cclxufVxyXG4uYXJyb3cge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbmltYXRpb246IG15bW92ZSA1cyBpbmZpbml0ZTtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDZzO1xyXG59XHJcblxyXG4uZG93biB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbi5hcnJvdzpob3ZlcntcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAvKiBGb3IgdGFibGV0OiAqL1xyXG4gIHB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDYwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDA7XHJcbiAgfVxyXG4gIC5hcnJvdyB7XHJcbiAgICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNzUlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggNnM7XHJcbiAgICAgIGFuaW1hdGlvbjogbXltb3ZldCA1cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbXltb3ZldCB7XHJcbiAgICAgIGZyb20ge3RvcDogNzUlO31cclxuICAgICAgdG8ge3RvcDogODAlO31cclxuICAgIH1cclxuICAgIC5iZy10ZXh0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC40KTsgLyogQmxhY2sgdy9vcGFjaXR5L3NlZS10aHJvdWdoICovXHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzMCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyIGltZ3sgXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDIuanBnJyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgICBhbmQgKG1pbi13aWR0aDogMzc1cHgpIFxyXG4gICAgYW5kIChtYXgtd2lkdGg6IDg5OHB4KSB7XHJcbiAgLyogRm9yIHBob25lOiAqL1xyXG4gIHB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdG9wOiA3MCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCAjMDAwMDAwO1xyXG4gIH1cclxuICAuYXJyb3cge1xyXG4gICAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgdG9wOiA3OCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCA2cztcclxuICAgICAgYW5pbWF0aW9uOiBteW1vdmVwIDVzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBteW1vdmVwIHtcclxuICAgICAgZnJvbSB7dG9wOiA4NSU7fVxyXG4gICAgICB0byB7dG9wOiA5MCU7fVxyXG4gICAgfVxyXG4gICAgLmJnLXRleHQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpOyAvKiBCbGFjayB3L29wYWNpdHkvc2VlLXRocm91Z2ggKi9cclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2YxZjFmMTtcclxuICAgICAgdG9wOiAyNSU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyIGltZ3sgXHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kMi5qcGcnKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59Il19 */"] });
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