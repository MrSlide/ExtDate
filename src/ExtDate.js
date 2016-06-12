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
        Object.defineProperty(this, propName, {
          value: function () {
            return this._date[propName](...arguments)
          }
        })

        Object.defineProperty(this[propName], 'name', {
          value: propName
        })

        Object.defineProperty(this[propName], 'length', {
          value: this._date[propName].length
        })
      }
    }
  }

  get length () {
    return Date.length
  }

  get name () {
    return 'ExtDate'
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
