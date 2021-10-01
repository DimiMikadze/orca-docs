import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/Features';
import Npx from '../components/Npx';

function HomePageWelcome() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <header className={styles.heroBanner}>
        <div className='container'>
          <h1 className={clsx('hero__title heading ', styles.title)}>{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle text', styles.subtitle)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className='button button--primary button--lg' to='/docs/getting-started/installation'>
              Get started
            </Link>
            {'\u00A0'}
            {'\u00A0'}
            {'\u00A0'}
            {'\u00A0'}
            <Link className='button button--secondary button--lg' href='https://community.getorca.org'>
              Try demo
            </Link>
          </div>
          <Npx />
        </div>
      </header>
      <div className={styles.screenshot}>
        <img
          src='https://res.cloudinary.com/dkkf9iqnd/image/upload/v1633071697/community/Home_Page.png'
          alt='Orca Home Page'
        />
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout className={styles.homePage} title={siteConfig.title} description={siteConfig.description}>
      <HomePageWelcome />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
