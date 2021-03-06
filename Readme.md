# Mondays

Mondays is a utility library to cope with Mondays.  
Mondays could be hard, this library should ease your way with them.

[![Build Status](https://travis-ci.org/cedmax/mondays.svg?branch=master)](https://travis-ci.org/cedmax/mondays)
[![npm version](https://badge.fury.io/js/mondays.svg)](https://badge.fury.io/js/mondays)
[![Dependency status](https://david-dm.org/cedmax/mondays.svg)](https://david-dm.org)
[![codecov](https://codecov.io/gh/cedmax/mondays/branch/master/graph/badge.svg)](https://codecov.io/gh/cedmax/mondays)

## Getting started

Install the library with npm

```sh
> npm install mondays
```

and import it in your js

```js
var mondays = require("mondays");
```

## Docs

Every method defaults to the current date if no argument is provided

### mondays.isMonday

Returns a boolean stating if the date provided is a Monday

```js
mondays.isMonday(date);
```

### mondays.getNextMonday

Returns a Date object representing the next Mondaym relative to the date provided

```js
mondays.getNextMonday(date);
```

### mondays.getPrevMonday

Returns a Date object representing the previous Monday, relative to the date provided

```js
mondays.getPrevMonday(date);
```

### mondays.daysUntilMonday

Returns the number of days until the next Monday, relative to the date provided

```js
mondays.daysUntilMonday(date);
```

### mondays.daysSinceMonday

Returns the number of days since last Monday, relative to the date provided

```js
mondays.daysSinceMonday(date);
```

## Changelog

v2.0.0

- upgraded node version (10+)

v1.0.1

- updated dependencies

v1.0.0

- Basic functionality
