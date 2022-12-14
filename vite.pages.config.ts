import { keyBy, mapValues } from 'lodash'
import fs from 'node:fs/promises'
import path from 'node:path'
import { defineConfig, PluginOption } from 'vite'

import { createNunjucksEnvironment } from './src'
import { findExamples } from './src/test-utils'

const examples = findExamples()

const env = createNunjucksEnvironment([path.join(__dirname, 'examples-server', 'templates')])

type Page = {
  permalink: string
  template: string
  context: object
}

const generateHtmlPlugin = (context: Page[]): PluginOption => {
  const pages = keyBy(context, (page) => page.permalink)
  return {
    name: 'generate:mod-preview',
    config() {
      return {
        build: {
          rollupOptions: {
            input: mapValues(pages, (page) => page.permalink),
            onwarn: (warning, defaultHandler) => {
              if (warning.message.match('Generated an empty chunk:')) return
              defaultHandler(warning)
            },
          },
        },
      }
    },
    resolveId(id) {
      if (pages[id]) {
        return id
      }
      return null
    },
    load(id) {
      if (pages[id]) {
        return 'noop'
      }
      return null
    },
    transform(_code, id) {
      if (pages[id]) {
        return env.render(pages[id].template, pages[id].context)
      }
      return null
    },
  }
}

/* Ignoring for not because we need to change the tsconfig target to ise flatMap */
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-ignore
const examplePages = examples.flatMap(([componentName, exampleNames]: [string, string[]]) => (
  exampleNames.map((exampleName) => ({
    permalink: `components/${componentName}/${exampleName}/index.html`,
    template: 'example.njk',
    context: { template: `moduk/components/${componentName}/__examples__/${exampleName}.njk` },
  }))
))

export default defineConfig({
  build: {
    outDir: './_site',
    rollupOptions: {
      input: '',
    },
  },
  publicDir: './dist/',
  plugins: [
    generateHtmlPlugin([
      {
        permalink: 'index.html',
        template: 'index.njk',
        context: { examples },
      },
      ...examplePages,
    ]),
    {
      name: 'remove:lib',
      async closeBundle() {
        // Remove the lib folder from the public dir

        return fs.rm(path.resolve(__dirname, '_site', 'lib'), { recursive: true })
      },
    },
  ],
})
