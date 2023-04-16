import React from 'react';
import styles from './AccountIcon.module.css';
import Link from 'next/link';

interface PictureProps {
  Href: string;
  Image: string;
  onClick?: () => void;
}

export const AccountIcon = ({
  Href, Image, ...props
}: PictureProps) => {
  return (
    <Link href={ Href } passHref>
      <div className={styles.AccountIcon} {...props}/>
      <style jsx>{`
        .${styles.AccountIcon} {
          background-image: url('${Image}');
        }
      `}</style>
    </Link>
  );
};

export default AccountIcon;