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
 * @return {Date} - The Date instance with the added methods.
 * @since 0.1.0
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

  return date
}

const staticProps = Object.getOwnPropertyNames(Date)

staticProps.forEach(function (prop) {
  if (typeof Date[prop] === 'function') {
    ExtDate[prop] = Date[prop]
  }
})
