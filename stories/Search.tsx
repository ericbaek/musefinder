import React, { useRef } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.Search} {...props}>
      <div className={styles.Left}>
        <div className={`Icon ${styles.Icon}`} onClick={handleIconClick}>
          { Icon }
        </div>
        <input ref={inputRef} placeholder={ Placeholder }/>
      </div>
      <div className={`Icon ${styles.Icon} ${styles.IconFilter}`}>
        { IconFilter }
      </div>
    </div>
  );
};

export default Search;
