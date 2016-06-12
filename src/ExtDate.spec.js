'use strict'
/* eslint-env jasmine */

import ExtDate from './ExtDate.js'

/**
 * @test {ExtDate}
 */
describe('The ExtDate class', function () {
  describe('should expose native Date static methods', function () {
    /**
     * @test {ExtDate.now}
     */
    it('now()', function () {
      expect(typeof ExtDate.now).toBe('function')
      expect(ExtDate.now()).toBe(Date.now())
    })

    /**
     * @test {ExtDate.parse}
     */
    it('parse()', function () {
      expect(typeof ExtDate.parse).toBe('function')
      expect(ExtDate.parse('Wed, 09 Aug 1995 00:00:00 GMT')).toBe(Date.parse('Wed, 09 Aug 1995 00:00:00 GMT'))
    })

    /**
     * @test {ExtDate.UTC}
     */
    it('UTC()', function () {
      expect(typeof ExtDate.UTC).toBe('function')
      expect(ExtDate.UTC(96, 11, 1, 0, 0, 0)).toBe(Date.UTC(96, 11, 1, 0, 0, 0))
    })
  })

  describe('should expose native Date instance methods', function () {
    /**
     * @test {ExtDate#getDate}
     */
    it('getDate()', function () {
      const methodName = 'getDate'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getDay}
     */
    it('getDay()', function () {
      const methodName = 'getDay'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getFullYear}
     */
    it('getFullYear()', function () {
      const methodName = 'getFullYear'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getHours}
     */
    it('getHours()', function () {
      const methodName = 'getHours'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getMilliseconds}
     */
    it('getMilliseconds()', function () {
      const methodName = 'getMilliseconds'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getMinutes}
     */
    it('getMinutes()', function () {
      const methodName = 'getMinutes'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getMonth}
     */
    it('getMonth()', function () {
      const methodName = 'getMonth'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getSeconds}
     */
    it('getSeconds()', function () {
      const methodName = 'getSeconds'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getTime}
     */
    it('getTime()', function () {
      const methodName = 'getTime'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getTimezoneOffset}
     */
    it('getTimezoneOffset()', function () {
      const methodName = 'getTimezoneOffset'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getUTCDate}
     */
    it('getUTCDate()', function () {
      const methodName = 'getUTCDate'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getUTCDay}
     */
    it('getUTCDay()', function () {
      const methodName = 'getUTCDay'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getUTCFullYear}
     */
    it('getUTCFullYear()', function () {
      const methodName = 'getUTCFullYear'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getUTCHours}
     */
    it('getUTCHours()', function () {
      const methodName = 'getUTCHours'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getUTCMilliseconds}
     */
    it('getUTCMilliseconds()', function () {
      const methodName = 'getUTCMilliseconds'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getUTCMinutes}
     */
    it('getUTCMinutes()', function () {
      const methodName = 'getUTCMinutes'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getUTCMonth}
     */
    it('getUTCMonth()', function () {
      const methodName = 'getUTCMonth'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#getUTCSeconds}
     */
    it('getUTCSeconds()', function () {
      const methodName = 'getUTCSeconds'
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName]()
      const date = new Date(now)
      const dateResult = date[methodName]()

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setDate}
     */
    it('setDate()', function () {
      const methodName = 'setDate'
      const args = [24]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setFullYear}
     */
    it('setFullYear()', function () {
      const methodName = 'setFullYear'
      const args = [1987, 4, 14]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setHours}
     */
    it('setHours()', function () {
      const methodName = 'setHours'
      const args = [18, 14, 18, 14]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setMilliseconds}
     */
    it('setMilliseconds()', function () {
      const methodName = 'setMilliseconds'
      const args = [200]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setMinutes}
     */
    it('setMinutes()', function () {
      const methodName = 'setMinutes'
      const args = [14, 18, 14]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setMonth}
     */
    it('setMonth()', function () {
      const methodName = 'setMonth'
      const args = [4, 14]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setSeconds}
     */
    it('setSeconds()', function () {
      const methodName = 'setSeconds'
      const args = [18, 14]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setTime}
     */
    it('setTime()', function () {
      const methodName = 'setTime'
      const args = [547979648008]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setUTCDate}
     */
    it('setUTCDate()', function () {
      const methodName = 'setUTCDate'
      const args = [24]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setUTCFullYear}
     */
    it('setUTCFullYear()', function () {
      const methodName = 'setUTCFullYear'
      const args = [1987, 4, 14]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setUTCHours}
     */
    it('setUTCHours()', function () {
      const methodName = 'setUTCHours'
      const args = [18, 14, 18, 14]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setUTCMilliseconds}
     */
    it('setUTCMilliseconds()', function () {
      const methodName = 'setUTCMilliseconds'
      const args = [200]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setUTCMinutes}
     */
    it('setUTCMinutes()', function () {
      const methodName = 'setUTCMinutes'
      const args = [14, 18, 14]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setUTCMonth}
     */
    it('setUTCMonth()', function () {
      const methodName = 'setUTCMonth'
      const args = [4, 14]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })

    /**
     * @test {ExtDate#setUTCSeconds}
     */
    it('setUTCSeconds()', function () {
      const methodName = 'setUTCSeconds'
      const args = [18, 14]
      const now = Date.now()
      const extDate = new ExtDate(now)
      const extDateResult = extDate[methodName].apply(extDate, args)
      const date = new Date(now)
      const dateResult = date[methodName].apply(date, args)

      expect(typeof ExtDate[methodName]).toBe('undefined')
      expect(typeof extDate[methodName]).toBe('function')
      expect(extDateResult).toBe(dateResult)
    })
  })
})

/**
 * @test {ExtDate}
 */
describe('The ExtDate module', function () {
  it('should export the ExtDate class by default', function () {
    expect(ExtDate.name).toBe('ExtDate')
  })
})
