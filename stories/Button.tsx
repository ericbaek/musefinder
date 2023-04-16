import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  Icon: string;
  Title: string;
  onClick?: () => void;
}

export const Button = ({
  Icon, Title, ...props
}: ButtonProps) => {
  return (
    <div className={styles.Button} {...props}>
      <div className={`Icon ${styles.Icon}`}>{ Icon }</div>
      <div className={styles.Title}>{ Title }</div>
    </div>
  );
};

export default Button;