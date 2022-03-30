# Orca Docs

This repo contains the source code and documentation powering [Orca Docs](https://dimimikadze.github.io/orca-docs/)

If you are looking for the Orca code, please see the [Orca Monorepo](https://github.com/dimimikadze/orca). This Repo is only for landing page and documentation.

## Prerequisites

1. Git
2. Node: any 12.x version starting with v12.0.0 or greater
3. Yarn: See [Yarn website for installation instructions](https://classic.yarnpkg.com/en/docs/install)
4. A fork of the repo (for any contributions)
5. A clone of the [Orca Docs](https://github.com/dimimikadze/orca-docs) repo on your local machine

## Installation

1. cd `orca-docs` to go into the project root
2. `yarn` to install the website's npm dependencies

## Running locally

1. `yarn start` to start the hot-reloading development server (powered by [Docusaurus](https://docusaurus.io))
2. open `http://localhost:3000` to open the site in your favorite browser

## Contributing

1. `git checkout main` from any folder in your local `orca-docs` repository
2. `git pull origin main` to ensure you have the latest main code
3. `git checkout -b the-name-of-my-branch` (replacing `the-name-of-my-branch` with a suitable name) to create a branch

## Push it

1. `git add -A && git commit -m "My message"` (replacing `My message` with a commit message, such as `Fix a typo in `) to stage and commit your changes
2. `git push my-fork-name the-name-of-my-branch`
3. Go to the [Orca Docs](https://github.com/dimimikadze/orca-docs) repo and you should see recently pushed branches.
4. Follow GitHub's instructions.

## License

[MIT](./LICENSE).
