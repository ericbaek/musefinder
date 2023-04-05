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
    <div className={styles.Picture}{...props}>
      <style jsx>{`
        {styles.Picture} {
          background-image: url("${Image}");
          background-size : cover;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
    
  );
};

export default Picture;