import React from 'react';
import styles from './Exit.module.css';

interface ExitProps {
  onClick?: () => void;
}

export const Exit = ({
  ...props
}: ExitProps) => {
  return (
      <div className={styles.Exit} {...props}></div>
  );
};

export default Exit;