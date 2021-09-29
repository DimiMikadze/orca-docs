---
sidebar_position: 2
id: deployment
---

# Deployment

Orca gives you many possible deployment options for your project. It can be deployed on hosting servers such as AWS, Google Cloud, Digital Ocean, and others.

When thinking about deployment, you need to keep in mind that the Orca app consists of three core services:

- MongoDB Database.
- API, Express server.
- Frontend, Next.js application.

API and Frontend services can be deployed to any hosting provider that supports Node.js.

## Configuration

Since services can run on different servers, domains, or ports after the deployment, you need to edit the configuration files so they can point to each other.

### API Configuration

For the API service, you need to edit the following environment variables in its `.env` file.

```bash title="packages/orca-api/.env"
API_PORT=4000
API_URL=https://api.getorca.org
NODE_ENV=production

FRONTEND_URL=http://localhost:3000

MONGO_URL=mongodb://username:password@localhost:27017/orca?authSource=admin
```

- `API_PORT` A Port that is used by the API server. The `PORT` env variable can override it since some hosting providers set the `PORT` env variable by default.
- `API_URL` URL of the API. For example, the [demo](https://community.getorca.org/) app's API service runs on the `https://api.getorca.org` URL.
- `NODE_ENV` Tell the app that it runs on the production environment.
- `FRONTEND_URL` URL of the frontend app. For example, the [demo](https://community.getorca.org/) app's frontend runs on the `https://community.getorca.org` URL.
- `MONGO_URL` MongoDB Connection String URI format. Containing username, password, port, and the name of the database.

### Frontend Configuration

For the Frontend service, you just need to edit the `API_PRODUCTION_URL` variable in the `packages/frontend/utils/config.ts` before building the app.

```typescript title="packages/frontend/utils/config.ts"
const API_PRODUCTION_URL = 'https://api.getorca.org';
const API_DEV_URL = 'http://localhost:4000';
```

## Deployment using PaaS

Probably, the easiest way to deploy an Orca app is to use PaaS (Platform as a service) provider since it does not require DevOps skills, and the webserver is already configured for you.

- For the API service, you can use [Heroku](https://www.heroku.com/), [Google App Engine](https://cloud.google.com/appengine), [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform/), or any other provider that supports Node.js.
- For the Frontend service, you can use [Vercel](https://vercel.com/) as it is a Next.js application.
- For MongoDB, you can use [MongoDB Atlass](https://www.mongodb.com/cloud/atlas) database as a service.

Most of the providers offer free plans. That is OK for testing purposes and MVPs. Although, for more serious business-focused apps, the performance and limitations of free plans won't be enough for you.

PaaS providers cost more than IaaS (Infrastructure as a service) providers, as it adds more value by removing the server configuration and management. Still, it might be cost-effective for you if you don't have DevOps skills and/or you simply want to focus only on app development.

## Deployment using IaaS

You can deploy an Orca app on any Iaas Provider: AWS, Google Cloud, Microsoft Azure, Digital Ocean, and many more. However, you'll need basic DevOps skills to configure and manage the server.

For instance, The [demo](https://community.getorca.org/) app is deployed on a single Digital Ocean droplet. The droplet contains and runs all the services: MongoDB database, API, and frontend.
