import mapIterate from './internal/_mapIterate'
import mapEnumerable from './internal/_mapEnumerable'

/**
 * @param {Function} [f]
 * @param {Array} [xs]
 * @returns {Array}
 * @example
 *
 * const plusOne = x => x + 1
 * const mapper = map(plusOne)
 *
 * mapper([0, 1, 2])
 * //=> [1, 2, 3]
 */
function map(f) {
  return function(xs) {
    if (!xs)
      throw new TypeError('Expected a iteratorable object, For example Array, Map, or Object.')
    return typeof xs[Symbol.iterator] == 'function'
      ? mapIterate(xs, f)
      : mapEnumerable(xs, f)
  }
}

export default map
