import React from 'react';
import styles from './Alert.module.css';

interface AlertProps {
  Icon: string;
  Title: string;
  Paragraph: string;
  onClick?: () => void;
}

export const Alert = ({
  Icon, Title, Paragraph, ...props
}: AlertProps) => {
  return (
    <div className={styles.Alert} {...props}>
      <div className={styles.Left}>
        <div className={`Icon ${styles.Icon}`}>{ Icon }</div>
        <div className={styles.Title}>{ Title }</div>
      </div>
      <div className={styles.Paragraph}>{ Paragraph }</div>
    </div>
  );
};

export default Alert;