import React from 'react';
import styles from './Textarea.module.css';

interface TextareaProps {
  Placeholder: string;
  onClick?: () => void;
}

export const Textarea = ({
  Placeholder, ...props
}: TextareaProps) => {
  return (
      <div className={styles.Textarea} {...props}>
        <textarea/>
      </div>
  );
};

export default Textarea;