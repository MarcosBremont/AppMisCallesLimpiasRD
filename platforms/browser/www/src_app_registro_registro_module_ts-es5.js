(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkMisCalleslimpiasRD"] = self["webpackChunkMisCalleslimpiasRD"] || []).push([["src_app_registro_registro_module_ts"], {
    /***/
    2217: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Scheduler": function Scheduler() {
          return (
            /* binding */
            _Scheduler
          );
        }
        /* harmony export */

      });

      var _Scheduler = /*#__PURE__*/function () {
        function _Scheduler(SchedulerAction) {
          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler.now;

          _classCallCheck(this, _Scheduler);

          this.SchedulerAction = SchedulerAction;
          this.now = now;
        }

        _createClass(_Scheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;
            return new this.SchedulerAction(this, work).schedule(state, delay);
          }
        }]);

        return _Scheduler;
      }();

      _Scheduler.now = function () {
        return Date.now();
      }; //# sourceMappingURL=Scheduler.js.map

      /***/

    },

    /***/
    20945: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "interval": function interval() {
          return (
            /* binding */
            _interval
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Observable */
      69165);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      33637);
      /* harmony import */


      var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isNumeric */
      26561);

      function _interval() {
        var period = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;

        if (!(0, _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
          period = 0;
        }

        if (!scheduler || typeof scheduler.schedule !== 'function') {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(function (subscriber) {
          subscriber.add(scheduler.schedule(dispatch, period, {
            subscriber: subscriber,
            counter: 0,
            period: period
          }));
          return subscriber;
        });
      }

      function dispatch(state) {
        var subscriber = state.subscriber,
            counter = state.counter,
            period = state.period;
        subscriber.next(counter);
        this.schedule({
          subscriber: subscriber,
          counter: counter + 1,
          period: period
        }, period);
      } //# sourceMappingURL=interval.js.map

      /***/

    },

    /***/
    22901: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Action": function Action() {
          return (
            /* binding */
            _Action
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscription */
      10826);

      var _Action = /*#__PURE__*/function (_Subscription__WEBPAC) {
        _inherits(_Action, _Subscription__WEBPAC);

        var _super = _createSuper(_Action);

        function _Action(scheduler, work) {
          _classCallCheck(this, _Action);

          return _super.call(this);
        }

        _createClass(_Action, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this;
          }
        }]);

        return _Action;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription); //# sourceMappingURL=Action.js.map

      /***/

    },

    /***/
    401: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncAction": function AsyncAction() {
          return (
            /* binding */
            _AsyncAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Action */
      22901);

      var _AsyncAction = /*#__PURE__*/function (_Action__WEBPACK_IMPO) {
        _inherits(_AsyncAction, _Action__WEBPACK_IMPO);

        var _super2 = _createSuper(_AsyncAction);

        function _AsyncAction(scheduler, work) {
          var _this;

          _classCallCheck(this, _AsyncAction);

          _this = _super2.call(this, scheduler, work);
          _this.scheduler = scheduler;
          _this.work = work;
          _this.pending = false;
          return _this;
        }

        _createClass(_AsyncAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this.closed) {
              return this;
            }

            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
            }

            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
            }

            clearInterval(id);
            return undefined;
          }
        }, {
          key: "execute",
          value: function execute(state, delay) {
            if (this.closed) {
              return new Error('executing a cancelled action');
            }

            this.pending = false;

            var error = this._execute(state, delay);

            if (error) {
              return error;
            } else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
          }
        }, {
          key: "_execute",
          value: function _execute(state, delay) {
            var errored = false;
            var errorValue = undefined;

            try {
              this.work(state);
            } catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
            }

            if (errored) {
              this.unsubscribe();
              return errorValue;
            }
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
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
        }]);

        return _AsyncAction;
      }(_Action__WEBPACK_IMPORTED_MODULE_0__.Action); //# sourceMappingURL=AsyncAction.js.map

      /***/

    },

    /***/
    4548: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncScheduler": function AsyncScheduler() {
          return (
            /* binding */
            _AsyncScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Scheduler */
      2217);

      var _AsyncScheduler = /*#__PURE__*/function (_Scheduler__WEBPACK_I) {
        _inherits(_AsyncScheduler, _Scheduler__WEBPACK_I);

        var _super3 = _createSuper(_AsyncScheduler);

        function _AsyncScheduler(SchedulerAction) {
          var _this2;

          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now;

          _classCallCheck(this, _AsyncScheduler);

          _this2 = _super3.call(this, SchedulerAction, function () {
            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== _assertThisInitialized(_this2)) {
              return _AsyncScheduler.delegate.now();
            } else {
              return now();
            }
          });
          _this2.actions = [];
          _this2.active = false;
          _this2.scheduled = undefined;
          return _this2;
        }

        _createClass(_AsyncScheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;

            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== this) {
              return _AsyncScheduler.delegate.schedule(work, delay, state);
            } else {
              return _get(_getPrototypeOf(_AsyncScheduler.prototype), "schedule", this).call(this, work, delay, state);
            }
          }
        }, {
          key: "flush",
          value: function flush(action) {
            var actions = this.actions;

            if (this.active) {
              actions.push(action);
              return;
            }

            var error;
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
        }]);

        return _AsyncScheduler;
      }(_Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler); //# sourceMappingURL=AsyncScheduler.js.map

      /***/

    },

    /***/
    33637: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "asyncScheduler": function asyncScheduler() {
          return (
            /* binding */
            _asyncScheduler
          );
        },

        /* harmony export */
        "async": function async() {
          return (
            /* binding */
            _async
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncAction */
      401);
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      4548);

      var _asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);

      var _async = _asyncScheduler; //# sourceMappingURL=async.js.map

      /***/
    },

    /***/
    26561: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "isNumeric": function isNumeric() {
          return (
            /* binding */
            _isNumeric
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./isArray */
      59796);

      function _isNumeric(val) {
        return !(0, _isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && val - parseFloat(val) + 1 >= 0;
      } //# sourceMappingURL=isNumeric.js.map

      /***/

    },

    /***/
    86938: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AyuntamientosService": function AyuntamientosService() {
          return (
            /* binding */
            _AyuntamientosService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AyuntamientosService = /*#__PURE__*/function () {
        function AyuntamientosService(http) {
          _classCallCheck(this, AyuntamientosService);

          this.http = http;
        }

        _createClass(AyuntamientosService, [{
          key: "obtenerAyuntamientos",
          value: function obtenerAyuntamientos() {
            return this.http.get("http://api.miscalleslimpiasrd.tecnolora.com/api/MisCallesLimpiasRD/ConsultarListadoAyuntamientos");
          }
        }]);

        return AyuntamientosService;
      }();

      _AyuntamientosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _AyuntamientosService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _AyuntamientosService);
      /***/
    },

    /***/
    84967: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistroPageRoutingModule": function RegistroPageRoutingModule() {
          return (
            /* binding */
            _RegistroPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registro.page */
      12299);

      var routes = [{
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
      }];

      var _RegistroPageRoutingModule = function RegistroPageRoutingModule() {
        _classCallCheck(this, RegistroPageRoutingModule);
      };

      _RegistroPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegistroPageRoutingModule);
      /***/
    },

    /***/
    10636: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistroPageModule": function RegistroPageModule() {
          return (
            /* binding */
            _RegistroPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registro-routing.module */
      84967);
      /* harmony import */


      var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./registro.page */
      12299);

      var _RegistroPageModule = function RegistroPageModule() {
        _classCallCheck(this, RegistroPageModule);
      };

      _RegistroPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
      })], _RegistroPageModule);
      /***/
    },

    /***/
    12299: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistroPage": function RegistroPage() {
          return (
            /* binding */
            _RegistroPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./registro.page.html */
      36344);
      /* harmony import */


      var _registro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./registro.page.scss */
      45802);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      20945);
      /* harmony import */


      var _Services_registro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Services/registro.service */
      2889);
      /* harmony import */


      var _Services_ayuntamientos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Services/ayuntamientos.service */
      86938);

      var _RegistroPage = /*#__PURE__*/function () {
        function RegistroPage(menuCtrl, servicio, toastCtrl, alertController, router, Ayuntamiento) {
          _classCallCheck(this, RegistroPage);

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

        _createClass(RegistroPage, [{
          key: "toggleTextPassword",
          value: function toggleTextPassword() {
            this.isActiveToggleTextPassword = this.isActiveToggleTextPassword == true ? false : true;
          }
        }, {
          key: "getType",
          value: function getType() {
            return this.isActiveToggleTextPassword ? 'password' : 'text';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.labelVisibility = false; //emit value in sequence every 10 second

            var source = (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000);
            var text = 'Your Text Here';
            this.subscription = source.subscribe(function (val) {
              return _this3.VerificarCorreoElectronico();
            });
            this.ayuntamientos();
          }
        }, {
          key: "ayuntamientos",
          value: function ayuntamientos() {
            var _this4 = this;

            this.Ayuntamiento.obtenerAyuntamientos().subscribe(function (data) {
              _this4.Ayuntamientos = data;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuCtrl.enable(false);
          }
        }, {
          key: "ErrorAlert",
          value: function ErrorAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error',
                        message: 'No se puede realizar el registro.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "SuccesAlert",
          value: function SuccesAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        // header: 'Error',
                        message: 'Usuario Registrado con Exito.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ElementosVaciosAlertas",
          value: function ElementosVaciosAlertas() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Error al crear usuario',
                        message: 'hoho, hubo un error. Asegurese de llenar todos los campos',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "restrictNumeric",
          value: function restrictNumeric(e) {
            var input;

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
        }, {
          key: "VerificarCorreoElectronico",
          value: function VerificarCorreoElectronico() {
            var _this5 = this;

            var correo_Usuario;
            correo_Usuario = this.email;
            this.servicio.VerificarCorreoElectronico(correo_Usuario).subscribe(function (data) {
              _this5.datos = data;

              if (_this5.datos.respuesta == "OK") {
                _this5.btnDisabled = true;
                _this5.labelVisibility = false;
                _this5.isShown = true;
              } else {
                _this5.btnDisabled = false;
                _this5.labelVisibility = true;
                _this5.isShown = false;
              }
            });
          }
        }, {
          key: "onLimpiar",
          value: function onLimpiar() {
            this.usuario = null;
            this.email = null;
            this.clave = null;
            this.cedula = null;
            this.telefono = null;
          }
        }, {
          key: "numberOnlyValidation",
          value: function numberOnlyValidation(event) {
            var pattern = /[0-9.,]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              // invalid character, prevent input
              event.preventDefault();
            }
          }
        }, {
          key: "onKeydown",
          value: function onKeydown(event) {
            if (event.keyCode === 32) {
              return false;
            }
          }
        }, {
          key: "omit_special_char",
          value: function omit_special_char(event) {
            var k;
            k = event.charCode; //         k = event.keyCode;  (Both can be used)

            return k > 64 && k < 91 || k > 96 && k < 123 || k == 8 || k == 32 || k >= 48 && k <= 57;
          }
        }, {
          key: "checkValue",
          value: function checkValue(event) {
            this.gg = event.detail.value;
            return this.gg;
          }
        }, {
          key: "onRegistroUsuario",
          value: function onRegistroUsuario(event) {
            var _this6 = this;

            // console.log(event.detail.value)
            var ayuntamiento = this.gg;
            var emailVacio = document.getElementById('email').value;
            var nombreVacio = document.getElementById('nombre').value;
            var passwordVacio = document.getElementById('password').value;
            var cedulaVacio = document.getElementById('cedula').value;
            var telefonoVacio = document.getElementById('telefono').value; // let ayuntamiento =(document.getElementById('cod_ayuntamiento' + event) as HTMLDivElement).textContent;

            if (typeof ayuntamiento === 'undefined' || emailVacio.length == 0 || nombreVacio.length == 0 || passwordVacio.length == 0 || cedulaVacio.length == 0 || telefonoVacio.length == 0) {
              this.ElementosVaciosAlertas();
              console.log('Hola');
              return;
            }

            var usuario, email, clave, cedula, telefono, estado;
            usuario = this.usuario;
            email = this.email;
            clave = this.clave;
            cedula = this.cedula;
            telefono = this.telefono;
            estado = this.estado;
            this.cod_ayuntamiento = ayuntamiento;
            this.servicio.RegistroUsuario(usuario, email, clave, cedula, telefono, estado, this.cod_ayuntamiento).subscribe(function (data) {
              _this6.datos = data;

              if (_this6.datos.respuesta == "OK") {
                _this6.SuccesAlert();

                _this6.onLimpiar();
              } else {
                _this6.ErrorAlert();
              }
            }, function (error) {
              alert(error);
            });
          }
        }]);

        return RegistroPage;
      }();

      _RegistroPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
        }, {
          type: _Services_registro_service__WEBPACK_IMPORTED_MODULE_2__.RegistroService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _Services_ayuntamientos_service__WEBPACK_IMPORTED_MODULE_3__.AyuntamientosService
        }];
      };

      _RegistroPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RegistroPage);
      /***/
    },

    /***/
    45802: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".blocktext {\n  margin-left: auto;\n  margin-right: auto;\n  width: 8em;\n}\n\n.labelhide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFFSSxhQUFBO0FBQUoiLCJmaWxlIjoicmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA4ZW1cclxufVxyXG5cclxuLmxhYmVsaGlkZVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */";
      /***/
    },

    /***/
    36344: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n    <!-- Back button with a default href -->\r\n\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-buttons slot=\"start\">\r\n                <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n            </ion-buttons>\r\n            <ion-title>Registro</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <div style=\"padding-left: 5px; padding-right: 20px;\">\r\n        <!-- <ion-item>\r\n    <label style=\"paddiang-bottom: 3mm; text-align: center;\" class=\"blocktext\"> <strong> Registro</strong></label>\r\n</ion-item> -->\r\n\r\n        <ion-item>\r\n            <ion-input style=\"text-transform: uppercase; \" required placeholder=\"Nombre de Usuario\" maxlength=\"30\" id=\"nombre\" (keypress)=\"omit_special_char($event)\" (keydown)=\"onKeydown($event)\" [(ngModel)]=\"usuario\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-input style=\"text-transform: uppercase; \" required placeholder=\"Email\" maxlength=\"100\" (ngModelChange)=\"VerificarCorreoElectronico()\" [(ngModel)]=\"email\" id=\"email\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-input style=\"text-transform: uppercase; \" required [type]=\"getType()\" [(ngModel)]=\"clave\" id=\"password\" maxlengh=\"50\" placeholder=\"Contraseña\"></ion-input>\r\n            <ion-icon name=\"eye\" (click)=\"toggleTextPassword()\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n            <ion-input type=\"tel\" maxlength=\"11\" placeholder=\"CEDULA\" required [(ngModel)]=\"cedula\" id=\"cedula\" (keypress)=\"restrictNumeric($event)\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item> \r\n            <ion-input type=\"tel\" [(ngModel)]=\"telefono\" required (keypress)=\"restrictNumeric($event)\" maxlength=\"10\" placeholder=\"TELÉFONO\" id=\"telefono\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-list>\r\n            <!-- <ion-list-header>\r\n                <ion-label>\r\n                    Seleccione Su Ayuntamiento\r\n                </ion-label>\r\n            </ion-list-header> -->\r\n\r\n            <ion-item>\r\n                <ion-label>SELECCIONE SU AYUNTAMIENTO</ion-label>\r\n                <ion-select [compareWith]=\"compareWith\" okText=\"Aceptar\" cancelText=\"Cancelar\" (ionChange)=\"checkValue($event)\">\r\n                    <ion-select-option *ngFor=\"let ayuntamiento of Ayuntamientos; let i = index\" value=\"{{ayuntamiento.cod_ayuntamiento}}\">\r\n                        {{ayuntamiento.nombre }}\r\n\r\n                        <!-- <ion-label style=\"display: none;\" class=\"ocultar\" id=\"{{'cod_ayuntamiento'}}\"></ion-label> {{ayuntamiento.nombre }} -->\r\n\r\n                    </ion-select-option>\r\n                </ion-select>\r\n\r\n            </ion-item>\r\n\r\n            <ion-label *ngIf=\"isShown\" style=\"color: brown; padding-left: 13px;\" [ngClass]=\"{'hidden': isHidden}\" id=\"labelya\" [ngStyle]=\"{'color': (labelVisibility)? 'transparent': 'red'}\">¡Este correo ya existe!</ion-label>\r\n\r\n        </ion-list>\r\n\r\n\r\n\r\n\r\n        <!-- <ion-list>\r\n            <ion-radio-group value=\"biff\">\r\n                <ion-list-header>\r\n                    <ion-label>Ayuntamientos</ion-label>\r\n                </ion-list-header>\r\n\r\n                <ion-item *ngFor=\"let ayuntamiento of Ayuntamientos; let i = index\">\r\n\r\n                    <ion-radio slot=\"start\" value=\"{{ayuntamiento.cod_ayuntamiento }}\" id=\"{{'cod_ayuntamiento' + i}}\">\r\n                        <ion-label>\r\n                            {{ayuntamiento.cod_ayuntamiento }}\r\n                        </ion-label>\r\n                    </ion-radio>\r\n\r\n                </ion-item>\r\n            </ion-radio-group>\r\n\r\n\r\n        </ion-list>-->\r\n        <div style=\"margin:auto; width:80%; padding-top: 40px;\">\r\n            <ion-button expand=\"block\" style=\"font-weight: bold;\" [disabled]=\"btnDisabled\" [ngStyle]=\"{'color': (btnDisabled)? '#BDBEBD': 'white'}\" (click)=\"onRegistroUsuario()\">Registrarme</ion-button>\r\n            <img style=\"width:150%;\" src=\"assets/imagenes/Roads.png\">\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n</ion-content>\r\n<!-- <ion-content>\r\n\r\n\r\n\r\n    <ion-list>\r\n        <ion-list-header>\r\n            <ion-label>\r\n                Seleccione Su Ayuntamiento\r\n            </ion-label>\r\n        </ion-list-header>\r\n\r\n        <ion-item>\r\n            <ion-label>Ayuntamientos</ion-label>\r\n            <ion-select [compareWith]=\"compareWith\">\r\n                <ion-select-option *ngFor=\"let ayuntamiento of Ayuntamientos\" [value]=\"nombre\">{{ayuntamiento.nombre }}</ion-select-option>\r\n            </ion-select>\r\n        </ion-item>\r\n    </ion-list>\r\n</ion-content> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_registro_registro_module_ts-es5.js.map