const assert = require('power-assert')
const { map } = require('../dist/mini-fp')

describe('map()', () => {
  describe('success', () => {
    it('Array', () => {
      const mapper = map(x => x + 1)
      assert.deepEqual(mapper([0, 1, 2]), [1, 2, 3])
    })

    it('Set', () => {
      const mapper = map(x => x + 1)
      assert.deepEqual(mapper(new Set([1, 2, 3])), [2, 3, 4])
    })

    it('String', () => {
      const mapper = map(x => x)
      assert.deepEqual(mapper('abc'), ['a', 'b', 'c'])
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

  describe('failure', () => {
    it('null', () => {
      const mapper = map(x => x)
      assert.throws(() => mapper(null), TypeError)
    })

    it('undefined', () => {
      const mapper = map(x => x)
      assert.throws(() => mapper(void 0), TypeError)
    })

    it('Number', () => {
      const mapper = map(x => x)
      assert.throws(() => mapper(1), TypeError)
    })

    it('Symbol', () => {
      const mapper = map(x => x)
      assert.throws(() => mapper(new Symbol('test')), TypeError)
    })
  })
})

