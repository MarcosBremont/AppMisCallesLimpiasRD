(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_recompensas_recompensas_module_ts"], {
    /***/
    60842: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActualizarpuntosService": function ActualizarpuntosService() {
          return (
            /* binding */
            _ActualizarpuntosService
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

      var _ActualizarpuntosService = /*#__PURE__*/function () {
        function ActualizarpuntosService(http) {
          _classCallCheck(this, ActualizarpuntosService);

          this.http = http;
        }

        _createClass(ActualizarpuntosService, [{
          key: "ActualizarPuntos",
          value: function ActualizarPuntos(cod_puntos, puntos_acumulado, cod_usuario) {
            return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ActualizarOrden?cod_puntos=" + cod_puntos + "&puntosacumulados=" + puntos_acumulado + "&cod_usuario=" + cod_usuario + "");
          }
        }]);

        return ActualizarpuntosService;
      }();

      _ActualizarpuntosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _ActualizarpuntosService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _ActualizarpuntosService);
      /***/
    },

    /***/
    75529: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecompensasService": function RecompensasService() {
          return (
            /* binding */
            _RecompensasService
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

      var _RecompensasService = /*#__PURE__*/function () {
        function RecompensasService(http) {
          _classCallCheck(this, RecompensasService);

          this.http = http;
        }

        _createClass(RecompensasService, [{
          key: "obtenerrecompensas",
          value: function obtenerrecompensas(cod_ayuntamiento) {
            return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodeRecompensas?cod_ayuntamiento=' + cod_ayuntamiento);
          } //   return this.http.get('https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadodeRecompensas');
          // }

        }, {
          key: "obtenerMisPuntos",
          value: function obtenerMisPuntos(cod_usuario) {
            return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarInfMisPuntos?cod_usuario=' + cod_usuario);
          }
        }]);

        return RecompensasService;
      }();

      _RecompensasService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _RecompensasService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _RecompensasService);
      /***/
    },

    /***/
    38802: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecompensasPageRoutingModule": function RecompensasPageRoutingModule() {
          return (
            /* binding */
            _RecompensasPageRoutingModule
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


      var _recompensas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./recompensas.page */
      59136);

      var routes = [{
        path: '',
        component: _recompensas_page__WEBPACK_IMPORTED_MODULE_0__.RecompensasPage
      }];

      var _RecompensasPageRoutingModule = function RecompensasPageRoutingModule() {
        _classCallCheck(this, RecompensasPageRoutingModule);
      };

      _RecompensasPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RecompensasPageRoutingModule);
      /***/
    },

    /***/
    67763: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecompensasPageModule": function RecompensasPageModule() {
          return (
            /* binding */
            _RecompensasPageModule
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


      var _recompensas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./recompensas-routing.module */
      38802);
      /* harmony import */


      var _recompensas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./recompensas.page */
      59136);

      var _RecompensasPageModule = function RecompensasPageModule() {
        _classCallCheck(this, RecompensasPageModule);
      };

      _RecompensasPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _recompensas_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecompensasPageRoutingModule],
        declarations: [_recompensas_page__WEBPACK_IMPORTED_MODULE_1__.RecompensasPage]
      })], _RecompensasPageModule);
      /***/
    },

    /***/
    59136: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecompensasPage": function RecompensasPage() {
          return (
            /* binding */
            _RecompensasPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_recompensas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./recompensas.page.html */
      38296);
      /* harmony import */


      var _recompensas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./recompensas.page.scss */
      34643);
      /* harmony import */


      var _Services_recompensas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/recompensas.service */
      75529);
      /* harmony import */


      var _Services_actualizarpuntos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Services/actualizarpuntos.service */
      60842);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _Services_ion_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Services/ion-loader.service */
      35014);
      /* harmony import */


      var _Services_registrorecibo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Services/registrorecibo.service */
      3688);
      /* harmony import */


      var _Services_mispuntos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Services/mispuntos.service */
      59283);
      /* harmony import */


      var _variableglobal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../variableglobal */
      13296);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _RecompensasPage = /*#__PURE__*/function () {
        function RecompensasPage(ionLoaderService, servicio, servicioPuntos, servicioActualizarPuntos, registroRecibo, alertController, alertCtrl, router) {
          _classCallCheck(this, RecompensasPage);

          this.ionLoaderService = ionLoaderService;
          this.servicio = servicio;
          this.servicioPuntos = servicioPuntos;
          this.servicioActualizarPuntos = servicioActualizarPuntos;
          this.registroRecibo = registroRecibo;
          this.alertController = alertController;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_7__.Variableglobal.cod_usuario;
        }

        _createClass(RecompensasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_7__.Variableglobal.cod_usuario;
            this.servicio.obtenerrecompensas(_variableglobal__WEBPACK_IMPORTED_MODULE_7__.Variableglobal.cod_ayuntamiento).subscribe(function (data) {
              _this.recompensas = data;
            }, function (error) {
              console.log(error);
            }); //Esta variable llamada this.cod_usuario almacena el ID del usuario. 
            //Obtenemos los puntos del usuario logeado corrientemente

            this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_7__.Variableglobal.cod_usuario;
            this.servicioPuntos.obtenerMisPuntos(this.cod_usuario).subscribe(function (data) {
              _this.misPuntos = data;
            }, function (error) {
              console.log(error);
            }); //Llamamos al procedimiento para actualizar los puntos
            // this.servicioActualizarPuntos.ActualizarPuntos(this.cod_puntos, this.cod_usuario, this.puntosAcumulados)
            // .subscribe(
            //   (data)=>{this.recompensas = data;}, 
            //   (error)=>{console.log(error);}
            // )   
          }
        }, {
          key: "presentConfirm",
          value: function presentConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      alert = this.alertCtrl.create({
                        header: "Prueba",
                        message: 'Do you want to buy this book?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }, {
                          text: 'Buy',
                          handler: function handler() {
                            console.log('Buy clicked');
                          }
                        }]
                      });
                      _context.next = 3;
                      return alert;

                    case 3:
                      _context.sent.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "AlertaRecompensaCambiada",
          value: function AlertaRecompensaCambiada() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '¡Enhorabuena!',
                        message: 'Su recompensa ha sido procesada con exito, por favor dirigirse a su punto de cambio mas cercano.',
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
          key: "AlertaDeExceder",
          value: function AlertaDeExceder() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        message: 'El artículo seleccionado excede la cantidad de puntos acumulados',
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
          key: "AlertaDeError",
          value: function AlertaDeError() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        message: 'En estos momentos no se puede realizar dicha acción',
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
          key: "AlertaRecuerdeCambiar",
          value: function AlertaRecuerdeCambiar() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        message: 'Recuerde seleccionar la recompensa a cambiar',
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
          key: "canjearPuntos",
          value: function canjearPuntos(i) {
            var _this2 = this;

            //Almacena los puntos cumulados por el usuario
            this.puntosAcumulados = document.getElementById("puntos").textContent; //Almacena el precio del articulo

            this.precioArticulo = document.getElementById('puntosArticulo' + i).textContent; //Valida cual de los artículos fue seleccionado o si un artículo fue seleccionado

            this.articuloSeleccionado = document.getElementById('puntosArticulo' + i).checked; //Capturamos el id del boton 

            var botonId = document.getElementById('boton' + i).id; //Almacenamos el cod_puntos que está activo en ese momento.

            this.cod_puntos = document.getElementById('cod_puntos').textContent; //Seleccionamos el untimo caracter de los botones dinámicos.

            var ultimoCaracterBoton = botonId.charAt(botonId.length - 1); //Cambiamos el tipo de datos a entero para poder hacer la resta

            var puntosInt = parseInt(this.puntosAcumulados);
            var precioInt = parseInt(this.precioArticulo); //Obtenemos el ID del artículo para luego insertarlo en el recibo

            this.cod_recompensas = document.getElementById('cod_recompensas' + i).textContent;
            console.log(this.cod_recompensas);
            console.log(this.cod_puntos); //Para registro de recibo
            //Condición que valida si el botón seleccionado y el index son el mismo, además si el checkbox está seleccionado

            if (i == ultimoCaracterBoton && this.articuloSeleccionado == true) {
              //Condición que valida si los puntos de la recompensa exceden los puntos que tenemos
              if (precioInt > puntosInt) {
                this.AlertaDeExceder();
                return;
              } //Confirma antes de procesar el cambio de recompensa por puntos


              if (confirm('¿Está seguro de que desea cambiar sus puntos por este artículo?')) {
                var resultado = parseInt(this.puntosAcumulados) - parseInt(this.precioArticulo);
                console.log(resultado);
                var cod_usuarios, puntos_acumulados;
                cod_usuarios = this.cod_usuario;
                puntos_acumulados = resultado; // this.ionLoaderService.simpleLoader(); No necesario en esta página
                //Creamos los datos del recibo e insertamos los datos en la tabla Recibos

                this.servicioActualizarPuntos.ActualizarPuntos(this.cod_puntos, puntos_acumulados, cod_usuarios).subscribe(function (data) {
                  _this2.datos = data;

                  if (_this2.datos.respuesta == "OK") {
                    // this.ionLoaderService.dismissLoader();  No necesario en esta página
                    _this2.AlertaRecompensaCambiada();

                    _this2.registroRecibo.IngresarRecibo(_this2.cod_usuario, _this2.cod_recompensas, _variableglobal__WEBPACK_IMPORTED_MODULE_7__.Variableglobal.cod_ayuntamiento).subscribe(function (data) {
                      _this2.datos = data;
                      console.log(_this2.datos);
                      document.getElementById('puntos').innerHTML = resultado + "";
                    }, function (error) {
                      _this2.AlertaDeError();
                    });
                  } else {
                    _this2.AlertaDeError();
                  }
                });
              }
            } //Condición que devuelvel mensaje cuando no se marca ningún checkbox
            else {
              this.AlertaRecuerdeCambiar();
              return;
            } // this.router.navigate(['/login']); 

          }
        }]);

        return RecompensasPage;
      }();

      _RecompensasPage.ctorParameters = function () {
        return [{
          type: _Services_ion_loader_service__WEBPACK_IMPORTED_MODULE_4__.IonLoaderService
        }, {
          type: _Services_recompensas_service__WEBPACK_IMPORTED_MODULE_2__.RecompensasService
        }, {
          type: _Services_mispuntos_service__WEBPACK_IMPORTED_MODULE_6__.MispuntosService
        }, {
          type: _Services_actualizarpuntos_service__WEBPACK_IMPORTED_MODULE_3__.ActualizarpuntosService
        }, {
          type: _Services_registrorecibo_service__WEBPACK_IMPORTED_MODULE_5__.RegistroReciboService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }];
      };

      _RecompensasPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-recompensas',
        template: _raw_loader_recompensas_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_recompensas_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RecompensasPage);
      /***/
    },

    /***/
    34643: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvbXBlbnNhcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    38296: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n    <!-- Agregamos un bucle for para que muestre los puntos disponibles -->\r\n\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <!-- Obtenemos los puntos acumulados -->\r\n\r\n        <!-- <script src=\"http://code.jquery.com/jquery-1.11.0.min.js\"></script>\r\n  <script>\r\n      $(function(){\r\n          $(\"#codigo\").load(\"ajax/test.html\", function() {\r\n          alert(\"Load was performed.\");\r\n          });     \r\n          \r\n      })\r\n  </script> -->\r\n\r\n        <ion-label *ngFor=\"let datosMisPuntos of misPuntos\" slot=\"end\" style=\"padding: 5px;\" id=\"puntos\">{{datosMisPuntos.puntosacumulados}}</ion-label>\r\n\r\n\r\n        <ion-label *ngFor=\"let datosMisPuntos of misPuntos\" class=\"ocultar\" id=\"cod_puntos\">{{datosMisPuntos.cod_puntos}}</ion-label>\r\n        <img slot=\"end\" style=\"padding: 5px;\" src=\"assets/imagenes/moneda.png\">\r\n        <ion-title>Mis Puntos</ion-title>\r\n\r\n\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <ion-header collapse=\"condense\">\r\n        <ion-toolbar>\r\n            <ion-title size=\"large\">Recompensas</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <div id=\"container\">\r\n        <!-- Obtenemos todos los artículos disponibles recorriendo la bd con un ciclo foor -->\r\n        <ion-card *ngFor=\"let recompensa of recompensas;  let i = index\">\r\n            <ion-card-header>\r\n                <!-- llamamos al nombre de la recompensa -->\r\n                <ion-card-title>\r\n                    <ion-label id=\"{{'cod_recompensas' + i}}\" class=\"ocultar\">{{recompensa.cod_recompensa}}</ion-label> {{recompensa.nombre}}</ion-card-title>\r\n\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                <img src={{recompensa.imagen}}>\r\n                <br>\r\n\r\n                <!-- Asignamos un ID único a cada botón que se autogenere -->\r\n                <ion-button id=\"{{'boton' + i}}\" color=\"warning\" (click)=\"canjearPuntos(i);\">\r\n                    <ion-icon name=\"wallet\" slot=\"start\"></ion-icon>\r\n                    Usar Puntos\r\n                </ion-button>\r\n\r\n                <br>\r\n                <ion-list>\r\n                    <ion-item>\r\n                        <!-- Obtenemos los puntos de la recompensa -->\r\n                        <ion-label color=\"warning\">{{recompensa.puntos}}</ion-label>\r\n                        <!-- Le asignamos un ID dinámico a cada kabel de puntos que se genere -->\r\n\r\n                        <ion-checkbox slot=\"end\" color=\"warning\" id=\"{{'puntosArticulo' + i}}\">{{recompensa.puntos}}</ion-checkbox>\r\n\r\n                        <label slot=\"start\" class=\"centrarlabel\"> Puntos</label>\r\n                    </ion-item>\r\n                </ion-list>\r\n\r\n                <br>\r\n                <label class=\"centrarlabel\"><b>Descripcion:</b> </label>\r\n                <!-- Llamamos a la descripcción de la recompensa -->\r\n                <label class=\"centrarlabel\"> {{recompensa.descripcion}}</label>\r\n            </ion-card-content>\r\n        </ion-card>\r\n\r\n    </div>\r\n    <ion-card>\r\n\r\n\r\n\r\n    </ion-card>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_recompensas_recompensas_module_ts-es5.js.map