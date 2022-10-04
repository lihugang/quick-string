"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _createSuper(r){var i=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(r);return _possibleConstructorReturn(this,i?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _wrapNativeSuper(e){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(e){if(null===e||!_isNativeFunction(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(t,e)})(e)}function _construct(e,t,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(e,t,r){var i=[null];i.push.apply(i,t);t=new(Function.bind.apply(e,i));return r&&_setPrototypeOf(t,r.prototype),t}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},e=Object.prototype,l=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},i=t.iterator||"@@iterator",r=t.asyncIterator||"@@asyncIterator",n=t.toStringTag||"@@toStringTag";function o(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(e){o=function(e,t,r){return e[t]=r}}function s(e,t,r,i){var n,o,a,s,t=t&&t.prototype instanceof f?t:f,t=Object.create(t.prototype),i=new w(i||[]);return t._invoke=(n=e,o=r,a=i,s="suspendedStart",function(e,t){if("executing"===s)throw new Error("Generator is already running");if("completed"===s){if("throw"===e)throw t;return P()}for(a.method=e,a.arg=t;;){var r=a.delegate;if(r){r=function e(t,r){var i=t.iterator[r.method];if(void 0===i){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,e(t,r),"throw"===r.method))return u;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}i=c(i,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,u;i=i.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,u):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,u)}(r,a);if(r){if(r===u)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===s)throw s="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s="executing";r=c(n,o,a);if("normal"===r.type){if(s=a.done?"completed":"suspendedYield",r.arg===u)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(s="completed",a.method="throw",a.arg=r.arg)}}),t}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}a.wrap=s;var u={};function f(){}function h(){}function p(){}var t={},y=(o(t,i,function(){return this}),Object.getPrototypeOf),y=y&&y(y(b([]))),v=(y&&y!==e&&l.call(y,i)&&(t=y),p.prototype=f.prototype=Object.create(t));function _(e){["next","throw","return"].forEach(function(t){o(e,t,function(e){return this._invoke(t,e)})})}function d(a,s){var t;this._invoke=function(r,i){function e(){return new s(function(e,t){!function t(e,r,i,n){var o,e=c(a[e],a,r);if("throw"!==e.type)return(r=(o=e.arg).value)&&"object"==_typeof(r)&&l.call(r,"__await")?s.resolve(r.__await).then(function(e){t("next",e,i,n)},function(e){t("throw",e,i,n)}):s.resolve(r).then(function(e){o.value=e,i(o)},function(e){return t("throw",e,i,n)});n(e.arg)}(r,i,e,t)})}return t=t?t.then(e,e):e()}}function g(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function m(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(g,this),this.reset(!0)}function b(t){if(t){var r,e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return r=-1,(e=function e(){for(;++r<t.length;)if(l.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e}).next=e}return{next:P}}function P(){return{value:void 0,done:!0}}return o(v,"constructor",h.prototype=p),o(p,"constructor",h),h.displayName=o(p,n,"GeneratorFunction"),a.isGeneratorFunction=function(e){e="function"==typeof e&&e.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,o(e,n,"GeneratorFunction")),e.prototype=Object.create(v),e},a.awrap=function(e){return{__await:e}},_(d.prototype),o(d.prototype,r,function(){return this}),a.AsyncIterator=d,a.async=function(e,t,r,i,n){void 0===n&&(n=Promise);var o=new d(s(e,t,r,i),n);return a.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},_(v),o(v,n,"Generator"),o(v,i,function(){return this}),o(v,"toString",function(){return"[object Generator]"}),a.keys=function(r){var e,i=[];for(e in r)i.push(e);return i.reverse(),function e(){for(;i.length;){var t=i.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=b,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(m),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var i=this;function e(e,t){return o.type="throw",o.arg=r,i.next=e,t&&(i.method="next",i.arg=void 0),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t],o=n.completion;if("root"===n.tryLoc)return e("end");if(n.tryLoc<=this.prev){var a=l.call(n,"catchLoc"),s=l.call(n,"finallyLoc");if(a&&s){if(this.prev<n.catchLoc)return e(n.catchLoc,!0);if(this.prev<n.finallyLoc)return e(n.finallyLoc)}else if(a){if(this.prev<n.catchLoc)return e(n.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return e(n.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&l.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}var o=(n=n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc?null:n)?n.completion:{};return o.type=e,o.arg=t,n?(this.method="next",this.next=n.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),m(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r,i,n=this.tryEntries[t];if(n.tryLoc===e)return"throw"===(r=n.completion).type&&(i=r.arg,m(n)),i}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:b(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},a}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var r;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classPrivateFieldInitSpec(e,t,r){_checkPrivateRedeclaration(e,t),t.set(e,r)}function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classPrivateFieldGet(e,t){return _classApplyDescriptorGet(e,_classExtractFieldDescriptor(e,t,"get"))}function _classApplyDescriptorGet(e,t){return t.get?t.get.call(e):t.value}function _classPrivateFieldSet(e,t,r){return _classApplyDescriptorSet(e,_classExtractFieldDescriptor(e,t,"set"),r),r}function _classExtractFieldDescriptor(e,t,r){if(t.has(e))return t.get(e);throw new TypeError("attempted to "+r+" private field on non-instance")}function _classApplyDescriptorSet(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}var _stringBuilder=new WeakMap,_size=new WeakMap,_opacity=new WeakMap,_Symbol$iterator=Symbol.iterator,quickString=function(){function o(){if(_classCallCheck(this,o),_classPrivateFieldInitSpec(this,_stringBuilder,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_size,{writable:!0,value:void 0}),_classPrivateFieldInitSpec(this,_opacity,{writable:!0,value:void 0}),_classPrivateFieldSet(this,_stringBuilder,o.initialStringBuilder),_classPrivateFieldSet(this,_size,0),0===arguments.length)this.reserve(o.capacityGrow(0));else if(1===arguments.length&&"number"==typeof arguments[0])this.reserve(arguments[0]);else if(2===arguments.length&&"number"==typeof arguments[0]&&"string"===arguments[1])this.reserve(arguments[0]),this.fill(0,arguments[0],arguments[1]),_classPrivateFieldSet(this,_size,arguments[0]);else if(1===arguments.length&&"string"==typeof arguments[0])this.reserve(o.capacityGrow(0,arguments[0].length)),this.copy(arguments[0]),_classPrivateFieldSet(this,_size,arguments[0].length);else if(1===arguments.length&&arguments[0]instanceof Array){var e=arguments[0].join("");this.reserve(o.capacityGrow(0,e.length)),this.copy(e),_classPrivateFieldSet(this,_size,e.length)}else if(1===arguments.length&&arguments[0]instanceof o){e=arguments[0];this.reserve(e.opacity()),this.copy(e.getUint8Array()),_classPrivateFieldSet(this,_size,e.size())}else{if(!(1===arguments.length&&arguments[0]instanceof Uint8Array))throw new TypeError("Cannot find overload of the constructor.");this.reserve(arguments[0].length),this.copy(arguments[0]),_classPrivateFieldSet(this,_size,arguments[0].length)}}return _createClass(o,[{key:"getUint8Array",value:function(){return _classPrivateFieldGet(this,_stringBuilder)}},{key:"reserve",value:function(e){if(!Number.isInteger(e)||e<0)throw new TypeError("Opacity must be a non-negative integer.");_classPrivateFieldSet(this,_opacity,e),_classPrivateFieldSet(this,_size,Math.min(_classPrivateFieldGet(this,_size),_classPrivateFieldGet(this,_opacity)));var t=_classPrivateFieldGet(this,_stringBuilder);_classPrivateFieldSet(this,_stringBuilder,new Uint8Array(e));for(var r=0;r<_classPrivateFieldGet(this,_size);++r)_classPrivateFieldGet(this,_stringBuilder)[r]=t[r]}},{key:"resize",value:function(e){if(!Number.isInteger(e)||e<0)throw new TypeError("Size must be a non-negative integer.");e>=_classPrivateFieldGet(this,_opacity)&&this.reserve(e),_classPrivateFieldSet(this,_size,e)}},{key:"copy",value:function(){if(1===arguments.length&&"string"==typeof arguments[0])return this.copy(o.nativeStringToUint8Array(arguments[0]));if(!(1===arguments.length&&arguments[0]instanceof Uint8Array))throw new TypeError("Cannot find overload of this function: [dynamic] quickString.copy");arguments[0].length>=_classPrivateFieldGet(this,_opacity)&&this.reserve(o.capacityGrow(0,arguments[0].length));for(var e=arguments[0],t=0;t<e.length;t++)_classPrivateFieldGet(this,_stringBuilder)[t]=e[t];_classPrivateFieldSet(this,_size,e.length)}},{key:"fill",value:function(e,t,r){if(!Number.isInteger(e)||e<0)throw new TypeError("Start position must be a non-negative integer.");if(!Number.isInteger(t)||t<0)throw new TypeError("End position must be a non-negative integer.");if("string"!=typeof r||0<r.length)throw new TypeError("Char must be a character.");t>=_classPrivateFieldGet(this,_opacity)&&this.reserve(o.capacityGrow(_classPrivateFieldGet(this,_opacity),t));for(var i=r.charCodeAt(),n=e;n<=t;++n)_classPrivateFieldGet(this,_stringBuilder)[n]=i;_classPrivateFieldSet(this,_size,Math.max(_classPrivateFieldGet(this,_size),t))}},{key:"size",value:function(){return _classPrivateFieldGet(this,_size)}},{key:"opacity",value:function(){return _classPrivateFieldGet(this,_opacity)}},{key:"append",value:function(){for(var e=0;e<arguments.length;++e)this._append_string(arguments[e])}},{key:"_append_string",value:function(e){if("string"==typeof e)return this._append_string(o.nativeStringToUint8Array(e));if(e instanceof o)return this._append_string(e.getUint8Array());if(!(e instanceof Uint8Array))throw new TypeError("Cannot find overload of this function: [dynamic] quickString._append_string");_classPrivateFieldGet(this,_size)+e.length>=_classPrivateFieldGet(this,_opacity)&&this.reserve(o.capacityGrow(_classPrivateFieldGet(this,_opacity),_classPrivateFieldGet(this,_size)+e.length));for(var t=0;t<e.length;++t)_classPrivateFieldGet(this,_stringBuilder)[_classPrivateFieldGet(this,_size)+t]=e[t];_classPrivateFieldSet(this,_size,_classPrivateFieldGet(this,_size)+e.length)}},{key:"at",value:function(e){if(!Number.isInteger(e))throw new TypeError("pos must be a integer");if((e=e<0?_classPrivateFieldGet(this,_size)+e:e)>=_classPrivateFieldGet(this,_opacity)||e<0)throw new AccessError("Segmentation fault");return String.fromCharCode(_classPrivateFieldGet(this,_stringBuilder)[e])}},{key:"concat",value:function(){return this.append(arguments)}},{key:"endsWith",value:function(e){if("string"!=typeof e)throw new TypeError("String must be a string");if(e.length>_classPrivateFieldGet(this,_size))return!1;for(var t=_classPrivateFieldGet(this,_size)-e.length,r=t;r<_classPrivateFieldGet(this,_size);++r)if(e[r-t].charCodeAt()!==_classPrivateFieldGet(this,_stringBuilder)[r])return!1;return!0}},{key:"indexOf",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:-1;if(-1===r&&(r=_classPrivateFieldGet(this,_size)),"string"!=typeof e)throw new TypeError("substring must be a string");if(!Number.isInteger(t)||t<0)throw new TypeError("start_position must be a non-negative integer.");if(!Number.isInteger(r)||r<0)throw new TypeError("end_position must be a non-negative integer.");for(var i=t,n=0;i<r;++i){for(var o=!0,n=0;n<e.length;++n)if(_classPrivateFieldGet(this,_stringBuilder)[i+n]!==e[n]){o=!1;break}if(o)return i}return-1}},{key:"lastIndexOf",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;if(-1===t&&(t=_classPrivateFieldGet(this,_size)-e.length),"string"!=typeof e)throw new TypeError("substring must be a string");if(!Number.isInteger(t)||t<0)throw new TypeError("start_position must be a non-negative integer.");if(!Number.isInteger(r)||r<0)throw new TypeError("end_position must be a non-negative integer.");for(var i=t,n=0;r<=i;--i){for(var o=!0,n=0;n<e.length;++n)if(_classPrivateFieldGet(this,_stringBuilder)[i+n]!==e[n]){o=!1;break}if(o)return i}return-1}},{key:"substring",value:function(e,t){if(e<0&&(e+=_classPrivateFieldGet(this,_size)),t<0&&(t+=_classPrivateFieldGet(this,_size)),!Number.isInteger(e)||e<0)throw new TypeError("start_position must be a non-negative integer.");if(!Number.isInteger(t)||t<0)throw new TypeError("end_position must be a non-negative integer.");if(e>=_classPrivateFieldGet(this,_opacity)||t>=_classPrivateFieldGet(this,_opacity))throw new AccessError("Segmentation fault.");if(t<e)throw new Error("end_position must not be less than start_position.");var r=new Uint8Array(t-e+1);if(0===r.length)throw new MemoryError("Cannot allocate memory for buffer.",t-e+1);for(var i=e;i<=t;++i)r[i-e]=_classPrivateFieldGet(this,_stringBuilder)[i];return new o(r)}},{key:"insert",value:function(e,t){if(e<0&&(e+=_classPrivateFieldGet(this,_size)),!Number.isInteger(e))throw new TypeError("insert position must be an integer");if(e<0)throw new TypeError("insert position must be a non-negative integer.");if(e>=_classPrivateFieldGet(this,_opacity))throw new AccessError("Segmentation fault");if(e>=_classPrivateFieldGet(this,_size)&&console.warn("Warning: Insert position is out of size"),"string"==typeof t)return this.insert(e,o.nativeStringToUint8Array(t));if(!(t instanceof Uint8Array))throw new TypeError("Cannot find overload of this function: [dynamic] quickString.insert");_classPrivateFieldGet(this,_size)+t.length>=_classPrivateFieldGet(this,_opacity)&&this.reserve(o.capacityGrow(_classPrivateFieldGet(this,_opacity),_classPrivateFieldGet(this,_size)+t.length));for(var r=_classPrivateFieldGet(this,_size)+t.length;r>=e+t.length;r--)_classPrivateFieldGet(this,_stringBuilder)[r]=_classPrivateFieldGet(this,_stringBuilder)[r-t.length];for(var i=0;i<t.length;i++)_classPrivateFieldGet(this,_stringBuilder)[i+e]=t[i];_classPrivateFieldSet(this,_size,_classPrivateFieldGet(this,_size)+t.length)}},{key:"remove",value:function(e,t){if(e<0&&(e+=_classPrivateFieldGet(this,_size)),!Number.isInteger(e)||e<0)throw new TypeError("remove position must be a non-negative integer");for(var r=e;r<e+t;r++){if(r>=_classPrivateFieldGet(this,_size))return void _classPrivateFieldSet(this,_size,Math.min(_classPrivateFieldGet(this,_opacity),r));_classPrivateFieldGet(this,_stringBuilder)[r]=_classPrivateFieldGet(this,_stringBuilder)[r+t]}_classPrivateFieldSet(this,_size,_classPrivateFieldGet(this,_size)-t)}},{key:"set",value:function(e,t){if(e<0&&(e+=_classPrivateFieldGet(this,_size)),!Number.isInteger(e)||e<0)throw new TypeError("pos must be a non-negative integer");if(e>=_classPrivateFieldGet(this,_opacity))throw new AccessError("Segmentation fault");if(e>=_classPrivateFieldGet(this,_size)&&console.warn("Warning: set position is out of size"),"string"==typeof t)_classPrivateFieldGet(this,_stringBuilder)[e]=String.fromCharCode(t);else{if("number"!=typeof t)throw new TypeError("Cannot find overload of this function: [dynamic] quickString.set");_classPrivateFieldGet(this,_stringBuilder)[e]=t}}},{key:"toString",value:function(){return String.fromCharCode.apply(String,_toConsumableArray(_classPrivateFieldGet(this,_stringBuilder).slice(0,_classPrivateFieldGet(this,_size))))}},{key:"releaseFree",value:function(){var e=_classPrivateFieldGet(this,_opacity)-1;if(e<0)return 0;for(;0===_classPrivateFieldGet(this,_stringBuilder)[e];--e);return this.reserve(e+1),e+1}},{key:"valueOf",value:function(){return this.toString()}},{key:_Symbol$iterator,value:_regeneratorRuntime().mark(function e(){var t;return _regeneratorRuntime().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(t<_classPrivateFieldGet(this,_stringBuilder).length)return e.next=4,String.fromCharCode(_classPrivateFieldGet(this,_stringBuilder)[t]);e.next=7;break;case 4:++t,e.next=1;break;case 7:case"end":return e.stop()}},e,this)})}],[{key:"capacityGrow",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:15;if(!Number.isInteger(e)||e<0)throw new TypeError("currentOpacity must be a non-negative integer.");if(!Number.isInteger(t)||t<0)throw new TypeError("targetOpacity must a non-negative integer.");for(var r=e;r<t;){if(!(r<32))return r*o.capacityGrowFactor;r+=16}return~~(r+1)}},{key:"nativeStringToUint8Array",value:function(e){if("string"!=typeof e)throw new TypeError("String must be a string");var t=new Uint8Array(e.length);if(0===t.length&&0!==e.length)throw new MemoryError("Cannot allocate memory for string.",e.length);for(var r=0;r<e.length;++r)t[r]=e[r].charCodeAt();return t}}]),o}(),MemoryError=(_defineProperty(quickString,"initialStringBuilder",new Uint8Array),_defineProperty(quickString,"capacityGrowFactor",1.5),function(){_inherits(n,_wrapNativeSuper(Error));var i=_createSuper(n);function n(e){var t,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1061109567;if(_classCallCheck(this,n),_defineProperty(_assertThisInitialized(t=i.apply(this,arguments)),"memory",void 0),"string"!=typeof e)throw new TypeError("Error message must be a string");if(!Number.isInteger(r)||r<0)throw new TypeError("Memory must be a non-negative integer");return t.message=e+"\nTrying to allocate memory "+n.formatSize(r),t.memory=r,t}return _createClass(n,null,[{key:"formatSize",value:function(e){if(Number.isInteger(e))return e<1024?e+"B":e<1048576?(e/1024).toFixed(2)+"KB":e<1073741824?(e/1024/1024).toFixed(2)+"MB":e<1099511627776?(e/1024/1024/1024).toFixed(2)+"GB":(e/1024/1024/1024/1024).toFixed(2)+"TB";throw new TypeError("Size must be a number")}}]),n}()),AccessError=function(){_inherits(r,_wrapNativeSuper(Error));var t=_createSuper(r);function r(e){return _classCallCheck(this,r),t.apply(this,arguments)}return _createClass(r)}();module.exports={quickString:quickString,MemoryError:MemoryError,AccessError:AccessError};