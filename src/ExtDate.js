'use strict'

/**
 * @name ExtDate
 * @desc Extends the native Date object with new useful methods.
 * @author Luis Rodrigues (http://www.luisrodriguesweb.com)
 * @version 0.1.0
 * @license MIT
 */
export default class ExtDate {

  constructor () {
    this._date = new Date(...arguments)

    const dateProps = Object.getOwnPropertyNames(Date.prototype)
    const propCount = dateProps.length
    let propName

    for (let i = 0; i < propCount; i++) {
      propName = dateProps[i]

      if (typeof this[propName] !== 'undefined') {
        continue
      } else if (typeof Date.prototype[propName] === 'function') {
        this._addNativeMethod(propName)
      }
    }
  }

  _addNativeMethod (methodName) {
    Object.defineProperty(this, methodName, {
      value: function () {
        return this._date[methodName](...arguments)
      }
    })
  }

  static now () {
    return Date.now(...arguments)
  }

  static parse () {
    return Date.parse(...arguments)
  }

  static UTC () {
    return Date.UTC(...arguments)
  }

}
