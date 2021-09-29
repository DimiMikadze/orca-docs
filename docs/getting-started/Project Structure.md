---
sidebar_position: 3
id: project-structure
---

# Project Structure

The Orca app is a monorepo using [Lerna](https://lerna.js.org/) and Yarn [Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

In this section, we'll describe the files and folders the newly created app contains.

```text
my-app
├── .prettierrc
├── lerna.json
├── package.json
├── pm2.config.js
└── packages
    └── orca-api
    |   ├── .env
    |   ├── .eslintrc
    |   ├── createSuperAdmin.js
    |   ├── package.json
    |   ├── tsconfig.json
    |   └── src
    |       └── constants
    |       ├── controllers
    |       ├── db
    |       ├── models
    |       ├── utils
    |       ├── authentication.ts
    |       ├── index.ts
    |       ├── routes.ts
    |       └── socket.ts
    └── orca-frontend
        ├── components
        ├── constants
        ├── pages
        ├── public
        ├── store
        ├── utils
        ├── .eslintrc.json
        ├── package.json
        ├── theme.ts
        └──  tsconfig.json
```

- `.husky` A hook for checking Typescript and ESLint errors before committing to Git.
- `.prettierrc` Prettier configuration file. [Prettier](https://prettier.io/) ensures that the code is formatted in a consistent style across the app.
- `lerna.json` Lerna configuration file. [Lerna](https://lerna.js.org/) is used for managing multiple packages.
- `package.json` The root package.json file containing the root development dependencies and scripts for running multiple packages.
- `pm2.config.js` [PM2](https://pm2.keymetrics.io/) configuration file. PM2 is a process manager for Node.js, and we use it for running the app in production mode.
  - `packages` A folder containing API and Front-end packages.
    - `api` An [Express](https://expressjs.com/) web server exposing Rest API endpoints.
      - `.env` Environmental variable definitions for the API package.
      - `.eslintrc` ESLint configuration file for the API package.
      - `createSuperAdmin.js` A helper file for creating super admin users through the command line.
      - `package.json` API's package.json file, containing all the required dependencies and the NPM scripts.
      - `tsconfig.json` Typescript configuration file for the API.
      - `src` A folder containing all the Typescript application code that transpile to Javascript for the production environment.
        - `constants` Shared constant variables for the API package.
        - `controllers` A folder containing all the API controllers.
        - `db` A folder containing all the functions for interacting with the MongoDB database.
        - `models` Definitions of the [Mongoose](https://mongoosejs.com/) Schema and Models.
        - `utils` Different types of utility functions for the API.
        - `authentication.ts` A file containing [Passport](http://www.passportjs.org/) middlewares for authentication and authorization.
        - `index.ts` Configuration file for the Express framework.
        - `routes` Configuration for all the API endpoints.
        - `socket.ts` [Socket.io](https://socket.io/) server configuration with its listeners and events.
    - `frontend` A [Next.js](https://nextjs.org/) React application.
      - `components` React components containing UI library.
      - `constants` Shared constant variables for the Front-end package.
      - `pages` React components associated with specific routes.
      - `public` A folder for hosting static files.
      - `store` [Redux](https://redux.js.org/) store implementation using [Duck](https://github.com/erikras/ducks-modular-redux) pattern.
      - `utils` Different types of utility functions for the Front-end.
      - `.eslintrc.json` ESLint configuration file for the Front-end package.
      - `package.json` Front-end's package.json file, containing all the required dependencies and the NPM scripts.
      - `theme.ts` A file containing all the design tokens for constructing consistent UI across the app.
      - `tsconfig.json` Typescript configuration file for the Front-end.
