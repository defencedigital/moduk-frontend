/* eslint-disable @typescript-eslint/no-require-imports */
const { findNunjucksExamples } = require('../../src/test-utils')

const examples = findNunjucksExamples()

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
