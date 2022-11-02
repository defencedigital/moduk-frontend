module.exports = {
  extends: ['@commitlint/config-conventional'],
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
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
}
