import React from 'react';
import ButtonLinks from './ButtonLinks';

import styles from './Features.module.css';
import Npx from './Npx';

const FeatureList = [
  {
    title: 'Real-time notifications',
    description: 'Be notified instantly when someone likes or comments on your post, follows you, messages you, etc.',
    icon: 'real-time-notifications.svg',
  },
  {
    title: 'Email notifications',
    description: 'Receive an email every time someone interacts with your profile or posts.',
    icon: 'email-notifications.svg',
  },
  {
    title: 'Messenger',
    description: 'Have a private conversation with other members via an instant messaging system.',
    icon: 'messenger.svg',
  },
  {
    title: 'Channels',
    description: 'Create channels to focus your users on specific subjects.',
    icon: 'channels.svg',
  },
  {
    title: 'Newsfeed and Following',
    description: 'See the fresh posts of the members that you are following in your Newsfeed.',
    icon: 'newsfeed.svg',
  },
  {
    title: 'User presence system',
    description: 'See instantly when members become online or leave the app.',
    icon: 'user-presence.svg',
  },
  {
    title: 'Responsive',
    description: 'Great user experience on every device and screen.',
    icon: 'responsive.svg',
  },
  {
    title: 'SEO-friendly',
    description: 'Built-in SEO best practices such as meta tags and page loading performance.',
    icon: 'seo.svg',
  },
  {
    title: '100% open source',
    description: 'Integrate Orca into your site with complete confidence.',
    icon: 'open-source.svg',
  },
  {
    title: 'Branding',
    description: 'Customize the platform to match your brand.',
    icon: 'branding.svg',
  },
  {
    title: 'UI library',
    description: 'Dozens of reusable UI components are included.',
    icon: 'ui-library.svg',
  },
  {
    title: 'Search and Explore',
    description: 'Explore and Search for new members and their posts.',
    icon: 'search.svg',
  },
];

function Feature({ title, description, icon }) {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.feature}>
        <img src={`../../static/img/${icon}`} className={styles.icon} alt={title} />
        <div className={styles.featureText}>
          <h3 className="heading">{title}</h3>
          <p className="text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="container">
      <div className={styles.container}>
        <h2 className="heading">Why Orca?</h2>
        <p className="text">Equipped with all you need to start fast and scale.</p>
      </div>
      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>

      <div className={styles.bottomContainer}>
        <h2>Ready to start?</h2>
        <ButtonLinks className={styles.buttons} />
        <Npx />
      </div>
    </div>
  );
}
