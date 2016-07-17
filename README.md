# ExtDate

Native JavaScript Date object extended with new useful methods.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![latest-release](https://img.shields.io/github/release/MrSlide/ExtDate.svg?style=flat-square)](https://github.com/MrSlide/ExtDate/tree/master)
[![Travis branch](https://img.shields.io/travis/MrSlide/ExtDate/master.svg?style=flat-square)](https://travis-ci.org/MrSlide/ExtDate)
[![Coverage Status](https://img.shields.io/coveralls/MrSlide/ExtDate/master.svg?style=flat-square)](https://coveralls.io/github/MrSlide/ExtDate?branch=master)
[![GitHub issues](https://img.shields.io/github/issues/MrSlide/ExtDate.svg?style=flat-square)](https://github.com/MrSlide/ExtDate/issues)
[![license](https://img.shields.io/github/license/MrSlide/ExtDate.svg?style=flat-square)](https://opensource.org/licenses/MIT)



## Warning

This project is still in early development stage and should not be used in production code.



## Install

You can install ExtDate via [Bower](http://bower.io/).

```
bower install ext-date
```


## Usage

### API

The ExtDate API tries to mimic the native [Date] object as much as possible. All the static methods and instance methods available in the native [Date] object will be available through ExtDate, as long as they are supported by the browser.

For documentation on the native methods, please see <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date>.

For a consistent behaviour, if ExtDate has any method that also exists in the native [Date] object, the ExtDate method will take precedence. ExtDate does not modify the native [Date] object, so you can still access the any native method by using the native [Date] directly instead of ExtDate.


#### ExtDate()

Returns a string representation of the current date and time.

##### Returns

[String] A string representation of the current date and time. Equivalent to `(new Date().toString())`.

---------------------------------------

#### ExtDate.prototype.constructor()

Creates an instance of a [Date] object extended with the ExtDate methods.
The ExtDate constructor uses the same syntax as the native [Date] object constructor. See <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date> for more details and parameter options.


```
var dateInstance = new ExtDate()
var dateInstance = new ExtDate('December 17, 1995 03:24:00')
var dateInstance = new ExtDate('1995-12-17T03:24:00')
var dateInstance = new ExtDate(1995, 11, 17)
var dateInstance = new ExtDate(1995, 11, 17, 3, 24, 0)
```

##### Returns

[Date] A new Date instance extended with the ExtDate methods.

---------------------------------------

#### ExtDate.prototype.getDayOfYear()

Returns the day of the year for a specified date according to local time.


```
var dayfOfYear = dateInstance.getDayOfYear()
```

##### Returns

[Number] The day of the year for the specified date.

---------------------------------------

#### ExtDate.prototype.getUTCDayOfYear()

Returns the day of the year for a specified date according to universal time.


```
var dayfOfYear = dateInstance.getUTCDayOfYear()
```

##### Returns

[Number] The day of the year for the specified date.

---------------------------------------

#### ExtDate.prototype.getWeek()

Gets the week number of the specified date according to local time.


```
var weekNumber = dateInstance.getWeek()
```

##### Returns

[Number] The ISO week number.

---------------------------------------

#### ExtDate.prototype.getUTCWeek()

Gets the week number of the specified date according to universal time.


```
var weekNumber = dateInstance.getUTCWeek()
```

##### Returns

[Number] The ISO week number.

---------------------------------------

#### ExtDate.prototype.setDayOfYear([Number] day[, [Number] year])

Sets the day of the year for a specified date according to local time.


```
dateInstance.setDayOfYear(45, 2016)
```

##### Returns

[Number] The number of milliseconds since 1 January 1970 00:00:00 UTC.

---------------------------------------

#### ExtDate.prototype.setUTCDayOfYear([Number] day[, [Number] year])

Sets the day of the year for a specified date according to universal time.


```
dateInstance.setUTCDayOfYear(45, 2016)
```

##### Returns

[Number] The number of milliseconds since 1 January 1970 00:00:00 UTC.

---------------------------------------

#### ExtDate.prototype.setFirstDayOfYear([[Number] year])

Sets the first day of the year for a specified date according to local time.


```
dateInstance.setFirstDayOfYear(2016)
```

##### Returns

[Number] The number of milliseconds since 1 January 1970 00:00:00 UTC.

---------------------------------------

#### ExtDate.prototype.setUTCFirstDayOfYear([[Number] year])

Sets the first day of the year for a specified date according to universal time.


```
dateInstance.setUTCFirstDayOfYear(2016)
```

##### Returns

[Number] The number of milliseconds since 1 January 1970 00:00:00 UTC.

---------------------------------------

#### ExtDate.prototype.setFirstWeekOfYear([[Number] year])

Sets the first day of the first week of the year for a specified date according to local time.


```
dateInstance.setFirstWeekOfYear(2016)
```

##### Returns

[Number] The number of milliseconds since 1 January 1970 00:00:00 UTC.

---------------------------------------

#### ExtDate.prototype.setUTCFirstWeekOfYear([[Number] year])

Sets the first day of the first week of the year for a specified date according to universal time.


```
dateInstance.setUTCFirstWeekOfYear(2016)
```

##### Returns

[Number] The number of milliseconds since 1 January 1970 00:00:00 UTC.

---------------------------------------

#### ExtDate.prototype.setStartOfDay()

Sets the time of the day to 00:00:00.000 for a specified date according to local time.


```
dateInstance.setStartOfDay()
```

##### Returns

[Number] The number of milliseconds since 1 January 1970 00:00:00 UTC.

---------------------------------------

#### ExtDate.prototype.setUTCStartOfDay()

Sets the time of the day to 00:00:00.000 for a specified date according to universal time.


```
dateInstance.setUTCStartOfDay()
```

##### Returns

[Number] The number of milliseconds since 1 January 1970 00:00:00 UTC.

---------------------------------------

#### ExtDate.prototype.setWeek([Number] week[, [Number] year])

Sets the first day of a week number for a specified date according to local time.


```
dateInstance.setWeek(2, 2016)
```

##### Returns

[Number] The number of milliseconds since 1 January 1970 00:00:00 UTC.

---------------------------------------

#### ExtDate.prototype.setUTCWeek([Number] week[, [Number] year])

Sets the first day of a week number for a specified date according to universal time.


```
dateInstance.setUTCWeek(2, 2016)
```

##### Returns

[Number] The number of milliseconds since 1 January 1970 00:00:00 UTC.



## Brower support

ExtDate, although not tested in all of them, was created using features supported by these browsers.

- Android Browser 4+
- Blackberry Browser 7+
- Chrome 13+
- Firefox 4+
- Internet Explorer 9+
- Opera 12+
- Opera Mini 5+
- Safari 7+



## Support

If you want to request new features or find any bugs, please open a ticket on the [issues](https://github.com/MrSlide/ExtDate/issues) page and I'll review it as soon as possible.



## Authors and Contributors

Created by Luís Rodrigues ([@MrSlide](https://github.com/MrSlide))



## License and copyright

Released under the [MIT](https://opensource.org/licenses/MIT) license

Copyright (c) 2016 Luís Rodrigues


[Date]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
