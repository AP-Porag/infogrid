"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CreateInformation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vuelidate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vuelidate/core */ "./node_modules/@vuelidate/core/dist/index.mjs");
/* harmony import */ var _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vuelidate/validators */ "./node_modules/@vuelidate/validators/dist/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// import VuePhoneNumberInput from 'vue-phone-number-input';


// import {isReadonly} from "vue";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CreateInformation",
  props: ["customers", "promos", "parties", "authenticators"],
  // components: {
  //     VuePhoneNumberInput,
  // },
  setup: function setup() {
    return {
      v$: (0,_vuelidate_core__WEBPACK_IMPORTED_MODULE_0__.useVuelidate)()
    };
  },
  data: function data() {
    return {
      maxDate: "",
      show_error_one: false,
      show_error_two: false,
      show_error_three: false,
      show_error_four: false,
      show_error_five: false,
      show_error_six: false,
      show_error_seven: false,
      show_error_eight: false,
      show_error_nine: false,
      show_error_ten: false,
      show_error_eleven: false,
      show_error_twelve: false,
      show_error_thirteen: false,
      show_error_fourteen: false,
      show_error_fifteen: false,
      show_error_sixteen: false,
      isReadonly: false,
      step_count: 4,
      completed_step_count: '',
      form_wizard_subtitle: 'Start here',
      isAllSelected: false,
      showPickupLocationBox: false,
      showShowPickupLocationBox: false,
      showThirdPartyBox: false,
      showUPSBox: false,
      showItemTypeCardBox: false,
      showItemTypeAutoAthenticationBox: false,
      showItemTypeCombinedServiceBox: false,
      showItemTypeReholderBox: false,
      showItemTypeCrossoverBox: false,
      itemTypes: [{
        'id': 1,
        'name': 'Pump'
      }, {
        'id': 2,
        'name': 'Fan'
      }, {
        'id': 3,
        'name': 'Air Compressor'
      }, {
        'id': 4,
        'name': 'Chiller'
      }, {
        'id': 5,
        'name': 'Motors'
      }],
      form_data: {
        itemType: '',
        image: '',
        observations: '',
        //item type Pump
        pumpYearOfInstallationRated: '',
        pumpYearOfInstallationMeasured: '',
        pumpFlowRated: '',
        pumpFlowMeasured: '',
        pumpHeadRated: '',
        pumpHeadMeasured: '',
        pumpVoltageRated: '',
        pumpVoltageMeasured: '',
        pumpCurrentRated: '',
        pumpCurrentMeasured: '',
        pumpPowerFactorRated: '',
        pumpPowerFactorMeasured: '',
        pumpMotorPowerRated: '',
        pumpMotorPowerMeasured: '',
        pumpMotorEfficiencyRated: '',
        pumpMotorEfficiencyMeasured: '',
        pumpMotorEfficiencyClassRated: '',
        pumpMotorEfficiencyClassMeasured: '',
        pumpMotorFrameSizeRated: '',
        pumpMotorFrameSizeMeasured: '',
        pumpInsulationClassRated: '',
        pumpInsulationClassMeasured: '',
        pumpSuctionHeadRated: '',
        pumpSuctionHeadMeasured: '',
        pumpDischargeHeadRated: '',
        pumpDischargeHeadMeasured: '',
        pumpEfficiencyRated: '',
        pumpEfficiencyMeasured: '',
        //checklist
        pumpVFDorNot: '',
        pumpVFDSetting: '',
        pumpThrottling: '',
        pumpFlowModulationRequired: '',
        pumpParallelPumpOperation: '',
        pumpNosOfRewidingOfMotor: '',
        pumpCheckCavitation: '',
        pumpOperatingHours: '',
        //item type Fan
        fanYearOfInstallationRated: '',
        fanYearOfInstallationMeasured: '',
        fanFlowRated: '',
        fanFlowMeasured: '',
        fanHeadRated: '',
        fanHeadMeasured: '',
        fanVoltageRated: '',
        fanVoltageMeasured: '',
        fanCurrentRated: '',
        fanCurrentMeasured: '',
        fanPowerFactorRated: '',
        fanPowerFactorMeasured: '',
        fanMotorPowerRated: '',
        fanMotorPowerMeasured: '',
        fanMotorEfficiencyRated: '',
        fanMotorEfficiencyMeasured: '',
        fanMotorEfficiencyClassRated: '',
        fanMotorEfficiencyClassMeasured: '',
        fanMotorFrameSizeRated: '',
        fanMotorFrameSizeMeasured: '',
        fanInsulationClassRated: '',
        fanInsulationClassMeasured: '',
        fanSuctionDuctSizeRated: '',
        fanSuctionDuctSizeMeasured: '',
        fanSuctionStaticPressureRated: '',
        fanSuctionStaticPressureMeasured: '',
        fanSuctionVelocityPressureRated: '',
        fanSuctionVelocityPressureMeasured: '',
        fanDischargeDuctSizeRated: '',
        fanDischargeDuctSizeMeasured: '',
        fanDischargeStaticPressureRated: '',
        fanDischargeStaticPressureMeasured: '',
        fanDischargeVelocityPressureRated: '',
        fanDischargeVelocityPressureMeasured: '',
        fanEfficiencyRated: '',
        fanEfficiencyMeasured: '',
        //checklist
        fanVFDorNot: '',
        fanVFDSetting: '',
        fanOpening: '',
        fanFlowModulationRequired: '',
        fanParallelFanOperation: '',
        fanNosOfRewidingOfMotor: '',
        fanOperatingHours: '',
        //item type Air Compressor
        airCompressorYearOfInstallationRated: '',
        airCompressorYearOfInstallationMeasured: '',
        airCompressorFlowRated: '',
        airCompressorFlowMeasured: '',
        airCompressorHeadRated: '',
        airCompressorHeadMeasured: '',
        airCompressorVoltageRated: '',
        airCompressorVoltageMeasured: '',
        airCompressorCurrentRated: '',
        airCompressorCurrentMeasured: '',
        airCompressorPowerFactorRated: '',
        airCompressorPowerFactorMeasured: '',
        airCompressorMotorPowerRated: '',
        airCompressorMotorPowerMeasured: '',
        airCompressorMotorEfficiencyRated: '',
        airCompressorMotorEfficiencyMeasured: '',
        airCompressorMotorEfficiencyClassRated: '',
        airCompressorMotorEfficiencyClassMeasured: '',
        airCompressorMotorFrameSizeRated: '',
        airCompressorMotorFrameSizeMeasured: '',
        airCompressorInsulationClassRated: '',
        airCompressorInsulationClassMeasured: '',
        airCompressorLoadPressureClassRated: '',
        airCompressorLoadPressureClassMeasured: '',
        airCompressorUnLoadPressureClassRated: '',
        airCompressorUnLoadPressureClassMeasured: '',
        airCompressorRecieverSizeClassRated: '',
        airCompressorRecieverSizeClassMeasured: '',
        airCompressorInitialPressureClassRated: '',
        airCompressorInitialPressureClassMeasured: '',
        airCompressorFinalPressureClassRated: '',
        airCompressorFinalPressureClassMeasured: '',
        airCompressorTimeToReachFinalPressureClassRated: '',
        airCompressorTimeToReachFinalPressureClassMeasured: '',
        airCompressorTemperatureRated: '',
        airCompressorTemperatureMeasured: '',
        airCompressorCompressorSECRated: '',
        airCompressorCompressorSECMeasured: '',
        //Leakage test
        airCompressorLoadTimeReadingOne: '',
        airCompressorLoadTimeReadingTwo: '',
        airCompressorUnLoadTimeReadingOne: '',
        airCompressorUnLoadTimeReadingTwo: '',
        //checklist
        airCompressorVFDorNot: '',
        airCompressorNosOfRewidingOfMotor: '',
        airCompressorCheckRequiredpressure: '',
        airCompressorCheckPressureDrop: '',
        airCompressorOperatingHours: '',
        //item type Chiller
        ChillerYearOfInstallationRated: '',
        ChillerYearOfInstallationMeasured: '',
        ChillerCapacityRated: '',
        ChillerCapacityMeasured: '',
        ChillerVoltageRated: '',
        ChillerVoltageMeasured: '',
        ChillerCurrentRated: '',
        ChillerCurrentMeasured: '',
        ChillerPowerFactorRated: '',
        ChillerPowerFactorMeasured: '',
        ChillerMotorPowerRated: '',
        ChillerMotorPowerMeasured: '',
        ChillerMotorEfficiencyRated: '',
        ChillerMotorEfficiencyMeasured: '',
        ChillerMotorEfficiencyClassRated: '',
        ChillerMotorEfficiencyClassMeasured: '',
        ChillerMotorFrameSizeRated: '',
        ChillerMotorFrameSizeMeasured: '',
        ChillerSupplyTempRated: '',
        ChillerSupplyTempMeasured: '',
        ChillerReturnTempRated: '',
        ChillerReturnTempMeasured: '',
        ChillerFlowRated: '',
        ChillerFlowMeasured: '',
        ChillerChillerSECRated: '',
        ChillerChillerSECMeasured: '',
        ChillerCondenserApprochRated: '',
        ChillerCondenserApprochMeasured: '',
        //checklist
        ChillerVFDorNot: '',
        ChillerSetTemp: '',
        ChillerCheckCondenserCondition: '',
        ChillerOperatingHours: '',
        //item type Motors
        motorYearOfInstallationRated: '',
        motorYearOfInstallationMeasured: '',
        motorNameOfEquipmentRated: '',
        motorNameOfEquipmentMeasured: '',
        motorVoltageRated: '',
        motorVoltageMeasured: '',
        motorCurrentRated: '',
        motorCurrentMeasured: '',
        motorPowerFactorRated: '',
        motorPowerFactorMeasured: '',
        motorMotorPowerRated: '',
        motorMotorPowerMeasured: '',
        motorMotorEfficiencyRated: '',
        motorMotorEfficiencyMeasured: '',
        motorMotorEfficiencyClassRated: '',
        motorMotorEfficiencyClassMeasured: '',
        motorMotorFrameSizeRated: '',
        motorMotorFrameSizeMeasured: '',
        //checklist
        motorVFDorNot: '',
        motorCheckPerPhaseCurrent: '',
        motorCheckPhasor: '',
        motorNosOfRewidingOfMotor: '',
        motorOperatingHours: ''
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!_this.checkSeventhStep()) {
                _context.next = 4;
                break;
              }
              Swal.fire({
                // title: "Are the selected product offerings applicable for drop off center: <br> West's Card Edmonton",
                title: "Do you want to save this order: <br> ".concat(_this.form_data.name),
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Yes",
                denyButtonText: "No",
                icon: "question"
              }).then(function (result) {
                console.log(result);
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  // Swal.fire("Saved!", "", "success");
                  // window.location.href = `/admin/entries/10`;
                  // Submit form

                  axios.post("/admin/entries", _this.form_data).then(function (response) {
                    console.log(response);
                    Swal.fire("Saved!", "", "success").then(function (result) {
                      if (result.isConfirmed) {
                        if (response.status == 200) {
                          window.location.href = "/admin/entries/".concat(response.data.data.id);
                        }
                      }
                    });

                    // window.location.reload()
                    // window.location.href = "/admin/thirds";
                  })["catch"](function (err) {
                    try {
                      self.showValidationError(err);
                    } catch (e) {
                      self.showSomethingWrong();
                    }
                  });
                  // Swal.fire("Saved!", "", "success");
                } else if (result.isDismissed) {
                  window.location.href = "/admin/entries";
                } else if (result.isDenied) {
                  console.log(result.isDenied);
                  // Swal.fire("Changes are not saved", "", "info");
                }
              });
              _context.next = 5;
              break;
            case 4:
              return _context.abrupt("return");
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    checkFirstStep: function checkFirstStep() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.v$.$touch();
              if (!_this2.v$.form_data.name.$invalid) {
                _context2.next = 4;
                break;
              }
              _this2.show_error_one = true;
              return _context2.abrupt("return", false);
            case 4:
              _this2.completed_step_count = 1;
              _this2.form_wizard_subtitle = 'Please Continue to next';
              return _context2.abrupt("return", true);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    checkSecondStep: function checkSecondStep() {
      this.v$.$touch();
      if (this.v$.form_data.grading_location.$invalid) {
        this.show_error_two = true;
        return false;
      }
      this.completed_step_count = 2;
      this.form_wizard_subtitle = 'Please Continue to next';
      return true;
    },
    checkThirdStep: function checkThirdStep() {
      this.v$.$touch();
      if (this.v$.form_data.billing_address_line_one.$invalid || this.v$.form_data.billing_country.$invalid || this.v$.form_data.billing_province.$invalid || this.v$.form_data.billing_city.$invalid || this.v$.form_data.billing_postal.$invalid
      // this.v$.form_data.billing_phone.$invalid
      ) {
        this.show_error_three = true;
        return false;
      }
      this.completed_step_count = 3;
      this.form_wizard_subtitle = 'Almost Done';
      return true;
    },
    checkFourthStep: function checkFourthStep() {
      this.v$.$touch();
      if (this.v$.form_data.shipping_address_line_one.$invalid || this.v$.form_data.shipping_country.$invalid || this.v$.form_data.shipping_province.$invalid || this.v$.form_data.shipping_city.$invalid || this.v$.form_data.shipping_postal.$invalid
      // this.v$.form_data.shipping_phone.$invalid
      ) {
        this.show_error_four = true;
        return false;
      }
      this.completed_step_count = 4;
      this.form_wizard_subtitle = 'Almost Done';
      return true;
    },
    checkFifthStep: function checkFifthStep() {
      this.v$.$touch();
      if (this.v$.form_data.submission_date.$invalid) {
        this.show_error_five = true;
        return false;
      } else {
        return true;
      }
    },
    checkSixthStep: function checkSixthStep() {
      this.v$.$touch();
      if (this.v$.form_data.shipping_method.$invalid) {
        this.show_error_six = true;
        return false;
      } else if (this.v$.form_data.pickup_location.$invalid) {
        this.show_error_seven = true;
        return false;
      } else if (this.v$.form_data.show_pickup_location.$invalid) {
        this.show_error_eight = true;
        return false;
      } else if (this.v$.form_data.third_party_drop_center.$invalid) {
        this.show_error_nine = true;
        return false;
      } else if (this.v$.form_data.customer_account_number.$invalid) {
        this.show_error_ten = true;
        return false;
      } else {
        return true;
      }
    },
    checkSeventhStep: function checkSeventhStep() {
      this.v$.$touch();
      if (this.v$.form_data.itemType.$invalid) {
        this.show_error_eleven = true;
        return false;
      } else if (this.v$.form_data.card_description_one.$invalid) {
        this.show_error_twelve = true;
        return false;
      } else if (this.v$.form_data.card_authenticator_name.$invalid) {
        this.show_error_twelve = true;
        return false;
      } else if (this.v$.form_data.card_authenticator_cert_no.$invalid) {
        this.show_error_twelve = true;
        return false;
      } else if (this.v$.form_data.card_estimated_value.$invalid) {
        this.show_error_twelve = true;
        return false;
      } else if (this.v$.form_data.auto_authentication_description_one.$invalid) {
        this.show_error_thirteen = true;
        return false;
      } else if (this.v$.form_data.auto_authentication_authenticator_name.$invalid) {
        this.show_error_thirteen = true;
        return false;
      } else if (this.v$.form_data.auto_authentication_authenticator_cert_no.$invalid) {
        this.show_error_thirteen = true;
        return false;
      } else if (this.v$.form_data.auto_authentication_estimated_value.$invalid) {
        this.show_error_thirteen = true;
        return false;
      } else if (this.v$.form_data.combined_service_description_one.$invalid) {
        this.show_error_fourteen = true;
        return false;
      } else if (this.v$.form_data.combined_service_authenticator_name.$invalid) {
        this.show_error_fourteen = true;
        return false;
      } else if (this.v$.form_data.combined_service_authenticator_cert_no.$invalid) {
        this.show_error_fourteen = true;
        return false;
      } else if (this.v$.form_data.combined_service_estimated_value.$invalid) {
        this.show_error_fourteen = true;
        return false;
      } else if (this.v$.form_data.reholder_certification_number.$invalid) {
        this.show_error_fifteen = true;
        return false;
      } else if (this.v$.form_data.reholder_estimated_value.$invalid) {
        this.show_error_fifteen = true;
        return false;
      } else if (this.v$.form_data.crossover_description_one.$invalid) {
        this.show_error_sixteen = true;
        return false;
      } else if (this.v$.form_data.crossover_authenticator_name.$invalid) {
        this.show_error_sixteen = true;
        return false;
      } else if (this.v$.form_data.crossover_authenticator_cert_no.$invalid) {
        this.show_error_sixteen = true;
        return false;
      } else if (this.v$.form_data.crossover_estimated_value.$invalid) {
        this.show_error_sixteen = true;
        return false;
      } else if (this.v$.form_data.crossover_minimum_grade.$invalid) {
        this.show_error_sixteen = true;
        return false;
      } else if (this.v$.form_data.crossover_item_type.$invalid) {
        this.show_error_sixteen = true;
        return false;
      } else {
        return true;
      }
    },
    sameAsBillingChanged: function sameAsBillingChanged(event) {
      if (this.form_data.same_as_billing) {
        this.form_data.shipping_address_line_one = this.form_data.billing_address_line_one;
        this.form_data.shipping_address_line_two = this.form_data.billing_address_line_two;
        this.form_data.shipping_country = this.form_data.billing_country;
        this.form_data.shipping_province = this.form_data.billing_province;
        this.form_data.shipping_city = this.form_data.billing_city;
        this.form_data.shipping_postal = this.form_data.billing_postal;
        this.form_data.shipping_phone = this.form_data.billing_phone;
      } else {
        this.form_data.shipping_address_line_one = '';
        this.form_data.shipping_address_line_two = '';
        this.form_data.shipping_country = '';
        this.form_data.shipping_province = '';
        this.form_data.shipping_city = '';
        this.form_data.shipping_postal = '';
        this.form_data.shipping_phone = '';
      }
    },
    handleTabChange: function handleTabChange(prevIndex, nextIndex) {
      console.log('tab change called');
      console.log(prevIndex);
      console.log(nextIndex);
      var focusField = this.$refs.name;
      focusField.focus();
      switch (nextIndex) {
        case 0:
          focusField.focus();
          console.log('index 0');
          console.log(focusField.value);
          break;
        case 1:
          focusField = this.$refs.billing_address_line_one;
          focusField.focus();
          console.log(focusField.value);
          console.log('index 1');
          break;
        case 2:
          focusField = this.$refs.shipping_name;
          focusField.focus();
          console.log(focusField.value);
          console.log('index 2');
          break;
      }
    },
    cancel: function cancel() {
      window.location.assign("/admin/entries");
    },
    selectAllCats: function selectAllCats() {
      if (this.isAllSelected) {
        this.form_data.products = [];
        this.isAllSelected = false;
      } else {
        this.form_data.products = [];
        for (var product in this.products) {
          this.form_data.products.push(this.products[product].id);
        }
        this.isAllSelected = true;
      }
    },
    select: function select() {
      if (this.form_data.products.length !== this.products.length) {
        this.isAllSelected = false;
      } else {
        this.isAllSelected = true;
      }
    },
    customerNameChangeEvent: function customerNameChangeEvent() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var self;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              self = _this3;
              console.log(_this3.form_data.customer);
              _this3.form_data.name = _this3.form_data.customer.name;
              _this3.form_data.customerId = _this3.form_data.customer.id;
              console.log(_this3.form_data.customerId);
              _context3.next = 7;
              return axios.get("/admin/entries/get-customer/info/".concat(self.form_data.customerId)).then(function (res) {
                // console.log(res)
                self.form_data.billing_address_line_one = res.data.data.billing_address_line_one;
                self.form_data.billing_address_line_two = res.data.data.billing_address_line_two;
                self.form_data.billing_country = res.data.data.billing_country;
                self.form_data.billing_province = res.data.data.billing_province;
                self.form_data.billing_city = res.data.data.billing_city;
                self.form_data.billing_postal = res.data.data.billing_postal;
                self.form_data.billing_phone = res.data.data.billing_phone;
                // self.form_data.same_as_billing = res.data.data.same_as_billing == 0 ? false: true
                self.form_data.shipping_name = res.data.data.shipping_name;
                self.form_data.shipping_company_name = res.data.data.shipping_company_name;
                self.form_data.shipping_address_line_one = res.data.data.shipping_address_line_one;
                self.form_data.shipping_address_line_two = res.data.data.shipping_address_line_two;
                self.form_data.shipping_country = res.data.data.shipping_country;
                self.form_data.shipping_province = res.data.data.shipping_province;
                self.form_data.shipping_city = res.data.data.shipping_city;
                self.form_data.shipping_postal = res.data.data.shipping_postal;
                self.form_data.shipping_phone = res.data.data.shipping_phone;
              })["catch"](function (err) {
                try {
                  self.showValidationError(err);
                } catch (e) {
                  self.showSomethingWrong();
                }
              });
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    customerNameSelectEvent: function customerNameSelectEvent(_ref) {
      var id = _ref.id,
        text = _ref.text;
      console.log({
        id: id,
        text: text
      });
    },
    itemTypeChangeEvent: function itemTypeChangeEvent() {
      if (this.form_data.itemType == 'Pump') {
        this.showItemTypeCardBox = true;
        this.showItemTypeAutoAthenticationBox = false;
        this.showItemTypeCombinedServiceBox = false;
        this.showItemTypeReholderBox = false;
        this.showItemTypeCrossoverBox = false;
      }
      if (this.form_data.itemType == 'Fan') {
        this.showItemTypeCardBox = false;
        this.showItemTypeAutoAthenticationBox = true;
        this.showItemTypeCombinedServiceBox = false;
        this.showItemTypeReholderBox = false;
        this.showItemTypeCrossoverBox = false;
      }
      if (this.form_data.itemType == 'Air Compressor') {
        this.showItemTypeCardBox = false;
        this.showItemTypeAutoAthenticationBox = false;
        this.showItemTypeCombinedServiceBox = true;
        this.showItemTypeReholderBox = false;
        this.showItemTypeCrossoverBox = false;
      }
      if (this.form_data.itemType == 'Chiller') {
        this.showItemTypeCardBox = false;
        this.showItemTypeAutoAthenticationBox = false;
        this.showItemTypeCombinedServiceBox = false;
        this.showItemTypeReholderBox = true;
        this.showItemTypeCrossoverBox = false;
      }
      if (this.form_data.itemType == 'Motors') {
        this.showItemTypeCardBox = false;
        this.showItemTypeAutoAthenticationBox = false;
        this.showItemTypeCombinedServiceBox = false;
        this.showItemTypeReholderBox = false;
        this.showItemTypeCrossoverBox = true;
      }
    },
    shippingMethodsChangeEvent: function shippingMethodsChangeEvent() {
      console.log(this.form_data.shipping_method);
      if (this.form_data.shipping_method == 'Pickup') {
        this.showPickupLocationBox = true;
        this.showShowPickupLocationBox = false;
        this.showThirdPartyBox = false;
        this.showUPSBox = false;
      }
      if (this.form_data.shipping_method == 'Show Pickup') {
        this.showPickupLocationBox = false;
        this.showShowPickupLocationBox = true;
        this.showThirdPartyBox = false;
        this.showUPSBox = false;
      }
      if (this.form_data.shipping_method == 'Return to Third Party') {
        this.showPickupLocationBox = false;
        this.showShowPickupLocationBox = false;
        this.showThirdPartyBox = true;
        this.showUPSBox = false;
      }
      if (this.form_data.shipping_method == 'UPS') {
        this.showPickupLocationBox = false;
        this.showShowPickupLocationBox = false;
        this.showThirdPartyBox = false;
        this.showUPSBox = true;
      }
      if (this.form_data.shipping_method == 'Delivery') {
        this.showPickupLocationBox = false;
        this.showShowPickupLocationBox = false;
        this.showThirdPartyBox = false;
        this.showUPSBox = false;
      }
      if (this.form_data.shipping_method == 'Canada Post') {
        this.showPickupLocationBox = false;
        this.showShowPickupLocationBox = false;
        this.showThirdPartyBox = false;
        this.form_data.customer_account_number = '';
        this.showUPSBox = true;
      }
      if (this.form_data.shipping_method == 'DHL') {
        this.showPickupLocationBox = false;
        this.showShowPickupLocationBox = false;
        this.showThirdPartyBox = false;
        this.form_data.customer_account_number = '';
        this.showUPSBox = true;
      }
      if (this.form_data.shipping_method == 'FedEx') {
        this.showPickupLocationBox = false;
        this.showShowPickupLocationBox = false;
        this.showThirdPartyBox = false;
        this.form_data.customer_account_number = '';
        this.showUPSBox = true;
      }
      if (this.form_data.shipping_method == 'Purolator') {
        this.showPickupLocationBox = false;
        this.showShowPickupLocationBox = false;
        this.showThirdPartyBox = false;
        this.form_data.customer_account_number = '';
        this.showUPSBox = true;
      }
    },
    dummyStep: function dummyStep() {
      return true;
    }
  },
  mounted: function mounted() {
    // Set maxDate to today's date when the component is mounted
    this.maxDate = new Date().toISOString().split("T")[0];
  },
  validations: {
    form_data: {
      name: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      grading_location: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      contact_name: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      email: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required,
        email: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.email
      },
      billing_address_line_one: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      // billing_address_line_two:{},
      billing_country: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      billing_province: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      billing_city: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      billing_postal: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      // billing_phone:{
      //     required,
      // },
      // same_as_billing:{},
      // shipping_name:{},
      shipping_company_name: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      shipping_address_line_one: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      // shipping_address_line_two:{},
      shipping_country: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      shipping_province: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      shipping_city: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      shipping_postal: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      // shipping_phone:{
      //     required,
      // },
      status: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      products: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      submission_date: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      shipping_method: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      pickup_location: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showPickupLocationBox; // return true if this field is required
        })
      },

      show_pickup_location: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showShowPickupLocationBox; // return true if this field is required
        })
      },

      third_party_drop_center: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showThirdPartyBox; // return true if this field is required
        })
      },

      customer_account_number: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showUPSBox; // return true if this field is required
        })
      },

      itemType: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.required
      },
      //item type card
      card_description_one: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showItemTypeCardBox; // return true if this field is required
        })
      },

      // card_description_two:{
      //     required: requiredIf(function () {
      //         return this.showItemTypeCardBox // return true if this field is required
      //     }),
      // },
      // card_description_three:{
      //     required: requiredIf(function () {
      //         return this.showItemTypeCardBox // return true if this field is required
      //     }),
      // },
      card_authenticator_name: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.form_data.card_autographed; // return true if this field is required
        })
      },

      card_authenticator_cert_no: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.form_data.card_autographed; // return true if this field is required
        })
      },

      card_estimated_value: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showItemTypeCardBox; // return true if this field is required
        })
      },

      //item type auto athentication
      auto_authentication_description_one: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showItemTypeAutoAthenticationBox; // return true if this field is required
        })
      },

      // auto_authentication_description_two:{
      //     required: requiredIf(function () {
      //         return this.showItemTypeAutoAthenticationBox // return true if this field is required
      //     }),
      // },
      // auto_authentication_description_three:{
      //     required: requiredIf(function () {
      //         return this.showItemTypeAutoAthenticationBox // return true if this field is required
      //     }),
      // },
      auto_authentication_authenticator_name: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.form_data.auto_authentication_autographed; // return true if this field is required
        })
      },

      auto_authentication_authenticator_cert_no: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.form_data.auto_authentication_autographed; // return true if this field is required
        })
      },

      auto_authentication_estimated_value: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showItemTypeAutoAthenticationBox; // return true if this field is required
        })
      },

      //item type combined service
      combined_service_description_one: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showItemTypeCombinedServiceBox; // return true if this field is required
        })
      },

      // combined_service_description_two:{
      //     required: requiredIf(function () {
      //         return this.showItemTypeCombinedServiceBox // return true if this field is required
      //     }),
      // },
      // combined_service_description_three:{
      //     required: requiredIf(function () {
      //         return this.showItemTypeCombinedServiceBox // return true if this field is required
      //     }),
      // },
      combined_service_authenticator_name: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.form_data.combined_service_autographed; // return true if this field is required
        })
      },

      combined_service_authenticator_cert_no: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.form_data.combined_service_autographed; // return true if this field is required
        })
      },

      combined_service_estimated_value: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showItemTypeCombinedServiceBox; // return true if this field is required
        })
      },

      //item type reholder
      reholder_certification_number: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showItemTypeReholderBox; // return true if this field is required
        })
      },

      reholder_estimated_value: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showItemTypeReholderBox; // return true if this field is required
        })
      },

      //item type crossover
      crossover_description_one: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showItemTypeCrossoverBox; // return true if this field is required
        })
      },

      // crossover_description_two:{
      //     required: requiredIf(function () {
      //         return this.showItemTypeCrossoverBox // return true if this field is required
      //     }),
      // },
      // crossover_description_three:{
      //     required: requiredIf(function () {
      //         return this.showItemTypeCrossoverBox // return true if this field is required
      //     }),
      // },
      crossover_authenticator_name: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.form_data.crossover_autographed; // return true if this field is required
        })
      },

      crossover_authenticator_cert_no: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.form_data.crossover_autographed; // return true if this field is required
        })
      },

      crossover_estimated_value: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showItemTypeCrossoverBox; // return true if this field is required
        })
      },

      crossover_minimum_grade: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showItemTypeCrossoverBox; // return true if this field is required
        })
      },

      crossover_item_type: {
        required: (0,_vuelidate_validators__WEBPACK_IMPORTED_MODULE_1__.requiredIf)(function () {
          return this.showItemTypeCrossoverBox; // return true if this field is required
        })
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=template&id=25fc4bb5&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=template&id=25fc4bb5&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",{},[_c("form",[_c("form-wizard",{attrs:{color:"#3476ae",title:"",subtitle:"","next-button-text":"Continue","finish-button-text":"Save"},on:{"on-complete":_vm.submit},scopedSlots:_vm._u([{key:"footer",fn:function fn(props){return[_c("div",{staticClass:"wizard-footer-left"},[props.activeTabIndex>0?_c("wizard-button",{style:props.fillButtonStyle,nativeOn:{click:function click($event){return props.prevTab();}}},[_vm._v("Back")]):_vm._e()],1),_vm._v(" "),_c("div",{staticClass:"wizard-footer-right"},[_c("wizard-button",{staticClass:"wizard-footer-right finish-button",staticStyle:{background:"orange","margin-left":"15px",color:"white"},nativeOn:{click:function click($event){return _vm.cancel.apply(null,arguments);}}},[_vm._v("Cancel")]),_vm._v(" "),!props.isLastStep?_c("wizard-button",{staticClass:"wizard-footer-right",style:props.fillButtonStyle,nativeOn:{click:function click($event){return props.nextTab();}}},[_vm._v("Continue")]):_c("wizard-button",{staticClass:"wizard-footer-right",style:props.fillButtonStyle,nativeOn:{click:function click($event){return _vm.submit.apply(null,arguments);}}},[_vm._v("Save")])],1)];}}])},[_vm._v(" "),_c("tab-content",{attrs:{title:"Item Type",icon:"ti-gift"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Select the Equipment type to be entered\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.itemTypeChangeEvent]}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_vm._l(_vm.itemTypes,function(type,index){return _c("option",{key:type.id,domProps:{value:type.name}},[_vm._v(_vm._s(type.name))]);})],2),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])])])])])]),_vm._v(" "),_vm.showItemTypeCardBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:"",readonly:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:"",readonly:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flow\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Head\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Voltage\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Current\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Power factor\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor power\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor Efficiency class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",[_vm._v("IE2")]),_vm._v(" "),_c("option",[_vm._v("IE3")]),_vm._v(" "),_c("option",[_vm._v("IE5")]),_vm._v(" "),_c("option",[_vm._v("IE5")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",[_vm._v("IE2")]),_vm._v(" "),_c("option",[_vm._v("IE3")]),_vm._v(" "),_c("option",[_vm._v("IE5")]),_vm._v(" "),_c("option",[_vm._v("IE5")])])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor frame size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Insulation class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Suction head\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Discharge head\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Pump efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])])]):_vm._e(),_vm._v(" "),_vm.showItemTypeAutoAthenticationBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:"",readonly:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:"",readonly:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flow\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Head\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Voltage\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Current\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Power factor\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor power\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor Efficiency class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",[_vm._v("IE2")]),_vm._v(" "),_c("option",[_vm._v("IE3")]),_vm._v(" "),_c("option",[_vm._v("IE5")]),_vm._v(" "),_c("option",[_vm._v("IE5")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",[_vm._v("IE2")]),_vm._v(" "),_c("option",[_vm._v("IE3")]),_vm._v(" "),_c("option",[_vm._v("IE5")]),_vm._v(" "),_c("option",[_vm._v("IE5")])])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor frame size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Insulation class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Suction Duct Size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m2")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m2")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Suction Static pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Suction Velocity pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Discharge Duct Size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m2")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m2")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Discharge Static pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Discharge Velocity pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Fan efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])])]):_vm._e(),_vm._v(" "),_vm.showItemTypeCombinedServiceBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:"",readonly:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:"",readonly:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flow\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Voltage\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Current\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Power factor\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor power\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor Efficiency class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",[_vm._v("IE2")]),_vm._v(" "),_c("option",[_vm._v("IE3")]),_vm._v(" "),_c("option",[_vm._v("IE5")]),_vm._v(" "),_c("option",[_vm._v("IE5")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",[_vm._v("IE2")]),_vm._v(" "),_c("option",[_vm._v("IE3")]),_vm._v(" "),_c("option",[_vm._v("IE5")]),_vm._v(" "),_c("option",[_vm._v("IE5")])])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor frame size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Insulation class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Load Pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("bar")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("bar")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Unnload Pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("bar")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("bar")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Reciever Size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Initial Pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("bar")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("bar")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Final Pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("bar")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("bar")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Time to reach final pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Minutes")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Minutes")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Temperature\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Compressor SEC\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW/CFM")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW/CFM")])])])])])])])]),_vm._v(" "),_c("p",[_vm._v("Leakage test")]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Load time\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Reading 1\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Sec.")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Reading 2\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Sec.")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Unload time\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Reading 1\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Sec.")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Reading 2\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Sec.")])])])])])])])])]):_vm._e(),_vm._v(" "),_vm.showItemTypeReholderBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:"",readonly:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:"",readonly:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Capacity\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("TR")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("TR")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Voltage\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Current\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Power factor\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor power\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor Efficiency class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",[_vm._v("IE2")]),_vm._v(" "),_c("option",[_vm._v("IE3")]),_vm._v(" "),_c("option",[_vm._v("IE5")]),_vm._v(" "),_c("option",[_vm._v("IE5")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",[_vm._v("IE2")]),_vm._v(" "),_c("option",[_vm._v("IE3")]),_vm._v(" "),_c("option",[_vm._v("IE5")]),_vm._v(" "),_c("option",[_vm._v("IE5")])])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor frame size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Supply Temp.\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Return Temp.\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flow\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Chiller SEC\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW/TR")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW/TR")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Condenser Approch\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])])])])])])])]):_vm._e(),_vm._v(" "),_vm.showItemTypeCrossoverBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:"",readonly:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:"",readonly:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Name of equipment\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Voltage\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Current\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Power factor\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor power\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor Efficiency class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",[_vm._v("IE2")]),_vm._v(" "),_c("option",[_vm._v("IE3")]),_vm._v(" "),_c("option",[_vm._v("IE5")]),_vm._v(" "),_c("option",[_vm._v("IE5")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",[_vm._v("IE2")]),_vm._v(" "),_c("option",[_vm._v("IE3")]),_vm._v(" "),_c("option",[_vm._v("IE5")]),_vm._v(" "),_c("option",[_vm._v("IE5")])])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor frame size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.item_qty,expression:"form_data.item_qty",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.item_qty},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"item_qty",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])])]):_vm._e()])]),_vm._v(" "),_c("tab-content",{attrs:{title:"Checklist",icon:"ti-check"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_vm.form_data.itemType==="Pump"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD or not\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD setting\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Pump throttling\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Flow Modulation required\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Parallel pump operation\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Nos. of rewiding of motor\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check cavitation\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])])]):_vm._e(),_vm._v(" "),_vm.form_data.itemType==="Fan"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD or not\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD setting\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Valve opening %\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Flow Modulation required\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Parallel fan operation\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Nos. of rewiding of motor\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])])]):_vm._e(),_vm._v(" "),_vm.form_data.itemType==="Air Compressor"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD or not\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Nos. of rewiding of motor\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check Required pressure\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check Pressure drop\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])])]):_vm._e(),_vm._v(" "),_vm.form_data.itemType==="Chiller"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD or not\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check set temp.\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check condenser condition\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])])]):_vm._e(),_vm._v(" "),_vm.form_data.itemType==="Motors"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD or not\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check per phase current\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check Phasor\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Nos. of rewiding of motor\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",[_vm._v("Yes")]),_vm._v(" "),_c("option",[_vm._v("No")]),_vm._v(" "),_c("option",[_vm._v("Nos")])]),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])])]):_vm._e()])])])])]),_vm._v(" "),_c("tab-content",{attrs:{title:"Observation & Image",icon:"ti-image"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_vm._v("Camera to take picture")]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Observations\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"5",placeholder:"Write the observations here..."}}),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_eleven?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])])])])])])])])],1)],1)]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/* Chrome, Safari, Edge, Opera */\ninput[data-v-25fc4bb5]::-webkit-outer-spin-button,\ninput[data-v-25fc4bb5]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/* Firefox */\ninput[type=number][data-v-25fc4bb5] {\n    -moz-appearance: textfield;\n}\n.shipping_address_card[data-v-25fc4bb5]{\n    background: #eeeeee;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInformation_vue_vue_type_style_index_0_id_25fc4bb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInformation_vue_vue_type_style_index_0_id_25fc4bb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInformation_vue_vue_type_style_index_0_id_25fc4bb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/CreateInformation.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/CreateInformation.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateInformation_vue_vue_type_template_id_25fc4bb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateInformation.vue?vue&type=template&id=25fc4bb5&scoped=true& */ "./resources/js/components/CreateInformation.vue?vue&type=template&id=25fc4bb5&scoped=true&");
/* harmony import */ var _CreateInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateInformation.vue?vue&type=script&lang=js& */ "./resources/js/components/CreateInformation.vue?vue&type=script&lang=js&");
/* harmony import */ var _CreateInformation_vue_vue_type_style_index_0_id_25fc4bb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css& */ "./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CreateInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateInformation_vue_vue_type_template_id_25fc4bb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateInformation_vue_vue_type_template_id_25fc4bb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "25fc4bb5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CreateInformation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CreateInformation.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CreateInformation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CreateInformation.vue?vue&type=template&id=25fc4bb5&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/CreateInformation.vue?vue&type=template&id=25fc4bb5&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInformation_vue_vue_type_template_id_25fc4bb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInformation_vue_vue_type_template_id_25fc4bb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInformation_vue_vue_type_template_id_25fc4bb5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateInformation.vue?vue&type=template&id=25fc4bb5&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=template&id=25fc4bb5&scoped=true&");


/***/ }),

/***/ "./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInformation_vue_vue_type_style_index_0_id_25fc4bb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/@vuelidate/core/dist/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/@vuelidate/core/dist/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectFlag": () => (/* binding */ CollectFlag),
/* harmony export */   "default": () => (/* binding */ useVuelidate),
/* harmony export */   "useVuelidate": () => (/* binding */ useVuelidate)
/* harmony export */ });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function unwrapObj(obj) {
  let ignoreKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object.keys(obj).reduce((o, k) => {
    if (ignoreKeys.includes(k)) return o;
    o[k] = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(obj[k]);
    return o;
  }, {});
}
function isFunction(val) {
  return typeof val === 'function';
}
function isProxy(value) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isReactive)(value) || (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(value);
}
function get(obj, stringPath, def) {
  let current = obj;
  const path = stringPath.split('.');

  for (let i = 0; i < path.length; i++) {
    if (!current[path[i]]) return def;
    current = current[path[i]];
  }

  return current;
}
function gatherBooleanGroupProperties(group, nestedResults, property) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return group.some(path => {
      return get(nestedResults, path, {
        [property]: false
      })[property];
    });
  });
}
function gatherArrayGroupProperties(group, nestedResults, property) {
  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return group.reduce((all, path) => {
      const fetchedProperty = get(nestedResults, path, {
        [property]: false
      })[property] || [];
      return all.concat(fetchedProperty);
    }, []);
  });
}

function callRule(rule, value, siblingState, instance) {
  return rule.call(instance, (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(value), (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(siblingState), instance);
}

function normalizeValidatorResponse(result) {
  return result.$valid !== undefined ? !result.$valid : !result;
}

function createAsyncResult(rule, model, $pending, $dirty, _ref, $response, instance) {
  let {
    $lazy,
    $rewardEarly
  } = _ref;
  let watchTargets = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];
  let siblingState = arguments.length > 8 ? arguments[8] : undefined;
  let $lastInvalidState = arguments.length > 9 ? arguments[9] : undefined;
  let $lastCommittedOn = arguments.length > 10 ? arguments[10] : undefined;
  const $invalid = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(!!$dirty.value);
  const $pendingCounter = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
  $pending.value = false;
  const $unwatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)([model, $dirty].concat(watchTargets, $lastCommittedOn), () => {
    if ($lazy && !$dirty.value || $rewardEarly && !$lastInvalidState.value && !$pending.value) {
      return;
    }

    let ruleResult;

    try {
      ruleResult = callRule(rule, model, siblingState, instance);
    } catch (err) {
      ruleResult = Promise.reject(err);
    }

    $pendingCounter.value++;
    $pending.value = !!$pendingCounter.value;
    $invalid.value = false;
    Promise.resolve(ruleResult).then(data => {
      $pendingCounter.value--;
      $pending.value = !!$pendingCounter.value;
      $response.value = data;
      $invalid.value = normalizeValidatorResponse(data);
    }).catch(error => {
      $pendingCounter.value--;
      $pending.value = !!$pendingCounter.value;
      $response.value = error;
      $invalid.value = true;
    });
  }, {
    immediate: true,
    deep: typeof model === 'object'
  });
  return {
    $invalid,
    $unwatch
  };
}

function createSyncResult(rule, model, $dirty, _ref2, $response, instance, siblingState, $lastInvalidState) {
  let {
    $lazy,
    $rewardEarly
  } = _ref2;

  const $unwatch = () => ({});

  const $invalid = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if ($lazy && !$dirty.value || $rewardEarly && !$lastInvalidState.value) {
      return false;
    }

    let returnValue = true;

    try {
      const result = callRule(rule, model, siblingState, instance);
      $response.value = result;
      returnValue = normalizeValidatorResponse(result);
    } catch (err) {
      $response.value = err;
    }

    return returnValue;
  });
  return {
    $unwatch,
    $invalid
  };
}

function createValidatorResult(rule, model, $dirty, config, instance, validatorName, propertyKey, propertyPath, siblingState, $lastInvalidState, $lastCommittedOn) {
  const $pending = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  const $params = rule.$params || {};
  const $response = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
  let $invalid;
  let $unwatch;

  if (rule.$async) {
    ({
      $invalid,
      $unwatch
    } = createAsyncResult(rule.$validator, model, $pending, $dirty, config, $response, instance, rule.$watchTargets, siblingState, $lastInvalidState, $lastCommittedOn));
  } else {
    ({
      $invalid,
      $unwatch
    } = createSyncResult(rule.$validator, model, $dirty, config, $response, instance, siblingState, $lastInvalidState));
  }

  const message = rule.$message;
  const $message = isFunction(message) ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => message(unwrapObj({
    $pending,
    $invalid,
    $params: unwrapObj($params),
    $model: model,
    $response,
    $validator: validatorName,
    $propertyPath: propertyPath,
    $property: propertyKey
  }))) : message || '';
  return {
    $message,
    $params,
    $pending,
    $invalid,
    $response,
    $unwatch
  };
}

function sortValidations() {
  let validationsRaw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const validations = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(validationsRaw);
  const validationKeys = Object.keys(validations);
  const rules = {};
  const nestedValidators = {};
  const config = {};
  let validationGroups = null;
  validationKeys.forEach(key => {
    const v = validations[key];

    switch (true) {
      case isFunction(v.$validator):
        rules[key] = v;
        break;

      case isFunction(v):
        rules[key] = {
          $validator: v
        };
        break;

      case key === '$validationGroups':
        validationGroups = v;
        break;

      case key.startsWith('$'):
        config[key] = v;
        break;

      default:
        nestedValidators[key] = v;
    }
  });
  return {
    rules,
    nestedValidators,
    config,
    validationGroups
  };
}

const ROOT_PATH = '__root';

function createValidationResults(rules, model, key, resultsCache, path, config, instance, externalResults, siblingState) {
  const ruleKeys = Object.keys(rules);
  const cachedResult = resultsCache.get(path, rules);
  const $dirty = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  const $lastInvalidState = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  const $lastCommittedOn = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(0);

  if (cachedResult) {
    if (!cachedResult.$partial) return cachedResult;
    cachedResult.$unwatch();
    $dirty.value = cachedResult.$dirty.value;
  }

  const result = {
    $dirty,
    $path: path,
    $touch: () => {
      if (!$dirty.value) $dirty.value = true;
    },
    $reset: () => {
      if ($dirty.value) $dirty.value = false;
    },
    $commit: () => {}
  };

  if (!ruleKeys.length) {
    cachedResult && resultsCache.set(path, rules, result);
    return result;
  }

  ruleKeys.forEach(ruleKey => {
    result[ruleKey] = createValidatorResult(rules[ruleKey], model, result.$dirty, config, instance, ruleKey, key, path, siblingState, $lastInvalidState, $lastCommittedOn);
  });
  result.$externalResults = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    if (!externalResults.value) return [];
    return [].concat(externalResults.value).map((stringError, index) => ({
      $propertyPath: path,
      $property: key,
      $validator: '$externalResults',
      $uid: `${path}-externalResult-${index}`,
      $message: stringError,
      $params: {},
      $response: null,
      $pending: false
    }));
  });
  result.$invalid = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const r = ruleKeys.some(ruleKey => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(result[ruleKey].$invalid));
    $lastInvalidState.value = r;
    return !!result.$externalResults.value.length || r;
  });
  result.$pending = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ruleKeys.some(ruleKey => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(result[ruleKey].$pending)));
  result.$error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => result.$dirty.value ? result.$pending.value || result.$invalid.value : false);
  result.$silentErrors = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ruleKeys.filter(ruleKey => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(result[ruleKey].$invalid)).map(ruleKey => {
    const res = result[ruleKey];
    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      $propertyPath: path,
      $property: key,
      $validator: ruleKey,
      $uid: `${path}-${ruleKey}`,
      $message: res.$message,
      $params: res.$params,
      $response: res.$response,
      $pending: res.$pending
    });
  }).concat(result.$externalResults.value));
  result.$errors = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => result.$dirty.value ? result.$silentErrors.value : []);

  result.$unwatch = () => ruleKeys.forEach(ruleKey => {
    result[ruleKey].$unwatch();
  });

  result.$commit = () => {
    $lastInvalidState.value = true;
    $lastCommittedOn.value = Date.now();
  };

  resultsCache.set(path, rules, result);
  return result;
}

function collectNestedValidationResults(validations, nestedState, path, resultsCache, config, instance, nestedExternalResults) {
  const nestedValidationKeys = Object.keys(validations);
  if (!nestedValidationKeys.length) return {};
  return nestedValidationKeys.reduce((results, nestedKey) => {
    results[nestedKey] = setValidations({
      validations: validations[nestedKey],
      state: nestedState,
      key: nestedKey,
      parentKey: path,
      resultsCache,
      globalConfig: config,
      instance,
      externalResults: nestedExternalResults
    });
    return results;
  }, {});
}

function createMetaFields(results, nestedResults, childResults) {
  const allResults = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => [nestedResults, childResults].filter(res => res).reduce((allRes, res) => {
    return allRes.concat(Object.values((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(res)));
  }, []));
  const $dirty = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)({
    get() {
      return results.$dirty.value || (allResults.value.length ? allResults.value.every(r => r.$dirty) : false);
    },

    set(v) {
      results.$dirty.value = v;
    }

  });
  const $silentErrors = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const modelErrors = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(results.$silentErrors) || [];
    const nestedErrors = allResults.value.filter(result => ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(result).$silentErrors || []).length).reduce((errors, result) => {
      return errors.concat(...result.$silentErrors);
    }, []);
    return modelErrors.concat(nestedErrors);
  });
  const $errors = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const modelErrors = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(results.$errors) || [];
    const nestedErrors = allResults.value.filter(result => ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(result).$errors || []).length).reduce((errors, result) => {
      return errors.concat(...result.$errors);
    }, []);
    return modelErrors.concat(nestedErrors);
  });
  const $invalid = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => allResults.value.some(r => r.$invalid) || (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(results.$invalid) || false);
  const $pending = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => allResults.value.some(r => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(r.$pending)) || (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(results.$pending) || false);
  const $anyDirty = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => allResults.value.some(r => r.$dirty) || allResults.value.some(r => r.$anyDirty) || $dirty.value);
  const $error = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => $dirty.value ? $pending.value || $invalid.value : false);

  const $touch = () => {
    results.$touch();
    allResults.value.forEach(result => {
      result.$touch();
    });
  };

  const $commit = () => {
    results.$commit();
    allResults.value.forEach(result => {
      result.$commit();
    });
  };

  const $reset = () => {
    results.$reset();
    allResults.value.forEach(result => {
      result.$reset();
    });
  };

  if (allResults.value.length && allResults.value.every(nr => nr.$dirty)) $touch();
  return {
    $dirty,
    $errors,
    $invalid,
    $anyDirty,
    $error,
    $pending,
    $touch,
    $reset,
    $silentErrors,
    $commit
  };
}

function setValidations(_ref) {
  let {
    validations,
    state,
    key,
    parentKey,
    childResults,
    resultsCache,
    globalConfig = {},
    instance,
    externalResults
  } = _ref;
  const path = parentKey ? `${parentKey}.${key}` : key;
  const {
    rules,
    nestedValidators,
    config,
    validationGroups
  } = sortValidations(validations);

  const mergedConfig = _objectSpread2(_objectSpread2({}, globalConfig), config);

  const nestedState = key ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const s = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(state);
    return s ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(s[key]) : undefined;
  }) : state;

  const cachedExternalResults = _objectSpread2({}, (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(externalResults) || {});

  const nestedExternalResults = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    const results = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(externalResults);
    if (!key) return results;
    return results ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(results[key]) : undefined;
  });
  const results = createValidationResults(rules, nestedState, key, resultsCache, path, mergedConfig, instance, nestedExternalResults, state);
  const nestedResults = collectNestedValidationResults(nestedValidators, nestedState, path, resultsCache, mergedConfig, instance, nestedExternalResults);
  const $validationGroups = {};

  if (validationGroups) {
    Object.entries(validationGroups).forEach(_ref2 => {
      let [key, group] = _ref2;
      $validationGroups[key] = {
        $invalid: gatherBooleanGroupProperties(group, nestedResults, '$invalid'),
        $error: gatherBooleanGroupProperties(group, nestedResults, '$error'),
        $pending: gatherBooleanGroupProperties(group, nestedResults, '$pending'),
        $errors: gatherArrayGroupProperties(group, nestedResults, '$errors'),
        $silentErrors: gatherArrayGroupProperties(group, nestedResults, '$silentErrors')
      };
    });
  }

  const {
    $dirty,
    $errors,
    $invalid,
    $anyDirty,
    $error,
    $pending,
    $touch,
    $reset,
    $silentErrors,
    $commit
  } = createMetaFields(results, nestedResults, childResults);
  const $model = key ? (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)({
    get: () => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(nestedState),
    set: val => {
      $dirty.value = true;
      const s = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(state);
      const external = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(externalResults);

      if (external) {
        external[key] = cachedExternalResults[key];
      }

      if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(s[key])) {
        s[key].value = val;
      } else {
        s[key] = val;
      }
    }
  }) : null;

  if (key && mergedConfig.$autoDirty) {
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(nestedState, () => {
      if (!$dirty.value) $touch();
      const external = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(externalResults);

      if (external) {
        external[key] = cachedExternalResults[key];
      }
    }, {
      flush: 'sync'
    });
  }

  async function $validate() {
    $touch();

    if (mergedConfig.$rewardEarly) {
      $commit();
      await (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)();
    }

    await (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)();
    return new Promise(resolve => {
      if (!$pending.value) return resolve(!$invalid.value);
      const unwatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)($pending, () => {
        resolve(!$invalid.value);
        unwatch();
      });
    });
  }

  function $getResultsForChild(key) {
    return (childResults.value || {})[key];
  }

  function $clearExternalResults() {
    if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(externalResults)) {
      externalResults.value = cachedExternalResults;
    } else {
      if (Object.keys(cachedExternalResults).length === 0) {
        Object.keys(externalResults).forEach(k => {
          delete externalResults[k];
        });
      } else {
        Object.assign(externalResults, cachedExternalResults);
      }
    }
  }

  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(_objectSpread2(_objectSpread2(_objectSpread2({}, results), {}, {
    $model,
    $dirty,
    $error,
    $errors,
    $invalid,
    $anyDirty,
    $pending,
    $touch,
    $reset,
    $path: path || ROOT_PATH,
    $silentErrors,
    $validate,
    $commit
  }, childResults && {
    $getResultsForChild,
    $clearExternalResults,
    $validationGroups
  }), nestedResults));
}

class ResultsStorage {
  constructor() {
    this.storage = new Map();
  }

  set(path, rules, result) {
    this.storage.set(path, {
      rules,
      result
    });
  }

  checkRulesValidity(path, rules, storedRules) {
    const storedRulesKeys = Object.keys(storedRules);
    const newRulesKeys = Object.keys(rules);
    if (newRulesKeys.length !== storedRulesKeys.length) return false;
    const hasAllValidators = newRulesKeys.every(ruleKey => storedRulesKeys.includes(ruleKey));
    if (!hasAllValidators) return false;
    return newRulesKeys.every(ruleKey => {
      if (!rules[ruleKey].$params) return true;
      return Object.keys(rules[ruleKey].$params).every(paramKey => {
        return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(storedRules[ruleKey].$params[paramKey]) === (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(rules[ruleKey].$params[paramKey]);
      });
    });
  }

  get(path, rules) {
    const storedRuleResultPair = this.storage.get(path);
    if (!storedRuleResultPair) return undefined;
    const {
      rules: storedRules,
      result
    } = storedRuleResultPair;
    const isValidCache = this.checkRulesValidity(path, rules, storedRules);
    const $unwatch = result.$unwatch ? result.$unwatch : () => ({});
    if (!isValidCache) return {
      $dirty: result.$dirty,
      $partial: true,
      $unwatch
    };
    return result;
  }

}

const CollectFlag = {
  COLLECT_ALL: true,
  COLLECT_NONE: false
};
const VuelidateInjectChildResults = Symbol('vuelidate#injectChildResults');
const VuelidateRemoveChildResults = Symbol('vuelidate#removeChildResults');
function nestedValidations(_ref) {
  let {
    $scope,
    instance
  } = _ref;
  const childResultsRaw = {};
  const childResultsKeys = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
  const childResults = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => childResultsKeys.value.reduce((results, key) => {
    results[key] = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(childResultsRaw[key]);
    return results;
  }, {}));

  function injectChildResultsIntoParent(results, _ref2) {
    let {
      $registerAs: key,
      $scope: childScope,
      $stopPropagation
    } = _ref2;
    if ($stopPropagation || $scope === CollectFlag.COLLECT_NONE || childScope === CollectFlag.COLLECT_NONE || $scope !== CollectFlag.COLLECT_ALL && $scope !== childScope) return;
    childResultsRaw[key] = results;
    childResultsKeys.value.push(key);
  }

  instance.__vuelidateInjectInstances = [].concat(instance.__vuelidateInjectInstances || [], injectChildResultsIntoParent);

  function removeChildResultsFromParent(key) {
    childResultsKeys.value = childResultsKeys.value.filter(childKey => childKey !== key);
    delete childResultsRaw[key];
  }

  instance.__vuelidateRemoveInstances = [].concat(instance.__vuelidateRemoveInstances || [], removeChildResultsFromParent);
  const sendValidationResultsToParent = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.inject)(VuelidateInjectChildResults, []);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.provide)(VuelidateInjectChildResults, instance.__vuelidateInjectInstances);
  const removeValidationResultsFromParent = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.inject)(VuelidateRemoveChildResults, []);
  (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.provide)(VuelidateRemoveChildResults, instance.__vuelidateRemoveInstances);
  return {
    childResults,
    sendValidationResultsToParent,
    removeValidationResultsFromParent
  };
}

function ComputedProxyFactory(target) {
  return new Proxy(target, {
    get(target, prop) {
      return typeof target[prop] === 'object' ? ComputedProxyFactory(target[prop]) : (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => target[prop]);
    }

  });
}

let uid = 0;
function useVuelidate(validations, state) {
  var _getCurrentInstance;

  let globalConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (arguments.length === 1) {
    globalConfig = validations;
    validations = undefined;
    state = undefined;
  }

  let {
    $registerAs,
    $scope = CollectFlag.COLLECT_ALL,
    $stopPropagation,
    $externalResults,
    currentVueInstance
  } = globalConfig;
  const instance = currentVueInstance || ((_getCurrentInstance = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)()) === null || _getCurrentInstance === void 0 ? void 0 : _getCurrentInstance.proxy);
  const componentOptions = instance ? instance.$options : {};

  if (!$registerAs) {
    uid += 1;
    $registerAs = `_vuelidate_${uid}`;
  }

  const validationResults = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)({});
  const resultsCache = new ResultsStorage();
  const {
    childResults,
    sendValidationResultsToParent,
    removeValidationResultsFromParent
  } = instance ? nestedValidations({
    $scope,
    instance
  }) : {
    childResults: (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)({})
  };

  if (!validations && componentOptions.validations) {
    const rules = componentOptions.validations;
    state = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
      state.value = instance;
      (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(() => isFunction(rules) ? rules.call(state.value, new ComputedProxyFactory(state.value)) : rules, validations => {
        validationResults.value = setValidations({
          validations,
          state,
          childResults,
          resultsCache,
          globalConfig,
          instance,
          externalResults: $externalResults || instance.vuelidateExternalResults
        });
      }, {
        immediate: true
      });
    });
    globalConfig = componentOptions.validationsConfig || globalConfig;
  } else {
    const validationsWatchTarget = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.isRef)(validations) || isProxy(validations) ? validations : (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.reactive)(validations || {});
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(validationsWatchTarget, newValidationRules => {
      validationResults.value = setValidations({
        validations: newValidationRules,
        state,
        childResults,
        resultsCache,
        globalConfig,
        instance: instance !== null && instance !== void 0 ? instance : {},
        externalResults: $externalResults
      });
    }, {
      immediate: true
    });
  }

  if (instance) {
    sendValidationResultsToParent.forEach(f => f(validationResults, {
      $registerAs,
      $scope,
      $stopPropagation
    }));
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => removeValidationResultsFromParent.forEach(f => f($registerAs)));
  }

  return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    return _objectSpread2(_objectSpread2({}, (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(validationResults.value)), childResults.value);
  });
}




/***/ }),

/***/ "./node_modules/@vuelidate/validators/dist/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@vuelidate/validators/dist/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "alphaNum": () => (/* binding */ alphaNum),
/* harmony export */   "and": () => (/* binding */ and),
/* harmony export */   "between": () => (/* binding */ between),
/* harmony export */   "createI18nMessage": () => (/* binding */ createI18nMessage),
/* harmony export */   "decimal": () => (/* binding */ decimal),
/* harmony export */   "email": () => (/* binding */ email),
/* harmony export */   "helpers": () => (/* binding */ common),
/* harmony export */   "integer": () => (/* binding */ integer),
/* harmony export */   "ipAddress": () => (/* binding */ ipAddress),
/* harmony export */   "macAddress": () => (/* binding */ macAddress),
/* harmony export */   "maxLength": () => (/* binding */ maxLength),
/* harmony export */   "maxValue": () => (/* binding */ maxValue),
/* harmony export */   "minLength": () => (/* binding */ minLength),
/* harmony export */   "minValue": () => (/* binding */ minValue),
/* harmony export */   "not": () => (/* binding */ not),
/* harmony export */   "numeric": () => (/* binding */ numeric),
/* harmony export */   "or": () => (/* binding */ or),
/* harmony export */   "required": () => (/* binding */ required),
/* harmony export */   "requiredIf": () => (/* binding */ requiredIf),
/* harmony export */   "requiredUnless": () => (/* binding */ requiredUnless),
/* harmony export */   "sameAs": () => (/* binding */ sameAs),
/* harmony export */   "url": () => (/* binding */ url)
/* harmony export */ });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function isFunction(val) {
  return typeof val === 'function';
}
function isObject(o) {
  return o !== null && typeof o === 'object' && !Array.isArray(o);
}
function normalizeValidatorObject(validator) {
  return isFunction(validator.$validator) ? _objectSpread2({}, validator) : {
    $validator: validator
  };
}
function isPromise(object) {
  return isObject(object) && isFunction(object.then);
}
function unwrapValidatorResponse(result) {
  if (typeof result === 'object') return result.$valid;
  return result;
}
function unwrapNormalizedValidator(validator) {
  return validator.$validator || validator;
}

function withParams($params, $validator) {
  if (!isObject($params)) throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof $params}`);
  if (!isObject($validator) && !isFunction($validator)) throw new Error(`[@vuelidate/validators]: Validator must be a function or object with $validator parameter`);
  const validatorObj = normalizeValidatorObject($validator);
  validatorObj.$params = _objectSpread2(_objectSpread2({}, validatorObj.$params || {}), $params);
  return validatorObj;
}

function withMessage($message, $validator) {
  if (!isFunction($message) && typeof (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)($message) !== 'string') throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof $message}`);
  if (!isObject($validator) && !isFunction($validator)) throw new Error(`[@vuelidate/validators]: Validator must be a function or object with $validator parameter`);
  const validatorObj = normalizeValidatorObject($validator);
  validatorObj.$message = $message;
  return validatorObj;
}

function withAsync($validator) {
  let $watchTargets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const validatorObj = normalizeValidatorObject($validator);
  return _objectSpread2(_objectSpread2({}, validatorObj), {}, {
    $async: true,
    $watchTargets
  });
}

function forEach(validators) {
  return {
    $validator(collection) {
      for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        others[_key - 1] = arguments[_key];
      }

      return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(collection).reduce((previous, collectionItem, index) => {
        const collectionEntryResult = Object.entries(collectionItem).reduce((all, _ref) => {
          let [property, $model] = _ref;
          const innerValidators = validators[property] || {};
          const propertyResult = Object.entries(innerValidators).reduce((all, _ref2) => {
            let [validatorName, currentValidator] = _ref2;
            const validatorFunction = unwrapNormalizedValidator(currentValidator);
            const $response = validatorFunction.call(this, $model, collectionItem, index, ...others);
            const $valid = unwrapValidatorResponse($response);
            all.$data[validatorName] = $response;
            all.$data.$invalid = !$valid || !!all.$data.$invalid;
            all.$data.$error = all.$data.$invalid;

            if (!$valid) {
              let $message = currentValidator.$message || '';
              const $params = currentValidator.$params || {};

              if (typeof $message === 'function') {
                $message = $message({
                  $pending: false,
                  $invalid: !$valid,
                  $params,
                  $model,
                  $response
                });
              }

              all.$errors.push({
                $property: property,
                $message,
                $params,
                $response,
                $model,
                $pending: false,
                $validator: validatorName
              });
            }

            return {
              $valid: all.$valid && $valid,
              $data: all.$data,
              $errors: all.$errors
            };
          }, {
            $valid: true,
            $data: {},
            $errors: []
          });
          all.$data[property] = propertyResult.$data;
          all.$errors[property] = propertyResult.$errors;
          return {
            $valid: all.$valid && propertyResult.$valid,
            $data: all.$data,
            $errors: all.$errors
          };
        }, {
          $valid: true,
          $data: {},
          $errors: {}
        });
        return {
          $valid: previous.$valid && collectionEntryResult.$valid,
          $data: previous.$data.concat(collectionEntryResult.$data),
          $errors: previous.$errors.concat(collectionEntryResult.$errors)
        };
      }, {
        $valid: true,
        $data: [],
        $errors: []
      });
    },

    $message: _ref3 => {
      let {
        $response
      } = _ref3;
      return $response ? $response.$errors.map(context => {
        return Object.values(context).map(errors => errors.map(error => error.$message)).reduce((a, b) => a.concat(b), []);
      }) : [];
    }
  };
}

const req = value => {
  value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(value);
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }

  if (typeof value === 'object') {
    for (let _ in value) return true;

    return false;
  }

  return !!String(value).length;
};
const len = value => {
  value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(value);
  if (Array.isArray(value)) return value.length;

  if (typeof value === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};
function regex() {
  for (var _len = arguments.length, expr = new Array(_len), _key = 0; _key < _len; _key++) {
    expr[_key] = arguments[_key];
  }

  return value => {
    value = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(value);
    return !req(value) || expr.every(reg => {
      reg.lastIndex = 0;
      return reg.test(value);
    });
  };
}

var common = /*#__PURE__*/Object.freeze({
  __proto__: null,
  forEach: forEach,
  len: len,
  normalizeValidatorObject: normalizeValidatorObject,
  regex: regex,
  req: req,
  unwrap: vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref,
  unwrapNormalizedValidator: unwrapNormalizedValidator,
  unwrapValidatorResponse: unwrapValidatorResponse,
  withAsync: withAsync,
  withMessage: withMessage,
  withParams: withParams
});

var alpha$1 = regex(/^[a-zA-Z]*$/);

var alpha = {
  $validator: alpha$1,
  $message: 'The value is not alphabetical',
  $params: {
    type: 'alpha'
  }
};

var alphaNum$1 = regex(/^[a-zA-Z0-9]*$/);

var alphaNum = {
  $validator: alphaNum$1,
  $message: 'The value must be alpha-numeric',
  $params: {
    type: 'alphaNum'
  }
};

var numeric$1 = regex(/^\d*(\.\d+)?$/);

var numeric = {
  $validator: numeric$1,
  $message: 'Value must be numeric',
  $params: {
    type: 'numeric'
  }
};

function between$1 (min, max) {
  return value => !req(value) || (!/\s/.test(value) || value instanceof Date) && +(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(min) <= +value && +(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(max) >= +value;
}

function between (min, max) {
  return {
    $validator: between$1(min, max),
    $message: _ref => {
      let {
        $params
      } = _ref;
      return `The value must be between ${$params.min} and ${$params.max}`;
    },
    $params: {
      min,
      max,
      type: 'between'
    }
  };
}

const emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
var email$1 = regex(emailRegex);

var email = {
  $validator: email$1,
  $message: 'Value is not a valid email address',
  $params: {
    type: 'email'
  }
};

function ipAddress$1 (value) {
  if (!req(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  const nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
}

const nibbleValid = nibble => {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  const numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

var ipAddress = {
  $validator: ipAddress$1,
  $message: 'The value is not a valid IP address',
  $params: {
    type: 'ipAddress'
  }
};

function macAddress$1 () {
  let separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return value => {
    separator = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(separator);

    if (!req(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    const parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  };
}

const hexValid = hex => hex.toLowerCase().match(/^[0-9a-f]{2}$/);

function macAddress (separator) {
  return {
    $validator: macAddress$1(separator),
    $message: 'The value is not a valid MAC Address',
    $params: {
      type: 'macAddress'
    }
  };
}

function maxLength$1 (length) {
  return value => !req(value) || len(value) <= (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(length);
}

function maxLength (max) {
  return {
    $validator: maxLength$1(max),
    $message: _ref => {
      let {
        $params
      } = _ref;
      return `The maximum length allowed is ${$params.max}`;
    },
    $params: {
      max,
      type: 'maxLength'
    }
  };
}

function minLength$1 (length) {
  return value => !req(value) || len(value) >= (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(length);
}

function minLength (min) {
  return {
    $validator: minLength$1(min),
    $message: _ref => {
      let {
        $params
      } = _ref;
      return `This field should be at least ${$params.min} characters long`;
    },
    $params: {
      min,
      type: 'minLength'
    }
  };
}

function required$1 (value) {
  if (typeof value === 'string') {
    value = value.trim();
  }

  return req(value);
}

var required = {
  $validator: required$1,
  $message: 'Value is required',
  $params: {
    type: 'required'
  }
};

const validate$1 = (prop, val) => prop ? req(typeof val === 'string' ? val.trim() : val) : true;

function requiredIf$1(propOrFunction) {
  return function (value, parentVM) {
    if (typeof propOrFunction !== 'function') {
      return validate$1((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(propOrFunction), value);
    }

    const result = propOrFunction.call(this, value, parentVM);
    return validate$1(result, value);
  };
}

function requiredIf (prop) {
  return {
    $validator: requiredIf$1(prop),
    $message: 'The value is required',
    $params: {
      type: 'requiredIf',
      prop
    }
  };
}

const validate = (prop, val) => !prop ? req(typeof val === 'string' ? val.trim() : val) : true;

function requiredUnless$1(propOrFunction) {
  return function (value, parentVM) {
    if (typeof propOrFunction !== 'function') {
      return validate((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(propOrFunction), value);
    }

    const result = propOrFunction.call(this, value, parentVM);
    return validate(result, value);
  };
}

function requiredUnless (prop) {
  return {
    $validator: requiredUnless$1(prop),
    $message: 'The value is required',
    $params: {
      type: 'requiredUnless',
      prop
    }
  };
}

function sameAs$1 (equalTo) {
  return value => (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(value) === (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(equalTo);
}

function sameAs (equalTo) {
  let otherName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'other';
  return {
    $validator: sameAs$1(equalTo),
    $message: _ref => {
      return `The value must be equal to the ${otherName} value`;
    },
    $params: {
      equalTo,
      otherName,
      type: 'sameAs'
    }
  };
}

const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
var url$1 = regex(urlRegex);

var url = {
  $validator: url$1,
  $message: 'The value is not a valid URL address',
  $params: {
    type: 'url'
  }
};

function syncOr(validators) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return validators.reduce((valid, fn) => {
      if (unwrapValidatorResponse(valid)) return valid;
      return unwrapNormalizedValidator(fn).apply(this, args);
    }, false);
  };
}

function asyncOr(validators) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.reduce(async (valid, fn) => {
      const r = await valid;
      if (unwrapValidatorResponse(r)) return r;
      return unwrapNormalizedValidator(fn).apply(this, args);
    }, Promise.resolve(false));
  };
}

function or$1() {
  for (var _len3 = arguments.length, validators = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    validators[_key3] = arguments[_key3];
  }

  const $async = validators.some(v => v.$async);
  const $watchTargets = validators.reduce((all, v) => {
    if (!v.$watchTargets) return all;
    return all.concat(v.$watchTargets);
  }, []);

  let $validator = () => false;

  if (validators.length) $validator = $async ? asyncOr(validators) : syncOr(validators);
  return {
    $async,
    $validator,
    $watchTargets
  };
}

function or () {
  return withParams({
    type: 'or'
  }, withMessage('The value does not match any of the provided validators', or$1(...arguments)));
}

function syncAnd(validators) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return validators.reduce((valid, fn) => {
      if (!unwrapValidatorResponse(valid)) return valid;
      return unwrapNormalizedValidator(fn).apply(this, args);
    }, true);
  };
}

function asyncAnd(validators) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.reduce(async (valid, fn) => {
      const r = await valid;
      if (!unwrapValidatorResponse(r)) return r;
      return unwrapNormalizedValidator(fn).apply(this, args);
    }, Promise.resolve(true));
  };
}

function and$1() {
  for (var _len3 = arguments.length, validators = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    validators[_key3] = arguments[_key3];
  }

  const $async = validators.some(v => v.$async);
  const $watchTargets = validators.reduce((all, v) => {
    if (!v.$watchTargets) return all;
    return all.concat(v.$watchTargets);
  }, []);

  let $validator = () => false;

  if (validators.length) $validator = $async ? asyncAnd(validators) : syncAnd(validators);
  return {
    $async,
    $validator,
    $watchTargets
  };
}

function and () {
  return withParams({
    type: 'and'
  }, withMessage('The value does not match all of the provided validators', and$1(...arguments)));
}

function not$1 (validator) {
  return function (value, vm) {
    if (!req(value)) return true;
    const response = unwrapNormalizedValidator(validator).call(this, value, vm);
    if (!isPromise(response)) return !unwrapValidatorResponse(response);
    return response.then(r => !unwrapValidatorResponse(r));
  };
}

function not (validator) {
  return {
    $validator: not$1(validator),
    $message: `The value does not match the provided validator`,
    $params: {
      type: 'not'
    }
  };
}

function minValue$1 (min) {
  return value => !req(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(min);
}

function minValue (min) {
  return {
    $validator: minValue$1(min),
    $message: _ref => {
      let {
        $params
      } = _ref;
      return `The minimum value allowed is ${$params.min}`;
    },
    $params: {
      min,
      type: 'minValue'
    }
  };
}

function maxValue$1 (max) {
  return value => !req(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +(0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(max);
}

var maxValue = (max => ({
  $validator: maxValue$1(max),
  $message: _ref => {
    let {
      $params
    } = _ref;
    return `The maximum value allowed is ${$params.max}`;
  },
  $params: {
    max,
    type: 'maxValue'
  }
}));

var integer$1 = regex(/(^[0-9]*$)|(^-[0-9]+$)/);

var integer = {
  $validator: integer$1,
  $message: 'Value is not an integer',
  $params: {
    type: 'integer'
  }
};

var decimal$1 = regex(/^[-]?\d*(\.\d+)?$/);

var decimal = {
  $validator: decimal$1,
  $message: 'Value must be decimal',
  $params: {
    type: 'decimal'
  }
};

function createI18nMessage(_ref) {
  let {
    t,
    messagePath = _ref2 => {
      let {
        $validator
      } = _ref2;
      return `validations.${$validator}`;
    },
    messageParams = params => params
  } = _ref;
  return function withI18nMessage(validator) {
    let {
      withArguments = false,
      messagePath: localMessagePath = messagePath,
      messageParams: localMessageParams = messageParams
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    function message(props) {
      return t(localMessagePath(props), localMessageParams(_objectSpread2({
        model: props.$model,
        property: props.$property,
        pending: props.$pending,
        invalid: props.$invalid,
        response: props.$response,
        validator: props.$validator,
        propertyPath: props.$propertyPath
      }, props.$params)));
    }

    if (withArguments && typeof validator === 'function') {
      return function () {
        return withMessage(message, validator(...arguments));
      };
    }

    return withMessage(message, validator);
  };
}




/***/ }),

/***/ "./node_modules/vue-demi/lib/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/vue-demi/lib/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EffectScope": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.EffectScope),
/* harmony export */   "Vue": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Vue2": () => (/* binding */ Vue2),
/* harmony export */   "computed": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "customRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "del": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.del),
/* harmony export */   "effectScope": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.effectScope),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope),
/* harmony export */   "h": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "inject": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "install": () => (/* binding */ install),
/* harmony export */   "isProxy": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isShallow": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.isShallow),
/* harmony export */   "isVue2": () => (/* binding */ isVue2),
/* harmony export */   "isVue3": () => (/* binding */ isVue3),
/* harmony export */   "markRaw": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeDefaults": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.mergeDefaults),
/* harmony export */   "nextTick": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "onActivated": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "provide": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "reactive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "set": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.set),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "toRaw": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useAttrs),
/* harmony export */   "useCssModule": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   "useCssVars": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   "useListeners": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useListeners),
/* harmony export */   "useSlots": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.useSlots),
/* harmony export */   "version": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "watch": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "watchPostEffect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__.watchSyncEffect)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");


var isVue2 = true
var isVue3 = false
var Vue2 = vue__WEBPACK_IMPORTED_MODULE_0__["default"]
var warn = vue__WEBPACK_IMPORTED_MODULE_0__["default"].util.warn

function install() {}

// createApp polyfill
function createApp(rootComponent, rootProps) {
  var vm
  var provide = {}
  var app = {
    config: vue__WEBPACK_IMPORTED_MODULE_0__["default"].config,
    use: vue__WEBPACK_IMPORTED_MODULE_0__["default"].use.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    mixin: vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    component: vue__WEBPACK_IMPORTED_MODULE_0__["default"].component.bind(vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
    provide: function (key, value) {
      provide[key] = value
      return this
    },
    directive: function (name, dir) {
      if (dir) {
        vue__WEBPACK_IMPORTED_MODULE_0__["default"].directive(name, dir)
        return app
      } else {
        return vue__WEBPACK_IMPORTED_MODULE_0__["default"].directive(name)
      }
    },
    mount: function (el, hydrating) {
      if (!vm) {
        vm = new vue__WEBPACK_IMPORTED_MODULE_0__["default"](Object.assign({ propsData: rootProps }, rootComponent, { provide: Object.assign(provide, rootComponent.provide) }))
        vm.$mount(el, hydrating)
        return vm
      } else {
        return vm
      }
    },
    unmount: function () {
      if (vm) {
        vm.$destroy()
        vm = undefined
      }
    },
  }
  return app
}





/***/ })

}]);