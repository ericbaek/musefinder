import React from 'react';
import styles from './PictureMenu.module.css';

interface PictureProps {
  Image: string;
  onClick?: () => void;
}

export const PictureMenu = ({
  Image, ...props
}: PictureProps) => {
  return (
      <div className={styles.PictureMenu} {...props}>
        <style jsx>{`
          .${styles.PictureMenu} {
            background-image: url('${Image}');
          }
        `}</style>
      </div>
  );
};

export default PictureMenu;