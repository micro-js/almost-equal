
/**
 * Expose almostEqual
 */

module.exports = almostEqual

/**
 * almostEqual
 */

function almostEqual(a, b, margin) {
  return (a > (b - margin)) && (a < (b + margin))
}
