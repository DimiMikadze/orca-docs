---
sidebar_position: 2
id: configuration
---

# Configuration

In this section, we'll create an admin user that has privileges for managing community channels, community branding, users, and more.

Plus, integrating [Cloudinary](https://cloudinary.com) CDN for hosting images, [Mailgun](https://www.mailgun.com) for sending emails, and configuring [Google Analytics](https://analytics.google.com) for tracking key metrics.

## Creating a Super Admin user

You can create a super admin user by running the following command from the root of the project.

```
yarn create-super-admin your@email.com
```

Replace your@email.com with your real email address because, on that address, you'll receive notifications when someone follows you, sends you a message, etc.

By default, the newly created user's password is `orcaorca`. So you can log in to the app by providing the email address you've used for creating an admin user and password `orcaorca`.

:::info
After login in, you can change the profile information and the password from the setting's account page.
:::

## CDN Integration

All user-uploaded files: profile and cover pictures, post images, and community logo are uploaded to [Cloudinary](https://cloudinary.com) CDN for faster content delivery.

:::info
Cloudinary does not require credit card information and provides a reasonably good free plan.
:::

After creating an account on Cloudinary, grab the **Cloud name**, **API Key**, and **API Secret** from its dashboard and fill in the corresponding environment variables in the `packages/orca-api/.env` file.

```bash title="packages/orca-api/.env"
CLOUDINARY_CLOUD_NAME=Your Cloud Name Here
CLOUDINARY_API_KEY=Your API Key Here
CLOUDINARY_SECRET=Your API Secret Here
```

After saving the file, restart the server, and you'll be able to upload the files to the CDN.

## Email Service Integration

For sending Account verification, Password recovery, and Notification emails, we use [Mailgun](https://www.mailgun.com).

:::info
Mailgun also provides a reasonably good free plan. If you create an account with credit card information, you get 5,000 free emails per month for 3 months. However, if you create an account without a credit card, you'll be restricted to sending to only authorized recipients.
:::

After creating an account on Mailgun, you can use the default sandbox domain name or add your custom one. When done with domain configuration, grab the **domain** name from its dashboard and **Private API key** from the settings page and fill in the corresponding environment variables in the `packages/orca-api/.env` file.

```bash title="packages/orca-api/.env"
MAILGUN_API_KEY=Your Private API Key Here
MAILGUN_DOMAIN=Your Domain Name Here
```

Don't forget to restart the server after updating the `.env` file.

## Google Analytics

Google Analytics is already configured in Orca. You just need to update the `GOOGLE_ANALYTICS_ID` in the Frontend's config file.

```typescript title="packages/orca-frontend/utils/config.ts"
GOOGLE_ANALYTICS_ID: 'YOUR TRACKING OR MEASUREMENT ID IN HERE',
```
