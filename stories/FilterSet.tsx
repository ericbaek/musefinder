import React, { useState } from 'react';
import styles from './FilterSet.module.css';

interface FilterSetProps {
  Title: string;
  onClick: (title: string) => void;
}

export const FilterSet = ({
  Title,
  onClick,
  ...props
}: FilterSetProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(Title);
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.FilterSet} ${isActive ? 'active' : ''}`} {...props} onClick={handleClick}>{Title}
    <style jsx>{`
      .active {
        background: var(--box-active-color);
      }
    `}</style></div>
    
  );
};

export default FilterSet;