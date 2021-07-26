(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_mis-reportes_mis-reportes_module_ts"],{

/***/ 67909:
/*!*************************************************!*\
  !*** ./src/app/Services/misreportes.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisreportesService": function() { return /* binding */ MisreportesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let MisreportesService = class MisreportesService {
    constructor(http) {
        this.http = http;
    }
    obtenerMisReportes(cod_usuario) {
        return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadoDeReportes?cod_usuario=' + cod_usuario + "");
    }
    //   return this.http.get('https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadoDeReportes/'+cod_usuario+"");
    // }
    obtenerFoto(cod_reporte) {
        return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/obtenerFoto?cod_reporte=' + cod_reporte + "");
    }
};
MisreportesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
MisreportesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MisreportesService);



/***/ }),

/***/ 98088:
/*!*************************************************************!*\
  !*** ./src/app/mis-reportes/mis-reportes-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisReportesPageRoutingModule": function() { return /* binding */ MisReportesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mis_reportes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mis-reportes.page */ 22348);




const routes = [
    {
        path: '',
        component: _mis_reportes_page__WEBPACK_IMPORTED_MODULE_0__.MisReportesPage
    }
];
let MisReportesPageRoutingModule = class MisReportesPageRoutingModule {
};
MisReportesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MisReportesPageRoutingModule);



/***/ }),

/***/ 13348:
/*!*****************************************************!*\
  !*** ./src/app/mis-reportes/mis-reportes.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisReportesPageModule": function() { return /* binding */ MisReportesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mis_reportes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mis-reportes-routing.module */ 98088);
/* harmony import */ var _mis_reportes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mis-reportes.page */ 22348);







let MisReportesPageModule = class MisReportesPageModule {
};
MisReportesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mis_reportes_routing_module__WEBPACK_IMPORTED_MODULE_0__.MisReportesPageRoutingModule
        ],
        declarations: [_mis_reportes_page__WEBPACK_IMPORTED_MODULE_1__.MisReportesPage]
    })
], MisReportesPageModule);



/***/ }),

/***/ 22348:
/*!***************************************************!*\
  !*** ./src/app/mis-reportes/mis-reportes.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisReportesPage": function() { return /* binding */ MisReportesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mis_reportes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mis-reportes.page.html */ 33937);
/* harmony import */ var _mis_reportes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mis-reportes.page.scss */ 8888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Services_misreportes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/misreportes.service */ 67909);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _variableglobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variableglobal */ 13296);
/* harmony import */ var _Services_registro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/registro.service */ 2889);









let MisReportesPage = class MisReportesPage {
    constructor(servicio, alertController, nivelUsuario, modalCtrl) {
        this.servicio = servicio;
        this.alertController = alertController;
        this.nivelUsuario = nivelUsuario;
        this.modalCtrl = modalCtrl;
        this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_usuario;
    }
    ImgAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: `<img src="${this.currentImage}" alt="g-maps" style="border-radius: 2px">`,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_usuario;
        this.servicio.obtenerMisReportes(this.cod_usuario).subscribe((data) => { this.reportes = data; }, (error) => { console.log(error); });
        // this.obtenerFoto(); 
        this.nivelUsuario.NivelUsuario(this.cod_usuario).subscribe((data) => { this.niveles = data; }, (error) => { console.log(error); });
    }
    obtenerFoto(cod_reporte) {
        this.servicio.obtenerFoto(cod_reporte).subscribe((data) => {
            this.datos = data;
            if (this.datos.respuesta == "OK") {
                this.datos = data;
                this.currentImage = this.datos.fotos;
                this.ImgAlert();
            }
            else {
                alert("Hubo un error al cargar la foto");
            }
        }, (error) => {
            alert("Hubo un error al cargar la foto");
        });
    }
    showAlert(i) {
        this.cod_reporte = (document.getElementById('cod_reporte' + i).textContent);
        this.obtenerFoto(this.cod_reporte);
    }
};
MisReportesPage.ctorParameters = () => [
    { type: _Services_misreportes_service__WEBPACK_IMPORTED_MODULE_2__.MisreportesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _Services_registro_service__WEBPACK_IMPORTED_MODULE_4__.RegistroService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
MisReportesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-mis-reportes',
        template: _raw_loader_mis_reportes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mis_reportes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MisReportesPage);



/***/ }),

/***/ 8888:
/*!*****************************************************!*\
  !*** ./src/app/mis-reportes/mis-reportes.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXMtcmVwb3J0ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 33937:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mis-reportes/mis-reportes.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Mis Reportes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"contenedor--reportes\">\r\n\r\n  <!-- <img  [src]=\"currentImage\" *ngIf=\"currentImage\"> -->\r\n  <ion-item class=\"reportes-header\">\r\n      <ion-label>\r\n          ---\r\n      </ion-label>\r\n      <ion-label class=\"ubicacion\">\r\n          Ubicación\r\n      </ion-label>\r\n      <ion-label class=\"codigo\">\r\n          Código\r\n      </ion-label>\r\n  </ion-item>\r\n  <ion-list class=\"reportes\" *ngFor=\"let reporte of reportes; let i = index\">\r\n\r\n      <ion-item (click)=\"showAlert(i)\" button detail=\"false\">\r\n          <img src=\"assets/imagenes/basura.png\" class=\"imagen\">\r\n\r\n\r\n\r\n          <div class=\"reportes--datos\">\r\n            <ion-label style=\"color: #569CD6;\">&nbsp;{{reporte.ubicacion}}</ion-label>\r\n\r\n              <ion-label class=\"reportes--datos--ubicacion\" id=\"{{'cod_reportessssss' + i}}\"> </ion-label>\r\n              <div class=\"reportes--datos__latlong\">\r\n                  <ion-label>&nbsp;Latitud & Longitud</ion-label>\r\n                  <ion-label style=\"color: #569CD6;\">&nbsp;{{reporte.lat}}, {{reporte.lng}}</ion-label>\r\n              </div>\r\n\r\n              <ion-label class=\"reportes--datos__codigo\" id=\"{{'cod_reporte' + i}}\"> {{reporte.cod_reporte}} </ion-label>\r\n\r\n          </div>\r\n          <!-- <ion-input [value]=\"title\"></ion-input> -->\r\n      </ion-item>\r\n  </ion-list>\r\n\r\n\r\n  <!-- <ion-card >\r\n<ion-list class=\"reportes\" *ngFor=\"let nivel of niveles\">\r\n \r\n\r\n\r\n<ion-label   class=\"reportes--datos__codigo\" > {{nivel.cod_nivel}} </ion-label> \r\n<ion-input [value]=\"title\"></ion-input> -->\r\n  <!-- </ion-item>\r\n</ion-list>\r\n</ion-card> -->\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_mis-reportes_mis-reportes_module_ts-es2015.js.map