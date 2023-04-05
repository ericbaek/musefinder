import React from 'react';
import styles from './FilterSet.module.css';



interface FilterSetProps {
  Title: string;
}

export const FilterSet = ({
  Title, ...props
}: FilterSetProps) => {

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    props.onClick(Title);
  };
  
  return (
    <div className={styles.FilterSet} {...props} onClick={handleClick}>{ Title }</div>
  );
};

export default FilterSet;