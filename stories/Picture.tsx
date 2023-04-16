import React from 'react';
import styles from './Picture.module.css';

interface PictureProps {
  Href: string;
  Image: string;
  onClick?: () => void;
}

export const Picture = ({
  Href, Image, ...props
}: PictureProps) => {
  return (
    <>
      <a href={Href}>
        <img className={styles.Picture} src={Image} {...props}/>
      </a>
    </>
  );
};

export default Picture;