(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_inicio-mapa_inicio-mapa_module_ts"], {
    /***/
    9290: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DatosInicioService": function DatosInicioService() {
          return (
            /* binding */
            _DatosInicioService
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

      var _DatosInicioService = /*#__PURE__*/function () {
        function DatosInicioService(http) {
          _classCallCheck(this, DatosInicioService);

          this.http = http;
        }

        _createClass(DatosInicioService, [{
          key: "obtenerDatosNecesarios",
          value: function obtenerDatosNecesarios(cod_usuario) {
            return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodeDatosInicio?cod_usuario=" + cod_usuario + "");
          }
        }]);

        return DatosInicioService;
      }();

      _DatosInicioService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _DatosInicioService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _DatosInicioService);
      /***/
    },

    /***/
    98260: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LocationService": function LocationService() {
          return (
            /* binding */
            _LocationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LocationService = /*#__PURE__*/function () {
        function LocationService() {
          _classCallCheck(this, LocationService);
        }

        _createClass(LocationService, [{
          key: "getPosition",
          value: function getPosition() {
            return new Promise(function (resolve, reject) {
              navigator.geolocation.getCurrentPosition(function (resp) {
                resolve({
                  lng: resp.coords.longitude,
                  lat: resp.coords.latitude
                });
              }, function (err) {
                reject(err);
              });
            });
          }
        }]);

        return LocationService;
      }();

      _LocationService.ctorParameters = function () {
        return [];
      };

      _LocationService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _LocationService);
      /***/
    },

    /***/
    65047: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistroReporteService": function RegistroReporteService() {
          return (
            /* binding */
            _RegistroReporteService
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

      var _RegistroReporteService = /*#__PURE__*/function () {
        function RegistroReporteService(http) {
          _classCallCheck(this, RegistroReporteService);

          this.http = http;
          this.baseURL = "http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/GuardarFotosOrden";
          this.llave = "AIzaSyABac4fl7IWEhoH7cQr-p-het84Kz12g50";
          this.urltotal = "";
          var headers = new Headers();
          headers.append("Accept", 'application/json');
          headers.append('Content-Type', 'application/json');
        }

        _createClass(RegistroReporteService, [{
          key: "RegistroReporte",
          value: function RegistroReporte(datos) {
            return this.http.post(this.baseURL, datos);
          }
        }, {
          key: "StreetNameGoogle",
          value: function StreetNameGoogle(lat, lng) {
            this.urltotal = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + this.llave;
            console.log(this.urltotal);
            return this.http.get(this.urltotal);
          }
        }]);

        return RegistroReporteService;
      }();

      _RegistroReporteService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _RegistroReporteService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _RegistroReporteService);
      /***/
    },

    /***/
    59889: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InicioMapaPageRoutingModule": function InicioMapaPageRoutingModule() {
          return (
            /* binding */
            _InicioMapaPageRoutingModule
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


      var _inicio_mapa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inicio-mapa.page */
      43937);

      var routes = [{
        path: '',
        component: _inicio_mapa_page__WEBPACK_IMPORTED_MODULE_0__.InicioMapaPage
      }];

      var _InicioMapaPageRoutingModule = function InicioMapaPageRoutingModule() {
        _classCallCheck(this, InicioMapaPageRoutingModule);
      };

      _InicioMapaPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InicioMapaPageRoutingModule);
      /***/
    },

    /***/
    97740: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InicioMapaPageModule": function InicioMapaPageModule() {
          return (
            /* binding */
            _InicioMapaPageModule
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


      var _inicio_mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inicio-mapa-routing.module */
      59889);
      /* harmony import */


      var _inicio_mapa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inicio-mapa.page */
      43937);

      var _InicioMapaPageModule = function InicioMapaPageModule() {
        _classCallCheck(this, InicioMapaPageModule);
      };

      _InicioMapaPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _inicio_mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioMapaPageRoutingModule],
        declarations: [_inicio_mapa_page__WEBPACK_IMPORTED_MODULE_1__.InicioMapaPage]
      })], _InicioMapaPageModule);
      /***/
    },

    /***/
    43937: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InicioMapaPage": function InicioMapaPage() {
          return (
            /* binding */
            _InicioMapaPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_inicio_mapa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./inicio-mapa.page.html */
      84690);
      /* harmony import */


      var _inicio_mapa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inicio-mapa.page.scss */
      79110);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _Services_ion_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/ion-loader.service */
      35014);
      /* harmony import */


      var _Services_registro_reporte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Services/registro-reporte.service */
      65047);
      /* harmony import */


      var _Services_datos_inicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Services/datos-inicio.service */
      9290);
      /* harmony import */


      var _Services_datosnecesario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Services/datosnecesario.service */
      99736);
      /* harmony import */


      var _Services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Services/location.service */
      98260);
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      84267);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _variableglobal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../variableglobal */
      13296);
      /* harmony import */


      var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/google-maps */
      37385); // import { base64StringToBlob } from 'blob-util';
      // import { Base64 } from '@ionic-native/base64/ngx';


      var _InicioMapaPage = /*#__PURE__*/function () {
        function InicioMapaPage( // private base64: Base64,
        ionLoaderService, servicio2, servicio3, servicio4, LocationService, loadingCtrl, toastCtrl, alertController, nav, platform, router, camera) {
          _classCallCheck(this, InicioMapaPage);

          this.ionLoaderService = ionLoaderService;
          this.servicio2 = servicio2;
          this.servicio3 = servicio3;
          this.servicio4 = servicio4;
          this.LocationService = LocationService;
          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
          this.alertController = alertController;
          this.nav = nav;
          this.platform = platform;
          this.router = router;
          this.camera = camera;
          this.fotos = null;
          this.isBtnCamaraVisible = false;
          this.isBtnRegistroVisible = false;
          this.height = 0;
          this.id = '0';
          this.latitude = '0';
          this.longitud = '0';
          this.usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_8__.Variableglobal.nombre_usuario;
          console.log(platform.height());
          this.height = platform.height();
        }

        _createClass(InicioMapaPage, [{
          key: "takePicture",
          value: function takePicture() {
            var _this = this;

            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              _this.currentImage = imageData;

              _this.Reportar();

              _this.ImgAlert();

              _this.VerificarSiHayFoto();
            }, function (err) {
              // Handle error
              console.log("Camera issue:" + err);
            });
          } //Prueba

        }, {
          key: "pruebaCodNivel",
          value: function pruebaCodNivel() {
            console.log(_variableglobal__WEBPACK_IMPORTED_MODULE_8__.Variableglobal.cod_nivel);
          } //Aqui arriba mando por consola el codigo nivel por un metodo para ver
          //pero si mando otra cosa me lo devuelve correctamente

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log(_variableglobal__WEBPACK_IMPORTED_MODULE_8__.Variableglobal.cod_usuario, _variableglobal__WEBPACK_IMPORTED_MODULE_8__.Variableglobal.cod_ayuntamiento, _variableglobal__WEBPACK_IMPORTED_MODULE_8__.Variableglobal.nombre_usuario);
                      this.ionLoaderService.dismissLoader();
                      this.SlistaDatosInicio();
                      this.VerificarSiHayFoto();
                      _context.next = 6;
                      return this.platform.ready();

                    case 6:
                      this.onload();
                      _context.next = 9;
                      return this.loadMap();

                    case 9:
                      _context.next = 11;
                      return this.localizar();

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "SlistaDatosInicio",
          value: function SlistaDatosInicio() {
            var _this2 = this;

            try {
              console.log(this.cod_usuario);
              console.log(_variableglobal__WEBPACK_IMPORTED_MODULE_8__.Variableglobal.cod_usuario);
              this.servicio4.obtenerDatosNecesarios(_variableglobal__WEBPACK_IMPORTED_MODULE_8__.Variableglobal.cod_usuario).subscribe(function (data) {
                _this2.datos = data;
                _this2.datos;
                _this2.cantidadrecibo = data[0].cantidadrecibo;
                _this2.cantidadreportes = data[0].cantidadreportes;
                _this2.puntosacumulados = data[0].puntosacumulados;
                _this2.reportesenespera = data[0].reportesenespera;
              }, function (error) {
                // alert(error);
                alert("Error: " + error.message);
              });
            } catch (error) {
              alert("Error: " + error.message);
            }
          }
        }, {
          key: "VerificarSiHayFoto",
          value: function VerificarSiHayFoto() {
            if (this.currentImage != null) {
              this.isBtnRegistroVisible = true;
              this.isBtnCamaraVisible = true;
            } else {
              this.isBtnRegistroVisible = false;
              this.isBtnCamaraVisible = true;
            }
          }
        }, {
          key: "loadMap",
          value: function loadMap() {
            this.ionLoaderService.dismissLoader(); // Esta funci??n inicializa la propiedad de clase
            // map
            // que va a contener el control de nuestro mapa de google
            // Para crear nuestro mapa debemos enviar como parametros
            // el id del div en donde se va a renderizar el mapa (paso anterior)
            // y las opciones que configuran nuestro mapa

            this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_9__.GoogleMaps.create("map_canvas", {
              camera: {
                target: {
                  lat: -2.1537488,
                  lng: -79.8883037
                },
                zoom: 18,
                tilt: 30
              }
            });
          }
        }, {
          key: "onload",
          value: function onload() {
            var _this3 = this;

            this.servicio2.obtenerDatosNecesarios(this.usuario).subscribe(function (data) {
              _this3.datos = data;
            }, function (error) {
              alert("ErrorDeDatosNecesarios");
            });
          }
        }, {
          key: "localizar",
          value: function localizar() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // Limpiamos todos los elementos de nuestro mapa
                      this.map.clear(); // Creamos un componente de Ionic para mostrar un mensaje
                      // mientras obtenemos esperamos que termine el proceso de
                      // obtener la ubicaci??n

                      _context2.next = 3;
                      return this.loadingCtrl.create({
                        message: "Espera por favor..."
                      });

                    case 3:
                      this.loading = _context2.sent;
                      _context2.next = 6;
                      return this.loading.present();

                    case 6:
                      // Ejecutamos el m??todo getMyLocation de nuestra propiedad de clase
                      // map
                      // para obtener nuestra ubicaci??n actual
                      this.map.getMyLocation().then(function (location) {
                        // Una vez obtenida la ubicaci??n cerramos el mensaje de di??logo
                        _this4.loading.dismiss(); // Movemos la camara a nuestra ubicaci??n con una peque??a animaci??n


                        _this4.map.animateCamera({
                          target: location.latLng,
                          zoom: 17,
                          tilt: 30
                        }); // Agregamos un nuevo marcador


                        var marker = _this4.map.addMarkerSync({
                          title: "Estoy aqu??!",
                          // snippet: "This plugin is awesome!",
                          position: location.latLng,
                          animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_9__.GoogleMapsAnimation.BOUNCE
                        }); // Mostramos un InfoWindow


                        marker.showInfoWindow(); // Podemos configurar un evento que se ejecute cuando
                        // se haya dado clic

                        marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_9__.GoogleMapsEvent.MARKER_CLICK).subscribe(function () {
                          _this4.showToast("clicked!");
                        });
                      })["catch"](function (error) {
                        // En caso de que haya un problema en obtener la
                        // ubicaci??n
                        _this4.loading.dismiss();

                        _this4.showToast(error.error_message);
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "Reportar",
          value: function Reportar() {
            var _this5 = this;

            // var urlGoogleStreetName = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY";
            this.LocationService.getPosition().then(function (pos) {
              console.log(pos);
              _this5.latitude = pos.lat;
              _this5.longitud = pos.lng;
            });
          } // Funci??n que muestra un Toast en la parte inferior
          // de la pantalla

        }, {
          key: "showToast",
          value: function showToast(mensaje) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastCtrl.create({
                        message: mensaje,
                        duration: 2000,
                        position: "bottom"
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ImgAlert",
          value: function ImgAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: "<img src=\"data:image/jpeg;base64,".concat(this.currentImage, "\" alt=\"g-maps\" style=\"border-radius: 2px\">"),
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
          key: "ErrorAlert",
          value: function ErrorAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        message: 'No se pudo guardar el reporte.',
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
          key: "SuccesAlert",
          value: function SuccesAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.ionLoaderService.dismissLoader();
                      _context6.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '??Enhorabuena!',
                        message: 'Reporte enviado con exito.',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context6.sent;
                      this.ionLoaderService.dismissLoader();
                      _context6.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "onRegistroReporte",
          value: function onRegistroReporte() {
            var _this6 = this;

            this.ionLoaderService.simpleLoader();
            this.servicio3.StreetNameGoogle(this.latitude, this.longitud).subscribe(function (data) {
              _this6.datos = data;
              _this6.nombrecalle = _this6.datos.results[1].formatted_address;
              console.log(_this6.nombrecalle);
              var cod_usuario, ubicacion, lat, lng, fotos, cod_ayuntamiento;
              cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_8__.Variableglobal.cod_usuario;
              ubicacion = _this6.nombrecalle;
              lat = _this6.latitude;
              lng = _this6.longitud;
              fotos = _this6.currentImage;
              cod_ayuntamiento = _variableglobal__WEBPACK_IMPORTED_MODULE_8__.Variableglobal.cod_ayuntamiento;
              var datos = {
                "ubicacion": ubicacion,
                "lat": lat,
                "lng": lng,
                "fotos": fotos,
                "cod_usuario": cod_usuario,
                "cod_ayuntamiento": cod_ayuntamiento
              };

              _this6.servicio3.RegistroReporte(datos).subscribe(function (data) {
                _this6.datos = data;

                if (_this6.datos == true) {
                  _this6.SuccesAlert();

                  _this6.isBtnRegistroVisible = false;

                  _this6.SlistaDatosInicio(); // this.onLimpiar();

                } else {
                  _this6.ionLoaderService.dismissLoader();

                  _this6.ErrorAlert();

                  _this6.ionLoaderService.dismissLoader();
                }

                _this6.ionLoaderService.dismissLoader();
              }, function (error) {
                _this6.ionLoaderService.dismissLoader();

                alert("Error ");

                _this6.ionLoaderService.dismissLoader();
              });
            });
            this.ionLoaderService.dismissLoader();
          }
        }]);

        return InicioMapaPage;
      }();

      _InicioMapaPage.ctorParameters = function () {
        return [{
          type: _Services_ion_loader_service__WEBPACK_IMPORTED_MODULE_2__.IonLoaderService
        }, {
          type: _Services_datosnecesario_service__WEBPACK_IMPORTED_MODULE_5__.DatosnecesarioService
        }, {
          type: _Services_registro_reporte_service__WEBPACK_IMPORTED_MODULE_3__.RegistroReporteService
        }, {
          type: _Services_datos_inicio_service__WEBPACK_IMPORTED_MODULE_4__.DatosInicioService
        }, {
          type: _Services_location_service__WEBPACK_IMPORTED_MODULE_6__.LocationService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__.Camera
        }];
      };

      _InicioMapaPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-inicio-mapa',
        template: _raw_loader_inicio_mapa_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inicio_mapa_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InicioMapaPage);
      /***/
    },

    /***/
    79110: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map_canvas {\n  width: 100%;\n  height: 60%;\n}\n\n.contenido {\n  height: 80px;\n  width: 10%;\n  float: left;\n}\n\n.BotonesDeInicio {\n  box-shadow: inset 0px -3px 7px 0px #3880FF;\n  background: linear-gradient(to bottom, #3880FF 5%, #3880FF 100%);\n  background-color: #3880FF;\n  border-radius: 9px;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 12px;\n  width: 85px;\n  height: 13px;\n  padding: 26px 42px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #263666;\n}\n\n.BotonesDeInicio:hover {\n  background: linear-gradient(to bottom, #3880FF 5%, #3880FF 100%);\n  background-color: #3880FF;\n}\n\n.BotonesDeInicio:active {\n  position: relative;\n  top: 1px;\n}\n\n.centrar {\n  display: block;\n  text-align: center;\n  line-height: 150%;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby1tYXBhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFRTtFQUNFLDBDQUFBO0VBQ0EsZ0VBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBQ0U7RUFDRSxnRUFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFHSjs7QUFBRTtFQUVFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVKIiwiZmlsZSI6ImluaWNpby1tYXBhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXBfY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgfVxuXG4uY29udGVuaWRve1xuXHRcdGhlaWdodDo4MHB4O1xuXHRcdHdpZHRoOjEwJTtcblx0XHRmbG9hdDpsZWZ0O1xuXHR9XG5cbiAgLkJvdG9uZXNEZUluaWNpbyB7XG4gICAgYm94LXNoYWRvdzppbnNldCAwcHggLTNweCA3cHggMHB4ICMzODgwRkY7XG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzg4MEZGIDUlLCAjMzg4MEZGIDEwMCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzM4ODBGRjtcbiAgICBib3JkZXItcmFkaXVzOjlweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBjb2xvcjojZmZmZmZmO1xuICAgIGZvbnQtZmFtaWx5OkFyaWFsO1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIGhlaWdodDogMTNweDtcbiAgICBwYWRkaW5nOjI2cHggNDJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICB0ZXh0LXNoYWRvdzowcHggMXB4IDBweCAjMjYzNjY2O1xuICB9XG4gIC5Cb3RvbmVzRGVJbmljaW86aG92ZXIge1xuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM4ODBGRiA1JSwgIzM4ODBGRiAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzODgwRkY7XG4gIH1cbiAgLkJvdG9uZXNEZUluaWNpbzphY3RpdmUge1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHRvcDoxcHg7XG4gIH1cblxuICAuY2VudHJhclxue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICBmb250LXNpemU6IDE4cHg7XG5cbn1cbiAgIl19 */";
      /***/
    },

    /***/
    84690: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button persistent=true></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Inicio</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n\n  <div id=\"map_canvas\" style=\"z-index: 1 !important; overflow: auto !important;\"></div>\n\n  <div style=\"margin-top: 40px;\">\n\n    <ion-item lines=\"none\" button detail=\"false\">\n      <div class=\"imagen-codigo\">\n        <img src=\"assets/imagenes/moneda.png\" class=\"imagen\">\n      </div>\n      \n      <div class=\"reportes--datos\">\n        <label style=\"margin-left: 5px; font-size: 12px;\"> Mis Puntos</label><br>\n        <label id=\"cantidadrecibo\" style=\"margin-left: 5px; font-size: 14px;\"> {{puntosacumulados}}</label>\n    </div>\n    \n    <div class=\"imagen-codigo\" style=\"margin-left: 120px;\">\n      <img src=\"assets/imagenes/document.png\" class=\"imagen\">\n    </div>\n    \n    <div class=\"reportes--datos\">\n      <label style=\"margin-left: 5px; font-size: 12px;\"> Mis Reportes</label><br>\n      <label id=\"cantidadreportes\" style=\"margin-left: 5px; font-size: 14px;\"> {{cantidadreportes}}</label>\n    </div>\n    \n    \n    \n  </ion-item>\n  \n  <ion-item  lines=\"none\" button detail=\"false\">\n    <div class=\"imagen-codigo\">\n      <img src=\"assets/imagenes/cuenta.png\" class=\"imagen\">\n    </div>\n    \n    <div class=\"reportes--datos\">\n      <label style=\"margin-left: 5px; font-size: 12px;\"> Mis Recibos</label><br>\n      <label id=\"cantidadrecibos\"  style=\"margin-left: 5px; font-size: 14px;\">{{cantidadrecibo}}</label>\n    </div>\n    \n    <div class=\"imagen-codigo\" style=\"margin-left: 120px;\">\n      <img src=\"assets/imagenes/document.png\" class=\"imagen\">\n    </div>\n    \n    <div class=\"reportes--datos\">\n      <label style=\"margin-left: 5px; font-size: 12px;\"> En Espera</label><br>\n      <label id=\"reportesenespera\" style=\"margin-left: 5px; font-size: 14px;\">{{reportesenespera}}</label>\n    </div>\n    \n    \n    \n  </ion-item>\n</div>\n  \n  \n  <!-- <div style=\"padding: 15px;\"> -->\n    <!-- <img src=\"assets/imagenes/moneda.png\"> \n    <label style=\"font-size: 12px; margin-left: 2px; margin-bottom: 15px;\">Mis Puntos</label><br>\n      <label style=\"font-size: 12px; margin-bottom: 10px;\"> 45 </label>       \n    </div>\n     -->\n     <div style=\"padding: 15px;\">\n\n       <ion-button expand=\"block\" style=\"margin-top: 65px;\"  [hidden]=\"!isBtnCamaraVisible\" (click)=\"takePicture()\">TOMAR FOTO</ion-button>\n       <ion-button expand=\"block\" [hidden]=\"!isBtnRegistroVisible\" (click)=\"onRegistroReporte()\">ENVIAR REPORTE</ion-button>\n       \n      </div>\n    \n    <!-- <ion-fab-button style=\"margin: 10px;\" [hidden]=\"!isBtnCamaraVisible\" (click)=\"takePicture()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button> -->\n          <!-- <ion-fab-button style=\"margin: 10px;\" >\n              <ion-icon name=\"checkmark\"></ion-icon>\n          </ion-fab-button> -->\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_inicio-mapa_inicio-mapa_module_ts-es5.js.map