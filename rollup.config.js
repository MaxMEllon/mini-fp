import rollup from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
const name = 'mini-fp'

export default {
  entry: 'index.js',
  targets: [{
    format: 'umd',
    name,
    dest: `dist/${name}.umd.js`
  }, {
    format: 'es',
    dest: `dist/${name}.es.mjs`
  }, {
    format: 'cjs',
    moduleName: name,
    dest: `dist/${name}.js`
  }],
  plugins: [
    nodeResolve({ jsnext: true }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    })
  ]
}
