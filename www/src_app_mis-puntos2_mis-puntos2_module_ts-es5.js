(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_mis-puntos2_mis-puntos2_module_ts"], {
    /***/
    88363: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisPuntos2PageRoutingModule": function MisPuntos2PageRoutingModule() {
          return (
            /* binding */
            _MisPuntos2PageRoutingModule
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


      var _mis_puntos2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mis-puntos2.page */
      31830);

      var routes = [{
        path: '',
        component: _mis_puntos2_page__WEBPACK_IMPORTED_MODULE_0__.MisPuntos2Page
      }];

      var _MisPuntos2PageRoutingModule = function MisPuntos2PageRoutingModule() {
        _classCallCheck(this, MisPuntos2PageRoutingModule);
      };

      _MisPuntos2PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MisPuntos2PageRoutingModule);
      /***/
    },

    /***/
    36648: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisPuntos2PageModule": function MisPuntos2PageModule() {
          return (
            /* binding */
            _MisPuntos2PageModule
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


      var _mis_puntos2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mis-puntos2-routing.module */
      88363);
      /* harmony import */


      var _mis_puntos2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mis-puntos2.page */
      31830);

      var _MisPuntos2PageModule = function MisPuntos2PageModule() {
        _classCallCheck(this, MisPuntos2PageModule);
      };

      _MisPuntos2PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mis_puntos2_routing_module__WEBPACK_IMPORTED_MODULE_0__.MisPuntos2PageRoutingModule],
        declarations: [_mis_puntos2_page__WEBPACK_IMPORTED_MODULE_1__.MisPuntos2Page]
      })], _MisPuntos2PageModule);
      /***/
    },

    /***/
    31830: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisPuntos2Page": function MisPuntos2Page() {
          return (
            /* binding */
            _MisPuntos2Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_mis_puntos2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mis-puntos2.page.html */
      89697);
      /* harmony import */


      var _mis_puntos2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mis-puntos2.page.scss */
      97806);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _Services_mispuntos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/mispuntos.service */
      59283);

      var _MisPuntos2Page = /*#__PURE__*/function () {
        function MisPuntos2Page(servicio) {
          _classCallCheck(this, MisPuntos2Page);

          this.servicio = servicio;
        }

        _createClass(MisPuntos2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("Entreeee a mis puntos2 ");
          }
        }]);

        return MisPuntos2Page;
      }();

      _MisPuntos2Page.ctorParameters = function () {
        return [{
          type: _Services_mispuntos_service__WEBPACK_IMPORTED_MODULE_2__.MispuntosService
        }];
      };

      _MisPuntos2Page = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-mis-puntos2',
        template: _raw_loader_mis_puntos2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mis_puntos2_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MisPuntos2Page);
      /***/
    },

    /***/
    97806: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXMtcHVudG9zMi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    89697: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>MisPuntos2</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_mis-puntos2_mis-puntos2_module_ts-es5.js.map