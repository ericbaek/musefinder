import React from 'react';
import styles from './Search.module.css';

interface SearchProps {
  LeftIcon: string;
  Input: string;
  RightIcon: string;
  onClick?: () => void;
}

export const Search = ({
  LeftIcon, Input, RightIcon, ...props
}: SearchProps) => {

  return (
    <div className={styles.Search} {...props}>
      <div className={styles.Left}>
        <div className={styles.LeftIcon}>{LeftIcon}</div>
        <div className={styles.Input}>{Input}</div>
      </div>
      <div className={styles.RightIcon}>{RightIcon}</div>
    </div>
  );
};

export default Search;
