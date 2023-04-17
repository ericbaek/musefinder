import React from 'react';
import styles from './AccountIcon.module.css';

interface PictureProps {
  Image: string;
  onClick?: () => void;
}

export const AccountIcon = ({
  Image, ...props
}: PictureProps) => {
  return (
    <>
      <div className={styles.AccountIcon} {...props}/>
      <style jsx>{`
        .${styles.AccountIcon} {
          background-image: url('${Image}');
        }
      `}</style>
    </>
  );
};

export default AccountIcon;