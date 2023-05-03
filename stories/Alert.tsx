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
  const TitleGroup = ({title}:{title:string}) => {
    return (
      <>
          {title.split("\n").map((txt:string) => (
          <div className={styles.Title}>
            {txt}
            <br/>
          </div>
          ))}
      </>
    );
  };
  return (
      <div className={styles.Alert} {...props}>
        <div className={styles.Left}>
          <div className={`${styles.LeftIcon} ${['V_LeftIcon_', vlefticon].join('')}`}>{LeftIcon}</div>
          <TitleGroup title={Title}/>
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