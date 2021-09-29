import React from 'react';
import Link from '@docusaurus/Link';
import styles from './Footer.module.css';
import { AiOutlineArrowsAlt, AiOutlineSwitcher, AiOutlineGithub } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <AiOutlineSwitcher />
        <Link to="/docs/getting-started/installation">Documentation</Link>
      </div>

      <div>
        <AiOutlineGithub />
        <Link href="https://github.com/dimimikadze/orca">Github</Link>
      </div>

      <div>
        <AiOutlineArrowsAlt />
        <Link href="https://community.getorca.org">Demo</Link>
      </div>
    </div>
  );
}
