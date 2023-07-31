/* eslint-disable @typescript-eslint/no-var-requires, import/no-dynamic-require, global-require  */
const path = require('node:path')

require('@babel/register')({
  extensions: ['.tsx', '.mjs', '.ts'],
  babelrc: false,
  configFile: false,
  only: [
    /\/src\/react\//,
    /\/node_modules\/react-merge-refs\//,
  ],
  presets: [
    ['@babel/preset-env'],
    '@babel/preset-typescript',
    ['@babel/preset-react', {
      runtime: 'automatic',
    }],
  ],
  plugins: [
    'inline-react-svg',
  ],
})

require('ts-node').register({
  project: 'tsconfig.json',
  transpileOnly: true,
})

const { createElement, StrictMode } = require('react')
// See https://github.com/jsx-eslint/eslint-plugin-react/issues/3606
// eslint-disable-next-line react/no-deprecated
const { renderToString } = require('react-dom/server')
const { Root } = require('./src/react/test-utils/Root')
const { createNunjucksEnvironment } = require('./src/lib')

module.exports = (config) => {
  config.setLibrary('njk', createNunjucksEnvironment())

  config.addPassthroughCopy({ dist: '.' })

  config.addWatchTarget(path.join(__dirname, 'src/react'))
  config.addShortcode('react', ({ componentPath, exampleName, component }) => {
    /* The eslint rule import/no-dynamic-require is asking for
    * await import() however this has been difficult to get this working with ts-node
    * https://github.com/TypeStrong/ts-node/issues/1548
    */

    const moduleId = require.resolve(path.join(__dirname, 'src/react', componentPath))
    /* Delete the module cache for @moduk/frontend/react
    * when reloading to avoid SSR mismatch when making changes.
    */
    delete require.cache[moduleId]
    delete require.cache[require.resolve('@moduk/frontend/react')]

    const { Example } = require(path.join(__dirname, 'src/react', componentPath))
    return renderToString(
      createElement(StrictMode, null, createElement(Root, { exampleName, component }, createElement(Example))),
    )
  })

  return {
    dir: {
      data: 'data',
      input: 'examples-site',
      output: 'examples-site/dist',
    },
  }
}
