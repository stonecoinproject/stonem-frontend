# StoneM Front-end

This is the base for the StoneM client. It comes configured with the following tools:

- React
- Redux for state management
- Hot-reloading for React & Redux
- React-Router 4
- Rebass/Styled Components CSS-in-JS modules.
- TypeScript
- Babel with preset-env, so you can transpile the featurs you need to support your desired browsers
- Webpack for building
- TSLint with Airbnb config.
- Jest with configuration to support the environment, i.e. TypeScript and Babel, CSS modules and webpack-file-loader.

### Getting Started.

Looking to contribute code? You may [fork this repository](https://github.com/stonecoinproject/stonem-frontend.git) and create a topical branch. If you are looking to add a feature that checks the health of masternodes, you may run `git checkout -b feature/check-masternodes-health` to create a topical branch for a new feature.

If you're trying to author a fix for a bug, you may run `git checkout -b fix/modal-popup-bug` to create a topical fix branch for a modal popup bug.

Setting up.

## NPM / Yarn scripts

The following scripts are provided to build, lint, etc:

- `clean` removes the build directory
- `build:dev` builds your site for use in a development environment and outputs it to `dist`
- `build:prod` builds your site for deployment to a production environment
- `dev-server` starts the server for hot reloading
- `tslint` runs TSLint with the configured settings
- `test` runs all your tests with coverage.

## Linting

We work with TSLint and a mostly unmodified preset for the [Airbnb style guide](https://github.com/airbnb/javascript/).
It is one of the most widely used styleguides by the JS community and offers pretty strict linting too!

## Testing

Tests are written with Jest and picked up anywhere in the `src` directory if they include `.test` or `.spec` (e.g. `Home.spec.tsx`).

### Typescript

Typescript prerequisites go here.

## Contributing

All further information is only relevant if you wish to contribute to this repository.
At this time there are no set guidelines for contributing.
If you want to add or change something, please [open an issue](https://github.com/stonecoinproject/stonem-frontend/issues) to discuss it and send a pull request.
All additions should follow the guidelines for the purpose of this project outlined above.
