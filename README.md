# craftilyui

A monorepo project for UI components.

## Monorepo Structure

This project is a monorepo that includes the following packages:

*   `packages/craftily-image`: Core image manipulation utilities.
*   `packages/craftily-react`: React components.
*   `packages/craftily-ui`: Core UI components and styles.
*   `packages/craftily-vue`: Vue components.
*   `packages/playground`: A space for testing and examples, including:
    *   `react-storybook`: Storybook for React components.
    *   `vue-storybook`: Storybook for Vue components.

## Getting Started

### Prerequisites

*   Node.js (version specified in `.nvmrc` or latest LTS)
*   npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/prlama55/craftily.git
    cd craftilyui
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Available Scripts

You can run the following scripts from the root of the project:

*   `npm run build:core`: Builds the `@craftily/ui` package.
*   `npm run build:image`: Builds the `@craftily/image` package.
*   `npm run build:react`: Builds packages required for React components.
*   `npm run build:vue`: Builds packages required for Vue components.
*   `npm run build:all`: Builds all packages.
*   `npm run react:storybook`: Builds React packages and starts Storybook for React.
*   `npm run vue:storybook`: Builds Vue packages and starts Storybook for Vue.
*   `npm run storybook`: Builds all packages and starts Storybook for both React and Vue.
*   `npm run build-storybook`: Builds all packages and builds Storybook for both React and Vue.
*   `npm run lint`: Lints the codebase.
*   `npm run lint:fix`: Lints the codebase and fixes auto-fixable issues.
*   `npm run format`: Formats the codebase using Prettier.
*   `npm run format:check`: Checks formatting using Prettier.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a pull request.

Please make sure to update tests as appropriate.

## License

This project is licensed under the ISC License.
