(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CreateInformation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vuelidate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vuelidate/core */ "./node_modules/@vuelidate/core/dist/index.mjs");
/* harmony import */ var _vuelidate_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vuelidate/validators */ "./node_modules/@vuelidate/validators/dist/index.mjs");
/* harmony import */ var vue_web_cam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-web-cam */ "./node_modules/vue-web-cam/dist/index.js");
/* harmony import */ var vue_web_cam__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_web_cam__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// import VuePhoneNumberInput from 'vue-phone-number-input';


// import {isReadonly} from "vue";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CreateInformation",
  props: ["project_id"],
  components: {
    WebCam: vue_web_cam__WEBPACK_IMPORTED_MODULE_1__.WebCam
  },
  setup: function setup() {
    return {
      v$: (0,_vuelidate_core__WEBPACK_IMPORTED_MODULE_0__.useVuelidate)()
    };
  },
  data: function data() {
    return {
      maxDate: "",
      show_error_one: false,
      isReadonly: false,
      step_count: 4,
      completed_step_count: '',
      form_wizard_subtitle: 'Start here',
      showItemTypeCardBox: false,
      showItemTypeAutoAthenticationBox: false,
      showItemTypeCombinedServiceBox: false,
      showItemTypeReholderBox: false,
      showItemTypeCrossoverBox: false,
      showItemTypeBoilerBox: false,
      showItemTypeCoolingTowerBox: false,
      showItemTypeAHUBox: false,
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
      }, {
        'id': 6,
        'name': 'Boiler'
      }, {
        'id': 7,
        'name': 'Cooling Tower'
      }, {
        'id': 8,
        'name': 'AHU'
      }],
      form_data: {
        itemType: '',
        images: [],
        project_id: null,
        name_location: '',
        make_model: '',
        observations: '',
        //item type Pump
        pump: {
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
          pumpSpeedRated: '',
          pumpSpeedMeasured: '',
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
          pumpOperatingHours: ''
        },
        //item type Fan
        fan: {
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
          fanSpeedRated: '',
          fanSpeedMeasured: '',
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
          fanDischargeVelocityRated: '',
          fanDischargeVelocityMeasured: '',
          fanEfficiencyRated: '',
          fanEfficiencyMeasured: '',
          //checklist
          fanVFDorNot: '',
          fanVFDSetting: '',
          fanOpening: '',
          fanFlowModulationRequired: '',
          fanParallelFanOperation: '',
          fanNosOfRewidingOfMotor: '',
          fanOperatingHours: ''
        },
        //item type Air Compressor
        compressor: {
          airCompressorYearOfInstallationRated: '',
          airCompressorYearOfInstallationMeasured: '',
          airCompressorFlowRated: '',
          airCompressorFlowMeasured: '',
          airCompressorPressureRated: '',
          airCompressorPressureMeasured: '',
          airCompressorVoltageRated: '',
          airCompressorVoltageMeasured: '',
          airCompressorCurrentRated: '',
          airCompressorCurrentMeasured: '',
          airCompressorPowerFactorRated: '',
          airCompressorPowerFactorMeasured: '',
          airCompressorMotorPowerRated: '',
          airCompressorMotorPowerMeasured: '',
          airCompressorSpeedRated: '',
          airCompressorSpeedMeasured: '',
          airCompressorMotorEfficiencyRated: '',
          airCompressorMotorEfficiencyMeasured: '',
          airCompressorMotorEfficiencyClassRated: '',
          airCompressorMotorEfficiencyClassMeasured: '',
          airCompressorMotorFrameSizeRated: '',
          airCompressorMotorFrameSizeMeasured: '',
          airCompressorInsulationClassRated: '',
          airCompressorInsulationClassMeasured: '',
          airCompressorLoadPressureRated: '',
          airCompressorLoadPressureMeasured: '',
          airCompressorUnLoadPressureRated: '',
          airCompressorUnLoadPressureMeasured: '',
          airCompressorRecieverSizeRated: '',
          airCompressorRecieverSizeMeasured: '',
          airCompressorPipeVolumeRated: '',
          airCompressorPipeVolumeMeasured: '',
          airCompressorInitialPressureRated: '',
          airCompressorInitialPressureMeasured: '',
          airCompressorFinalPressureRated: '',
          airCompressorFinalPressureMeasured: '',
          airCompressorTimeToReachFinalPressureRated: '',
          airCompressorTimeToReachFinalPressureMeasured: '',
          airCompressorTemperatureRated: '',
          airCompressorTemperatureMeasured: '',
          airCompressorCompressorSECRated: '',
          airCompressorCompressorSECMeasured: '',
          airCompressorDryerTypeRated: '',
          airCompressorDryerTypeMeasured: '',
          airCompressorDryerMakeModelRated: '',
          airCompressorDryerMakeModelMeasured: '',
          //Leakage test
          airCompressorLoadTimeReadingOne: '',
          airCompressorLoadTimeReadingTwo: '',
          airCompressorLoadTimeReadingThree: '',
          airCompressorUnLoadTimeReadingOne: '',
          airCompressorUnLoadTimeReadingTwo: '',
          airCompressorUnLoadTimeReadingThree: '',
          airCompressorLeakageReadingOne: '',
          airCompressorLeakageReadingTwo: '',
          airCompressorLeakageReadingThree: '',
          //checklist
          airCompressorVFDorNot: '',
          airCompressorVFDSetting: '',
          airCompressorNosOfRewidingOfMotor: '',
          airCompressorCheckRequiredpressure: '',
          airCompressorCheckPressureDrop: '',
          airCompressorCheckEndUsePointPressure: '',
          airCompressorCheckInletAirFilterDp: '',
          airCompressorCheckLoadTime: '',
          airCompressorCheckUnLoadTime: '',
          airCompressorCheckLoadHours: '',
          airCompressorCheckRunHours: '',
          airCompressorCheckAmbientTemp: '',
          airCompressorOperatingHours: ''
        },
        //item type Chiller
        chiller: {
          chillerYearOfInstallationRated: '',
          chillerYearOfInstallationMeasured: '',
          chillerTypeOfChillerRated: '',
          chillerTypeOfChillerMeasured: '',
          chillerNosOfCompressorRated: '',
          chillerNosOfCompressorMeasured: '',
          chillerCapacityRated: '',
          chillerCapacityMeasured: '',
          chillerVoltageRated: '',
          chillerVoltageMeasured: '',
          chillerCurrentRated: '',
          chillerCurrentMeasured: '',
          chillerPowerFactorRated: '',
          chillerPowerFactorMeasured: '',
          chillerSpeedRated: '',
          chillerSpeedMeasured: '',
          chillerMotorPowerRated: '',
          chillerMotorPowerMeasured: '',
          chillerMotorEfficiencyRated: '',
          chillerMotorEfficiencyMeasured: '',
          chillerMotorEfficiencyClassRated: '',
          chillerMotorEfficiencyClassMeasured: '',
          chillerMotorFrameSizeRated: '',
          chillerMotorFrameSizeMeasured: '',
          chillerChillerLoadingRated: '',
          chillerChillerLoadingMeasured: '',
          chillerSupplyTempRated: '',
          chillerSupplyTempMeasured: '',
          chillerReturnTempRated: '',
          chillerReturnTempMeasured: '',
          chillerFlowRated: '',
          chillerFlowMeasured: '',
          chillerChillerSECRated: '',
          chillerChillerSECMeasured: '',
          chillerCondenserApprochRated: '',
          chillerCondenserApprochMeasured: '',
          //checklist
          chillerVFDorNot: '',
          chillerVFDSetting: '',
          chillerSetTemp: '',
          chillerCheckCondenserCondition: '',
          chillerTakeChillerHMIData: '',
          chillerOperatingHours: ''
        },
        //item type Motors
        motor: {
          motorYearOfInstallationRated: '',
          motorYearOfInstallationMeasured: '',
          // motorNameOfEquipmentRated:'',
          // motorNameOfEquipmentMeasured:'',
          motorVoltageRated: '',
          motorVoltageMeasured: '',
          motorCurrentRated: '',
          motorCurrentMeasured: '',
          motorPowerFactorRated: '',
          motorPowerFactorMeasured: '',
          motorSpeedRated: '',
          motorSpeedMeasured: '',
          motorTempRated: '',
          motorTempMeasured: '',
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
          motorVFDSetting: '',
          motorCheckPerPhaseCurrent: '',
          motorCheckPhasor: '',
          motorNosOfRewidingOfMotor: '',
          motorOperatingHours: ''
        },
        //item type Boiler
        boiler: {
          boilerYearOfInstallationRated: '',
          boilerTypeOfBoilerRated: '',
          boilerCapacityRated: '',
          boilerTypeOfFuelRated: '',
          boilerTypeOfBurnerRated: '',
          boilerAverageQuantityOfFuelFiredInADayMeasured: '',
          boilerAnalysisOfFuelMeasured: '',
          boilerAshMeasured: '',
          boilerMoistureMeasured: '',
          boilerCarbonMeasured: '',
          boilerHydrogenMeasured: '',
          boilerNitrogenMeasured: '',
          boilerOxygenMeasured: '',
          boilerSulphurMeasured: '',
          boilerGrossCalorificValueOfFuelMeasured: '',
          boilerNetCalorificValueOfFuelMeasured: '',
          boilerFlueGasAnalysisCO2Measured: '',
          boilerFlueGasAnalysisCOMeasured: '',
          boilerFlueGasAnalysisOxygenMeasured: '',
          boilerFlueGasTemperatureMeasured: '',
          boilerAmbientTemperatureMeasured: '',
          boilerHumidityInAirKgOfDryAirMeasured: '',
          boilerTotalSurfaceAreaOfBoilerMeasured: '',
          boilerVelocityOfWindAroundTheBoilerMeasured: '',
          boilerAverageSurfaceTemperatureMeasured: '',
          boilerAverageQuantityOfFuelFiredPerHourMeasured: '',
          boilerGCVOfFlyAshMeasured: '',
          boilerFlyAshKgOfFuelMeasured: '',
          boilerGCVOfBottomAshMeasured: '',
          boilerOperatingTempRated: '',
          boilerOperatingTempMeasured: '',
          boilerOperatingPressureRated: '',
          boilerOperatingPressureMeasured: '',
          //checklist
          boilerVFDOnIdFan: '',
          boilerVFDOnFdFan: '',
          boilerMaximumTempCanSustain: '',
          boilerAlternateFuelPossibility: '',
          boilerBlowDownControl: '',
          boilerCollectFeedWaterTestReport: '',
          boilerBlowDownWaterTDSvalue: '',
          boilerWasteHeatRecovery: '',
          boilerBurnerAirMaxTempCapacity: '',
          boilerCheckSteamTraps: '',
          boilerFlueGasMonitoring: '',
          boilerOnlineMonitoringControl: '',
          boilerWaterSteamFlowMeterReading: '',
          boilerFuelFlowMeterReading: '',
          boilerOperatingHours: ''
        },
        //item type Cooling Tower
        cooling: {
          coolingYearOfInstallationRated: '',
          coolingCapacityRated: '',
          coolingCapacityMeasured: '',
          coolingTypeOfCoolingTowerRated: '',
          coolingEnteringWaterTempMeasured: '',
          coolingLeavingWaterTempMeasured: '',
          coolingFanPowerRated: '',
          coolingFanPowerMeasured: '',
          coolingNumberOfCellsRated: '',
          coolingNumberOfCellsMeasured: '',
          coolingEnteringAirTempDBTMeasured: '',
          coolingEnteringAirTempWBTMeasured: '',
          coolingLeavingAirTempDBTMeasured: '',
          coolingLeavingAirTempWBTMeasured: '',
          coolingFlowOfWaterMeasured: '',
          coolingAirVelocityMeasured: '',
          coolingAreaOfFanOfCTMeasured: '',
          //checklist
          coolingVFDOnFanOrNot: '',
          coolingVFDSettingFan: '',
          coolingVFDSettingPump: '',
          coolingVFDOnPumpOrNot: '',
          coolingDriftLossVisible: '',
          coolingNosOfRewidingOfFanMotor: '',
          coolingOperatingHours: ''
        },
        //item type AHU
        ahu: {
          ahuYearOfInstallationRated: '',
          ahuCapacityRated: '',
          ahuCapacityMeasured: '',
          ahuTypeOfAHURated: '',
          ahuEnteringWaterTempMeasured: '',
          ahuLeavingWaterTempMeasured: '',
          ahuFanPowerRated: '',
          ahuFanPowerMeasured: '',
          ahuNumberOfCellsRated: '',
          ahuNumberOfCellsMeasured: '',
          ahuEnteringAirTempDBTMeasured: '',
          ahuEnteringAirTempWBTMeasured: '',
          ahuLeavingAirTempDBTMeasured: '',
          ahuLeavingAirTempWBTMeasured: '',
          ahuFlowOfWaterMeasured: '',
          ahuAirVelocityMeasured: '',
          ahuAirAreaOfDuctMeasured: '',
          ahuStaticPressureRated: '',
          ahuStaticPressureMeasured: '',
          ahuAHUDPRated: '',
          ahuAHUDPMeasured: '',
          //checklist
          ahuVFDOnFanOrNot: '',
          ahuVFDSettingFan: '',
          ahuDamperPosition: '',
          ahuConnectedWithBMS: '',
          ahuModulatingValve: '',
          ahuSetTemp: '',
          ahuOperatingHours: ''
        }
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var self;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              self = _this; // if (this.checkSeventhStep()){
              Swal.fire({
                // title: "Are the selected product offerings applicable for drop off center: <br> West's Card Edmonton",
                // title: `Do you want to save this data: <br> ${this.form_data.name}`,
                title: "Do you want to save this data",
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

                  axios.post("/admin/information", _this.form_data).then(function (response) {
                    console.log(response);
                    Swal.fire("Saved!", "", "success").then(function (result) {
                      if (result.isConfirmed) {
                        if (response.status == 200) {
                          // window.location.href = `/admin/information/`;
                          window.location.href = "/admin/project/".concat(self.project_id);
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
                  // window.location.href = "/admin/information";
                  window.location.href = "/admin/project/".concat(self.project_id);
                } else if (result.isDenied) {
                  console.log(result.isDenied);
                  // Swal.fire("Changes are not saved", "", "info");
                }
              });

              // }else {
              //     return;
              // }
            case 2:
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
              if (!_this2.v$.form_data.itemType.$invalid) {
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
      // window.location.assign("/admin/information");
      window.location.assign("/admin/project/".concat(self.project_id));
    },
    itemTypeChangeEvent: function itemTypeChangeEvent() {
      if (this.form_data.itemType == 'Pump') {
        this.showItemTypeCardBox = true;
        this.showItemTypeAutoAthenticationBox = false;
        this.showItemTypeCombinedServiceBox = false;
        this.showItemTypeReholderBox = false;
        this.showItemTypeCrossoverBox = false;
        this.showItemTypeBoilerBox = false;
        this.showItemTypeCoolingTowerBox = false;
        this.showItemTypeAHUBox = false;
      }
      if (this.form_data.itemType == 'Fan') {
        this.showItemTypeCardBox = false;
        this.showItemTypeAutoAthenticationBox = true;
        this.showItemTypeCombinedServiceBox = false;
        this.showItemTypeReholderBox = false;
        this.showItemTypeCrossoverBox = false;
        this.showItemTypeBoilerBox = false;
        this.showItemTypeCoolingTowerBox = false;
        this.showItemTypeAHUBox = false;
      }
      if (this.form_data.itemType == 'Air Compressor') {
        this.showItemTypeCardBox = false;
        this.showItemTypeAutoAthenticationBox = false;
        this.showItemTypeCombinedServiceBox = true;
        this.showItemTypeReholderBox = false;
        this.showItemTypeCrossoverBox = false;
        this.showItemTypeBoilerBox = false;
        this.showItemTypeCoolingTowerBox = false;
        this.showItemTypeAHUBox = false;
      }
      if (this.form_data.itemType == 'Chiller') {
        this.showItemTypeCardBox = false;
        this.showItemTypeAutoAthenticationBox = false;
        this.showItemTypeCombinedServiceBox = false;
        this.showItemTypeReholderBox = true;
        this.showItemTypeCrossoverBox = false;
        this.showItemTypeBoilerBox = false;
        this.showItemTypeCoolingTowerBox = false;
        this.showItemTypeAHUBox = false;
      }
      if (this.form_data.itemType == 'Motors') {
        this.showItemTypeCardBox = false;
        this.showItemTypeAutoAthenticationBox = false;
        this.showItemTypeCombinedServiceBox = false;
        this.showItemTypeReholderBox = false;
        this.showItemTypeCrossoverBox = true;
        this.showItemTypeBoilerBox = false;
        this.showItemTypeCoolingTowerBox = false;
        this.showItemTypeAHUBox = false;
      }
      if (this.form_data.itemType == 'Boiler') {
        this.showItemTypeCardBox = false;
        this.showItemTypeAutoAthenticationBox = false;
        this.showItemTypeCombinedServiceBox = false;
        this.showItemTypeReholderBox = false;
        this.showItemTypeCrossoverBox = false;
        this.showItemTypeBoilerBox = true;
        this.showItemTypeCoolingTowerBox = false;
        this.showItemTypeAHUBox = false;
      }
      if (this.form_data.itemType == 'Cooling Tower') {
        this.showItemTypeCardBox = false;
        this.showItemTypeAutoAthenticationBox = false;
        this.showItemTypeCombinedServiceBox = false;
        this.showItemTypeReholderBox = false;
        this.showItemTypeCrossoverBox = false;
        this.showItemTypeBoilerBox = false;
        this.showItemTypeCoolingTowerBox = true;
        this.showItemTypeAHUBox = false;
      }
      if (this.form_data.itemType == 'AHU') {
        this.showItemTypeCardBox = false;
        this.showItemTypeAutoAthenticationBox = false;
        this.showItemTypeCombinedServiceBox = false;
        this.showItemTypeReholderBox = false;
        this.showItemTypeCrossoverBox = false;
        this.showItemTypeBoilerBox = false;
        this.showItemTypeCoolingTowerBox = false;
        this.showItemTypeAHUBox = true;
      }
    },
    dummyStep: function dummyStep() {
      return true;
    },
    // Show camera modal and open camera
    openCamera: function openCamera() {
      var _this3 = this;
      // Close other modal if open
      $('#openPopUpModal').modal('hide');

      // Show camera modal
      $('#openCameraModal').modal('show');

      // Once modal is fully visible, start the camera
      $('#openCameraModal').off('shown.bs.modal').on('shown.bs.modal', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var constraints, video;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              constraints = {
                video: true
              };
              _context3.prev = 1;
              _context3.next = 4;
              return navigator.mediaDevices.getUserMedia(constraints);
            case 4:
              _this3.cameraStream = _context3.sent;
              video = _this3.$refs.video;
              if (video) {
                video.srcObject = _this3.cameraStream;
                video.play();
              }
              _context3.next = 14;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              console.error("Error accessing camera:", _context3.t0);
              alert("Could not access camera. Please allow camera permissions.");
              $('#openCameraModal').modal('hide');
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 9]]);
      })));
    },
    // Capture image from camera
    snapshot: function snapshot() {
      var video = this.$refs.video;
      var canvas = this.$refs.canvas;
      if (!video || !canvas) {
        console.error("Video or Canvas element not found!");
        return;
      }
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      var base64Image = canvas.toDataURL('image/png');

      // Save to array (assuming you're storing in formData.images)
      this.form_data.images.push(base64Image);

      // Close camera modal
      this.closeCameraModal();
    },
    // Close camera and modal
    closeCameraModal: function closeCameraModal() {
      var video = this.$refs.video;
      if (video) {
        video.pause();
        video.srcObject = null;
      }

      // Stop all video tracks
      if (this.cameraStream) {
        this.cameraStream.getTracks().forEach(function (track) {
          return track.stop();
        });
        this.cameraStream = null;
      }
      $('#openCameraModal').modal('hide');
    },
    // Open file upload modal
    openPopUpModal: function openPopUpModal() {
      $('#openPopUpModal').modal('show');
    },
    // Close file upload modal
    closePopUpModal: function closePopUpModal() {
      $('#openPopUpModal').modal('hide');
    },
    // Upload image from file input
    uploadImage: function uploadImage(event) {
      var _this4 = this;
      var files = event.target.files;
      var _loop = function _loop() {
        var reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onloadend = function () {
          _this4.form_data.images.push(reader.result);
        };
      };
      for (var i = 0; i < files.length; i++) {
        _loop();
      }
      this.closePopUpModal();
    },
    // Cancel/remove image by index
    cancelImage: function cancelImage(index) {
      var _this5 = this;
      this.$swal({
        title: 'Confirmation!',
        text: 'Do you want to remove this image?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          _this5.form_data.images.splice(index, 1);
          var Toast = _this5.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: function didOpen(toast) {
              toast.addEventListener('mouseenter', _this5.$swal.stopTimer);
              toast.addEventListener('mouseleave', _this5.$swal.resumeTimer);
            }
          });
          Toast.fire({
            icon: 'success',
            title: 'Removed successfully'
          });
        }
      });
    }
  },
  mounted: function mounted() {
    // Set maxDate to today's date when the component is mounted
    this.maxDate = new Date().toISOString().split("T")[0];
  },
  created: function created() {
    this.form_data.project_id = this.project_id;
  },
  computed: {
    pumpEfficiency: function pumpEfficiency() {
      // Convert motor efficiency from percentage to decimal (e.g., 90% → 0.90)
      var motorEfficiencyDecimal = this.form_data.pump.pumpMotorEfficiencyRated / 100;

      // Calculate numerator and denominator separately for clarity
      var numerator = this.form_data.pump.pumpFlowMeasured * (this.form_data.pump.pumpDischargeHeadMeasured + this.form_data.pump.pumpSuctionHeadMeasured) * 9.81;
      var denominator = 3600 * this.form_data.pump.pumpMotorPowerMeasured * motorEfficiencyDecimal;

      // Avoid division by zero
      if (denominator === 0) return 0;

      // Calculate efficiency percentage
      return numerator / denominator * 100;
    },
    airCompressorFlow: function airCompressorFlow() {
      // Convert time from minutes to seconds if needed (remove if your time is already in seconds)
      var timeInSeconds = this.form_data.compressor.airCompressorTimeToReachFinalPressureMeasured * 60;

      // Avoid division by zero
      if (timeInSeconds <= 0) return 0;

      // Calculate flow using the provided formula
      return 0.987 * (this.form_data.compressor.airCompressorFinalPressureMeasured - this.form_data.compressor.airCompressorInitialPressureMeasured) * (this.form_data.compressor.airCompressorRecieverSizeMeasured + this.form_data.compressor.airCompressorPipeVolumeMeasured) / timeInSeconds;
    },
    compressorSEC: function compressorSEC() {
      // Convert CFM to m³/min (0.0283 conversion factor)
      var flowInM3PerMin = this.form_data.compressor.airCompressorFlowMeasured * 0.0283;

      // Avoid division by zero
      if (flowInM3PerMin <= 0) return 0;

      // Calculate SEC
      return this.form_data.compressor.airCompressorMotorPowerMeasured / flowInM3PerMin;
    },
    leakagePercentageOne: function leakagePercentageOne() {
      // Convert to numbers explicitly
      var load = Number(this.form_data.compressor.airCompressorLoadTimeReadingOne);
      var unload = Number(this.form_data.compressor.airCompressorUnLoadTimeReadingOne);
      var total = load + unload;
      if (total <= 0) return 0;

      // Multiply before dividing to improve precision
      return load * 100 / total;
    },
    leakagePercentageTwo: function leakagePercentageTwo() {
      // Convert to numbers explicitly
      var load = Number(this.form_data.compressor.airCompressorLoadTimeReadingTwo);
      var unload = Number(this.form_data.compressor.airCompressorUnLoadTimeReadingTwo);
      var total = load + unload;
      if (total <= 0) return 0;

      // Multiply before dividing to improve precision
      return load * 100 / total;
    },
    leakagePercentageThree: function leakagePercentageThree() {
      // Convert to numbers explicitly
      var load = Number(this.form_data.compressor.airCompressorLoadTimeReadingThree);
      var unload = Number(this.form_data.compressor.airCompressorUnLoadTimeReadingThree);
      var total = load + unload;
      if (total <= 0) return 0;

      // Multiply before dividing to improve precision
      return load * 100 / total;
    }
  },
  watch: {
    pumpEfficiency: function pumpEfficiency(newVal) {
      this.form_data.pump.pumpEfficiencyMeasured = parseFloat(newVal.toFixed(2));
    },
    airCompressorFlow: function airCompressorFlow(newVal) {
      this.form_data.compressor.airCompressorFlowMeasured = parseFloat(newVal.toFixed(2));
    },
    compressorSEC: function compressorSEC(newVal) {
      this.form_data.compressor.airCompressorCompressorSECMeasured = parseFloat(newVal.toFixed(2));
    },
    leakagePercentageOne: function leakagePercentageOne(newVal) {
      this.form_data.compressor.airCompressorLeakageReadingOne = parseFloat(newVal.toFixed(2));
    },
    leakagePercentageTwo: function leakagePercentageTwo(newVal) {
      this.form_data.compressor.airCompressorLeakageReadingTwo = parseFloat(newVal.toFixed(2));
    },
    leakagePercentageThree: function leakagePercentageThree(newVal) {
      this.form_data.compressor.airCompressorLeakageReadingThree = parseFloat(newVal.toFixed(2));
    },
    immediate: true // To set initial value
  },

  validations: {
    form_data: {
      itemType: {
        required: _vuelidate_validators__WEBPACK_IMPORTED_MODULE_2__.required
      }
      //item type card
      // card_description_one:{
      //     required: requiredIf(function () {
      //         return this.showItemTypeCardBox // return true if this field is required
      //     }),
      // },
      // card_authenticator_name:{
      //     required: requiredIf(function () {
      //         return this.form_data.card_autographed;// return true if this field is required
      //     }),
      // },
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=template&id=25fc4bb5&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=template&id=25fc4bb5&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",{},[_c("form",[_c("form-wizard",{attrs:{color:"#3476ae",title:"",subtitle:"","next-button-text":"Continue","finish-button-text":"Save"},on:{"on-complete":_vm.submit},scopedSlots:_vm._u([{key:"footer",fn:function fn(props){return[_c("div",{staticClass:"wizard-footer-left"},[props.activeTabIndex>0?_c("wizard-button",{style:props.fillButtonStyle,nativeOn:{click:function click($event){return props.prevTab();}}},[_vm._v("Back")]):_vm._e()],1),_vm._v(" "),_c("div",{staticClass:"wizard-footer-right"},[_c("wizard-button",{staticClass:"wizard-footer-right finish-button",staticStyle:{background:"orange","margin-left":"15px",color:"white"},nativeOn:{click:function click($event){return _vm.cancel.apply(null,arguments);}}},[_vm._v("Cancel")]),_vm._v(" "),!props.isLastStep?_c("wizard-button",{staticClass:"wizard-footer-right",style:props.fillButtonStyle,nativeOn:{click:function click($event){return props.nextTab();}}},[_vm._v("Continue")]):_c("wizard-button",{staticClass:"wizard-footer-right",style:props.fillButtonStyle,nativeOn:{click:function click($event){return _vm.submit.apply(null,arguments);}}},[_vm._v("Save")])],1)];}}])},[_vm._v(" "),_c("tab-content",{attrs:{title:"Item Type",icon:"ti-gift","before-change":_vm.checkFirstStep}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Select the Equipment type to be entered\n                                                    "),_c("span",{staticClass:"error"},[_vm._v("*")])]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.itemType,expression:"form_data.itemType",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:[function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data,"itemType",$event.target.multiple?$$selectedVal:$$selectedVal[0]);},_vm.itemTypeChangeEvent]}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_vm._l(_vm.itemTypes,function(type,index){return _c("option",{key:type.id,domProps:{value:type.name}},[_vm._v(_vm._s(type.name))]);})],2),_vm._v(" "),_vm.v$.form_data.itemType.required.$invalid&&_vm.show_error_one?_c("div",{staticClass:"error"},[_vm._v("\n                                                    Item type is required\n                                                ")]):_vm._e()])])])])])]),_vm._v(" "),_vm.showItemTypeCardBox||_vm.showItemTypeAutoAthenticationBox||_vm.showItemTypeCombinedServiceBox||_vm.showItemTypeReholderBox||_vm.showItemTypeCrossoverBox||_vm.showItemTypeBoilerBox||_vm.showItemTypeCoolingTowerBox||_vm.showItemTypeAHUBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Name , Location & Make , Model\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Name & Location\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.name_location,expression:"form_data.name_location",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.name_location},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"name_location",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Make & Model\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.make_model,expression:"form_data.make_model",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.make_model},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"make_model",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]):_vm._e(),_vm._v(" "),_vm.showItemTypeCardBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpYearOfInstallationRated,expression:"form_data.pump.pumpYearOfInstallationRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpYearOfInstallationRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpYearOfInstallationRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flow\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpFlowRated,expression:"form_data.pump.pumpFlowRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpFlowRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpFlowRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpFlowMeasured,expression:"form_data.pump.pumpFlowMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpFlowMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpFlowMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Head\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpHeadRated,expression:"form_data.pump.pumpHeadRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpHeadRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpHeadRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpHeadMeasured,expression:"form_data.pump.pumpHeadMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpHeadMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpHeadMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Voltage\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpVoltageRated,expression:"form_data.pump.pumpVoltageRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpVoltageRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpVoltageRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpVoltageMeasured,expression:"form_data.pump.pumpVoltageMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpVoltageMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpVoltageMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Current\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpCurrentRated,expression:"form_data.pump.pumpCurrentRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpCurrentRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpCurrentRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpCurrentMeasured,expression:"form_data.pump.pumpCurrentMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpCurrentMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpCurrentMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Power factor\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpPowerFactorRated,expression:"form_data.pump.pumpPowerFactorRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpPowerFactorRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpPowerFactorRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpPowerFactorMeasured,expression:"form_data.pump.pumpPowerFactorMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpPowerFactorMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpPowerFactorMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor power\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpMotorPowerRated,expression:"form_data.pump.pumpMotorPowerRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpMotorPowerRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpMotorPowerRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpMotorPowerMeasured,expression:"form_data.pump.pumpMotorPowerMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpMotorPowerMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpMotorPowerMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Speed\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpSpeedRated,expression:"form_data.pump.pumpSpeedRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.pump.pumpSpeedRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpSpeedRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("rpm")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpSpeedMeasured,expression:"form_data.pump.pumpSpeedMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.pump.pumpSpeedMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpSpeedMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("rpm")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpMotorEfficiencyRated,expression:"form_data.pump.pumpMotorEfficiencyRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpMotorEfficiencyRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpMotorEfficiencyRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor Efficiency class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpMotorEfficiencyClassRated,expression:"form_data.pump.pumpMotorEfficiencyClassRated",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.pump,"pumpMotorEfficiencyClassRated",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:"IE2"}},[_vm._v("IE2")]),_vm._v(" "),_c("option",{attrs:{value:"IE3"}},[_vm._v("IE3")]),_vm._v(" "),_c("option",{attrs:{value:"IE4"}},[_vm._v("IE4")]),_vm._v(" "),_c("option",{attrs:{value:"IE5"}},[_vm._v("IE5")])])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor frame size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpMotorFrameSizeRated,expression:"form_data.pump.pumpMotorFrameSizeRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpMotorFrameSizeRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpMotorFrameSizeRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Insulation class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpInsulationClassRated,expression:"form_data.pump.pumpInsulationClassRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpInsulationClassRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpInsulationClassRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Suction head\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpSuctionHeadMeasured,expression:"form_data.pump.pumpSuctionHeadMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpSuctionHeadMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpSuctionHeadMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Discharge head\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpDischargeHeadMeasured,expression:"form_data.pump.pumpDischargeHeadMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpDischargeHeadMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpDischargeHeadMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Pump efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpEfficiencyRated,expression:"form_data.pump.pumpEfficiencyRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpEfficiencyRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpEfficiencyRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpEfficiencyMeasured,expression:"form_data.pump.pumpEfficiencyMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.pump.pumpEfficiencyMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpEfficiencyMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])])]):_vm._e(),_vm._v(" "),_vm.showItemTypeAutoAthenticationBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanYearOfInstallationRated,expression:"form_data.fan.fanYearOfInstallationRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanYearOfInstallationRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanYearOfInstallationRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flow\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanFlowRated,expression:"form_data.fan.fanFlowRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanFlowRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanFlowRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanFlowMeasured,expression:"form_data.fan.fanFlowMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanFlowMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanFlowMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Head\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanHeadRated,expression:"form_data.fan.fanHeadRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanHeadRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanHeadRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Voltage\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanVoltageRated,expression:"form_data.fan.fanVoltageRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanVoltageRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanVoltageRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanVoltageMeasured,expression:"form_data.fan.fanVoltageMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanVoltageMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanVoltageMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Current\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanCurrentRated,expression:"form_data.fan.fanCurrentRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanCurrentRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanCurrentRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanCurrentMeasured,expression:"form_data.fan.fanCurrentMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanCurrentMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanCurrentMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Power factor\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanPowerFactorRated,expression:"form_data.fan.fanPowerFactorRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanPowerFactorRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanPowerFactorRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanPowerFactorMeasured,expression:"form_data.fan.fanPowerFactorMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanPowerFactorMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanPowerFactorMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor power\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanMotorPowerRated,expression:"form_data.fan.fanMotorPowerRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanMotorPowerRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanMotorPowerRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanMotorPowerMeasured,expression:"form_data.fan.fanMotorPowerMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanMotorPowerMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanMotorPowerMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Speed\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanSpeedRated,expression:"form_data.fan.fanSpeedRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanSpeedRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanSpeedRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanSpeedMeasured,expression:"form_data.fan.fanSpeedMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanSpeedMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanSpeedMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanMotorEfficiencyRated,expression:"form_data.fan.fanMotorEfficiencyRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanMotorEfficiencyRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanMotorEfficiencyRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor Efficiency class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanMotorEfficiencyClassRated,expression:"form_data.fan.fanMotorEfficiencyClassRated",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.fan,"fanMotorEfficiencyClassRated",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:"IE2"}},[_vm._v("IE2")]),_vm._v(" "),_c("option",{attrs:{value:"IE3"}},[_vm._v("IE3")]),_vm._v(" "),_c("option",{attrs:{value:"IE4"}},[_vm._v("IE4")]),_vm._v(" "),_c("option",{attrs:{value:"IE5"}},[_vm._v("IE5")])])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor frame size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanMotorFrameSizeRated,expression:"form_data.fan.fanMotorFrameSizeRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanMotorFrameSizeRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanMotorFrameSizeRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Insulation class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanInsulationClassRated,expression:"form_data.fan.fanInsulationClassRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanInsulationClassRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanInsulationClassRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Suction Duct Size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanSuctionDuctSizeMeasured,expression:"form_data.fan.fanSuctionDuctSizeMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanSuctionDuctSizeMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanSuctionDuctSizeMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m2")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Suction Static pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanSuctionStaticPressureMeasured,expression:"form_data.fan.fanSuctionStaticPressureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanSuctionStaticPressureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanSuctionStaticPressureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Suction Velocity pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanSuctionVelocityPressureMeasured,expression:"form_data.fan.fanSuctionVelocityPressureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanSuctionVelocityPressureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanSuctionVelocityPressureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Discharge Duct Size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanDischargeDuctSizeMeasured,expression:"form_data.fan.fanDischargeDuctSizeMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanDischargeDuctSizeMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanDischargeDuctSizeMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m2")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Discharge Static pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanDischargeStaticPressureMeasured,expression:"form_data.fan.fanDischargeStaticPressureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanDischargeStaticPressureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanDischargeStaticPressureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Discharge Velocity pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanDischargeVelocityPressureMeasured,expression:"form_data.fan.fanDischargeVelocityPressureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanDischargeVelocityPressureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanDischargeVelocityPressureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Discharge Velocity\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanDischargeVelocityMeasured,expression:"form_data.fan.fanDischargeVelocityMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanDischargeVelocityMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanDischargeVelocityMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Fan efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanEfficiencyRated,expression:"form_data.fan.fanEfficiencyRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanEfficiencyRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanEfficiencyRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])])]):_vm._e(),_vm._v(" "),_vm.showItemTypeCombinedServiceBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorYearOfInstallationRated,expression:"form_data.compressor.airCompressorYearOfInstallationRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorYearOfInstallationRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorYearOfInstallationRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flow\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorFlowRated,expression:"form_data.compressor.airCompressorFlowRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorFlowRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorFlowRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorFlowMeasured,expression:"form_data.compressor.airCompressorFlowMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:"",readonly:""},domProps:{value:_vm.form_data.compressor.airCompressorFlowMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorFlowMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorPressureRated,expression:"form_data.compressor.airCompressorPressureRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorPressureRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorPressureRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorPressureMeasured,expression:"form_data.compressor.airCompressorPressureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorPressureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorPressureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Voltage\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorVoltageRated,expression:"form_data.compressor.airCompressorVoltageRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorVoltageRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorVoltageRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorVoltageMeasured,expression:"form_data.compressor.airCompressorVoltageMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorVoltageMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorVoltageMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Current\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCurrentRated,expression:"form_data.compressor.airCompressorCurrentRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorCurrentRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCurrentRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCurrentMeasured,expression:"form_data.compressor.airCompressorCurrentMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorCurrentMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCurrentMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Power factor\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorPowerFactorRated,expression:"form_data.compressor.airCompressorPowerFactorRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorPowerFactorRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorPowerFactorRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorPowerFactorMeasured,expression:"form_data.compressor.airCompressorPowerFactorMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorPowerFactorMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorPowerFactorMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor power\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorMotorPowerRated,expression:"form_data.compressor.airCompressorMotorPowerRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorMotorPowerRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorMotorPowerRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorMotorPowerMeasured,expression:"form_data.compressor.airCompressorMotorPowerMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorMotorPowerMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorMotorPowerMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Speed\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorSpeedRated,expression:"form_data.compressor.airCompressorSpeedRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorSpeedRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorSpeedRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorSpeedMeasured,expression:"form_data.compressor.airCompressorSpeedMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorSpeedMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorSpeedMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorMotorEfficiencyRated,expression:"form_data.compressor.airCompressorMotorEfficiencyRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorMotorEfficiencyRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorMotorEfficiencyRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor Efficiency class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorMotorEfficiencyClassRated,expression:"form_data.compressor.airCompressorMotorEfficiencyClassRated",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.compressor,"airCompressorMotorEfficiencyClassRated",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:"IE2"}},[_vm._v("IE2")]),_vm._v(" "),_c("option",{attrs:{value:"IE3"}},[_vm._v("IE3")]),_vm._v(" "),_c("option",{attrs:{value:"IE4"}},[_vm._v("IE4")]),_vm._v(" "),_c("option",{attrs:{value:"IE5"}},[_vm._v("IE5")])])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor frame size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorMotorFrameSizeRated,expression:"form_data.compressor.airCompressorMotorFrameSizeRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorMotorFrameSizeRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorMotorFrameSizeRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Insulation class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorInsulationClassRated,expression:"form_data.compressor.airCompressorInsulationClassRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorInsulationClassRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorInsulationClassRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Load Pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorLoadPressureMeasured,expression:"form_data.compressor.airCompressorLoadPressureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorLoadPressureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorLoadPressureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("bar")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Unnload Pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorUnLoadPressureMeasured,expression:"form_data.compressor.airCompressorUnLoadPressureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorUnLoadPressureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorUnLoadPressureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("bar")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Reciever Size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorRecieverSizeMeasured,expression:"form_data.compressor.airCompressorRecieverSizeMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorRecieverSizeMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorRecieverSizeMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Pipe volume\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorPipeVolumeMeasured,expression:"form_data.compressor.airCompressorPipeVolumeMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorPipeVolumeMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorPipeVolumeMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Initial Pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorInitialPressureMeasured,expression:"form_data.compressor.airCompressorInitialPressureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorInitialPressureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorInitialPressureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("bar")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Final Pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorFinalPressureMeasured,expression:"form_data.compressor.airCompressorFinalPressureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorFinalPressureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorFinalPressureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("bar")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Time to reach final pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorTimeToReachFinalPressureMeasured,expression:"form_data.compressor.airCompressorTimeToReachFinalPressureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorTimeToReachFinalPressureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorTimeToReachFinalPressureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Minutes")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Temperature\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorTemperatureMeasured,expression:"form_data.compressor.airCompressorTemperatureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorTemperatureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorTemperatureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Compressor SEC\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCompressorSECRated,expression:"form_data.compressor.airCompressorCompressorSECRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorCompressorSECRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCompressorSECRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW/CFM")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCompressorSECMeasured,expression:"form_data.compressor.airCompressorCompressorSECMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:"",readonly:""},domProps:{value:_vm.form_data.compressor.airCompressorCompressorSECMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCompressorSECMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW/CFM")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Dryer type\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorDryerTypeRated,expression:"form_data.compressor.airCompressorDryerTypeRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorDryerTypeRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorDryerTypeRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Dryer make and model\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorDryerMakeModelRated,expression:"form_data.compressor.airCompressorDryerMakeModelRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorDryerMakeModelRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorDryerMakeModelRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("p",[_vm._v("Leakage test")]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Load time\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Reading 1\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorLoadTimeReadingOne,expression:"form_data.compressor.airCompressorLoadTimeReadingOne",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorLoadTimeReadingOne},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorLoadTimeReadingOne",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Sec.")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Reading 2\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorLoadTimeReadingTwo,expression:"form_data.compressor.airCompressorLoadTimeReadingTwo",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorLoadTimeReadingTwo},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorLoadTimeReadingTwo",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Sec.")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Reading 3\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorLoadTimeReadingThree,expression:"form_data.compressor.airCompressorLoadTimeReadingThree",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorLoadTimeReadingThree},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorLoadTimeReadingThree",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Sec.")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Unload time\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Reading 1\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorUnLoadTimeReadingOne,expression:"form_data.compressor.airCompressorUnLoadTimeReadingOne",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorUnLoadTimeReadingOne},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorUnLoadTimeReadingOne",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Sec.")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Reading 2\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorUnLoadTimeReadingTwo,expression:"form_data.compressor.airCompressorUnLoadTimeReadingTwo",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorUnLoadTimeReadingTwo},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorUnLoadTimeReadingTwo",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Sec.")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Reading 3\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorUnLoadTimeReadingThree,expression:"form_data.compressor.airCompressorUnLoadTimeReadingThree",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorUnLoadTimeReadingThree},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorUnLoadTimeReadingThree",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("Sec.")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Leakage %\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Leakage 1\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorLeakageReadingOne,expression:"form_data.compressor.airCompressorLeakageReadingOne",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:"",readonly:""},domProps:{value:_vm.form_data.compressor.airCompressorLeakageReadingOne},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorLeakageReadingOne",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("%")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Reading 2\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorLeakageReadingTwo,expression:"form_data.compressor.airCompressorLeakageReadingTwo",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:"",readonly:""},domProps:{value:_vm.form_data.compressor.airCompressorLeakageReadingTwo},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorLeakageReadingTwo",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("%")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-4"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Reading 3\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorLeakageReadingThree,expression:"form_data.compressor.airCompressorLeakageReadingThree",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:"",readonly:""},domProps:{value:_vm.form_data.compressor.airCompressorLeakageReadingThree},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorLeakageReadingThree",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("%")])])])])])])])])]):_vm._e(),_vm._v(" "),_vm.showItemTypeReholderBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerYearOfInstallationRated,expression:"form_data.chiller.chillerYearOfInstallationRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerYearOfInstallationRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerYearOfInstallationRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Type of chiller\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerTypeOfChillerRated,expression:"form_data.chiller.chillerTypeOfChillerRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerTypeOfChillerRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerTypeOfChillerRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Nos. of Compressor\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerNosOfCompressorRated,expression:"form_data.chiller.chillerNosOfCompressorRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerNosOfCompressorRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerNosOfCompressorRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                                                                        Measured Parameter\n                                                                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerNosOfCompressorMeasured,expression:"form_data.chiller.chillerNosOfCompressorMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerNosOfCompressorMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerNosOfCompressorMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Capacity\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerCapacityRated,expression:"form_data.chiller.chillerCapacityRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerCapacityRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerCapacityRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("TR")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerCapacityMeasured,expression:"form_data.chiller.chillerCapacityMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerCapacityMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerCapacityMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("TR")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Voltage\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerVoltageRated,expression:"form_data.chiller.chillerVoltageRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerVoltageRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerVoltageRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerVoltageMeasured,expression:"form_data.chiller.chillerVoltageMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerVoltageMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerVoltageMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Current\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerCurrentRated,expression:"form_data.chiller.chillerCurrentRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerCurrentRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerCurrentRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerCurrentMeasured,expression:"form_data.chiller.chillerCurrentMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerCurrentMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerCurrentMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Power factor\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerPowerFactorRated,expression:"form_data.chiller.chillerPowerFactorRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerPowerFactorRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerPowerFactorRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerPowerFactorMeasured,expression:"form_data.chiller.chillerPowerFactorMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerPowerFactorMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerPowerFactorMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Speed\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerSpeedRated,expression:"form_data.chiller.chillerSpeedRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerSpeedRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerSpeedRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerSpeedMeasured,expression:"form_data.chiller.chillerSpeedMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerSpeedMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerSpeedMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor power\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerMotorPowerRated,expression:"form_data.chiller.chillerMotorPowerRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerMotorPowerRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerMotorPowerRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerMotorPowerMeasured,expression:"form_data.chiller.chillerMotorPowerMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerMotorPowerMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerMotorPowerMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerMotorEfficiencyRated,expression:"form_data.chiller.chillerMotorEfficiencyRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerMotorEfficiencyRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerMotorEfficiencyRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor Efficiency class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerMotorEfficiencyClassRated,expression:"form_data.chiller.chillerMotorEfficiencyClassRated",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.chiller,"chillerMotorEfficiencyClassRated",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:"IE2"}},[_vm._v("IE2")]),_vm._v(" "),_c("option",{attrs:{value:"IE3"}},[_vm._v("IE3")]),_vm._v(" "),_c("option",{attrs:{value:"IE4"}},[_vm._v("IE4")]),_vm._v(" "),_c("option",{attrs:{value:"IE5"}},[_vm._v("IE5")])])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor frame size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerMotorFrameSizeRated,expression:"form_data.chiller.chillerMotorFrameSizeRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerMotorFrameSizeRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerMotorFrameSizeRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Chiller loading\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                                                                        Measured Parameter\n                                                                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerChillerLoadingMeasured,expression:"form_data.chiller.chillerChillerLoadingMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerChillerLoadingMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerChillerLoadingMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Supply Temp.\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerSupplyTempMeasured,expression:"form_data.chiller.chillerSupplyTempMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerSupplyTempMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerSupplyTempMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Return Temp.\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerReturnTempMeasured,expression:"form_data.chiller.chillerReturnTempMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerReturnTempMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerReturnTempMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flow\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerFlowRated,expression:"form_data.chiller.chillerFlowRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerFlowRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerFlowRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerFlowMeasured,expression:"form_data.chiller.chillerFlowMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerFlowMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerFlowMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Chiller SEC\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerChillerSECRated,expression:"form_data.chiller.chillerChillerSECRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerChillerSECRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerChillerSECRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW/TR")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerChillerSECMeasured,expression:"form_data.chiller.chillerChillerSECMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerChillerSECMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerChillerSECMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW/TR")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Condenser Approch\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerCondenserApprochRated,expression:"form_data.chiller.chillerCondenserApprochRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerCondenserApprochRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerCondenserApprochRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerCondenserApprochMeasured,expression:"form_data.chiller.chillerCondenserApprochMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerCondenserApprochMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerCondenserApprochMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("C")])])])])])])])])]):_vm._e(),_vm._v(" "),_vm.showItemTypeCrossoverBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorYearOfInstallationRated,expression:"form_data.motor.motorYearOfInstallationRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.motor.motorYearOfInstallationRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorYearOfInstallationRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Voltage\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorVoltageRated,expression:"form_data.motor.motorVoltageRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorVoltageRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorVoltageRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorVoltageMeasured,expression:"form_data.motor.motorVoltageMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorVoltageMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorVoltageMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Current\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorCurrentRated,expression:"form_data.motor.motorCurrentRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorCurrentRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorCurrentRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorCurrentMeasured,expression:"form_data.motor.motorCurrentMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorCurrentMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorCurrentMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Power factor\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorPowerFactorRated,expression:"form_data.motor.motorPowerFactorRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorPowerFactorRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorPowerFactorRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorPowerFactorMeasured,expression:"form_data.motor.motorPowerFactorMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorPowerFactorMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorPowerFactorMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Speed\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorSpeedRated,expression:"form_data.motor.motorSpeedRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorSpeedRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorSpeedRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorSpeedMeasured,expression:"form_data.motor.motorSpeedMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorSpeedMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorSpeedMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Temp.\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorTempMeasured,expression:"form_data.motor.motorTempMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorTempMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorTempMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor power\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorMotorPowerRated,expression:"form_data.motor.motorMotorPowerRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorMotorPowerRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorMotorPowerRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorMotorPowerMeasured,expression:"form_data.motor.motorMotorPowerMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorMotorPowerMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorMotorPowerMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor efficiency\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorMotorEfficiencyRated,expression:"form_data.motor.motorMotorEfficiencyRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorMotorEfficiencyRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorMotorEfficiencyRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor Efficiency class\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorMotorEfficiencyClassRated,expression:"form_data.motor.motorMotorEfficiencyClassRated",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.motor,"motorMotorEfficiencyClassRated",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{value:"IE2"}},[_vm._v("IE2")]),_vm._v(" "),_c("option",{attrs:{value:"IE3"}},[_vm._v("IE3")]),_vm._v(" "),_c("option",{attrs:{value:"IE4"}},[_vm._v("IE4")]),_vm._v(" "),_c("option",{attrs:{value:"IE5"}},[_vm._v("IE5")])])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Motor frame size\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorMotorFrameSizeRated,expression:"form_data.motor.motorMotorFrameSizeRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorMotorFrameSizeRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorMotorFrameSizeRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])])]):_vm._e(),_vm._v(" "),_vm.showItemTypeBoilerBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerYearOfInstallationRated,expression:"form_data.boiler.boilerYearOfInstallationRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerYearOfInstallationRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerYearOfInstallationRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Tyep of boiler\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerTypeOfBoilerRated,expression:"form_data.boiler.boilerTypeOfBoilerRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerTypeOfBoilerRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerTypeOfBoilerRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Capacity\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerCapacityRated,expression:"form_data.boiler.boilerCapacityRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerCapacityRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerCapacityRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Type of fuel\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerTypeOfFuelRated,expression:"form_data.boiler.boilerTypeOfFuelRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerTypeOfFuelRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerTypeOfFuelRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Type of burner\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerTypeOfBurnerRated,expression:"form_data.boiler.boilerTypeOfBurnerRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerTypeOfBurnerRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerTypeOfBurnerRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Average Quantity of Fuel Fired in a day\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerAverageQuantityOfFuelFiredInADayMeasured,expression:"form_data.boiler.boilerAverageQuantityOfFuelFiredInADayMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerAverageQuantityOfFuelFiredInADayMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerAverageQuantityOfFuelFiredInADayMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Analysis of Fuel\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerAnalysisOfFuelMeasured,expression:"form_data.boiler.boilerAnalysisOfFuelMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerAnalysisOfFuelMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerAnalysisOfFuelMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Ash\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerAshMeasured,expression:"form_data.boiler.boilerAshMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerAshMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerAshMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("rpm")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Moisture\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerMoistureMeasured,expression:"form_data.boiler.boilerMoistureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerMoistureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerMoistureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Carbon\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerCarbonMeasured,expression:"form_data.boiler.boilerCarbonMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerCarbonMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerCarbonMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Hydrogen\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerHydrogenMeasured,expression:"form_data.boiler.boilerHydrogenMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerHydrogenMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerHydrogenMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Nitrogen\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerNitrogenMeasured,expression:"form_data.boiler.boilerNitrogenMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerNitrogenMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerNitrogenMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Oxygen\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerOxygenMeasured,expression:"form_data.boiler.boilerOxygenMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerOxygenMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerOxygenMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Sulphur\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerSulphurMeasured,expression:"form_data.boiler.boilerSulphurMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerSulphurMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerSulphurMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Gross Calorific value of Fuel\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerGrossCalorificValueOfFuelMeasured,expression:"form_data.boiler.boilerGrossCalorificValueOfFuelMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerGrossCalorificValueOfFuelMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerGrossCalorificValueOfFuelMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Net Calorific value of Fuel\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerNetCalorificValueOfFuelMeasured,expression:"form_data.boiler.boilerNetCalorificValueOfFuelMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerNetCalorificValueOfFuelMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerNetCalorificValueOfFuelMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flue gas Analysis CO2\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerFlueGasAnalysisCO2Measured,expression:"form_data.boiler.boilerFlueGasAnalysisCO2Measured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerFlueGasAnalysisCO2Measured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerFlueGasAnalysisCO2Measured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flue gas Analysis CO\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerFlueGasAnalysisCOMeasured,expression:"form_data.boiler.boilerFlueGasAnalysisCOMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerFlueGasAnalysisCOMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerFlueGasAnalysisCOMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flue gas Analysis Oxygen\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerFlueGasAnalysisOxygenMeasured,expression:"form_data.boiler.boilerFlueGasAnalysisOxygenMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerFlueGasAnalysisOxygenMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerFlueGasAnalysisOxygenMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flue Gas Temperature\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerFlueGasTemperatureMeasured,expression:"form_data.boiler.boilerFlueGasTemperatureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerFlueGasTemperatureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerFlueGasTemperatureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Ambient Temperature\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerAmbientTemperatureMeasured,expression:"form_data.boiler.boilerAmbientTemperatureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerAmbientTemperatureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerAmbientTemperatureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Humidity in Air / Kg of Dry Air\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerHumidityInAirKgOfDryAirMeasured,expression:"form_data.boiler.boilerHumidityInAirKgOfDryAirMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerHumidityInAirKgOfDryAirMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerHumidityInAirKgOfDryAirMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Total Surface Area of Boiler\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerTotalSurfaceAreaOfBoilerMeasured,expression:"form_data.boiler.boilerTotalSurfaceAreaOfBoilerMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerTotalSurfaceAreaOfBoilerMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerTotalSurfaceAreaOfBoilerMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Velocity of Wind Around the Boiler\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerVelocityOfWindAroundTheBoilerMeasured,expression:"form_data.boiler.boilerVelocityOfWindAroundTheBoilerMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerVelocityOfWindAroundTheBoilerMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerVelocityOfWindAroundTheBoilerMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Average Surface Temperature\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerAverageSurfaceTemperatureMeasured,expression:"form_data.boiler.boilerAverageSurfaceTemperatureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerAverageSurfaceTemperatureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerAverageSurfaceTemperatureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Average Quantity of Fuel Fired per hour\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerAverageQuantityOfFuelFiredPerHourMeasured,expression:"form_data.boiler.boilerAverageQuantityOfFuelFiredPerHourMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerAverageQuantityOfFuelFiredPerHourMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerAverageQuantityOfFuelFiredPerHourMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    GCV of Fly-Ash\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerGCVOfFlyAshMeasured,expression:"form_data.boiler.boilerGCVOfFlyAshMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerGCVOfFlyAshMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerGCVOfFlyAshMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    % of Fly-Ash / kg of Fuel\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerFlyAshKgOfFuelMeasured,expression:"form_data.boiler.boilerFlyAshKgOfFuelMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerFlyAshKgOfFuelMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerFlyAshKgOfFuelMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    GCV of Bottom-Ash\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerGCVOfBottomAshMeasured,expression:"form_data.boiler.boilerGCVOfBottomAshMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerGCVOfBottomAshMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerGCVOfBottomAshMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Operating Temp.\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerOperatingTempRated,expression:"form_data.boiler.boilerOperatingTempRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerOperatingTempRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerOperatingTempRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerOperatingTempMeasured,expression:"form_data.boiler.boilerOperatingTempMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerOperatingTempMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerOperatingTempMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Operating Pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerOperatingPressureRated,expression:"form_data.boiler.boilerOperatingPressureRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerOperatingPressureRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerOperatingPressureRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerOperatingPressureMeasured,expression:"form_data.boiler.boilerOperatingPressureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerOperatingPressureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerOperatingPressureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])])]):_vm._e(),_vm._v(" "),_vm.showItemTypeCoolingTowerBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingYearOfInstallationRated,expression:"form_data.cooling.coolingYearOfInstallationRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingYearOfInstallationRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingYearOfInstallationRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Capacity\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingCapacityRated,expression:"form_data.cooling.coolingCapacityRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingCapacityRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingCapacityRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingCapacityMeasured,expression:"form_data.cooling.coolingCapacityMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingCapacityMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingCapacityMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Type of cooling tower\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingTypeOfCoolingTowerRated,expression:"form_data.cooling.coolingTypeOfCoolingTowerRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingTypeOfCoolingTowerRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingTypeOfCoolingTowerRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Entering Water temp.\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingEnteringWaterTempMeasured,expression:"form_data.cooling.coolingEnteringWaterTempMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingEnteringWaterTempMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingEnteringWaterTempMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Leaving Water temp.\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingLeavingWaterTempMeasured,expression:"form_data.cooling.coolingLeavingWaterTempMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingLeavingWaterTempMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingLeavingWaterTempMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Fan Power\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingFanPowerRated,expression:"form_data.cooling.coolingFanPowerRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingFanPowerRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingFanPowerRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingFanPowerMeasured,expression:"form_data.cooling.coolingFanPowerMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingFanPowerMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingFanPowerMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Number of cells\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingNumberOfCellsRated,expression:"form_data.cooling.coolingNumberOfCellsRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingNumberOfCellsRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingNumberOfCellsRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingNumberOfCellsMeasured,expression:"form_data.cooling.coolingNumberOfCellsMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingNumberOfCellsMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingNumberOfCellsMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Entering air temp. (DBT)\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingEnteringAirTempDBTMeasured,expression:"form_data.cooling.coolingEnteringAirTempDBTMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingEnteringAirTempDBTMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingEnteringAirTempDBTMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("rpm")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Entering air temp. (WBT)\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingEnteringAirTempWBTMeasured,expression:"form_data.cooling.coolingEnteringAirTempWBTMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingEnteringAirTempWBTMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingEnteringAirTempWBTMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Leaving air temp. (DBT)\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingLeavingAirTempDBTMeasured,expression:"form_data.cooling.coolingLeavingAirTempDBTMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingLeavingAirTempDBTMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingLeavingAirTempDBTMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Leaving air temp. (WBT)\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingLeavingAirTempWBTMeasured,expression:"form_data.cooling.coolingLeavingAirTempWBTMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingLeavingAirTempWBTMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingLeavingAirTempWBTMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flow of water\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingFlowOfWaterMeasured,expression:"form_data.cooling.coolingFlowOfWaterMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingFlowOfWaterMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingFlowOfWaterMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Air velocity\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingAirVelocityMeasured,expression:"form_data.cooling.coolingAirVelocityMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingAirVelocityMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingAirVelocityMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Area of fan of CT\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingAreaOfFanOfCTMeasured,expression:"form_data.cooling.coolingAreaOfFanOfCTMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingAreaOfFanOfCTMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingAreaOfFanOfCTMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])])]):_vm._e(),_vm._v(" "),_vm.showItemTypeAHUBox?_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Year of installation\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuYearOfInstallationRated,expression:"form_data.ahu.ahuYearOfInstallationRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuYearOfInstallationRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuYearOfInstallationRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Capacity\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuCapacityRated,expression:"form_data.ahu.ahuCapacityRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuCapacityRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuCapacityRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuCapacityMeasured,expression:"form_data.ahu.ahuCapacityMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuCapacityMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuCapacityMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m3/hr")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Type of AHU\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuTypeOfAHURated,expression:"form_data.ahu.ahuTypeOfAHURated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuTypeOfAHURated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuTypeOfAHURated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Entering Water temp.\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuEnteringWaterTempMeasured,expression:"form_data.ahu.ahuEnteringWaterTempMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuEnteringWaterTempMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuEnteringWaterTempMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("V")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Leaving Water temp.\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuLeavingWaterTempMeasured,expression:"form_data.ahu.ahuLeavingWaterTempMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuLeavingWaterTempMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuLeavingWaterTempMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("A")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Fan Power\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuFanPowerRated,expression:"form_data.ahu.ahuFanPowerRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuFanPowerRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuFanPowerRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuFanPowerMeasured,expression:"form_data.ahu.ahuFanPowerMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuFanPowerMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuFanPowerMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Number of cells\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuNumberOfCellsRated,expression:"form_data.ahu.ahuNumberOfCellsRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuNumberOfCellsRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuNumberOfCellsRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuNumberOfCellsMeasured,expression:"form_data.ahu.ahuNumberOfCellsMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuNumberOfCellsMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuNumberOfCellsMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("kW")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Entering air temp. (DBT)\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuEnteringAirTempDBTMeasured,expression:"form_data.ahu.ahuEnteringAirTempDBTMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuEnteringAirTempDBTMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuEnteringAirTempDBTMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("rpm")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Entering air temp. (WBT)\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuEnteringAirTempWBTMeasured,expression:"form_data.ahu.ahuEnteringAirTempWBTMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuEnteringAirTempWBTMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuEnteringAirTempWBTMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Leaving air temp. (DBT)\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuLeavingAirTempDBTMeasured,expression:"form_data.ahu.ahuLeavingAirTempDBTMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuLeavingAirTempDBTMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuLeavingAirTempDBTMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Leaving air temp. (WBT)\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuLeavingAirTempWBTMeasured,expression:"form_data.ahu.ahuLeavingAirTempWBTMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuLeavingAirTempWBTMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuLeavingAirTempWBTMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Flow of water\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuFlowOfWaterMeasured,expression:"form_data.ahu.ahuFlowOfWaterMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuFlowOfWaterMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuFlowOfWaterMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Air velocity\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuAirVelocityMeasured,expression:"form_data.ahu.ahuAirVelocityMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuAirVelocityMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuAirVelocityMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}}),_vm._v(" "),_c("span",{staticClass:"mt-2",staticStyle:{"margin-left":".5rem"}},[_vm._v("m")])])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Area of duct\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuAirAreaOfDuctMeasured,expression:"form_data.ahu.ahuAirAreaOfDuctMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuAirAreaOfDuctMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuAirAreaOfDuctMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    Static pressure\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuStaticPressureRated,expression:"form_data.ahu.ahuStaticPressureRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuStaticPressureRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuStaticPressureRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuStaticPressureMeasured,expression:"form_data.ahu.ahuStaticPressureMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuStaticPressureMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuStaticPressureMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])]),_vm._v(" "),_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"row mb-3"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                    AHU DP\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Rated Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuAHUDPRated,expression:"form_data.ahu.ahuAHUDPRated",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuAHUDPRated},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuAHUDPRated",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("label",{staticClass:"form-label w-100"},[_vm._v("\n                                                        Measured Parameter\n                                                    ")]),_vm._v(" "),_c("div",{staticClass:"d-flex justify-content-between"},[_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuAHUDPMeasured,expression:"form_data.ahu.ahuAHUDPMeasured",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuAHUDPMeasured},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuAHUDPMeasured",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])])])])])])]):_vm._e()])]),_vm._v(" "),_c("tab-content",{attrs:{title:"Checklist",icon:"ti-check"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_vm.form_data.itemType==="Pump"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD or not\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpVFDorNot,expression:"form_data.pump.pumpVFDorNot",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.pump,"pumpVFDorNot",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_vm.form_data.pump.pumpVFDorNot==="yes"?_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD setting in Hz\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpVFDSetting,expression:"form_data.pump.pumpVFDSetting",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.pump.pumpVFDSetting},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpVFDSetting",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Pump throttling\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpThrottling,expression:"form_data.pump.pumpThrottling",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.pump,"pumpThrottling",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Flow Modulation required\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpFlowModulationRequired,expression:"form_data.pump.pumpFlowModulationRequired",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.pump,"pumpFlowModulationRequired",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Parallel pump operation\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpParallelPumpOperation,expression:"form_data.pump.pumpParallelPumpOperation",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.pump,"pumpParallelPumpOperation",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Nos. of rewiding of motor\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpNosOfRewidingOfMotor,expression:"form_data.pump.pumpNosOfRewidingOfMotor",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.pump.pumpNosOfRewidingOfMotor},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpNosOfRewidingOfMotor",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check cavitation\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpCheckCavitation,expression:"form_data.pump.pumpCheckCavitation",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.pump,"pumpCheckCavitation",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours in day\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.pump.pumpOperatingHours,expression:"form_data.pump.pumpOperatingHours",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.pump.pumpOperatingHours},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.pump,"pumpOperatingHours",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])]):_vm._e(),_vm._v(" "),_vm.form_data.itemType==="Fan"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD or not\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanVFDorNot,expression:"form_data.fan.fanVFDorNot",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.fan,"fanVFDorNot",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_vm.form_data.fan.fanVFDorNot==="yes"?_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD setting\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanVFDSetting,expression:"form_data.fan.fanVFDSetting",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanVFDSetting},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanVFDSetting",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Damper opening %\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanOpening,expression:"form_data.fan.fanOpening",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanOpening},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanOpening",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Flow Modulation required\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanFlowModulationRequired,expression:"form_data.fan.fanFlowModulationRequired",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.fan,"fanFlowModulationRequired",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Parallel fan operation\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanParallelFanOperation,expression:"form_data.fan.fanParallelFanOperation",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.fan,"fanParallelFanOperation",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Nos. of rewiding of motor\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanNosOfRewidingOfMotor,expression:"form_data.fan.fanNosOfRewidingOfMotor",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanNosOfRewidingOfMotor},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanNosOfRewidingOfMotor",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.fan.fanOperatingHours,expression:"form_data.fan.fanOperatingHours",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.fan.fanOperatingHours},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.fan,"fanOperatingHours",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])]):_vm._e(),_vm._v(" "),_vm.form_data.itemType==="Air Compressor"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD or not\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorVFDorNot,expression:"form_data.compressor.airCompressorVFDorNot",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.compressor,"airCompressorVFDorNot",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_vm.form_data.compressor.airCompressorVFDorNot==="yes"?_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD setting\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorVFDSetting,expression:"form_data.compressor.airCompressorVFDSetting",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorVFDSetting},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorVFDSetting",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Nos. of rewiding of motor\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorNosOfRewidingOfMotor,expression:"form_data.compressor.airCompressorNosOfRewidingOfMotor",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorNosOfRewidingOfMotor},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorNosOfRewidingOfMotor",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check Required pressure\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCheckRequiredpressure,expression:"form_data.compressor.airCompressorCheckRequiredpressure",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorCheckRequiredpressure},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCheckRequiredpressure",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check Pressure drop\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCheckPressureDrop,expression:"form_data.compressor.airCompressorCheckPressureDrop",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorCheckPressureDrop},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCheckPressureDrop",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check end use point pressure\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCheckEndUsePointPressure,expression:"form_data.compressor.airCompressorCheckEndUsePointPressure",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorCheckEndUsePointPressure},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCheckEndUsePointPressure",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check inlet air filter DP\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCheckInletAirFilterDp,expression:"form_data.compressor.airCompressorCheckInletAirFilterDp",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorCheckInletAirFilterDp},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCheckInletAirFilterDp",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check load time\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCheckLoadTime,expression:"form_data.compressor.airCompressorCheckLoadTime",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorCheckLoadTime},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCheckLoadTime",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check unload time\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCheckUnLoadTime,expression:"form_data.compressor.airCompressorCheckUnLoadTime",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorCheckUnLoadTime},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCheckUnLoadTime",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Load hours\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCheckLoadHours,expression:"form_data.compressor.airCompressorCheckLoadHours",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorCheckLoadHours},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCheckLoadHours",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Run hours\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCheckRunHours,expression:"form_data.compressor.airCompressorCheckRunHours",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorCheckRunHours},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCheckRunHours",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Ambient Temp.\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorCheckAmbientTemp,expression:"form_data.compressor.airCompressorCheckAmbientTemp",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorCheckAmbientTemp},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorCheckAmbientTemp",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.compressor.airCompressorOperatingHours,expression:"form_data.compressor.airCompressorOperatingHours",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.compressor.airCompressorOperatingHours},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.compressor,"airCompressorOperatingHours",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])]):_vm._e(),_vm._v(" "),_vm.form_data.itemType==="Chiller"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD or not\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerVFDorNot,expression:"form_data.chiller.chillerVFDorNot",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.chiller,"chillerVFDorNot",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_vm.form_data.chiller.chillerVFDorNot==="yes"?_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD setting\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerVFDSetting,expression:"form_data.chiller.chillerVFDSetting",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerVFDSetting},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerVFDSetting",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check set temp.\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerSetTemp,expression:"form_data.chiller.chillerSetTemp",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerSetTemp},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerSetTemp",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check condenser condition\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerCheckCondenserCondition,expression:"form_data.chiller.chillerCheckCondenserCondition",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.chiller,"chillerCheckCondenserCondition",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Take chiller HMI data\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerTakeChillerHMIData,expression:"form_data.chiller.chillerTakeChillerHMIData",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.chiller,"chillerTakeChillerHMIData",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.chiller.chillerOperatingHours,expression:"form_data.chiller.chillerOperatingHours",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.chiller.chillerOperatingHours},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.chiller,"chillerOperatingHours",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])]):_vm._e(),_vm._v(" "),_vm.form_data.itemType==="Motors"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD or not\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorVFDorNot,expression:"form_data.motor.motorVFDorNot",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.motor,"motorVFDorNot",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_vm.form_data.motor.motorVFDorNot==="yes"?_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD setting\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorVFDSetting,expression:"form_data.motor.motorVFDSetting",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorVFDSetting},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorVFDSetting",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check per phase current\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorCheckPerPhaseCurrent,expression:"form_data.motor.motorCheckPerPhaseCurrent",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.motor,"motorCheckPerPhaseCurrent",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check Phasor\n")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorCheckPhasor,expression:"form_data.motor.motorCheckPhasor",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.motor,"motorCheckPhasor",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Nos. of rewiding of motor\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorNosOfRewidingOfMotor,expression:"form_data.motor.motorNosOfRewidingOfMotor",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorNosOfRewidingOfMotor},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorNosOfRewidingOfMotor",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours\n")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.motor.motorOperatingHours,expression:"form_data.motor.motorOperatingHours",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.motor.motorOperatingHours},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.motor,"motorOperatingHours",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])]):_vm._e(),_vm._v(" "),_vm.form_data.itemType==="Boiler"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD on ID Fan\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerVFDOnIdFan,expression:"form_data.boiler.boilerVFDOnIdFan",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.boiler,"boilerVFDOnIdFan",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD on FD Fan\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerVFDOnFdFan,expression:"form_data.boiler.boilerVFDOnFdFan",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerVFDOnFdFan},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerVFDOnFdFan",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_vm.form_data.motor.motorVFDorNot==="yes"?_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Maximum temp. can sustain\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerMaximumTempCanSustain,expression:"form_data.boiler.boilerMaximumTempCanSustain",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerMaximumTempCanSustain},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerMaximumTempCanSustain",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Alternate fuel possibility\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerAlternateFuelPossibility,expression:"form_data.boiler.boilerAlternateFuelPossibility",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.boiler,"boilerAlternateFuelPossibility",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Blow down control\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerBlowDownControl,expression:"form_data.boiler.boilerBlowDownControl",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerBlowDownControl},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerBlowDownControl",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Collect Feed water test report\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerCollectFeedWaterTestReport,expression:"form_data.boiler.boilerCollectFeedWaterTestReport",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.boiler,"boilerCollectFeedWaterTestReport",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Blow down water TDS value\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerBlowDownWaterTDSvalue,expression:"form_data.boiler.boilerBlowDownWaterTDSvalue",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerBlowDownWaterTDSvalue},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerBlowDownWaterTDSvalue",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Waste heat recovery\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerWasteHeatRecovery,expression:"form_data.boiler.boilerWasteHeatRecovery",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.boiler,"boilerWasteHeatRecovery",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Burner air max. temp. capacity\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerBurnerAirMaxTempCapacity,expression:"form_data.boiler.boilerBurnerAirMaxTempCapacity",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerBurnerAirMaxTempCapacity},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerBurnerAirMaxTempCapacity",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Check steam traps\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerCheckSteamTraps,expression:"form_data.boiler.boilerCheckSteamTraps",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.boiler,"boilerCheckSteamTraps",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Flue gas monitoring\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerFlueGasMonitoring,expression:"form_data.boiler.boilerFlueGasMonitoring",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.boiler,"boilerFlueGasMonitoring",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Online monitoring & control\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerOnlineMonitoringControl,expression:"form_data.boiler.boilerOnlineMonitoringControl",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.boiler,"boilerOnlineMonitoringControl",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Water/steam Flow meter reading\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerWaterSteamFlowMeterReading,expression:"form_data.boiler.boilerWaterSteamFlowMeterReading",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerWaterSteamFlowMeterReading},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerWaterSteamFlowMeterReading",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Fuel Flow meter reading\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerFuelFlowMeterReading,expression:"form_data.boiler.boilerFuelFlowMeterReading",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerFuelFlowMeterReading},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerFuelFlowMeterReading",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.boiler.boilerOperatingHours,expression:"form_data.boiler.boilerOperatingHours",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.boiler.boilerOperatingHours},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.boiler,"boilerOperatingHours",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])]):_vm._e(),_vm._v(" "),_vm.form_data.itemType==="Cooling Tower"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD on fan or not\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingVFDOnFanOrNot,expression:"form_data.cooling.coolingVFDOnFanOrNot",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.cooling,"coolingVFDOnFanOrNot",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_vm.form_data.cooling.coolingVFDOnFanOrNot==="yes"?_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD setting\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingVFDSettingFan,expression:"form_data.cooling.coolingVFDSettingFan",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingVFDSettingFan},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingVFDSettingFan",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD on pump or not\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingVFDOnPumpOrNot,expression:"form_data.cooling.coolingVFDOnPumpOrNot",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.cooling,"coolingVFDOnPumpOrNot",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_vm.form_data.cooling.coolingVFDOnPumpOrNot==="yes"?_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD setting\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingVFDSettingPump,expression:"form_data.cooling.coolingVFDSettingPump",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingVFDSettingPump},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingVFDSettingPump",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Drift loss visible\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingDriftLossVisible,expression:"form_data.cooling.coolingDriftLossVisible",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.cooling,"coolingDriftLossVisible",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Nos. of rewiding of fan motor\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingNosOfRewidingOfFanMotor,expression:"form_data.cooling.coolingNosOfRewidingOfFanMotor",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingNosOfRewidingOfFanMotor},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingNosOfRewidingOfFanMotor",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.cooling.coolingOperatingHours,expression:"form_data.cooling.coolingOperatingHours",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.cooling.coolingOperatingHours},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.cooling,"coolingOperatingHours",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])]):_vm._e(),_vm._v(" "),_vm.form_data.itemType==="AHU"?_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD on fan or not\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuVFDOnFanOrNot,expression:"form_data.ahu.ahuVFDOnFanOrNot",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.ahu,"ahuVFDOnFanOrNot",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_vm.form_data.ahu.ahuVFDOnFanOrNot==="yes"?_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    VFD setting\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuVFDSettingFan,expression:"form_data.ahu.ahuVFDSettingFan",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuVFDSettingFan},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuVFDSettingFan",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Damper position\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuDamperPosition,expression:"form_data.ahu.ahuDamperPosition",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuDamperPosition},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuDamperPosition",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Connected with BMS\n                                                    ")]),_vm._v(" "),_c("select",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuConnectedWithBMS,expression:"form_data.ahu.ahuConnectedWithBMS",modifiers:{trim:true}}],staticClass:"form-select mb-text-only",attrs:{"aria-label":"Default select example"},on:{change:function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.$set(_vm.form_data.ahu,"ahuConnectedWithBMS",$event.target.multiple?$$selectedVal:$$selectedVal[0]);}}},[_c("option",{attrs:{selected:"",disabled:""}},[_vm._v("Open this select menu")]),_vm._v(" "),_c("option",{attrs:{value:"yes"}},[_vm._v("Yes")]),_vm._v(" "),_c("option",{attrs:{value:"no"}},[_vm._v("No")])])])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Modulating valve is 2 way or 3 way\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuModulatingValve,expression:"form_data.ahu.ahuModulatingValve",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuModulatingValve},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuModulatingValve",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Set Temp.\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuSetTemp,expression:"form_data.ahu.ahuSetTemp",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuSetTemp},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuSetTemp",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])]),_vm._v(" "),_c("div",{staticClass:"col-md-6"},[_c("div",{staticClass:"mb-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Operating Hours\n                                                    ")]),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model.trim",value:_vm.form_data.ahu.ahuOperatingHours,expression:"form_data.ahu.ahuOperatingHours",modifiers:{trim:true}}],staticClass:"form-control",attrs:{type:"number",placeholder:""},domProps:{value:_vm.form_data.ahu.ahuOperatingHours},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data.ahu,"ahuOperatingHours",$event.target.value.trim());},blur:function blur($event){return _vm.$forceUpdate();}}})])])]):_vm._e()])])])])]),_vm._v(" "),_c("tab-content",{attrs:{title:"Observation & Image",icon:"ti-image"}},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"card shipping_address_card"},[_c("div",{staticClass:"card-body"},[_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:_vm.openPopUpModal}},[_vm._v("\n                                                Take Image\n                                            ")]),_vm._v(" "),_vm.form_data.images.length>0?_c("div",{staticClass:"mt-3"},[_c("p",{staticClass:"form-label active"},[_vm._v("\n                                                    Images\n                                                ")]),_vm._v(" "),_c("div",{staticClass:"row",attrs:{id:"images"}},_vm._l(_vm.form_data.images,function(image,index){return _c("div",{key:index,staticClass:"col-md-4"},[_c("div",{staticClass:"position-relative"},[_c("button",{staticClass:"ïc--close",on:{click:function click($event){$event.preventDefault();return _vm.cancelImage(index);}}},[_c("i",{staticClass:"ti-close"})]),_vm._v(" "),_c("img",{staticClass:"img-fluid",staticStyle:{height:"215px",width:"290px"},attrs:{src:image,alt:"Captured images"}})])]);}),0)]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{staticClass:"col-md-12"},[_c("div",{staticClass:"mb-3 mt-3"},[_c("label",{staticClass:"form-label w-100 text-capitalize"},[_vm._v("\n                                                    Observations\n")]),_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.form_data.observations,expression:"form_data.observations"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"5",placeholder:"Write the observations here..."},domProps:{value:_vm.form_data.observations},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.form_data,"observations",$event.target.value);}}})])])])])])])])])],1)],1),_vm._v(" "),_c("div",{staticClass:"modal fade",staticStyle:{display:"none"},attrs:{id:"openPopUpModal",tabindex:"-1","aria-labelledby":"formModal","aria-hidden":"true","data-keyboard":"false","data-backdrop":"static"}},[_c("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[_c("div",{staticClass:"modal-content"},[_c("div",{staticClass:"modal-header"},[_c("h5",{staticClass:"modal-title",attrs:{id:"formPopUpModal"}},[_vm._v("Open Camera or Upload Image")]),_vm._v(" "),_c("button",{staticClass:"close",attrs:{type:"button"},on:{click:_vm.closePopUpModal}},[_c("span",{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c("div",{staticClass:"modal-body"},[_c("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:_vm.openCamera}},[_vm._v("\n                            Open Camera\n                        ")]),_vm._v(" "),_c("h4",{staticClass:"text-warning mt-3"},[_vm._v("OR")]),_vm._v(" "),_c("h5",{staticClass:"card-inside-title"},[_vm._v("Upload Image")]),_vm._v(" "),_c("div",{staticClass:"file-field input-field"},[_c("div",{staticClass:"btn btn-secondary"},[_c("span",[_vm._v("Browse")]),_vm._v(" "),_c("input",{attrs:{type:"file",multiple:""},on:{change:function change($event){return _vm.uploadImage($event);}}})])])]),_vm._v(" "),_c("div",{staticClass:"modal-footer"},[_c("button",{staticClass:"btn btn-danger waves-effect",attrs:{type:"button"},on:{click:_vm.closePopUpModal}},[_vm._v("\n                            Cancel\n                        ")])])])])]),_vm._v(" "),_c("div",{staticClass:"modal fade",staticStyle:{display:"none"},attrs:{id:"openCameraModal",tabindex:"-1","aria-labelledby":"formModal","aria-hidden":"true","data-keyboard":"false","data-backdrop":"static"}},[_c("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[_c("div",{staticClass:"modal-content"},[_c("div",{staticClass:"modal-header"},[_c("h5",{staticClass:"modal-title",attrs:{id:"formModal"}},[_vm._v("Take A Snap")]),_vm._v(" "),_c("button",{staticClass:"close",attrs:{type:"button"},on:{click:_vm.closeCameraModal}},[_c("span",{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c("div",{staticClass:"modal-body"},[_c("video",{ref:"video",staticStyle:{width:"100%","max-height":"400px"},attrs:{autoplay:"",playsinline:""}}),_vm._v(" "),_c("canvas",{ref:"canvas",staticStyle:{display:"none"}})]),_vm._v(" "),_c("div",{staticClass:"modal-footer"},[_c("button",{staticClass:"btn btn-info waves-effect",attrs:{type:"button"},on:{click:_vm.snapshot}},[_vm._v("\n                            Capture\n                        ")]),_vm._v(" "),_c("button",{staticClass:"btn btn-danger waves-effect",attrs:{type:"button"},on:{click:_vm.closeCameraModal}},[_vm._v("\n                            Cancel\n                        ")])])])])])]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/* Chrome, Safari, Edge, Opera */\ninput[data-v-25fc4bb5]::-webkit-outer-spin-button,\ninput[data-v-25fc4bb5]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/* Firefox */\ninput[type=number][data-v-25fc4bb5] {\n    -moz-appearance: textfield;\n}\n.shipping_address_card[data-v-25fc4bb5]{\n    background: #eeeeee;\n}\n#images img[data-v-25fc4bb5] {\n    border-radius: 5px;\n}\n.ïc--close[data-v-25fc4bb5] {\n    background-color: rgb(47, 47, 47, 0.77);\n    width: 40px;\n    height: 40px;\n    border: none;\n    border-radius: 50%;\n    line-height: 36px;\n    text-align: center;\n    font-size: 15px;\n    color: red;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateInformation_vue_vue_type_style_index_0_id_25fc4bb5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CreateInformation.vue?vue&type=style&index=0&id=25fc4bb5&scoped=true&lang=css&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/vue-web-cam/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/vue-web-cam/dist/index.js ***!
  \************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var n=function(e,t,i,n,r,o,a,s){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=i,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(d.functional){d._injectStyles=c;var u=d.render;d.render=function(e,t){return c.call(t),u(e,t)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,c):[c]}return{exports:e,options:d}}({name:"VueWebCam",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:500},autoplay:{type:Boolean,default:!0},screenshotFormat:{type:String,default:"image/jpeg"},selectFirstDevice:{type:Boolean,default:!1},deviceId:{type:String,default:null},playsinline:{type:Boolean,default:!0},resolution:{type:Object,default:null,validator:function(e){return e.height&&e.width}}},data:function(){return{source:null,canvas:null,camerasListEmitted:!1,cameras:[]}},watch:{deviceId:function(e){this.changeCamera(e)}},mounted:function(){this.setupMedia()},beforeDestroy:function(){this.stop()},methods:{legacyGetUserMediaSupport:function(){return function(e){var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;return t?new Promise(function(i,n){t.call(navigator,e,i,n)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}},setupMedia:function(){void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=this.legacyGetUserMediaSupport()),this.testMediaAccess()},loadCameras:function(){var e=this;navigator.mediaDevices.enumerateDevices().then(function(t){for(var i=0;i!==t.length;++i){var n=t[i];"videoinput"===n.kind&&e.cameras.push(n)}}).then(function(){e.camerasListEmitted||(e.selectFirstDevice&&e.cameras.length>0&&(e.deviceId=e.cameras[0].deviceId),e.$emit("cameras",e.cameras),e.camerasListEmitted=!0)}).catch(function(t){return e.$emit("notsupported",t)})},changeCamera:function(e){this.stop(),this.$emit("camera-change",e),this.loadCamera(e)},loadSrcStream:function(e){var t=this;"srcObject"in this.$refs.video?this.$refs.video.srcObject=e:this.source=window.HTMLMediaElement.srcObject(e),this.$refs.video.onloadedmetadata=function(){t.$emit("video-live",e)},this.$emit("started",e)},stopStreamedVideo:function(e){var t=this,i=e.srcObject;i.getTracks().forEach(function(e){e.stop(),t.$emit("stopped",i),t.$refs.video.srcObject=null,t.source=null})},stop:function(){null!==this.$refs.video&&this.$refs.video.srcObject&&this.stopStreamedVideo(this.$refs.video)},start:function(){this.deviceId&&this.loadCamera(this.deviceId)},pause:function(){null!==this.$refs.video&&this.$refs.video.srcObject&&this.$refs.video.pause()},resume:function(){null!==this.$refs.video&&this.$refs.video.srcObject&&this.$refs.video.play()},testMediaAccess:function(){var e=this,t={video:!0};this.resolution&&(t.video={},t.video.height=this.resolution.height,t.video.width=this.resolution.width),navigator.mediaDevices.getUserMedia(t).then(function(t){t.getTracks().forEach(function(e){e.stop()}),e.loadCameras()}).catch(function(t){return e.$emit("error",t)})},loadCamera:function(e){var t=this,i={video:{deviceId:{exact:e}}};this.resolution&&(i.video.height=this.resolution.height,i.video.width=this.resolution.width),navigator.mediaDevices.getUserMedia(i).then(function(e){return t.loadSrcStream(e)}).catch(function(e){return t.$emit("error",e)})},capture:function(){return this.getCanvas().toDataURL(this.screenshotFormat)},getCanvas:function(){var e=this.$refs.video;if(!this.ctx){var t=document.createElement("canvas");t.height=e.videoHeight,t.width=e.videoWidth,this.canvas=t,this.ctx=t.getContext("2d")}var i=this.ctx,n=this.canvas;return i.drawImage(e,0,0,n.width,n.height),n}}},function(){var e=this.$createElement;return(this._self._c||e)("video",{ref:"video",attrs:{width:this.width,height:this.height,src:this.source,autoplay:this.autoplay,playsinline:this.playsinline}})},[],!1,null,null,null).exports;function r(e){e.component("vue-web-cam",n)}i.d(t,"version",function(){return o}),i.d(t,"WebCam",function(){return n}),"undefined"!=typeof window&&window.Vue&&window.Vue.use(r);t.default=r;var o="__VERSION__"}])});

/***/ }),

/***/ "./node_modules/@vuelidate/core/dist/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/@vuelidate/core/dist/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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