(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_informate_informate_module_ts"],{

/***/ 1525:
/*!***********************************************!*\
  !*** ./src/app/Services/informate.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformateService": () => (/* binding */ InformateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);



let InformateService = class InformateService {
    constructor(http) {
        this.http = http;
    }
    obtenerPostEducacionales() {
        return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodePost');
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

/***/ 8381:
/*!*******************************************************!*\
  !*** ./src/app/informate/informate-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformatePageRoutingModule": () => (/* binding */ InformatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _informate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informate.page */ 6811);




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

/***/ 2368:
/*!***********************************************!*\
  !*** ./src/app/informate/informate.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformatePageModule": () => (/* binding */ InformatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _informate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informate-routing.module */ 8381);
/* harmony import */ var _informate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informate.page */ 6811);







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

/***/ 6811:
/*!*********************************************!*\
  !*** ./src/app/informate/informate.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformatePage": () => (/* binding */ InformatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_informate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./informate.page.html */ 8157);
/* harmony import */ var _informate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informate.page.scss */ 477);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _Services_informate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/informate.service */ 1525);





let InformatePage = class InformatePage {
    constructor(servicio) {
        this.servicio = servicio;
    }
    ngOnInit() {
        this.servicio.obtenerPostEducacionales()
            .subscribe((data) => { this.posteducacionales = data; }, (error) => { console.log(error); });
    }
};
InformatePage.ctorParameters = () => [
    { type: _Services_informate_service__WEBPACK_IMPORTED_MODULE_2__.InformateService }
];
InformatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-informate',
        template: _raw_loader_informate_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_informate_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InformatePage);



/***/ }),

/***/ 477:
/*!***********************************************!*\
  !*** ./src/app/informate/informate.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvcm1hdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 8157:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/informate/informate.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Informate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n      <ion-toolbar>\n          <ion-title size=\"large\">Informate</ion-title>\n      </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n      <ion-card *ngFor=\"let posteducacional of posteducacionales\" style=\"padding: 20px;\">\n          <ion-card-header>\n              <ion-card-title size=\"small\"><b>{{posteducacional.titulo}}</b></ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n              <img src={{posteducacional.imagen}}>\n              <ion-label class=\"centrarlabel\">{{posteducacional.descripcion}}</ion-label>\n              <br>\n              <br>\n              <label style=\"font-size: small;\"><b>{{posteducacional.fecha}}</b></label>\n          </ion-card-content>\n\n\n      </ion-card>\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_informate_informate_module_ts.js.map