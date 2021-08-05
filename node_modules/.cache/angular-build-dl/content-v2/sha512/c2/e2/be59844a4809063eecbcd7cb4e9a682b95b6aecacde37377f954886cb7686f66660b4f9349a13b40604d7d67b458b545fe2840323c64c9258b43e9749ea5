(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_recibos-bonos_recibos-bonos_module_ts"],{

/***/ 59182:
/*!***************************************************************!*\
  !*** ./src/app/recibos-bonos/recibos-bonos-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecibosBonosPageRoutingModule": function() { return /* binding */ RecibosBonosPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _recibos_bonos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recibos-bonos.page */ 25317);




const routes = [
    {
        path: '',
        component: _recibos_bonos_page__WEBPACK_IMPORTED_MODULE_0__.RecibosBonosPage
    }
];
let RecibosBonosPageRoutingModule = class RecibosBonosPageRoutingModule {
};
RecibosBonosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecibosBonosPageRoutingModule);



/***/ }),

/***/ 66942:
/*!*******************************************************!*\
  !*** ./src/app/recibos-bonos/recibos-bonos.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecibosBonosPageModule": function() { return /* binding */ RecibosBonosPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _recibos_bonos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recibos-bonos-routing.module */ 59182);
/* harmony import */ var _recibos_bonos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recibos-bonos.page */ 25317);







let RecibosBonosPageModule = class RecibosBonosPageModule {
};
RecibosBonosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recibos_bonos_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecibosBonosPageRoutingModule
        ],
        declarations: [_recibos_bonos_page__WEBPACK_IMPORTED_MODULE_1__.RecibosBonosPage]
    })
], RecibosBonosPageModule);



/***/ }),

/***/ 25317:
/*!*****************************************************!*\
  !*** ./src/app/recibos-bonos/recibos-bonos.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecibosBonosPage": function() { return /* binding */ RecibosBonosPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_recibos_bonos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recibos-bonos.page.html */ 21306);
/* harmony import */ var _recibos_bonos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recibos-bonos.page.scss */ 82030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Services_registrorecibo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/registrorecibo.service */ 3688);
/* harmony import */ var _Services_mispuntos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/mispuntos.service */ 59283);
/* harmony import */ var _variableglobal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../variableglobal */ 13296);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modal_popover_modal_popover_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-popover/modal-popover.page */ 71462);









let RecibosBonosPage = class RecibosBonosPage {
    constructor(servicio, servicio2, modalCtrl) {
        this.servicio = servicio;
        this.servicio2 = servicio2;
        this.modalCtrl = modalCtrl;
        this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.cod_usuario;
    }
    initModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_popover_modal_popover_page__WEBPACK_IMPORTED_MODULE_5__.ModalPopoverPage,
                componentProps: {
                    'cod_bono': this.cod_bono,
                    'usuario': _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.nombre_usuario,
                    'nombreproducto': this.nombreproducto,
                    'fechaCompleta': this.fechaCompleta
                }
            });
            modal.onDidDismiss().then((modalDataResponse) => {
                if (modalDataResponse !== null) {
                    this.modalDataResponse = modalDataResponse.data;
                    console.log('Modal Sent Data : ' + modalDataResponse.data);
                }
            });
            this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.cod_usuario;
            this.servicio.MostrarRecibos(this.cod_usuario)
                .subscribe((data) => { this.Recibos = data; }, (error) => { console.log(error); }),
                this.servicio2.obtenerMisPuntos(this.cod_usuario)
                    .subscribe((data) => { this.misPuntos = data; }, (error) => { console.log(error); });
            return yield modal.present();
        });
    }
    ngOnInit() {
        this.cod_usuario = _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.cod_usuario;
        this.servicio.MostrarRecibos(this.cod_usuario)
            .subscribe((data) => { this.Recibos = data; }, (error) => { console.log(error); }),
            this.servicio2.obtenerMisPuntos(this.cod_usuario)
                .subscribe((data) => { this.misPuntos = data; }, (error) => { console.log(error); });
    }
    showAlert(i) {
        this.nombreproducto = (document.getElementById('nombreproducto' + i).textContent);
        this.cod_bono = (document.getElementById('cod_bono' + i).textContent);
        var nuevoformatocodigobono = this.cod_bono.replace('Recibo No.', '');
        this.servicio.MostrarRecibosPorID(nuevoformatocodigobono)
            .subscribe((data) => {
            this.Recibos = data;
            this.fechaCompleta = this.Recibos[0].fechaCompleta;
            this.initModal();
        }, (error) => { console.log(error); });
    }
};
RecibosBonosPage.ctorParameters = () => [
    { type: _Services_registrorecibo_service__WEBPACK_IMPORTED_MODULE_2__.RegistroReciboService },
    { type: _Services_mispuntos_service__WEBPACK_IMPORTED_MODULE_3__.MispuntosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
RecibosBonosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-recibos-bonos',
        template: _raw_loader_recibos_bonos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recibos_bonos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecibosBonosPage);



/***/ }),

/***/ 82030:
/*!*******************************************************!*\
  !*** ./src/app/recibos-bonos/recibos-bonos.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* DOES NOT WORK - not specific enough */\n.modal-wrapper {\n  background: #222;\n}\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n.my-custom-class .modal-wrapper {\n  background: #222;\n}\n.my-custom-class {\n  --background: #222;\n}\nion-modal.stack-modal {\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lib3MtYm9ub3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFBO0FBQ0E7RUFDSSxnQkFBQTtBQUNKO0FBRUUsdUVBQUE7QUFDQTtFQUNFLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7QUFFRTtFQUNFLDRDQUFBO0VBQ0EscURBQUE7QUFDSiIsImZpbGUiOiJyZWNpYm9zLWJvbm9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbi5tb2RhbC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbiAgLm15LWN1c3RvbS1jbGFzcyAubW9kYWwtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gIH1cclxuXHJcbiAgLm15LWN1c3RvbS1jbGFzcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfVxyXG5cclxuICBpb24tbW9kYWwuc3RhY2stbW9kYWwge1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDI4cHggNDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IHZhcigtLWlvbi1iYWNrZHJvcC1vcGFjaXR5LCAwLjMyKTtcclxuICB9Il19 */");

/***/ }),

/***/ 21306:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recibos-bonos/recibos-bonos.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-label *ngFor=\"let datosMisPuntos of misPuntos\" slot=\"end\" style=\"padding: 5px;\">{{datosMisPuntos.puntosacumulados}}</ion-label>\r\n        <img slot=\"end\" style=\"padding: 5px;\" src=\"assets/imagenes/moneda.png\">\r\n        <ion-title>Mis Bonos</ion-title>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"contenedor-recibos\">\r\n    <ion-header collapse=\"condense\">\r\n        <ion-toolbar>\r\n            <ion-title size=\"large\">Mis Bonos</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n\r\n\r\n    \r\n    <ion-list *ngFor=\"let recibo of Recibos; let i = index\" class=\"recibos--bonos\">\r\n\r\n        <ion-item (click)=\"showAlert(i)\" button detail=\"false\"> \r\n\r\n            <ion-avatar class=\"aa\" slot=\"start\">\r\n                <img class=\"bb\" [src]=\"recibo.imagen\">\r\n            </ion-avatar>\r\n\r\n            <ion-label id=\"{{'nombreproducto' + i}}\" class=\"contenedor-recibos--label\">\r\n                {{recibo.nombre}}\r\n            </ion-label>\r\n\r\n            <div class=\"contenedor-recibos--label contenedor-recibos--label__codigo\">\r\n                <ion-label id=\"{{'cod_bono' + i}}\" slot=\"end\">\r\n                    Recibo No.{{recibo.cod_recibo}}\r\n                </ion-label>\r\n            </div>\r\n\r\n        </ion-item>\r\n        \r\n    </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_recibos-bonos_recibos-bonos_module_ts-es2015.js.map