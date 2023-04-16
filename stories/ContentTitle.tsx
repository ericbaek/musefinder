import React from 'react';
import styles from './ContentTitle.module.css';
import Link from 'next/link';

interface ContentTitleProps {
  Href: string;
  Title: string;
  V_Paragraph: boolean;
  Paragraph: string;
  onClick?: () => void;
}

export const ContentTitle = ({
  Href, Title, V_Paragraph, Paragraph, ...props
}: ContentTitleProps) => {
  const vparagraph = V_Paragraph? 'True' : 'False';
  return (
    <div className={styles.ContentTitle} {...props}>
      <div className={styles.Title}>{Title}</div>
      <Link href={Href} passHref>
        <div className={`${styles.Paragraph} ${['V_Paragraph_', vparagraph].join('')}`}>{Paragraph}</div>
      </Link>
      <style jsx>{`
          .V_Paragraph_False {
            display: none;
          }
      `}</style>
    </div>
  );
};

export default ContentTitle;