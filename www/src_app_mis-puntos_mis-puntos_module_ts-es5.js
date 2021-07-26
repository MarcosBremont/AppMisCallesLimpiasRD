(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_mis-puntos_mis-puntos_module_ts"], {
    /***/
    71306: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisPuntosPageRoutingModule": function MisPuntosPageRoutingModule() {
          return (
            /* binding */
            _MisPuntosPageRoutingModule
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


      var _mis_puntos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mis-puntos.page */
      91142);

      var routes = [{
        path: '',
        component: _mis_puntos_page__WEBPACK_IMPORTED_MODULE_0__.MisPuntosPage
      }];

      var _MisPuntosPageRoutingModule = function MisPuntosPageRoutingModule() {
        _classCallCheck(this, MisPuntosPageRoutingModule);
      };

      _MisPuntosPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MisPuntosPageRoutingModule);
      /***/
    },

    /***/
    66869: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisPuntosPageModule": function MisPuntosPageModule() {
          return (
            /* binding */
            _MisPuntosPageModule
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


      var _mis_puntos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mis-puntos-routing.module */
      71306);
      /* harmony import */


      var _mis_puntos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mis-puntos.page */
      91142);

      var _MisPuntosPageModule = function MisPuntosPageModule() {
        _classCallCheck(this, MisPuntosPageModule);
      };

      _MisPuntosPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mis_puntos_routing_module__WEBPACK_IMPORTED_MODULE_0__.MisPuntosPageRoutingModule],
        declarations: [_mis_puntos_page__WEBPACK_IMPORTED_MODULE_1__.MisPuntosPage]
      })], _MisPuntosPageModule);
      /***/
    },

    /***/
    91142: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisPuntosPage": function MisPuntosPage() {
          return (
            /* binding */
            _MisPuntosPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_mis_puntos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mis-puntos.page.html */
      72471);
      /* harmony import */


      var _mis_puntos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mis-puntos.page.scss */
      19879);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _Services_mispuntos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/mispuntos.service */
      59283);
      /* harmony import */


      var _variableglobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variableglobal */
      13296);

      var _MisPuntosPage = /*#__PURE__*/function () {
        function MisPuntosPage(servicio) {
          _classCallCheck(this, MisPuntosPage);

          this.servicio = servicio;
          this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_usuario;
        }

        _createClass(MisPuntosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //Este variable llamada this.cod_usuario almacena el ID del usuario. 
            this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_usuario;
            this.servicio.obtenerMisPuntos(this.cod_usuario).subscribe(function (data) {
              _this.misPuntos = data;
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return MisPuntosPage;
      }();

      _MisPuntosPage.ctorParameters = function () {
        return [{
          type: _Services_mispuntos_service__WEBPACK_IMPORTED_MODULE_2__.MispuntosService
        }];
      };

      _MisPuntosPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-mis-puntos',
        template: _raw_loader_mis_puntos_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mis_puntos_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MisPuntosPage);
      /***/
    },

    /***/
    19879: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXMtcHVudG9zLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    72471: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <!-- <ion-card *ngFor=\"let datosMisPuntos of misPuntos\"> -->\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-label *ngFor=\"let datosMisPuntos of misPuntos\" class=\"ocultar\" id=\"cod_puntos\">{{datosMisPuntos.cod_puntos}}</ion-label>\r\n\r\n      <ion-label *ngFor=\"let datosMisPuntos of misPuntos\" slot=\"end\" style=\"padding: 5px;\">{{datosMisPuntos.puntosacumulados}}</ion-label>\r\n      <img slot=\"end\" style=\"padding: 5px;\" src=\"assets/imagenes/moneda.png\">\r\n      <ion-title>Mis Puntos</ion-title>\r\n\r\n\r\n  </ion-toolbar>\r\n  <!-- </ion-card> -->\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n      <ion-toolbar>\r\n          <ion-title size=\"large\">Mis Puntos</ion-title>\r\n      </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n  <div id=\"container\">\r\n\r\n      <ion-card *ngFor=\"let datosMisPuntos of misPuntos\">\r\n          <ion-card-header>\r\n\r\n\r\n              <ion-card-subtitle>Obten un bono</ion-card-subtitle>\r\n              <ion-card-title>Cambia tus puntos por objetos</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n              Cambia tus puntos por premios, puedes acceder a una lista de articulos para el hogar u optar por otros regalos que de esta manera puedan comprar comida, ropa o algun otro bien necesario.\r\n\r\n              <button routerLink=\"/recompensas\" routerDirection=\"root\" style=\"background-color: #428CFF; border-radius: 5px;\" ion-button icon-start clear item-end>\r\n Leer mas.\r\n <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\r\n\r\n</button>\r\n\r\n          </ion-card-content>\r\n\r\n\r\n      </ion-card>\r\n\r\n      <ion-card *ngFor=\"let datosMisPuntos of misPuntos\">\r\n          <ion-card-header>\r\n\r\n\r\n              <ion-card-subtitle>Ayuda a los demas</ion-card-subtitle>\r\n              <ion-card-title>Dona tus puntos a organizaciones</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n              Dona tus puntos a organizaciones beneficas para que de esta manera puedas ayudar a los demas.\r\n\r\n              <button routerLink=\"/recompensas\" routerDirection=\"root\" style=\"background-color: #428CFF; border-radius: 5px;\" ion-button icon-start clear item-end>\r\n                  <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\r\n                  Muy pronto...\r\n\r\n</button>\r\n\r\n          </ion-card-content>\r\n\r\n\r\n      </ion-card>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_mis-puntos_mis-puntos_module_ts-es5.js.map