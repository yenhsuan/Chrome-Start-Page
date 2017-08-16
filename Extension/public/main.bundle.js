webpackJsonp([1],{

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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home *ngIf=\"viewToDisplay == 'home'\"></app-home>\n<app-focus *ngIf=\"viewToDisplay == 'focus'\"></app-focus>\n<app-setting *ngIf=\"viewToDisplay == 'setting'\"></app-setting>\n<app-applications *ngIf=\"viewToDisplay == 'applications'\"></app-applications>\n<app-navbar></app-navbar>"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var AppComponent = (function () {
    function AppComponent(gcRouter) {
        this.gcRouter = gcRouter;
        this.viewToDisplay = 'home';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currView = this.gcRouter.subscribeCurrentView()
            .subscribe(function (view) {
            _this.viewToDisplay = view;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('gcRouter')),
    __metadata("design:paramtypes", [Object])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_focus_focus_component__ = __webpack_require__("../../../../../src/app/components/focus/focus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_applications_applications_component__ = __webpack_require__("../../../../../src/app/components/applications/applications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_setting_setting_component__ = __webpack_require__("../../../../../src/app/components/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_time_time_component__ = __webpack_require__("../../../../../src/app/components/time/time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_chrome_router_service__ = __webpack_require__("../../../../../src/app/services/chrome-router.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mousewheel_directive__ = __webpack_require__("../../../../../src/app/mousewheel.directive.ts");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_focus_focus_component__["a" /* FocusComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_applications_applications_component__["a" /* ApplicationsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_setting_setting_component__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_time_time_component__["a" /* TimeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__mousewheel_directive__["a" /* MouseWheelDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* Route */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaModule"]
        ],
        providers: [
            {
                provide: 'gcRouter',
                useClass: __WEBPACK_IMPORTED_MODULE_12__services_chrome_router_service__["a" /* ChromeRouterService */]
            },
            {
                provide: 'data',
                useClass: __WEBPACK_IMPORTED_MODULE_13__services_data_service__["a" /* DataService */]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_focus_focus_component__ = __webpack_require__("../../../../../src/app/components/focus/focus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_applications_applications_component__ = __webpack_require__("../../../../../src/app/components/applications/applications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_setting_setting_component__ = __webpack_require__("../../../../../src/app/components/setting/setting.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Route; });





var route = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'focus',
        component: __WEBPACK_IMPORTED_MODULE_2__components_focus_focus_component__["a" /* FocusComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'apps',
        component: __WEBPACK_IMPORTED_MODULE_3__components_applications_applications_component__["a" /* ApplicationsComponent */]
    },
    {
        path: 'setting',
        component: __WEBPACK_IMPORTED_MODULE_4__components_setting_setting_component__["a" /* SettingComponent */]
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];
var Route = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(route);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/applications/applications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/applications/applications.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  applications works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/applications/applications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicationsComponent = (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    return ApplicationsComponent;
}());
ApplicationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-applications',
        template: __webpack_require__("../../../../../src/app/components/applications/applications.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/applications/applications.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ApplicationsComponent);

//# sourceMappingURL=applications.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/focus/focus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/focus/focus.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  focus works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/focus/focus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FocusComponent = (function () {
    function FocusComponent() {
    }
    FocusComponent.prototype.ngOnInit = function () {
    };
    return FocusComponent;
}());
FocusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-focus',
        template: __webpack_require__("../../../../../src/app/components/focus/focus.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/focus/focus.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FocusComponent);

//# sourceMappingURL=focus.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".testBox {\n    text-align: center;\n\n    background-color: rgba(255,255,255,0.2);\n    min-width: 150px;\n    height: calc( (100vh - 130px)*0.25 );\n\n}\n\n.mainIconContainer {\n\n    position: fixed;\n    top: 50px;\n    bottom:80px;\n\n    margin-top: 0 !important;\n\n    width: 90vw;\n    margin-left:5vw;\n    margin-right:5vw;\n    min-width: 500px;\n    overflow-y: hidden;\n    overflow-x: hidden;\n\n    color:white;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: rgba(0,0,0,0.5);\n}\n\n.hide {\n    display: none !important;\n}\n\n[hidden] { \n    display: none !important; \n    max-height: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div mouseWheel class=\"mainIconContainer ui five column grid centered\" [dragula]='\"bag-one\"' (mouseWheelUp)=\"mouseWheelUpFunc(event)\" [hidden]=\" show!==1\" (mouseWheelDown)=\"mouseWheelDownFunc(event)\">\n  <div class=\"column \">\n    <div class=testBox>1</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>2</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>3</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>4</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>5</div>\n  </div>\n  \n  <div class=\"column \">\n    <div class=testBox>6</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>7</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>8</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>9</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>10</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>11</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>12</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>13</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>14</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>15</div>\n  </div>\n</div>\n\n<div mouseWheel class=\"mainIconContainer ui five column grid\" [dragula]='\"bag-one\"' (mouseWheelUp)=\"mouseWheelUpFunc(event)\" [hidden]=\" show !==2 \" (mouseWheelDown)=\"mouseWheelDownFunc(event)\">\n  <div class=\"column \">\n    <div class=testBox>a</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>b</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>3</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>4</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>5</div>\n  </div>\n  \n  <div class=\"column \">\n    <div class=testBox>6</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>7</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>8</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>9</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>10</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>11</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>12</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>13</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>14</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>15</div>\n  </div>\n</div>\n\n\n\n<div mouseWheel class=\"mainIconContainer ui five column grid\" [dragula]='\"bag-one\"' (mouseWheelUp)=\"mouseWheelUpFunc(event)\" [hidden]=\" show !==3 \" (mouseWheelDown)=\"mouseWheelDownFunc(event)\">\n  <div class=\"column \">\n    <div class=testBox>zz</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>zz</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>3</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>4</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>5</div>\n  </div>\n  \n  <div class=\"column \">\n    <div class=testBox>6</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>7</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>8</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>9</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>10</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>11</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>12</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>13</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>14</div>\n  </div>\n\n  <div class=\"column \">\n    <div class=testBox>15</div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(dragulaService) {
        this.dragulaService = dragulaService;
        this.show = 1;
        dragulaService.drop.subscribe(function (value) {
            console.log("drop: " + value[0]);
            console.log(value.slice(1));
            //this.onDrag(value.slice(1));
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.mouseWheelUpFunc = function () {
        if (this.show < 3) {
            this.show++;
        }
    };
    HomeComponent.prototype.mouseWheelDownFunc = function () {
        if (this.show > 1) {
            this.show--;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__["DragulaService"]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navMenu {\n  display: inline-block;\n  position: fixed;\n  bottom: 25px;\n  left: 50px;\n  padding: 10px;\n  border-radius: 20px; \n  \n  font-size: 20px;\n  background-color: rgba(0,0,0,0.7);\n  color: white;\n}\n\n.fa {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.sidebarTitle {\n  background: #4285f4 !important;\n  color: white !important;\n  text-align: center;\n}\n\n.navMenu i {\n  color: white;\n}\n\n.navMenu i:hover {\n  color: #4285f4;\n  cursor: pointer;\n}\n\n.favBtn:hover {\n  color: #fbbc05 !important;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navMenu\">\n\n  <i class=\"fa fa-star favBtn\" aria-hidden=\"true\" (click)=\"triggerFavPanel()\"></i>\n  <i class=\"fa fa-home\" aria-hidden=\"true\" (click)=\"this.gcRouter.navigateTo('home')\"></i>\n  <i class=\"fa fa-windows\" aria-hidden=\"true\" (click)=\"this.gcRouter.navigateTo('applications')\"></i>\n  <i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\" (click)=\"this.gcRouter.navigateTo('focus')\"></i>\n  <i class=\"fa fa-cog\" aria-hidden=\"true\" (click)=\"this.gcRouter.navigateTo('setting')\"></i>\n\n</div>\n\n<div class=\"ui sidebar menu vertical wide\">\n  <div class=\"item sidebarTitle\">\n    Bookmark\n  </div>\n\n  <a class=\"item\">\n    My Link 1\n  </a>\n  <a class=\"item\">\n    My Link 2\n  </a>\n  <a class=\"item\">\n    NO NO GAY BLUE\n  </a>\n</div>\n\n<div class=\"pusher\">\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var NavbarComponent = (function () {
    function NavbarComponent(gcRouter) {
        this.gcRouter = gcRouter;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.triggerFavPanel = function () {
        $('.ui.sidebar').sidebar('toggle');
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('gcRouter')),
    __metadata("design:paramtypes", [Object])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/setting/setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  setting works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingComponent = (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-setting',
        template: __webpack_require__("../../../../../src/app/components/setting/setting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/setting/setting.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingComponent);

//# sourceMappingURL=setting.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/time/time.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/time/time.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  time works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/time/time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeComponent = (function () {
    function TimeComponent() {
    }
    TimeComponent.prototype.ngOnInit = function () {
    };
    return TimeComponent;
}());
TimeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-time',
        template: __webpack_require__("../../../../../src/app/components/time/time.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/time/time.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TimeComponent);

//# sourceMappingURL=time.component.js.map

/***/ }),

/***/ "../../../../../src/app/mousewheel.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouseWheelDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouseWheelDirective = (function () {
    function MouseWheelDirective() {
        this.mouseWheelUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mouseWheelDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MouseWheelDirective.prototype.onMouseWheelChrome = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelFirefox = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.onMouseWheelIE = function (event) {
        this.mouseWheelFunc(event);
    };
    MouseWheelDirective.prototype.mouseWheelFunc = function (event) {
        event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        else if (delta < 0) {
            this.mouseWheelDown.emit(event);
        }
        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    };
    return MouseWheelDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MouseWheelDirective.prototype, "mouseWheelUp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MouseWheelDirective.prototype, "mouseWheelDown", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelChrome", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('DOMMouseScroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelFirefox", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('onmousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MouseWheelDirective.prototype, "onMouseWheelIE", null);
MouseWheelDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[mouseWheel]' })
], MouseWheelDirective);

//# sourceMappingURL=mousewheel.directive.js.map

/***/ }),

/***/ "../../../../../src/app/services/chrome-router.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChromeRouterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChromeRouterService = (function () {
    function ChromeRouterService() {
        this.currentView = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('home');
    }
    ChromeRouterService.prototype.subscribeCurrentView = function () {
        return this.currentView.asObservable();
    };
    ChromeRouterService.prototype.navigateTo = function (view) {
        this.currentView.next(view);
    };
    return ChromeRouterService;
}());
ChromeRouterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ChromeRouterService);

//# sourceMappingURL=chrome-router.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
    }
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map