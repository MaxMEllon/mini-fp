/**
 * @param {Array<Function>} [array] - Function list
 * @returns {Function} Composite function
 * @example
 *
 * const f = composite([
 *  x => x + 1,
 *  x => x * 5,
 * ])
 *
 * f(10) //=> 55
 */
function all(f) {
  return function (array) {
    return array.reduce((acc, cur) => acc && f(cur), true)
  }
}
