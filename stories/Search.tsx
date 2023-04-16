import React, { useRef, useState } from 'react';
import styles from './Search.module.css';

interface SearchProps {
  V_RightIcon: boolean;
  LeftIcon: string;
  Placeholder: string;
  RightIcon: string;
  onClick?: () => void;
}

export const Search = ({
  V_RightIcon, LeftIcon, Placeholder, RightIcon, ...props
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

  const vrighticon = V_RightIcon? 'True' : 'False';
  return (
    <div className={`${styles.Search} ${isFocused ? 'Search_Focus' : ''} ${['V_RightIcon2_', vrighticon].join('')}`} onFocus={handleFocus} onBlur={handleBlur} {...props}>
      <div className={styles.Left}>
        <div className={styles.LeftIcon} onClick={handleIconClick}>{LeftIcon}</div>
        <input ref={inputRef} placeholder={Placeholder}/>
      </div>
      <div className={`${styles.RightIcon} ${['V_RightIcon_', vrighticon].join('')}`}>{RightIcon}</div>
      <style jsx>{`
          .V_RightIcon_False {
            display: none;
          }

          .V_RightIcon2_False {
            padding-right: calc(var(--padding-activity) / 2)
          }

          .Search_Focus {
            background: var(--desktop-search-hover-color);
          }

          @media (max-width: 1279.98px) {
              .Search_Focus {
                  background: var(--box-hover-color) !important;
              }
          }
      `}
      </style>
    </div>
  );
};

export default Search;
