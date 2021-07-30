(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_olvide-mi-contrasena_olvide-mi-contrasena_module_ts"],{

/***/ 98676:
/*!***************************************************!*\
  !*** ./src/app/Services/enviar-correo.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnviarCorreoService": function() { return /* binding */ EnviarCorreoService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let EnviarCorreoService = class EnviarCorreoService {
    constructor(http) {
        this.http = http;
    }
    EnviarCorreo(email, subject, message) {
        return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/Enviarcorreo?email=" + email + "&subject=" + subject + "&message=" + message + "");
    }
};
EnviarCorreoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
EnviarCorreoService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EnviarCorreoService);



/***/ }),

/***/ 19893:
/*!********************************************************!*\
  !*** ./src/app/Services/olvidemicontrasena.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvidemicontrasenaService": function() { return /* binding */ OlvidemicontrasenaService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let OlvidemicontrasenaService = class OlvidemicontrasenaService {
    constructor(http) {
        this.http = http;
    }
    UContrasenaOlvidada(email, clave_nueva) {
        return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/UContrasenaOlvidada?correo_Usuario=" + email + "&clave_nueva=" + clave_nueva + "");
    }
};
OlvidemicontrasenaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
OlvidemicontrasenaService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], OlvidemicontrasenaService);



/***/ }),

/***/ 14799:
/*!*****************************************************************************!*\
  !*** ./src/app/olvide-mi-contrasena/olvide-mi-contrasena-routing.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvideMiContrasenaPageRoutingModule": function() { return /* binding */ OlvideMiContrasenaPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _olvide_mi_contrasena_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olvide-mi-contrasena.page */ 96397);




const routes = [
    {
        path: '',
        component: _olvide_mi_contrasena_page__WEBPACK_IMPORTED_MODULE_0__.OlvideMiContrasenaPage
    }
];
let OlvideMiContrasenaPageRoutingModule = class OlvideMiContrasenaPageRoutingModule {
};
OlvideMiContrasenaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OlvideMiContrasenaPageRoutingModule);



/***/ }),

/***/ 68905:
/*!*********************************************************************!*\
  !*** ./src/app/olvide-mi-contrasena/olvide-mi-contrasena.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvideMiContrasenaPageModule": function() { return /* binding */ OlvideMiContrasenaPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _olvide_mi_contrasena_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olvide-mi-contrasena-routing.module */ 14799);
/* harmony import */ var _olvide_mi_contrasena_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./olvide-mi-contrasena.page */ 96397);







let OlvideMiContrasenaPageModule = class OlvideMiContrasenaPageModule {
};
OlvideMiContrasenaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _olvide_mi_contrasena_routing_module__WEBPACK_IMPORTED_MODULE_0__.OlvideMiContrasenaPageRoutingModule
        ],
        declarations: [_olvide_mi_contrasena_page__WEBPACK_IMPORTED_MODULE_1__.OlvideMiContrasenaPage]
    })
], OlvideMiContrasenaPageModule);



/***/ }),

/***/ 96397:
/*!*******************************************************************!*\
  !*** ./src/app/olvide-mi-contrasena/olvide-mi-contrasena.page.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvideMiContrasenaPage": function() { return /* binding */ OlvideMiContrasenaPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_olvide_mi_contrasena_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./olvide-mi-contrasena.page.html */ 90506);
/* harmony import */ var _olvide_mi_contrasena_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./olvide-mi-contrasena.page.scss */ 32147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Services_olvidemicontrasena_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/olvidemicontrasena.service */ 19893);
/* harmony import */ var _Services_enviar_correo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/enviar-correo.service */ 98676);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ 51535);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);









let OlvideMiContrasenaPage = class OlvideMiContrasenaPage {
    constructor(http, emailComposer, servicio, servicio1, alertController) {
        this.http = http;
        this.emailComposer = emailComposer;
        this.servicio = servicio;
        this.servicio1 = servicio1;
        this.alertController = alertController;
        this.result = "";
    }
    sendEmail() {
        let email, subject, message;
        email = this.email;
        subject = "RESTABLECIMIENTO DE CONTRASEÑA";
        message = "Hola, se solicito un restablecimiento de contraseña para tu cuenta: " + this.email + "<p></p>" +
            " Si tú no realizaste la solicitud de cambio de contraseña, ignora este correo. <p></p>" +
            "su nueva contraseña es: " + this.datos.clave;
        this.servicio1.EnviarCorreo(email, subject, message).subscribe((data) => {
            this.datos = data;
            if (this.datos == "OK") {
                this.CorreoSuccess();
                this.email = null;
            }
            else {
                this.ErrorAlert();
            }
        }, (error) => {
            alert(error);
        });
    }
    ngOnInit() {
    }
    onKeydown(event) {
        if (event.keyCode === 32) {
            return false;
        }
    }
    omit_special_char(event) {
        var k;
        k = event.charCode; //         k = event.keyCode;  (Both can be used)
        return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }
    CorreoSuccess() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Contraseña enviada',
                message: 'Su Contraseña ha sido enviada al correo ',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    SuccesAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Contraseña Restablecida con Exito',
                message: 'Su Contraseña es: ' + this.datos.clave,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    EmailVacio() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Correo Incorrecto',
                message: 'Debe ingresar un correo para poder realizar el cambio de contraseña',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ErrorAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                message: 'No se pudo restablecer la contraseña',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    LlenarCamposAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                message: 'Por favor llene los campos necesarios',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    onOlvideMiContrasena() {
        let emailContenido = (document.getElementById("emailContenido").value);
        if (emailContenido.length == 0) {
            this.EmailVacio();
            return;
        }
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = 4;
        this.result = "";
        for (let i = 0; i < charactersLength; i++) {
            this.result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        let email;
        email = this.email;
        console.log(this.result);
        this.servicio.UContrasenaOlvidada(email, this.result).subscribe((data) => {
            this.datos = data;
            if (this.datos.respuesta == "OK") {
                this.sendEmail();
                this.email = null;
            }
            else {
                this.ErrorAlert();
            }
        }, (error) => {
            alert(error);
        });
    }
};
OlvideMiContrasenaPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__.EmailComposer },
    { type: _Services_olvidemicontrasena_service__WEBPACK_IMPORTED_MODULE_2__.OlvidemicontrasenaService },
    { type: _Services_enviar_correo_service__WEBPACK_IMPORTED_MODULE_3__.EnviarCorreoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
OlvideMiContrasenaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-olvide-mi-contrasena',
        template: _raw_loader_olvide_mi_contrasena_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_olvide_mi_contrasena_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OlvideMiContrasenaPage);



/***/ }),

/***/ 32147:
/*!*********************************************************************!*\
  !*** ./src/app/olvide-mi-contrasena/olvide-mi-contrasena.page.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbHZpZGUtbWktY29udHJhc2VuYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 90506:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/olvide-mi-contrasena/olvide-mi-contrasena.page.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <!-- Back button with a default href -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title style=\"color: #1A202E; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size:16;\">Restablecer contraseña</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<div style=\"padding-left: 15px;padding-right: 15px; padding-bottom: 15px;\">\r\n  <!-- <ion-label style=\"color: #1A202E; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size:20px;\"><strong>Restablecer Contraseña</strong></ion-label> <br> -->\r\n  <br><span style=\"color: #647081; text-justify: auto; font-size: 14px;\">Introduzca el email asociado a su cuenta y le enviaremos un correo su nueva contraseña</span>\r\n</div>\r\n<ion-label style=\"color: #647081; padding: 15px; font-weight: bold;\">EMAIL</ion-label><br>\r\n\r\n\r\n\r\n<div style=\"padding: 5px;\">\r\n  <ion-card>\r\n      <!-- Agregar id para validar si está vacio -->\r\n      <ion-input oninput=\"this.value = this.value.toUpperCase()\" style=\"border-radius: 5px;\" maxlength=\"100\" [(ngModel)]=\"email\" id=\"emailContenido\"></ion-input>\r\n  </ion-card>\r\n</div>\r\n\r\n\r\n<div style=\"margin:auto; width:95%; padding-top: 20px;\">\r\n\r\n  <ion-button expand=\"block\"  style=\"font-weight: bold;\" (click)=\"onOlvideMiContrasena()\">Enviar Contraseña</ion-button>\r\n\r\n</div>\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_olvide-mi-contrasena_olvide-mi-contrasena_module_ts-es2015.js.map