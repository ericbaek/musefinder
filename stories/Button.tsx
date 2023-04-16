import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

interface ButtonProps {
  Href: string;
  V_Icon: boolean;
  Icon: string;
  Title: string;
  onClick?: () => void;
}

export const Button = ({
  Href, V_Icon, Icon, Title, ...props
}: ButtonProps) => {
  const vlefticon = V_Icon? 'True' : 'False';
  return (
    <Link href={Href} passHref>
      <div className={styles.Button} {...props}>
        <div className={`${styles.Icon} ${['V_Icon_', vlefticon].join('')}`}>{Icon}</div>
        <div className={styles.Title}>{Title}</div>
      </div>
      <style jsx>{`
          .V_Icon_False {
            display: none;
          }
      `}</style>
    </Link>
  );
};

export default Button;