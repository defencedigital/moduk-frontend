/* eslint-disable @typescript-eslint/no-require-imports */
const { findReactExamples } = require('../../src/test-utils')

const examples = findReactExamples()

module.exports = {
  grouped: examples,
  flat: examples.flatMap(([component, exampleNames]) =>
    exampleNames.map((exampleName) => (
      {
        component,
        exampleName,
        componentPath: `/${component}/__examples__/${exampleName}.tsx`,
      }
    ))
  ),
}
