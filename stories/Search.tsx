import React from 'react';
import styles from './Search.module.css';

interface SearchProps {
  Icon: string;
  Placeholder: string;
  IconFilter: string;
  onClick?: () => void;
}

export const Search = ({
  Icon, Placeholder, IconFilter, ...props
}: SearchProps) => {
  return (
    <div className={styles.Search} {...props}>
      <div className={styles.Left}>
        <div className={`Icon ${styles.Icon}`}>{ Icon }</div>
        <input placeholder={ Placeholder }/>
      </div>
      <div className={`Icon ${styles.Icon} ${styles.IconFilter}`}>{ IconFilter }</div>
    </div>
  );
};

export default Search;