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
IntroductionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroductionComponent, selectors: [["app-introduction"]], decls: 10, vars: 0, consts: [[1, "container"], [1, "row"], [1, "banner"], [1, "bg-text"], [1, "arrow", "down"]], template: function IntroductionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hi I'm Nativ. I desing & build user interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Learn more about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n.banner[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    background-image: url('background1.jpg');\r\n    width: 100%;\r\n    position: absolute;\r\n    height: 100vh;\r\n    background-size: cover;\r\n    color: white;\r\n    text-align: center;\r\n    \r\n    filter: blur(8px);\r\n    -webkit-filter: blur(8px);\r\n}\r\n.heading[_ngcontent-%COMP%]{\r\n    color: white;\r\n    position: absolute;\r\n    top: 30%;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    text-shadow: 5px 5px 10px #000000;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    color: white;\r\n    position: absolute;\r\n    top: 82%;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    text-shadow: 5px 5px 10px #000000;\r\n}\r\n\r\n.bg-text[_ngcontent-%COMP%] {\r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0, 0.4); \r\n    color: white;\r\n    font-weight: bold;\r\n    border: 3px solid #f1f1f1;\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 2;\r\n    width: 80%;\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n  }\r\n@keyframes mymove {\r\n    from {top: 90%;}\r\n    to {top: 95%;}\r\n  }\r\n.arrow[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    animation: mymove 5s infinite;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    display: inline-block;\r\n    padding: 3px;\r\n    position: absolute;\r\n    top: 90%;\r\n    left: 50%;\r\n    padding: 10px;\r\n    text-align: center;\r\n    transition: width 6s;\r\n  }\r\n.down[_ngcontent-%COMP%] {\r\n    transform: rotate(45deg);\r\n    -webkit-transform: rotate(45deg);\r\n  }\r\n.arrow[_ngcontent-%COMP%]:hover{\r\n      padding: 12px;\r\n  }\r\n@media only screen and (max-width: 768px) {\r\n    \r\n    p[_ngcontent-%COMP%]{\r\n        color: white;\r\n        position: absolute;\r\n        top: 60%;\r\n        width: 100%;\r\n        text-align: center;\r\n        font-size: 2rem;\r\n        text-shadow: 5px 5px 10px #000000;\r\n    }\r\n    .arrow[_ngcontent-%COMP%] {\r\n        border: solid white;\r\n        border-width: 0 3px 3px 0;\r\n        display: inline-block;\r\n        padding: 3px;\r\n        position: absolute;\r\n        top: 75%;\r\n        left: 50%;\r\n        padding: 10px;\r\n        text-align: center;\r\n        transition: width 6s;\r\n        animation: mymovet 5s infinite;\r\n      }\r\n      @keyframes mymovet {\r\n        from {top: 75%;}\r\n        to {top: 80%;}\r\n      }\r\n      .bg-text[_ngcontent-%COMP%] {\r\n        background-color: rgb(0,0,0); \r\n        background-color: rgba(0,0,0, 0.4); \r\n        color: white;\r\n        font-weight: bold;\r\n        border: 3px solid #f1f1f1;\r\n        position: absolute;\r\n        top: 30%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        z-index: 2;\r\n        width: 80%;\r\n        padding: 20px;\r\n        text-align: center;\r\n        font-size: 22px;\r\n        font-weight: bold;\r\n        font-family: sans-serif;\r\n      }\r\n      .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ \r\n        width: 100%;\r\n        height: 100vh;\r\n        background-image: url('background2.jpg');\r\n        background-size: cover;\r\n        color: white;\r\n        text-align: center;\r\n    }\r\n  }\r\n@media only screen and (min-device-width : 375px) and (max-device-width : 375px) \r\n  and (min-device-height : 812px) and (min-device-height : 812px) \r\n and (-webkit-device-pixel-ratio : 3) {\r\n    \r\n    p[_ngcontent-%COMP%]{\r\n        color: white;\r\n        position: absolute;\r\n        top: 70%;\r\n        width: 100%;\r\n        text-align: center;\r\n        font-size: 2rem;\r\n        text-shadow: 5px 5px 10px #000000;\r\n    }\r\n    .arrow[_ngcontent-%COMP%] {\r\n        border: solid white;\r\n        border-width: 0 3px 3px 0;\r\n        display: inline-block;\r\n        padding: 3px;\r\n        position: absolute;\r\n        top: 85%;\r\n        left: 50%;\r\n        padding: 10px;\r\n        text-align: center;\r\n        transition: width 6s;\r\n        animation: mymovep 5s infinite;\r\n      }\r\n      @keyframes mymovep {\r\n        from {top: 85%;}\r\n        to {top: 90%;}\r\n      }\r\n      .bg-text[_ngcontent-%COMP%] {\r\n        background-color: rgb(0,0,0); \r\n        background-color: rgba(0,0,0, 0.4); \r\n        color: white;\r\n        font-weight: bold;\r\n        border: 2px solid #f1f1f1;\r\n        position: absolute;\r\n        top: 25%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        z-index: 2;\r\n        width: 80%;\r\n        padding: 20px;\r\n        text-align: center;\r\n        font-size: 22px;\r\n        font-weight: bold;\r\n        font-family: sans-serif;\r\n      }\r\n      .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{ \r\n        width: 100%;\r\n        height: 100vh;\r\n        background-image: url('background2.jpg');\r\n        background-size: cover;\r\n        color: white;\r\n        text-align: center;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBO0lBQ0ksd0NBQTREO0lBQzVELFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlDQUFpQztBQUNyQztBQUVBLGtEQUFrRDtBQUNsRDtJQUNJLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxrQ0FBa0MsRUFBRSxnQ0FBZ0M7SUFDcEUsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtFQUN6QjtBQUdBO0lBQ0UsTUFBTSxRQUFRLENBQUM7SUFDZixJQUFJLFFBQVEsQ0FBQztFQUNmO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0QjtBQUVGO0lBQ0ksd0JBQXdCO0lBQ3hCLGdDQUFnQztFQUNsQztBQUNBO01BQ0ksYUFBYTtFQUNqQjtBQUVGO0lBQ0ksZ0JBQWdCO0lBQ2hCO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUNBQWlDO0lBQ3JDO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsOEJBQThCO01BQ2hDO01BQ0E7UUFDRSxNQUFNLFFBQVEsQ0FBQztRQUNmLElBQUksUUFBUSxDQUFDO01BQ2Y7TUFDQTtRQUNFLDRCQUE0QixFQUFFLG1CQUFtQjtRQUNqRCxrQ0FBa0MsRUFBRSxnQ0FBZ0M7UUFDcEUsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLFVBQVU7UUFDVixVQUFVO1FBQ1YsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHVCQUF1QjtNQUN6QjtNQUNBO1FBQ0UsV0FBVztRQUNYLGFBQWE7UUFDYix3Q0FBNEQ7UUFDNUQsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7RUFDRjtBQUVBOzs7SUFHRSxlQUFlO0lBQ2Y7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQ0FBaUM7SUFDckM7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQiw4QkFBOEI7TUFDaEM7TUFDQTtRQUNFLE1BQU0sUUFBUSxDQUFDO1FBQ2YsSUFBSSxRQUFRLENBQUM7TUFDZjtNQUNBO1FBQ0UsNEJBQTRCLEVBQUUsbUJBQW1CO1FBQ2pELGtDQUFrQyxFQUFFLGdDQUFnQztRQUNwRSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFNBQVM7UUFDVCxnQ0FBZ0M7UUFDaEMsVUFBVTtRQUNWLFVBQVU7UUFDVixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsdUJBQXVCO01BQ3pCO01BQ0E7UUFDRSxXQUFXO1FBQ1gsYUFBYTtRQUNiLHdDQUE0RDtRQUM1RCxzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxufVxyXG4uYmFubmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmJhbm5lciBpbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDEuanBnJyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDA7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogODIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDA7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIHRleHQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgcGFnZS9pbWFnZSAqL1xyXG4uYmctdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC40KTsgLyogQmxhY2sgdy9vcGFjaXR5L3NlZS10aHJvdWdoICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiBcclxuICBcclxuICBAa2V5ZnJhbWVzIG15bW92ZSB7XHJcbiAgICBmcm9tIHt0b3A6IDkwJTt9XHJcbiAgICB0byB7dG9wOiA5NSU7fVxyXG4gIH1cclxuICAuYXJyb3cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYW5pbWF0aW9uOiBteW1vdmUgNXMgaW5maW5pdGU7XHJcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDZzO1xyXG4gIH1cclxuICBcclxuLmRvd24ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIC5hcnJvdzpob3ZlcntcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICB9XHJcbiBcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogRm9yIHRhYmxldDogKi9cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDYwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDEwcHggIzAwMDAwMDtcclxuICAgIH1cclxuICAgIC5hcnJvdyB7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNzUlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCA2cztcclxuICAgICAgICBhbmltYXRpb246IG15bW92ZXQgNXMgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBteW1vdmV0IHtcclxuICAgICAgICBmcm9tIHt0b3A6IDc1JTt9XHJcbiAgICAgICAgdG8ge3RvcDogODAlO31cclxuICAgICAgfVxyXG4gICAgICAuYmctdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpOyAvKiBCbGFjayB3L29wYWNpdHkvc2VlLXRocm91Z2ggKi9cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzMCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuICAgICAgLmJhbm5lciBpbWd7IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQyLmpwZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMzc1cHgpIFxyXG4gIGFuZCAobWluLWRldmljZS1oZWlnaHQgOiA4MTJweCkgYW5kIChtaW4tZGV2aWNlLWhlaWdodCA6IDgxMnB4KSBcclxuIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKSB7XHJcbiAgICAvKiBGb3IgcGhvbmU6ICovXHJcbiAgICBwe1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA3MCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAuYXJyb3cge1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDg1JTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggNnM7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBteW1vdmVwIDVzIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgbXltb3ZlcCB7XHJcbiAgICAgICAgZnJvbSB7dG9wOiA4NSU7fVxyXG4gICAgICAgIHRvIHt0b3A6IDkwJTt9XHJcbiAgICAgIH1cclxuICAgICAgLmJnLXRleHQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC40KTsgLyogQmxhY2sgdy9vcGFjaXR5L3NlZS10aHJvdWdoICovXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMjUlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgIC5iYW5uZXIgaW1neyBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kMi5qcGcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });
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
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 78, vars: 0, consts: [[1, "bg-dark", 2, "margin-top", "100vh"], [1, "d-flex", "bg-dark", "p-5", 2, "width", "80%", "margin-left", "auto", "margin-right", "auto"], ["src", "assets/images/profile.jpeg", 1, "rounded-circle"], [1, "boxInfo"], [1, "center"], [1, "boxInfo", "rounded", "center", 2, "width", "80%"], [1, "table", "table-striped", "center", "table-secondary", 2, "width", "80%"], [2, "border-bottom", "unset"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nativ Maatuk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Practical Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Self-learning and highly motivated to progress and develop professionally.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Work efficiently as part of a team.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Available immediately for a junior position in application development, software and Full Stack Web Development positions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "DB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "JAVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "phpMyAdmin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "NodeJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "MySql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "FireBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_1__["IntroductionComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".center[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.boxInfo[_ngcontent-%COMP%]{ \r\n    color: #fff;\r\n    width: 80%;\r\n    height: 70%;\r\n    padding: 2%;\r\n}\r\n.animation[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    animation-name: infoAnimation;\r\n    animation-duration: 4s;\r\n    animation-delay: -3s;\r\n    transition: box-shadow .3s;\r\n}\r\n@keyframes infoAnimation {\r\n    0%   { top:100%;}\r\n    25%  { top:75%;}\r\n    50%  { top:50%;}\r\n    75%  { top:25%;}\r\n    100% { top:0%;}\r\n  }\r\n.space[_ngcontent-%COMP%]{\r\n    margin-top: 3%;\r\n}\r\nli[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n}\r\n.back[_ngcontent-%COMP%]{\r\n  padding: 4%;\r\n  width: 100%;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n  width: 15%;\r\n  height: 15%;\r\n}\r\n.card-profile[_ngcontent-%COMP%]{\r\n  padding: 2%;\r\n  width: 25%;\r\n  margin-left: auto;\r\n  margin-right: auto  ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsMEJBQTBCO0FBQzlCO0FBRUU7SUFDRSxPQUFPLFFBQVEsQ0FBQztJQUNoQixPQUFPLE9BQU8sQ0FBQztJQUNmLE9BQU8sT0FBTyxDQUFDO0lBQ2YsT0FBTyxPQUFPLENBQUM7SUFDZixPQUFPLE1BQU0sQ0FBQztFQUNoQjtBQUNGO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0EsR0FBRyIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jZW50ZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uYm94SW5mb3sgXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uYW5pbWF0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGluZm9BbmltYXRpb247XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcclxufVxyXG5cclxuICBAa2V5ZnJhbWVzIGluZm9BbmltYXRpb24ge1xyXG4gICAgMCUgICB7IHRvcDoxMDAlO31cclxuICAgIDI1JSAgeyB0b3A6NzUlO31cclxuICAgIDUwJSAgeyB0b3A6NTAlO31cclxuICAgIDc1JSAgeyB0b3A6MjUlO31cclxuICAgIDEwMCUgeyB0b3A6MCU7fVxyXG4gIH1cclxuLnNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxubGl7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmJhY2t7XHJcbiAgcGFkZGluZzogNCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW1ne1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgaGVpZ2h0OiAxNSU7XHJcbn1cclxuLmNhcmQtcHJvZmlsZXtcclxuICBwYWRkaW5nOiAyJTtcclxuICB3aWR0aDogMjUlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0byAgO1xyXG59XHJcbi8qKi8iXX0= */"] });
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