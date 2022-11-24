module.exports = {
  git: {
    // eslint-disable-next-line no-template-curly-in-string
    commitMessage: 'release: v${version}',
    // eslint-disable-next-line no-template-curly-in-string
    tagName: 'v${version}',
  },
  github: {
    release: true,
  },
  hooks: {
    'after:bump': 'npm run build',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'conventionalcommits',
      types: [
        {
          type: 'feat',
          section: 'Features',
        },
        {
          type: 'fix',
          section: 'Bug fixes',
        },
        {
          type: 'perf',
          section: 'Performance',
        },
        {
          type: 'revert',
          section: 'Reversions',
        },
        {
          type: 'deps',
          section: 'Dependencies',
        },
        {
          type: 'build',
          section: 'Internal changes',
        },
        {
          type: 'chore',
          section: 'Internal changes',
        },
        {
          type: 'deps-dev',
          section: 'Internal changes',
        },
        {
          type: 'style',
          section: 'Internal changes',
        },
        {
          type: 'refactor',
          section: 'Internal changes',
        },
        {
          type: 'docs',
          section: 'Documentation',
          hidden: 'true',
        },
        {
          type: 'release',
          section: 'Releases',
          hidden: 'true',
        },
        {
          type: 'test',
          section: 'Testing',
          hidden: 'true',
        },
        {
          type: 'ci',
          section: 'Continuous integration',
          hidden: 'true',
        },
      ],
    },
  },
}
