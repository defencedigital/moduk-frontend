# MOD.UK Frontend

The MOD.UK Frontend contains the code you need to start building a user
interface for Ministry of Defence platforms and services.

This library is currently under development and is not yet ready for use.

The library contains a library of [Nunjucks](https://www.typescriptlang.org)
components, a CSS stylesheet and a client-side JavaScript library.

## Development

The library uses [TypeScript](https://www.typescriptlang.org),
[Sass](https://sass-lang.com), [ESLint](https://eslint.org),
[dprint](https://dprint.dev) and [commitlint](https://commitlint.js.org). Git
hooks are used for enforcing linting and formatting rules.

The unit test suite uses [Vitest](https://vitest.dev) and
[Testing Library](https://testing-library.com).

### Commands

#### Lint all files

```shell
npm run lint
```

#### Reformat all files

```shell
npm run format
```

#### Run all unit tests

```shell
npm run test
```
