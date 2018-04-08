const assert = require('power-assert')
const { map } = require('../dist/mini-fp')

describe('map()', () => {
  describe('success', () => {
    it('Array', () => {
      const mapper = map(x => x + 1)
      assert.deepEqual(mapper([0, 1, 2]), [1, 2, 3])
    })

    it('Object', () => {
      const mapper = map((val, key) => [key, val])
      assert.deepEqual(mapper({ a: 1, b: 2, c: 3 }), [['a', 1], ['b', 2], ['c', 3]])
    })

    it('Map', () => {
      const mapper = map((val, key) => [key, val])
      const obj = { a: 1, b: 2, c: 3 }
      const props = Object.keys(obj)
      const m = new Map(mapper(obj))
      map((x, index) => {
        assert.equal(x[0], props[index])
        assert.equal(x[1], obj[props[index]])
      })(m)
    })
  })
})

