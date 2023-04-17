import React from 'react';
import styles from './Icon.module.css';

interface ButtonProps {
  Icon: string;
  onClick?: () => void;
}

export const Icon = ({
  Icon, ...props
}: ButtonProps) => {
  return (
    <div className={styles.Icon} {...props}>{Icon}</div>
  );
};

export default Icon;