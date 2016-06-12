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

    this._extendDate()
  }

  _addNativeMethod (methodName) {
    Object.defineProperty(this, methodName, {
      value: function () {
        return this._date[methodName](...arguments)
      },
      writable: Date.prototype[methodName].writable,
      enumerable: Date.prototype[methodName].enumerable,
      configurable: Date.prototype[methodName].configurable
    })
  }

  _addNativeProperty (propName) {
    Object.defineProperty(this, propName, {
      get: function (newValue) {
        return this._date[propName]
      },
      set: function (newValue) {
        this._date[propName] = newValue
        return newValue
      },
      enumerable: Date.prototype[propName].enumerable,
      configurable: Date.prototype[propName].configurable
    })
  }

  _extendDate () {
    const dateProps = Object.getOwnPropertyNames(Date.prototype)
    const propCount = dateProps.length
    let propName

    for (let i = 0; i < propCount; i++) {
      propName = dateProps[i]

      if (propName === 'constructor') {
        continue
      } else if (typeof Date.prototype[propName] === 'function') {
        this._addNativeMethod(propName)
      } else {
        this._addNativeProperty(propName)
      }
    }
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
