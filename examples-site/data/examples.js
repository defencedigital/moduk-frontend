/* eslint-disable @typescript-eslint/no-var-requires */
const { findExamples } = require('../../src/test-utils')

const examples = findExamples()

module.exports = {
  grouped: examples,
  flat: examples.flatMap(([component, exampleNames]) =>
    exampleNames.map((exampleName) => (
      {
        component,
        exampleName,
        template: `moduk/components/${component}/__examples__/${exampleName}.njk`,
      }
    ))
  ),
}
