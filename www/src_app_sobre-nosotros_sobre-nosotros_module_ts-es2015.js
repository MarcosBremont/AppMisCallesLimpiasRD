(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_sobre-nosotros_sobre-nosotros_module_ts"],{

/***/ 98769:
/*!***************************************************!*\
  !*** ./src/app/Services/sobrenosotros.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobrenosotrosService": function() { return /* binding */ SobrenosotrosService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let SobrenosotrosService = class SobrenosotrosService {
    constructor(http) {
        this.http = http;
    }
    obtenerDatosSobreNosotros() {
        return this.http.get('http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarInfSobreNosotros');
    }
};
SobrenosotrosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
SobrenosotrosService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], SobrenosotrosService);



/***/ }),

/***/ 78437:
/*!*****************************************************************!*\
  !*** ./src/app/sobre-nosotros/sobre-nosotros-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobreNosotrosPageRoutingModule": function() { return /* binding */ SobreNosotrosPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sobre-nosotros.page */ 3541);




const routes = [
    {
        path: '',
        component: _sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_0__.SobreNosotrosPage
    }
];
let SobreNosotrosPageRoutingModule = class SobreNosotrosPageRoutingModule {
};
SobreNosotrosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SobreNosotrosPageRoutingModule);



/***/ }),

/***/ 89669:
/*!*********************************************************!*\
  !*** ./src/app/sobre-nosotros/sobre-nosotros.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobreNosotrosPageModule": function() { return /* binding */ SobreNosotrosPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sobre_nosotros_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sobre-nosotros-routing.module */ 78437);
/* harmony import */ var _sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sobre-nosotros.page */ 3541);







let SobreNosotrosPageModule = class SobreNosotrosPageModule {
};
SobreNosotrosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sobre_nosotros_routing_module__WEBPACK_IMPORTED_MODULE_0__.SobreNosotrosPageRoutingModule
        ],
        declarations: [_sobre_nosotros_page__WEBPACK_IMPORTED_MODULE_1__.SobreNosotrosPage]
    })
], SobreNosotrosPageModule);



/***/ }),

/***/ 3541:
/*!*******************************************************!*\
  !*** ./src/app/sobre-nosotros/sobre-nosotros.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SobreNosotrosPage": function() { return /* binding */ SobreNosotrosPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sobre_nosotros_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sobre-nosotros.page.html */ 96729);
/* harmony import */ var _sobre_nosotros_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sobre-nosotros.page.scss */ 51933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Services_sobrenosotros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/sobrenosotros.service */ 98769);





let SobreNosotrosPage = class SobreNosotrosPage {
    constructor(servicio) {
        this.servicio = servicio;
    }
    ngOnInit() {
        this.servicio.obtenerDatosSobreNosotros()
            .subscribe((data) => { this.sobrenosotros = data; }, (error) => { console.log(error); });
    }
};
SobreNosotrosPage.ctorParameters = () => [
    { type: _Services_sobrenosotros_service__WEBPACK_IMPORTED_MODULE_2__.SobrenosotrosService }
];
SobreNosotrosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sobre-nosotros',
        template: _raw_loader_sobre_nosotros_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sobre_nosotros_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SobreNosotrosPage);



/***/ }),

/***/ 51933:
/*!*********************************************************!*\
  !*** ./src/app/sobre-nosotros/sobre-nosotros.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".css-button {\n  width: 150px;\n  margin: auto;\n  font-family: Arial;\n  color: #FFFFFF;\n  font-size: 15px;\n  border-radius: 26px;\n  border: 3px #248946 solid;\n  background: linear-gradient(180deg, #24cc64 5%, #24cc64 100%);\n  text-shadow: 0px 1px 1px #528ecc;\n  box-shadow: inset 3px -9px 39px -20px rgba(36, 204, 100, 0.54);\n  cursor: pointer;\n  display: block;\n  align-items: center;\n  padding: 10px;\n  text-align: center;\n}\n\n.css-button:hover {\n  background: linear-gradient(180deg, #24cc64 5%, #24cc64 100%);\n}\n\n.css-button-icon {\n  padding: 2px;\n  border-right: 1px solid rgba(255, 255, 255, 0.16);\n}\n\n.css-button-icon i {\n  position: relative;\n  font-size: 33px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvYnJlLW5vc290cm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBRUgsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw2REFBQTtFQUNBLGdDQUFBO0VBQ0EsOERBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0csYUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDQyw2REFBQTtBQUNEOztBQUNBO0VBQ0MsWUFBQTtFQUNBLGlEQUFBO0FBRUQ7O0FBQUE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUFHRCIsImZpbGUiOiJzb2JyZS1ub3NvdHJvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3NzLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcblxuXHRmb250LWZhbWlseTogQXJpYWw7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDI2cHg7XG5cdGJvcmRlcjogM3B4ICMyNDg5NDYgc29saWQ7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyNGNjNjQgNSUsICMyNGNjNjQgMTAwJSk7XG5cdHRleHQtc2hhZG93OiAwcHggMXB4IDFweCAjNTI4ZWNjO1xuXHRib3gtc2hhZG93OiBpbnNldCAzcHggLTlweCAzOXB4IC0yMHB4IHJnYmEoMzYsIDIwNCwgMTAwLCAwLjU0KTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRkaXNwbGF5OiBibG9jaztcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jc3MtYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzI0Y2M2NCA1JSwgIzI0Y2M2NCAxMDAlKTtcbn1cbi5jc3MtYnV0dG9uLWljb24ge1xuXHRwYWRkaW5nOiAycHg7XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XG59XG4uY3NzLWJ1dHRvbi1pY29uIGkge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZvbnQtc2l6ZTogMzNweDtcbn1cbi8vIC5jc3MtYnV0dG9uLXRleHQge1xuLy8gXHRwYWRkaW5nOiAxM3B4IDExcHg7XG4vLyB9XG4vLyAuY3NzLWJ1dHRvbi10ZXh0IHNwYW57XG4vLyBcdGRpc3BsYXk6IGJsb2NrO1xuLy8gXHRwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyBcdGxlZnQ6IC02cHg7XG4vLyB9XG4iXX0= */");

/***/ }),

/***/ 96729:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sobre-nosotros/sobre-nosotros.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Sobre Nosotros</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div id=\"container\" *ngFor=\"let datossobrenosotros of sobrenosotros\">\n\n          <ion-card-header>\n              <ion-card-title class=\"ion-card-nosotros\"></ion-card-title>\n          </ion-card-header>\n  <div class=\"contenedor\">\n          <ion-card-content>\n\n      \n                  \n              <div class=\"ion-text-justify nosotros\" >\n                  <ion-label>{{datossobrenosotros.descripciondelaapp}}</ion-label> <br>\n                  <br>\n              </div>\n              <div class=\"ion-text-center nosotros--contenido\">\n                  <img width=\"200px\" src=\"assets/imagenes/Marcos.png\">\n                  <br>\n                  <ion-label class=\"nosotros--contenido__label\">{{datossobrenosotros.nombrepersona1}}</ion-label>\n                  <br>\n                  <ion-label>{{datossobrenosotros.ocupacionpersona1}}</ion-label>\n                  <br>\n                  <ion-label class=\"nosotros--contenido__label\">{{datossobrenosotros.emailpersona1}}</ion-label>\n                  <br>\n                  <br>\n                  <br>\n\n\n                  <img width=\"200px\" src=\"assets/imagenes/Adderlis.png\">\n                  <br>\n                  <ion-label><strong>{{datossobrenosotros.nombrepersona2}}</strong></ion-label>\n                  <br>\n                  <ion-label>{{datossobrenosotros.ocupacionpersona2}}</ion-label>\n                  <br>\n                  <ion-label class=\"nosotros--contenido__label\">{{datossobrenosotros.emailpersona2}}</ion-label>\n                  <br>\n                  <br>\n                  <br>\n\n                  <img width=\"200px\" src=\"assets/imagenes/Emmanuel.png\">\n                  <br>\n                  <ion-label><strong>{{datossobrenosotros.nombrepersona3}}</strong></ion-label>\n                  <br>\n                  <ion-label>{{datossobrenosotros.ocupacionpersona3}}</ion-label>\n                  <br>\n                  <ion-label class=\"nosotros--contenido__label\">{{datossobrenosotros.emailpersona3}}</ion-label>\n                  <br>\n                  <br>\n                  <br>\n              </div>\n\n\n          \n\n          </ion-card-content>\n  </div>\n  <!-- <div style=\"padding: 10px;\">\n\n      <a class=\"css-button\" href=\"https://wa.me/18099073244\" >\n          <span class=\"css-button-icon\"><img src=\"assets/imagenes/whatsapp24.png\" aria-hidden=\"true\"/></span>\n          <span class=\"css-button-text\"><span>Contactanos</span></span>\n        </a>\n        \n    </div> -->\n  </div>\n</ion-content>");
=======
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Sobre Nosotros</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div id=\"container\" *ngFor=\"let datossobrenosotros of sobrenosotros\">\r\n\r\n          <ion-card-header>\r\n              <ion-card-title class=\"ion-card-nosotros\"></ion-card-title>\r\n          </ion-card-header>\r\n  <div class=\"contenedor\">\r\n          <ion-card-content>\r\n\r\n      \r\n                  \r\n              <div class=\"ion-text-justify nosotros\" >\r\n                  <ion-label>{{datossobrenosotros.descripciondelaapp}}</ion-label> <br>\r\n                  <br>\r\n              </div>\r\n              <div class=\"ion-text-center nosotros--contenido\">\r\n                  <img width=\"200px\" src=\"assets/imagenes/Marcos.png\">\r\n                  <br>\r\n                  <ion-label class=\"nosotros--contenido__label\">{{datossobrenosotros.nombrepersona1}}</ion-label>\r\n                  <br>\r\n                  <ion-label>{{datossobrenosotros.ocupacionpersona1}}</ion-label>\r\n                  <br>\r\n                  <ion-label class=\"nosotros--contenido__label\">{{datossobrenosotros.emailpersona1}}</ion-label>\r\n                  <br>\r\n                  <br>\r\n                  <br>\r\n\r\n\r\n                  <img width=\"200px\" src=\"assets/imagenes/Adderlis.png\">\r\n                  <br>\r\n                  <ion-label><strong>{{datossobrenosotros.nombrepersona2}}</strong></ion-label>\r\n                  <br>\r\n                  <ion-label>{{datossobrenosotros.ocupacionpersona2}}</ion-label>\r\n                  <br>\r\n                  <ion-label class=\"nosotros--contenido__label\">{{datossobrenosotros.emailpersona2}}</ion-label>\r\n                  <br>\r\n                  <br>\r\n                  <br>\r\n\r\n                  <img width=\"200px\" src=\"assets/imagenes/Emmanuel.png\">\r\n                  <br>\r\n                  <ion-label><strong>{{datossobrenosotros.nombrepersona3}}</strong></ion-label>\r\n                  <br>\r\n                  <ion-label>{{datossobrenosotros.ocupacionpersona3}}</ion-label>\r\n                  <br>\r\n                  <ion-label class=\"nosotros--contenido__label\">{{datossobrenosotros.emailpersona3}}</ion-label>\r\n                  <br>\r\n                  <br>\r\n                  <br>\r\n              </div>\r\n\r\n\r\n          \r\n\r\n          </ion-card-content>\r\n  </div>\r\n  <!-- <div style=\"padding: 10px;\">\r\n\r\n      <a class=\"css-button\" href=\"https://wa.me/18099073244\" >\r\n          <span class=\"css-button-icon\"><img src=\"assets/imagenes/whatsapp24.png\" aria-hidden=\"true\"/></span>\r\n          <span class=\"css-button-text\"><span>Contactanos</span></span>\r\n        </a>\r\n        \r\n    </div> -->\r\n  </div>\r\n</ion-content>");
>>>>>>> 64578ea12ddb2eae1cfff82b5b2eeeba482d2aae

/***/ })

}]);
//# sourceMappingURL=src_app_sobre-nosotros_sobre-nosotros_module_ts-es2015.js.map