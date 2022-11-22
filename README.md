# MOD.UK Frontend

The MOD.UK Frontend contains the code you need to start building a user
interface for Ministry of Defence platforms and services.

This library is currently under development and is not yet ready for use.

The library contains a library of [Nunjucks](https://www.typescriptlang.org)
components, a CSS stylesheet and a client-side JavaScript library.

## Usage

### Importing Nunjucks configuration helpers

```typescript
import { createNunjucksEnvironment /* ... */ } from 'moduk-frontend'
```

### Importing the client-side library

If you’re using Webpack 5 or a similar bundler, the client-side library can be
imported from `moduk-frontend/client`:

```javascript
import { initAll } from 'moduk-frontend/client'

initAll()
```

In older environments, you may need to import the client-side library from
`moduk-frontend/dist/client/MODUK.umd.js`.

### Importing the CSS

#### Using Sass

Dart Sass is required.

You should ensure `node_modules` is resolvable by Sass. If using the `sass` CLI
you can pass `--load-path=node_modules` to achieve this.

```sass
@use 'moduk-frontend/src/css';
```

#### Without Sass

If you aren’t using Sass, a compiled version of the CSS can be found at
`node_modules/moduk-frontend/dist/css/index.css`.

## Development

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

### Setting up your development environment

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

### Commands

#### Lint all files

```shell
npm run lint
```

#### Reformat all files

```shell
npm run format
```

#### Build the library ready for publishing

```shell
npm run build
```

#### Run all unit tests

```shell
npm run test
```

#### Run the examples web server

```shell
npm run serve
```

#### Run end-to-end tests

```shell
npm run test:e2e
```

##### Run specific files using a regex

```shell
npm run test:e2e <regex>
```

##### Run tests with tracing

```shell
npm run test:e2e:trace
```

#### Run visual regression tests in a container

Visual regression tests run in a container, using Podman, to ensure screenshots
are taken in a consistent environment.

To run the visual regression tests:

```shell
npm run test:visual
```

This will also generate any missing screenshots.

#### Update visual regression snapshots

To update any screenshots that have changed:

```shell
npm run test:visual:refresh
```

#### Delete all visual regression snapshots

To delete all existing screenshots:

```shell
npm run test:visual:clean
```

This can be useful after renaming or deleting visual regression tests or
component examples.
