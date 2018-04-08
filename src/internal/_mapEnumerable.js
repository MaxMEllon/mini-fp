function mapEnumerable(xs, f) {
  let index = 0
  const props = Object.keys(xs)
  const result = new Array(props.length)
  while (index < length) {
    result[index] = f(xs[props[index]], props[index], xs)
    index++
  }
  return result
}

export default mapEnumerable
