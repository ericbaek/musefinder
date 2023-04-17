import React, { useState } from 'react';
import styles from './Filter.module.css';

interface FilterProps {
  Href: string;
  Title: string;
  onClick: (title: string) => void;
}

export const Filter = ({
  Href, Title, onClick, ...props
}: FilterProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(Title);
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.Filter} ${isActive ? 'Filter_Active' : ''}`} {...props} onClick={handleClick}>{Title}
    <style jsx>{`
      .Filter_Active {
        background: var(--box-active-color);
      }
    `}</style></div>
    
  );
};

export default Filter;