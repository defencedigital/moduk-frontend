// @vitest-environment node

import { globSync } from 'glob'
import { join } from 'node:path'
import sassTrue from 'sass-true'
import { describe, it } from 'vitest'

globSync(join(__dirname, '**/*.test.scss'), { windowsPathsNoEscape: true }).forEach((filePath) => {
  sassTrue.runSass(
    { describe, it },
    filePath,
    {
      loadPaths: ['node_modules'],
      quietDeps: true,
    },
  )
})
