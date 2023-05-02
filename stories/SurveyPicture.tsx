import React from 'react';
import styles from './SurveyPicture.module.css';

interface PictureProps {
  Image: string;
  Title: string;
  V_Paragraph: boolean;
  Paragraph: string;
  onClick?: () => void;
}

export const SurveyPicture = ({
  Image, Title, V_Paragraph, Paragraph, ...props
}: PictureProps) => {
  const vparagraph = V_Paragraph? 'True' : 'False';
  return (
      <div className={styles.SurveyPicture} {...props}>
        <div className={styles.Title}>{Title}</div>
        <div className={`${styles.Paragraph} ${['V_Paragraph_', vparagraph].join('')}`}>{Paragraph}</div>
        <style jsx>{`
          .${styles.SurveyPicture} {
            background-image: url('${Image}');
          }

          .V_Paragraph_False {
            display: none;
          }
        `}</style>
      </div>
  );
};

export default SurveyPicture;