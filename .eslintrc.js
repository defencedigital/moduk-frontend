module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'eol-last': 'off',
    semi: ['error', 'never'],
    'implicit-arrow-linebreak': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'playwright.config.ts',
        'examples-server/**',
        'src/test-utils.ts',
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/*.spec.ts',
        '**/.eslintrc.js',
        '**/vitest.config.ts',
      ],
      optionalDependencies: false,
    }],
    'import/prefer-default-export': 'off',
    indent: 'off',
    'object-curly-newline': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '.',
      },
    },
  },
}
