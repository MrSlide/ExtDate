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
  function ExtDate(year, month, day, hour, minutes, seconds, milliseconds) {
    if (!(this instanceof ExtDate)) {
      throw new TypeError('Cannot call a class as a function');
    }

    var date = new (Function.prototype.bind.apply(Date, [null].concat(Array.prototype.slice.call(arguments))))();

    return date;
  }

  var staticProps = Object.getOwnPropertyNames(Date);

  staticProps.forEach(function (prop) {
    if (typeof Date[prop] === 'function') {
      ExtDate[prop] = Date[prop];
    }
  });
});
//# sourceMappingURL=ExtDate.js.map
