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

  var msInDay = 86400000;

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
    },

    setFirstWeekOfYear: function setFirstWeekOfYear(year) {
      this.setFirstDayOfYear(year);
      var offset = void 0;

      var day = this.getDay() - 1;

      if (day < 0) {
        day = 6;
      }

      if (day > 3) {
        offset = (7 - day) * msInDay;
      } else {
        offset = -day * msInDay;
      }

      this.setTime(this.getTime() + offset);

      return this;
    },

    setUTCFirstWeekOfYear: function setUTCFirstWeekOfYear(year) {
      this.setUTCFirstDayOfYear(year);
      var offset = void 0;

      var day = this.getUTCDay() - 1;

      if (day < 0) {
        day = 6;
      }

      if (day > 3) {
        offset = (7 - day) * msInDay;
      } else {
        offset = -day * msInDay;
      }

      this.setTime(this.getTime() + offset);

      return this;
    },

    setWeek: function setWeek(week, year) {
      var offset = (week - 1) * 7;

      this.setFirstWeekOfYear(year);
      this.setDate(this.getDate() + offset);

      return this;
    },

    setUTCWeek: function setUTCWeek(week, year) {
      var offset = (week - 1) * 7;

      this.setUTCFirstWeekOfYear(year);
      this.setUTCDate(this.getUTCDate() + offset);

      return this;
    }
  };

  function extend(src, dest) {
    var keys = Object.keys(src);

    keys.forEach(function (prop) {
      Object.defineProperty(dest, prop, {
        value: src[prop],
        enumerable: false,
        configurable: false,
        writable: false
      });
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
      Object.defineProperty(ExtDate, prop, {
        value: Date[prop],
        enumerable: false,
        configurable: false,
        writable: false
      });
    }
  });
});
//# sourceMappingURL=ExtDate.js.map
