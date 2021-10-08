import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Cookies, setCookie } from '../utils';
import styles from './Announcement.module.css';

const Announcement = ({ setIsAnnouncementOpen }) => {
  const onCloseClick = () => {
    console.log('clicked');
    setCookie(Cookies.ANNOUNCEMENT_DISABLED, 'true', 1);
    setIsAnnouncementOpen(false);
  };

  return (
    <BrowserOnly>
      <div className={styles.announcement}>
        <div>
          <span className={styles.starIcon}>☆</span> If you like Orca, give it a star on{' '}
          <a href="https://github.com/dimimikadze/orca" target="__blank" rel="noreferrer noopener">
            Github
          </a>{' '}
          <span className={styles.starIcon}>☆</span>
        </div>
        <div>
          <iframe
            className={styles.announcementStars}
            src="https://ghbtns.com/github-btn.html?user=dimimikadze&repo=orca&type=star&count=true"
            frameBorder="0"
            scrolling="0"
            width="104"
            height="20"
            title="GitHub"
          ></iframe>
        </div>

        <button onClick={onCloseClick}>✕</button>
      </div>
    </BrowserOnly>
  );
};

export default Announcement;
