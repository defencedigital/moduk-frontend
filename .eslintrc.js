module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'eslint-comments',
    '@typescript-eslint',
    'unicorn',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    'comma-dangle': 'off',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eol-last': 'off',
    'function-paren-newline': 'off',
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
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/*.spec.ts',
        'e2e/**',
        'examples-site/**',
        'scripts/**',
        'src/test-utils.ts',
        'vitest/**',
        '.eleventy.js',
        '*.config.{cjs,js,mjs,ts,mts}',
      ],
      optionalDependencies: false,
    }],
    'import/prefer-default-export': 'off',
    indent: 'off',
    'max-len': 'off',
    'no-extra-semi': 'off',
    'object-curly-newline': 'off',
    'react/jsx-no-constructed-context-values': 'error',
    semi: ['error', 'never'],
    'semi-style': 'off',
    'unicorn/prefer-node-protocol': 'error',
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
    react: {
      version: '17.0',
    },
  },
}
