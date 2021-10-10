import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/Features';
import ButtonLinks from '../components/ButtonLinks';
import Npx from '../components/Npx';
import Announcement from '../components/Announcement';
import { Cookies, getCookie } from '../utils';
import { isServer } from '../constants';

function HomePageWelcome() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className={clsx('hero__title heading ', styles.title)}>{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle text', styles.subtitle)}>{siteConfig.tagline}</p>
          <ButtonLinks className={styles.buttons} />
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
  const announcementDisabled = getCookie(Cookies.ANNOUNCEMENT_DISABLED);
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(announcementDisabled !== 'true');
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      {isAnnouncementOpen && <Announcement setIsAnnouncementOpen={setIsAnnouncementOpen} />}

      <Layout className={styles.homePage} title={siteConfig.title} description={siteConfig.description}>
        <div className={styles.container}>
          <div className={styles.topLeftOverlay}></div>
          <div className={styles.topRightOverlay}></div>
          <HomePageWelcome />
          <div className={styles.homePageFeatures}>
            <HomepageFeatures />
            <div className={styles.bottomLeftOverlay}></div>
            <div className={styles.bottomRightOverlay}></div>
          </div>
        </div>
      </Layout>
    </>
  );
}
