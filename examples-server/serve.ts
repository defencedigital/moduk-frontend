/* eslint-disable no-console */
import fastifyStatic from '@fastify/static'
import fastifyView from '@fastify/view'
import fastify from 'fastify'
import nunjucks, { Environment } from 'nunjucks'
import path from 'path'

import { addMODUKFilter, getNunjucksPaths } from '../src'
import { findExamples } from '../src/test-utils'

const server = fastify()

server.register(fastifyStatic, { root: path.join(__dirname, '..', 'dist') })

server.register(fastifyView, {
  engine: {
    nunjucks,
  },
  templates: [
    ...getNunjucksPaths(),
    path.join(__dirname, 'templates'),
  ] as unknown as string,
  options: {
    onConfigure: (env: Environment) => {
      addMODUKFilter(env)
    },
  },
})

server.get<{ Params: { component: string; example: string } }>(
  '/components/:component/:example',
  {
    handler: async (request, reply) => {
      const { component, example } = request.params

      reply.view('example.njk', {
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

server.get('/', async (request, reply) => {
  const examples = findExamples()

  reply.view('index.njk', { examples })
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
