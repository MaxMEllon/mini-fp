import map from './map'

function toMap(obj) {
  const iterable = map(obj)((value, key) => [key, value])
  return new Map(iterable)
}

export default toMap
