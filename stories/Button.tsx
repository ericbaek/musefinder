import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  V_Icon: boolean;
  Icon: string;
  Title: string;
  onClick?: () => void;
}

export const Button = ({
  V_Icon, Icon, Title, ...props
}: ButtonProps) => {
  const vlefticon = V_Icon? 'True' : 'False';
  return (
      <div className={styles.Button} {...props}>
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

export default Button;