(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_mensajeria_mensajeria_module_ts"],{

/***/ 68969:
/*!************************************************!*\
  !*** ./src/app/Services/mensajeria.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MensajeriaService": function() { return /* binding */ MensajeriaService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let MensajeriaService = class MensajeriaService {
    constructor(http) {
        this.http = http;
    }
    MostrarMensajes(cod_usuario) {
        // return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/consultarrecibosporid?cod_usuario="+cod_usuario+"");
        return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarMensajes?cod_usuario=" + cod_usuario + "");
    }
    RegistrarMensajes(cod_usuario, mensaje) {
        // return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/consultarrecibosporid?cod_usuario="+cod_usuario+"");
        return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/RegistrarMensajesErrorAceptacion?cod_usuario=" + cod_usuario + " &mensajes=" + mensaje);
    }
};
MensajeriaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
MensajeriaService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MensajeriaService);



/***/ }),

/***/ 752:
/*!*********************************************************!*\
  !*** ./src/app/mensajeria/mensajeria-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MensajeriaPageRoutingModule": function() { return /* binding */ MensajeriaPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mensajeria_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mensajeria.page */ 96751);




const routes = [
    {
        path: '',
        component: _mensajeria_page__WEBPACK_IMPORTED_MODULE_0__.MensajeriaPage
    }
];
let MensajeriaPageRoutingModule = class MensajeriaPageRoutingModule {
};
MensajeriaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MensajeriaPageRoutingModule);



/***/ }),

/***/ 7071:
/*!*************************************************!*\
  !*** ./src/app/mensajeria/mensajeria.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MensajeriaPageModule": function() { return /* binding */ MensajeriaPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mensajeria_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mensajeria-routing.module */ 752);
/* harmony import */ var _mensajeria_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensajeria.page */ 96751);







let MensajeriaPageModule = class MensajeriaPageModule {
};
MensajeriaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mensajeria_routing_module__WEBPACK_IMPORTED_MODULE_0__.MensajeriaPageRoutingModule
        ],
        declarations: [_mensajeria_page__WEBPACK_IMPORTED_MODULE_1__.MensajeriaPage]
    })
], MensajeriaPageModule);



/***/ }),

/***/ 96751:
/*!***********************************************!*\
  !*** ./src/app/mensajeria/mensajeria.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MensajeriaPage": function() { return /* binding */ MensajeriaPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mensajeria_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mensajeria.page.html */ 1193);
/* harmony import */ var _mensajeria_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mensajeria.page.scss */ 13776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Services_mensajeria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/mensajeria.service */ 68969);
/* harmony import */ var _variableglobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variableglobal */ 13296);






let MensajeriaPage = class MensajeriaPage {
    constructor(servicio) {
        this.servicio = servicio;
        this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_usuario;
    }
    ngOnInit() {
        this.servicio.MostrarMensajes(this.cod_usuario)
            .subscribe((data) => { this.Mensajes = data; }, (error) => { console.log(error); });
    }
};
MensajeriaPage.ctorParameters = () => [
    { type: _Services_mensajeria_service__WEBPACK_IMPORTED_MODULE_2__.MensajeriaService }
];
MensajeriaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-mensajeria',
        template: _raw_loader_mensajeria_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mensajeria_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MensajeriaPage);



/***/ }),

/***/ 13776:
/*!*************************************************!*\
  !*** ./src/app/mensajeria/mensajeria.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW5zYWplcmlhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1193:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mensajeria/mensajeria.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <ion-title>Mensajería</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"contenedor-recibos\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">Mis Bonos</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-list class=\"mensajeria\">\n\n        <ion-item class=\"mensajeria--elementos\" *ngFor=\"let mensaje of Mensajes\">\n\n            <ion-card class=\"mensajeria--elementos\">\n\n                <!-- <ion-label class=\"contenedor-recibos--label\">\n                    {{mensaje.cod_mensaje}}\n                </ion-label> -->\n\n                <div>\n                    <p class=\"parrafo\">\n                        {{mensaje.mensajes}}\n\n                    </p>\n\n                </div>\n                <!-- <div class=\"contenedor-recibos--label contenedor-recibos--label__codigo\">\n                    <ion-label slot=\"end\">\n                        {{mensaje.fecha}}\n                    </ion-label>\n\n                </div> -->\n            </ion-card>\n\n        </ion-item>\n\n    </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_mensajeria_mensajeria_module_ts-es2015.js.map