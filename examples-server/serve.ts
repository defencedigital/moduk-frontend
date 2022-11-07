/* eslint-disable no-console */
import fastify from 'fastify'
import * as fs from 'node:fs'
import * as nunjucks from 'nunjucks'

import { addModukFilter, getNunjucksPaths } from '../src'
import { findExamples } from '../src/test-utils'

const server = fastify()

server.get<{ Params: { component: string; example: string } }>(
  '/components/:component/:example',
  {
    handler: async (request, reply) => {
      const { component, example } = request.params
      const env = nunjucks.configure(
        [
          ...getNunjucksPaths(),
          `${__dirname}/templates`,
        ],
      )
      addModukFilter(env)

      reply.type('text/html; charset=utf-8')

      return env.render('example.njk', {
        component,
        example,
        template: `moduk/components/${component}/__examples__/${example}.njk`,
      })
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

server.get('/', async (request, reply) => {
  reply.type('text/html; charset=utf-8')

  const examples = findExamples()
  return nunjucks.render(
    `${__dirname}/templates/index.njk`,
    { examples },
  )
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
