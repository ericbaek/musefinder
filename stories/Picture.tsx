import React from 'react';
import styles from './Picture.module.css';

interface PictureProps {
  Image: string;
  onClick?: () => void;
}

export const Picture = ({
  Image, ...props
}: PictureProps) => {
  return (
    <>
      <img className={styles.Picture} src={Image} {...props}/>
    </>
  );
};

export default Picture;