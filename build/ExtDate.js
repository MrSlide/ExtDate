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
  var extDateMethods = {
    setFirstDayOfYear: function setFirstDayOfYear(year) {
      this.setMilliseconds(0);
      this.setSeconds(0);
      this.setMinutes(0);
      this.setHours(0);
      this.setDate(1);
      this.setMonth(0);

      if (year) {
        this.setFullYear(year);
      }

      return this;
    },

    setUTCFirstDayOfYear: function setUTCFirstDayOfYear(year) {
      this.setUTCMilliseconds(0);
      this.setUTCSeconds(0);
      this.setUTCMinutes(0);
      this.setUTCHours(0);
      this.setUTCDate(1);
      this.setUTCMonth(0);

      if (year) {
        this.setUTCFullYear(year);
      }

      return this;
    }
  };

  function extend(src, dest) {
    var keys = Object.keys(src);

    keys.forEach(function (prop) {
      dest[prop] = src[prop];
    });

    return dest;
  }

  function ExtDate(year, month, day, hour, minutes, seconds, milliseconds) {
    if (!(this instanceof ExtDate)) {
      return Date.apply(undefined, arguments);
    }

    var date = new (Function.prototype.bind.apply(Date, [null].concat(Array.prototype.slice.call(arguments))))();

    return extend(extDateMethods, date);
  }

  var staticProps = Object.getOwnPropertyNames(Date);

  staticProps.forEach(function (prop) {
    if (typeof Date[prop] === 'function') {
      ExtDate[prop] = Date[prop];
    }
  });
});
//# sourceMappingURL=ExtDate.js.map
