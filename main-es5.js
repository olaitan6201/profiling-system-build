function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.model.ts":
  /*!**************************************!*\
    !*** ./src/app/app-routing.model.ts ***!
    \**************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _clients_clients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./clients/clients.component */
    "./src/app/clients/clients.component.ts");
    /* harmony import */


    var _clients_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./clients/client-edit/client-edit.component */
    "./src/app/clients/client-edit/client-edit.component.ts");
    /* harmony import */


    var _clients_client_view_client_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./clients/client-view/client-view.component */
    "./src/app/clients/client-view/client-view.component.ts");
    /* harmony import */


    var _clients_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./clients/client-list/client-list.component */
    "./src/app/clients/client-list/client-list.component.ts");
    /* harmony import */


    var _clients_client_add_client_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./clients/client-add/client-add.component */
    "./src/app/clients/client-add/client-add.component.ts");

    var appRoutes = [{
      path: 'clients',
      component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_3__["ClientsComponent"],
      children: [{
        path: 'add',
        component: _clients_client_add_client_add_component__WEBPACK_IMPORTED_MODULE_7__["ClientAddComponent"]
      }, {
        path: 'edit/:id',
        component: _clients_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_4__["ClientEditComponent"]
      }, {
        path: 'view/:id',
        component: _clients_client_view_client_view_component__WEBPACK_IMPORTED_MODULE_5__["ClientViewComponent"]
      }, {
        path: 'list',
        component: _clients_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_6__["ClientListComponent"]
      }]
    }, {
      path: 'not-found',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
    }, {
      path: '',
      redirectTo: '/clients/add',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/not-found'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".container[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n}\r\n\r\n.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\tfont-weight: bold;\r\n\tcolor: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ubmF2LXRhYnMgbGkgYXtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _app_routing_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.model */
    "./src/app/app-routing.model.ts");
    /* harmony import */


    var angular_file_uploader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-file-uploader */
    "./node_modules/angular-file-uploader/__ivy_ngcc__/fesm2015/angular-file-uploader.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _clients_clients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./clients/clients.component */
    "./src/app/clients/clients.component.ts");
    /* harmony import */


    var _clients_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./clients/client-list/client-list.component */
    "./src/app/clients/client-list/client-list.component.ts");
    /* harmony import */


    var _clients_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./clients/client-edit/client-edit.component */
    "./src/app/clients/client-edit/client-edit.component.ts");
    /* harmony import */


    var _clients_client_view_client_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./clients/client-view/client-view.component */
    "./src/app/clients/client-view/client-view.component.ts");
    /* harmony import */


    var _clients_client_add_client_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./clients/client-add/client-add.component */
    "./src/app/clients/client-add/client-add.component.ts");
    /* harmony import */


    var _clients_clients_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./clients/clients.service */
    "./src/app/clients/clients.service.ts"); // import { HttpModule } from '@angular/http';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_clients_clients_service__WEBPACK_IMPORTED_MODULE_14__["ClientsService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_model__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_7__["AngularFileUploaderModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _clients_clients_component__WEBPACK_IMPORTED_MODULE_9__["ClientsComponent"], _clients_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_10__["ClientListComponent"], _clients_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_11__["ClientEditComponent"], _clients_client_view_client_view_component__WEBPACK_IMPORTED_MODULE_12__["ClientViewComponent"], _clients_client_add_client_add_component__WEBPACK_IMPORTED_MODULE_13__["ClientAddComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_model__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_7__["AngularFileUploaderModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _clients_clients_component__WEBPACK_IMPORTED_MODULE_9__["ClientsComponent"], _clients_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_10__["ClientListComponent"], _clients_client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_11__["ClientEditComponent"], _clients_client_view_client_view_component__WEBPACK_IMPORTED_MODULE_12__["ClientViewComponent"], _clients_client_add_client_add_component__WEBPACK_IMPORTED_MODULE_13__["ClientAddComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_model__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_7__["AngularFileUploaderModule"]],
          providers: [_clients_clients_service__WEBPACK_IMPORTED_MODULE_14__["ClientsService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/client-add/client-add.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/clients/client-add/client-add.component.ts ***!
    \************************************************************/

  /*! exports provided: ClientAddComponent */

  /***/
  function srcAppClientsClientAddClientAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientAddComponent", function () {
      return ClientAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../clients.service */
    "./src/app/clients/clients.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ClientAddComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter your first name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientAddComponent_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter your last name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientAddComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter a valid email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientAddComponent_span_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter your primary legal counsel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientAddComponent_span_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Date not set (consider retyping)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientAddComponent_span_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please select an image (not required)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientAddComponent_span_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter your case details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientAddComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r7.imageData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"])("alt", ctx_r7.addClientForm.value.name);
      }
    }

    var ClientAddComponent = /*#__PURE__*/function () {
      function ClientAddComponent(clService) {
        _classCallCheck(this, ClientAddComponent);

        this.clService = clService;
        this.today = this.clService.getDate();
      }

      _createClass(ClientAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addClientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'fname': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'lname': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'datec': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date().toDateString(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'plc': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            'casedetails': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          }); // console.log(this.getDate());
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var _this = this;

          var file = event.target.files[0];
          this.addClientForm.patchValue({
            image: file
          });
          var allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];

          if (file && allowedTypes.includes(file.type)) {
            var reader = new FileReader();

            reader.onload = function () {
              _this.imageData = reader.result;
            };

            reader.readAsDataURL(file);
          } else {
            alert('Unsupported image format');
            this.addClientForm.patchValue({
              'image': null
            });
            this.imageData = null;
          }
        }
      }, {
        key: "setDOB",
        value: function setDOB(event) {
          var dob = event.target.value;
          this.addClientForm.patchValue({
            'dob': dob
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.addClientForm.valid) {
            this.clService.addClient(this.addClientForm.value);
            alert('Client profiled');
            this.addClientForm.reset();
            this.imageData = '';
          } else {
            alert('Your information is not yet complete, please fill all required fields.');
          } // console.log(this.addClientForm.valid);

        }
      }]);

      return ClientAddComponent;
    }();

    ClientAddComponent.??fac = function ClientAddComponent_Factory(t) {
      return new (t || ClientAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"]));
    };

    ClientAddComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ClientAddComponent,
      selectors: [["app-client-add"]],
      decls: 53,
      vars: 9,
      consts: [[3, "formGroup", "ngSubmit"], [1, "card"], [1, "card-header", "bg-primary", "text-light"], [1, "fa", "fa-user-plus"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "fname"], ["type", "text", "required", "required", "formControlName", "fname", 1, "form-control"], [4, "ngIf"], ["for", "lname"], ["type", "text", "required", "required", "formControlName", "lname", 1, "form-control"], ["for", "mail"], ["type", "email", "required", "required", "formControlName", "email", 1, "form-control"], ["type", "text", "required", "required", "formControlName", "datec", "hidden", "", "readonly", "", 1, "form-control"], ["for", "plc"], ["type", "text", "required", "required", "formControlName", "plc", 1, "form-control"], ["for", "dob"], ["type", "date", "required", "required", "formControlName", "dob", 1, "form-control"], ["for", "image"], ["type", "file", 1, "form-control", 3, "change"], [1, "col-md-8"], ["type", "text", "required", "required", "rows", "5", "formControlName", "casedetails", 1, "form-control"], [1, "col-md-4"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", "btn-block"], [1, "img-thumbnail", 3, "src", "alt"]],
      template: function ClientAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ClientAddComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Add Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ClientAddComponent_span_13_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ClientAddComponent_span_18_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ClientAddComponent_span_23_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Primary Legal Counsel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, ClientAddComponent_span_30_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, ClientAddComponent_span_35_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ClientAddComponent_Template_input_change_39_listener($event) {
            return ctx.onFileSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, ClientAddComponent_span_40_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Case Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "textarea", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, ClientAddComponent_span_47_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, ClientAddComponent_div_49_Template, 2, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.addClientForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.addClientForm.get("fname").valid && ctx.addClientForm.get("fname").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.addClientForm.get("lname").valid && ctx.addClientForm.get("lname").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.addClientForm.get("email").valid && ctx.addClientForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.addClientForm.get("plc").valid && ctx.addClientForm.get("plc").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.addClientForm.get("dob").valid && ctx.addClientForm.get("dob").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.imageData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.addClientForm.get("casedetails").valid && ctx.addClientForm.get("casedetails").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.imageData);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]{\r\n    resize: none;\r\n}\r\n\r\nlabel[for][_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{\r\n    border: 1px solid red;\r\n}\r\n\r\ninput.ng-valid[_ngcontent-%COMP%], textarea.ng-valid[_ngcontent-%COMP%]{\r\n    border: 1px solid green;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9jbGllbnQtYWRkL2NsaWVudC1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1hZGQvY2xpZW50LWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyIGl7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbnRleHRhcmVhe1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG5sYWJlbFtmb3Jde1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCwgXHJcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuaW5wdXQubmctdmFsaWQsIFxyXG50ZXh0YXJlYS5uZy12YWxpZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG5zcGFue1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-add',
          templateUrl: './client-add.component.html',
          styleUrls: ['./client-add.component.css']
        }]
      }], function () {
        return [{
          type: _clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/client-edit/client-edit.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/clients/client-edit/client-edit.component.ts ***!
    \**************************************************************/

  /*! exports provided: ClientEditComponent */

  /***/
  function srcAppClientsClientEditClientEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientEditComponent", function () {
      return ClientEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../clients.service */
    "./src/app/clients/clients.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ClientEditComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter your first name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientEditComponent_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter your last name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientEditComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter a valid email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientEditComponent_span_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter your primary legal counsel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientEditComponent_span_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Date not set (consider retyping)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientEditComponent_span_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please select an image (not required)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientEditComponent_span_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Please enter your case details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function ClientEditComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r7.imageData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"])("alt", ctx_r7.editClientForm.value.name);
      }
    }

    var ClientEditComponent = /*#__PURE__*/function () {
      function ClientEditComponent(clService, route) {
        _classCallCheck(this, ClientEditComponent);

        this.clService = clService;
        this.route = route;
        this.imageData = '';
      }

      _createClass(ClientEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.editClientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'fname': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'lname': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'plc': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            'casedetails': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.clientid = this.route.snapshot.params['id'];
          this.clService.getClient(this.clientid);
          this.clService.fetchClient.subscribe(function (client) {
            _this2.client = client;

            if (_this2.client[0].image) {
              _this2.imageData = _this2.client[0].image.toString();
            }

            _this2.editClientForm.setValue({
              'fname': _this2.client[0].fname,
              'lname': _this2.client[0].lname,
              'email': _this2.client[0].email,
              'plc': _this2.client[0].plc,
              'dob': _this2.client[0].dob,
              'image': null,
              'casedetails': _this2.client[0].casedetails
            });
          });
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var _this3 = this;

          var file = event.target.files[0];
          this.editClientForm.patchValue({
            image: file
          });
          var allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];

          if (file && allowedTypes.includes(file.type)) {
            var reader = new FileReader();

            reader.onload = function () {
              _this3.imageData = reader.result;
            };

            reader.readAsDataURL(file);
          } else {
            alert('Unsupported image format');
            this.editClientForm.patchValue({
              'image': null
            });
            this.imageData = null;
          }
        }
      }, {
        key: "setDOB",
        value: function setDOB(event) {
          var dob = event.target.value;
          this.editClientForm.patchValue({
            'dob': dob
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.editClientForm.valid) {
            this.clService.updateClient(this.editClientForm.value, this.clientid);
            alert('Client Data Updated');
          } else {
            alert('Your information is not yet complete, please fill all required fields.');
          }
        }
      }]);

      return ClientEditComponent;
    }();

    ClientEditComponent.??fac = function ClientEditComponent_Factory(t) {
      return new (t || ClientEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_clients_service__WEBPACK_IMPORTED_MODULE_3__["ClientsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    ClientEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ClientEditComponent,
      selectors: [["app-client-edit"]],
      decls: 52,
      vars: 9,
      consts: [[3, "formGroup", "ngSubmit"], [1, "card"], [1, "card-header", "bg-primary", "text-light"], [1, "fa", "fa-edit"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "fname"], ["type", "text", "required", "required", "formControlName", "fname", 1, "form-control"], [4, "ngIf"], ["for", "lname"], ["type", "text", "required", "required", "formControlName", "lname", 1, "form-control"], ["for", "mail"], ["type", "email", "required", "required", "formControlName", "email", 1, "form-control"], ["for", "plc"], ["type", "text", "required", "required", "formControlName", "plc", 1, "form-control"], ["for", "dob"], ["type", "date", "required", "required", "formControlName", "dob", 1, "form-control"], ["for", "image"], ["type", "file", 1, "form-control", 3, "change"], [1, "col-md-8"], ["type", "text", "required", "required", "rows", "5", "formControlName", "casedetails", 1, "form-control"], [1, "col-md-4"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-outline-primary", "btn-sm", "btn-block"], [1, "img-thumbnail", 3, "src", "alt"]],
      template: function ClientEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ClientEditComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Update Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ClientEditComponent_span_13_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ClientEditComponent_span_18_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, ClientEditComponent_span_23_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Primary Legal Counsel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ClientEditComponent_span_29_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, ClientEditComponent_span_34_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ClientEditComponent_Template_input_change_38_listener($event) {
            return ctx.onFileSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, ClientEditComponent_span_39_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Case Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "textarea", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, ClientEditComponent_span_46_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, ClientEditComponent_div_48_Template, 2, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.editClientForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.editClientForm.get("fname").valid && ctx.editClientForm.get("fname").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.editClientForm.get("lname").valid && ctx.editClientForm.get("lname").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.editClientForm.get("email").valid && ctx.editClientForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.editClientForm.get("plc").valid && ctx.editClientForm.get("plc").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.editClientForm.get("dob").valid && ctx.editClientForm.get("dob").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.imageData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.editClientForm.get("casedetails").valid && ctx.editClientForm.get("casedetails").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.imageData);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 24px;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]{\r\n    resize: none;\r\n}\r\n\r\nlabel[for][_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{\r\n    border: 1px solid red;\r\n}\r\n\r\ninput.ng-valid[_ngcontent-%COMP%], textarea.ng-valid[_ngcontent-%COMP%]{\r\n    border: 1px solid green;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZWRpdC9jbGllbnQtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWVkaXQvY2xpZW50LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlciBpe1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxubGFiZWxbZm9yXXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsIFxyXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbmlucHV0Lm5nLXZhbGlkLCBcclxudGV4dGFyZWEubmctdmFsaWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-edit',
          templateUrl: './client-edit.component.html',
          styleUrls: ['./client-edit.component.css']
        }]
      }], function () {
        return [{
          type: _clients_service__WEBPACK_IMPORTED_MODULE_3__["ClientsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/client-list/client-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/clients/client-list/client-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: ClientListComponent */

  /***/
  function srcAppClientsClientListClientListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientListComponent", function () {
      return ClientListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../clients.service */
    "./src/app/clients/clients.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["search"];

    function ClientListComponent_tr_30_img_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "img", 20);
      }

      if (rf & 2) {
        var client_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", client_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"])("alt", client_r2.fname);
      }
    }

    function ClientListComponent_tr_30_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "em", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "No Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return [a0];
    };

    function ClientListComponent_tr_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, ClientListComponent_tr_30_img_12_Template, 1, 2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ClientListComponent_tr_30_ng_template_13_Template, 3, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var client_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r3 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", client_r2.fname, " ", client_r2.lname, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r2.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r2.plc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r2.dob);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", client_r2.image)("ngIfElse", _r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r2.datec);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c1, "/clients/view/" + client_r2._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c1, "/clients/edit/" + client_r2._id));
      }
    }

    var ClientListComponent = /*#__PURE__*/function () {
      function ClientListComponent(clService) {
        _classCallCheck(this, ClientListComponent);

        this.clService = clService;
        this.submitAction = '';
      }

      _createClass(ClientListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.clService.getClientsByAPI(); // this.clients = this.clService.getClients();

          this.clService.addToClients.subscribe(function (clients) {
            _this4.clients = clients;
          });
          this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'search': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // console.log(this.searchForm.value.search);
          var searchvalue = this.searchForm.value.search;
          this.clients = this.clService.filterClients(searchvalue);
          this.searchForm.setValue({
            search: ''
          });
        }
      }, {
        key: "reloadTable",
        value: function reloadTable() {
          this.clients = this.clService.getClients();
        }
      }]);

      return ClientListComponent;
    }();

    ClientListComponent.??fac = function ClientListComponent_Factory(t) {
      return new (t || ClientListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_clients_service__WEBPACK_IMPORTED_MODULE_3__["ClientsService"]));
    };

    ClientListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ClientListComponent,
      selectors: [["app-client-list"]],
      viewQuery: function ClientListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.searchOption = _t.first);
        }
      },
      decls: 31,
      vars: 2,
      consts: [[3, "formGroup", "ngSubmit"], [1, "pull-right"], ["type", "search", "formControlName", "search", "placeholder", "Search by Last Name. . .", 1, "form-control"], ["search", ""], ["type", "submit", "hidden", ""], [1, "pull-left"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-sm", 3, "click"], [1, "fa", "fa-history"], [1, "table-responsive"], [1, "table", "table-hover", "table-striped"], [1, "bg-primary", "text-light"], ["colspan", "2"], [4, "ngFor", "ngForOf"], ["class", "img-fluid", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["noImage", ""], [3, "routerLink"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm"], [1, "fa", "fa-eye"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-sm"], [1, "fa", "fa-edit"], [1, "img-fluid", 3, "src", "alt"], [1, "text-center"], [1, "text-danger"]],
      template: function ClientListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ClientListComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ClientListComponent_Template_button_click_6_listener() {
            return ctx.reloadTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Reload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "thead", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Primary Legal Counsel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Date Profiled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, ClientListComponent_tr_30_Template, 25, 15, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.searchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.clients);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWxpc3QvY2xpZW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-list',
          templateUrl: './client-list.component.html',
          styleUrls: ['./client-list.component.css']
        }]
      }], function () {
        return [{
          type: _clients_service__WEBPACK_IMPORTED_MODULE_3__["ClientsService"]
        }];
      }, {
        searchOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['search']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/clients/client-view/client-view.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/clients/client-view/client-view.component.ts ***!
    \**************************************************************/

  /*! exports provided: ClientViewComponent */

  /***/
  function srcAppClientsClientViewClientViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientViewComponent", function () {
      return ClientViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../clients.service */
    "./src/app/clients/clients.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ClientViewComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Client's Data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Client's Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Client's Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Client's DOB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Date Profiled");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Primary Legal Counsel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Case details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " Print ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var client_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", client_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"])("alt", client_r1.fname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", client_r1.fname, " ", client_r1.lname, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.dob);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.datec);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.plc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](client_r1.casedetails);
      }
    }

    var ClientViewComponent = /*#__PURE__*/function () {
      function ClientViewComponent(clService, route) {
        _classCallCheck(this, ClientViewComponent);

        this.clService = clService;
        this.route = route;
        this.client = [];
      }

      _createClass(ClientViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.clientid = this.route.snapshot.params['id'];
          this.clService.getClient(this.clientid);
          this.clService.fetchClient.subscribe(function (client) {
            _this5.client = client;
          });
        }
      }]);

      return ClientViewComponent;
    }();

    ClientViewComponent.??fac = function ClientViewComponent_Factory(t) {
      return new (t || ClientViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_clients_service__WEBPACK_IMPORTED_MODULE_1__["ClientsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ClientViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ClientViewComponent,
      selectors: [["app-client-view"]],
      decls: 1,
      vars: 1,
      consts: [["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], [1, "text-center"], [1, "img-thumbnail", 2, "max-height", "300px", "max-width", "280px", "min-height", "300px", "min-width", "280px", 3, "src", "alt"], ["width", "100%", "cellpadding", "10", 1, "table-bordered"], [1, "text-center", "view"], ["href", "javascript:print()", 1, "btn", "btn-outline-primary"], [1, "fa", "fa-print"]],
      template: function ClientViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ClientViewComponent_div_0_Template, 42, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.client);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LXZpZXcvY2xpZW50LXZpZXcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-client-view',
          templateUrl: './client-view.component.html',
          styleUrls: ['./client-view.component.css']
        }]
      }], function () {
        return [{
          type: _clients_service__WEBPACK_IMPORTED_MODULE_1__["ClientsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/clients/clients.component.ts ***!
    \**********************************************/

  /*! exports provided: ClientsComponent */

  /***/
  function srcAppClientsClientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsComponent", function () {
      return ClientsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _clients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./clients.service */
    "./src/app/clients/clients.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ClientsComponent = /*#__PURE__*/function () {
      function ClientsComponent(clService, route) {
        _classCallCheck(this, ClientsComponent);

        this.clService = clService;
        this.route = route;
        this.client = [];
      }

      _createClass(ClientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.clientid = this.route.snapshot.params['id'];
          this.clService.getClient(this.clientid);
          this.clService.fetchClient.subscribe(function (client) {
            _this6.client = client;
          });
        }
      }]);

      return ClientsComponent;
    }();

    ClientsComponent.??fac = function ClientsComponent_Factory(t) {
      return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_clients_service__WEBPACK_IMPORTED_MODULE_1__["ClientsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ClientsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ClientsComponent,
      selectors: [["app-clients"]],
      decls: 15,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-4", "view"], [1, "list-group"], ["routerLink", "/clients/add", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action"], ["routerLink", "/clients/list", "routerLinkActive", "active", 1, "list-group-item", "list-group-item-action"], ["routerLink", "/clients/view", "routerLinkActive", "active", "href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "list-group-item", "list-group-item-action", "disabled"], ["routerLink", "/clients/edit", "routerLinkActive", "active", "href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "list-group-item", "list-group-item-action", "disabled"], [1, "col-md-8"]],
      template: function ClientsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Add Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Clients' List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Client's Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Update Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\r\n@media print{\r\n    .view{\r\n        display: none;\r\n        visibility: hidden;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgcHJpbnR7XHJcbiAgICAudmlld3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients',
          templateUrl: './clients.component.html',
          styleUrls: ['./clients.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _clients_service__WEBPACK_IMPORTED_MODULE_1__["ClientsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/clients/clients.service.ts":
  /*!********************************************!*\
    !*** ./src/app/clients/clients.service.ts ***!
    \********************************************/

  /*! exports provided: ClientsService */

  /***/
  function srcAppClientsClientsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsService", function () {
      return ClientsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ClientsService = /*#__PURE__*/function () {
      function ClientsService(http) {
        _classCallCheck(this, ClientsService);

        this.http = http;
        this.clients = [];
        this.client = [];
        this.addToClients = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.fetchClient = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(ClientsService, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getClientsByAPI();
        }
      }, {
        key: "getClients",
        value: function getClients() {
          return this.clients.slice();
        }
      }, {
        key: "getClient",
        value: function getClient(id) {
          var _this7 = this;

          this.http.get('http://localhost:3000/api/clients/fetch/' + id).subscribe(function (clientData) {
            _this7.client = clientData.clients;

            _this7.fetchClient.next(_toConsumableArray(_this7.client));
          });
        }
      }, {
        key: "filterClients",
        value: function filterClients(value) {
          var filteredClients = [];

          var _iterator = _createForOfIteratorHelper(this.clients),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var client = _step.value;

              if (client.lname === value) {
                filteredClients.push(client);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return filteredClients;
        }
      }, {
        key: "getClientsByAPI",
        value: function getClientsByAPI() {
          var _this8 = this;

          this.http.get('http://localhost:3000/api/clients/fetch').subscribe(function (clientData) {
            _this8.clients = clientData.clients;

            _this8.addToClients.next(_toConsumableArray(_this8.clients));
          });
        } // addClient(newClient){
        //     var headers = new HttpHeaders();
        //     headers.append('Content-Type', 'application-json');
        //     return this.http.post('http://localhost:3000/api/clients/add', newClient, {headers: headers})
        //     .map((res: Response) => res.json());
        // }

      }, {
        key: "deleteClient",
        value: function deleteClient(id) {
          return this.http["delete"]('http://localhost:3000/api/clients/delete/' + id).map(function (res) {
            return res.json();
          });
        }
      }, {
        key: "addClient",
        value: function addClient(client) {
          var _this9 = this;

          var clientData = new FormData();
          clientData.append("fname", client.fname);
          clientData.append("lname", client.lname);
          clientData.append("email", client.email);
          clientData.append("datec", client.datec);
          clientData.append("dob", client.dob);
          clientData.append("plc", client.plc);
          clientData.append("casedetails", client.casedetails);

          if (client.image) {
            clientData.append("image", client.image);
            this.http.post("http://localhost:3000/api/clients/add/image", clientData).subscribe(function (clientData) {
              var client = {
                _id: clientData.client._id,
                fname: clientData.client.fname,
                lname: clientData.client.lname,
                email: clientData.client.email,
                dob: clientData.client.dob,
                datec: clientData.client.datec,
                casedetails: clientData.client.casedetails,
                plc: clientData.client.plc,
                image: clientData.client.image
              };

              _this9.clients.push(client);

              _this9.addToClients.next(_toConsumableArray(_this9.clients));
            });
          } else {
            this.http.post("http://localhost:3000/api/clients/add", client).subscribe(function (clientData) {
              var client = {
                _id: clientData.client._id,
                fname: clientData.client.fname,
                lname: clientData.client.lname,
                email: clientData.client.email,
                dob: clientData.client.dob,
                datec: clientData.client.datec,
                casedetails: clientData.client.casedetails,
                plc: clientData.client.plc,
                image: clientData.client.image
              };

              _this9.clients.push(client);

              _this9.addToClients.next(_toConsumableArray(_this9.clients));
            });
          }
        }
      }, {
        key: "updateClient",
        value: function updateClient(client, id) {
          var clientData = new FormData();
          clientData.append("fname", client.fname);
          clientData.append("lname", client.lname);
          clientData.append("email", client.email);
          clientData.append("dob", client.dob);
          clientData.append("plc", client.plc);
          clientData.append("casedetails", client.casedetails);

          if (client.image) {
            clientData.append("image", client.image);
            this.http.put("http://localhost:3000/api/clients/updateWithImage/" + id, clientData).subscribe(function (clientData) {
              if (clientData.msg === 'success') {
                return 'success';
              } else {
                return 'failed';
              }
            });
          } else {
            this.http.put("http://localhost:3000/api/clients/update/" + id, client).subscribe(function (clientData) {
              if (clientData.msg === 'success') {
                return 'success';
              } else {
                return 'failed';
              }
            });
          }
        }
      }, {
        key: "getDate",
        value: function getDate() {
          var today = new Date().toDateString();
          return today;
        }
      }]);

      return ClientsService;
    }();

    ClientsService.??fac = function ClientsService_Factory(t) {
      return new (t || ClientsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    ClientsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: ClientsService,
      factory: ClientsService.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/clients/add"];
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.??fac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 12,
      vars: 4,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary"], [1, "navbar-brand", "font-weight-bold", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink"], [1, "sr-only"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Law Firm X (Profiling System)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.??fac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      consts: [[1, "text-danger", "text-center"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "This page was not found...!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\olait\OneDrive\Desktop\projects\angular\Profiling-System\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map