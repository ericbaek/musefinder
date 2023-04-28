import React from 'react';
import styles from './InterfaceIcon.module.css';

interface ButtonProps {
  Icon: string;
  onClick?: () => void;
}

export const InterfaceIcon = ({
  Icon, ...props
}: ButtonProps) => {
  return (
    <div className={styles.Icon} {...props}>{Icon}</div>
  );
};

export default InterfaceIcon;