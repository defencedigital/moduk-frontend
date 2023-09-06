# Local development

The library uses [TypeScript](https://www.typescriptlang.org),
[Sass](https://sass-lang.com), [ESLint](https://eslint.org),
[Stylelint](https://stylelint.io/), [dprint](https://dprint.dev) and
[commitlint](https://commitlint.js.org). Git hooks (via
[Husky](https://typicode.github.io/husky/) and
[lint-staged](https://github.com/okonet/lint-staged)) are used for enforcing
linting and formatting rules.

The unit test suite uses [Vitest](https://vitest.dev) and
[Testing Library](https://testing-library.com).

The end-to-end test suite uses [Playwright](https://playwright.dev/). Tests are
run across a variety of browsers and configurations against a local web server
that serves examples of components. This includes accessibility checks using
[axe](https://www.deque.com/axe/) and visual regression tests.

Local development requires Node.js 16 or 18 and npm 8 or newer.

## Setting up your development environment

1. Clone the repository via SSH:

   ```shell
   git clone git@github.com:defencedigital/moduk-frontend.git
   cd moduk-frontend
   ```

   If you haven't authenticated with GitHub, you can clone via HTTPS instead:

   ```shell
   git clone https://github.com/defencedigital/moduk-frontend.git
   cd moduk-frontend
   ```

2. Install dependencies:

   ```shell
   npm install
   ```

3. Install Playwright browsers and system dependencies:

   ```shell
   npm run playwright-install
   ```

4. Install Podman using
   [the instructions for your platform](https://podman.io/getting-started/installation).

   Podman is required only for running visual regression tests.

5. Ensure jq is installed. On macOS it can be installed using
   [Homebrew](https://brew.sh/):

   ```shell
   brew install jq
   ```

   jq is required only for running visual regression tests.

## Useful commands

### Lint all files

```shell
npm run lint
```

#### Apply fixes suggested by the linter

```shell
npm run lint:fix
```

### Reformat all files

```shell
npm run format
```

### Build the library ready for distribution

```shell
npm run build
```

### Run all unit and type tests

```shell
npm run test
```

### Start the examples site server

```shell
npm start
```

By default, the server is accessible at http://localhost:8080/.

### Run end-to-end tests

```shell
npm run test:e2e
```

This runs end-to-end tests using Playwright for all configured browser
configurations. The examples site server is started automatically, so does not
need to be started separately.

#### Run specific test files using a regex

```shell
npm run test:e2e <regex>
```

You can also use `test.only` or `test.desribe.only` within a test file to skip
other tests.

#### Run tests with tracing

```shell
npm run test:e2e:trace
```

[Playwright traces](https://playwright.dev/docs/trace-viewer-intro) record
failed tests for debugging later, or on a different machine.

You can also debug tests [using VS code](https://playwright.dev/docs/debug), or
by [using the built-in inspector debugger](https://playwright.dev/docs/debug).

### Run visual regression tests in a container

Visual regression tests run in a container, using Podman, to ensure screenshots
are taken in a consistent environment.

To run the visual regression tests:

```shell
npm run test:visual
```

This will also generate any missing screenshots.

### Update visual regression snapshots

To update any screenshots that have changed:

```shell
npm run test:visual:refresh
```

The same set of screenshots (also called snapshots) are used for both Nunjucks
and React components, to ensure they render identically. If they do not match,
the two tests will overwrite each other's snapshot. Check the rendered HTML for
any differences, particularly in relation to whitespace. You may need to use
`{' '}` or even `{' some text'}` in the React component to ensure whitespace is
preserved in the same way as the Nunjucks component.

### Delete all visual regression snapshots

To delete all existing screenshots:

```shell
npm run test:visual:clean
```

This can be useful after renaming or deleting visual regression tests or
component examples.

### Build and pack the package as a tarball

To build the package as it would be distributed, run:

```shell
npm run dist:pack
```

A .tgz file will be output in the `dist` directory. This can be manually
installed in another project by running `npm install file:<path to .tgz>` in the
other project.
