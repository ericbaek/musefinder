import React from 'react';
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
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(Title);
  };

  return (
    <div className={styles.FilterSet} {...props} onClick={handleClick}>{Title}</div>
  );
};

export default FilterSet;