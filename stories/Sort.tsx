import React from 'react';
import styles from './Alert.module.css';

interface AlertProps {
  V_LeftIcon: boolean;
  LeftIcon: string;
  Title: string;
  V_Paragraph: boolean;
  Paragraph: string;
  onClick?: () => void;
}

export const Alert = ({
  V_LeftIcon, LeftIcon, Title, Paragraph, V_Paragraph, ...props
}: AlertProps) => {
  const vlefticon = V_LeftIcon? 'True' : 'False';
  const vparagraph = V_Paragraph? 'True' : 'False';
  return (
      <div className={styles.Alert} {...props}>
        <div className={styles.Left}>
          <div className={`${styles.LeftIcon} ${['V_LeftIcon_', vlefticon].join('')}`}>{LeftIcon}</div>
          <div className={styles.Title}>{Title}</div>
        </div>
        <div className={`${styles.Paragraph} ${['V_Paragraph_', vparagraph].join('')}`}>{Paragraph}</div>
      <style jsx>{`
          .V_LeftIcon_False,
          .V_Paragraph_False {
            display: none;
          }
      `}</style>
      </div>
  );
};

export default Alert;