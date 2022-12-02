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
    'unicorn',
  ],
  rules: {
    'comma-dangle': 'off',
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
        'e2e/**',
        'examples-server/**',
        '*.config.{cjs,js,mjs,ts,mts}',
        'vitest/**',
        'src/test-utils.ts',
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/*.spec.ts',
      ],
      optionalDependencies: false,
    }],
    'import/prefer-default-export': 'off',
    indent: 'off',
    'max-len': 'off',
    'object-curly-newline': 'off',
    semi: ['error', 'never'],
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
  },
}
