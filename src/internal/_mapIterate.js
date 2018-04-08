import typeName from 'type-name'

function mapIterate(xs, f) {
  let index = 0
  const type = typeName(xs)
  const length = xs == null ? 0
    : type == 'Map' || type == 'WeekMap'
    ? xs.size
    : xs.length
  const result = new Array(length)
  for (const i of xs) {
    result[index] = f(i, index, xs)
    index++
  }
  return result
}

export default mapIterate
