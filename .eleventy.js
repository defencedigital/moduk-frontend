/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register({
  project: 'tsconfig.json',
})

const path = require('node:path')
const { createElement, StrictMode } = require('react')
const { renderToString } = require('react-dom/server')

const { createNunjucksEnvironment } = require('./src')

module.exports = (config) => {
  config.setLibrary('njk', createNunjucksEnvironment())

  config.addPassthroughCopy({ dist: '.' })

  config.addWatchTarget(path.join(__dirname, 'src/react'))
  config.addShortcode('react', async (componentPath) => {
    /* The eslint rule import/no-dynamic-require is asking for
    * await import() however this has been difficult to get this working the ts-node
    * https://github.com/TypeStrong/ts-node/issues/1548
    */
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const component = require(path.join(__dirname, 'src/react', componentPath)).default
    return renderToString(
      createElement(StrictMode, {
        children: createElement(component),
      }),
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
