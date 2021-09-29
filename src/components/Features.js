import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineCrown,
  AiOutlineGithub,
  AiOutlineFileSearch,
  AiOutlineMobile,
  AiOutlineMessage,
  AiOutlineUserAdd,
  AiOutlineRocket,
  AiOutlineMail,
  AiOutlineVideoCamera,
  AiOutlinePicCenter,
} from 'react-icons/ai';

import styles from './Features.module.css';
import Npx from './Npx';

const FeatureList = [
  {
    title: 'Real-time notifications',
    description: 'Be notified instantly when someone likes or comments on your post, follows you, messages you, etc.',
    icon: <AiOutlineRocket />,
  },
  {
    title: 'Email notifications',
    description: 'Receive an email every time someone follows you, messages you, likes your post, etc.',
    icon: <AiOutlineMail />,
  },
  {
    title: 'Messenger',
    description: 'Have a private conversation with other members via an instant messaging system.',
    icon: <AiOutlineMessage />,
  },
  {
    title: 'Channels',
    description: 'Create channels to focus your users on specific subjects.',
    icon: <AiOutlineVideoCamera />,
  },
  {
    title: 'Newsfeed and a Follow system',
    description: 'See the fresh posts of the members that you are following in your Newsfeed.',
    icon: <AiOutlinePicCenter />,
  },
  {
    title: 'User presence system',
    description: 'See instantly when members become online or leave the app.',
    icon: <AiOutlineUserAdd />,
  },
  {
    title: 'Responsive',
    description: 'Great user experience on every device and screen.',
    icon: <AiOutlineMobile />,
  },
  {
    title: 'SEO-friendly',
    description: 'Built-in SEO best practices such as meta tags and pages loading performance.',
    icon: <AiOutlineFileSearch />,
  },
  {
    title: '100% open source',
    description: 'Integrate Orca into your site with complete confidence.',
    icon: <AiOutlineGithub />,
  },
  {
    title: 'Branding',
    description: 'Customize the platform to match your brand.',
    icon: <AiOutlineCrown />,
  },
  {
    title: 'UI library',
    description: 'Dozens of reusable UI components are included.',
    icon: <AiOutlineHome />,
  },
  {
    title: 'Search and Explore',
    description: 'Explore and Search for new members and their posts.',
    icon: <AiOutlineSearch />,
  },
];

function Feature({ title, description, icon }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.featureContainer}>
        <div className={styles.featureTitle}>
          {icon}
          <h3 className="heading">{title}</h3>
        </div>
        <p className="text">{description}</p>
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
      <section className={styles.features}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>

      <div className={styles.bottomContainer}>
        <h2>Ready to start?</h2>

        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/getting-started/installation">
            Get started
          </Link>
          {'\u00A0'}
          {'\u00A0'}
          {'\u00A0'}
          {'\u00A0'}
          <Link className="button button--secondary button--lg" href="https://community.getorca.org">
            Try demo
          </Link>
        </div>
        <Npx />
      </div>
    </div>
  );
}
