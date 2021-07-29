(self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 99736:
/*!****************************************************!*\
  !*** ./src/app/Services/datosnecesario.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosnecesarioService": function() { return /* binding */ DatosnecesarioService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let DatosnecesarioService = class DatosnecesarioService {
    constructor(http) {
        this.http = http;
    }
    obtenerDatosNecesarios(usuario) {
        // return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadodeDatosNecesarios/"+usuario+"");
        // }
        return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadodeDatosNecesarios?usuario=" + usuario + "");
    }
};
DatosnecesarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
DatosnecesarioService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DatosnecesarioService);



/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'inicio-mapa',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_inicio-mapa_inicio-mapa_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inicio-mapa/inicio-mapa.module */ 97740)).then(m => m.InicioMapaPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: 'olvide-mi-contrasena',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_olvide-mi-contrasena_olvide-mi-contrasena_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./olvide-mi-contrasena/olvide-mi-contrasena.module */ 68905)).then(m => m.OlvideMiContrasenaPageModule)
    },
    {
        path: 'registro',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_registro_registro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./registro/registro.module */ 10636)).then(m => m.RegistroPageModule)
    },
    {
        path: 'mis-reportes',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_mis-reportes_mis-reportes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mis-reportes/mis-reportes.module */ 13348)).then(m => m.MisReportesPageModule)
    },
    {
        path: 'mis-puntos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_mis-puntos_mis-puntos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mis-puntos/mis-puntos.module */ 66869)).then(m => m.MisPuntosPageModule)
    },
    {
        path: 'informate',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_informate_informate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./informate/informate.module */ 42368)).then(m => m.InformatePageModule)
    },
    {
        path: 'recibos-bonos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_recibos-bonos_recibos-bonos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./recibos-bonos/recibos-bonos.module */ 66942)).then(m => m.RecibosBonosPageModule)
    },
    {
        path: 'sobre-nosotros',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sobre-nosotros_sobre-nosotros_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sobre-nosotros/sobre-nosotros.module */ 89669)).then(m => m.SobreNosotrosPageModule)
    },
    {
        path: 'mi-perfil',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_mi-perfil_mi-perfil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mi-perfil/mi-perfil.module */ 63423)).then(m => m.MiPerfilPageModule)
    },
    {
        path: 'recompensas',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_recompensas_recompensas_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./recompensas/recompensas.module */ 67763)).then(m => m.RecompensasPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps */ 37385);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _Services_datosnecesario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/datosnecesario.service */ 99736);







// import { Variableglobal } from './variableglobal';
let AppComponent = class AppComponent {
    // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    constructor(platform, servicio2) {
        this.servicio2 = servicio2;
        this.appPages = [
            { title: 'Inicio', url: '/inicio-mapa', icon: 'mail' },
            { title: 'Mis Reportes', url: '/mis-reportes', icon: 'paper-plane' },
            { title: 'Mis Puntos', url: '/mis-puntos', icon: 'cash' },
            { title: 'Informate', url: '/informate', icon: 'book' },
            { title: 'Acerca de', url: '/sobre-nosotros', icon: 'reader' },
            { title: 'Mi Perfil', url: '/mi-perfil', icon: 'people' },
            { title: 'Mis Bonos', url: '/recibos-bonos', icon: 'receipt' },
        ];
        platform.ready().then(() => {
            // this.onVerificarPantalla() ;
            if (document.URL.startsWith('http')) {
                _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__.Environment.setEnv({
                    API_KEY_FOR_BROWSER_RELEASE: "AIzaSyABac4fl7IWEhoH7cQr-p-het84Kz12g50",
                    API_KEY_FOR_BROWSER_DEBUG: "AIzaSyABac4fl7IWEhoH7cQr-p-het84Kz12g50"
                });
            }
        });
    }
    //  onVerificarPantalla() {
    //    this.codigo = Variableglobal.cod_nivel;
    //   if (this.codigo = 3)
    //   {
    //      this.appPages = [
    //       { title: 'Inicio', url: '/inicio-mapa', icon: 'mail' },
    //       { title: 'Mis Reportes', url: '/mis-reportes', icon: 'paper-plane' },
    //       { title: 'Mis Puntos', url: '/mis-puntos', icon: 'cash' },
    //       { title: 'Informate', url: '/informate', icon: 'book' },
    //       { title: 'Acerca de', url: '/sobre-nosotros', icon: 'reader' },
    //       { title: 'Mi Perfil', url: '/mi-perfil', icon: 'people' },
    //       { title: 'Mis Bonos', url: '/recibos-bonos', icon: 'receipt' },
    //     ];
    //   } 
    //   else
    //   {
    //     this.appPages = [
    //       { title: 'Inicio', url: '/inicio-mapa', icon: 'mail' },
    //       { title: 'Mis Reportes', url: '/mis-reportes', icon: 'paper-plane' },
    //     ];
    //   }
    // }
    ngOnInit() {
        // this.onVerificarPantalla() ;
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _Services_datosnecesario_service__WEBPACK_IMPORTED_MODULE_3__.DatosnecesarioService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Services_datosnecesario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/datosnecesario.service */ 99736);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ 51535);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);












let AppModule = class AppModule {
    constructor(servicio, router) {
        this.servicio = servicio;
        this.router = router;
    }
    ngOnInit() {
        this.onload();
    }
    onload() {
        let usuario, clave, respuestas;
        usuario = this.usuario;
        this.servicio.obtenerDatosNecesarios(usuario).subscribe((data) => {
            this.datos = data;
        }, (error) => {
            alert(error);
        });
    }
};
AppModule.ctorParameters = () => [
    { type: _Services_datosnecesario_service__WEBPACK_IMPORTED_MODULE_0__.DatosnecesarioService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera, _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__.EmailComposer, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid #d7d8da;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.BtnCerrarSesion {\n  box-shadow: inset 0px 39px 0px -24px #3375e8;\n  background-color: #3677f1;\n  border-radius: 4px;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 11px;\n  font-weight: bold;\n  padding: 7px 22px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #0d0d0d;\n}\n\n.BtnCerrarSesion:hover {\n  background-color: #3670d6;\n}\n\n.BtnCerrarSesion:active {\n  position: relative;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFBQSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRjs7QUFVQTtFQUNDLDRDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQVBEOztBQVNBO0VBQ0MseUJBQUE7QUFORDs7QUFRQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtBQUxEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgY29sb3I6ICM2MTZlN2U7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM3Mzg0OWE7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5CdG5DZXJyYXJTZXNpb24ge1xyXG5cdGJveC1zaGFkb3c6aW5zZXQgMHB4IDM5cHggMHB4IC0yNHB4ICMzMzc1ZTg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMzY3N2YxO1xyXG5cdGJvcmRlci1yYWRpdXM6NHB4O1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG5cdGNvbG9yOiNmZmZmZmY7XHJcblx0Zm9udC1mYW1pbHk6QXJpYWw7XHJcblx0Zm9udC1zaXplOjExcHg7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRwYWRkaW5nOjdweCAyMnB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG5cdHRleHQtc2hhZG93OjBweCAxcHggMHB4ICMwZDBkMGQ7XHJcbn1cclxuLkJ0bkNlcnJhclNlc2lvbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojMzY3MGQ2O1xyXG59XHJcbi5CdG5DZXJyYXJTZXNpb246YWN0aXZlIHtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR0b3A6MXB4O1xyXG59XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiJdfQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\r\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n\r\n        <ion-list id=\"labels-list\" style=\"width: 120px; margin: auto;\">\r\n          <!-- <a href=\"./login\" class=\"LogoutButton\">Logout</a> -->\r\n          <a href=\"#\" class=\"BtnCerrarSesion\">Cerrar Sesión</a>          \r\n          <!-- <ion-label><a href=\"./login\"> Logout </a></ion-label> -->\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map