import React, { useRef, useState } from 'react';
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

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`${styles.Search} ${isFocused ? 'focus' : ''}`} onFocus={handleFocus} onBlur={handleBlur} {...props}>
      <div className={styles.Left}>
        <div className={`Icon ${styles.Icon}`} onClick={handleIconClick}>
          { Icon }
        </div>
        <input ref={inputRef} placeholder={ Placeholder }/>
      </div>
      <div className={`Icon ${styles.Icon} ${styles.IconFilter}`}>
        { IconFilter }
      </div>
      <style jsx>{`
          .focus {
            background: var(--desktop-search-hover-color);
          }

          @media (max-width: 1279.98px) {
              .focus {
                  background: var(--box-hover-color) !important;
              }
          }
      `}
      </style>
    </div>
  );
};

export default Search;
