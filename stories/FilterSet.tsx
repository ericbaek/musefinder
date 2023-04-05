import React from 'react';
import styles from './FilterSet.module.css';



interface FilterSetProps {
  Title: string;
}

export const FilterSet = ({
  Title, ...props
}: FilterSetProps) => {

  const handleClick = () => {
    {Title};
  };
  
  return (
    <div className={styles.FilterSet} {...props} onClick={ () => {handleClick();}}>{ Title }</div>
  );
};

export default FilterSet;