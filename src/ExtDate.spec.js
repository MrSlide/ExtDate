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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
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
      const extDate = new ExtDate()
      const extDateResult = extDate[methodName]()
      const date = new Date()
      const dateResult = date[methodName]()

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
