import React from 'react';
import styles from './Icon.module.css';
import Link from 'next/link';

interface ButtonProps {
  Href: string;
  Icon: string;
  onClick?: () => void;
}

export const Icon = ({
  Href, Icon, ...props
}: ButtonProps) => {
  return (
    <Link href={Href} passHref>
      <div className={styles.Icon} {...props}>{Icon}</div>
    </Link>
  );
};

export default Icon;