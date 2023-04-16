import React from 'react';
import styles from './Card.module.css';
import Link from 'next/link';

interface CardProps {
  Href: string;
  V_LeftIcon: boolean;
  LeftIcon: string;
  LeftIconBG: string;
  V_LeftIconBG: boolean;
  LeftIconImage: string;
  Title: string;
  V_Paragraph: boolean;
  Paragraph: string;
  V_Paragraph2: boolean;
  Paragraph2: string;
  V_RightIcon: boolean;
  RightIcon: string;
  V_Accent: boolean;
  AccentBG: string;
  AccentText: string;
  V_BG: boolean;
  BG: string;
  onClick?: () => void;
}

export const Card = ({
  Href, V_LeftIcon, LeftIcon, LeftIconBG, V_LeftIconBG, LeftIconImage, Title, V_Paragraph, Paragraph,
  V_Paragraph2, Paragraph2, V_RightIcon, RightIcon, V_Accent, AccentBG, AccentText, V_BG, BG,
  ...props
}: CardProps) => {

  const vbg = V_BG? 'True' : 'False';
  const vlefticonbg = V_LeftIconBG? 'True' : 'False';
  const vlefticon = V_LeftIcon? 'True' : 'False';
  const vparagraph = V_Paragraph? 'True' : 'False';
  const vparagraph2 = V_Paragraph2? 'True' : 'False';
  const vrighticon = V_RightIcon? 'True' : 'False';
  const vaccent = V_Accent? 'True' : 'False';
  return (

    <Link href={ Href } passHref>
      <div className={`${styles.Card} ${['V_BG_', vbg].join('')}`} {...props}>
        
        <div className={styles.Left}>

          <div className={`${styles.LeftIcon} ${['V_LeftIcon_', vlefticon].join('')} ${['V_LeftIconBG_', vlefticonbg].join('')} LeftIconImage`}>{LeftIcon}</div>

          <div className={styles.GroupText}>

            <div className={styles.GroupTitle}>
              <div className={styles.Title}>{Title}</div>
              <div className={`${styles.Paragraph} ${['V_Paragraph_', vparagraph].join('')}`}>{Paragraph}</div>
            </div>

            <div className={`${styles.Paragraph2} ${['V_Paragraph2_', vparagraph2].join('')}`}>{Paragraph2}</div>

          </div>

        </div>

        <div className={`${styles.Accent} ${['V_Accent_', vaccent].join('')}`}>{AccentText}</div>
        <div className={`${styles.RightIcon} ${['V_RightIcon_', vrighticon].join('')}`}>{RightIcon}</div>

        <style jsx>{`
          .V_LeftIcon_False,
          .V_Paragraph_False,
          .V_Paragraph2_False,
          .V_RightIcon_False,
          .V_Accent_False {
            display: none;
          }

          .V_BG_True {
            background: ${BG} !important;
          }

          .V_LeftIconBG_True {
            background: ${LeftIconBG} !important;
          }
          
          .V_Accent_True {
            background: ${AccentBG};
          }

          .LeftIconImage {
            background-image: url('${LeftIconImage}');
          }
        `}</style>

      </div>
    </Link>

  );
};

export default Card;