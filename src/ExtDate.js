'use strict'

/**
 * @name ExtDate
 * @desc Extends the native Date object with new useful methods.
 * @author Luis Rodrigues (http://www.luisrodriguesweb.com)
 * @version 0.1.0
 * @license MIT
 */
export default class ExtDate {

  /**
   * Creates an instance of ExtDate which implements new methods for
   * the Date object.
   *
   * @access public
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
   * @return {ExtDate} - The ExtDate instance
   * @since 0.1.0
   *
   * @example
   * new ExtDate();
   * new ExtDate(547979648008);
   * new ExtDate('1995-12-17T03:24:00');
   * new ExtDate(1995, 11, 17);
   * new ExtDate(1995, 11, 17, 3, 24, 0);
   */
  constructor () {
    // Create a Date instance to use internally
    this._date = new Date(...arguments)

    // Inject the Date native properties and methods into ExtDate
    this._extendDate()
  }

  /**
   * Injects a given Date method into the class.
   *
   * @access private
   * @param {String} methodName - The name of the method to inject.
   * @since 0.1.0
   */
  _addNativeMethod (methodName) {
    Object.defineProperty(this, methodName, {
      value: function () {
        // Call the method on the internal Date instance with
        // the provided arguments
        return this._date[methodName](...arguments)
      },
      writable: Date.prototype[methodName].writable,
      enumerable: Date.prototype[methodName].enumerable,
      configurable: Date.prototype[methodName].configurable
    })
  }

  /**
   * Injects a given Date property into the class.
   *
   * @access private
   * @param {String} propName - The name of the property to inject.
   * @since 0.1.0
   */
  _addNativeProperty (propName) {
    Object.defineProperty(this, propName, {
      get: function (newValue) {
        // Get the property value from the internal Date instance
        return this._date[propName]
      },
      set: function (newValue) {
        // Set the value of the property on the internal Date instance
        this._date[propName] = newValue
        return newValue
      },
      enumerable: Date.prototype[propName].enumerable,
      configurable: Date.prototype[propName].configurable
    })
  }

  /**
   * Make the ExtDate instance behave like a Date instance.
   *
   * @access private
   * @since 0.1.0
   */
  _extendDate () {
    const dateProps = Object.getOwnPropertyNames(Date.prototype)
    const propCount = dateProps.length
    let propName

    for (let i = 0; i < propCount; i++) {
      propName = dateProps[i]

      if (propName === 'constructor') {
        // Don't overwrite the ExtDate constructor
        continue
      } else if (typeof Date.prototype[propName] === 'function') {
        // Inject a native Date method
        this._addNativeMethod(propName)
      } else {
        // Inject a native Date property
        this._addNativeProperty(propName)
      }
    }
  }

  /**
   * Returns the number of milliseconds passed since the Unix Epoch
   * (January 1, 1970, 00:00:00) up until the current time.
   *
   * @access public
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
   * @return {Number}
   * @since 0.1.0
   */
  static now () {
    return Date.now(...arguments)
  }

  /**
   * Parses a RFC2822 or ISO 8601 string representation of a date and
   * returns the number of milliseconds passed since the Unix Epoch
   * (January 1, 1970, 00:00:00).
   *
   * @access public
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
   * @return {Number}
   * @since 0.1.0
   */
  static parse () {
    return Date.parse(...arguments)
  }

  /**
   * Returns the number of milliseconds passed since the Unix Epoch
   * (January 1, 1970, 00:00:00, universal time) up until the provided
   * date and time.
   *
   * @access public
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC
   * @return {Number}
   * @since 0.1.0
   */
  static UTC () {
    return Date.UTC(...arguments)
  }

}
