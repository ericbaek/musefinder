import React, { useRef, useState } from 'react';
import styles from './Search.module.css';

interface SearchProps {
  LeftIcon: string;
  Placeholder: string;
  onClick?: () => void;
}

export const Search = ({
  LeftIcon, Placeholder, ...props
}: SearchProps) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleLeftIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [rightIcon, setRightIcon] = useState(false);

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setInputValue(value);
    setRightIcon(value.length > 0);
  };

  const handleRightIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setInputValue("");
    setRightIcon(false);
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  
  return (
    <div className={`${styles.Search} ${isFocused ? 'Search_Focus' : ''}`} onFocus={handleFocus} onBlur={handleBlur} {...props}>
      <div className={styles.Left}>
        <div className={styles.LeftIcon} onClick={handleLeftIconClick}>{LeftIcon}</div>
        <input type="text" value={inputValue} onChange={handleInputChange} ref={inputRef} placeholder={Placeholder} />
        
      </div>
      {rightIcon && <div className={styles.RightIcon} onClick={handleRightIconClick}></div>}
      <style jsx>{`
          .Search_Focus {
            background: var(--box-hover-color);
          }
      `}
      </style>
    </div>
  );
};

export default Search;
