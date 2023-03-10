# Product Card Monorepo

This is a monorepo that contains multiple packages for building product card components.

## Architecture

The monorepo is organized using **pnpm workspaces**. Each package is contained within its own folder in the packages directory. The packages are:

- `button`: A reusable component for displaying a button.
- `product-card`: A reusable component for displaying a product card with product information.
- `scroll-to-top`: A reusable component for displaying a button that, when clicked, scrolls the page to the top.
- `expander`: A reusable component for displaying a text that can be expanded to show the full content.

Each package has its own `package.json` file and can be developed and built independently of the other packages.

## Scripts

The following scripts are available to use within this monorepo:

- `dev`: Starts the development server for each package that has one.
- `build`: Builds all packages.
  prepare: Runs before build, test, or publish. Runs pnpm install in each package.
- `changeset`: Runs the changesets CLI.
- `release`: Publishes the updated packages to the npm registry.
- `version`: Updates the version of the packages in the monorepo.

## Publishing

This monorepo uses the changesets action to automatically create and manage version bumps for packages that have changed. Once changesets have been created and committed, the GitHub Action will publish the updated packages to the npm registry.

To publish a new version of a package:

1. Make changes to the package code.
1. Run pnpm run changeset to create a new changeset for the package.
1. Push the changes to the remote branch.
1. The GitHub Action will automatically publish the updated package to the npm registry.

## Conclusion

This monorepo provides a convenient way to develop, test, and publish multiple related packages within a single repository. The use of pnpm workspaces and the changesets action make it easy to manage dependencies and versioning across the different packages.
