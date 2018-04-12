const assert = require('power-assert')
const { map } = require('../dist/mini-fp')

describe('map() function', () => {
  describe('success cases', () => {
    it('expected [1, 2, 3] when apply to Array like a [0, 1, 2] and x => x + 1 as function', () => {
      const mapper = map(x => x + 1)
      assert.deepEqual(mapper([0, 1, 2]), [1, 2, 3])
    })

    it('expected [2, 3, 4] when apply to Set{1, 2, 3} and x => x + 1 as function', () => {
      const mapper = map(x => x + 1)
      assert.deepEqual(mapper(new Set([1, 2, 3])), [2, 3, 4])
    })

    it('expected ["a", "b", "c"] when apply to like a "abc" and x => x  as function', () => {
      const mapper = map(x => x)
      assert.deepEqual(mapper('abc'), ['a', 'b', 'c'])
    })

    it('expected [["a", 1], ["b", 2]] when apply to like a { a: 1, b: 2 } and (k, y) => [k, v]  as function', () => {
      const mapper = map((val, key) => [key, val])
      assert.deepEqual(mapper({ a: 1, b: 2 }), [['a', 1], ['b', 2]])
    })

  describe('failure cases', () => {
    it('expected thrown TypeError apply to null', () => {
      const mapper = map(x => x)
      assert.throws(() => mapper(null), TypeError)
    })

    it('expected thrown TypeError apply to undefined', () => {
      const mapper = map(x => x)
      assert.throws(() => mapper(void 0), TypeError)
    })

    it('expected thrown TypeError apply to Number', () => {
      const mapper = map(x => x)
      assert.throws(() => mapper(1), TypeError)
    })

    it('expected thrown TypeError apply to Symbol', () => {
      const mapper = map(x => x)
      assert.throws(() => mapper(new Symbol('test')), TypeError)
    })
  })
})

