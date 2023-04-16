import React from 'react';
import styles from './Theme.module.css';

interface ThemeProps {
  Icon: string;
  onClick?: () => void;
}

export const Theme = ({
  Icon, ...props
}: ThemeProps) => {
  return (
    <div className={styles.Theme} {...props}>
      <div className={`Icon ${styles.Icon}`}>{ Icon }</div>
    </div>
  );
};

export default Theme;