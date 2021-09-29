import React, { useState } from 'react';
import styles from './Npx.module.css';
import { AiOutlineCopy, AiOutlineCheck } from 'react-icons/ai';

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

      {copied ? <AiOutlineCheck /> : <AiOutlineCopy className={styles.icon} onClick={copy} title="Copy" />}
    </div>
  );
};

export default Npx;
