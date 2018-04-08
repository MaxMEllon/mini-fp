function mapEnumerable(xs, f) {
  let index = 0
  const props = Object.keys(xs)
  const result = new Array(props.length)
  while (index < length) {
    const key = props[index]
    result[index] = f(xs[key], key, xs)
    index++
  }
  return result
}

export default mapEnumerable
