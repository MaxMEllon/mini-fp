const typeName = require('type-name')
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
function validation(f) {
  if (typeof f != 'function')
    throw new TypeError('Expected a function')
  return f
}

function composite(array) {
  if (typeName(array) != 'Array')
    throw new TypeError('Expected a Array<Function>')
  return array.reverse().map(validation).reduce((g, f) => x => g(f(x)))
}

export default composite
