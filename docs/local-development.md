# Local development

The library uses [TypeScript](https://www.typescriptlang.org),
[Sass](https://sass-lang.com), [ESLint](https://eslint.org),
[dprint](https://dprint.dev) and [commitlint](https://commitlint.js.org). Git
hooks are used for enforcing linting and formatting rules.

The unit test suite uses [Vitest](https://vitest.dev) and
[Testing Library](https://testing-library.com).

The end-to-end test suite uses [Playwright](https://playwright.dev/). Tests are
run across a variety of browsers and configurations against a local web server
that serves examples of components. This includes accessibility checks using
[axe](https://www.deque.com/axe/) and visual regression tests.

Local development requires Node.js 16 or 18 and npm 8.

## Setting up your development environment

1. Clone the repository:

   ```shell
   git clone https://github.com/defencedigital/moduk-frontend
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

   jq is required only for running visual regression tests.

   ```shell
   brew install jq
   ```

## Useful commands

### Lint all files

```shell
npm run lint
```

### Reformat all files

```shell
npm run format
```

### Build the library ready for publishing

```shell
npm run build
```

### Run all unit tests

```shell
npm run test
```

### Run the examples web server

```shell
npm run serve
```

### Run end-to-end tests

```shell
npm run test:e2e
```

#### Run specific files using a regex

```shell
npm run test:e2e <regex>
```

#### Run tests with tracing

```shell
npm run test:e2e:trace
```

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
