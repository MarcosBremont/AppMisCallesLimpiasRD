(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_informate_informate_module_ts"], {
    /***/
    51525: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InformateService": function InformateService() {
          return (
            /* binding */
            _InformateService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _InformateService = /*#__PURE__*/function () {
        function InformateService(http) {
          _classCallCheck(this, InformateService);

          this.http = http;
        }

        _createClass(InformateService, [{
          key: "obtenerPostEducacionales",
          value: function obtenerPostEducacionales() {
            return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodePost');
          }
        }]);

        return InformateService;
      }();

      _InformateService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _InformateService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _InformateService);
      /***/
    },

    /***/
    58381: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InformatePageRoutingModule": function InformatePageRoutingModule() {
          return (
            /* binding */
            _InformatePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _informate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./informate.page */
      22975);

      var routes = [{
        path: '',
        component: _informate_page__WEBPACK_IMPORTED_MODULE_0__.InformatePage
      }];

      var _InformatePageRoutingModule = function InformatePageRoutingModule() {
        _classCallCheck(this, InformatePageRoutingModule);
      };

      _InformatePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InformatePageRoutingModule);
      /***/
    },

    /***/
    42368: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InformatePageModule": function InformatePageModule() {
          return (
            /* binding */
            _InformatePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _informate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./informate-routing.module */
      58381);
      /* harmony import */


      var _informate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./informate.page */
      22975);

      var _InformatePageModule = function InformatePageModule() {
        _classCallCheck(this, InformatePageModule);
      };

      _InformatePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _informate_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformatePageRoutingModule],
        declarations: [_informate_page__WEBPACK_IMPORTED_MODULE_1__.InformatePage]
      })], _InformatePageModule);
      /***/
    },

    /***/
    22975: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InformatePage": function InformatePage() {
          return (
            /* binding */
            _InformatePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_informate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./informate.page.html */
      91269);
      /* harmony import */


      var _informate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./informate.page.scss */
      50477);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _Services_informate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/informate.service */
      51525);

      var _InformatePage = /*#__PURE__*/function () {
        function InformatePage(servicio) {
          _classCallCheck(this, InformatePage);

          this.servicio = servicio;
        }

        _createClass(InformatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.servicio.obtenerPostEducacionales().subscribe(function (data) {
              _this.posteducacionales = data;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return InformatePage;
      }();

      _InformatePage.ctorParameters = function () {
        return [{
          type: _Services_informate_service__WEBPACK_IMPORTED_MODULE_2__.InformateService
        }];
      };

      _InformatePage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-informate',
        template: _raw_loader_informate_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_informate_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InformatePage);
      /***/
    },

    /***/
    50477: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvcm1hdGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    91269: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Informate</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n      <ion-toolbar>\r\n          <ion-title size=\"large\">Informate</ion-title>\r\n      </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content>\r\n\r\n      <ion-card *ngFor=\"let posteducacional of posteducacionales\" style=\"padding: 20px;\">\r\n          <ion-card-header>\r\n              <ion-card-title size=\"small\"><b>{{posteducacional.titulo}}</b></ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n              <img src={{posteducacional.imagen}}>\r\n              <ion-label class=\"centrarlabel\">{{posteducacional.descripcion}}</ion-label>\r\n              <br>\r\n              <br>\r\n              <label style=\"font-size: small;\"><b>{{posteducacional.fecha}}</b></label>\r\n          </ion-card-content>\r\n\r\n\r\n      </ion-card>\r\n  </ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_informate_informate_module_ts-es5.js.map