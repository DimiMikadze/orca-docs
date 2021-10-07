import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/Features';
import ButtonLink from '../components/ButtonLink';
import Npx from '../components/Npx';

function HomePageWelcome() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={clsx('hero__title heading ', styles.title)}>{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle text', styles.subtitle)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <ButtonLink isInternalLink href="/docs/getting-started/installation" bgColor="primary" color="secondary">
              Get started
            </ButtonLink>
            {'\u00A0'}
            {'\u00A0'}
            {'\u00A0'}
            {'\u00A0'}
            <ButtonLink leftRadius href="https://community.getorca.org" bgColor="secondary" color="primary">
              Try demo
            </ButtonLink>
          </div>
          <Npx />
        </div>
      </header>
      <div className={styles.screenshot}>
        <img
          src="https://res.cloudinary.com/dkkf9iqnd/image/upload/v1633071697/community/Home_Page.png"
          alt="Orca Home Page"
        />
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout className={styles.homePage} title={siteConfig.title} description={siteConfig.description}>
      <div className={styles.container}>
        <div className={styles.topLeftOverlay}></div>
        <div className={styles.topRightOverlay}></div>
        <HomePageWelcome />
        <div className={styles.homePageFeatures}>
          <HomepageFeatures />
          <div className={styles.bottomLeftOverlay}>d</div>
          <div className={styles.bottomRightOverlay}>a</div>
        </div>
      </div>
    </Layout>
  );
}
