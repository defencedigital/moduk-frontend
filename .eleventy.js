/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register({
  project: 'tsconfig.json',
})

const { createNunjucksEnvironment } = require('./src')

module.exports = (config) => {
  config.setLibrary('njk', createNunjucksEnvironment())

  config.addPassthroughCopy({ dist: '.' })

  return {
    dir: {
      data: 'data',
      input: 'examples-site',
      output: 'examples-site/dist',
    },
  }
}
