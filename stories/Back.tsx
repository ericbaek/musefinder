import React from 'react';
import styles from './Back.module.css';
import Icon from './Icon';

interface BackProps {
  onClick?: () => void;
}

export const Back = ({
  ...props
}: BackProps) => {
  return (
      <div className={styles.Back} {...props}> {/* 백버튼 */}
          <Icon Icon=''/>
      </div>
  );
};

export default Back;