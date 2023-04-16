import React from 'react';
import { useRouter } from 'next/router';
import styles from './TabBar.module.css';
import Link from 'next/link';

interface TabBarProps {
  Href: string[],
  Icon: string[],
  Title: string[],
  onClick?: () => void;
}

export const TabBar: React.FC<TabBarProps> = ({
  Href, Icon, Title, ...props
}: TabBarProps) => {
  const router = useRouter();
  return (
    <div className={styles.TabBar} {...props}>
      {Icon.map((icon, index) => (
      <div key={index} className={styles.GroupItem}>
        <Link href={ Href[index] } passHref>
            <div className={`${styles.Item} ${router.pathname === Href[index] ? 'Item_Active' : undefined}`}>
              <div className={styles.Icon}>{ icon }</div>
              <div className={styles.Title}>{ Title[index] }</div>
            </div>
        </Link>
      </div>
      ))}
      <style jsx>{`
        .Item_Active {
          opacity: 1;
        }

        .Item_Active .${styles.Icon} {
          font-feature-settings: "ss09" on;
        }
      `}</style>
    </div>
  );
};

export default TabBar;