import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './ButtonLinks.module.css';

export default function ButtonLinks({ className }) {
  return (
    <div className={className}>
      <Link className={clsx(styles.link, styles.linkBlack)} href="/docs/getting-started/installation">
        Get started
      </Link>
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      {'\u00A0'}
      <a
        className={clsx(styles.link, styles.linkWhite)}
        href="https://community.getorca.org"
        target="__blank"
        rel="noreferrer noopener"
      >
        Try demo
      </a>
    </div>
  );
}
