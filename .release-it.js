// eslint-disable-next-line @typescript-eslint/no-require-imports
const commitlintConfig = require('./commitlint.config.cjs')

module.exports = {
  git: {
    commitMessage: 'release: v${version}',
    pushArgs: '--set-upstream',
    requireBranch: 'main',
    tagName: 'v${version}',
  },
  github: {
    releaseName: 'v${version}',
  },
  npm: {
    publish: false,
    publishPath: './dist/',
  },
  hooks: {
    'before:git:release': 'git switch -c release-bot/${version}',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      parserOpts: commitlintConfig.parserPreset.parserOpts,
      preset: {
        name: 'conventionalcommits',
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
  },
}
