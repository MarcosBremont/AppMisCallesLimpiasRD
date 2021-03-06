(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 2217:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": function() { return /* binding */ Scheduler; }
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 20945:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": function() { return /* binding */ interval; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 69165);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 33637);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 26561);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber, counter: 0, period }));
        return subscriber;
    });
}
function dispatch(state) {
    const { subscriber, counter, period } = state;
    subscriber.next(counter);
    this.schedule({ subscriber, counter: counter + 1, period }, period);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ 22901:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ Action; }
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 10826);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 401:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": function() { return /* binding */ AsyncAction; }
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 22901);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 4548:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": function() { return /* binding */ AsyncScheduler; }
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 2217);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 33637:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncScheduler": function() { return /* binding */ asyncScheduler; },
/* harmony export */   "async": function() { return /* binding */ async; }
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 401);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 4548);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 26561:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": function() { return /* binding */ isNumeric; }
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 59796);

function isNumeric(val) {
    return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ 86938:
/*!***************************************************!*\
  !*** ./src/app/Services/ayuntamientos.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AyuntamientosService": function() { return /* binding */ AyuntamientosService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let AyuntamientosService = class AyuntamientosService {
    constructor(http) {
        this.http = http;
    }
    obtenerAyuntamientos() {
        return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadoAyuntamientos");
    }
};
AyuntamientosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
AyuntamientosService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AyuntamientosService);



/***/ }),

/***/ 84967:
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": function() { return /* binding */ RegistroPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 12299);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 10636:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": function() { return /* binding */ RegistroPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 84967);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 12299);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 12299:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": function() { return /* binding */ RegistroPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro.page.html */ 36344);
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss */ 45802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 20945);
/* harmony import */ var _Services_registro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/registro.service */ 2889);
/* harmony import */ var _Services_ayuntamientos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/ayuntamientos.service */ 86938);











let RegistroPage = class RegistroPage {
    constructor(menuCtrl, servicio, toastCtrl, alertController, router, Ayuntamiento) {
        this.menuCtrl = menuCtrl;
        this.servicio = servicio;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.router = router;
        this.Ayuntamiento = Ayuntamiento;
        this.btnDisabled = false;
        this.labelVisibility = false;
        this.isShown = false; // hidden by default
        this.isActiveToggleTextPassword = true;
    }
    toggleTextPassword() {
        this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
    }
    getType() {
        return this.isActiveToggleTextPassword ? 'password' : 'text';
    }
    ngOnInit() {
        this.labelVisibility = false;
        //emit value in sequence every 10 second
        const source = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000);
        const text = 'Your Text Here';
        this.subscription = source.subscribe(val => this.VerificarCorreoElectronico());
        this.ayuntamientos();
    }
    ayuntamientos() {
        this.Ayuntamiento.obtenerAyuntamientos()
            .subscribe((data) => { this.Ayuntamientos = data; }, (error) => { console.log(error); });
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ErrorAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                message: 'No se puede realizar el registro.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    SuccesAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                // header: 'Error',
                message: 'Usuario Registrado con Exito.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    ElementosVaciosAlertas() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error al crear usuario',
                message: 'hoho, hubo un error. Asegurese de llenar todos los campos',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    restrictNumeric(e) {
        let input;
        if (e.metaKey || e.ctrlKey) {
            return true;
        }
        if (e.which === 32) {
            return false;
        }
        if (e.which === 0) {
            return true;
        }
        if (e.which < 33) {
            return true;
        }
        input = String.fromCharCode(e.which);
        return !!/[\d\s]/.test(input);
    }
    VerificarCorreoElectronico() {
        let correo_Usuario;
        correo_Usuario = this.email;
        this.servicio.VerificarCorreoElectronico(correo_Usuario).subscribe((data) => {
            this.datos = data;
            if (this.datos.respuesta == "OK") {
                this.btnDisabled = true;
                this.labelVisibility = false;
                this.isShown = true;
            }
            else {
                this.btnDisabled = false;
                this.labelVisibility = true;
                this.isShown = false;
            }
        });
    }
    onLimpiar() {
        this.usuario = null;
        this.email = null;
        this.clave = null;
        this.cedula = null;
        this.telefono = null;
    }
    numberOnlyValidation(event) {
        const pattern = /[0-9.,]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
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
    checkValue(event) {
        this.gg = event.detail.value;
        return this.gg;
    }
    onRegistroUsuario(event) {
        // console.log(event.detail.value)
        let ayuntamiento = this.gg;
        let emailVacio = (document.getElementById('email').value);
        let nombreVacio = (document.getElementById('nombre').value);
        let passwordVacio = (document.getElementById('password').value);
        let cedulaVacio = (document.getElementById('cedula').value);
        let telefonoVacio = (document.getElementById('telefono').value);
        // let ayuntamiento =(document.getElementById('cod_ayuntamiento' + event) as HTMLDivElement).textContent;
        if (typeof ayuntamiento === 'undefined' || emailVacio.length == 0 || nombreVacio.length == 0 || passwordVacio.length == 0 || cedulaVacio.length == 0 || telefonoVacio.length == 0) {
            this.ElementosVaciosAlertas();
            console.log('Hola');
            return;
        }
        let usuario, email, clave, cedula, telefono, estado;
        usuario = this.usuario;
        email = this.email;
        clave = this.clave;
        cedula = this.cedula;
        telefono = this.telefono;
        estado = this.estado;
        this.cod_ayuntamiento = ayuntamiento;
        this.servicio.RegistroUsuario(usuario, email, clave, cedula, telefono, estado, this.cod_ayuntamiento).subscribe((data) => {
            this.datos = data;
            if (this.datos.respuesta == "OK") {
                this.SuccesAlert();
                this.onLimpiar();
            }
            else {
                this.ErrorAlert();
            }
        }, (error) => {
            alert(error);
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _Services_registro_service__WEBPACK_IMPORTED_MODULE_2__.RegistroService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _Services_ayuntamientos_service__WEBPACK_IMPORTED_MODULE_3__.AyuntamientosService }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroPage);



/***/ }),

/***/ 45802:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blocktext {\n  margin-left: auto;\n  margin-right: auto;\n  width: 8em;\n}\n\n.labelhide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFFSSxhQUFBO0FBQUoiLCJmaWxlIjoicmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA4ZW1cbn1cblxuLmxhYmVsaGlkZVxue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ 36344:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <!-- Back button with a default href -->\n\n    <ion-header>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\">\n                <ion-back-button defaultHref=\"login\"></ion-back-button>\n            </ion-buttons>\n            <ion-title>Registro</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <div style=\"padding-left: 5px; padding-right: 20px;\">\n        <!-- <ion-item>\n    <label style=\"paddiang-bottom: 3mm; text-align: center;\" class=\"blocktext\"> <strong> Registro</strong></label>\n</ion-item> -->\n\n        <ion-item>\n            <ion-input style=\"text-transform: uppercase; \" required placeholder=\"Nombre de Usuario\" maxlength=\"30\" id=\"nombre\" (keypress)=\"omit_special_char($event)\" [(ngModel)]=\"usuario\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input style=\"text-transform: uppercase; \" required placeholder=\"Email\" maxlength=\"100\" (ngModelChange)=\"VerificarCorreoElectronico()\" [(ngModel)]=\"email\" id=\"email\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-input style=\"text-transform: uppercase; \" required [type]=\"getType()\" [(ngModel)]=\"clave\" id=\"password\" maxlengh=\"50\" placeholder=\"Contrase??a\"></ion-input>\n            <ion-icon name=\"eye\" (click)=\"toggleTextPassword()\"></ion-icon>\n        </ion-item>\n\n        <ion-item>\n            <ion-input type=\"tel\" maxlength=\"11\" placeholder=\"CEDULA\" required [(ngModel)]=\"cedula\" id=\"cedula\" (keypress)=\"restrictNumeric($event)\"></ion-input>\n        </ion-item>\n\n        <ion-item> \n            <ion-input type=\"tel\" [(ngModel)]=\"telefono\" required (keypress)=\"restrictNumeric($event)\" maxlength=\"10\" placeholder=\"TEL??FONO\" id=\"telefono\"></ion-input>\n        </ion-item>\n\n        <ion-list>\n            <!-- <ion-list-header>\n                <ion-label>\n                    Seleccione Su Ayuntamiento\n                </ion-label>\n            </ion-list-header> -->\n\n            <ion-item>\n                <ion-label>SELECCIONE SU AYUNTAMIENTO</ion-label>\n                <ion-select [compareWith]=\"compareWith\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"checkValue($event)\">\n                    <ion-select-option *ngFor=\"let ayuntamiento of Ayuntamientos; let i = index\" value=\"{{ayuntamiento.cod_ayuntamiento}}\">\n                        {{ayuntamiento.nombre }}\n\n                        <!-- <ion-label style=\"display: none;\" class=\"ocultar\" id=\"{{'cod_ayuntamiento'}}\"></ion-label> {{ayuntamiento.nombre }} -->\n\n                    </ion-select-option>\n                </ion-select>\n\n            </ion-item>\n\n            <ion-label *ngIf=\"isShown\" style=\"color: brown; padding-left: 13px;\" [ngClass]=\"{'hidden': isHidden}\" id=\"labelya\" [ngStyle]=\"{'color': (labelVisibility)? 'transparent': 'red'}\">??Este correo ya existe!</ion-label>\n\n        </ion-list>\n\n\n\n\n        <!-- <ion-list>\n            <ion-radio-group value=\"biff\">\n                <ion-list-header>\n                    <ion-label>Ayuntamientos</ion-label>\n                </ion-list-header>\n\n                <ion-item *ngFor=\"let ayuntamiento of Ayuntamientos; let i = index\">\n\n                    <ion-radio slot=\"start\" value=\"{{ayuntamiento.cod_ayuntamiento }}\" id=\"{{'cod_ayuntamiento' + i}}\">\n                        <ion-label>\n                            {{ayuntamiento.cod_ayuntamiento }}\n                        </ion-label>\n                    </ion-radio>\n\n                </ion-item>\n            </ion-radio-group>\n\n\n        </ion-list>-->\n        <div style=\"margin:auto; width:80%; padding-top: 40px;\">\n            <ion-button expand=\"block\" style=\"font-weight: bold;\" [disabled]=\"btnDisabled\" [ngStyle]=\"{'color': (btnDisabled)? '#BDBEBD': 'white'}\" (click)=\"onRegistroUsuario()\">Registrarme</ion-button>\n            <img style=\"width:150%;\" src=\"assets/imagenes/Roads.png\">\n        </div>\n\n\n    </div>\n\n\n\n</ion-content>\n<!-- <ion-content>\n\n\n\n    <ion-list>\n        <ion-list-header>\n            <ion-label>\n                Seleccione Su Ayuntamiento\n            </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n            <ion-label>Ayuntamientos</ion-label>\n            <ion-select [compareWith]=\"compareWith\">\n                <ion-select-option *ngFor=\"let ayuntamiento of Ayuntamientos\" [value]=\"nombre\">{{ayuntamiento.nombre }}</ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n</ion-content> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_registro_registro_module_ts-es2015.js.map