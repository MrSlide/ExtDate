'use strict'

/**
 * @name ExtDate
 * @desc Extends the native Date object with new useful methods.
 * @author Luis Rodrigues (http://www.luisrodriguesweb.com)
 * @version 1.0.0
 * @license MIT
 */

const extDateMethods = {
  /**
   * Sets the time of the day to 00:00:00.000 for a specified date according to local or univeral time.
   *
   * @memberof ExtDate
   * @private
   * @param {?Boolean} [utc] - Set to `true` to perform operations in univeral time.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   */
  _setStartOfDay: function _setStartOfDay (utc) {
    utc = utc ? 'UTC' : ''

    this[`set${utc}Milliseconds`](0)
    this[`set${utc}Seconds`](0)
    this[`set${utc}Minutes`](0)
    this[`set${utc}Hours`](0)

    return this.getTime()
  },

  /**
   * Sets the time of the day to 00:00:00.000 for a specified date according to local time.
   *
   * @memberof ExtDate
   * @public
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   *
   * @example
   * dateInstance.setStartOfDay()
   */
  setStartOfDay: function setStartOfDay () {
    return this._setStartOfDay()
  },

  /**
   * Sets the time of the day to 00:00:00.000 for a specified date according to universal time.
   *
   * @memberof ExtDate
   * @public
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   *
   * @example
   * dateInstance.setUTCStartOfDay()
   */
  setUTCStartOfDay: function setUTCStartOfDay () {
    return this._setStartOfDay(true)
  },

  /**
   * Sets the first day of the year for a specified date according to local or univeral time.
   *
   * @memberof ExtDate
   * @private
   * @param {?Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @param {?Boolean} [utc] - Set to `true` to perform operations in univeral time.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   */
  _setFirstDayOfYear: function _setFirstDayOfYear (year, utc) {
    utc = utc ? 'UTC' : ''

    this._setStartOfDay(!!utc)

    this[`set${utc}Date`](1)
    this[`set${utc}Month`](0)

    if (year) {
      this[`set${utc}FullYear`](year)
    }

    return this.getTime()
  },

  /**
   * Sets the first day of the year for a specified date according to local time.
   *
   * @memberof ExtDate
   * @public
   * @param {?Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   *
   * @example
   * dateInstance.setFirstDayOfYear(2016)
   */
  setFirstDayOfYear: function setFirstDayOfYear (year) {
    return this._setFirstDayOfYear(year)
  },

  /**
   * Sets the first day of the year for a specified date according to universal time.
   *
   * @memberof ExtDate
   * @public
   * @param {?Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   *
   * @example
   * dateInstance.setUTCFirstDayOfYear(2016)
   */
  setUTCFirstDayOfYear: function setUTCFirstDayOfYear (year) {
    return this._setFirstDayOfYear(year, true)
  },

  /**
   * Returns the day of the year for a specified date according to local time.
   *
   * @memberof ExtDate
   * @private
   * @param {?Boolean} [utc] - Set to `true` to perform operations in univeral time.
   * @return {Number} - The day of the year for the specified date.
   * @since 0.1.0
   */
  _getDayOfYear: function _getDayOfYear (utc) {
    utc = utc ? 'UTC' : ''

    const helperDate = new Date(this.getTime())

    let dayCount = helperDate[`get${utc}Date`]()
    let i = helperDate[`get${utc}Month`]()

    while (i > 0) {
      helperDate[`set${utc}Date`](0)
      dayCount += helperDate[`get${utc}Date`]()

      i--
    }

    return dayCount
  },

  /**
   * Returns the day of the year for a specified date according to local time.
   *
   * @memberof ExtDate
   * @public
   * @return {Number} - The day of the year for the specified date.
   * @since 0.1.0
   *
   * @example
   * var dayfOfYear = dateInstance.getDayOfYear()
   */
  getDayOfYear: function getDayOfYear () {
    return this._getDayOfYear()
  },

  /**
   * Returns the day of the year for a specified date according to universal time.
   *
   * @memberof ExtDate
   * @public
   * @return {Number} - The day of the year for the specified date.
   * @since 0.1.0
   *
   * @example
   * var dayfOfYear = dateInstance.getUTCDayOfYear()
   */
  getUTCDayOfYear: function getUTCDayOfYear () {
    return this._getDayOfYear(true)
  },

  /**
   * Sets the day of the year for a specified date according to local or universal time.
   *
   * @memberof ExtDate
   * @private
   * @param {Number} day - An integer between 1 and 365 (or 366, if the year is a leap year) representing the day of the year.
   * @param {?Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @param {?Boolean} [utc] - Set to `true` to perform operations in univeral time.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   */
  _setDayOfYear: function _setDayOfYear (day, year, utc) {
    utc = utc ? 'UTC' : ''

    if (year) {
      this[`set${utc}FullYear`](year)
    }

    this._setFirstDayOfYear(year, !!utc)
    this[`set${utc}Date`](day)

    return this.getTime()
  },

  /**
   * Sets the day of the year for a specified date according to local time.
   *
   * @memberof ExtDate
   * @public
   * @param {Number} day - An integer between 1 and 365 (or 366, if the year is a leap year) representing the day of the year.
   * @param {?Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   *
   * @example
   * dateInstance.setDayOfYear(45, 2016)
   */
  setDayOfYear: function setDayOfYear (day, year) {
    return this._setDayOfYear(day, year)
  },

  /**
   * Sets the day of the year for a specified date according to universal time.
   *
   * @memberof ExtDate
   * @public
   * @param {Number} day - An integer between 1 and 365 (or 366, if the year is a leap year) representing the day of the year.
   * @param {?Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   *
   * @example
   * dateInstance.setUTCDayOfYear(45, 2016)
   */
  setUTCDayOfYear: function setUTCDayOfYear (day, year) {
    return this._setDayOfYear(day, year, true)
  },

  /**
   * Sets the first day of the first week of the year for a specified date according to local or univeral time.
   *
   * @memberof ExtDate
   * @private
   * @param {?Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @param {?Boolean} [utc] - Set to `true` to perform operations in univeral time.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   */
  _setFirstWeekOfYear: function _setFirstWeekOfYear (year, utc) {
    utc = utc ? 'UTC' : ''

    this._setFirstDayOfYear(year, !!utc)
    let offset

    // Weeks start on Mondays
    let day = this[`get${utc}Day`]() - 1

    if (day < 0) {
      day = 6
    }

    // The first week of the year must include the 4th of January
    if (day > 3) {
      offset = 7 - day
    } else {
      offset = -day
    }

    // Adjust the date with the calculated offset
    this[`set${utc}Date`](this[`get${utc}Date`]() + offset)

    return this.getTime()
  },

  /**
   * Sets the first day of the first week of the year for a specified date according to local time.
   *
   * @memberof ExtDate
   * @public
   * @param {?Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   *
   * @example
   * dateInstance.setFirstWeekOfYear(2016)
   */
  setFirstWeekOfYear: function setFirstWeekOfYear (year) {
    return this._setFirstWeekOfYear(year)
  },

  /**
   * Sets the first day of the first week of the year for a specified date according to universal time.
   *
   * @memberof ExtDate
   * @public
   * @param {?Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   *
   * @example
   * dateInstance.setUTCFirstWeekOfYear(2016)
   */
  setUTCFirstWeekOfYear: function setUTCFirstWeekOfYear (year) {
    return this._setFirstWeekOfYear(year, true)
  },

  /**
   * Sets the first day of a week number for a specified date according to local or universal time.
   *
   * @memberof ExtDate
   * @private
   * @param {Number} week - An integer between 1 and 53, representing the week.
   * @param {?Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @param {?Boolean} [utc] - Set to `true` to perform operations in univeral time.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   */
  _setWeek: function _setWeek (week, year, utc) {
    utc = utc ? 'UTC' : ''

    const offset = (week - 1) * 7

    this._setFirstWeekOfYear(year, !!utc)
    this[`set${utc}Date`](this[`get${utc}Date`]() + offset)

    return this.getTime()
  },

  /**
   * Sets the first day of a week number for a specified date according to local time.
   *
   * @memberof ExtDate
   * @public
   * @param {Number} week - An integer between 1 and 53, representing the week.
   * @param {?Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   *
   * @example
   * dateInstance.setWeek(2, 2016)
   */
  setWeek: function setWeek (week, year) {
    return this._setWeek(week, year)
  },

  /**
   * Sets the first day of a week number for a specified date according to universal time.
   *
   * @memberof ExtDate
   * @public
   * @param {Number} week - An integer between 1 and 53, representing the week.
   * @param {?Number} [year] - If not specified, the year of the specified date will remain unchanged.
   * @return {Number} - The number of milliseconds since 1 January 1970 00:00:00 UTC.
   * @since 0.1.0
   *
   * @example
   * dateInstance.setUTCWeek(2, 2016)
   */
  setUTCWeek: function setUTCWeek (week, year) {
    return this._setWeek(week, year, true)
  },

  /**
   * Gets the week number of the specified date according to local or universal time.
   *
   * @memberof ExtDate
   * @private
   * @param {?Boolean} [utc] - Set to `true` to perform operations in univeral time.
   * @return {Number} - The ISO week number.
   * @since 0.1.0
   */
  _getWeek: function _getWeek (utc) {
    utc = utc ? 'UTC' : ''

    const day = this._getDayOfYear(!!utc)
    const weekDay = this[`get${utc}Day`]() || 7
    const week = Math.floor((day - weekDay + 10) / 7)

    return week !== 53 ? week : 1
  },

  /**
   * Gets the week number of the specified date according to local time.
   *
   * @memberof ExtDate
   * @public
   * @return {Number} - The ISO week number.
   * @since 0.1.0
   *
   * @example
   * var weekNumber = dateInstance.getWeek()
   */
  getWeek: function getWeek () {
    return this._getWeek()
  },

  /**
   * Gets the week number of the specified date according to universal time.
   *
   * @memberof ExtDate
   * @public
   * @return {Number} - The ISO week number.
   * @since 0.1.0
   *
   * @example
   * var weekNumber = dateInstance.getUTCWeek()
   */
  getUTCWeek: function getUTCWeek () {
    return this._getWeek(true)
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
    Object.defineProperty(dest, prop, {
      value: src[prop],
      enumerable: false,
      configurable: false,
      writable: false
    })
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
 * new ExtDate()
 * new ExtDate(547979648008)
 * new ExtDate('1995-12-17T03:24:00')
 * new ExtDate(1995, 11, 17)
 * new ExtDate(1995, 11, 17, 3, 24, 0)
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
    Object.defineProperty(ExtDate, prop, {
      value: Date[prop],
      enumerable: false,
      configurable: false,
      writable: false
    })
  }
})
