import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  Primary: boolean;
  Title?: string;
  Paragraph?: string;
  Paragraph2_True?: boolean;
  Paragraph2: string;
  RadiusAll?: boolean;
  Accent?: boolean;
  AccentBG?: 'var(--color-dynamic-muse)' | 'var(--color-dynamic-water)' | 'var(--color-dynamic-sand)' | 'var(--color-dynamic-coral)';
  AccentText: string;
  /**
   * box-color 외 선택 시 className="colorness-100" 추가
   */
  BG?: 'var(--box-color)' | 'var(--color-dynamic-muse)' | 'var(--color-dynamic-water)' | 'var(--color-dynamic-sand)' | 'var(--color-dynamic-coral)';
  onClick?: () => void;
}

export const Card = ({
  Primary, Title, Paragraph, Paragraph2, Paragraph2_True, RadiusAll, Accent, AccentBG, AccentText, BG, ...props
}: CardProps) => {
  const primary = Primary? 'Primary' : 'Secondary';
  const accent = Accent? 'True' : 'False';
  const paragraph2 = Paragraph2_True? 'True' : 'False';
  const radiusall = RadiusAll? 'True' : 'False';
  return (
    <div className={`${styles.Card} ${['Card', primary].join('')} ${['RadiusAll', radiusall].join('')}`} {...props}>
      <div className={styles.Left}>
        <div className={styles.Title}>{ Title }</div>
        <div className={styles.Paragraph}>{ Paragraph }</div>
        <div className={`${styles.Paragraph2} ${['Paragraph2', paragraph2].join('')}`}>{ Paragraph2 }</div>
      </div>
      <div className={`${styles.AccentColor} ${['Accent', accent].join('')}`}>
        <div className={styles.AccentText}>{ AccentText }</div>
      </div>
      <style jsx>{`
        .${styles.AccentColor} {
          background: ${AccentBG};
        }
        .CardSecondary {
          background: ${BG};
          color: var(--colorless-100);
        }
        .Paragraph2False {
          display: none;
        }
        .RadiusAllTrue {
          border-radius: var(--radius-system);
        }
        .AccentFalse {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Card;