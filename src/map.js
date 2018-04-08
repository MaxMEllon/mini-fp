import mapIterate from './internal/_mapIterate'
import mapEnumerable from './internal/_mapEnumerable'

function map(f) {
  return function(xs) {
    return typeof xs[Symbol.iterator] == 'function'
      ? mapIterate(xs, f)
      : mapEnumerable(xs, f)
  }
}

export default map
