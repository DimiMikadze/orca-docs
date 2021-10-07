import React, { useState } from 'react';
import styles from './Npx.module.css';
import clsx from 'clsx';

const COMMAND = 'npx create-orca-app my-app';

const Npx = () => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(COMMAND);
    setCopied(true);
  };

  return (
    <div className={styles.npx}>
      <div>{COMMAND}</div>

      {copied ? (
        <button className={clsx(styles.button, styles.buttonCheck)}>
          <img src="/img/check.svg" al="Check Icon" />
        </button>
      ) : (
        <button className={styles.button} onClick={copy} title="Copy">
          <img src="/img/copy.svg" alt="Copy Icon" />
        </button>
      )}
    </div>
  );
};

export default Npx;
