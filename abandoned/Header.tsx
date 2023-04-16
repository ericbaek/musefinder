import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import Theme from './Theme';
import Link from 'next/link';

interface HeaderProps {
  ServiceLogo: string;
  Title: string[],
  Goto: string[],
  Icon: string,
  GotoIcon: string,
  onClick?: () => void;
}

export const Header = ({
  ServiceLogo, Title, Goto, Icon, GotoIcon, ...props
}: HeaderProps) => {

  useEffect(() => {
    function handleScroll() {
      const scroll = document.documentElement.scrollTop;
      const header = document.querySelector('.Header');

      if (scroll > 24) {
        header?.classList.add('Fix');
      } else {
        header?.classList.remove('Fix');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = useRouter();

  return (
    <>
      <div className={styles.SemiHeader}/>
      <div className={`${styles.Header} Header`} {...props}>
        <div className={styles.Container}>
          <div className={styles.HeaderLeft}>
            <Link href='/'>
              <div className={`Icon ${styles.ServiceLogo} ${ServiceLogo}`}></div>
            </Link>
          </div>
          <div className={styles.HeaderMid}>
            {Title.map((title, index) => (
            <Link key={index} href={ Goto[index] } passHref>
              <div className={`${styles.Title} ${router.pathname === Goto[index] ? 'active' : undefined}`}>{ title }</div>
            </Link>
            ))}
          </div>
          <div className={styles.HeaderRight}>
            <Link href={ GotoIcon }>
              <div className={`Icon ${styles.Icon}`}>{ Icon }</div>
            </Link>
            <Theme/>
            <Link href='/menu'>
              <div className={`Icon ${styles.Icon}`}></div>
            </Link>
          </div>
        </div>
        <style jsx>{`
          .Fix {
            top: 0;
            border-bottom: 1px solid var(--border2-color);
          }

          .active {
            font-weight: 600;
            opacity: 1;
          }
        `}</style>
      </div>
    </>
  );
};

export default Header;