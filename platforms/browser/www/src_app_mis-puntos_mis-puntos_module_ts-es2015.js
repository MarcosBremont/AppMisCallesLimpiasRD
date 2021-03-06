(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_mis-puntos_mis-puntos_module_ts"],{

/***/ 71306:
/*!*********************************************************!*\
  !*** ./src/app/mis-puntos/mis-puntos-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisPuntosPageRoutingModule": function() { return /* binding */ MisPuntosPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mis_puntos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mis-puntos.page */ 91142);




const routes = [
    {
        path: '',
        component: _mis_puntos_page__WEBPACK_IMPORTED_MODULE_0__.MisPuntosPage
    }
];
let MisPuntosPageRoutingModule = class MisPuntosPageRoutingModule {
};
MisPuntosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MisPuntosPageRoutingModule);



/***/ }),

/***/ 66869:
/*!*************************************************!*\
  !*** ./src/app/mis-puntos/mis-puntos.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisPuntosPageModule": function() { return /* binding */ MisPuntosPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mis_puntos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mis-puntos-routing.module */ 71306);
/* harmony import */ var _mis_puntos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mis-puntos.page */ 91142);







let MisPuntosPageModule = class MisPuntosPageModule {
};
MisPuntosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mis_puntos_routing_module__WEBPACK_IMPORTED_MODULE_0__.MisPuntosPageRoutingModule
        ],
        declarations: [_mis_puntos_page__WEBPACK_IMPORTED_MODULE_1__.MisPuntosPage]
    })
], MisPuntosPageModule);



/***/ }),

/***/ 91142:
/*!***********************************************!*\
  !*** ./src/app/mis-puntos/mis-puntos.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisPuntosPage": function() { return /* binding */ MisPuntosPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mis_puntos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mis-puntos.page.html */ 72471);
/* harmony import */ var _mis_puntos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mis-puntos.page.scss */ 19879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Services_mispuntos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/mispuntos.service */ 59283);
/* harmony import */ var _variableglobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variableglobal */ 13296);






let MisPuntosPage = class MisPuntosPage {
    constructor(servicio) {
        this.servicio = servicio;
        this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_usuario;
        console.log("Entreeee a mis puntos POR EL CONSTRUCTOR ");
    }
    ngOnInit() {
        console.log("Entreeee a mis puntos ");
        console.log('si muestra este funciona a la primera');
        this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_usuario;
        this.autoClick();
        this.servicio.obtenerMisPuntos(this.cod_usuario)
            .subscribe((data) => { this.misPuntos = data; }, (error) => { console.log(error); });
        //Este variable llamada this.cod_usuario almacena el ID del usuario. 
        console.log(_variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_ayuntamiento);
        if (_variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_ayuntamiento == 2) {
            this.currentImage = "assets/imagenes/Jarabacoa.png";
            this.name = "Ayuntamiento Jarabacoa";
        }
        else {
            this.currentImage = "assets/imagenes/AyuntamientoDeSantiago.jpg";
            this.name = "Ayuntamiento Santiago";
        }
    }
    cargarDatos() {
        this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_usuario;
        this.cod_ayuntamientos = _variableglobal__WEBPACK_IMPORTED_MODULE_3__.Variableglobal.cod_ayuntamiento;
        console.log('COD AYUNTAMIENTO :', this.cod_ayuntamientos);
        this.servicio.obtenerMisPuntos(this.cod_usuario)
            .subscribe((data) => { this.misPuntos = data; }, (error) => { console.log(error); });
    }
    autoClick() {
        document.getElementById('prueba').click();
        document.getElementById('prueba').click();
        document.getElementById('prueba').click();
    }
};
MisPuntosPage.ctorParameters = () => [
    { type: _Services_mispuntos_service__WEBPACK_IMPORTED_MODULE_2__.MispuntosService }
];
MisPuntosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-mis-puntos',
        template: _raw_loader_mis_puntos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mis_puntos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MisPuntosPage);



/***/ }),

/***/ 19879:
/*!*************************************************!*\
  !*** ./src/app/mis-puntos/mis-puntos.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centrar {\n  display: block;\n  text-align: center;\n  line-height: 150%;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pcy1wdW50b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoibWlzLXB1bnRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJhclxyXG57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ 72471:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mis-puntos/mis-puntos.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <!-- <ion-card *ngFor=\"let datosMisPuntos of misPuntos\"> -->\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-label *ngFor=\"let datosMisPuntos of misPuntos\" class=\"ocultar\" id=\"cod_puntos\">{{datosMisPuntos.cod_puntos}}</ion-label>\r\n\r\n      <ion-label *ngFor=\"let datosMisPuntos of misPuntos\" slot=\"end\" style=\"padding: 5px;\">{{datosMisPuntos.puntosacumulados}}</ion-label>\r\n      <img slot=\"end\" style=\"padding: 5px;\" src=\"assets/imagenes/moneda.png\">\r\n      <ion-title>Mis Puntos</ion-title>\r\n\r\n\r\n  </ion-toolbar>\r\n  <!-- </ion-card> -->\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n      <ion-toolbar>\r\n          <ion-title size=\"large\">Mis Puntos</ion-title>\r\n      </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n  <div id=\"container\">\r\n\r\n      <ion-card *ngFor=\"let datosMisPuntos of misPuntos\">\r\n          <ion-card-header>\r\n\r\n\r\n              <ion-card-subtitle>Obten puntos y canjealos</ion-card-subtitle>\r\n              <ion-card-title>Cambia tus puntos por productos</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n              Cambia tus puntos por premios, puedes acceder a una lista de articulos para el hogar u optar por otros regalos que de esta manera puedan comprar comida, ropa o algun otro bien necesario.\r\n\r\n              <button routerLink=\"/recompensas\" routerDirection=\"root\" style=\"background-color: #428CFF; border-radius: 5px;\" ion-button icon-start clear item-end>\r\n Leer mas.\r\n <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\r\n\r\n</button>\r\n\r\n          </ion-card-content>\r\n\r\n\r\n      </ion-card>\r\n\r\n      <ion-card *ngFor=\"let datosMisPuntos of misPuntos\">\r\n          <ion-card-header>\r\n\r\n\r\n              <ion-card-subtitle>Ayuda a los demas</ion-card-subtitle>\r\n              <ion-card-title>Dona tus puntos a organizaciones</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n              Dona tus puntos a organizaciones beneficas para que de esta manera puedas ayudar a los demas.\r\n\r\n              <button routerDirection=\"root\" style=\"background-color: #428CFF; border-radius: 5px;\" ion-button icon-start clear item-end>\r\n                  <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\r\n                  Muy pronto...\r\n\r\n</button>\r\n\r\n          </ion-card-content>\r\n\r\n\r\n      </ion-card>\r\n\r\n\r\n      <label class=\"centrar\">Establecimientos afiliados</label>\r\n      \r\n      <ion-card>\r\n        <ion-card-content>\r\n            <label for=\"name\" class=\"centrar\" style=\"font-weight: bold;\">{{ name }}</label>\r\n            <img ngDefaultControl [src]=\"currentImage\" *ngIf=\"currentImage\" [(ngModel)]=\"fotohtml\">\r\n           <!-- <img id=\"imgAyuntamiento\" src=\"assets/imagenes/Jarabacoa.png\"> -->\r\n        </ion-card-content>\r\n      </ion-card>\r\n    \r\n    <!-- <ion-card *ngFor=\"let datosMisPuntos of misPuntos\">\r\n        <ion-card-content>\r\n           <img src=\"assets/imagenes/black.png\">\r\n\r\n        </ion-card-content>\r\n\r\n\r\n    </ion-card>\r\n    <ion-card *ngFor=\"let datosMisPuntos of misPuntos\">\r\n        <ion-card-content>\r\n           <img src=\"assets/imagenes/black.png\">\r\n\r\n        </ion-card-content>\r\n\r\n\r\n    </ion-card> -->\r\n  </div>\r\n  <ion-button class=\"ocultar\" id=\"prueba\" (click)=\"cargarDatos();\">\r\n    Prueba\r\n</ion-button>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_mis-puntos_mis-puntos_module_ts-es2015.js.map