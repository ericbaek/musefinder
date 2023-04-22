import React from 'react';
import styles from './Icon.module.css';

export const HideActivity = () => {

  return (
    <div className='Hide'>
        <div className={styles.Icon}>HideActivity</div>
    <style jsx>{`
        .Hide {
          width: min-content;
          height: min-content;
            border-radius: var(--radius-box);
            background: var(--box-bg-color);
            padding: calc(var(--padding-activity) / 3);
            cursor: pointer;
            transition: var(--transition-bg);
            z-index: 1000;
            box-shadow: var(--shadow-color);
        }

          .Hide:hover {
            background: var(--box-hover-color);
          }
    `}</style>
    </div>
    
  );
};

export default HideActivity;