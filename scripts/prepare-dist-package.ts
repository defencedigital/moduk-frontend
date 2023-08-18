#!/usr/bin/env ts-node

import shelljs from 'shelljs'

shelljs.cp(['package.json', 'LICENCE', 'README.md'], 'dist/')

// For backwards compatibility, also maintain the old directory structure at dist/dist/
shelljs.mkdir('-p', 'dist/dist/')
shelljs.cp('-r', ['dist/assets/', 'dist/client/', 'dist/css/', 'dist/lib/', 'dist/nunjucks/'], 'dist/dist/')

shelljs.mkdir('-p', 'dist/src/')
shelljs.cp(['LICENCE', 'README.md'], 'dist/')
shelljs.cp('-r', 'src/css/', 'dist/src/')
shelljs.cp('-r', 'src/react/', 'dist/src/')
shelljs.sed('-i', /dist\//g, '', 'dist/package.json')
shelljs.exec('cd dist && npm pkg delete scripts.prepack scripts.prepare scripts.prepublishOnly')
