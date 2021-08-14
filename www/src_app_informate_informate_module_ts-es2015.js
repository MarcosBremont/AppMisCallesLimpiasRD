(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_informate_informate_module_ts"],{

/***/ 51525:
/*!***********************************************!*\
  !*** ./src/app/Services/informate.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformateService": function() { return /* binding */ InformateService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let InformateService = class InformateService {
    constructor(http) {
        this.http = http;
    }
    obtenerPostEducacionales(cod_ayuntamiento) {
        return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodePost?cod_ayuntamiento=' + cod_ayuntamiento + "");
    }
};
InformateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
InformateService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], InformateService);



/***/ }),

/***/ 58381:
/*!*******************************************************!*\
  !*** ./src/app/informate/informate-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformatePageRoutingModule": function() { return /* binding */ InformatePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _informate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informate.page */ 22975);




const routes = [
    {
        path: '',
        component: _informate_page__WEBPACK_IMPORTED_MODULE_0__.InformatePage
    }
];
let InformatePageRoutingModule = class InformatePageRoutingModule {
};
InformatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InformatePageRoutingModule);



/***/ }),

/***/ 42368:
/*!***********************************************!*\
  !*** ./src/app/informate/informate.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformatePageModule": function() { return /* binding */ InformatePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _informate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informate-routing.module */ 58381);
/* harmony import */ var _informate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informate.page */ 22975);







let InformatePageModule = class InformatePageModule {
};
InformatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _informate_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformatePageRoutingModule
        ],
        declarations: [_informate_page__WEBPACK_IMPORTED_MODULE_1__.InformatePage]
    })
], InformatePageModule);



/***/ }),

/***/ 22975:
/*!*********************************************!*\
  !*** ./src/app/informate/informate.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformatePage": function() { return /* binding */ InformatePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_informate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./informate.page.html */ 91269);
/* harmony import */ var _informate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informate.page.scss */ 50477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Services_informate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/informate.service */ 51525);
/* harmony import */ var _variableglobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variableglobal */ 13296);






let InformatePage = class InformatePage {
    constructor(servicio) {
        this.servicio = servicio;
    }
    ngOnInit() {
        this.servicio.obtenerPostEducacionales(_variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_ayuntamiento)
            .subscribe((data) => { this.posteducacionales = data; }, (error) => { console.log(error); });
    }
};
InformatePage.ctorParameters = () => [
    { type: _Services_informate_service__WEBPACK_IMPORTED_MODULE_2__.InformateService }
];
InformatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-informate',
        template: _raw_loader_informate_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_informate_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InformatePage);



/***/ }),

/***/ 50477:
/*!***********************************************!*\
  !*** ./src/app/informate/informate.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvcm1hdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 91269:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/informate/informate.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Informate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n      <ion-toolbar>\n          <ion-title size=\"large\">Informate</ion-title>\n      </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n      <ion-card *ngFor=\"let posteducacional of posteducacionales\" style=\"padding: 20px;\">\n          <ion-card-header>\n              <ion-card-title size=\"small\"><b>{{posteducacional.titulo}}</b></ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n              <img src={{posteducacional.imagen}}>\n              <ion-label class=\"centrarlabel\">{{posteducacional.descripcion}}</ion-label>\n              <br>\n              <br>\n              <label style=\"font-size: small;\"><b>{{posteducacional.fecha}}</b></label>\n          </ion-card-content>\n\n\n      </ion-card>\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_informate_informate_module_ts-es2015.js.map