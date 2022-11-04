/* eslint-disable no-console */
import fastify from 'fastify'
import * as fs from 'node:fs'
import * as nunjucks from 'nunjucks'

import { addModukFilter, getNunjucksPaths } from './src'

const server = fastify()

server.get<{ Params: { component: string; example: string } }>(
  '/components/:component/:example',
  {
    handler: async (request, reply) => {
      const { component, example } = request.params
      const templateString = await fs.promises.readFile(
        `./src/nunjucks/moduk/components/${component}/__examples__/${example}.njk`,
        'utf8',
      )
      const env = nunjucks.configure(getNunjucksPaths())
      addModukFilter(env)
      const renderedTemplate = env.renderString(templateString, {})

      reply.type('text/html')

      return `<!DOCTYPE html><html lang="en"><head><title>${example} – ${component}</title><link href="/index.css" rel="stylesheet">
</head><body><div id="root">${renderedTemplate}</div></body></html>`
    },
    schema: {
      params: {
        component: {
          type: 'string',
          pattern: '^[a-zA-Z0-9_-]+$',
        },
        examples: {
          type: 'string',
          pattern: '^[a-zA-Z0-9_-]$',
        },
      },
    },
  },
)

server.get('/index.css', async (request, reply) => {
  reply.type('text/css')
  return fs.promises.readFile('dist/index.css')
})

server.get('/', async () => 'Hello')

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
