/* eslint-disable @typescript-eslint/no-var-requires */
const { findExamples } = require('../../src/test-utils')

const examples = findExamples('react', '.tsx')

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
