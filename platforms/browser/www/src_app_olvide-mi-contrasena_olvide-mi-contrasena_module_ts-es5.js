(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_olvide-mi-contrasena_olvide-mi-contrasena_module_ts"], {
    /***/
    98676: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnviarCorreoService": function EnviarCorreoService() {
          return (
            /* binding */
            _EnviarCorreoService
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

      var _EnviarCorreoService = /*#__PURE__*/function () {
        function EnviarCorreoService(http) {
          _classCallCheck(this, EnviarCorreoService);

          this.http = http;
        }

        _createClass(EnviarCorreoService, [{
          key: "EnviarCorreo",
          value: function EnviarCorreo(email, subject, message) {
            return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/Enviarcorreo?email=" + email + "&subject=" + subject + "&message=" + message + "");
          }
        }]);

        return EnviarCorreoService;
      }();

      _EnviarCorreoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _EnviarCorreoService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _EnviarCorreoService);
      /***/
    },

    /***/
    19893: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OlvidemicontrasenaService": function OlvidemicontrasenaService() {
          return (
            /* binding */
            _OlvidemicontrasenaService
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

      var _OlvidemicontrasenaService = /*#__PURE__*/function () {
        function OlvidemicontrasenaService(http) {
          _classCallCheck(this, OlvidemicontrasenaService);

          this.http = http;
        }

        _createClass(OlvidemicontrasenaService, [{
          key: "UContrasenaOlvidada",
          value: function UContrasenaOlvidada(email, clave_nueva) {
            return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/UContrasenaOlvidada?correo_Usuario=" + email + "&clave_nueva=" + clave_nueva + "");
          }
        }]);

        return OlvidemicontrasenaService;
      }();

      _OlvidemicontrasenaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _OlvidemicontrasenaService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _OlvidemicontrasenaService);
      /***/
    },

    /***/
    14799: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OlvideMiContrasenaPageRoutingModule": function OlvideMiContrasenaPageRoutingModule() {
          return (
            /* binding */
            _OlvideMiContrasenaPageRoutingModule
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


      var _olvide_mi_contrasena_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./olvide-mi-contrasena.page */
      96397);

      var routes = [{
        path: '',
        component: _olvide_mi_contrasena_page__WEBPACK_IMPORTED_MODULE_0__.OlvideMiContrasenaPage
      }];

      var _OlvideMiContrasenaPageRoutingModule = function OlvideMiContrasenaPageRoutingModule() {
        _classCallCheck(this, OlvideMiContrasenaPageRoutingModule);
      };

      _OlvideMiContrasenaPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OlvideMiContrasenaPageRoutingModule);
      /***/
    },

    /***/
    68905: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OlvideMiContrasenaPageModule": function OlvideMiContrasenaPageModule() {
          return (
            /* binding */
            _OlvideMiContrasenaPageModule
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


      var _olvide_mi_contrasena_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./olvide-mi-contrasena-routing.module */
      14799);
      /* harmony import */


      var _olvide_mi_contrasena_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./olvide-mi-contrasena.page */
      96397);

      var _OlvideMiContrasenaPageModule = function OlvideMiContrasenaPageModule() {
        _classCallCheck(this, OlvideMiContrasenaPageModule);
      };

      _OlvideMiContrasenaPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _olvide_mi_contrasena_routing_module__WEBPACK_IMPORTED_MODULE_0__.OlvideMiContrasenaPageRoutingModule],
        declarations: [_olvide_mi_contrasena_page__WEBPACK_IMPORTED_MODULE_1__.OlvideMiContrasenaPage]
      })], _OlvideMiContrasenaPageModule);
      /***/
    },

    /***/
    96397: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OlvideMiContrasenaPage": function OlvideMiContrasenaPage() {
          return (
            /* binding */
            _OlvideMiContrasenaPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_olvide_mi_contrasena_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./olvide-mi-contrasena.page.html */
      90506);
      /* harmony import */


      var _olvide_mi_contrasena_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./olvide-mi-contrasena.page.scss */
      32147);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _Services_olvidemicontrasena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/olvidemicontrasena.service */
      19893);
      /* harmony import */


      var _Services_enviar_correo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Services/enviar-correo.service */
      98676);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/email-composer/ngx */
      51535);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _OlvideMiContrasenaPage = /*#__PURE__*/function () {
        function OlvideMiContrasenaPage(http, emailComposer, servicio, servicio1, alertController) {
          _classCallCheck(this, OlvideMiContrasenaPage);

          this.http = http;
          this.emailComposer = emailComposer;
          this.servicio = servicio;
          this.servicio1 = servicio1;
          this.alertController = alertController;
          this.result = "";
        }

        _createClass(OlvideMiContrasenaPage, [{
          key: "sendEmail",
          value: function sendEmail() {
            var _this = this;

            var email, subject, message;
            email = this.email;
            subject = "RESTABLECIMIENTO DE CONTRASEÑA";
            message = "Hola, se solicito un restablecimiento de contraseña para tu cuenta: " + this.email + "<p></p>" + " Si tú no realizaste la solicitud de cambio de contraseña, ignora este correo. <p></p>" + "su nueva contraseña es: " + this.datos.clave;
            this.servicio1.EnviarCorreo(email, subject, message).subscribe(function (data) {
              _this.datos = data;

              if (_this.datos == "OK") {
                _this.CorreoSuccess();

                _this.email = null;
              } else {
                _this.ErrorAlert();
              }
            }, function (error) {
              alert(error);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onKeydown",
          value: function onKeydown(event) {
            if (event.keyCode === 32) {
              return false;
            }
          }
        }, {
          key: "omit_special_char",
          value: function omit_special_char(event) {
            var k;
            k = event.charCode; //         k = event.keyCode;  (Both can be used)

            return k > 64 && k < 91 || k > 96 && k < 123 || k == 8 || k == 32 || k >= 48 && k <= 57;
          }
        }, {
          key: "CorreoSuccess",
          value: function CorreoSuccess() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Contraseña enviada',
                        message: 'Su Contraseña ha sido enviada al correo ',
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
          key: "SuccesAlert",
          value: function SuccesAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Contraseña Restablecida con Exito',
                        message: 'Su Contraseña es: ' + this.datos.clave,
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "EmailVacio",
          value: function EmailVacio() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Correo Incorrecto',
                        message: 'Debe ingresar un correo para poder realizar el cambio de contraseña',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ErrorAlert",
          value: function ErrorAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        message: 'No se pudo restablecer la contraseña',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "LlenarCamposAlert",
          value: function LlenarCamposAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        message: 'Por favor llene los campos necesarios',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "onOlvideMiContrasena",
          value: function onOlvideMiContrasena() {
            var _this2 = this;

            var emailContenido = document.getElementById("emailContenido").value;

            if (emailContenido.length == 0) {
              this.EmailVacio();
              return;
            }

            var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = 4;
            this.result = "";

            for (var i = 0; i < charactersLength; i++) {
              this.result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            var email;
            email = this.email;
            console.log(this.result);
            this.servicio.UContrasenaOlvidada(email, this.result).subscribe(function (data) {
              _this2.datos = data;

              if (_this2.datos.respuesta == "OK") {
                _this2.sendEmail();

                _this2.email = null;
              } else {
                _this2.ErrorAlert();
              }
            }, function (error) {
              alert(error);
            });
          }
        }]);

        return OlvideMiContrasenaPage;
      }();

      _OlvideMiContrasenaPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__.EmailComposer
        }, {
          type: _Services_olvidemicontrasena_service__WEBPACK_IMPORTED_MODULE_2__.OlvidemicontrasenaService
        }, {
          type: _Services_enviar_correo_service__WEBPACK_IMPORTED_MODULE_3__.EnviarCorreoService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }];
      };

      _OlvideMiContrasenaPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-olvide-mi-contrasena',
        template: _raw_loader_olvide_mi_contrasena_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_olvide_mi_contrasena_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OlvideMiContrasenaPage);
      /***/
    },

    /***/
    32147: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbHZpZGUtbWktY29udHJhc2VuYS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    90506: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <!-- Back button with a default href -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"color: #1A202E; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size:16;\">Restablecer contraseña</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<div style=\"padding-left: 15px;padding-right: 15px; padding-bottom: 15px;\">\r\n  <!-- <ion-label style=\"color: #1A202E; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size:20px;\"><strong>Restablecer Contraseña</strong></ion-label> <br> -->\r\n  <br><span style=\"color: #647081; text-justify: auto; font-size: 14px;\">Introduzca el email asociado a su cuenta y le enviaremos un correo su nueva contraseña</span>\r\n</div>\r\n<ion-label style=\"color: #647081; padding: 15px; font-weight: bold;\">EMAIL</ion-label><br>\r\n\r\n\r\n\r\n<div style=\"padding: 5px;\">\r\n  <ion-card>\r\n      <!-- Agregar id para validar si está vacio -->\r\n      <ion-input style=\"text-transform: uppercase; \" style=\"border-radius: 5px;\" maxlength=\"100\" [(ngModel)]=\"email\" id=\"emailContenido\"></ion-input>\r\n  </ion-card>\r\n</div>\r\n\r\n\r\n<div style=\"margin:auto; width:95%; padding-top: 20px;\">\r\n\r\n  <ion-button expand=\"block\"  style=\"font-weight: bold;\" (click)=\"onOlvideMiContrasena()\">Enviar Contraseña</ion-button>\r\n\r\n</div>\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_olvide-mi-contrasena_olvide-mi-contrasena_module_ts-es5.js.map