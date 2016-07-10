'use strict'

/**
 * @name ExtDate
 * @desc Extends the native Date object with new useful methods.
 * @author Luis Rodrigues (http://www.luisrodriguesweb.com)
 * @version 0.1.0
 * @license MIT
 */

const extDateMethods = {
  /**
   * Sets the first day of the year for a specified date according to local time.
   *
   * @memberof ExtDate
   * @public
   * @param {!Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @return {Date}
   * @since 0.1.0
   *
   * @example
   * dateInstance.setFirstDayOfYear(2016)
   */
  setFirstDayOfYear: function setFirstDayOfYear (year) {
    this.setMilliseconds(0)
    this.setSeconds(0)
    this.setMinutes(0)
    this.setHours(0)
    this.setDate(1)
    this.setMonth(0)

    if (year) {
      this.setFullYear(year)
    }

    return this
  },

  /**
   * Sets the first day of the year for a specified date according to universal time.
   *
   * @memberof ExtDate
   * @public
   * @param {!Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @return {Date}
   * @since 0.1.0
   *
   * @example
   * dateInstance.setUTCFirstDayOfYear(2016)
   */
  setUTCFirstDayOfYear: function setUTCFirstDayOfYear (year) {
    this.setUTCMilliseconds(0)
    this.setUTCSeconds(0)
    this.setUTCMinutes(0)
    this.setUTCHours(0)
    this.setUTCDate(1)
    this.setUTCMonth(0)

    if (year) {
      this.setUTCFullYear(year)
    }

    return this
  }
}

/**
 * Copy the properties of one object into another.
 *
 * @param {Object} src - The object to get the properties from.
 * @param {Object} dest - The object to copy the properties into.
 * @return {Object} - The extended object
 * @since 0.1.0
 */
function extend (src, dest) {
  const keys = Object.keys(src)

  keys.forEach(function (prop) {
    dest[prop] = src[prop]
  })

  return dest
}

/**
 * Creates an instance of ExtDate which implements new methods for
 * the Date object.
 *
 * @function
 * @constructs
 * @public
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * @return {Date|String} - The Date instance with the added methods, or a string representation of the date if called as a function.
 * @since 0.1.0
 *
 * @example
 * var currentDateTime = ExtDate()
 *
 * @example
 * new ExtDate();
 * new ExtDate(547979648008);
 * new ExtDate('1995-12-17T03:24:00');
 * new ExtDate(1995, 11, 17);
 * new ExtDate(1995, 11, 17, 3, 24, 0);
 */
export default function ExtDate (year, month, day, hour, minutes, seconds, milliseconds) {
  if (!(this instanceof ExtDate)) {
    return Date(...arguments)
  }

  // Create a Date instance to use internally
  const date = new Date(...arguments)

  return extend(extDateMethods, date)
}

// Extend ExtDate with Date's static methods
const staticProps = Object.getOwnPropertyNames(Date)

staticProps.forEach(function (prop) {
  if (typeof Date[prop] === 'function') {
    ExtDate[prop] = Date[prop]
  }
})
