import React from 'react';
import styles from './LargeTitle.module.css';

interface LargeTitleProps {
  Title: string;
  onClick?: () => void;
}

export const LargeTitle = ({
  Title, ...props
}: LargeTitleProps) => {
  return (
    <div className={styles.Title} {...props}>{Title}</div>
  );
};

export default LargeTitle;