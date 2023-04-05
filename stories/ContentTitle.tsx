import React from 'react';
import styles from './ContentTitle.module.css';

interface ContentTitleProps {
  Title: string;
  Paragraph: string;
  onClick?: () => void;
}

export const ContentTitle = ({
  Title, Paragraph, ...props
}: ContentTitleProps) => {
  return (
    <div className={styles.ContentTitle} {...props}>
      <div className={styles.Title}>{ Title }</div>
      <div className={styles.Paragraph}>{ Paragraph }</div>
    </div>
  );
};

export default ContentTitle;