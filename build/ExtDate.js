(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.ExtDate = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  /**
   * @name ExtDate
   * @desc Extends the native Date object with new useful methods.
   * @author Luis Rodrigues (http://www.luisrodriguesweb.com)
   * @version 0.1.0
   * @license MIT
   */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ExtDate = function () {
    function ExtDate() {
      _classCallCheck(this, ExtDate);

      this._date = new (Function.prototype.bind.apply(Date, [null].concat(Array.prototype.slice.call(arguments))))();

      var dateProps = Object.getOwnPropertyNames(Date.prototype);
      var propCount = dateProps.length;
      var propName = void 0;

      for (var i = 0; i < propCount; i++) {
        propName = dateProps[i];

        if (typeof this[propName] !== 'undefined' && propName !== 'toLocaleString') {
          continue;
        } else if (typeof Date.prototype[propName] === 'function') {
          this._addNativeMethod(propName);
        }
      }
    }

    ExtDate.prototype._addNativeMethod = function _addNativeMethod(methodName) {
      Object.defineProperty(this, methodName, {
        value: function value() {
          var _date;

          return (_date = this._date)[methodName].apply(_date, arguments);
        }
      });
    };

    ExtDate.now = function now() {
      return Date.now.apply(Date, arguments);
    };

    ExtDate.parse = function parse() {
      return Date.parse.apply(Date, arguments);
    };

    ExtDate.UTC = function UTC() {
      return Date.UTC.apply(Date, arguments);
    };

    return ExtDate;
  }();

  exports.default = ExtDate;
});
//# sourceMappingURL=ExtDate.js.map
