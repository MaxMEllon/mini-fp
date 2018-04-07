/**
 * @param {Function} [f] - Function
 * @example
 *
 * const addEventOnceToDocument = once(document.addEventListener)
 * addEventOnceToDocument('click', () => console.log('clicked!'))
 */
function once(f) {
  if (typeof f != 'function')
    throw new TypeError('Expected a function')
  let result
  let called = false
  return function(...args) {
    if (!called) {
      result = f.apply(this, args)
      called = true
    }
    return result
  }
}

export default once
