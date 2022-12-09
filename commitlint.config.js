module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^([^():]*)(?:\(([\w$.\-*/ ]*)\))?: (.*)$/,
    },
  },
  rules: {
    'subject-case': [1, 'always', 'sentence-case'],
    'body-max-line-length': [0],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'deps',
        'deps-dev',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'release',
        'revert',
        'style',
        'test',
      ],
    ],
  },
}
