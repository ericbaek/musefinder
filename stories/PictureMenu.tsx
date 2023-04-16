import React from 'react';
import styles from './PictureMenu.module.css';
import Link from 'next/link';

interface PictureProps {
  Href: string;
  Image: string;
  onClick?: () => void;
}

export const PictureMenu = ({
  Href, Image, ...props
}: PictureProps) => {
  return (
    <Link href={Href} passHref>
      <div className={styles.PictureMenu} {...props}/>
      <style jsx>{`
        .${styles.PictureMenu} {
          background-image: url('${Image}');
        }
      `}</style>
    </Link>
  );
};

export default PictureMenu;