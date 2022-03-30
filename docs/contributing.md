---
sidebar_position: 3
id: contributing
---

# Contributing

Thank you for your interest in contributing to Orca!

Orca is an open-source project, and we appreciate every contribution made by the community, no matter what level of experience you have. We welcome all contributions, big and small.

There are many ways to contribute, including fixing bugs, improving documentation, and even fixing the typo.

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused on the scope and avoid containing unrelated commits.

Please ask first if somebody else is already working on this or the core developers think your feature is in-scope for Orca. Generally, always have a related issue with discussions for whatever you are including.

## Folder Structure

Orca is a monorepo, meaning it is divided into independent sub-packages.
These packages can be found in the packages/ directory.

```
packages/
  create-orca-app
  orca-api
  orca-frontend
```

- `create-orca-app` Node.js command-line script for orca app installation. Published as `create-orca-app` on NPM.
- `orca-api` An [Express](https://expressjs.com/) web server exposing Rest API endpoints.
- `orca-frontend` A [Next.js](https://nextjs.org/) React application.

## Development Workflow

1. Clone the repo with git clone `https://github.com/dimimikadze/orca.git`
2. Run `yarn` in the root folder to install dependencies.

### Running the app

To run the app in development mode, run `yarn dev` from the roof of the project.

```
yarn dev
```

## Reporting an issue

Before submitting an issue, you need to make sure:

- You have already searched for related issues and found none open (if you found a related closed issue, please link to it from your post).
- Your issue title is concise and on-topic.
- You can and do provide steps to reproduce your issue.
- Make sure the issue template is respected.
- Make sure your issue body is readable and well-formated.
