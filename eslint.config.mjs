import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint, { configs, parser, plugin } from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      '**/dist/',
      '/e2e/output/',
      '!.*',
    ],
  },
  js.configs.recommended,
  comments.recommended,
  configs.recommended,
  configs.stylistic,
  reactHooks.configs['recommended-latest'],
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    plugins: {
      '@typescript-eslint': plugin,
      react,
      reactHooks,
      eslintPluginUnicorn,
    },
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
        node: true,
      },
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      'comma-dangle': 'off',
      'eol-last': 'off',
      '@eslint-community/eslint-comments/disable-enable-pair': 'off',
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
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      'import/no-named-as-default': 'off',
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
      semi: ['off', 'never'],
      'semi-style': 'off',
      'eslintPluginUnicorn/prefer-node-protocol': 'error',
      'no-undef': 'off',
      'react-hooks/rules-of-hooks': 'off',
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
  },
)
