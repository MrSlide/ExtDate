'use strict'

/**
 * @name ExtDate
 * @desc Extends the native Date object with new useful methods.
 * @author Luis Rodrigues (http://www.luisrodriguesweb.com)
 * @version 0.1.0
 * @license MIT
 */

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
export default function ExtDate () {
  if (!(this instanceof ExtDate)) {
    throw new TypeError('Cannot call a class as a function')
  }

  // Create a Date instance to use internally
  this._date = new Date(...arguments)
}

/**
 * Match the name and length properties of two methods.
 *
 * @param {Function} src - The function to copy the values from.
 * @param  {Function} dest - The function to copy the values to.
 */
function copyBaseProps (src, dest) {
  try {
    Object.defineProperty(dest, 'name', {value: src.name})
    Object.defineProperty(dest, 'length', {value: src.length})
  } catch (err) {}
}

/**
 * Add a static method from Date to ExtDate
 *
 * @param {String} methodName - Name of the method to be added.
 * @param {Boolean} [force] - Set to `true` to add the method even if it already exists.
 */
function addStaticMethod (methodName, force = false) {
  if (typeof Date[methodName] !== 'function') {
    return
  }

  let fn

  // Only add methods that do not exist in ExtDate yet
  if (!ExtDate[methodName]) {
    fn = function () {
      return Date[methodName](...arguments)
    }

    copyBaseProps(Date[methodName], fn)

    ExtDate[methodName] = fn
  }
}

/**
 * Add an instance method from Date to ExtDate
 *
 * @param {String} methodName - Name of the method to be added.
 * @param {Boolean} [force] - Set to `true` to add the method even if it already exists.
 */
function addMethod (methodName, force = false) {
  if (typeof Date.prototype[methodName] !== 'function') {
    return
  }

  let fn

  // Only add functions that do not exist in ExtDate yet
  if (!ExtDate.prototype[methodName] || force) {
    fn = function () {
      // Proxy the internal Date instance method
      return this._date[methodName].apply(this._date, arguments)
    }

    copyBaseProps(Date.prototype[methodName], fn)

    ExtDate.prototype[methodName] = fn
  }
}

// Add the static methods from Date to ExtDate
Object.getOwnPropertyNames(Date).forEach(function (prop) {
  addStaticMethod(prop)
})
// Add the instance methods from Date to ExtDate
Object.getOwnPropertyNames(Date.prototype).forEach(function (prop) {
  addMethod(prop)
})

// Add instance methods that are common to all objects
addMethod('toLocaleString', true)
addMethod('toSource', true)
addMethod('toString', true)
addMethod('valueOf', true)
