import React from 'react';
import styles from './SystemNotification.module.css';

interface SystemNotificationProps {
  V_LeftIcon: boolean;
  LeftIcon: string;
  Title: string;
  onClick?: () => void;
}


export const SystemNotification = ({
  V_LeftIcon, LeftIcon, Title, ...props
}: SystemNotificationProps) => {
  const vlefticon = V_LeftIcon? 'True' : 'False';
  return (
      <div className={`SystemNotification ${styles.SystemNotification}`} {...props}>
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
      <style jsx>{`
          .V_LeftIcon_False,
          .V_Paragraph_False {
            display: none;
          }
      `}</style>
      </div>
  );
};

export default SystemNotification;