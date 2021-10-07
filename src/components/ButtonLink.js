import React from 'react';
import Link from '@docusaurus/Link';
import styles from './ButtonLink.module.css';

const colors = {
  primary: '#031715',
  secondary: '#ffffff',
};

export default function ButtonLink({ isInternalLink, href, bgColor, color, leftRadius, children }) {
  return isInternalLink ? (
    <Link
      className={styles.link}
      to={href}
      style={{
        backgroundColor: `${colors[bgColor]}`,
        color: `${colors[color]}`,
        borderRadius: `${leftRadius ? `40px 40px 40px 0px` : `40px 40px 0px 40px`}`,
      }}
    >
      {children}
    </Link>
  ) : (
    <a
      className={styles.link}
      href={href}
      target="__blank"
      style={{
        backgroundColor: `${colors[bgColor]}`,
        color: `${colors[color]}`,
        borderRadius: `${leftRadius ? `40px 40px 40px 0px` : `40px 40px 0px 40px`}`,
      }}
    >
      {children}
    </a>
  );
}
