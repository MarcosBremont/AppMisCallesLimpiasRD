(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_mis-reportes_mis-reportes_module_ts"],{

/***/ 7909:
/*!*************************************************!*\
  !*** ./src/app/Services/misreportes.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisreportesService": () => (/* binding */ MisreportesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



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

/***/ 8088:
/*!*************************************************************!*\
  !*** ./src/app/mis-reportes/mis-reportes-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisReportesPageRoutingModule": () => (/* binding */ MisReportesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _mis_reportes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mis-reportes.page */ 2348);




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

/***/ 3348:
/*!*****************************************************!*\
  !*** ./src/app/mis-reportes/mis-reportes.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisReportesPageModule": () => (/* binding */ MisReportesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _mis_reportes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mis-reportes-routing.module */ 8088);
/* harmony import */ var _mis_reportes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mis-reportes.page */ 2348);







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

/***/ 2348:
/*!***************************************************!*\
  !*** ./src/app/mis-reportes/mis-reportes.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisReportesPage": () => (/* binding */ MisReportesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_mis_reportes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mis-reportes.page.html */ 5267);
/* harmony import */ var _mis_reportes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mis-reportes.page.scss */ 8888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _Services_misreportes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/misreportes.service */ 7909);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _variableglobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variableglobal */ 3296);
/* harmony import */ var _Services_registro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/registro.service */ 8524);









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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXMtcmVwb3J0ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 5267:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mis-reportes/mis-reportes.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Mis Reportes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"contenedor--reportes\">\n\n  <!-- <img  [src]=\"currentImage\" *ngIf=\"currentImage\"> -->\n  <ion-item class=\"reportes-header\">\n      <ion-label>\n          ---\n      </ion-label>\n      <ion-label class=\"ubicacion\">\n          Ubicación\n      </ion-label>\n      <ion-label class=\"codigo\">\n          Código\n      </ion-label>\n  </ion-item>\n  <ion-list class=\"reportes\" *ngFor=\"let reporte of reportes; let i = index\">\n\n      <ion-item (click)=\"showAlert(i)\" button detail=\"false\">\n          <img src=\"assets/imagenes/basura.png\" class=\"imagen\">\n\n\n\n          <div class=\"reportes--datos\">\n              <!-- <ion-label>&nbsp;<strong>#: {{reporte.cod_reporte}}&nbsp;</strong> </ion-label>  -->\n              <!-- <ion-label>&nbsp;{{reporte.ubicacion}}</ion-label> -->\n              <ion-label class=\"reportes--datos--ubicacion\" id=\"{{'cod_reportessssss' + i}}\"> </ion-label>\n              <div class=\"reportes--datos__latlong\">\n                  <ion-label>&nbsp;Latitud & Lngitud:</ion-label>\n                  <ion-label style=\"color: #569CD6;\">&nbsp;{{reporte.lat}}, {{reporte.lng}}</ion-label>\n              </div>\n\n              <ion-label class=\"reportes--datos__codigo\" id=\"{{'cod_reporte' + i}}\"> {{reporte.cod_reporte}} </ion-label>\n\n          </div>\n          <!-- <ion-input [value]=\"title\"></ion-input> -->\n      </ion-item>\n  </ion-list>\n\n\n  <!-- <ion-card >\n<ion-list class=\"reportes\" *ngFor=\"let nivel of niveles\">\n \n\n\n<ion-label   class=\"reportes--datos__codigo\" > {{nivel.cod_nivel}} </ion-label> \n<ion-input [value]=\"title\"></ion-input> -->\n  <!-- </ion-item>\n</ion-list>\n</ion-card> -->\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_mis-reportes_mis-reportes_module_ts.js.map