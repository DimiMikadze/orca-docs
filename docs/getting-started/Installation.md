---
sidebar_position: 1
id: installation
---

# Installation

Orca is an open-source community platform build with Typescript, Node, React, and MongoDB. It's great whether you're building a social or private network, customer engagement, or another type of community app.

## Prerequisites

You'll need to have [Node](https://nodejs.org) >=12.20.0, [Yarn](https://yarnpkg.com), and [MongoDB](https://www.mongodb.com) installed and running on your machine.

## Creating an App

```
npx create-orca-app my-app
```

This command will create a directory `my-app` inside a current folder. In that directory, it will generate an initial project and install dependencies.

Once the installation is done, you can run the app locally.

```
cd my-app
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000/) to see your app.

## Next steps

Although these steps are enough to create an Orca app and run it locally, you'll need to create an admin user, configure CDN, and an Email service to use all the Orca's features. The next Configuration section will walk you through all of it.
