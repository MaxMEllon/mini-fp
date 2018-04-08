function mapIterate(xs, f) {
  let index = 0
  const result = []
  for (const i of xs) {
    const r = f(i, index, xs)
    result.push(r)
    index++
  }
  return result
}

export default mapIterate
