import React from 'react';
import styles from './Sort.module.css';

interface SortProps {
  Value: string[],
  Title: string[],
  onClick?: () => void;
}

export const Sort: React.FC<SortProps> = ({
  Value, Title, ...props
}: SortProps) => {
  return (
      <div className={styles.Sort} {...props}>
        <select>
          {Value.map((Value, index) => (
          <option key={index} value={Value}>{Title[index]}</option>
          ))}
        </select>
      </div>
  );
};

export default Sort;