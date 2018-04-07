/**
 * @param {Array<Function>} [array] - Function list
 * @returns {Function} Composite function
 * @example
 *
 * const isFunc = f => typeof f == 'function'
 * conat isFunctionList = all(isFunc)([x => x + 1, y => y + 2])
 * isFunctionList //=> true
 *
 */
function all(f) {
  return function (array) {
    return array.reduce((acc, cur) => acc && f(cur), true)
  }
}

export default all
