(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_recibos-bonos_recibos-bonos_module_ts"], {
    /***/
    59182: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecibosBonosPageRoutingModule": function RecibosBonosPageRoutingModule() {
          return (
            /* binding */
            _RecibosBonosPageRoutingModule
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


      var _recibos_bonos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./recibos-bonos.page */
      25317);

      var routes = [{
        path: '',
        component: _recibos_bonos_page__WEBPACK_IMPORTED_MODULE_0__.RecibosBonosPage
      }];

      var _RecibosBonosPageRoutingModule = function RecibosBonosPageRoutingModule() {
        _classCallCheck(this, RecibosBonosPageRoutingModule);
      };

      _RecibosBonosPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RecibosBonosPageRoutingModule);
      /***/
    },

    /***/
    66942: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecibosBonosPageModule": function RecibosBonosPageModule() {
          return (
            /* binding */
            _RecibosBonosPageModule
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


      var _recibos_bonos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./recibos-bonos-routing.module */
      59182);
      /* harmony import */


      var _recibos_bonos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./recibos-bonos.page */
      25317);

      var _RecibosBonosPageModule = function RecibosBonosPageModule() {
        _classCallCheck(this, RecibosBonosPageModule);
      };

      _RecibosBonosPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _recibos_bonos_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecibosBonosPageRoutingModule],
        declarations: [_recibos_bonos_page__WEBPACK_IMPORTED_MODULE_1__.RecibosBonosPage]
      })], _RecibosBonosPageModule);
      /***/
    },

    /***/
    25317: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecibosBonosPage": function RecibosBonosPage() {
          return (
            /* binding */
            _RecibosBonosPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_recibos_bonos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./recibos-bonos.page.html */
      21306);
      /* harmony import */


      var _recibos_bonos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./recibos-bonos.page.scss */
      82030);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _Services_registrorecibo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/registrorecibo.service */
      3688);
      /* harmony import */


      var _Services_mispuntos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Services/mispuntos.service */
      59283);
      /* harmony import */


      var _variableglobal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../variableglobal */
      13296);

      var _RecibosBonosPage = /*#__PURE__*/function () {
        function RecibosBonosPage(servicio, servicio2) {
          _classCallCheck(this, RecibosBonosPage);

          this.servicio = servicio;
          this.servicio2 = servicio2;
          this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.cod_usuario;
        }

        _createClass(RecibosBonosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.cod_usuario;
            this.servicio.MostrarRecibos(this.cod_usuario).subscribe(function (data) {
              _this.Recibos = data;
            }, function (error) {
              console.log(error);
            }), this.servicio2.obtenerMisPuntos(this.cod_usuario).subscribe(function (data) {
              _this.misPuntos = data;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return RecibosBonosPage;
      }();

      _RecibosBonosPage.ctorParameters = function () {
        return [{
          type: _Services_registrorecibo_service__WEBPACK_IMPORTED_MODULE_2__.RegistroReciboService
        }, {
          type: _Services_mispuntos_service__WEBPACK_IMPORTED_MODULE_3__.MispuntosService
        }];
      };

      _RecibosBonosPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-recibos-bonos',
        template: _raw_loader_recibos_bonos_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_recibos_bonos_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RecibosBonosPage);
      /***/
    },

    /***/
    82030: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpYm9zLWJvbm9zLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    21306: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-label *ngFor=\"let datosMisPuntos of misPuntos\" slot=\"end\" style=\"padding: 5px;\">{{datosMisPuntos.puntosacumulados}}</ion-label>\n        <img slot=\"end\" style=\"padding: 5px;\" src=\"assets/imagenes/moneda.png\">\n        <ion-title>Mis Bonos</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"contenedor-recibos\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">Mis Bonos</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-list>\n\n        <ion-item *ngFor=\"let recibo of Recibos\" [routerLink]=\"['/recompensas']\">\n\n\n            <ion-avatar class=\"aa\" slot=\"start\">\n                <img class=\"bb\" [src]=\"recibo.imagen\">\n            </ion-avatar>\n            <ion-label class=\"contenedor-recibos--label\">\n                {{recibo.nombre}}\n            </ion-label>\n\n            <div class=\"contenedor-recibos--label contenedor-recibos--label__codigo\">\n                <ion-label slot=\"end\">\n                    Recibo No.{{recibo.cod_recibo}}\n                </ion-label>\n\n            </div>\n\n        </ion-item>\n\n    </ion-list>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_recibos-bonos_recibos-bonos_module_ts-es5.js.map