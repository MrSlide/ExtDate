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
    _setStartOfDay: function _setStartOfDay(utc) {
      utc = utc ? 'UTC' : '';

      this['set' + utc + 'Milliseconds'](0);
      this['set' + utc + 'Seconds'](0);
      this['set' + utc + 'Minutes'](0);
      this['set' + utc + 'Hours'](0);

      return this.getTime();
    },

    setStartOfDay: function setStartOfDay() {
      return this._setStartOfDay();
    },

    setUTCStartOfDay: function setUTCStartOfDay() {
      return this._setStartOfDay(true);
    },

    _setFirstDayOfYear: function _setFirstDayOfYear(year, utc) {
      utc = utc ? 'UTC' : '';

      this._setStartOfDay(!!utc);

      this['set' + utc + 'Date'](1);
      this['set' + utc + 'Month'](0);

      if (year) {
        this['set' + utc + 'FullYear'](year);
      }

      return this.getTime();
    },

    setFirstDayOfYear: function setFirstDayOfYear(year) {
      return this._setFirstDayOfYear(year);
    },

    setUTCFirstDayOfYear: function setUTCFirstDayOfYear(year) {
      return this._setFirstDayOfYear(year, true);
    },

    _getDayOfYear: function _getDayOfYear(utc) {
      utc = utc ? 'UTC' : '';

      var helperDate = new Date(this.getTime());

      var dayCount = helperDate['get' + utc + 'Date']();
      var i = helperDate['get' + utc + 'Month']();

      while (i > 0) {
        helperDate['set' + utc + 'Date'](0);
        dayCount += helperDate['get' + utc + 'Date']();

        i--;
      }

      return dayCount;
    },

    getDayOfYear: function getDayOfYear() {
      return this._getDayOfYear();
    },

    getUTCDayOfYear: function getUTCDayOfYear() {
      return this._getDayOfYear(true);
    },

    _setDayOfYear: function _setDayOfYear(day, year, utc) {
      utc = utc ? 'UTC' : '';

      if (year) {
        this['set' + utc + 'FullYear'](year);
      }

      this._setFirstDayOfYear(year, !!utc);
      this['set' + utc + 'Date'](day);

      return this.getTime();
    },

    setDayOfYear: function setDayOfYear(day, year) {
      return this._setDayOfYear(day, year);
    },

    setUTCDayOfYear: function setUTCDayOfYear(day, year) {
      return this._setDayOfYear(day, year, true);
    },

    _setFirstWeekOfYear: function _setFirstWeekOfYear(year, utc) {
      utc = utc ? 'UTC' : '';

      this._setFirstDayOfYear(year, !!utc);
      var offset = void 0;

      var day = this['get' + utc + 'Day']() - 1;

      if (day < 0) {
        day = 6;
      }

      if (day > 3) {
        offset = 7 - day;
      } else {
        offset = -day;
      }

      this['set' + utc + 'Date'](this['get' + utc + 'Date']() + offset);

      return this.getTime();
    },

    setFirstWeekOfYear: function setFirstWeekOfYear(year) {
      return this._setFirstWeekOfYear(year);
    },

    setUTCFirstWeekOfYear: function setUTCFirstWeekOfYear(year) {
      return this._setFirstWeekOfYear(year, true);
    },

    _setWeek: function _setWeek(week, year, utc) {
      utc = utc ? 'UTC' : '';

      var offset = (week - 1) * 7;

      this._setFirstWeekOfYear(year, !!utc);
      this['set' + utc + 'Date'](this['get' + utc + 'Date']() + offset);

      return this.getTime();
    },

    setWeek: function setWeek(week, year) {
      return this._setWeek(week, year);
    },

    setUTCWeek: function setUTCWeek(week, year) {
      return this._setWeek(week, year, true);
    },

    _getWeek: function _getWeek(utc) {
      utc = utc ? 'UTC' : '';

      var day = this._getDayOfYear(!!utc);
      var weekDay = this['get' + utc + 'Day']() || 7;
      var week = Math.floor((day - weekDay + 10) / 7);

      return week !== 53 ? week : 1;
    },

    getWeek: function getWeek() {
      return this._getWeek();
    },

    getUTCWeek: function getUTCWeek() {
      return this._getWeek(true);
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
