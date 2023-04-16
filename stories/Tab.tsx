import React from 'react';
import styles from './Tab.module.css';
import Link from 'next/link';

interface TabProps {
  Href: string;
  Title: string;
  onClick?: () => void;
}

export const Tab = ({
  Href, Title, ...props
}: TabProps) => {
  return (
    <Link href={Href} passHref>
      <div className={styles.Tab} {...props}>
        <div className={styles.Title}>{Title}</div>
      </div>
    </Link>
  );
};

export default Tab;