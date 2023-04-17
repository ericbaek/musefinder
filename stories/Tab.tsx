import React from 'react';
import styles from './Tab.module.css';

interface TabProps {
  Title: string;
  onClick?: () => void;
}

export const Tab = ({
  Title, ...props
}: TabProps) => {
  return (
      <div className={styles.Tab} {...props}>
        <div className={styles.Title}>{Title}</div>
      </div>
  );
};

export default Tab;