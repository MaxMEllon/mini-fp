import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const name = 'mini-fp'

export default {
  input: 'index.js',
  output: [{
    format: 'umd',
    name,
    file: `dist/${name}.umd.js`
  }, {
    format: 'es',
    file: `dist/${name}.es.mjs`
  }, {
    format: 'cjs',
    moduleName: name,
    file: `dist/${name}.js`
  }],
  plugins: [
    nodeResolve({
      main: true,
      jsnext: true,
      browser: true,
    }),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ]
}
