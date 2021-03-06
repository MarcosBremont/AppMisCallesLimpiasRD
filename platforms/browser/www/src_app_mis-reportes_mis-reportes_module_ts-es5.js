(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_mis-reportes_mis-reportes_module_ts"], {
    /***/
    67909: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisreportesService": function MisreportesService() {
          return (
            /* binding */
            _MisreportesService
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

      var _MisreportesService = /*#__PURE__*/function () {
        function MisreportesService(http) {
          _classCallCheck(this, MisreportesService);

          this.http = http;
        }

        _createClass(MisreportesService, [{
          key: "obtenerMisReportes",
          value: function obtenerMisReportes(cod_usuario) {
            return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadoDeReportes?cod_usuario=' + cod_usuario + "");
          } //   return this.http.get('https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadoDeReportes/'+cod_usuario+"");
          // }

        }, {
          key: "obtenerFoto",
          value: function obtenerFoto(cod_reporte) {
            return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/obtenerFoto?cod_reporte=' + cod_reporte + "");
          }
        }]);

        return MisreportesService;
      }();

      _MisreportesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _MisreportesService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _MisreportesService);
      /***/
    },

    /***/
    98088: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisReportesPageRoutingModule": function MisReportesPageRoutingModule() {
          return (
            /* binding */
            _MisReportesPageRoutingModule
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


      var _mis_reportes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mis-reportes.page */
      22348);

      var routes = [{
        path: '',
        component: _mis_reportes_page__WEBPACK_IMPORTED_MODULE_0__.MisReportesPage
      }];

      var _MisReportesPageRoutingModule = function MisReportesPageRoutingModule() {
        _classCallCheck(this, MisReportesPageRoutingModule);
      };

      _MisReportesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MisReportesPageRoutingModule);
      /***/
    },

    /***/
    13348: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisReportesPageModule": function MisReportesPageModule() {
          return (
            /* binding */
            _MisReportesPageModule
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


      var _mis_reportes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mis-reportes-routing.module */
      98088);
      /* harmony import */


      var _mis_reportes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mis-reportes.page */
      22348);

      var _MisReportesPageModule = function MisReportesPageModule() {
        _classCallCheck(this, MisReportesPageModule);
      };

      _MisReportesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mis_reportes_routing_module__WEBPACK_IMPORTED_MODULE_0__.MisReportesPageRoutingModule],
        declarations: [_mis_reportes_page__WEBPACK_IMPORTED_MODULE_1__.MisReportesPage]
      })], _MisReportesPageModule);
      /***/
    },

    /***/
    22348: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisReportesPage": function MisReportesPage() {
          return (
            /* binding */
            _MisReportesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_mis_reportes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mis-reportes.page.html */
      33937);
      /* harmony import */


      var _mis_reportes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mis-reportes.page.scss */
      8888);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _Services_misreportes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/misreportes.service */
      67909);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _variableglobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../variableglobal */
      13296);
      /* harmony import */


      var _Services_registro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Services/registro.service */
      2889);

      var _MisReportesPage = /*#__PURE__*/function () {
        function MisReportesPage(servicio, alertController, nivelUsuario, modalCtrl) {
          _classCallCheck(this, MisReportesPage);

          this.servicio = servicio;
          this.alertController = alertController;
          this.nivelUsuario = nivelUsuario;
          this.modalCtrl = modalCtrl;
          this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_usuario;
        }

        _createClass(MisReportesPage, [{
          key: "ImgAlert",
          value: function ImgAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: "<img src=\"".concat(this.currentImage, "\" alt=\"g-maps\" style=\"border-radius: 2px\">"),
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_usuario;
            this.servicio.obtenerMisReportes(this.cod_usuario).subscribe(function (data) {
              _this.reportes = data;
            }, function (error) {
              console.log(error);
            }); // this.obtenerFoto(); 

            this.nivelUsuario.NivelUsuario(this.cod_usuario).subscribe(function (data) {
              _this.niveles = data;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "obtenerFoto",
          value: function obtenerFoto(cod_reporte) {
            var _this2 = this;

            this.servicio.obtenerFoto(cod_reporte).subscribe(function (data) {
              _this2.datos = data;

              if (_this2.datos.respuesta == "OK") {
                _this2.datos = data;
                _this2.currentImage = _this2.datos.fotos;

                _this2.ImgAlert();
              } else {
                alert("Hubo un error al cargar la foto");
              }
            }, function (error) {
              alert("Hubo un error al cargar la foto");
            });
          }
        }, {
          key: "showAlert",
          value: function showAlert(i) {
            this.cod_reporte = document.getElementById('cod_reporte' + i).textContent;
            this.obtenerFoto(this.cod_reporte);
          }
        }]);

        return MisReportesPage;
      }();

      _MisReportesPage.ctorParameters = function () {
        return [{
          type: _Services_misreportes_service__WEBPACK_IMPORTED_MODULE_2__.MisreportesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: _Services_registro_service__WEBPACK_IMPORTED_MODULE_4__.RegistroService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }];
      };

      _MisReportesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-mis-reportes',
        template: _raw_loader_mis_reportes_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mis_reportes_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MisReportesPage);
      /***/
    },

    /***/
    8888: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXMtcmVwb3J0ZXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    33937: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Mis Reportes</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"contenedor--reportes\">\r\n\r\n    <!-- <img  [src]=\"currentImage\" *ngIf=\"currentImage\"> -->\r\n    <!-- <ion-item class=\"reportes-header\">\r\n        <ion-label>\r\n            ---\r\n        </ion-label>\r\n        <ion-label class=\"ubicacion\">\r\n            Ubicaci??n\r\n        </ion-label>\r\n        <ion-label class=\"codigo\">\r\n            C??digo\r\n        </ion-label>\r\n    </ion-item> -->\r\n    <ion-list class=\"reportes\" *ngFor=\"let reporte of reportes; let i = index\">\r\n\r\n        <ion-item (click)=\"showAlert(i)\" button detail=\"false\">\r\n            <div class=\"imagen-codigo\">\r\n                <ion-label class=\"codigo\" id=\"{{'cod_reporte' + i}}\"> {{reporte.cod_reporte}} </ion-label>\r\n                <img src=\"assets/imagenes/basura.png\" class=\"imagen\">\r\n            </div>\r\n\r\n            <div class=\"reportes--datos\">\r\n                <p style=\"color: #569CD6;\">&nbsp;{{reporte.ubicacion}}</p>\r\n                <p class=\"lat_long\" style=\"color: #569CD6;\">&nbsp;{{reporte.lat}}, {{reporte.lng}}</p>\r\n\r\n\r\n                <!-- <ion-label class=\"reportes--datos__codigo\" id=\"{{'cod_reporte' + i}}\"> {{reporte.cod_reporte}} </ion-label> -->\r\n\r\n            </div>\r\n            <!-- <ion-input [value]=\"title\"></ion-input> -->\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n\r\n    <!-- <ion-card >\r\n<ion-list class=\"reportes\" *ngFor=\"let nivel of niveles\">\r\n \r\n\r\n\r\n<ion-label   class=\"reportes--datos__codigo\" > {{nivel.cod_nivel}} </ion-label> \r\n<ion-input [value]=\"title\"></ion-input> -->\r\n    <!-- </ion-item>\r\n</ion-list>\r\n</ion-card> -->\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_mis-reportes_mis-reportes_module_ts-es5.js.map