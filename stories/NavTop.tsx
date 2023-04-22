import React from 'react';
import styles from './NavTop.module.css';

interface NavTopProps {
  V_Icon: boolean;
  Icon: string;
  Title: string;
  onClick?: () => void;
}

export const NavTop = ({
  V_Icon, Icon, Title, ...props
}: NavTopProps) => {
  const vlefticon = V_Icon? 'True' : 'False';
  return (
      <div className={styles.NavTop} {...props}>
        <div className={`${styles.Icon} ${['V_Icon_', vlefticon].join('')}`}>{Icon}</div>
        <div className={styles.Title}>{Title}</div>
        <style jsx>{`
          .V_Icon_False {
            display: none;
          }
      `}</style>
      </div>
  );
};

export default NavTop;