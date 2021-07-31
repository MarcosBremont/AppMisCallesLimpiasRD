(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_login_login_module_ts"], {
    /***/
    73468: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginService": function LoginService() {
          return (
            /* binding */
            _LoginService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _LoginService = /*#__PURE__*/function () {
        function LoginService(http, platform) {
          _classCallCheck(this, LoginService);

          this.http = http;
        }

        _createClass(LoginService, [{
          key: "IniciarSesion",
          value: function IniciarSesion(usuario, clave) {
            return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/miscalleslimpiasrd/iniciarsesion?usuario=" + usuario + "&clave=" + clave + "");
          }
        }]);

        return LoginService;
      }();

      _LoginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform
        }];
      };

      _LoginService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _LoginService);
      /***/
    },

    /***/
    45393: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageRoutingModule": function LoginPageRoutingModule() {
          return (
            /* binding */
            _LoginPageRoutingModule
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


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      66825);

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      _LoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginPageRoutingModule);
      /***/
    },

    /***/
    80107: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      45393);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page */
      66825);

      var _LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
      })], _LoginPageModule);
      /***/
    },

    /***/
    66825: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.page.html */
      76770);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      21339);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _Services_datosnecesario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/datosnecesario.service */
      99736);
      /* harmony import */


      var _Services_Login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Services/Login.service */
      73468);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _Services_ion_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Services/ion-loader.service */
      35014);
      /* harmony import */


      var _variableglobal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../variableglobal */
      13296);

      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(ionLoaderService, servicio2, menuCtrl, servicio, toastCtrl, alertController, router, navCtrl) {
          _classCallCheck(this, LoginPage);

          this.ionLoaderService = ionLoaderService;
          this.servicio2 = servicio2;
          this.menuCtrl = menuCtrl;
          this.servicio = servicio;
          this.toastCtrl = toastCtrl;
          this.alertController = alertController;
          this.router = router;
          this.navCtrl = navCtrl;
          this.isActiveToggleTextPassword = true;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ErrorAlert",
          value: function ErrorAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        message: 'Usuario o Contraseña Incorrecta.',
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
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuCtrl.enable(false);
          }
        }, {
          key: "onload",
          value: function onload() {
            var _this = this;

            try {
              this.servicio2.obtenerDatosNecesarios(this.usuario).subscribe(function (data) {
                _this.datos = data; // console.log(data)
              }, function (error) {
                // alert(error);
                alert("Error: " + error.message);
              });
            } catch (error) {
              alert("Error: " + error.message);
            }
          }
        }, {
          key: "onVerificarPantallas",
          value: function onVerificarPantallas() {}
        }, {
          key: "onIniciarSesion",
          value: function onIniciarSesion() {
            var _this2 = this;

            this.onload(); // this.ionLoaderService.simpleLoader();

            try {
              var usuario, clave, respuestas;
              usuario = this.usuario;
              clave = this.clave;
              this.servicio.IniciarSesion(usuario, clave).subscribe(function (data) {
                _this2.datos = data;

                if (_this2.datos.respuesta == "OK") {
                  _variableglobal__WEBPACK_IMPORTED_MODULE_5__.Variableglobal.cod_usuario = _this2.datos.cod_usuario;
                  _variableglobal__WEBPACK_IMPORTED_MODULE_5__.Variableglobal.nombre_usuario = usuario;
                  _variableglobal__WEBPACK_IMPORTED_MODULE_5__.Variableglobal.correo_Usuario = _this2.datos.correo_Usuario;
                  _variableglobal__WEBPACK_IMPORTED_MODULE_5__.Variableglobal.cedula_usuario = _this2.datos.cedula_usuario;
                  _variableglobal__WEBPACK_IMPORTED_MODULE_5__.Variableglobal.telefono_Usuario = _this2.datos.telefono_Usuario;
                  _variableglobal__WEBPACK_IMPORTED_MODULE_5__.Variableglobal.clave = _this2.datos.clave;
                  _variableglobal__WEBPACK_IMPORTED_MODULE_5__.Variableglobal.foto_usuario = _this2.datos.foto_usuario;

                  _this2.menuCtrl.enable(true);

                  _this2.router.navigate(['/inicio-mapa']);

                  _this2.ionLoaderService.dismissLoader();
                } else {
                  _this2.ErrorAlert();
                }
              }, function (error) {
                alert("Error: " + error.message);
                alert("Error: " + error.message);
              });
            } catch (ex) {
              alert("Error: " + ex.message);
            }
          }
        }, {
          key: "toggleTextPassword",
          value: function toggleTextPassword() {
            this.isActiveToggleTextPassword = this.isActiveToggleTextPassword == true ? false : true;
          }
        }, {
          key: "getType",
          value: function getType() {
            return this.isActiveToggleTextPassword ? 'password' : 'text';
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _Services_ion_loader_service__WEBPACK_IMPORTED_MODULE_4__.IonLoaderService
        }, {
          type: _Services_datosnecesario_service__WEBPACK_IMPORTED_MODULE_2__.DatosnecesarioService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController
        }, {
          type: _Services_Login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginPage);
      /***/
    },

    /***/
    21339: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".css-input {\n  padding: 5px;\n  font-size: 16px;\n  border-width: 1px;\n  border-color: #CCCCCC;\n  background-color: #FFFFFF;\n  color: #000000;\n  border-style: solid;\n  border-radius: 5px;\n  box-shadow: 1px 0px 0px rgba(66, 66, 66, 0);\n  text-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);\n}\n\n.css-input:focus {\n  outline: none;\n}\n\n.centrar {\n  display: block;\n  text-align: center;\n  line-height: 150%;\n  font-size: 18px;\n}\n\n.terminosycondiciones {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLCtDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQ0E7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUVBLGdCQUFBO0FBREEiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNzcy1pbnB1dCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6ICNDQ0NDQ0M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDBweCByZ2JhKDY2LDY2LDY2LC4wKTtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSg2Niw2Niw2NiwuNzUpO1xufVxuLmNzcy1pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTpub25lO1xufVxuXG4uY2VudHJhclxue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICBmb250LXNpemU6IDE4cHg7XG5cbn1cblxuLnRlcm1pbm9zeWNvbmRpY2lvbmVzXG57XG5tYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    76770: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <ion-card-header>\n    <ion-card-title></ion-card-title>\n  </ion-card-header>\n  <div class=\"contenedor\">\n  <ion-card-content style=\"width: 100%; padding: 10px;\">\n    <div>\n      <img style=\"width: 120px;;margin:auto;display:block\" src=\"assets/imagenes/MisCallesLimpiasRDCircle.png\">\n      <ion-label class=\"centrar\" style=\"font-weight: bold; font-size: 22px;\">INICIAR SESIÓN</ion-label>\n    </div>\n\n<div class=\"login--inputs\" style=\"margin-top: 15px; margin-right: 15px;\">\n\n  <ion-item>\n    <ion-input oninput=\"this.value = this.value.toUpperCase()\" (keypress)=\"omit_special_char($event)\" placeholder=\"Usuario\" maxlength=\"50\" [(ngModel)]=\"usuario\" ></ion-input>\n  </ion-item>\n<!-- Prueba -->\n  <ion-item>\n      <ion-input oninput=\"this.value = this.value.toUpperCase()\" placeholder=\"Contraseña\" [type]=\"getType()\" [(ngModel)]=\"clave\" ></ion-input>\n      <ion-icon style=\"align-items: flex-end;\" name=\"eye\" (click)=\"toggleTextPassword()\"></ion-icon>\n  </ion-item>\n\n</div>\n \n  <div class=\"login--contraseña\" style=\"text-align: right; margin-right: 5px;\">\n    <ion-label style=\"font-size: 14px;\"><a href=\"./olvide-mi-contrasena\">¿Olvidaste tu contraseña?</a></ion-label>\n  </div>\n  \n  <div class=\"boton-login\">\n    <ion-button expand=\"block\" style=\"font-weight: bold;\" (click)=\"onIniciarSesion()\">INICIAR SESIÓN</ion-button>\n  </div>\n  \n  <div class=\"ion-text-center\" style=\"margin:auto; width:75%; padding-top: 30px;\">\n    <ion-label style=\"font-size: 14px;\">¿No tienes una cuenta?</ion-label>\n    <ion-label style=\"font-size: 14px;\"><a  href=\"./registro\"> Registrate aqui</a></ion-label>\n    </div>\n\n    \n  </ion-card-content>\n</div>\n<div style=\"margin-top: 140; text-align: center;\">\n  <ion-label style=\"font-size: 14px;\">Iniciando sesion aceptas los</ion-label>\n  <ion-label style=\"font-size: 14px;\"><a  href=\"./terminosycondiciones\"> terminos y condiciones</a></ion-label>\n\n\n</div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_login_login_module_ts-es5.js.map