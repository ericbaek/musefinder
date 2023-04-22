import React from 'react';
import styles from './Search.module.css';

interface SearchResultProps {
  Icon: string;
  Title: string;
  onClick?: () => void;
}

export const SearchResult = ({
  Icon, Title, ...props
}: SearchResultProps) => {
  return (
    <div className={styles.Result}>
      <div className={styles.Left}>
          <div className={styles.LeftIcon}>{Icon}</div>
          <div className={styles.Title}>{Title}</div>
      </div>
  </div>
  );
};

export default SearchResult;