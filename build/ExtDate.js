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
  exports.default = ExtDate;
  function ExtDate() {
    this._date = new (Function.prototype.bind.apply(Date, [null].concat(Array.prototype.slice.call(arguments))))();
  }

  function copyBaseProps(src, dest) {
    try {
      Object.defineProperty(dest, 'name', { value: src.name });
      Object.defineProperty(dest, 'length', { value: src.length });
    } catch (err) {}
  }

  function addStaticMethod(methodName) {
    var force = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    if (typeof Date[methodName] !== 'function') {
      return;
    }

    var fn = void 0;

    if (!ExtDate[methodName]) {
      fn = function fn() {
        var returnVal = Date[methodName].apply(Date, arguments);

        if (returnVal instanceof Date) {
          return new ExtDate(returnVal.getTime());
        } else {
          return returnVal;
        }
      };

      copyBaseProps(Date[methodName], fn);

      ExtDate[methodName] = fn;
    }
  }

  function addMethod(methodName) {
    var force = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    if (typeof Date.prototype[methodName] !== 'function') {
      return;
    }

    var fn = void 0;

    if (!ExtDate.prototype[methodName] || force) {
      fn = function fn() {
        return this._date[methodName].apply(this._date, arguments);
      };

      copyBaseProps(Date.prototype[methodName], fn);

      ExtDate.prototype[methodName] = fn;
    }
  }

  Object.getOwnPropertyNames(Date).forEach(function (prop) {
    addStaticMethod(prop);
  });

  Object.getOwnPropertyNames(Date.prototype).forEach(function (prop) {
    addMethod(prop);
  });

  addMethod('toLocaleString', true);
  addMethod('toSource', true);
  addMethod('toString', true);
  addMethod('valueOf', true);
});
//# sourceMappingURL=ExtDate.js.map
