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
      <div className={`Alert ${styles.Alert}`} {...props}>
        <div className={styles.Left}>
          <div className={`${styles.LeftIcon} ${['V_LeftIcon_', vlefticon].join('')}`}>{LeftIcon}</div>
          <div className={styles.Title}>
            {Title.split('<br/>').map((txt:string) => (
            <div>
              {txt}<br/>
            </div>
            ))}
          </div>
        </div>
        <div className={`${styles.Paragraph} ${['V_Paragraph_', vparagraph].join('')}`}>{Paragraph}</div>
      <style jsx>{`
          .V_LeftIcon_False,
          .V_Paragraph_False {
            display: none;
          }

          .GroupAlert .${Alert} {
            border-radius: 0;
          }

          .GroupAlert .${Alert}:nth-last-child(-n+1):first-child {
            border-radius: var(--radius-system);
          }
      
          .GroupAlert .${Alert}:first-of-type {
              border-radius: var(--radius-box) var(--radius-box) 0 0;
          }
      
          .GroupAlert .${Alert}:last-of-type {
              border-radius: 0 0 var(--radius-box) var(--radius-box);
          }
      `}</style>
      </div>
  );
};

export default Alert;