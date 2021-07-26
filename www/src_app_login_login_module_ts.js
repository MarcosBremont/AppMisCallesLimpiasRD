(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_login_login_module_ts"],{

/***/ 3468:
/*!*******************************************!*\
  !*** ./src/app/Services/Login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 476);




let LoginService = class LoginService {
    constructor(http, platform) {
        this.http = http;
    }
    IniciarSesion(usuario, clave) {
        return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/miscalleslimpiasrd/iniciarsesion?usuario=" + usuario + "&clave=" + clave + "");
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 6770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _Services_datosnecesario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/datosnecesario.service */ 9736);
/* harmony import */ var _Services_Login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Login.service */ 3468);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _variableglobal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../variableglobal */ 3296);












let LoginPage = class LoginPage {
    constructor(servicio2, menuCtrl, servicio, toastCtrl, alertController, router, navCtrl) {
        this.servicio2 = servicio2;
        this.menuCtrl = menuCtrl;
        this.servicio = servicio;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.isActiveToggleTextPassword = true;
    }
    ngOnInit() {
    }
    ErrorAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                message: 'Usuario o Contraseña Incorrecta.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    onload() {
        try {
            this.servicio2.obtenerDatosNecesarios(this.usuario).subscribe((data) => {
                this.datos = data;
                // console.log(data)
            }, (error) => {
                // alert(error);
                alert("Error: " + error.message);
            });
        }
        catch (error) {
            alert("Error: " + error.message);
        }
    }
    onVerificarPantallas() {
    }
    onIniciarSesion() {
        this.onload();
        try {
            let usuario, clave, respuestas;
            usuario = this.usuario;
            clave = this.clave;
            this.servicio.IniciarSesion(usuario, clave).subscribe((data) => {
                this.datos = data;
                if (this.datos.respuesta == "OK") {
                    _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.cod_usuario = this.datos.cod_usuario;
                    _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.nombre_usuario = usuario;
                    _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.correo_Usuario = this.datos.correo_Usuario;
                    _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.cedula_usuario = this.datos.cedula_usuario;
                    _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.telefono_Usuario = this.datos.telefono_Usuario;
                    _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.clave = this.datos.clave;
                    _variableglobal__WEBPACK_IMPORTED_MODULE_4__.Variableglobal.foto_usuario = this.datos.foto_usuario;
                    this.menuCtrl.enable(true);
                    this.router.navigate(['/inicio-mapa']);
                }
                else {
                    this.ErrorAlert();
                }
            }, (error) => {
                alert("Error: " + error.message);
                alert("Error: " + error.message);
            });
        }
        catch (ex) {
            alert("Error: " + ex.message);
        }
    }
    toggleTextPassword() {
        this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
    }
    getType() {
        return this.isActiveToggleTextPassword ? 'password' : 'text';
    }
};
LoginPage.ctorParameters = () => [
    { type: _Services_datosnecesario_service__WEBPACK_IMPORTED_MODULE_2__.DatosnecesarioService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _Services_Login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n  <ion-card-header>\n    <ion-card-title></ion-card-title>\n  </ion-card-header>\n  <div class=\"contenedor\">\n  <ion-card-content style=\"width: 100%; padding: 10px;\">\n    <div>\n      <img style=\"width: 120px;;margin:auto;display:block\" src=\"assets/imagenes/MisCallesLimpiasRDCircle.png\">\n    </div>\n\n<div class=\"login--inputs\">\n\n  <ion-item>\n    <ion-input placeholder=\"Usuario\" maxlength=\"50\" [(ngModel)]=\"usuario\" ></ion-input>\n  </ion-item>\n<!-- Prueba -->\n  <ion-item>\n      <ion-input placeholder=\"Contraseña\" [type]=\"getType()\" [(ngModel)]=\"clave\" ></ion-input>\n      <ion-icon style=\"align-items: flex-end;\" name=\"eye\" (click)=\"toggleTextPassword()\"></ion-icon>\n  </ion-item>\n\n</div>\n \n  <div class=\"login--contraseña\">\n    <ion-label><a href=\"./olvide-mi-contrasena\">¿Olvidaste tu contraseña?</a></ion-label>\n  </div>\n  \n  <div class=\"boton-login\">\n    \n    <ion-button expand=\"block\" (click)=\"onIniciarSesion()\">Iniciar Sesion</ion-button>\n  </div>\n  \n  <div class=\"ion-text-center\" style=\"margin:auto; width:75%; padding-top: 20px;\">\n    <ion-label>¿No tienes una cuenta?</ion-label>\n    <ion-label><a  href=\"./registro\"> Registrate aqui</a></ion-label>\n    </div>\n\n  </ion-card-content>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map