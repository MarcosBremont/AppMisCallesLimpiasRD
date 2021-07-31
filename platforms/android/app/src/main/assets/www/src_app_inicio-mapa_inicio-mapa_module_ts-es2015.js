(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_inicio-mapa_inicio-mapa_module_ts"],{

/***/ 98260:
/*!**********************************************!*\
  !*** ./src/app/Services/location.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationService": function() { return /* binding */ LocationService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let LocationService = class LocationService {
    constructor() { }
    getPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            }, err => {
                reject(err);
            });
        });
    }
};
LocationService.ctorParameters = () => [];
LocationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], LocationService);



/***/ }),

/***/ 65047:
/*!******************************************************!*\
  !*** ./src/app/Services/registro-reporte.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroReporteService": function() { return /* binding */ RegistroReporteService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let RegistroReporteService = class RegistroReporteService {
    constructor(http) {
        this.http = http;
        this.baseURL = "http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/GuardarFotosOrden";
        this.llave = "AIzaSyABac4fl7IWEhoH7cQr-p-het84Kz12g50";
        this.urltotal = "";
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
    }
    RegistroReporte(datos) {
        return this.http.post(this.baseURL, datos);
    }
    StreetNameGoogle(lat, lng) {
        this.urltotal = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + this.llave;
        console.log(this.urltotal);
        return this.http.get(this.urltotal);
    }
};
RegistroReporteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
RegistroReporteService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RegistroReporteService);



/***/ }),

/***/ 59889:
/*!***********************************************************!*\
  !*** ./src/app/inicio-mapa/inicio-mapa-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioMapaPageRoutingModule": function() { return /* binding */ InicioMapaPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _inicio_mapa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-mapa.page */ 43937);




const routes = [
    {
        path: '',
        component: _inicio_mapa_page__WEBPACK_IMPORTED_MODULE_0__.InicioMapaPage
    }
];
let InicioMapaPageRoutingModule = class InicioMapaPageRoutingModule {
};
InicioMapaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioMapaPageRoutingModule);



/***/ }),

/***/ 97740:
/*!***************************************************!*\
  !*** ./src/app/inicio-mapa/inicio-mapa.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioMapaPageModule": function() { return /* binding */ InicioMapaPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _inicio_mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-mapa-routing.module */ 59889);
/* harmony import */ var _inicio_mapa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-mapa.page */ 43937);







let InicioMapaPageModule = class InicioMapaPageModule {
};
InicioMapaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioMapaPageRoutingModule
        ],
        declarations: [_inicio_mapa_page__WEBPACK_IMPORTED_MODULE_1__.InicioMapaPage]
    })
], InicioMapaPageModule);



/***/ }),

/***/ 43937:
/*!*************************************************!*\
  !*** ./src/app/inicio-mapa/inicio-mapa.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioMapaPage": function() { return /* binding */ InicioMapaPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_inicio_mapa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inicio-mapa.page.html */ 84690);
/* harmony import */ var _inicio_mapa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio-mapa.page.scss */ 79110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Services_ion_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/ion-loader.service */ 35014);
/* harmony import */ var _Services_registro_reporte_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/registro-reporte.service */ 65047);
/* harmony import */ var _Services_datosnecesario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/datosnecesario.service */ 99736);
/* harmony import */ var _Services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/location.service */ 98260);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _variableglobal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../variableglobal */ 13296);
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-maps */ 37385);




// import { base64StringToBlob } from 'blob-util';
// import { Base64 } from '@ionic-native/base64/ngx';











let InicioMapaPage = class InicioMapaPage {
    constructor(
    // private base64: Base64,
    ionLoaderService, servicio2, servicio3, LocationService, loadingCtrl, toastCtrl, alertController, nav, platform, router, camera) {
        this.ionLoaderService = ionLoaderService;
        this.servicio2 = servicio2;
        this.servicio3 = servicio3;
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
        this.usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_7__.Variableglobal.nombre_usuario;
        console.log(platform.height());
        this.height = platform.height();
    }
    takePicture() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.currentImage = imageData;
            this.Reportar();
            this.ImgAlert();
            this.VerificarSiHayFoto();
        }, (err) => {
            // Handle error
            console.log("Camera issue:" + err);
        });
    }
    //Prueba
    pruebaCodNivel() {
        console.log(_variableglobal__WEBPACK_IMPORTED_MODULE_7__.Variableglobal.cod_nivel);
    }
    //Aqui arriba mando por consola el codigo nivel por un metodo para ver
    //pero si mando otra cosa me lo devuelve correctamente
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.VerificarSiHayFoto();
            yield this.platform.ready();
            this.onload();
            yield this.loadMap();
            yield this.localizar();
        });
    }
    VerificarSiHayFoto() {
        if (this.currentImage != null) {
            this.isBtnRegistroVisible = true;
            this.isBtnCamaraVisible = true;
        }
        else {
            this.isBtnRegistroVisible = false;
            this.isBtnCamaraVisible = true;
        }
    }
    loadMap() {
        // Esta función inicializa la propiedad de clase
        // map
        // que va a contener el control de nuestro mapa de google
        // Para crear nuestro mapa debemos enviar como parametros
        // el id del div en donde se va a renderizar el mapa (paso anterior)
        // y las opciones que configuran nuestro mapa
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__.GoogleMaps.create("map_canvas", {
            camera: {
                target: {
                    lat: -2.1537488,
                    lng: -79.8883037,
                },
                zoom: 18,
                tilt: 30
            }
        });
    }
    onload() {
        this.servicio2.obtenerDatosNecesarios(this.usuario).subscribe((data) => {
            this.datos = data;
        }, (error) => {
            alert("ErrorDeDatosNecesarios");
        });
    }
    localizar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // Limpiamos todos los elementos de nuestro mapa
            this.map.clear();
            // Creamos un componente de Ionic para mostrar un mensaje
            // mientras obtenemos esperamos que termine el proceso de
            // obtener la ubicación
            this.loading = yield this.loadingCtrl.create({
                message: "Espera por favor..."
            });
            // Presentamos el componente creado en el paso anterior
            yield this.loading.present();
            // Ejecutamos el método getMyLocation de nuestra propiedad de clase
            // map
            // para obtener nuestra ubicación actual
            this.map
                .getMyLocation()
                .then((location) => {
                // Una vez obtenida la ubicación cerramos el mensaje de diálogo
                this.loading.dismiss();
                // Movemos la camara a nuestra ubicación con una pequeña animación
                this.map.animateCamera({
                    target: location.latLng,
                    zoom: 17,
                    tilt: 30
                });
                // Agregamos un nuevo marcador
                let marker = this.map.addMarkerSync({
                    title: "Estoy aquí!",
                    // snippet: "This plugin is awesome!",
                    position: location.latLng,
                    animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__.GoogleMapsAnimation.BOUNCE
                }); // Mostramos un InfoWindow
                marker.showInfoWindow();
                // Podemos configurar un evento que se ejecute cuando
                // se haya dado clic
                marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_8__.GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
                    this.showToast("clicked!");
                });
            })
                .catch(error => {
                // En caso de que haya un problema en obtener la
                // ubicación
                this.loading.dismiss();
                this.showToast(error.error_message);
            });
        });
    }
    Reportar() {
        // var urlGoogleStreetName = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY";
        this.LocationService.getPosition().then(pos => {
            console.log(pos);
            this.latitude = pos.lat;
            this.longitud = pos.lng;
        });
    }
    // Función que muestra un Toast en la parte inferior
    // de la pantalla
    showToast(mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: mensaje,
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
    ImgAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: `<img src="data:image/jpeg;base64,${this.currentImage}" alt="g-maps" style="border-radius: 2px">`,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ErrorAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                message: 'No se pudo guardar el reporte.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    SuccesAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '¡Enhorabuena!',
                message: 'Reporte enviado con exito.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    onRegistroReporte() {
        this.ionLoaderService.simpleLoader();
        this.servicio3.StreetNameGoogle(this.latitude, this.longitud).subscribe((data) => {
            this.datos = data;
            this.nombrecalle = this.datos.results[1].formatted_address;
            console.log(this.nombrecalle);
            let cod_usuario, ubicacion, lat, lng, fotos;
            cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_7__.Variableglobal.cod_usuario;
            ubicacion = this.nombrecalle;
            lat = this.latitude;
            lng = this.longitud;
            fotos = this.currentImage;
            let datos = {
                "ubicacion": ubicacion,
                "lat": lat,
                "lng": lng,
                "fotos": fotos,
                "cod_usuario": cod_usuario
            };
            this.servicio3.RegistroReporte(datos).subscribe((data) => {
                this.datos = data;
                if (this.datos == true) {
                    this.SuccesAlert();
                    // this.onLimpiar();
                }
                else {
                    this.ErrorAlert();
                }
                this.ionLoaderService.dismissLoader();
            }, (error) => {
                alert("Error ");
            });
        });
    }
};
InicioMapaPage.ctorParameters = () => [
    { type: _Services_ion_loader_service__WEBPACK_IMPORTED_MODULE_2__.IonLoaderService },
    { type: _Services_datosnecesario_service__WEBPACK_IMPORTED_MODULE_4__.DatosnecesarioService },
    { type: _Services_registro_reporte_service__WEBPACK_IMPORTED_MODULE_3__.RegistroReporteService },
    { type: _Services_location_service__WEBPACK_IMPORTED_MODULE_5__.LocationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera }
];
InicioMapaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-inicio-mapa',
        template: _raw_loader_inicio_mapa_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inicio_mapa_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InicioMapaPage);



/***/ }),

/***/ 79110:
/*!***************************************************!*\
  !*** ./src/app/inicio-mapa/inicio-mapa.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map_canvas {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby1tYXBhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiaW5pY2lvLW1hcGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcF9jYW52YXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfSJdfQ== */");

/***/ }),

/***/ 84690:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio-mapa/inicio-mapa.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button persistent=true></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Inicio</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n\n  <div id=\"map_canvas\" style=\"z-index: 1 !important; overflow: auto !important;\"></div>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n      \n      <ion-fab-button style=\"margin: 10px;\" [hidden]=\"!isBtnCamaraVisible\" (click)=\"takePicture()\">\n        <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n    \n          <ion-fab-button style=\"margin: 10px;\" [hidden]=\"!isBtnRegistroVisible\" (click)=\"onRegistroReporte()\">\n              <ion-icon name=\"checkmark\"></ion-icon>\n          </ion-fab-button>\n\n  </ion-fab>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_inicio-mapa_inicio-mapa_module_ts-es2015.js.map