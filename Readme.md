
# almost-equal

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check if two numbers are almost equal.

## Installation

    $ npm install @f/almost-equal

## Usage

```js
var almostEqual = require('@f/almost-equal')

almostEqual(1, 1.5, 1) // -> true
almostEqual(1, 2.1, 1) // -> false
```

## API

### almostEqual(a, b, margin)

- `a` - First value to compare.
- `b` - second value to compare.
- `margin` - Margin between two numbers which is tolerated and can be seen as "almost equal".

**Returns:** A boolean which determines if the two values `a` and `b` are almost equal.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/almost-equal.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/almost-equal
[git-image]: https://img.shields.io/github/tag/micro-js/almost-equal.svg?style=flat-square
[git-url]: https://github.com/micro-js/almost-equal
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/almost-equal.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/almost-equal
