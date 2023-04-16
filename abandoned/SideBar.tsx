import React from 'react';
import { useRouter } from 'next/router';
import styles from './SideBar.module.css';
import LargeTitle from './LargeTitle';
import Link from 'next/link';

interface SideBarProps {
  Sub: string;
  Icon: string[];
  Title: string[];
  Goto: string[];
  SubIcon: string[];
  SubTitle: string[];
  SubGoto: string[];
  onClick?: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({
  Sub, Icon, Title, Goto, SubIcon, SubTitle, SubGoto, ...props
}: SideBarProps) => {
  const router = useRouter();
  return (
    <div className={styles.SideBar} {...props}>
      <div className={styles.Top}>
        <LargeTitle Title='디벨로이드' />
        <div className={styles.GroupItem}>
          {Icon.map((icon, index) => (
            <Link key={icon} href={ Goto[index] } passHref>
              <div className={`${styles.Item} ${router.pathname === Goto[index] ? 'active' : undefined}`}>
                <div className={`Icon ${styles.Icon}`}>{ icon }</div>
                <div className={styles.Title}>{ Title[index] }</div>
              </div>
            </Link>
          ))}
          <div className={styles.SubTitle}>{ Sub }</div>
          <div className={styles.GroupItem}>
            {SubIcon.map((subicon, index) => (
              <Link key={subicon} href={ SubGoto[index] } passHref>
                <div className={`${styles.Item} ${router.pathname === SubGoto[index] ? 'active' : undefined}`}>
                <div className={`Icon ${styles.Icon}`}>{ subicon }</div>
                <div className={styles.Title}>{ SubTitle[index] }</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .active {
          font-feature-settings: "ss09" on;
          background: var(--item-active-color);
          opacity: 1;
        }

        .active .${styles.Icon} {
          font-feature-settings: "ss09" on;
        }
        `}</style>
    </div>
  );
};

export default SideBar;