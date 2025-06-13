#!/usr/bin/env ts-node

import { copyFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

// Unfortunately, Node.js returns an ERR_PACKAGE_PATH_NOT_EXPORTED error when doing
// require.resolve('govuk-frontend/govuk/'), so we have to resolve the main import instead
const GOVUK_PATH = require.resolve('govuk-frontend')
const TARGET_DIR = join(__dirname, '..', 'dist', 'assets', 'images')
const FILES_TO_COPY = [
  'favicon.ico',
  'favicon.svg',
  'govuk-icon-180.png',
  'govuk-icon-192.png',
  'govuk-icon-512.png',
  'govuk-icon-mask.svg',
  'govuk-opengraph-image.png',
]

mkdirSync(TARGET_DIR, { recursive: true })

FILES_TO_COPY.forEach((file) => {
  copyFileSync(join(GOVUK_PATH, '..', 'assets', 'images', file), join(TARGET_DIR, file))
})
