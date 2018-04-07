import typeName from 'type-name'
import all from './all.js'
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
function validation(array) {
  if (typeName(array) != 'Array' && !all(x => typeof x == 'function')(array))
    throw new TypeError('Expected a Array<Function>')
}

function composite(array) {
  validation(array)
  return array.reverse().reduce((g, f) => x => g(f(x)))
}

export default composite
