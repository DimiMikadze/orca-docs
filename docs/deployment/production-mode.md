---
sidebar_position: 1
id: production-mode
---

# Production Mode

## Building for production environment

Running the `yarn build` command from the project's root directory creates a production build for API and Frontend packages.

API build will be created in the `packages/api/build` directory and the frontend in the `packages/frontend/.next`.

Next, you can run packages separately with the `yarn start` command.

### API

```
cd packages/api
yarn start
```

Will run the API on the following URL: [http://localhost:4000](http://localhost:4000/)

### Frontend

```
cd packages/frontend
yarn start
```

Will run the Frontend on the following URL: [http://localhost:3000](http://localhost:3000/)

## PM2

[PM2](https://pm2.keymetrics.io/) is a process manager that helps to keep Node.js applications alive all the time.

To use the PM2, we need to install it globally.

```
yarn global add pm2@latest
```

Since Orca comes with a pm2 configuration file, you can run both packages by running one command from the project's root directory.

```
pm2 start pm2.config.json
```

After running the command, API will be available on the following URL: [http://localhost:4000](http://localhost:4000/) and the Frontend on the following [http://localhost:3000](http://localhost:3000/).

### PM2 Commands

PM2 provides many subcommands that allow you to manage or look up information about your applications.

List the applications currently managed by PM2:

```
pm2 list
```

Stop an application with this command (specify the PM2 App name or id):

```
pm2 stop app-name-or-id
```

Restart an application:

```
pm2 restart app-name-or-id
```

Get information about a specific application using its App name:

```
pm2 info app-name
```
