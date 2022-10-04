"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _Symbol$iterator;

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg; ;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg; else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() { } function GeneratorFunction() { } function GeneratorFunctionPrototype() { } var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _stringBuilder = /*#__PURE__*/new WeakMap();

var _size = /*#__PURE__*/new WeakMap();

var _opacity = /*#__PURE__*/new WeakMap();

_Symbol$iterator = Symbol.iterator;

var quickString = /*#__PURE__*/function () {
    //default capacity grow factor is 1.5
    function quickString() {
        _classCallCheck(this, quickString);

        _classPrivateFieldInitSpec(this, _stringBuilder, {
            writable: true,
            value: void 0
        });

        _classPrivateFieldInitSpec(this, _size, {
            writable: true,
            value: void 0
        });

        _classPrivateFieldInitSpec(this, _opacity, {
            writable: true,
            value: void 0
        });

        _classPrivateFieldSet(this, _stringBuilder, quickString.initialStringBuilder);

        _classPrivateFieldSet(this, _size, 0);

        if (arguments.length === 0) {
            this.reserve(quickString.capacityGrow(0));
        } else if (arguments.length === 1 && typeof arguments[0] === 'number') {
            //given the length of the string
            this.reserve(arguments[0]);
        } else if (arguments.length === 2 && typeof arguments[0] === 'number' && arguments[1] === 'string') {
            //given the length of the string, and filled it with arguments[1]
            this.reserve(arguments[0]);
            this.fill(0, arguments[0], arguments[1]);

            _classPrivateFieldSet(this, _size, arguments[0]);
        } else if (arguments.length === 1 && typeof arguments[0] === 'string') {
            //uses given string to make string builder
            this.reserve(quickString.capacityGrow(0, arguments[0].length));
            this.copy(arguments[0]);

            _classPrivateFieldSet(this, _size, arguments[0].length);
        } else if (arguments.length === 1 && arguments[0] instanceof Array) {
            //concat array and make string builder
            var string = arguments[0].join('');
            this.reserve(quickString.capacityGrow(0, string.length));
            this.copy(string);

            _classPrivateFieldSet(this, _size, string.length);
        } else if (arguments.length === 1 && arguments[0] instanceof quickString) {
            var _string = arguments[0];
            this.reserve(_string.opacity());
            this.copy(_string.getUint8Array());

            _classPrivateFieldSet(this, _size, _string.size());
        } else if (arguments.length === 1 && arguments[0] instanceof Uint8Array) {
            this.reserve(arguments[0].length);
            this.copy(arguments[0]);

            _classPrivateFieldSet(this, _size, arguments[0].length);
        } else throw new TypeError('Cannot find overload of the constructor.');
    }

    _createClass(quickString, [{
        key: "getUint8Array",
        value: function getUint8Array() {
            return _classPrivateFieldGet(this, _stringBuilder);
        }
    }, {
        key: "reserve",
        value: function reserve(opacity) {
            if (!Number.isInteger(opacity) || opacity < 0) throw new TypeError('Opacity must be a non-negative integer.');

            _classPrivateFieldSet(this, _opacity, opacity);

            _classPrivateFieldSet(this, _size, Math.min(_classPrivateFieldGet(this, _size), _classPrivateFieldGet(this, _opacity))); //reset size and opacity
            //copy data from the old buffer to the new


            var old_buffer = _classPrivateFieldGet(this, _stringBuilder);

            _classPrivateFieldSet(this, _stringBuilder, new Uint8Array(opacity));

            for (var i = 0; i < _classPrivateFieldGet(this, _size); ++i) {
                _classPrivateFieldGet(this, _stringBuilder)[i] = old_buffer[i];
            }

            ;
        }
    }, {
        key: "resize",
        value: function resize(size) {
            if (!Number.isInteger(size) || size < 0) throw new TypeError('Size must be a non-negative integer.');
            if (size >= _classPrivateFieldGet(this, _opacity)) this.reserve(size);

            _classPrivateFieldSet(this, _size, size);
        }
    }, {
        key: "copy",
        value: function copy() {
            if (arguments.length === 1 && typeof arguments[0] === 'string') {
                return this.copy(quickString.nativeStringToUint8Array(arguments[0]));
            } else if (arguments.length === 1 && arguments[0] instanceof Uint8Array) {
                if (arguments[0].length >= _classPrivateFieldGet(this, _opacity)) this.reserve(quickString.capacityGrow(0, arguments[0].length));
                var buffer = arguments[0];

                for (var i = 0; i < buffer.length; i++) {
                    _classPrivateFieldGet(this, _stringBuilder)[i] = buffer[i];
                }

                ;

                _classPrivateFieldSet(this, _size, buffer.length);
            } else throw new TypeError('Cannot find overload of this function: [dynamic] quickString.copy');
        }
    }, {
        key: "fill",
        value: function fill(start_position, end_position, _char) {
            if (!Number.isInteger(start_position) || start_position < 0) throw new TypeError('Start position must be a non-negative integer.');
            if (!Number.isInteger(end_position) || end_position < 0) throw new TypeError('End position must be a non-negative integer.');
            if (typeof _char !== 'string' || _char.length > 0) throw new TypeError('Char must be a character.');
            if (end_position >= _classPrivateFieldGet(this, _opacity)) this.reserve(quickString.capacityGrow(_classPrivateFieldGet(this, _opacity), end_position));

            var char_ascii = _char.charCodeAt();

            for (var i = start_position; i <= end_position; ++i) {
                _classPrivateFieldGet(this, _stringBuilder)[i] = char_ascii;
            }

            ;

            _classPrivateFieldSet(this, _size, Math.max(_classPrivateFieldGet(this, _size), end_position));
        }
    }, {
        key: "size",
        value: function size() {
            return _classPrivateFieldGet(this, _size);
        }
    }, {
        key: "opacity",
        value: function opacity() {
            return _classPrivateFieldGet(this, _opacity);
        }
    }, {
        key: "append",
        value: function append() {
            for (var i = 0; i < arguments.length; ++i) {
                this._append_string(arguments[i]);
            }
        }
    }, {
        key: "_append_string",
        value: function _append_string(string) {
            if (typeof string === 'string') return this._append_string(quickString.nativeStringToUint8Array(string)); else if (string instanceof quickString) return this._append_string(string.getUint8Array()); else if (string instanceof Uint8Array) {
                if (_classPrivateFieldGet(this, _size) + string.length >= _classPrivateFieldGet(this, _opacity)) //need reserve
                    this.reserve(quickString.capacityGrow(_classPrivateFieldGet(this, _opacity), _classPrivateFieldGet(this, _size) + string.length));

                for (var i = 0; i < string.length; ++i) {
                    _classPrivateFieldGet(this, _stringBuilder)[_classPrivateFieldGet(this, _size) + i] = string[i];
                }

                _classPrivateFieldSet(this, _size, _classPrivateFieldGet(this, _size) + string.length);
            } else throw new TypeError('Cannot find overload of this function: [dynamic] quickString._append_string');
        }
    }, {
        key: "at",
        value: function at(pos) {
            if (!Number.isInteger(pos)) throw new TypeError('pos must be a integer');
            if (pos < 0) //visit from the end of the string
                pos = _classPrivateFieldGet(this, _size) + pos;
            if (pos >= _classPrivateFieldGet(this, _opacity) || pos < 0) throw new AccessError('Segmentation fault');
            return String.fromCharCode(_classPrivateFieldGet(this, _stringBuilder)[pos]);
        }
    }, {
        key: "concat",
        value: function concat() {
            return this.append(arguments);
        }
    }, {
        key: "endsWith",
        value: function endsWith(string) {
            if (typeof string !== 'string') throw new TypeError('String must be a string');
            if (string.length > _classPrivateFieldGet(this, _size)) return false; //over limit

            var startPosition = _classPrivateFieldGet(this, _size) - string.length;

            for (var i = startPosition; i < _classPrivateFieldGet(this, _size); ++i) {
                if (string[i - startPosition].charCodeAt() !== _classPrivateFieldGet(this, _stringBuilder)[i]) return false;
            }

            return true;
        }
    }, {
        key: "indexOf",
        value: function indexOf(substring) {
            var start_position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var end_position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
            //I'm too lazy to realize kmp
            if (end_position === -1) end_position = _classPrivateFieldGet(this, _size);
            if (typeof substring !== 'string') throw new TypeError('substring must be a string');
            if (!Number.isInteger(start_position) || start_position < 0) throw new TypeError('start_position must be a non-negative integer.');
            if (!Number.isInteger(end_position) || end_position < 0) throw new TypeError('end_position must be a non-negative integer.');
            var i = start_position,
                j = 0;

            for (; i < end_position; ++i) {
                var isMatch = true;

                for (j = 0; j < substring.length; ++j) {
                    if (_classPrivateFieldGet(this, _stringBuilder)[i + j] !== substring[j]) {
                        isMatch = false;
                        break;
                    }
                }

                if (isMatch) return i;
            }

            ;
            return -1;
        }
    }, {
        key: "lastIndexOf",
        value: function lastIndexOf(substring) {
            var start_position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
            var end_position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            //I'm too lazy to realize kmp
            if (start_position === -1) start_position = _classPrivateFieldGet(this, _size) - substring.length;
            if (typeof substring !== 'string') throw new TypeError('substring must be a string');
            if (!Number.isInteger(start_position) || start_position < 0) throw new TypeError('start_position must be a non-negative integer.');
            if (!Number.isInteger(end_position) || end_position < 0) throw new TypeError('end_position must be a non-negative integer.');
            var i = start_position,
                j = 0;

            for (; i >= end_position; --i) {
                var isMatch = true;

                for (j = 0; j < substring.length; ++j) {
                    if (_classPrivateFieldGet(this, _stringBuilder)[i + j] !== substring[j]) {
                        isMatch = false;
                        break;
                    }
                }

                if (isMatch) return i;
            }

            ;
            return -1;
        }
    }, {
        key: "substring",
        value: function substring(start_position, end_position) {
            if (start_position < 0) start_position = start_position + _classPrivateFieldGet(this, _size);
            if (end_position < 0) end_position = end_position + _classPrivateFieldGet(this, _size); //support substring from the ending

            if (!Number.isInteger(start_position) || start_position < 0) throw new TypeError('start_position must be a non-negative integer.');
            if (!Number.isInteger(end_position) || end_position < 0) throw new TypeError('end_position must be a non-negative integer.');
            if (start_position >= _classPrivateFieldGet(this, _opacity) || end_position >= _classPrivateFieldGet(this, _opacity)) throw new AccessError('Segmentation fault.');
            if (end_position < start_position) throw new Error('end_position must not be less than start_position.');
            var buffer = new Uint8Array(end_position - start_position + 1);
            if (buffer.length === 0) throw new MemoryError('Cannot allocate memory for buffer.', end_position - start_position + 1);

            for (var i = start_position; i <= end_position; ++i) {
                buffer[i - start_position] = _classPrivateFieldGet(this, _stringBuilder)[i];
            }

            return new quickString(buffer);
        }
    }, {
        key: "insert",
        value: function insert(insert_position, insert_string) {
            if (insert_position < 0) insert_position += _classPrivateFieldGet(this, _size);
            if (!Number.isInteger(insert_position)) throw new TypeError('insert position must be an integer');
            if (insert_position < 0) throw new TypeError('insert position must be a non-negative integer.');
            if (insert_position >= _classPrivateFieldGet(this, _opacity)) throw new AccessError('Segmentation fault');
            if (insert_position >= _classPrivateFieldGet(this, _size)) console.warn('Warning: Insert position is out of size');
            if (typeof insert_string === 'string') return this.insert(insert_position, quickString.nativeStringToUint8Array(insert_string)); else if (insert_string instanceof Uint8Array) {
                if (_classPrivateFieldGet(this, _size) + insert_string.length >= _classPrivateFieldGet(this, _opacity)) this.reserve(quickString.capacityGrow(_classPrivateFieldGet(this, _opacity), _classPrivateFieldGet(this, _size) + insert_string.length));

                for (var i = _classPrivateFieldGet(this, _size) + insert_string.length; i >= insert_position + insert_string.length; i--) {
                    _classPrivateFieldGet(this, _stringBuilder)[i] = _classPrivateFieldGet(this, _stringBuilder)[i - insert_string.length];
                }

                ; //prepare space for the insert string

                for (var _i = 0; _i < insert_string.length; _i++) {
                    _classPrivateFieldGet(this, _stringBuilder)[_i + insert_position] = insert_string[_i];
                }

                ;

                _classPrivateFieldSet(this, _size, _classPrivateFieldGet(this, _size) + insert_string.length);
            } else throw new TypeError('Cannot find overload of this function: [dynamic] quickString.insert');
        }
    }, {
        key: "remove",
        value: function remove(remove_position, remove_length) {
            if (remove_position < 0) remove_position += _classPrivateFieldGet(this, _size);
            if (!Number.isInteger(remove_position) || remove_position < 0) throw new TypeError('remove position must be a non-negative integer');

            for (var i = remove_position; i < remove_position + remove_length; i++) {
                if (i >= _classPrivateFieldGet(this, _size)) {
                    _classPrivateFieldSet(this, _size, Math.min(_classPrivateFieldGet(this, _opacity), i));

                    return;
                }

                ;
                _classPrivateFieldGet(this, _stringBuilder)[i] = _classPrivateFieldGet(this, _stringBuilder)[i + remove_length];
            }

            ;

            _classPrivateFieldSet(this, _size, _classPrivateFieldGet(this, _size) - remove_length);
        }
    }, {
        key: "set",
        value: function set(pos, value) {
            if (pos < 0) pos = pos + _classPrivateFieldGet(this, _size);
            if (!Number.isInteger(pos) || pos < 0) throw new TypeError('pos must be a non-negative integer');
            if (pos >= _classPrivateFieldGet(this, _opacity)) throw new AccessError('Segmentation fault');
            if (pos >= _classPrivateFieldGet(this, _size)) console.warn('Warning: set position is out of size');
            if (typeof value === 'string') _classPrivateFieldGet(this, _stringBuilder)[pos] = String.fromCharCode(value); else if (typeof value === 'number') _classPrivateFieldGet(this, _stringBuilder)[pos] = value; else throw new TypeError('Cannot find overload of this function: [dynamic] quickString.set');
        }
    }, {
        key: "toString",
        value: function toString() {
            return String.fromCharCode.apply(String, _toConsumableArray(_classPrivateFieldGet(this, _stringBuilder).slice(0, _classPrivateFieldGet(this, _size))));
        }
    }, {
        key: "releaseFree",
        value: function releaseFree() {
            var i = _classPrivateFieldGet(this, _opacity) - 1;
            if (i < 0) return 0;

            for (; _classPrivateFieldGet(this, _stringBuilder)[i] === 0; --i) {
                ;
            }

            this.reserve(i + 1);
            return i + 1;
        }
    }, {
        key: "valueOf",
        value: function valueOf() {
            return this.toString();
        }
    }, {
        key: _Symbol$iterator,
        value: /*#__PURE__*/_regeneratorRuntime().mark(function value() {
            var i;
            return _regeneratorRuntime().wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            i = 0;

                        case 1:
                            if (!(i < _classPrivateFieldGet(this, _stringBuilder).length)) {
                                _context.next = 7;
                                break;
                            }

                            _context.next = 4;
                            return String.fromCharCode(_classPrivateFieldGet(this, _stringBuilder)[i]);

                        case 4:
                            ++i;
                            _context.next = 1;
                            break;

                        case 7:
                        case "end":
                            return _context.stop();
                    }
                }
            }, value, this);
        })
    }], [{
        key: "capacityGrow",
        value: function capacityGrow(currentOpacity) {
            var targetOpacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
            if (!Number.isInteger(currentOpacity) || currentOpacity < 0) throw new TypeError('currentOpacity must be a non-negative integer.');
            if (!Number.isInteger(targetOpacity) || targetOpacity < 0) throw new TypeError('targetOpacity must a non-negative integer.'); //calculate the capacity by current size

            var opacity = currentOpacity;

            while (opacity < targetOpacity) {
                if (opacity < 32) opacity += 16; else return opacity * quickString.capacityGrowFactor;
            }

            ;
            return ~~(opacity + 1);
        }
    }, {
        key: "nativeStringToUint8Array",
        value: function nativeStringToUint8Array(string) {
            if (typeof string !== 'string') throw new TypeError('String must be a string');
            var buffer = new Uint8Array(string.length);
            if (buffer.length === 0 && string.length !== 0) throw new MemoryError('Cannot allocate memory for string.', string.length);

            for (var i = 0; i < string.length; ++i) {
                buffer[i] = string[i].charCodeAt();
            }

            ;
            return buffer;
        }
    }]);

    return quickString;
}();

_defineProperty(quickString, "initialStringBuilder", new Uint8Array());

_defineProperty(quickString, "capacityGrowFactor", 1.5);

;

var MemoryError = /*#__PURE__*/function (_Error) {
    _inherits(MemoryError, _Error);

    var _super = _createSuper(MemoryError);

    function MemoryError(message) {
        var _this;

        var memory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x3f3f3f3f;

        _classCallCheck(this, MemoryError);

        _this = _super.apply(this, arguments);

        _defineProperty(_assertThisInitialized(_this), "memory", void 0);

        if (typeof message !== 'string') throw new TypeError('Error message must be a string');
        if (!Number.isInteger(memory) || memory < 0) throw new TypeError('Memory must be a non-negative integer');
        _this.message = message + '\nTrying to allocate memory ' + MemoryError.formatSize(memory);
        _this.memory = memory;
        return _this;
    }

    _createClass(MemoryError, null, [{
        key: "formatSize",
        value: function formatSize(size) {
            if (!Number.isInteger(size)) throw new TypeError('Size must be a number');
            if (size < 1024) return size + 'B'; else if (size < 1024 * 1024) return (size / 1024).toFixed(2) + 'KB'; else if (size < 1024 * 1024 * 1024) return (size / 1024 / 1024).toFixed(2) + 'MB'; else if (size < 1024 * 1024 * 1024 * 1024) return (size / 1024 / 1024 / 1024).toFixed(2) + 'GB';
            return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + 'TB';
        }
    }]);

    return MemoryError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

;

var AccessError = /*#__PURE__*/function (_Error2) {
    _inherits(AccessError, _Error2);

    var _super2 = _createSuper(AccessError);

    function AccessError(message) {
        _classCallCheck(this, AccessError);

        return _super2.apply(this, arguments);
    }

    return _createClass(AccessError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

;
module.exports = {
    quickString: quickString,
    MemoryError: MemoryError,
    AccessError: AccessError
};