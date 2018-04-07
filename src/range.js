/**
 * @param {Number} [start] - Range start value
 * @param {Number} [to] - Range goal value
 * @param {Number} [step=1] - Range step
 * @return {Array<Number>} - Range array
 * @example
 *
 * const array = range(0, 10, 2)
 * array //=> [0, 2, 4, 6, 8]
 */
function range(start, to, step = 1) {
  const array = []
  for (let i = start; i < to; i += step) {
    array.push(i)
  }
  return array
}

export default range
