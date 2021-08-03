(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_sobre-nosotros_sobre-nosotros_module_ts"], {
    /***/
    98769: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SobrenosotrosService": function SobrenosotrosService() {
          return (
            /* binding */
            _SobrenosotrosService
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

      var _SobrenosotrosService = /*#__PURE__*/function () {
        function SobrenosotrosService(http) {
          _classCallCheck(this, SobrenosotrosService);

          this.http = http;
        }

        _createClass(SobrenosotrosService, [{
          key: "obtenerDatosSobreNosotros",
          value: function obtenerDatosSobreNosotros() {
            return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarInfSobreNosotros');
          }
        }]);

        return SobrenosotrosService;
      }();

      _SobrenosotrosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _SobrenosotrosService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _SobrenosotrosService);
      /***/
    },

    /***/
    78437: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SobreNosotrosPageRoutingModule": function SobreNosotrosPageRoutingModule() {
          return (
            /* binding */
            _SobreNosotrosPageRoutingModule
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


      var _sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sobre-nosotros.page */
      3541);

      var routes = [{
        path: '',
        component: _sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_0__.SobreNosotrosPage
      }];

      var _SobreNosotrosPageRoutingModule = function SobreNosotrosPageRoutingModule() {
        _classCallCheck(this, SobreNosotrosPageRoutingModule);
      };

      _SobreNosotrosPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SobreNosotrosPageRoutingModule);
      /***/
    },

    /***/
    89669: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SobreNosotrosPageModule": function SobreNosotrosPageModule() {
          return (
            /* binding */
            _SobreNosotrosPageModule
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


      var _sobre_nosotros_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sobre-nosotros-routing.module */
      78437);
      /* harmony import */


      var _sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sobre-nosotros.page */
      3541);

      var _SobreNosotrosPageModule = function SobreNosotrosPageModule() {
        _classCallCheck(this, SobreNosotrosPageModule);
      };

      _SobreNosotrosPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _sobre_nosotros_routing_module__WEBPACK_IMPORTED_MODULE_0__.SobreNosotrosPageRoutingModule],
        declarations: [_sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_1__.SobreNosotrosPage]
      })], _SobreNosotrosPageModule);
      /***/
    },

    /***/
    3541: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SobreNosotrosPage": function SobreNosotrosPage() {
          return (
            /* binding */
            _SobreNosotrosPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_sobre_nosotros_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./sobre-nosotros.page.html */
      96729);
      /* harmony import */


      var _sobre_nosotros_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sobre-nosotros.page.scss */
      51933);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _Services_sobrenosotros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/sobrenosotros.service */
      98769);

      var _SobreNosotrosPage = /*#__PURE__*/function () {
        function SobreNosotrosPage(servicio) {
          _classCallCheck(this, SobreNosotrosPage);

          this.servicio = servicio;
        }

        _createClass(SobreNosotrosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.servicio.obtenerDatosSobreNosotros().subscribe(function (data) {
              _this.sobrenosotros = data;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return SobreNosotrosPage;
      }();

      _SobreNosotrosPage.ctorParameters = function () {
        return [{
          type: _Services_sobrenosotros_service__WEBPACK_IMPORTED_MODULE_2__.SobrenosotrosService
        }];
      };

      _SobreNosotrosPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sobre-nosotros',
        template: _raw_loader_sobre_nosotros_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sobre_nosotros_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SobreNosotrosPage);
      /***/
    },

    /***/
    51933: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".css-button {\n  width: 150px;\n  margin: auto;\n  font-family: Arial;\n  color: #FFFFFF;\n  font-size: 15px;\n  border-radius: 26px;\n  border: 3px #248946 solid;\n  background: linear-gradient(180deg, #24cc64 5%, #24cc64 100%);\n  text-shadow: 0px 1px 1px #528ecc;\n  box-shadow: inset 3px -9px 39px -20px rgba(36, 204, 100, 0.54);\n  cursor: pointer;\n  display: block;\n  align-items: center;\n  padding: 10px;\n  text-align: center;\n}\n\n.css-button:hover {\n  background: linear-gradient(180deg, #24cc64 5%, #24cc64 100%);\n}\n\n.css-button-icon {\n  padding: 2px;\n  border-right: 1px solid rgba(255, 255, 255, 0.16);\n}\n\n.css-button-icon i {\n  position: relative;\n  font-size: 33px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvYnJlLW5vc290cm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBRUgsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2REFBQTtFQUNBLGdDQUFBO0VBQ0EsOERBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0csYUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDQyw2REFBQTtBQUNEOztBQUNBO0VBQ0MsWUFBQTtFQUNBLGlEQUFBO0FBRUQ7O0FBQUE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUFHRCIsImZpbGUiOiJzb2JyZS1ub3NvdHJvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3NzLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMjZweDtcclxuXHRib3JkZXI6IDNweCAjMjQ4OTQ2IHNvbGlkO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyNGNjNjQgNSUsICMyNGNjNjQgMTAwJSk7XHJcblx0dGV4dC1zaGFkb3c6IDBweCAxcHggMXB4ICM1MjhlY2M7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgM3B4IC05cHggMzlweCAtMjBweCByZ2JhKDM2LCAyMDQsIDEwMCwgMC41NCk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jc3MtYnV0dG9uOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjRjYzY0IDUlLCAjMjRjYzY0IDEwMCUpO1xyXG59XHJcbi5jc3MtYnV0dG9uLWljb24ge1xyXG5cdHBhZGRpbmc6IDJweDtcclxuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpO1xyXG59XHJcbi5jc3MtYnV0dG9uLWljb24gaSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGZvbnQtc2l6ZTogMzNweDtcclxufVxyXG4vLyAuY3NzLWJ1dHRvbi10ZXh0IHtcclxuLy8gXHRwYWRkaW5nOiAxM3B4IDExcHg7XHJcbi8vIH1cclxuLy8gLmNzcy1idXR0b24tdGV4dCBzcGFue1xyXG4vLyBcdGRpc3BsYXk6IGJsb2NrO1xyXG4vLyBcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gXHRsZWZ0OiAtNnB4O1xyXG4vLyB9XHJcbiJdfQ== */";
      /***/
    },

    /***/
    96729: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Sobre Nosotros</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div id=\"container\" *ngFor=\"let datossobrenosotros of sobrenosotros\">\r\n\r\n          <ion-card-header>\r\n              <ion-card-title class=\"ion-card-nosotros\"></ion-card-title>\r\n          </ion-card-header>\r\n  <div class=\"contenedor\">\r\n          <ion-card-content>\r\n\r\n      \r\n                  \r\n              <div class=\"ion-text-justify nosotros\" >\r\n                  <ion-label>{{datossobrenosotros.descripciondelaapp}}</ion-label> <br>\r\n                  <br>\r\n              </div>\r\n              <div class=\"ion-text-center nosotros--contenido\">\r\n                  <img width=\"200px\" src=\"assets/imagenes/Marcos.jpeg\">\r\n                  <br>\r\n                  <ion-label class=\"nosotros--contenido__label\">{{datossobrenosotros.nombrepersona1}}</ion-label>\r\n                  <br>\r\n                  <ion-label>{{datossobrenosotros.ocupacionpersona1}}</ion-label>\r\n                  <br>\r\n                  <ion-label class=\"nosotros--contenido__label\">{{datossobrenosotros.emailpersona1}}</ion-label>\r\n                  <br>\r\n                  <br>\r\n                  <br>\r\n\r\n\r\n                  <img width=\"200px\" src=\"assets/imagenes/adderlis.jpeg\">\r\n                  <br>\r\n                  <ion-label><strong>{{datossobrenosotros.nombrepersona2}}</strong></ion-label>\r\n                  <br>\r\n                  <ion-label>{{datossobrenosotros.ocupacionpersona2}}</ion-label>\r\n                  <br>\r\n                  <ion-label class=\"nosotros--contenido__label\">{{datossobrenosotros.emailpersona2}}</ion-label>\r\n                  <br>\r\n                  <br>\r\n                  <br>\r\n\r\n                  <img width=\"200px\" src=\"assets/imagenes/Emmanuel.jpeg\">\r\n                  <br>\r\n                  <ion-label><strong>{{datossobrenosotros.nombrepersona3}}</strong></ion-label>\r\n                  <br>\r\n                  <ion-label>{{datossobrenosotros.ocupacionpersona3}}</ion-label>\r\n                  <br>\r\n                  <ion-label class=\"nosotros--contenido__label\">{{datossobrenosotros.emailpersona3}}</ion-label>\r\n                  <br>\r\n                  <br>\r\n                  <br>\r\n              </div>\r\n\r\n\r\n          \r\n\r\n          </ion-card-content>\r\n  </div>\r\n  <!-- <div style=\"padding: 10px;\">\r\n\r\n      <a class=\"css-button\" href=\"https://wa.me/18099073244\" >\r\n          <span class=\"css-button-icon\"><img src=\"assets/imagenes/whatsapp24.png\" aria-hidden=\"true\"/></span>\r\n          <span class=\"css-button-text\"><span>Contactanos</span></span>\r\n        </a>\r\n        \r\n    </div> -->\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_sobre-nosotros_sobre-nosotros_module_ts-es5.js.map