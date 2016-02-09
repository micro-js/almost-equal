/**
 * Imports
 */

var almostEqual = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(almostEqual(1, 1.1, 1))
  t.ok(almostEqual(1, 1.9, 1))
  t.ok(almostEqual(1, 1.999, 1))

  t.ok(almostEqual(1, 1.01, 0.1))
  t.ok(almostEqual(1, 1.09, 0.1))
  t.ok(almostEqual(1, 1.0999, 0.1))

  t.ok(almostEqual(5, 5.001, 0.01))
  t.ok(almostEqual(5, 5.00999, 0.01))
  t.notOk(almostEqual(5, 6, 0.01))
  t.notOk(almostEqual(5, 5.1, 0.01))

  t.end()
})
