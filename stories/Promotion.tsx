import React from 'react';
import styles from './Promotion.module.css';
import Link from 'next/link';

interface PictureProps {
  Href: string;
  Title: string;
  V_Paragraph: boolean;
  Paragraph: string;
  Distribute: 'Start' | 'Center' | 'End' | 'Space_Between';
  Image: string;
  onClick?: () => void;
}

export const Promotion = ({
  Href, Title, V_Paragraph, Paragraph, Distribute, Image, ...props
}: PictureProps) => {
  const vparagraph = V_Paragraph? 'True' : 'False';
  return (
    <Link href={Href} passHref>
      <div className={`${styles.Promotion} ${['Picture_', Distribute].join('')}`} {...props}>
        <div className={`${styles.Paragraph} ${['V_Paragraph_', vparagraph].join('')}`}>{Paragraph}</div>
        <div className={styles.Title}>{Title}</div>
      </div>
      <style jsx>{`
        .${styles.Promotion} {
          background-image: url('${Image}');
        }

        .Picture_Start {
          justify-content: flex-start;
        }
        
        .Picture_Center {
          justify-content: center;
        }

        .Picture_End {
          justify-content: flex-end;
        }

        .Picture_Space_Between {
          justify-content: space-between;
        }
      `}</style>
    </Link>
  );
};

export default Promotion;